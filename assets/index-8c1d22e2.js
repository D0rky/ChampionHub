(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function fi(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ee={},Qt=[],Me=()=>{},hu=()=>!1,pu=/^on[^a-z]/,Hr=t=>pu.test(t),di=t=>t.startsWith("onUpdate:"),de=Object.assign,hi=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mu=Object.prototype.hasOwnProperty,z=(t,e)=>mu.call(t,e),B=Array.isArray,Zt=t=>Vr(t)==="[object Map]",Ua=t=>Vr(t)==="[object Set]",j=t=>typeof t=="function",ce=t=>typeof t=="string",jr=t=>typeof t=="symbol",ne=t=>t!==null&&typeof t=="object",Fa=t=>(ne(t)||j(t))&&j(t.then)&&j(t.catch),Ba=Object.prototype.toString,Vr=t=>Ba.call(t),gu=t=>Vr(t).slice(8,-1),$a=t=>Vr(t)==="[object Object]",pi=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,dr=fi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_u=/-(\w)/g,Xe=Wr(t=>t.replace(_u,(e,n)=>n?n.toUpperCase():"")),yu=/\B([A-Z])/g,mn=Wr(t=>t.replace(yu,"-$1").toLowerCase()),zr=Wr(t=>t.charAt(0).toUpperCase()+t.slice(1)),hs=Wr(t=>t?`on${zr(t)}`:""),Bt=(t,e)=>!Object.is(t,e),hr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Rr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ds=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let eo;const Ls=()=>eo||(eo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function mi(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ce(r)?wu(r):mi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ce(t)||ne(t))return t}const bu=/;(?![^(]*\))/g,vu=/:([^]+)/,Eu=/\/\*[^]*?\*\//g;function wu(t){const e={};return t.replace(Eu,"").split(bu).forEach(n=>{if(n){const r=n.split(vu);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Kr(t){let e="";if(ce(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=Kr(t[n]);r&&(e+=r+" ")}else if(ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Iu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tu=fi(Iu);function Ha(t){return!!t||t===""}const en=t=>ce(t)?t:t==null?"":B(t)||ne(t)&&(t.toString===Ba||!j(t.toString))?JSON.stringify(t,ja,2):String(t),ja=(t,e)=>e&&e.__v_isRef?ja(t,e.value):Zt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Ua(e)?{[`Set(${e.size})`]:[...e.values()]}:ne(e)&&!B(e)&&!$a(e)?String(e):e;let xe;class Su{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!e&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xe;try{return xe=this,e()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ru(t,e=xe){e&&e.active&&e.effects.push(t)}function Cu(){return xe}const gi=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Va=t=>(t.w&Tt)>0,Wa=t=>(t.n&Tt)>0,Au=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Tt},Pu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Va(s)&&!Wa(s)?s.delete(t):e[n++]=s,s.w&=~Tt,s.n&=~Tt}e.length=n}},Ms=new WeakMap;let Cn=0,Tt=1;const Us=30;let De;const Mt=Symbol(""),Fs=Symbol("");class _i{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ru(this,r)}run(){if(!this.active)return this.fn();let e=De,n=vt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=De,De=this,vt=!0,Tt=1<<++Cn,Cn<=Us?Au(this):to(this),this.fn()}finally{Cn<=Us&&Pu(this),Tt=1<<--Cn,De=this.parent,vt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){De===this?this.deferStop=!0:this.active&&(to(this),this.onStop&&this.onStop(),this.active=!1)}}function to(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let vt=!0;const za=[];function gn(){za.push(vt),vt=!1}function _n(){const t=za.pop();vt=t===void 0?!0:t}function Ie(t,e,n){if(vt&&De){let r=Ms.get(t);r||Ms.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=gi()),Ka(s)}}function Ka(t,e){let n=!1;Cn<=Us?Wa(t)||(t.n|=Tt,n=!Va(t)):n=!t.has(De),n&&(t.add(De),De.deps.push(t))}function st(t,e,n,r,s,i){const o=Ms.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&B(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!jr(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":B(t)?pi(n)&&a.push(o.get("length")):(a.push(o.get(Mt)),Zt(t)&&a.push(o.get(Fs)));break;case"delete":B(t)||(a.push(o.get(Mt)),Zt(t)&&a.push(o.get(Fs)));break;case"set":Zt(t)&&a.push(o.get(Mt));break}if(a.length===1)a[0]&&Bs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Bs(gi(c))}}function Bs(t,e){const n=B(t)?t:[...t];for(const r of n)r.computed&&no(r);for(const r of n)r.computed||no(r)}function no(t,e){(t!==De||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Ou=fi("__proto__,__v_isRef,__isVue"),qa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jr)),ro=ku();function ku(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=K(this);for(let i=0,o=this.length;i<o;i++)Ie(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(K)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){gn();const r=K(this)[e].apply(this,n);return _n(),r}}),t}function Nu(t){const e=K(this);return Ie(e,"has",t),e.hasOwnProperty(t)}class Ga{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(s?i?zu:Qa:i?Xa:Ya).get(e))return e;const o=B(e);if(!s){if(o&&z(ro,n))return Reflect.get(ro,n,r);if(n==="hasOwnProperty")return Nu}const a=Reflect.get(e,n,r);return(jr(n)?qa.has(n):Ou(n))||(s||Ie(e,"get",n),i)?a:me(a)?o&&pi(n)?a:a.value:ne(a)?s?ec(a):Gr(a):a}}class Ja extends Ga{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(an(i)&&me(i)&&!me(r))return!1;if(!this._shallow&&(!Cr(r)&&!an(r)&&(i=K(i),r=K(r)),!B(e)&&me(i)&&!me(r)))return i.value=r,!0;const o=B(e)&&pi(n)?Number(n)<e.length:z(e,n),a=Reflect.set(e,n,r,s);return e===K(s)&&(o?Bt(r,i)&&st(e,"set",n,r):st(e,"add",n,r)),a}deleteProperty(e,n){const r=z(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&st(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!jr(n)||!qa.has(n))&&Ie(e,"has",n),r}ownKeys(e){return Ie(e,"iterate",B(e)?"length":Mt),Reflect.ownKeys(e)}}class xu extends Ga{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Du=new Ja,Lu=new xu,Mu=new Ja(!0),yi=t=>t,qr=t=>Reflect.getPrototypeOf(t);function ir(t,e,n=!1,r=!1){t=t.__v_raw;const s=K(t),i=K(e);n||(Bt(e,i)&&Ie(s,"get",e),Ie(s,"get",i));const{has:o}=qr(s),a=r?yi:n?Ei:Un;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function or(t,e=!1){const n=this.__v_raw,r=K(n),s=K(t);return e||(Bt(t,s)&&Ie(r,"has",t),Ie(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ar(t,e=!1){return t=t.__v_raw,!e&&Ie(K(t),"iterate",Mt),Reflect.get(t,"size",t)}function so(t){t=K(t);const e=K(this);return qr(e).has.call(e,t)||(e.add(t),st(e,"add",t,t)),this}function io(t,e){e=K(e);const n=K(this),{has:r,get:s}=qr(n);let i=r.call(n,t);i||(t=K(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Bt(e,o)&&st(n,"set",t,e):st(n,"add",t,e),this}function oo(t){const e=K(this),{has:n,get:r}=qr(e);let s=n.call(e,t);s||(t=K(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&st(e,"delete",t,void 0),i}function ao(){const t=K(this),e=t.size!==0,n=t.clear();return e&&st(t,"clear",void 0,void 0),n}function cr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=K(o),c=e?yi:t?Ei:Un;return!t&&Ie(a,"iterate",Mt),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function lr(t,e,n){return function(...r){const s=this.__v_raw,i=K(s),o=Zt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?yi:e?Ei:Un;return!e&&Ie(i,"iterate",c?Fs:Mt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Uu(){const t={get(i){return ir(this,i)},get size(){return ar(this)},has:or,add:so,set:io,delete:oo,clear:ao,forEach:cr(!1,!1)},e={get(i){return ir(this,i,!1,!0)},get size(){return ar(this)},has:or,add:so,set:io,delete:oo,clear:ao,forEach:cr(!1,!0)},n={get(i){return ir(this,i,!0)},get size(){return ar(this,!0)},has(i){return or.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:cr(!0,!1)},r={get(i){return ir(this,i,!0,!0)},get size(){return ar(this,!0)},has(i){return or.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:cr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=lr(i,!1,!1),n[i]=lr(i,!0,!1),e[i]=lr(i,!1,!0),r[i]=lr(i,!0,!0)}),[t,n,e,r]}const[Fu,Bu,$u,Hu]=Uu();function bi(t,e){const n=e?t?Hu:$u:t?Bu:Fu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(z(n,s)&&s in r?n:r,s,i)}const ju={get:bi(!1,!1)},Vu={get:bi(!1,!0)},Wu={get:bi(!0,!1)},Ya=new WeakMap,Xa=new WeakMap,Qa=new WeakMap,zu=new WeakMap;function Ku(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qu(t){return t.__v_skip||!Object.isExtensible(t)?0:Ku(gu(t))}function Gr(t){return an(t)?t:vi(t,!1,Du,ju,Ya)}function Za(t){return vi(t,!1,Mu,Vu,Xa)}function ec(t){return vi(t,!0,Lu,Wu,Qa)}function vi(t,e,n,r,s){if(!ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=qu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function tn(t){return an(t)?tn(t.__v_raw):!!(t&&t.__v_isReactive)}function an(t){return!!(t&&t.__v_isReadonly)}function Cr(t){return!!(t&&t.__v_isShallow)}function tc(t){return tn(t)||an(t)}function K(t){const e=t&&t.__v_raw;return e?K(e):t}function nc(t){return Rr(t,"__v_skip",!0),t}const Un=t=>ne(t)?Gr(t):t,Ei=t=>ne(t)?ec(t):t;function rc(t){vt&&De&&(t=K(t),Ka(t.dep||(t.dep=gi())))}function sc(t,e){t=K(t);const n=t.dep;n&&Bs(n)}function me(t){return!!(t&&t.__v_isRef===!0)}function Se(t){return ic(t,!1)}function Gu(t){return ic(t,!0)}function ic(t,e){return me(t)?t:new Ju(t,e)}class Ju{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:K(e),this._value=n?e:Un(e)}get value(){return rc(this),this._value}set value(e){const n=this.__v_isShallow||Cr(e)||an(e);e=n?e:K(e),Bt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Un(e),sc(this))}}function ue(t){return me(t)?t.value:t}const Yu={get:(t,e,n)=>ue(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function oc(t){return tn(t)?t:new Proxy(t,Yu)}class Xu{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new _i(e,()=>{this._dirty||(this._dirty=!0,sc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=K(this);return rc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Qu(t,e,n=!1){let r,s;const i=j(t);return i?(r=t,s=Me):(r=t.get,s=t.set),new Xu(r,s,i||!s,n)}function Et(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Jr(i,e,n)}return s}function Ue(t,e,n,r){if(j(t)){const i=Et(t,e,n,r);return i&&Fa(i)&&i.catch(o=>{Jr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ue(t[i],e,n,r));return s}function Jr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Et(c,null,10,[t,o,a]);return}}Zu(t,n,s,r)}function Zu(t,e,n,r=!0){console.error(t)}let Fn=!1,$s=!1;const pe=[];let qe=0;const nn=[];let tt=null,xt=0;const ac=Promise.resolve();let wi=null;function cc(t){const e=wi||ac;return t?e.then(this?t.bind(this):t):e}function ef(t){let e=qe+1,n=pe.length;for(;e<n;){const r=e+n>>>1,s=pe[r],i=Bn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Ii(t){(!pe.length||!pe.includes(t,Fn&&t.allowRecurse?qe+1:qe))&&(t.id==null?pe.push(t):pe.splice(ef(t.id),0,t),lc())}function lc(){!Fn&&!$s&&($s=!0,wi=ac.then(fc))}function tf(t){const e=pe.indexOf(t);e>qe&&pe.splice(e,1)}function nf(t){B(t)?nn.push(...t):(!tt||!tt.includes(t,t.allowRecurse?xt+1:xt))&&nn.push(t),lc()}function co(t,e=Fn?qe+1:0){for(;e<pe.length;e++){const n=pe[e];n&&n.pre&&(pe.splice(e,1),e--,n())}}function uc(t){if(nn.length){const e=[...new Set(nn)];if(nn.length=0,tt){tt.push(...e);return}for(tt=e,tt.sort((n,r)=>Bn(n)-Bn(r)),xt=0;xt<tt.length;xt++)tt[xt]();tt=null,xt=0}}const Bn=t=>t.id==null?1/0:t.id,rf=(t,e)=>{const n=Bn(t)-Bn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function fc(t){$s=!1,Fn=!0,pe.sort(rf);const e=Me;try{for(qe=0;qe<pe.length;qe++){const n=pe[qe];n&&n.active!==!1&&Et(n,null,14)}}finally{qe=0,pe.length=0,uc(),Fn=!1,wi=null,(pe.length||nn.length)&&fc()}}function sf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ee;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[u]||ee;p&&(s=n.map(_=>ce(_)?_.trim():_)),f&&(s=n.map(Ds))}let a,c=r[a=hs(e)]||r[a=hs(Xe(e))];!c&&i&&(c=r[a=hs(mn(e))]),c&&Ue(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ue(l,t,6,s)}}function dc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const u=dc(l,e,!0);u&&(a=!0,de(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ne(t)&&r.set(t,null),null):(B(i)?i.forEach(c=>o[c]=null):de(o,i),ne(t)&&r.set(t,o),o)}function Yr(t,e){return!t||!Hr(e)?!1:(e=e.slice(2).replace(/Once$/,""),z(t,e[0].toLowerCase()+e.slice(1))||z(t,mn(e))||z(t,e))}let Oe=null,Xr=null;function Ar(t){const e=Oe;return Oe=t,Xr=t&&t.type.__scopeId||null,e}function hc(t){Xr=t}function pc(){Xr=null}function kn(t,e=Oe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&vo(-1);const i=Ar(e);let o;try{o=t(...s)}finally{Ar(i),r._d&&vo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ps(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:p,setupState:_,ctx:b,inheritAttrs:E}=t;let k,A;const N=Ar(t);try{if(n.shapeFlag&4){const L=s||r,re=L;k=Ke(u.call(re,L,f,i,_,p,b)),A=c}else{const L=e;k=Ke(L.length>1?L(i,{attrs:c,slots:a,emit:l}):L(i,null)),A=e.props?c:of(c)}}catch(L){xn.length=0,Jr(L,t,1),k=se($t)}let $=k;if(A&&E!==!1){const L=Object.keys(A),{shapeFlag:re}=$;L.length&&re&7&&(o&&L.some(di)&&(A=af(A,o)),$=cn($,A))}return n.dirs&&($=cn($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),k=$,Ar(N),k}const of=t=>{let e;for(const n in t)(n==="class"||n==="style"||Hr(n))&&((e||(e={}))[n]=t[n]);return e},af=(t,e)=>{const n={};for(const r in t)(!di(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function cf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?lo(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(o[p]!==r[p]&&!Yr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?lo(r,o,l):!0:!!o;return!1}function lo(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Yr(n,i))return!0}return!1}function lf({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const mc="components";function Ti(t,e){return ff(mc,t,!0,e)||t}const uf=Symbol.for("v-ndc");function ff(t,e,n=!0,r=!1){const s=Oe||fe;if(s){const i=s.type;if(t===mc){const a=nd(i,!1);if(a&&(a===e||a===Xe(e)||a===zr(Xe(e))))return i}const o=uo(s[t]||i[t],e)||uo(s.appContext[t],e);return!o&&r?i:o}}function uo(t,e){return t&&(t[e]||t[Xe(e)]||t[zr(Xe(e))])}const df=t=>t.__isSuspense;function hf(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):nf(t)}const ur={};function pr(t,e,n){return gc(t,e,n)}function gc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ee){var a;const c=Cu()===((a=fe)==null?void 0:a.scope)?fe:null;let l,u=!1,f=!1;if(me(t)?(l=()=>t.value,u=Cr(t)):tn(t)?(l=()=>t,r=!0):B(t)?(f=!0,u=t.some(L=>tn(L)||Cr(L)),l=()=>t.map(L=>{if(me(L))return L.value;if(tn(L))return Lt(L);if(j(L))return Et(L,c,2)})):j(t)?e?l=()=>Et(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),Ue(t,c,3,[_])}:l=Me,e&&r){const L=l;l=()=>Lt(L())}let p,_=L=>{p=N.onStop=()=>{Et(L,c,4),p=N.onStop=void 0}},b;if(jn)if(_=Me,e?n&&Ue(e,c,3,[l(),f?[]:void 0,_]):l(),s==="sync"){const L=id();b=L.__watcherHandles||(L.__watcherHandles=[])}else return Me;let E=f?new Array(t.length).fill(ur):ur;const k=()=>{if(N.active)if(e){const L=N.run();(r||u||(f?L.some((re,ie)=>Bt(re,E[ie])):Bt(L,E)))&&(p&&p(),Ue(e,c,3,[L,E===ur?void 0:f&&E[0]===ur?[]:E,_]),E=L)}else N.run()};k.allowRecurse=!!e;let A;s==="sync"?A=k:s==="post"?A=()=>Ee(k,c&&c.suspense):(k.pre=!0,c&&(k.id=c.uid),A=()=>Ii(k));const N=new _i(l,A);e?n?k():E=N.run():s==="post"?Ee(N.run.bind(N),c&&c.suspense):N.run();const $=()=>{N.stop(),c&&c.scope&&hi(c.scope.effects,N)};return b&&b.push($),$}function pf(t,e,n){const r=this.proxy,s=ce(t)?t.includes(".")?_c(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=fe;ln(this);const a=gc(s,i.bind(r),n);return o?ln(o):Ut(),a}function _c(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Lt(t,e){if(!ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),me(t))Lt(t.value,e);else if(B(t))for(let n=0;n<t.length;n++)Lt(t[n],e);else if(Ua(t)||Zt(t))t.forEach(n=>{Lt(n,e)});else if($a(t))for(const n in t)Lt(t[n],e);return t}function $n(t,e){const n=Oe;if(n===null)return t;const r=ts(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ee]=e[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&Lt(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ot(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(gn(),Ue(c,n,8,[t.el,a,t,e]),_n())}}/*! #__NO_SIDE_EFFECTS__ */function yc(t,e){return j(t)?(()=>de({name:t.name},e,{setup:t}))():t}const mr=t=>!!t.type.__asyncLoader,bc=t=>t.type.__isKeepAlive;function mf(t,e){vc(t,"a",e)}function gf(t,e){vc(t,"da",e)}function vc(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Qr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)bc(s.parent.vnode)&&_f(r,e,n,s),s=s.parent}}function _f(t,e,n,r){const s=Qr(e,t,r,!0);wc(()=>{hi(r[e],s)},n)}function Qr(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;gn(),ln(n);const a=Ue(e,n,t,o);return Ut(),_n(),a});return r?s.unshift(i):s.push(i),i}}const at=t=>(e,n=fe)=>(!jn||t==="sp")&&Qr(t,(...r)=>e(...r),n),yf=at("bm"),Ec=at("m"),bf=at("bu"),vf=at("u"),Ef=at("bum"),wc=at("um"),wf=at("sp"),If=at("rtg"),Tf=at("rtc");function Sf(t,e=fe){Qr("ec",t,e)}function Ic(t,e,n,r){let s;const i=n&&n[r];if(B(t)||ce(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ne(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Hs=t=>t?Lc(t)?ts(t)||t.proxy:Hs(t.parent):null,Nn=de(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Hs(t.parent),$root:t=>Hs(t.root),$emit:t=>t.emit,$options:t=>Si(t),$forceUpdate:t=>t.f||(t.f=()=>Ii(t.update)),$nextTick:t=>t.n||(t.n=cc.bind(t.proxy)),$watch:t=>pf.bind(t)}),ms=(t,e)=>t!==ee&&!t.__isScriptSetup&&z(t,e),Rf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ms(r,e))return o[e]=1,r[e];if(s!==ee&&z(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&z(l,e))return o[e]=3,i[e];if(n!==ee&&z(n,e))return o[e]=4,n[e];js&&(o[e]=0)}}const u=Nn[e];let f,p;if(u)return e==="$attrs"&&Ie(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ee&&z(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,z(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ms(s,e)?(s[e]=n,!0):r!==ee&&z(r,e)?(r[e]=n,!0):z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ee&&z(t,o)||ms(e,o)||(a=i[0])&&z(a,o)||z(r,o)||z(Nn,o)||z(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fo(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let js=!0;function Cf(t){const e=Si(t),n=t.proxy,r=t.ctx;js=!1,e.beforeCreate&&ho(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:p,beforeUpdate:_,updated:b,activated:E,deactivated:k,beforeDestroy:A,beforeUnmount:N,destroyed:$,unmounted:L,render:re,renderTracked:ie,renderTriggered:be,errorCaptured:Re,serverPrefetch:He,expose:Ce,inheritAttrs:ct,components:Pt,directives:je,filters:En}=e;if(l&&Af(l,r,null),o)for(const X in o){const q=o[X];j(q)&&(r[X]=q.bind(n))}if(s){const X=s.call(n,n);ne(X)&&(t.data=Gr(X))}if(js=!0,i)for(const X in i){const q=i[X],Ze=j(q)?q.bind(n,n):j(q.get)?q.get.bind(n,n):Me,lt=!j(q)&&j(q.set)?q.set.bind(n):Me,Ve=Pe({get:Ze,set:lt});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:ve=>Ve.value=ve})}if(a)for(const X in a)Tc(a[X],r,n,X);if(c){const X=j(c)?c.call(n):c;Reflect.ownKeys(X).forEach(q=>{gr(q,X[q])})}u&&ho(u,t,"c");function le(X,q){B(q)?q.forEach(Ze=>X(Ze.bind(n))):q&&X(q.bind(n))}if(le(yf,f),le(Ec,p),le(bf,_),le(vf,b),le(mf,E),le(gf,k),le(Sf,Re),le(Tf,ie),le(If,be),le(Ef,N),le(wc,L),le(wf,He),B(Ce))if(Ce.length){const X=t.exposed||(t.exposed={});Ce.forEach(q=>{Object.defineProperty(X,q,{get:()=>n[q],set:Ze=>n[q]=Ze})})}else t.exposed||(t.exposed={});re&&t.render===Me&&(t.render=re),ct!=null&&(t.inheritAttrs=ct),Pt&&(t.components=Pt),je&&(t.directives=je)}function Af(t,e,n=Me){B(t)&&(t=Vs(t));for(const r in t){const s=t[r];let i;ne(s)?"default"in s?i=Fe(s.from||r,s.default,!0):i=Fe(s.from||r):i=Fe(s),me(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function ho(t,e,n){Ue(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Tc(t,e,n,r){const s=r.includes(".")?_c(n,r):()=>n[r];if(ce(t)){const i=e[t];j(i)&&pr(s,i)}else if(j(t))pr(s,t.bind(n));else if(ne(t))if(B(t))t.forEach(i=>Tc(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&pr(s,i,t)}}function Si(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Pr(c,l,o,!0)),Pr(c,e,o)),ne(e)&&i.set(e,c),c}function Pr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Pr(t,i,n,!0),s&&s.forEach(o=>Pr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Pf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Pf={data:po,props:mo,emits:mo,methods:An,computed:An,beforeCreate:ye,created:ye,beforeMount:ye,mounted:ye,beforeUpdate:ye,updated:ye,beforeDestroy:ye,beforeUnmount:ye,destroyed:ye,unmounted:ye,activated:ye,deactivated:ye,errorCaptured:ye,serverPrefetch:ye,components:An,directives:An,watch:kf,provide:po,inject:Of};function po(t,e){return e?t?function(){return de(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Of(t,e){return An(Vs(t),Vs(e))}function Vs(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ye(t,e){return t?[...new Set([].concat(t,e))]:e}function An(t,e){return t?de(Object.create(null),t,e):e}function mo(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:de(Object.create(null),fo(t),fo(e??{})):e}function kf(t,e){if(!t)return e;if(!e)return t;const n=de(Object.create(null),t);for(const r in e)n[r]=ye(t[r],e[r]);return n}function Sc(){return{app:null,config:{isNativeTag:hu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nf=0;function xf(t,e){return function(r,s=null){j(r)||(r=de({},r)),s!=null&&!ne(s)&&(s=null);const i=Sc(),o=new WeakSet;let a=!1;const c=i.app={_uid:Nf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:od,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&j(l.install)?(o.add(l),l.install(c,...u)):j(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,f){if(!a){const p=se(r,s);return p.appContext=i,u&&e?e(p,l):t(p,l,f),a=!0,c._container=l,l.__vue_app__=c,ts(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){Or=c;try{return l()}finally{Or=null}}};return c}}let Or=null;function gr(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function Fe(t,e,n=!1){const r=fe||Oe;if(r||Or){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Or._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}function Df(t,e,n,r=!1){const s={},i={};Rr(i,es,1),t.propsDefaults=Object.create(null),Rc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Za(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Lf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=K(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Yr(t.emitsOptions,p))continue;const _=e[p];if(c)if(z(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const b=Xe(p);s[b]=Ws(c,a,b,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{Rc(t,e,s,i)&&(l=!0);let u;for(const f in a)(!e||!z(e,f)&&((u=mn(f))===f||!z(e,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Ws(c,a,f,void 0,t,!0)):delete s[f]);if(i!==a)for(const f in i)(!e||!z(e,f))&&(delete i[f],l=!0)}l&&st(t,"set","$attrs")}function Rc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(dr(c))continue;const l=e[c];let u;s&&z(s,u=Xe(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Yr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=K(n),l=a||ee;for(let u=0;u<i.length;u++){const f=i[u];n[f]=Ws(s,c,f,l[f],t,!z(l,f))}}return o}function Ws(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=z(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&j(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(ln(s),r=l[n]=c.call(null,e),Ut())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===mn(n))&&(r=!0))}return r}function Cc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const u=f=>{c=!0;const[p,_]=Cc(f,e,!0);de(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return ne(t)&&r.set(t,Qt),Qt;if(B(i))for(let u=0;u<i.length;u++){const f=Xe(i[u]);go(f)&&(o[f]=ee)}else if(i)for(const u in i){const f=Xe(u);if(go(f)){const p=i[u],_=o[f]=B(p)||j(p)?{type:p}:de({},p);if(_){const b=bo(Boolean,_.type),E=bo(String,_.type);_[0]=b>-1,_[1]=E<0||b<E,(b>-1||z(_,"default"))&&a.push(f)}}}const l=[o,a];return ne(t)&&r.set(t,l),l}function go(t){return t[0]!=="$"}function _o(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function yo(t,e){return _o(t)===_o(e)}function bo(t,e){return B(e)?e.findIndex(n=>yo(n,t)):j(e)&&yo(e,t)?0:-1}const Ac=t=>t[0]==="_"||t==="$stable",Ri=t=>B(t)?t.map(Ke):[Ke(t)],Mf=(t,e,n)=>{if(e._n)return e;const r=kn((...s)=>Ri(e(...s)),n);return r._c=!1,r},Pc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ac(s))continue;const i=t[s];if(j(i))e[s]=Mf(s,i,r);else if(i!=null){const o=Ri(i);e[s]=()=>o}}},Oc=(t,e)=>{const n=Ri(e);t.slots.default=()=>n},Uf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=K(e),Rr(e,"_",n)):Pc(e,t.slots={})}else t.slots={},e&&Oc(t,e);Rr(t.slots,es,1)},Ff=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ee;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(de(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Pc(e,s)),o=e}else e&&(Oc(t,e),o={default:1});if(i)for(const a in s)!Ac(a)&&o[a]==null&&delete s[a]};function zs(t,e,n,r,s=!1){if(B(t)){t.forEach((p,_)=>zs(p,e&&(B(e)?e[_]:e),n,r,s));return}if(mr(r)&&!s)return;const i=r.shapeFlag&4?ts(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===ee?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(ce(l)?(u[l]=null,z(f,l)&&(f[l]=null)):me(l)&&(l.value=null)),j(c))Et(c,a,12,[o,u]);else{const p=ce(c),_=me(c);if(p||_){const b=()=>{if(t.f){const E=p?z(f,c)?f[c]:u[c]:c.value;s?B(E)&&hi(E,i):B(E)?E.includes(i)||E.push(i):p?(u[c]=[i],z(f,c)&&(f[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else p?(u[c]=o,z(f,c)&&(f[c]=o)):_&&(c.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,Ee(b,n)):b()}}}const Ee=hf;function Bf(t){return $f(t)}function $f(t,e){const n=Ls();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:p,setScopeId:_=Me,insertStaticContent:b}=t,E=(d,h,m,g=null,w=null,I=null,P=!1,S=null,R=!!h.dynamicChildren)=>{if(d===h)return;d&&!In(d,h)&&(g=v(d),ve(d,w,I,!0),d=null),h.patchFlag===-2&&(R=!1,h.dynamicChildren=null);const{type:T,ref:M,shapeFlag:x}=h;switch(T){case Zr:k(d,h,m,g);break;case $t:A(d,h,m,g);break;case gs:d==null&&N(h,m,g,P);break;case Ae:Pt(d,h,m,g,w,I,P,S,R);break;default:x&1?re(d,h,m,g,w,I,P,S,R):x&6?je(d,h,m,g,w,I,P,S,R):(x&64||x&128)&&T.process(d,h,m,g,w,I,P,S,R,C)}M!=null&&w&&zs(M,d&&d.ref,I,h||d,!h)},k=(d,h,m,g)=>{if(d==null)r(h.el=a(h.children),m,g);else{const w=h.el=d.el;h.children!==d.children&&l(w,h.children)}},A=(d,h,m,g)=>{d==null?r(h.el=c(h.children||""),m,g):h.el=d.el},N=(d,h,m,g)=>{[d.el,d.anchor]=b(d.children,h,m,g,d.el,d.anchor)},$=({el:d,anchor:h},m,g)=>{let w;for(;d&&d!==h;)w=p(d),r(d,m,g),d=w;r(h,m,g)},L=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),s(d),d=m;s(h)},re=(d,h,m,g,w,I,P,S,R)=>{P=P||h.type==="svg",d==null?ie(h,m,g,w,I,P,S,R):He(d,h,w,I,P,S,R)},ie=(d,h,m,g,w,I,P,S)=>{let R,T;const{type:M,props:x,shapeFlag:U,transition:H,dirs:V}=d;if(R=d.el=o(d.type,I,x&&x.is,x),U&8?u(R,d.children):U&16&&Re(d.children,R,null,g,w,I&&M!=="foreignObject",P,S),V&&Ot(d,null,g,"created"),be(R,d,d.scopeId,P,g),x){for(const Y in x)Y!=="value"&&!dr(Y)&&i(R,Y,null,x[Y],I,d.children,g,w,he);"value"in x&&i(R,"value",null,x.value),(T=x.onVnodeBeforeMount)&&ze(T,g,d)}V&&Ot(d,null,g,"beforeMount");const Z=Hf(w,H);Z&&H.beforeEnter(R),r(R,h,m),((T=x&&x.onVnodeMounted)||Z||V)&&Ee(()=>{T&&ze(T,g,d),Z&&H.enter(R),V&&Ot(d,null,g,"mounted")},w)},be=(d,h,m,g,w)=>{if(m&&_(d,m),g)for(let I=0;I<g.length;I++)_(d,g[I]);if(w){let I=w.subTree;if(h===I){const P=w.vnode;be(d,P,P.scopeId,P.slotScopeIds,w.parent)}}},Re=(d,h,m,g,w,I,P,S,R=0)=>{for(let T=R;T<d.length;T++){const M=d[T]=S?pt(d[T]):Ke(d[T]);E(null,M,h,m,g,w,I,P,S)}},He=(d,h,m,g,w,I,P)=>{const S=h.el=d.el;let{patchFlag:R,dynamicChildren:T,dirs:M}=h;R|=d.patchFlag&16;const x=d.props||ee,U=h.props||ee;let H;m&&kt(m,!1),(H=U.onVnodeBeforeUpdate)&&ze(H,m,h,d),M&&Ot(h,d,m,"beforeUpdate"),m&&kt(m,!0);const V=w&&h.type!=="foreignObject";if(T?Ce(d.dynamicChildren,T,S,m,g,V,I):P||q(d,h,S,null,m,g,V,I,!1),R>0){if(R&16)ct(S,h,x,U,m,g,w);else if(R&2&&x.class!==U.class&&i(S,"class",null,U.class,w),R&4&&i(S,"style",x.style,U.style,w),R&8){const Z=h.dynamicProps;for(let Y=0;Y<Z.length;Y++){const oe=Z[Y],Ne=x[oe],qt=U[oe];(qt!==Ne||oe==="value")&&i(S,oe,Ne,qt,w,d.children,m,g,he)}}R&1&&d.children!==h.children&&u(S,h.children)}else!P&&T==null&&ct(S,h,x,U,m,g,w);((H=U.onVnodeUpdated)||M)&&Ee(()=>{H&&ze(H,m,h,d),M&&Ot(h,d,m,"updated")},g)},Ce=(d,h,m,g,w,I,P)=>{for(let S=0;S<h.length;S++){const R=d[S],T=h[S],M=R.el&&(R.type===Ae||!In(R,T)||R.shapeFlag&70)?f(R.el):m;E(R,T,M,null,g,w,I,P,!0)}},ct=(d,h,m,g,w,I,P)=>{if(m!==g){if(m!==ee)for(const S in m)!dr(S)&&!(S in g)&&i(d,S,m[S],null,P,h.children,w,I,he);for(const S in g){if(dr(S))continue;const R=g[S],T=m[S];R!==T&&S!=="value"&&i(d,S,T,R,P,h.children,w,I,he)}"value"in g&&i(d,"value",m.value,g.value)}},Pt=(d,h,m,g,w,I,P,S,R)=>{const T=h.el=d?d.el:a(""),M=h.anchor=d?d.anchor:a("");let{patchFlag:x,dynamicChildren:U,slotScopeIds:H}=h;H&&(S=S?S.concat(H):H),d==null?(r(T,m,g),r(M,m,g),Re(h.children,m,M,w,I,P,S,R)):x>0&&x&64&&U&&d.dynamicChildren?(Ce(d.dynamicChildren,U,m,w,I,P,S),(h.key!=null||w&&h===w.subTree)&&kc(d,h,!0)):q(d,h,m,M,w,I,P,S,R)},je=(d,h,m,g,w,I,P,S,R)=>{h.slotScopeIds=S,d==null?h.shapeFlag&512?w.ctx.activate(h,m,g,P,R):En(h,m,g,w,I,P,R):Wt(d,h,R)},En=(d,h,m,g,w,I,P)=>{const S=d.component=Xf(d,g,w);if(bc(d)&&(S.ctx.renderer=C),Qf(S),S.asyncDep){if(w&&w.registerDep(S,le),!d.el){const R=S.subTree=se($t);A(null,R,h,m)}return}le(S,d,h,m,w,I,P)},Wt=(d,h,m)=>{const g=h.component=d.component;if(cf(d,h,m))if(g.asyncDep&&!g.asyncResolved){X(g,h,m);return}else g.next=h,tf(g.update),g.update();else h.el=d.el,g.vnode=h},le=(d,h,m,g,w,I,P)=>{const S=()=>{if(d.isMounted){let{next:M,bu:x,u:U,parent:H,vnode:V}=d,Z=M,Y;kt(d,!1),M?(M.el=V.el,X(d,M,P)):M=V,x&&hr(x),(Y=M.props&&M.props.onVnodeBeforeUpdate)&&ze(Y,H,M,V),kt(d,!0);const oe=ps(d),Ne=d.subTree;d.subTree=oe,E(Ne,oe,f(Ne.el),v(Ne),d,w,I),M.el=oe.el,Z===null&&lf(d,oe.el),U&&Ee(U,w),(Y=M.props&&M.props.onVnodeUpdated)&&Ee(()=>ze(Y,H,M,V),w)}else{let M;const{el:x,props:U}=h,{bm:H,m:V,parent:Z}=d,Y=mr(h);if(kt(d,!1),H&&hr(H),!Y&&(M=U&&U.onVnodeBeforeMount)&&ze(M,Z,h),kt(d,!0),x&&G){const oe=()=>{d.subTree=ps(d),G(x,d.subTree,d,w,null)};Y?h.type.__asyncLoader().then(()=>!d.isUnmounted&&oe()):oe()}else{const oe=d.subTree=ps(d);E(null,oe,m,g,d,w,I),h.el=oe.el}if(V&&Ee(V,w),!Y&&(M=U&&U.onVnodeMounted)){const oe=h;Ee(()=>ze(M,Z,oe),w)}(h.shapeFlag&256||Z&&mr(Z.vnode)&&Z.vnode.shapeFlag&256)&&d.a&&Ee(d.a,w),d.isMounted=!0,h=m=g=null}},R=d.effect=new _i(S,()=>Ii(T),d.scope),T=d.update=()=>R.run();T.id=d.uid,kt(d,!0),T()},X=(d,h,m)=>{h.component=d;const g=d.vnode.props;d.vnode=h,d.next=null,Lf(d,h.props,g,m),Ff(d,h.children,m),gn(),co(),_n()},q=(d,h,m,g,w,I,P,S,R=!1)=>{const T=d&&d.children,M=d?d.shapeFlag:0,x=h.children,{patchFlag:U,shapeFlag:H}=h;if(U>0){if(U&128){lt(T,x,m,g,w,I,P,S,R);return}else if(U&256){Ze(T,x,m,g,w,I,P,S,R);return}}H&8?(M&16&&he(T,w,I),x!==T&&u(m,x)):M&16?H&16?lt(T,x,m,g,w,I,P,S,R):he(T,w,I,!0):(M&8&&u(m,""),H&16&&Re(x,m,g,w,I,P,S,R))},Ze=(d,h,m,g,w,I,P,S,R)=>{d=d||Qt,h=h||Qt;const T=d.length,M=h.length,x=Math.min(T,M);let U;for(U=0;U<x;U++){const H=h[U]=R?pt(h[U]):Ke(h[U]);E(d[U],H,m,null,w,I,P,S,R)}T>M?he(d,w,I,!0,!1,x):Re(h,m,g,w,I,P,S,R,x)},lt=(d,h,m,g,w,I,P,S,R)=>{let T=0;const M=h.length;let x=d.length-1,U=M-1;for(;T<=x&&T<=U;){const H=d[T],V=h[T]=R?pt(h[T]):Ke(h[T]);if(In(H,V))E(H,V,m,null,w,I,P,S,R);else break;T++}for(;T<=x&&T<=U;){const H=d[x],V=h[U]=R?pt(h[U]):Ke(h[U]);if(In(H,V))E(H,V,m,null,w,I,P,S,R);else break;x--,U--}if(T>x){if(T<=U){const H=U+1,V=H<M?h[H].el:g;for(;T<=U;)E(null,h[T]=R?pt(h[T]):Ke(h[T]),m,V,w,I,P,S,R),T++}}else if(T>U)for(;T<=x;)ve(d[T],w,I,!0),T++;else{const H=T,V=T,Z=new Map;for(T=V;T<=U;T++){const Te=h[T]=R?pt(h[T]):Ke(h[T]);Te.key!=null&&Z.set(Te.key,T)}let Y,oe=0;const Ne=U-V+1;let qt=!1,Xi=0;const wn=new Array(Ne);for(T=0;T<Ne;T++)wn[T]=0;for(T=H;T<=x;T++){const Te=d[T];if(oe>=Ne){ve(Te,w,I,!0);continue}let We;if(Te.key!=null)We=Z.get(Te.key);else for(Y=V;Y<=U;Y++)if(wn[Y-V]===0&&In(Te,h[Y])){We=Y;break}We===void 0?ve(Te,w,I,!0):(wn[We-V]=T+1,We>=Xi?Xi=We:qt=!0,E(Te,h[We],m,null,w,I,P,S,R),oe++)}const Qi=qt?jf(wn):Qt;for(Y=Qi.length-1,T=Ne-1;T>=0;T--){const Te=V+T,We=h[Te],Zi=Te+1<M?h[Te+1].el:g;wn[T]===0?E(null,We,m,Zi,w,I,P,S,R):qt&&(Y<0||T!==Qi[Y]?Ve(We,m,Zi,2):Y--)}}},Ve=(d,h,m,g,w=null)=>{const{el:I,type:P,transition:S,children:R,shapeFlag:T}=d;if(T&6){Ve(d.component.subTree,h,m,g);return}if(T&128){d.suspense.move(h,m,g);return}if(T&64){P.move(d,h,m,C);return}if(P===Ae){r(I,h,m);for(let x=0;x<R.length;x++)Ve(R[x],h,m,g);r(d.anchor,h,m);return}if(P===gs){$(d,h,m);return}if(g!==2&&T&1&&S)if(g===0)S.beforeEnter(I),r(I,h,m),Ee(()=>S.enter(I),w);else{const{leave:x,delayLeave:U,afterLeave:H}=S,V=()=>r(I,h,m),Z=()=>{x(I,()=>{V(),H&&H()})};U?U(I,V,Z):Z()}else r(I,h,m)},ve=(d,h,m,g=!1,w=!1)=>{const{type:I,props:P,ref:S,children:R,dynamicChildren:T,shapeFlag:M,patchFlag:x,dirs:U}=d;if(S!=null&&zs(S,null,m,d,!0),M&256){h.ctx.deactivate(d);return}const H=M&1&&U,V=!mr(d);let Z;if(V&&(Z=P&&P.onVnodeBeforeUnmount)&&ze(Z,h,d),M&6)sr(d.component,m,g);else{if(M&128){d.suspense.unmount(m,g);return}H&&Ot(d,null,h,"beforeUnmount"),M&64?d.type.remove(d,h,m,w,C,g):T&&(I!==Ae||x>0&&x&64)?he(T,h,m,!1,!0):(I===Ae&&x&384||!w&&M&16)&&he(R,h,m),g&&zt(d)}(V&&(Z=P&&P.onVnodeUnmounted)||H)&&Ee(()=>{Z&&ze(Z,h,d),H&&Ot(d,null,h,"unmounted")},m)},zt=d=>{const{type:h,el:m,anchor:g,transition:w}=d;if(h===Ae){Kt(m,g);return}if(h===gs){L(d);return}const I=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:P,delayLeave:S}=w,R=()=>P(m,I);S?S(d.el,I,R):R()}else I()},Kt=(d,h)=>{let m;for(;d!==h;)m=p(d),s(d),d=m;s(h)},sr=(d,h,m)=>{const{bum:g,scope:w,update:I,subTree:P,um:S}=d;g&&hr(g),w.stop(),I&&(I.active=!1,ve(P,d,h,m)),S&&Ee(S,h),Ee(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},he=(d,h,m,g=!1,w=!1,I=0)=>{for(let P=I;P<d.length;P++)ve(d[P],h,m,g,w)},v=d=>d.shapeFlag&6?v(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),O=(d,h,m)=>{d==null?h._vnode&&ve(h._vnode,null,null,!0):E(h._vnode||null,d,h,null,null,null,m),co(),uc(),h._vnode=d},C={p:E,um:ve,m:Ve,r:zt,mt:En,mc:Re,pc:q,pbc:Ce,n:v,o:t};let D,G;return e&&([D,G]=e(C)),{render:O,hydrate:D,createApp:xf(O,D)}}function kt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Hf(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function kc(t,e,n=!1){const r=t.children,s=e.children;if(B(r)&&B(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=pt(s[i]),a.el=o.el),n||kc(o,a)),a.type===Zr&&(a.el=o.el)}}function jf(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Vf=t=>t.__isTeleport,Ae=Symbol.for("v-fgt"),Zr=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),gs=Symbol.for("v-stc"),xn=[];let Le=null;function ge(t=!1){xn.push(Le=t?null:[])}function Wf(){xn.pop(),Le=xn[xn.length-1]||null}let Hn=1;function vo(t){Hn+=t}function Nc(t){return t.dynamicChildren=Hn>0?Le||Qt:null,Wf(),Hn>0&&Le&&Le.push(t),t}function we(t,e,n,r,s,i){return Nc(te(t,e,n,r,s,i,!0))}function xc(t,e,n,r,s){return Nc(se(t,e,n,r,s,!0))}function Ks(t){return t?t.__v_isVNode===!0:!1}function In(t,e){return t.type===e.type&&t.key===e.key}const es="__vInternal",Dc=({key:t})=>t??null,_r=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ce(t)||me(t)||j(t)?{i:Oe,r:t,k:e,f:!!n}:t:null);function te(t,e=null,n=null,r=0,s=null,i=t===Ae?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dc(e),ref:e&&_r(e),scopeId:Xr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Oe};return a?(Ci(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ce(n)?8:16),Hn>0&&!o&&Le&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Le.push(c),c}const se=zf;function zf(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===uf)&&(t=$t),Ks(t)){const a=cn(t,e,!0);return n&&Ci(a,n),Hn>0&&!i&&Le&&(a.shapeFlag&6?Le[Le.indexOf(t)]=a:Le.push(a)),a.patchFlag|=-2,a}if(rd(t)&&(t=t.__vccOpts),e){e=Kf(e);let{class:a,style:c}=e;a&&!ce(a)&&(e.class=Kr(a)),ne(c)&&(tc(c)&&!B(c)&&(c=de({},c)),e.style=mi(c))}const o=ce(t)?1:df(t)?128:Vf(t)?64:ne(t)?4:j(t)?2:0;return te(t,e,n,r,s,o,i,!0)}function Kf(t){return t?tc(t)||es in t?de({},t):t:null}function cn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Gf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Dc(a),ref:e&&e.ref?n&&s?B(s)?s.concat(_r(e)):[s,_r(e)]:_r(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ae?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cn(t.ssContent),ssFallback:t.ssFallback&&cn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function yr(t=" ",e=0){return se(Zr,null,t,e)}function qf(t="",e=!1){return e?(ge(),xc($t,null,t)):se($t,null,t)}function Ke(t){return t==null||typeof t=="boolean"?se($t):B(t)?se(Ae,null,t.slice()):typeof t=="object"?pt(t):se(Zr,null,String(t))}function pt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cn(t)}function Ci(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ci(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(es in e)?e._ctx=Oe:s===3&&Oe&&(Oe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:Oe},n=32):(e=String(e),r&64?(n=16,e=[yr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Kr([e.class,r.class]));else if(s==="style")e.style=mi([e.style,r.style]);else if(Hr(s)){const i=e[s],o=r[s];o&&i!==o&&!(B(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function ze(t,e,n,r=null){Ue(t,e,7,[n,r])}const Jf=Sc();let Yf=0;function Xf(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Jf,i={uid:Yf++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Su(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cc(r,s),emitsOptions:dc(r,s),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sf.bind(null,i),t.ce&&t.ce(i),i}let fe=null,Ai,Gt,Eo="__VUE_INSTANCE_SETTERS__";(Gt=Ls()[Eo])||(Gt=Ls()[Eo]=[]),Gt.push(t=>fe=t),Ai=t=>{Gt.length>1?Gt.forEach(e=>e(t)):Gt[0](t)};const ln=t=>{Ai(t),t.scope.on()},Ut=()=>{fe&&fe.scope.off(),Ai(null)};function Lc(t){return t.vnode.shapeFlag&4}let jn=!1;function Qf(t,e=!1){jn=e;const{props:n,children:r}=t.vnode,s=Lc(t);Df(t,n,s,e),Uf(t,r);const i=s?Zf(t,e):void 0;return jn=!1,i}function Zf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=nc(new Proxy(t.ctx,Rf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?td(t):null;ln(t),gn();const i=Et(r,t,0,[t.props,s]);if(_n(),Ut(),Fa(i)){if(i.then(Ut,Ut),e)return i.then(o=>{wo(t,o,e)}).catch(o=>{Jr(o,t,0)});t.asyncDep=i}else wo(t,i,e)}else Mc(t,e)}function wo(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ne(e)&&(t.setupState=oc(e)),Mc(t,n)}let Io;function Mc(t,e,n){const r=t.type;if(!t.render){if(!e&&Io&&!r.render){const s=r.template||Si(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=de(de({isCustomElement:i,delimiters:a},o),c);r.render=Io(s,l)}}t.render=r.render||Me}{ln(t),gn();try{Cf(t)}finally{_n(),Ut()}}}function ed(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ie(t,"get","$attrs"),e[n]}}))}function td(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return ed(t)},slots:t.slots,emit:t.emit,expose:e}}function ts(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(oc(nc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Nn)return Nn[n](t)},has(e,n){return n in e||n in Nn}}))}function nd(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function rd(t){return j(t)&&"__vccOpts"in t}const Pe=(t,e)=>Qu(t,e,jn);function Uc(t,e,n){const r=arguments.length;return r===2?ne(e)&&!B(e)?Ks(e)?se(t,null,[e]):se(t,e):se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ks(n)&&(n=[n]),se(t,e,n))}const sd=Symbol.for("v-scx"),id=()=>Fe(sd),od="3.3.9",ad="http://www.w3.org/2000/svg",Dt=typeof document<"u"?document:null,To=Dt&&Dt.createElement("template"),cd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Dt.createElementNS(ad,t):Dt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Dt.createTextNode(t),createComment:t=>Dt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{To.innerHTML=r?`<svg>${t}</svg>`:t;const a=To.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ld=Symbol("_vtc");function ud(t,e,n){const r=t[ld];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Pi=Symbol("_vod"),fd={beforeMount(t,{value:e},{transition:n}){t[Pi]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Tn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Tn(t,!0),r.enter(t)):r.leave(t,()=>{Tn(t,!1)}):Tn(t,e))},beforeUnmount(t,{value:e}){Tn(t,e)}};function Tn(t,e){t.style.display=e?t[Pi]:"none"}function dd(t,e,n){const r=t.style,s=ce(n);if(n&&!s){if(e&&!ce(e))for(const i in e)n[i]==null&&qs(r,i,"");for(const i in n)qs(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),Pi in t&&(r.display=i)}}const So=/\s*!important$/;function qs(t,e,n){if(B(n))n.forEach(r=>qs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=hd(t,e);So.test(n)?t.setProperty(mn(r),n.replace(So,""),"important"):t[r]=n}}const Ro=["Webkit","Moz","ms"],_s={};function hd(t,e){const n=_s[e];if(n)return n;let r=Xe(e);if(r!=="filter"&&r in t)return _s[e]=r;r=zr(r);for(let s=0;s<Ro.length;s++){const i=Ro[s]+r;if(i in t)return _s[e]=i}return e}const Co="http://www.w3.org/1999/xlink";function pd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Co,e.slice(6,e.length)):t.setAttributeNS(Co,e,n);else{const i=Tu(e);n==null||i&&!Ha(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function md(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ha(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Jt(t,e,n,r){t.addEventListener(e,n,r)}function gd(t,e,n,r){t.removeEventListener(e,n,r)}const Ao=Symbol("_vei");function _d(t,e,n,r,s=null){const i=t[Ao]||(t[Ao]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=yd(e);if(r){const l=i[e]=Ed(r,s);Jt(t,a,l,c)}else o&&(gd(t,a,o,c),i[e]=void 0)}}const Po=/(?:Once|Passive|Capture)$/;function yd(t){let e;if(Po.test(t)){e={};let r;for(;r=t.match(Po);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):mn(t.slice(2)),e]}let ys=0;const bd=Promise.resolve(),vd=()=>ys||(bd.then(()=>ys=0),ys=Date.now());function Ed(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ue(wd(r,n.value),e,5,[r])};return n.value=t,n.attached=vd(),n}function wd(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Oo=/^on[a-z]/,Id=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?ud(t,r,s):e==="style"?dd(t,n,r):Hr(e)?di(e)||_d(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Td(t,e,r,s))?md(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),pd(t,e,r,s))};function Td(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Oo.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Oo.test(e)&&ce(n)?!1:e in t}const ko=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>hr(e,n):e};function Sd(t){t.target.composing=!0}function No(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const bs=Symbol("_assign"),kr={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[bs]=ko(s);const i=r||s.props&&s.props.type==="number";Jt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ds(a)),t[bs](a)}),n&&Jt(t,"change",()=>{t.value=t.value.trim()}),e||(Jt(t,"compositionstart",Sd),Jt(t,"compositionend",No),Jt(t,"change",No))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[bs]=ko(i),t.composing)return;const o=s||t.type==="number"?Ds(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Rd=["ctrl","shift","alt","meta"],Cd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Rd.some(n=>t[`${n}Key`]&&!e.includes(n))},Fc=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=Cd[e[s]];if(i&&i(n,e))return}return t(n,...r)},Ad=de({patchProp:Id},cd);let xo;function Pd(){return xo||(xo=Bf(Ad))}const Od=(...t)=>{const e=Pd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=kd(r);if(!s)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function kd(t){return ce(t)?document.querySelector(t):t}const Nd="modulepreload",xd=function(t){return"/ChampionHub/"+t},Do={},Lo=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=xd(i),i in Do)return;Do[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const f=s[u];if(f.href===i&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":Nd,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Yt=typeof window<"u";function Dd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const J=Object.assign;function vs(t,e){const n={};for(const r in e){const s=e[r];n[r]=Be(s)?s.map(t):t(s)}return n}const Dn=()=>{},Be=Array.isArray,Ld=/\/$/,Md=t=>t.replace(Ld,"");function Es(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=$d(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Ud(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Mo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Fd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&un(e.matched[r],n.matched[s])&&Bc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function un(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Bc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Bd(t[n],e[n]))return!1;return!0}function Bd(t,e){return Be(t)?Uo(t,e):Be(e)?Uo(e,t):t===e}function Uo(t,e){return Be(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function $d(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Vn;(function(t){t.pop="pop",t.push="push"})(Vn||(Vn={}));var Ln;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ln||(Ln={}));function Hd(t){if(!t)if(Yt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Md(t)}const jd=/^[^#]+#/;function Vd(t,e){return t.replace(jd,"#")+e}function Wd(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ns=()=>({left:window.pageXOffset,top:window.pageYOffset});function zd(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Wd(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Fo(t,e){return(history.state?history.state.position-e:-1)+t}const Gs=new Map;function Kd(t,e){Gs.set(t,e)}function qd(t){const e=Gs.get(t);return Gs.delete(t),e}let Gd=()=>location.protocol+"//"+location.host;function $c(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Mo(c,"")}return Mo(n,t)+r+s}function Jd(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const _=$c(t,location),b=n.value,E=e.value;let k=0;if(p){if(n.value=_,e.value=p,o&&o===b){o=null;return}k=E?p.position-E.position:0}else r(_);s.forEach(A=>{A(n.value,b,{delta:k,type:Vn.pop,direction:k?k>0?Ln.forward:Ln.back:Ln.unknown})})};function c(){o=n.value}function l(p){s.push(p);const _=()=>{const b=s.indexOf(p);b>-1&&s.splice(b,1)};return i.push(_),_}function u(){const{history:p}=window;p.state&&p.replaceState(J({},p.state,{scroll:ns()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Bo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ns():null}}function Yd(t){const{history:e,location:n}=window,r={value:$c(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:Gd()+t+c;try{e[u?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[u?"replace":"assign"](p)}}function o(c,l){const u=J({},e.state,Bo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=J({},s.value,e.state,{forward:c,scroll:ns()});i(u.current,u,!0);const f=J({},Bo(r.value,c,null),{position:u.position+1},l);i(c,f,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Xd(t){t=Hd(t);const e=Yd(t),n=Jd(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=J({location:"",base:t,go:r,createHref:Vd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Qd(t){return typeof t=="string"||t&&typeof t=="object"}function Hc(t){return typeof t=="string"||typeof t=="symbol"}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jc=Symbol("");var $o;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($o||($o={}));function fn(t,e){return J(new Error,{type:t,[jc]:!0},e)}function et(t,e){return t instanceof Error&&jc in t&&(e==null||!!(t.type&e))}const Ho="[^/]+?",Zd={sensitive:!1,strict:!1,start:!0,end:!0},eh=/[.+*?^${}()[\]/\\]/g;function th(t,e){const n=J({},Zd,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let f=0;f<l.length;f++){const p=l[f];let _=40+(n.sensitive?.25:0);if(p.type===0)f||(s+="/"),s+=p.value.replace(eh,"\\$&"),_+=40;else if(p.type===1){const{value:b,repeatable:E,optional:k,regexp:A}=p;i.push({name:b,repeatable:E,optional:k});const N=A||Ho;if(N!==Ho){_+=10;try{new RegExp(`(${N})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${b}" (${N}): `+L.message)}}let $=E?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;f||($=k&&l.length<2?`(?:/${$})`:"/"+$),k&&($+="?"),s+=$,_+=20,k&&(_+=-8),E&&(_+=-20),N===".*"&&(_+=-50)}u.push(_)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),f={};if(!u)return null;for(let p=1;p<u.length;p++){const _=u[p]||"",b=i[p-1];f[b.name]=_&&b.repeatable?_.split("/"):_}return f}function c(l){let u="",f=!1;for(const p of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const _ of p)if(_.type===0)u+=_.value;else if(_.type===1){const{value:b,repeatable:E,optional:k}=_,A=b in l?l[b]:"";if(Be(A)&&!E)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const N=Be(A)?A.join("/"):A;if(!N)if(k)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${b}"`);u+=N}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function nh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function rh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=nh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(jo(r))return 1;if(jo(s))return-1}return s.length-r.length}function jo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const sh={type:0,value:""},ih=/[a-zA-Z0-9_]/;function oh(t){if(!t)return[[]];if(t==="/")return[[sh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:ih.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),s}function ah(t,e,n){const r=th(oh(t.path),n),s=J(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function ch(t,e){const n=[],r=new Map;e=zo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,f,p){const _=!p,b=lh(u);b.aliasOf=p&&p.record;const E=zo(e,u),k=[b];if("alias"in u){const $=typeof u.alias=="string"?[u.alias]:u.alias;for(const L of $)k.push(J({},b,{components:p?p.record.components:b.components,path:L,aliasOf:p?p.record:b}))}let A,N;for(const $ of k){const{path:L}=$;if(f&&L[0]!=="/"){const re=f.record.path,ie=re[re.length-1]==="/"?"":"/";$.path=f.record.path+(L&&ie+L)}if(A=ah($,f,E),p?p.alias.push(A):(N=N||A,N!==A&&N.alias.push(A),_&&u.name&&!Wo(A)&&o(u.name)),b.children){const re=b.children;for(let ie=0;ie<re.length;ie++)i(re[ie],A,p&&p.children[ie])}p=p||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&c(A)}return N?()=>{o(N)}:Dn}function o(u){if(Hc(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let f=0;for(;f<n.length&&rh(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Vc(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Wo(u)&&r.set(u.record.name,u)}function l(u,f){let p,_={},b,E;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw fn(1,{location:u});E=p.record.name,_=J(Vo(f.params,p.keys.filter(N=>!N.optional).map(N=>N.name)),u.params&&Vo(u.params,p.keys.map(N=>N.name))),b=p.stringify(_)}else if("path"in u)b=u.path,p=n.find(N=>N.re.test(b)),p&&(_=p.parse(b),E=p.record.name);else{if(p=f.name?r.get(f.name):n.find(N=>N.re.test(f.path)),!p)throw fn(1,{location:u,currentLocation:f});E=p.record.name,_=J({},f.params,u.params),b=p.stringify(_)}const k=[];let A=p;for(;A;)k.unshift(A.record),A=A.parent;return{name:E,path:b,params:_,matched:k,meta:fh(k)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Vo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:uh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function uh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Wo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fh(t){return t.reduce((e,n)=>J(e,n.meta),{})}function zo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Vc(t,e){return e.children.some(n=>n===t||Vc(t,n))}const Wc=/#/g,dh=/&/g,hh=/\//g,ph=/=/g,mh=/\?/g,zc=/\+/g,gh=/%5B/g,_h=/%5D/g,Kc=/%5E/g,yh=/%60/g,qc=/%7B/g,bh=/%7C/g,Gc=/%7D/g,vh=/%20/g;function Oi(t){return encodeURI(""+t).replace(bh,"|").replace(gh,"[").replace(_h,"]")}function Eh(t){return Oi(t).replace(qc,"{").replace(Gc,"}").replace(Kc,"^")}function Js(t){return Oi(t).replace(zc,"%2B").replace(vh,"+").replace(Wc,"%23").replace(dh,"%26").replace(yh,"`").replace(qc,"{").replace(Gc,"}").replace(Kc,"^")}function wh(t){return Js(t).replace(ph,"%3D")}function Ih(t){return Oi(t).replace(Wc,"%23").replace(mh,"%3F")}function Th(t){return t==null?"":Ih(t).replace(hh,"%2F")}function Nr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Sh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(zc," "),o=i.indexOf("="),a=Nr(o<0?i:i.slice(0,o)),c=o<0?null:Nr(i.slice(o+1));if(a in e){let l=e[a];Be(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ko(t){let e="";for(let n in t){const r=t[n];if(n=wh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Be(r)?r.map(i=>i&&Js(i)):[r&&Js(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Rh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Be(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Ch=Symbol(""),qo=Symbol(""),rs=Symbol(""),ki=Symbol(""),Ys=Symbol("");function Sn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function mt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=f=>{f===!1?a(fn(4,{from:n,to:e})):f instanceof Error?a(f):Qd(f)?a(fn(2,{from:e,to:f})):(i&&r.enterCallbacks[s]===i&&typeof f=="function"&&i.push(f),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(f=>a(f))})}function ws(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Ah(a)){const l=(a.__vccOpts||a)[e];l&&s.push(mt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Dd(l)?l.default:l;i.components[o]=u;const p=(u.__vccOpts||u)[e];return p&&mt(p,n,r,i,o)()}))}}return s}function Ah(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Go(t){const e=Fe(rs),n=Fe(ki),r=Pe(()=>e.resolve(ue(t.to))),s=Pe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(un.bind(null,u));if(p>-1)return p;const _=Jo(c[l-2]);return l>1&&Jo(u)===_&&f[f.length-1].path!==_?f.findIndex(un.bind(null,c[l-2])):p}),i=Pe(()=>s.value>-1&&Nh(n.params,r.value.params)),o=Pe(()=>s.value>-1&&s.value===n.matched.length-1&&Bc(n.params,r.value.params));function a(c={}){return kh(c)?e[ue(t.replace)?"replace":"push"](ue(t.to)).catch(Dn):Promise.resolve()}return{route:r,href:Pe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Ph=yc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Go,setup(t,{slots:e}){const n=Gr(Go(t)),{options:r}=Fe(rs),s=Pe(()=>({[Yo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Yo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Uc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Oh=Ph;function kh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Nh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Be(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Jo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yo=(t,e,n)=>t??e??n,xh=yc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Fe(Ys),s=Pe(()=>t.route||r.value),i=Fe(qo,0),o=Pe(()=>{let l=ue(i);const{matched:u}=s.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),a=Pe(()=>s.value.matched[o.value]);gr(qo,Pe(()=>o.value+1)),gr(Ch,a),gr(Ys,s);const c=Se();return pr(()=>[c.value,a.value,t.name],([l,u,f],[p,_,b])=>{u&&(u.instances[f]=l,_&&_!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),l&&u&&(!_||!un(u,_)||!p)&&(u.enterCallbacks[f]||[]).forEach(E=>E(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,f=a.value,p=f&&f.components[u];if(!p)return Xo(n.default,{Component:p,route:l});const _=f.props[u],b=_?_===!0?l.params:typeof _=="function"?_(l):_:null,k=Uc(p,J({},b,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Xo(n.default,{Component:k,route:l})||k}}});function Xo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Dh=xh;function Lh(t){const e=ch(t.routes,t),n=t.parseQuery||Sh,r=t.stringifyQuery||Ko,s=t.history,i=Sn(),o=Sn(),a=Sn(),c=Gu(ft);let l=ft;Yt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=vs.bind(null,v=>""+v),f=vs.bind(null,Th),p=vs.bind(null,Nr);function _(v,O){let C,D;return Hc(v)?(C=e.getRecordMatcher(v),D=O):D=v,e.addRoute(D,C)}function b(v){const O=e.getRecordMatcher(v);O&&e.removeRoute(O)}function E(){return e.getRoutes().map(v=>v.record)}function k(v){return!!e.getRecordMatcher(v)}function A(v,O){if(O=J({},O||c.value),typeof v=="string"){const m=Es(n,v,O.path),g=e.resolve({path:m.path},O),w=s.createHref(m.fullPath);return J(m,g,{params:p(g.params),hash:Nr(m.hash),redirectedFrom:void 0,href:w})}let C;if("path"in v)C=J({},v,{path:Es(n,v.path,O.path).path});else{const m=J({},v.params);for(const g in m)m[g]==null&&delete m[g];C=J({},v,{params:f(m)}),O.params=f(O.params)}const D=e.resolve(C,O),G=v.hash||"";D.params=u(p(D.params));const d=Ud(r,J({},v,{hash:Eh(G),path:D.path})),h=s.createHref(d);return J({fullPath:d,hash:G,query:r===Ko?Rh(v.query):v.query||{}},D,{redirectedFrom:void 0,href:h})}function N(v){return typeof v=="string"?Es(n,v,c.value.path):J({},v)}function $(v,O){if(l!==v)return fn(8,{from:O,to:v})}function L(v){return be(v)}function re(v){return L(J(N(v),{replace:!0}))}function ie(v){const O=v.matched[v.matched.length-1];if(O&&O.redirect){const{redirect:C}=O;let D=typeof C=="function"?C(v):C;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=N(D):{path:D},D.params={}),J({query:v.query,hash:v.hash,params:"path"in D?{}:v.params},D)}}function be(v,O){const C=l=A(v),D=c.value,G=v.state,d=v.force,h=v.replace===!0,m=ie(C);if(m)return be(J(N(m),{state:typeof m=="object"?J({},G,m.state):G,force:d,replace:h}),O||C);const g=C;g.redirectedFrom=O;let w;return!d&&Fd(r,D,C)&&(w=fn(16,{to:g,from:D}),Ve(D,D,!0,!1)),(w?Promise.resolve(w):Ce(g,D)).catch(I=>et(I)?et(I,2)?I:lt(I):q(I,g,D)).then(I=>{if(I){if(et(I,2))return be(J({replace:h},N(I.to),{state:typeof I.to=="object"?J({},G,I.to.state):G,force:d}),O||g)}else I=Pt(g,D,!0,h,G);return ct(g,D,I),I})}function Re(v,O){const C=$(v,O);return C?Promise.reject(C):Promise.resolve()}function He(v){const O=Kt.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(v):v()}function Ce(v,O){let C;const[D,G,d]=Mh(v,O);C=ws(D.reverse(),"beforeRouteLeave",v,O);for(const m of D)m.leaveGuards.forEach(g=>{C.push(mt(g,v,O))});const h=Re.bind(null,v,O);return C.push(h),he(C).then(()=>{C=[];for(const m of i.list())C.push(mt(m,v,O));return C.push(h),he(C)}).then(()=>{C=ws(G,"beforeRouteUpdate",v,O);for(const m of G)m.updateGuards.forEach(g=>{C.push(mt(g,v,O))});return C.push(h),he(C)}).then(()=>{C=[];for(const m of d)if(m.beforeEnter)if(Be(m.beforeEnter))for(const g of m.beforeEnter)C.push(mt(g,v,O));else C.push(mt(m.beforeEnter,v,O));return C.push(h),he(C)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),C=ws(d,"beforeRouteEnter",v,O),C.push(h),he(C))).then(()=>{C=[];for(const m of o.list())C.push(mt(m,v,O));return C.push(h),he(C)}).catch(m=>et(m,8)?m:Promise.reject(m))}function ct(v,O,C){a.list().forEach(D=>He(()=>D(v,O,C)))}function Pt(v,O,C,D,G){const d=$(v,O);if(d)return d;const h=O===ft,m=Yt?history.state:{};C&&(D||h?s.replace(v.fullPath,J({scroll:h&&m&&m.scroll},G)):s.push(v.fullPath,G)),c.value=v,Ve(v,O,C,h),lt()}let je;function En(){je||(je=s.listen((v,O,C)=>{if(!sr.listening)return;const D=A(v),G=ie(D);if(G){be(J(G,{replace:!0}),D).catch(Dn);return}l=D;const d=c.value;Yt&&Kd(Fo(d.fullPath,C.delta),ns()),Ce(D,d).catch(h=>et(h,12)?h:et(h,2)?(be(h.to,D).then(m=>{et(m,20)&&!C.delta&&C.type===Vn.pop&&s.go(-1,!1)}).catch(Dn),Promise.reject()):(C.delta&&s.go(-C.delta,!1),q(h,D,d))).then(h=>{h=h||Pt(D,d,!1),h&&(C.delta&&!et(h,8)?s.go(-C.delta,!1):C.type===Vn.pop&&et(h,20)&&s.go(-1,!1)),ct(D,d,h)}).catch(Dn)}))}let Wt=Sn(),le=Sn(),X;function q(v,O,C){lt(v);const D=le.list();return D.length?D.forEach(G=>G(v,O,C)):console.error(v),Promise.reject(v)}function Ze(){return X&&c.value!==ft?Promise.resolve():new Promise((v,O)=>{Wt.add([v,O])})}function lt(v){return X||(X=!v,En(),Wt.list().forEach(([O,C])=>v?C(v):O()),Wt.reset()),v}function Ve(v,O,C,D){const{scrollBehavior:G}=t;if(!Yt||!G)return Promise.resolve();const d=!C&&qd(Fo(v.fullPath,0))||(D||!C)&&history.state&&history.state.scroll||null;return cc().then(()=>G(v,O,d)).then(h=>h&&zd(h)).catch(h=>q(h,v,O))}const ve=v=>s.go(v);let zt;const Kt=new Set,sr={currentRoute:c,listening:!0,addRoute:_,removeRoute:b,hasRoute:k,getRoutes:E,resolve:A,options:t,push:L,replace:re,go:ve,back:()=>ve(-1),forward:()=>ve(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:le.add,isReady:Ze,install(v){const O=this;v.component("RouterLink",Oh),v.component("RouterView",Dh),v.config.globalProperties.$router=O,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>ue(c)}),Yt&&!zt&&c.value===ft&&(zt=!0,L(s.location).catch(G=>{}));const C={};for(const G in ft)Object.defineProperty(C,G,{get:()=>c.value[G],enumerable:!0});v.provide(rs,O),v.provide(ki,Za(C)),v.provide(Ys,c);const D=v.unmount;Kt.add(v),v.unmount=function(){Kt.delete(v),Kt.size<1&&(l=ft,je&&je(),je=null,c.value=ft,zt=!1,X=!1),D()}}};function he(v){return v.reduce((O,C)=>O.then(()=>He(C)),Promise.resolve())}return sr}function Mh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>un(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>un(l,c))||s.push(c))}return[n,r,s]}function Uh(){return Fe(rs)}function Fh(){return Fe(ki)}/**
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
 */const Jc=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Bh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Yc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),r.push(n[u],n[f],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Bh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||f==null)throw new $h;const p=i<<2|a>>4;if(r.push(p),l!==64){const _=a<<4&240|l>>2;if(r.push(_),f!==64){const b=l<<6&192|f;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $h extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hh=function(t){const e=Jc(t);return Yc.encodeByteArray(e,!0)},Xc=function(t){return Hh(t).replace(/\./g,"")},Qc=function(t){try{return Yc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function jh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vh=()=>jh().__FIREBASE_DEFAULTS__,Wh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zh=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qc(t[1]);return e&&JSON.parse(e)},Ni=()=>{try{return Vh()||Wh()||zh()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Kh=t=>{var e,n;return(n=(e=Ni())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Zc=()=>{var t;return(t=Ni())===null||t===void 0?void 0:t.config},el=t=>{var e;return(e=Ni())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class qh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function Jh(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Yh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xh(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Qh(){try{return typeof indexedDB=="object"}catch{return!1}}function Zh(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ep="FirebaseError";class St extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ep,Object.setPrototypeOf(this,St.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yn.prototype.create)}}class Yn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?tp(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new St(s,a,r)}}function tp(t,e){return t.replace(np,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const np=/\{\$([^}]+)}/g;function rp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Qo(i)&&Qo(o)){if(!xr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Qo(t){return t!==null&&typeof t=="object"}/**
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
 */function Xn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function On(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function sp(t,e){const n=new ip(t,e);return n.subscribe.bind(n)}class ip{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");op(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Is),s.error===void 0&&(s.error=Is),s.complete===void 0&&(s.complete=Is);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function op(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Is(){}/**
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
 */function Rt(t){return t&&t._delegate?t._delegate:t}class dn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nt="[DEFAULT]";/**
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
 */class ap{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lp(e))try{this.getOrInitializeService({instanceIdentifier:Nt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nt){return this.instances.has(e)}getOptions(e=Nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cp(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nt){return this.component?this.component.multipleInstances?e:Nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cp(t){return t===Nt?void 0:t}function lp(t){return t.instantiationMode==="EAGER"}/**
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
 */class up{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ap(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const fp={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},dp=Q.INFO,hp={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},pp=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tl{constructor(e){this.name=e,this._logLevel=dp,this._logHandler=pp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const mp=(t,e)=>e.some(n=>t instanceof n);let Zo,ea;function gp(){return Zo||(Zo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _p(){return ea||(ea=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nl=new WeakMap,Xs=new WeakMap,rl=new WeakMap,Ts=new WeakMap,xi=new WeakMap;function yp(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(wt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nl.set(n,t)}).catch(()=>{}),xi.set(e,t),e}function bp(t){if(Xs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Xs.set(t,e)}let Qs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Xs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vp(t){Qs=t(Qs)}function Ep(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ss(this),e,...n);return rl.set(r,e.sort?e.sort():[e]),wt(r)}:_p().includes(t)?function(...e){return t.apply(Ss(this),e),wt(nl.get(this))}:function(...e){return wt(t.apply(Ss(this),e))}}function wp(t){return typeof t=="function"?Ep(t):(t instanceof IDBTransaction&&bp(t),mp(t,gp())?new Proxy(t,Qs):t)}function wt(t){if(t instanceof IDBRequest)return yp(t);if(Ts.has(t))return Ts.get(t);const e=wp(t);return e!==t&&(Ts.set(t,e),xi.set(e,t)),e}const Ss=t=>xi.get(t);function Ip(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=wt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(wt(o.result),c.oldVersion,c.newVersion,wt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Tp=["get","getKey","getAll","getAllKeys","count"],Sp=["put","add","delete","clear"],Rs=new Map;function ta(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rs.get(e))return Rs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Sp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Tp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Rs.set(e,i),i}vp(t=>({...t,get:(e,n,r)=>ta(e,n)||t.get(e,n,r),has:(e,n)=>!!ta(e,n)||t.has(e,n)}));/**
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
 */class Rp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Cp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Cp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zs="@firebase/app",na="0.9.24";/**
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
 */const Ht=new tl("@firebase/app"),Ap="@firebase/app-compat",Pp="@firebase/analytics-compat",Op="@firebase/analytics",kp="@firebase/app-check-compat",Np="@firebase/app-check",xp="@firebase/auth",Dp="@firebase/auth-compat",Lp="@firebase/database",Mp="@firebase/database-compat",Up="@firebase/functions",Fp="@firebase/functions-compat",Bp="@firebase/installations",$p="@firebase/installations-compat",Hp="@firebase/messaging",jp="@firebase/messaging-compat",Vp="@firebase/performance",Wp="@firebase/performance-compat",zp="@firebase/remote-config",Kp="@firebase/remote-config-compat",qp="@firebase/storage",Gp="@firebase/storage-compat",Jp="@firebase/firestore",Yp="@firebase/firestore-compat",Xp="firebase",Qp="10.7.0";/**
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
 */const ei="[DEFAULT]",Zp={[Zs]:"fire-core",[Ap]:"fire-core-compat",[Op]:"fire-analytics",[Pp]:"fire-analytics-compat",[Np]:"fire-app-check",[kp]:"fire-app-check-compat",[xp]:"fire-auth",[Dp]:"fire-auth-compat",[Lp]:"fire-rtdb",[Mp]:"fire-rtdb-compat",[Up]:"fire-fn",[Fp]:"fire-fn-compat",[Bp]:"fire-iid",[$p]:"fire-iid-compat",[Hp]:"fire-fcm",[jp]:"fire-fcm-compat",[Vp]:"fire-perf",[Wp]:"fire-perf-compat",[zp]:"fire-rc",[Kp]:"fire-rc-compat",[qp]:"fire-gcs",[Gp]:"fire-gcs-compat",[Jp]:"fire-fst",[Yp]:"fire-fst-compat","fire-js":"fire-js",[Xp]:"fire-js-all"};/**
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
 */const Dr=new Map,ti=new Map;function em(t,e){try{t.container.addComponent(e)}catch(n){Ht.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Wn(t){const e=t.name;if(ti.has(e))return Ht.debug(`There were multiple attempts to register component ${e}.`),!1;ti.set(e,t);for(const n of Dr.values())em(n,t);return!0}function sl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const tm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},It=new Yn("app","Firebase",tm);/**
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
 */class nm{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new dn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw It.create("app-deleted",{appName:this._name})}}/**
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
 */const Qn=Qp;function il(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ei,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw It.create("bad-app-name",{appName:String(s)});if(n||(n=Zc()),!n)throw It.create("no-options");const i=Dr.get(s);if(i){if(xr(n,i.options)&&xr(r,i.config))return i;throw It.create("duplicate-app",{appName:s})}const o=new up(s);for(const c of ti.values())o.addComponent(c);const a=new nm(n,r,o);return Dr.set(s,a),a}function rm(t=ei){const e=Dr.get(t);if(!e&&t===ei&&Zc())return il();if(!e)throw It.create("no-app",{appName:t});return e}function rn(t,e,n){var r;let s=(r=Zp[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ht.warn(a.join(" "));return}Wn(new dn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sm="firebase-heartbeat-database",im=1,zn="firebase-heartbeat-store";let Cs=null;function ol(){return Cs||(Cs=Ip(sm,im,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(zn)}}}).catch(t=>{throw It.create("idb-open",{originalErrorMessage:t.message})})),Cs}async function om(t){try{return await(await ol()).transaction(zn).objectStore(zn).get(al(t))}catch(e){if(e instanceof St)Ht.warn(e.message);else{const n=It.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ht.warn(n.message)}}}async function ra(t,e){try{const r=(await ol()).transaction(zn,"readwrite");await r.objectStore(zn).put(e,al(t)),await r.done}catch(n){if(n instanceof St)Ht.warn(n.message);else{const r=It.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ht.warn(r.message)}}}function al(t){return`${t.name}!${t.options.appId}`}/**
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
 */const am=1024,cm=30*24*60*60*1e3;class lm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=sa();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=cm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sa(),{heartbeatsToSend:r,unsentEntries:s}=um(this._heartbeatsCache.heartbeats),i=Xc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sa(){return new Date().toISOString().substring(0,10)}function um(t,e=am){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ia(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ia(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qh()?Zh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await om(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ra(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ra(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ia(t){return Xc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function dm(t){Wn(new dn("platform-logger",e=>new Rp(e),"PRIVATE")),Wn(new dn("heartbeat",e=>new lm(e),"PRIVATE")),rn(Zs,na,t),rn(Zs,na,"esm2017"),rn("fire-js","")}dm("");function Di(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function cl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const hm=cl,ll=new Yn("auth","Firebase",cl());/**
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
 */const Lr=new tl("@firebase/auth");function pm(t,...e){Lr.logLevel<=Q.WARN&&Lr.warn(`Auth (${Qn}): ${t}`,...e)}function br(t,...e){Lr.logLevel<=Q.ERROR&&Lr.error(`Auth (${Qn}): ${t}`,...e)}/**
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
 */function $e(t,...e){throw Li(t,...e)}function Je(t,...e){return Li(t,...e)}function mm(t,e,n){const r=Object.assign(Object.assign({},hm()),{[e]:n});return new Yn("auth","Firebase",r).create(e,{appName:t.name})}function Li(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ll.create(t,...e)}function F(t,e,...n){if(!t)throw Li(e,...n)}function nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw br(e),new Error(e)}function ot(t,e){t||nt(e)}/**
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
 */function ni(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gm(){return oa()==="http:"||oa()==="https:"}function oa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function _m(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gm()||Jh()||"connection"in navigator)?navigator.onLine:!0}function ym(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Zn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ot(n>e,"Short delay should be less than long delay!"),this.isMobile=Gh()||Yh()}get(){return _m()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mi(t,e){ot(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ul{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const vm=new Zn(3e4,6e4);function Vt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ct(t,e,n,r,s={}){return fl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Xn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ul.fetch()(dl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function fl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},bm),e);try{const s=new wm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw fr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw fr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw fr(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw mm(t,u,l);$e(t,u)}}catch(s){if(s instanceof St)throw s;$e(t,"network-request-failed",{message:String(s)})}}async function ss(t,e,n,r,s={}){const i=await Ct(t,e,n,r,s);return"mfaPendingCredential"in i&&$e(t,"multi-factor-auth-required",{_serverResponse:i}),i}function dl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Mi(t.config,s):`${t.config.apiScheme}://${s}`}function Em(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Je(this.auth,"network-request-failed")),vm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Je(t,e,r);return s.customData._tokenResponse=n,s}function aa(t){return t!==void 0&&t.enterprise!==void 0}class Im{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Em(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Tm(t,e){return Ct(t,"GET","/v2/recaptchaConfig",Vt(t,e))}/**
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
 */async function Sm(t,e){return Ct(t,"POST","/v1/accounts:delete",e)}async function Rm(t,e){return Ct(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Mn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Cm(t,e=!1){const n=Rt(t),r=await n.getIdToken(e),s=Ui(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Mn(As(s.auth_time)),issuedAtTime:Mn(As(s.iat)),expirationTime:Mn(As(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function As(t){return Number(t)*1e3}function Ui(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return br("JWT malformed, contained fewer than 3 sections"),null;try{const s=Qc(n);return s?JSON.parse(s):(br("Failed to decode base64 JWT payload"),null)}catch(s){return br("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Am(t){const e=Ui(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Kn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof St&&Pm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Pm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Om{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mn(this.lastLoginAt),this.creationTime=Mn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Kn(t,Rm(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?xm(i.providerUserInfo):[],a=Nm(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new hl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function km(t){const e=Rt(t);await Mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Nm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function xm(t){return t.map(e=>{var{providerId:n}=e,r=Di(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Dm(t,e){const n=await fl(t,{},async()=>{const r=Xn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=dl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ul.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Lm(t,e){return Ct(t,"POST","/v2/accounts:revokeToken",Vt(t,e))}/**
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
 */class qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Am(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Dm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new qn;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qn,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
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
 */function dt(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ft{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Di(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Om(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Kn(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Cm(this,e)}reload(){return km(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Kn(this,Sm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:$,emailVerified:L,isAnonymous:re,providerData:ie,stsTokenManager:be}=n;F($&&be,e,"internal-error");const Re=qn.fromJSON(this.name,be);F(typeof $=="string",e,"internal-error"),dt(f,e.name),dt(p,e.name),F(typeof L=="boolean",e,"internal-error"),F(typeof re=="boolean",e,"internal-error"),dt(_,e.name),dt(b,e.name),dt(E,e.name),dt(k,e.name),dt(A,e.name),dt(N,e.name);const He=new Ft({uid:$,auth:e,email:p,emailVerified:L,displayName:f,isAnonymous:re,photoURL:b,phoneNumber:_,tenantId:E,stsTokenManager:Re,createdAt:A,lastLoginAt:N});return ie&&Array.isArray(ie)&&(He.providerData=ie.map(Ce=>Object.assign({},Ce))),k&&(He._redirectEventId=k),He}static async _fromIdTokenResponse(e,n,r=!1){const s=new qn;s.updateFromServerResponse(n);const i=new Ft({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Mr(i),i}}/**
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
 */const ca=new Map;function rt(t){ot(t instanceof Function,"Expected a class definition");let e=ca.get(t);return e?(ot(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ca.set(t,e),e)}/**
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
 */class pl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pl.type="NONE";const la=pl;/**
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
 */function vr(t,e,n){return`firebase:${t}:${e}:${n}`}class sn{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=vr(this.userKey,s.apiKey,i),this.fullPersistenceKey=vr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new sn(rt(la),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||rt(la);const o=vr(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const f=Ft._fromJSON(e,u);l!==i&&(a=f),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new sn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new sn(i,e,r))}}/**
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
 */function ua(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_l(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ml(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bl(e))return"Blackberry";if(vl(e))return"Webos";if(Fi(e))return"Safari";if((e.includes("chrome/")||gl(e))&&!e.includes("edge/"))return"Chrome";if(yl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ml(t=_e()){return/firefox\//i.test(t)}function Fi(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gl(t=_e()){return/crios\//i.test(t)}function _l(t=_e()){return/iemobile/i.test(t)}function yl(t=_e()){return/android/i.test(t)}function bl(t=_e()){return/blackberry/i.test(t)}function vl(t=_e()){return/webos/i.test(t)}function is(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Mm(t=_e()){var e;return is(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Um(){return Xh()&&document.documentMode===10}function El(t=_e()){return is(t)||yl(t)||vl(t)||bl(t)||/windows phone/i.test(t)||_l(t)}function Fm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function wl(t,e=[]){let n;switch(t){case"Browser":n=ua(_e());break;case"Worker":n=`${ua(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qn}/${r}`}/**
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
 */class Bm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $m(t,e={}){return Ct(t,"GET","/v2/passwordPolicy",Vt(t,e))}/**
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
 */const Hm=6;class jm{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Hm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Vm{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fa(this),this.idTokenSubscription=new fa(this),this.beforeStateQueue=new Bm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ll,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await sn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ym()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Rt(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $m(this),n=new jm(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Lm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rt(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await sn.create(this,[rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&pm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yn(t){return Rt(t)}class fa{constructor(e){this.auth=e,this.observer=null,this.addObserver=sp(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Wm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Il(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Je("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Wm().appendChild(r)})}function zm(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Km="https://www.google.com/recaptcha/enterprise.js?render=",qm="recaptcha-enterprise",Gm="NO_RECAPTCHA";class Jm{constructor(e){this.type=qm,this.auth=yn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Tm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Im(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;aa(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Gm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&aa(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Il(Km+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function da(t,e,n,r=!1){const s=new Jm(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ha(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await da(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await da(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function Ym(t,e){const n=sl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xr(i,e??{}))return s;$e(s,"already-initialized")}return n.initialize({options:e})}function Xm(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Qm(t,e,n){const r=yn(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Tl(e),{host:o,port:a}=Zm(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||eg()}function Tl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Zm(t){const e=Tl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:pa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:pa(o)}}}function pa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Bi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,n){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function tg(t,e){return Ct(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ng(t,e){return ss(t,"POST","/v1/accounts:signInWithPassword",Vt(t,e))}/**
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
 */async function rg(t,e){return ss(t,"POST","/v1/accounts:signInWithEmailLink",Vt(t,e))}async function sg(t,e){return ss(t,"POST","/v1/accounts:signInWithEmailLink",Vt(t,e))}/**
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
 */class Gn extends Bi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Gn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Gn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ha(e,n,"signInWithPassword",ng);case"emailLink":return rg(e,{email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ha(e,r,"signUpPassword",tg);case"emailLink":return sg(e,{idToken:n,email:this._email,oobCode:this._password});default:$e(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function on(t,e){return ss(t,"POST","/v1/accounts:signInWithIdp",Vt(t,e))}/**
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
 */const ig="http://localhost";class jt extends Bi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$e("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Di(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new jt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return on(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,on(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,on(e,n)}buildRequest(){const e={requestUri:ig,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xn(n)}return e}}/**
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
 */function og(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ag(t){const e=Pn(On(t)).link,n=e?Pn(On(e)).deep_link_id:null,r=Pn(On(t)).deep_link_id;return(r?Pn(On(r)).link:null)||r||n||e||t}class $i{constructor(e){var n,r,s,i,o,a;const c=Pn(On(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=og((s=c.mode)!==null&&s!==void 0?s:null);F(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ag(e);try{return new $i(n)}catch{return null}}}/**
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
 */class bn{constructor(){this.providerId=bn.PROVIDER_ID}static credential(e,n){return Gn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=$i.parseLink(n);return F(r,"argument-error"),Gn._fromEmailAndCode(e,r.code,r.tenantId)}}bn.PROVIDER_ID="password";bn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Sl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class er extends Sl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gt extends er{constructor(){super("facebook.com")}static credential(e){return jt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gt.credential(e.oauthAccessToken)}catch{return null}}}gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";gt.PROVIDER_ID="facebook.com";/**
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
 */class _t extends er{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _t.credential(n,r)}catch{return null}}}_t.GOOGLE_SIGN_IN_METHOD="google.com";_t.PROVIDER_ID="google.com";/**
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
 */class yt extends er{constructor(){super("github.com")}static credential(e){return jt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
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
 */class bt extends er{constructor(){super("twitter.com")}static credential(e,n){return jt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.TWITTER_SIGN_IN_METHOD="twitter.com";bt.PROVIDER_ID="twitter.com";/**
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
 */class hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ft._fromIdTokenResponse(e,r,s),o=ma(r);return new hn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ma(r);return new hn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ma(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ur extends St{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ur.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ur(e,n,r,s)}}function Rl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ur._fromErrorAndOperation(t,i,e,r):i})}async function cg(t,e,n=!1){const r=await Kn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hn._forOperation(t,"link",r)}/**
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
 */async function lg(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Kn(t,Rl(r,s,e,t),n);F(i.idToken,r,"internal-error");const o=Ui(i.idToken);F(o,r,"internal-error");const{sub:a}=o;return F(t.uid===a,r,"user-mismatch"),hn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$e(r,"user-mismatch"),i}}/**
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
 */async function Cl(t,e,n=!1){const r="signIn",s=await Rl(t,r,e),i=await hn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ug(t,e){return Cl(yn(t),e)}/**
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
 */async function fg(t){const e=yn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function dg(t,e,n){return ug(Rt(t),bn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&fg(t),r})}function hg(t,e,n,r){return Rt(t).onIdTokenChanged(e,n,r)}function pg(t,e,n){return Rt(t).beforeAuthStateChanged(e,n)}function mg(t){return Rt(t).signOut()}const Fr="__sak";/**
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
 */class Al{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fr,"1"),this.storage.removeItem(Fr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function gg(){const t=_e();return Fi(t)||is(t)}const _g=1e3,yg=10;class Pl extends Al{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gg()&&Fm(),this.fallbackToPolling=El(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Um()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,yg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_g)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pl.type="LOCAL";const bg=Pl;/**
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
 */class Ol extends Al{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ol.type="SESSION";const kl=Ol;/**
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
 */function vg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class os{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new os(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await vg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}os.receivers=[];/**
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
 */function Hi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Eg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Hi("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ye(){return window}function wg(t){Ye().location.href=t}/**
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
 */function Nl(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function Ig(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Tg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Sg(){return Nl()?self:null}/**
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
 */const xl="firebaseLocalStorageDb",Rg=1,Br="firebaseLocalStorage",Dl="fbase_key";class tr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function as(t,e){return t.transaction([Br],e?"readwrite":"readonly").objectStore(Br)}function Cg(){const t=indexedDB.deleteDatabase(xl);return new tr(t).toPromise()}function ri(){const t=indexedDB.open(xl,Rg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Br,{keyPath:Dl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Br)?e(r):(r.close(),await Cg(),e(await ri()))})})}async function ga(t,e,n){const r=as(t,!0).put({[Dl]:e,value:n});return new tr(r).toPromise()}async function Ag(t,e){const n=as(t,!1).get(e),r=await new tr(n).toPromise();return r===void 0?null:r.value}function _a(t,e){const n=as(t,!0).delete(e);return new tr(n).toPromise()}const Pg=800,Og=3;class Ll{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ri(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Og)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=os._getInstance(Sg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ig(),!this.activeServiceWorker)return;this.sender=new Eg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Tg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ri();return await ga(e,Fr,"1"),await _a(e,Fr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ga(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ag(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_a(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=as(s,!1).getAll();return new tr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ll.type="LOCAL";const kg=Ll;new Zn(3e4,6e4);/**
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
 */function Ng(t,e){return e?rt(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ji extends Bi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return on(e,this._buildIdpRequest())}_linkToIdToken(e,n){return on(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return on(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xg(t){return Cl(t.auth,new ji(t),t.bypassAuthState)}function Dg(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),lg(n,new ji(t),t.bypassAuthState)}async function Lg(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),cg(n,new ji(t),t.bypassAuthState)}/**
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
 */class Ml{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xg;case"linkViaPopup":case"linkViaRedirect":return Lg;case"reauthViaPopup":case"reauthViaRedirect":return Dg;default:$e(this.auth,"internal-error")}}resolve(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Mg=new Zn(2e3,1e4);class Xt extends Ml{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xt.currentPopupAction&&Xt.currentPopupAction.cancel(),Xt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){ot(this.filter.length===1,"Popup operations only handle one event");const e=Hi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Mg.get())};e()}}Xt.currentPopupAction=null;/**
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
 */const Ug="pendingRedirect",Er=new Map;class Fg extends Ml{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Er.get(this.auth._key());if(!e){try{const r=await Bg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Er.set(this.auth._key(),e)}return this.bypassAuthState||Er.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Bg(t,e){const n=jg(e),r=Hg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $g(t,e){Er.set(t._key(),e)}function Hg(t){return rt(t._redirectPersistence)}function jg(t){return vr(Ug,t.config.apiKey,t.name)}async function Vg(t,e,n=!1){const r=yn(t),s=Ng(r,e),o=await new Fg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Wg=10*60*1e3;class zg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Kg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ul(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Je(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Wg&&this.cachedEventUids.clear(),this.cachedEventUids.has(ya(e))}saveEventToCache(e){this.cachedEventUids.add(ya(e)),this.lastProcessedEventTime=Date.now()}}function ya(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ul({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Kg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ul(t);default:return!1}}/**
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
 */async function qg(t,e={}){return Ct(t,"GET","/v1/projects",e)}/**
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
 */const Gg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Jg=/^https?/;async function Yg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await qg(t);for(const n of e)try{if(Xg(n))return}catch{}$e(t,"unauthorized-domain")}function Xg(t){const e=ni(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Jg.test(n))return!1;if(Gg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Qg=new Zn(3e4,6e4);function ba(){const t=Ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Zg(t){return new Promise((e,n)=>{var r,s,i;function o(){ba(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ba(),n(Je(t,"network-request-failed"))},timeout:Qg.get()})}if(!((s=(r=Ye().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ye().gapi)===null||i===void 0)&&i.load)o();else{const a=zm("iframefcb");return Ye()[a]=()=>{gapi.load?o():n(Je(t,"network-request-failed"))},Il(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw wr=null,e})}let wr=null;function e_(t){return wr=wr||Zg(t),wr}/**
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
 */const t_=new Zn(5e3,15e3),n_="__/auth/iframe",r_="emulator/auth/iframe",s_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},i_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function o_(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mi(e,r_):`https://${t.config.authDomain}/${n_}`,r={apiKey:e.apiKey,appName:t.name,v:Qn},s=i_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Xn(r).slice(1)}`}async function a_(t){const e=await e_(t),n=Ye().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:o_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:s_,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Je(t,"network-request-failed"),a=Ye().setTimeout(()=>{i(o)},t_.get());function c(){Ye().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const c_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},l_=500,u_=600,f_="_blank",d_="http://localhost";class va{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function h_(t,e,n,r=l_,s=u_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},c_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=_e().toLowerCase();n&&(a=gl(l)?f_:n),ml(l)&&(e=e||d_,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[_,b])=>`${p}${_}=${b},`,"");if(Mm(l)&&a!=="_self")return p_(e||"",a),new va(null);const f=window.open(e||"",a,u);F(f,t,"popup-blocked");try{f.focus()}catch{}return new va(f)}function p_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const m_="__/auth/handler",g_="emulator/auth/handler",__=encodeURIComponent("fac");async function Ea(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qn,eventId:s};if(e instanceof Sl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries(i||{}))o[u]=f}if(e instanceof er){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${__}=${encodeURIComponent(c)}`:"";return`${y_(t)}?${Xn(a).slice(1)}${l}`}function y_({config:t}){return t.emulator?Mi(t,g_):`https://${t.authDomain}/${m_}`}/**
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
 */const Ps="webStorageSupport";class b_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kl,this._completeRedirectFn=Vg,this._overrideRedirectResult=$g}async _openPopup(e,n,r,s){var i;ot((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ea(e,n,r,ni(),s);return h_(e,o,Hi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ea(e,n,r,ni(),s);return wg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ot(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await a_(e),r=new zg(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ps,{type:Ps},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ps];o!==void 0&&n(!!o),$e(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Yg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return El()||Fi()||is()}}const v_=b_;var wa="@firebase/auth",Ia="1.5.0";/**
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
 */class E_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function w_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function I_(t){Wn(new dn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wl(t)},l=new Vm(r,s,i,c);return Xm(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Wn(new dn("auth-internal",e=>{const n=yn(e.getProvider("auth").getImmediate());return(r=>new E_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(wa,Ia,w_(t)),rn(wa,Ia,"esm2017")}/**
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
 */const T_=5*60,S_=el("authIdTokenMaxAge")||T_;let Ta=null;const R_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>S_)return;const s=n==null?void 0:n.token;Ta!==s&&(Ta=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function C_(t=rm()){const e=sl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ym(t,{popupRedirectResolver:v_,persistence:[kg,bg,kl]}),r=el("authTokenSyncURL");if(r){const i=R_(r);pg(n,i,()=>i(n.currentUser)),hg(n,o=>i(o))}const s=Kh("auth");return s&&Qm(n,`http://${s}`),n}I_("Browser");function A_(t){const e=Se(t.currentUser),n=Pe(()=>!!e.value);return t.onIdTokenChanged(r=>e.value=r),{isAuthenticated:n,user:e}}var P_="firebase",O_="10.7.0";/**
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
 */rn(P_,O_,"app");const k_={apiKey:"AIzaSyAuV7Fpi-evKl3eSidJxC5mD2u35CWO_iE",authDomain:"championhubbackend.firebaseapp.com",projectId:"championhubbackend",storageBucket:"championhubbackend.appspot.com",messagingSenderId:"499139504321",appId:"1:499139504321:web:58e0fe3af50550d3384c40"},N_=il(k_),si=C_(N_),{isAuthenticated:Sa,user:x_}=A_(si),Vi=()=>({isAuthenticated:Sa,user:x_,login:async(n,r)=>(await dg(si,n,r),Sa.value),logout:async()=>{await mg(si),Yi.push({name:"Home"})}});const At=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},D_={class:"card-image"},L_=["src"],M_={class:"card-details"},U_={class:"card-details-name font-poppins"},F_={class:"card-details-name"},B_={class:"card-details-name"},$_={__name:"MainCardsSingle",props:{champion:{type:Object,required:!0,default:()=>({id:"1",key:1,name:"Champion Name",title:"Title",tags:"Support",stats:0,description:"Description"})}},setup(t){const e=()=>{console.log(`${n.champion.name} selected`)},n=t;return(r,s)=>{const i=Ti("RouterLink");return n.champion.id?(ge(),xc(i,{key:0,to:`/api/champion/${n.champion.id}`},{default:kn(()=>[te("div",{class:"card",onClick:e},[te("div",D_,[te("img",{src:n.champion.image,alt:"",srcset:""},null,8,L_)]),te("div",M_,[te("p",U_,en(n.champion.name),1),te("p",F_,en(n.champion.title),1),te("p",B_,en(n.champion.description),1)])])]),_:1},8,["to"])):qf("",!0)}}},H_=At($_,[["__scopeId","data-v-2a2fdd48"]]);const j_={class:"sub-wrapper"},V_={__name:"MainCards",setup(t){return(e,n)=>(ge(),we("div",j_,[(ge(),we(Ae,null,Ic(20,r=>se(H_)),64))]))}},W_=At(V_,[["__scopeId","data-v-96b2909e"]]);function Fl(t,e){return function(){return t.apply(e,arguments)}}const{toString:z_}=Object.prototype,{getPrototypeOf:Wi}=Object,cs=(t=>e=>{const n=z_.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Qe=t=>(t=t.toLowerCase(),e=>cs(e)===t),ls=t=>e=>typeof e===t,{isArray:vn}=Array,Jn=ls("undefined");function K_(t){return t!==null&&!Jn(t)&&t.constructor!==null&&!Jn(t.constructor)&&ke(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Bl=Qe("ArrayBuffer");function q_(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Bl(t.buffer),e}const G_=ls("string"),ke=ls("function"),$l=ls("number"),us=t=>t!==null&&typeof t=="object",J_=t=>t===!0||t===!1,Ir=t=>{if(cs(t)!=="object")return!1;const e=Wi(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Y_=Qe("Date"),X_=Qe("File"),Q_=Qe("Blob"),Z_=Qe("FileList"),ey=t=>us(t)&&ke(t.pipe),ty=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||ke(t.append)&&((e=cs(t))==="formdata"||e==="object"&&ke(t.toString)&&t.toString()==="[object FormData]"))},ny=Qe("URLSearchParams"),ry=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function nr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),vn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function Hl(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const jl=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Vl=t=>!Jn(t)&&t!==jl;function ii(){const{caseless:t}=Vl(this)&&this||{},e={},n=(r,s)=>{const i=t&&Hl(e,s)||s;Ir(e[i])&&Ir(r)?e[i]=ii(e[i],r):Ir(r)?e[i]=ii({},r):vn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&nr(arguments[r],n);return e}const sy=(t,e,n,{allOwnKeys:r}={})=>(nr(e,(s,i)=>{n&&ke(s)?t[i]=Fl(s,n):t[i]=s},{allOwnKeys:r}),t),iy=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),oy=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},ay=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Wi(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},cy=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},ly=t=>{if(!t)return null;if(vn(t))return t;let e=t.length;if(!$l(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},uy=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Wi(Uint8Array)),fy=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},dy=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},hy=Qe("HTMLFormElement"),py=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Ra=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),my=Qe("RegExp"),Wl=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};nr(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},gy=t=>{Wl(t,(e,n)=>{if(ke(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(ke(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_y=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return vn(t)?r(t):r(String(t).split(e)),n},yy=()=>{},by=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Os="abcdefghijklmnopqrstuvwxyz",Ca="0123456789",zl={DIGIT:Ca,ALPHA:Os,ALPHA_DIGIT:Os+Os.toUpperCase()+Ca},vy=(t=16,e=zl.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Ey(t){return!!(t&&ke(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const wy=t=>{const e=new Array(10),n=(r,s)=>{if(us(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=vn(r)?[]:{};return nr(r,(o,a)=>{const c=n(o,s+1);!Jn(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},Iy=Qe("AsyncFunction"),Ty=t=>t&&(us(t)||ke(t))&&ke(t.then)&&ke(t.catch),y={isArray:vn,isArrayBuffer:Bl,isBuffer:K_,isFormData:ty,isArrayBufferView:q_,isString:G_,isNumber:$l,isBoolean:J_,isObject:us,isPlainObject:Ir,isUndefined:Jn,isDate:Y_,isFile:X_,isBlob:Q_,isRegExp:my,isFunction:ke,isStream:ey,isURLSearchParams:ny,isTypedArray:uy,isFileList:Z_,forEach:nr,merge:ii,extend:sy,trim:ry,stripBOM:iy,inherits:oy,toFlatObject:ay,kindOf:cs,kindOfTest:Qe,endsWith:cy,toArray:ly,forEachEntry:fy,matchAll:dy,isHTMLForm:hy,hasOwnProperty:Ra,hasOwnProp:Ra,reduceDescriptors:Wl,freezeMethods:gy,toObjectSet:_y,toCamelCase:py,noop:yy,toFiniteNumber:by,findKey:Hl,global:jl,isContextDefined:Vl,ALPHABET:zl,generateString:vy,isSpecCompliantForm:Ey,toJSONObject:wy,isAsyncFn:Iy,isThenable:Ty};function W(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}y.inherits(W,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:y.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Kl=W.prototype,ql={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{ql[t]={value:t}});Object.defineProperties(W,ql);Object.defineProperty(Kl,"isAxiosError",{value:!0});W.from=(t,e,n,r,s,i)=>{const o=Object.create(Kl);return y.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),W.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const Sy=null;function oi(t){return y.isPlainObject(t)||y.isArray(t)}function Gl(t){return y.endsWith(t,"[]")?t.slice(0,-2):t}function Aa(t,e,n){return t?t.concat(e).map(function(s,i){return s=Gl(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function Ry(t){return y.isArray(t)&&!t.some(oi)}const Cy=y.toFlatObject(y,{},null,function(e){return/^is[A-Z]/.test(e)});function fs(t,e,n){if(!y.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=y.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(E,k){return!y.isUndefined(k[E])});const r=n.metaTokens,s=n.visitor||u,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&y.isSpecCompliantForm(e);if(!y.isFunction(s))throw new TypeError("visitor must be a function");function l(b){if(b===null)return"";if(y.isDate(b))return b.toISOString();if(!c&&y.isBlob(b))throw new W("Blob is not supported. Use a Buffer instead.");return y.isArrayBuffer(b)||y.isTypedArray(b)?c&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function u(b,E,k){let A=b;if(b&&!k&&typeof b=="object"){if(y.endsWith(E,"{}"))E=r?E:E.slice(0,-2),b=JSON.stringify(b);else if(y.isArray(b)&&Ry(b)||(y.isFileList(b)||y.endsWith(E,"[]"))&&(A=y.toArray(b)))return E=Gl(E),A.forEach(function($,L){!(y.isUndefined($)||$===null)&&e.append(o===!0?Aa([E],L,i):o===null?E:E+"[]",l($))}),!1}return oi(b)?!0:(e.append(Aa(k,E,i),l(b)),!1)}const f=[],p=Object.assign(Cy,{defaultVisitor:u,convertValue:l,isVisitable:oi});function _(b,E){if(!y.isUndefined(b)){if(f.indexOf(b)!==-1)throw Error("Circular reference detected in "+E.join("."));f.push(b),y.forEach(b,function(A,N){(!(y.isUndefined(A)||A===null)&&s.call(e,A,y.isString(N)?N.trim():N,E,p))===!0&&_(A,E?E.concat(N):[N])}),f.pop()}}if(!y.isObject(t))throw new TypeError("data must be an object");return _(t),e}function Pa(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function zi(t,e){this._pairs=[],t&&fs(t,this,e)}const Jl=zi.prototype;Jl.append=function(e,n){this._pairs.push([e,n])};Jl.toString=function(e){const n=e?function(r){return e.call(this,r,Pa)}:Pa;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Ay(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Yl(t,e,n){if(!e)return t;const r=n&&n.encode||Ay,s=n&&n.serialize;let i;if(s?i=s(e,n):i=y.isURLSearchParams(e)?e.toString():new zi(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Py{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){y.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Oa=Py,Xl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Oy=typeof URLSearchParams<"u"?URLSearchParams:zi,ky=typeof FormData<"u"?FormData:null,Ny=typeof Blob<"u"?Blob:null,xy={isBrowser:!0,classes:{URLSearchParams:Oy,FormData:ky,Blob:Ny},protocols:["http","https","file","blob","url","data"]},Ql=typeof window<"u"&&typeof document<"u",Dy=(t=>Ql&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),Ly=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),My=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ql,hasStandardBrowserEnv:Dy,hasStandardBrowserWebWorkerEnv:Ly},Symbol.toStringTag,{value:"Module"})),Ge={...My,...xy};function Uy(t,e){return fs(t,new Ge.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Ge.isNode&&y.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Fy(t){return y.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function By(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function Zl(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&y.isArray(s)?s.length:o,c?(y.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!y.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&y.isArray(s[o])&&(s[o]=By(s[o])),!a)}if(y.isFormData(t)&&y.isFunction(t.entries)){const n={};return y.forEachEntry(t,(r,s)=>{e(Fy(r),s,n,0)}),n}return null}function $y(t,e,n){if(y.isString(t))try{return(e||JSON.parse)(t),y.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Ki={transitional:Xl,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=y.isObject(e);if(i&&y.isHTMLForm(e)&&(e=new FormData(e)),y.isFormData(e))return s&&s?JSON.stringify(Zl(e)):e;if(y.isArrayBuffer(e)||y.isBuffer(e)||y.isStream(e)||y.isFile(e)||y.isBlob(e))return e;if(y.isArrayBufferView(e))return e.buffer;if(y.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Uy(e,this.formSerializer).toString();if((a=y.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return fs(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),$y(e)):e}],transformResponse:[function(e){const n=this.transitional||Ki.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&y.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?W.from(a,W.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ge.classes.FormData,Blob:Ge.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};y.forEach(["delete","get","head","post","put","patch"],t=>{Ki.headers[t]={}});const qi=Ki,Hy=y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),jy=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Hy[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},ka=Symbol("internals");function Rn(t){return t&&String(t).trim().toLowerCase()}function Tr(t){return t===!1||t==null?t:y.isArray(t)?t.map(Tr):String(t)}function Vy(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Wy=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ks(t,e,n,r,s){if(y.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!y.isString(e)){if(y.isString(r))return e.indexOf(r)!==-1;if(y.isRegExp(r))return r.test(e)}}function zy(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Ky(t,e){const n=y.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class ds{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const u=Rn(c);if(!u)throw new Error("header name must be a non-empty string");const f=y.findKey(s,u);(!f||s[f]===void 0||l===!0||l===void 0&&s[f]!==!1)&&(s[f||c]=Tr(a))}const o=(a,c)=>y.forEach(a,(l,u)=>i(l,u,c));return y.isPlainObject(e)||e instanceof this.constructor?o(e,n):y.isString(e)&&(e=e.trim())&&!Wy(e)?o(jy(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=Rn(e),e){const r=y.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return Vy(s);if(y.isFunction(n))return n.call(this,s,r);if(y.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Rn(e),e){const r=y.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||ks(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Rn(o),o){const a=y.findKey(r,o);a&&(!n||ks(r,r[a],a,n))&&(delete r[a],s=!0)}}return y.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||ks(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return y.forEach(this,(s,i)=>{const o=y.findKey(r,i);if(o){n[o]=Tr(s),delete n[i];return}const a=e?zy(i):String(i).trim();a!==i&&delete n[i],n[a]=Tr(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return y.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&y.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[ka]=this[ka]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Rn(o);r[a]||(Ky(s,o),r[a]=!0)}return y.isArray(e)?e.forEach(i):i(e),this}}ds.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);y.reduceDescriptors(ds.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});y.freezeMethods(ds);const it=ds;function Ns(t,e){const n=this||qi,r=e||n,s=it.from(r.headers);let i=r.data;return y.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function eu(t){return!!(t&&t.__CANCEL__)}function rr(t,e,n){W.call(this,t??"canceled",W.ERR_CANCELED,e,n),this.name="CanceledError"}y.inherits(rr,W,{__CANCEL__:!0});function qy(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new W("Request failed with status code "+n.status,[W.ERR_BAD_REQUEST,W.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Gy=Ge.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];y.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),y.isString(r)&&o.push("path="+r),y.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Jy(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Yy(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function tu(t,e){return t&&!Jy(e)?Yy(t,e):e}const Xy=Ge.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=y.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Qy(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Zy(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),u=r[i];o||(o=l),n[s]=c,r[s]=l;let f=i,p=0;for(;f!==s;)p+=n[f++],f=f%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const _=u&&l-u;return _?Math.round(p*1e3/_):void 0}}function Na(t,e){let n=0;const r=Zy(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const u={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};u[e?"download":"upload"]=!0,t(u)}}const eb=typeof XMLHttpRequest<"u",tb=eb&&function(t){return new Promise(function(n,r){let s=t.data;const i=it.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function l(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let u;if(y.isFormData(s)){if(Ge.hasStandardBrowserEnv||Ge.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((u=i.getContentType())!==!1){const[E,...k]=u?u.split(";").map(A=>A.trim()).filter(Boolean):[];i.setContentType([E||"multipart/form-data",...k].join("; "))}}let f=new XMLHttpRequest;if(t.auth){const E=t.auth.username||"",k=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(E+":"+k))}const p=tu(t.baseURL,t.url);f.open(t.method.toUpperCase(),Yl(p,t.params,t.paramsSerializer),!0),f.timeout=t.timeout;function _(){if(!f)return;const E=it.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),A={data:!o||o==="text"||o==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:E,config:t,request:f};qy(function($){n($),l()},function($){r($),l()},A),f=null}if("onloadend"in f?f.onloadend=_:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(_)},f.onabort=function(){f&&(r(new W("Request aborted",W.ECONNABORTED,t,f)),f=null)},f.onerror=function(){r(new W("Network Error",W.ERR_NETWORK,t,f)),f=null},f.ontimeout=function(){let k=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const A=t.transitional||Xl;t.timeoutErrorMessage&&(k=t.timeoutErrorMessage),r(new W(k,A.clarifyTimeoutError?W.ETIMEDOUT:W.ECONNABORTED,t,f)),f=null},Ge.hasStandardBrowserEnv&&(a&&y.isFunction(a)&&(a=a(t)),a||a!==!1&&Xy(p))){const E=t.xsrfHeaderName&&t.xsrfCookieName&&Gy.read(t.xsrfCookieName);E&&i.set(t.xsrfHeaderName,E)}s===void 0&&i.setContentType(null),"setRequestHeader"in f&&y.forEach(i.toJSON(),function(k,A){f.setRequestHeader(A,k)}),y.isUndefined(t.withCredentials)||(f.withCredentials=!!t.withCredentials),o&&o!=="json"&&(f.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&f.addEventListener("progress",Na(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",Na(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=E=>{f&&(r(!E||E.type?new rr(null,t,f):E),f.abort(),f=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const b=Qy(p);if(b&&Ge.protocols.indexOf(b)===-1){r(new W("Unsupported protocol "+b+":",W.ERR_BAD_REQUEST,t));return}f.send(s||null)})},ai={http:Sy,xhr:tb};y.forEach(ai,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const xa=t=>`- ${t}`,nb=t=>y.isFunction(t)||t===null||t===!1,nu={getAdapter:t=>{t=y.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!nb(n)&&(r=ai[(o=String(n)).toLowerCase()],r===void 0))throw new W(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(xa).join(`
`):" "+xa(i[0]):"as no adapter specified";throw new W("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:ai};function xs(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new rr(null,t)}function Da(t){return xs(t),t.headers=it.from(t.headers),t.data=Ns.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),nu.getAdapter(t.adapter||qi.adapter)(t).then(function(r){return xs(t),r.data=Ns.call(t,t.transformResponse,r),r.headers=it.from(r.headers),r},function(r){return eu(r)||(xs(t),r&&r.response&&(r.response.data=Ns.call(t,t.transformResponse,r.response),r.response.headers=it.from(r.response.headers))),Promise.reject(r)})}const La=t=>t instanceof it?t.toJSON():t;function pn(t,e){e=e||{};const n={};function r(l,u,f){return y.isPlainObject(l)&&y.isPlainObject(u)?y.merge.call({caseless:f},l,u):y.isPlainObject(u)?y.merge({},u):y.isArray(u)?u.slice():u}function s(l,u,f){if(y.isUndefined(u)){if(!y.isUndefined(l))return r(void 0,l,f)}else return r(l,u,f)}function i(l,u){if(!y.isUndefined(u))return r(void 0,u)}function o(l,u){if(y.isUndefined(u)){if(!y.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,f){if(f in e)return r(l,u);if(f in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>s(La(l),La(u),!0)};return y.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=c[u]||s,p=f(t[u],e[u],u);y.isUndefined(p)&&f!==a||(n[u]=p)}),n}const ru="1.6.2",Gi={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Gi[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Ma={};Gi.transitional=function(e,n,r){function s(i,o){return"[Axios v"+ru+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new W(s(o," has been removed"+(n?" in "+n:"")),W.ERR_DEPRECATED);return n&&!Ma[o]&&(Ma[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function rb(t,e,n){if(typeof t!="object")throw new W("options must be an object",W.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new W("option "+i+" must be "+c,W.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new W("Unknown option "+i,W.ERR_BAD_OPTION)}}const ci={assertOptions:rb,validators:Gi},ht=ci.validators;class $r{constructor(e){this.defaults=e,this.interceptors={request:new Oa,response:new Oa}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=pn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ci.assertOptions(r,{silentJSONParsing:ht.transitional(ht.boolean),forcedJSONParsing:ht.transitional(ht.boolean),clarifyTimeoutError:ht.transitional(ht.boolean)},!1),s!=null&&(y.isFunction(s)?n.paramsSerializer={serialize:s}:ci.assertOptions(s,{encode:ht.function,serialize:ht.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&y.merge(i.common,i[n.method]);i&&y.forEach(["delete","get","head","post","put","patch","common"],b=>{delete i[b]}),n.headers=it.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(E){typeof E.runWhen=="function"&&E.runWhen(n)===!1||(c=c&&E.synchronous,a.unshift(E.fulfilled,E.rejected))});const l=[];this.interceptors.response.forEach(function(E){l.push(E.fulfilled,E.rejected)});let u,f=0,p;if(!c){const b=[Da.bind(this),void 0];for(b.unshift.apply(b,a),b.push.apply(b,l),p=b.length,u=Promise.resolve(n);f<p;)u=u.then(b[f++],b[f++]);return u}p=a.length;let _=n;for(f=0;f<p;){const b=a[f++],E=a[f++];try{_=b(_)}catch(k){E.call(this,k);break}}try{u=Da.call(this,_)}catch(b){return Promise.reject(b)}for(f=0,p=l.length;f<p;)u=u.then(l[f++],l[f++]);return u}getUri(e){e=pn(this.defaults,e);const n=tu(e.baseURL,e.url);return Yl(n,e.params,e.paramsSerializer)}}y.forEach(["delete","get","head","options"],function(e){$r.prototype[e]=function(n,r){return this.request(pn(r||{},{method:e,url:n,data:(r||{}).data}))}});y.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(pn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}$r.prototype[e]=n(),$r.prototype[e+"Form"]=n(!0)});const Sr=$r;class Ji{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new rr(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Ji(function(s){e=s}),cancel:e}}}const sb=Ji;function ib(t){return function(n){return t.apply(null,n)}}function ob(t){return y.isObject(t)&&t.isAxiosError===!0}const li={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(li).forEach(([t,e])=>{li[e]=t});const ab=li;function su(t){const e=new Sr(t),n=Fl(Sr.prototype.request,e);return y.extend(n,Sr.prototype,e,{allOwnKeys:!0}),y.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return su(pn(t,s))},n}const ae=su(qi);ae.Axios=Sr;ae.CanceledError=rr;ae.CancelToken=sb;ae.isCancel=eu;ae.VERSION=ru;ae.toFormData=fs;ae.AxiosError=W;ae.Cancel=ae.CanceledError;ae.all=function(e){return Promise.all(e)};ae.spread=ib;ae.isAxiosError=ob;ae.mergeConfig=pn;ae.AxiosHeaders=it;ae.formToJSON=t=>Zl(y.isHTMLForm(t)?new FormData(t):t);ae.getAdapter=nu.getAdapter;ae.HttpStatusCode=ab;ae.default=ae;const iu=ae,ou=Se([]),au=Se(1),ui=Se(!1),cu=Se(1),lu=Se(12),uu=Se(null),fu=iu.create({baseURL:"https://championhubbackend-node-server.onrender.com",auth:{username:"admin",password:"admin"}}),cb=async()=>{ui.value=!0;const{data:t,headers:e}=await fu.get("/api/Champions",{params:{page:cu.value,size:lu.value}});ou.value=t,au.value=Number(e["x-total-pages"])||1,ui.value=!1},lb=async t=>{const{data:e}=await fu.get(`/api/Champions/${t}`);uu.value=e,console.log(e)},du=()=>({Champions:ou,pages:au,activePage:cu,loading:ui,pageSize:lu,getChampions:cb,fetchChampion:lb,currentChampion:uu});const ub={class:"pagination"},fb=["disabled"],db=["onClick"],hb=["disabled"],pb={__name:"MainPagination",setup(t){const{activePage:e,pages:n,getChampions:r}=du(),s=async()=>{e.value>1&&(e.value--,await r())},i=async()=>{e.value<n.value&&(e.value++,await r())},o=async a=>{e.value=a,await r()};return(a,c)=>(ge(),we("div",ub,[te("button",{class:"action",disabled:ue(e)===1,onClick:s},"Prev",8,fb),(ge(!0),we(Ae,null,Ic(ue(n),l=>(ge(),we("button",{key:l,class:Kr(["page",l===ue(e)?"active":""]),onClick:u=>o(l)},en(l),11,db))),128)),te("button",{class:"action",disabled:ue(e)===ue(n),onClick:i},"Next",8,hb)]))}},mb=At(pb,[["__scopeId","data-v-f556ff7e"]]);const gb={key:0},_b={key:1,class:"wrapper"},yb={__name:"Main",setup(t){const{getChampions:e,loading:n}=du();return Ec(async()=>{await e()}),(r,s)=>ue(n)?(ge(),we("p",gb,"Loading...")):(ge(),we("div",_b,[se(W_),se(mb)]))}},bb=At(yb,[["__scopeId","data-v-9e7381e9"]]);const vb=t=>(hc("data-v-769d7c94"),t=t(),pc(),t),Eb=["onSubmit"],wb=vb(()=>te("button",{type:"submit",class:"bg-green-500 px-4 py-2"},"Log In",-1)),Ib={__name:"LoginPage",setup(t){const{login:e,logout:n}=Vi(),r=Uh(),s=Fh(),i=Se(""),o=Se(""),a=async()=>{await e(i.value,o.value)?s.query.redirect?r.push(s.query.redirect):r.push({name:"Home"}):n()};return(c,l)=>(ge(),we("form",{class:"login-form",onSubmit:Fc(a,["prevent"])},[$n(te("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>i.value=u),type:"text",placeholder:"Username"},null,512),[[kr,i.value]]),$n(te("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>o.value=u),type:"password",placeholder:"Password"},null,512),[[kr,o.value]]),wb],40,Eb))}},Tb=At(Ib,[["__scopeId","data-v-769d7c94"]]);const Sb=t=>(hc("data-v-eae4e0d3"),t=t(),pc(),t),Rb=["onSubmit"],Cb=Sb(()=>te("button",{type:"submit",class:"bg-green-500 px-4 py-2"},"submit",-1)),Ab={__name:"settingsPage",setup(t){const e=iu.create({baseURL:"https://championhubbackend-node-server.onrender.com",auth:{username:"admin",password:"admin"}}),n=Se(""),r=Se(""),s=async()=>{await e.post("/api/Champions",{name:n.value,image:r.value})};return(i,o)=>(ge(),we("form",{class:"login-form",onSubmit:Fc(s,["prevent"])},[$n(te("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>n.value=a),type:"text",placeholder:"name"},null,512),[[kr,n.value]]),$n(te("input",{"onUpdate:modelValue":o[1]||(o[1]=a=>r.value=a),type:"text",placeholder:"image"},null,512),[[kr,r.value]]),Cb],40,Rb))}},Pb=At(Ab,[["__scopeId","data-v-eae4e0d3"]]);const Ob={},kb={class:"not-found"};function Nb(t,e){return ge(),we("h1",kb,"404 not found")}const xb=At(Ob,[["render",Nb],["__scopeId","data-v-9e81c776"]]),{isAuthenticated:Db}=Vi(),Lb=[{path:"/ChampionHub/",name:"Home",component:bb},{path:"/login",name:"Login",component:Tb},{path:"/settings",name:"Settings",component:Pb,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"NotFound",component:xb},{path:"/other",name:"Other",component:()=>Lo(()=>import("./OtherPage-248bdedf.js"),[])},{path:"/api/Champions/:id",name:"Champions",component:()=>Lo(()=>import("./ChampionsPage-0ea4270c.js"),[])}],Yi=Lh({history:Xd(),routes:Lb});Yi.beforeEach((t,e,n)=>{t.meta.requiresAuth&&!Db.value?n({name:"Login",query:{redirect:t.fullPath}}):n()});const Mb={class:"wrapper"},Ub={class:"brand-title"},Fb={class:"menu"},Bb={class:"px-2 py-4"},$b={key:0},Hb={key:1},jb={__name:"NavBar",setup(t){const{isAuthenticated:e,logout:n,user:r}=Vi(),s=Se("ChampionHub 🐲");return(i,o)=>{var c;const a=Ti("RouterLink");return ge(),we("nav",null,[te("div",Mb,[se(a,{to:{name:"Home"},class:"brand"},{default:kn(()=>[te("span",Ub,en(s.value),1)]),_:1}),te("div",Fb,[$n(te("p",Bb,[yr(" Welcome back "),te("strong",null,[te("i",null,en((c=ue(r))==null?void 0:c.email),1)])],512),[[fd,ue(e)]]),ue(e)?(ge(),we("div",$b,[se(a,{to:{name:"Settings"},href:"#",class:"menu-item"},{default:kn(()=>[yr("Settings")]),_:1}),te("button",{to:{name:"Home"},href:"#",class:"menu-logout",onClick:o[0]||(o[0]=(...l)=>ue(n)&&ue(n)(...l))},"Logout")])):(ge(),we("div",Hb,[se(a,{to:{name:"Login"},href:"#",class:"menu-login"},{default:kn(()=>[yr("Login")]),_:1})]))])])])}}},Vb=At(jb,[["__scopeId","data-v-6bb3eb68"]]),Wb={__name:"App",setup(t){return(e,n)=>{const r=Ti("RouterView");return ge(),we(Ae,null,[se(Vb),se(r)],64)}}};Od(Wb).use(Yi).mount("#app");export{At as _,te as a,Ec as b,we as c,wc as d,ue as e,qf as f,du as g,ge as o,Se as r,en as t,Fh as u};
