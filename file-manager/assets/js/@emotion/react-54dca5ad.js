import{g as Se,a as Ge,r as O,R as fe}from"../react-vendor-0bea0611.js";function qe(e,r){for(var t=0;t<r.length;t++){const n=r[t];if(typeof n!="string"&&!Array.isArray(n)){for(const a in n)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(n,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>n[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var Ve=!1;function Ke(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function Ye(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var Be=function(){function e(t){var n=this;this._insertTag=function(a){var i;n.tags.length===0?n.insertionPoint?i=n.insertionPoint.nextSibling:n.prepend?i=n.container.firstChild:i=n.before:i=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,i),n.tags.push(a)},this.isSpeedy=t.speedy===void 0?!Ve:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(n){n.forEach(this._insertTag)},r.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ye(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var i=Ke(a);try{i.insertRule(n,i.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},r.flush=function(){this.tags.forEach(function(n){var a;return(a=n.parentNode)==null?void 0:a.removeChild(n)}),this.tags=[],this.ctr=0},e}(),C="-ms-",H="-moz-",l="-webkit-",$e="comm",ae="rule",ie="decl",He="@import",Ee="@keyframes",Ue="@layer",Ze=Math.abs,Z=String.fromCharCode,Je=Object.assign;function Qe(e,r){return $(e,0)^45?(((r<<2^$(e,0))<<2^$(e,1))<<2^$(e,2))<<2^$(e,3):0}function Ce(e){return e.trim()}function Xe(e,r){return(e=r.exec(e))?e[0]:e}function d(e,r,t){return e.replace(r,t)}function ee(e,r){return e.indexOf(r)}function $(e,r){return e.charCodeAt(r)|0}function L(e,r,t){return e.slice(r,t)}function k(e){return e.length}function se(e){return e.length}function V(e,r){return r.push(e),e}function er(e,r){return e.map(r).join("")}var J=1,F=1,Pe=0,T=0,x=0,D="";function Q(e,r,t,n,a,i,c){return{value:e,root:r,parent:t,type:n,props:a,children:i,line:J,column:F,length:c,return:""}}function W(e,r){return Je(Q("",null,null,"",null,null,0),e,{length:-e.length},r)}function rr(){return x}function tr(){return x=T>0?$(D,--T):0,F--,x===10&&(F=1,J--),x}function _(){return x=T<Pe?$(D,T++):0,F++,x===10&&(F=1,J++),x}function M(){return $(D,T)}function K(){return T}function q(e,r){return L(D,e,r)}function z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Oe(e){return J=F=1,Pe=k(D=e),T=0,[]}function Te(e){return D="",e}function Y(e){return Ce(q(T-1,re(e===91?e+2:e===40?e+1:e)))}function nr(e){for(;(x=M())&&x<33;)_();return z(e)>2||z(x)>3?"":" "}function ar(e,r){for(;--r&&_()&&!(x<48||x>102||x>57&&x<65||x>70&&x<97););return q(e,K()+(r<6&&M()==32&&_()==32))}function re(e){for(;_();)switch(x){case e:return T;case 34:case 39:e!==34&&e!==39&&re(x);break;case 40:e===41&&re(e);break;case 92:_();break}return T}function ir(e,r){for(;_()&&e+x!==47+10;)if(e+x===42+42&&M()===47)break;return"/*"+q(r,T-1)+"*"+Z(e===47?e:_())}function sr(e){for(;!z(M());)_();return q(e,T)}function cr(e){return Te(B("",null,null,null,[""],e=Oe(e),0,[0],e))}function B(e,r,t,n,a,i,c,o,f){for(var u=0,p=0,y=c,R=0,A=0,w=0,v=1,E=1,g=1,S=0,b="",I=a,s=i,P=n,m=b;E;)switch(w=S,S=_()){case 40:if(w!=108&&$(m,y-1)==58){ee(m+=d(Y(S),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:m+=Y(S);break;case 9:case 10:case 13:case 32:m+=nr(w);break;case 92:m+=ar(K()-1,7);continue;case 47:switch(M()){case 42:case 47:V(or(ir(_(),K()),r,t),f);break;default:m+="/"}break;case 123*v:o[u++]=k(m)*g;case 125*v:case 59:case 0:switch(S){case 0:case 125:E=0;case 59+p:g==-1&&(m=d(m,/\f/g,"")),A>0&&k(m)-y&&V(A>32?le(m+";",n,t,y-1):le(d(m," ","")+";",n,t,y-2),f);break;case 59:m+=";";default:if(V(P=ue(m,r,t,u,p,a,o,b,I=[],s=[],y),i),S===123)if(p===0)B(m,r,P,P,I,i,y,o,s);else switch(R===99&&$(m,3)===110?100:R){case 100:case 108:case 109:case 115:B(e,P,P,n&&V(ue(e,P,P,0,0,a,o,b,a,I=[],y),s),a,s,y,o,n?I:s);break;default:B(m,P,P,P,[""],s,0,o,s)}}u=p=A=0,v=g=1,b=m="",y=c;break;case 58:y=1+k(m),A=w;default:if(v<1){if(S==123)--v;else if(S==125&&v++==0&&tr()==125)continue}switch(m+=Z(S),S*v){case 38:g=p>0?1:(m+="\f",-1);break;case 44:o[u++]=(k(m)-1)*g,g=1;break;case 64:M()===45&&(m+=Y(_())),R=M(),p=y=k(b=m+=sr(K())),S++;break;case 45:w===45&&k(m)==2&&(v=0)}}return i}function ue(e,r,t,n,a,i,c,o,f,u,p){for(var y=a-1,R=a===0?i:[""],A=se(R),w=0,v=0,E=0;w<n;++w)for(var g=0,S=L(e,y+1,y=Ze(v=c[w])),b=e;g<A;++g)(b=Ce(v>0?R[g]+" "+S:d(S,/&\f/g,R[g])))&&(f[E++]=b);return Q(e,r,t,a===0?ae:o,f,u,p)}function or(e,r,t){return Q(e,r,t,$e,Z(rr()),L(e,2,-2),0)}function le(e,r,t,n){return Q(e,r,t,ie,L(e,0,n),L(e,n+1,-1),n)}function j(e,r){for(var t="",n=se(e),a=0;a<n;a++)t+=r(e[a],a,e,r)||"";return t}function fr(e,r,t,n){switch(e.type){case Ue:if(e.children.length)break;case He:case ie:return e.return=e.return||e.value;case $e:return"";case Ee:return e.return=e.value+"{"+j(e.children,n)+"}";case ae:e.value=e.props.join(",")}return k(t=j(e.children,n))?e.return=e.value+"{"+t+"}":""}function ur(e){var r=se(e);return function(t,n,a,i){for(var c="",o=0;o<r;o++)c+=e[o](t,n,a,i)||"";return c}}function lr(e){return function(r){r.root||(r=r.return)&&e(r)}}var de=function(r){var t=new WeakMap;return function(n){if(t.has(n))return t.get(n);var a=r(n);return t.set(n,a),a}};function dr(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var hr=function(r,t,n){for(var a=0,i=0;a=i,i=M(),a===38&&i===12&&(t[n]=1),!z(i);)_();return q(r,T)},pr=function(r,t){var n=-1,a=44;do switch(z(a)){case 0:a===38&&M()===12&&(t[n]=1),r[n]+=hr(T-1,t,n);break;case 2:r[n]+=Y(a);break;case 4:if(a===44){r[++n]=M()===58?"&\f":"",t[n]=r[n].length;break}default:r[n]+=Z(a)}while(a=_());return r},yr=function(r,t){return Te(pr(Oe(r),t))},he=new WeakMap,mr=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,n=r.parent,a=r.column===n.column&&r.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!he.get(n))&&!a){he.set(r,!0);for(var i=[],c=yr(t,i),o=n.props,f=0,u=0;f<c.length;f++)for(var p=0;p<o.length;p++,u++)r.props[u]=i[f]?c[f].replace(/&\f/g,o[p]):o[p]+" "+c[f]}}},vr=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function Ae(e,r){switch(Qe(e,r)){case 5103:return l+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return l+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return l+e+H+e+C+e+e;case 6828:case 4268:return l+e+C+e+e;case 6165:return l+e+C+"flex-"+e+e;case 5187:return l+e+d(e,/(\w+).+(:[^]+)/,l+"box-$1$2"+C+"flex-$1$2")+e;case 5443:return l+e+C+"flex-item-"+d(e,/flex-|-self/,"")+e;case 4675:return l+e+C+"flex-line-pack"+d(e,/align-content|flex-|-self/,"")+e;case 5548:return l+e+C+d(e,"shrink","negative")+e;case 5292:return l+e+C+d(e,"basis","preferred-size")+e;case 6060:return l+"box-"+d(e,"-grow","")+l+e+C+d(e,"grow","positive")+e;case 4554:return l+d(e,/([^-])(transform)/g,"$1"+l+"$2")+e;case 6187:return d(d(d(e,/(zoom-|grab)/,l+"$1"),/(image-set)/,l+"$1"),e,"")+e;case 5495:case 3959:return d(e,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return d(d(e,/(.+:)(flex-)?(.*)/,l+"box-pack:$3"+C+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+l+e+e;case 4095:case 3583:case 4068:case 2532:return d(e,/(.+)-inline(.+)/,l+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(k(e)-1-r>6)switch($(e,r+1)){case 109:if($(e,r+4)!==45)break;case 102:return d(e,/(.+:)(.+)-([^]+)/,"$1"+l+"$2-$3$1"+H+($(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~ee(e,"stretch")?Ae(d(e,"stretch","fill-available"),r)+e:e}break;case 4949:if($(e,r+1)!==115)break;case 6444:switch($(e,k(e)-3-(~ee(e,"!important")&&10))){case 107:return d(e,":",":"+l)+e;case 101:return d(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+l+($(e,14)===45?"inline-":"")+"box$3$1"+l+"$2$3$1"+C+"$2box$3")+e}break;case 5936:switch($(e,r+11)){case 114:return l+e+C+d(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return l+e+C+d(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return l+e+C+d(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return l+e+C+e+e}return e}var br=function(r,t,n,a){if(r.length>-1&&!r.return)switch(r.type){case ie:r.return=Ae(r.value,r.length);break;case Ee:return j([W(r,{value:d(r.value,"@","@"+l)})],a);case ae:if(r.length)return er(r.props,function(i){switch(Xe(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return j([W(r,{props:[d(i,/:(read-\w+)/,":"+H+"$1")]})],a);case"::placeholder":return j([W(r,{props:[d(i,/:(plac\w+)/,":"+l+"input-$1")]}),W(r,{props:[d(i,/:(plac\w+)/,":"+H+"$1")]}),W(r,{props:[d(i,/:(plac\w+)/,C+"input-$1")]})],a)}return""})}},gr=[br],xr=function(r){var t=r.key;if(t==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(v){var E=v.getAttribute("data-emotion");E.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var a=r.stylisPlugins||gr,i={},c,o=[];c=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(v){for(var E=v.getAttribute("data-emotion").split(" "),g=1;g<E.length;g++)i[E[g]]=!0;o.push(v)});var f,u=[mr,vr];{var p,y=[fr,lr(function(v){p.insert(v)})],R=ur(u.concat(a,y)),A=function(E){return j(cr(E),R)};f=function(E,g,S,b){p=S,A(E?E+"{"+g.styles+"}":g.styles),b&&(w.inserted[g.name]=!0)}}var w={key:t,sheet:new Be({key:t,container:c,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:i,registered:{},insert:f};return w.sheet.hydrate(o),w};function te(){return te=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},te.apply(null,arguments)}var _e={exports:{}},h={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pe;function wr(){if(pe)return h;pe=1;var e=typeof Symbol=="function"&&Symbol.for,r=e?Symbol.for("react.element"):60103,t=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,c=e?Symbol.for("react.provider"):60109,o=e?Symbol.for("react.context"):60110,f=e?Symbol.for("react.async_mode"):60111,u=e?Symbol.for("react.concurrent_mode"):60111,p=e?Symbol.for("react.forward_ref"):60112,y=e?Symbol.for("react.suspense"):60113,R=e?Symbol.for("react.suspense_list"):60120,A=e?Symbol.for("react.memo"):60115,w=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,E=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,S=e?Symbol.for("react.scope"):60119;function b(s){if(typeof s=="object"&&s!==null){var P=s.$$typeof;switch(P){case r:switch(s=s.type,s){case f:case u:case n:case i:case a:case y:return s;default:switch(s=s&&s.$$typeof,s){case o:case p:case w:case A:case c:return s;default:return P}}case t:return P}}}function I(s){return b(s)===u}return h.AsyncMode=f,h.ConcurrentMode=u,h.ContextConsumer=o,h.ContextProvider=c,h.Element=r,h.ForwardRef=p,h.Fragment=n,h.Lazy=w,h.Memo=A,h.Portal=t,h.Profiler=i,h.StrictMode=a,h.Suspense=y,h.isAsyncMode=function(s){return I(s)||b(s)===f},h.isConcurrentMode=I,h.isContextConsumer=function(s){return b(s)===o},h.isContextProvider=function(s){return b(s)===c},h.isElement=function(s){return typeof s=="object"&&s!==null&&s.$$typeof===r},h.isForwardRef=function(s){return b(s)===p},h.isFragment=function(s){return b(s)===n},h.isLazy=function(s){return b(s)===w},h.isMemo=function(s){return b(s)===A},h.isPortal=function(s){return b(s)===t},h.isProfiler=function(s){return b(s)===i},h.isStrictMode=function(s){return b(s)===a},h.isSuspense=function(s){return b(s)===y},h.isValidElementType=function(s){return typeof s=="string"||typeof s=="function"||s===n||s===u||s===i||s===a||s===y||s===R||typeof s=="object"&&s!==null&&(s.$$typeof===w||s.$$typeof===A||s.$$typeof===c||s.$$typeof===o||s.$$typeof===p||s.$$typeof===E||s.$$typeof===g||s.$$typeof===S||s.$$typeof===v)},h.typeOf=b,h}_e.exports=wr();var Re=_e.exports;const Sr=Se(Re),$r=qe({__proto__:null,default:Sr},[Re]),Er=Ge($r);var ce=Er,Cr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Pr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Or={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ke={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},oe={};oe[ce.ForwardRef]=Or;oe[ce.Memo]=ke;function ye(e){return ce.isMemo(e)?ke:oe[e.$$typeof]||Cr}var Tr=Object.defineProperty,Ar=Object.getOwnPropertyNames,me=Object.getOwnPropertySymbols,_r=Object.getOwnPropertyDescriptor,Rr=Object.getPrototypeOf,ve=Object.prototype;function Ne(e,r,t){if(typeof r!="string"){if(ve){var n=Rr(r);n&&n!==ve&&Ne(e,n,t)}var a=Ar(r);me&&(a=a.concat(me(r)));for(var i=ye(e),c=ye(r),o=0;o<a.length;++o){var f=a[o];if(!Pr[f]&&!(t&&t[f])&&!(c&&c[f])&&!(i&&i[f])){var u=_r(r,f);try{Tr(e,f,u)}catch{}}}}return e}var kr=Ne;const Zr=Se(kr);var Nr=!0;function Mr(e,r,t){var n="";return t.split(" ").forEach(function(a){e[a]!==void 0?r.push(e[a]+";"):n+=a+" "}),n}var Me=function(r,t,n){var a=r.key+"-"+t.name;(n===!1||Nr===!1)&&r.registered[a]===void 0&&(r.registered[a]=t.styles)},Ie=function(r,t,n){Me(r,t,n);var a=r.key+"-"+t.name;if(r.inserted[t.name]===void 0){var i=t;do r.insert(t===i?"."+a:"",i,r.sheet,!0),i=i.next;while(i!==void 0)}};function Ir(e){for(var r=0,t,n=0,a=e.length;a>=4;++n,a-=4)t=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,t=(t&65535)*1540483477+((t>>>16)*59797<<16),t^=t>>>24,r=(t&65535)*1540483477+((t>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(a){case 3:r^=(e.charCodeAt(n+2)&255)<<16;case 2:r^=(e.charCodeAt(n+1)&255)<<8;case 1:r^=e.charCodeAt(n)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var jr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Fr=!1,Dr=/[A-Z]|^ms/g,Wr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,je=function(r){return r.charCodeAt(1)===45},be=function(r){return r!=null&&typeof r!="boolean"},X=dr(function(e){return je(e)?e:e.replace(Dr,"-$&").toLowerCase()}),ge=function(r,t){switch(r){case"animation":case"animationName":if(typeof t=="string")return t.replace(Wr,function(n,a,i){return N={name:a,styles:i,next:N},a})}return jr[r]!==1&&!je(r)&&typeof t=="number"&&t!==0?t+"px":t},Lr="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function G(e,r,t){if(t==null)return"";var n=t;if(n.__emotion_styles!==void 0)return n;switch(typeof t){case"boolean":return"";case"object":{var a=t;if(a.anim===1)return N={name:a.name,styles:a.styles,next:N},a.name;var i=t;if(i.styles!==void 0){var c=i.next;if(c!==void 0)for(;c!==void 0;)N={name:c.name,styles:c.styles,next:N},c=c.next;var o=i.styles+";";return o}return zr(e,r,t)}case"function":{if(e!==void 0){var f=N,u=t(e);return N=f,G(e,r,u)}break}}var p=t;if(r==null)return p;var y=r[p];return y!==void 0?y:p}function zr(e,r,t){var n="";if(Array.isArray(t))for(var a=0;a<t.length;a++)n+=G(e,r,t[a])+";";else for(var i in t){var c=t[i];if(typeof c!="object"){var o=c;r!=null&&r[o]!==void 0?n+=i+"{"+r[o]+"}":be(o)&&(n+=X(i)+":"+ge(i,o)+";")}else{if(i==="NO_COMPONENT_SELECTOR"&&Fr)throw new Error(Lr);if(Array.isArray(c)&&typeof c[0]=="string"&&(r==null||r[c[0]]===void 0))for(var f=0;f<c.length;f++)be(c[f])&&(n+=X(i)+":"+ge(i,c[f])+";");else{var u=G(e,r,c);switch(i){case"animation":case"animationName":{n+=X(i)+":"+u+";";break}default:n+=i+"{"+u+"}"}}}}return n}var xe=/label:\s*([^\s;\n{]+)\s*(;|$)/g,N;function Fe(e,r,t){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,a="";N=void 0;var i=e[0];if(i==null||i.raw===void 0)n=!1,a+=G(t,r,i);else{var c=i;a+=c[0]}for(var o=1;o<e.length;o++)if(a+=G(t,r,e[o]),n){var f=i;a+=f[o]}xe.lastIndex=0;for(var u="",p;(p=xe.exec(a))!==null;)u+="-"+p[1];var y=Ir(a)+u;return{name:y,styles:a,next:N}}var Gr=function(r){return r()},De=fe["useInsertionEffect"]?fe["useInsertionEffect"]:!1,qr=De||Gr,we=De||O.useLayoutEffect,Vr=!1,We=O.createContext(typeof HTMLElement<"u"?xr({key:"css"}):null);We.Provider;var Le=function(r){return O.forwardRef(function(t,n){var a=O.useContext(We);return r(t,a,n)})},U=O.createContext({}),Kr=function(r,t){if(typeof t=="function"){var n=t(r);return n}return te({},r,t)},Yr=de(function(e){return de(function(r){return Kr(e,r)})}),Jr=function(r){var t=O.useContext(U);return r.theme!==t&&(t=Yr(t)(r.theme)),O.createElement(U.Provider,{value:t},r.children)},ze={}.hasOwnProperty,ne="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Qr=function(r,t){var n={};for(var a in t)ze.call(t,a)&&(n[a]=t[a]);return n[ne]=r,n},Br=function(r){var t=r.cache,n=r.serialized,a=r.isStringTag;return Me(t,n,a),qr(function(){return Ie(t,n,a)}),null},Hr=Le(function(e,r,t){var n=e.css;typeof n=="string"&&r.registered[n]!==void 0&&(n=r.registered[n]);var a=e[ne],i=[n],c="";typeof e.className=="string"?c=Mr(r.registered,i,e.className):e.className!=null&&(c=e.className+" ");var o=Fe(i,void 0,O.useContext(U));c+=r.key+"-"+o.name;var f={};for(var u in e)ze.call(e,u)&&u!=="css"&&u!==ne&&!Vr&&(f[u]=e[u]);return f.className=c,t&&(f.ref=t),O.createElement(O.Fragment,null,O.createElement(Br,{cache:r,serialized:o,isStringTag:typeof a=="string"}),O.createElement(a,f))}),Xr=Hr,et=Le(function(e,r){var t=e.styles,n=Fe([t],void 0,O.useContext(U)),a=O.useRef();return we(function(){var i=r.key+"-global",c=new r.sheet.constructor({key:i,nonce:r.sheet.nonce,container:r.sheet.container,speedy:r.sheet.isSpeedy}),o=!1,f=document.querySelector('style[data-emotion="'+i+" "+n.name+'"]');return r.sheet.tags.length&&(c.before=r.sheet.tags[0]),f!==null&&(o=!0,f.setAttribute("data-emotion",i),c.hydrate([f])),a.current=[c,o],function(){c.flush()}},[r]),we(function(){var i=a.current,c=i[0],o=i[1];if(o){i[1]=!1;return}if(n.next!==void 0&&Ie(r,n.next,!0),c.tags.length){var f=c.tags[c.tags.length-1].nextElementSibling;c.before=f,c.flush()}r.insert("",n,c,!1)},[r,n.name]),null});export{Xr as E,et as G,Jr as T,te as _,Zr as a,Qr as c,ze as h};
