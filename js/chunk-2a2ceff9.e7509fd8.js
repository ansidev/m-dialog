(window["webpackJsonpVueMDialog"]=window["webpackJsonpVueMDialog"]||[]).push([["chunk-2a2ceff9"],{"24c2":function(t,e,r){"use strict";var n=r("6c73"),o=r.n(n);o.a},"6c73":function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new z(n||[]);return i._invoke=k(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=s;var h="suspendedStart",l="suspendedYield",f="executing",p="completed",v={};function d(){}function m(){}function w(){}var y={};y[i]=function(){return this};var g=Object.getPrototypeOf,b=g&&g(g(A([])));b&&b!==r&&n.call(b,i)&&(y=b);var x=w.prototype=d.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){function e(r,o,i,a){var c=u(t[r],t,o);if("throw"!==c.type){var s=c.arg,h=s.value;return h&&"object"===typeof h&&n.call(h,"__await")?Promise.resolve(h.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var r;function o(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=o}function k(t,e,r){var n=h;return function(o,i){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?p:l,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function A(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return m.prototype=x.constructor=w,w.constructor=m,w[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o){var i=new L(s(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=A,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:A(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},cd8b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("FileDemo")],1)},o=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",[r("h4",[t._v("Dialog")]),r("vc-button",{attrs:{type:"info",size:"medium"},on:{click:function(e){t.show1=!0}}},[t._v("默认弹窗")]),r("vc-button",{attrs:{type:"info",size:"medium"},on:{click:function(e){t.show2=!0}}},[t._v("多个弹窗")]),r("vc-button",{attrs:{type:"info",size:"medium"},on:{click:function(e){t.show4=!0}}},[t._v("Iframe")]),r("vc-button",{attrs:{type:"info",size:"medium"},on:{click:function(e){t.show5=!0}}},[t._v("自定义过渡动画")]),r("p"),r("vc-button",{attrs:{type:"success",size:"medium"},on:{click:function(e){return t.$alert("Alert 弹窗")}}},[t._v("Alert")]),r("vc-button",{attrs:{type:"success",size:"medium"},on:{click:function(e){return t.$confirm("Confrim 弹窗")}}},[t._v("Confirm")]),r("vc-button",{attrs:{type:"success",size:"medium"},on:{click:t.handleAlert}},[t._v("多个 Alert")]),r("vc-button",{attrs:{type:"success",size:"medium"},on:{click:t.handleConfirm}},[t._v("多个 Confirm")])],1),r("m-dialog",{attrs:{show:t.show1,title:"默认弹窗"},on:{"update:show":function(e){t.show1=e}}},[t._v(" 正文内容... ")]),r("m-dialog",{attrs:{title:"This is info message !",show:t.show2,"auto-width":""},on:{"update:show":function(e){t.show2=e}}},[r("span",[t._v("This is content.")]),t._v(" "),r("vc-button",{attrs:{size:"mini",type:"info"},on:{click:function(e){t.show3=!t.show3}}},[t._v("第二个弹窗")])],1),r("m-dialog",{attrs:{title:"预览","auto-width":"","no-head":"",show:t.show3},on:{"update:show":function(e){t.show3=e}}},[r("img",{attrs:{src:"https://avatars0.githubusercontent.com/u/11366654?s=460&v=4",alt:""}})]),r("m-dialog",{attrs:{title:"Iframe",show:t.show4,"auto-width":""},on:{"update:show":function(e){t.show4=e}}},[r("iframe",{staticStyle:{width:"1000px",height:"600px"},attrs:{src:"https://www.lanyueos.com/",frameborder:"0"}})]),r("m-dialog",{attrs:{title:"自定义过渡动画",show:t.show5,width:"350px","is-middle":"","fade-name":"test-fade"},on:{"update:show":function(e){t.show5=e}}},[r("p",[r("strong",[t._v("自定义弹窗动画")]),r("vc-button",{attrs:{type:"info",size:"mini"},on:{click:function(e){return t.$alert("自定义动画",{fadeName:"test-fade"})}}},[t._v("Alert")])],1)])],1)},a=[];r("96cf"),r("d3b7"),r("e6cf");function c(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,s,"next",t)}function s(t){c(i,n,o,a,s,"throw",t)}a(void 0)}))}}var u={data:function(){return{show1:!1,show2:!1,show3:!1,show4:!1,show5:!1}},methods:{handleAlert:function(){for(var t=0;t<5;t++)this.$alert("Alert ".concat(t))},handleConfirm:function(){var t=s(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e=0;case 1:if(!(e<5)){t.next=14;break}return t.prev=2,t.next=5,this.$confirm("Confirm ".concat(e));case 5:console.log("Confirm ".concat(e,":"),!0),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),console.log("Confirm ".concat(e,":"),!1);case 11:e++,t.next=1;break;case 14:case"end":return t.stop()}}),t,this,[[2,8]])})));function e(){return t.apply(this,arguments)}return e}()}},h=u,l=(r("24c2"),r("2877")),f=Object(l["a"])(h,i,a,!1,null,null,null),p=f.exports,v={components:{FileDemo:p}},d=v,m=Object(l["a"])(d,n,o,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2a2ceff9.e7509fd8.js.map