(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Jr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const ys="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_s=Jr(ys);function Yi(e){return!!e||e===""}function Gr(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=te(r)?ks(r):Gr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(te(e))return e;if(q(e))return e}}const xs=/;(?![^(]*\))/g,ws=/:(.+)/;function ks(e){const t={};return e.split(xs).forEach(n=>{if(n){const r=n.split(ws);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Zr(e){let t="";if(te(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=Zr(e[n]);r&&(t+=r+" ")}else if(q(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function As(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Bn(e[r],t[r]);return n}function Bn(e,t){if(e===t)return!0;let n=$a(e),r=$a(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Wt(e),r=Wt(t),n||r)return e===t;if(n=N(e),r=N(t),n||r)return n&&r?As(e,t):!1;if(n=q(e),r=q(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!Bn(e[o],t[o]))return!1}}return String(e)===String(t)}function Bi(e,t){return e.findIndex(n=>Bn(n,t))}const jt=e=>te(e)?e:e==null?"":N(e)||q(e)&&(e.toString===Vi||!j(e.toString))?JSON.stringify(e,Wi,2):String(e),Wi=(e,t)=>t&&t.__v_isRef?Wi(e,t.value):wt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Kn(t)?{[`Set(${t.size})`]:[...t.values()]}:q(t)&&!N(t)&&!qi(t)?String(t):t,B={},xt=[],Ee=()=>{},Os=()=>!1,Es=/^on[^a-z]/,Wn=e=>Es.test(e),Qr=e=>e.startsWith("onUpdate:"),fe=Object.assign,ea=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Cs=Object.prototype.hasOwnProperty,U=(e,t)=>Cs.call(e,t),N=Array.isArray,wt=e=>rn(e)==="[object Map]",Kn=e=>rn(e)==="[object Set]",$a=e=>rn(e)==="[object Date]",j=e=>typeof e=="function",te=e=>typeof e=="string",Wt=e=>typeof e=="symbol",q=e=>e!==null&&typeof e=="object",Ki=e=>q(e)&&j(e.then)&&j(e.catch),Vi=Object.prototype.toString,rn=e=>Vi.call(e),Ps=e=>rn(e).slice(8,-1),qi=e=>rn(e)==="[object Object]",ta=e=>te(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,En=Jr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Is=/-(\w)/g,Le=Vn(e=>e.replace(Is,(t,n)=>n?n.toUpperCase():"")),Ts=/\B([A-Z])/g,Mt=Vn(e=>e.replace(Ts,"-$1").toLowerCase()),qn=Vn(e=>e.charAt(0).toUpperCase()+e.slice(1)),dr=Vn(e=>e?`on${qn(e)}`:""),Nn=(e,t)=>!Object.is(e,t),Cn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Fn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},wr=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Da;const Ms=()=>Da||(Da=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Me;class Ss{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Me;try{return Me=this,t()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function Ns(e,t=Me){t&&t.active&&t.effects.push(e)}const na=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Xi=e=>(e.w&Ze)>0,Ji=e=>(e.n&Ze)>0,Fs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ze},Rs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Xi(a)&&!Ji(a)?a.delete(e):t[n++]=a,a.w&=~Ze,a.n&=~Ze}t.length=n}},kr=new WeakMap;let Dt=0,Ze=1;const Ar=30;let xe;const mt=Symbol(""),Or=Symbol("");class ra{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ns(this,r)}run(){if(!this.active)return this.fn();let t=xe,n=Je;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=xe,xe=this,Je=!0,Ze=1<<++Dt,Dt<=Ar?Fs(this):za(this),this.fn()}finally{Dt<=Ar&&Rs(this),Ze=1<<--Dt,xe=this.parent,Je=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xe===this?this.deferStop=!0:this.active&&(za(this),this.onStop&&this.onStop(),this.active=!1)}}function za(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Je=!0;const Gi=[];function St(){Gi.push(Je),Je=!1}function Nt(){const e=Gi.pop();Je=e===void 0?!0:e}function pe(e,t,n){if(Je&&xe){let r=kr.get(e);r||kr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=na()),Zi(a)}}function Zi(e,t){let n=!1;Dt<=Ar?Ji(e)||(e.n|=Ze,n=!Xi(e)):n=!e.has(xe),n&&(e.add(xe),xe.deps.push(e))}function ze(e,t,n,r,a,i){const o=kr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&N(e))o.forEach((l,c)=>{(c==="length"||c>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":N(e)?ta(n)&&s.push(o.get("length")):(s.push(o.get(mt)),wt(e)&&s.push(o.get(Or)));break;case"delete":N(e)||(s.push(o.get(mt)),wt(e)&&s.push(o.get(Or)));break;case"set":wt(e)&&s.push(o.get(mt));break}if(s.length===1)s[0]&&Er(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Er(na(l))}}function Er(e,t){const n=N(e)?e:[...e];for(const r of n)r.computed&&Ua(r);for(const r of n)r.computed||Ua(r)}function Ua(e,t){(e!==xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ls=Jr("__proto__,__v_isRef,__isVue"),Qi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Wt)),js=aa(),$s=aa(!1,!0),Ds=aa(!0),Ha=zs();function zs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)pe(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(Y)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){St();const r=Y(this)[t].apply(this,n);return Nt(),r}}),e}function aa(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?nl:ao:t?ro:no).get(r))return r;const o=N(r);if(!e&&o&&U(Ha,a))return Reflect.get(Ha,a,i);const s=Reflect.get(r,a,i);return(Wt(a)?Qi.has(a):Ls(a))||(e||pe(r,"get",a),t)?s:le(s)?o&&ta(a)?s:s.value:q(s)?e?io(s):sa(s):s}}const Us=eo(),Hs=eo(!0);function eo(e=!1){return function(n,r,a,i){let o=n[r];if(Kt(o)&&le(o)&&!le(a))return!1;if(!e&&(!Cr(a)&&!Kt(a)&&(o=Y(o),a=Y(a)),!N(n)&&le(o)&&!le(a)))return o.value=a,!0;const s=N(n)&&ta(r)?Number(r)<n.length:U(n,r),l=Reflect.set(n,r,a,i);return n===Y(i)&&(s?Nn(a,o)&&ze(n,"set",r,a):ze(n,"add",r,a)),l}}function Ys(e,t){const n=U(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ze(e,"delete",t,void 0),r}function Bs(e,t){const n=Reflect.has(e,t);return(!Wt(t)||!Qi.has(t))&&pe(e,"has",t),n}function Ws(e){return pe(e,"iterate",N(e)?"length":mt),Reflect.ownKeys(e)}const to={get:js,set:Us,deleteProperty:Ys,has:Bs,ownKeys:Ws},Ks={get:Ds,set(e,t){return!0},deleteProperty(e,t){return!0}},Vs=fe({},to,{get:$s,set:Hs}),ia=e=>e,Xn=e=>Reflect.getPrototypeOf(e);function dn(e,t,n=!1,r=!1){e=e.__v_raw;const a=Y(e),i=Y(t);n||(t!==i&&pe(a,"get",t),pe(a,"get",i));const{has:o}=Xn(a),s=r?ia:n?ca:fa;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function mn(e,t=!1){const n=this.__v_raw,r=Y(n),a=Y(e);return t||(e!==a&&pe(r,"has",e),pe(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function pn(e,t=!1){return e=e.__v_raw,!t&&pe(Y(e),"iterate",mt),Reflect.get(e,"size",e)}function Ya(e){e=Y(e);const t=Y(this);return Xn(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function Ba(e,t){t=Y(t);const n=Y(this),{has:r,get:a}=Xn(n);let i=r.call(n,e);i||(e=Y(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Nn(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function Wa(e){const t=Y(this),{has:n,get:r}=Xn(t);let a=n.call(t,e);a||(e=Y(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ze(t,"delete",e,void 0),i}function Ka(){const e=Y(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function hn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=Y(o),l=t?ia:e?ca:fa;return!e&&pe(s,"iterate",mt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function gn(e,t,n){return function(...r){const a=this.__v_raw,i=Y(a),o=wt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?ia:t?ca:fa;return!t&&pe(i,"iterate",l?Or:mt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...t){return e==="delete"?!1:this}}function qs(){const e={get(i){return dn(this,i)},get size(){return pn(this)},has:mn,add:Ya,set:Ba,delete:Wa,clear:Ka,forEach:hn(!1,!1)},t={get(i){return dn(this,i,!1,!0)},get size(){return pn(this)},has:mn,add:Ya,set:Ba,delete:Wa,clear:Ka,forEach:hn(!1,!0)},n={get(i){return dn(this,i,!0)},get size(){return pn(this,!0)},has(i){return mn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:hn(!0,!1)},r={get(i){return dn(this,i,!0,!0)},get size(){return pn(this,!0)},has(i){return mn.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:hn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=gn(i,!1,!1),n[i]=gn(i,!0,!1),t[i]=gn(i,!1,!0),r[i]=gn(i,!0,!0)}),[e,n,t,r]}const[Xs,Js,Gs,Zs]=qs();function oa(e,t){const n=t?e?Zs:Gs:e?Js:Xs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(U(n,a)&&a in r?n:r,a,i)}const Qs={get:oa(!1,!1)},el={get:oa(!1,!0)},tl={get:oa(!0,!1)},no=new WeakMap,ro=new WeakMap,ao=new WeakMap,nl=new WeakMap;function rl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function al(e){return e.__v_skip||!Object.isExtensible(e)?0:rl(Ps(e))}function sa(e){return Kt(e)?e:la(e,!1,to,Qs,no)}function il(e){return la(e,!1,Vs,el,ro)}function io(e){return la(e,!0,Ks,tl,ao)}function la(e,t,n,r,a){if(!q(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=al(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function kt(e){return Kt(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Kt(e){return!!(e&&e.__v_isReadonly)}function Cr(e){return!!(e&&e.__v_isShallow)}function oo(e){return kt(e)||Kt(e)}function Y(e){const t=e&&e.__v_raw;return t?Y(t):e}function so(e){return Fn(e,"__v_skip",!0),e}const fa=e=>q(e)?sa(e):e,ca=e=>q(e)?io(e):e;function ol(e){Je&&xe&&(e=Y(e),Zi(e.dep||(e.dep=na())))}function sl(e,t){e=Y(e),e.dep&&Er(e.dep)}function le(e){return!!(e&&e.__v_isRef===!0)}function ll(e){return le(e)?e.value:e}const fl={get:(e,t,n)=>ll(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return le(a)&&!le(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function lo(e){return kt(e)?e:new Proxy(e,fl)}var fo;class cl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[fo]=!1,this._dirty=!0,this.effect=new ra(t,()=>{this._dirty||(this._dirty=!0,sl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=Y(this);return ol(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}fo="__v_isReadonly";function ul(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Ee):(r=e.get,a=e.set),new cl(r,a,i||!a,n)}function Ge(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Jn(i,t,n)}return a}function Ce(e,t,n,r){if(j(e)){const i=Ge(e,t,n,r);return i&&Ki(i)&&i.catch(o=>{Jn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ce(e[i],t,n,r));return a}function Jn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ge(l,null,10,[e,o,s]);return}}dl(e,n,a,r)}function dl(e,t,n,r=!0){console.error(e)}let Vt=!1,Pr=!1;const ie=[];let Ne=0;const At=[];let De=null,st=0;const co=Promise.resolve();let ua=null;function ml(e){const t=ua||co;return e?t.then(this?e.bind(this):e):t}function pl(e){let t=Ne+1,n=ie.length;for(;t<n;){const r=t+n>>>1;qt(ie[r])<e?t=r+1:n=r}return t}function da(e){(!ie.length||!ie.includes(e,Vt&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?ie.push(e):ie.splice(pl(e.id),0,e),uo())}function uo(){!Vt&&!Pr&&(Pr=!0,ua=co.then(po))}function hl(e){const t=ie.indexOf(e);t>Ne&&ie.splice(t,1)}function gl(e){N(e)?At.push(...e):(!De||!De.includes(e,e.allowRecurse?st+1:st))&&At.push(e),uo()}function Va(e,t=Vt?Ne+1:0){for(;t<ie.length;t++){const n=ie[t];n&&n.pre&&(ie.splice(t,1),t--,n())}}function mo(e){if(At.length){const t=[...new Set(At)];if(At.length=0,De){De.push(...t);return}for(De=t,De.sort((n,r)=>qt(n)-qt(r)),st=0;st<De.length;st++)De[st]();De=null,st=0}}const qt=e=>e.id==null?1/0:e.id,vl=(e,t)=>{const n=qt(e)-qt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function po(e){Pr=!1,Vt=!0,ie.sort(vl);const t=Ee;try{for(Ne=0;Ne<ie.length;Ne++){const n=ie[Ne];n&&n.active!==!1&&Ge(n,null,14)}}finally{Ne=0,ie.length=0,mo(),Vt=!1,ua=null,(ie.length||At.length)&&po()}}function bl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||B;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||B;v&&(a=n.map(A=>A.trim())),m&&(a=n.map(wr))}let s,l=r[s=dr(t)]||r[s=dr(Le(t))];!l&&i&&(l=r[s=dr(Mt(t))]),l&&Ce(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ce(c,e,6,a)}}function ho(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!j(e)){const l=c=>{const d=ho(c,t,!0);d&&(s=!0,fe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(q(e)&&r.set(e,null),null):(N(i)?i.forEach(l=>o[l]=null):fe(o,i),q(e)&&r.set(e,o),o)}function Gn(e,t){return!e||!Wn(t)?!1:(t=t.slice(2).replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,Mt(t))||U(e,t))}let ke=null,Zn=null;function Rn(e){const t=ke;return ke=e,Zn=e&&e.type.__scopeId||null,t}function go(e){Zn=e}function vo(){Zn=null}function yl(e,t=ke,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ri(-1);const i=Rn(t);let o;try{o=e(...a)}finally{Rn(i),r._d&&ri(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function mr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:A,ctx:L,inheritAttrs:S}=e;let $,y;const C=Rn(e);try{if(n.shapeFlag&4){const D=a||r;$=Se(d.call(D,D,m,i,A,v,L)),y=l}else{const D=t;$=Se(D.length>1?D(i,{attrs:l,slots:s,emit:c}):D(i,null)),y=t.props?l:_l(l)}}catch(D){Ut.length=0,Jn(D,e,1),$=re(Xt)}let R=$;if(y&&S!==!1){const D=Object.keys(y),{shapeFlag:W}=R;D.length&&W&7&&(o&&D.some(Qr)&&(y=xl(y,o)),R=Pt(R,y))}return n.dirs&&(R=Pt(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),$=R,Rn(C),$}const _l=e=>{let t;for(const n in e)(n==="class"||n==="style"||Wn(n))&&((t||(t={}))[n]=e[n]);return t},xl=(e,t)=>{const n={};for(const r in e)(!Qr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function wl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?qa(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Gn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?qa(r,o,c):!0:!!o;return!1}function qa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Gn(n,i))return!0}return!1}function kl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Al=e=>e.__isSuspense;function Ol(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):gl(e)}function El(e,t){if(ne){let n=ne.provides;const r=ne.parent&&ne.parent.provides;r===n&&(n=ne.provides=Object.create(r)),n[e]=t}}function pr(e,t,n=!1){const r=ne||ke;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r.proxy):t}}const Xa={};function Pn(e,t,n){return bo(e,t,n)}function bo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=B){const s=ne;let l,c=!1,d=!1;if(le(e)?(l=()=>e.value,c=Cr(e)):kt(e)?(l=()=>e,r=!0):N(e)?(d=!0,c=e.some(y=>kt(y)||Cr(y)),l=()=>e.map(y=>{if(le(y))return y.value;if(kt(y))return ct(y);if(j(y))return Ge(y,s,2)})):j(e)?t?l=()=>Ge(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ce(e,s,3,[v])}:l=Ee,t&&r){const y=l;l=()=>ct(y())}let m,v=y=>{m=$.onStop=()=>{Ge(y,s,4)}};if(Gt)return v=Ee,t?n&&Ce(t,s,3,[l(),d?[]:void 0,v]):l(),Ee;let A=d?[]:Xa;const L=()=>{if(!!$.active)if(t){const y=$.run();(r||c||(d?y.some((C,R)=>Nn(C,A[R])):Nn(y,A)))&&(m&&m(),Ce(t,s,3,[y,A===Xa?void 0:A,v]),A=y)}else $.run()};L.allowRecurse=!!t;let S;a==="sync"?S=L:a==="post"?S=()=>de(L,s&&s.suspense):(L.pre=!0,s&&(L.id=s.uid),S=()=>da(L));const $=new ra(l,S);return t?n?L():A=$.run():a==="post"?de($.run.bind($),s&&s.suspense):$.run(),()=>{$.stop(),s&&s.scope&&ea(s.scope.effects,$)}}function Cl(e,t,n){const r=this.proxy,a=te(e)?e.includes(".")?yo(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=ne;It(this);const s=bo(a,i.bind(r),n);return o?It(o):pt(),s}function yo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ct(e,t){if(!q(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),le(e))ct(e.value,t);else if(N(e))for(let n=0;n<e.length;n++)ct(e[n],t);else if(Kn(e)||wt(e))e.forEach(n=>{ct(n,t)});else if(qi(e))for(const n in e)ct(e[n],t);return e}function ma(e){return j(e)?{setup:e,name:e.name}:e}const In=e=>!!e.type.__asyncLoader,_o=e=>e.type.__isKeepAlive;function Pl(e,t){xo(e,"a",t)}function Il(e,t){xo(e,"da",t)}function xo(e,t,n=ne){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Qn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)_o(a.parent.vnode)&&Tl(r,t,n,a),a=a.parent}}function Tl(e,t,n,r){const a=Qn(t,e,r,!0);wo(()=>{ea(r[t],a)},n)}function Qn(e,t,n=ne,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;St(),It(n);const s=Ce(t,n,e,o);return pt(),Nt(),s});return r?a.unshift(i):a.push(i),i}}const Be=e=>(t,n=ne)=>(!Gt||e==="sp")&&Qn(e,(...r)=>t(...r),n),Ml=Be("bm"),Sl=Be("m"),Nl=Be("bu"),Fl=Be("u"),Rl=Be("bum"),wo=Be("um"),Ll=Be("sp"),jl=Be("rtg"),$l=Be("rtc");function Dl(e,t=ne){Qn("ec",e,t)}function Fe(e,t){const n=ke;if(n===null)return e;const r=tr(n)||n.proxy,a=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,s,l,c=B]=t[i];j(o)&&(o={mounted:o,updated:o}),o.deep&&ct(s),a.push({dir:o,instance:r,value:s,oldValue:void 0,arg:l,modifiers:c})}return e}function at(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(St(),Ce(l,n,8,[e.el,s,e,t]),Nt())}}const ko="components";function Ir(e,t){return Ul(ko,e,!0,t)||e}const zl=Symbol();function Ul(e,t,n=!0,r=!1){const a=ke||ne;if(a){const i=a.type;if(e===ko){const s=yf(i,!1);if(s&&(s===t||s===Le(t)||s===qn(Le(t))))return i}const o=Ja(a[e]||i[e],t)||Ja(a.appContext[e],t);return!o&&r?i:o}}function Ja(e,t){return e&&(e[t]||e[Le(t)]||e[qn(Le(t))])}function Hl(e,t,n,r){let a;const i=n&&n[r];if(N(e)||te(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(q(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Tr=e=>e?Fo(e)?tr(e)||e.proxy:Tr(e.parent):null,Ln=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tr(e.parent),$root:e=>Tr(e.root),$emit:e=>e.emit,$options:e=>pa(e),$forceUpdate:e=>e.f||(e.f=()=>da(e.update)),$nextTick:e=>e.n||(e.n=ml.bind(e.proxy)),$watch:e=>Cl.bind(e)}),Yl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==B&&U(r,t))return o[t]=1,r[t];if(a!==B&&U(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&U(c,t))return o[t]=3,i[t];if(n!==B&&U(n,t))return o[t]=4,n[t];Mr&&(o[t]=0)}}const d=Ln[t];let m,v;if(d)return t==="$attrs"&&pe(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==B&&U(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,U(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==B&&U(a,t)?(a[t]=n,!0):r!==B&&U(r,t)?(r[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==B&&U(e,o)||t!==B&&U(t,o)||(s=i[0])&&U(s,o)||U(r,o)||U(Ln,o)||U(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Mr=!0;function Bl(e){const t=pa(e),n=e.proxy,r=e.ctx;Mr=!1,t.beforeCreate&&Ga(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:A,updated:L,activated:S,deactivated:$,beforeDestroy:y,beforeUnmount:C,destroyed:R,unmounted:D,render:W,renderTracked:ce,renderTriggered:ae,errorCaptured:be,serverPrefetch:ge,expose:je,inheritAttrs:Rt,components:ln,directives:fn,filters:fr}=t;if(c&&Wl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const G in o){const K=o[G];j(K)&&(r[G]=K.bind(n))}if(a){const G=a.call(n,n);q(G)&&(e.data=sa(G))}if(Mr=!0,i)for(const G in i){const K=i[G],nt=j(K)?K.bind(n,n):j(K.get)?K.get.bind(n,n):Ee,cn=!j(K)&&j(K.set)?K.set.bind(n):Ee,rt=ve({get:nt,set:cn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Pe=>rt.value=Pe})}if(s)for(const G in s)Ao(s[G],r,n,G);if(l){const G=j(l)?l.call(n):l;Reflect.ownKeys(G).forEach(K=>{El(K,G[K])})}d&&Ga(d,e,"c");function oe(G,K){N(K)?K.forEach(nt=>G(nt.bind(n))):K&&G(K.bind(n))}if(oe(Ml,m),oe(Sl,v),oe(Nl,A),oe(Fl,L),oe(Pl,S),oe(Il,$),oe(Dl,be),oe($l,ce),oe(jl,ae),oe(Rl,C),oe(wo,D),oe(Ll,ge),N(je))if(je.length){const G=e.exposed||(e.exposed={});je.forEach(K=>{Object.defineProperty(G,K,{get:()=>n[K],set:nt=>n[K]=nt})})}else e.exposed||(e.exposed={});W&&e.render===Ee&&(e.render=W),Rt!=null&&(e.inheritAttrs=Rt),ln&&(e.components=ln),fn&&(e.directives=fn)}function Wl(e,t,n=Ee,r=!1){N(e)&&(e=Sr(e));for(const a in e){const i=e[a];let o;q(i)?"default"in i?o=pr(i.from||a,i.default,!0):o=pr(i.from||a):o=pr(i),le(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ga(e,t,n){Ce(N(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ao(e,t,n,r){const a=r.includes(".")?yo(n,r):()=>n[r];if(te(e)){const i=t[e];j(i)&&Pn(a,i)}else if(j(e))Pn(a,e.bind(n));else if(q(e))if(N(e))e.forEach(i=>Ao(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&Pn(a,i,e)}}function pa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>jn(l,c,o,!0)),jn(l,t,o)),q(t)&&i.set(t,l),l}function jn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&jn(e,i,n,!0),a&&a.forEach(o=>jn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Kl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Kl={data:Za,props:ot,emits:ot,methods:ot,computed:ot,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:ot,directives:ot,watch:ql,provide:Za,inject:Vl};function Za(e,t){return t?e?function(){return fe(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function Vl(e,t){return ot(Sr(e),Sr(t))}function Sr(e){if(N(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function se(e,t){return e?[...new Set([].concat(e,t))]:t}function ot(e,t){return e?fe(fe(Object.create(null),e),t):t}function ql(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=se(e[r],t[r]);return n}function Xl(e,t,n,r=!1){const a={},i={};Fn(i,er,1),e.propsDefaults=Object.create(null),Oo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:il(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Jl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=Y(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Gn(e.emitsOptions,v))continue;const A=t[v];if(l)if(U(i,v))A!==i[v]&&(i[v]=A,c=!0);else{const L=Le(v);a[L]=Nr(l,s,L,A,e,!1)}else A!==i[v]&&(i[v]=A,c=!0)}}}else{Oo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!U(t,m)&&((d=Mt(m))===m||!U(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Nr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!U(t,m)&&!0)&&(delete i[m],c=!0)}c&&ze(e,"set","$attrs")}function Oo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(En(l))continue;const c=t[l];let d;a&&U(a,d=Le(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Gn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Y(n),c=s||B;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Nr(a,l,m,c[m],e,!U(c,m))}}return o}function Nr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=U(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&j(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(It(a),r=c[n]=l.call(null,t),pt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Mt(n))&&(r=!0))}return r}function Eo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!j(e)){const d=m=>{l=!0;const[v,A]=Eo(m,t,!0);fe(o,v),A&&s.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return q(e)&&r.set(e,xt),xt;if(N(i))for(let d=0;d<i.length;d++){const m=Le(i[d]);Qa(m)&&(o[m]=B)}else if(i)for(const d in i){const m=Le(d);if(Qa(m)){const v=i[d],A=o[m]=N(v)||j(v)?{type:v}:v;if(A){const L=ni(Boolean,A.type),S=ni(String,A.type);A[0]=L>-1,A[1]=S<0||L<S,(L>-1||U(A,"default"))&&s.push(m)}}}const c=[o,s];return q(e)&&r.set(e,c),c}function Qa(e){return e[0]!=="$"}function ei(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function ti(e,t){return ei(e)===ei(t)}function ni(e,t){return N(t)?t.findIndex(n=>ti(n,e)):j(t)&&ti(t,e)?0:-1}const Co=e=>e[0]==="_"||e==="$stable",ha=e=>N(e)?e.map(Se):[Se(e)],Gl=(e,t,n)=>{if(t._n)return t;const r=yl((...a)=>ha(t(...a)),n);return r._c=!1,r},Po=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Co(a))continue;const i=e[a];if(j(i))t[a]=Gl(a,i,r);else if(i!=null){const o=ha(i);t[a]=()=>o}}},Io=(e,t)=>{const n=ha(t);e.slots.default=()=>n},Zl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Y(t),Fn(t,"_",n)):Po(t,e.slots={})}else e.slots={},t&&Io(e,t);Fn(e.slots,er,1)},Ql=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=B;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(fe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Po(t,a)),o=t}else t&&(Io(e,t),o={default:1});if(i)for(const s in a)!Co(s)&&!(s in o)&&delete a[s]};function To(){return{app:null,config:{isNativeTag:Os,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ef=0;function tf(e,t){return function(r,a=null){j(r)||(r=Object.assign({},r)),a!=null&&!q(a)&&(a=null);const i=To(),o=new Set;let s=!1;const l=i.app={_uid:ef++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:xf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&j(c.install)?(o.add(c),c.install(l,...d)):j(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=re(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,tr(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function Fr(e,t,n,r,a=!1){if(N(e)){e.forEach((v,A)=>Fr(v,t&&(N(t)?t[A]:t),n,r,a));return}if(In(r)&&!a)return;const i=r.shapeFlag&4?tr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===B?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(te(c)?(d[c]=null,U(m,c)&&(m[c]=null)):le(c)&&(c.value=null)),j(l))Ge(l,s,12,[o,d]);else{const v=te(l),A=le(l);if(v||A){const L=()=>{if(e.f){const S=v?U(m,l)?m[l]:d[l]:l.value;a?N(S)&&ea(S,i):N(S)?S.includes(i)||S.push(i):v?(d[l]=[i],U(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,U(m,l)&&(m[l]=o)):A&&(l.value=o,e.k&&(d[e.k]=o))};o?(L.id=-1,de(L,n)):L()}}}const de=Ol;function nf(e){return rf(e)}function rf(e,t){const n=Ms();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:A=Ee,insertStaticContent:L}=e,S=(f,u,p,g=null,h=null,x=null,O=!1,_=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!$t(f,u)&&(g=un(f),Pe(f,h,x,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:T,shapeFlag:P}=u;switch(b){case ga:$(f,u,p,g);break;case Xt:y(f,u,p,g);break;case hr:f==null&&C(u,p,g,O);break;case _e:ln(f,u,p,g,h,x,O,_,w);break;default:P&1?W(f,u,p,g,h,x,O,_,w):P&6?fn(f,u,p,g,h,x,O,_,w):(P&64||P&128)&&b.process(f,u,p,g,h,x,O,_,w,vt)}T!=null&&h&&Fr(T,f&&f.ref,x,u||f,!u)},$=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},y=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},C=(f,u,p,g)=>{[f.el,f.anchor]=L(f.children,u,p,g,f.el,f.anchor)},R=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},D=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},W=(f,u,p,g,h,x,O,_,w)=>{O=O||u.type==="svg",f==null?ce(u,p,g,h,x,O,_,w):ge(f,u,h,x,O,_,w)},ce=(f,u,p,g,h,x,O,_)=>{let w,b;const{type:T,props:P,shapeFlag:M,transition:F,dirs:z}=f;if(w=f.el=o(f.type,x,P&&P.is,P),M&8?d(w,f.children):M&16&&be(f.children,w,null,g,h,x&&T!=="foreignObject",O,_),z&&at(f,null,g,"created"),P){for(const H in P)H!=="value"&&!En(H)&&i(w,H,null,P[H],x,f.children,g,h,$e);"value"in P&&i(w,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Te(b,g,f)}ae(w,f,f.scopeId,O,g),z&&at(f,null,g,"beforeMount");const V=(!h||h&&!h.pendingBranch)&&F&&!F.persisted;V&&F.beforeEnter(w),r(w,u,p),((b=P&&P.onVnodeMounted)||V||z)&&de(()=>{b&&Te(b,g,f),V&&F.enter(w),z&&at(f,null,g,"mounted")},h)},ae=(f,u,p,g,h)=>{if(p&&A(f,p),g)for(let x=0;x<g.length;x++)A(f,g[x]);if(h){let x=h.subTree;if(u===x){const O=h.vnode;ae(f,O,O.scopeId,O.slotScopeIds,h.parent)}}},be=(f,u,p,g,h,x,O,_,w=0)=>{for(let b=w;b<f.length;b++){const T=f[b]=_?qe(f[b]):Se(f[b]);S(null,T,u,p,g,h,x,O,_)}},ge=(f,u,p,g,h,x,O)=>{const _=u.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:T}=u;w|=f.patchFlag&16;const P=f.props||B,M=u.props||B;let F;p&&it(p,!1),(F=M.onVnodeBeforeUpdate)&&Te(F,p,u,f),T&&at(u,f,p,"beforeUpdate"),p&&it(p,!0);const z=h&&u.type!=="foreignObject";if(b?je(f.dynamicChildren,b,_,p,g,z,x):O||K(f,u,_,null,p,g,z,x,!1),w>0){if(w&16)Rt(_,u,P,M,p,g,h);else if(w&2&&P.class!==M.class&&i(_,"class",null,M.class,h),w&4&&i(_,"style",P.style,M.style,h),w&8){const V=u.dynamicProps;for(let H=0;H<V.length;H++){const Q=V[H],ye=P[Q],bt=M[Q];(bt!==ye||Q==="value")&&i(_,Q,ye,bt,h,f.children,p,g,$e)}}w&1&&f.children!==u.children&&d(_,u.children)}else!O&&b==null&&Rt(_,u,P,M,p,g,h);((F=M.onVnodeUpdated)||T)&&de(()=>{F&&Te(F,p,u,f),T&&at(u,f,p,"updated")},g)},je=(f,u,p,g,h,x,O)=>{for(let _=0;_<u.length;_++){const w=f[_],b=u[_],T=w.el&&(w.type===_e||!$t(w,b)||w.shapeFlag&70)?m(w.el):p;S(w,b,T,null,g,h,x,O,!0)}},Rt=(f,u,p,g,h,x,O)=>{if(p!==g){if(p!==B)for(const _ in p)!En(_)&&!(_ in g)&&i(f,_,p[_],null,O,u.children,h,x,$e);for(const _ in g){if(En(_))continue;const w=g[_],b=p[_];w!==b&&_!=="value"&&i(f,_,b,w,O,u.children,h,x,$e)}"value"in g&&i(f,"value",p.value,g.value)}},ln=(f,u,p,g,h,x,O,_,w)=>{const b=u.el=f?f.el:s(""),T=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:M,slotScopeIds:F}=u;F&&(_=_?_.concat(F):F),f==null?(r(b,p,g),r(T,p,g),be(u.children,p,T,h,x,O,_,w)):P>0&&P&64&&M&&f.dynamicChildren?(je(f.dynamicChildren,M,p,h,x,O,_),(u.key!=null||h&&u===h.subTree)&&Mo(f,u,!0)):K(f,u,p,T,h,x,O,_,w)},fn=(f,u,p,g,h,x,O,_,w)=>{u.slotScopeIds=_,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,O,w):fr(u,p,g,h,x,O,w):Sa(f,u,w)},fr=(f,u,p,g,h,x,O)=>{const _=f.component=pf(f,g,h);if(_o(f)&&(_.ctx.renderer=vt),hf(_),_.asyncDep){if(h&&h.registerDep(_,oe),!f.el){const w=_.subTree=re(Xt);y(null,w,u,p)}return}oe(_,f,u,p,h,x,O)},Sa=(f,u,p)=>{const g=u.component=f.component;if(wl(f,u,p))if(g.asyncDep&&!g.asyncResolved){G(g,u,p);return}else g.next=u,hl(g.update),g.update();else u.el=f.el,g.vnode=u},oe=(f,u,p,g,h,x,O)=>{const _=()=>{if(f.isMounted){let{next:T,bu:P,u:M,parent:F,vnode:z}=f,V=T,H;it(f,!1),T?(T.el=z.el,G(f,T,O)):T=z,P&&Cn(P),(H=T.props&&T.props.onVnodeBeforeUpdate)&&Te(H,F,T,z),it(f,!0);const Q=mr(f),ye=f.subTree;f.subTree=Q,S(ye,Q,m(ye.el),un(ye),f,h,x),T.el=Q.el,V===null&&kl(f,Q.el),M&&de(M,h),(H=T.props&&T.props.onVnodeUpdated)&&de(()=>Te(H,F,T,z),h)}else{let T;const{el:P,props:M}=u,{bm:F,m:z,parent:V}=f,H=In(u);if(it(f,!1),F&&Cn(F),!H&&(T=M&&M.onVnodeBeforeMount)&&Te(T,V,u),it(f,!0),P&&ur){const Q=()=>{f.subTree=mr(f),ur(P,f.subTree,f,h,null)};H?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Q()):Q()}else{const Q=f.subTree=mr(f);S(null,Q,p,g,f,h,x),u.el=Q.el}if(z&&de(z,h),!H&&(T=M&&M.onVnodeMounted)){const Q=u;de(()=>Te(T,V,Q),h)}(u.shapeFlag&256||V&&In(V.vnode)&&V.vnode.shapeFlag&256)&&f.a&&de(f.a,h),f.isMounted=!0,u=p=g=null}},w=f.effect=new ra(_,()=>da(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,it(f,!0),b()},G=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Jl(f,u.props,g,p),Ql(f,u.children,p),St(),Va(),Nt()},K=(f,u,p,g,h,x,O,_,w=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,P=u.children,{patchFlag:M,shapeFlag:F}=u;if(M>0){if(M&128){cn(b,P,p,g,h,x,O,_,w);return}else if(M&256){nt(b,P,p,g,h,x,O,_,w);return}}F&8?(T&16&&$e(b,h,x),P!==b&&d(p,P)):T&16?F&16?cn(b,P,p,g,h,x,O,_,w):$e(b,h,x,!0):(T&8&&d(p,""),F&16&&be(P,p,g,h,x,O,_,w))},nt=(f,u,p,g,h,x,O,_,w)=>{f=f||xt,u=u||xt;const b=f.length,T=u.length,P=Math.min(b,T);let M;for(M=0;M<P;M++){const F=u[M]=w?qe(u[M]):Se(u[M]);S(f[M],F,p,null,h,x,O,_,w)}b>T?$e(f,h,x,!0,!1,P):be(u,p,g,h,x,O,_,w,P)},cn=(f,u,p,g,h,x,O,_,w)=>{let b=0;const T=u.length;let P=f.length-1,M=T-1;for(;b<=P&&b<=M;){const F=f[b],z=u[b]=w?qe(u[b]):Se(u[b]);if($t(F,z))S(F,z,p,null,h,x,O,_,w);else break;b++}for(;b<=P&&b<=M;){const F=f[P],z=u[M]=w?qe(u[M]):Se(u[M]);if($t(F,z))S(F,z,p,null,h,x,O,_,w);else break;P--,M--}if(b>P){if(b<=M){const F=M+1,z=F<T?u[F].el:g;for(;b<=M;)S(null,u[b]=w?qe(u[b]):Se(u[b]),p,z,h,x,O,_,w),b++}}else if(b>M)for(;b<=P;)Pe(f[b],h,x,!0),b++;else{const F=b,z=b,V=new Map;for(b=z;b<=M;b++){const me=u[b]=w?qe(u[b]):Se(u[b]);me.key!=null&&V.set(me.key,b)}let H,Q=0;const ye=M-z+1;let bt=!1,Ra=0;const Lt=new Array(ye);for(b=0;b<ye;b++)Lt[b]=0;for(b=F;b<=P;b++){const me=f[b];if(Q>=ye){Pe(me,h,x,!0);continue}let Ie;if(me.key!=null)Ie=V.get(me.key);else for(H=z;H<=M;H++)if(Lt[H-z]===0&&$t(me,u[H])){Ie=H;break}Ie===void 0?Pe(me,h,x,!0):(Lt[Ie-z]=b+1,Ie>=Ra?Ra=Ie:bt=!0,S(me,u[Ie],p,null,h,x,O,_,w),Q++)}const La=bt?af(Lt):xt;for(H=La.length-1,b=ye-1;b>=0;b--){const me=z+b,Ie=u[me],ja=me+1<T?u[me+1].el:g;Lt[b]===0?S(null,Ie,p,ja,h,x,O,_,w):bt&&(H<0||b!==La[H]?rt(Ie,p,ja,2):H--)}}},rt=(f,u,p,g,h=null)=>{const{el:x,type:O,transition:_,children:w,shapeFlag:b}=f;if(b&6){rt(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){O.move(f,u,p,vt);return}if(O===_e){r(x,u,p);for(let P=0;P<w.length;P++)rt(w[P],u,p,g);r(f.anchor,u,p);return}if(O===hr){R(f,u,p);return}if(g!==2&&b&1&&_)if(g===0)_.beforeEnter(x),r(x,u,p),de(()=>_.enter(x),h);else{const{leave:P,delayLeave:M,afterLeave:F}=_,z=()=>r(x,u,p),V=()=>{P(x,()=>{z(),F&&F()})};M?M(x,z,V):V()}else r(x,u,p)},Pe=(f,u,p,g=!1,h=!1)=>{const{type:x,props:O,ref:_,children:w,dynamicChildren:b,shapeFlag:T,patchFlag:P,dirs:M}=f;if(_!=null&&Fr(_,null,p,f,!0),T&256){u.ctx.deactivate(f);return}const F=T&1&&M,z=!In(f);let V;if(z&&(V=O&&O.onVnodeBeforeUnmount)&&Te(V,u,f),T&6)bs(f.component,p,g);else{if(T&128){f.suspense.unmount(p,g);return}F&&at(f,null,u,"beforeUnmount"),T&64?f.type.remove(f,u,p,h,vt,g):b&&(x!==_e||P>0&&P&64)?$e(b,u,p,!1,!0):(x===_e&&P&384||!h&&T&16)&&$e(w,u,p),g&&Na(f)}(z&&(V=O&&O.onVnodeUnmounted)||F)&&de(()=>{V&&Te(V,u,f),F&&at(f,null,u,"unmounted")},p)},Na=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===_e){vs(p,g);return}if(u===hr){D(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:O,delayLeave:_}=h,w=()=>O(p,x);_?_(f.el,x,w):w()}else x()},vs=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},bs=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:O,um:_}=f;g&&Cn(g),h.stop(),x&&(x.active=!1,Pe(O,f,u,p)),_&&de(_,u),de(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},$e=(f,u,p,g=!1,h=!1,x=0)=>{for(let O=x;O<f.length;O++)Pe(f[O],u,p,g,h)},un=f=>f.shapeFlag&6?un(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Fa=(f,u,p)=>{f==null?u._vnode&&Pe(u._vnode,null,null,!0):S(u._vnode||null,f,u,null,null,null,p),Va(),mo(),u._vnode=f},vt={p:S,um:Pe,m:rt,r:Na,mt:fr,mc:be,pc:K,pbc:je,n:un,o:e};let cr,ur;return t&&([cr,ur]=t(vt)),{render:Fa,hydrate:cr,createApp:tf(Fa,cr)}}function it({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Mo(e,t,n=!1){const r=e.children,a=t.children;if(N(r)&&N(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=qe(a[i]),s.el=o.el),n||Mo(o,s))}}function af(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const of=e=>e.__isTeleport,_e=Symbol(void 0),ga=Symbol(void 0),Xt=Symbol(void 0),hr=Symbol(void 0),Ut=[];let Ae=null;function Ot(e=!1){Ut.push(Ae=e?null:[])}function sf(){Ut.pop(),Ae=Ut[Ut.length-1]||null}let Jt=1;function ri(e){Jt+=e}function lf(e){return e.dynamicChildren=Jt>0?Ae||xt:null,sf(),Jt>0&&Ae&&Ae.push(e),e}function Et(e,t,n,r,a,i){return lf(k(e,t,n,r,a,i,!0))}function Rr(e){return e?e.__v_isVNode===!0:!1}function $t(e,t){return e.type===t.type&&e.key===t.key}const er="__vInternal",So=({key:e})=>e!=null?e:null,Tn=({ref:e,ref_key:t,ref_for:n})=>e!=null?te(e)||le(e)||j(e)?{i:ke,r:e,k:t,f:!!n}:e:null;function k(e,t=null,n=null,r=0,a=null,i=e===_e?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&So(t),ref:t&&Tn(t),scopeId:Zn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(va(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=te(n)?8:16),Jt>0&&!o&&Ae&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ae.push(l),l}const re=ff;function ff(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===zl)&&(e=Xt),Rr(e)){const s=Pt(e,t,!0);return n&&va(s,n),Jt>0&&!i&&Ae&&(s.shapeFlag&6?Ae[Ae.indexOf(e)]=s:Ae.push(s)),s.patchFlag|=-2,s}if(_f(e)&&(e=e.__vccOpts),t){t=cf(t);let{class:s,style:l}=t;s&&!te(s)&&(t.class=Zr(s)),q(l)&&(oo(l)&&!N(l)&&(l=fe({},l)),t.style=Gr(l))}const o=te(e)?1:Al(e)?128:of(e)?64:q(e)?4:j(e)?2:0;return k(e,t,n,r,a,o,i,!0)}function cf(e){return e?oo(e)||er in e?fe({},e):e:null}function Pt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?uf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&So(s),ref:t&&t.ref?n&&a?N(a)?a.concat(Tn(t)):[a,Tn(t)]:Tn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_e?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),el:e.el,anchor:e.anchor}}function No(e=" ",t=0){return re(ga,null,e,t)}function Se(e){return e==null||typeof e=="boolean"?re(Xt):N(e)?re(_e,null,e.slice()):typeof e=="object"?qe(e):re(ga,null,String(e))}function qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pt(e)}function va(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(N(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),va(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(er in t)?t._ctx=ke:a===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:ke},n=32):(t=String(t),r&64?(n=16,t=[No(t)]):n=8);e.children=t,e.shapeFlag|=n}function uf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Zr([t.class,r.class]));else if(a==="style")t.style=Gr([t.style,r.style]);else if(Wn(a)){const i=t[a],o=r[a];o&&i!==o&&!(N(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Te(e,t,n,r=null){Ce(e,t,7,[n,r])}const df=To();let mf=0;function pf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||df,i={uid:mf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ss(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Eo(r,a),emitsOptions:ho(r,a),emit:null,emitted:null,propsDefaults:B,inheritAttrs:r.inheritAttrs,ctx:B,data:B,props:B,attrs:B,slots:B,refs:B,setupState:B,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=bl.bind(null,i),e.ce&&e.ce(i),i}let ne=null;const It=e=>{ne=e,e.scope.on()},pt=()=>{ne&&ne.scope.off(),ne=null};function Fo(e){return e.vnode.shapeFlag&4}let Gt=!1;function hf(e,t=!1){Gt=t;const{props:n,children:r}=e.vnode,a=Fo(e);Xl(e,n,a,t),Zl(e,r);const i=a?gf(e,t):void 0;return Gt=!1,i}function gf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=so(new Proxy(e.ctx,Yl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?bf(e):null;It(e),St();const i=Ge(r,e,0,[e.props,a]);if(Nt(),pt(),Ki(i)){if(i.then(pt,pt),t)return i.then(o=>{ai(e,o,t)}).catch(o=>{Jn(o,e,0)});e.asyncDep=i}else ai(e,i,t)}else Ro(e,t)}function ai(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:q(t)&&(e.setupState=lo(t)),Ro(e,n)}let ii;function Ro(e,t,n){const r=e.type;if(!e.render){if(!t&&ii&&!r.render){const a=r.template||pa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=fe(fe({isCustomElement:i,delimiters:s},o),l);r.render=ii(a,c)}}e.render=r.render||Ee}It(e),St(),Bl(e),Nt(),pt()}function vf(e){return new Proxy(e.attrs,{get(t,n){return pe(e,"get","$attrs"),t[n]}})}function bf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=vf(e))},slots:e.slots,emit:e.emit,expose:t}}function tr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(lo(so(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ln)return Ln[n](e)}}))}function yf(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function _f(e){return j(e)&&"__vccOpts"in e}const ve=(e,t)=>ul(e,t,Gt);function Lo(e,t,n){const r=arguments.length;return r===2?q(t)&&!N(t)?Rr(t)?re(e,null,[t]):re(e,t):re(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Rr(n)&&(n=[n]),re(e,t,n))}const xf="3.2.41",wf="http://www.w3.org/2000/svg",lt=typeof document<"u"?document:null,oi=lt&&lt.createElement("template"),kf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?lt.createElementNS(wf,e):lt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>lt.createTextNode(e),createComment:e=>lt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>lt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{oi.innerHTML=r?`<svg>${e}</svg>`:e;const s=oi.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Af(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Of(e,t,n){const r=e.style,a=te(n);if(n&&!a){for(const i in n)Lr(r,i,n[i]);if(t&&!te(t))for(const i in t)n[i]==null&&Lr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const si=/\s*!important$/;function Lr(e,t,n){if(N(n))n.forEach(r=>Lr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ef(e,t);si.test(n)?e.setProperty(Mt(r),n.replace(si,""),"important"):e[r]=n}}const li=["Webkit","Moz","ms"],gr={};function Ef(e,t){const n=gr[t];if(n)return n;let r=Le(t);if(r!=="filter"&&r in e)return gr[t]=r;r=qn(r);for(let a=0;a<li.length;a++){const i=li[a]+r;if(i in e)return gr[t]=i}return t}const fi="http://www.w3.org/1999/xlink";function Cf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(fi,t.slice(6,t.length)):e.setAttributeNS(fi,t,n);else{const i=_s(t);n==null||i&&!Yi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Pf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Yi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function ft(e,t,n,r){e.addEventListener(t,n,r)}function If(e,t,n,r){e.removeEventListener(t,n,r)}function Tf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Mf(t);if(r){const c=i[t]=Ff(r,a);ft(e,s,c,l)}else o&&(If(e,s,o,l),i[t]=void 0)}}const ci=/(?:Once|Passive|Capture)$/;function Mf(e){let t;if(ci.test(e)){t={};let r;for(;r=e.match(ci);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Mt(e.slice(2)),t]}let vr=0;const Sf=Promise.resolve(),Nf=()=>vr||(Sf.then(()=>vr=0),vr=Date.now());function Ff(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ce(Rf(r,n.value),t,5,[r])};return n.value=e,n.attached=Nf(),n}function Rf(e,t){if(N(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ui=/^on[a-z]/,Lf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Af(e,r,a):t==="style"?Of(e,n,r):Wn(t)?Qr(t)||Tf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):jf(e,t,r,a))?Pf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Cf(e,t,r,a))};function jf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ui.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ui.test(t)&&te(n)?!1:t in e}const $n=e=>{const t=e.props["onUpdate:modelValue"]||!1;return N(t)?n=>Cn(t,n):t};function $f(e){e.target.composing=!0}function di(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Xe={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e._assign=$n(a);const i=r||a.props&&a.props.type==="number";ft(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=wr(s)),e._assign(s)}),n&&ft(e,"change",()=>{e.value=e.value.trim()}),t||(ft(e,"compositionstart",$f),ft(e,"compositionend",di),ft(e,"change",di))},mounted(e,{value:t}){e.value=t==null?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e._assign=$n(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(a||e.type==="number")&&wr(e.value)===t))return;const o=t==null?"":t;e.value!==o&&(e.value=o)}},jo={deep:!0,created(e,t,n){e._assign=$n(n),ft(e,"change",()=>{const r=e._modelValue,a=Df(e),i=e.checked,o=e._assign;if(N(r)){const s=Bi(r,a),l=s!==-1;if(i&&!l)o(r.concat(a));else if(!i&&l){const c=[...r];c.splice(s,1),o(c)}}else if(Kn(r)){const s=new Set(r);i?s.add(a):s.delete(a),o(s)}else o($o(e,i))})},mounted:mi,beforeUpdate(e,t,n){e._assign=$n(n),mi(e,t,n)}};function mi(e,{value:t,oldValue:n},r){e._modelValue=t,N(t)?e.checked=Bi(t,r.props.value)>-1:Kn(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Bn(t,$o(e,!0)))}function Df(e){return"_value"in e?e._value:e.value}function $o(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const zf=fe({patchProp:Lf},kf);let pi;function Uf(){return pi||(pi=nf(zf))}const Hf=(...e)=>{const t=Uf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Yf(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Yf(e){return te(e)?document.querySelector(e):e}const nr="https://localhost:63296/api/Movies";async function Do(){let e;try{e=await fetch(nr)}catch(t){console.error(t)}finally{return!e||!e.ok?null:e.json()}}async function Bf(e){let t;try{t=await fetch(nr,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)})}catch(n){console.error(n)}finally{return!(!t||!t.ok)}}async function Wf(e){let t;try{t=await fetch(nr+`/${e.id}`,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)})}catch(n){console.error(n)}finally{return!(!t||!t.ok)}}async function Kf(e){let t;try{t=await fetch(nr+`/${e}`,{method:"DELETE"})}catch(n){console.error(n)}finally{return!(!t||!t.ok)}}const rr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Vf={props:["movieToUpdate"],data(){return{movie:this.movieToUpdate}},methods:{async editMovie(e){await Wf(e.movie)}}},qf={class:"modal fade",id:"modal2"},Xf={class:"modal-dialog"},Jf={class:"modal-content lg"},Gf=k("div",{class:"modal-header"},[k("h1",null,"Edit Movie"),k("button",{class:"btn-close",id:"btn-close","data-bs-dismiss":"modal","data-bs-target":"#modal2"})],-1),Zf={class:"modal-body"},Qf=k("label",{for:"name",class:"form-label"},"Name:",-1),ec=k("br",null,null,-1),tc=k("label",{for:"description",class:"form-label"}," Description: ",-1),nc=k("label",{for:"release year",class:"form-label"},"Release Year:",-1),rc=k("br",null,null,-1),ac={class:"form-element"},ic=k("label",{for:"academy-award"},"Academy Award:",-1),oc=k("label",{for:"director id",class:"form-label"}," Director ID: ",-1),sc={class:"modal-footer"},lc=k("button",{class:"btn btn-secondary",type:"button",value:"Cancel","data-bs-dismiss":"modal","data-bs-target":"#modal2"}," Cancel ",-1);function fc(e,t,n,r,a,i){return Ot(),Et("div",qf,[k("div",Xf,[k("div",Jf,[Gf,k("div",Zf,[k("form",null,[Qf,Fe(k("input",{id:"name","onUpdate:modelValue":t[0]||(t[0]=o=>a.movie.movie.name=o),type:"text",maxlength:"50",required:"",class:"form-control"},null,512),[[Xe,a.movie.movie.name]]),ec,k("div",null,[tc,Fe(k("textarea",{id:"description","onUpdate:modelValue":t[1]||(t[1]=o=>a.movie.movie.description=o),maxlength:"500",class:"form-control"},`\r
              `,512),[[Xe,a.movie.movie.description]])]),nc,Fe(k("input",{class:"form-control","onUpdate:modelValue":t[2]||(t[2]=o=>a.movie.movie.releaseYear=o),id:"release-year",type:"text",minlength:"4",maxlength:"4",required:""},null,512),[[Xe,a.movie.movie.releaseYear]]),rc,k("div",ac,[ic,Fe(k("input",{type:"checkbox",id:"academy-award","onUpdate:modelValue":t[3]||(t[3]=o=>a.movie.movie.academyAward=o)},null,512),[[jo,a.movie.movie.academyAward]])]),oc,Fe(k("input",{"onUpdate:modelValue":t[4]||(t[4]=o=>a.movie.movie.directorId=o),class:"form-control",id:"director-id",type:"number",min:"1"},null,512),[[Xe,a.movie.movie.directorId]])])]),k("div",sc,[k("button",{class:"btn btn-primary",type:"submit","data-bs-dismiss":"modal","data-bs-target":"#modal2",onClick:t[5]||(t[5]=o=>i.editMovie(a.movie))}," Save Movie "),lc])])])])}const hi=rr(Vf,[["render",fc]]);const cc={components:{EditMovie:hi},props:[],data(){return{movies:[],showEditMovie:!1,selectedMovie:{movie:{name:"",description:"",releaseYear:"",academyAward:!1,directorId:""}}}},async mounted(){this.getMovies()},methods:{async getMovies(){let e=await Do();e==null?console.log("There was an error loading the list of movies."):this.movies=e},editMovie(e){this.selectedMovie.movie=e},async deleteMovies(e){confirm("Are you sure you want to delete this movie?")?await Kf(e.id)==null?console.log("There was an error deleting this movie."):this.getMovies():console.log("The movie was not deleted.")}},components:{EditMovie:hi}},uc=e=>(go("data-v-1e44e8cf"),e=e(),vo(),e),dc={id:"moviesTable"},mc={class:"table table-dark table-striped table-hover"},pc=uc(()=>k("thead",{class:"thead-light"},[k("tr",null,[k("th",null,"Name"),k("th",null,"Description"),k("th",null,"Release Year"),k("th",null,"Academy Award"),k("th",null,"Director ID"),k("th",{style:{"min-width":"120px"},scope:"col"})])],-1)),hc=["onClick"],gc=["onClick"];function vc(e,t,n,r,a,i){const o=Ir("edit-movie"),s=Ir("font-awesome-icon");return Ot(),Et("div",dc,[re(o,{"movie-to-update":this.selectedMovie},null,8,["movie-to-update"]),k("table",mc,[pc,k("tbody",null,[(Ot(!0),Et(_e,null,Hl(a.movies,l=>(Ot(),Et("tr",{key:l.ID},[k("td",null,jt(l.name),1),k("td",null,jt(l.description),1),k("td",null,jt(l.releaseYear),1),k("td",null,jt(l.academyAward),1),k("td",null,jt(l.directorId),1),k("td",null,[k("button",{class:"clickable m-2",onClick:c=>i.editMovie(l),title:"Edit Movie","data-bs-toggle":"modal","data-bs-target":"#modal2"},[re(s,{icon:"fa-solid fa-pen-to-square"})],8,hc),k("button",{class:"clickable m-2",onClick:c=>i.deleteMovies(l),title:"Delete movie"},[re(s,{icon:"fa-solid fa-trash"})],8,gc)])]))),128))])])])}const zo=rr(cc,[["render",vc],["__scopeId","data-v-1e44e8cf"]]);const bc={data(){return{newMovie:{name:"",description:"",releaseYear:"",academyAward:!1,directorId:""}}},components:{MoviesTable:zo},methods:{async addMovie(){const e={name:this.newMovie.name,description:this.newMovie.description,releaseYear:this.newMovie.releaseYear,academyAward:this.newMovie.academyAward,directorId:this.newMovie.directorId};await Bf(e)==null?console.log("There was an error adding this movie"):this.getMovies()},async getMovies(){let e=await Do();e==null?console.log("There was an error loading the list of movies."):this.movies=e}}},yc={class:"btn btn-secondary",title:"Edit Movie","data-bs-toggle":"modal","data-bs-target":"#modal"},_c={class:"modal fade",id:"modal"},xc={class:"modal-dialog"},wc={class:"modal-content"},kc=k("div",{class:"modal-header",id:"1"},[k("h1",null,"Add Movie"),k("button",{class:"btn-close",id:"btn-close","data-bs-dismiss":"modal","data-bs-target":"#modal"})],-1),Ac={class:"modal-body"},Oc={class:"form-floating"},Ec=k("label",{for:"name",class:"form-label"},"Name",-1),Cc=k("br",null,null,-1),Pc={class:"form-floating"},Ic=k("label",{for:"description",class:"form-label"},"Description",-1),Tc=k("br",null,null,-1),Mc={class:"form-floating"},Sc=k("label",{for:"release year",class:"form-label"},"Release Year (YYYY)",-1),Nc={class:"form-element"},Fc=k("label",{for:"academy-award"},"Academy Award:",-1),Rc=k("br",null,null,-1),Lc={class:"form-floating"},jc=k("label",{for:"director id",class:"form-label"},"Director ID:",-1),$c=k("br",null,null,-1),Dc=k("div",{class:"modal-footer"},[k("button",{class:"btn btn-primary",type:"submit",value:"Save","data-bs-dismiss":"modal","data-bs-target":"#modal"}," Save Movie "),k("button",{class:"btn btn-secondary",type:"reset",value:"Cancel","data-bs-dismiss":"modal","data-bs-target":"#modal"}," Cancel ")],-1);function zc(e,t,n,r,a,i){const o=Ir("font-awesome-icon");return Ot(),Et(_e,null,[k("button",yc,[re(o,{icon:"fa-circle-plus"}),No(" Add a Movie ")]),k("div",_c,[k("div",xc,[k("div",wc,[kc,k("div",Ac,[k("form",{onSubmit:t[5]||(t[5]=s=>i.addMovie(a.newMovie))},[k("div",Oc,[Fe(k("input",{class:"form-control",id:"name",placeholder:"Movie Title",type:"text",maxlength:"50",required:"","onUpdate:modelValue":t[0]||(t[0]=s=>a.newMovie.name=s)},null,512),[[Xe,a.newMovie.name]]),Ec]),Cc,k("div",Pc,[Fe(k("textarea",{class:"form-control",id:"description",placeholder:"Description - limit 500 characters",maxlength:"500","onUpdate:modelValue":t[1]||(t[1]=s=>a.newMovie.description=s)},`\r
              `,512),[[Xe,a.newMovie.description]]),Ic]),Tc,k("div",Mc,[Fe(k("input",{class:"form-control",id:"release-year",placeholder:"YYYY",type:"text",minlength:"4",maxlength:"4",required:"","onUpdate:modelValue":t[2]||(t[2]=s=>a.newMovie.releaseYear=s)},null,512),[[Xe,a.newMovie.releaseYear]]),Sc]),k("div",Nc,[Fc,Fe(k("input",{type:"checkbox",id:"academy-award","onUpdate:modelValue":t[3]||(t[3]=s=>a.newMovie.academyAward=s)},null,512),[[jo,a.newMovie.academyAward]])]),Rc,k("div",Lc,[Fe(k("input",{class:"form-control",placeholder:"Ex. 5",id:"director-id",type:"number",min:"1","onUpdate:modelValue":t[4]||(t[4]=s=>a.newMovie.directorId=s)},null,512),[[Xe,a.newMovie.directorId]]),jc]),$c,Dc],32)])])])])],64)}const Uc=rr(bc,[["render",zc]]);const Hc=e=>(go("data-v-b0ff3c85"),e=e(),vo(),e),Yc={class:"container"},Bc=Hc(()=>k("h1",null,"Mayvue Movies Collection",-1)),Wc={class:"add-movie"},Kc={__name:"App",setup(e){return(t,n)=>(Ot(),Et("div",Yc,[Bc,k("div",Wc,[re(Uc)]),re(zo)]))}},Vc=rr(Kc,[["__scopeId","data-v-b0ff3c85"]]);function gi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gi(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dn(e){return Dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dn(e)}function qc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Xc(e,t,n){return t&&vi(e.prototype,t),n&&vi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ba(e,t){return Gc(e)||Qc(e,t)||Uo(e,t)||tu()}function an(e){return Jc(e)||Zc(e)||Uo(e)||eu()}function Jc(e){if(Array.isArray(e))return jr(e)}function Gc(e){if(Array.isArray(e))return e}function Zc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Qc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Uo(e,t){if(!!e){if(typeof e=="string")return jr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jr(e,t)}}function jr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function eu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function tu(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bi=function(){},ya={},Ho={},Yo=null,Bo={mark:bi,measure:bi};try{typeof window<"u"&&(ya=window),typeof document<"u"&&(Ho=document),typeof MutationObserver<"u"&&(Yo=MutationObserver),typeof performance<"u"&&(Bo=performance)}catch{}var nu=ya.navigator||{},yi=nu.userAgent,_i=yi===void 0?"":yi,Qe=ya,J=Ho,xi=Yo,vn=Bo;Qe.document;var We=!!J.documentElement&&!!J.head&&typeof J.addEventListener=="function"&&typeof J.createElement=="function",Wo=~_i.indexOf("MSIE")||~_i.indexOf("Trident/"),bn,yn,_n,xn,wn,Ue="___FONT_AWESOME___",$r=16,Ko="fa",Vo="svg-inline--fa",ht="data-fa-i2svg",Dr="data-fa-pseudo-element",ru="data-fa-pseudo-element-pending",_a="data-prefix",xa="data-icon",wi="fontawesome-i2svg",au="async",iu=["HTML","HEAD","STYLE","SCRIPT"],qo=function(){try{return!0}catch{return!1}}(),X="classic",Z="sharp",wa=[X,Z];function on(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var Zt=on((bn={},ee(bn,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ee(bn,Z,{fa:"solid",fass:"solid","fa-solid":"solid"}),bn)),Qt=on((yn={},ee(yn,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ee(yn,Z,{solid:"fass"}),yn)),en=on((_n={},ee(_n,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ee(_n,Z,{fass:"fa-solid"}),_n)),ou=on((xn={},ee(xn,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ee(xn,Z,{"fa-solid":"fass"}),xn)),su=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Xo="fa-layers-text",lu=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,fu=on((wn={},ee(wn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ee(wn,Z,{900:"fass"}),wn)),Jo=[1,2,3,4,5,6,7,8,9,10],cu=Jo.concat([11,12,13,14,15,16,17,18,19,20]),uu=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ut={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},tn=new Set;Object.keys(Qt[X]).map(tn.add.bind(tn));Object.keys(Qt[Z]).map(tn.add.bind(tn));var du=[].concat(wa,an(tn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ut.GROUP,ut.SWAP_OPACITY,ut.PRIMARY,ut.SECONDARY]).concat(Jo.map(function(e){return"".concat(e,"x")})).concat(cu.map(function(e){return"w-".concat(e)})),Ht=Qe.FontAwesomeConfig||{};function mu(e){var t=J.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function pu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(J&&typeof J.querySelector=="function"){var hu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];hu.forEach(function(e){var t=ba(e,2),n=t[0],r=t[1],a=pu(mu(n));a!=null&&(Ht[r]=a)})}var Go={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ko,replacementClass:Vo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ht.familyPrefix&&(Ht.cssPrefix=Ht.familyPrefix);var Tt=E(E({},Go),Ht);Tt.autoReplaceSvg||(Tt.observeMutations=!1);var I={};Object.keys(Go).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){Tt[e]=n,Yt.forEach(function(r){return r(I)})},get:function(){return Tt[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){Tt.cssPrefix=t,Yt.forEach(function(n){return n(I)})},get:function(){return Tt.cssPrefix}});Qe.FontAwesomeConfig=I;var Yt=[];function gu(e){return Yt.push(e),function(){Yt.splice(Yt.indexOf(e),1)}}var Ve=$r,Re={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function vu(e){if(!(!e||!We)){var t=J.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=J.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return J.head.insertBefore(t,r),e}}var bu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nn(){for(var e=12,t="";e-- >0;)t+=bu[Math.random()*62|0];return t}function Ft(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ka(e){return e.classList?Ft(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Zo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yu(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Zo(e[n]),'" ')},"").trim()}function ar(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Aa(e){return e.size!==Re.size||e.x!==Re.x||e.y!==Re.y||e.rotate!==Re.rotate||e.flipX||e.flipY}function _u(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function xu(e){var t=e.transform,n=e.width,r=n===void 0?$r:n,a=e.height,i=a===void 0?$r:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Wo?l+="translate(".concat(t.x/Ve-r/2,"em, ").concat(t.y/Ve-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ve,"em), calc(-50% + ").concat(t.y/Ve,"em)) "):l+="translate(".concat(t.x/Ve,"em, ").concat(t.y/Ve,"em) "),l+="scale(".concat(t.size/Ve*(t.flipX?-1:1),", ").concat(t.size/Ve*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var wu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Qo(){var e=Ko,t=Vo,n=I.cssPrefix,r=I.replacementClass,a=wu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ki=!1;function br(){I.autoAddCss&&!ki&&(vu(Qo()),ki=!0)}var ku={mixout:function(){return{dom:{css:Qo,insertCss:br}}},hooks:function(){return{beforeDOMElementCreation:function(){br()},beforeI2svg:function(){br()}}}},He=Qe||{};He[Ue]||(He[Ue]={});He[Ue].styles||(He[Ue].styles={});He[Ue].hooks||(He[Ue].hooks={});He[Ue].shims||(He[Ue].shims=[]);var Oe=He[Ue],es=[],Au=function e(){J.removeEventListener("DOMContentLoaded",e),zn=1,es.map(function(t){return t()})},zn=!1;We&&(zn=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),zn||J.addEventListener("DOMContentLoaded",Au));function Ou(e){!We||(zn?setTimeout(e,0):es.push(e))}function sn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Zo(e):"<".concat(t," ").concat(yu(r),">").concat(i.map(sn).join(""),"</").concat(t,">")}function Ai(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Eu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},yr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Eu(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Cu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function zr(e){var t=Cu(e);return t.length===1?t[0].toString(16):null}function Pu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Oi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ur(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Oi(t);typeof Oe.hooks.addPack=="function"&&!a?Oe.hooks.addPack(e,Oi(t)):Oe.styles[e]=E(E({},Oe.styles[e]||{}),i),e==="fas"&&Ur("fa",t)}var kn,An,On,yt=Oe.styles,Iu=Oe.shims,Tu=(kn={},ee(kn,X,Object.values(en[X])),ee(kn,Z,Object.values(en[Z])),kn),Oa=null,ts={},ns={},rs={},as={},is={},Mu=(An={},ee(An,X,Object.keys(Zt[X])),ee(An,Z,Object.keys(Zt[Z])),An);function Su(e){return~du.indexOf(e)}function Nu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Su(a)?a:null}var os=function(){var t=function(i){return yr(yt,function(o,s,l){return o[l]=yr(s,i,{}),o},{})};ts=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ns=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),is=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in yt||I.autoFetchSvg,r=yr(Iu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});rs=r.names,as=r.unicodes,Oa=ir(I.styleDefault,{family:I.familyDefault})};gu(function(e){Oa=ir(e.styleDefault,{family:I.familyDefault})});os();function Ea(e,t){return(ts[e]||{})[t]}function Fu(e,t){return(ns[e]||{})[t]}function dt(e,t){return(is[e]||{})[t]}function ss(e){return rs[e]||{prefix:null,iconName:null}}function Ru(e){var t=as[e],n=Ea("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function et(){return Oa}var Ca=function(){return{prefix:null,iconName:null,rest:[]}};function ir(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=Zt[r][e],i=Qt[r][e]||Qt[r][a],o=e in Oe.styles?e:null;return i||o||null}var Ei=(On={},ee(On,X,Object.keys(en[X])),ee(On,Z,Object.keys(en[Z])),On);function or(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ee(t,X,"".concat(I.cssPrefix,"-").concat(X)),ee(t,Z,"".concat(I.cssPrefix,"-").concat(Z)),t),o=null,s=X;(e.includes(i[X])||e.some(function(c){return Ei[X].includes(c)}))&&(s=X),(e.includes(i[Z])||e.some(function(c){return Ei[Z].includes(c)}))&&(s=Z);var l=e.reduce(function(c,d){var m=Nu(I.cssPrefix,d);if(yt[d]?(d=Tu[s].includes(d)?ou[s][d]:d,o=d,c.prefix=d):Mu[s].indexOf(d)>-1?(o=d,c.prefix=ir(d,{family:s})):m?c.iconName=m:d!==I.replacementClass&&d!==i[X]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?ss(c.iconName):{},A=dt(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||A||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!yt.far&&yt.fas&&!I.autoFetchSvg&&(c.prefix="fas")}return c},Ca());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(yt.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=dt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=et()||"fas"),l}var Lu=function(){function e(){qc(this,e),this.definitions={}}return Xc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Ur(s,o[s]);var l=en[X][s];l&&Ur(l,o[s]),os()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Ci=[],_t={},Ct={},ju=Object.keys(Ct);function $u(e,t){var n=t.mixoutsTo;return Ci=e,_t={},Object.keys(Ct).forEach(function(r){ju.indexOf(r)===-1&&delete Ct[r]}),Ci.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Dn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){_t[o]||(_t[o]=[]),_t[o].push(i[o])})}r.provides&&r.provides(Ct)}),n}function Hr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=_t[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function gt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=_t[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ye(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ct[e]?Ct[e].apply(null,t):void 0}function Yr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||et();if(!!t)return t=dt(n,t)||t,Ai(ls.definitions,n,t)||Ai(Oe.styles,n,t)}var ls=new Lu,Du=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,gt("noAuto")},zu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return We?(gt("beforeI2svg",t),Ye("pseudoElements2svg",t),Ye("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Ou(function(){Hu({autoReplaceSvgRoot:n}),gt("watch",t)})}},Uu={icon:function(t){if(t===null)return null;if(Dn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ir(t[0]);return{prefix:r,iconName:dt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(su))){var a=or(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||et(),iconName:dt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=et();return{prefix:i,iconName:dt(i,t)||t}}}},he={noAuto:Du,config:I,dom:zu,parse:Uu,library:ls,findIconDefinition:Yr,toHtml:sn},Hu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?J:n;(Object.keys(Oe.styles).length>0||I.autoFetchSvg)&&We&&I.autoReplaceSvg&&he.dom.i2svg({node:r})};function sr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return sn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!We){var r=J.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Yu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Aa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=ar(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Bu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Pa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,A=v===void 0?!1:v,L=r.found?r:n,S=L.width,$=L.height,y=a==="fak",C=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),R={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat($)})},D=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(S/$*16*.0625,"em")}:{};A&&(R.attributes[ht]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(d||nn())},children:[l]}),delete R.attributes.title);var W=E(E({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},D),m.styles)}),ce=r.found&&n.found?Ye("generateAbstractMask",W)||{children:[],attributes:{}}:Ye("generateAbstractIcon",W)||{children:[],attributes:{}},ae=ce.children,be=ce.attributes;return W.children=ae,W.attributes=be,s?Bu(W):Yu(W)}function Pi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ht]="");var d=E({},o.styles);Aa(a)&&(d.transform=xu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=ar(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Wu(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=ar(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var _r=Oe.styles;function Br(e){var t=e[0],n=e[1],r=e.slice(4),a=ba(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(ut.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ut.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ut.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Ku={found:!1,width:512,height:512};function Vu(e,t){!qo&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Wr(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=et()),new Promise(function(r,a){if(Ye("missingIconAbstract"),n==="fa"){var i=ss(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&_r[t]&&_r[t][e]){var o=_r[t][e];return r(Br(o))}Vu(e,t),r(E(E({},Ku),{},{icon:I.showMissingIcons&&e?Ye("missingIconAbstract")||{}:{}}))})}var Ii=function(){},Kr=I.measurePerformance&&vn&&vn.mark&&vn.measure?vn:{mark:Ii,measure:Ii},zt='FA "6.2.0"',qu=function(t){return Kr.mark("".concat(zt," ").concat(t," begins")),function(){return fs(t)}},fs=function(t){Kr.mark("".concat(zt," ").concat(t," ends")),Kr.measure("".concat(zt," ").concat(t),"".concat(zt," ").concat(t," begins"),"".concat(zt," ").concat(t," ends"))},Ia={begin:qu,end:fs},Mn=function(){};function Ti(e){var t=e.getAttribute?e.getAttribute(ht):null;return typeof t=="string"}function Xu(e){var t=e.getAttribute?e.getAttribute(_a):null,n=e.getAttribute?e.getAttribute(xa):null;return t&&n}function Ju(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Gu(){if(I.autoReplaceSvg===!0)return Sn.replace;var e=Sn[I.autoReplaceSvg];return e||Sn.replace}function Zu(e){return J.createElementNS("http://www.w3.org/2000/svg",e)}function Qu(e){return J.createElement(e)}function cs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Zu:Qu:n;if(typeof e=="string")return J.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(cs(o,{ceFn:r}))}),a}function ed(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Sn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(cs(a),n)}),n.getAttribute(ht)===null&&I.keepOriginalSource){var r=J.createComment(ed(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ka(n).indexOf(I.replacementClass))return Sn.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return sn(s)}).join(`
`);n.setAttribute(ht,""),n.innerHTML=o}};function Mi(e){e()}function us(e,t){var n=typeof t=="function"?t:Mn;if(e.length===0)n();else{var r=Mi;I.mutateApproach===au&&(r=Qe.requestAnimationFrame||Mi),r(function(){var a=Gu(),i=Ia.begin("mutate");e.map(a),i(),n()})}}var Ta=!1;function ds(){Ta=!0}function Vr(){Ta=!1}var Un=null;function Si(e){if(!!xi&&!!I.observeMutations){var t=e.treeCallback,n=t===void 0?Mn:t,r=e.nodeCallback,a=r===void 0?Mn:r,i=e.pseudoElementsCallback,o=i===void 0?Mn:i,s=e.observeMutationsRoot,l=s===void 0?J:s;Un=new xi(function(c){if(!Ta){var d=et();Ft(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ti(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ti(m.target)&&~uu.indexOf(m.attributeName))if(m.attributeName==="class"&&Xu(m.target)){var v=or(ka(m.target)),A=v.prefix,L=v.iconName;m.target.setAttribute(_a,A||d),L&&m.target.setAttribute(xa,L)}else Ju(m.target)&&a(m.target)})}}),We&&Un.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function td(){!Un||Un.disconnect()}function nd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function rd(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=or(ka(e));return a.prefix||(a.prefix=et()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Fu(a.prefix,e.innerText)||Ea(a.prefix,zr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function ad(e){var t=Ft(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||nn()):(t["aria-hidden"]="true",t.focusable="false")),t}function id(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Re,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=rd(e),r=n.iconName,a=n.prefix,i=n.rest,o=ad(e),s=Hr("parseNodeAttributes",{},e),l=t.styleParser?nd(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Re,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var od=Oe.styles;function ms(e){var t=I.autoReplaceSvg==="nest"?Ni(e,{styleParser:!1}):Ni(e);return~t.extra.classes.indexOf(Xo)?Ye("generateLayersText",e,t):Ye("generateSvgReplacementMutation",e,t)}var tt=new Set;wa.map(function(e){tt.add("fa-".concat(e))});Object.keys(Zt[X]).map(tt.add.bind(tt));Object.keys(Zt[Z]).map(tt.add.bind(tt));tt=an(tt);function Fi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!We)return Promise.resolve();var n=J.documentElement.classList,r=function(m){return n.add("".concat(wi,"-").concat(m))},a=function(m){return n.remove("".concat(wi,"-").concat(m))},i=I.autoFetchSvg?tt:wa.map(function(d){return"fa-".concat(d)}).concat(Object.keys(od));i.includes("fa")||i.push("fa");var o=[".".concat(Xo,":not([").concat(ht,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ht,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ft(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ia.begin("onTree"),c=s.reduce(function(d,m){try{var v=ms(m);v&&d.push(v)}catch(A){qo||A.name==="MissingIcon"&&console.error(A)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){us(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function sd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ms(e).then(function(n){n&&us([n],t)})}function ld(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Yr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Yr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var fd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Re:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,A=n.titleId,L=A===void 0?null:A,S=n.classes,$=S===void 0?[]:S,y=n.attributes,C=y===void 0?{}:y,R=n.styles,D=R===void 0?{}:R;if(!!t){var W=t.prefix,ce=t.iconName,ae=t.icon;return sr(E({type:"icon"},t),function(){return gt("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(v?C["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(L||nn()):(C["aria-hidden"]="true",C.focusable="false")),Pa({icons:{main:Br(ae),mask:l?Br(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ce,transform:E(E({},Re),a),symbol:o,title:v,maskId:d,titleId:L,extra:{attributes:C,styles:D,classes:$}})})}},cd={mixout:function(){return{icon:ld(fd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Fi,n.nodeCallback=sd,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?J:r,i=n.callback,o=i===void 0?function(){}:i;return Fi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(A,L){Promise.all([Wr(a,s),d.iconName?Wr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var $=ba(S,2),y=$[0],C=$[1];A([n,Pa({icons:{main:y,mask:C},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(L)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ar(s);l.length>0&&(a.style=l);var c;return Aa(o)&&(c=Ye("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},ud={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return sr({type:"layer"},function(){gt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(an(i)).join(" ")},children:o}]})}}}},dd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return sr({type:"counter",content:n},function(){return gt("beforeDOMElementCreation",{content:n,params:r}),Wu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(an(s))}})})}}}},md={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Re:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,A=v===void 0?{}:v;return sr({type:"text",content:n},function(){return gt("beforeDOMElementCreation",{content:n,params:r}),Pi({content:n,transform:E(E({},Re),i),title:s,extra:{attributes:m,styles:A,classes:["".concat(I.cssPrefix,"-layers-text")].concat(an(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Wo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Pi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},pd=new RegExp('"',"ug"),Ri=[1105920,1112319];function hd(e){var t=e.replace(pd,""),n=Pu(t,0),r=n>=Ri[0]&&n<=Ri[1],a=t.length===2?t[0]===t[1]:!1;return{value:zr(a?t[0]:t),isSecondary:r||a}}function Li(e,t){var n="".concat(ru).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ft(e.children),o=i.filter(function(ae){return ae.getAttribute(Dr)===t})[0],s=Qe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(lu),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:X,A=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Qt[v][l[2].toLowerCase()]:fu[v][c],L=hd(m),S=L.value,$=L.isSecondary,y=l[0].startsWith("FontAwesome"),C=Ea(A,S),R=C;if(y){var D=Ru(S);D.iconName&&D.prefix&&(C=D.iconName,A=D.prefix)}if(C&&!$&&(!o||o.getAttribute(_a)!==A||o.getAttribute(xa)!==R)){e.setAttribute(n,R),o&&e.removeChild(o);var W=id(),ce=W.extra;ce.attributes[Dr]=t,Wr(C,A).then(function(ae){var be=Pa(E(E({},W),{},{icons:{main:ae,mask:Ca()},prefix:A,iconName:R,extra:ce,watchable:!0})),ge=J.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=be.map(function(je){return sn(je)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function gd(e){return Promise.all([Li(e,"::before"),Li(e,"::after")])}function vd(e){return e.parentNode!==document.head&&!~iu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Dr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ji(e){if(!!We)return new Promise(function(t,n){var r=Ft(e.querySelectorAll("*")).filter(vd).map(gd),a=Ia.begin("searchPseudoElements");ds(),Promise.all(r).then(function(){a(),Vr(),t()}).catch(function(){a(),Vr(),n()})})}var bd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ji,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?J:r;I.searchPseudoElements&&ji(a)}}},$i=!1,yd={mixout:function(){return{dom:{unwatch:function(){ds(),$i=!0}}}},hooks:function(){return{bootstrap:function(){Si(Hr("mutationObserverCallbacks",{}))},noAuto:function(){td()},watch:function(n){var r=n.observeMutationsRoot;$i?Vr():Si(Hr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Di=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},_d={mixout:function(){return{parse:{transform:function(n){return Di(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Di(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:m,path:v};return{tag:"g",attributes:E({},A.outer),children:[{tag:"g",attributes:E({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),A.path)}]}]}}}},xr={x:0,y:0,width:"100%",height:"100%"};function zi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function xd(e){return e.tag==="g"?e.children:[e]}var wd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?or(a.split(" ").map(function(o){return o.trim()})):Ca();return i.prefix||(i.prefix=et()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,A=_u({transform:l,containerWidth:m,iconWidth:c}),L={tag:"rect",attributes:E(E({},xr),{},{fill:"white"})},S=d.children?{children:d.children.map(zi)}:{},$={tag:"g",attributes:E({},A.inner),children:[zi(E({tag:d.tag,attributes:E(E({},d.attributes),A.path)},S))]},y={tag:"g",attributes:E({},A.outer),children:[$]},C="mask-".concat(s||nn()),R="clip-".concat(s||nn()),D={tag:"mask",attributes:E(E({},xr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,y]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:xd(v)},D]};return r.push(W,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(C,")")},xr)}),{children:r,attributes:a}}}},kd={provides:function(t){var n=!1;Qe.matchMedia&&(n=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Ad={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Od=[ku,cd,ud,dd,md,bd,yd,_d,wd,kd,Ad];$u(Od,{mixoutsTo:he});he.noAuto;var ps=he.config,lr=he.library;he.dom;var Hn=he.parse;he.findIconDefinition;he.toHtml;var Ed=he.icon;he.layer;var Cd=he.text;he.counter;function Ui(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ui(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ui(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Yn(e){return Yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Yn(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Id(e,t){if(e==null)return{};var n=Pd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function qr(e){return Td(e)||Md(e)||Sd(e)||Nd()}function Td(e){if(Array.isArray(e))return Xr(e)}function Md(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Sd(e,t){if(!!e){if(typeof e=="string")return Xr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xr(e,t)}}function Xr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Nd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},hs={exports:{}};(function(e){(function(t){var n=function(y,C,R){if(!c(C)||m(C)||v(C)||A(C)||l(C))return C;var D,W=0,ce=0;if(d(C))for(D=[],ce=C.length;W<ce;W++)D.push(n(y,C[W],R));else{D={};for(var ae in C)Object.prototype.hasOwnProperty.call(C,ae)&&(D[y(ae,R)]=n(y,C[ae],R))}return D},r=function(y,C){C=C||{};var R=C.separator||"_",D=C.split||/(?=[A-Z])/;return y.split(D).join(R)},a=function(y){return L(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(C,R){return R?R.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var C=a(y);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(y,C){return r(y,C).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},c=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},v=function(y){return s.call(y)=="[object RegExp]"},A=function(y){return s.call(y)=="[object Boolean]"},L=function(y){return y=y-0,y===y},S=function(y,C){var R=C&&"process"in C?C.process:C;return typeof R!="function"?y:function(D,W){return R(D,y,W)}},$={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,C){return n(S(a,C),y)},decamelizeKeys:function(y,C){return n(S(o,C),y,C)},pascalizeKeys:function(y,C){return n(S(i,C),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})(Fd)})(hs);var Rd=hs.exports,Ld=["class","style"];function jd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Rd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function $d(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ma(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ma(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=$d(d);break;case"style":l.style=jd(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Id(n,Ld);return Lo(e.tag,we(we(we({},t),{},{class:a.class,style:we(we({},a.style),o)},a.attrs),s),r)}var gs=!1;try{gs=!0}catch{}function Dd(){if(!gs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Bt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function zd(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Hi(e){if(e&&Yn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Hn.icon)return Hn.icon(e);if(e===null)return null;if(Yn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Ud=ma({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ve(function(){return Hi(t.icon)}),i=ve(function(){return Bt("classes",zd(t))}),o=ve(function(){return Bt("transform",typeof t.transform=="string"?Hn.transform(t.transform):t.transform)}),s=ve(function(){return Bt("mask",Hi(t.mask))}),l=ve(function(){return Ed(a.value,we(we(we(we({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Pn(l,function(d){if(!d)return Dd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ve(function(){return l.value?Ma(l.value.abstract[0],{},r):null});return function(){return c.value}}});ma({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=ps.familyPrefix,i=ve(function(){return["".concat(a,"-layers")].concat(qr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Lo("div",{class:i.value},r.default?r.default():[])}}});ma({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=ps.familyPrefix,i=ve(function(){return Bt("classes",[].concat(qr(t.counter?["".concat(a,"-layers-counter")]:[]),qr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ve(function(){return Bt("transform",typeof t.transform=="string"?Hn.transform(t.transform):t.transform)}),s=ve(function(){var c=Cd(t.value.toString(),we(we({},o.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ve(function(){return Ma(s.value,{},r)});return function(){return l.value}}});var Hd={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},Yd={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Bd={prefix:"fas",iconName:"copy",icon:[512,512,[],"f0c5","M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"]},Wd={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};lr.add(Hd);lr.add(Bd);lr.add(Yd);lr.add(Wd);Hf(Vc).component("font-awesome-icon",Ud).mount("#app");
