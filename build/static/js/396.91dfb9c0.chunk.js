"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[396],{7019:function(e,n,a){a.d(n,{Z:function(){return h}});var r=a(4942),t=a(1694),s=a.n(t),i="Card_card__4-jbm",l="Card_cardTitle__d6oQG",o="Card_cardBody__AWMIx",c="Card_cardBodyWithoutTitle__KoSil",u="Card_cardAction__X9Ik5",d="Card_noMobileShadow__2UZHa",p=a(184),h=function(e){var n=e.title,a=e.action,t=e.style,h=e.titleStyle,m=e.noMobileShadow,g=e.children;return(0,p.jsxs)("div",{className:s()(i,(0,r.Z)({},d,m)),style:t,children:[n&&(0,p.jsxs)("div",{className:l,style:h,children:[(0,p.jsx)("span",{children:n}),a&&(0,p.jsx)("div",{className:u,children:a})]}),(0,p.jsx)("div",{className:s()(o,(0,r.Z)({},c,!n)),children:g})]})}},2406:function(e,n,a){a.d(n,{Z:function(){return h}});var r=a(4942),t=a(1694),s=a.n(t),i="Input_input__s4ezt",l="Input_inputError__Mk+NW",o="Input_inputReadOnly__MvJlc",c="Input_label__2youZ",u="Input_labelReadOnly__OY5tx",d="Input_error__2a+t8",p=a(184),h=function(e){var n,a=e.type,t=e.value,h=e.error,m=e.id,g=e.name,x=e.placeholder,_=e.label,f=e.readOnly,v=e.onChange,j=e.onFocus,b=e.onBlur;return(0,p.jsxs)(p.Fragment,{children:[_&&(0,p.jsx)("label",{className:s()(c,(0,r.Z)({},u,f)),htmlFor:g,children:_}),(0,p.jsx)("input",{type:a,value:t,id:m,name:g,placeholder:x,className:s()(i,(n={},(0,r.Z)(n,l,h),(0,r.Z)(n,o,f),n)),readOnly:f,onFocus:j,onBlur:b,onChange:v}),h&&(0,p.jsx)("div",{className:d,children:h})]})}},8396:function(e,n,a){a.r(n),a.d(n,{default:function(){return I}});var r=a(6266),t=a(2791),s=a(5861),i=a(885),l=a(7757),o=a.n(l),c=a(6960),u=a(7019),d=a(6153),p=a(8709),h=a(6381),m=a(2406),g="SignIn_google__KM6RS",x="SignIn_googleImg__f55Pl",_="SignIn_googleText__QTuRu",f="SignIn_inputWrap__GPqcy",v=a(184),j=function(){var e=(0,t.useState)(!1),n=(0,i.Z)(e,2),a=n[0],r=n[1],l=(0,t.useState)(""),j=(0,i.Z)(l,2),b=j[0],w=j[1],Z=(0,t.useState)(""),y=(0,i.Z)(Z,2),N=y[0],S=y[1],C=(0,t.useState)(""),k=(0,i.Z)(C,2),I=k[0],F=k[1],O=(0,t.useState)(""),T=(0,i.Z)(O,2),M=T[0],W=T[1],B=function(e,n){"email"===e&&w(n),"password"===e&&S(n)},D=function(){var e=(0,s.Z)(o().mark((function e(n){var a,t,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),(0,h.d4)(b)){e.next=5;break}return F("\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0430 email \u0430\u0434\u0440\u0435\u0441\u0430"),e.abrupt("return");case 5:if(I||M){e.next=19;break}return e.prev=6,r(!0),e.next=10,(0,p.x4)({email:b,password:N});case 10:(a=e.sent).status&&200===a.status&&(t=a.data.token,(0,h.d8)("JWToken",t,{expires:new Date(Date.now()+6048e6),path:"/"}),r(!1),window.location.href="".concat(window.location.origin,"/profile")),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(6),r(!1),"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"===e.t0.response.data&&F("\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"),"\u041d\u0435\u0432\u0456\u0440\u043d\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"===e.t0.response.data?W("\u041d\u0435\u0432\u0456\u0440\u043d\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"):(s=e.t0.response.data||e.t0.message,c.Am.error(s,3e3));case 19:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(n){return e.apply(this,arguments)}}();return(0,v.jsxs)(u.Z,{title:"\u0412\u0445\u0456\u0434",children:[(0,v.jsx)("div",{className:g,children:(0,v.jsxs)("a",{className:"sign-google",href:"".concat("https://footbet.pp.ua","/api/auth/google"),children:[(0,v.jsx)("span",{className:x,children:(0,v.jsx)("img",{width:"30",src:"/google.svg",alt:"google"})}),(0,v.jsx)("span",{className:_,children:"\u0423\u0432\u0456\u0439\u0442\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e Google"})]})}),(0,v.jsxs)("form",{method:"POST",noValidate:!0,onSubmit:D,children:[(0,v.jsx)("div",{className:f,children:(0,v.jsx)(m.Z,{type:"email",id:"email",name:"email",placeholder:"Email",label:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c email",error:I,value:b,onChange:function(e){return B("email",e.target.value)},onFocus:function(){return F("")}})}),(0,v.jsx)("div",{className:f,children:(0,v.jsx)(m.Z,{type:"password",id:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",label:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",error:M,value:N,onChange:function(e){return B("password",e.target.value)},onFocus:function(){return W("")}})}),(0,v.jsx)("div",{className:f,children:(0,v.jsx)(d.Z,{type:"submit",variant:"primary",isLoading:a,isDisabled:!b&&!N,children:a?"\u0412\u0445\u0456\u0434...":"\u0412\u0445\u0456\u0434"})})]})]})},b=a(2982),w="SignUp_google__pZcio",Z="SignUp_googleImg__kcj-I",y="SignUp_googleText__GLb6b",N="SignUp_inputWrap__tB4gT",S=function(){var e=(0,t.useState)(!1),n=(0,i.Z)(e,2),a=n[0],r=n[1],l=(0,t.useState)(["","","",""]),g=(0,i.Z)(l,2),x=g[0],_=g[1],f=(0,t.useState)(["","","",""]),j=(0,i.Z)(f,2),S=j[0],C=j[1],k=function(){var e=(0,b.Z)(S),n=(0,h.d4)(x[0]),a=x[3]&&x[2]===x[3];return n||(e[0]="\u041d\u0435\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u0430 email \u0430\u0434\u0440\u0435\u0441\u0430"),a||(e[2]=" ",e[3]="\u041f\u0430\u0440\u043e\u043b\u0456 \u043d\u0435 \u0441\u043f\u0456\u0432\u043f\u0430\u0434\u0430\u044e\u0442\u044c"),x[1]||(e[1]="\u0406\u043c'\u044f \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0435"),e.length&&C(e),!e.some((function(e){return e}))},I=function(){var e=(0,s.Z)(o().mark((function e(n){var a,t,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!k()){e.next=15;break}return a={email:x[0],name:x[1],password:x[2]},e.prev=3,e.next=6,(0,p.z2)(a);case 6:(t=e.sent)&&201===t.status&&window.location.reload(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(3),r(!1),s=e.t0.response.data||e.t0.message,c.Am.error(s,3e3);case 15:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(n){return e.apply(this,arguments)}}(),F=function(e,n){var a=x.map((function(a,r){return n===r?e.trim():a}));_(a)},O=function(e){if(S[e]){var n=S.map((function(n,a){return a===e?"":n}));C(n)}};return(0,v.jsxs)(u.Z,{title:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f",children:[(0,v.jsx)("div",{className:w,children:(0,v.jsxs)("a",{className:"sign-google",href:"".concat("https://footbet.pp.ua","/api/auth/google"),children:[(0,v.jsx)("span",{className:Z,children:(0,v.jsx)("img",{width:"30",src:"/google.svg",alt:"google"})}),(0,v.jsx)("span",{className:y,children:"\u0423\u0432\u0456\u0439\u0442\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e Google"})]})}),(0,v.jsxs)("form",{method:"POST",noValidate:!0,onSubmit:I,children:[(0,v.jsx)("div",{className:N,children:(0,v.jsx)(m.Z,{type:"email",id:"email",name:"email",placeholder:"Email",label:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c email",error:S[0],value:x[0],onChange:function(e){return F(e.target.value,0)},onFocus:function(){return O(0)}})}),(0,v.jsx)("div",{className:N,children:(0,v.jsx)(m.Z,{type:"text",id:"name",name:"name",placeholder:"\u0406\u043c'\u044f",label:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f",error:S[1],value:x[1],onChange:function(e){return F(e.target.value,1)},onFocus:function(){return O(1)}})}),(0,v.jsx)("div",{className:N,children:(0,v.jsx)(m.Z,{type:"password",id:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",label:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",error:S[2],value:x[2],onChange:function(e){return F(e.target.value,2)},onFocus:function(){return O(2)}})}),(0,v.jsx)("div",{className:N,children:(0,v.jsx)(m.Z,{type:"password",id:"password",name:"password",placeholder:"\u041f\u0456\u0434\u0442\u0432\u0435\u0434\u0438\u0442\u0438 \u043f\u0430\u0440\u043e\u043b\u044c",label:"\u041f\u0456\u0434\u0442\u0432\u0435\u0434\u0456\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",error:S[3],value:x[3],onChange:function(e){return F(e.target.value,3)},onFocus:function(){return O(3)}})}),(0,v.jsx)("div",{className:N,children:(0,v.jsx)(d.Z,{type:"submit",variant:"primary",isLoading:a,children:a?"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f...":"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"})})]})]})},C=a(9479),k="LoginPage_login__26O2H",I=function(){var e=(0,t.useContext)(C.bV).setTitle;return(0,t.useEffect)((function(){e("\u0412\u0445\u0456\u0434/\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f")}),[e]),(0,v.jsx)("div",{className:k,children:(0,v.jsxs)(r.mQ,{children:[(0,v.jsxs)(r.td,{children:[(0,v.jsx)(r.OK,{children:"\u0412\u0445\u0456\u0434"}),(0,v.jsx)(r.OK,{children:"\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f"})]}),(0,v.jsx)(r.x4,{children:(0,v.jsx)(j,{})}),(0,v.jsx)(r.x4,{children:(0,v.jsx)(S,{})})]})})}}}]);
//# sourceMappingURL=396.91dfb9c0.chunk.js.map