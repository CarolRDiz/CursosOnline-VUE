(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Zl(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function ko(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Oe(s)?oy(s):ko(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Oe(t))return t;if(we(t))return t}}const sy=/;(?![^(]*\))/g,iy=/:([^]+)/,ry=/\/\*.*?\*\//gs;function oy(t){const e={};return t.replace(ry,"").split(sy).forEach(n=>{if(n){const s=n.split(iy);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ec(t){let e="";if(Oe(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=ec(t[n]);s&&(e+=s+" ")}else if(we(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ay="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ly=Zl(ay);function md(t){return!!t||t===""}const Yn=t=>Oe(t)?t:t==null?"":H(t)||we(t)&&(t.toString===Ed||!G(t.toString))?JSON.stringify(t,_d,2):String(t),_d=(t,e)=>e&&e.__v_isRef?_d(t,e.value):ks(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:yd(e)?{[`Set(${e.size})`]:[...e.values()]}:we(e)&&!H(e)&&!wd(e)?String(e):e,ve={},As=[],Nt=()=>{},cy=()=>!1,uy=/^on[^a-z]/,No=t=>uy.test(t),tc=t=>t.startsWith("onUpdate:"),We=Object.assign,nc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hy=Object.prototype.hasOwnProperty,te=(t,e)=>hy.call(t,e),H=Array.isArray,ks=t=>Oo(t)==="[object Map]",yd=t=>Oo(t)==="[object Set]",G=t=>typeof t=="function",Oe=t=>typeof t=="string",sc=t=>typeof t=="symbol",we=t=>t!==null&&typeof t=="object",vd=t=>we(t)&&G(t.then)&&G(t.catch),Ed=Object.prototype.toString,Oo=t=>Ed.call(t),fy=t=>Oo(t).slice(8,-1),wd=t=>Oo(t)==="[object Object]",ic=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Lr=Zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Po=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},dy=/-(\w)/g,Kt=Po(t=>t.replace(dy,(e,n)=>n?n.toUpperCase():"")),py=/\B([A-Z])/g,Ys=Po(t=>t.replace(py,"-$1").toLowerCase()),Do=Po(t=>t.charAt(0).toUpperCase()+t.slice(1)),ma=Po(t=>t?`on${Do(t)}`:""),Di=(t,e)=>!Object.is(t,e),Fr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Vr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ja=t=>{const e=parseFloat(t);return isNaN(e)?t:e},gy=t=>{const e=Oe(t)?Number(t):NaN;return isNaN(e)?t:e};let Fu;const my=()=>Fu||(Fu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let bt;class Td{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function _y(t){return new Td(t)}function yy(t,e=bt){e&&e.active&&e.effects.push(t)}function vy(){return bt}const rc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Id=t=>(t.w&On)>0,bd=t=>(t.n&On)>0,Ey=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=On},wy=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Id(i)&&!bd(i)?i.delete(t):e[n++]=i,i.w&=~On,i.n&=~On}e.length=n}},Qa=new WeakMap;let yi=0,On=1;const Za=30;let Ct;const ts=Symbol(""),el=Symbol("");class oc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,yy(this,s)}run(){if(!this.active)return this.fn();let e=Ct,n=Sn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ct,Ct=this,Sn=!0,On=1<<++yi,yi<=Za?Ey(this):Uu(this),this.fn()}finally{yi<=Za&&wy(this),On=1<<--yi,Ct=this.parent,Sn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ct===this?this.deferStop=!0:this.active&&(Uu(this),this.onStop&&this.onStop(),this.active=!1)}}function Uu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Sn=!0;const Cd=[];function Xs(){Cd.push(Sn),Sn=!1}function Js(){const t=Cd.pop();Sn=t===void 0?!0:t}function ot(t,e,n){if(Sn&&Ct){let s=Qa.get(t);s||Qa.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=rc()),Sd(i)}}function Sd(t,e){let n=!1;yi<=Za?bd(t)||(t.n|=On,n=!Id(t)):n=!t.has(Ct),n&&(t.add(Ct),Ct.deps.push(t))}function on(t,e,n,s,i,r){const o=Qa.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&H(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":H(t)?ic(n)&&a.push(o.get("length")):(a.push(o.get(ts)),ks(t)&&a.push(o.get(el)));break;case"delete":H(t)||(a.push(o.get(ts)),ks(t)&&a.push(o.get(el)));break;case"set":ks(t)&&a.push(o.get(ts));break}if(a.length===1)a[0]&&tl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);tl(rc(l))}}function tl(t,e){const n=H(t)?t:[...t];for(const s of n)s.computed&&$u(s);for(const s of n)s.computed||$u(s)}function $u(t,e){(t!==Ct||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ty=Zl("__proto__,__v_isRef,__isVue"),Rd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(sc)),Iy=ac(),by=ac(!1,!0),Cy=ac(!0),Bu=Sy();function Sy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ne(this);for(let r=0,o=this.length;r<o;r++)ot(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ne)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Xs();const s=ne(this)[e].apply(this,n);return Js(),s}}),t}function Ry(t){const e=ne(this);return ot(e,"has",t),e.hasOwnProperty(t)}function ac(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Wy:Pd:e?Od:Nd).get(s))return s;const o=H(s);if(!t){if(o&&te(Bu,i))return Reflect.get(Bu,i,r);if(i==="hasOwnProperty")return Ry}const a=Reflect.get(s,i,r);return(sc(i)?Rd.has(i):Ty(i))||(t||ot(s,"get",i),e)?a:Ye(a)?o&&ic(i)?a:a.value:we(a)?t?Dd(a):Qs(a):a}}const Ay=Ad(),ky=Ad(!0);function Ad(t=!1){return function(n,s,i,r){let o=n[s];if(Bs(o)&&Ye(o)&&!Ye(i))return!1;if(!t&&(!Kr(i)&&!Bs(i)&&(o=ne(o),i=ne(i)),!H(n)&&Ye(o)&&!Ye(i)))return o.value=i,!0;const a=H(n)&&ic(s)?Number(s)<n.length:te(n,s),l=Reflect.set(n,s,i,r);return n===ne(r)&&(a?Di(i,o)&&on(n,"set",s,i):on(n,"add",s,i)),l}}function Ny(t,e){const n=te(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&on(t,"delete",e,void 0),s}function Oy(t,e){const n=Reflect.has(t,e);return(!sc(e)||!Rd.has(e))&&ot(t,"has",e),n}function Py(t){return ot(t,"iterate",H(t)?"length":ts),Reflect.ownKeys(t)}const kd={get:Iy,set:Ay,deleteProperty:Ny,has:Oy,ownKeys:Py},Dy={get:Cy,set(t,e){return!0},deleteProperty(t,e){return!0}},xy=We({},kd,{get:by,set:ky}),lc=t=>t,xo=t=>Reflect.getPrototypeOf(t);function Er(t,e,n=!1,s=!1){t=t.__v_raw;const i=ne(t),r=ne(e);n||(e!==r&&ot(i,"get",e),ot(i,"get",r));const{has:o}=xo(i),a=s?lc:n?hc:xi;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function wr(t,e=!1){const n=this.__v_raw,s=ne(n),i=ne(t);return e||(t!==i&&ot(s,"has",t),ot(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Tr(t,e=!1){return t=t.__v_raw,!e&&ot(ne(t),"iterate",ts),Reflect.get(t,"size",t)}function ju(t){t=ne(t);const e=ne(this);return xo(e).has.call(e,t)||(e.add(t),on(e,"add",t,t)),this}function Hu(t,e){e=ne(e);const n=ne(this),{has:s,get:i}=xo(n);let r=s.call(n,t);r||(t=ne(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Di(e,o)&&on(n,"set",t,e):on(n,"add",t,e),this}function Wu(t){const e=ne(this),{has:n,get:s}=xo(e);let i=n.call(e,t);i||(t=ne(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&on(e,"delete",t,void 0),r}function Vu(){const t=ne(this),e=t.size!==0,n=t.clear();return e&&on(t,"clear",void 0,void 0),n}function Ir(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ne(o),l=e?lc:t?hc:xi;return!t&&ot(a,"iterate",ts),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function br(t,e,n){return function(...s){const i=this.__v_raw,r=ne(i),o=ks(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?lc:e?hc:xi;return!e&&ot(r,"iterate",l?el:ts),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function gn(t){return function(...e){return t==="delete"?!1:this}}function My(){const t={get(r){return Er(this,r)},get size(){return Tr(this)},has:wr,add:ju,set:Hu,delete:Wu,clear:Vu,forEach:Ir(!1,!1)},e={get(r){return Er(this,r,!1,!0)},get size(){return Tr(this)},has:wr,add:ju,set:Hu,delete:Wu,clear:Vu,forEach:Ir(!1,!0)},n={get(r){return Er(this,r,!0)},get size(){return Tr(this,!0)},has(r){return wr.call(this,r,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:Ir(!0,!1)},s={get(r){return Er(this,r,!0,!0)},get size(){return Tr(this,!0)},has(r){return wr.call(this,r,!0)},add:gn("add"),set:gn("set"),delete:gn("delete"),clear:gn("clear"),forEach:Ir(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=br(r,!1,!1),n[r]=br(r,!0,!1),e[r]=br(r,!1,!0),s[r]=br(r,!0,!0)}),[t,n,e,s]}const[Ly,Fy,Uy,$y]=My();function cc(t,e){const n=e?t?$y:Uy:t?Fy:Ly;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(te(n,i)&&i in s?n:s,i,r)}const By={get:cc(!1,!1)},jy={get:cc(!1,!0)},Hy={get:cc(!0,!1)},Nd=new WeakMap,Od=new WeakMap,Pd=new WeakMap,Wy=new WeakMap;function Vy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ky(t){return t.__v_skip||!Object.isExtensible(t)?0:Vy(fy(t))}function Qs(t){return Bs(t)?t:uc(t,!1,kd,By,Nd)}function Gy(t){return uc(t,!1,xy,jy,Od)}function Dd(t){return uc(t,!0,Dy,Hy,Pd)}function uc(t,e,n,s,i){if(!we(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Ky(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function Ns(t){return Bs(t)?Ns(t.__v_raw):!!(t&&t.__v_isReactive)}function Bs(t){return!!(t&&t.__v_isReadonly)}function Kr(t){return!!(t&&t.__v_isShallow)}function xd(t){return Ns(t)||Bs(t)}function ne(t){const e=t&&t.__v_raw;return e?ne(e):t}function Md(t){return Vr(t,"__v_skip",!0),t}const xi=t=>we(t)?Qs(t):t,hc=t=>we(t)?Dd(t):t;function Ld(t){Sn&&Ct&&(t=ne(t),Sd(t.dep||(t.dep=rc())))}function Fd(t,e){t=ne(t);const n=t.dep;n&&tl(n)}function Ye(t){return!!(t&&t.__v_isRef===!0)}function Ud(t){return $d(t,!1)}function zy(t){return $d(t,!0)}function $d(t,e){return Ye(t)?t:new qy(t,e)}class qy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ne(e),this._value=n?e:xi(e)}get value(){return Ld(this),this._value}set value(e){const n=this.__v_isShallow||Kr(e)||Bs(e);e=n?e:ne(e),Di(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:xi(e),Fd(this))}}function Os(t){return Ye(t)?t.value:t}const Yy={get:(t,e,n)=>Os(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ye(i)&&!Ye(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Bd(t){return Ns(t)?t:new Proxy(t,Yy)}var jd;class Xy{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[jd]=!1,this._dirty=!0,this.effect=new oc(e,()=>{this._dirty||(this._dirty=!0,Fd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ne(this);return Ld(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}jd="__v_isReadonly";function Jy(t,e,n=!1){let s,i;const r=G(t);return r?(s=t,i=Nt):(s=t.get,i=t.set),new Xy(s,i,r||!i,n)}function Rn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){Mo(r,e,n)}return i}function _t(t,e,n,s){if(G(t)){const r=Rn(t,e,n,s);return r&&vd(r)&&r.catch(o=>{Mo(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(_t(t[r],e,n,s));return i}function Mo(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Rn(l,null,10,[t,o,a]);return}}Qy(t,n,i,s)}function Qy(t,e,n,s=!0){console.error(t)}let Mi=!1,nl=!1;const qe=[];let Ut=0;const Ps=[];let Qt=null,Gn=0;const Hd=Promise.resolve();let fc=null;function Wd(t){const e=fc||Hd;return t?e.then(this?t.bind(this):t):e}function Zy(t){let e=Ut+1,n=qe.length;for(;e<n;){const s=e+n>>>1;Li(qe[s])<t?e=s+1:n=s}return e}function dc(t){(!qe.length||!qe.includes(t,Mi&&t.allowRecurse?Ut+1:Ut))&&(t.id==null?qe.push(t):qe.splice(Zy(t.id),0,t),Vd())}function Vd(){!Mi&&!nl&&(nl=!0,fc=Hd.then(Gd))}function ev(t){const e=qe.indexOf(t);e>Ut&&qe.splice(e,1)}function tv(t){H(t)?Ps.push(...t):(!Qt||!Qt.includes(t,t.allowRecurse?Gn+1:Gn))&&Ps.push(t),Vd()}function Ku(t,e=Mi?Ut+1:0){for(;e<qe.length;e++){const n=qe[e];n&&n.pre&&(qe.splice(e,1),e--,n())}}function Kd(t){if(Ps.length){const e=[...new Set(Ps)];if(Ps.length=0,Qt){Qt.push(...e);return}for(Qt=e,Qt.sort((n,s)=>Li(n)-Li(s)),Gn=0;Gn<Qt.length;Gn++)Qt[Gn]();Qt=null,Gn=0}}const Li=t=>t.id==null?1/0:t.id,nv=(t,e)=>{const n=Li(t)-Li(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Gd(t){nl=!1,Mi=!0,qe.sort(nv);const e=Nt;try{for(Ut=0;Ut<qe.length;Ut++){const n=qe[Ut];n&&n.active!==!1&&Rn(n,null,14)}}finally{Ut=0,qe.length=0,Kd(),Mi=!1,fc=null,(qe.length||Ps.length)&&Gd()}}function sv(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ve;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||ve;f&&(i=n.map(g=>Oe(g)?g.trim():g)),h&&(i=n.map(Ja))}let a,l=s[a=ma(e)]||s[a=ma(Kt(e))];!l&&r&&(l=s[a=ma(Ys(e))]),l&&_t(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,_t(c,t,6,i)}}function zd(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!G(t)){const l=c=>{const u=zd(c,e,!0);u&&(a=!0,We(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(we(t)&&s.set(t,null),null):(H(r)?r.forEach(l=>o[l]=null):We(o,r),we(t)&&s.set(t,o),o)}function Lo(t,e){return!t||!No(e)?!1:(e=e.slice(2).replace(/Once$/,""),te(t,e[0].toLowerCase()+e.slice(1))||te(t,Ys(e))||te(t,e))}let $e=null,qd=null;function Gr(t){const e=$e;return $e=t,qd=t&&t.type.__scopeId||null,e}function pt(t,e=$e,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&th(-1);const r=Gr(e);let o;try{o=t(...i)}finally{Gr(r),s._d&&th(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function _a(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:g,ctx:m,inheritAttrs:w}=t;let S,R;const L=Gr(t);try{if(n.shapeFlag&4){const F=i||s;S=Ft(u.call(F,F,h,r,g,f,m)),R=l}else{const F=e;S=Ft(F.length>1?F(r,{attrs:l,slots:a,emit:c}):F(r,null)),R=e.props?l:iv(l)}}catch(F){bi.length=0,Mo(F,t,1),S=de(yt)}let k=S;if(R&&w!==!1){const F=Object.keys(R),{shapeFlag:X}=k;F.length&&X&7&&(o&&F.some(tc)&&(R=rv(R,o)),k=Pn(k,R))}return n.dirs&&(k=Pn(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),S=k,Gr(L),S}const iv=t=>{let e;for(const n in t)(n==="class"||n==="style"||No(n))&&((e||(e={}))[n]=t[n]);return e},rv=(t,e)=>{const n={};for(const s in t)(!tc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ov(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Gu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Lo(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Gu(s,o,c):!0:!!o;return!1}function Gu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Lo(n,r))return!0}return!1}function av({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const lv=t=>t.__isSuspense;function cv(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):tv(t)}function Ur(t,e){if(Ae){let n=Ae.provides;const s=Ae.parent&&Ae.parent.provides;s===n&&(n=Ae.provides=Object.create(s)),n[t]=e}}function Ht(t,e,n=!1){const s=Ae||$e;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&G(e)?e.call(s.proxy):e}}const Cr={};function Ds(t,e,n){return Yd(t,e,n)}function Yd(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ve){const a=vy()===(Ae==null?void 0:Ae.scope)?Ae:null;let l,c=!1,u=!1;if(Ye(t)?(l=()=>t.value,c=Kr(t)):Ns(t)?(l=()=>t,s=!0):H(t)?(u=!0,c=t.some(k=>Ns(k)||Kr(k)),l=()=>t.map(k=>{if(Ye(k))return k.value;if(Ns(k))return Xn(k);if(G(k))return Rn(k,a,2)})):G(t)?e?l=()=>Rn(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),_t(t,a,3,[f])}:l=Nt,e&&s){const k=l;l=()=>Xn(k())}let h,f=k=>{h=R.onStop=()=>{Rn(k,a,4)}},g;if(Ui)if(f=Nt,e?n&&_t(e,a,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const k=sE();g=k.__watcherHandles||(k.__watcherHandles=[])}else return Nt;let m=u?new Array(t.length).fill(Cr):Cr;const w=()=>{if(R.active)if(e){const k=R.run();(s||c||(u?k.some((F,X)=>Di(F,m[X])):Di(k,m)))&&(h&&h(),_t(e,a,3,[k,m===Cr?void 0:u&&m[0]===Cr?[]:m,f]),m=k)}else R.run()};w.allowRecurse=!!e;let S;i==="sync"?S=w:i==="post"?S=()=>it(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),S=()=>dc(w));const R=new oc(l,S);e?n?w():m=R.run():i==="post"?it(R.run.bind(R),a&&a.suspense):R.run();const L=()=>{R.stop(),a&&a.scope&&nc(a.scope.effects,R)};return g&&g.push(L),L}function uv(t,e,n){const s=this.proxy,i=Oe(t)?t.includes(".")?Xd(s,t):()=>s[t]:t.bind(s,s);let r;G(e)?r=e:(r=e.handler,n=e);const o=Ae;js(this);const a=Yd(i,r.bind(s),n);return o?js(o):ns(),a}function Xd(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Xn(t,e){if(!we(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ye(t))Xn(t.value,e);else if(H(t))for(let n=0;n<t.length;n++)Xn(t[n],e);else if(yd(t)||ks(t))t.forEach(n=>{Xn(n,e)});else if(wd(t))for(const n in t)Xn(t[n],e);return t}function hv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return np(()=>{t.isMounted=!0}),sp(()=>{t.isUnmounting=!0}),t}const ft=[Function,Array],fv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ft,onEnter:ft,onAfterEnter:ft,onEnterCancelled:ft,onBeforeLeave:ft,onLeave:ft,onAfterLeave:ft,onLeaveCancelled:ft,onBeforeAppear:ft,onAppear:ft,onAfterAppear:ft,onAppearCancelled:ft},setup(t,{slots:e}){const n=yp(),s=hv();let i;return()=>{const r=e.default&&Zd(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const w of r)if(w.type!==yt){o=w;break}}const a=ne(t),{mode:l}=a;if(s.isLeaving)return ya(o);const c=zu(o);if(!c)return ya(o);const u=sl(c,a,s,n);il(c,u);const h=n.subTree,f=h&&zu(h);let g=!1;const{getTransitionKey:m}=c.type;if(m){const w=m();i===void 0?i=w:w!==i&&(i=w,g=!0)}if(f&&f.type!==yt&&(!zn(c,f)||g)){const w=sl(f,a,s,n);if(il(f,w),l==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ya(o);l==="in-out"&&c.type!==yt&&(w.delayLeave=(S,R,L)=>{const k=Qd(s,f);k[String(f.key)]=f,S._leaveCb=()=>{R(),S._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=L})}return o}}},Jd=fv;function Qd(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function sl(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:w,onAppear:S,onAfterAppear:R,onAppearCancelled:L}=e,k=String(t.key),F=Qd(n,t),X=(j,ae)=>{j&&_t(j,s,9,ae)},pe=(j,ae)=>{const se=ae[1];X(j,ae),H(j)?j.every(Pe=>Pe.length<=1)&&se():j.length<=1&&se()},Re={mode:r,persisted:o,beforeEnter(j){let ae=a;if(!n.isMounted)if(i)ae=w||a;else return;j._leaveCb&&j._leaveCb(!0);const se=F[k];se&&zn(t,se)&&se.el._leaveCb&&se.el._leaveCb(),X(ae,[j])},enter(j){let ae=l,se=c,Pe=u;if(!n.isMounted)if(i)ae=S||l,se=R||c,Pe=L||u;else return;let D=!1;const _e=j._enterCb=Fe=>{D||(D=!0,Fe?X(Pe,[j]):X(se,[j]),Re.delayedLeave&&Re.delayedLeave(),j._enterCb=void 0)};ae?pe(ae,[j,_e]):_e()},leave(j,ae){const se=String(t.key);if(j._enterCb&&j._enterCb(!0),n.isUnmounting)return ae();X(h,[j]);let Pe=!1;const D=j._leaveCb=_e=>{Pe||(Pe=!0,ae(),_e?X(m,[j]):X(g,[j]),j._leaveCb=void 0,F[se]===t&&delete F[se])};F[se]=t,f?pe(f,[j,D]):D()},clone(j){return sl(j,e,n,s)}};return Re}function ya(t){if(Fo(t))return t=Pn(t),t.children=null,t}function zu(t){return Fo(t)?t.children?t.children[0]:void 0:t}function il(t,e){t.shapeFlag&6&&t.component?il(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Zd(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===tt?(o.patchFlag&128&&i++,s=s.concat(Zd(o.children,e,a))):(e||o.type!==yt)&&s.push(a!=null?Pn(o,{key:a}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function ep(t){return G(t)?{setup:t,name:t.name}:t}const Ti=t=>!!t.type.__asyncLoader,Fo=t=>t.type.__isKeepAlive;function dv(t,e){tp(t,"a",e)}function pv(t,e){tp(t,"da",e)}function tp(t,e,n=Ae){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Uo(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Fo(i.parent.vnode)&&gv(s,e,n,i),i=i.parent}}function gv(t,e,n,s){const i=Uo(e,t,s,!0);ip(()=>{nc(s[e],i)},n)}function Uo(t,e,n=Ae,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Xs(),js(n);const a=_t(e,n,t,o);return ns(),Js(),a});return s?i.unshift(r):i.push(r),r}}const hn=t=>(e,n=Ae)=>(!Ui||t==="sp")&&Uo(t,(...s)=>e(...s),n),mv=hn("bm"),np=hn("m"),_v=hn("bu"),yv=hn("u"),sp=hn("bum"),ip=hn("um"),vv=hn("sp"),Ev=hn("rtg"),wv=hn("rtc");function Tv(t,e=Ae){Uo("ec",t,e)}function rl(t,e){const n=$e;if(n===null)return t;const s=jo(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=ve]=e[r];o&&(G(o)&&(o={mounted:o,updated:o}),o.deep&&Xn(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Un(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Xs(),_t(l,n,8,[t.el,a,t,e]),Js())}}const rp="components";function an(t,e){return bv(rp,t,!0,e)||t}const Iv=Symbol();function bv(t,e,n=!0,s=!1){const i=$e||Ae;if(i){const r=i.type;if(t===rp){const a=eE(r,!1);if(a&&(a===e||a===Kt(e)||a===Do(Kt(e))))return r}const o=qu(i[t]||r[t],e)||qu(i.appContext[t],e);return!o&&s?r:o}}function qu(t,e){return t&&(t[e]||t[Kt(e)]||t[Do(Kt(e))])}function op(t,e,n,s){let i;const r=n&&n[s];if(H(t)||Oe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(we(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}function Cv(t,e,n={},s,i){if($e.isCE||$e.parent&&Ti($e.parent)&&$e.parent.isCE)return e!=="default"&&(n.name=e),de("slot",n,s&&s());let r=t[e];r&&r._c&&(r._d=!1),fe();const o=r&&ap(r(n)),a=er(tt,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),r&&r._c&&(r._d=!0),a}function ap(t){return t.some(e=>qr(e)?!(e.type===yt||e.type===tt&&!ap(e.children)):!0)?t:null}const ol=t=>t?vp(t)?jo(t)||t.proxy:ol(t.parent):null,Ii=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ol(t.parent),$root:t=>ol(t.root),$emit:t=>t.emit,$options:t=>pc(t),$forceUpdate:t=>t.f||(t.f=()=>dc(t.update)),$nextTick:t=>t.n||(t.n=Wd.bind(t.proxy)),$watch:t=>uv.bind(t)}),va=(t,e)=>t!==ve&&!t.__isScriptSetup&&te(t,e),Sv={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(va(s,e))return o[e]=1,s[e];if(i!==ve&&te(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&te(c,e))return o[e]=3,r[e];if(n!==ve&&te(n,e))return o[e]=4,n[e];al&&(o[e]=0)}}const u=Ii[e];let h,f;if(u)return e==="$attrs"&&ot(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ve&&te(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,te(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return va(i,e)?(i[e]=n,!0):s!==ve&&te(s,e)?(s[e]=n,!0):te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ve&&te(t,o)||va(e,o)||(a=r[0])&&te(a,o)||te(s,o)||te(Ii,o)||te(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let al=!0;function Rv(t){const e=pc(t),n=t.proxy,s=t.ctx;al=!1,e.beforeCreate&&Yu(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:m,activated:w,deactivated:S,beforeDestroy:R,beforeUnmount:L,destroyed:k,unmounted:F,render:X,renderTracked:pe,renderTriggered:Re,errorCaptured:j,serverPrefetch:ae,expose:se,inheritAttrs:Pe,components:D,directives:_e,filters:Fe}=e;if(c&&Av(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ge in o){const ce=o[ge];G(ce)&&(s[ge]=ce.bind(n))}if(i){const ge=i.call(n,n);we(ge)&&(t.data=Qs(ge))}if(al=!0,r)for(const ge in r){const ce=r[ge],wt=G(ce)?ce.bind(n,n):G(ce.get)?ce.get.bind(n,n):Nt,Fn=!G(ce)&&G(ce.set)?ce.set.bind(n):Nt,Tt=gt({get:wt,set:Fn});Object.defineProperty(s,ge,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:st=>Tt.value=st})}if(a)for(const ge in a)lp(a[ge],s,n,ge);if(l){const ge=G(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(ce=>{Ur(ce,ge[ce])})}u&&Yu(u,t,"c");function be(ge,ce){H(ce)?ce.forEach(wt=>ge(wt.bind(n))):ce&&ge(ce.bind(n))}if(be(mv,h),be(np,f),be(_v,g),be(yv,m),be(dv,w),be(pv,S),be(Tv,j),be(wv,pe),be(Ev,Re),be(sp,L),be(ip,F),be(vv,ae),H(se))if(se.length){const ge=t.exposed||(t.exposed={});se.forEach(ce=>{Object.defineProperty(ge,ce,{get:()=>n[ce],set:wt=>n[ce]=wt})})}else t.exposed||(t.exposed={});X&&t.render===Nt&&(t.render=X),Pe!=null&&(t.inheritAttrs=Pe),D&&(t.components=D),_e&&(t.directives=_e)}function Av(t,e,n=Nt,s=!1){H(t)&&(t=ll(t));for(const i in t){const r=t[i];let o;we(r)?"default"in r?o=Ht(r.from||i,r.default,!0):o=Ht(r.from||i):o=Ht(r),Ye(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Yu(t,e,n){_t(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function lp(t,e,n,s){const i=s.includes(".")?Xd(n,s):()=>n[s];if(Oe(t)){const r=e[t];G(r)&&Ds(i,r)}else if(G(t))Ds(i,t.bind(n));else if(we(t))if(H(t))t.forEach(r=>lp(r,e,n,s));else{const r=G(t.handler)?t.handler.bind(n):e[t.handler];G(r)&&Ds(i,r,t)}}function pc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>zr(l,c,o,!0)),zr(l,e,o)),we(e)&&r.set(e,l),l}function zr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&zr(t,r,n,!0),i&&i.forEach(o=>zr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=kv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const kv={data:Xu,props:Wn,emits:Wn,methods:Wn,computed:Wn,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:Wn,directives:Wn,watch:Ov,provide:Xu,inject:Nv};function Xu(t,e){return e?t?function(){return We(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function Nv(t,e){return Wn(ll(t),ll(e))}function ll(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function et(t,e){return t?[...new Set([].concat(t,e))]:e}function Wn(t,e){return t?We(We(Object.create(null),t),e):e}function Ov(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const s in e)n[s]=et(t[s],e[s]);return n}function Pv(t,e,n,s=!1){const i={},r={};Vr(r,Bo,1),t.propsDefaults=Object.create(null),cp(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Gy(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Dv(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ne(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Lo(t.emitsOptions,f))continue;const g=e[f];if(l)if(te(r,f))g!==r[f]&&(r[f]=g,c=!0);else{const m=Kt(f);i[m]=cl(l,a,m,g,t,!1)}else g!==r[f]&&(r[f]=g,c=!0)}}}else{cp(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!te(e,h)&&((u=Ys(h))===h||!te(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=cl(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!te(e,h))&&(delete r[h],c=!0)}c&&on(t,"set","$attrs")}function cp(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Lr(l))continue;const c=e[l];let u;i&&te(i,u=Kt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Lo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ne(n),c=a||ve;for(let u=0;u<r.length;u++){const h=r[u];n[h]=cl(i,l,h,c[h],t,!te(c,h))}}return o}function cl(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=te(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&G(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(js(i),s=c[n]=l.call(null,e),ns())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Ys(n))&&(s=!0))}return s}function up(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!G(t)){const u=h=>{l=!0;const[f,g]=up(h,e,!0);We(o,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return we(t)&&s.set(t,As),As;if(H(r))for(let u=0;u<r.length;u++){const h=Kt(r[u]);Ju(h)&&(o[h]=ve)}else if(r)for(const u in r){const h=Kt(u);if(Ju(h)){const f=r[u],g=o[h]=H(f)||G(f)?{type:f}:Object.assign({},f);if(g){const m=eh(Boolean,g.type),w=eh(String,g.type);g[0]=m>-1,g[1]=w<0||m<w,(m>-1||te(g,"default"))&&a.push(h)}}}const c=[o,a];return we(t)&&s.set(t,c),c}function Ju(t){return t[0]!=="$"}function Qu(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Zu(t,e){return Qu(t)===Qu(e)}function eh(t,e){return H(e)?e.findIndex(n=>Zu(n,t)):G(e)&&Zu(e,t)?0:-1}const hp=t=>t[0]==="_"||t==="$stable",gc=t=>H(t)?t.map(Ft):[Ft(t)],xv=(t,e,n)=>{if(e._n)return e;const s=pt((...i)=>gc(e(...i)),n);return s._c=!1,s},fp=(t,e,n)=>{const s=t._ctx;for(const i in t){if(hp(i))continue;const r=t[i];if(G(r))e[i]=xv(i,r,s);else if(r!=null){const o=gc(r);e[i]=()=>o}}},dp=(t,e)=>{const n=gc(e);t.slots.default=()=>n},Mv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ne(e),Vr(e,"_",n)):fp(e,t.slots={})}else t.slots={},e&&dp(t,e);Vr(t.slots,Bo,1)},Lv=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ve;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(We(i,e),!n&&a===1&&delete i._):(r=!e.$stable,fp(e,i)),o=e}else e&&(dp(t,e),o={default:1});if(r)for(const a in i)!hp(a)&&!(a in o)&&delete i[a]};function pp(){return{app:null,config:{isNativeTag:cy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fv=0;function Uv(t,e){return function(s,i=null){G(s)||(s=Object.assign({},s)),i!=null&&!we(i)&&(i=null);const r=pp(),o=new Set;let a=!1;const l=r.app={_uid:Fv++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:iE,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&G(c.install)?(o.add(c),c.install(l,...u)):G(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=de(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,jo(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l}};return l}}function ul(t,e,n,s,i=!1){if(H(t)){t.forEach((f,g)=>ul(f,e&&(H(e)?e[g]:e),n,s,i));return}if(Ti(s)&&!i)return;const r=s.shapeFlag&4?jo(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ve?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Oe(c)?(u[c]=null,te(h,c)&&(h[c]=null)):Ye(c)&&(c.value=null)),G(l))Rn(l,a,12,[o,u]);else{const f=Oe(l),g=Ye(l);if(f||g){const m=()=>{if(t.f){const w=f?te(h,l)?h[l]:u[l]:l.value;i?H(w)&&nc(w,r):H(w)?w.includes(r)||w.push(r):f?(u[l]=[r],te(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,te(h,l)&&(h[l]=o)):g&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,it(m,n)):m()}}}const it=cv;function $v(t){return Bv(t)}function Bv(t,e){const n=my();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Nt,insertStaticContent:m}=t,w=(d,p,_,y=null,E=null,b=null,O=!1,I=null,C=!!p.dynamicChildren)=>{if(d===p)return;d&&!zn(d,p)&&(y=N(d),st(d,E,b,!0),d=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:T,ref:$,shapeFlag:x}=p;switch(T){case $o:S(d,p,_,y);break;case yt:R(d,p,_,y);break;case Ea:d==null&&L(p,_,y,O);break;case tt:D(d,p,_,y,E,b,O,I,C);break;default:x&1?X(d,p,_,y,E,b,O,I,C):x&6?_e(d,p,_,y,E,b,O,I,C):(x&64||x&128)&&T.process(d,p,_,y,E,b,O,I,C,ee)}$!=null&&E&&ul($,d&&d.ref,b,p||d,!p)},S=(d,p,_,y)=>{if(d==null)s(p.el=a(p.children),_,y);else{const E=p.el=d.el;p.children!==d.children&&c(E,p.children)}},R=(d,p,_,y)=>{d==null?s(p.el=l(p.children||""),_,y):p.el=d.el},L=(d,p,_,y)=>{[d.el,d.anchor]=m(d.children,p,_,y,d.el,d.anchor)},k=({el:d,anchor:p},_,y)=>{let E;for(;d&&d!==p;)E=f(d),s(d,_,y),d=E;s(p,_,y)},F=({el:d,anchor:p})=>{let _;for(;d&&d!==p;)_=f(d),i(d),d=_;i(p)},X=(d,p,_,y,E,b,O,I,C)=>{O=O||p.type==="svg",d==null?pe(p,_,y,E,b,O,I,C):ae(d,p,E,b,O,I,C)},pe=(d,p,_,y,E,b,O,I)=>{let C,T;const{type:$,props:x,shapeFlag:B,transition:K,dirs:q}=d;if(C=d.el=o(d.type,b,x&&x.is,x),B&8?u(C,d.children):B&16&&j(d.children,C,null,y,E,b&&$!=="foreignObject",O,I),q&&Un(d,null,y,"created"),Re(C,d,d.scopeId,O,y),x){for(const ue in x)ue!=="value"&&!Lr(ue)&&r(C,ue,null,x[ue],b,d.children,y,E,P);"value"in x&&r(C,"value",null,x.value),(T=x.onVnodeBeforeMount)&&Lt(T,y,d)}q&&Un(d,null,y,"beforeMount");const me=(!E||E&&!E.pendingBranch)&&K&&!K.persisted;me&&K.beforeEnter(C),s(C,p,_),((T=x&&x.onVnodeMounted)||me||q)&&it(()=>{T&&Lt(T,y,d),me&&K.enter(C),q&&Un(d,null,y,"mounted")},E)},Re=(d,p,_,y,E)=>{if(_&&g(d,_),y)for(let b=0;b<y.length;b++)g(d,y[b]);if(E){let b=E.subTree;if(p===b){const O=E.vnode;Re(d,O,O.scopeId,O.slotScopeIds,E.parent)}}},j=(d,p,_,y,E,b,O,I,C=0)=>{for(let T=C;T<d.length;T++){const $=d[T]=I?En(d[T]):Ft(d[T]);w(null,$,p,_,y,E,b,O,I)}},ae=(d,p,_,y,E,b,O)=>{const I=p.el=d.el;let{patchFlag:C,dynamicChildren:T,dirs:$}=p;C|=d.patchFlag&16;const x=d.props||ve,B=p.props||ve;let K;_&&$n(_,!1),(K=B.onVnodeBeforeUpdate)&&Lt(K,_,p,d),$&&Un(p,d,_,"beforeUpdate"),_&&$n(_,!0);const q=E&&p.type!=="foreignObject";if(T?se(d.dynamicChildren,T,I,_,y,q,b):O||ce(d,p,I,null,_,y,q,b,!1),C>0){if(C&16)Pe(I,p,x,B,_,y,E);else if(C&2&&x.class!==B.class&&r(I,"class",null,B.class,E),C&4&&r(I,"style",x.style,B.style,E),C&8){const me=p.dynamicProps;for(let ue=0;ue<me.length;ue++){const Ne=me[ue],It=x[Ne],_s=B[Ne];(_s!==It||Ne==="value")&&r(I,Ne,It,_s,E,d.children,_,y,P)}}C&1&&d.children!==p.children&&u(I,p.children)}else!O&&T==null&&Pe(I,p,x,B,_,y,E);((K=B.onVnodeUpdated)||$)&&it(()=>{K&&Lt(K,_,p,d),$&&Un(p,d,_,"updated")},y)},se=(d,p,_,y,E,b,O)=>{for(let I=0;I<p.length;I++){const C=d[I],T=p[I],$=C.el&&(C.type===tt||!zn(C,T)||C.shapeFlag&70)?h(C.el):_;w(C,T,$,null,y,E,b,O,!0)}},Pe=(d,p,_,y,E,b,O)=>{if(_!==y){if(_!==ve)for(const I in _)!Lr(I)&&!(I in y)&&r(d,I,_[I],null,O,p.children,E,b,P);for(const I in y){if(Lr(I))continue;const C=y[I],T=_[I];C!==T&&I!=="value"&&r(d,I,T,C,O,p.children,E,b,P)}"value"in y&&r(d,"value",_.value,y.value)}},D=(d,p,_,y,E,b,O,I,C)=>{const T=p.el=d?d.el:a(""),$=p.anchor=d?d.anchor:a("");let{patchFlag:x,dynamicChildren:B,slotScopeIds:K}=p;K&&(I=I?I.concat(K):K),d==null?(s(T,_,y),s($,_,y),j(p.children,_,$,E,b,O,I,C)):x>0&&x&64&&B&&d.dynamicChildren?(se(d.dynamicChildren,B,_,E,b,O,I),(p.key!=null||E&&p===E.subTree)&&gp(d,p,!0)):ce(d,p,_,$,E,b,O,I,C)},_e=(d,p,_,y,E,b,O,I,C)=>{p.slotScopeIds=I,d==null?p.shapeFlag&512?E.ctx.activate(p,_,y,O,C):Fe(p,_,y,E,b,O,C):pn(d,p,C)},Fe=(d,p,_,y,E,b,O)=>{const I=d.component=Yv(d,y,E);if(Fo(d)&&(I.ctx.renderer=ee),Xv(I),I.asyncDep){if(E&&E.registerDep(I,be),!d.el){const C=I.subTree=de(yt);R(null,C,p,_)}return}be(I,d,p,_,E,b,O)},pn=(d,p,_)=>{const y=p.component=d.component;if(ov(d,p,_))if(y.asyncDep&&!y.asyncResolved){ge(y,p,_);return}else y.next=p,ev(y.update),y.update();else p.el=d.el,y.vnode=p},be=(d,p,_,y,E,b,O)=>{const I=()=>{if(d.isMounted){let{next:$,bu:x,u:B,parent:K,vnode:q}=d,me=$,ue;$n(d,!1),$?($.el=q.el,ge(d,$,O)):$=q,x&&Fr(x),(ue=$.props&&$.props.onVnodeBeforeUpdate)&&Lt(ue,K,$,q),$n(d,!0);const Ne=_a(d),It=d.subTree;d.subTree=Ne,w(It,Ne,h(It.el),N(It),d,E,b),$.el=Ne.el,me===null&&av(d,Ne.el),B&&it(B,E),(ue=$.props&&$.props.onVnodeUpdated)&&it(()=>Lt(ue,K,$,q),E)}else{let $;const{el:x,props:B}=p,{bm:K,m:q,parent:me}=d,ue=Ti(p);if($n(d,!1),K&&Fr(K),!ue&&($=B&&B.onVnodeBeforeMount)&&Lt($,me,p),$n(d,!0),x&&z){const Ne=()=>{d.subTree=_a(d),z(x,d.subTree,d,E,null)};ue?p.type.__asyncLoader().then(()=>!d.isUnmounted&&Ne()):Ne()}else{const Ne=d.subTree=_a(d);w(null,Ne,_,y,d,E,b),p.el=Ne.el}if(q&&it(q,E),!ue&&($=B&&B.onVnodeMounted)){const Ne=p;it(()=>Lt($,me,Ne),E)}(p.shapeFlag&256||me&&Ti(me.vnode)&&me.vnode.shapeFlag&256)&&d.a&&it(d.a,E),d.isMounted=!0,p=_=y=null}},C=d.effect=new oc(I,()=>dc(T),d.scope),T=d.update=()=>C.run();T.id=d.uid,$n(d,!0),T()},ge=(d,p,_)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,Dv(d,p.props,y,_),Lv(d,p.children,_),Xs(),Ku(),Js()},ce=(d,p,_,y,E,b,O,I,C=!1)=>{const T=d&&d.children,$=d?d.shapeFlag:0,x=p.children,{patchFlag:B,shapeFlag:K}=p;if(B>0){if(B&128){Fn(T,x,_,y,E,b,O,I,C);return}else if(B&256){wt(T,x,_,y,E,b,O,I,C);return}}K&8?($&16&&P(T,E,b),x!==T&&u(_,x)):$&16?K&16?Fn(T,x,_,y,E,b,O,I,C):P(T,E,b,!0):($&8&&u(_,""),K&16&&j(x,_,y,E,b,O,I,C))},wt=(d,p,_,y,E,b,O,I,C)=>{d=d||As,p=p||As;const T=d.length,$=p.length,x=Math.min(T,$);let B;for(B=0;B<x;B++){const K=p[B]=C?En(p[B]):Ft(p[B]);w(d[B],K,_,null,E,b,O,I,C)}T>$?P(d,E,b,!0,!1,x):j(p,_,y,E,b,O,I,C,x)},Fn=(d,p,_,y,E,b,O,I,C)=>{let T=0;const $=p.length;let x=d.length-1,B=$-1;for(;T<=x&&T<=B;){const K=d[T],q=p[T]=C?En(p[T]):Ft(p[T]);if(zn(K,q))w(K,q,_,null,E,b,O,I,C);else break;T++}for(;T<=x&&T<=B;){const K=d[x],q=p[B]=C?En(p[B]):Ft(p[B]);if(zn(K,q))w(K,q,_,null,E,b,O,I,C);else break;x--,B--}if(T>x){if(T<=B){const K=B+1,q=K<$?p[K].el:y;for(;T<=B;)w(null,p[T]=C?En(p[T]):Ft(p[T]),_,q,E,b,O,I,C),T++}}else if(T>B)for(;T<=x;)st(d[T],E,b,!0),T++;else{const K=T,q=T,me=new Map;for(T=q;T<=B;T++){const lt=p[T]=C?En(p[T]):Ft(p[T]);lt.key!=null&&me.set(lt.key,T)}let ue,Ne=0;const It=B-q+1;let _s=!1,xu=0;const ci=new Array(It);for(T=0;T<It;T++)ci[T]=0;for(T=K;T<=x;T++){const lt=d[T];if(Ne>=It){st(lt,E,b,!0);continue}let Mt;if(lt.key!=null)Mt=me.get(lt.key);else for(ue=q;ue<=B;ue++)if(ci[ue-q]===0&&zn(lt,p[ue])){Mt=ue;break}Mt===void 0?st(lt,E,b,!0):(ci[Mt-q]=T+1,Mt>=xu?xu=Mt:_s=!0,w(lt,p[Mt],_,null,E,b,O,I,C),Ne++)}const Mu=_s?jv(ci):As;for(ue=Mu.length-1,T=It-1;T>=0;T--){const lt=q+T,Mt=p[lt],Lu=lt+1<$?p[lt+1].el:y;ci[T]===0?w(null,Mt,_,Lu,E,b,O,I,C):_s&&(ue<0||T!==Mu[ue]?Tt(Mt,_,Lu,2):ue--)}}},Tt=(d,p,_,y,E=null)=>{const{el:b,type:O,transition:I,children:C,shapeFlag:T}=d;if(T&6){Tt(d.component.subTree,p,_,y);return}if(T&128){d.suspense.move(p,_,y);return}if(T&64){O.move(d,p,_,ee);return}if(O===tt){s(b,p,_);for(let x=0;x<C.length;x++)Tt(C[x],p,_,y);s(d.anchor,p,_);return}if(O===Ea){k(d,p,_);return}if(y!==2&&T&1&&I)if(y===0)I.beforeEnter(b),s(b,p,_),it(()=>I.enter(b),E);else{const{leave:x,delayLeave:B,afterLeave:K}=I,q=()=>s(b,p,_),me=()=>{x(b,()=>{q(),K&&K()})};B?B(b,q,me):me()}else s(b,p,_)},st=(d,p,_,y=!1,E=!1)=>{const{type:b,props:O,ref:I,children:C,dynamicChildren:T,shapeFlag:$,patchFlag:x,dirs:B}=d;if(I!=null&&ul(I,null,_,d,!0),$&256){p.ctx.deactivate(d);return}const K=$&1&&B,q=!Ti(d);let me;if(q&&(me=O&&O.onVnodeBeforeUnmount)&&Lt(me,p,d),$&6)v(d.component,_,y);else{if($&128){d.suspense.unmount(_,y);return}K&&Un(d,null,p,"beforeUnmount"),$&64?d.type.remove(d,p,_,E,ee,y):T&&(b!==tt||x>0&&x&64)?P(T,p,_,!1,!0):(b===tt&&x&384||!E&&$&16)&&P(C,p,_),y&&ms(d)}(q&&(me=O&&O.onVnodeUnmounted)||K)&&it(()=>{me&&Lt(me,p,d),K&&Un(d,null,p,"unmounted")},_)},ms=d=>{const{type:p,el:_,anchor:y,transition:E}=d;if(p===tt){vr(_,y);return}if(p===Ea){F(d);return}const b=()=>{i(_),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(d.shapeFlag&1&&E&&!E.persisted){const{leave:O,delayLeave:I}=E,C=()=>O(_,b);I?I(d.el,b,C):C()}else b()},vr=(d,p)=>{let _;for(;d!==p;)_=f(d),i(d),d=_;i(p)},v=(d,p,_)=>{const{bum:y,scope:E,update:b,subTree:O,um:I}=d;y&&Fr(y),E.stop(),b&&(b.active=!1,st(O,d,p,_)),I&&it(I,p),it(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},P=(d,p,_,y=!1,E=!1,b=0)=>{for(let O=b;O<d.length;O++)st(d[O],p,_,y,E)},N=d=>d.shapeFlag&6?N(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),U=(d,p,_)=>{d==null?p._vnode&&st(p._vnode,null,null,!0):w(p._vnode||null,d,p,null,null,null,_),Ku(),Kd(),p._vnode=d},ee={p:w,um:st,m:Tt,r:ms,mt:Fe,mc:j,pc:ce,pbc:se,n:N,o:t};let Ce,z;return e&&([Ce,z]=e(ee)),{render:U,hydrate:Ce,createApp:Uv(U,Ce)}}function $n({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function gp(t,e,n=!1){const s=t.children,i=e.children;if(H(s)&&H(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=En(i[r]),a.el=o.el),n||gp(o,a)),a.type===$o&&(a.el=o.el)}}function jv(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Hv=t=>t.__isTeleport,tt=Symbol(void 0),$o=Symbol(void 0),yt=Symbol(void 0),Ea=Symbol(void 0),bi=[];let Rt=null;function fe(t=!1){bi.push(Rt=t?null:[])}function Wv(){bi.pop(),Rt=bi[bi.length-1]||null}let Fi=1;function th(t){Fi+=t}function mp(t){return t.dynamicChildren=Fi>0?Rt||As:null,Wv(),Fi>0&&Rt&&Rt.push(t),t}function Se(t,e,n,s,i,r){return mp(re(t,e,n,s,i,r,!0))}function er(t,e,n,s,i){return mp(de(t,e,n,s,i,!0))}function qr(t){return t?t.__v_isVNode===!0:!1}function zn(t,e){return t.type===e.type&&t.key===e.key}const Bo="__vInternal",_p=({key:t})=>t??null,$r=({ref:t,ref_key:e,ref_for:n})=>t!=null?Oe(t)||Ye(t)||G(t)?{i:$e,r:t,k:e,f:!!n}:t:null;function re(t,e=null,n=null,s=0,i=null,r=t===tt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_p(e),ref:e&&$r(e),scopeId:qd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$e};return a?(mc(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Oe(n)?8:16),Fi>0&&!o&&Rt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Rt.push(l),l}const de=Vv;function Vv(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===Iv)&&(t=yt),qr(t)){const a=Pn(t,e,!0);return n&&mc(a,n),Fi>0&&!r&&Rt&&(a.shapeFlag&6?Rt[Rt.indexOf(t)]=a:Rt.push(a)),a.patchFlag|=-2,a}if(tE(t)&&(t=t.__vccOpts),e){e=Kv(e);let{class:a,style:l}=e;a&&!Oe(a)&&(e.class=ec(a)),we(l)&&(xd(l)&&!H(l)&&(l=We({},l)),e.style=ko(l))}const o=Oe(t)?1:lv(t)?128:Hv(t)?64:we(t)?4:G(t)?2:0;return re(t,e,n,s,i,o,r,!0)}function Kv(t){return t?xd(t)||Bo in t?We({},t):t:null}function Pn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?Gv(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&_p(a),ref:e&&e.ref?n&&i?H(i)?i.concat($r(e)):[i,$r(e)]:$r(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pn(t.ssContent),ssFallback:t.ssFallback&&Pn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Zt(t=" ",e=0){return de($o,null,t,e)}function Bt(t="",e=!1){return e?(fe(),er(yt,null,t)):de(yt,null,t)}function Ft(t){return t==null||typeof t=="boolean"?de(yt):H(t)?de(tt,null,t.slice()):typeof t=="object"?En(t):de($o,null,String(t))}function En(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pn(t)}function mc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),mc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Bo in e)?e._ctx=$e:i===3&&$e&&($e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:$e},n=32):(e=String(e),s&64?(n=16,e=[Zt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gv(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ec([e.class,s.class]));else if(i==="style")e.style=ko([e.style,s.style]);else if(No(i)){const r=e[i],o=s[i];o&&r!==o&&!(H(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Lt(t,e,n,s=null){_t(t,e,7,[n,s])}const zv=pp();let qv=0;function Yv(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||zv,r={uid:qv++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Td(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:up(s,i),emitsOptions:zd(s,i),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=sv.bind(null,r),t.ce&&t.ce(r),r}let Ae=null;const yp=()=>Ae||$e,js=t=>{Ae=t,t.scope.on()},ns=()=>{Ae&&Ae.scope.off(),Ae=null};function vp(t){return t.vnode.shapeFlag&4}let Ui=!1;function Xv(t,e=!1){Ui=e;const{props:n,children:s}=t.vnode,i=vp(t);Pv(t,n,i,e),Mv(t,s);const r=i?Jv(t,e):void 0;return Ui=!1,r}function Jv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Md(new Proxy(t.ctx,Sv));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Zv(t):null;js(t),Xs();const r=Rn(s,t,0,[t.props,i]);if(Js(),ns(),vd(r)){if(r.then(ns,ns),e)return r.then(o=>{nh(t,o,e)}).catch(o=>{Mo(o,t,0)});t.asyncDep=r}else nh(t,r,e)}else Ep(t,e)}function nh(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:we(e)&&(t.setupState=Bd(e)),Ep(t,n)}let sh;function Ep(t,e,n){const s=t.type;if(!t.render){if(!e&&sh&&!s.render){const i=s.template||pc(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=We(We({isCustomElement:r,delimiters:a},o),l);s.render=sh(i,c)}}t.render=s.render||Nt}js(t),Xs(),Rv(t),Js(),ns()}function Qv(t){return new Proxy(t.attrs,{get(e,n){return ot(t,"get","$attrs"),e[n]}})}function Zv(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Qv(t))},slots:t.slots,emit:t.emit,expose:e}}function jo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Bd(Md(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ii)return Ii[n](t)},has(e,n){return n in e||n in Ii}}))}function eE(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function tE(t){return G(t)&&"__vccOpts"in t}const gt=(t,e)=>Jy(t,e,Ui);function _c(t,e,n){const s=arguments.length;return s===2?we(e)&&!H(e)?qr(e)?de(t,null,[e]):de(t,e):de(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&qr(n)&&(n=[n]),de(t,e,n))}const nE=Symbol(""),sE=()=>Ht(nE),iE="3.2.47",rE="http://www.w3.org/2000/svg",qn=typeof document<"u"?document:null,ih=qn&&qn.createElement("template"),oE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?qn.createElementNS(rE,t):qn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>qn.createTextNode(t),createComment:t=>qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ih.innerHTML=s?`<svg>${t}</svg>`:t;const a=ih.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function aE(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function lE(t,e,n){const s=t.style,i=Oe(n);if(n&&!i){if(e&&!Oe(e))for(const r in e)n[r]==null&&hl(s,r,"");for(const r in n)hl(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const rh=/\s*!important$/;function hl(t,e,n){if(H(n))n.forEach(s=>hl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=cE(t,e);rh.test(n)?t.setProperty(Ys(s),n.replace(rh,""),"important"):t[s]=n}}const oh=["Webkit","Moz","ms"],wa={};function cE(t,e){const n=wa[e];if(n)return n;let s=Kt(e);if(s!=="filter"&&s in t)return wa[e]=s;s=Do(s);for(let i=0;i<oh.length;i++){const r=oh[i]+s;if(r in t)return wa[e]=r}return e}const ah="http://www.w3.org/1999/xlink";function uE(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ah,e.slice(6,e.length)):t.setAttributeNS(ah,e,n);else{const r=ly(e);n==null||r&&!md(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function hE(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=md(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Ts(t,e,n,s){t.addEventListener(e,n,s)}function fE(t,e,n,s){t.removeEventListener(e,n,s)}function dE(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=pE(e);if(s){const c=r[e]=_E(s,i);Ts(t,a,c,l)}else o&&(fE(t,a,o,l),r[e]=void 0)}}const lh=/(?:Once|Passive|Capture)$/;function pE(t){let e;if(lh.test(t)){e={};let s;for(;s=t.match(lh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ys(t.slice(2)),e]}let Ta=0;const gE=Promise.resolve(),mE=()=>Ta||(gE.then(()=>Ta=0),Ta=Date.now());function _E(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;_t(yE(s,n.value),e,5,[s])};return n.value=t,n.attached=mE(),n}function yE(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ch=/^on[a-z]/,vE=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?aE(t,s,i):e==="style"?lE(t,n,s):No(e)?tc(e)||dE(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):EE(t,e,s,i))?hE(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),uE(t,e,s,i))};function EE(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ch.test(e)&&G(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ch.test(e)&&Oe(n)?!1:e in t}const mn="transition",ui="animation",Yr=(t,{slots:e})=>_c(Jd,wE(t),e);Yr.displayName="Transition";const wp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Yr.props=We({},Jd.props,wp);const Bn=(t,e=[])=>{H(t)?t.forEach(n=>n(...e)):t&&t(...e)},uh=t=>t?H(t)?t.some(e=>e.length>1):t.length>1:!1;function wE(t){const e={};for(const D in t)D in wp||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,m=TE(i),w=m&&m[0],S=m&&m[1],{onBeforeEnter:R,onEnter:L,onEnterCancelled:k,onLeave:F,onLeaveCancelled:X,onBeforeAppear:pe=R,onAppear:Re=L,onAppearCancelled:j=k}=e,ae=(D,_e,Fe)=>{jn(D,_e?u:a),jn(D,_e?c:o),Fe&&Fe()},se=(D,_e)=>{D._isLeaving=!1,jn(D,h),jn(D,g),jn(D,f),_e&&_e()},Pe=D=>(_e,Fe)=>{const pn=D?Re:L,be=()=>ae(_e,D,Fe);Bn(pn,[_e,be]),hh(()=>{jn(_e,D?l:r),_n(_e,D?u:a),uh(pn)||fh(_e,s,w,be)})};return We(e,{onBeforeEnter(D){Bn(R,[D]),_n(D,r),_n(D,o)},onBeforeAppear(D){Bn(pe,[D]),_n(D,l),_n(D,c)},onEnter:Pe(!1),onAppear:Pe(!0),onLeave(D,_e){D._isLeaving=!0;const Fe=()=>se(D,_e);_n(D,h),CE(),_n(D,f),hh(()=>{D._isLeaving&&(jn(D,h),_n(D,g),uh(F)||fh(D,s,S,Fe))}),Bn(F,[D,Fe])},onEnterCancelled(D){ae(D,!1),Bn(k,[D])},onAppearCancelled(D){ae(D,!0),Bn(j,[D])},onLeaveCancelled(D){se(D),Bn(X,[D])}})}function TE(t){if(t==null)return null;if(we(t))return[Ia(t.enter),Ia(t.leave)];{const e=Ia(t);return[e,e]}}function Ia(t){return gy(t)}function _n(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function jn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function hh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let IE=0;function fh(t,e,n,s){const i=t._endId=++IE,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=bE(t,e);if(!o)return s();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,f),r()},f=g=>{g.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,f)}function bE(t,e){const n=window.getComputedStyle(t),s=m=>(n[m]||"").split(", "),i=s(`${mn}Delay`),r=s(`${mn}Duration`),o=dh(i,r),a=s(`${ui}Delay`),l=s(`${ui}Duration`),c=dh(a,l);let u=null,h=0,f=0;e===mn?o>0&&(u=mn,h=o,f=r.length):e===ui?c>0&&(u=ui,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?mn:ui:null,f=u?u===mn?r.length:l.length:0);const g=u===mn&&/\b(transform|all)(,|$)/.test(s(`${mn}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:g}}function dh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>ph(n)+ph(t[s])))}function ph(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function CE(){return document.body.offsetHeight}const gh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return H(e)?n=>Fr(e,n):e};function SE(t){t.target.composing=!0}function mh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const RE={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=gh(i);const r=s||i.props&&i.props.type==="number";Ts(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=Ja(a)),t._assign(a)}),n&&Ts(t,"change",()=>{t.value=t.value.trim()}),e||(Ts(t,"compositionstart",SE),Ts(t,"compositionend",mh),Ts(t,"change",mh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=gh(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&Ja(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},AE=["ctrl","shift","alt","meta"],kE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>AE.some(n=>t[`${n}Key`]&&!e.includes(n))},oO=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=kE[e[i]];if(r&&r(n,e))return}return t(n,...s)},_h={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):hi(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),hi(t,!0),s.enter(t)):s.leave(t,()=>{hi(t,!1)}):hi(t,e))},beforeUnmount(t,{value:e}){hi(t,e)}};function hi(t,e){t.style.display=e?t._vod:"none"}const NE=We({patchProp:vE},oE);let yh;function OE(){return yh||(yh=$v(NE))}const PE=(...t)=>{const e=OE().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=DE(s);if(!i)return;const r=e._component;!G(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function DE(t){return Oe(t)?document.querySelector(t):t}const fn=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},xE={name:"Button",props:{text:String,color:String},methods:{onClick(){console.log("Click")}}};function ME(t,e,n,s,i,r){return fe(),Se("button",{onClick:e[0]||(e[0]=o=>r.onClick()),style:ko({background:n.color})},Yn(n.text),5)}const LE=fn(xE,[["render",ME]]),FE={name:"SearchBar",data(){return{searchValue:""}},watch:{searchValue(t){console.log(t),this.$emit("search-filter",t)}},emits:["search-filter"]};function UE(t,e,n,s,i,r){return rl((fe(),Se("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>i.searchValue=o),type:"text",placeholder:"Buscar..."},null,512)),[[RE,i.searchValue]])}const $E=fn(FE,[["render",UE]]);function BE(){return Tp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Tp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const jE=typeof Proxy=="function",HE="devtools-plugin:setup",WE="plugin:settings:set";let ys,fl;function VE(){var t;return ys!==void 0||(typeof window<"u"&&window.performance?(ys=!0,fl=window.performance):typeof global<"u"&&(!((t=global.perf_hooks)===null||t===void 0)&&t.performance)?(ys=!0,fl=global.perf_hooks.performance):ys=!1),ys}function KE(){return VE()?fl.now():Date.now()}class GE{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const s={};if(e.settings)for(const o in e.settings){const a=e.settings[o];s[o]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let r=Object.assign({},s);try{const o=localStorage.getItem(i),a=JSON.parse(o);Object.assign(r,a)}catch{}this.fallbacks={getSettings(){return r},setSettings(o){try{localStorage.setItem(i,JSON.stringify(o))}catch{}r=o},now(){return KE()}},n&&n.on(WE,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function zE(t,e){const n=t,s=Tp(),i=BE(),r=jE&&n.enableEarlyProxy;if(i&&(s.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))i.emit(HE,t,e);else{const o=r?new GE(n,i):null;(s.__VUE_DEVTOOLS_PLUGINS__=s.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var qE="store";function Zs(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function Ip(t){return t!==null&&typeof t=="object"}function YE(t){return t&&typeof t.then=="function"}function XE(t,e){return function(){return t(e)}}function bp(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var s=e.indexOf(t);s>-1&&e.splice(s,1)}}function Cp(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Ho(t,n,[],t._modules.root,!0),yc(t,n,e)}function yc(t,e,n){var s=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,r={};Zs(i,function(o,a){r[a]=XE(o,t),Object.defineProperty(t.getters,a,{get:function(){return r[a]()},enumerable:!0})}),t._state=Qs({data:e}),t.strict&&tw(t),s&&n&&t._withCommit(function(){s.data=null})}function Ho(t,e,n,s,i){var r=!n.length,o=t._modules.getNamespace(n);if(s.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=s),!r&&!i){var a=vc(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=s.state})}var c=s.context=JE(t,o,n);s.forEachMutation(function(u,h){var f=o+h;QE(t,f,u,c)}),s.forEachAction(function(u,h){var f=u.root?h:o+h,g=u.handler||u;ZE(t,f,g,c)}),s.forEachGetter(function(u,h){var f=o+h;ew(t,f,u,c)}),s.forEachChild(function(u,h){Ho(t,e,n.concat(h),u,i)})}function JE(t,e,n){var s=e==="",i={dispatch:s?t.dispatch:function(r,o,a){var l=Xr(r,o,a),c=l.payload,u=l.options,h=l.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,c)},commit:s?t.commit:function(r,o,a){var l=Xr(r,o,a),c=l.payload,u=l.options,h=l.type;(!u||!u.root)&&(h=e+h),t.commit(h,c,u)}};return Object.defineProperties(i,{getters:{get:s?function(){return t.getters}:function(){return Sp(t,e)}},state:{get:function(){return vc(t.state,n)}}}),i}function Sp(t,e){if(!t._makeLocalGettersCache[e]){var n={},s=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,s)===e){var r=i.slice(s);Object.defineProperty(n,r,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function QE(t,e,n,s){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(o){n.call(t,s.state,o)})}function ZE(t,e,n,s){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(o){var a=n.call(t,{dispatch:s.dispatch,commit:s.commit,getters:s.getters,state:s.state,rootGetters:t.getters,rootState:t.state},o);return YE(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function ew(t,e,n,s){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(r){return n(s.state,s.getters,r.state,r.getters)})}function tw(t){Ds(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function vc(t,e){return e.reduce(function(n,s){return n[s]},t)}function Xr(t,e,n){return Ip(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var nw="vuex bindings",vh="vuex:mutations",ba="vuex:actions",vs="vuex",sw=0;function iw(t,e){zE({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[nw]},function(n){n.addTimelineLayer({id:vh,label:"Vuex Mutations",color:Eh}),n.addTimelineLayer({id:ba,label:"Vuex Actions",color:Eh}),n.addInspector({id:vs,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(s){if(s.app===t&&s.inspectorId===vs)if(s.filter){var i=[];Np(i,e._modules.root,s.filter,""),s.rootNodes=i}else s.rootNodes=[kp(e._modules.root,"")]}),n.on.getInspectorState(function(s){if(s.app===t&&s.inspectorId===vs){var i=s.nodeId;Sp(e,i),s.state=aw(cw(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(s){if(s.app===t&&s.inspectorId===vs){var i=s.nodeId,r=s.path;i!=="root"&&(r=i.split("/").filter(Boolean).concat(r)),e._withCommit(function(){s.set(e._state.data,r,s.state.value)})}}),e.subscribe(function(s,i){var r={};s.payload&&(r.payload=s.payload),r.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(vs),n.sendInspectorState(vs),n.addTimelineEvent({layerId:vh,event:{time:Date.now(),title:s.type,data:r}})}),e.subscribeAction({before:function(s,i){var r={};s.payload&&(r.payload=s.payload),s._id=sw++,s._time=Date.now(),r.state=i,n.addTimelineEvent({layerId:ba,event:{time:s._time,title:s.type,groupId:s._id,subtitle:"start",data:r}})},after:function(s,i){var r={},o=Date.now()-s._time;r.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},s.payload&&(r.payload=s.payload),r.state=i,n.addTimelineEvent({layerId:ba,event:{time:Date.now(),title:s.type,groupId:s._id,subtitle:"end",data:r}})}})})}var Eh=8702998,rw=6710886,ow=16777215,Rp={label:"namespaced",textColor:ow,backgroundColor:rw};function Ap(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function kp(t,e){return{id:e||"root",label:Ap(e),tags:t.namespaced?[Rp]:[],children:Object.keys(t._children).map(function(n){return kp(t._children[n],e+n+"/")})}}function Np(t,e,n,s){s.includes(n)&&t.push({id:s||"root",label:s.endsWith("/")?s.slice(0,s.length-1):s||"Root",tags:e.namespaced?[Rp]:[]}),Object.keys(e._children).forEach(function(i){Np(t,e._children[i],n,s+i+"/")})}function aw(t,e,n){e=n==="root"?e:e[n];var s=Object.keys(e),i={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(s.length){var r=lw(e);i.getters=Object.keys(r).map(function(o){return{key:o.endsWith("/")?Ap(o):o,editable:!1,value:dl(function(){return r[o]})}})}return i}function lw(t){var e={};return Object.keys(t).forEach(function(n){var s=n.split("/");if(s.length>1){var i=e,r=s.pop();s.forEach(function(o){i[o]||(i[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),i=i[o]._custom.value}),i[r]=dl(function(){return t[n]})}else e[n]=dl(function(){return t[n]})}),e}function cw(t,e){var n=e.split("/").filter(function(s){return s});return n.reduce(function(s,i,r){var o=s[i];if(!o)throw new Error('Missing module "'+i+'" for path "'+e+'".');return r===n.length-1?o:o._children},e==="root"?t:t.root._children)}function dl(t){try{return t()}catch(e){return e}}var xt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var s=e.state;this.state=(typeof s=="function"?s():s)||{}},Op={namespaced:{configurable:!0}};Op.namespaced.get=function(){return!!this._rawModule.namespaced};xt.prototype.addChild=function(e,n){this._children[e]=n};xt.prototype.removeChild=function(e){delete this._children[e]};xt.prototype.getChild=function(e){return this._children[e]};xt.prototype.hasChild=function(e){return e in this._children};xt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};xt.prototype.forEachChild=function(e){Zs(this._children,e)};xt.prototype.forEachGetter=function(e){this._rawModule.getters&&Zs(this._rawModule.getters,e)};xt.prototype.forEachAction=function(e){this._rawModule.actions&&Zs(this._rawModule.actions,e)};xt.prototype.forEachMutation=function(e){this._rawModule.mutations&&Zs(this._rawModule.mutations,e)};Object.defineProperties(xt.prototype,Op);var fs=function(e){this.register([],e,!1)};fs.prototype.get=function(e){return e.reduce(function(n,s){return n.getChild(s)},this.root)};fs.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(s,i){return n=n.getChild(i),s+(n.namespaced?i+"/":"")},"")};fs.prototype.update=function(e){Pp([],this.root,e)};fs.prototype.register=function(e,n,s){var i=this;s===void 0&&(s=!0);var r=new xt(n,s);if(e.length===0)this.root=r;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],r)}n.modules&&Zs(n.modules,function(a,l){i.register(e.concat(l),a,s)})};fs.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1],i=n.getChild(s);i&&i.runtime&&n.removeChild(s)};fs.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),s=e[e.length-1];return n?n.hasChild(s):!1};function Pp(t,e,n){if(e.update(n),n.modules)for(var s in n.modules){if(!e.getChild(s))return;Pp(t.concat(s),e.getChild(s),n.modules[s])}}function uw(t){return new at(t)}var at=function(e){var n=this;e===void 0&&(e={});var s=e.plugins;s===void 0&&(s=[]);var i=e.strict;i===void 0&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new fs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var o=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(f,g){return l.call(o,f,g)},this.commit=function(f,g,m){return c.call(o,f,g,m)},this.strict=i;var u=this._modules.root.state;Ho(this,u,[],this._modules.root),yc(this,u),s.forEach(function(h){return h(n)})},Ec={state:{configurable:!0}};at.prototype.install=function(e,n){e.provide(n||qE,this),e.config.globalProperties.$store=this;var s=this._devtools!==void 0?this._devtools:!1;s&&iw(e,this)};Ec.state.get=function(){return this._state.data};Ec.state.set=function(t){};at.prototype.commit=function(e,n,s){var i=this,r=Xr(e,n,s),o=r.type,a=r.payload,l={type:o,payload:a},c=this._mutations[o];c&&(this._withCommit(function(){c.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(l,i.state)}))};at.prototype.dispatch=function(e,n){var s=this,i=Xr(e,n),r=i.type,o=i.payload,a={type:r,payload:o},l=this._actions[r];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,s.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(o)})):l[0](o);return new Promise(function(u,h){c.then(function(f){try{s._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,s.state)})}catch{}u(f)},function(f){try{s._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,s.state,f)})}catch{}h(f)})})}};at.prototype.subscribe=function(e,n){return bp(e,this._subscribers,n)};at.prototype.subscribeAction=function(e,n){var s=typeof e=="function"?{before:e}:e;return bp(s,this._actionSubscribers,n)};at.prototype.watch=function(e,n,s){var i=this;return Ds(function(){return e(i.state,i.getters)},n,Object.assign({},s))};at.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};at.prototype.registerModule=function(e,n,s){s===void 0&&(s={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Ho(this,this.state,e,this._modules.get(e),s.preserveState),yc(this,this.state)};at.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var s=vc(n.state,e.slice(0,-1));delete s[e[e.length-1]]}),Cp(this)};at.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};at.prototype.hotUpdate=function(e){this._modules.update(e),Cp(this,!0)};at.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(at.prototype,Ec);var Ci=Tc(function(t,e){var n={};return wc(e).forEach(function(s){var i=s.key,r=s.val;n[i]=function(){var a=this.$store.state,l=this.$store.getters;if(t){var c=Ic(this.$store,"mapState",t);if(!c)return;a=c.context.state,l=c.context.getters}return typeof r=="function"?r.call(this,a,l):a[r]},n[i].vuex=!0}),n}),Dp=Tc(function(t,e){var n={};return wc(e).forEach(function(s){var i=s.key,r=s.val;r=t+r,n[i]=function(){if(!(t&&!Ic(this.$store,"mapGetters",t)))return this.$store.getters[r]},n[i].vuex=!0}),n}),Jr=Tc(function(t,e){var n={};return wc(e).forEach(function(s){var i=s.key,r=s.val;n[i]=function(){for(var a=[],l=arguments.length;l--;)a[l]=arguments[l];var c=this.$store.dispatch;if(t){var u=Ic(this.$store,"mapActions",t);if(!u)return;c=u.context.dispatch}return typeof r=="function"?r.apply(this,[c].concat(a)):c.apply(this.$store,[r].concat(a))}}),n});function wc(t){return hw(t)?Array.isArray(t)?t.map(function(e){return{key:e,val:e}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}}):[]}function hw(t){return Array.isArray(t)||Ip(t)}function Tc(t){return function(e,n){return typeof e!="string"?(n=e,e=""):e.charAt(e.length-1)!=="/"&&(e+="/"),t(e,n)}}function Ic(t,e,n){var s=t._modulesNamespaceMap[n];return s}const fw={name:"TheNavigation",computed:{...Ci("user",{user:t=>t.userData})}},dw={class:"nav__ul"},pw={class:"nav__li"},gw={key:0,class:"nav__li"},mw={class:"nav__li"},_w={key:1,class:"nav__li"},yw={key:2,class:"nav__li"};function vw(t,e,n,s,i,r){const o=an("RouterLink");return fe(),Se("nav",null,[re("ul",dw,[re("li",pw,[de(o,{class:"nav__link",to:"/"},{default:pt(()=>[Zt("Inicio")]),_:1})]),t.user?(fe(),Se("li",gw,[de(o,{class:"nav__link",to:"/profile"},{default:pt(()=>[Zt("Perfil")]),_:1})])):Bt("",!0),re("li",mw,[de(o,{class:"nav__link",to:"/cart"},{default:pt(()=>[Zt("Carrito")]),_:1})]),t.user?Bt("",!0):(fe(),Se("li",_w,[de(o,{class:"nav__link",to:"/loginRegister"},{default:pt(()=>[Zt("Iniciar sesión")]),_:1})])),t.user?(fe(),Se("li",yw,[de(o,{class:"nav__link",to:"/library"},{default:pt(()=>[Zt("Biblioteca")]),_:1})])):Bt("",!0)])])}const Ew=fn(fw,[["render",vw]]),ww={name:"Header",components:{Button:LE,SearchBar:$E,TheNavigation:Ew},data(){return{searchValue:""}},computed:{...Ci("user",{user:t=>t.userData})},watch:{searchValue(t){console.log(t),this.$emit("search-filter",t)}},emits:["search-filter"]},Tw=re("h1",null,"Cursos de música",-1);function Iw(t,e,n,s,i,r){const o=an("TheNavigation"),a=an("RouterLink");return fe(),Se("header",null,[Tw,de(o),t.user?(fe(),er(a,{key:0,to:"/profile"},{default:pt(()=>[Zt(Yn(this.user.name),1)]),_:1})):Bt("",!0)])}const bw=fn(ww,[["render",Iw]]);const Cw={name:"App",components:{Header:bw},data(){return{courses:[],searchValue:""}},methods:{...Jr("user",{localStorageUser:"localStorageUser"}),deleteCourse(t){confirm("Are you sure?")&&(this.courses=this.courses.filter(e=>e.id!==t))},algo(t){console.log(t)},async fetchCourses(){return await(await fetch("https://api-node.up.railway.app/api/v1/productos")).json()}},async created(){this.courses=Object.values(await this.fetchCourses()),console.log(this.courses),this.localStorageUser()},computed:{}};function Sw(t,e,n,s,i,r){const o=an("Header"),a=an("RouterView");return fe(),Se(tt,null,[de(o,{onSearchFilter:e[0]||(e[0]=l=>this.searchValue=l)}),re("main",null,[(fe(),er(a,{key:t.$route.path}))])],64)}const Rw=fn(Cw,[["render",Sw]]),Aw="modulepreload",kw=function(t){return"/"+t},wh={},Hn=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=kw(r),r in wh)return;wh[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Aw,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Is=typeof window<"u";function Nw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const le=Object.assign;function Ca(t,e){const n={};for(const s in e){const i=e[s];n[s]=Pt(i)?i.map(t):t(i)}return n}const Si=()=>{},Pt=Array.isArray,Ow=/\/$/,Pw=t=>t.replace(Ow,"");function Sa(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Lw(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function Dw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Th(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xw(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Hs(e.matched[s],n.matched[i])&&xp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function xp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Mw(t[n],e[n]))return!1;return!0}function Mw(t,e){return Pt(t)?Ih(t,e):Pt(e)?Ih(e,t):t===e}function Ih(t,e){return Pt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Lw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r-(r===s.length?1:0)).join("/")}var $i;(function(t){t.pop="pop",t.push="push"})($i||($i={}));var Ri;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ri||(Ri={}));function Fw(t){if(!t)if(Is){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Pw(t)}const Uw=/^[^#]+#/;function $w(t,e){return t.replace(Uw,"#")+e}function Bw(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Wo=()=>({left:window.pageXOffset,top:window.pageYOffset});function jw(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Bw(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function bh(t,e){return(history.state?history.state.position-e:-1)+t}const pl=new Map;function Hw(t,e){pl.set(t,e)}function Ww(t){const e=pl.get(t);return pl.delete(t),e}let Vw=()=>location.protocol+"//"+location.host;function Mp(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Th(l,"")}return Th(n,t)+s+i}function Kw(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const g=Mp(t,location),m=n.value,w=e.value;let S=0;if(f){if(n.value=g,e.value=f,o&&o===m){o=null;return}S=w?f.position-w.position:0}else s(g);i.forEach(R=>{R(n.value,m,{delta:S,type:$i.pop,direction:S?S>0?Ri.forward:Ri.back:Ri.unknown})})};function l(){o=n.value}function c(f){i.push(f);const g=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(le({},f.state,{scroll:Wo()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Ch(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Wo():null}}function Gw(t){const{history:e,location:n}=window,s={value:Mp(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Vw()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function o(l,c){const u=le({},e.state,Ch(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=le({},i.value,e.state,{forward:l,scroll:Wo()});r(u.current,u,!0);const h=le({},Ch(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function zw(t){t=Fw(t);const e=Gw(t),n=Kw(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=le({location:"",base:t,go:s,createHref:$w.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function qw(t){return typeof t=="string"||t&&typeof t=="object"}function Lp(t){return typeof t=="string"||typeof t=="symbol"}const yn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Fp=Symbol("");var Sh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sh||(Sh={}));function Ws(t,e){return le(new Error,{type:t,[Fp]:!0},e)}function Jt(t,e){return t instanceof Error&&Fp in t&&(e==null||!!(t.type&e))}const Rh="[^/]+?",Yw={sensitive:!1,strict:!1,start:!0,end:!0},Xw=/[.+*?^${}()[\]/\\]/g;function Jw(t,e){const n=le({},Yw,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let g=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(Xw,"\\$&"),g+=40;else if(f.type===1){const{value:m,repeatable:w,optional:S,regexp:R}=f;r.push({name:m,repeatable:w,optional:S});const L=R||Rh;if(L!==Rh){g+=10;try{new RegExp(`(${L})`)}catch(F){throw new Error(`Invalid custom RegExp for param "${m}" (${L}): `+F.message)}}let k=w?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;h||(k=S&&c.length<2?`(?:/${k})`:"/"+k),S&&(k+="?"),i+=k,g+=20,S&&(g+=-8),w&&(g+=-20),L===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",m=r[f-1];h[m.name]=g&&m.repeatable?g.split("/"):g}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:m,repeatable:w,optional:S}=g,R=m in c?c[m]:"";if(Pt(R)&&!w)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const L=Pt(R)?R.join("/"):R;if(!L)if(S)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=L}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function Qw(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Zw(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=Qw(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Ah(s))return 1;if(Ah(i))return-1}return i.length-s.length}function Ah(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const eT={type:0,value:""},tT=/[a-zA-Z0-9_]/;function nT(t){if(!t)return[[]];if(t==="/")return[[eT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:tT.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function sT(t,e,n){const s=Jw(nT(t.path),n),i=le(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function iT(t,e){const n=[],s=new Map;e=Oh({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const g=!f,m=rT(u);m.aliasOf=f&&f.record;const w=Oh(e,u),S=[m];if("alias"in u){const k=typeof u.alias=="string"?[u.alias]:u.alias;for(const F of k)S.push(le({},m,{components:f?f.record.components:m.components,path:F,aliasOf:f?f.record:m}))}let R,L;for(const k of S){const{path:F}=k;if(h&&F[0]!=="/"){const X=h.record.path,pe=X[X.length-1]==="/"?"":"/";k.path=h.record.path+(F&&pe+F)}if(R=sT(k,h,w),f?f.alias.push(R):(L=L||R,L!==R&&L.alias.push(R),g&&u.name&&!Nh(R)&&o(u.name)),m.children){const X=m.children;for(let pe=0;pe<X.length;pe++)r(X[pe],R,f&&f.children[pe])}f=f||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&l(R)}return L?()=>{o(L)}:Si}function o(u){if(Lp(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&Zw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Up(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Nh(u)&&s.set(u.record.name,u)}function c(u,h){let f,g={},m,w;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Ws(1,{location:u});w=f.record.name,g=le(kh(h.params,f.keys.filter(L=>!L.optional).map(L=>L.name)),u.params&&kh(u.params,f.keys.map(L=>L.name))),m=f.stringify(g)}else if("path"in u)m=u.path,f=n.find(L=>L.re.test(m)),f&&(g=f.parse(m),w=f.record.name);else{if(f=h.name?s.get(h.name):n.find(L=>L.re.test(h.path)),!f)throw Ws(1,{location:u,currentLocation:h});w=f.record.name,g=le({},h.params,u.params),m=f.stringify(g)}const S=[];let R=f;for(;R;)S.unshift(R.record),R=R.parent;return{name:w,path:m,params:g,matched:S,meta:aT(S)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function kh(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function rT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:oT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function oT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Nh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function aT(t){return t.reduce((e,n)=>le(e,n.meta),{})}function Oh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Up(t,e){return e.children.some(n=>n===t||Up(t,n))}const $p=/#/g,lT=/&/g,cT=/\//g,uT=/=/g,hT=/\?/g,Bp=/\+/g,fT=/%5B/g,dT=/%5D/g,jp=/%5E/g,pT=/%60/g,Hp=/%7B/g,gT=/%7C/g,Wp=/%7D/g,mT=/%20/g;function bc(t){return encodeURI(""+t).replace(gT,"|").replace(fT,"[").replace(dT,"]")}function _T(t){return bc(t).replace(Hp,"{").replace(Wp,"}").replace(jp,"^")}function gl(t){return bc(t).replace(Bp,"%2B").replace(mT,"+").replace($p,"%23").replace(lT,"%26").replace(pT,"`").replace(Hp,"{").replace(Wp,"}").replace(jp,"^")}function yT(t){return gl(t).replace(uT,"%3D")}function vT(t){return bc(t).replace($p,"%23").replace(hT,"%3F")}function ET(t){return t==null?"":vT(t).replace(cT,"%2F")}function Qr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function wT(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Bp," "),o=r.indexOf("="),a=Qr(o<0?r:r.slice(0,o)),l=o<0?null:Qr(r.slice(o+1));if(a in e){let c=e[a];Pt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ph(t){let e="";for(let n in t){const s=t[n];if(n=yT(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pt(s)?s.map(r=>r&&gl(r)):[s&&gl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function TT(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Pt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const IT=Symbol(""),Dh=Symbol(""),Cc=Symbol(""),Vp=Symbol(""),ml=Symbol("");function fi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function wn(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Ws(4,{from:n,to:e})):h instanceof Error?a(h):qw(h)?a(Ws(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Ra(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(bT(a)){const c=(a.__vccOpts||a)[e];c&&i.push(wn(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=Nw(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&wn(f,n,s,r,o)()}))}}return i}function bT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xh(t){const e=Ht(Cc),n=Ht(Vp),s=gt(()=>e.resolve(Os(t.to))),i=gt(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(Hs.bind(null,u));if(f>-1)return f;const g=Mh(l[c-2]);return c>1&&Mh(u)===g&&h[h.length-1].path!==g?h.findIndex(Hs.bind(null,l[c-2])):f}),r=gt(()=>i.value>-1&&AT(n.params,s.value.params)),o=gt(()=>i.value>-1&&i.value===n.matched.length-1&&xp(n.params,s.value.params));function a(l={}){return RT(l)?e[Os(t.replace)?"replace":"push"](Os(t.to)).catch(Si):Promise.resolve()}return{route:s,href:gt(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const CT=ep({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xh,setup(t,{slots:e}){const n=Qs(xh(t)),{options:s}=Ht(Cc),i=gt(()=>({[Lh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Lh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:_c("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),ST=CT;function RT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function AT(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Pt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Mh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Lh=(t,e,n)=>t??e??n,kT=ep({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ht(ml),i=gt(()=>t.route||s.value),r=Ht(Dh,0),o=gt(()=>{let c=Os(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=gt(()=>i.value.matched[o.value]);Ur(Dh,gt(()=>o.value+1)),Ur(IT,a),Ur(ml,i);const l=Ud();return Ds(()=>[l.value,a.value,t.name],([c,u,h],[f,g,m])=>{u&&(u.instances[h]=c,g&&g!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Hs(u,g)||!f)&&(u.enterCallbacks[h]||[]).forEach(w=>w(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Fh(n.default,{Component:f,route:c});const g=h.props[u],m=g?g===!0?c.params:typeof g=="function"?g(c):g:null,S=_c(f,le({},m,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Fh(n.default,{Component:S,route:c})||S}}});function Fh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const NT=kT;function OT(t){const e=iT(t.routes,t),n=t.parseQuery||wT,s=t.stringifyQuery||Ph,i=t.history,r=fi(),o=fi(),a=fi(),l=zy(yn);let c=yn;Is&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ca.bind(null,v=>""+v),h=Ca.bind(null,ET),f=Ca.bind(null,Qr);function g(v,P){let N,U;return Lp(v)?(N=e.getRecordMatcher(v),U=P):U=v,e.addRoute(U,N)}function m(v){const P=e.getRecordMatcher(v);P&&e.removeRoute(P)}function w(){return e.getRoutes().map(v=>v.record)}function S(v){return!!e.getRecordMatcher(v)}function R(v,P){if(P=le({},P||l.value),typeof v=="string"){const d=Sa(n,v,P.path),p=e.resolve({path:d.path},P),_=i.createHref(d.fullPath);return le(d,p,{params:f(p.params),hash:Qr(d.hash),redirectedFrom:void 0,href:_})}let N;if("path"in v)N=le({},v,{path:Sa(n,v.path,P.path).path});else{const d=le({},v.params);for(const p in d)d[p]==null&&delete d[p];N=le({},v,{params:h(v.params)}),P.params=h(P.params)}const U=e.resolve(N,P),ee=v.hash||"";U.params=u(f(U.params));const Ce=Dw(s,le({},v,{hash:_T(ee),path:U.path})),z=i.createHref(Ce);return le({fullPath:Ce,hash:ee,query:s===Ph?TT(v.query):v.query||{}},U,{redirectedFrom:void 0,href:z})}function L(v){return typeof v=="string"?Sa(n,v,l.value.path):le({},v)}function k(v,P){if(c!==v)return Ws(8,{from:P,to:v})}function F(v){return Re(v)}function X(v){return F(le(L(v),{replace:!0}))}function pe(v){const P=v.matched[v.matched.length-1];if(P&&P.redirect){const{redirect:N}=P;let U=typeof N=="function"?N(v):N;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=L(U):{path:U},U.params={}),le({query:v.query,hash:v.hash,params:"path"in U?{}:v.params},U)}}function Re(v,P){const N=c=R(v),U=l.value,ee=v.state,Ce=v.force,z=v.replace===!0,d=pe(N);if(d)return Re(le(L(d),{state:typeof d=="object"?le({},ee,d.state):ee,force:Ce,replace:z}),P||N);const p=N;p.redirectedFrom=P;let _;return!Ce&&xw(s,U,N)&&(_=Ws(16,{to:p,from:U}),Fn(U,U,!0,!1)),(_?Promise.resolve(_):ae(p,U)).catch(y=>Jt(y)?Jt(y,2)?y:wt(y):ge(y,p,U)).then(y=>{if(y){if(Jt(y,2))return Re(le({replace:z},L(y.to),{state:typeof y.to=="object"?le({},ee,y.to.state):ee,force:Ce}),P||p)}else y=Pe(p,U,!0,z,ee);return se(p,U,y),y})}function j(v,P){const N=k(v,P);return N?Promise.reject(N):Promise.resolve()}function ae(v,P){let N;const[U,ee,Ce]=PT(v,P);N=Ra(U.reverse(),"beforeRouteLeave",v,P);for(const d of U)d.leaveGuards.forEach(p=>{N.push(wn(p,v,P))});const z=j.bind(null,v,P);return N.push(z),Es(N).then(()=>{N=[];for(const d of r.list())N.push(wn(d,v,P));return N.push(z),Es(N)}).then(()=>{N=Ra(ee,"beforeRouteUpdate",v,P);for(const d of ee)d.updateGuards.forEach(p=>{N.push(wn(p,v,P))});return N.push(z),Es(N)}).then(()=>{N=[];for(const d of v.matched)if(d.beforeEnter&&!P.matched.includes(d))if(Pt(d.beforeEnter))for(const p of d.beforeEnter)N.push(wn(p,v,P));else N.push(wn(d.beforeEnter,v,P));return N.push(z),Es(N)}).then(()=>(v.matched.forEach(d=>d.enterCallbacks={}),N=Ra(Ce,"beforeRouteEnter",v,P),N.push(z),Es(N))).then(()=>{N=[];for(const d of o.list())N.push(wn(d,v,P));return N.push(z),Es(N)}).catch(d=>Jt(d,8)?d:Promise.reject(d))}function se(v,P,N){for(const U of a.list())U(v,P,N)}function Pe(v,P,N,U,ee){const Ce=k(v,P);if(Ce)return Ce;const z=P===yn,d=Is?history.state:{};N&&(U||z?i.replace(v.fullPath,le({scroll:z&&d&&d.scroll},ee)):i.push(v.fullPath,ee)),l.value=v,Fn(v,P,N,z),wt()}let D;function _e(){D||(D=i.listen((v,P,N)=>{if(!vr.listening)return;const U=R(v),ee=pe(U);if(ee){Re(le(ee,{replace:!0}),U).catch(Si);return}c=U;const Ce=l.value;Is&&Hw(bh(Ce.fullPath,N.delta),Wo()),ae(U,Ce).catch(z=>Jt(z,12)?z:Jt(z,2)?(Re(z.to,U).then(d=>{Jt(d,20)&&!N.delta&&N.type===$i.pop&&i.go(-1,!1)}).catch(Si),Promise.reject()):(N.delta&&i.go(-N.delta,!1),ge(z,U,Ce))).then(z=>{z=z||Pe(U,Ce,!1),z&&(N.delta&&!Jt(z,8)?i.go(-N.delta,!1):N.type===$i.pop&&Jt(z,20)&&i.go(-1,!1)),se(U,Ce,z)}).catch(Si)}))}let Fe=fi(),pn=fi(),be;function ge(v,P,N){wt(v);const U=pn.list();return U.length?U.forEach(ee=>ee(v,P,N)):console.error(v),Promise.reject(v)}function ce(){return be&&l.value!==yn?Promise.resolve():new Promise((v,P)=>{Fe.add([v,P])})}function wt(v){return be||(be=!v,_e(),Fe.list().forEach(([P,N])=>v?N(v):P()),Fe.reset()),v}function Fn(v,P,N,U){const{scrollBehavior:ee}=t;if(!Is||!ee)return Promise.resolve();const Ce=!N&&Ww(bh(v.fullPath,0))||(U||!N)&&history.state&&history.state.scroll||null;return Wd().then(()=>ee(v,P,Ce)).then(z=>z&&jw(z)).catch(z=>ge(z,v,P))}const Tt=v=>i.go(v);let st;const ms=new Set,vr={currentRoute:l,listening:!0,addRoute:g,removeRoute:m,hasRoute:S,getRoutes:w,resolve:R,options:t,push:F,replace:X,go:Tt,back:()=>Tt(-1),forward:()=>Tt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:pn.add,isReady:ce,install(v){const P=this;v.component("RouterLink",ST),v.component("RouterView",NT),v.config.globalProperties.$router=P,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Os(l)}),Is&&!st&&l.value===yn&&(st=!0,F(i.location).catch(ee=>{}));const N={};for(const ee in yn)N[ee]=gt(()=>l.value[ee]);v.provide(Cc,P),v.provide(Vp,Qs(N)),v.provide(ml,l);const U=v.unmount;ms.add(v),v.unmount=function(){ms.delete(v),ms.size<1&&(c=yn,D&&D(),D=null,l.value=yn,st=!1,be=!1),U()}}};return vr}function Es(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function PT(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Hs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Hs(c,l))||i.push(l))}return[n,s,i]}const DT={props:["modalActive","notClose"],setup(t,{emit:e}){return{close:()=>{e("close")}}}},xT={class:"modal"},MT={class:"modal-inner"},LT={key:1,class:"modal__center"};function FT(t,e,n,s,i,r){return fe(),er(Yr,{name:"modal-animation"},{default:pt(()=>[rl(re("div",xT,[de(Yr,{name:"modal-animation-inner"},{default:pt(()=>[rl(re("div",MT,[n.notClose?Bt("",!0):(fe(),Se("i",{key:0,onClick:e[0]||(e[0]=(...o)=>s.close&&s.close(...o)),class:"far fa-times-circle"})),Cv(t.$slots,"default",{},void 0,!0),n.notClose?Bt("",!0):(fe(),Se("div",LT,[re("button",{onClick:e[1]||(e[1]=(...o)=>s.close&&s.close(...o)),type:"Cerrar"},"Cerrar")]))],512),[[_h,n.modalActive]])]),_:3})],512),[[_h,n.modalActive]])]),_:3})}const UT=fn(DT,[["render",FT],["__scopeId","data-v-11dfbda3"]]),Kp="/assets/anadir-a-la-cesta-772d6fab.png",$T="/assets/x-mark-c88dd7dc.png",BT={name:"Courses",props:["courses"],components:{Modal:UT},data(){return{loading:!1,modalActive:!1}},computed:{...Ci({fetchImageURL:t=>t.fetchImageURL}),...Ci("cart",{cart:t=>t.items}),...Ci("user",{user:t=>t.userData}),...Dp("courses",{subtitleCourses:"subtitledCourses"})},methods:{...Jr("courses",{fetchCourses:"fetchCourses"}),...Jr("cart",{addCourseToCart:"addCourseToCart",eliminateCourseInCart:"eliminateCourseInCart"}),fetchImg(t){return this.fetchImageURL+t},toggleModal(){this.modalActive=!this.modalActive},checkCourseInCart(t){return this.cart.includes(t)},checkCoursePurchased(t){if(this.user)return this.user.courses.includes(t)}}},jT={key:0},HT={key:1},WT=re("h2",null,"Courses",-1),VT={class:"courses"},KT=["src"],GT={class:"course__content"},zT={key:0,class:"course__purchased"},qT=["onClick"],YT=re("img",{class:"icon",src:Kp,alt:""},null,-1),XT=["onClick"],JT=re("img",{class:"item__delete icon click",src:$T,alt:""},null,-1),QT=re("div",{class:"modal--addToCart"},[re("h1",null,"Curso añadido a la cesta"),re("img",{class:"icon--large",src:Kp,alt:""})],-1);function ZT(t,e,n,s,i,r){const o=an("RouterLink"),a=an("Modal");return fe(),Se("div",null,[i.loading?(fe(),Se("span",jT,"...")):(fe(),Se("article",HT,[WT,re("section",VT,[n.courses?(fe(!0),Se(tt,{key:0},op(n.courses,l=>(fe(),Se("article",{key:l.id,class:"courses__course"},[de(o,{class:"course__routerLink",to:{name:"course.show",params:{id:l.id,title:l.title}}},{default:pt(()=>[re("img",{src:r.fetchImg(l.image),alt:"",class:"course__img"},null,8,KT)]),_:2},1032,["to"]),re("section",GT,[de(o,{class:"course__link",to:{name:"course.show",params:{id:l.id,title:l.title}}},{default:pt(()=>[re("h3",null,Yn(l.title),1)]),_:2},1032,["to"]),re("span",null,"Un curso de "+Yn(l.author),1),re("span",null,"Duración: "+Yn(l.duration),1),r.checkCoursePurchased(l.id)?(fe(),Se("span",zT,"Comprado")):Bt("",!0),!r.checkCourseInCart(l.id)&&!r.checkCoursePurchased(l.id)?(fe(),Se("button",{key:1,onClick:c=>(t.addCourseToCart(l),r.toggleModal()),class:"button--large"},[YT,Zt(" Añadir al carrito "),re("span",null,Yn(l.price)+"€",1)],8,qT)):Bt("",!0),r.checkCourseInCart(l.id)&&!r.checkCoursePurchased(l.id)?(fe(),Se("button",{key:2,onClick:c=>t.eliminateCourseInCart(l.id),class:"button--large"},[JT,Zt(" Quitar del carrito ")],8,XT)):Bt("",!0)])]))),128)):Bt("",!0)])])),de(a,{onClose:r.toggleModal,modalActive:i.modalActive},{default:pt(()=>[QT]),_:1},8,["onClose","modalActive"])])}const eI=fn(BT,[["render",ZT]]),tI={name:"Filters",emits:["check-filter"],data(){return{subareas:["musical_production","instruments","music_fundamentals"],checkedFiltersValues:[]}},methods:{replaceCharacters(t){return t.charAt(0).toUpperCase()+t.slice(1).replace("_"," ")},checkFilters(t){t.target.checked===!0?this.checkedFiltersValues.push(t.target.id):this.checkedFiltersValues=this.checkedFiltersValues.filter(e=>e!=t.target.id),this.$emit("check-filter",this.checkedFiltersValues)}}},nI={class:"main__filters"},sI=re("h3",null,"Filtros",-1),iI={class:"filters__block"},rI=re("h4",null,"Subcategoría",-1),oI={class:"filters__ul"},aI={class:"filters__li"},lI=["name","id"],cI=["for"];function uI(t,e,n,s,i,r){return fe(),Se("section",nI,[sI,re("article",iI,[rI,re("ul",oI,[(fe(!0),Se(tt,null,op(i.subareas,o=>(fe(),Se("li",aI,[re("input",{type:"checkbox",name:o,onChange:e[0]||(e[0]=a=>r.checkFilters(a)),class:"filters__checkbox",id:o},null,40,lI),re("label",{class:"filters__label",for:o},Yn(r.replaceCharacters(o)),9,cI)]))),256))])])])}const hI=fn(tI,[["render",uI]]),fI={name:"Home",components:{Courses:eI,Filters:hI},data(){return{loading:!1,subareas:["musical_production","instruments","music_fundamentals"],filters:[]}},computed:{courses(){const t=this.$store.getters["courses/courses"];if(t){if(this.filters.length==0)return t;{const e=[];return t.forEach(n=>{this.subareas.forEach(s=>{this.filters.includes(s)&&n.subarea==s&&(e.includes(n)||e.push(n))})}),e}}else return""},...Dp("courses",{subtitleCourses:"subtitledCourses"})},async created(){this.loading=!0,await this.fetchCourses().then(()=>this.loading=!1)},methods:{...Jr("courses",{fetchCourses:"fetchCourses"}),updateDataByFilter(t){this.filters=t,console.log(this.filters)}}},dI={class:"home"},pI={class:"main__aside"};function gI(t,e,n,s,i,r){const o=an("Filters"),a=an("Courses");return fe(),Se("div",dI,[re("aside",pI,[de(o,{onCheckFilter:r.updateDataByFilter},null,8,["onCheckFilter"])]),de(a,{courses:r.courses},null,8,["courses"])])}const mI=fn(fI,[["render",gI]]),_I=[{path:"/",name:"Home",component:mI},{path:"/about",name:"About",component:()=>Hn(()=>import("./About-88cae7b1.js"),[])},{path:"/profile",name:"Profile",component:()=>Hn(()=>import("./Profile-41ae9261.js"),[])},{path:"/cart",name:"Cart",component:()=>Hn(()=>import("./ShoppingCart-8bdd3de7.js"),["assets/ShoppingCart-8bdd3de7.js","assets/verificar-a2122b4b.js"])},{path:"/library",name:"Library",component:()=>Hn(()=>import("./Library-fdf70fa7.js"),["assets/Library-fdf70fa7.js","assets/Library-f395313a.css"])},{path:"/loginRegister",name:"LoginRegister",component:()=>Hn(()=>import("./LoginRegister-83971ccf.js"),[])},{path:"/course/:id/:title",name:"course.show",component:()=>Hn(()=>import("./CourseShow-e8d0819a.js"),["assets/CourseShow-e8d0819a.js","assets/verificar-a2122b4b.js"])},{path:"/:patchMatch(.*)*",name:"NotFound",component:()=>Hn(()=>import("./NotFound-d3e81a43.js"),[])}],yI=OT({history:zw(),routes:_I,linkActiveClass:"active-link"}),vI={namespaced:!0,state:{items:[],checkoutStatus:null},getters:{cartCount(t){return t.items.length},cartCourses(t,e,n,s){return t.items.map(i=>{console.log(n.courses.items);const r=n.courses.items.find(o=>o.id===i);return console.log(r),{id:r.id,title:r.title,author:r.author,price:r.price,duration:r.duration,language:r.language,subtitle:r.subtitle,image:r.image}})},cartTotal(t,e,n,s){return s["cart/cartCourses"].reduce((i,r)=>i+r.price,0)}},mutations:{pushCourseToCart(t,e){t.items.push(e)},deleteCourseInCart(t,e){t.items=t.items.filter(n=>n!=e)},setCheckoutStatus(t,e){t.checkoutStatus=e},emptyCart(t){t.items=[]}},actions:{addCourseToCart({state:t,getters:e,commit:n,rootState:s,rootGetters:i},r){console.log("addCourseToCart"),t.items.find(a=>a===r.id)||n("pushCourseToCart",r.id)},eliminateCourseInCart({commit:t},e){t("deleteCourseInCart",e)},checkout({state:t,commit:e}){e("emptyCart"),e("setCheckoutStatus","success")}}},EI={namespaced:!0,state(){return{items:[]}},getters:{subtitledCourses(t){return t.items.filter(e=>e.subtitle==!0)},courses(t){return t.items}},mutations:{setCourses(t,e){t.items=e}},actions:{async fetchCourses({commit:t}){const e=await fetch("https://api-node.up.railway.app/api/v1/productos/",{method:"GET",headers:{"Content-Type":"application/json"}}),n=Object.values(await e.json());t("setCourses",n),console.log("fetchCourses hecho")}}},wI={namespaced:!0,state(){return{userData:null,message:null}},getters:{userCourses(t,e,n,s){return t.userData.courses.map(i=>{const r=n.courses.items.find(o=>o.id==i);if(r)return{id:r.id,title:r.title,author:r.author,duration:r.duration,level:r.level,area:r.area,subarea:r.subarea,image:r.image}})}},mutations:{setUser(t,e){t.userData=e,console.log("setting user"+e)},changeName(t,e){t.name=e},changeEmail(t,e){t.email=e},resetUser(t){t.userData=null},setMessage(t,e){t.message=e},resetMessage(t,e){t.message=null},pushCourseToUser(t,e){console.log("pushCourseToUser"),console.log(e),console.log(t.userData.courses),t.userData.courses=t.userData.courses.concat(e),console.log(t.userData.courses),localStorage.setItem("user",JSON.stringify(t.userData))}},actions:{addCoursesToUser({commit:t},e){console.log("addCoursesToUser"),console.log(e),t("pushCourseToUser",e)},async localStorageUser({commit:t}){console.log("localStorageUser");const e=JSON.parse(localStorage.getItem("user"));console.log(e),await t("setUser",e)},async doLogin({commit:t},{inputEmail:e,inputPassword:n}){t("resetMessage");try{const s=await fetch("https://api-node.up.railway.app/api/v1/users/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:n})});if(s.status!==200)await t("setMessage","No es posible iniciar sesión");else{const i=await s.json(),r=i.user;console.log("User: "+r),localStorage.setItem("user",JSON.stringify(r)),await t("setUser",r),console.log(i),await t("setMessage","Ha iniciado sesión")}}catch{}},async doRegister({commit:t},{inputName:e,inputEmail:n,inputPassword:s}){t("resetMessage");try{(await fetch("https://api-node.up.railway.app/api/v1/users/signup",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:e,email:n,password:s})})).status===401?await t("setMessage","Email en uso"):await t("setMessage","Usuario creado")}catch(i){console.error(i.message)}},resetMessage(){commit("resetMessage")},async logout({commit:t}){try{const n=await(await fetch("https://api-node.up.railway.app/api/v1/users/logout",{method:"DELETE",credentials:"include"})).json();console.log(n)}catch{}localStorage.removeItem("user"),await t("resetUser")}}},TI=uw({modules:{cart:vI,courses:EI,user:wI},state(){return{fetchImageURL:"https://api-node.up.railway.app/api/v1/images/"}},getters:{},actions:{},mutations:{}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=function(t,e){if(!t)throw ei(e)},ei=function(t){return new Error("Firebase Database ("+Gp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},II=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Vo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):II(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw Error();const f=r<<2|a>>4;if(s.push(f),c!==64){const g=a<<4&240|c>>2;if(s.push(g),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},qp=function(t){const e=zp(t);return Vo.encodeByteArray(e,!0)},Zr=function(t){return qp(t).replace(/\./g,"")},eo=function(t){try{return Vo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t){return Yp(void 0,t)}function Yp(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!CI(n)||(t[n]=Yp(t[n],e[n]));return t}function CI(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI=()=>SI().__FIREBASE_DEFAULTS__,AI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&eo(t[1]);return e&&JSON.parse(e)},Sc=()=>{try{return RI()||AI()||kI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xp=t=>{var e,n;return(n=(e=Sc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},NI=t=>{const e=Xp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},OI=()=>{var t;return(t=Sc())===null||t===void 0?void 0:t.config},Jp=t=>{var e;return(e=Sc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Zr(JSON.stringify(n)),Zr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function DI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xI(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zp(){return Gp.NODE_ADMIN===!0}function eg(){try{return typeof indexedDB=="object"}catch{return!1}}function MI(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI="FirebaseError";class Yt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=LI,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ti.prototype.create)}}class ti{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?FI(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Yt(i,a,s)}}function FI(t,e){return t.replace(UI,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const UI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){return JSON.parse(t)}function Ue(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ji(eo(r[0])||""),n=ji(eo(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},$I=function(t){const e=tg(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},BI=function(t){const e=tg(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Vs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function _l(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function to(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function no(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Uh(r)&&Uh(o)){if(!no(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Uh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function HI(t,e){const n=new WI(t,e);return n.subscribe.bind(n)}class WI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");VI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Aa),i.error===void 0&&(i.error=Aa),i.complete===void 0&&(i.complete=Aa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Aa(){}function KI(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,A(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ko=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t){return t&&t._delegate?t._delegate:t}class Dt{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Bi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YI(e))try{this.getOrInitializeService({instanceIdentifier:Vn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vn){return this.instances.has(e)}getOptions(e=Vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:qI(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Vn){return this.component?this.component.multipleInstances?e:Vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qI(t){return t===Vn?void 0:t}function YI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const JI={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},QI=ie.INFO,ZI={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},eb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=ZI[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tr{constructor(e){this.name=e,this._logLevel=QI,this._logHandler=eb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const tb=(t,e)=>e.some(n=>t instanceof n);let $h,Bh;function nb(){return $h||($h=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sb(){return Bh||(Bh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ng=new WeakMap,yl=new WeakMap,sg=new WeakMap,ka=new WeakMap,Ac=new WeakMap;function ib(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(An(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ng.set(n,t)}).catch(()=>{}),Ac.set(e,t),e}function rb(t){if(yl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});yl.set(t,e)}let vl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||sg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ob(t){vl=t(vl)}function ab(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Na(this),e,...n);return sg.set(s,e.sort?e.sort():[e]),An(s)}:sb().includes(t)?function(...e){return t.apply(Na(this),e),An(ng.get(this))}:function(...e){return An(t.apply(Na(this),e))}}function lb(t){return typeof t=="function"?ab(t):(t instanceof IDBTransaction&&rb(t),tb(t,nb())?new Proxy(t,vl):t)}function An(t){if(t instanceof IDBRequest)return ib(t);if(ka.has(t))return ka.get(t);const e=lb(t);return e!==t&&(ka.set(t,e),Ac.set(e,t)),e}const Na=t=>Ac.get(t);function cb(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=An(o);return s&&o.addEventListener("upgradeneeded",l=>{s(An(o.result),l.oldVersion,l.newVersion,An(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const ub=["get","getKey","getAll","getAllKeys","count"],hb=["put","add","delete","clear"],Oa=new Map;function jh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oa.get(e))return Oa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=hb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ub.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Oa.set(e,r),r}ob(t=>({...t,get:(e,n,s)=>jh(e,n)||t.get(e,n,s),has:(e,n)=>!!jh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(db(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function db(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const El="@firebase/app",Hh="0.9.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os=new tr("@firebase/app"),pb="@firebase/app-compat",gb="@firebase/analytics-compat",mb="@firebase/analytics",_b="@firebase/app-check-compat",yb="@firebase/app-check",vb="@firebase/auth",Eb="@firebase/auth-compat",wb="@firebase/database",Tb="@firebase/database-compat",Ib="@firebase/functions",bb="@firebase/functions-compat",Cb="@firebase/installations",Sb="@firebase/installations-compat",Rb="@firebase/messaging",Ab="@firebase/messaging-compat",kb="@firebase/performance",Nb="@firebase/performance-compat",Ob="@firebase/remote-config",Pb="@firebase/remote-config-compat",Db="@firebase/storage",xb="@firebase/storage-compat",Mb="@firebase/firestore",Lb="@firebase/firestore-compat",Fb="firebase",Ub="9.17.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="[DEFAULT]",$b={[El]:"fire-core",[pb]:"fire-core-compat",[mb]:"fire-analytics",[gb]:"fire-analytics-compat",[yb]:"fire-app-check",[_b]:"fire-app-check-compat",[vb]:"fire-auth",[Eb]:"fire-auth-compat",[wb]:"fire-rtdb",[Tb]:"fire-rtdb-compat",[Ib]:"fire-fn",[bb]:"fire-fn-compat",[Cb]:"fire-iid",[Sb]:"fire-iid-compat",[Rb]:"fire-fcm",[Ab]:"fire-fcm-compat",[kb]:"fire-perf",[Nb]:"fire-perf-compat",[Ob]:"fire-rc",[Pb]:"fire-rc-compat",[Db]:"fire-gcs",[xb]:"fire-gcs-compat",[Mb]:"fire-fst",[Lb]:"fire-fst-compat","fire-js":"fire-js",[Fb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new Map,Tl=new Map;function Bb(t,e){try{t.container.addComponent(e)}catch(n){os.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gt(t){const e=t.name;if(Tl.has(e))return os.debug(`There were multiple attempts to register component ${e}.`),!1;Tl.set(e,t);for(const n of so.values())Bb(n,t);return!0}function kc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kn=new ti("app","Firebase",jb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Dt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=Ub;function ig(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:wl,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw kn.create("bad-app-name",{appName:String(i)});if(n||(n=OI()),!n)throw kn.create("no-options");const r=so.get(i);if(r){if(no(n,r.options)&&no(s,r.config))return r;throw kn.create("duplicate-app",{appName:i})}const o=new XI(i);for(const l of Tl.values())o.addComponent(l);const a=new Hb(n,s,o);return so.set(i,a),a}function Nc(t=wl){const e=so.get(t);if(!e&&t===wl)return ig();if(!e)throw kn.create("no-app",{appName:t});return e}function ut(t,e,n){var s;let i=(s=$b[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),os.warn(a.join(" "));return}Gt(new Dt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="firebase-heartbeat-database",Vb=1,Hi="firebase-heartbeat-store";let Pa=null;function rg(){return Pa||(Pa=cb(Wb,Vb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Hi)}}}).catch(t=>{throw kn.create("idb-open",{originalErrorMessage:t.message})})),Pa}async function Kb(t){try{return(await rg()).transaction(Hi).objectStore(Hi).get(og(t))}catch(e){if(e instanceof Yt)os.warn(e.message);else{const n=kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});os.warn(n.message)}}}async function Wh(t,e){try{const s=(await rg()).transaction(Hi,"readwrite");return await s.objectStore(Hi).put(e,og(t)),s.done}catch(n){if(n instanceof Yt)os.warn(n.message);else{const s=kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});os.warn(s.message)}}}function og(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=1024,zb=30*24*60*60*1e3;class qb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Xb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=zb}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vh(),{heartbeatsToSend:n,unsentEntries:s}=Yb(this._heartbeatsCache.heartbeats),i=Zr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Vh(){return new Date().toISOString().substring(0,10)}function Yb(t,e=Gb){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Kh(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Kh(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Xb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eg()?MI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Kb(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Kh(t){return Zr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t){Gt(new Dt("platform-logger",e=>new fb(e),"PRIVATE")),Gt(new Dt("heartbeat",e=>new qb(e),"PRIVATE")),ut(El,Hh,t),ut(El,Hh,"esm2017"),ut("fire-js","")}Jb("");function Oc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function ag(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qb=ag,lg=new ti("auth","Firebase",ag());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=new tr("@firebase/auth");function Br(t,...e){Gh.logLevel<=ie.ERROR&&Gh.error(`Auth (${ds}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t,...e){throw Pc(t,...e)}function Wt(t,...e){return Pc(t,...e)}function Zb(t,e,n){const s=Object.assign(Object.assign({},Qb()),{[e]:n});return new ti("auth","Firebase",s).create(e,{appName:t.name})}function Pc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return lg.create(t,...e)}function W(t,e,...n){if(!t)throw Pc(e,...n)}function en(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Br(e),new Error(e)}function cn(t,e){t||en(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=new Map;function tn(t){cn(t instanceof Function,"Expected a class definition");let e=zh.get(t);return e?(cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zh.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t,e){const n=kc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(no(r,e??{}))return i;ln(i,"already-initialized")}return n.initialize({options:e})}function tC(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nC(){return qh()==="http:"||qh()==="https:"}function qh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nC()||DI()||"connection"in navigator)?navigator.onLine:!0}function iC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n){this.shortDelay=e,this.longDelay=n,cn(n>e,"Short delay should be less than long delay!"),this.isMobile=Rc()||Qp()}get(){return sC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t,e){cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;en("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;en("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;en("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=new nr(3e4,6e4);function aC(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Go(t,e,n,s,i={}){return ug(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=ni(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),cg.fetch()(hg(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function ug(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},rC),e);try{const i=new cC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Sr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Sr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Sr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Zb(t,u,c);ln(t,u)}}catch(i){if(i instanceof Yt)throw i;ln(t,"network-request-failed")}}async function lC(t,e,n,s,i={}){const r=await Go(t,e,n,s,i);return"mfaPendingCredential"in r&&ln(t,"multi-factor-auth-required",{_serverResponse:r}),r}function hg(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Dc(t.config,i):`${t.config.apiScheme}://${i}`}class cC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Wt(this.auth,"network-request-failed")),oC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Wt(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(t,e){return Go(t,"POST","/v1/accounts:delete",e)}async function hC(t,e){return Go(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fC(t,e=!1){const n=xn(t),s=await n.getIdToken(e),i=xc(s);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ai(Da(i.auth_time)),issuedAtTime:Ai(Da(i.iat)),expirationTime:Ai(Da(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Da(t){return Number(t)*1e3}function xc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Br("JWT malformed, contained fewer than 3 sections"),null;try{const i=eo(n);return i?JSON.parse(i):(Br("Failed to decode base64 JWT payload"),null)}catch(i){return Br("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dC(t){const e=xc(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Yt&&pC(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function pC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ai(this.lastLoginAt),this.creationTime=Ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Wi(t,hC(n,{idToken:s}));W(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?yC(r.providerUserInfo):[],a=_C(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new fg(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function mC(t){const e=xn(t);await io(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _C(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function yC(t){return t.map(e=>{var{providerId:n}=e,s=Oc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(t,e){const n=await ug(t,{},async()=>{const s=ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=hg(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cg.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await vC(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Vi;return s&&(W(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(W(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(W(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vi,this.toJSON())}_performRefresh(){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ss{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Oc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new fg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Wi(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fC(this,e)}reload(){return mC(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ss(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await io(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wi(this,uC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,S=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,L=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:F,isAnonymous:X,providerData:pe,stsTokenManager:Re}=n;W(k&&Re,e,"internal-error");const j=Vi.fromJSON(this.name,Re);W(typeof k=="string",e,"internal-error"),vn(h,e.name),vn(f,e.name),W(typeof F=="boolean",e,"internal-error"),W(typeof X=="boolean",e,"internal-error"),vn(g,e.name),vn(m,e.name),vn(w,e.name),vn(S,e.name),vn(R,e.name),vn(L,e.name);const ae=new ss({uid:k,auth:e,email:f,emailVerified:F,displayName:h,isAnonymous:X,photoURL:m,phoneNumber:g,tenantId:w,stsTokenManager:j,createdAt:R,lastLoginAt:L});return pe&&Array.isArray(pe)&&(ae.providerData=pe.map(se=>Object.assign({},se))),S&&(ae._redirectEventId=S),ae}static async _fromIdTokenResponse(e,n,s=!1){const i=new Vi;i.updateFromServerResponse(n);const r=new ss({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await io(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dg.type="NONE";const Yh=dg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t,e,n){return`firebase:${t}:${e}:${n}`}class xs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=jr(this.userKey,i.apiKey,r),this.fullPersistenceKey=jr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ss._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new xs(tn(Yh),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||tn(Yh);const o=jr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=ss._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new xs(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new xs(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(yg(e))return"Blackberry";if(vg(e))return"Webos";if(Mc(e))return"Safari";if((e.includes("chrome/")||gg(e))&&!e.includes("edge/"))return"Chrome";if(_g(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function pg(t=Ze()){return/firefox\//i.test(t)}function Mc(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gg(t=Ze()){return/crios\//i.test(t)}function mg(t=Ze()){return/iemobile/i.test(t)}function _g(t=Ze()){return/android/i.test(t)}function yg(t=Ze()){return/blackberry/i.test(t)}function vg(t=Ze()){return/webos/i.test(t)}function zo(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function EC(t=Ze()){var e;return zo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wC(){return xI()&&document.documentMode===10}function Eg(t=Ze()){return zo(t)||_g(t)||vg(t)||yg(t)||/windows phone/i.test(t)||mg(t)}function TC(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t,e=[]){let n;switch(t){case"Browser":n=Xh(Ze());break;case"Worker":n=`${Xh(Ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jh(this),this.idTokenSubscription=new Jh(this),this.beforeStateQueue=new IC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lg,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tn(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await xs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await io(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xn(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ti("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return W(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Lc(t){return xn(t)}class Jh{constructor(e){this.auth=e,this.observer=null,this.addObserver=HI(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function CC(t,e,n){const s=Lc(t);W(s._canInitEmulator,s,"emulator-config-failed"),W(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=Tg(e),{host:o,port:a}=SC(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${r}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||RC()}function Tg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SC(t){const e=Tg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Qh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Qh(o)}}}function Qh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return en("not implemented")}_getIdTokenResponse(e){return en("not implemented")}_linkToIdToken(e,n){return en("not implemented")}_getReauthenticationResolver(e){return en("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ms(t,e){return lC(t,"POST","/v1/accounts:signInWithIdp",aC(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC="http://localhost";class as extends Ig{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ln("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Oc(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new as(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ms(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ms(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ms(e,n)}buildRequest(){const e={requestUri:AC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ni(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends bg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends sr{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return as._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return In.credential(n,s)}catch{return null}}}In.GOOGLE_SIGN_IN_METHOD="google.com";In.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends sr{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends sr{constructor(){super("twitter.com")}static credential(e,n){return as._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Cn.credential(n,s)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await ss._fromIdTokenResponse(e,s,i),o=Zh(s);return new Ks({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Zh(s);return new Ks({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Zh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro extends Yt{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,ro.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new ro(e,n,s,i)}}function Cg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ro._fromErrorAndOperation(t,r,e,s):r})}async function kC(t,e,n=!1){const s=await Wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ks._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Wi(t,Cg(s,i,e,t),n);W(r.idToken,s,"internal-error");const o=xc(r.idToken);W(o,s,"internal-error");const{sub:a}=o;return W(t.uid===a,s,"user-mismatch"),Ks._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ln(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OC(t,e,n=!1){const s="signIn",i=await Cg(t,s,e),r=await Ks._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function Sg(t,e,n,s){return xn(t).onIdTokenChanged(e,n,s)}function PC(t,e,n){return xn(t).beforeAuthStateChanged(e,n)}const oo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(oo,"1"),this.storage.removeItem(oo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DC(){const t=Ze();return Mc(t)||zo(t)}const xC=1e3,MC=10;class Ag extends Rg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=DC()&&TC(),this.fallbackToPolling=Eg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);wC()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,MC):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},xC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ag.type="LOCAL";const LC=Ag;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg extends Rg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}kg.type="SESSION";const Ng=kg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new qo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await FC(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Fc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return window}function $C(t){Vt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function BC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function HC(){return Og()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="firebaseLocalStorageDb",WC=1,ao="firebaseLocalStorage",Dg="fbase_key";class ir{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yo(t,e){return t.transaction([ao],e?"readwrite":"readonly").objectStore(ao)}function VC(){const t=indexedDB.deleteDatabase(Pg);return new ir(t).toPromise()}function bl(){const t=indexedDB.open(Pg,WC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(ao,{keyPath:Dg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(ao)?e(s):(s.close(),await VC(),e(await bl()))})})}async function ef(t,e,n){const s=Yo(t,!0).put({[Dg]:e,value:n});return new ir(s).toPromise()}async function KC(t,e){const n=Yo(t,!1).get(e),s=await new ir(n).toPromise();return s===void 0?null:s.value}function tf(t,e){const n=Yo(t,!0).delete(e);return new ir(n).toPromise()}const GC=800,zC=3;class xg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>zC)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Og()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qo._getInstance(HC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await BC(),!this.activeServiceWorker)return;this.sender=new UC(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bl();return await ef(e,oo,"1"),await tf(e,oo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ef(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>KC(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Yo(i,!1).getAll();return new ir(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),GC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xg.type="LOCAL";const qC=xg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function XC(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Wt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",YC().appendChild(s)})}function JC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new nr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(t,e){return e?tn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc extends Ig{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ms(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ZC(t){return OC(t.auth,new Uc(t),t.bypassAuthState)}function e0(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),NC(n,new Uc(t),t.bypassAuthState)}async function t0(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),kC(n,new Uc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ZC;case"linkViaPopup":case"linkViaRedirect":return t0;case"reauthViaPopup":case"reauthViaRedirect":return e0;default:ln(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=new nr(2e3,1e4);class bs extends Mg{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=Fc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Wt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,n0.get())};e()}}bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0="pendingRedirect",Hr=new Map;class i0 extends Mg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Hr.get(this.auth._key());if(!e){try{const s=await r0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Hr.set(this.auth._key(),e)}return this.bypassAuthState||Hr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function r0(t,e){const n=l0(e),s=a0(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function o0(t,e){Hr.set(t._key(),e)}function a0(t){return tn(t._redirectPersistence)}function l0(t){return jr(s0,t.config.apiKey,t.name)}async function c0(t,e,n=!1){const s=Lc(t),i=QC(s,e),o=await new i0(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0=10*60*1e3;class h0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Lg(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Wt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=u0&&this.cachedEventUids.clear(),this.cachedEventUids.has(nf(e))}saveEventToCache(e){this.cachedEventUids.add(nf(e)),this.lastProcessedEventTime=Date.now()}}function nf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function f0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d0(t,e={}){return Go(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g0=/^https?/;async function m0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await d0(t);for(const n of e)try{if(_0(n))return}catch{}ln(t,"unauthorized-domain")}function _0(t){const e=Il(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!g0.test(n))return!1;if(p0.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=new nr(3e4,6e4);function sf(){const t=Vt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function v0(t){return new Promise((e,n)=>{var s,i,r;function o(){sf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sf(),n(Wt(t,"network-request-failed"))},timeout:y0.get()})}if(!((i=(s=Vt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Vt().gapi)===null||r===void 0)&&r.load)o();else{const a=JC("iframefcb");return Vt()[a]=()=>{gapi.load?o():n(Wt(t,"network-request-failed"))},XC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Wr=null,e})}let Wr=null;function E0(t){return Wr=Wr||v0(t),Wr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=new nr(5e3,15e3),T0="__/auth/iframe",I0="emulator/auth/iframe",b0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},C0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function S0(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dc(e,I0):`https://${t.config.authDomain}/${T0}`,s={apiKey:e.apiKey,appName:t.name,v:ds},i=C0.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${ni(s).slice(1)}`}async function R0(t){const e=await E0(t),n=Vt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:S0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:b0,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Wt(t,"network-request-failed"),a=Vt().setTimeout(()=>{r(o)},w0.get());function l(){Vt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},k0=500,N0=600,O0="_blank",P0="http://localhost";class rf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function D0(t,e,n,s=k0,i=N0){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},A0),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ze().toLowerCase();n&&(a=gg(c)?O0:n),pg(c)&&(e=e||P0,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[g,m])=>`${f}${g}=${m},`,"");if(EC(c)&&a!=="_self")return x0(e||"",a),new rf(null);const h=window.open(e||"",a,u);W(h,t,"popup-blocked");try{h.focus()}catch{}return new rf(h)}function x0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="__/auth/handler",L0="emulator/auth/handler";function of(t,e,n,s,i,r){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:ds,eventId:i};if(e instanceof bg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_l(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(r||{}))o[l]=c}if(e instanceof sr){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${F0(t)}?${ni(a).slice(1)}`}function F0({config:t}){return t.emulator?Dc(t,L0):`https://${t.authDomain}/${M0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="webStorageSupport";class U0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ng,this._completeRedirectFn=c0,this._overrideRedirectResult=o0}async _openPopup(e,n,s,i){var r;cn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=of(e,n,s,Il(),i);return D0(e,o,Fc())}async _openRedirect(e,n,s,i){return await this._originValidation(e),$C(of(e,n,s,Il(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(cn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await R0(e),s=new h0(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xa,{type:xa},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[xa];o!==void 0&&n(!!o),ln(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=m0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Eg()||Mc()||zo()}}const $0=U0;var af="@firebase/auth",lf="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function H0(t){Gt(new Dt("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=s.options;return((a,l)=>{W(r&&!r.includes(":"),"invalid-api-key",{appName:a.name}),W(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:r,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wg(t)},u=new bC(a,l,c);return tC(u,n),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Gt(new Dt("auth-internal",e=>{const n=Lc(e.getProvider("auth").getImmediate());return(s=>new B0(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ut(af,lf,j0(t)),ut(af,lf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=5*60,V0=Jp("authIdTokenMaxAge")||W0;let cf=null;const K0=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>V0)return;const i=n==null?void 0:n.token;cf!==i&&(cf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function G0(t=Nc()){const e=kc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=eC(t,{popupRedirectResolver:$0,persistence:[qC,LC,Ng]}),s=Jp("authTokenSyncURL");if(s){const r=K0(s);PC(n,r,()=>r(n.currentUser)),Sg(n,o=>r(o))}const i=Xp("auth");return i&&CC(n,`http://${i}`),n}H0("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0=new Map,q0={activated:!1,tokenObservers:[]};function zt(t){return z0.get(t)||Object.assign({},q0)}const uf={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Bi,await X0(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Bi,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function X0(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0={["already-initialized"]:"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.",["use-before-activation"]:"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.",["fetch-network-error"]:"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.",["fetch-parse-error"]:"Fetch client could not parse response. Original error: {$originalErrorMessage}.",["fetch-status-error"]:"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["recaptcha-error"]:"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},lo=new ti("appCheck","AppCheck",J0);function Q0(t){if(!zt(t).activated)throw lo.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="firebase-app-check-database",eS=1,Cl="firebase-app-check-store";let Rr=null;function tS(){return Rr||(Rr=new Promise((t,e)=>{try{const n=indexedDB.open(Z0,eS);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(lo.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Cl,{keyPath:"compositeKey"})}}}catch(n){e(lo.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Rr)}function nS(t,e){return sS(iS(t),e)}async function sS(t,e){const s=(await tS()).transaction(Cl,"readwrite"),r=s.objectStore(Cl).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(lo.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function iS(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=new tr("@firebase/app-check");function hf(t,e){return eg()?nS(t,e).catch(n=>{Sl.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS={error:"UNKNOWN_ERROR"};function oS(t){return Vo.encodeString(JSON.stringify(t),!1)}async function Rl(t,e=!1){const n=t.app;Q0(n);const s=zt(n);let i=s.token,r;if(i&&!vi(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(vi(l)?i=l:await hf(n,void 0))}if(!e&&i&&vi(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await zt(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?Sl.warn(l.message):Sl.error(l),r=l}let a;return i?r?vi(i)?a={token:i.token,internalError:r}:a=df(r):(a={token:i.token},s.token=i,await hf(n,i)):a=df(r),o&&cS(n,a),a}function aS(t,e,n,s){const{app:i}=t,r=zt(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&vi(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),ff(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>ff(t))}function Fg(t,e){const n=zt(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function ff(t){const{app:e}=t,n=zt(e);let s=n.tokenRefresher;s||(s=lS(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function lS(t){const{app:e}=t;return new Y0(async()=>{const n=zt(e);let s;if(n.token?s=await Rl(t,!0):s=await Rl(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=zt(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},uf.RETRIAL_MIN_WAIT,uf.RETRIAL_MAX_WAIT)}function cS(t,e){const n=zt(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function vi(t){return t.expireTimeMillis-Date.now()>0}function df(t){return{token:oS(rS),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=zt(this.app);for(const n of e)Fg(this.app,n.next);return Promise.resolve()}}function hS(t,e){return new uS(t,e)}function fS(t){return{getToken:e=>Rl(t,e),addTokenListener:e=>aS(t,"INTERNAL",e),removeTokenListener:e=>Fg(t.app,e)}}const dS="@firebase/app-check",pS="0.6.3",gS="app-check",pf="app-check-internal";function mS(){Gt(new Dt(gS,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return hS(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(pf).initialize()})),Gt(new Dt(pf,t=>{const e=t.getProvider("app-check").getImmediate();return fS(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),ut(dS,pS)}mS();var _S="firebase",yS="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ut(_S,yS,"app");const Ug=Symbol("firebaseApp");function vS(t){return yp()&&Ht(Ug,null)||Nc(t)}const Ar=new WeakMap;function ES(t,e){if(!Ar.has(t)){const n=_y(!0);Ar.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),Ar.delete(t)}}return Ar.get(t)}const wS=new WeakMap,kr=new WeakMap;function TS(t){const e=vS(t);if(!kr.has(e)){let n;const i=[new Promise(r=>{n=r}),r=>{kr.set(e,r),n(r.value)}];kr.set(e,i)}return kr.get(e)}function IS(t,e){const n=G0(e);Sg(n,s=>{const i=TS();t.value=s,Array.isArray(i)&&i[1](t)})}const gf="@firebase/database",mf="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $g="";function bS(t){$g=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ji(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new CS(e)}}catch{}return new SS},Jn=Bg("localStorage"),Al=Bg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new tr("@firebase/database"),RS=function(){let t=1;return function(){return t++}}(),jg=function(t){const e=GI(t),n=new jI;n.update(e);const s=n.digest();return Vo.encodeByteArray(s)},rr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=rr.apply(null,s):typeof s=="object"?e+=Ue(s):e+=s,e+=" "}return e};let is=null,_f=!0;const AS=function(t,e){A(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ls.logLevel=ie.VERBOSE,is=Ls.log.bind(Ls),e&&Al.set("logging_enabled",!0)):typeof t=="function"?is=t:(is=null,Al.remove("logging_enabled"))},Ge=function(...t){if(_f===!0&&(_f=!1,is===null&&Al.get("logging_enabled")===!0&&AS(!0)),is){const e=rr.apply(null,t);is(e)}},or=function(t){return function(...e){Ge(t,...e)}},kl=function(...t){const e="FIREBASE INTERNAL ERROR: "+rr(...t);Ls.error(e)},ls=function(...t){const e=`FIREBASE FATAL ERROR: ${rr(...t)}`;throw Ls.error(e),new Error(e)},ht=function(...t){const e="FIREBASE WARNING: "+rr(...t);Ls.warn(e)},kS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hg=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},NS=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Gs="[MIN_NAME]",cs="[MAX_NAME]",si=function(t,e){if(t===e)return 0;if(t===Gs||e===cs)return-1;if(e===Gs||t===cs)return 1;{const n=yf(t),s=yf(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},OS=function(t,e){return t===e?0:t<e?-1:1},di=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ue(e))},$c=function(t){if(typeof t!="object"||t===null)return Ue(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ue(e[s]),n+=":",n+=$c(t[e[s]]);return n+="}",n},Wg=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function vt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Vg=function(t){A(!Hg(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},PS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},DS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},xS=new RegExp("^-?(0*)\\d{1,10}$"),MS=-2147483648,LS=2147483647,yf=function(t){if(xS.test(t)){const e=Number(t);if(e>=MS&&e<=LS)return e}return null},ar=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ht("Exception was thrown by user callback.",n),e},Math.floor(0))}},FS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ki=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ht(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ht(e)}}class Nl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Nl.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="5",Kg="v",Gg="s",zg="r",qg="f",Yg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xg="ls",Jg="p",Ol="ac",Qg="websocket",Zg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Jn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Jn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function jS(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function em(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let s;if(e===Qg)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Zg)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);jS(t)&&(n.ns=t.namespace);const i=[];return vt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(){this.counters_={}}incrementCounter(e,n=1){dn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return bI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma={},La={};function jc(t){const e=t.toString();return Ma[e]||(Ma[e]=new HS),Ma[e]}function WS(t,e){const n=t.toString();return La[n]||(La[n]=e()),La[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ar(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf="start",KS="close",GS="pLPCommand",zS="pRTLPCB",tm="id",nm="pw",sm="ser",qS="cb",YS="seg",XS="ts",JS="d",QS="dframe",im=1870,rm=30,ZS=im-rm,eR=25e3,tR=3e4;class Cs{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=or(e),this.stats_=jc(n),this.urlFn=l=>(this.appCheckToken&&(l[Ol]=this.appCheckToken),em(n,Zg,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new VS(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(tR)),NS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hc((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===vf)this.id=a,this.password=l;else if(o===KS)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[vf]="t",s[sm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[qS]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Kg]=Bc,this.transportSessionId&&(s[Gg]=this.transportSessionId),this.lastSessionId&&(s[Xg]=this.lastSessionId),this.applicationId&&(s[Jg]=this.applicationId),this.appCheckToken&&(s[Ol]=this.appCheckToken),typeof location<"u"&&location.hostname&&Yg.test(location.hostname)&&(s[zg]=qg);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cs.forceAllow_=!0}static forceDisallow(){Cs.forceDisallow_=!0}static isAvailable(){return Cs.forceAllow_?!0:!Cs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!PS()&&!DS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=qp(n),i=Wg(s,ZS);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[QS]="t",s[tm]=e,s[nm]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Hc{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=RS(),window[GS+this.uniqueCallbackIdentifier]=e,window[zS+this.uniqueCallbackIdentifier]=n,this.myIFrame=Hc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ge("frame writing exception"),a.stack&&Ge(a.stack),Ge(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ge("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[tm]=this.myID,e[nm]=this.myPW,e[sm]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+rm+s.length<=im;){const o=this.pendingSegs.shift();s=s+"&"+YS+i+"="+o.seg+"&"+XS+i+"="+o.ts+"&"+JS+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(eR)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ge("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=16384,sR=45e3;let co=null;typeof MozWebSocket<"u"?co=MozWebSocket:typeof WebSocket<"u"&&(co=WebSocket);class St{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=or(this.connId),this.stats_=jc(n),this.connURL=St.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Kg]=Bc,typeof location<"u"&&location.hostname&&Yg.test(location.hostname)&&(o[zg]=qg),n&&(o[Gg]=n),s&&(o[Xg]=s),i&&(o[Ol]=i),r&&(o[Jg]=r),em(e,Qg,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Jn.set("previous_websocket_failure",!0);try{let s;Zp(),this.mySock=new co(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){St.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&co!==null&&!St.forceDisallow_}static previouslyFailed(){return Jn.isInMemoryStorage||Jn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Jn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ji(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Wg(n,nR);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sR))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}St.responsesRequiredToBeHealthy=2;St.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Cs,St]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=St&&St.isAvailable();let s=n&&!St.previouslyFailed();if(e.webSocketOnly&&(n||ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[St];else{const i=this.transports_=[];for(const r of Ki.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ki.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ki.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=6e4,rR=5e3,oR=10*1024,aR=100*1024,Fa="t",Ef="d",lR="s",wf="r",cR="e",Tf="o",If="a",bf="n",Cf="p",uR="h";class hR{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=or("c:"+this.id+":"),this.transportManager_=new Ki(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ki(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>aR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>oR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Fa in e){const n=e[Fa];n===If?this.upgradeIfSecondaryHealthy_():n===wf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Tf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=di("t",e),s=di("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Cf,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:If,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:bf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=di("t",e),s=di("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=di(Fa,e);if(Ef in e){const s=e[Ef];if(n===uR){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===bf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===lR?this.onConnectionShutdown_(s):n===wf?this.onReset_(s):n===cR?kl("Server Error: "+s):n===Tf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kl("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Bc!==s&&ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ki(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(iR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ki(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(rR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Cf,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Jn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo extends am{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Rc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new uo}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=32,Rf=768;class Te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function he(){return new Te("")}function Q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Dn(t){return t.pieces_.length-t.pieceNum_}function Ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Te(t.pieces_,e)}function lm(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function fR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function cm(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function um(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Te(e,0)}function Me(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Te(n,0)}function Y(t){return t.pieceNum_>=t.pieces_.length}function mt(t,e){const n=Q(t),s=Q(e);if(n===null)return e;if(n===s)return mt(Ee(t),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function hm(t,e){if(Dn(t)!==Dn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function At(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Dn(t)>Dn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class dR{constructor(e,n){this.errorPrefix_=n,this.parts_=cm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ko(this.parts_[s]);fm(this)}}function pR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ko(e),fm(t)}function gR(t){const e=t.parts_.pop();t.byteLength_-=Ko(e),t.parts_.length>0&&(t.byteLength_-=1)}function fm(t){if(t.byteLength_>Rf)throw new Error(t.errorPrefix_+"has a key path longer than "+Rf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Sf)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sf+") or object contains a cycle "+Kn(t))}function Kn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc extends am{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Wc}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=1e3,mR=60*5*1e3,Af=30*1e3,_R=1.3,yR=3e4,vR="server_kill",kf=3;class rn extends om{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=rn.nextPersistentConnectionId_++,this.log_=or("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=pi,this.maxReconnectDelay_=mR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Zp())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&uo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ue(r)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Bi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;rn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dn(e,"w")){const s=Vs(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||BI(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Af)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=$I(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ue(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):kl("Unrecognized action received from server: "+Ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=pi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=pi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yR&&(this.reconnectDelay_=pi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*_R)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+rn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){A(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ge("getToken() completed but was canceled"):(Ge("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new hR(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{ht(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(vR)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ht(h),l())}}}interrupt(e){Ge("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ge("Resuming connection for reason: "+e),delete this.interruptReasons_[e],_l(this.interruptReasons_)&&(this.reconnectDelay_=pi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>$c(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Te(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ge("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=kf&&(this.reconnectDelay_=Af,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ge("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=kf&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+$g.replace(/\./g,"-")]=1,Rc()?e["framework.cordova"]=1:Qp()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=uo.getInstance().currentlyOnline();return _l(this.interruptReasons_)&&e}}rn.nextPersistentConnectionId_=0;rn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Z(Gs,e),i=new Z(Gs,n);return this.compare(s,i)!==0}minPost(){return Z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nr;class dm extends Xo{static get __EMPTY_NODE(){return Nr}static set __EMPTY_NODE(e){Nr=e}compare(e,n){return si(e.name,n.name)}isDefinedOn(e){throw ei("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Z.MIN}maxPost(){return new Z(cs,Nr)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new Z(e,Nr)}toString(){return".key"}}const Fs=new dm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??xe.RED,this.left=i??rt.EMPTY_NODE,this.right=r??rt.EMPTY_NODE}copy(e,n,s,i,r){return new xe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xe.RED=!0;xe.BLACK=!1;class ER{copy(e,n,s,i,r){return this}insert(e,n,s){return new xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class rt{constructor(e,n=rt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new rt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xe.BLACK,null,null))}remove(e){return new rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Or(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Or(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Or(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Or(this.root_,null,this.comparator_,!0,e)}}rt.EMPTY_NODE=new ER;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(t,e){return si(t.name,e.name)}function Vc(t,e){return si(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl;function TR(t){Pl=t}const pm=function(t){return typeof t=="number"?"number:"+Vg(t):"string:"+t},gm=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dn(e,".sv"),"Priority must be a string or number.")}else A(t===Pl||t.isEmpty(),"priority of unexpected type.");A(t===Pl||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nf;class De{constructor(e,n=De.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gm(this.priorityNode_)}static set __childrenNodeConstructor(e){Nf=e}static get __childrenNodeConstructor(){return Nf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new De(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:Q(e)===".priority"?this.priorityNode_:De.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:De.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Q(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(A(s!==".priority"||Dn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,De.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Vg(this.value_):e+=this.value_,this.lazyHash_=jg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===De.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof De.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=De.VALUE_TYPE_ORDER.indexOf(n),r=De.VALUE_TYPE_ORDER.indexOf(s);return A(i>=0,"Unknown leaf type: "+n),A(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}De.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mm,_m;function IR(t){mm=t}function bR(t){_m=t}class CR extends Xo{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?si(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Z.MIN}maxPost(){return new Z(cs,new De("[PRIORITY-POST]",_m))}makePost(e,n){const s=mm(e);return new Z(n,new De("[PRIORITY-POST]",s))}toString(){return".priority"}}const Xe=new CR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=Math.log(2);class RR{constructor(e){const n=r=>parseInt(Math.log(r)/SR,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ho=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new xe(f,h.node,xe.BLACK,null,null);{const g=parseInt(u/2,10)+l,m=i(l,g),w=i(g+1,c);return h=t[g],f=n?n(h):h,new xe(f,h.node,xe.BLACK,m,w)}},r=function(l){let c=null,u=null,h=t.length;const f=function(m,w){const S=h-m,R=h;h-=m;const L=i(S+1,R),k=t[S],F=n?n(k):k;g(new xe(F,k.node,w,null,L))},g=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const w=l.nextBitIsOne(),S=Math.pow(2,l.count-(m+1));w?f(S,xe.BLACK):(f(S,xe.BLACK),f(S,xe.RED))}return u},o=new RR(t.length),a=r(o);return new rt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ua;const ws={};class nn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return A(ws&&Xe,"ChildrenNode.ts has not been loaded"),Ua=Ua||new nn({".priority":ws},{".priority":Xe}),Ua}get(e){const n=Vs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof rt?n:null}hasIndex(e){return dn(this.indexSet_,e.toString())}addIndex(e,n){A(e!==Fs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(Z.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=ho(s,e.getCompare()):a=ws;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new nn(u,c)}addToIndexes(e,n){const s=to(this.indexes_,(i,r)=>{const o=Vs(this.indexSet_,r);if(A(o,"Missing index implementation for "+r),i===ws)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Z.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ho(a,o.getCompare())}else return ws;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Z(e.name,a))),l.insert(e,e.node)}});return new nn(s,this.indexSet_)}removeFromIndexes(e,n){const s=to(this.indexes_,i=>{if(i===ws)return i;{const r=n.get(e.name);return r?i.remove(new Z(e.name,r)):i}});return new nn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi;class oe{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&gm(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return gi||(gi=new oe(new rt(Vc),null,nn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gi}updatePriority(e){return this.children_.isEmpty()?this:new oe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?gi:n}}getChild(e){const n=Q(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Z(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?gi:this.priorityNode_;return new oe(i,o,r)}}updateChild(e,n){const s=Q(e);if(s===null)return n;{A(Q(e)!==".priority"||Dn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ee(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Xe,(o,a)=>{n[o]=a.val(e),s++,r&&oe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pm(this.getPriority().val())+":"),this.forEachChild(Xe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":jg(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new Z(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Z(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Z.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===lr?-1:0}withIndex(e){if(e===Fs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new oe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Fs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Xe),i=n.getIterator(Xe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fs?null:this.indexMap_.get(e.toString())}}oe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class AR extends oe{constructor(){super(new rt(Vc),oe.EMPTY_NODE,nn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return oe.EMPTY_NODE}isEmpty(){return!1}}const lr=new AR;Object.defineProperties(Z,{MIN:{value:new Z(Gs,oe.EMPTY_NODE)},MAX:{value:new Z(cs,lr)}});dm.__EMPTY_NODE=oe.EMPTY_NODE;De.__childrenNodeConstructor=oe;TR(lr);bR(lr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=!0;function ze(t,e=null){if(t===null)return oe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new De(n,ze(e))}if(!(t instanceof Array)&&kR){const n=[];let s=!1;if(vt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ze(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Z(o,l)))}}),n.length===0)return oe.EMPTY_NODE;const r=ho(n,wR,o=>o.name,Vc);if(s){const o=ho(n,Xe.getCompare());return new oe(r,ze(e),new nn({".priority":o},{".priority":Xe}))}else return new oe(r,ze(e),nn.Default)}else{let n=oe.EMPTY_NODE;return vt(t,(s,i)=>{if(dn(t,s)&&s.substring(0,1)!=="."){const r=ze(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ze(e))}}IR(ze);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR extends Xo{constructor(e){super(),this.indexPath_=e,A(!Y(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?si(e.name,n.name):r}makePost(e,n){const s=ze(e),i=oe.EMPTY_NODE.updateChild(this.indexPath_,s);return new Z(n,i)}maxPost(){const e=oe.EMPTY_NODE.updateChild(this.indexPath_,lr);return new Z(cs,e)}toString(){return cm(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR extends Xo{compare(e,n){const s=e.node.compareTo(n.node);return s===0?si(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Z.MIN}maxPost(){return Z.MAX}makePost(e,n){const s=ze(e);return new Z(n,s)}toString(){return".value"}}const PR=new OR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(t){return{type:"value",snapshotNode:t}}function xR(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function MR(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Of(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function LR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Xe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Gs}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Xe}copy(){const e=new Kc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Xe?n="$priority":t.index_===PR?n="$value":t.index_===Fs?n="$key":(A(t.index_ instanceof NR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ue(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ue(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ue(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ue(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Df(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Xe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo extends om{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=or("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=fo.getListenId_(e,s),a={};this.listens_[o]=a;const l=Pf(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Vs(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=fo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Pf(e._queryParams),s=e._path.toString(),i=new Bi;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ni(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ji(a.responseText)}catch{ht("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ht("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(){this.rootNode_=oe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(){return{value:null,children:new Map}}function ym(t,e,n){if(Y(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Q(e);t.children.has(s)||t.children.set(s,po());const i=t.children.get(s);e=Ee(e),ym(i,e,n)}}function Dl(t,e,n){t.value!==null?n(e,t.value):UR(t,(s,i)=>{const r=new Te(e.toString()+"/"+s);Dl(i,r,n)})}function UR(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&vt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=10*1e3,BR=30*1e3,jR=5*60*1e3;class HR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new $R(e);const s=xf+(BR-xf)*Math.random();ki(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;vt(e,(i,r)=>{r>0&&dn(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),ki(this.reportStats_.bind(this),Math.floor(Math.random()*2*jR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var jt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(jt||(jt={}));function vm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Em(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=jt.ACK_USER_WRITE,this.source=vm()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Te(e));return new go(he(),n,this.revert)}}else return A(Q(this.path)===e,"operationForChild called for unrelated child."),new go(Ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=jt.OVERWRITE}operationForChild(e){return Y(this.path)?new us(this.source,he(),this.snap.getImmediateChild(e)):new us(this.source,Ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=jt.MERGE}operationForChild(e){if(Y(this.path)){const n=this.children.subtree(new Te(e));return n.isEmpty()?null:n.value?new us(this.source,he(),n.value):new Gi(this.source,he(),n)}else return A(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Gi(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const n=Q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function WR(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(LR(o.childName,o.snapshotNode))}),mi(t,i,"child_removed",e,s,n),mi(t,i,"child_added",e,s,n),mi(t,i,"child_moved",r,s,n),mi(t,i,"child_changed",e,s,n),mi(t,i,"value",e,s,n),i}function mi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>KR(t,a,l)),o.forEach(a=>{const l=VR(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function VR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function KR(t,e,n){if(e.childName==null||n.childName==null)throw ei("Should only compare child_ events.");const s=new Z(e.childName,e.snapshotNode),i=new Z(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t,e){return{eventCache:t,serverCache:e}}function Ni(t,e,n,s){return Tm(new Gc(e,n,s),t.serverCache)}function Im(t,e,n,s){return Tm(t.eventCache,new Gc(e,n,s))}function xl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $a;const GR=()=>($a||($a=new rt(OS)),$a);class ye{constructor(e,n=GR()){this.value=e,this.children=n}static fromObject(e){let n=new ye(null);return vt(e,(s,i)=>{n=n.set(new Te(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:he(),value:this.value};if(Y(e))return null;{const s=Q(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ee(e),n);return r!=null?{path:Me(new Te(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const n=Q(e),s=this.children.get(n);return s!==null?s.subtree(Ee(e)):new ye(null)}}set(e,n){if(Y(e))return new ye(n,this.children);{const s=Q(e),r=(this.children.get(s)||new ye(null)).set(Ee(e),n),o=this.children.insert(s,r);return new ye(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new ye(null):new ye(null,this.children);{const n=Q(e),s=this.children.get(n);if(s){const i=s.remove(Ee(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ye(null):new ye(this.value,r)}else return this}}get(e){if(Y(e))return this.value;{const n=Q(e),s=this.children.get(n);return s?s.get(Ee(e)):null}}setTree(e,n){if(Y(e))return n;{const s=Q(e),r=(this.children.get(s)||new ye(null)).setTree(Ee(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ye(this.value,o)}}fold(e){return this.fold_(he(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Me(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,he(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(Y(e))return null;{const r=Q(e),o=this.children.get(r);return o?o.findOnPath_(Ee(e),Me(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,he(),n)}foreachOnPath_(e,n,s){if(Y(e))return this;{this.value&&s(n,this.value);const i=Q(e),r=this.children.get(i);return r?r.foreachOnPath_(Ee(e),Me(n,i),s):new ye(null)}}foreach(e){this.foreach_(he(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.writeTree_=e}static empty(){return new Ot(new ye(null))}}function Oi(t,e,n){if(Y(e))return new Ot(new ye(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=mt(i,e);return r=r.updateChild(o,n),new Ot(t.writeTree_.set(i,r))}else{const i=new ye(n),r=t.writeTree_.setTree(e,i);return new Ot(r)}}}function Mf(t,e,n){let s=t;return vt(n,(i,r)=>{s=Oi(s,Me(e,i),r)}),s}function Lf(t,e){if(Y(e))return Ot.empty();{const n=t.writeTree_.setTree(e,new ye(null));return new Ot(n)}}function Ml(t,e){return ps(t,e)!=null}function ps(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(mt(n.path,e)):null}function Ff(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Xe,(s,i)=>{e.push(new Z(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new Z(s,i.value))}),e}function Nn(t,e){if(Y(e))return t;{const n=ps(t,e);return n!=null?new Ot(new ye(n)):new Ot(t.writeTree_.subtree(e))}}function Ll(t){return t.writeTree_.isEmpty()}function zs(t,e){return bm(he(),t.writeTree_,e)}function bm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(A(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=bm(Me(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Me(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t,e){return Nm(e,t)}function zR(t,e,n,s,i){A(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Oi(t.visibleWrites,e,n)),t.lastWriteId=s}function qR(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function YR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&XR(a,s.path)?i=!1:At(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return JR(t),!0;if(s.snap)t.visibleWrites=Lf(t.visibleWrites,s.path);else{const a=s.children;vt(a,l=>{t.visibleWrites=Lf(t.visibleWrites,Me(s.path,l))})}return!0}else return!1}function XR(t,e){if(t.snap)return At(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&At(Me(t.path,n),e))return!0;return!1}function JR(t){t.visibleWrites=Sm(t.allWrites,QR,he()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function QR(t){return t.visible}function Sm(t,e,n){let s=Ot.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)At(n,o)?(a=mt(n,o),s=Oi(s,a,r.snap)):At(o,n)&&(a=mt(o,n),s=Oi(s,he(),r.snap.getChild(a)));else if(r.children){if(At(n,o))a=mt(n,o),s=Mf(s,a,r.children);else if(At(o,n))if(a=mt(o,n),Y(a))s=Mf(s,he(),r.children);else{const l=Vs(r.children,Q(a));if(l){const c=l.getChild(Ee(a));s=Oi(s,he(),c)}}}else throw ei("WriteRecord should have .snap or .children")}}return s}function Rm(t,e,n,s,i){if(!s&&!i){const r=ps(t.visibleWrites,e);if(r!=null)return r;{const o=Nn(t.visibleWrites,e);if(Ll(o))return n;if(n==null&&!Ml(o,he()))return null;{const a=n||oe.EMPTY_NODE;return zs(o,a)}}}else{const r=Nn(t.visibleWrites,e);if(!i&&Ll(r))return n;if(!i&&n==null&&!Ml(r,he()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(At(c.path,e)||At(e,c.path))},a=Sm(t.allWrites,o,e),l=n||oe.EMPTY_NODE;return zs(a,l)}}}function ZR(t,e,n){let s=oe.EMPTY_NODE;const i=ps(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Xe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Nn(t.visibleWrites,e);return n.forEachChild(Xe,(o,a)=>{const l=zs(Nn(r,new Te(o)),a);s=s.updateImmediateChild(o,l)}),Ff(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Nn(t.visibleWrites,e);return Ff(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function eA(t,e,n,s,i){A(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Me(e,n);if(Ml(t.visibleWrites,r))return null;{const o=Nn(t.visibleWrites,r);return Ll(o)?i.getChild(n):zs(o,i.getChild(n))}}function tA(t,e,n,s){const i=Me(e,n),r=ps(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Nn(t.visibleWrites,i);return zs(o,s.getNode().getImmediateChild(n))}else return null}function nA(t,e){return ps(t.visibleWrites,e)}function sA(t,e,n,s,i,r,o){let a;const l=Nn(t.visibleWrites,e),c=ps(l,he());if(c!=null)a=c;else if(n!=null)a=zs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let g=f.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=f.getNext();return u}else return[]}function iA(){return{visibleWrites:Ot.empty(),allWrites:[],lastWriteId:-1}}function Fl(t,e,n,s){return Rm(t.writeTree,t.treePath,e,n,s)}function Am(t,e){return ZR(t.writeTree,t.treePath,e)}function Uf(t,e,n,s){return eA(t.writeTree,t.treePath,e,n,s)}function mo(t,e){return nA(t.writeTree,Me(t.treePath,e))}function rA(t,e,n,s,i,r){return sA(t.writeTree,t.treePath,e,n,s,i,r)}function zc(t,e,n){return tA(t.writeTree,t.treePath,e,n)}function km(t,e){return Nm(Me(t.treePath,e),t.writeTree)}function Nm(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Of(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,MR(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,xR(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Of(s,e.snapshotNode,i.oldSnap));else throw ei("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Om=new aA;class qc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Gc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return zc(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hs(this.viewCache_),r=rA(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function lA(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function cA(t,e,n,s,i){const r=new oA;let o,a;if(n.type===jt.OVERWRITE){const c=n;c.source.fromUser?o=Ul(t,e,c.path,c.snap,s,i,r):(A(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!Y(c.path),o=_o(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===jt.MERGE){const c=n;c.source.fromUser?o=hA(t,e,c.path,c.children,s,i,r):(A(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=$l(t,e,c.path,c.children,s,i,a,r))}else if(n.type===jt.ACK_USER_WRITE){const c=n;c.revert?o=pA(t,e,c.path,s,i,r):o=fA(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===jt.LISTEN_COMPLETE)o=dA(t,e,n.path,s,r);else throw ei("Unknown operation type: "+n.type);const l=r.getChanges();return uA(e,o,l),{viewCache:o,changes:l}}function uA(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=xl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(DR(xl(e)))}}function Pm(t,e,n,s,i,r){const o=e.eventCache;if(mo(s,n)!=null)return e;{let a,l;if(Y(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=hs(e),u=c instanceof oe?c:oe.EMPTY_NODE,h=Am(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Fl(s,hs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Q(n);if(c===".priority"){A(Dn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Uf(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Ee(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Uf(s,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=zc(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Ni(e,a,o.isFullyInitialized()||Y(n),t.filter.filtersNodes())}}function _o(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(Y(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),g,null)}else{const g=Q(n);if(!l.isCompleteForPath(n)&&Dn(n)>1)return e;const m=Ee(n),S=l.getNode().getImmediateChild(g).updateChild(m,s);g===".priority"?c=u.updatePriority(l.getNode(),S):c=u.updateChild(l.getNode(),g,S,m,Om,null)}const h=Im(e,c,l.isFullyInitialized()||Y(n),u.filtersNodes()),f=new qc(i,h,r);return Pm(t,h,n,i,f,a)}function Ul(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new qc(i,e,r);if(Y(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ni(e,c,!0,t.filter.filtersNodes());else{const h=Q(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ni(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Ee(n),g=a.getNode().getImmediateChild(h);let m;if(Y(f))m=s;else{const w=u.getCompleteChild(h);w!=null?lm(f)===".priority"&&w.getChild(um(f)).isEmpty()?m=w:m=w.updateChild(f,s):m=oe.EMPTY_NODE}if(g.equals(m))l=e;else{const w=t.filter.updateChild(a.getNode(),h,m,f,u,o);l=Ni(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function $f(t,e){return t.eventCache.isCompleteForChild(e)}function hA(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Me(n,l);$f(e,Q(u))&&(a=Ul(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Me(n,l);$f(e,Q(u))||(a=Ul(t,a,u,c,i,r,o))}),a}function Bf(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function $l(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;Y(n)?c=s:c=new ye(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),m=Bf(t,g,f);l=_o(t,l,new Te(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const g=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!g){const m=e.serverCache.getNode().getImmediateChild(h),w=Bf(t,m,f);l=_o(t,l,new Te(h),w,i,r,o,a)}}),l}function fA(t,e,n,s,i,r,o){if(mo(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(Y(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return _o(t,e,n,l.getNode().getChild(n),i,r,a,o);if(Y(n)){let c=new ye(null);return l.getNode().forEachChild(Fs,(u,h)=>{c=c.set(new Te(u),h)}),$l(t,e,n,c,i,r,a,o)}else return e}else{let c=new ye(null);return s.foreach((u,h)=>{const f=Me(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),$l(t,e,n,c,i,r,a,o)}}function dA(t,e,n,s,i){const r=e.serverCache,o=Im(e,r.getNode(),r.isFullyInitialized()||Y(n),r.isFiltered());return Pm(t,o,n,s,Om,i)}function pA(t,e,n,s,i,r){let o;if(mo(s,n)!=null)return e;{const a=new qc(s,e,i),l=e.eventCache.getNode();let c;if(Y(n)||Q(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Fl(s,hs(e));else{const h=e.serverCache.getNode();A(h instanceof oe,"serverChildren would be complete if leaf node"),u=Am(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Q(n);let h=zc(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Ee(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,oe.EMPTY_NODE,Ee(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Fl(s,hs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||mo(s,he())!=null,Ni(e,c,o,t.filter.filtersNodes())}}function gA(t,e){const n=hs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Y(e)&&!n.getImmediateChild(Q(e)).isEmpty())?n.getChild(e):null}function jf(t,e,n,s){e.type===jt.MERGE&&e.source.queryId!==null&&(A(hs(t.viewCache_),"We should always have a full cache before handling merges"),A(xl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=cA(t.processor_,i,e,n,s);return lA(t.processor_,r.viewCache),A(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,mA(t,r.changes,r.viewCache.eventCache.getNode(),null)}function mA(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return WR(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hf;function _A(t){A(!Hf,"__referenceConstructor has already been defined"),Hf=t}function Yc(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return A(r!=null,"SyncTree gave us an op for an invalid query."),jf(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(jf(o,e,n,s));return r}}function Xc(t,e){let n=null;for(const s of t.views.values())n=n||gA(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wf;function yA(t){A(!Wf,"__referenceConstructor has already been defined"),Wf=t}class Vf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ye(null),this.pendingWriteTree_=iA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vA(t,e,n,s,i){return zR(t.pendingWriteTree_,e,n,s,i),i?Qo(t,new us(vm(),e,n)):[]}function Ss(t,e,n=!1){const s=qR(t.pendingWriteTree_,e);if(YR(t.pendingWriteTree_,e)){let r=new ye(null);return s.snap!=null?r=r.set(he(),!0):vt(s.children,o=>{r=r.set(new Te(o),!0)}),Qo(t,new go(s.path,r,n))}else return[]}function Jo(t,e,n){return Qo(t,new us(Em(),e,n))}function EA(t,e,n){const s=ye.fromObject(n);return Qo(t,new Gi(Em(),e,s))}function wA(t,e,n,s){const i=Lm(t,s);if(i!=null){const r=Fm(i),o=r.path,a=r.queryId,l=mt(o,e),c=new us(wm(a),l,n);return Um(t,o,c)}else return[]}function TA(t,e,n,s){const i=Lm(t,s);if(i){const r=Fm(i),o=r.path,a=r.queryId,l=mt(o,e),c=ye.fromObject(n),u=new Gi(wm(a),l,c);return Um(t,o,u)}else return[]}function Dm(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=mt(o,e),c=Xc(a,l);if(c)return c});return Rm(i,e,r,n,!0)}function Qo(t,e){return xm(e,t.syncPointTree_,null,Cm(t.pendingWriteTree_,he()))}function xm(t,e,n,s){if(Y(t.path))return Mm(t,e,n,s);{const i=e.get(he());n==null&&i!=null&&(n=Xc(i,he()));let r=[];const o=Q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=km(s,o);r=r.concat(xm(a,l,c,u))}return i&&(r=r.concat(Yc(i,t,s,n))),r}}function Mm(t,e,n,s){const i=e.get(he());n==null&&i!=null&&(n=Xc(i,he()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=km(s,o),u=t.operationForChild(o);u&&(r=r.concat(Mm(u,a,l,c)))}),i&&(r=r.concat(Yc(i,t,s,n))),r}function Lm(t,e){return t.tagToQueryMap.get(e)}function Fm(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Te(t.substr(0,e))}}function Um(t,e,n){const s=t.syncPointTree_.get(e);A(s,"Missing sync point for query tag that we're tracking");const i=Cm(t.pendingWriteTree_,e);return Yc(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jc(n)}node(){return this.node_}}class Qc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Me(this.path_,e);return new Qc(this.syncTree_,n)}node(){return Dm(this.syncTree_,this.path_)}}const IA=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Kf=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return bA(t[".sv"],e,n);if(typeof t[".sv"]=="object")return CA(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},bA=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},CA=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&A(!1,"Unexpected increment value: "+s);const i=e.node();if(A(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},SA=function(t,e,n,s){return Zc(e,new Qc(n,t),s)},RA=function(t,e,n){return Zc(t,new Jc(e),n)};function Zc(t,e,n){const s=t.getPriority().val(),i=Kf(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=Kf(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new De(a,ze(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new De(i))),o.forEachChild(Xe,(a,l)=>{const c=Zc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function tu(t,e){let n=e instanceof Te?e:new Te(e),s=t,i=Q(n);for(;i!==null;){const r=Vs(s.node.children,i)||{children:{},childCount:0};s=new eu(i,s,r),n=Ee(n),i=Q(n)}return s}function ii(t){return t.node.value}function $m(t,e){t.node.value=e,Bl(t)}function Bm(t){return t.node.childCount>0}function AA(t){return ii(t)===void 0&&!Bm(t)}function Zo(t,e){vt(t.node.children,(n,s)=>{e(new eu(n,t,s))})}function jm(t,e,n,s){n&&!s&&e(t),Zo(t,i=>{jm(i,e,!0,s)}),n&&s&&e(t)}function kA(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function cr(t){return new Te(t.parent===null?t.name:cr(t.parent)+"/"+t.name)}function Bl(t){t.parent!==null&&NA(t.parent,t.name,t)}function NA(t,e,n){const s=AA(n),i=dn(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Bl(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Bl(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=/[\[\].#$\/\u0000-\u001F\u007F]/,PA=/[\[\].#$\u0000-\u001F\u007F]/,Ba=10*1024*1024,Hm=function(t){return typeof t=="string"&&t.length!==0&&!OA.test(t)},DA=function(t){return typeof t=="string"&&t.length!==0&&!PA.test(t)},xA=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),DA(t)},Wm=function(t,e,n){const s=n instanceof Te?new dR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Kn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Kn(s)+" with contents = "+e.toString());if(Hg(e))throw new Error(t+"contains "+e.toString()+" "+Kn(s));if(typeof e=="string"&&e.length>Ba/3&&Ko(e)>Ba)throw new Error(t+"contains a string greater than "+Ba+" utf8 bytes "+Kn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(vt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Hm(o)))throw new Error(t+" contains an invalid key ("+o+") "+Kn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);pR(s,o),Wm(t,a,s),gR(s)}),i&&r)throw new Error(t+' contains ".value" child '+Kn(s)+" in addition to actual children.")}},MA=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!xA(n))throw new Error(KI(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function FA(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!hm(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function gs(t,e,n){FA(t,n),UA(t,s=>At(s,e)||At(e,s))}function UA(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?($A(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function $A(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();is&&Ge("event: "+n.toString()),ar(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA="repo_interrupt",jA=25;class HA{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new LA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=po(),this.transactionQueueTree_=new eu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function WA(t,e,n){if(t.stats_=jc(t.repoInfo_),t.forceRestClient_||FS())t.server_=new fo(t.repoInfo_,(s,i,r,o)=>{Gf(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>zf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ue(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new rn(t.repoInfo_,e,(s,i,r,o)=>{Gf(t,s,i,r,o)},s=>{zf(t,s)},s=>{KA(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=WS(t.repoInfo_,()=>new HR(t.stats_,t.server_)),t.infoData_=new FR,t.infoSyncTree_=new Vf({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Jo(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),nu(t,"connected",!1),t.serverSyncTree_=new Vf({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);gs(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function VA(t){const n=t.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vm(t){return IA({timestamp:VA(t)})}function Gf(t,e,n,s,i){t.dataUpdateCount++;const r=new Te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=to(n,c=>ze(c));o=TA(t.serverSyncTree_,r,l,i)}else{const l=ze(n);o=wA(t.serverSyncTree_,r,l,i)}else if(s){const l=to(n,c=>ze(c));o=EA(t.serverSyncTree_,r,l)}else{const l=ze(n);o=Jo(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=iu(t,r)),gs(t.eventQueue_,a,o)}function zf(t,e){nu(t,"connected",e),e===!1&&zA(t)}function KA(t,e){vt(e,(n,s)=>{nu(t,n,s)})}function nu(t,e,n){const s=new Te("/.info/"+e),i=ze(n);t.infoData_.updateSnapshot(s,i);const r=Jo(t.infoSyncTree_,s,i);gs(t.eventQueue_,s,r)}function GA(t){return t.nextWriteId_++}function zA(t){Km(t,"onDisconnectEvents");const e=Vm(t),n=po();Dl(t.onDisconnect_,he(),(i,r)=>{const o=SA(i,r,t.serverSyncTree_,e);ym(n,i,o)});let s=[];Dl(n,he(),(i,r)=>{s=s.concat(Jo(t.serverSyncTree_,i,r));const o=JA(t,i);iu(t,o)}),t.onDisconnect_=po(),gs(t.eventQueue_,he(),s)}function qA(t){t.persistentConnection_&&t.persistentConnection_.interrupt(BA)}function Km(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ge(n,...e)}function Gm(t,e,n){return Dm(t.serverSyncTree_,e,n)||oe.EMPTY_NODE}function su(t,e=t.transactionQueueTree_){if(e||ea(t,e),ii(e)){const n=qm(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&YA(t,cr(e),n)}else Bm(e)&&Zo(e,n=>{su(t,n)})}function YA(t,e,n){const s=n.map(c=>c.currentWriteId),i=Gm(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];A(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=mt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Km(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Ss(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ea(t,tu(t.transactionQueueTree_,e)),su(t,t.transactionQueueTree_),gs(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)ar(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{ht("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}iu(t,e)}},o)}function iu(t,e){const n=zm(t,e),s=cr(n),i=qm(t,n);return XA(t,i,s),s}function XA(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=mt(n,l.path);let u=!1,h;if(A(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Ss(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=jA)u=!0,h="maxretry",i=i.concat(Ss(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Gm(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){Wm("transaction failed: Data returned ",g,l.path);let m=ze(g);typeof g=="object"&&g!=null&&dn(g,".priority")||(m=m.updatePriority(f.getPriority()));const S=l.currentWriteId,R=Vm(t),L=RA(m,f,R);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=L,l.currentWriteId=GA(t),o.splice(o.indexOf(S),1),i=i.concat(vA(t.serverSyncTree_,l.path,L,l.currentWriteId,l.applyLocally)),i=i.concat(Ss(t.serverSyncTree_,S,!0))}else u=!0,h="nodata",i=i.concat(Ss(t.serverSyncTree_,l.currentWriteId,!0))}gs(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}ea(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ar(s[a]);su(t,t.transactionQueueTree_)}function zm(t,e){let n,s=t.transactionQueueTree_;for(n=Q(e);n!==null&&ii(s)===void 0;)s=tu(s,n),e=Ee(e),n=Q(e);return s}function qm(t,e){const n=[];return Ym(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ym(t,e,n){const s=ii(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Zo(e,i=>{Ym(t,i,n)})}function ea(t,e){const n=ii(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,$m(e,n.length>0?n:void 0)}Zo(e,s=>{ea(t,s)})}function JA(t,e){const n=cr(zm(t,e)),s=tu(t.transactionQueueTree_,e);return kA(s,i=>{ja(t,i)}),ja(t,s),jm(s,i=>{ja(t,i)}),n}function ja(t,e){const n=ii(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(A(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(A(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ss(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?$m(e,void 0):n.length=r+1,gs(t.eventQueue_,cr(e),i);for(let o=0;o<s.length;o++)ar(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ZA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ht(`Invalid query segment '${n}' in query '${t}'`)}return e}const qf=function(t,e){const n=ek(t),s=n.namespace;n.domain==="firebase.com"&&ls(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ls("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||kS();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new BS(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Te(n.pathString)}},ek=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=QA(t.substring(u,h)));const f=ZA(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return Y(this._path)?null:lm(this._path)}get ref(){return new ri(this._repo,this._path)}get _queryIdentifier(){const e=Df(this._queryParams),n=$c(e);return n==="{}"?"default":n}get _queryObject(){return Df(this._queryParams)}isEqual(e){if(e=xn(e),!(e instanceof ru))return!1;const n=this._repo===e._repo,s=hm(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+fR(this._path)}}class ri extends ru{constructor(e,n){super(e,n,new Kc,!1)}get parent(){const e=um(this._path);return e===null?null:new ri(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}_A(ri);yA(ri);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk="FIREBASE_DATABASE_EMULATOR_HOST",jl={};let nk=!1;function sk(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ls("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ge("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=qf(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[tk]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=qf(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Nl(Nl.OWNER):new $S(t.name,t.options,e);MA("Invalid Firebase Database URL",o),Y(o.path)||ls("Database URL must point to the root of a Firebase Database (not including a child path).");const h=rk(a,t,u,new US(t.name,n));return new ok(h,t)}function ik(t,e){const n=jl[e];(!n||n[t.key]!==t)&&ls(`Database ${e}(${t.repoInfo_}) has already been deleted.`),qA(t),delete n[t.key]}function rk(t,e,n,s){let i=jl[e.name];i||(i={},jl[e.name]=i);let r=i[t.toURLString()];return r&&ls("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new HA(t,nk,n,s),i[t.toURLString()]=r,r}class ok{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(WA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ri(this._repo,he())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ik(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ls("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ak(t){bS(ds),Gt(new Dt("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return sk(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),ut(gf,mf,t),ut(gf,mf,"esm2017")}rn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};rn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ak();var lk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,ou=ou||{},V=lk||self;function yo(){}function ta(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ur(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ck(t){return Object.prototype.hasOwnProperty.call(t,Ha)&&t[Ha]||(t[Ha]=++uk)}var Ha="closure_uid_"+(1e9*Math.random()>>>0),uk=0;function hk(t,e,n){return t.call.apply(t.bind,arguments)}function fk(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Je=hk:Je=fk,Je.apply(null,arguments)}function Pr(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ve(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Mn(){this.s=this.s,this.o=this.o}var dk=0;Mn.prototype.s=!1;Mn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),dk!=0)&&ck(this)};Mn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xm=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function au(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Yf(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(ta(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var pk=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",yo,e),V.removeEventListener("test",yo,e)}catch{}return t}();function vo(t){return/^[\s\xa0]*$/.test(t)}var Xf=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Wa(t,e){return t<e?-1:t>e?1:0}function na(){var t=V.navigator;return t&&(t=t.userAgent)?t:""}function $t(t){return na().indexOf(t)!=-1}function lu(t){return lu[" "](t),t}lu[" "]=yo;function gk(t){var e=yk;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var mk=$t("Opera"),zi=$t("Trident")||$t("MSIE"),Jm=$t("Edge"),Hl=Jm||zi,Qm=$t("Gecko")&&!(na().toLowerCase().indexOf("webkit")!=-1&&!$t("Edge"))&&!($t("Trident")||$t("MSIE"))&&!$t("Edge"),_k=na().toLowerCase().indexOf("webkit")!=-1&&!$t("Edge");function Zm(){var t=V.document;return t?t.documentMode:void 0}var Wl;e:{var Va="",Ka=function(){var t=na();if(Qm)return/rv:([^\);]+)(\)|;)/.exec(t);if(Jm)return/Edge\/([\d\.]+)/.exec(t);if(zi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_k)return/WebKit\/(\S+)/.exec(t);if(mk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ka&&(Va=Ka?Ka[1]:""),zi){var Ga=Zm();if(Ga!=null&&Ga>parseFloat(Va)){Wl=String(Ga);break e}}Wl=Va}var yk={};function vk(){return gk(function(){let t=0;const e=Xf(String(Wl)).split("."),n=Xf("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Wa(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Wa(i[2].length==0,r[2].length==0)||Wa(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}V.document&&zi&&Zm();function qi(t,e){if(Qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Qm){e:{try{lu(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Ek[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&qi.X.h.call(this)}}Ve(qi,Qe);var Ek={2:"touch",3:"pen",4:"mouse"};qi.prototype.h=function(){qi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var hr="closure_listenable_"+(1e6*Math.random()|0),wk=0;function Tk(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++wk,this.ba=this.ea=!1}function sa(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function cu(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function e_(t){const e={};for(const n in t)e[n]=t[n];return e}const Jf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function t_(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Jf.length;r++)n=Jf[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function ia(t){this.src=t,this.g={},this.h=0}ia.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Kl(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Tk(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function Vl(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Xm(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(sa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Kl(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var uu="closure_lm_"+(1e6*Math.random()|0),za={};function n_(t,e,n,s,i){if(s&&s.once)return i_(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)n_(t,e[r],n,s,i);return null}return n=du(n),t&&t[hr]?t.N(e,n,ur(s)?!!s.capture:!!s,i):s_(t,e,n,!1,s,i)}function s_(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=ur(i)?!!i.capture:!!i,a=fu(t);if(a||(t[uu]=a=new ia(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=Ik(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)pk||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(o_(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ik(){function t(n){return e.call(t.src,t.listener,n)}const e=bk;return t}function i_(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)i_(t,e[r],n,s,i);return null}return n=du(n),t&&t[hr]?t.O(e,n,ur(s)?!!s.capture:!!s,i):s_(t,e,n,!0,s,i)}function r_(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)r_(t,e[r],n,s,i);else s=ur(s)?!!s.capture:!!s,n=du(n),t&&t[hr]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Kl(r,n,s,i),-1<n&&(sa(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=fu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Kl(e,n,s,i)),(n=-1<t?e[t]:null)&&hu(n))}function hu(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[hr])Vl(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(o_(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=fu(e))?(Vl(n,t),n.h==0&&(n.src=null,e[uu]=null)):sa(t)}}}function o_(t){return t in za?za[t]:za[t]="on"+t}function bk(t,e){if(t.ba)t=!0;else{e=new qi(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&hu(t),t=n.call(s,e)}return t}function fu(t){return t=t[uu],t instanceof ia?t:null}var qa="__closure_events_fn_"+(1e9*Math.random()>>>0);function du(t){return typeof t=="function"?t:(t[qa]||(t[qa]=function(e){return t.handleEvent(e)}),t[qa])}function Le(){Mn.call(this),this.i=new ia(this),this.P=this,this.I=null}Ve(Le,Mn);Le.prototype[hr]=!0;Le.prototype.removeEventListener=function(t,e,n,s){r_(this,t,e,n,s)};function Be(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Qe(e,t);else if(e instanceof Qe)e.target=e.target||t;else{var i=e;e=new Qe(s,t),t_(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Dr(o,s,!0,e)&&i}if(o=e.g=t,i=Dr(o,s,!0,e)&&i,i=Dr(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Dr(o,s,!1,e)&&i}Le.prototype.M=function(){if(Le.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)sa(n[s]);delete t.g[e],t.h--}}this.I=null};Le.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Le.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Dr(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Vl(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var pu=V.JSON.stringify;function Ck(){var t=c_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Sk{constructor(){this.h=this.g=null}add(e,n){const s=a_.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var a_=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Rk,t=>t.reset());class Rk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ak(t){V.setTimeout(()=>{throw t},0)}function l_(t,e){Gl||kk(),zl||(Gl(),zl=!0),c_.add(t,e)}var Gl;function kk(){var t=V.Promise.resolve(void 0);Gl=function(){t.then(Nk)}}var zl=!1,c_=new Sk;function Nk(){for(var t;t=Ck();){try{t.h.call(t.g)}catch(n){Ak(n)}var e=a_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}zl=!1}function ra(t,e){Le.call(this),this.h=t||1,this.g=e||V,this.j=Je(this.lb,this),this.l=Date.now()}Ve(ra,Le);M=ra.prototype;M.ca=!1;M.R=null;M.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Be(this,"tick"),this.ca&&(gu(this),this.start()))}};M.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function gu(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}M.M=function(){ra.X.M.call(this),gu(this),delete this.g};function mu(t,e,n){if(typeof t=="function")n&&(t=Je(t,n));else if(t&&typeof t.handleEvent=="function")t=Je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function u_(t){t.g=mu(()=>{t.g=null,t.i&&(t.i=!1,u_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Ok extends Mn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:u_(this)}M(){super.M(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yi(t){Mn.call(this),this.h=t,this.g={}}Ve(Yi,Mn);var Qf=[];function h_(t,e,n,s){Array.isArray(n)||(n&&(Qf[0]=n.toString()),n=Qf);for(var i=0;i<n.length;i++){var r=n_(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function f_(t){cu(t.g,function(e,n){this.g.hasOwnProperty(n)&&hu(e)},t),t.g={}}Yi.prototype.M=function(){Yi.X.M.call(this),f_(this)};Yi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function oa(){this.g=!0}oa.prototype.Aa=function(){this.g=!1};function Pk(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Dk(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Rs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Mk(t,n)+(s?" "+s:"")})}function xk(t,e){t.info(function(){return"TIMEOUT: "+e})}oa.prototype.info=function(){};function Mk(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return pu(n)}catch{return e}}var oi={},Zf=null;function _u(){return Zf=Zf||new Le}oi.Pa="serverreachability";function d_(t){Qe.call(this,oi.Pa,t)}Ve(d_,Qe);function Xi(t){const e=_u();Be(e,new d_(e))}oi.STAT_EVENT="statevent";function p_(t,e){Qe.call(this,oi.STAT_EVENT,t),this.stat=e}Ve(p_,Qe);function nt(t){const e=_u();Be(e,new p_(e,t))}oi.Qa="timingevent";function g_(t,e){Qe.call(this,oi.Qa,t),this.size=e}Ve(g_,Qe);function fr(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var yu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Lk={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function vu(){}vu.prototype.h=null;function ed(t){return t.h||(t.h=t.i())}function Fk(){}var dr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Eu(){Qe.call(this,"d")}Ve(Eu,Qe);function wu(){Qe.call(this,"c")}Ve(wu,Qe);var ql;function aa(){}Ve(aa,vu);aa.prototype.g=function(){return new XMLHttpRequest};aa.prototype.i=function(){return{}};ql=new aa;function pr(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Yi(this),this.O=Uk,t=Hl?125:void 0,this.T=new ra(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new m_}function m_(){this.i=null,this.g="",this.h=!1}var Uk=45e3,Yl={},Eo={};M=pr.prototype;M.setTimeout=function(t){this.O=t};function Xl(t,e,n){t.K=1,t.v=ca(un(e)),t.s=n,t.P=!0,__(t,null)}function __(t,e){t.F=Date.now(),gr(t),t.A=un(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),C_(n.i,"t",s),t.C=0,n=t.l.H,t.h=new m_,t.g=G_(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Ok(Je(t.La,t,t.g),t.N)),h_(t.S,t.g,"readystatechange",t.ib),e=t.H?e_(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Xi(),Pk(t.j,t.u,t.A,t.m,t.U,t.s)}M.ib=function(t){t=t.target;const e=this.L;e&&sn(t)==3?e.l():this.La(t)};M.La=function(t){try{if(t==this.g)e:{const u=sn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Hl||this.g&&(this.h.h||this.g.fa()||id(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Xi(3):Xi(2)),la(this);var n=this.g.aa();this.Y=n;t:if(y_(this)){var s=id(this.g);t="";var i=s.length,r=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qn(this),Pi(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Dk(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!vo(a)){var c=a;break t}}c=null}if(n=c)Rs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Jl(this,n);else{this.i=!1,this.o=3,nt(12),Qn(this),Pi(this);break e}}this.P?(v_(this,u,o),Hl&&this.i&&u==3&&(h_(this.S,this.T,"tick",this.hb),this.T.start())):(Rs(this.j,this.m,o,null),Jl(this,o)),u==4&&Qn(this),this.i&&!this.I&&(u==4?H_(this.l,this):(this.i=!1,gr(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,nt(12)):(this.o=0,nt(13)),Qn(this),Pi(this)}}}catch{}finally{}};function y_(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function v_(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=$k(t,n),i==Eo){e==4&&(t.o=4,nt(14),s=!1),Rs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Yl){t.o=4,nt(15),Rs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Rs(t.j,t.m,i,null),Jl(t,i);y_(t)&&i!=Eo&&i!=Yl&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,nt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Au(e),e.K=!0,nt(11))):(Rs(t.j,t.m,n,"[Invalid Chunked Response]"),Qn(t),Pi(t))}M.hb=function(){if(this.g){var t=sn(this.g),e=this.g.fa();this.C<e.length&&(la(this),v_(this,t,e),this.i&&t!=4&&gr(this))}};function $k(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Eo:(n=Number(e.substring(n,s)),isNaN(n)?Yl:(s+=1,s+n>e.length?Eo:(e=e.substr(s,n),t.C=s+n,e)))}M.cancel=function(){this.I=!0,Qn(this)};function gr(t){t.V=Date.now()+t.O,E_(t,t.O)}function E_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=fr(Je(t.gb,t),e)}function la(t){t.B&&(V.clearTimeout(t.B),t.B=null)}M.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(xk(this.j,this.A),this.K!=2&&(Xi(),nt(17)),Qn(this),this.o=2,Pi(this)):E_(this,this.V-t)};function Pi(t){t.l.G==0||t.I||H_(t.l,t)}function Qn(t){la(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,gu(t.T),f_(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Jl(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Ql(n.h,t))){if(!t.J&&Ql(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Io(n),da(n);else break e;Ru(n),nt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=fr(Je(n.cb,n),6e3));if(1>=A_(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Zn(n,11)}else if((t.J||n.g==t)&&Io(n),!vo(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.I=c[1],n.ka=c[2];const u=c[3];u!=null&&(n.ma=u,n.j.info("VER="+n.ma));const h=c[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const g=t.g;if(g){const m=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.h;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Tu(r,r.h),r.h=null))}if(s.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(s.za=w,Ie(s.F,s.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=K_(s,s.H?s.ka:null,s.V),o.J){k_(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(la(a),gr(a)),s.g=o}else B_(s);0<n.i.length&&pa(n)}else c[0]!="stop"&&c[0]!="close"||Zn(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Zn(n,7):Su(n):c[0]!="noop"&&n.l&&n.l.wa(c),n.A=0)}}Xi(4)}catch{}}function Bk(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ta(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function jk(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ta(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function w_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ta(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=jk(t),s=Bk(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var T_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hk(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function rs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof rs){this.h=e!==void 0?e:t.h,wo(this,t.j),this.s=t.s,this.g=t.g,To(this,t.m),this.l=t.l,e=t.i;var n=new Ji;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),td(this,n),this.o=t.o}else t&&(n=String(t).match(T_))?(this.h=!!e,wo(this,n[1]||"",!0),this.s=Ei(n[2]||""),this.g=Ei(n[3]||"",!0),To(this,n[4]),this.l=Ei(n[5]||"",!0),td(this,n[6]||"",!0),this.o=Ei(n[7]||"")):(this.h=!!e,this.i=new Ji(null,this.h))}rs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(wi(e,nd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(wi(e,nd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(wi(n,n.charAt(0)=="/"?Kk:Vk,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",wi(n,zk)),t.join("")};function un(t){return new rs(t)}function wo(t,e,n){t.j=n?Ei(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function To(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function td(t,e,n){e instanceof Ji?(t.i=e,qk(t.i,t.h)):(n||(e=wi(e,Gk)),t.i=new Ji(e,t.h))}function Ie(t,e,n){t.i.set(e,n)}function ca(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ei(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function wi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Wk),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Wk(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var nd=/[#\/\?@]/g,Vk=/[#\?:]/g,Kk=/[#\?]/g,Gk=/[#\?@]/g,zk=/#/g;function Ji(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ln(t){t.g||(t.g=new Map,t.h=0,t.i&&Hk(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Ji.prototype;M.add=function(t,e){Ln(this),this.i=null,t=ai(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function I_(t,e){Ln(t),e=ai(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function b_(t,e){return Ln(t),e=ai(t,e),t.g.has(e)}M.forEach=function(t,e){Ln(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};M.oa=function(){Ln(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};M.W=function(t){Ln(this);let e=[];if(typeof t=="string")b_(this,t)&&(e=e.concat(this.g.get(ai(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Ln(this),this.i=null,t=ai(this,t),b_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function C_(t,e,n){I_(t,e),0<n.length&&(t.i=null,t.g.set(ai(t,e),au(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function ai(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function qk(t,e){e&&!t.j&&(Ln(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(I_(this,s),C_(this,i,n))},t)),t.j=e}var Yk=class{constructor(t,e){this.h=t,this.g=e}};function S_(t){this.l=t||Xk,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ga&&V.g.Ga()&&V.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Xk=10;function R_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function A_(t){return t.h?1:t.g?t.g.size:0}function Ql(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Tu(t,e){t.g?t.g.add(e):t.h=e}function k_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}S_.prototype.cancel=function(){if(this.i=N_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function N_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return au(t.i)}function Iu(){}Iu.prototype.stringify=function(t){return V.JSON.stringify(t,void 0)};Iu.prototype.parse=function(t){return V.JSON.parse(t,void 0)};function Jk(){this.g=new Iu}function Qk(t,e,n){const s=n||"";try{w_(t,function(i,r){let o=i;ur(i)&&(o=pu(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function Zk(t,e){const n=new oa;if(V.Image){const s=new Image;s.onload=Pr(xr,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Pr(xr,n,s,"TestLoadImage: error",!1,e),s.onabort=Pr(xr,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Pr(xr,n,s,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function xr(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function ua(t){this.l=t.ac||null,this.j=t.jb||!1}Ve(ua,vu);ua.prototype.g=function(){return new ha(this.l,this.j)};ua.prototype.i=function(t){return function(){return t}}({});function ha(t,e){Le.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=bu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ve(ha,Le);var bu=0;M=ha.prototype;M.open=function(t,e){if(this.readyState!=bu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Qi(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||V).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mr(this)),this.readyState=bu};M.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qi(this)),this.g&&(this.readyState=3,Qi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;O_(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function O_(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}M.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?mr(this):Qi(this),this.readyState==3&&O_(this)}};M.Va=function(t){this.g&&(this.response=this.responseText=t,mr(this))};M.Ua=function(t){this.g&&(this.response=t,mr(this))};M.ga=function(){this.g&&mr(this)};function mr(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Qi(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Qi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ha.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var eN=V.JSON.parse;function ke(t){Le.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=P_,this.K=this.L=!1}Ve(ke,Le);var P_="",tN=/^https?$/i,nN=["POST","PUT"];M=ke.prototype;M.Ka=function(t){this.L=t};M.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ql.g(),this.C=this.u?ed(this.u):ed(ql),this.g.onreadystatechange=Je(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){sd(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=V.FormData&&t instanceof V.FormData,!(0<=Xm(nN,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{M_(this),0<this.B&&((this.K=sN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Je(this.qa,this)):this.A=mu(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){sd(this,r)}};function sN(t){return zi&&vk()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.qa=function(){typeof ou<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Be(this,"timeout"),this.abort(8))};function sd(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,D_(t),fa(t)}function D_(t){t.D||(t.D=!0,Be(t,"complete"),Be(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Be(this,"complete"),Be(this,"abort"),fa(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fa(this,!0)),ke.X.M.call(this)};M.Ha=function(){this.s||(this.F||this.v||this.l?x_(this):this.fb())};M.fb=function(){x_(this)};function x_(t){if(t.h&&typeof ou<"u"&&(!t.C[1]||sn(t)!=4||t.aa()!=2)){if(t.v&&sn(t)==4)mu(t.Ha,0,t);else if(Be(t,"readystatechange"),sn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=a===0){var i=String(t.H).match(T_)[1]||null;if(!i&&V.self&&V.self.location){var r=V.self.location.protocol;i=r.substr(0,r.length-1)}s=!tN.test(i?i.toLowerCase():"")}n=s}if(n)Be(t,"complete"),Be(t,"success");else{t.m=6;try{var o=2<sn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",D_(t)}}finally{fa(t)}}}}function fa(t,e){if(t.g){M_(t);const n=t.g,s=t.C[0]?yo:null;t.g=null,t.C=null,e||Be(t,"ready");try{n.onreadystatechange=s}catch{}}}function M_(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}function sn(t){return t.g?t.g.readyState:0}M.aa=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}};M.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),eN(e)}};function id(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case P_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Ea=function(){return this.m};M.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function L_(t){let e="";return cu(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Cu(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=L_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function _i(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function F_(t){this.Ca=0,this.i=[],this.j=new oa,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=_i("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=_i("baseRetryDelayMs",5e3,t),this.bb=_i("retryDelaySeedMs",1e4,t),this.$a=_i("forwardChannelMaxRetries",2,t),this.ta=_i("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new S_(t&&t.concurrentRequestLimit),this.Fa=new Jk,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}M=F_.prototype;M.ma=8;M.G=1;function Su(t){if(U_(t),t.G==3){var e=t.U++,n=un(t.F);Ie(n,"SID",t.I),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),_r(t,n),e=new pr(t,t.j,e,void 0),e.K=2,e.v=ca(un(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(e.v.toString(),"")),!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=G_(e.l,null),e.g.da(e.v)),e.F=Date.now(),gr(e)}V_(t)}function da(t){t.g&&(Au(t),t.g.cancel(),t.g=null)}function U_(t){da(t),t.u&&(V.clearTimeout(t.u),t.u=null),Io(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function pa(t){R_(t.h)||t.m||(t.m=!0,l_(t.Ja,t),t.C=0)}function iN(t,e){return A_(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=fr(Je(t.Ja,t,e),W_(t,t.C)),t.C++,!0)}M.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new pr(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=e_(r),t_(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$_(this,i,e),n=un(this.F),Ie(n,"RID",t),Ie(n,"CVER",22),this.D&&Ie(n,"X-HTTP-Session-Id",this.D),_r(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(L_(r)))+"&"+e:this.o&&Cu(n,this.o,r)),Tu(this.h,i),this.Ya&&Ie(n,"TYPE","init"),this.O?(Ie(n,"$req",e),Ie(n,"SID","null"),i.Z=!0,Xl(i,n,null)):Xl(i,n,e),this.G=2}}else this.G==3&&(t?rd(this,t):this.i.length==0||R_(this.h)||rd(this))};function rd(t,e){var n;e?n=e.m:n=t.U++;const s=un(t.F);Ie(s,"SID",t.I),Ie(s,"RID",n),Ie(s,"AID",t.T),_r(t,s),t.o&&t.s&&Cu(s,t.o,t.s),n=new pr(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=$_(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Tu(t.h,n),Xl(n,s,e)}function _r(t,e){t.ia&&cu(t.ia,function(n,s){Ie(e,s,n)}),t.l&&w_({},function(n,s){Ie(e,s,n)})}function $_(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Je(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].h;const u=i[l].g;if(c-=r,0>c)r=Math.max(0,i[l].h-100),a=!1;else try{Qk(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function B_(t){t.g||t.u||(t.Z=1,l_(t.Ia,t),t.A=0)}function Ru(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=fr(Je(t.Ia,t),W_(t,t.A)),t.A++,!0)}M.Ia=function(){if(this.u=null,j_(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=fr(Je(this.eb,this),t)}};M.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,nt(10),da(this),j_(this))};function Au(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function j_(t){t.g=new pr(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=un(t.sa);Ie(e,"RID","rpc"),Ie(e,"SID",t.I),Ie(e,"CI",t.L?"0":"1"),Ie(e,"AID",t.T),Ie(e,"TYPE","xmlhttp"),_r(t,e),t.o&&t.s&&Cu(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=ca(un(e)),n.s=null,n.P=!0,__(n,t)}M.cb=function(){this.v!=null&&(this.v=null,da(this),Ru(this),nt(19))};function Io(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function H_(t,e){var n=null;if(t.g==e){Io(t),Au(t),t.g=null;var s=2}else if(Ql(t.h,e))n=e.D,k_(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=_u(),Be(s,new g_(s,n)),pa(t)}else B_(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&iN(t,e)||s==2&&Ru(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Zn(t,5);break;case 4:Zn(t,10);break;case 3:Zn(t,6);break;default:Zn(t,2)}}}function W_(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Zn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Je(t.kb,t);n||(n=new rs("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||wo(n,"https"),ca(n)),Zk(n.toString(),s)}else nt(2);t.G=0,t.l&&t.l.va(e),V_(t),U_(t)}M.kb=function(t){t?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function V_(t){if(t.G=0,t.la=[],t.l){const e=N_(t.h);(e.length!=0||t.i.length!=0)&&(Yf(t.la,e),Yf(t.la,t.i),t.h.i.length=0,au(t.i),t.i.length=0),t.l.ua()}}function K_(t,e,n){var s=n instanceof rs?un(n):new rs(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),To(s,s.m);else{var i=V.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new rs(null,void 0);s&&wo(r,s),e&&(r.g=e),i&&To(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&Ie(s,n,e),Ie(s,"VER",t.ma),_r(t,s),s}function G_(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ke(new ua({jb:!0})):new ke(t.ra),e.Ka(t.H),e}function z_(){}M=z_.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Ra=function(){};function Et(t,e){Le.call(this),this.g=new F_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!vo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!vo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new li(this)}Ve(Et,Le);Et.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;nt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=K_(t,null,t.V),pa(t)};Et.prototype.close=function(){Su(this.g)};Et.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=pu(t),t=n);e.i.push(new Yk(e.ab++,t)),e.G==3&&pa(e)};Et.prototype.M=function(){this.g.l=null,delete this.j,Su(this.g),delete this.g,Et.X.M.call(this)};function q_(t){Eu.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ve(q_,Eu);function Y_(){wu.call(this),this.status=1}Ve(Y_,wu);function li(t){this.g=t}Ve(li,z_);li.prototype.xa=function(){Be(this.g,"a")};li.prototype.wa=function(t){Be(this.g,new q_(t))};li.prototype.va=function(t){Be(this.g,new Y_)};li.prototype.ua=function(){Be(this.g,"b")};Et.prototype.send=Et.prototype.u;Et.prototype.open=Et.prototype.m;Et.prototype.close=Et.prototype.close;yu.NO_ERROR=0;yu.TIMEOUT=8;yu.HTTP_ERROR=6;Lk.COMPLETE="complete";Fk.EventType=dr;dr.OPEN="a";dr.CLOSE="b";dr.ERROR="c";dr.MESSAGE="d";Le.prototype.listen=Le.prototype.N;ke.prototype.listenOnce=ke.prototype.O;ke.prototype.getLastError=ke.prototype.Oa;ke.prototype.getLastErrorCode=ke.prototype.Ea;ke.prototype.getStatus=ke.prototype.aa;ke.prototype.getResponseJson=ke.prototype.Sa;ke.prototype.getResponseText=ke.prototype.fa;ke.prototype.send=ke.prototype.da;ke.prototype.setWithCredentials=ke.prototype.Ka;const od="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yr="9.17.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new tr("@firebase/firestore");function ct(t,...e){if(qs.logLevel<=ie.DEBUG){const n=e.map(Nu);qs.debug(`Firestore (${yr}): ${t}`,...n)}}function ku(t,...e){if(qs.logLevel<=ie.ERROR){const n=e.map(Nu);qs.error(`Firestore (${yr}): ${t}`,...n)}}function rN(t,...e){if(qs.logLevel<=ie.WARN){const n=e.map(Nu);qs.warn(`Firestore (${yr}): ${t}`,...n)}}function Nu(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t="Unexpected state"){const e=`FIRESTORE (${yr}) INTERNAL ASSERTION FAILED: `+t;throw ku(e),new Error(e)}function bo(t,e){t||Zi()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class He extends Yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class aN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lN{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new Us;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Us,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{ct("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ct("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Us)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ct("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(bo(typeof s.accessToken=="string"),new X_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return bo(e===null||typeof e=="string"),new Ke(e)}}class cN{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(bo(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class uN{constructor(e,n,s,i){this.h=e,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new cN(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fN{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const s=r=>{r.error!=null&&ct("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,ct("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{ct("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):ct("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(bo(typeof n.token=="string"),this.A=n.token,new hN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=dN(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n,s){n===void 0?n=0:n>e.length&&Zi(),s===void 0?s=e.length-n:s>e.length-n&&Zi(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Co.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Co?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class dt extends Co{construct(e,n,s){return new dt(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new He(je.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new dt(n)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.path=e}static fromPath(e){return new es(dt.fromString(e))}static fromName(e){return new es(dt.fromString(e).popFirst(5))}static empty(){return new es(dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&dt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return dt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new es(new dt(e.slice()))}}function J_(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e,n,s,i,r,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class So{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new So("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof So&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function _N(t){return new mN(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ad,J;(J=ad||(ad={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";function Ya(){return typeof document<"u"?document:null}class yN{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Hs=e,this.timerId=n,this.mo=s,this.yo=i,this.po=r,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),s=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-s);i>0&&ct("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Us,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Ou(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new He(je.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vN(t,e){if(ku("AsyncQueue",`${e}: ${t}`),J_(t))return new He(je.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EN(t,e,n){if(!n)throw new He(je.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wN(t,e,n,s){if(e===!0&&s===!0)throw new He(je.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ld(t){if(es.isDocumentKey(t))throw new He(je.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function TN(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Zi()}function IN(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new He(je.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=TN(t);throw new He(je.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd=new Map;class ud{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new He(je.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new He(je.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,wN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ud({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new He(je.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new He(je.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ud(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new oN;switch(n.type){case"gapi":const s=n.client;return new uN(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new He(je.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=cd.get(e);n&&(ct("ComponentProvider","Removing Datastore"),cd.delete(e),n.terminate())}(this),Promise.resolve()}}function bN(t,e,n,s={}){var i;const r=(t=IN(t,Pu))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&rN("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Ke.MOCK_USER;else{o=PI(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new He(je.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ke(l)}t._authCredentials=new aN(new X_(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $s(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ga(this.firestore,e,this._key)}}class Du{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Du(this.firestore,e,this._query)}}class $s extends Du{constructor(e,n,s){super(e,n,_N(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ga(this.firestore,null,new es(e))}withConverter(e){return new $s(this.firestore,e,this._path)}}function Q_(t,e,...n){if(t=xn(t),EN("collection","path",e),t instanceof Pu){const s=dt.fromString(e,...n);return ld(s),new $s(t,null,s)}{if(!(t instanceof ga||t instanceof $s))throw new He(je.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(dt.fromString(e,...n));return ld(s),new $s(t.firestore,null,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Ke.UNAUTHENTICATED,this.clientId=pN.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{ct("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(ct("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new He(je.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Us;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=vN(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}class SN{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new yN(this,"async_queue_retry"),this.Wc=()=>{const n=Ya();n&&ct("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Ya();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Ya();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Us;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!J_(e))throw e;ct("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(s=>{this.Kc=s,this.Gc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ku("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Gc=!1,s))));return this.Bc=n,n}enqueueAfterDelay(e,n,s){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Ou.createAndSchedule(this,e,n,s,r=>this.Yc(r));return this.Uc.push(i),i}zc(){this.Kc&&Zi()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class RN extends Pu{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new SN,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kN(this),this._firestoreClient.terminate()}}function AN(t,e){const n=typeof t=="object"?t:Nc(),s=typeof t=="string"?t:e||"(default)",i=kc(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=NI("firestore");r&&bN(i,...r)}return i}function kN(t){var e;const n=t._freezeSettings(),s=function(i,r,o,a){return new gN(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new CN(t._authCredentials,t._appCheckCredentials,t._queue,s)}(function(t,e=!0){(function(n){yr=n})(ds),Gt(new Dt("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new RN(new lN(n.getProvider("auth-internal")),new fN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new He(je.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new So(a.options.projectId,l)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),ut(od,"3.8.3",t),ut(od,"3.8.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_="firebasestorage.googleapis.com",NN="storageBucket",ON=2*60*1e3,PN=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Yt{constructor(e,n,s=0){super(Xa(e),`Firebase Storage: ${n} (${Xa(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Xt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var qt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(qt||(qt={}));function Xa(t){return"storage/"+t}function DN(){const t="An unknown error occurred, please check the error payload for server response.";return new Xt(qt.UNKNOWN,t)}function xN(){return new Xt(qt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function MN(){return new Xt(qt.CANCELED,"User canceled the upload/download.")}function LN(t){return new Xt(qt.INVALID_URL,"Invalid URL '"+t+"'.")}function FN(t){return new Xt(qt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function hd(t){return new Xt(qt.INVALID_ARGUMENT,t)}function ey(){return new Xt(qt.APP_DELETED,"The Firebase app was deleted.")}function UN(t){return new Xt(qt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=kt.makeFromUrl(e,n)}catch{return new kt(e,"")}if(s.path==="")return s;throw FN(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(F){F.path_=decodeURIComponent(F.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),m={bucket:1,path:3},w=n===Z_?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",R=new RegExp(`^https?://${w}/${i}/${S}`,"i"),k=[{regex:a,indices:l,postModify:r},{regex:g,indices:m,postModify:c},{regex:R,indices:{bucket:1,path:2},postModify:c}];for(let F=0;F<k.length;F++){const X=k[F],pe=X.regex.exec(e);if(pe){const Re=pe[X.indices.bucket];let j=pe[X.indices.path];j||(j=""),s=new kt(Re,j),X.postModify(s);break}}if(s==null)throw LN(e);return s}}class $N{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...S){c||(c=!0,e.apply(null,S))}function h(S){i=setTimeout(()=>{i=null,t(g,l())},S)}function f(){r&&clearTimeout(r)}function g(S,...R){if(c){f();return}if(S){f(),u.call(null,S,...R);return}if(l()||o){f(),u.call(null,S,...R);return}s<64&&(s*=2);let k;a===1?(a=2,k=0):k=(s+Math.random())*1e3,h(k)}let m=!1;function w(S){m||(m=!0,f(),!c&&(i!==null?(S||(a=2),clearTimeout(i),h(0)):S||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,w(!0)},n),w}function jN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(t){return t!==void 0}function fd(t,e,n,s){if(s<e)throw hd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw hd(`Invalid value for '${t}'. Expected ${n} or less.`)}function WN(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ro;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ro||(Ro={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,n,s,i,r,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,m)=>{this.resolve_=g,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new Mr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===Ro.NO_ERROR,l=r.getStatus();if(!a||VN(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Ro.ABORT;s(!1,new Mr(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new Mr(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());HN(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=DN();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?ey():MN();o(l)}else{const l=xN();o(l)}};this.canceled_?n(!1,new Mr(!1,null,!0)):this.backoffId_=BN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Mr{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function GN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function zN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function YN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function XN(t,e,n,s,i,r,o=!0){const a=WN(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return qN(c,e),GN(c,n),zN(c,r),YN(c,s),new KN(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function QN(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n){this._service=e,n instanceof kt?this._location=n:this._location=kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ao(e,n)}get root(){const e=new kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return QN(this._location.path)}get storage(){return this._service}get parent(){const e=JN(this._location.path);if(e===null)return null;const n=new kt(this._location.bucket,e);return new Ao(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw UN(e)}}function dd(t,e){const n=e==null?void 0:e[NN];return n==null?null:kt.makeFromBucketSpec(n,t)}class ZN{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=Z_,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ON,this._maxUploadRetryTime=PN,this._requests=new Set,i!=null?this._bucket=kt.makeFromBucketSpec(i,this._host):this._bucket=dd(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=kt.makeFromBucketSpec(this._url,e):this._bucket=dd(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ao(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new $N(ey());{const o=XN(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const pd="@firebase/storage",gd="0.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eO="storage";function tO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ZN(n,s,i,e,ds)}function nO(){Gt(new Dt(eO,tO,"PUBLIC").setMultipleInstances(!0)),ut(pd,gd,""),ut(pd,gd,"esm2017")}nO();function sO(t){return(e,n)=>{const s=ES(e,n).run(()=>Ud(t));wS.set(e,s),IS(s,e)}}function iO(t,{firebaseApp:e,modules:n=[]}){t.provide(Ug,e);for(const s of n)t.use(s.bind(null,e))}const rO={apiKey:"AIzaSyCAdfolNq1WskoirrQNg2tWAael1F5so_g",authDomain:"estudiante-b98f0.firebaseapp.com",databaseURL:"https://estudiante-b98f0.firebaseio.com",projectId:"estudiante-b98f0",storageBucket:"estudiante-b98f0.appspot.com",messagingSenderId:"221045732027",appId:"1:221045732027:web:6d7cffc8482f0f3b72af9e"},ty=ig(rO),ny=AN(ty);Q_(ny,"todos");Q_(ny,"names");PE(Rw).use(iO,{firebaseApp:ty,modules:[sO()]}).use(yI).use(TI).mount("#app");export{tt as F,UT as M,fn as _,Jr as a,re as b,Se as c,Dp as d,de as e,Zt as f,op as g,Bt as h,oO as i,rl as j,Kp as k,$T as l,Ci as m,fe as o,an as r,Yn as t,RE as v,pt as w};
