(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function _i(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ie={},rn=[],We=()=>{},Eu=()=>!1,wu=/^on[^a-z]/,zr=t=>wu.test(t),yi=t=>t.startsWith("onUpdate:"),ve=Object.assign,vi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Iu=Object.prototype.hasOwnProperty,z=(t,e)=>Iu.call(t,e),$=Array.isArray,sn=t=>Jr(t)==="[object Map]",Ja=t=>Jr(t)==="[object Set]",j=t=>typeof t=="function",pe=t=>typeof t=="string",qr=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",Ga=t=>(oe(t)||j(t))&&j(t.then)&&j(t.catch),Ya=Object.prototype.toString,Jr=t=>Ya.call(t),Tu=t=>Jr(t).slice(8,-1),Xa=t=>Jr(t)==="[object Object]",bi=t=>pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,gr=_i(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ru=/-(\w)/g,rt=Gr(t=>t.replace(Ru,(e,n)=>n?n.toUpperCase():"")),Su=/\B([A-Z])/g,En=Gr(t=>t.replace(Su,"-$1").toLowerCase()),Yr=Gr(t=>t.charAt(0).toUpperCase()+t.slice(1)),_s=Gr(t=>t?`on${Yr(t)}`:""),zt=(t,e)=>!Object.is(t,e),_r=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Or=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Bs=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Cu=t=>{const e=pe(t)?Number(t):NaN;return isNaN(e)?t:e};let ho;const $s=()=>ho||(ho=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ei(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=pe(r)?ku(r):Ei(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(pe(t)||oe(t))return t}const Au=/;(?![^(]*\))/g,Pu=/:([^]+)/,Ou=/\/\*[^]*?\*\//g;function ku(t){const e={};return t.replace(Ou,"").split(Au).forEach(n=>{if(n){const r=n.split(Pu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Xr(t){let e="";if(pe(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=Xr(t[n]);r&&(e+=r+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Nu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xu=_i(Nu);function Qa(t){return!!t||t===""}const $n=t=>pe(t)?t:t==null?"":$(t)||oe(t)&&(t.toString===Ya||!j(t.toString))?JSON.stringify(t,Za,2):String(t),Za=(t,e)=>e&&e.__v_isRef?Za(t,e.value):sn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ja(e)?{[`Set(${e.size})`]:[...e.values()]}:oe(e)&&!$(e)&&!Xa(e)?String(e):e;let $e;class Du{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$e,!e&&$e&&(this.index=($e.scopes||($e.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=$e;try{return $e=this,e()}finally{$e=n}}}on(){$e=this}off(){$e=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Lu(t,e=$e){e&&e.active&&e.effects.push(t)}function Mu(){return $e}const wi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ec=t=>(t.w&kt)>0,tc=t=>(t.n&kt)>0,Uu=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=kt},Fu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];ec(s)&&!tc(s)?s.delete(t):e[n++]=s,s.w&=~kt,s.n&=~kt}e.length=n}},Hs=new WeakMap;let kn=0,kt=1;const js=30;let Ve;const jt=Symbol(""),Vs=Symbol("");class Ii{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Lu(this,r)}run(){if(!this.active)return this.fn();let e=Ve,n=Ct;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ve,Ve=this,Ct=!0,kt=1<<++kn,kn<=js?Uu(this):po(this),this.fn()}finally{kn<=js&&Fu(this),kt=1<<--kn,Ve=this.parent,Ct=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ve===this?this.deferStop=!0:this.active&&(po(this),this.onStop&&this.onStop(),this.active=!1)}}function po(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Ct=!0;const nc=[];function wn(){nc.push(Ct),Ct=!1}function In(){const t=nc.pop();Ct=t===void 0?!0:t}function Pe(t,e,n){if(Ct&&Ve){let r=Hs.get(t);r||Hs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=wi()),rc(s)}}function rc(t,e){let n=!1;kn<=js?tc(t)||(t.n|=kt,n=!ec(t)):n=!t.has(Ve),n&&(t.add(Ve),Ve.deps.push(t))}function ut(t,e,n,r,s,i){const o=Hs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!qr(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?bi(n)&&a.push(o.get("length")):(a.push(o.get(jt)),sn(t)&&a.push(o.get(Vs)));break;case"delete":$(t)||(a.push(o.get(jt)),sn(t)&&a.push(o.get(Vs)));break;case"set":sn(t)&&a.push(o.get(jt));break}if(a.length===1)a[0]&&Ws(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Ws(wi(c))}}function Ws(t,e){const n=$(t)?t:[...t];for(const r of n)r.computed&&mo(r);for(const r of n)r.computed||mo(r)}function mo(t,e){(t!==Ve||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Bu=_i("__proto__,__v_isRef,__isVue"),sc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qr)),go=$u();function $u(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)Pe(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Y)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){wn();const r=Y(this)[e].apply(this,n);return In(),r}}),t}function Hu(t){const e=Y(this);return Pe(e,"has",t),e.hasOwnProperty(t)}class ic{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?ef:lc:i?cc:ac).get(e))return e;const o=$(e);if(!s){if(o&&z(go,n))return Reflect.get(go,n,r);if(n==="hasOwnProperty")return Hu}const a=Reflect.get(e,n,r);return(qr(n)?sc.has(n):Bu(n))||(s||Pe(e,"get",n),i)?a:Ie(a)?o&&bi(n)?a:a.value:oe(a)?s?fc(a):Zr(a):a}}class oc extends ic{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(dn(i)&&Ie(i)&&!Ie(r))return!1;if(!this._shallow&&(!kr(r)&&!dn(r)&&(i=Y(i),r=Y(r)),!$(e)&&Ie(i)&&!Ie(r)))return i.value=r,!0;const o=$(e)&&bi(n)?Number(n)<e.length:z(e,n),a=Reflect.set(e,n,r,s);return e===Y(s)&&(o?zt(r,i)&&ut(e,"set",n,r):ut(e,"add",n,r)),a}deleteProperty(e,n){const r=z(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ut(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!qr(n)||!sc.has(n))&&Pe(e,"has",n),r}ownKeys(e){return Pe(e,"iterate",$(e)?"length":jt),Reflect.ownKeys(e)}}class ju extends ic{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Vu=new oc,Wu=new ju,Ku=new oc(!0),Ti=t=>t,Qr=t=>Reflect.getPrototypeOf(t);function lr(t,e,n=!1,r=!1){t=t.__v_raw;const s=Y(t),i=Y(e);n||(zt(e,i)&&Pe(s,"get",e),Pe(s,"get",i));const{has:o}=Qr(s),a=r?Ti:n?Ci:Hn;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function ur(t,e=!1){const n=this.__v_raw,r=Y(n),s=Y(t);return e||(zt(t,s)&&Pe(r,"has",t),Pe(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function fr(t,e=!1){return t=t.__v_raw,!e&&Pe(Y(t),"iterate",jt),Reflect.get(t,"size",t)}function _o(t){t=Y(t);const e=Y(this);return Qr(e).has.call(e,t)||(e.add(t),ut(e,"add",t,t)),this}function yo(t,e){e=Y(e);const n=Y(this),{has:r,get:s}=Qr(n);let i=r.call(n,t);i||(t=Y(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?zt(e,o)&&ut(n,"set",t,e):ut(n,"add",t,e),this}function vo(t){const e=Y(this),{has:n,get:r}=Qr(e);let s=n.call(e,t);s||(t=Y(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ut(e,"delete",t,void 0),i}function bo(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&ut(t,"clear",void 0,void 0),n}function dr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Y(o),c=e?Ti:t?Ci:Hn;return!t&&Pe(a,"iterate",jt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function hr(t,e,n){return function(...r){const s=this.__v_raw,i=Y(s),o=sn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ti:e?Ci:Hn;return!e&&Pe(i,"iterate",c?Vs:jt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function gt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function zu(){const t={get(i){return lr(this,i)},get size(){return fr(this)},has:ur,add:_o,set:yo,delete:vo,clear:bo,forEach:dr(!1,!1)},e={get(i){return lr(this,i,!1,!0)},get size(){return fr(this)},has:ur,add:_o,set:yo,delete:vo,clear:bo,forEach:dr(!1,!0)},n={get(i){return lr(this,i,!0)},get size(){return fr(this,!0)},has(i){return ur.call(this,i,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:dr(!0,!1)},r={get(i){return lr(this,i,!0,!0)},get size(){return fr(this,!0)},has(i){return ur.call(this,i,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:dr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=hr(i,!1,!1),n[i]=hr(i,!0,!1),e[i]=hr(i,!1,!0),r[i]=hr(i,!0,!0)}),[t,n,e,r]}const[qu,Ju,Gu,Yu]=zu();function Ri(t,e){const n=e?t?Yu:Gu:t?Ju:qu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(z(n,s)&&s in r?n:r,s,i)}const Xu={get:Ri(!1,!1)},Qu={get:Ri(!1,!0)},Zu={get:Ri(!0,!1)},ac=new WeakMap,cc=new WeakMap,lc=new WeakMap,ef=new WeakMap;function tf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nf(t){return t.__v_skip||!Object.isExtensible(t)?0:tf(Tu(t))}function Zr(t){return dn(t)?t:Si(t,!1,Vu,Xu,ac)}function uc(t){return Si(t,!1,Ku,Qu,cc)}function fc(t){return Si(t,!0,Wu,Zu,lc)}function Si(t,e,n,r,s){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=nf(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function on(t){return dn(t)?on(t.__v_raw):!!(t&&t.__v_isReactive)}function dn(t){return!!(t&&t.__v_isReadonly)}function kr(t){return!!(t&&t.__v_isShallow)}function dc(t){return on(t)||dn(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function hc(t){return Or(t,"__v_skip",!0),t}const Hn=t=>oe(t)?Zr(t):t,Ci=t=>oe(t)?fc(t):t;function pc(t){Ct&&Ve&&(t=Y(t),rc(t.dep||(t.dep=wi())))}function mc(t,e){t=Y(t);const n=t.dep;n&&Ws(n)}function Ie(t){return!!(t&&t.__v_isRef===!0)}function le(t){return gc(t,!1)}function rf(t){return gc(t,!0)}function gc(t,e){return Ie(t)?t:new sf(t,e)}class sf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:Hn(e)}get value(){return pc(this),this._value}set value(e){const n=this.__v_isShallow||kr(e)||dn(e);e=n?e:Y(e),zt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Hn(e),mc(this))}}function ge(t){return Ie(t)?t.value:t}const of={get:(t,e,n)=>ge(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ie(s)&&!Ie(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function _c(t){return on(t)?t:new Proxy(t,of)}class af{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ii(e,()=>{this._dirty||(this._dirty=!0,mc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Y(this);return pc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function cf(t,e,n=!1){let r,s;const i=j(t);return i?(r=t,s=We):(r=t.get,s=t.set),new af(r,s,i||!s,n)}function At(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Zn(i,e,n)}return s}function Ke(t,e,n,r){if(j(t)){const i=At(t,e,n,r);return i&&Ga(i)&&i.catch(o=>{Zn(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ke(t[i],e,n,r));return s}function Zn(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){At(c,null,10,[t,o,a]);return}}lf(t,n,s,r)}function lf(t,e,n,r=!0){console.error(t)}let jn=!1,Ks=!1;const we=[];let Ze=0;const an=[];let at=null,Bt=0;const yc=Promise.resolve();let Ai=null;function vc(t){const e=Ai||yc;return t?e.then(this?t.bind(this):t):e}function uf(t){let e=Ze+1,n=we.length;for(;e<n;){const r=e+n>>>1,s=we[r],i=Vn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Pi(t){(!we.length||!we.includes(t,jn&&t.allowRecurse?Ze+1:Ze))&&(t.id==null?we.push(t):we.splice(uf(t.id),0,t),bc())}function bc(){!jn&&!Ks&&(Ks=!0,Ai=yc.then(wc))}function ff(t){const e=we.indexOf(t);e>Ze&&we.splice(e,1)}function zs(t){$(t)?an.push(...t):(!at||!at.includes(t,t.allowRecurse?Bt+1:Bt))&&an.push(t),bc()}function Eo(t,e=jn?Ze+1:0){for(;e<we.length;e++){const n=we[e];n&&n.pre&&(we.splice(e,1),e--,n())}}function Ec(t){if(an.length){const e=[...new Set(an)];if(an.length=0,at){at.push(...e);return}for(at=e,at.sort((n,r)=>Vn(n)-Vn(r)),Bt=0;Bt<at.length;Bt++)at[Bt]();at=null,Bt=0}}const Vn=t=>t.id==null?1/0:t.id,df=(t,e)=>{const n=Vn(t)-Vn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function wc(t){Ks=!1,jn=!0,we.sort(df);const e=We;try{for(Ze=0;Ze<we.length;Ze++){const n=we[Ze];n&&n.active!==!1&&At(n,null,14)}}finally{Ze=0,we.length=0,Ec(),jn=!1,Ai=null,(we.length||an.length)&&wc()}}function hf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ie;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[u]||ie;p&&(s=n.map(_=>pe(_)?_.trim():_)),f&&(s=n.map(Bs))}let a,c=r[a=_s(e)]||r[a=_s(rt(e))];!c&&i&&(c=r[a=_s(En(e))]),c&&Ke(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ke(l,t,6,s)}}function Ic(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const u=Ic(l,e,!0);u&&(a=!0,ve(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(oe(t)&&r.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):ve(o,i),oe(t)&&r.set(t,o),o)}function es(t,e){return!t||!zr(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,En(e))||z(t,e))}let Me=null,ts=null;function Nr(t){const e=Me;return Me=t,ts=t&&t.type.__scopeId||null,e}function Oi(t){ts=t}function ki(){ts=null}function Vt(t,e=Me,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&xo(-1);const i=Nr(e);let o;try{o=t(...s)}finally{Nr(i),r._d&&xo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ys(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:_,ctx:g,inheritAttrs:y}=t;let k,P;const N=Nr(t);try{if(n.shapeFlag&4){const R=s||r,B=R;k=je(u.call(B,R,f,i,_,p,g)),P=c}else{const R=e;k=je(R.length>1?R(i,{attrs:c,slots:a,emit:l}):R(i,null)),P=e.props?c:mf(c)}}catch(R){Mn.length=0,Zn(R,t,1),k=fe(dt)}let F=k;if(P&&y!==!1){const R=Object.keys(P),{shapeFlag:B}=F;R.length&&B&7&&(o&&R.some(yi)&&(P=gf(P,o)),F=pn(F,P))}return n.dirs&&(F=pn(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),k=F,Nr(N),k}function pf(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Mr(r)){if(r.type!==dt||r.children==="v-if"){if(e)return;e=r}}else return}return e}const mf=t=>{let e;for(const n in t)(n==="class"||n==="style"||zr(n))&&((e||(e={}))[n]=t[n]);return e},gf=(t,e)=>{const n={};for(const r in t)(!yi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function _f(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?wo(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!es(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?wo(r,o,l):!0:!!o;return!1}function wo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!es(n,i))return!0}return!1}function Ni({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Tc="components";function xi(t,e){return vf(Tc,t,!0,e)||t}const yf=Symbol.for("v-ndc");function vf(t,e,n=!0,r=!1){const s=Me||ye;if(s){const i=s.type;if(t===Tc){const a=md(i,!1);if(a&&(a===e||a===rt(e)||a===Yr(rt(e))))return i}const o=Io(s[t]||i[t],e)||Io(s.appContext[t],e);return!o&&r?i:o}}function Io(t,e){return t&&(t[e]||t[rt(e)]||t[Yr(rt(e))])}const bf=t=>t.__isSuspense,Ef={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){t==null?If(e,n,r,s,i,o,a,c,l):Tf(t,e,n,r,s,o,a,c,l)},hydrate:Rf,create:Di,normalize:Sf},wf=Ef;function Wn(t,e){const n=t.props&&t.props[e];j(n)&&n()}function If(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:u}}=c,f=u("div"),p=t.suspense=Di(t,s,r,e,f,n,i,o,a,c);l(null,p.pendingBranch=t.ssContent,f,null,r,p,i,o),p.deps>0?(Wn(t,"onPending"),Wn(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),cn(p,t.ssFallback)):p.resolve(!1,!0)}function Tf(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const p=e.ssContent,_=e.ssFallback,{activeBranch:g,pendingBranch:y,isInFallback:k,isHydrating:P}=f;if(y)f.pendingBranch=p,wt(p,y)?(c(y,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():k&&(c(g,_,n,r,s,null,i,o,a),cn(f,_))):(f.pendingId++,P?(f.isHydrating=!1,f.activeBranch=y):l(y,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),k?(c(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0?f.resolve():(c(g,_,n,r,s,null,i,o,a),cn(f,_))):g&&wt(p,g)?(c(g,p,n,r,s,f,i,o,a),f.resolve(!0)):(c(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0&&f.resolve()));else if(g&&wt(p,g))c(g,p,n,r,s,f,i,o,a),cn(f,p);else if(Wn(e,"onPending"),f.pendingBranch=p,f.pendingId++,c(null,p,f.hiddenContainer,null,s,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:N,pendingId:F}=f;N>0?setTimeout(()=>{f.pendingId===F&&f.fallback(_)},N):N===0&&f.fallback(_)}}function Di(t,e,n,r,s,i,o,a,c,l,u=!1){const{p:f,m:p,um:_,n:g,o:{parentNode:y,remove:k}}=l;let P;const N=Af(t);N&&e!=null&&e.pendingBranch&&(P=e.pendingId,e.deps++);const F=t.props?Cu(t.props.timeout):void 0,R={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof F=="number"?F:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:u,isUnmounted:!1,effects:[],resolve(B=!1,J=!1){const{vnode:se,activeBranch:te,pendingBranch:ae,pendingId:de,effects:_e,parentComponent:xe,container:be}=R;let Ge=!1;if(R.isHydrating)R.isHydrating=!1;else if(!B){Ge=te&&ae.transition&&ae.transition.mode==="out-in",Ge&&(te.transition.afterLeave=()=>{de===R.pendingId&&(p(ae,be,G,0),zs(_e))});let{anchor:G}=R;te&&(G=g(te),_(te,xe,R,!0)),Ge||p(ae,be,G,0)}cn(R,ae),R.pendingBranch=null,R.isInFallback=!1;let De=R.parent,ce=!1;for(;De;){if(De.pendingBranch){De.effects.push(..._e),ce=!0;break}De=De.parent}!ce&&!Ge&&zs(_e),R.effects=[],N&&e&&e.pendingBranch&&P===e.pendingId&&(e.deps--,e.deps===0&&!J&&e.resolve()),Wn(se,"onResolve")},fallback(B){if(!R.pendingBranch)return;const{vnode:J,activeBranch:se,parentComponent:te,container:ae,isSVG:de}=R;Wn(J,"onFallback");const _e=g(se),xe=()=>{R.isInFallback&&(f(null,B,ae,_e,te,null,de,a,c),cn(R,B))},be=B.transition&&B.transition.mode==="out-in";be&&(se.transition.afterLeave=xe),R.isInFallback=!0,_(se,te,null,!0),be||xe()},move(B,J,se){R.activeBranch&&p(R.activeBranch,B,J,se),R.container=B},next(){return R.activeBranch&&g(R.activeBranch)},registerDep(B,J){const se=!!R.pendingBranch;se&&R.deps++;const te=B.vnode.el;B.asyncDep.catch(ae=>{Zn(ae,B,0)}).then(ae=>{if(B.isUnmounted||R.isUnmounted||R.pendingId!==B.suspenseId)return;B.asyncResolved=!0;const{vnode:de}=B;Qs(B,ae,!1),te&&(de.el=te);const _e=!te&&B.subTree.el;J(B,de,y(te||B.subTree.el),te?null:g(B.subTree),R,o,c),_e&&k(_e),Ni(B,de.el),se&&--R.deps===0&&R.resolve()})},unmount(B,J){R.isUnmounted=!0,R.activeBranch&&_(R.activeBranch,n,B,J),R.pendingBranch&&_(R.pendingBranch,n,B,J)}};return R}function Rf(t,e,n,r,s,i,o,a,c){const l=e.suspense=Di(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),u=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),u}function Sf(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=To(r?n.default:n),t.ssFallback=r?To(n.fallback):fe(dt)}function To(t){let e;if(j(t)){const n=hn&&t._c;n&&(t._d=!1,ue()),t=t(),n&&(t._d=!0,e=Ue,Hc())}return $(t)&&(t=pf(t)),t=je(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Cf(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):zs(t)}function cn(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,Ni(r,s))}function Af(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const pr={};function yr(t,e,n){return Rc(t,e,n)}function Rc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ie){var a;const c=Mu()===((a=ye)==null?void 0:a.scope)?ye:null;let l,u=!1,f=!1;if(Ie(t)?(l=()=>t.value,u=kr(t)):on(t)?(l=()=>t,r=!0):$(t)?(f=!0,u=t.some(R=>on(R)||kr(R)),l=()=>t.map(R=>{if(Ie(R))return R.value;if(on(R))return Ht(R);if(j(R))return At(R,c,2)})):j(t)?e?l=()=>At(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),Ke(t,c,3,[_])}:l=We,e&&r){const R=l;l=()=>Ht(R())}let p,_=R=>{p=N.onStop=()=>{At(R,c,4),p=N.onStop=void 0}},g;if(Kn)if(_=We,e?n&&Ke(e,c,3,[l(),f?[]:void 0,_]):l(),s==="sync"){const R=yd();g=R.__watcherHandles||(R.__watcherHandles=[])}else return We;let y=f?new Array(t.length).fill(pr):pr;const k=()=>{if(N.active)if(e){const R=N.run();(r||u||(f?R.some((B,J)=>zt(B,y[J])):zt(R,y)))&&(p&&p(),Ke(e,c,3,[R,y===pr?void 0:f&&y[0]===pr?[]:y,_]),y=R)}else N.run()};k.allowRecurse=!!e;let P;s==="sync"?P=k:s==="post"?P=()=>Ae(k,c&&c.suspense):(k.pre=!0,c&&(k.id=c.uid),P=()=>Pi(k));const N=new Ii(l,P);e?n?k():y=N.run():s==="post"?Ae(N.run.bind(N),c&&c.suspense):N.run();const F=()=>{N.stop(),c&&c.scope&&vi(c.scope.effects,N)};return g&&g.push(F),F}function Pf(t,e,n){const r=this.proxy,s=pe(t)?t.includes(".")?Sc(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=ye;mn(this);const a=Rc(s,i.bind(r),n);return o?mn(o):Wt(),a}function Sc(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ht(t,e){if(!oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ie(t))Ht(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Ht(t[n],e);else if(Ja(t)||sn(t))t.forEach(n=>{Ht(n,e)});else if(Xa(t))for(const n in t)Ht(t[n],e);return t}function Le(t,e){const n=Me;if(n===null)return t;const r=is(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ie]=e[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&Ht(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Mt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(wn(),Ke(c,n,8,[t.el,a,t,e]),In())}}/*! #__NO_SIDE_EFFECTS__ */function Cc(t,e){return j(t)?(()=>ve({name:t.name},e,{setup:t}))():t}const vr=t=>!!t.type.__asyncLoader,Ac=t=>t.type.__isKeepAlive;function Of(t,e){Pc(t,"a",e)}function kf(t,e){Pc(t,"da",e)}function Pc(t,e,n=ye){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ns(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ac(s.parent.vnode)&&Nf(r,e,n,s),s=s.parent}}function Nf(t,e,n,r){const s=ns(e,t,r,!0);kc(()=>{vi(r[e],s)},n)}function ns(t,e,n=ye,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;wn(),mn(n);const a=Ke(e,n,t,o);return Wt(),In(),a});return r?s.unshift(i):s.push(i),i}}const pt=t=>(e,n=ye)=>(!Kn||t==="sp")&&ns(t,(...r)=>e(...r),n),xf=pt("bm"),Oc=pt("m"),Df=pt("bu"),Lf=pt("u"),Mf=pt("bum"),kc=pt("um"),Uf=pt("sp"),Ff=pt("rtg"),Bf=pt("rtc");function $f(t,e=ye){ns("ec",t,e)}function Nc(t,e,n,r){let s;const i=n&&n[r];if($(t)||pe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(oe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const qs=t=>t?Wc(t)?is(t)||t.proxy:qs(t.parent):null,Ln=ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qs(t.parent),$root:t=>qs(t.root),$emit:t=>t.emit,$options:t=>Li(t),$forceUpdate:t=>t.f||(t.f=()=>Pi(t.update)),$nextTick:t=>t.n||(t.n=vc.bind(t.proxy)),$watch:t=>Pf.bind(t)}),vs=(t,e)=>t!==ie&&!t.__isScriptSetup&&z(t,e),Hf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(vs(r,e))return o[e]=1,r[e];if(s!==ie&&z(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&z(l,e))return o[e]=3,i[e];if(n!==ie&&z(n,e))return o[e]=4,n[e];Js&&(o[e]=0)}}const u=Ln[e];let f,p;if(u)return e==="$attrs"&&Pe(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ie&&z(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,z(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return vs(s,e)?(s[e]=n,!0):r!==ie&&z(r,e)?(r[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ie&&z(t,o)||vs(e,o)||(a=i[0])&&z(a,o)||z(r,o)||z(Ln,o)||z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ro(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Js=!0;function jf(t){const e=Li(t),n=t.proxy,r=t.ctx;Js=!1,e.beforeCreate&&So(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:_,updated:g,activated:y,deactivated:k,beforeDestroy:P,beforeUnmount:N,destroyed:F,unmounted:R,render:B,renderTracked:J,renderTriggered:se,errorCaptured:te,serverPrefetch:ae,expose:de,inheritAttrs:_e,components:xe,directives:be,filters:Ge}=e;if(l&&Vf(l,r,null),o)for(const G in o){const X=o[G];j(X)&&(r[G]=X.bind(n))}if(s){const G=s.call(n,n);oe(G)&&(t.data=Zr(G))}if(Js=!0,i)for(const G in i){const X=i[G],it=j(X)?X.bind(n,n):j(X.get)?X.get.bind(n,n):We,mt=!j(X)&&j(X.set)?X.set.bind(n):We,Ye=Ne({get:it,set:mt});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:Ce=>Ye.value=Ce})}if(a)for(const G in a)xc(a[G],r,n,G);if(c){const G=j(c)?c.call(n):c;Reflect.ownKeys(G).forEach(X=>{br(X,G[X])})}u&&So(u,t,"c");function ce(G,X){$(X)?X.forEach(it=>G(it.bind(n))):X&&G(X.bind(n))}if(ce(xf,f),ce(Oc,p),ce(Df,_),ce(Lf,g),ce(Of,y),ce(kf,k),ce($f,te),ce(Bf,J),ce(Ff,se),ce(Mf,N),ce(kc,R),ce(Uf,ae),$(de))if(de.length){const G=t.exposed||(t.exposed={});de.forEach(X=>{Object.defineProperty(G,X,{get:()=>n[X],set:it=>n[X]=it})})}else t.exposed||(t.exposed={});B&&t.render===We&&(t.render=B),_e!=null&&(t.inheritAttrs=_e),xe&&(t.components=xe),be&&(t.directives=be)}function Vf(t,e,n=We){$(t)&&(t=Gs(t));for(const r in t){const s=t[r];let i;oe(s)?"default"in s?i=ze(s.from||r,s.default,!0):i=ze(s.from||r):i=ze(s),Ie(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function So(t,e,n){Ke($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function xc(t,e,n,r){const s=r.includes(".")?Sc(n,r):()=>n[r];if(pe(t)){const i=e[t];j(i)&&yr(s,i)}else if(j(t))yr(s,t.bind(n));else if(oe(t))if($(t))t.forEach(i=>xc(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&yr(s,i,t)}}function Li(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>xr(c,l,o,!0)),xr(c,e,o)),oe(e)&&i.set(e,c),c}function xr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&xr(t,i,n,!0),s&&s.forEach(o=>xr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Wf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Wf={data:Co,props:Ao,emits:Ao,methods:Nn,computed:Nn,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Nn,directives:Nn,watch:zf,provide:Co,inject:Kf};function Co(t,e){return e?t?function(){return ve(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Kf(t,e){return Nn(Gs(t),Gs(e))}function Gs(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Se(t,e){return t?[...new Set([].concat(t,e))]:e}function Nn(t,e){return t?ve(Object.create(null),t,e):e}function Ao(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:ve(Object.create(null),Ro(t),Ro(e??{})):e}function zf(t,e){if(!t)return e;if(!e)return t;const n=ve(Object.create(null),t);for(const r in e)n[r]=Se(t[r],e[r]);return n}function Dc(){return{app:null,config:{isNativeTag:Eu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qf=0;function Jf(t,e){return function(r,s=null){j(r)||(r=ve({},r)),s!=null&&!oe(s)&&(s=null);const i=Dc(),o=new WeakSet;let a=!1;const c=i.app={_uid:qf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:vd,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&j(l.install)?(o.add(l),l.install(c,...u)):j(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=fe(r,s);return p.appContext=i,u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,is(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Dr=c;try{return l()}finally{Dr=null}}};return c}}let Dr=null;function br(t,e){if(ye){let n=ye.provides;const r=ye.parent&&ye.parent.provides;r===n&&(n=ye.provides=Object.create(r)),n[t]=e}}function ze(t,e,n=!1){const r=ye||Me;if(r||Dr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Dr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}function Gf(t,e,n,r=!1){const s={},i={};Or(i,ss,1),t.propsDefaults=Object.create(null),Lc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:uc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Yf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Y(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(es(t.emitsOptions,p))continue;const _=e[p];if(c)if(z(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const g=rt(p);s[g]=Ys(c,a,g,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{Lc(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!z(e,f)&&((u=En(f))===f||!z(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Ys(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!z(e,f))&&(delete i[f],l=!0)}l&&ut(t,"set","$attrs")}function Lc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(gr(c))continue;const l=e[c];let u;s&&z(s,u=rt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:es(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=Y(n),l=a||ie;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Ys(s,c,f,l[f],t,!z(l,f))}}return o}function Ys(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&j(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(mn(s),r=l[n]=c.call(null,e),Wt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===En(n))&&(r=!0))}return r}function Mc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const u=f=>{c=!0;const[p,_]=Mc(f,e,!0);ve(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return oe(t)&&r.set(t,rn),rn;if($(i))for(let u=0;u<i.length;u++){const f=rt(i[u]);Po(f)&&(o[f]=ie)}else if(i)for(const u in i){const f=rt(u);if(Po(f)){const p=i[u],_=o[f]=$(p)||j(p)?{type:p}:ve({},p);if(_){const g=No(Boolean,_.type),y=No(String,_.type);_[0]=g>-1,_[1]=y<0||g<y,(g>-1||z(_,"default"))&&a.push(f)}}}const l=[o,a];return oe(t)&&r.set(t,l),l}function Po(t){return t[0]!=="$"}function Oo(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ko(t,e){return Oo(t)===Oo(e)}function No(t,e){return $(e)?e.findIndex(n=>ko(n,t)):j(e)&&ko(e,t)?0:-1}const Uc=t=>t[0]==="_"||t==="$stable",Mi=t=>$(t)?t.map(je):[je(t)],Xf=(t,e,n)=>{if(e._n)return e;const r=Vt((...s)=>Mi(e(...s)),n);return r._c=!1,r},Fc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Uc(s))continue;const i=t[s];if(j(i))e[s]=Xf(s,i,r);else if(i!=null){const o=Mi(i);e[s]=()=>o}}},Bc=(t,e)=>{const n=Mi(e);t.slots.default=()=>n},Qf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),Or(e,"_",n)):Fc(e,t.slots={})}else t.slots={},e&&Bc(t,e);Or(t.slots,ss,1)},Zf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ve(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Fc(e,s)),o=e}else e&&(Bc(t,e),o={default:1});if(i)for(const a in s)!Uc(a)&&o[a]==null&&delete s[a]};function Xs(t,e,n,r,s=!1){if($(t)){t.forEach((p,_)=>Xs(p,e&&($(e)?e[_]:e),n,r,s));return}if(vr(r)&&!s)return;const i=r.shapeFlag&4?is(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ie?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(pe(l)?(u[l]=null,z(f,l)&&(f[l]=null)):Ie(l)&&(l.value=null)),j(c))At(c,a,12,[o,u]);else{const p=pe(c),_=Ie(c);if(p||_){const g=()=>{if(t.f){const y=p?z(f,c)?f[c]:u[c]:c.value;s?$(y)&&vi(y,i):$(y)?y.includes(i)||y.push(i):p?(u[c]=[i],z(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,z(f,c)&&(f[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,Ae(g,n)):g()}}}const Ae=Cf;function ed(t){return td(t)}function td(t,e){const n=$s();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:_=We,insertStaticContent:g}=t,y=(d,h,m,v=null,w=null,I=null,O=!1,S=null,C=!!h.dynamicChildren)=>{if(d===h)return;d&&!wt(d,h)&&(v=E(d),Ce(d,w,I,!0),d=null),h.patchFlag===-2&&(C=!1,h.dynamicChildren=null);const{type:T,ref:M,shapeFlag:D}=h;switch(T){case rs:k(d,h,m,v);break;case dt:P(d,h,m,v);break;case bs:d==null&&N(h,m,v,O);break;case ke:xe(d,h,m,v,w,I,O,S,C);break;default:D&1?B(d,h,m,v,w,I,O,S,C):D&6?be(d,h,m,v,w,I,O,S,C):(D&64||D&128)&&T.process(d,h,m,v,w,I,O,S,C,A)}M!=null&&w&&Xs(M,d&&d.ref,I,h||d,!h)},k=(d,h,m,v)=>{if(d==null)r(h.el=a(h.children),m,v);else{const w=h.el=d.el;h.children!==d.children&&l(w,h.children)}},P=(d,h,m,v)=>{d==null?r(h.el=c(h.children||""),m,v):h.el=d.el},N=(d,h,m,v)=>{[d.el,d.anchor]=g(d.children,h,m,v,d.el,d.anchor)},F=({el:d,anchor:h},m,v)=>{let w;for(;d&&d!==h;)w=p(d),r(d,m,v),d=w;r(h,m,v)},R=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),s(d),d=m;s(h)},B=(d,h,m,v,w,I,O,S,C)=>{O=O||h.type==="svg",d==null?J(h,m,v,w,I,O,S,C):ae(d,h,w,I,O,S,C)},J=(d,h,m,v,w,I,O,S)=>{let C,T;const{type:M,props:D,shapeFlag:U,transition:V,dirs:W}=d;if(C=d.el=o(d.type,I,D&&D.is,D),U&8?u(C,d.children):U&16&&te(d.children,C,null,v,w,I&&M!=="foreignObject",O,S),W&&Mt(d,null,v,"created"),se(C,d,d.scopeId,O,v),D){for(const ee in D)ee!=="value"&&!gr(ee)&&i(C,ee,null,D[ee],I,d.children,v,w,Ee);"value"in D&&i(C,"value",null,D.value),(T=D.onVnodeBeforeMount)&&Qe(T,v,d)}W&&Mt(d,null,v,"beforeMount");const re=nd(w,V);re&&V.beforeEnter(C),r(C,h,m),((T=D&&D.onVnodeMounted)||re||W)&&Ae(()=>{T&&Qe(T,v,d),re&&V.enter(C),W&&Mt(d,null,v,"mounted")},w)},se=(d,h,m,v,w)=>{if(m&&_(d,m),v)for(let I=0;I<v.length;I++)_(d,v[I]);if(w){let I=w.subTree;if(h===I){const O=w.vnode;se(d,O,O.scopeId,O.slotScopeIds,w.parent)}}},te=(d,h,m,v,w,I,O,S,C=0)=>{for(let T=C;T<d.length;T++){const M=d[T]=S?bt(d[T]):je(d[T]);y(null,M,h,m,v,w,I,O,S)}},ae=(d,h,m,v,w,I,O)=>{const S=h.el=d.el;let{patchFlag:C,dynamicChildren:T,dirs:M}=h;C|=d.patchFlag&16;const D=d.props||ie,U=h.props||ie;let V;m&&Ut(m,!1),(V=U.onVnodeBeforeUpdate)&&Qe(V,m,h,d),M&&Mt(h,d,m,"beforeUpdate"),m&&Ut(m,!0);const W=w&&h.type!=="foreignObject";if(T?de(d.dynamicChildren,T,S,m,v,W,I):O||X(d,h,S,null,m,v,W,I,!1),C>0){if(C&16)_e(S,h,D,U,m,v,w);else if(C&2&&D.class!==U.class&&i(S,"class",null,U.class,w),C&4&&i(S,"style",D.style,U.style,w),C&8){const re=h.dynamicProps;for(let ee=0;ee<re.length;ee++){const he=re[ee],Be=D[he],Qt=U[he];(Qt!==Be||he==="value")&&i(S,he,Be,Qt,w,d.children,m,v,Ee)}}C&1&&d.children!==h.children&&u(S,h.children)}else!O&&T==null&&_e(S,h,D,U,m,v,w);((V=U.onVnodeUpdated)||M)&&Ae(()=>{V&&Qe(V,m,h,d),M&&Mt(h,d,m,"updated")},v)},de=(d,h,m,v,w,I,O)=>{for(let S=0;S<h.length;S++){const C=d[S],T=h[S],M=C.el&&(C.type===ke||!wt(C,T)||C.shapeFlag&70)?f(C.el):m;y(C,T,M,null,v,w,I,O,!0)}},_e=(d,h,m,v,w,I,O)=>{if(m!==v){if(m!==ie)for(const S in m)!gr(S)&&!(S in v)&&i(d,S,m[S],null,O,h.children,w,I,Ee);for(const S in v){if(gr(S))continue;const C=v[S],T=m[S];C!==T&&S!=="value"&&i(d,S,T,C,O,h.children,w,I,Ee)}"value"in v&&i(d,"value",m.value,v.value)}},xe=(d,h,m,v,w,I,O,S,C)=>{const T=h.el=d?d.el:a(""),M=h.anchor=d?d.anchor:a("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:V}=h;V&&(S=S?S.concat(V):V),d==null?(r(T,m,v),r(M,m,v),te(h.children,m,M,w,I,O,S,C)):D>0&&D&64&&U&&d.dynamicChildren?(de(d.dynamicChildren,U,m,w,I,O,S),(h.key!=null||w&&h===w.subTree)&&$c(d,h,!0)):X(d,h,m,M,w,I,O,S,C)},be=(d,h,m,v,w,I,O,S,C)=>{h.slotScopeIds=S,d==null?h.shapeFlag&512?w.ctx.activate(h,m,v,O,C):Ge(h,m,v,w,I,O,C):De(d,h,C)},Ge=(d,h,m,v,w,I,O)=>{const S=d.component=ud(d,v,w);if(Ac(d)&&(S.ctx.renderer=A),fd(S),S.asyncDep){if(w&&w.registerDep(S,ce),!d.el){const C=S.subTree=fe(dt);P(null,C,h,m)}return}ce(S,d,h,m,w,I,O)},De=(d,h,m)=>{const v=h.component=d.component;if(_f(d,h,m))if(v.asyncDep&&!v.asyncResolved){G(v,h,m);return}else v.next=h,ff(v.update),v.update();else h.el=d.el,v.vnode=h},ce=(d,h,m,v,w,I,O)=>{const S=()=>{if(d.isMounted){let{next:M,bu:D,u:U,parent:V,vnode:W}=d,re=M,ee;Ut(d,!1),M?(M.el=W.el,G(d,M,O)):M=W,D&&_r(D),(ee=M.props&&M.props.onVnodeBeforeUpdate)&&Qe(ee,V,M,W),Ut(d,!0);const he=ys(d),Be=d.subTree;d.subTree=he,y(Be,he,f(Be.el),E(Be),d,w,I),M.el=he.el,re===null&&Ni(d,he.el),U&&Ae(U,w),(ee=M.props&&M.props.onVnodeUpdated)&&Ae(()=>Qe(ee,V,M,W),w)}else{let M;const{el:D,props:U}=h,{bm:V,m:W,parent:re}=d,ee=vr(h);if(Ut(d,!1),V&&_r(V),!ee&&(M=U&&U.onVnodeBeforeMount)&&Qe(M,re,h),Ut(d,!0),D&&Q){const he=()=>{d.subTree=ys(d),Q(D,d.subTree,d,w,null)};ee?h.type.__asyncLoader().then(()=>!d.isUnmounted&&he()):he()}else{const he=d.subTree=ys(d);y(null,he,m,v,d,w,I),h.el=he.el}if(W&&Ae(W,w),!ee&&(M=U&&U.onVnodeMounted)){const he=h;Ae(()=>Qe(M,re,he),w)}(h.shapeFlag&256||re&&vr(re.vnode)&&re.vnode.shapeFlag&256)&&d.a&&Ae(d.a,w),d.isMounted=!0,h=m=v=null}},C=d.effect=new Ii(S,()=>Pi(T),d.scope),T=d.update=()=>C.run();T.id=d.uid,Ut(d,!0),T()},G=(d,h,m)=>{h.component=d;const v=d.vnode.props;d.vnode=h,d.next=null,Yf(d,h.props,v,m),Zf(d,h.children,m),wn(),Eo(),In()},X=(d,h,m,v,w,I,O,S,C=!1)=>{const T=d&&d.children,M=d?d.shapeFlag:0,D=h.children,{patchFlag:U,shapeFlag:V}=h;if(U>0){if(U&128){mt(T,D,m,v,w,I,O,S,C);return}else if(U&256){it(T,D,m,v,w,I,O,S,C);return}}V&8?(M&16&&Ee(T,w,I),D!==T&&u(m,D)):M&16?V&16?mt(T,D,m,v,w,I,O,S,C):Ee(T,w,I,!0):(M&8&&u(m,""),V&16&&te(D,m,v,w,I,O,S,C))},it=(d,h,m,v,w,I,O,S,C)=>{d=d||rn,h=h||rn;const T=d.length,M=h.length,D=Math.min(T,M);let U;for(U=0;U<D;U++){const V=h[U]=C?bt(h[U]):je(h[U]);y(d[U],V,m,null,w,I,O,S,C)}T>M?Ee(d,w,I,!0,!1,D):te(h,m,v,w,I,O,S,C,D)},mt=(d,h,m,v,w,I,O,S,C)=>{let T=0;const M=h.length;let D=d.length-1,U=M-1;for(;T<=D&&T<=U;){const V=d[T],W=h[T]=C?bt(h[T]):je(h[T]);if(wt(V,W))y(V,W,m,null,w,I,O,S,C);else break;T++}for(;T<=D&&T<=U;){const V=d[D],W=h[U]=C?bt(h[U]):je(h[U]);if(wt(V,W))y(V,W,m,null,w,I,O,S,C);else break;D--,U--}if(T>D){if(T<=U){const V=U+1,W=V<M?h[V].el:v;for(;T<=U;)y(null,h[T]=C?bt(h[T]):je(h[T]),m,W,w,I,O,S,C),T++}}else if(T>U)for(;T<=D;)Ce(d[T],w,I,!0),T++;else{const V=T,W=T,re=new Map;for(T=W;T<=U;T++){const Oe=h[T]=C?bt(h[T]):je(h[T]);Oe.key!=null&&re.set(Oe.key,T)}let ee,he=0;const Be=U-W+1;let Qt=!1,lo=0;const Cn=new Array(Be);for(T=0;T<Be;T++)Cn[T]=0;for(T=V;T<=D;T++){const Oe=d[T];if(he>=Be){Ce(Oe,w,I,!0);continue}let Xe;if(Oe.key!=null)Xe=re.get(Oe.key);else for(ee=W;ee<=U;ee++)if(Cn[ee-W]===0&&wt(Oe,h[ee])){Xe=ee;break}Xe===void 0?Ce(Oe,w,I,!0):(Cn[Xe-W]=T+1,Xe>=lo?lo=Xe:Qt=!0,y(Oe,h[Xe],m,null,w,I,O,S,C),he++)}const uo=Qt?rd(Cn):rn;for(ee=uo.length-1,T=Be-1;T>=0;T--){const Oe=W+T,Xe=h[Oe],fo=Oe+1<M?h[Oe+1].el:v;Cn[T]===0?y(null,Xe,m,fo,w,I,O,S,C):Qt&&(ee<0||T!==uo[ee]?Ye(Xe,m,fo,2):ee--)}}},Ye=(d,h,m,v,w=null)=>{const{el:I,type:O,transition:S,children:C,shapeFlag:T}=d;if(T&6){Ye(d.component.subTree,h,m,v);return}if(T&128){d.suspense.move(h,m,v);return}if(T&64){O.move(d,h,m,A);return}if(O===ke){r(I,h,m);for(let D=0;D<C.length;D++)Ye(C[D],h,m,v);r(d.anchor,h,m);return}if(O===bs){F(d,h,m);return}if(v!==2&&T&1&&S)if(v===0)S.beforeEnter(I),r(I,h,m),Ae(()=>S.enter(I),w);else{const{leave:D,delayLeave:U,afterLeave:V}=S,W=()=>r(I,h,m),re=()=>{D(I,()=>{W(),V&&V()})};U?U(I,W,re):re()}else r(I,h,m)},Ce=(d,h,m,v=!1,w=!1)=>{const{type:I,props:O,ref:S,children:C,dynamicChildren:T,shapeFlag:M,patchFlag:D,dirs:U}=d;if(S!=null&&Xs(S,null,m,d,!0),M&256){h.ctx.deactivate(d);return}const V=M&1&&U,W=!vr(d);let re;if(W&&(re=O&&O.onVnodeBeforeUnmount)&&Qe(re,h,d),M&6)cr(d.component,m,v);else{if(M&128){d.suspense.unmount(m,v);return}V&&Mt(d,null,h,"beforeUnmount"),M&64?d.type.remove(d,h,m,w,A,v):T&&(I!==ke||D>0&&D&64)?Ee(T,h,m,!1,!0):(I===ke&&D&384||!w&&M&16)&&Ee(C,h,m),v&&Yt(d)}(W&&(re=O&&O.onVnodeUnmounted)||V)&&Ae(()=>{re&&Qe(re,h,d),V&&Mt(d,null,h,"unmounted")},m)},Yt=d=>{const{type:h,el:m,anchor:v,transition:w}=d;if(h===ke){Xt(m,v);return}if(h===bs){R(d);return}const I=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:O,delayLeave:S}=w,C=()=>O(m,I);S?S(d.el,I,C):C()}else I()},Xt=(d,h)=>{let m;for(;d!==h;)m=p(d),s(d),d=m;s(h)},cr=(d,h,m)=>{const{bum:v,scope:w,update:I,subTree:O,um:S}=d;v&&_r(v),w.stop(),I&&(I.active=!1,Ce(O,d,h,m)),S&&Ae(S,h),Ae(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ee=(d,h,m,v=!1,w=!1,I=0)=>{for(let O=I;O<d.length;O++)Ce(d[O],h,m,v,w)},E=d=>d.shapeFlag&6?E(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),x=(d,h,m)=>{d==null?h._vnode&&Ce(h._vnode,null,null,!0):y(h._vnode||null,d,h,null,null,null,m),Eo(),Ec(),h._vnode=d},A={p:y,um:Ce,m:Ye,r:Yt,mt:Ge,mc:te,pc:X,pbc:de,n:E,o:t};let L,Q;return e&&([L,Q]=e(A)),{render:x,hydrate:L,createApp:Jf(x,L)}}function Ut({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function nd(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $c(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=bt(s[i]),a.el=o.el),n||$c(o,a)),a.type===rs&&(a.el=o.el)}}function rd(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const sd=t=>t.__isTeleport,ke=Symbol.for("v-fgt"),rs=Symbol.for("v-txt"),dt=Symbol.for("v-cmt"),bs=Symbol.for("v-stc"),Mn=[];let Ue=null;function ue(t=!1){Mn.push(Ue=t?null:[])}function Hc(){Mn.pop(),Ue=Mn[Mn.length-1]||null}let hn=1;function xo(t){hn+=t}function jc(t){return t.dynamicChildren=hn>0?Ue||rn:null,Hc(),hn>0&&Ue&&Ue.push(t),t}function Te(t,e,n,r,s,i){return jc(q(t,e,n,r,s,i,!0))}function Lr(t,e,n,r,s){return jc(fe(t,e,n,r,s,!0))}function Mr(t){return t?t.__v_isVNode===!0:!1}function wt(t,e){return t.type===e.type&&t.key===e.key}const ss="__vInternal",Vc=({key:t})=>t??null,Er=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?pe(t)||Ie(t)||j(t)?{i:Me,r:t,k:e,f:!!n}:t:null);function q(t,e=null,n=null,r=0,s=null,i=t===ke?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Vc(e),ref:e&&Er(e),scopeId:ts,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Me};return a?(Fi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=pe(n)?8:16),hn>0&&!o&&Ue&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ue.push(c),c}const fe=id;function id(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===yf)&&(t=dt),Mr(t)){const a=pn(t,e,!0);return n&&Fi(a,n),hn>0&&!i&&Ue&&(a.shapeFlag&6?Ue[Ue.indexOf(t)]=a:Ue.push(a)),a.patchFlag|=-2,a}if(gd(t)&&(t=t.__vccOpts),e){e=od(e);let{class:a,style:c}=e;a&&!pe(a)&&(e.class=Xr(a)),oe(c)&&(dc(c)&&!$(c)&&(c=ve({},c)),e.style=Ei(c))}const o=pe(t)?1:bf(t)?128:sd(t)?64:oe(t)?4:j(t)?2:0;return q(t,e,n,r,s,o,i,!0)}function od(t){return t?dc(t)||ss in t?ve({},t):t:null}function pn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?ad(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Vc(a),ref:e&&e.ref?n&&s?$(s)?s.concat(Er(e)):[s,Er(e)]:Er(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ke?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pn(t.ssContent),ssFallback:t.ssFallback&&pn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function wr(t=" ",e=0){return fe(rs,null,t,e)}function Ui(t="",e=!1){return e?(ue(),Lr(dt,null,t)):fe(dt,null,t)}function je(t){return t==null||typeof t=="boolean"?fe(dt):$(t)?fe(ke,null,t.slice()):typeof t=="object"?bt(t):fe(rs,null,String(t))}function bt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:pn(t)}function Fi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Fi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ss in e)?e._ctx=Me:s===3&&Me&&(Me.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:Me},n=32):(e=String(e),r&64?(n=16,e=[wr(e)]):n=8);t.children=e,t.shapeFlag|=n}function ad(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Xr([e.class,r.class]));else if(s==="style")e.style=Ei([e.style,r.style]);else if(zr(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Qe(t,e,n,r=null){Ke(t,e,7,[n,r])}const cd=Dc();let ld=0;function ud(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||cd,i={uid:ld++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Du(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mc(r,s),emitsOptions:Ic(r,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=hf.bind(null,i),t.ce&&t.ce(i),i}let ye=null,Bi,Zt,Do="__VUE_INSTANCE_SETTERS__";(Zt=$s()[Do])||(Zt=$s()[Do]=[]),Zt.push(t=>ye=t),Bi=t=>{Zt.length>1?Zt.forEach(e=>e(t)):Zt[0](t)};const mn=t=>{Bi(t),t.scope.on()},Wt=()=>{ye&&ye.scope.off(),Bi(null)};function Wc(t){return t.vnode.shapeFlag&4}let Kn=!1;function fd(t,e=!1){Kn=e;const{props:n,children:r}=t.vnode,s=Wc(t);Gf(t,n,s,e),Qf(t,r);const i=s?dd(t,e):void 0;return Kn=!1,i}function dd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=hc(new Proxy(t.ctx,Hf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?pd(t):null;mn(t),wn();const i=At(r,t,0,[t.props,s]);if(In(),Wt(),Ga(i)){if(i.then(Wt,Wt),e)return i.then(o=>{Qs(t,o,e)}).catch(o=>{Zn(o,t,0)});t.asyncDep=i}else Qs(t,i,e)}else Kc(t,e)}function Qs(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=_c(e)),Kc(t,n)}let Lo;function Kc(t,e,n){const r=t.type;if(!t.render){if(!e&&Lo&&!r.render){const s=r.template||Li(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ve(ve({isCustomElement:i,delimiters:a},o),c);r.render=Lo(s,l)}}t.render=r.render||We}{mn(t),wn();try{jf(t)}finally{In(),Wt()}}}function hd(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Pe(t,"get","$attrs"),e[n]}}))}function pd(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return hd(t)},slots:t.slots,emit:t.emit,expose:e}}function is(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(_c(hc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ln)return Ln[n](t)},has(e,n){return n in e||n in Ln}}))}function md(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function gd(t){return j(t)&&"__vccOpts"in t}const Ne=(t,e)=>cf(t,e,Kn);function zc(t,e,n){const r=arguments.length;return r===2?oe(e)&&!$(e)?Mr(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Mr(n)&&(n=[n]),fe(t,e,n))}const _d=Symbol.for("v-scx"),yd=()=>ze(_d),vd="3.3.9",bd="http://www.w3.org/2000/svg",$t=typeof document<"u"?document:null,Mo=$t&&$t.createElement("template"),Ed={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?$t.createElementNS(bd,t):$t.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>$t.createTextNode(t),createComment:t=>$t.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$t.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Mo.innerHTML=r?`<svg>${t}</svg>`:t;const a=Mo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wd=Symbol("_vtc");function Id(t,e,n){const r=t[wd];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const $i=Symbol("_vod"),Td={beforeMount(t,{value:e},{transition:n}){t[$i]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):An(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),An(t,!0),r.enter(t)):r.leave(t,()=>{An(t,!1)}):An(t,e))},beforeUnmount(t,{value:e}){An(t,e)}};function An(t,e){t.style.display=e?t[$i]:"none"}function Rd(t,e,n){const r=t.style,s=pe(n);if(n&&!s){if(e&&!pe(e))for(const i in e)n[i]==null&&Zs(r,i,"");for(const i in n)Zs(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),$i in t&&(r.display=i)}}const Uo=/\s*!important$/;function Zs(t,e,n){if($(n))n.forEach(r=>Zs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Sd(t,e);Uo.test(n)?t.setProperty(En(r),n.replace(Uo,""),"important"):t[r]=n}}const Fo=["Webkit","Moz","ms"],Es={};function Sd(t,e){const n=Es[e];if(n)return n;let r=rt(e);if(r!=="filter"&&r in t)return Es[e]=r;r=Yr(r);for(let s=0;s<Fo.length;s++){const i=Fo[s]+r;if(i in t)return Es[e]=i}return e}const Bo="http://www.w3.org/1999/xlink";function Cd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bo,e.slice(6,e.length)):t.setAttributeNS(Bo,e,n);else{const i=xu(e);n==null||i&&!Qa(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ad(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Qa(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function en(t,e,n,r){t.addEventListener(e,n,r)}function Pd(t,e,n,r){t.removeEventListener(e,n,r)}const $o=Symbol("_vei");function Od(t,e,n,r,s=null){const i=t[$o]||(t[$o]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=kd(e);if(r){const l=i[e]=Dd(r,s);en(t,a,l,c)}else o&&(Pd(t,a,o,c),i[e]=void 0)}}const Ho=/(?:Once|Passive|Capture)$/;function kd(t){let e;if(Ho.test(t)){e={};let r;for(;r=t.match(Ho);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):En(t.slice(2)),e]}let ws=0;const Nd=Promise.resolve(),xd=()=>ws||(Nd.then(()=>ws=0),ws=Date.now());function Dd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ke(Ld(r,n.value),e,5,[r])};return n.value=t,n.attached=xd(),n}function Ld(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const jo=/^on[a-z]/,Md=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Id(t,r,s):e==="style"?Rd(t,n,r):zr(e)?yi(e)||Od(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ud(t,e,r,s))?Ad(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Cd(t,e,r,s))};function Ud(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&jo.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||jo.test(e)&&pe(n)?!1:e in t}const Vo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>_r(e,n):e};function Fd(t){t.target.composing=!0}function Wo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Is=Symbol("_assign"),He={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Is]=Vo(s);const i=r||s.props&&s.props.type==="number";en(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Bs(a)),t[Is](a)}),n&&en(t,"change",()=>{t.value=t.value.trim()}),e||(en(t,"compositionstart",Fd),en(t,"compositionend",Wo),en(t,"change",Wo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Is]=Vo(i),t.composing)return;const o=s||t.type==="number"?Bs(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Bd=["ctrl","shift","alt","meta"],$d={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Bd.some(n=>t[`${n}Key`]&&!e.includes(n))},qc=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=$d[e[s]];if(i&&i(n,e))return}return t(n,...r)},Hd=ve({patchProp:Md},Ed);let Ko;function jd(){return Ko||(Ko=ed(Hd))}const Vd=(...t)=>{const e=jd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Wd(r);if(!s)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Wd(t){return pe(t)?document.querySelector(t):t}const Kd="modulepreload",zd=function(t){return"/ChampionHub/"+t},zo={},Ts=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=zd(i),i in zo)return;zo[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const f=s[u];if(f.href===i&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Kd,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const tn=typeof window<"u";function qd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Z=Object.assign;function Rs(t,e){const n={};for(const r in e){const s=e[r];n[r]=qe(s)?s.map(t):t(s)}return n}const Un=()=>{},qe=Array.isArray,Jd=/\/$/,Gd=t=>t.replace(Jd,"");function Ss(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Zd(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Yd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Xd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&gn(e.matched[r],n.matched[s])&&Jc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Jc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Qd(t[n],e[n]))return!1;return!0}function Qd(t,e){return qe(t)?Jo(t,e):qe(e)?Jo(e,t):t===e}function Jo(t,e){return qe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Zd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var zn;(function(t){t.pop="pop",t.push="push"})(zn||(zn={}));var Fn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Fn||(Fn={}));function eh(t){if(!t)if(tn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Gd(t)}const th=/^[^#]+#/;function nh(t,e){return t.replace(th,"#")+e}function rh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const os=()=>({left:window.pageXOffset,top:window.pageYOffset});function sh(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=rh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Go(t,e){return(history.state?history.state.position-e:-1)+t}const ei=new Map;function ih(t,e){ei.set(t,e)}function oh(t){const e=ei.get(t);return ei.delete(t),e}let ah=()=>location.protocol+"//"+location.host;function Gc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),qo(c,"")}return qo(n,t)+r+s}function ch(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const _=Gc(t,location),g=n.value,y=e.value;let k=0;if(p){if(n.value=_,e.value=p,o&&o===g){o=null;return}k=y?p.position-y.position:0}else r(_);s.forEach(P=>{P(n.value,g,{delta:k,type:zn.pop,direction:k?k>0?Fn.forward:Fn.back:Fn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const _=()=>{const g=s.indexOf(p);g>-1&&s.splice(g,1)};return i.push(_),_}function u(){const{history:p}=window;p.state&&p.replaceState(Z({},p.state,{scroll:os()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Yo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?os():null}}function lh(t){const{history:e,location:n}=window,r={value:Gc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:ah()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[u?"replace":"assign"](p)}}function o(c,l){const u=Z({},e.state,Yo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=Z({},s.value,e.state,{forward:c,scroll:os()});i(u.current,u,!0);const f=Z({},Yo(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function uh(t){t=eh(t);const e=lh(t),n=ch(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Z({location:"",base:t,go:r,createHref:nh.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function fh(t){return typeof t=="string"||t&&typeof t=="object"}function Yc(t){return typeof t=="string"||typeof t=="symbol"}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xc=Symbol("");var Xo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xo||(Xo={}));function _n(t,e){return Z(new Error,{type:t,[Xc]:!0},e)}function ot(t,e){return t instanceof Error&&Xc in t&&(e==null||!!(t.type&e))}const Qo="[^/]+?",dh={sensitive:!1,strict:!1,start:!0,end:!0},hh=/[.+*?^${}()[\]/\\]/g;function ph(t,e){const n=Z({},dh,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let _=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(hh,"\\$&"),_+=40;else if(p.type===1){const{value:g,repeatable:y,optional:k,regexp:P}=p;i.push({name:g,repeatable:y,optional:k});const N=P||Qo;if(N!==Qo){_+=10;try{new RegExp(`(${N})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${g}" (${N}): `+R.message)}}let F=y?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;f||(F=k&&l.length<2?`(?:/${F})`:"/"+F),k&&(F+="?"),s+=F,_+=20,k&&(_+=-8),y&&(_+=-20),N===".*"&&(_+=-50)}u.push(_)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const _=u[p]||"",g=i[p-1];f[g.name]=_&&g.repeatable?_.split("/"):_}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const _ of p)if(_.type===0)u+=_.value;else if(_.type===1){const{value:g,repeatable:y,optional:k}=_,P=g in l?l[g]:"";if(qe(P)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const N=qe(P)?P.join("/"):P;if(!N)if(k)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=N}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function mh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function gh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=mh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Zo(r))return 1;if(Zo(s))return-1}return s.length-r.length}function Zo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _h={type:0,value:""},yh=/[a-zA-Z0-9_]/;function vh(t){if(!t)return[[]];if(t==="/")return[[_h]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:yh.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function bh(t,e,n){const r=ph(vh(t.path),n),s=Z(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Eh(t,e){const n=[],r=new Map;e=na({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,p){const _=!p,g=wh(u);g.aliasOf=p&&p.record;const y=na(e,u),k=[g];if("alias"in u){const F=typeof u.alias=="string"?[u.alias]:u.alias;for(const R of F)k.push(Z({},g,{components:p?p.record.components:g.components,path:R,aliasOf:p?p.record:g}))}let P,N;for(const F of k){const{path:R}=F;if(f&&R[0]!=="/"){const B=f.record.path,J=B[B.length-1]==="/"?"":"/";F.path=f.record.path+(R&&J+R)}if(P=bh(F,f,y),p?p.alias.push(P):(N=N||P,N!==P&&N.alias.push(P),_&&u.name&&!ta(P)&&o(u.name)),g.children){const B=g.children;for(let J=0;J<B.length;J++)i(B[J],P,p&&p.children[J])}p=p||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&c(P)}return N?()=>{o(N)}:Un}function o(u){if(Yc(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&gh(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Qc(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!ta(u)&&r.set(u.record.name,u)}function l(u,f){let p,_={},g,y;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw _n(1,{location:u});y=p.record.name,_=Z(ea(f.params,p.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&ea(u.params,p.keys.map(N=>N.name))),g=p.stringify(_)}else if("path"in u)g=u.path,p=n.find(N=>N.re.test(g)),p&&(_=p.parse(g),y=p.record.name);else{if(p=f.name?r.get(f.name):n.find(N=>N.re.test(f.path)),!p)throw _n(1,{location:u,currentLocation:f});y=p.record.name,_=Z({},f.params,u.params),g=p.stringify(_)}const k=[];let P=p;for(;P;)k.unshift(P.record),P=P.parent;return{name:y,path:g,params:_,matched:k,meta:Th(k)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ea(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function wh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ih(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ih(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function ta(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Th(t){return t.reduce((e,n)=>Z(e,n.meta),{})}function na(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Qc(t,e){return e.children.some(n=>n===t||Qc(t,n))}const Zc=/#/g,Rh=/&/g,Sh=/\//g,Ch=/=/g,Ah=/\?/g,el=/\+/g,Ph=/%5B/g,Oh=/%5D/g,tl=/%5E/g,kh=/%60/g,nl=/%7B/g,Nh=/%7C/g,rl=/%7D/g,xh=/%20/g;function Hi(t){return encodeURI(""+t).replace(Nh,"|").replace(Ph,"[").replace(Oh,"]")}function Dh(t){return Hi(t).replace(nl,"{").replace(rl,"}").replace(tl,"^")}function ti(t){return Hi(t).replace(el,"%2B").replace(xh,"+").replace(Zc,"%23").replace(Rh,"%26").replace(kh,"`").replace(nl,"{").replace(rl,"}").replace(tl,"^")}function Lh(t){return ti(t).replace(Ch,"%3D")}function Mh(t){return Hi(t).replace(Zc,"%23").replace(Ah,"%3F")}function Uh(t){return t==null?"":Mh(t).replace(Sh,"%2F")}function Ur(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Fh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(el," "),o=i.indexOf("="),a=Ur(o<0?i:i.slice(0,o)),c=o<0?null:Ur(i.slice(o+1));if(a in e){let l=e[a];qe(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function ra(t){let e="";for(let n in t){const r=t[n];if(n=Lh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(qe(r)?r.map(i=>i&&ti(i)):[r&&ti(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Bh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=qe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const $h=Symbol(""),sa=Symbol(""),as=Symbol(""),ji=Symbol(""),ni=Symbol("");function Pn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Et(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(_n(4,{from:n,to:e})):f instanceof Error?a(f):fh(f)?a(_n(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function Cs(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Hh(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Et(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=qd(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&Et(p,n,r,i,o)()}))}}return s}function Hh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ia(t){const e=ze(as),n=ze(ji),r=Ne(()=>e.resolve(ge(t.to))),s=Ne(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(gn.bind(null,u));if(p>-1)return p;const _=oa(c[l-2]);return l>1&&oa(u)===_&&f[f.length-1].path!==_?f.findIndex(gn.bind(null,c[l-2])):p}),i=Ne(()=>s.value>-1&&Kh(n.params,r.value.params)),o=Ne(()=>s.value>-1&&s.value===n.matched.length-1&&Jc(n.params,r.value.params));function a(c={}){return Wh(c)?e[ge(t.replace)?"replace":"push"](ge(t.to)).catch(Un):Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const jh=Cc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ia,setup(t,{slots:e}){const n=Zr(ia(t)),{options:r}=ze(as),s=Ne(()=>({[aa(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[aa(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:zc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Vh=jh;function Wh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Kh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!qe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function oa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const aa=(t,e,n)=>t??e??n,zh=Cc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=ze(ni),s=Ne(()=>t.route||r.value),i=ze(sa,0),o=Ne(()=>{let l=ge(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Ne(()=>s.value.matched[o.value]);br(sa,Ne(()=>o.value+1)),br($h,a),br(ni,s);const c=le();return yr(()=>[c.value,a.value,t.name],([l,u,f],[p,_,g])=>{u&&(u.instances[f]=l,_&&_!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),l&&u&&(!_||!gn(u,_)||!p)&&(u.enterCallbacks[f]||[]).forEach(y=>y(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return ca(n.default,{Component:p,route:l});const _=f.props[u],g=_?_===!0?l.params:typeof _=="function"?_(l):_:null,k=zc(p,Z({},g,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return ca(n.default,{Component:k,route:l})||k}}});function ca(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const qh=zh;function Jh(t){const e=Eh(t.routes,t),n=t.parseQuery||Fh,r=t.stringifyQuery||ra,s=t.history,i=Pn(),o=Pn(),a=Pn(),c=rf(_t);let l=_t;tn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Rs.bind(null,E=>""+E),f=Rs.bind(null,Uh),p=Rs.bind(null,Ur);function _(E,x){let A,L;return Yc(E)?(A=e.getRecordMatcher(E),L=x):L=E,e.addRoute(L,A)}function g(E){const x=e.getRecordMatcher(E);x&&e.removeRoute(x)}function y(){return e.getRoutes().map(E=>E.record)}function k(E){return!!e.getRecordMatcher(E)}function P(E,x){if(x=Z({},x||c.value),typeof E=="string"){const m=Ss(n,E,x.path),v=e.resolve({path:m.path},x),w=s.createHref(m.fullPath);return Z(m,v,{params:p(v.params),hash:Ur(m.hash),redirectedFrom:void 0,href:w})}let A;if("path"in E)A=Z({},E,{path:Ss(n,E.path,x.path).path});else{const m=Z({},E.params);for(const v in m)m[v]==null&&delete m[v];A=Z({},E,{params:f(m)}),x.params=f(x.params)}const L=e.resolve(A,x),Q=E.hash||"";L.params=u(p(L.params));const d=Yd(r,Z({},E,{hash:Dh(Q),path:L.path})),h=s.createHref(d);return Z({fullPath:d,hash:Q,query:r===ra?Bh(E.query):E.query||{}},L,{redirectedFrom:void 0,href:h})}function N(E){return typeof E=="string"?Ss(n,E,c.value.path):Z({},E)}function F(E,x){if(l!==E)return _n(8,{from:x,to:E})}function R(E){return se(E)}function B(E){return R(Z(N(E),{replace:!0}))}function J(E){const x=E.matched[E.matched.length-1];if(x&&x.redirect){const{redirect:A}=x;let L=typeof A=="function"?A(E):A;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=N(L):{path:L},L.params={}),Z({query:E.query,hash:E.hash,params:"path"in L?{}:E.params},L)}}function se(E,x){const A=l=P(E),L=c.value,Q=E.state,d=E.force,h=E.replace===!0,m=J(A);if(m)return se(Z(N(m),{state:typeof m=="object"?Z({},Q,m.state):Q,force:d,replace:h}),x||A);const v=A;v.redirectedFrom=x;let w;return!d&&Xd(r,L,A)&&(w=_n(16,{to:v,from:L}),Ye(L,L,!0,!1)),(w?Promise.resolve(w):de(v,L)).catch(I=>ot(I)?ot(I,2)?I:mt(I):X(I,v,L)).then(I=>{if(I){if(ot(I,2))return se(Z({replace:h},N(I.to),{state:typeof I.to=="object"?Z({},Q,I.to.state):Q,force:d}),x||v)}else I=xe(v,L,!0,h,Q);return _e(v,L,I),I})}function te(E,x){const A=F(E,x);return A?Promise.reject(A):Promise.resolve()}function ae(E){const x=Xt.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(E):E()}function de(E,x){let A;const[L,Q,d]=Gh(E,x);A=Cs(L.reverse(),"beforeRouteLeave",E,x);for(const m of L)m.leaveGuards.forEach(v=>{A.push(Et(v,E,x))});const h=te.bind(null,E,x);return A.push(h),Ee(A).then(()=>{A=[];for(const m of i.list())A.push(Et(m,E,x));return A.push(h),Ee(A)}).then(()=>{A=Cs(Q,"beforeRouteUpdate",E,x);for(const m of Q)m.updateGuards.forEach(v=>{A.push(Et(v,E,x))});return A.push(h),Ee(A)}).then(()=>{A=[];for(const m of d)if(m.beforeEnter)if(qe(m.beforeEnter))for(const v of m.beforeEnter)A.push(Et(v,E,x));else A.push(Et(m.beforeEnter,E,x));return A.push(h),Ee(A)}).then(()=>(E.matched.forEach(m=>m.enterCallbacks={}),A=Cs(d,"beforeRouteEnter",E,x),A.push(h),Ee(A))).then(()=>{A=[];for(const m of o.list())A.push(Et(m,E,x));return A.push(h),Ee(A)}).catch(m=>ot(m,8)?m:Promise.reject(m))}function _e(E,x,A){a.list().forEach(L=>ae(()=>L(E,x,A)))}function xe(E,x,A,L,Q){const d=F(E,x);if(d)return d;const h=x===_t,m=tn?history.state:{};A&&(L||h?s.replace(E.fullPath,Z({scroll:h&&m&&m.scroll},Q)):s.push(E.fullPath,Q)),c.value=E,Ye(E,x,A,h),mt()}let be;function Ge(){be||(be=s.listen((E,x,A)=>{if(!cr.listening)return;const L=P(E),Q=J(L);if(Q){se(Z(Q,{replace:!0}),L).catch(Un);return}l=L;const d=c.value;tn&&ih(Go(d.fullPath,A.delta),os()),de(L,d).catch(h=>ot(h,12)?h:ot(h,2)?(se(h.to,L).then(m=>{ot(m,20)&&!A.delta&&A.type===zn.pop&&s.go(-1,!1)}).catch(Un),Promise.reject()):(A.delta&&s.go(-A.delta,!1),X(h,L,d))).then(h=>{h=h||xe(L,d,!1),h&&(A.delta&&!ot(h,8)?s.go(-A.delta,!1):A.type===zn.pop&&ot(h,20)&&s.go(-1,!1)),_e(L,d,h)}).catch(Un)}))}let De=Pn(),ce=Pn(),G;function X(E,x,A){mt(E);const L=ce.list();return L.length?L.forEach(Q=>Q(E,x,A)):console.error(E),Promise.reject(E)}function it(){return G&&c.value!==_t?Promise.resolve():new Promise((E,x)=>{De.add([E,x])})}function mt(E){return G||(G=!E,Ge(),De.list().forEach(([x,A])=>E?A(E):x()),De.reset()),E}function Ye(E,x,A,L){const{scrollBehavior:Q}=t;if(!tn||!Q)return Promise.resolve();const d=!A&&oh(Go(E.fullPath,0))||(L||!A)&&history.state&&history.state.scroll||null;return vc().then(()=>Q(E,x,d)).then(h=>h&&sh(h)).catch(h=>X(h,E,x))}const Ce=E=>s.go(E);let Yt;const Xt=new Set,cr={currentRoute:c,listening:!0,addRoute:_,removeRoute:g,hasRoute:k,getRoutes:y,resolve:P,options:t,push:R,replace:B,go:Ce,back:()=>Ce(-1),forward:()=>Ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ce.add,isReady:it,install(E){const x=this;E.component("RouterLink",Vh),E.component("RouterView",qh),E.config.globalProperties.$router=x,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>ge(c)}),tn&&!Yt&&c.value===_t&&(Yt=!0,R(s.location).catch(Q=>{}));const A={};for(const Q in _t)Object.defineProperty(A,Q,{get:()=>c.value[Q],enumerable:!0});E.provide(as,x),E.provide(ji,uc(A)),E.provide(ni,c);const L=E.unmount;Xt.add(E),E.unmount=function(){Xt.delete(E),Xt.size<1&&(l=_t,be&&be(),be=null,c.value=_t,Yt=!1,G=!1),L()}}};function Ee(E){return E.reduce((x,A)=>x.then(()=>ae(A)),Promise.resolve())}return cr}function Gh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>gn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>gn(l,c))||s.push(c))}return[n,r,s]}function Yh(){return ze(as)}function Xh(){return ze(ji)}/**
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
 *//**
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
 */const sl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Qh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},il={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),r.push(n[u],n[f],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new Zh;const p=i<<2|a>>4;if(r.push(p),l!==64){const _=a<<4&240|l>>2;if(r.push(_),f!==64){const g=l<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Zh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ep=function(t){const e=sl(t);return il.encodeByteArray(e,!0)},ol=function(t){return ep(t).replace(/\./g,"")},al=function(t){try{return il.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function tp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const np=()=>tp().__FIREBASE_DEFAULTS__,rp=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sp=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&al(t[1]);return e&&JSON.parse(e)},Vi=()=>{try{return np()||rp()||sp()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ip=t=>{var e,n;return(n=(e=Vi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cl=()=>{var t;return(t=Vi())===null||t===void 0?void 0:t.config},ll=t=>{var e;return(e=Vi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class op{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ap(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function cp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function up(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fp(){try{return typeof indexedDB=="object"}catch{return!1}}function dp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const hp="FirebaseError";class Nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hp,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,er.prototype.create)}}class er{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?pp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Nt(s,a,r)}}function pp(t,e){return t.replace(mp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const mp=/\{\$([^}]+)}/g;function gp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(la(i)&&la(o)){if(!Fr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function la(t){return t!==null&&typeof t=="object"}/**
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
 */function tr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Dn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function _p(t,e){const n=new yp(t,e);return n.subscribe.bind(n)}class yp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=As),s.error===void 0&&(s.error=As),s.complete===void 0&&(s.complete=As);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function As(){}/**
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
 */function xt(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ft="[DEFAULT]";/**
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
 */class bp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new op;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wp(e))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ft){return this.instances.has(e)}getOptions(e=Ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ep(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ft){return this.component?this.component.multipleInstances?e:Ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ep(t){return t===Ft?void 0:t}function wp(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ip{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Tp={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Rp=ne.INFO,Sp={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Cp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Sp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ul{constructor(e){this.name=e,this._logLevel=Rp,this._logHandler=Cp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Ap=(t,e)=>e.some(n=>t instanceof n);let ua,fa;function Pp(){return ua||(ua=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Op(){return fa||(fa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fl=new WeakMap,ri=new WeakMap,dl=new WeakMap,Ps=new WeakMap,Wi=new WeakMap;function kp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fl.set(n,t)}).catch(()=>{}),Wi.set(e,t),e}function Np(t){if(ri.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ri.set(t,e)}let si={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ri.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xp(t){si=t(si)}function Dp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Os(this),e,...n);return dl.set(r,e.sort?e.sort():[e]),Pt(r)}:Op().includes(t)?function(...e){return t.apply(Os(this),e),Pt(fl.get(this))}:function(...e){return Pt(t.apply(Os(this),e))}}function Lp(t){return typeof t=="function"?Dp(t):(t instanceof IDBTransaction&&Np(t),Ap(t,Pp())?new Proxy(t,si):t)}function Pt(t){if(t instanceof IDBRequest)return kp(t);if(Ps.has(t))return Ps.get(t);const e=Lp(t);return e!==t&&(Ps.set(t,e),Wi.set(e,t)),e}const Os=t=>Wi.get(t);function Mp(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Pt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Pt(o.result),c.oldVersion,c.newVersion,Pt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Up=["get","getKey","getAll","getAllKeys","count"],Fp=["put","add","delete","clear"],ks=new Map;function da(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ks.get(e))return ks.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Fp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Up.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return ks.set(e,i),i}xp(t=>({...t,get:(e,n,r)=>da(e,n)||t.get(e,n,r),has:(e,n)=>!!da(e,n)||t.has(e,n)}));/**
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
 */class Bp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($p(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $p(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ii="@firebase/app",ha="0.9.24";/**
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
 */const qt=new ul("@firebase/app"),Hp="@firebase/app-compat",jp="@firebase/analytics-compat",Vp="@firebase/analytics",Wp="@firebase/app-check-compat",Kp="@firebase/app-check",zp="@firebase/auth",qp="@firebase/auth-compat",Jp="@firebase/database",Gp="@firebase/database-compat",Yp="@firebase/functions",Xp="@firebase/functions-compat",Qp="@firebase/installations",Zp="@firebase/installations-compat",em="@firebase/messaging",tm="@firebase/messaging-compat",nm="@firebase/performance",rm="@firebase/performance-compat",sm="@firebase/remote-config",im="@firebase/remote-config-compat",om="@firebase/storage",am="@firebase/storage-compat",cm="@firebase/firestore",lm="@firebase/firestore-compat",um="firebase",fm="10.7.0";/**
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
 */const oi="[DEFAULT]",dm={[ii]:"fire-core",[Hp]:"fire-core-compat",[Vp]:"fire-analytics",[jp]:"fire-analytics-compat",[Kp]:"fire-app-check",[Wp]:"fire-app-check-compat",[zp]:"fire-auth",[qp]:"fire-auth-compat",[Jp]:"fire-rtdb",[Gp]:"fire-rtdb-compat",[Yp]:"fire-fn",[Xp]:"fire-fn-compat",[Qp]:"fire-iid",[Zp]:"fire-iid-compat",[em]:"fire-fcm",[tm]:"fire-fcm-compat",[nm]:"fire-perf",[rm]:"fire-perf-compat",[sm]:"fire-rc",[im]:"fire-rc-compat",[om]:"fire-gcs",[am]:"fire-gcs-compat",[cm]:"fire-fst",[lm]:"fire-fst-compat","fire-js":"fire-js",[um]:"fire-js-all"};/**
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
 */const Br=new Map,ai=new Map;function hm(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qn(t){const e=t.name;if(ai.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;ai.set(e,t);for(const n of Br.values())hm(n,t);return!0}function hl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const pm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ot=new er("app","Firebase",pm);/**
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
 */class mm{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const nr=fm;function pl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:oi,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ot.create("bad-app-name",{appName:String(s)});if(n||(n=cl()),!n)throw Ot.create("no-options");const i=Br.get(s);if(i){if(Fr(n,i.options)&&Fr(r,i.config))return i;throw Ot.create("duplicate-app",{appName:s})}const o=new Ip(s);for(const c of ai.values())o.addComponent(c);const a=new mm(n,r,o);return Br.set(s,a),a}function gm(t=oi){const e=Br.get(t);if(!e&&t===oi&&cl())return pl();if(!e)throw Ot.create("no-app",{appName:t});return e}function ln(t,e,n){var r;let s=(r=dm[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}qn(new yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const _m="firebase-heartbeat-database",ym=1,Jn="firebase-heartbeat-store";let Ns=null;function ml(){return Ns||(Ns=Mp(_m,ym,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jn)}}}).catch(t=>{throw Ot.create("idb-open",{originalErrorMessage:t.message})})),Ns}async function vm(t){try{return await(await ml()).transaction(Jn).objectStore(Jn).get(gl(t))}catch(e){if(e instanceof Nt)qt.warn(e.message);else{const n=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(n.message)}}}async function pa(t,e){try{const r=(await ml()).transaction(Jn,"readwrite");await r.objectStore(Jn).put(e,gl(t)),await r.done}catch(n){if(n instanceof Nt)qt.warn(n.message);else{const r=Ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(r.message)}}}function gl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bm=1024,Em=30*24*60*60*1e3;class wm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ma();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Em}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ma(),{heartbeatsToSend:r,unsentEntries:s}=Im(this._heartbeatsCache.heartbeats),i=ol(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ma(){return new Date().toISOString().substring(0,10)}function Im(t,e=bm){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ga(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ga(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Tm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fp()?dp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await vm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pa(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ga(t){return ol(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Rm(t){qn(new yn("platform-logger",e=>new Bp(e),"PRIVATE")),qn(new yn("heartbeat",e=>new wm(e),"PRIVATE")),ln(ii,ha,t),ln(ii,ha,"esm2017"),ln("fire-js","")}Rm("");function Ki(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function _l(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sm=_l,yl=new er("auth","Firebase",_l());/**
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
 */const $r=new ul("@firebase/auth");function Cm(t,...e){$r.logLevel<=ne.WARN&&$r.warn(`Auth (${nr}): ${t}`,...e)}function Ir(t,...e){$r.logLevel<=ne.ERROR&&$r.error(`Auth (${nr}): ${t}`,...e)}/**
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
 */function Je(t,...e){throw zi(t,...e)}function tt(t,...e){return zi(t,...e)}function Am(t,e,n){const r=Object.assign(Object.assign({},Sm()),{[e]:n});return new er("auth","Firebase",r).create(e,{appName:t.name})}function zi(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yl.create(t,...e)}function H(t,e,...n){if(!t)throw zi(e,...n)}function ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ir(e),new Error(e)}function ht(t,e){t||ct(e)}/**
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
 */function ci(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Pm(){return _a()==="http:"||_a()==="https:"}function _a(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Om(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Pm()||cp()||"connection"in navigator)?navigator.onLine:!0}function km(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class rr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ht(n>e,"Short delay should be less than long delay!"),this.isMobile=ap()||lp()}get(){return Om()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qi(t,e){ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class vl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Nm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const xm=new rr(3e4,6e4);function Gt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dt(t,e,n,r,s={}){return bl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=tr(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),vl.fetch()(El(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function bl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Nm),e);try{const s=new Lm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw mr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Am(t,u,l);Je(t,u)}}catch(s){if(s instanceof Nt)throw s;Je(t,"network-request-failed",{message:String(s)})}}async function cs(t,e,n,r,s={}){const i=await Dt(t,e,n,r,s);return"mfaPendingCredential"in i&&Je(t,"multi-factor-auth-required",{_serverResponse:i}),i}function El(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?qi(t.config,s):`${t.config.apiScheme}://${s}`}function Dm(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Lm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tt(this.auth,"network-request-failed")),xm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tt(t,e,r);return s.customData._tokenResponse=n,s}function ya(t){return t!==void 0&&t.enterprise!==void 0}class Mm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Dm(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Um(t,e){return Dt(t,"GET","/v2/recaptchaConfig",Gt(t,e))}/**
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
 */async function Fm(t,e){return Dt(t,"POST","/v1/accounts:delete",e)}async function Bm(t,e){return Dt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Bn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $m(t,e=!1){const n=xt(t),r=await n.getIdToken(e),s=Ji(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Bn(xs(s.auth_time)),issuedAtTime:Bn(xs(s.iat)),expirationTime:Bn(xs(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function xs(t){return Number(t)*1e3}function Ji(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ir("JWT malformed, contained fewer than 3 sections"),null;try{const s=al(n);return s?JSON.parse(s):(Ir("Failed to decode base64 JWT payload"),null)}catch(s){return Ir("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hm(t){const e=Ji(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Gn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nt&&jm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Vm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bn(this.lastLoginAt),this.creationTime=Bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Hr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Gn(t,Bm(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?zm(i.providerUserInfo):[],a=Km(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new wl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function Wm(t){const e=xt(t);await Hr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Km(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zm(t){return t.map(e=>{var{providerId:n}=e,r=Ki(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function qm(t,e){const n=await bl(t,{},async()=>{const r=tr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=El(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jm(t,e){return Dt(t,"POST","/v2/accounts:revokeToken",Gt(t,e))}/**
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
 */class Yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await qm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Yn;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yn,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
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
 */function yt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ki(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Gn(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $m(this,e)}reload(){return Wm(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gn(this,Fm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:F,emailVerified:R,isAnonymous:B,providerData:J,stsTokenManager:se}=n;H(F&&se,e,"internal-error");const te=Yn.fromJSON(this.name,se);H(typeof F=="string",e,"internal-error"),yt(f,e.name),yt(p,e.name),H(typeof R=="boolean",e,"internal-error"),H(typeof B=="boolean",e,"internal-error"),yt(_,e.name),yt(g,e.name),yt(y,e.name),yt(k,e.name),yt(P,e.name),yt(N,e.name);const ae=new Kt({uid:F,auth:e,email:p,emailVerified:R,displayName:f,isAnonymous:B,photoURL:g,phoneNumber:_,tenantId:y,stsTokenManager:te,createdAt:P,lastLoginAt:N});return J&&Array.isArray(J)&&(ae.providerData=J.map(de=>Object.assign({},de))),k&&(ae._redirectEventId=k),ae}static async _fromIdTokenResponse(e,n,r=!1){const s=new Yn;s.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Hr(i),i}}/**
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
 */const va=new Map;function lt(t){ht(t instanceof Function,"Expected a class definition");let e=va.get(t);return e?(ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,va.set(t,e),e)}/**
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
 */class Il{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Il.type="NONE";const ba=Il;/**
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
 */function Tr(t,e,n){return`firebase:${t}:${e}:${n}`}class un{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Tr(this.userKey,s.apiKey,i),this.fullPersistenceKey=Tr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new un(lt(ba),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||lt(ba);const o=Tr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=Kt._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new un(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new un(i,e,r))}}/**
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
 */function Ea(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Tl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Al(e))return"Blackberry";if(Pl(e))return"Webos";if(Gi(e))return"Safari";if((e.includes("chrome/")||Rl(e))&&!e.includes("edge/"))return"Chrome";if(Cl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Tl(t=Re()){return/firefox\//i.test(t)}function Gi(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rl(t=Re()){return/crios\//i.test(t)}function Sl(t=Re()){return/iemobile/i.test(t)}function Cl(t=Re()){return/android/i.test(t)}function Al(t=Re()){return/blackberry/i.test(t)}function Pl(t=Re()){return/webos/i.test(t)}function ls(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gm(t=Re()){var e;return ls(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ym(){return up()&&document.documentMode===10}function Ol(t=Re()){return ls(t)||Cl(t)||Pl(t)||Al(t)||/windows phone/i.test(t)||Sl(t)}function Xm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function kl(t,e=[]){let n;switch(t){case"Browser":n=Ea(Re());break;case"Worker":n=`${Ea(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nr}/${r}`}/**
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
 */class Qm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Zm(t,e={}){return Dt(t,"GET","/v2/passwordPolicy",Gt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const eg=6;class tg{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:eg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class ng{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wa(this),this.idTokenSubscription=new wa(this),this.beforeStateQueue=new Qm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await un.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=km()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zm(this),n=new tg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new er("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lt(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await un.create(this,[lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Cm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tn(t){return xt(t)}class wa{constructor(e){this.auth=e,this.observer=null,this.addObserver=_p(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function rg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Nl(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rg().appendChild(r)})}function sg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ig="https://www.google.com/recaptcha/enterprise.js?render=",og="recaptcha-enterprise",ag="NO_RECAPTCHA";class cg{constructor(e){this.type=og,this.auth=Tn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Um(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Mm(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;ya(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(ag)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ya(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Nl(ig+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ia(t,e,n,r=!1){const s=new cg(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ta(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ia(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ia(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function lg(t,e){const n=hl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Fr(i,e??{}))return s;Je(s,"already-initialized")}return n.initialize({options:e})}function ug(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fg(t,e,n){const r=Tn(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=xl(e),{host:o,port:a}=dg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||hg()}function xl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dg(t){const e=xl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ra(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ra(o)}}}function Ra(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Yi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,n){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}async function pg(t,e){return Dt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function mg(t,e){return cs(t,"POST","/v1/accounts:signInWithPassword",Gt(t,e))}/**
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
 */async function gg(t,e){return cs(t,"POST","/v1/accounts:signInWithEmailLink",Gt(t,e))}async function _g(t,e){return cs(t,"POST","/v1/accounts:signInWithEmailLink",Gt(t,e))}/**
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
 */class Xn extends Yi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Xn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ta(e,n,"signInWithPassword",mg);case"emailLink":return gg(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ta(e,r,"signUpPassword",pg);case"emailLink":return _g(e,{idToken:n,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function fn(t,e){return cs(t,"POST","/v1/accounts:signInWithIdp",Gt(t,e))}/**
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
 */const yg="http://localhost";class Jt extends Yi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ki(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Jt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fn(e,n)}buildRequest(){const e={requestUri:yg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=tr(n)}return e}}/**
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
 */function vg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bg(t){const e=xn(Dn(t)).link,n=e?xn(Dn(e)).deep_link_id:null,r=xn(Dn(t)).deep_link_id;return(r?xn(Dn(r)).link:null)||r||n||e||t}class Xi{constructor(e){var n,r,s,i,o,a;const c=xn(Dn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=vg((s=c.mode)!==null&&s!==void 0?s:null);H(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=bg(e);try{return new Xi(n)}catch{return null}}}/**
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
 */class Rn{constructor(){this.providerId=Rn.PROVIDER_ID}static credential(e,n){return Xn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xi.parseLink(n);return H(r,"argument-error"),Xn._fromEmailAndCode(e,r.code,r.tenantId)}}Rn.PROVIDER_ID="password";Rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Dl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class sr extends Dl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class It extends sr{constructor(){super("facebook.com")}static credential(e){return Jt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
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
 */class Tt extends sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
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
 */class Rt extends sr{constructor(){super("github.com")}static credential(e){return Jt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
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
 */class St extends sr{constructor(){super("twitter.com")}static credential(e,n){return Jt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return St.credential(n,r)}catch{return null}}}St.TWITTER_SIGN_IN_METHOD="twitter.com";St.PROVIDER_ID="twitter.com";/**
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
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kt._fromIdTokenResponse(e,r,s),o=Sa(r);return new vn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Sa(r);return new vn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Sa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class jr extends Nt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,jr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new jr(e,n,r,s)}}function Ll(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?jr._fromErrorAndOperation(t,i,e,r):i})}async function Eg(t,e,n=!1){const r=await Gn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vn._forOperation(t,"link",r)}/**
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
 */async function wg(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Gn(t,Ll(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=Ji(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),vn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Je(r,"user-mismatch"),i}}/**
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
 */async function Ml(t,e,n=!1){const r="signIn",s=await Ll(t,r,e),i=await vn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ig(t,e){return Ml(Tn(t),e)}/**
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
 */async function Tg(t){const e=Tn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Rg(t,e,n){return Ig(xt(t),Rn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Tg(t),r})}function Sg(t,e,n,r){return xt(t).onIdTokenChanged(e,n,r)}function Cg(t,e,n){return xt(t).beforeAuthStateChanged(e,n)}function Ag(t){return xt(t).signOut()}const Vr="__sak";/**
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
 */class Ul{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vr,"1"),this.storage.removeItem(Vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Pg(){const t=Re();return Gi(t)||ls(t)}const Og=1e3,kg=10;class Fl extends Ul{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Pg()&&Xm(),this.fallbackToPolling=Ol(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Ym()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Og)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fl.type="LOCAL";const Ng=Fl;/**
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
 */class Bl extends Ul{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bl.type="SESSION";const $l=Bl;/**
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
 */function xg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class us{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new us(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await xg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}us.receivers=[];/**
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
 */function Qi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Dg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Qi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nt(){return window}function Lg(t){nt().location.href=t}/**
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
 */function Hl(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function Mg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ug(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Fg(){return Hl()?self:null}/**
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
 */const jl="firebaseLocalStorageDb",Bg=1,Wr="firebaseLocalStorage",Vl="fbase_key";class ir{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fs(t,e){return t.transaction([Wr],e?"readwrite":"readonly").objectStore(Wr)}function $g(){const t=indexedDB.deleteDatabase(jl);return new ir(t).toPromise()}function li(){const t=indexedDB.open(jl,Bg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wr,{keyPath:Vl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wr)?e(r):(r.close(),await $g(),e(await li()))})})}async function Ca(t,e,n){const r=fs(t,!0).put({[Vl]:e,value:n});return new ir(r).toPromise()}async function Hg(t,e){const n=fs(t,!1).get(e),r=await new ir(n).toPromise();return r===void 0?null:r.value}function Aa(t,e){const n=fs(t,!0).delete(e);return new ir(n).toPromise()}const jg=800,Vg=3;class Wl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await li(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Vg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=us._getInstance(Fg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mg(),!this.activeServiceWorker)return;this.sender=new Dg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ug()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await li();return await Ca(e,Vr,"1"),await Aa(e,Vr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ca(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Aa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=fs(s,!1).getAll();return new ir(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wl.type="LOCAL";const Wg=Wl;new rr(3e4,6e4);/**
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
 */function Kg(t,e){return e?lt(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zi extends Yi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function zg(t){return Ml(t.auth,new Zi(t),t.bypassAuthState)}function qg(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),wg(n,new Zi(t),t.bypassAuthState)}async function Jg(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Eg(n,new Zi(t),t.bypassAuthState)}/**
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
 */class Kl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zg;case"linkViaPopup":case"linkViaRedirect":return Jg;case"reauthViaPopup":case"reauthViaRedirect":return qg;default:Je(this.auth,"internal-error")}}resolve(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Gg=new rr(2e3,1e4);class nn extends Kl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,nn.currentPopupAction&&nn.currentPopupAction.cancel(),nn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const e=Qi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gg.get())};e()}}nn.currentPopupAction=null;/**
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
 */const Yg="pendingRedirect",Rr=new Map;class Xg extends Kl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Rr.get(this.auth._key());if(!e){try{const r=await Qg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Rr.set(this.auth._key(),e)}return this.bypassAuthState||Rr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qg(t,e){const n=t_(e),r=e_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Zg(t,e){Rr.set(t._key(),e)}function e_(t){return lt(t._redirectPersistence)}function t_(t){return Tr(Yg,t.config.apiKey,t.name)}async function n_(t,e,n=!1){const r=Tn(t),s=Kg(r,e),o=await new Xg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const r_=10*60*1e3;class s_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!i_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=r_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pa(e))}saveEventToCache(e){this.cachedEventUids.add(Pa(e)),this.lastProcessedEventTime=Date.now()}}function Pa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function i_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zl(t);default:return!1}}/**
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
 */async function o_(t,e={}){return Dt(t,"GET","/v1/projects",e)}/**
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
 */const a_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,c_=/^https?/;async function l_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await o_(t);for(const n of e)try{if(u_(n))return}catch{}Je(t,"unauthorized-domain")}function u_(t){const e=ci(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!c_.test(n))return!1;if(a_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const f_=new rr(3e4,6e4);function Oa(){const t=nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function d_(t){return new Promise((e,n)=>{var r,s,i;function o(){Oa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Oa(),n(tt(t,"network-request-failed"))},timeout:f_.get()})}if(!((s=(r=nt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=nt().gapi)===null||i===void 0)&&i.load)o();else{const a=sg("iframefcb");return nt()[a]=()=>{gapi.load?o():n(tt(t,"network-request-failed"))},Nl(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Sr=null,e})}let Sr=null;function h_(t){return Sr=Sr||d_(t),Sr}/**
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
 */const p_=new rr(5e3,15e3),m_="__/auth/iframe",g_="emulator/auth/iframe",__={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},y_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function v_(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qi(e,g_):`https://${t.config.authDomain}/${m_}`,r={apiKey:e.apiKey,appName:t.name,v:nr},s=y_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${tr(r).slice(1)}`}async function b_(t){const e=await h_(t),n=nt().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:v_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:__,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tt(t,"network-request-failed"),a=nt().setTimeout(()=>{i(o)},p_.get());function c(){nt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const E_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},w_=500,I_=600,T_="_blank",R_="http://localhost";class ka{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function S_(t,e,n,r=w_,s=I_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},E_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Re().toLowerCase();n&&(a=Rl(l)?T_:n),Tl(l)&&(e=e||R_,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[_,g])=>`${p}${_}=${g},`,"");if(Gm(l)&&a!=="_self")return C_(e||"",a),new ka(null);const f=window.open(e||"",a,u);H(f,t,"popup-blocked");try{f.focus()}catch{}return new ka(f)}function C_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const A_="__/auth/handler",P_="emulator/auth/handler",O_=encodeURIComponent("fac");async function Na(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:nr,eventId:s};if(e instanceof Dl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(e instanceof sr){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${O_}=${encodeURIComponent(c)}`:"";return`${k_(t)}?${tr(a).slice(1)}${l}`}function k_({config:t}){return t.emulator?qi(t,P_):`https://${t.authDomain}/${A_}`}/**
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
 */const Ds="webStorageSupport";class N_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$l,this._completeRedirectFn=n_,this._overrideRedirectResult=Zg}async _openPopup(e,n,r,s){var i;ht((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Na(e,n,r,ci(),s);return S_(e,o,Qi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Na(e,n,r,ci(),s);return Lg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ht(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await b_(e),r=new s_(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ds,{type:Ds},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ds];o!==void 0&&n(!!o),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=l_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ol()||Gi()||ls()}}const x_=N_;var xa="@firebase/auth",Da="1.5.0";/**
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
 */class D_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function L_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function M_(t){qn(new yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kl(t)},l=new ng(r,s,i,c);return ug(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qn(new yn("auth-internal",e=>{const n=Tn(e.getProvider("auth").getImmediate());return(r=>new D_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ln(xa,Da,L_(t)),ln(xa,Da,"esm2017")}/**
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
 */const U_=5*60,F_=ll("authIdTokenMaxAge")||U_;let La=null;const B_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>F_)return;const s=n==null?void 0:n.token;La!==s&&(La=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $_(t=gm()){const e=hl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lg(t,{popupRedirectResolver:x_,persistence:[Wg,Ng,$l]}),r=ll("authTokenSyncURL");if(r){const i=B_(r);Cg(n,i,()=>i(n.currentUser)),Sg(n,o=>i(o))}const s=ip("auth");return s&&fg(n,`http://${s}`),n}M_("Browser");function H_(t){const e=le(t.currentUser),n=Ne(()=>!!e.value);return t.onIdTokenChanged(r=>e.value=r),{isAuthenticated:n,user:e}}var j_="firebase",V_="10.7.0";/**
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
 */ln(j_,V_,"app");const W_={apiKey:"AIzaSyAuV7Fpi-evKl3eSidJxC5mD2u35CWO_iE",authDomain:"championhubbackend.firebaseapp.com",projectId:"championhubbackend",storageBucket:"championhubbackend.appspot.com",messagingSenderId:"499139504321",appId:"1:499139504321:web:58e0fe3af50550d3384c40"},K_=pl(W_),ui=$_(K_),{isAuthenticated:Ma,user:z_}=H_(ui),eo=()=>({isAuthenticated:Ma,user:z_,login:async(n,r)=>(await Rg(ui,n,r),Ma.value),logout:async()=>{await Ag(ui),co.push({name:"Home"})}});function ql(t,e){return function(){return t.apply(e,arguments)}}const{toString:q_}=Object.prototype,{getPrototypeOf:to}=Object,ds=(t=>e=>{const n=q_.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),st=t=>(t=t.toLowerCase(),e=>ds(e)===t),hs=t=>e=>typeof e===t,{isArray:Sn}=Array,Qn=hs("undefined");function J_(t){return t!==null&&!Qn(t)&&t.constructor!==null&&!Qn(t.constructor)&&Fe(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Jl=st("ArrayBuffer");function G_(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Jl(t.buffer),e}const Y_=hs("string"),Fe=hs("function"),Gl=hs("number"),ps=t=>t!==null&&typeof t=="object",X_=t=>t===!0||t===!1,Cr=t=>{if(ds(t)!=="object")return!1;const e=to(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Q_=st("Date"),Z_=st("File"),ey=st("Blob"),ty=st("FileList"),ny=t=>ps(t)&&Fe(t.pipe),ry=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Fe(t.append)&&((e=ds(t))==="formdata"||e==="object"&&Fe(t.toString)&&t.toString()==="[object FormData]"))},sy=st("URLSearchParams"),iy=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function or(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Sn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function Yl(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Xl=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ql=t=>!Qn(t)&&t!==Xl;function fi(){const{caseless:t}=Ql(this)&&this||{},e={},n=(r,s)=>{const i=t&&Yl(e,s)||s;Cr(e[i])&&Cr(r)?e[i]=fi(e[i],r):Cr(r)?e[i]=fi({},r):Sn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&or(arguments[r],n);return e}const oy=(t,e,n,{allOwnKeys:r}={})=>(or(e,(s,i)=>{n&&Fe(s)?t[i]=ql(s,n):t[i]=s},{allOwnKeys:r}),t),ay=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),cy=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},ly=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&to(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},uy=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},fy=t=>{if(!t)return null;if(Sn(t))return t;let e=t.length;if(!Gl(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},dy=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&to(Uint8Array)),hy=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},py=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},my=st("HTMLFormElement"),gy=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ua=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),_y=st("RegExp"),Zl=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};or(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},yy=t=>{Zl(t,(e,n)=>{if(Fe(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Fe(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},vy=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Sn(t)?r(t):r(String(t).split(e)),n},by=()=>{},Ey=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Ls="abcdefghijklmnopqrstuvwxyz",Fa="0123456789",eu={DIGIT:Fa,ALPHA:Ls,ALPHA_DIGIT:Ls+Ls.toUpperCase()+Fa},wy=(t=16,e=eu.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Iy(t){return!!(t&&Fe(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Ty=t=>{const e=new Array(10),n=(r,s)=>{if(ps(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Sn(r)?[]:{};return or(r,(o,a)=>{const c=n(o,s+1);!Qn(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},Ry=st("AsyncFunction"),Sy=t=>t&&(ps(t)||Fe(t))&&Fe(t.then)&&Fe(t.catch),b={isArray:Sn,isArrayBuffer:Jl,isBuffer:J_,isFormData:ry,isArrayBufferView:G_,isString:Y_,isNumber:Gl,isBoolean:X_,isObject:ps,isPlainObject:Cr,isUndefined:Qn,isDate:Q_,isFile:Z_,isBlob:ey,isRegExp:_y,isFunction:Fe,isStream:ny,isURLSearchParams:sy,isTypedArray:dy,isFileList:ty,forEach:or,merge:fi,extend:oy,trim:iy,stripBOM:ay,inherits:cy,toFlatObject:ly,kindOf:ds,kindOfTest:st,endsWith:uy,toArray:fy,forEachEntry:hy,matchAll:py,isHTMLForm:my,hasOwnProperty:Ua,hasOwnProp:Ua,reduceDescriptors:Zl,freezeMethods:yy,toObjectSet:vy,toCamelCase:gy,noop:by,toFiniteNumber:Ey,findKey:Yl,global:Xl,isContextDefined:Ql,ALPHABET:eu,generateString:wy,isSpecCompliantForm:Iy,toJSONObject:Ty,isAsyncFn:Ry,isThenable:Sy};function K(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}b.inherits(K,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:b.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const tu=K.prototype,nu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{nu[t]={value:t}});Object.defineProperties(K,nu);Object.defineProperty(tu,"isAxiosError",{value:!0});K.from=(t,e,n,r,s,i)=>{const o=Object.create(tu);return b.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),K.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const Cy=null;function di(t){return b.isPlainObject(t)||b.isArray(t)}function ru(t){return b.endsWith(t,"[]")?t.slice(0,-2):t}function Ba(t,e,n){return t?t.concat(e).map(function(s,i){return s=ru(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Ay(t){return b.isArray(t)&&!t.some(di)}const Py=b.toFlatObject(b,{},null,function(e){return/^is[A-Z]/.test(e)});function ms(t,e,n){if(!b.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=b.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,k){return!b.isUndefined(k[y])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&b.isSpecCompliantForm(e);if(!b.isFunction(s))throw new TypeError("visitor must be a function");function l(g){if(g===null)return"";if(b.isDate(g))return g.toISOString();if(!c&&b.isBlob(g))throw new K("Blob is not supported. Use a Buffer instead.");return b.isArrayBuffer(g)||b.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function u(g,y,k){let P=g;if(g&&!k&&typeof g=="object"){if(b.endsWith(y,"{}"))y=r?y:y.slice(0,-2),g=JSON.stringify(g);else if(b.isArray(g)&&Ay(g)||(b.isFileList(g)||b.endsWith(y,"[]"))&&(P=b.toArray(g)))return y=ru(y),P.forEach(function(F,R){!(b.isUndefined(F)||F===null)&&e.append(o===!0?Ba([y],R,i):o===null?y:y+"[]",l(F))}),!1}return di(g)?!0:(e.append(Ba(k,y,i),l(g)),!1)}const f=[],p=Object.assign(Py,{defaultVisitor:u,convertValue:l,isVisitable:di});function _(g,y){if(!b.isUndefined(g)){if(f.indexOf(g)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(g),b.forEach(g,function(P,N){(!(b.isUndefined(P)||P===null)&&s.call(e,P,b.isString(N)?N.trim():N,y,p))===!0&&_(P,y?y.concat(N):[N])}),f.pop()}}if(!b.isObject(t))throw new TypeError("data must be an object");return _(t),e}function $a(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function no(t,e){this._pairs=[],t&&ms(t,this,e)}const su=no.prototype;su.append=function(e,n){this._pairs.push([e,n])};su.toString=function(e){const n=e?function(r){return e.call(this,r,$a)}:$a;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Oy(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function iu(t,e,n){if(!e)return t;const r=n&&n.encode||Oy,s=n&&n.serialize;let i;if(s?i=s(e,n):i=b.isURLSearchParams(e)?e.toString():new no(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class ky{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){b.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Ha=ky,ou={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ny=typeof URLSearchParams<"u"?URLSearchParams:no,xy=typeof FormData<"u"?FormData:null,Dy=typeof Blob<"u"?Blob:null,Ly={isBrowser:!0,classes:{URLSearchParams:Ny,FormData:xy,Blob:Dy},protocols:["http","https","file","blob","url","data"]},au=typeof window<"u"&&typeof document<"u",My=(t=>au&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),Uy=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Fy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:au,hasStandardBrowserEnv:My,hasStandardBrowserWebWorkerEnv:Uy},Symbol.toStringTag,{value:"Module"})),et={...Fy,...Ly};function By(t,e){return ms(t,new et.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return et.isNode&&b.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function $y(t){return b.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Hy(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function cu(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&b.isArray(s)?s.length:o,c?(b.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!b.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&b.isArray(s[o])&&(s[o]=Hy(s[o])),!a)}if(b.isFormData(t)&&b.isFunction(t.entries)){const n={};return b.forEachEntry(t,(r,s)=>{e($y(r),s,n,0)}),n}return null}function jy(t,e,n){if(b.isString(t))try{return(e||JSON.parse)(t),b.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const ro={transitional:ou,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=b.isObject(e);if(i&&b.isHTMLForm(e)&&(e=new FormData(e)),b.isFormData(e))return s&&s?JSON.stringify(cu(e)):e;if(b.isArrayBuffer(e)||b.isBuffer(e)||b.isStream(e)||b.isFile(e)||b.isBlob(e))return e;if(b.isArrayBufferView(e))return e.buffer;if(b.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return By(e,this.formSerializer).toString();if((a=b.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ms(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),jy(e)):e}],transformResponse:[function(e){const n=this.transitional||ro.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&b.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?K.from(a,K.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:et.classes.FormData,Blob:et.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};b.forEach(["delete","get","head","post","put","patch"],t=>{ro.headers[t]={}});const so=ro,Vy=b.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Wy=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Vy[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},ja=Symbol("internals");function On(t){return t&&String(t).trim().toLowerCase()}function Ar(t){return t===!1||t==null?t:b.isArray(t)?t.map(Ar):String(t)}function Ky(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const zy=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Ms(t,e,n,r,s){if(b.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!b.isString(e)){if(b.isString(r))return e.indexOf(r)!==-1;if(b.isRegExp(r))return r.test(e)}}function qy(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Jy(t,e){const n=b.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class gs{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=On(c);if(!u)throw new Error("header name must be a non-empty string");const f=b.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=Ar(a))}const o=(a,c)=>b.forEach(a,(l,u)=>i(l,u,c));return b.isPlainObject(e)||e instanceof this.constructor?o(e,n):b.isString(e)&&(e=e.trim())&&!zy(e)?o(Wy(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=On(e),e){const r=b.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return Ky(s);if(b.isFunction(n))return n.call(this,s,r);if(b.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=On(e),e){const r=b.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||Ms(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=On(o),o){const a=b.findKey(r,o);a&&(!n||Ms(r,r[a],a,n))&&(delete r[a],s=!0)}}return b.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||Ms(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return b.forEach(this,(s,i)=>{const o=b.findKey(r,i);if(o){n[o]=Ar(s),delete n[i];return}const a=e?qy(i):String(i).trim();a!==i&&delete n[i],n[a]=Ar(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return b.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&b.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[ja]=this[ja]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=On(o);r[a]||(Jy(s,o),r[a]=!0)}return b.isArray(e)?e.forEach(i):i(e),this}}gs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);b.reduceDescriptors(gs.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});b.freezeMethods(gs);const ft=gs;function Us(t,e){const n=this||so,r=e||n,s=ft.from(r.headers);let i=r.data;return b.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function lu(t){return!!(t&&t.__CANCEL__)}function ar(t,e,n){K.call(this,t??"canceled",K.ERR_CANCELED,e,n),this.name="CanceledError"}b.inherits(ar,K,{__CANCEL__:!0});function Gy(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new K("Request failed with status code "+n.status,[K.ERR_BAD_REQUEST,K.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Yy=et.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];b.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),b.isString(r)&&o.push("path="+r),b.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Xy(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Qy(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function uu(t,e){return t&&!Xy(e)?Qy(t,e):e}const Zy=et.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=b.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function ev(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function tv(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const _=u&&l-u;return _?Math.round(p*1e3/_):void 0}}function Va(t,e){let n=0;const r=tv(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};u[e?"download":"upload"]=!0,t(u)}}const nv=typeof XMLHttpRequest<"u",rv=nv&&function(t){return new Promise(function(n,r){let s=t.data;const i=ft.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function l(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let u;if(b.isFormData(s)){if(et.hasStandardBrowserEnv||et.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((u=i.getContentType())!==!1){const[y,...k]=u?u.split(";").map(P=>P.trim()).filter(Boolean):[];i.setContentType([y||"multipart/form-data",...k].join("; "))}}let f=new XMLHttpRequest;if(t.auth){const y=t.auth.username||"",k=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+k))}const p=uu(t.baseURL,t.url);f.open(t.method.toUpperCase(),iu(p,t.params,t.paramsSerializer),!0),f.timeout=t.timeout;function _(){if(!f)return;const y=ft.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),P={data:!o||o==="text"||o==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:y,config:t,request:f};Gy(function(F){n(F),l()},function(F){r(F),l()},P),f=null}if("onloadend"in f?f.onloadend=_:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(_)},f.onabort=function(){f&&(r(new K("Request aborted",K.ECONNABORTED,t,f)),f=null)},f.onerror=function(){r(new K("Network Error",K.ERR_NETWORK,t,f)),f=null},f.ontimeout=function(){let k=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const P=t.transitional||ou;t.timeoutErrorMessage&&(k=t.timeoutErrorMessage),r(new K(k,P.clarifyTimeoutError?K.ETIMEDOUT:K.ECONNABORTED,t,f)),f=null},et.hasStandardBrowserEnv&&(a&&b.isFunction(a)&&(a=a(t)),a||a!==!1&&Zy(p))){const y=t.xsrfHeaderName&&t.xsrfCookieName&&Yy.read(t.xsrfCookieName);y&&i.set(t.xsrfHeaderName,y)}s===void 0&&i.setContentType(null),"setRequestHeader"in f&&b.forEach(i.toJSON(),function(k,P){f.setRequestHeader(P,k)}),b.isUndefined(t.withCredentials)||(f.withCredentials=!!t.withCredentials),o&&o!=="json"&&(f.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&f.addEventListener("progress",Va(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",Va(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=y=>{f&&(r(!y||y.type?new ar(null,t,f):y),f.abort(),f=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const g=ev(p);if(g&&et.protocols.indexOf(g)===-1){r(new K("Unsupported protocol "+g+":",K.ERR_BAD_REQUEST,t));return}f.send(s||null)})},hi={http:Cy,xhr:rv};b.forEach(hi,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Wa=t=>`- ${t}`,sv=t=>b.isFunction(t)||t===null||t===!1,fu={getAdapter:t=>{t=b.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!sv(n)&&(r=hi[(o=String(n)).toLowerCase()],r===void 0))throw new K(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(Wa).join(`
`):" "+Wa(i[0]):"as no adapter specified";throw new K("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:hi};function Fs(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ar(null,t)}function Ka(t){return Fs(t),t.headers=ft.from(t.headers),t.data=Us.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),fu.getAdapter(t.adapter||so.adapter)(t).then(function(r){return Fs(t),r.data=Us.call(t,t.transformResponse,r),r.headers=ft.from(r.headers),r},function(r){return lu(r)||(Fs(t),r&&r.response&&(r.response.data=Us.call(t,t.transformResponse,r.response),r.response.headers=ft.from(r.response.headers))),Promise.reject(r)})}const za=t=>t instanceof ft?t.toJSON():t;function bn(t,e){e=e||{};const n={};function r(l,u,f){return b.isPlainObject(l)&&b.isPlainObject(u)?b.merge.call({caseless:f},l,u):b.isPlainObject(u)?b.merge({},u):b.isArray(u)?u.slice():u}function s(l,u,f){if(b.isUndefined(u)){if(!b.isUndefined(l))return r(void 0,l,f)}else return r(l,u,f)}function i(l,u){if(!b.isUndefined(u))return r(void 0,u)}function o(l,u){if(b.isUndefined(u)){if(!b.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in e)return r(l,u);if(f in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(za(l),za(u),!0)};return b.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=c[u]||s,p=f(t[u],e[u],u);b.isUndefined(p)&&f!==a||(n[u]=p)}),n}const du="1.6.2",io={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{io[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const qa={};io.transitional=function(e,n,r){function s(i,o){return"[Axios v"+du+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new K(s(o," has been removed"+(n?" in "+n:"")),K.ERR_DEPRECATED);return n&&!qa[o]&&(qa[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function iv(t,e,n){if(typeof t!="object")throw new K("options must be an object",K.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new K("option "+i+" must be "+c,K.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new K("Unknown option "+i,K.ERR_BAD_OPTION)}}const pi={assertOptions:iv,validators:io},vt=pi.validators;class Kr{constructor(e){this.defaults=e,this.interceptors={request:new Ha,response:new Ha}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=bn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&pi.assertOptions(r,{silentJSONParsing:vt.transitional(vt.boolean),forcedJSONParsing:vt.transitional(vt.boolean),clarifyTimeoutError:vt.transitional(vt.boolean)},!1),s!=null&&(b.isFunction(s)?n.paramsSerializer={serialize:s}:pi.assertOptions(s,{encode:vt.function,serialize:vt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&b.merge(i.common,i[n.method]);i&&b.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=ft.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(c=c&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let u,f=0,p;if(!c){const g=[Ka.bind(this),void 0];for(g.unshift.apply(g,a),g.push.apply(g,l),p=g.length,u=Promise.resolve(n);f<p;)u=u.then(g[f++],g[f++]);return u}p=a.length;let _=n;for(f=0;f<p;){const g=a[f++],y=a[f++];try{_=g(_)}catch(k){y.call(this,k);break}}try{u=Ka.call(this,_)}catch(g){return Promise.reject(g)}for(f=0,p=l.length;f<p;)u=u.then(l[f++],l[f++]);return u}getUri(e){e=bn(this.defaults,e);const n=uu(e.baseURL,e.url);return iu(n,e.params,e.paramsSerializer)}}b.forEach(["delete","get","head","options"],function(e){Kr.prototype[e]=function(n,r){return this.request(bn(r||{},{method:e,url:n,data:(r||{}).data}))}});b.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(bn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Kr.prototype[e]=n(),Kr.prototype[e+"Form"]=n(!0)});const Pr=Kr;class oo{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new ar(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new oo(function(s){e=s}),cancel:e}}}const ov=oo;function av(t){return function(n){return t.apply(null,n)}}function cv(t){return b.isObject(t)&&t.isAxiosError===!0}const mi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(mi).forEach(([t,e])=>{mi[e]=t});const lv=mi;function hu(t){const e=new Pr(t),n=ql(Pr.prototype.request,e);return b.extend(n,Pr.prototype,e,{allOwnKeys:!0}),b.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return hu(bn(t,s))},n}const me=hu(so);me.Axios=Pr;me.CanceledError=ar;me.CancelToken=ov;me.isCancel=lu;me.VERSION=du;me.toFormData=ms;me.AxiosError=K;me.Cancel=me.CanceledError;me.all=function(e){return Promise.all(e)};me.spread=av;me.isAxiosError=cv;me.mergeConfig=bn;me.AxiosHeaders=ft;me.formToJSON=t=>cu(b.isHTMLForm(t)?new FormData(t):t);me.getAdapter=fu.getAdapter;me.HttpStatusCode=lv;me.default=me;const pu=me,mu=le([]),gu=le(1),gi=le(!1),_u=le(1),yu=le(12),vu=le(null),bu=pu.create({baseURL:"https://championhubbackend-node-server.onrender.com",auth:{username:"admin",password:"admin"}}),uv=async()=>{gi.value=!0;const{data:t,headers:e}=await bu.get("/api/champions",{params:{page:_u.value,size:yu.value}});mu.value=t,gu.value=Number(e["x-total-pages"])||1,console.log(t),gi.value=!1},fv=async t=>{const{data:e}=await bu.get(`/api/champions/${t}`);vu.value=e,console.log(e)},ao=()=>({Champions:mu,pages:gu,activePage:_u,loading:gi,pageSize:yu,getChampions:uv,fetchChampion:fv,currentChampion:vu});const Lt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},dv={class:"card-image"},hv=["src"],pv={class:"card-details"},mv={class:"card-details-name font-poppins"},gv={class:"card-details-name"},_v={__name:"MainCardsSingle",props:{Champion:{type:Object,required:!0,default:()=>({id:"aatrox",key:1,name:"Champion Name",title:"Title",tags:"Support",stats:0,description:"Description",icon:"Icon"})}},setup(t){const e=()=>{console.log(`${n.Champion.id} selected`)},n=t;return(r,s)=>{const i=xi("RouterLink");return n.Champion.id?(ue(),Lr(i,{key:0,to:`/api/Champion/${n.Champion.id}`},{default:Vt(()=>[q("div",{class:"card",onClick:e},[q("div",dv,[q("img",{src:n.Champion.icon,alt:"",srcset:""},null,8,hv)]),q("div",pv,[q("p",mv,$n(n.Champion.name),1),q("p",gv,$n(n.Champion.tags),1)])])]),_:1},8,["to"])):Ui("",!0)}}},yv=Lt(_v,[["__scopeId","data-v-f624b94b"]]);const vv=t=>(Oi("data-v-ab80591a"),t=t(),ki(),t),bv={key:0,class:"sub-wrapper"},Ev=vv(()=>q("div",null,"Loading...",-1)),wv={__name:"MainCards",setup(t){const{Champions:e}=ao(),n=le(""),r=Ne(()=>e.value.filter(s=>s.name.toLowerCase().includes(n.value.toLowerCase())));return(s,i)=>(ue(),Te(ke,null,[Le(q("input",{type:"text",placeholder:"Search...",class:"search","onUpdate:modelValue":i[0]||(i[0]=o=>n.value=o)},null,512),[[He,n.value]]),ge(e)?(ue(),Te("div",bv,[(ue(),Lr(wf,null,{fallback:Vt(()=>[Ev]),default:Vt(()=>[(ue(!0),Te(ke,null,Nc(r.value,o=>(ue(),Lr(yv,{key:o.id,Champion:o},null,8,["Champion"]))),128))]),_:1}))])):Ui("",!0)],64))}},Iv=Lt(wv,[["__scopeId","data-v-ab80591a"]]);const Tv={class:"pagination"},Rv=["disabled"],Sv=["onClick"],Cv=["disabled"],Av={__name:"MainPagination",setup(t){const{activePage:e,pages:n,getChampions:r}=ao(),s=async()=>{e.value>1&&(e.value--,await r())},i=async()=>{e.value<n.value&&(e.value++,await r())},o=async a=>{e.value=a,await r()};return(a,c)=>(ue(),Te("div",Tv,[q("button",{class:"action",disabled:ge(e)===1,onClick:s},"Prev",8,Rv),(ue(!0),Te(ke,null,Nc(ge(n),l=>(ue(),Te("button",{key:l,class:Xr(["page",l===ge(e)?"active":""]),onClick:u=>o(l)},$n(l),11,Sv))),128)),q("button",{class:"action",disabled:ge(e)===ge(n),onClick:i},"Next",8,Cv)]))}},Pv=Lt(Av,[["__scopeId","data-v-f556ff7e"]]);const Ov={key:0},kv={key:1,class:"wrapper"},Nv={__name:"Main",setup(t){const{getChampions:e,loading:n}=ao();return Oc(async()=>{await e()}),(r,s)=>ge(n)?(ue(),Te("p",Ov,"Loading...")):(ue(),Te("div",kv,[fe(Iv),fe(Pv)]))}},xv=Lt(Nv,[["__scopeId","data-v-9e7381e9"]]);const Dv=t=>(Oi("data-v-769d7c94"),t=t(),ki(),t),Lv=["onSubmit"],Mv=Dv(()=>q("button",{type:"submit",class:"bg-green-500 px-4 py-2"},"Log In",-1)),Uv={__name:"LoginPage",setup(t){const{login:e,logout:n}=eo(),r=Yh(),s=Xh(),i=le(""),o=le(""),a=async()=>{await e(i.value,o.value)?s.query.redirect?r.push(s.query.redirect):r.push({name:"Home"}):n()};return(c,l)=>(ue(),Te("form",{class:"login-form",onSubmit:qc(a,["prevent"])},[Le(q("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>i.value=u),type:"text",placeholder:"Username"},null,512),[[He,i.value]]),Le(q("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>o.value=u),type:"password",placeholder:"Password"},null,512),[[He,o.value]]),Mv],40,Lv))}},Fv=Lt(Uv,[["__scopeId","data-v-769d7c94"]]);const Bv=t=>(Oi("data-v-19179df4"),t=t(),ki(),t),$v=["onSubmit"],Hv=Bv(()=>q("button",{type:"submit",class:"bg-green-500 px-4 py-2"},"Submit",-1)),jv={key:0,class:"text-green-500 mt-4"},Vv={__name:"settingsPage",setup(t){const e=pu.create({baseURL:"https://championhubbackend-node-server.onrender.com",auth:{username:"admin",password:"admin"}}),n=le(""),r=le(""),s=le(""),i=le(""),o=le(""),a=le(""),c=le(""),l=le(""),u=le(!1),f=async()=>{try{const{data:_}=await e.post("/api/Champions",{icon:l.value,id:r.value,key:Number(s.value),name:n.value,title:i.value,tags:a.value,stats:Number(c.value),description:o.value});u.value=!0,setTimeout(()=>{u.value=!1},3e3)}catch(_){console.error("Error adding champion:",_)}},p=()=>{n.value="",r.value="",s.value="",i.value="",o.value="",a.value="",c.value="",l.value=""};return(_,g)=>(ue(),Te("form",{class:"login-form",onSubmit:qc(f,["prevent"])},[Le(q("input",{"onUpdate:modelValue":g[0]||(g[0]=y=>n.value=y),type:"text",placeholder:"Champion Name"},null,512),[[He,n.value]]),Le(q("input",{"onUpdate:modelValue":g[1]||(g[1]=y=>l.value=y),type:"text",placeholder:"Icon URL"},null,512),[[He,l.value]]),Le(q("input",{"onUpdate:modelValue":g[2]||(g[2]=y=>r.value=y),type:"text",placeholder:"ID"},null,512),[[He,r.value]]),Le(q("input",{"onUpdate:modelValue":g[3]||(g[3]=y=>s.value=y),type:"number",placeholder:"Key"},null,512),[[He,s.value]]),Le(q("input",{"onUpdate:modelValue":g[4]||(g[4]=y=>i.value=y),type:"text",placeholder:"Title"},null,512),[[He,i.value]]),Le(q("input",{"onUpdate:modelValue":g[5]||(g[5]=y=>a.value=y),type:"text",placeholder:"Tags"},null,512),[[He,a.value]]),Le(q("input",{"onUpdate:modelValue":g[6]||(g[6]=y=>c.value=y),type:"number",placeholder:"Stats"},null,512),[[He,c.value]]),Le(q("input",{"onUpdate:modelValue":g[7]||(g[7]=y=>o.value=y),type:"text",placeholder:"Description"},null,512),[[He,o.value]]),Hv,q("button",{type:"button",class:"bg-red-500 px-4 py-2",onClick:p},"Clear"),u.value?(ue(),Te("p",jv,"Successful")):Ui("",!0)],40,$v))}},Wv=Lt(Vv,[["__scopeId","data-v-19179df4"]]);const Kv={},zv={class:"not-found"};function qv(t,e){return ue(),Te("h1",zv,"404 not found")}const Jv=Lt(Kv,[["render",qv],["__scopeId","data-v-9e81c776"]]),{isAuthenticated:Gv}=eo(),Yv=[{path:"/ChampionHub/",name:"Home",component:xv},{path:"/login",name:"Login",component:Fv},{path:"/settings",name:"Settings",component:Wv,meta:{requiresAuth:!0}},{path:"/other",name:"Other",component:()=>Ts(()=>import("./OtherPage-ea8ea66b.js"),[])},{path:"/api/champions/:id",name:"champion",component:()=>Ts(()=>import("./ChampionsPage-45f19ee3.js"),[])},{path:"/:pathMatch(.*)*",name:"NotFound",component:Jv},{path:"/api/Champion/:id",name:"Details",component:()=>Ts(()=>import("./ChampionDetails-1e116e61.js"),[])}],co=Jh({history:uh(),routes:Yv});co.beforeEach((t,e,n)=>{t.meta.requiresAuth&&!Gv.value?n({name:"Login",query:{redirect:t.fullPath}}):n()});const Xv={class:"wrapper"},Qv={class:"brand-title"},Zv={class:"menu"},eb={class:"px-2 py-4"},tb={key:0},nb={key:1},rb={__name:"NavBar",setup(t){const{isAuthenticated:e,logout:n,user:r}=eo(),s=le("ChampionHub 🐲");return(i,o)=>{var c;const a=xi("RouterLink");return ue(),Te("nav",null,[q("div",Xv,[fe(a,{to:{name:"Home"},class:"brand"},{default:Vt(()=>[q("span",Qv,$n(s.value),1)]),_:1}),q("div",Zv,[Le(q("p",eb,[wr(" Welcome back "),q("strong",null,[q("i",null,$n((c=ge(r))==null?void 0:c.email),1)])],512),[[Td,ge(e)]]),ge(e)?(ue(),Te("div",tb,[fe(a,{to:{name:"Settings"},href:"#",class:"menu-item"},{default:Vt(()=>[wr("Settings")]),_:1}),q("button",{to:{name:"Home"},href:"#",class:"menu-logout",onClick:o[0]||(o[0]=(...l)=>ge(n)&&ge(n)(...l))},"Logout")])):(ue(),Te("div",nb,[fe(a,{to:{name:"Login"},href:"#",class:"menu-login"},{default:Vt(()=>[wr("Login")]),_:1})]))])])])}}},sb=Lt(rb,[["__scopeId","data-v-6bb3eb68"]]),ib={__name:"App",setup(t){return(e,n)=>{const r=xi("RouterView");return ue(),Te(ke,null,[fe(sb),fe(r)],64)}}};Vd(ib).use(co).mount("#app");export{Lt as _,q as a,Oc as b,Te as c,kc as d,ge as e,Ui as f,ao as g,ue as o,$n as t,Xh as u};
