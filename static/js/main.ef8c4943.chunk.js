(this["webpackJsonplocal-state-management"]=this["webpackJsonplocal-state-management"]||[]).push([[0],{36:function(e,t,n){e.exports=n(50)},41:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(13),c=n.n(a),u=n(34),i=n(8),l=(n(41),n(64)),s=function(e){var t=0===e.counter;return o.a.createElement(l.a,{variant:"contained",color:e.color,disabled:t,onClick:e.onAction},e.text)};s.defaultProps={color:"",text:"Counter",isDisabled:!1};var m=s,d=function(e){return o.a.createElement("p",null,"Counter Value is ",e.counter)},f=n(22),v=n(29),w=n(18);function h(){var e=Object(v.a)(["\n  query getCounter {\n    counter @client\n  }\n"]);return h=function(){return e},e}var E=n.n(w)()(h());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=new u.a({clientState:{defaults:{counter:0}}}),g=function(){var e=Object(f.a)(E),t=e.data,n=e.client;return o.a.createElement(o.a.StrictMode,null,o.a.createElement(d,{counter:t.counter}),o.a.createElement(m,{text:"Increment Counter",color:"primary",onAction:function(){return n.writeData({data:{counter:t.counter+1}})}}),o.a.createElement(m,{text:"Decrement Counter",color:"secondary",counter:t.counter,onAction:function(){return n.writeData({data:{counter:t.counter-1}})}}),o.a.createElement(m,{text:"Reset Counter",counter:t.counter,onAction:function(){return n.writeData({data:{counter:0}})}}))};c.a.render(o.a.createElement(i.a,{client:p},o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.ef8c4943.chunk.js.map