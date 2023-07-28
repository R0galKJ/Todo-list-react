(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(22)},22:function(e,n,t){"use strict";t.r(n);var r,o,a,i,c,l,u,d,m,s,f,b,g,p,h,k,x,j,O,v,y=t(0),E=t.n(y),w=t(9),D=t.n(w),T=t(12),C=t(6),z=t(5),S=function(){var e=Object(y.useState)(function(){var e=localStorage.getItem("tasks");return e?JSON.parse(e):[]}),n=Object(z.a)(e,2),t=n[0],r=n[1];Object(y.useEffect)(function(){localStorage.setItem("tasks",JSON.stringify(t))},[t]);var o=Object(y.useState)(!1),a=Object(z.a)(o,2),i=a[0],c=a[1];return{tasks:t,removeTask:function(e){r(function(n){return n.filter(function(n){return n.id!==e})})},toggleTaskDone:function(e){r(function(n){return n.map(function(n){return n.id===e?Object(C.a)({},n,{done:!n.done}):n})})},setAllDone:function(){r(function(e){return e.map(function(e){return Object(C.a)({},e,{done:!0})})})},addNewTask:function(e){r(function(n){return[].concat(Object(T.a)(n),[{content:e,done:!1,id:0===n.length?1:n[n.length-1].id+1}])})},toggleHideDone:function(){c(function(e){return!e})},hideDone:i}},M=t(2),G=t(1),H=G.d.form(r||(r=Object(M.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-gap: 20px;\n  padding: 20px;\n\n  @media (max-width: ","px) {\n    display: flex;\n    flex-direction: column;\n  }\n"])),function(e){return e.theme.breakpoint.mobileMax}),N=G.d.input(o||(o=Object(M.a)(["\n  padding: 10px;\n  border: 1px solid ",";\n"])),function(e){return e.theme.color.mediumGray}),F=G.d.button(a||(a=Object(M.a)(["\n  border: none;\n  background-color: ",";\n  color: ",";\n  padding: 10px 20px;\n\n  &:hover {\n    cursor: pointer;\n    background-color: ",";\n    transform: scale(1.1);\n    transition: all 0.2s;\n  }\n"])),function(e){return e.theme.color.teal},function(e){return e.theme.color.white},function(e){return e.theme.color.mediumTeal}),L=function(e){var n=e.addNewTask,t=Object(y.useState)(""),r=Object(z.a)(t,2),o=r[0],a=r[1],i=Object(y.useRef)(null);return E.a.createElement(H,{onSubmit:function(e){e.preventDefault();var t=o.trim();""!==t.trim()&&(n(t),a(""))}},E.a.createElement(N,{ref:i,value:o,required:!0,placeholder:"Co jest do zrobienia?",onChange:function(e){var n=e.target;return a(n.value)}}),E.a.createElement(F,{onClick:function(){i.current.focus()}},"Dodaj zadanie"))},A=G.d.ul(i||(i=Object(M.a)(["\n  padding: 30px 10px;\n  margin: 0px;\n  list-style: none;\n"]))),I=G.d.li(c||(c=Object(M.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  grid-gap: 10px;\n  padding: 15px;\n  align-items: center;\n  border-bottom: 1px solid ",";\n\n  ","\n"])),function(e){return e.theme.color.mediumGray},function(e){return e.hidden&&Object(G.c)(l||(l=Object(M.a)(["\n      display: none;\n    "])))}),J=G.d.span(u||(u=Object(M.a)(["\n  ","\n"])),function(e){return e.done&&Object(G.c)(d||(d=Object(M.a)(["\n      text-decoration: line-through;\n    "])))}),R=G.d.button(m||(m=Object(M.a)(["\n  width: 35px;\n  height: 35px;\n  color: ",";\n  border: none;\n\n  ","\n\n  ","\n"])),function(e){return e.theme.color.white},function(e){return e.toggleDone&&Object(G.c)(s||(s=Object(M.a)(["\n      background-color: ",";\n\n      &:hover {\n        background-color: ",";\n        transition: 0.2s;\n        cursor: pointer;\n      }\n    "])),function(e){return e.theme.color.green},function(e){return e.theme.color.mediumGreen})},function(e){return e.remove&&Object(G.c)(f||(f=Object(M.a)(["\n      background-color: ",";\n\n      &:hover {\n        background-color: ",";\n        transition: 0.2s;\n        cursor: pointer;\n      }\n    "])),function(e){return e.theme.color.red},function(e){return e.theme.color.mediumRed})}),q=function(e){var n=e.tasks,t=e.hideDone,r=e.removeTask,o=e.toggleTaskDone;return E.a.createElement(A,null,n.map(function(e){return E.a.createElement(I,{key:e.id,hidden:e.done&&t},E.a.createElement(R,{toggleDone:!0,onClick:function(){return o(e.id)}},e.done?"\u2714":""),E.a.createElement(J,{done:e.done},e.id,". ",e.content),E.a.createElement(R,{remove:!0,onClick:function(){return r(e.id)}},"\ud83d\uddd1"))}))},P=G.d.header(b||(b=Object(M.a)(["\n  @media (max-width: ","px) {\n    display: flex;\n    justify-content: center;\n  }\n"])),function(e){return e.theme.breakpoint.mobileMax}),B=G.d.h1(g||(g=Object(M.a)(["\n  justify-content: flex-start;\n"]))),U=function(e){var n=e.title;return E.a.createElement(P,null,E.a.createElement(B,null,n))},K=G.d.div(p||(p=Object(M.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n\n  @media (max-width: ","px) {\n    display: grid;\n    grid-template-columns: 1fr;\n    align-items: center;\n    justify-content: center;\n  }\n"])),function(e){return e.theme.breakpoint.mobileMax}),Q=G.d.button(h||(h=Object(M.a)(["\n  border: none;\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n\n  ","\n\n  &:hover {\n    color: ",";\n    transition: 0.2s;\n  }\n"])),function(e){return e.theme.color.white},function(e){return e.theme.color.teal},function(e){return e.disabled&&Object(G.c)(k||(k=Object(M.a)(["\n      color: ",";\n      transition: 0.2s;\n      cursor: auto;\n    "])),function(e){return e.theme.color.gray})},function(e){return e.theme.color.lightTeal}),V=function(e){var n=e.tasks,t=e.hideDone,r=e.toggleHideDone,o=e.setAllDone;return E.a.createElement(K,null,n.length>0&&E.a.createElement(E.a.Fragment,null,E.a.createElement(Q,{onClick:r},t?"Poka\u017c":"Ukryj"," uko\u0144czone"),E.a.createElement(Q,{disabled:n.every(function(e){return e.done}),onClick:o},"Uko\u0144cz wszystkie")))},W=G.d.section(x||(x=Object(M.a)(["\n  background-color: ",";\n  margin: 20px 0;\n"])),function(e){return e.theme.color.white}),X=G.d.div(j||(j=Object(M.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid ",";\n  padding: 20px;\n  margin: 0;\n\n  @media (max-width: ","px) {\n    display: grid;\n    grid-template-columns: 1fr;\n    row-gap: 20px;\n  }\n"])),function(e){return e.theme.color.mediumGray},function(e){return e.theme.breakpoint.mobileMax}),Y=G.d.h2(O||(O=Object(M.a)([""]))),Z=function(e){var n=e.title,t=e.body,r=e.extraHeaderContent;return E.a.createElement(W,null,E.a.createElement(X,null,E.a.createElement(Y,null,n),r),t)},$=G.d.main(v||(v=Object(M.a)(["\n  margin: 50px auto;\n  max-width: 1000px;\n  word-break: break-word;\n\n  @media (max-width: ","px) {\n    margin: 20px;\n  }\n"])),function(e){return e.theme.breakpoint.mobileMax}),_=function(e){var n=e.children;return E.a.createElement($,null,n)};var ee,ne=function(){var e=S(),n=e.tasks,t=e.removeTask,r=e.toggleTaskDone,o=e.setAllDone,a=e.addNewTask,i=e.hideDone,c=e.toggleHideDone;return E.a.createElement(_,null,E.a.createElement(U,{title:"Lista zada\u0144"}),E.a.createElement(Z,{title:"Dodaj nowe zadanie",body:E.a.createElement(L,{addNewTask:a})}),E.a.createElement(Z,{title:"Lista zada\u0144",body:E.a.createElement(q,{toggleTaskDone:r,removeTask:t,tasks:n,hideDone:i}),extraHeaderContent:E.a.createElement(V,{tasks:n,hideDone:i,toggleHideDone:c,setAllDone:o})}))},te=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,23)).then(function(n){var t=n.getCLS,r=n.getFID,o=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),o(e),a(e),i(e)})},re=Object(G.b)(ee||(ee=Object(M.a)(['\n    html {\n        box-sizing: border-box;\n    }\n\n    *,\n    ::after,\n    ::before {\n        box-sizing: inherit;\n    }\n\n    body {\n        background-image: url(https://wallpapers.com/images/high/best-marble-background-6v2qysqi0lvrsu40.webp);\n        opacity: 0.9;\n        background-size: cover;\n        font-family: "Lato", sans-serif;\n        margin: 20px;\n    }'])));D.a.createRoot(document.getElementById("root")).render(E.a.createElement(E.a.StrictMode,null,E.a.createElement(G.a,{theme:{color:{white:"#ffffff",teal:"#008080",gray:"#ccc",mediumGray:"#ddd",lightTeal:"hsl(180, 100%, 35%)",mediumTeal:"hsl(180, 100%, 30%)",green:"#008000",mediumGreen:"hsl(120, 100%, 30%)",red:"#ff0000",mediumRed:"hsl(0, 100%, 65%)"},breakpoint:{mobileMax:767}}},E.a.createElement(re,null),E.a.createElement(ne,null)))),te()}},[[14,3,2]]]);
//# sourceMappingURL=main.9b34ff13.chunk.js.map