(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{219:function(e,t,n){},344:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(29),r=n.n(s),i=(n(219),n(47)),o=n(30),l=n.n(o),j=n(50),u=n(22),d=n(44),m=n(25),h=n(347),b=n(90),O=c.a.createContext(!1),x=n(210),f=n(4),p=function(e){var t=e.component,n=(e.location,e.isLogin,Object(x.a)(e,["component","location","isLogin"])),c=Object(a.useContext)(O).authorized;return Object(f.jsx)(m.b,Object(i.a)(Object(i.a)({},n),{},{render:function(e){return c?Object(f.jsx)(t,Object(i.a)({},e)):Object(f.jsx)(m.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},g=function(e){var t=document.cookie.match(new RegExp("(?:^|; )".concat(e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1"),"=([^;]*)")));return t?decodeURIComponent(t[1]):void 0},v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(n=Object(i.a)({path:"/"},n)).expires instanceof Date&&(n.expires=n.expires.toUTCString());var a="".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(t));for(var c in n){a+="; ".concat(c);var s=n[c];!0!==s&&(a+="=".concat(s))}document.cookie=a},y=function(){return"Bearer ".concat(g("JWToken"))},w=function(){v("JWToken","",{"max-age":-1}),window.location.href="/"},_=n(85),k=n(40);function I(e){var t=e.tournaments,n=Object(a.useContext)(O).authorized;return Object(f.jsxs)(_.a,{mode:"horizontal",children:[Object(f.jsx)(_.a.Item,{children:Object(f.jsx)(d.b,{to:"/",children:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"})},"home"),t.length>0&&t.map((function(e){return Object(f.jsx)(_.a.Item,{children:Object(f.jsx)(d.b,{to:"/".concat(e.slug),children:e.name})},e.slug)})),Object(f.jsx)(_.a.Item,{children:Object(f.jsx)(d.b,{to:"/rules/",children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430"})},"rules"),n?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(_.a.Item,{children:Object(f.jsx)(d.b,{to:"/my-bets",children:"\u041c\u043e\u0457 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438"})},"my-bets"),Object(f.jsx)(_.a.Item,{children:Object(f.jsx)(d.b,{to:"/profile",children:"\u041c\u0456\u0439 \u043f\u0440\u043e\u0444\u0456\u043b\u044c"})},"profile"),Object(f.jsx)(_.a.Item,{children:Object(f.jsx)(k.a,{type:"text",onClick:w,children:"\u0412\u0438\u0439\u0442\u0438"})},"logout")]}):Object(f.jsx)(_.a.Item,{children:Object(f.jsx)(d.b,{to:"/login",children:"\u0412\u0445\u0456\u0434/\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"})},"sign-in")]})}var N=n(35),T=n.n(N),S=function(){var e=g("JWToken");return T.a.get("".concat("https://footbet.site/api","/tournaments"),{headers:{Authorization:e}}).then((function(e){return e})).catch((function(e){return e.response}))},C=n(104),F=n(57),B=n(354);function z(e){var t=e.tournaments;return Object(f.jsx)(C.a,{style:{marginTop:"30px"},gutter:16,children:t.length>0&&t.map((function(e){return Object(f.jsx)(F.a,{className:"gutter-row",xs:{span:24},lg:{span:12},style:{marginBottom:"30px"},children:Object(f.jsx)(B.a,{children:Object(f.jsx)(d.b,{to:"/".concat(e.slug),children:Object(f.jsx)("img",{style:{objectFit:"contain",width:"100%",height:"150px"},alt:e.name,src:e.logo})})})},e.id)}))})}function A(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:"site-title",children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430"}),Object(f.jsx)(B.a,{children:Object(f.jsxs)("ul",{children:[Object(f.jsxs)("li",{children:["\u0412\u0433\u0430\u0434\u0430\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u043c\u043e\u0436\u0435\u0446\u044c \u043c\u0430\u0442\u0447\u0443 \u2013"," ",Object(f.jsx)("strong",{children:"2 \u043e\u0447\u043a\u0438"})]}),Object(f.jsxs)("li",{children:["\u0412\u0433\u0430\u0434\u0430\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u043c\u043e\u0436\u0435\u0446\u044c + \u0432\u0433\u0430\u0434\u0430\u043d\u0430 \u0440\u0456\u0437\u043d\u0438\u0446\u044f \u2013"," ",Object(f.jsx)("strong",{children:"3 \u043e\u0447\u043a\u0438"})]}),Object(f.jsxs)("li",{children:["\u0412\u0433\u0430\u0434\u0430\u043d\u0438\u0439 \u0442\u043e\u0447\u043d\u0438\u0439 \u0440\u0430\u0445\u0443\u043d\u043e\u043a \u2013"," ",Object(f.jsx)("strong",{children:"5 \u043e\u0447\u043e\u043a"})]}),Object(f.jsxs)("li",{children:["\u0412\u0433\u0430\u0434\u0430\u043d\u0438\u0439 \u0442\u043e\u0447\u043d\u0438\u0439 \u0440\u0430\u0445\u0443\u043d\u043e\u043a + \u0432 \u043c\u0430\u0442\u0447\u0456 \u0437\u0430\u0431\u0438\u0442\u043e 5+ \u0433\u043e\u043b\u0456\u0432 \u2013"," ",Object(f.jsx)("strong",{children:"6 \u043e\u0447\u043e\u043a"})]})]})}),Object(f.jsxs)(B.a,{children:[Object(f.jsx)("strong",{children:"\u041f\u0440\u0438 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u0456\u0439 \u043a\u0456\u043b\u044c\u043a\u043e\u0441\u0442\u0456 \u043e\u0447\u043e\u043a, \u043f\u043e\u0437\u0438\u0446\u0456\u0457 \u0443\u0447\u0430\u0441\u043d\u0438\u043a\u0456\u0432 \u0432\u0438\u0437\u043d\u0430\u0447\u0430\u044e\u0442\u044c\u0441\u044f:"}),Object(f.jsxs)("ul",{style:{listStyle:"number",paddingLeft:"20px"},children:[Object(f.jsx)("li",{children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0442\u043e\u0447\u043d\u0438\u0445 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0456\u0432"}),Object(f.jsx)("li",{children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432\u0433\u0430\u0434\u0430\u043d\u0438\u0445 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432"}),Object(f.jsx)("li",{children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432\u0433\u0430\u0434\u0430\u043d\u0438\u0445 \u0440\u0456\u0437\u043d\u0438\u0446\u044c \u0440\u0430\u0445\u0443\u043d\u043a\u0443"}),Object(f.jsx)("li",{children:"\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0432\u0433\u0430\u0434\u0430\u043d\u0438\u0445 5+ \u0440\u0430\u0445\u0443\u043d\u043a\u0456\u0432"}),Object(f.jsx)("li",{children:"\u041c\u0435\u043d\u0448\u0430 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u043c\u0430\u0442\u0447\u0456\u0432"})]})]})]})}var P=n(166),M=n(346),J=n(355),W=n(140),q=n(348),E=n(103),L=n(56),U=n.n(L),G=n(352),D={pageSize:20},R=[{title:"#",dataIndex:"rank",key:"rank"},{title:"\u0406\u043c'\u044f",dataIndex:"user_name",key:"name"},{title:"\u041c\u0430\u0442\u0447\u0456\u0432",dataIndex:"matches",key:"matches"},{title:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",dataIndex:"result",key:"result"},{title:"\u0420\u0456\u0437\u043d\u0438\u0446\u044f",dataIndex:"difference",key:"difference"},{title:"5+ \u0433\u043e\u043b\u0456\u0432",dataIndex:"goals5",key:"goals5"},{title:"\u0422\u043e\u0447\u043d\u0438\u0439",dataIndex:"score",key:"score"},{title:"\u041e\u0447\u043e\u043a",dataIndex:"all",key:"all"}];function K(e){var t=e.results,n=e.showFullTableModal,a=e.toggleFullTableModal;return Object(f.jsx)(G.a,{width:650,title:"\u041f\u043e\u0432\u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044f",visible:n,onCancel:a,footer:null,children:Object(f.jsx)(q.a,{size:"small",bordered:!0,pagination:D,columns:R,dataSource:t,scroll:{x:"400"},rowKey:"id"})})}var H=n(202),V=function(e,t,n){var a=g("JWToken");return T.a.get("".concat("https://footbet.site/api","/users/").concat(e,"/").concat(t,"/").concat(n),{headers:{Authorization:a}}).then((function(e){return e})).catch((function(e){return e.response}))};function $(e){var t,n,c,s,r=e.id,i=e.tournament,o=e.tour,d=e.showUserInfo,m=e.toggleShowUserInfo,h=e.onlineUsers,b=P.a.TabPane,O=Object(a.useState)([]),x=Object(u.a)(O,2),p=x[0],g=x[1],v=Object(a.useState)(""),y=Object(u.a)(v,2),w=y[0],_=y[1],k=Object(a.useState)(!0),I=Object(u.a)(k,2),N=I[0],T=I[1],S=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V(r,i,o).then((function(e){200===e.status&&(g(e.data),_(e.data.result[0].user.name))})).catch((function(e){console.error(e.message)}));case 2:T(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){S()}),[]);var C=h.includes(r)?"online":"";return Object(f.jsx)(G.a,{width:650,title:"\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u0440\u043e ".concat(w," (").concat(C,")"),visible:d,onCancel:m,footer:null,children:Object(f.jsx)(H.a,{spinning:N,tip:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f...",children:Object(f.jsxs)(P.a,{children:[Object(f.jsx)(b,{tab:"\u0422\u043e\u0447\u043d\u0456 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438",children:null===p||void 0===p||null===(t=p.matches)||void 0===t?void 0:t.filter((function(e){return!0===e.bet.result})).map((function(e){return Object(f.jsxs)("div",{className:"single-match single-match--details",children:[Object(f.jsx)("span",{className:"single-match__team single-match__team--left",children:e.homeTeam.name}),Object(f.jsx)("span",{className:"single-match__score",children:Object(f.jsxs)("span",{className:"single-match__score--data",children:[e.homeGoals," ","-",e.awayGoals]})}),Object(f.jsx)("span",{className:"single-match__team single-match__right",children:e.awayTeam.name}),Object(f.jsxs)("span",{className:"single-match__mypredict",children:[e.bet.homeBet," ","-"," ",e.bet.awayBet]})]},e.id)}))},"1"),Object(f.jsx)(b,{tab:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438 \u043c\u0430\u0442\u0447\u0443",children:null===p||void 0===p||null===(n=p.matches)||void 0===n?void 0:n.filter((function(e){return!0===e.bet.score})).map((function(e){return Object(f.jsxs)("div",{className:"single-match single-match--details",children:[Object(f.jsx)("span",{className:"single-match__team single-match__team--left",children:e.homeTeam.name}),Object(f.jsx)("span",{className:"single-match__score",children:Object(f.jsxs)("span",{className:"single-match__score--data",children:[e.homeGoals," ","-",e.awayGoals]})}),Object(f.jsx)("span",{className:"single-match__team single-match__right",children:e.awayTeam.name}),Object(f.jsxs)("span",{className:"single-match__mypredict",children:[e.bet.homeBet," ","-"," ",e.bet.awayBet]})]},e.id)}))},"2"),Object(f.jsx)(b,{tab:"\u0420\u0456\u0437\u043d\u0438\u0446\u044f \u0433\u043e\u043b\u0456\u0432",children:null===p||void 0===p||null===(c=p.matches)||void 0===c?void 0:c.filter((function(e){return!0===e.bet.difference})).map((function(e){return Object(f.jsxs)("div",{className:"single-match single-match--details",children:[Object(f.jsx)("span",{className:"single-match__team single-match__team--left",children:e.homeTeam.name}),Object(f.jsx)("span",{className:"single-match__score",children:Object(f.jsxs)("span",{className:"single-match__score--data",children:[e.homeGoals," ","-",e.awayGoals]})}),Object(f.jsx)("span",{className:"single-match__team single-match__right",children:e.awayTeam.name}),Object(f.jsxs)("span",{className:"single-match__mypredict",children:[e.bet.homeBet," ","-"," ",e.bet.awayBet]})]},e.id)}))},"3"),Object(f.jsx)(b,{tab:"\u041d\u0435\u0432\u0434\u0430\u0447\u0430",children:null===p||void 0===p||null===(s=p.matches)||void 0===s?void 0:s.filter((function(e){return!0===e.bet.empty})).map((function(e){return Object(f.jsxs)("div",{className:"single-match single-match--details",children:[Object(f.jsx)("span",{className:"single-match__team single-match__team--left",children:e.homeTeam.name}),Object(f.jsx)("span",{className:"single-match__score",children:Object(f.jsxs)("span",{className:"single-match__score--data",children:[e.homeGoals," ","-",e.awayGoals]})}),Object(f.jsx)("span",{className:"single-match__team single-match__right",children:e.awayTeam.name}),Object(f.jsxs)("span",{className:"single-match__mypredict",children:[e.bet.homeBet," ","-"," ",e.bet.awayBet]})]},e.id)}))},"5")]})})})}var Q=function(e){var t=g("JWToken");return T.a.get("".concat("https://footbet.site/api","/matches/").concat(e),{headers:{Authorization:t}}).then((function(e){return e})).catch((function(e){return e.response}))},X=function(e){var t=g("JWToken");return T.a.get("".concat("https://footbet.site/api","/results/").concat(e),{headers:{Authorization:t}}).then((function(e){return e})).catch((function(e){return e.response}))},Y=function(e,t){var n=g("JWToken");return T.a.get("".concat("https://footbet.site/api","/results/").concat(e,"/").concat(t),{headers:{Authorization:n}}).then((function(e){return e})).catch((function(e){return e.response}))},Z=n(211),ee=n(356),te=n(212);var ne=n(349),ae=n(350);function ce(e){var t=e.visible,n=e.onCreate,a=e.toggleShowAddPredictModal,c=e.confirmLoading,s=e.match,r=s.bets.filter((function(e){return e.myBet})),i=ne.a.useForm(),o=Object(u.a)(i,1)[0];return Object(f.jsx)(G.a,{visible:t,title:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437",okText:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",onCancel:a,cancelText:"\u0417\u0430\u043a\u0440\u0438\u0442\u0438",confirmLoading:c,onOk:function(){o.validateFields().then((function(e){n(e)}))},children:Object(f.jsxs)(ne.a,{form:o,layout:"inline",name:"form_in_modal",initialValues:r.length>0?{home:r[0].homeBet,away:r[0].awayBet}:{},requiredMark:!1,colon:!1,children:[Object(f.jsx)(ne.a.Item,{className:"form-item",label:s.homeTeam.name,name:"home",rules:[{required:!0,message:"\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c"}],children:Object(f.jsx)(ae.a,{min:0,style:{width:"100%"}})}),Object(f.jsx)("div",{className:"form-item-separator",children:"-"}),Object(f.jsx)(ne.a.Item,{className:"form-item",label:s.awayTeam.name,name:"away",rules:[{required:!0,message:"\u0417\u0430\u043f\u043e\u0432\u043d\u0456\u0442\u044c"}],children:Object(f.jsx)(ae.a,{min:0,style:{width:"100%"}})})]})})}var se={pageSize:20},re=[{title:"\u0406\u043c'\u044f",dataIndex:["user","name"],key:"display_name"},{title:"\u041f\u0440\u043e\u0433\u043d\u043e\u0437",dataIndex:"bet",key:"prediction"},{title:"\u041e\u0447\u043e\u043a",dataIndex:"points",key:"points"}];function ie(e){var t=e.showPredictsModal,n=e.toggleShowPredictsModal,a=e.match;return Object(f.jsxs)(G.a,{width:570,title:"\u041f\u0440\u043e\u0433\u043d\u043e\u0437\u0438 \u043d\u0430 \u043c\u0430\u0442\u0447",visible:t,onCancel:n,footer:null,children:[Object(f.jsx)("div",{style:{marginBottom:"20px"},children:Object(f.jsxs)("strong",{children:[a.homeTeam.name," ",a.homeGoals," ","-"," ",a.awayGoals," ",a.awayTeam.name]})}),Object(f.jsx)(q.a,{size:"small",bordered:!0,pagination:se,columns:re,dataSource:a.bets})]})}function oe(e){var t=e.match,n=e.loadMatches,c=Object(a.useState)(!1),s=Object(u.a)(c,2),r=s[0],i=s[1],o=Object(a.useState)(!1),l=Object(u.a)(o,2),j=l[0],d=l[1],m=Object(a.useState)(!1),h=Object(u.a)(m,2),b=h[0],O=h[1],x=function(){i(!r)},p=function(){d(!j)},g=function(e){Z.a.error({message:"\u041f\u043e\u043c\u0438\u043b\u043a\u0430",description:e})},v=Object(a.useState)(function(e){var t=U()(e);return U()().diff(t,"minutes")}(t.datetime)),_=Object(u.a)(v,2),I=_[0],N=_[1];!function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}return t}),[t])}((function(){N(I+1)}),6e4);var S=t.bets.find((function(e){return e.myBet}));return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"single-match",children:[Object(f.jsxs)("span",{className:"single-match__time",children:[t.group?"\u0413\u0440\u0443\u043f\u0430 ".concat(t.group):t.tour,Object(f.jsx)("br",{}),"Live"!==t.status?Object(f.jsx)("span",{children:"\u0417\u0430\u043f\u043b\u0430\u043d\u043e\u0432\u0430\u043d\u043e"===t.status?U()(t.datetime).format("HH:mm"):"FT"}):Object(f.jsx)("span",{className:"match-minute",children:I>45&&I<45?"45+":I>45&&I<60?"HT":I>45&&I<109?I-19:I>90?"90+":I})]}),Object(f.jsx)("span",{className:"single-match__team single-match__team--left",children:t.homeTeam.name}),Object(f.jsx)("span",{className:"single-match__score",children:Object(f.jsx)("span",{className:"single-match__score--data ".concat("Live"===t.status?"single-match__score--live":""," ").concat("\u0417\u0430\u043f\u043b\u0430\u043d\u043e\u0432\u0430\u043d\u043e"===t.status?"single-match__score--scheduled":""),children:"\u0417\u0430\u043f\u043b\u0430\u043d\u043e\u0432\u0430\u043d\u043e"===t.status?"-:-":"".concat(t.homeGoals," - ").concat(t.awayGoals)})}),Object(f.jsx)("span",{className:"single-match__team single-match__right",children:t.awayTeam.name}),S?Object(f.jsxs)("span",{className:"single-match__mypredict",children:[S.homeBet," ","-"," ",S.awayBet," ","(",S.points,")"]}):Object(f.jsx)("span",{className:"single-match__mypredict",children:"-:-"}),"\u0417\u0430\u043f\u043b\u0430\u043d\u043e\u0432\u0430\u043d\u043e"===t.status?Object(f.jsx)("span",{className:"single-match__predict",children:S?Object(f.jsx)(k.a,{type:"text",title:"\u0417\u043c\u0456\u043d\u0438\u0442\u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437",onClick:x,children:Object(f.jsx)(ee.a,{})}):Object(f.jsx)(k.a,{type:"text",title:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043f\u0440\u043e\u0433\u043d\u043e\u0437",onClick:x,children:Object(f.jsx)(te.a,{})})}):Object(f.jsx)("span",{className:"single-match__predict",children:Object(f.jsx)(k.a,{type:"text",title:"\u041f\u043e\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044f \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438",onClick:p,children:Object(f.jsx)(te.a,{})})})]}),r&&Object(f.jsx)(ce,{visible:r,toggleShowAddPredictModal:x,onCreate:function(e){O(!0),function(e){var t=y();return!!t&&T.a.post("".concat("https://footbet.site/api","/bets"),e,{headers:{Authorization:t}}).then((function(e){return{status:e.status,data:e.data}})).catch((function(e){return e.response}))}({homeBet:e.home,awayBet:e.away,matchId:t.id,tournamentId:t.tournament_id}).then((function(e){var t;e?201===e.status?(t="\u041f\u0440\u043e\u0433\u043d\u043e\u0437 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043e",Z.a.success({message:"\u0423\u0441\u043f\u0456\u0445",description:t}),x(),n()):403===e.status?g("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f"):401===e.status?(g("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0456\u0457"),w()):g(e.data.error):g("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443..."),O(!1)}))},confirmLoading:b,match:t}),j&&Object(f.jsx)(ie,{showPredictsModal:j,toggleShowPredictsModal:p,match:t})]})}n(343);var le=function(e){return 0===e?"\u0424\u0456\u043d\u0430\u043b":1===e?"1/2 \u0444\u0456\u043d\u0430\u043b\u0443":2===e?"1/4 \u0444\u0456\u043d\u0430\u043b\u0443":3===e?"1/8 \u0444\u0456\u043d\u0430\u043b\u0443":4===e?"1/16 \u0444\u0456\u043d\u0430\u043b\u0443":5===e?"1/32 \u0444\u0456\u043d\u0430\u043b\u0443":"".concat(e," \u0442\u0443\u0440")},je=n(353),ue={pageSize:20},de=function(e){return[{title:"#",dataIndex:"rank",key:"rank"},{title:"\u0406\u043c'\u044f",dataIndex:"user_name",key:"name",render:function(t,n){var a=n.userId;return e.includes(a)?Object(f.jsx)(je.a,{status:"success",dot:!0,offset:[5,5],children:t}):t}},{title:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",dataIndex:"result",key:"result"},{title:"\u0422\u043e\u0447\u043d\u0438\u0439",dataIndex:"score",key:"score"},{title:"\u041e\u0447\u043e\u043a",dataIndex:"all",key:"all"}]};function me(e){var t=e.tournament,n=e.onlineUsers,c=P.a.TabPane,s=Object(a.useState)(0),r=Object(u.a)(s,2),i=r[0],o=r[1],d=Object(a.useState)(localStorage.getItem("tab-".concat(t.id))?localStorage.getItem("tab-".concat(t.id)):1),m=Object(u.a)(d,2),h=m[0],O=m[1],x=Object(a.useState)(!1),p=Object(u.a)(x,2),g=p[0],v=p[1],y=Object(a.useState)(!1),w=Object(u.a)(y,2),I=w[0],N=w[1],T=Object(a.useState)([]),S=Object(u.a)(T,2),z=S[0],A=S[1],L=Object(a.useState)([]),G=Object(u.a)(L,2),D=G[0],R=G[1],H=Object(a.useState)(!1),V=Object(u.a)(H,2),Z=V[0],ee=V[1],te=Object(a.useState)(!1),ne=Object(u.a)(te,2),ae=ne[0],ce=ne[1],se=Object(a.useState)(),re=Object(u.a)(se,2),ie=re[0],je=re[1],me=function(){ee(!Z)},he=function(e){je(e),ce(!ae)},be=function(){var e=Object(j.a)(l.a.mark((function e(n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),a=n.key,o(a),e.next=5,Y(t.id,a).then((function(e){200===e.status&&R(e.data)})).catch((function(e){console.error(e.message)}));case 5:N(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Oe=Object(f.jsxs)(_.a,{onClick:be,children:[Object(f.jsx)(_.a.Item,{children:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442"},"0"),Object(f.jsx)(_.a.Divider,{}),Object(f.jsx)(_.a.Item,{children:"1 \u0422\u0443\u0440"},"1"),Object(f.jsx)(_.a.Item,{children:"2 \u0422\u0443\u0440"},"2"),Object(f.jsx)(_.a.Item,{children:"3 \u0422\u0443\u0440"},"3"),Object(f.jsx)(_.a.Item,{children:"4 \u0422\u0443\u0440"},"4"),Object(f.jsx)(_.a.Item,{children:"5 \u0422\u0443\u0440"},"5"),Object(f.jsx)(_.a.Item,{children:"6 \u0422\u0443\u0440"},"6"),Object(f.jsx)(_.a.Divider,{}),Object(f.jsx)(_.a.Item,{children:"1/8 \u0444\u0456\u043d\u0430\u043b\u0443"},"7"),Object(f.jsx)(_.a.Item,{children:"1/4 \u0444\u0456\u043d\u0430\u043b\u0443"},"8"),Object(f.jsx)(_.a.Item,{children:"1/2 \u0444\u0456\u043d\u0430\u043b\u0443"},"9"),Object(f.jsx)(_.a.Item,{children:"\u0424\u0456\u043d\u0430\u043b"},"10")]}),xe=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,Q(t.id).then((function(e){200===e.status&&A(e.data)})).catch((function(e){console.error(e.message)}));case 3:v(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,X(t.id).then((function(e){200===e.status&&R(e.data)})).catch((function(e){console.error(e.message)}));case 3:N(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){var e=Object(b.io)("https://footbet.site");return e.on("matchUpdate",(function(e){0===Object.keys(e).length&&e.constructor===Object||(xe(),fe(),new Audio("notification.mp3").play())})),function(){return e.close()}}),[]),Object(a.useEffect)((function(){xe()}),[t]),Object(a.useEffect)((function(){fe()}),[t]);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:"site-title",children:t.name}),Object(f.jsxs)(C.a,{gutter:16,children:[Object(f.jsx)(F.a,{className:"gutter-row",sm:{span:24},lg:{span:12},style:{marginBottom:"30px"},children:Object(f.jsx)(B.a,{title:"\u041c\u0430\u0442\u0447\u0456",loading:g,children:Object(f.jsxs)(P.a,{defaultActiveKey:h,onChange:function(e){localStorage.setItem("tab-".concat(t.id),e),O(e)},children:[Array.from(Array(t.groupTours).keys()).map((function(e){return Object(f.jsx)(c,{tab:"".concat(e+1," \u0442\u0443\u0440"),children:z.filter((function(t){return t.tour==="".concat(e+1," \u0442\u0443\u0440")})).map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)(M.a,{style:{fontWeight:"bold"},children:U()(e.date).format("LL")}),e.games.map((function(e){return Object(f.jsx)(oe,{loadMatches:xe,match:e},e.id)}))]},e.id)}))},e)})),Array.from(Array(t.playoffTours).keys()).reverse().map((function(e){return Object(f.jsx)(c,{tab:le(e),children:z.filter((function(t){return t.tour===le(e)})).map((function(e){return Object(f.jsxs)("div",{children:[Object(f.jsx)(M.a,{style:{fontWeight:"bold"},children:U()(e.date).format("LL")}),e.games.map((function(e){return Object(f.jsx)(oe,{loadMatches:xe,match:e},e.id)}))]},e.id)}))},e+10)}))]})})}),Object(f.jsx)(F.a,{className:"gutter-row",sm:{span:24},lg:{span:12},children:Object(f.jsx)(B.a,{title:"\u0422\u0430\u0431\u043b\u0438\u0446\u044f",loading:I,extra:Object(f.jsxs)(J.b,{children:[Object(f.jsx)(W.a,{overlay:Oe,trigger:["click"],children:Object(f.jsxs)("a",{style:{color:"#001628"},className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()},children:["".concat(0===Number(i)?"\u041e\u0431\u0440\u0430\u0442\u0438":i," \u0442\u0443\u0440")," ",Object(f.jsx)(E.a,{})]})}),Object(f.jsx)(k.a,{type:"link",onClick:me,children:"\u041f\u043e\u0432\u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044f"})]}),children:Object(f.jsx)(q.a,{size:"small",pagination:ue,bordered:!0,columns:de(n),dataSource:D,rowKey:"id",scroll:{x:400},onRow:function(e){return{onClick:function(){return he(e.userId)}}}})})})]}),Z&&Object(f.jsx)(K,{showFullTableModal:Z,toggleFullTableModal:me,results:D}),ae&&Object(f.jsx)($,{showUserInfo:ae,toggleShowUserInfo:he,tournament:t.id,tour:i,id:ie,onlineUsers:n})]})}function he(e){var t=e.tournaments,n=P.a.TabPane,c=Object(a.useState)([]),s=Object(u.a)(c,2),r=s[0],i=s[1],o=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y(),e.next=3,fetch("".concat("https://footbet.site/api","/bets/").concat(t),{headers:{Authorization:n}});case 3:if(200!==(a=e.sent).status){e.next=9;break}return e.next=7,a.json();case 7:c=e.sent,i(c);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{className:"site-title",children:"\u041c\u043e\u0457 \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438"}),Object(f.jsx)(B.a,{children:t.length&&Object(f.jsx)(P.a,{defaultActiveKey:t[0].id,onChange:function(e){o(e)},children:t.map((function(e){return Object(f.jsx)(n,{tab:e.name,children:r.map((function(e){return Object(f.jsx)("div",{children:Object(f.jsxs)(M.a,{style:{fontWeight:"bold"},children:[e.match.homeTeam.name," ",e.homeBet," ","-"," ",e.awayBet," ",e.match.awayTeam.name]})},e.id)}))},e.id)}))})})]})}U.a.locale("uk");var be=n(351);function Oe(){var e=g("JWToken");return T.a.get("".concat("https://footbet.site/api","/users/me"),{headers:{Authorization:e}}).then((function(e){return e.status&&200!==e.status&&w(),e.data})).catch((function(e){return e.response}))}function xe(){var e=function(e){Z.a.error({message:"\u041f\u043e\u043c\u0438\u043b\u043a\u0430",description:e})},t=ne.a.useForm(),n=Object(u.a)(t,1)[0];Object(a.useEffect)((function(){Oe().then((function(t){t?n.setFieldsValue(t):e("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443...")}))}),[]);var c=function(t){(function(e){var t=e.email,n=e.name,a=e.password,c=g("JWToken");return T()({method:"post",headers:{"Content-Type":"application/json",Authorization:c},url:"".concat("https://footbet.site/api","/users/me"),data:{email:t,name:n,password:a}}).then((function(e){return e.status&&201!==e.status&&w(),e})).catch((function(e){return e.response}))})(t).then((function(t){var a;t?(n.setFieldsValue(t),a="\u041f\u0440\u043e\u0444\u0456\u043b\u044c \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043e",Z.a.success({message:"\u0423\u0441\u043f\u0456\u0445",description:a})):e("\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443...")}))};return Object(f.jsxs)("div",{className:"site-form",children:[Object(f.jsx)("h1",{className:"site-title",children:"\u041c\u0456\u0439 \u043f\u0440\u043e\u0444\u0456\u043b\u044c"}),Object(f.jsx)(B.a,{children:Object(f.jsxs)(ne.a,{form:n,className:"sign-in-form",onFinish:function(e){c(e)},layout:"vertical",name:"signin-form",requiredMark:!1,colon:!1,children:[Object(f.jsx)(ne.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448 email"}],children:Object(f.jsx)(be.a,{readOnly:!0})}),Object(f.jsx)(ne.a.Item,{label:"\u0406\u043c'\u044f",name:"name",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448\u0435 \u0456\u043c'\u044f"}],children:Object(f.jsx)(be.a,{})}),Object(f.jsx)(M.a,{}),Object(f.jsx)(ne.a.Item,{label:"\u041d\u043e\u0432\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",name:"password1",rules:[{message:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c"}],children:Object(f.jsx)(be.a.Password,{})}),Object(f.jsx)(ne.a.Item,{label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0456\u0442\u044c \u043d\u043e\u0432\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",name:"password2",rules:[{message:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c"}],children:Object(f.jsx)(be.a.Password,{})}),Object(f.jsx)(ne.a.Item,{children:Object(f.jsx)(k.a,{type:"primary",htmlType:"submit",children:"\u0417\u043c\u0456\u043d\u0438\u0442\u0438"})})]})})]})}var fe=n(115),pe=n(357),ge=n(358);function ve(){var e=function(e){(function(e){var t=e.email,n=e.password;return T()({method:"post",headers:{"Content-Type":"application/json"},url:"".concat("https://footbet.site/api","/users/login"),data:{email:t,password:n}}).then((function(e){return e.status&&200===e.status&&v("JWToken",e.data.token),e})).catch((function(e){return e.response}))})(e).then((function(e){var t;e?200===e.status?window.location.reload():G.a.error({title:"\u041f\u043e\u043c\u0438\u043b\u043a\u0430",content:e.data.error,onOk:function(){}}):(t="\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443...",Z.a.error({message:"\u041f\u043e\u043c\u0438\u043b\u043a\u0430",description:t}))}))};return Object(f.jsxs)(B.a,{children:[Object(f.jsx)("strong",{children:"\u0423\u0432\u0456\u0439\u0442\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e"})," ",Object(f.jsx)("br",{}),Object(f.jsx)("a",{className:"sign-google",href:"https://footbet.site/api/auth/google",children:Object(f.jsx)("img",{width:"30",src:"/google.svg",alt:"google"})}),Object(f.jsx)(M.a,{}),Object(f.jsxs)(ne.a,{className:"sign-in-form",onFinish:function(t){e(t)},layout:"vertical",name:"signin-form",requiredMark:!1,colon:!1,children:[Object(f.jsx)(ne.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448 email"}],children:Object(f.jsx)(be.a,{prefix:Object(f.jsx)(pe.a,{className:"site-form-item-icon"})})}),Object(f.jsx)(ne.a.Item,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c"}],children:Object(f.jsx)(be.a.Password,{prefix:Object(f.jsx)(ge.a,{className:"site-form-item-icon"})})}),Object(f.jsx)(ne.a.Item,{children:Object(f.jsx)(ne.a.Item,{name:"remember",valuePropName:"checked",noStyle:!0,children:Object(f.jsx)(fe.a,{children:"\u0417\u0430\u043f\u0430\u043c'\u044f\u0442\u0430\u0442\u0438?"})})}),Object(f.jsx)(ne.a.Item,{children:Object(f.jsx)(k.a,{type:"primary",htmlType:"submit",children:"\u0423\u0432\u0456\u0439\u0442\u0438"})})]})]})}function ye(){var e=function(e){(function(e){var t=e.email,n=e.name,a=e.password;return T()({method:"post",headers:{"Content-Type":"application/json"},url:"".concat("https://footbet.site/api","/users/register"),data:{email:t,name:n,password:a}}).then((function(e){return e.status&&201===e.status&&v("JWToken",e.data.token),e})).catch((function(e){return e.response}))})(e).then((function(e){var t;e?201===e.status?window.location.reload():G.a.error({title:"\u041f\u043e\u043c\u0438\u043b\u043a\u0430",content:e.data.error,onOk:function(){}}):(t="\u041f\u043e\u043c\u0438\u043b\u043a\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443...",Z.a.error({message:"\u041f\u043e\u043c\u0438\u043b\u043a\u0430",description:t}))}))};return Object(f.jsxs)(B.a,{children:[Object(f.jsx)("strong",{children:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e"})," ",Object(f.jsx)("br",{}),Object(f.jsx)("a",{className:"sign-google",href:"https://footbet.site/api/auth/google",children:Object(f.jsx)("img",{width:"30",src:"/google.svg",alt:"google"})}),Object(f.jsx)(M.a,{}),Object(f.jsxs)(ne.a,{className:"sign-in-form",onFinish:function(t){e(t)},layout:"vertical",name:"signin-form",requiredMark:!1,colon:!1,children:[Object(f.jsx)(ne.a.Item,{label:"Email",name:"email",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448 email"}],children:Object(f.jsx)(be.a,{prefix:Object(f.jsx)(pe.a,{className:"site-form-item-icon"})})}),Object(f.jsx)(ne.a.Item,{label:"\u0406\u043c'\u044f",name:"name",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448e \u0456\u043c'\u044f"}],children:Object(f.jsx)(be.a,{prefix:Object(f.jsx)(pe.a,{className:"site-form-item-icon"})})}),Object(f.jsx)(ne.a.Item,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",rules:[{required:!0,message:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c"}],children:Object(f.jsx)(be.a.Password,{prefix:Object(f.jsx)(ge.a,{className:"site-form-item-icon"})})}),Object(f.jsx)(ne.a.Item,{label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",name:"password",rules:[{required:!0,message:"\u041f\u043e\u0432\u0442\u043e\u0440\u0456\u0442\u044c \u0432\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c"}],children:Object(f.jsx)(be.a.Password,{prefix:Object(f.jsx)(ge.a,{className:"site-form-item-icon"})})}),Object(f.jsx)(ne.a.Item,{children:Object(f.jsx)(k.a,{type:"primary",htmlType:"submit",children:"\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044f"})})]})]})}var we=P.a.TabPane;function _e(){return Object(a.useContext)(O).authorized?Object(f.jsx)(m.a,{to:"/"}):Object(f.jsxs)("div",{className:"site-form",children:[Object(f.jsx)("h1",{className:"site-title",children:"\u0412\u0445\u0456\u0434/\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"}),Object(f.jsxs)(P.a,{defaultActiveKey:"1",children:[Object(f.jsx)(we,{tab:"\u0412\u0445\u0456\u0434",children:Object(f.jsx)(ve,{})},"1"),Object(f.jsx)(we,{tab:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f",children:Object(f.jsx)(ye,{})},"2")]})]})}var ke=function(){var e=h.a.Header,t=h.a.Footer,n=h.a.Content,c=Object(a.useState)(!!g("JWToken")),s=Object(u.a)(c,2),r=s[0],o=s[1],x=Object(a.useState)([]),v=Object(u.a)(x,2),y=v[0],w=v[1],_=Object(a.useState)([]),k=Object(u.a)(_,2),N=k[0],T=k[1];Object(a.useEffect)((function(){var e=g("JWToken"),t=Object(b.io)("https://footbet.site",{query:{token:e}});return t.on("online",(function(e){e=JSON.parse(e),T(e)})),function(){return t.close()}}),[]);var C=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S().then((function(e){200===e.status&&w(e.data)})).catch((function(e){console.error(e.message)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){C()}),[]),Object(f.jsx)(O.Provider,{value:{authorized:r,setAuthorized:o},children:Object(f.jsx)(d.a,{children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(e,{style:{background:"#fff",position:"fixed",zIndex:1,width:"100%"},children:Object(f.jsx)(I,{tournaments:y})}),Object(f.jsx)(n,{className:"site-layout",children:Object(f.jsxs)(m.d,{children:[Object(f.jsx)(m.b,{exact:!0,path:"/",render:function(e){return Object(f.jsx)(z,Object(i.a)(Object(i.a)({},e),{},{tournaments:y}))}}),Object(f.jsx)(m.b,{exact:!0,path:"/rules",component:A}),y.length&&y.map((function(e){return Object(f.jsx)(m.b,{path:"/".concat(e.slug),exact:!0,render:function(t){return Object(f.jsx)(me,Object(i.a)(Object(i.a)({},t),{},{onlineUsers:N,tournament:e}))}},e.id)})),Object(f.jsx)(m.b,{exact:!0,path:"/my-bets",render:function(e){return Object(f.jsx)(he,Object(i.a)(Object(i.a)({},e),{},{tournaments:y}))}}),Object(f.jsx)(p,{exact:!0,path:"/profile",component:xe}),Object(f.jsx)(m.b,{exact:!0,path:"/login",component:_e}),Object(f.jsx)(m.b,{path:"*",children:Object(f.jsx)("div",{children:"Error 404"})})]})}),Object(f.jsx)(t,{style:{textAlign:"center"},children:"Footbet.site \xa9 2021 Created by David Amerov"})]})})})},Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,359)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(ke,{})}),document.getElementById("root")),Ie()}},[[344,1,2]]]);
//# sourceMappingURL=main.b2ddba03.chunk.js.map