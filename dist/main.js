(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([n.id,"*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  text-decoration: none;\n  list-style: none;\n  color: inherit;\n  border: none;\n  outline: none;\n}\n\nbody {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#main {\n  display: flex;\n  flex-direction: column;\n}\n\n.color-picker {\n  background-color: #1c1a1c;\n  color: #fff;\n  padding: 1rem;\n  border-radius: 0.7rem;\n  font-size: 1.5rem;\n  letter-spacing: 0.1rem;\n}\n\n#color {\n  color: #5baadd;\n}\n\nbutton {\n  background-color: #fff;\n  color: #1c1a1c;\n  border: 2px solid #1c1a1c;\n  border-radius: 0.7rem;\n  align-self: center;\n  padding: 1rem;\n  margin-top: 2rem;\n  font-size: 1rem;\n  font-weight: bold;\n}\n\nbutton:hover {\n  background-color: #e7e4e4;\n}\n\nbutton:active {\n  transform: scale(0.95);\n}\n\n@media only screen and (max-width: 600px) {\n  #main {\n    text-align: center;\n    width: min-content;\n  }\n}\n",""]);const i=c},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&c[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var f=t(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var m=o(p,r);r.byIndex=i,e.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=t(a[c]);e[i].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),c=t.n(a),i=t(565),s=t.n(i),l=t(216),d=t.n(l),u=t(589),f=t.n(u),p=t(426),m={};m.styleTagTransform=f(),m.setAttributes=s(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;const v=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"],h=()=>{document.getElementById("color").textContent=(()=>{let n="#";for(let e=0;e<6;e+=1)n+=v[Math.floor(Math.random()*v.length)];return n})(),document.body.style.backgroundColor=document.getElementById("color").textContent};h(),document.querySelector("button").addEventListener("click",(()=>{h()}))})()})();