(this.webpackJsonpfreqtrade=this.webpackJsonpfreqtrade||[]).push([[0],{101:function(e,t,a){e.exports={close_button:"TradeDetailPanel_close_button__3GorF",graph:"TradeDetailPanel_graph__3S_eU",info_container:"TradeDetailPanel_info_container__3a3aZ"}},124:function(e,t,a){e.exports={root:"DesktopApp_root__2HpY9",outer_container:"DesktopApp_outer_container__2f9At",page_container:"DesktopApp_page_container__2vp-I"}},125:function(e,t,a){e.exports={pie_container:"BalancePanel_pie_container__13TVu",list_container:"BalancePanel_list_container__1d8jE"}},186:function(e,t,a){e.exports={container:"StatsPage_container__1qVpF"}},188:function(e,t,a){e.exports={root:"MobileApp_root__1I2ZI",outer_container:"MobileApp_outer_container__H3gVa"}},189:function(e,t,a){e.exports={container:"BalancePage_container__EO1Rx"}},191:function(e,t,a){e.exports={container:"InfoPage_container__38JEE"}},192:function(e,t,a){e.exports={container:"TradesPage_container__oDnNO"}},193:function(e,t,a){e.exports={container:"PairsPage_container__JArpT"}},204:function(e,t,a){},346:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(70),o=a.n(r),s=(a(204),a(18)),i=a(31),l=a.n(i),p=a(57),u=a(124),d=a.n(u),f=a(39),m=a(17),j=a(89),b=a(1),_=function(e){return Object(b.jsx)("div",{style:Object.assign({display:"flex",flexDirection:"column",backgroundColor:"#191919",border:"1px solid #2a2a2a",borderRadius:15,padding:10,alignItems:"center"},e.style),children:e.children})},x=a(169),h=a(170),O=function(){function e(){Object(x.a)(this,e)}return Object(h.a)(e,null,[{key:"Round",value:function(e,t){return Math.round((e+Number.EPSILON)*Math.pow(10,t))/Math.pow(10,t)}},{key:"GetPosNegColor",value:function(e){return e>0?"#3d3":e<0?"#f55":void 0}},{key:"GetPartialGradient",value:function(e,t,a){return{r:Math.round(e.r+(t.r-e.r)*a),g:Math.round(e.g+(t.g-e.g)*a),b:Math.round(e.b+(t.b-e.b)*a)}}},{key:"clone",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"Duration",value:function(e){function t(e){return e>=10?e:"0".concat(e)}var a=Math.floor(e/1e3%60),n=Math.floor(e/1e3/60%60),c=Math.floor(e/1e3/60/60%24),r=Math.floor(e/1e3/60/60/24%(365/12)),o=Math.floor(e/1e3/60/60/24/(365/12)%12),s=Math.floor(e/1e3/60/60/24/365),i="";return s>0?i="".concat(s,"y").concat(o>0?t(o)+"m":""):o>0?i="".concat(o,"m").concat(r>0?t(r)+"d":""):r>0?i="".concat(r,"d").concat(c>0?t(c)+"h":""):c>0?i="".concat(c,"h").concat(n>0?t(n)+"m":""):n>0?i="".concat(n,"m").concat(a>0?t(a)+"s":""):a>0&&(i="".concat(a,"s")),i}}]),e}(),v=a(125),g=a.n(v),y=function(e){var t=e.api,a=t.balance,n=t.closed,c=t.open,r=t.profit,o=[],s=[],i=0,l="";if(a&&n&&c&&r){a.currencies.sort((function(e,t){return e.est_stake<t.est_stake?1:e.est_stake>t.est_stake?-1:0}));var p=a.currencies.filter((function(e){return e.est_stake>.01*a.total})).length;a.currencies.forEach((function(e,t){if(t<p){var a=t/p,n=O.GetPartialGradient({r:66,g:194,b:244},{r:134,g:65,b:244},a);o.push({value:e.est_stake,color:"rgb(".concat(n.r,", ").concat(n.g,", ").concat(n.b,")")})}else t===p?o.push({value:e.est_stake,color:"#EAECEF"}):o[p-1].value+=e.est_stake})),s=a.currencies,i=a.total,l=a.stake}return Object(b.jsxs)(_,{style:e.style,children:[Object(b.jsxs)("div",{className:g.a.pie_container,children:[Object(b.jsx)(j.PieChart,{startAngle:-90,lineWidth:20,data:o}),Object(b.jsxs)("div",{className:"center_info_container",children:[Object(b.jsx)("span",{style:{position:"absolute",top:"calc(50% - 30px)",left:"50%",transform:"translateX(-50%) translateY(-50%)"},className:"secondary",children:"Total balance"}),Object(b.jsx)("span",{style:{fontSize:40,lineHeight:1},children:i.toFixed(2)}),Object(b.jsx)("span",{style:{position:"absolute",top:"calc(50% + 28px)",left:"50%",transform:"translateX(-50%) translateY(-50%)"},className:"secondary",children:l})]})]}),Object(b.jsx)("div",{className:g.a.list_container,children:s.map((function(e,t){return Object(b.jsxs)("div",{className:"entry",children:[Object(b.jsx)("div",{className:"color",style:{backgroundColor:t<o.length?o[t].color:"#EAECEF"}}),Object(b.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexGrow:1},children:[Object(b.jsx)("span",{children:e.currency}),Object(b.jsx)("span",{children:O.Round(e.balance,4)})]})]},e.currency)}))})]})},N=a(347),k=a(351),T=a(184),w=a(96),M=a(95),C=a(79),D=a(99),P=a.n(D),E=a(24),F=a.n(E);function R(e){var t,a=Date.now()-(null!==(t=e.close_timestamp)&&void 0!==t?t:e.open_timestamp),n=Math.floor(a/1e3),c=Math.floor(n/60),r=Math.floor(c/60),o=Math.floor(r/24),s=Math.floor(o/7),i=Math.floor(o/(365/12)),l=Math.floor(o/365),p="";return l>=1?p="".concat(l,"y"):i>=1?p="".concat(i,"mo"):s>=1?p="".concat(s,"w"):o>=1?p="".concat(o,"d"):r>=1?p="".concat(r,"h"):c>=1?p="".concat(c,"m"):n>=1&&(p="".concat(n,"s")),Object.assign({time_formatted:p},e)}var A=function(e){var t=e.api,a=t.balance,n=t.closed,c=t.open,r=t.profit,o=[],s=[],i="";if(a&&n&&c&&r){var l=a.total-r.profit_all_coin;n.sort((function(e,t){return e.close_timestamp>t.close_timestamp?1:e.close_timestamp<t.close_timestamp?-1:0})),c.sort((function(e,t){return e.open_timestamp<t.open_timestamp?1:e.open_timestamp>t.open_timestamp?-1:0})),n.length>0&&(o.push({x:n[0].open_timestamp,y:l}),n.forEach((function(e,t){l+=e.profit_abs,o.push({x:e.close_timestamp,y:l})}))),c.length>0&&(c.forEach((function(e){l+=e.profit_abs})),o.push({x:Date.now(),y:l})),c.forEach((function(e){return s.push(R(e))})),n.reverse().forEach((function(e){return s.push(R(e))})),i=a.stake}return Object(b.jsxs)(_,{style:e.style,children:[Object(b.jsx)("div",{className:P.a.graph,children:Object(b.jsxs)(N.a,{width:700,height:275,data:o,margin:{top:5,right:20,bottom:5,left:0},children:[Object(b.jsx)(k.a,{stroke:"#2a2a2a"}),Object(b.jsx)(T.a,{type:"monotone",dataKey:"y",stroke:"#42c2f4",strokeWidth:2,isAnimationActive:!1,dot:!1}),Object(b.jsx)(w.a,{orientation:"right",tickCount:10,domain:["dataMin","dataMax"],scale:"linear",allowDecimals:!1}),Object(b.jsx)(M.a,{dataKey:"x",scale:"time",tickFormatter:function(e){return F()(e).format("D MMM")}}),Object(b.jsx)(C.a,{contentStyle:{backgroundColor:"#2a2a2a",borderColor:"#2f2f2f"},allowEscapeViewBox:{x:!0,y:!0},formatter:function(e,t,a){return[e.toFixed(2),"Balance"]},labelFormatter:function(e){return F()(e).format("D MMM")}})]})}),Object(b.jsxs)("div",{className:P.a.list_header,children:[Object(b.jsx)("span",{children:"Pair"}),Object(b.jsx)("span",{children:"Amount"}),Object(b.jsx)("span",{children:"Profit (pct)"}),Object(b.jsxs)("span",{children:["Profit (",i,")"]}),Object(b.jsx)("span",{children:"Time"})]}),Object(b.jsx)("div",{className:P.a.list_container,children:s.map((function(t){return Object(b.jsxs)("div",{className:"entry",onClick:function(a){return e.setCurrentTrade(t.trade_id)},children:[Object(b.jsx)("span",{style:{color:t.is_open?"#3d3":void 0},children:t.pair}),Object(b.jsx)("span",{children:O.Round(t.amount,2)}),Object(b.jsxs)("span",{style:{color:O.GetPosNegColor(t.profit_pct)},children:[t.profit_pct>0?"+":"",t.profit_pct.toFixed(2),"%"]}),Object(b.jsxs)("span",{style:{color:O.GetPosNegColor(t.profit_abs)},children:[t.profit_abs>0?"+":"",t.profit_abs.toFixed(2)]}),Object(b.jsx)("span",{children:t.time_formatted})]},t.trade_id)}))})]})},S=a(179),I=a(101),G=a.n(I),Y=function(e){var t=c.a.useState({graph:[],openRefDot:null,closeRefDot:null,info_points:[]}),a=Object(s.a)(t,2),n=a[0],r=a[1],o=function(e,t,a,n){var c=e*t,r=c-a*c;return{abs:r-n,pct:r/n*100-100}};return c.a.useEffect((function(){var t=function(){var e=Object(p.a)(l.a.mark((function e(t){var a,n,c,s,i,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.binance.com/api/v3/klines?symbol=".concat(t.pair.replace("/",""))+"&interval=5m"+"&startTime=".concat(t.open_timestamp-72e6)+"&endTime=".concat((null!==(a=t.close_timestamp)&&void 0!==a?a:Date.now())+72e6)+"&limit=1000");case 2:return c=e.sent,e.next=5,c.json();case 5:s=e.sent,i=o(t.amount,t.max_rate,t.fee_close,t.open_trade_value),p=o(t.amount,t.min_rate,t.fee_close,t.open_trade_value),r({graph:s.map((function(e){return{x:e[6],y:Number.parseFloat(e[4])}})),openRefDot:{x:t.open_timestamp,y:t.open_rate},closeRefDot:t.is_open?null:{x:t.close_timestamp,y:t.close_rate},info_points:[{label:"CRYPTOCURRENCY",value:t.pair.split("/")[0]},{label:"PROFIT (PCT)",value:"".concat(t.profit_pct>0?"+":"").concat(t.profit_pct.toFixed(2),"%"),color:O.GetPosNegColor(t.profit_pct)},{label:"PROFIT (".concat(t.pair.split("/")[1],")"),value:"".concat(t.profit_abs>0?"+":"").concat(t.profit_abs.toFixed(2)),color:O.GetPosNegColor(t.profit_abs)},{label:"OPEN",value:"".concat(F()(t.open_timestamp).format("MM/DD/YYYY HH:mm")),font:26},{label:"DURATION",value:O.Duration((null!==(n=t.close_timestamp)&&void 0!==n?n:Date.now())-t.open_timestamp)},{label:"CLOSE",value:t.is_open?"OPEN":"".concat(F()(t.close_timestamp).format("MM/DD/YYYY HH:mm")),font:26},{label:"HIGH",value:O.Round(t.max_rate,6),extra:"".concat(i.pct>0?"+":"").concat(i.pct.toFixed(2),"% / ").concat(i.abs>0?"+":"").concat(i.abs.toFixed(2),"  ").concat(t.pair.split("/")[1]),extra_color:O.GetPosNegColor(i.pct)},{label:"LOW",value:O.Round(t.min_rate,6),extra:"".concat(p.pct>0?"+":"").concat(p.pct.toFixed(2),"% / ").concat(p.abs>0?"+":"").concat(p.abs.toFixed(2)," ").concat(t.pair.split("/")[1]),extra_color:O.GetPosNegColor(p.pct)},{label:"AMOUNT",value:O.Round(t.amount,2),extra:"".concat(t.stake_amount.toFixed(2)," ").concat(t.pair.split("/")[1])}]});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(e.currentTrade&&e.api){var a=e.api.closed.filter((function(t){return t.trade_id===e.currentTrade}));a.length>0&&(a=a[0]),0===a.length&&(a=e.api.open.filter((function(t){return t.trade_id===e.currentTrade}))[0]),a&&0!==a.length&&t(a)}}),[e.api,e.currentTrade]),Object(b.jsxs)(_,{style:Object.assign(e.style,{position:"relative"}),children:[Object(b.jsx)("div",{className:G.a.close_button,onClick:function(t){return e.setCurrentTrade(null)}}),Object(b.jsx)("div",{className:G.a.graph,children:Object(b.jsxs)(N.a,{width:700,height:275,data:n.graph,margin:{top:5,right:20,bottom:5,left:0},children:[Object(b.jsx)(k.a,{stroke:"#2a2a2a"}),Object(b.jsx)(T.a,{type:"monotone",dataKey:"y",stroke:"#42c2f4",strokeWidth:2,isAnimationActive:!1,dot:!1}),Object(b.jsx)(w.a,{orientation:"right",tickCount:10,domain:["dataMin","dataMax"],scale:"linear"}),Object(b.jsx)(M.a,{dataKey:"x",scale:"time",tickFormatter:function(e){return F()(e).format("HH:mm")}}),n.openRefDot&&Object(b.jsx)(S.a,{x:n.openRefDot.x,y:n.openRefDot.y,r:5,fill:"#0f0",stroke:"none"}),n.closeRefDot&&Object(b.jsx)(S.a,{x:n.closeRefDot.x,y:n.closeRefDot.y,r:5,fill:"#f00",stroke:"none"}),Object(b.jsx)(C.a,{contentStyle:{backgroundColor:"#2a2a2a",borderColor:"#2f2f2f"},allowEscapeViewBox:{x:!0,y:!0},formatter:function(e,t,a){return[e.toFixed(6),"Close"]},labelFormatter:function(e){return F()(e).format("HH:mm")}})]})}),Object(b.jsx)("div",{className:G.a.info_container,children:n.info_points.map((function(e,t){return Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("span",{className:"label",children:e.label}),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",alignItems:"center"},children:[Object(b.jsx)("span",{className:"value",style:{color:e.color,fontSize:e.font},children:e.value}),e.extra&&Object(b.jsx)("span",{className:"extra",style:{color:e.extra_color,marginTop:-7},children:e.extra})]})]},t)}))})]})},L=function(e){return Object(b.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"350px 700px",gridTemplateRows:"600px",columnGap:30,gridTemplateAreas:"'bal trades'"},children:[Object(b.jsx)(y,{style:{gridArea:"bal"},api:O.clone(e.api)}),Object(b.jsx)(A,{style:{gridArea:"trades"},api:O.clone(e.api),setCurrentTrade:e.setCurrentTrade}),Object(b.jsx)(Y,{style:{gridArea:"trades",zIndex:999,visibility:e.currentTrade?"visible":"hidden"},currentTrade:e.currentTrade,setCurrentTrade:e.setCurrentTrade,api:O.clone(e.api)})]})},H=a(352),B=a(195),W=a(186),K=a.n(W),V=function(e){var t=e.api,a=t.balance,n=t.closed,c=t.open,r=t.profit;function o(e,t){var a=t/100*(e.length-1);if(a%1===0)return e[a];var n=Math.floor(a),c=a-n;return e[n]+c*(e[n+1]-e[n])}var s=[],i=[];if(a&&n&&c&&r){n.sort((function(e,t){return e.close_timestamp>t.close_timestamp?1:e.close_timestamp<t.close_timestamp?-1:0}));var l=O.clone(n);(l=l.concat(c)).forEach((function(e,t){var a,n,c,r=new Date(null!==(a=e.close_timestamp)&&void 0!==a?a:Date.now()).getDate();0===t?s.push({x:e.close_timestamp,y:e.profit_abs}):r===new Date(null!==(n=l[t-1].close_timestamp)&&void 0!==n?n:Date.now()).getDate()?s[s.length-1].y+=e.profit_abs:s.push({x:null!==(c=e.close_timestamp)&&void 0!==c?c:Date.now(),y:e.profit_abs})}));var p=function(e){if(e.length<4)return e;var t,a,n,c=e.slice().sort((function(e,t){return e-t})),r=o(c,25),s=o(c,75);return a=s+1.5*(t=s-r),n=r-1.5*t,c.filter((function(e){return e>=n&&e<=a}))}(n.map((function(e){return e.close_timestamp-e.open_timestamp}))),u=0;p.length>1&&(u=p.reduce((function(e,t){return e+t}))/p.length),i=[{label:"PROFIT ".concat(a.stake," (ALL)"),value:r.profit_all_coin.toFixed(2)},{label:"PROFIT PCT (ALL)",value:"".concat(r.profit_all_percent_fixed>0?"+":"").concat(r.profit_all_percent_fixed.toFixed(2),"%")},{label:"PROFIT ".concat(a.symbol," (ALL)"),value:r.profit_all_fiat.toFixed(2)},{label:"PROFIT ".concat(a.stake," (CLOSED)"),value:r.profit_closed_coin.toFixed(2)},{label:"PROFIT PCT (CLOSED)",value:"".concat(r.profit_closed_percent_fixed>0?"+":"").concat(r.profit_closed_percent_fixed.toFixed(2),"%")},{label:"PROFIT ".concat(a.symbol," (ALL)"),value:r.profit_closed_fiat.toFixed(2)},{label:"TOTAL TRADES",value:r.trade_count},{label:"TRADES WON",value:r.winning_trades},{label:"TRADES LOST",value:r.losing_trades},{label:"FIRST TRADE",value:0===r.first_trade_timestamp?"No trades closed yet":F()(r.first_trade_timestamp).format("MM/DD/YYYY HH:mm"),font:24},{label:"AVG TRADE DURATION",value:O.Duration(u)},{label:"DAYS RUN",value:"".concat(0===r.first_trade_timestamp?0:Math.floor((Date.now()-r.first_trade_timestamp)/1e3/60/60/24),"d")}]}return Object(b.jsxs)("div",{className:K.a.container,children:[Object(b.jsx)("div",{className:"graph",children:Object(b.jsxs)(H.a,{width:530,height:290,data:s,children:[Object(b.jsx)(k.a,{stroke:"#2a2a2a"}),Object(b.jsx)(M.a,{dataKey:"x",tickFormatter:function(e){return F()(e).format("D MMM")}}),Object(b.jsx)(C.a,{cursor:{fill:"#2a2a2a"},contentStyle:{backgroundColor:"#2a2a2a",borderColor:"#2f2f2f"},allowEscapeViewBox:{x:!0,y:!0},formatter:function(e,t,a){return[e.toFixed(2),"Profit"]},labelFormatter:function(e){return F()(e).format("D MMM")}}),Object(b.jsx)(B.a,{dataKey:"y",fill:"#42c2f4"})]})}),i.map((function(e,t){return Object(b.jsxs)("div",{className:"info",children:[Object(b.jsx)("span",{className:"label",children:e.label}),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",alignItems:"center"},children:[Object(b.jsx)("span",{className:"value",style:{color:e.color,fontSize:e.font},children:e.value}),e.extra&&Object(b.jsx)("span",{className:"extra",style:{color:e.extra_color,marginTop:-7},children:e.extra})]})]},t)}))]})},z=a(97),J=a.n(z),U=(a(166),a(66)),q=a.n(U),X=0,Z=function(e){var t=c.a.useState(null),a=Object(s.a)(t,2),n=a[0],r=a[1],o=c.a.useState({instances:[],balance:!1,closed:!1,open:!1,profit:!1}),i=Object(s.a)(o,2),u=i[0],j=i[1];c.a.useEffect((function(){_();var e=q.a.every(1e3,(function(){return _()}));return function(){return q.a.stop(e)}}),[]);var _=function(){var e=Object(p.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/all?instance=".concat(X));case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent)&&j({instances:a.instances,balance:a.balance,closed:a.closed,open:a.open,profit:a.profit}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(f.a,{children:Object(b.jsxs)("div",{className:d.a.outer_container,children:[Object(b.jsxs)("div",{className:"menu",children:[Object(b.jsx)(f.b,{className:"menuitem wallet",exact:!0,to:"/"}),Object(b.jsx)(f.b,{className:"menuitem stats",to:"/stats"})]}),Object(b.jsx)("div",{className:d.a.page_container,children:Object(b.jsxs)("div",{style:{display:"grid",gridTemplateRows:"auto auto auto",gridTemplateColumns:"auto",gridTemplateAreas:"'header' 'instance' 'content'"},children:[Object(b.jsxs)("div",{className:"instance",children:[Object(b.jsx)("div",{className:"icon"}),Object(b.jsx)(J.a,{className:"instance_select",options:u.instances.map((function(e,t){return{label:e,value:t}})),onChange:function(e){r(null),X=e.value,_()},value:u.instances[0]||""})]}),Object(b.jsxs)(m.a,{exact:!0,path:"/",children:[Object(b.jsx)("span",{className:"header",children:"DASHBOARD"}),Object(b.jsx)(L,{api:u,currentTrade:n,setCurrentTrade:r})]}),Object(b.jsxs)(m.a,{exact:!0,path:"/stats",children:[Object(b.jsx)("span",{className:"header",children:"STATISTICS"}),Object(b.jsx)(V,{api:O.clone(u)})]})]})})]})})},Q=a(188),$=a.n(Q),ee=a(189),te=a.n(ee),ae=a(353),ne=function(e){var t=e.api,a=t.balance,n=t.closed,c=t.open,r=t.profit,o=[],s=[],i=[],l=0,p=0,u="";if(a&&n&&c&&r){a.currencies.sort((function(e,t){return e.est_stake<t.est_stake?1:e.est_stake>t.est_stake?-1:0}));var d=a.currencies.filter((function(e){return e.est_stake>.01*a.total})).length;a.currencies.forEach((function(e,t){if(t<d){var a=t/d,n=O.GetPartialGradient({r:66,g:194,b:244},{r:134,g:65,b:244},a);o.push({value:e.est_stake,color:"rgb(".concat(n.r,", ").concat(n.g,", ").concat(n.b,")")})}else t===d?o.push({value:e.est_stake,color:"#EAECEF"}):o[d-1].value+=e.est_stake}));var f=a.total-r.profit_all_coin;n.sort((function(e,t){return e.close_timestamp>t.close_timestamp?1:e.close_timestamp<t.close_timestamp?-1:0})),c.sort((function(e,t){return e.open_timestamp<t.open_timestamp?1:e.open_timestamp>t.open_timestamp?-1:0})),i.push({x:n[0].open_timestamp,y:f}),n.forEach((function(e,t){f+=e.profit_abs,i.push({x:e.close_timestamp,y:f})})),c.length>0&&(c.forEach((function(e){f+=e.profit_abs})),i.push({x:Date.now(),y:f})),s=a.currencies,l=a.total,p=r.profit_all_percent_fixed,u=a.stake}return Object(b.jsxs)("div",{className:te.a.container,children:[Object(b.jsx)("span",{className:"title",children:"Total balance"}),Object(b.jsxs)("div",{className:"balance-container",children:[Object(b.jsxs)("span",{className:"balance",children:[O.Round(l,2)," ",u]}),Object(b.jsxs)("span",{className:"profit",style:{color:O.GetPosNegColor(p)},children:[p>0?"+":"",p.toFixed(2),"%"]})]}),Object(b.jsx)(ae.a,{width:"100%",height:180,children:Object(b.jsxs)(N.a,{data:i,children:[Object(b.jsx)(k.a,{stroke:"#2a2a2a"}),Object(b.jsx)(T.a,{type:"monotone",dataKey:"y",stroke:"#42c2f4",strokeWidth:2,isAnimationActive:!1,dot:!1}),Object(b.jsx)(w.a,{orientation:"right",tickCount:10,domain:["dataMin","dataMax"],scale:"linear",allowDecimals:!1}),Object(b.jsx)(M.a,{dataKey:"x",scale:"time",tickFormatter:function(e){return F()(e).format("D MMM")}}),Object(b.jsx)(C.a,{contentStyle:{backgroundColor:"#2a2a2a",borderColor:"#2f2f2f"},allowEscapeViewBox:{x:!1,y:!0},formatter:function(e,t,a){return[e.toFixed(2),"Balance"]},labelFormatter:function(e){return F()(e).format("D MMM")}})]})}),Object(b.jsx)("span",{className:"portfolio",children:"Your portfolio"}),Object(b.jsx)("div",{className:"pie-container",children:Object(b.jsx)(j.PieChart,{startAngle:-90,lineWidth:40,data:o})}),s.map((function(e,t){return Object(b.jsxs)("div",{className:"entry",children:[Object(b.jsx)("div",{className:"color",style:{backgroundColor:t<o.length?o[t].color:"#EAECEF"}}),Object(b.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",flexGrow:1},children:[Object(b.jsx)("span",{children:e.currency}),Object(b.jsx)("span",{children:O.Round(e.balance,4)})]})]},e.currency)}))]})},ce=a(191),re=a.n(ce),oe=function(e){var t=e.api,a=t.balance,n=t.closed,c=t.profit,r=[];if(a&&n&&c){var o=n.map((function(e){return e.close_timestamp-e.open_timestamp})),s=(o=function(e){if(e.length<4)return e;var t,a,n,c=e.slice().sort((function(e,t){return e-t})),r=se(c,25),o=se(c,75);return a=o+1.5*(t=o-r),n=r-1.5*t,c.filter((function(e){return e>=n&&e<=a}))}(o)).reduce((function(e,t){return e+t}))/o.length,i=Math.floor(s/1e3/60/60),l=Math.floor(s/1e3/60%60),p="".concat(l,"m");i>0&&(p="".concat(i,"h").concat(p)),r=[{label:"Profit ".concat(a.stake," (all)"),value:"".concat(O.Round(c.profit_all_coin,2)," ").concat(a.stake)},{label:"Profit PCT (all)",value:"".concat(O.Round(c.profit_all_percent_fixed,2),"%")},{label:"Profit ".concat(a.stake," (closed)"),value:"".concat(O.Round(c.profit_closed_coin,2)," ").concat(a.stake)},{label:"Profit PCT (closed)",value:"".concat(O.Round(c.profit_closed_percent_fixed,2),"%")},{label:"Total trades closed",value:c.closed_trade_count},{label:"Closed trades won",value:c.winning_trades},{label:"Closed trades lost",value:c.losing_trades},{label:"First trade",value:c.first_trade_date},{label:"Avg. duration (trimmed)",value:p}]}return Object(b.jsxs)("div",{className:re.a.container,children:[Object(b.jsx)("span",{className:"title",children:"Info"}),r.map((function(e,t){return Object(b.jsxs)("div",{className:"entry",children:[Object(b.jsx)("span",{children:e.label}),Object(b.jsx)("span",{children:e.value})]},t)}))]})};function se(e,t){var a=t/100*(e.length-1);if(a%1===0)return e[a];var n=Math.floor(a),c=a-n;return e[n]+c*(e[n+1]-e[n])}var ie=a(192),le=a.n(ie);function pe(e){var t,a=Date.now()-(null!==(t=e.close_timestamp)&&void 0!==t?t:e.open_timestamp),n=Math.floor(a/1e3),c=Math.floor(n/60),r=Math.floor(c/60),o=Math.floor(r/24),s=Math.floor(o/7),i=Math.floor(o/(365/12)),l=Math.floor(o/365),p="";return l>=1?p="".concat(l,"y"):i>=1?p="".concat(i,"mo"):s>=1?p="".concat(s,"w"):o>=1?p="".concat(o,"d"):r>=1?p="".concat(r,"h"):c>=1?p="".concat(c,"m"):n>=1&&(p="".concat(n,"s")),Object.assign({time_formatted:p},e)}var ue=function(e){var t=e.api,a=t.balance,n=t.closed,c=t.open,r=[];return a&&n&&c&&(n.sort((function(e,t){return e.close_timestamp>t.close_timestamp?1:e.close_timestamp<t.close_timestamp?-1:0})),c.sort((function(e,t){return e.open_timestamp<t.open_timestamp?1:e.open_timestamp>t.open_timestamp?-1:0})),c.forEach((function(e){return r.push(pe(e))})),n.reverse().forEach((function(e){return r.push(pe(e))}))),Object(b.jsxs)("div",{className:le.a.container,children:[Object(b.jsx)("span",{className:"title",children:"Trades"}),r.map((function(e,t){return Object(b.jsxs)("div",{className:"entry",children:[Object(b.jsx)("span",{children:e.pair}),Object(b.jsx)("span",{className:"small center",style:{color:e.is_open&&"#3d3",marginTop:-10},children:e.is_open?"open":""}),Object(b.jsx)("span",{className:"right",children:e.time_formatted}),Object(b.jsx)("span",{className:"small",children:"Amount"}),Object(b.jsx)("span",{className:"small center",children:"Profit (pct)"}),Object(b.jsxs)("span",{className:"small right",children:["Profit (",e.pair.split("/")[1],")"]}),Object(b.jsx)("span",{className:"big",children:O.Round(e.amount,2)}),Object(b.jsxs)("span",{className:"big center",style:{color:O.GetPosNegColor(e.profit_pct)},children:[e.profit_pct>0?"+":"",e.profit_pct.toFixed(2),"%"]}),Object(b.jsxs)("span",{className:"big right",style:{color:O.GetPosNegColor(e.profit_abs)},children:[e.profit_abs>0?"+":"",e.profit_abs.toFixed(2)]})]},e.trade_id)}))]})},de=a(193),fe=a.n(de),me=function(e){var t=e.api,a=t.balance,n=t.closed,c=t.open,r=[];return a&&n&&c&&(n.sort((function(e,t){return e.close_timestamp>t.close_timestamp?1:e.close_timestamp<t.close_timestamp?-1:0})),c.sort((function(e,t){return e.open_timestamp<t.open_timestamp?1:e.open_timestamp>t.open_timestamp?-1:0})),n.forEach((function(e){var t=r.filter((function(t){return t.pair===e.pair}))[0];t?(e.profit_pct>0?t.wins++:t.losses++,t.profit_abs+=e.profit_abs,t.profit_pcts.push(e.profit_pct)):r.push({pair:e.pair,wins:e.profit_pct>0?1:0,losses:e.profit_pct<0?1:0,profit_abs:e.profit_abs,profit_pcts:[e.profit_pct]})})),r.forEach((function(e){e.avg_profit_pct=e.profit_pcts.reduce((function(e,t){return e+t}))/e.profit_pcts.length})),r.sort((function(e,t){return e.avg_profit_pct<t.avg_profit_pct?1:e.avg_profit_pct>t.avg_profit_pct?-1:0}))),Object(b.jsxs)("div",{className:fe.a.container,children:[Object(b.jsx)("span",{className:"title",children:"Pairs"}),r.map((function(e,t){return Object(b.jsxs)("div",{className:"entry",children:[Object(b.jsx)("span",{children:e.pair}),Object(b.jsx)("span",{}),Object(b.jsx)("span",{className:"right",children:e.profit_abs.toFixed(2)}),Object(b.jsx)("span",{className:"small",children:"Wins"}),Object(b.jsx)("span",{className:"small center",children:"Avg profit"}),Object(b.jsx)("span",{className:"small right",children:"Losses"}),Object(b.jsx)("span",{className:"big",children:e.wins}),Object(b.jsxs)("span",{className:"big center",style:{color:O.GetPosNegColor(e.avg_profit_pct)},children:[e.avg_profit_pct>0?"+":"",e.avg_profit_pct.toFixed(2),"%"]}),Object(b.jsx)("span",{className:"big right",children:e.losses})]},e.pair)}))]})},je=0,be=function(e){var t=c.a.useState({instances:[],balance:!1,closed:!1,open:!1,profit:!1}),a=Object(s.a)(t,2),n=a[0],r=a[1];c.a.useEffect((function(){o();var e=q.a.every(1e3,(function(){return o()}));return function(){return q.a.stop(e)}}),[]);var o=function(){var e=Object(p.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/all?instance=".concat(je));case 3:return t=e.sent,e.next=6,t.json();case 6:(a=e.sent)&&r({instances:a.instances,balance:a.balance,closed:a.closed,open:a.open,profit:a.profit}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)(f.a,{children:Object(b.jsxs)("div",{className:$.a.outer_container,children:[Object(b.jsxs)("div",{className:"dropdown",children:[Object(b.jsx)("div",{className:"icon"}),Object(b.jsx)(J.a,{className:"instance_select",options:n.instances.map((function(e,t){return{label:e,value:t}})),onChange:function(e){je=e.value,o()},value:n.instances[je]||""})]}),Object(b.jsxs)("div",{className:"menu",children:[Object(b.jsxs)(f.b,{className:"menuitem balance",exact:!0,to:"/",children:[Object(b.jsx)("div",{className:"icon"}),Object(b.jsx)("span",{className:"label",children:"Balance"})]}),Object(b.jsxs)(f.b,{className:"menuitem info",exact:!0,to:"/info",children:[Object(b.jsx)("div",{className:"icon"}),Object(b.jsx)("span",{className:"label",children:"Info"})]}),Object(b.jsxs)(f.b,{className:"menuitem trades",exact:!0,to:"/trades",children:[Object(b.jsx)("div",{className:"icon"}),Object(b.jsx)("span",{className:"label",children:"Trades"})]}),Object(b.jsxs)(f.b,{className:"menuitem pairs",exact:!0,to:"/pairs",children:[Object(b.jsx)("div",{className:"icon"}),Object(b.jsx)("span",{className:"label",children:"Pairs"})]})]}),Object(b.jsx)(m.a,{exact:!0,path:"/",children:Object(b.jsx)(ne,{api:O.clone(n)})}),Object(b.jsx)(m.a,{exact:!0,path:"/info",children:Object(b.jsx)(oe,{api:O.clone(n)})}),Object(b.jsx)(m.a,{exact:!0,path:"/trades",children:Object(b.jsx)(ue,{api:O.clone(n)})}),Object(b.jsx)(m.a,{exact:!0,path:"/pairs",children:Object(b.jsx)(me,{api:O.clone(n)})})]})})},_e=function(e){var t=c.a.useState(window.innerWidth),a=Object(s.a)(t,2),n=a[0],r=a[1];return c.a.useEffect((function(){var e=function(){(n<600&&window.innerWidth>=600||n>=600&&window.innerWidth<600)&&r(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[n]),n<600?Object(b.jsx)(be,{}):Object(b.jsx)(Z,{})};o.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(_e,{})}),document.getElementById("root"))},99:function(e,t,a){e.exports={graph:"TradeOverviewPanel_graph__R0qRv",list_header:"TradeOverviewPanel_list_header__27lbs",list_container:"TradeOverviewPanel_list_container__138Qr"}}},[[346,1,2]]]);
//# sourceMappingURL=main.05cd8591.chunk.js.map