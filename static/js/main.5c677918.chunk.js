(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{171:function(e,t,n){},172:function(e,t,n){},274:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(31),r=n.n(c),i=(n(171),n(172),n(173),n(78)),s=n(35),l=n.n(s),u=n(55),o=n(52),j=n(160),d=n(277),f=n(43),p=n(158),b=n(155),m=n(278),h=n(98),v=n(159),O=n(276),x=n(15),g=[{title:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435",dataIndex:"name",key:"name"},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e",dataIndex:"amount",key:"age",width:100,align:"center",render:function(e){return Object(x.jsx)("span",{children:e.toLocaleString("ru")})}},{title:"\u0414\u043e\u043b\u044f",dataIndex:"percent",key:"percent",width:100,align:"center",render:function(e){return e>5?Object(x.jsxs)("span",{style:{color:"green",fontWeight:500},children:[e,"%"]}):Object(x.jsxs)("span",{children:[e,"%"]})}}],k=function(e){var t=e.data,n=e.filterHandler,c=Object(a.useState)([]),r=Object(o.a)(c,2),i=r[0],s=r[1],l=function(){n(i),s([])},u={selectedRowKeys:i,onChange:function(e){s(e)}};return Object(x.jsx)("div",{className:"div",children:t.map((function(e){var t=i.length>0&&e.column===i[0].split(":")[0];return Object(x.jsx)(h.Element,{name:e.column,className:"element",children:Object(x.jsxs)("div",{className:"table",children:[Object(x.jsxs)("div",{className:"table_header",children:[Object(x.jsx)("h3",{children:e.column}),Object(x.jsx)("span",{className:t?"button":"hidden",onClick:l,children:"\u041e\u0442\u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(x.jsx)(O.a,{dataSource:e.data,columns:g,rowSelection:u,pagination:{position:["none"]}})]})},e.column)}))})},w=n(161),y=n(86),N=n.n(y);N.a.defaults.baseURL="http://82.146.40.11:5000";var S=function(e,t){return Object(u.a)(l.a.mark((function n(){var a,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,N.a.post("/api/files/filter",{filename:e,filter:t});case 3:return a=n.sent,c=a.data,n.abrupt("return",c);case 8:n.prev=8,n.t0=n.catch(0),console.log("error",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},C=function(e,t){return Object(u.a)(l.a.mark((function n(){var a,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,N.a.post("/api/files/export",{filename:e,filter:t});case 3:return a=n.sent,c=a.data,n.abrupt("return",c);case 8:n.prev=8,n.t0=n.catch(0),console.log("error",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},_=function(e){return Object(u.a)(l.a.mark((function t(){var n,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.a.post("/api/files/filename",{filename:e});case 3:return n=t.sent,a=n.data,t.abrupt("return",a);case 8:t.prev=8,t.t0=t.catch(0),console.log("error",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()};var D=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=(t[0],t[1],Object(a.useState)("")),c=Object(o.a)(n,2),r=c[0],s=c[1],O=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(o.a)(r,2),j=s[0],d=s[1],f=Object(a.useState)(null),p=Object(o.a)(f,2),b=p[0],m=p[1],h=Object(a.useState)(!1),v=Object(o.a)(h,2),O=v[0],x=v[1],g=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,r,s,u,o=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:"plus",a=[],"plus"===n?(r={column:t[0].split(":")[0],value:t.map((function(e){return e.split(":")[1]}))},a=[].concat(Object(w.a)(j),[r])):1===j[t.index].value.length?a=j.filter((function(e){return e.column!==t.column})):(s=j.map((function(e){return e.column===t.column?Object(i.a)(Object(i.a)({},e),{},{value:e.value.filter((function(e){return e!==t.value}))}):e})),a=s),d(a),x(!0),e.next=7,S(b,a);case 7:u=e.sent,c(u.data),x(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,_(t);case 3:n=e.sent,c(n.data),m(t),x(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{data:n,setData:c,loading:O,filter:j,filterHandler:g,filename:b,setFilename:m,getDataByFilename:k}}(),g=O.data,y=O.filter,N=O.loading,D=O.setData,F=O.filterHandler,H=O.filename,I=O.setFilename,L=O.getDataByFilename,B={name:"file",action:"http://82.146.40.11:5000/api/files",onChange:function(e){e.file.status,"done"===e.file.status?(D(e.file.response.data),I(e.file.response.filename)):"error"===e.file.status&&j.b.error("".concat(e.file.name," file upload failed."))}},T=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(H,y);case 2:t=e.sent,a=y,n=function(e){var t=e.getFullYear(),n=(e.getMonth()+1).toString();1===n.length&&(n="0"+n);var a=e.getDate().toString();return 1===a.length&&(a="0"+a),a+"-"+n+"-"+t}(new Date)+"__"+a.map((function(e){return"".concat(e.column,"-").concat(e.value.join(","))})).join("__"),"csv",Object(v.a)({data:t.data,fileName:n,exportType:"csv"});case 6:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}}();return g?Object(x.jsxs)("div",{className:"main",children:[Object(x.jsx)("div",{className:"info div",children:Object(x.jsxs)("div",{className:"stick",children:[g?Object(x.jsxs)("div",{className:"red",children:[g.length.toLocaleString("ru"),y.length>0?Object(x.jsx)("span",{className:"button",onClick:T,children:"\ud83d\udccb"}):null]}):null,y.length>0?Object(x.jsxs)("div",{style:{marginTop:"20px"},children:[Object(x.jsx)("h4",{style:{marginTop:"20px"},children:"\u0424\u0438\u043b\u044c\u0442\u0440\u044b"}),y.map((function(e,t){return e.value.map((function(n){return Object(x.jsxs)("div",{className:"filter_item",onClick:function(){return F({value:n,column:e.column,index:t},"minus")},children:[e.column,": ",n]},"".concat(e.column,"-").concat(n))}))}))]}):null,Object(x.jsx)("div",{children:Object(x.jsx)(b.a,{spinning:N})}),Object(x.jsxs)("div",{className:"block",children:[Object(x.jsx)("h4",{children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438"}),Object(x.jsx)("ul",{className:"items",children:null===g||void 0===g?void 0:g.keys.work.map((function(e){return Object(x.jsx)("li",{children:Object(x.jsx)(h.Link,{activeClass:"active",className:e,to:e,spy:!0,smooth:!0,duration:500,children:e})},e)}))})]})]})}),g?Object(x.jsx)(k,{data:g.result,filterHandler:F}):null]}):Object(x.jsxs)("div",{className:"center",children:[Object(x.jsx)("div",{children:Object(x.jsx)(d.a,Object(i.a)(Object(i.a)({},B),{},{children:Object(x.jsx)(f.a,{icon:Object(x.jsx)(m.a,{}),block:!0,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438 \u0444\u0430\u0439\u043b \u0441 \u043e\u0431\u0449\u0435\u0439 \u0431\u0430\u0437\u043e\u0439!"})}))}),Object(x.jsxs)("div",{className:"file_input",children:[Object(x.jsx)(p.a,{placeholder:"\u041f\u0430\u0440\u043e\u043b\u0438 \u044f\u0432\u043a\u0438",onChange:function(e){return s(e.target.value)}}),Object(x.jsx)(f.a,{type:"primary",block:!0,onClick:function(){return L(r)},children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"}),Object(x.jsx)(b.a,{spinning:N})]})]})};var F=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(D,{})})};r.a.render(Object(x.jsx)(F,{}),document.getElementById("root"))}},[[274,1,2]]]);
//# sourceMappingURL=main.5c677918.chunk.js.map