const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");
const app = express();
const readline = require("readline");
const fs = require("fs");
let instances;
let instance_names;
let api_buffers = [];
let api_buffers_last_call = [];
app.use(cors());

let port = 3000;

try {
   instances = require("./instances.json");
   if (instances.length == 0) {
      console.log("No instances found in instances.json, creating example instance...");
      fs.writeFileSync("instances.json", JSON.stringify([{name: "example instance", port: 8080, user: "exampleuser", pass: "examplepass"}], null, 4));
      process.exit();
   }
   instance_names = instances.map(elem => elem.name);

   instances.forEach(elem => {
      api_buffers.push({
         instances: [],
         balance: false,
         closed: false,
         open: false,
         profit: false
      });
      api_buffers_last_call.push(Date.now());
   });
}catch(err) {
   console.log("instances.json not found, creating file with example instance...");
   fs.writeFileSync("instances.json", JSON.stringify([{name: "example instance", port: 8080, user: "exampleuser", pass: "examplepass"}], null, 4));
   process.exit();
}

async function Get(endpoint, instance) {
   try {
      let req = await fetch(`http://localhost:${instance.port}/api/v1/${endpoint}`, {
         method: "GET",
         headers: {
            Authorization: `Basic ${Buffer.from(instance.user + ":" + instance.pass).toString("base64")}`
         }
      });
      let res = await req.json();
      if (req.status == 200) {
         return {status: "OK", res: res};
      }
      if (req.status == 401) {
         return {status: "auth_fail", res: null};
      }
   }catch(err) {
      return {status: "refused", res: null};
   }
}

async function TestInstances() {
   let allOK = true;
   console.log("Testing instance API connections...");
   for (const instance of instances) {
      let {status, res} = await Get("status", instance);
      if (status == "OK") {
         console.log(`${instance.name}: OK`);
      }
      if (status == "auth_fail") {
         console.log(`${instance.name}: Authorization failed (Is the user & pass correct?)`);
         allOK = false;
      }
      if (status == "refused") {
         console.log(`${instance.name}: Connection refused (Is the bot running?)`);
         allOK = false;
      }
   }
   return allOK;
}

app.get("/api/all", async (req, res) => {
   let instance = Number.parseInt(req.query.instance || "0");
   if (instance > instances.length) return;

   if (Date.now() - api_buffers_last_call[instance] > 5 * 1000 || !api_buffers[instance]) {
      UpdateBuffer(instance);
   }
   res.json(api_buffers[instance]);
});

let GetProfit = (amount, rate, close_fee, open_trade_value) => {
   let close_trade_before_fees = amount * rate;
   let fee = close_fee * close_trade_before_fees;
   let close_trade_after_fees = close_trade_before_fees - fee;
   let abs = close_trade_after_fees - open_trade_value;
   let pct = close_trade_after_fees / open_trade_value * 100 - 100;
   return {abs, pct};
};

async function UpdateBuffer(index) {
   api_buffers_last_call[index] = Date.now();
   
   let balance = (await Get("balance", instances[index])).res;
   let closed = (await Get("trades", instances[index])).res;
   let open = (await Get("status", instances[index])).res;
   let profit = (await Get("profit", instances[index])).res;

   if (!balance || !closed || !open || !profit) return;

   balance.currencies.sort(function(a, b) {
      if (a.est_stake < b.est_stake) return 1;
      if (a.est_stake > b.est_stake) return -1;
      return 0;
   });

   closed.trades.sort(function(a, b) {
      if (a.close_timestamp > b.close_timestamp) return 1;
      if (a.close_timestamp < b.close_timestamp) return -1;
      return 0;
   });
   
   open.sort(function(a, b) {
      if (a.open_timestamp > b.open_timestamp) return 1;
      if (a.open_timestamp < b.open_timestamp) return -1;
      return 0;
   });

   closed.trades.forEach(trade => {
      let high_profit = GetProfit(trade.amount, trade.max_rate, trade.fee_close, trade.open_trade_value);
      let low_profit = GetProfit(trade.amount, trade.min_rate, trade.fee_close, trade.open_trade_value);

      trade.min_rate_pct = low_profit.pct;
      trade.max_rate_pct = high_profit.pct;
   });

   api_buffers[index] = {
      instances: instance_names,
      balance: balance,
      open: open,
      closed: closed.trades,
      profit: profit
   };

   let startbal = balance.total - profit.profit_all_coin;
   let closed_balance = balance.total - profit.profit_all_coin + profit.profit_closed_coin;

   api_buffers[index].profit.profit_all_percent_fixed = balance.total / startbal * 100 - 100;
   api_buffers[index].profit.profit_closed_percent_fixed = closed_balance / startbal * 100 - 100;

   console.log(`${instances[index].name}: Updated buffer.`);
}

readline.emitKeypressEvents(process.stdin);
async function question(q) {
   process.stdout.write(q);
   process.stdin.setRawMode(true);
   return new Promise(resolve => process.stdin.once("keypress", (key, data) => {
      console.log(key);
      process.stdin.setRawMode(false);
      resolve(data.name);
   }));
}

app.use("/", express.static("public/"));
(async () => {
   let allOK = await TestInstances();
   if (!allOK) {
      let resp = await question("Not all instances are OK, continue? (y/n) ");
      if (resp != "y") process.exit();
   }

   for (let i = 0; i < instances.length; i++) {
      await UpdateBuffer(i);
   }

   let listener = app.listen(port, "0.0.0.0", () => {
      console.log(`Listening on port ${listener.address().port}`);
   });
})();