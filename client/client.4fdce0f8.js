function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function a(t,e,n,r,o,s,c){const a=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(a){const o=i(e,n,r,c);t.p(o,a)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function v(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function _(t){return b(t," ")}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function E(t,e=document.body){return Array.from(e.querySelectorAll(t))}let w;function S(t){w=t}function N(){if(!w)throw new Error("Function called outside component initialization");return w}function P(t){N().$$.on_mount.push(t)}const R=[],A=[],j=[],C=[],O=Promise.resolve();let k=!1;function L(t){j.push(t)}let q=!1;const I=new Set;function T(){if(!q){q=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];S(e),U(e.$$)}for(S(null),R.length=0;A.length;)A.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];I.has(e)||(I.add(e),e())}j.length=0}while(R.length);for(;C.length;)C.pop()();k=!1,q=!1,I.clear()}}function U(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}const J=new Set;let B;function V(){B={r:0,c:[],p:B}}function z(){B.r||o(B.c),B=B.p}function K(t,e){t&&t.i&&(J.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(J.has(t))return;J.add(t),B.c.push(()=>{J.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function D(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=e[s];if(i){for(const t in c)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[s]=i}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function H(t){return"object"==typeof t&&null!==t?t:{}}function Y(t){t&&t.c()}function F(t,e){t&&t.l(e)}function G(t,e,r){const{fragment:c,on_mount:i,on_destroy:a,after_update:l}=t.$$;c&&c.m(e,r),L(()=>{const e=i.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(L)}function W(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){-1===t.$$.dirty[0]&&(R.push(t),k||(k=!0,O.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(e,n,s,c,i,a,l=[-1]){const u=w;S(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let h=!1;if(d.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&X(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=y(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&K(e.$$.fragment),G(e,n.target,n.anchor),T()}S(u)}class Z{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const tt=[];function et(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!tt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),tt.push(n,e)}if(t){for(let t=0;t<tt.length;t+=2)tt[t][0](tt[t+1]);tt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const a=[c,i];return o.push(a),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const nt={};function rt(e){let n,r,o,s;return{c(){n=d("nav"),r=d("div"),o=d("span"),s=h("Emparejados"),this.h()},l(t){n=v(t,"NAV",{class:!0});var e=y(n);r=v(e,"DIV",{class:!0});var c=y(r);o=v(c,"SPAN",{class:!0});var i=y(o);s=b(i,"Emparejados"),i.forEach(f),c.forEach(f),e.forEach(f),this.h()},h(){$(o,"class","text-center w-full text-2xl font-semibold"),$(r,"class","flex items-center text-white w-full content-center"),$(n,"class","flex justify-between flex-wrap bg-primary py-3 px-6 mt-3\r\n    mx-3 rounded-lg")},m(t,e){u(t,n,e),l(n,r),l(r,o),l(o,s)},p:t,i:t,o:t,d(t){t&&f(n)}}}function ot(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class st extends Z{constructor(t){super(),Q(this,t,ot,rt,c,{segment:0})}}function ct(t){let e,n,r,o;e=new st({props:{segment:t[0]}});const s=t[2].default,c=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(s,t,t[1],null);return{c(){Y(e.$$.fragment),n=m(),r=d("main"),c&&c.c(),this.h()},l(t){F(e.$$.fragment,t),n=_(t),r=v(t,"MAIN",{class:!0});var o=y(r);c&&c.l(o),o.forEach(f),this.h()},h(){$(r,"class","py-3 px-4 h-full w-full")},m(t,s){G(e,t,s),u(t,n,s),u(t,r,s),c&&c.m(r,null),o=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),c&&c.p&&2&n&&a(c,s,t,t[1],n,null,null)},i(t){o||(K(e.$$.fragment,t),K(c,t),o=!0)},o(t){M(e.$$.fragment,t),M(c,t),o=!1},d(t){W(e,t),t&&f(n),t&&f(r),c&&c.d(t)}}}function it(t,e,n){let{$$slots:r={},$$scope:o}=e,{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class at extends Z{constructor(t){super(),Q(this,t,it,ct,c,{segment:0})}}function lt(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=h(r)},l(t){e=v(t,"PRE",{});var o=y(e);n=b(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&x(n,r)},d(t){t&&f(e)}}}function ut(e){let n,r,o,s,c,i,a,p,w,S=e[1].message+"";document.title=n=e[0];let N=e[2]&&e[1].stack&&lt(e);return{c(){r=m(),o=d("h1"),s=h(e[0]),c=m(),i=d("p"),a=h(S),p=m(),N&&N.c(),w=g(),this.h()},l(t){E('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=_(t),o=v(t,"H1",{class:!0});var n=y(o);s=b(n,e[0]),n.forEach(f),c=_(t),i=v(t,"P",{class:!0});var l=y(i);a=b(l,S),l.forEach(f),p=_(t),N&&N.l(t),w=g(),this.h()},h(){$(o,"class","svelte-8od9u6"),$(i,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,c,e),u(t,i,e),l(i,a),u(t,p,e),N&&N.m(t,e),u(t,w,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&x(s,t[0]),2&e&&S!==(S=t[1].message+"")&&x(a,S),t[2]&&t[1].stack?N?N.p(t,e):(N=lt(t),N.c(),N.m(w.parentNode,w)):N&&(N.d(1),N=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(c),t&&f(i),t&&f(p),N&&N.d(t),t&&f(w)}}}function ft(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class pt extends Z{constructor(t){super(),Q(this,t,ft,ut,c,{status:0,error:1})}}function dt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(i())),{c(){n&&Y(n.$$.fragment),r=g()},l(t){n&&F(n.$$.fragment,t),r=g()},m(t,e){n&&G(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?D(s,[H(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){V();const t=n;M(t.$$.fragment,1,0,()=>{W(t,1)}),z()}c?(n=new c(i()),Y(n.$$.fragment),K(n.$$.fragment,1),G(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&K(n.$$.fragment,t),o=!0)},o(t){n&&M(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&W(n,t)}}}function ht(t){let e,n;return e=new pt({props:{error:t[0],status:t[1]}}),{c(){Y(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,r){G(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function mt(t){let e,n,r,o;const s=[ht,dt],c=[];function i(t,e){return t[0]?0:1}return e=i(t),n=c[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){c[e].m(t,n),u(t,r,n),o=!0},p(t,o){let a=e;e=i(t),e===a?c[e].p(t,o):(V(),M(c[a],1,1,()=>{c[a]=null}),z(),n=c[e],n||(n=c[e]=s[e](t),n.c()),K(n,1),n.m(r.parentNode,r))},i(t){o||(K(n),o=!0)},o(t){M(n),o=!1},d(t){c[e].d(t),t&&f(r)}}}function gt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[mt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new at({props:s}),{c(){Y(n.$$.fragment)},l(t){F(n.$$.fragment,t)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=12&e?D(o,[4&e&&{segment:t[2][0]},8&e&&H(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(K(n.$$.fragment,t),r=!0)},o(t){M(n.$$.fragment,t),r=!1},d(t){W(n,t)}}}function $t(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:i}=e,{level1:a=null}=e,{notify:l}=e;var u,f,p;return u=l,N().$$.after_update.push(u),f=nt,p=r,N().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,i,a,r,l]}class yt extends Z{constructor(t){super(),Q(this,t,$t,gt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const vt=[],bt=[{js:()=>Promise.all([import("./index.55288d9e.js"),__inject_styles(["client-a2a37a6a.css","index-ef5f8b54.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.d697fa59.js"),__inject_styles(["client-a2a37a6a.css","index-ef5f8b54.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[size].bffe1b9a.js"),__inject_styles(["client-a2a37a6a.css"])]).then((function(t){return t[0]}))}],_t=(xt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/select\/([^/]+?)\/?$/,parts:[null,{i:1,params:t=>({id:xt(t[1])})}]},{pattern:/^\/select\/([^/]+?)\/([^/]+?)\/?$/,parts:[null,null,{i:2,params:t=>({id:xt(t[1]),size:xt(t[2])})}]}]);var xt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Et(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{a(r.next(t))}catch(t){s(t)}}function i(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,i)}a((r=r.apply(t,e||[])).next())}))}function wt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let St,Nt=1;const Pt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Rt={};let At,jt;function Ct(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ot(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(At))return null;let e=t.pathname.slice(At.length);if(""===e&&(e="/"),!vt.some(t=>t.test(e)))for(let n=0;n<_t.length;n+=1){const r=_t[n],o=r.pattern.exec(e);if(o){const n=Ct(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},i={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:i}}}}function kt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=wt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ot(o);if(s){It(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),Pt.pushState({id:St},"",o.href)}}function Lt(){return{x:pageXOffset,y:pageYOffset}}function qt(t){if(Rt[St]=Lt(),t.state){const e=Ot(new URL(location.href));e?It(e,t.state.id):location.href=location.href}else Nt=Nt+1,function(t){St=t}(Nt),Pt.replaceState({id:St},"",location.href)}function It(t,e,n,r){return Et(this,void 0,void 0,(function*(){const o=!!e;if(o)St=e;else{const t=Lt();Rt[St]=t,St=e=++Nt,Rt[St]=n?t:{x:0,y:0}}if(yield jt(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=Rt[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),Rt[St]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Tt(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ut,Jt=null;function Bt(t){const e=wt(t.target);e&&"prefetch"===e.rel&&function(t){const e=Ot(new URL(t,Tt(document)));if(e)Jt&&t===Jt.href||(Jt={href:t,promise:re(e)}),Jt.promise}(e.href)}function Vt(t){clearTimeout(Ut),Ut=setTimeout(()=>{Bt(t)},20)}function zt(t,e={noscroll:!1,replaceState:!1}){const n=Ot(new URL(t,Tt(document)));return n?(Pt[e.replaceState?"replaceState":"pushState"]({id:St},"",t),It(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}const Kt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Mt,Dt,Ht,Yt=!1,Ft=[],Gt="{}";const Wt={page:function(t){const e=et(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:et(null),session:et(Kt&&Kt.session)};let Xt,Qt,Zt;function te(t,e){const{error:n}=t;return Object.assign({error:n},e)}function ee(t){return Et(this,void 0,void 0,(function*(){Mt&&Wt.preloading.set(!0);const e=function(t){return Jt&&Jt.href===t.href?Jt.promise:re(t)}(t),n=Dt={},r=yield e,{redirect:o}=r;if(n===Dt)if(o)yield zt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield ne(n,e,te(e,t.page))}}))}function ne(t,e,n){return Et(this,void 0,void 0,(function*(){Wt.page.set(n),Wt.preloading.set(!1),Mt?Mt.$set(e):(e.stores={page:{subscribe:Wt.page.subscribe},preloading:{subscribe:Wt.preloading.subscribe},session:Wt.session},e.level0={props:yield Ht},e.notify=Wt.page.notify,Mt=new yt({target:Zt,props:e,hydrate:!0})),Ft=t,Gt=JSON.stringify(n.query),Yt=!0,Qt=!1}))}function re(t){return Et(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Ht){const t=()=>({});Ht=Kt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Xt)}let i,a=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map((e,i)=>Et(this,void 0,void 0,(function*(){const f=r[i];if(function(t,e,n,r){if(r!==Gt)return!0;const o=Ft[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,f,l,o)&&(u=!0),s.segments[a]=r[i+1],!e)return{segment:f};const p=a++;if(!Qt&&!u&&Ft[i]&&Ft[i].part===e.i)return Ft[i];u=!1;const{default:d,preload:h}=yield bt[e.i].js();let m;return m=Yt||!Kt.preloaded[i+1]?h?yield h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Xt):{}:Kt.preloaded[i+1],s["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))))}catch(t){s.error=t,s.status=500,i=[]}return{redirect:o,props:s,branch:i}}))}var oe,se,ce;Wt.session.subscribe(t=>Et(void 0,void 0,void 0,(function*(){if(Xt=t,!Yt)return;Qt=!0;const e=Ot(new URL(location.href)),n=Dt={},{redirect:r,props:o,branch:s}=yield re(e);n===Dt&&(r?yield zt(r.location,{replaceState:!0}):yield ne(s,o,te(o,e.page)))}))),oe={target:document.querySelector("#sapper")},se=oe.target,Zt=se,ce=Kt.baseUrl,At=ce,jt=ee,"scrollRestoration"in Pt&&(Pt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Pt.scrollRestoration="auto"}),addEventListener("load",()=>{Pt.scrollRestoration="manual"}),addEventListener("click",kt),addEventListener("popstate",qt),addEventListener("touchstart",Bt),addEventListener("mousemove",Vt),Kt.error?Promise.resolve().then(()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:c}=Kt;Ht||(Ht=o&&o[0]);const i={error:c,status:s,session:r,level0:{props:Ht},level1:{props:{status:s,error:c},component:pt},segments:o},a=Ct(n);ne([],i,{host:t,path:e,query:a,params:{},error:c})}()):Promise.resolve().then(()=>{const{hash:t,href:e}=location;Pt.replaceState({id:Nt},"",e);const n=Ot(new URL(location.href));if(n)return It(n,Nt,!0,t)});export{W as A,Z as S,m as a,y as b,v as c,f as d,d as e,_ as f,b as g,$ as h,Q as i,u as j,l as k,x as l,p as m,t as n,P as o,g as p,E as q,M as r,c as s,h as t,z as u,K as v,V as w,Y as x,F as y,G as z};

import __inject_styles from './inject_styles.5607aec6.js';