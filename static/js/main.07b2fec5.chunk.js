(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={item:"Message_item__5j_LX",message:"Message_message__3DNCs",time:"Message_time__3bawi",message__background:"Message_message__background__R1FWx",author:"Message_author__2jymM"}},,,,function(e,t,a){e.exports={someClass:"Greeting_someClass__3SB9o",error:"Greeting_error__3dVbz",hw3Wrapper:"Greeting_hw3Wrapper__2uK2X"}},function(e,t,a){e.exports={superInput:"SuperInputText_superInput__35sRC",errorInput:"SuperInputText_errorInput__2VOrN",error:"SuperInputText_error__XoFgZ"}},,,,,function(e,t,a){e.exports={blue:"HW4_blue__Mji9u",column:"HW4_column__26ydC"}},function(e,t,a){e.exports={default:"SuperButton_default__1wxiA",red:"SuperButton_red__1tkla"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__3yozp",spanClassName:"SuperCheckbox_spanClassName__1c3Sw"}},,,,function(e,t,a){e.exports={App:"App_App__3GRQb"}},,,function(e,t,a){e.exports=a(37)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),o=(a(31),a(23)),u=a.n(o),s=a(5);var i=function(){return r.a.createElement("div",null,"// add NavLinks",r.a.createElement(s.b,{to:"/junior"},"JUN"),r.a.createElement(s.b,{to:"/junior-plus"},"JUN+"))},m=a(1),d=a(7),E=a.n(d);var p=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:E.a.item},r.a.createElement("div",{className:E.a.message},r.a.createElement("img",{src:e.avatar,alt:""}),r.a.createElement("div",{className:E.a.message__background},r.a.createElement("p",{className:E.a.author},e.name),r.a.createElement("div",null,r.a.createElement("p",null,e.message,r.a.createElement("span",{className:E.a.time},e.time)))))))},h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Some Name",_="some text",b="22:00";var v=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(p,{avatar:h,name:f,message:_,time:b}),r.a.createElement("hr",null),r.a.createElement("hr",null))},g=a(4);var C=function(e){return r.a.createElement("div",null,e.affair.name,"  "," ",e.affair.priority," ",r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var k=function(e){var t=e.data.map((function(t){return r.a.createElement(C,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("low")}},"Low"))},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var j=function(){var e=Object(n.useState)(N),t=Object(g.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(g.a)(c,2),u=o[0],s=o[1],i=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(k,{data:i,setFilter:s,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},O=a(25),w=a(11),x=a.n(w),y=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=""===t?x.a.error:x.a.someClass;return r.a.createElement("div",{className:x.a.hw3Wrapper},r.a.createElement("input",{value:t,onChange:a,className:o}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,"\u041e\u0431\u0449\u0435\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e User's ",c))},S=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(g.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),i=Object(g.a)(s,2),m=i[0],d=i[1],E=t.length;return r.a.createElement(y,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){""===o||" "===o?d("\u041d\u0443\u0436\u043d\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0438\u043c\u044f"):(a(o),alert("Hello ".concat(o," !")),d(""),u(""))},error:m,totalUsers:E})},A=a(39);var I=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{style:{backgroundColor:"#9deded"}},r.a.createElement("hr",null),"homeworks 3",r.a.createElement(S,{users:a,addUserCallback:function(e){l([].concat(Object(O.a)(a),[{_id:Object(A.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=a(6),U=a(12),W=a.n(U),F=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,s=Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(W.a.error," ").concat(u||""),m="".concat(c?W.a.errorInput:W.a.superInput," ").concat(c?"":o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:m},s)),c&&r.a.createElement("span",{className:i},c))},M=a(17),J=a.n(M),B=a(18),R=a.n(B),G=function(e){var t=e.red,a=e.className,n=Object(T.a)(e,["red","className"]),l="".concat(t?R.a.red:R.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},H=a(19),P=a.n(H),X=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(P.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("div",{className:P.a.spanClassName},l))};var K=function(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),s=Object(g.a)(u,2),i=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(F,{value:a,onChangeText:l,onEnter:o,error:c,className:J.a.blue}),r.a.createElement(G,{red:!0,onClick:o},"delete "),r.a.createElement(X,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(X,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var L=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(j,null),r.a.createElement(I,null),r.a.createElement(K,null))};var z=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var V=function(){return r.a.createElement("div",null,"JUNIOR+")};var Z=function(){return r.a.createElement("div",null,"JUNIOR")},q="/pre-junior",D="/junior",Q="/junior-plus";var Y=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,render:function(){return r.a.createElement(m.a,{to:q})}}),r.a.createElement(m.b,{path:q,render:function(){return r.a.createElement(L,null)}}),"// add routes",r.a.createElement(m.b,{path:Q,render:function(){return r.a.createElement(V,null)}}),r.a.createElement(m.b,{path:D,render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(m.b,{render:function(){return r.a.createElement(z,null)}})))};var $=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(i,null),r.a.createElement(Y,null)))};var ee=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[26,1,2]]]);
//# sourceMappingURL=main.07b2fec5.chunk.js.map