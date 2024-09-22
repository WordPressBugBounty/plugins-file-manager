import{r as c,R as ae}from"./react-vendor-0bea0611.js";/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}var R;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(R||(R={}));const _="popstate";function le(e){e===void 0&&(e={});function t(a,l){let{pathname:i="/",search:s="",hash:o=""}=S(a.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),$("",{pathname:i,search:s,hash:o},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(a,l){let i=a.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let o=a.location.href,h=o.indexOf("#");s=h===-1?o:o.slice(0,h)}return s+"#"+(typeof l=="string"?l:G(l))}function r(a,l){j(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return oe(t,n,r,e)}function v(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function j(e,t){if(!e)try{throw new Error(t)}catch{}}function ie(){return Math.random().toString(36).substr(2,8)}function k(e,t){return{usr:e.state,key:e.key,idx:t}}function $(e,t,n,r){return n===void 0&&(n=null),w({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?S(t):t,{state:n,key:t&&t.key||r||ie()})}function G(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function S(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function oe(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,i=a.history,s=R.Pop,o=null,h=f();h==null&&(h=0,i.replaceState(w({},i.state,{idx:h}),""));function f(){return(i.state||{idx:null}).idx}function u(){s=R.Pop;let d=f(),x=d==null?null:d-h;h=d,o&&o({action:s,location:m.location,delta:x})}function p(d,x){s=R.Push;let E=$(m.location,d,x);n&&n(E,d),h=f()+1;let C=k(E,h),U=m.createHref(E);try{i.pushState(C,"",U)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;a.location.assign(U)}l&&o&&o({action:s,location:m.location,delta:1})}function y(d,x){s=R.Replace;let E=$(m.location,d,x);n&&n(E,d),h=f();let C=k(E,h),U=m.createHref(E);i.replaceState(C,"",U),l&&o&&o({action:s,location:m.location,delta:0})}function g(d){let x=a.location.origin!=="null"?a.location.origin:a.location.href,E=typeof d=="string"?d:G(d);return E=E.replace(/ $/,"%20"),v(x,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,x)}let m={get action(){return s},get location(){return e(a,i)},listen(d){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(_,u),o=d,()=>{a.removeEventListener(_,u),o=null}},createHref(d){return t(a,d)},createURL:g,encodeLocation(d){let x=g(d);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:y,go(d){return i.go(d)}};return m}var V;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(V||(V={}));function se(e,t,n){return n===void 0&&(n="/"),ue(e,t,n,!1)}function ue(e,t,n,r){let a=typeof t=="string"?S(t):t,l=X(a.pathname||"/",n);if(l==null)return null;let i=K(e);ce(i);let s=null;for(let o=0;s==null&&o<i.length;++o){let h=Ce(l);s=xe(i[o],h,r)}return s}function K(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(l,i,s)=>{let o={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};o.relativePath.startsWith("/")&&(v(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let h=P([r,o.relativePath]),f=n.concat(o);l.children&&l.children.length>0&&(v(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),K(l.children,t,f,h)),!(l.path==null&&!l.index)&&t.push({path:h,score:ge(h,l.index),routesMeta:f})};return e.forEach((l,i)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))a(l,i);else for(let o of Q(l.path))a(l,i,o)}),t}function Q(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let i=Q(r.join("/")),s=[];return s.push(...i.map(o=>o===""?l:[l,o].join("/"))),a&&s.push(...i),s.map(o=>e.startsWith("/")&&o===""?"/":o)}function ce(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ye(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const he=/^:[\w-]+$/,fe=3,de=2,pe=1,me=10,ve=-2,A=e=>e==="*";function ge(e,t){let n=e.split("/"),r=n.length;return n.some(A)&&(r+=ve),t&&(r+=de),n.filter(a=>!A(a)).reduce((a,l)=>a+(he.test(l)?fe:l===""?pe:me),r)}function ye(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function xe(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,a={},l="/",i=[];for(let s=0;s<r.length;++s){let o=r[s],h=s===r.length-1,f=l==="/"?t:t.slice(l.length)||"/",u=z({path:o.relativePath,caseSensitive:o.caseSensitive,end:h},f),p=o.route;if(!u&&h&&n&&!r[r.length-1].route.index&&(u=z({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},f)),!u)return null;Object.assign(a,u.params),i.push({params:a,pathname:P([l,u.pathname]),pathnameBase:Ie(P([l,u.pathnameBase])),route:p}),u.pathnameBase!=="/"&&(l=P([l,u.pathnameBase]))}return i}function z(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ee(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],i=l.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((h,f,u)=>{let{paramName:p,isOptional:y}=f;if(p==="*"){let m=s[u]||"";i=l.slice(0,l.length-m.length).replace(/(.)\/+$/,"$1")}const g=s[u];return y&&!g?h[p]=void 0:h[p]=(g||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:i,pattern:e}}function Ee(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),j(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,o)=>(r.push({paramName:s,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Ce(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return j(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function X(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Re(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?S(e):e;return{pathname:n?n.startsWith("/")?n:be(n,t):t,search:Ue(r),hash:Oe(a)}}function be(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function F(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Pe(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Se(e,t){let n=Pe(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function we(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=S(e):(a=w({},e),v(!a.pathname||!a.pathname.includes("?"),F("?","pathname","search",a)),v(!a.pathname||!a.pathname.includes("#"),F("#","pathname","hash",a)),v(!a.search||!a.search.includes("#"),F("#","search","hash",a)));let l=e===""||a.pathname==="",i=l?"/":a.pathname,s;if(i==null)s=n;else{let u=t.length-1;if(!r&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),u-=1;a.pathname=p.join("/")}s=u>=0?t[u]:"/"}let o=Re(a,s),h=i&&i!=="/"&&i.endsWith("/"),f=(l||i===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(h||f)&&(o.pathname+="/"),o}const P=e=>e.join("/").replace(/\/\/+/g,"/"),Ie=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ue=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Oe=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Be(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Y=["post","put","patch","delete"];new Set(Y);const Ne=["get",...Y];new Set(Ne);/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}const M=c.createContext(null),Le=c.createContext(null),B=c.createContext(null),N=c.createContext(null),b=c.createContext({outlet:null,matches:[],isDataRoute:!1}),Z=c.createContext(null);function L(){return c.useContext(N)!=null}function ee(){return L()||v(!1),c.useContext(N).location}function te(e){c.useContext(B).static||c.useLayoutEffect(e)}function et(){let{isDataRoute:e}=c.useContext(b);return e?He():Te()}function Te(){L()||v(!1);let e=c.useContext(M),{basename:t,future:n,navigator:r}=c.useContext(B),{matches:a}=c.useContext(b),{pathname:l}=ee(),i=JSON.stringify(Se(a,n.v7_relativeSplatPath)),s=c.useRef(!1);return te(()=>{s.current=!0}),c.useCallback(function(h,f){if(f===void 0&&(f={}),!s.current)return;if(typeof h=="number"){r.go(h);return}let u=we(h,JSON.parse(i),l,f.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:P([t,u.pathname])),(f.replace?r.replace:r.push)(u,f.state,f)},[t,r,i,l,e])}const Fe=c.createContext(null);function $e(e){let t=c.useContext(b).outlet;return t&&c.createElement(Fe.Provider,{value:e},t)}function tt(){let{matches:e}=c.useContext(b),t=e[e.length-1];return t?t.params:{}}function We(e,t){return je(e,t)}function je(e,t,n,r){L()||v(!1);let{navigator:a}=c.useContext(B),{matches:l}=c.useContext(b),i=l[l.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let h=ee(),f;if(t){var u;let d=typeof t=="string"?S(t):t;o==="/"||(u=d.pathname)!=null&&u.startsWith(o)||v(!1),f=d}else f=h;let p=f.pathname||"/",y=p;if(o!=="/"){let d=o.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(d.length).join("/")}let g=se(e,{pathname:y}),m=Ae(g&&g.map(d=>Object.assign({},d,{params:Object.assign({},s,d.params),pathname:P([o,a.encodeLocation?a.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?o:P([o,a.encodeLocation?a.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),l,n,r);return t&&m?c.createElement(N.Provider,{value:{location:I({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:R.Pop}},m):m}function Me(){let e=qe(),t=Be(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},l=null;return c.createElement(c.Fragment,null,c.createElement("h2",null,"Unexpected Application Error!"),c.createElement("h3",{style:{fontStyle:"italic"}},t),n?c.createElement("pre",{style:a},n):null,l)}const _e=c.createElement(Me,null);class ke extends c.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){}render(){return this.state.error!==void 0?c.createElement(b.Provider,{value:this.props.routeContext},c.createElement(Z.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ve(e){let{routeContext:t,match:n,children:r}=e,a=c.useContext(M);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),c.createElement(b.Provider,{value:t},r)}function Ae(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let i=e,s=(a=n)==null?void 0:a.errors;if(s!=null){let f=i.findIndex(u=>u.route.id&&(s==null?void 0:s[u.route.id])!==void 0);f>=0||v(!1),i=i.slice(0,Math.min(i.length,f+1))}let o=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<i.length;f++){let u=i[f];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(h=f),u.route.id){let{loaderData:p,errors:y}=n,g=u.route.loader&&p[u.route.id]===void 0&&(!y||y[u.route.id]===void 0);if(u.route.lazy||g){o=!0,h>=0?i=i.slice(0,h+1):i=[i[0]];break}}}return i.reduceRight((f,u,p)=>{let y,g=!1,m=null,d=null;n&&(y=s&&u.route.id?s[u.route.id]:void 0,m=u.route.errorElement||_e,o&&(h<0&&p===0?(Ge("route-fallback",!1),g=!0,d=null):h===p&&(g=!0,d=u.route.hydrateFallbackElement||null)));let x=t.concat(i.slice(0,p+1)),E=()=>{let C;return y?C=m:g?C=d:u.route.Component?C=c.createElement(u.route.Component,null):u.route.element?C=u.route.element:C=f,c.createElement(Ve,{match:u,routeContext:{outlet:f,matches:x,isDataRoute:n!=null},children:C})};return n&&(u.route.ErrorBoundary||u.route.errorElement||p===0)?c.createElement(ke,{location:n.location,revalidation:n.revalidation,component:m,error:y,children:E(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):E()},null)}var ne=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ne||{}),O=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(O||{});function ze(e){let t=c.useContext(M);return t||v(!1),t}function De(e){let t=c.useContext(Le);return t||v(!1),t}function Je(e){let t=c.useContext(b);return t||v(!1),t}function re(e){let t=Je(),n=t.matches[t.matches.length-1];return n.route.id||v(!1),n.route.id}function qe(){var e;let t=c.useContext(Z),n=De(O.UseRouteError),r=re(O.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function He(){let{router:e}=ze(ne.UseNavigateStable),t=re(O.UseNavigateStable),n=c.useRef(!1);return te(()=>{n.current=!0}),c.useCallback(function(a,l){l===void 0&&(l={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,I({fromRouteId:t},l)))},[e,t])}const D={};function Ge(e,t,n){!t&&!D[e]&&(D[e]=!0)}function nt(e){return $e(e.context)}function Ke(e){v(!1)}function Qe(e){let{basename:t="/",children:n=null,location:r,navigationType:a=R.Pop,navigator:l,static:i=!1,future:s}=e;L()&&v(!1);let o=t.replace(/^\/*/,"/"),h=c.useMemo(()=>({basename:o,navigator:l,static:i,future:I({v7_relativeSplatPath:!1},s)}),[o,s,l,i]);typeof r=="string"&&(r=S(r));let{pathname:f="/",search:u="",hash:p="",state:y=null,key:g="default"}=r,m=c.useMemo(()=>{let d=X(f,o);return d==null?null:{location:{pathname:d,search:u,hash:p,state:y,key:g},navigationType:a}},[o,f,u,p,y,g,a]);return m==null?null:c.createElement(B.Provider,{value:h},c.createElement(N.Provider,{children:n,value:m}))}function rt(e){let{children:t,location:n}=e;return We(W(t),n)}new Promise(()=>{});function W(e,t){t===void 0&&(t=[]);let n=[];return c.Children.forEach(e,(r,a)=>{if(!c.isValidElement(r))return;let l=[...t,a];if(r.type===c.Fragment){n.push.apply(n,W(r.props.children,l));return}r.type!==Ke&&v(!1),!r.props.index||!r.props.children||v(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=W(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Xe="6";try{window.__reactRouterVersion=Xe}catch{}const Ye="startTransition",J=ae[Ye];function at(e){let{basename:t,children:n,future:r,window:a}=e,l=c.useRef();l.current==null&&(l.current=le({window:a,v5Compat:!0}));let i=l.current,[s,o]=c.useState({action:i.action,location:i.location}),{v7_startTransition:h}=r||{},f=c.useCallback(u=>{h&&J?J(()=>o(u)):o(u)},[o,h]);return c.useLayoutEffect(()=>i.listen(f),[i,f]),c.createElement(Qe,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:i,future:r})}var q;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(q||(q={}));var H;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(H||(H={}));export{at as H,nt as O,rt as R,Ke as a,tt as b,et as u};
