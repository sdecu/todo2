"use strict";(self.webpackChunktodo=self.webpackChunktodo||[]).push([[57],{208:(n,e,o)=>{o.d(e,{A:()=>g});var t=o(354),r=o.n(t),a=o(314),A=o.n(a),d=o(417),i=o.n(d),c=new URL(o(574),o.b),l=new URL(o(518),o.b),s=A()(r()),u=i()(c),p=i()(l);s.push([n.id,`:root   {\n    --gruvbox-dark-bg: #282828;\n    --gruvbox-dark-fg: #ebdbb2;\n    --gruvbox-dark-red: #cc241d;\n    --gruvbox-dark-green: #98971a;\n    --gruvbox-dark-yellow: #d79921;\n    --gruvbox-dark-blue: #458588;\n    --gruvbox-dark-purple: #b16286;\n    --gruvbox-dark-aqua: #689d6a;\n    --gruvbox-dark-orange: #d65d0e;\n    --gruvbox-dark-gray: #a89984;\n  }\n\nbody   {\n    background-color: var(--gruvbox-dark-fg);\n    margin: 0;\n    padding: 0;\n    overflow:hidden;\n}\n\n.card-list::-webkit-scrollbar {\n   display: none;\n}\n\n#content    {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\nheader  {\n    display: flex;\n    justify-content: center;\n    background-color: #1d2021;\n    height: 80px;\n}\n\nheader h1   {\n    color: var(--gruvbox-dark-fg);\n}\n\nnav {\n    width: fit-content;\n    background-color: #458588;\n    height: calc(100vh - 80px);\n}\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    width: 200px;\n  }\n\n  ul a {\n    display: block;\n    color: #000;\n    padding: 8px 16px;\n    text-decoration: none;\n  }\n  \n  li  {\n    display: block;\n    color: #000;\n    padding: 8px 16px;\n    text-decoration: none;\n  }\n  \n  /* Change the link color on hover */\n  li a:hover {\n    background-color: #504945;\n    color: #b16286;\n  }\n\n  ul a:hover {\n    background-color: #504945;\n    color: #b16286;\n  }\n\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 0,\n  'wght' 400,\n  'GRAD' 0,\n  'opsz' 24\n}\n\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  transition: 0.3s;\n  border-radius: 5px;\n  width: 80vw;\n  height: fit-content;\n  background-color: var(--gruvbox-dark-bg);\n  color: var(--gruvbox-dark-fg);\n  display: flex;\n}\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\n.todo-info {\n  display: grid;\n  grid-template-columns: 40fr 1fr 1fr 1fr 1fr;\n  gap: 10px;\n  box-sizing: border-box;\n  width: 100%;\n  background-color: #504945;\n  padding: 2px 16px;\n}\n\n.projectName  {\n  display: flex;\n  justify-content: center;\n}\n\n.card-list  {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  overflow-x: auto;\n  white-space: nowrap;\n  flex-wrap: wrap;\n  overflow-y: hidden;\n  width: 100vw;\n  padding-left: 5rem;\n  padding-top: 2rem;\n}\n\n\n\nsvg {\n  fill: var(--gruvbox-dark-fg);\n}\n\nli svg  {\n  fill: var(--gruvbox-dark-bg);\n}\n\n.icon-container {\n  width: 24px;\n  height: 24px;\n}\n\n.delete-icon::before {\n  content: "";\n  display: inline;\n  width: 100%;\n  height: 100%;\n  background-image: url(${u});\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.plus-icon::before {\n  content: "";\n  display: inline;\n  width: 100%;\n  height: 100%;\n  background-image: url(${p});\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n\n/*  ---modal styling---*/\n\n.modal {\n  padding: 1em;\n  max-width: 50ch;\n  border: 0;\n  box-shadow: 0 0 1em rgb(0 0 0 / .3);\n\n  & > * {\n    margin: 0 0 0.5rem 0;\n  }\n}\n\n.modal::backdrop {\n  background: rgb(0 0 0 / 0.4);\n}`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;IACI,0BAA0B;IAC1B,0BAA0B;IAC1B,2BAA2B;IAC3B,6BAA6B;IAC7B,8BAA8B;IAC9B,4BAA4B;IAC5B,8BAA8B;IAC9B,4BAA4B;IAC5B,8BAA8B;IAC9B,4BAA4B;EAC9B;;AAEF;IACI,wCAAwC;IACxC,SAAS;IACT,UAAU;IACV,eAAe;AACnB;;AAEA;GACG,aAAa;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,yBAAyB;IACzB,0BAA0B;AAC9B;AACA;IACI,qBAAqB;IACrB,SAAS;IACT,UAAU;IACV,YAAY;EACd;;EAEA;IACE,cAAc;IACd,WAAW;IACX,iBAAiB;IACjB,qBAAqB;EACvB;;EAEA;IACE,cAAc;IACd,WAAW;IACX,iBAAiB;IACjB,qBAAqB;EACvB;;EAEA,mCAAmC;EACnC;IACE,yBAAyB;IACzB,cAAc;EAChB;;EAEA;IACE,yBAAyB;IACzB,cAAc;EAChB;;AAEF;EACE;;;;;AAKF;;AAEA;EACE,uCAAuC;EACvC,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;EACX,mBAAmB;EACnB,wCAAwC;EACxC,6BAA6B;EAC7B,aAAa;AACf;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,2CAA2C;EAC3C,SAAS;EACT,sBAAsB;EACtB,WAAW;EACX,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;AACnB;;;;AAIA;EACE,4BAA4B;AAC9B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,eAAe;EACf,WAAW;EACX,YAAY;EACZ,yDAAyP;EACzP,4BAA4B;EAC5B,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,eAAe;EACf,WAAW;EACX,YAAY;EACZ,yDAAuL;EACvL,4BAA4B;EAC5B,wBAAwB;AAC1B;;;AAGA,wBAAwB;;AAExB;EACE,YAAY;EACZ,eAAe;EACf,SAAS;EACT,mCAAmC;;EAEnC;IACE,oBAAoB;EACtB;AACF;;AAEA;EACE,4BAA4B;AAC9B",sourcesContent:[":root   {\n    --gruvbox-dark-bg: #282828;\n    --gruvbox-dark-fg: #ebdbb2;\n    --gruvbox-dark-red: #cc241d;\n    --gruvbox-dark-green: #98971a;\n    --gruvbox-dark-yellow: #d79921;\n    --gruvbox-dark-blue: #458588;\n    --gruvbox-dark-purple: #b16286;\n    --gruvbox-dark-aqua: #689d6a;\n    --gruvbox-dark-orange: #d65d0e;\n    --gruvbox-dark-gray: #a89984;\n  }\n\nbody   {\n    background-color: var(--gruvbox-dark-fg);\n    margin: 0;\n    padding: 0;\n    overflow:hidden;\n}\n\n.card-list::-webkit-scrollbar {\n   display: none;\n}\n\n#content    {\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n}\n\nheader  {\n    display: flex;\n    justify-content: center;\n    background-color: #1d2021;\n    height: 80px;\n}\n\nheader h1   {\n    color: var(--gruvbox-dark-fg);\n}\n\nnav {\n    width: fit-content;\n    background-color: #458588;\n    height: calc(100vh - 80px);\n}\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    width: 200px;\n  }\n\n  ul a {\n    display: block;\n    color: #000;\n    padding: 8px 16px;\n    text-decoration: none;\n  }\n  \n  li  {\n    display: block;\n    color: #000;\n    padding: 8px 16px;\n    text-decoration: none;\n  }\n  \n  /* Change the link color on hover */\n  li a:hover {\n    background-color: #504945;\n    color: #b16286;\n  }\n\n  ul a:hover {\n    background-color: #504945;\n    color: #b16286;\n  }\n\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 0,\n  'wght' 400,\n  'GRAD' 0,\n  'opsz' 24\n}\n\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  transition: 0.3s;\n  border-radius: 5px;\n  width: 80vw;\n  height: fit-content;\n  background-color: var(--gruvbox-dark-bg);\n  color: var(--gruvbox-dark-fg);\n  display: flex;\n}\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\n.todo-info {\n  display: grid;\n  grid-template-columns: 40fr 1fr 1fr 1fr 1fr;\n  gap: 10px;\n  box-sizing: border-box;\n  width: 100%;\n  background-color: #504945;\n  padding: 2px 16px;\n}\n\n.projectName  {\n  display: flex;\n  justify-content: center;\n}\n\n.card-list  {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  overflow-x: auto;\n  white-space: nowrap;\n  flex-wrap: wrap;\n  overflow-y: hidden;\n  width: 100vw;\n  padding-left: 5rem;\n  padding-top: 2rem;\n}\n\n\n\nsvg {\n  fill: var(--gruvbox-dark-fg);\n}\n\nli svg  {\n  fill: var(--gruvbox-dark-bg);\n}\n\n.icon-container {\n  width: 24px;\n  height: 24px;\n}\n\n.delete-icon::before {\n  content: \"\";\n  display: inline;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23333'%3E%3Cpath d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.plus-icon::before {\n  content: \"\";\n  display: inline;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23333'%3E%3Cpath d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n\n/*  ---modal styling---*/\n\n.modal {\n  padding: 1em;\n  max-width: 50ch;\n  border: 0;\n  box-shadow: 0 0 1em rgb(0 0 0 / .3);\n\n  & > * {\n    margin: 0 0 0.5rem 0;\n  }\n}\n\n.modal::backdrop {\n  background: rgb(0 0 0 / 0.4);\n}"],sourceRoot:""}]);const g=s},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var o="",t=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),t&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=n(e),t&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(n,o,t,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(t)for(var d=0;d<this.length;d++){var i=this[d][0];null!=i&&(A[i]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);t&&A[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],o=n[3];if(!o)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(r," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function o(n){for(var o=-1,t=0;t<e.length;t++)if(e[t].identifier===n){o=t;break}return o}function t(n,t){for(var a={},A=[],d=0;d<n.length;d++){var i=n[d],c=t.base?i[0]+t.base:i[0],l=a[c]||0,s="".concat(c," ").concat(l);a[c]=l+1;var u=o(s),p={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var g=r(p,t);t.byIndex=d,e.splice(d,0,{identifier:s,updater:g,references:1})}A.push(s)}return A}function r(n,e){var o=e.domAPI(e);return o.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;o.update(n=e)}else o.remove()}}n.exports=function(n,r){var a=t(n=n||[],r=r||{});return function(n){n=n||[];for(var A=0;A<a.length;A++){var d=o(a[A]);e[d].references--}for(var i=t(n,r),c=0;c<a.length;c++){var l=o(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=i}}},659:n=>{var e={};n.exports=function(n,o){var t=function(n){if(void 0===e[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}e[n]=o}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(o)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,o)=>{n.exports=function(n){var e=o.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(o){!function(n,e,o){var t="";o.supports&&(t+="@supports (".concat(o.supports,") {")),o.media&&(t+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(t+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),t+=o.css,r&&(t+="}"),o.media&&(t+="}"),o.supports&&(t+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,o)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},128:(n,e,o)=>{var t=o(72),r=o.n(t),a=o(825),A=o.n(a),d=o(659),i=o.n(d),c=o(56),l=o.n(c),s=o(540),u=o.n(s),p=o(113),g=o.n(p),C=o(208),v={};v.styleTagTransform=g(),v.setAttributes=l(),v.insert=i().bind(null,"head"),v.domAPI=A(),v.insertStyleElement=u(),r()(C.A,v),C.A&&C.A.locals&&C.A.locals;let h={section:document.querySelector("section"),card:document.createElement("article"),header:document.createElement("header"),projectNameHeading:document.createElement("h2"),plusText:document.createElement("div"),todo:document.createElement("div"),todoP:document.createElement("p"),todoDelete:document.createElement("div")};!function(){const n=h.section,e=h.todoP;e.textContent="test",n.append(e)}(),card.classList.add("card"),section.appendChild(card),header.classList.add("projectName"),card.appendChild(header),projectNameHeading.textContent="test",header.appendChild(projectNameHeading),plusText.classList.add("plus"),plusText.classList.add(Date.now()),plusText.textContent="plus",header.appendChild(plusText),card;const b=document.querySelectorAll(".plus");for(let n of b)n.addEventListener("click",(()=>{modal.showModal()}));!function(){const n=document.querySelector("#modal"),e=document.querySelector(".close-button"),o=document.querySelector("#submit-task");e.addEventListener("click",(()=>{n.close()})),o.onclick=function(){!function(n,e){const o=function(n){const e=n.getAttribute("class"),o=document.getElementsByClassName(e)[0].closest(".card");return console.log(o),{card:o}}(n);todo.classList.add("content"),todoP.textContent=e,todo.appendChild(todoP),todoDelete.classList.add("delete"),todoDelete.textContent="delete",todo.appendChild(todoDelete),o.appendChild(todo)}(h,"example")}}()},518:n=>{n.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27%23333%27%3E%3Cpath d=%27M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z%27/%3E%3C/svg%3E"},574:n=>{n.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27%23333%27%3E%3Cpath d=%27M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z%27/%3E%3C/svg%3E"}},n=>{n(n.s=128)}]);
//# sourceMappingURL=index.bundle.js.map