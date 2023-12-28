(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ms(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const oe={},Yt=[],Qe=()=>{},$c=()=>!1,br=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ds=t=>t.startsWith("onUpdate:"),we=Object.assign,Ls=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hc=Object.prototype.hasOwnProperty,J=(t,e)=>Hc.call(t,e),j=Array.isArray,Xt=t=>wr(t)==="[object Map]",$o=t=>wr(t)==="[object Set]",H=t=>typeof t=="function",ge=t=>typeof t=="string",un=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",Ho=t=>(ae(t)||H(t))&&H(t.then)&&H(t.catch),Vo=Object.prototype.toString,wr=t=>Vo.call(t),Vc=t=>wr(t).slice(8,-1),Wo=t=>wr(t)==="[object Object]",Us=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,er=Ms(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Er=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wc=/-(\w)/g,nn=Er(t=>t.replace(Wc,(e,n)=>n?n.toUpperCase():"")),zc=/\B([A-Z])/g,fn=Er(t=>t.replace(zc,"-$1").toLowerCase()),zo=Er(t=>t.charAt(0).toUpperCase()+t.slice(1)),$r=Er(t=>t?`on${zo(t)}`:""),$t=(t,e)=>!Object.is(t,e),Hr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ar=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Kc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let mi;const os=()=>mi||(mi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function js(t){if(j(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ge(r)?Yc(r):js(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ge(t)||ae(t))return t}const qc=/;(?![^(]*\))/g,Gc=/:([^]+)/,Jc=/\/\*[^]*?\*\//g;function Yc(t){const e={};return t.replace(Jc,"").split(qc).forEach(n=>{if(n){const r=n.split(Gc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ut(t){let e="";if(ge(t))e=t;else if(j(t))for(let n=0;n<t.length;n++){const r=Ut(t[n]);r&&(e+=r+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Xc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qc=Ms(Xc);function Ko(t){return!!t||t===""}const _i=t=>ge(t)?t:t==null?"":j(t)||ae(t)&&(t.toString===Vo||!H(t.toString))?JSON.stringify(t,qo,2):String(t),qo=(t,e)=>e&&e.__v_isRef?qo(t,e.value):Xt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Vr(r,i)+" =>"]=s,n),{})}:$o(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Vr(n))}:un(e)?Vr(e):ae(e)&&!j(e)&&!Wo(e)?String(e):e,Vr=(t,e="")=>{var n;return un(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Me;class Go{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!e&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Me;try{return Me=this,e()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Jo(t){return new Go(t)}function Zc(t,e=Me){e&&e.active&&e.effects.push(t)}function Yo(){return Me}function el(t){Me&&Me.cleanups.push(t)}const Fs=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Xo=t=>(t.w&Rt)>0,Qo=t=>(t.n&Rt)>0,tl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Rt},nl=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Xo(s)&&!Qo(s)?s.delete(t):e[n++]=s,s.w&=~Rt,s.n&=~Rt}e.length=n}},cr=new WeakMap;let yn=0,Rt=1;const as=30;let Ve;const jt=Symbol(""),cs=Symbol("");class Bs{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Zc(this,r)}run(){if(!this.active)return this.fn();let e=Ve,n=Et;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ve,Ve=this,Et=!0,Rt=1<<++yn,yn<=as?tl(this):vi(this),this.fn()}finally{yn<=as&&nl(this),Rt=1<<--yn,Ve=this.parent,Et=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ve===this?this.deferStop=!0:this.active&&(vi(this),this.onStop&&this.onStop(),this.active=!1)}}function vi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Et=!0;const Zo=[];function dn(){Zo.push(Et),Et=!1}function hn(){const t=Zo.pop();Et=t===void 0?!0:t}function ke(t,e,n){if(Et&&Ve){let r=cr.get(t);r||cr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Fs()),ea(s)}}function ea(t,e){let n=!1;yn<=as?Qo(t)||(t.n|=Rt,n=!Xo(t)):n=!t.has(Ve),n&&(t.add(Ve),Ve.deps.push(t))}function ct(t,e,n,r,s,i){const o=cr.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&j(t)){const a=Number(r);o.forEach((l,u)=>{(u==="length"||!un(u)&&u>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":j(t)?Us(n)&&c.push(o.get("length")):(c.push(o.get(jt)),Xt(t)&&c.push(o.get(cs)));break;case"delete":j(t)||(c.push(o.get(jt)),Xt(t)&&c.push(o.get(cs)));break;case"set":Xt(t)&&c.push(o.get(jt));break}if(c.length===1)c[0]&&ls(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);ls(Fs(a))}}function ls(t,e){const n=j(t)?t:[...t];for(const r of n)r.computed&&yi(r);for(const r of n)r.computed||yi(r)}function yi(t,e){(t!==Ve||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function rl(t,e){var n;return(n=cr.get(t))==null?void 0:n.get(e)}const sl=Ms("__proto__,__v_isRef,__isVue"),ta=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(un)),bi=il();function il(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Y(this);for(let i=0,o=this.length;i<o;i++)ke(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Y)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){dn();const r=Y(this)[e].apply(this,n);return hn(),r}}),t}function ol(t){const e=Y(this);return ke(e,"has",t),e.hasOwnProperty(t)}class na{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?yl:oa:i?ia:sa).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=j(e);if(!s){if(o&&J(bi,n))return Reflect.get(bi,n,r);if(n==="hasOwnProperty")return ol}const c=Reflect.get(e,n,r);return(un(n)?ta.has(n):sl(n))||(s||ke(e,"get",n),i)?c:me(c)?o&&Us(n)?c:c.value:ae(c)?s?ca(c):Ze(c):c}}class ra extends na{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const a=rn(i);if(!lr(r)&&!rn(r)&&(i=Y(i),r=Y(r)),!j(e)&&me(i)&&!me(r))return a?!1:(i.value=r,!0)}const o=j(e)&&Us(n)?Number(n)<e.length:J(e,n),c=Reflect.set(e,n,r,s);return e===Y(s)&&(o?$t(r,i)&&ct(e,"set",n,r):ct(e,"add",n,r)),c}deleteProperty(e,n){const r=J(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ct(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!un(n)||!ta.has(n))&&ke(e,"has",n),r}ownKeys(e){return ke(e,"iterate",j(e)?"length":jt),Reflect.ownKeys(e)}}class al extends na{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const cl=new ra,ll=new al,ul=new ra(!0),$s=t=>t,Ir=t=>Reflect.getPrototypeOf(t);function qn(t,e,n=!1,r=!1){t=t.__v_raw;const s=Y(t),i=Y(e);n||($t(e,i)&&ke(s,"get",e),ke(s,"get",i));const{has:o}=Ir(s),c=r?$s:n?Ws:Rn;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Gn(t,e=!1){const n=this.__v_raw,r=Y(n),s=Y(t);return e||($t(t,s)&&ke(r,"has",t),ke(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Jn(t,e=!1){return t=t.__v_raw,!e&&ke(Y(t),"iterate",jt),Reflect.get(t,"size",t)}function wi(t){t=Y(t);const e=Y(this);return Ir(e).has.call(e,t)||(e.add(t),ct(e,"add",t,t)),this}function Ei(t,e){e=Y(e);const n=Y(this),{has:r,get:s}=Ir(n);let i=r.call(n,t);i||(t=Y(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?$t(e,o)&&ct(n,"set",t,e):ct(n,"add",t,e),this}function Ii(t){const e=Y(this),{has:n,get:r}=Ir(e);let s=n.call(e,t);s||(t=Y(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ct(e,"delete",t,void 0),i}function Si(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&ct(t,"clear",void 0,void 0),n}function Yn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Y(o),a=e?$s:t?Ws:Rn;return!t&&ke(c,"iterate",jt),o.forEach((l,u)=>r.call(s,a(l),a(u),i))}}function Xn(t,e,n){return function(...r){const s=this.__v_raw,i=Y(s),o=Xt(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),u=n?$s:e?Ws:Rn;return!e&&ke(i,"iterate",a?cs:jt),{next(){const{value:p,done:g}=l.next();return g?{value:p,done:g}:{value:c?[u(p[0]),u(p[1])]:u(p),done:g}},[Symbol.iterator](){return this}}}}function dt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function fl(){const t={get(i){return qn(this,i)},get size(){return Jn(this)},has:Gn,add:wi,set:Ei,delete:Ii,clear:Si,forEach:Yn(!1,!1)},e={get(i){return qn(this,i,!1,!0)},get size(){return Jn(this)},has:Gn,add:wi,set:Ei,delete:Ii,clear:Si,forEach:Yn(!1,!0)},n={get(i){return qn(this,i,!0)},get size(){return Jn(this,!0)},has(i){return Gn.call(this,i,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:Yn(!0,!1)},r={get(i){return qn(this,i,!0,!0)},get size(){return Jn(this,!0)},has(i){return Gn.call(this,i,!0)},add:dt("add"),set:dt("set"),delete:dt("delete"),clear:dt("clear"),forEach:Yn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Xn(i,!1,!1),n[i]=Xn(i,!0,!1),e[i]=Xn(i,!1,!0),r[i]=Xn(i,!0,!0)}),[t,n,e,r]}const[dl,hl,pl,gl]=fl();function Hs(t,e){const n=e?t?gl:pl:t?hl:dl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(J(n,s)&&s in r?n:r,s,i)}const ml={get:Hs(!1,!1)},_l={get:Hs(!1,!0)},vl={get:Hs(!0,!1)},sa=new WeakMap,ia=new WeakMap,oa=new WeakMap,yl=new WeakMap;function bl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wl(t){return t.__v_skip||!Object.isExtensible(t)?0:bl(Vc(t))}function Ze(t){return rn(t)?t:Vs(t,!1,cl,ml,sa)}function aa(t){return Vs(t,!1,ul,_l,ia)}function ca(t){return Vs(t,!0,ll,vl,oa)}function Vs(t,e,n,r,s){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=wl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function It(t){return rn(t)?It(t.__v_raw):!!(t&&t.__v_isReactive)}function rn(t){return!!(t&&t.__v_isReadonly)}function lr(t){return!!(t&&t.__v_isShallow)}function la(t){return It(t)||rn(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function Sr(t){return ar(t,"__v_skip",!0),t}const Rn=t=>ae(t)?Ze(t):t,Ws=t=>ae(t)?ca(t):t;function ua(t){Et&&Ve&&(t=Y(t),ea(t.dep||(t.dep=Fs())))}function fa(t,e){t=Y(t);const n=t.dep;n&&ls(n)}function me(t){return!!(t&&t.__v_isRef===!0)}function te(t){return da(t,!1)}function El(t){return da(t,!0)}function da(t,e){return me(t)?t:new Il(t,e)}class Il{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:Rn(e)}get value(){return ua(this),this._value}set value(e){const n=this.__v_isShallow||lr(e)||rn(e);e=n?e:Y(e),$t(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Rn(e),fa(this))}}function Le(t){return me(t)?t.value:t}const Sl={get:(t,e,n)=>Le(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return me(s)&&!me(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ha(t){return It(t)?t:new Proxy(t,Sl)}function Tl(t){const e=j(t)?new Array(t.length):{};for(const n in t)e[n]=Al(t,n);return e}class Cl{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return rl(Y(this._object),this._key)}}function Al(t,e,n){const r=t[e];return me(r)?r:new Cl(t,e,n)}class Rl{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Bs(e,()=>{this._dirty||(this._dirty=!0,fa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Y(this);return ua(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Pl(t,e,n=!1){let r,s;const i=H(t);return i?(r=t,s=Qe):(r=t.get,s=t.set),new Rl(r,s,i||!s,n)}function St(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Tr(i,e,n)}return s}function Ke(t,e,n,r){if(H(t)){const i=St(t,e,n,r);return i&&Ho(i)&&i.catch(o=>{Tr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ke(t[i],e,n,r));return s}function Tr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){St(a,null,10,[t,o,c]);return}}Ol(t,n,s,r)}function Ol(t,e,n,r=!0){console.error(t)}let Pn=!1,us=!1;const Ee=[];let Xe=0;const Qt=[];let st=null,Mt=0;const pa=Promise.resolve();let zs=null;function Cr(t){const e=zs||pa;return t?e.then(this?t.bind(this):t):e}function kl(t){let e=Xe+1,n=Ee.length;for(;e<n;){const r=e+n>>>1,s=Ee[r],i=On(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Ks(t){(!Ee.length||!Ee.includes(t,Pn&&t.allowRecurse?Xe+1:Xe))&&(t.id==null?Ee.push(t):Ee.splice(kl(t.id),0,t),ga())}function ga(){!Pn&&!us&&(us=!0,zs=pa.then(_a))}function xl(t){const e=Ee.indexOf(t);e>Xe&&Ee.splice(e,1)}function Nl(t){j(t)?Qt.push(...t):(!st||!st.includes(t,t.allowRecurse?Mt+1:Mt))&&Qt.push(t),ga()}function Ti(t,e,n=Pn?Xe+1:0){for(;n<Ee.length;n++){const r=Ee[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Ee.splice(n,1),n--,r()}}}function ma(t){if(Qt.length){const e=[...new Set(Qt)];if(Qt.length=0,st){st.push(...e);return}for(st=e,st.sort((n,r)=>On(n)-On(r)),Mt=0;Mt<st.length;Mt++)st[Mt]();st=null,Mt=0}}const On=t=>t.id==null?1/0:t.id,Ml=(t,e)=>{const n=On(t)-On(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function _a(t){us=!1,Pn=!0,Ee.sort(Ml);try{for(Xe=0;Xe<Ee.length;Xe++){const e=Ee[Xe];e&&e.active!==!1&&St(e,null,14)}}finally{Xe=0,Ee.length=0,ma(),Pn=!1,zs=null,(Ee.length||Qt.length)&&_a()}}function Dl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||oe;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:g}=r[u]||oe;g&&(s=n.map(v=>ge(v)?v.trim():v)),p&&(s=n.map(Kc))}let c,a=r[c=$r(e)]||r[c=$r(nn(e))];!a&&i&&(a=r[c=$r(fn(e))]),a&&Ke(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ke(l,t,6,s)}}function va(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!H(t)){const a=l=>{const u=va(l,e,!0);u&&(c=!0,we(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(ae(t)&&r.set(t,null),null):(j(i)?i.forEach(a=>o[a]=null):we(o,i),ae(t)&&r.set(t,o),o)}function Ar(t,e){return!t||!br(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,fn(e))||J(t,e))}let We=null,Rr=null;function ur(t){const e=We;return We=t,Rr=t&&t.type.__scopeId||null,e}function Pr(t){Rr=t}function Or(){Rr=null}function bn(t,e=We,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Di(-1);const i=ur(e);let o;try{o=t(...s)}finally{ur(i),r._d&&Di(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Wr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:u,renderCache:p,data:g,setupState:v,ctx:T,inheritAttrs:A}=t;let D,P;const k=ur(t);try{if(n.shapeFlag&4){const x=s||r,z=x;D=Ye(u.call(z,x,p,i,v,g,T)),P=a}else{const x=e;D=Ye(x.length>1?x(i,{attrs:a,slots:c,emit:l}):x(i,null)),P=e.props?a:Ll(a)}}catch(x){In.length=0,Tr(x,t,1),D=he(xn)}let $=D;if(P&&A!==!1){const x=Object.keys(P),{shapeFlag:z}=$;x.length&&z&7&&(o&&x.some(Ds)&&(P=Ul(P,o)),$=Pt($,P))}return n.dirs&&($=Pt($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),D=$,ur(k),D}const Ll=t=>{let e;for(const n in t)(n==="class"||n==="style"||br(n))&&((e||(e={}))[n]=t[n]);return e},Ul=(t,e)=>{const n={};for(const r in t)(!Ds(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function jl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?Ci(r,o,l):!!o;if(a&8){const u=e.dynamicProps;for(let p=0;p<u.length;p++){const g=u[p];if(o[g]!==r[g]&&!Ar(l,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Ci(r,o,l):!0:!!o;return!1}function Ci(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ar(n,i))return!0}return!1}function Fl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Bl=Symbol.for("v-ndc"),$l=t=>t.__isSuspense;function Hl(t,e){e&&e.pendingBranch?j(t)?e.effects.push(...t):e.effects.push(t):Nl(t)}const Qn={};function Tt(t,e,n){return ya(t,e,n)}function ya(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=oe){var c;const a=Yo()===((c=ye)==null?void 0:c.scope)?ye:null;let l,u=!1,p=!1;if(me(t)?(l=()=>t.value,u=lr(t)):It(t)?(l=()=>t,r=!0):j(t)?(p=!0,u=t.some(x=>It(x)||lr(x)),l=()=>t.map(x=>{if(me(x))return x.value;if(It(x))return Jt(x);if(H(x))return St(x,a,2)})):H(t)?e?l=()=>St(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return g&&g(),Ke(t,a,3,[v])}:l=Qe,e&&r){const x=l;l=()=>Jt(x())}let g,v=x=>{g=k.onStop=()=>{St(x,a,4),g=k.onStop=void 0}},T;if(Mn)if(v=Qe,e?n&&Ke(e,a,3,[l(),p?[]:void 0,v]):l(),s==="sync"){const x=Nu();T=x.__watcherHandles||(x.__watcherHandles=[])}else return Qe;let A=p?new Array(t.length).fill(Qn):Qn;const D=()=>{if(k.active)if(e){const x=k.run();(r||u||(p?x.some((z,ie)=>$t(z,A[ie])):$t(x,A)))&&(g&&g(),Ke(e,a,3,[x,A===Qn?void 0:p&&A[0]===Qn?[]:A,v]),A=x)}else k.run()};D.allowRecurse=!!e;let P;s==="sync"?P=D:s==="post"?P=()=>Re(D,a&&a.suspense):(D.pre=!0,a&&(D.id=a.uid),P=()=>Ks(D));const k=new Bs(l,P);e?n?D():A=k.run():s==="post"?Re(k.run.bind(k),a&&a.suspense):k.run();const $=()=>{k.stop(),a&&a.scope&&Ls(a.scope.effects,k)};return T&&T.push($),$}function Vl(t,e,n){const r=this.proxy,s=ge(t)?t.includes(".")?ba(r,t):()=>r[t]:t.bind(r,r);let i;H(e)?i=e:(i=e.handler,n=e);const o=ye;sn(this);const c=ya(s,i.bind(r),n);return o?sn(o):Ft(),c}function ba(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Jt(t,e){if(!ae(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),me(t))Jt(t.value,e);else if(j(t))for(let n=0;n<t.length;n++)Jt(t[n],e);else if($o(t)||Xt(t))t.forEach(n=>{Jt(n,e)});else if(Wo(t))for(const n in t)Jt(t[n],e);return t}function kt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(dn(),Ke(a,n,8,[t.el,c,t,e]),hn())}}/*! #__NO_SIDE_EFFECTS__ */function Bn(t,e){return H(t)?we({name:t.name},e,{setup:t}):t}const tr=t=>!!t.type.__asyncLoader,wa=t=>t.type.__isKeepAlive;function Wl(t,e){Ea(t,"a",e)}function zl(t,e){Ea(t,"da",e)}function Ea(t,e,n=ye){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(kr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)wa(s.parent.vnode)&&Kl(r,e,n,s),s=s.parent}}function Kl(t,e,n,r){const s=kr(e,t,r,!0);qs(()=>{Ls(r[e],s)},n)}function kr(t,e,n=ye,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;dn(),sn(n);const c=Ke(e,n,t,o);return Ft(),hn(),c});return r?s.unshift(i):s.push(i),i}}const ut=t=>(e,n=ye)=>(!Mn||t==="sp")&&kr(t,(...r)=>e(...r),n),ql=ut("bm"),xr=ut("m"),Gl=ut("bu"),Jl=ut("u"),Yl=ut("bum"),qs=ut("um"),Xl=ut("sp"),Ql=ut("rtg"),Zl=ut("rtc");function eu(t,e=ye){kr("ec",t,e)}function fs(t,e,n,r){let s;const i=n&&n[r];if(j(t)||ge(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ae(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i&&i[c]));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,a=o.length;c<a;c++){const l=o[c];s[c]=e(t[l],l,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}const ds=t=>t?Na(t)?Qs(t)||t.proxy:ds(t.parent):null,En=we(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ds(t.parent),$root:t=>ds(t.root),$emit:t=>t.emit,$options:t=>Gs(t),$forceUpdate:t=>t.f||(t.f=()=>Ks(t.update)),$nextTick:t=>t.n||(t.n=Cr.bind(t.proxy)),$watch:t=>Vl.bind(t)}),zr=(t,e)=>t!==oe&&!t.__isScriptSetup&&J(t,e),tu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(zr(r,e))return o[e]=1,r[e];if(s!==oe&&J(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&J(l,e))return o[e]=3,i[e];if(n!==oe&&J(n,e))return o[e]=4,n[e];hs&&(o[e]=0)}}const u=En[e];let p,g;if(u)return e==="$attrs"&&ke(t,"get",e),u(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==oe&&J(n,e))return o[e]=4,n[e];if(g=a.config.globalProperties,J(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return zr(s,e)?(s[e]=n,!0):r!==oe&&J(r,e)?(r[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==oe&&J(t,o)||zr(e,o)||(c=i[0])&&J(c,o)||J(r,o)||J(En,o)||J(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ai(t){return j(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let hs=!0;function nu(t){const e=Gs(t),n=t.proxy,r=t.ctx;hs=!1,e.beforeCreate&&Ri(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:p,mounted:g,beforeUpdate:v,updated:T,activated:A,deactivated:D,beforeDestroy:P,beforeUnmount:k,destroyed:$,unmounted:x,render:z,renderTracked:ie,renderTriggered:re,errorCaptured:V,serverPrefetch:U,expose:Z,inheritAttrs:le,components:ue,directives:_e,filters:Fe}=e;if(l&&ru(l,r,null),o)for(const X in o){const G=o[X];H(G)&&(r[X]=G.bind(n))}if(s){const X=s.call(n,n);ae(X)&&(t.data=Ze(X))}if(hs=!0,i)for(const X in i){const G=i[X],je=H(G)?G.bind(n,n):H(G.get)?G.get.bind(n,n):Qe,Be=!H(G)&&H(G.set)?G.set.bind(n):Qe,xe=Oe({get:je,set:Be});Object.defineProperty(r,X,{enumerable:!0,configurable:!0,get:()=>xe.value,set:ce=>xe.value=ce})}if(c)for(const X in c)Ia(c[X],r,n,X);if(a){const X=H(a)?a.call(n):a;Reflect.ownKeys(X).forEach(G=>{De(G,X[G])})}u&&Ri(u,t,"c");function q(X,G){j(G)?G.forEach(je=>X(je.bind(n))):G&&X(G.bind(n))}if(q(ql,p),q(xr,g),q(Gl,v),q(Jl,T),q(Wl,A),q(zl,D),q(eu,V),q(Zl,ie),q(Ql,re),q(Yl,k),q(qs,x),q(Xl,U),j(Z))if(Z.length){const X=t.exposed||(t.exposed={});Z.forEach(G=>{Object.defineProperty(X,G,{get:()=>n[G],set:je=>n[G]=je})})}else t.exposed||(t.exposed={});z&&t.render===Qe&&(t.render=z),le!=null&&(t.inheritAttrs=le),ue&&(t.components=ue),_e&&(t.directives=_e)}function ru(t,e,n=Qe){j(t)&&(t=ps(t));for(const r in t){const s=t[r];let i;ae(s)?"default"in s?i=be(s.from||r,s.default,!0):i=be(s.from||r):i=be(s),me(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ri(t,e,n){Ke(j(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ia(t,e,n,r){const s=r.includes(".")?ba(n,r):()=>n[r];if(ge(t)){const i=e[t];H(i)&&Tt(s,i)}else if(H(t))Tt(s,t.bind(n));else if(ae(t))if(j(t))t.forEach(i=>Ia(i,e,n,r));else{const i=H(t.handler)?t.handler.bind(n):e[t.handler];H(i)&&Tt(s,i,t)}}function Gs(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>fr(a,l,o,!0)),fr(a,e,o)),ae(e)&&i.set(e,a),a}function fr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&fr(t,i,n,!0),s&&s.forEach(o=>fr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=su[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const su={data:Pi,props:Oi,emits:Oi,methods:wn,computed:wn,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:wn,directives:wn,watch:ou,provide:Pi,inject:iu};function Pi(t,e){return e?t?function(){return we(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function iu(t,e){return wn(ps(t),ps(e))}function ps(t){if(j(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Se(t,e){return t?[...new Set([].concat(t,e))]:e}function wn(t,e){return t?we(Object.create(null),t,e):e}function Oi(t,e){return t?j(t)&&j(e)?[...new Set([...t,...e])]:we(Object.create(null),Ai(t),Ai(e??{})):e}function ou(t,e){if(!t)return e;if(!e)return t;const n=we(Object.create(null),t);for(const r in e)n[r]=Se(t[r],e[r]);return n}function Sa(){return{app:null,config:{isNativeTag:$c,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let au=0;function cu(t,e){return function(r,s=null){H(r)||(r=we({},r)),s!=null&&!ae(s)&&(s=null);const i=Sa(),o=new WeakSet;let c=!1;const a=i.app={_uid:au++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Mu,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&H(l.install)?(o.add(l),l.install(a,...u)):H(l)&&(o.add(l),l(a,...u))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,u){return u?(i.components[l]=u,a):i.components[l]},directive(l,u){return u?(i.directives[l]=u,a):i.directives[l]},mount(l,u,p){if(!c){const g=he(r,s);return g.appContext=i,u&&e?e(g,l):t(g,l,p),c=!0,a._container=l,l.__vue_app__=a,Qs(g.component)||g.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,u){return i.provides[l]=u,a},runWithContext(l){kn=a;try{return l()}finally{kn=null}}};return a}}let kn=null;function De(t,e){if(ye){let n=ye.provides;const r=ye.parent&&ye.parent.provides;r===n&&(n=ye.provides=Object.create(r)),n[t]=e}}function be(t,e,n=!1){const r=ye||We;if(r||kn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:kn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&H(e)?e.call(r&&r.proxy):e}}function lu(){return!!(ye||We||kn)}function uu(t,e,n,r=!1){const s={},i={};ar(i,Mr,1),t.propsDefaults=Object.create(null),Ta(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:aa(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function fu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Y(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let p=0;p<u.length;p++){let g=u[p];if(Ar(t.emitsOptions,g))continue;const v=e[g];if(a)if(J(i,g))v!==i[g]&&(i[g]=v,l=!0);else{const T=nn(g);s[T]=gs(a,c,T,v,t,!1)}else v!==i[g]&&(i[g]=v,l=!0)}}}else{Ta(t,e,s,i)&&(l=!0);let u;for(const p in c)(!e||!J(e,p)&&((u=fn(p))===p||!J(e,u)))&&(a?n&&(n[p]!==void 0||n[u]!==void 0)&&(s[p]=gs(a,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!J(e,p))&&(delete i[p],l=!0)}l&&ct(t,"set","$attrs")}function Ta(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(er(a))continue;const l=e[a];let u;s&&J(s,u=nn(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:Ar(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=Y(n),l=c||oe;for(let u=0;u<i.length;u++){const p=i[u];n[p]=gs(s,a,p,l[p],t,!J(l,p))}}return o}function gs(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=J(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&H(a)){const{propsDefaults:l}=s;n in l?r=l[n]:(sn(s),r=l[n]=a.call(null,e),Ft())}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===fn(n))&&(r=!0))}return r}function Ca(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!H(t)){const u=p=>{a=!0;const[g,v]=Ca(p,e,!0);we(o,g),v&&c.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return ae(t)&&r.set(t,Yt),Yt;if(j(i))for(let u=0;u<i.length;u++){const p=nn(i[u]);ki(p)&&(o[p]=oe)}else if(i)for(const u in i){const p=nn(u);if(ki(p)){const g=i[u],v=o[p]=j(g)||H(g)?{type:g}:we({},g);if(v){const T=Mi(Boolean,v.type),A=Mi(String,v.type);v[0]=T>-1,v[1]=A<0||T<A,(T>-1||J(v,"default"))&&c.push(p)}}}const l=[o,c];return ae(t)&&r.set(t,l),l}function ki(t){return t[0]!=="$"}function xi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ni(t,e){return xi(t)===xi(e)}function Mi(t,e){return j(e)?e.findIndex(n=>Ni(n,t)):H(e)&&Ni(e,t)?0:-1}const Aa=t=>t[0]==="_"||t==="$stable",Js=t=>j(t)?t.map(Ye):[Ye(t)],du=(t,e,n)=>{if(e._n)return e;const r=bn((...s)=>Js(e(...s)),n);return r._c=!1,r},Ra=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Aa(s))continue;const i=t[s];if(H(i))e[s]=du(s,i,r);else if(i!=null){const o=Js(i);e[s]=()=>o}}},Pa=(t,e)=>{const n=Js(e);t.slots.default=()=>n},hu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),ar(e,"_",n)):Ra(e,t.slots={})}else t.slots={},e&&Pa(t,e);ar(t.slots,Mr,1)},pu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=oe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(we(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Ra(e,s)),o=e}else e&&(Pa(t,e),o={default:1});if(i)for(const c in s)!Aa(c)&&o[c]==null&&delete s[c]};function ms(t,e,n,r,s=!1){if(j(t)){t.forEach((g,v)=>ms(g,e&&(j(e)?e[v]:e),n,r,s));return}if(tr(r)&&!s)return;const i=r.shapeFlag&4?Qs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,u=c.refs===oe?c.refs={}:c.refs,p=c.setupState;if(l!=null&&l!==a&&(ge(l)?(u[l]=null,J(p,l)&&(p[l]=null)):me(l)&&(l.value=null)),H(a))St(a,c,12,[o,u]);else{const g=ge(a),v=me(a);if(g||v){const T=()=>{if(t.f){const A=g?J(p,a)?p[a]:u[a]:a.value;s?j(A)&&Ls(A,i):j(A)?A.includes(i)||A.push(i):g?(u[a]=[i],J(p,a)&&(p[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else g?(u[a]=o,J(p,a)&&(p[a]=o)):v&&(a.value=o,t.k&&(u[t.k]=o))};o?(T.id=-1,Re(T,n)):T()}}}const Re=Hl;function gu(t){return mu(t)}function mu(t,e){const n=os();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:p,nextSibling:g,setScopeId:v=Qe,insertStaticContent:T}=t,A=(f,d,h,m=null,_=null,b=null,C=!1,E=null,I=!!d.dynamicChildren)=>{if(f===d)return;f&&!_n(f,d)&&(m=y(f),ce(f,_,b,!0),f=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:w,ref:N,shapeFlag:O}=d;switch(w){case Nr:D(f,d,h,m);break;case xn:P(f,d,h,m);break;case Kr:f==null&&k(d,h,m,C);break;case Pe:ue(f,d,h,m,_,b,C,E,I);break;default:O&1?z(f,d,h,m,_,b,C,E,I):O&6?_e(f,d,h,m,_,b,C,E,I):(O&64||O&128)&&w.process(f,d,h,m,_,b,C,E,I,S)}N!=null&&_&&ms(N,f&&f.ref,b,d||f,!d)},D=(f,d,h,m)=>{if(f==null)r(d.el=c(d.children),h,m);else{const _=d.el=f.el;d.children!==f.children&&l(_,d.children)}},P=(f,d,h,m)=>{f==null?r(d.el=a(d.children||""),h,m):d.el=f.el},k=(f,d,h,m)=>{[f.el,f.anchor]=T(f.children,d,h,m,f.el,f.anchor)},$=({el:f,anchor:d},h,m)=>{let _;for(;f&&f!==d;)_=g(f),r(f,h,m),f=_;r(d,h,m)},x=({el:f,anchor:d})=>{let h;for(;f&&f!==d;)h=g(f),s(f),f=h;s(d)},z=(f,d,h,m,_,b,C,E,I)=>{C=C||d.type==="svg",f==null?ie(d,h,m,_,b,C,E,I):U(f,d,_,b,C,E,I)},ie=(f,d,h,m,_,b,C,E)=>{let I,w;const{type:N,props:O,shapeFlag:L,transition:B,dirs:W}=f;if(I=f.el=o(f.type,b,O&&O.is,O),L&8?u(I,f.children):L&16&&V(f.children,I,null,m,_,b&&N!=="foreignObject",C,E),W&&kt(f,null,m,"created"),re(I,f,f.scopeId,C,m),O){for(const ee in O)ee!=="value"&&!er(ee)&&i(I,ee,null,O[ee],b,f.children,m,_,pe);"value"in O&&i(I,"value",null,O.value),(w=O.onVnodeBeforeMount)&&Je(w,m,f)}W&&kt(f,null,m,"beforeMount");const se=_u(_,B);se&&B.beforeEnter(I),r(I,d,h),((w=O&&O.onVnodeMounted)||se||W)&&Re(()=>{w&&Je(w,m,f),se&&B.enter(I),W&&kt(f,null,m,"mounted")},_)},re=(f,d,h,m,_)=>{if(h&&v(f,h),m)for(let b=0;b<m.length;b++)v(f,m[b]);if(_){let b=_.subTree;if(d===b){const C=_.vnode;re(f,C,C.scopeId,C.slotScopeIds,_.parent)}}},V=(f,d,h,m,_,b,C,E,I=0)=>{for(let w=I;w<f.length;w++){const N=f[w]=E?mt(f[w]):Ye(f[w]);A(null,N,d,h,m,_,b,C,E)}},U=(f,d,h,m,_,b,C)=>{const E=d.el=f.el;let{patchFlag:I,dynamicChildren:w,dirs:N}=d;I|=f.patchFlag&16;const O=f.props||oe,L=d.props||oe;let B;h&&xt(h,!1),(B=L.onVnodeBeforeUpdate)&&Je(B,h,d,f),N&&kt(d,f,h,"beforeUpdate"),h&&xt(h,!0);const W=_&&d.type!=="foreignObject";if(w?Z(f.dynamicChildren,w,E,h,m,W,b):C||G(f,d,E,null,h,m,W,b,!1),I>0){if(I&16)le(E,d,O,L,h,m,_);else if(I&2&&O.class!==L.class&&i(E,"class",null,L.class,_),I&4&&i(E,"style",O.style,L.style,_),I&8){const se=d.dynamicProps;for(let ee=0;ee<se.length;ee++){const de=se[ee],He=O[de],zt=L[de];(zt!==He||de==="value")&&i(E,de,He,zt,_,f.children,h,m,pe)}}I&1&&f.children!==d.children&&u(E,d.children)}else!C&&w==null&&le(E,d,O,L,h,m,_);((B=L.onVnodeUpdated)||N)&&Re(()=>{B&&Je(B,h,d,f),N&&kt(d,f,h,"updated")},m)},Z=(f,d,h,m,_,b,C)=>{for(let E=0;E<d.length;E++){const I=f[E],w=d[E],N=I.el&&(I.type===Pe||!_n(I,w)||I.shapeFlag&70)?p(I.el):h;A(I,w,N,null,m,_,b,C,!0)}},le=(f,d,h,m,_,b,C)=>{if(h!==m){if(h!==oe)for(const E in h)!er(E)&&!(E in m)&&i(f,E,h[E],null,C,d.children,_,b,pe);for(const E in m){if(er(E))continue;const I=m[E],w=h[E];I!==w&&E!=="value"&&i(f,E,w,I,C,d.children,_,b,pe)}"value"in m&&i(f,"value",h.value,m.value)}},ue=(f,d,h,m,_,b,C,E,I)=>{const w=d.el=f?f.el:c(""),N=d.anchor=f?f.anchor:c("");let{patchFlag:O,dynamicChildren:L,slotScopeIds:B}=d;B&&(E=E?E.concat(B):B),f==null?(r(w,h,m),r(N,h,m),V(d.children,h,N,_,b,C,E,I)):O>0&&O&64&&L&&f.dynamicChildren?(Z(f.dynamicChildren,L,h,_,b,C,E),(d.key!=null||_&&d===_.subTree)&&Oa(f,d,!0)):G(f,d,h,N,_,b,C,E,I)},_e=(f,d,h,m,_,b,C,E,I)=>{d.slotScopeIds=E,f==null?d.shapeFlag&512?_.ctx.activate(d,h,m,C,I):Fe(d,h,m,_,b,C,I):Ce(f,d,I)},Fe=(f,d,h,m,_,b,C)=>{const E=f.component=Cu(f,m,_);if(wa(f)&&(E.ctx.renderer=S),Au(E),E.asyncDep){if(_&&_.registerDep(E,q),!f.el){const I=E.subTree=he(xn);P(null,I,d,h)}return}q(E,f,d,h,_,b,C)},Ce=(f,d,h)=>{const m=d.component=f.component;if(jl(f,d,h))if(m.asyncDep&&!m.asyncResolved){X(m,d,h);return}else m.next=d,xl(m.update),m.update();else d.el=f.el,m.vnode=d},q=(f,d,h,m,_,b,C)=>{const E=()=>{if(f.isMounted){let{next:N,bu:O,u:L,parent:B,vnode:W}=f,se=N,ee;xt(f,!1),N?(N.el=W.el,X(f,N,C)):N=W,O&&Hr(O),(ee=N.props&&N.props.onVnodeBeforeUpdate)&&Je(ee,B,N,W),xt(f,!0);const de=Wr(f),He=f.subTree;f.subTree=de,A(He,de,p(He.el),y(He),f,_,b),N.el=de.el,se===null&&Fl(f,de.el),L&&Re(L,_),(ee=N.props&&N.props.onVnodeUpdated)&&Re(()=>Je(ee,B,N,W),_)}else{let N;const{el:O,props:L}=d,{bm:B,m:W,parent:se}=f,ee=tr(d);if(xt(f,!1),B&&Hr(B),!ee&&(N=L&&L.onVnodeBeforeMount)&&Je(N,se,d),xt(f,!0),O&&K){const de=()=>{f.subTree=Wr(f),K(O,f.subTree,f,_,null)};ee?d.type.__asyncLoader().then(()=>!f.isUnmounted&&de()):de()}else{const de=f.subTree=Wr(f);A(null,de,h,m,f,_,b),d.el=de.el}if(W&&Re(W,_),!ee&&(N=L&&L.onVnodeMounted)){const de=d;Re(()=>Je(N,se,de),_)}(d.shapeFlag&256||se&&tr(se.vnode)&&se.vnode.shapeFlag&256)&&f.a&&Re(f.a,_),f.isMounted=!0,d=h=m=null}},I=f.effect=new Bs(E,()=>Ks(w),f.scope),w=f.update=()=>I.run();w.id=f.uid,xt(f,!0),w()},X=(f,d,h)=>{d.component=f;const m=f.vnode.props;f.vnode=d,f.next=null,fu(f,d.props,m,h),pu(f,d.children,h),dn(),Ti(f),hn()},G=(f,d,h,m,_,b,C,E,I=!1)=>{const w=f&&f.children,N=f?f.shapeFlag:0,O=d.children,{patchFlag:L,shapeFlag:B}=d;if(L>0){if(L&128){Be(w,O,h,m,_,b,C,E,I);return}else if(L&256){je(w,O,h,m,_,b,C,E,I);return}}B&8?(N&16&&pe(w,_,b),O!==w&&u(h,O)):N&16?B&16?Be(w,O,h,m,_,b,C,E,I):pe(w,_,b,!0):(N&8&&u(h,""),B&16&&V(O,h,m,_,b,C,E,I))},je=(f,d,h,m,_,b,C,E,I)=>{f=f||Yt,d=d||Yt;const w=f.length,N=d.length,O=Math.min(w,N);let L;for(L=0;L<O;L++){const B=d[L]=I?mt(d[L]):Ye(d[L]);A(f[L],B,h,null,_,b,C,E,I)}w>N?pe(f,_,b,!0,!1,O):V(d,h,m,_,b,C,E,I,O)},Be=(f,d,h,m,_,b,C,E,I)=>{let w=0;const N=d.length;let O=f.length-1,L=N-1;for(;w<=O&&w<=L;){const B=f[w],W=d[w]=I?mt(d[w]):Ye(d[w]);if(_n(B,W))A(B,W,h,null,_,b,C,E,I);else break;w++}for(;w<=O&&w<=L;){const B=f[O],W=d[L]=I?mt(d[L]):Ye(d[L]);if(_n(B,W))A(B,W,h,null,_,b,C,E,I);else break;O--,L--}if(w>O){if(w<=L){const B=L+1,W=B<N?d[B].el:m;for(;w<=L;)A(null,d[w]=I?mt(d[w]):Ye(d[w]),h,W,_,b,C,E,I),w++}}else if(w>L)for(;w<=O;)ce(f[w],_,b,!0),w++;else{const B=w,W=w,se=new Map;for(w=W;w<=L;w++){const Ne=d[w]=I?mt(d[w]):Ye(d[w]);Ne.key!=null&&se.set(Ne.key,w)}let ee,de=0;const He=L-W+1;let zt=!1,hi=0;const mn=new Array(He);for(w=0;w<He;w++)mn[w]=0;for(w=B;w<=O;w++){const Ne=f[w];if(de>=He){ce(Ne,_,b,!0);continue}let Ge;if(Ne.key!=null)Ge=se.get(Ne.key);else for(ee=W;ee<=L;ee++)if(mn[ee-W]===0&&_n(Ne,d[ee])){Ge=ee;break}Ge===void 0?ce(Ne,_,b,!0):(mn[Ge-W]=w+1,Ge>=hi?hi=Ge:zt=!0,A(Ne,d[Ge],h,null,_,b,C,E,I),de++)}const pi=zt?vu(mn):Yt;for(ee=pi.length-1,w=He-1;w>=0;w--){const Ne=W+w,Ge=d[Ne],gi=Ne+1<N?d[Ne+1].el:m;mn[w]===0?A(null,Ge,h,gi,_,b,C,E,I):zt&&(ee<0||w!==pi[ee]?xe(Ge,h,gi,2):ee--)}}},xe=(f,d,h,m,_=null)=>{const{el:b,type:C,transition:E,children:I,shapeFlag:w}=f;if(w&6){xe(f.component.subTree,d,h,m);return}if(w&128){f.suspense.move(d,h,m);return}if(w&64){C.move(f,d,h,S);return}if(C===Pe){r(b,d,h);for(let O=0;O<I.length;O++)xe(I[O],d,h,m);r(f.anchor,d,h);return}if(C===Kr){$(f,d,h);return}if(m!==2&&w&1&&E)if(m===0)E.beforeEnter(b),r(b,d,h),Re(()=>E.enter(b),_);else{const{leave:O,delayLeave:L,afterLeave:B}=E,W=()=>r(b,d,h),se=()=>{O(b,()=>{W(),B&&B()})};L?L(b,W,se):se()}else r(b,d,h)},ce=(f,d,h,m=!1,_=!1)=>{const{type:b,props:C,ref:E,children:I,dynamicChildren:w,shapeFlag:N,patchFlag:O,dirs:L}=f;if(E!=null&&ms(E,null,h,f,!0),N&256){d.ctx.deactivate(f);return}const B=N&1&&L,W=!tr(f);let se;if(W&&(se=C&&C.onVnodeBeforeUnmount)&&Je(se,d,f),N&6)ft(f.component,h,m);else{if(N&128){f.suspense.unmount(h,m);return}B&&kt(f,null,d,"beforeUnmount"),N&64?f.type.remove(f,d,h,_,S,m):w&&(b!==Pe||O>0&&O&64)?pe(w,d,h,!1,!0):(b===Pe&&O&384||!_&&N&16)&&pe(I,d,h),m&&Ae(f)}(W&&(se=C&&C.onVnodeUnmounted)||B)&&Re(()=>{se&&Je(se,d,f),B&&kt(f,null,d,"unmounted")},h)},Ae=f=>{const{type:d,el:h,anchor:m,transition:_}=f;if(d===Pe){$e(h,m);return}if(d===Kr){x(f);return}const b=()=>{s(h),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(f.shapeFlag&1&&_&&!_.persisted){const{leave:C,delayLeave:E}=_,I=()=>C(h,b);E?E(f.el,b,I):I()}else b()},$e=(f,d)=>{let h;for(;f!==d;)h=g(f),s(f),f=h;s(d)},ft=(f,d,h)=>{const{bum:m,scope:_,update:b,subTree:C,um:E}=f;m&&Hr(m),_.stop(),b&&(b.active=!1,ce(C,f,d,h)),E&&Re(E,d),Re(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},pe=(f,d,h,m=!1,_=!1,b=0)=>{for(let C=b;C<f.length;C++)ce(f[C],d,h,m,_)},y=f=>f.shapeFlag&6?y(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),R=(f,d,h)=>{f==null?d._vnode&&ce(d._vnode,null,null,!0):A(d._vnode||null,f,d,null,null,null,h),Ti(),ma(),d._vnode=f},S={p:A,um:ce,m:xe,r:Ae,mt:Fe,mc:V,pc:G,pbc:Z,n:y,o:t};let M,K;return e&&([M,K]=e(S)),{render:R,hydrate:M,createApp:cu(R,M)}}function xt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function _u(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Oa(t,e,n=!1){const r=t.children,s=e.children;if(j(r)&&j(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=mt(s[i]),c.el=o.el),n||Oa(o,c)),c.type===Nr&&(c.el=o.el)}}function vu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const yu=t=>t.__isTeleport,Pe=Symbol.for("v-fgt"),Nr=Symbol.for("v-txt"),xn=Symbol.for("v-cmt"),Kr=Symbol.for("v-stc"),In=[];let ze=null;function Te(t=!1){In.push(ze=t?null:[])}function bu(){In.pop(),ze=In[In.length-1]||null}let Nn=1;function Di(t){Nn+=t}function ka(t){return t.dynamicChildren=Nn>0?ze||Yt:null,bu(),Nn>0&&ze&&ze.push(t),t}function Ue(t,e,n,r,s,i){return ka(fe(t,e,n,r,s,i,!0))}function Li(t,e,n,r,s){return ka(he(t,e,n,r,s,!0))}function _s(t){return t?t.__v_isVNode===!0:!1}function _n(t,e){return t.type===e.type&&t.key===e.key}const Mr="__vInternal",xa=({key:t})=>t??null,nr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ge(t)||me(t)||H(t)?{i:We,r:t,k:e,f:!!n}:t:null);function fe(t,e=null,n=null,r=0,s=null,i=t===Pe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xa(e),ref:e&&nr(e),scopeId:Rr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:We};return c?(Ys(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ge(n)?8:16),Nn>0&&!o&&ze&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&ze.push(a),a}const he=wu;function wu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Bl)&&(t=xn),_s(t)){const c=Pt(t,e,!0);return n&&Ys(c,n),Nn>0&&!i&&ze&&(c.shapeFlag&6?ze[ze.indexOf(t)]=c:ze.push(c)),c.patchFlag|=-2,c}if(ku(t)&&(t=t.__vccOpts),e){e=Eu(e);let{class:c,style:a}=e;c&&!ge(c)&&(e.class=Ut(c)),ae(a)&&(la(a)&&!j(a)&&(a=we({},a)),e.style=js(a))}const o=ge(t)?1:$l(t)?128:yu(t)?64:ae(t)?4:H(t)?2:0;return fe(t,e,n,r,s,o,i,!0)}function Eu(t){return t?la(t)||Mr in t?we({},t):t:null}function Pt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,c=e?Iu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&xa(c),ref:e&&e.ref?n&&s?j(s)?s.concat(nr(e)):[s,nr(e)]:nr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Pe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pt(t.ssContent),ssFallback:t.ssFallback&&Pt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function vs(t=" ",e=0){return he(Nr,null,t,e)}function Ye(t){return t==null||typeof t=="boolean"?he(xn):j(t)?he(Pe,null,t.slice()):typeof t=="object"?mt(t):he(Nr,null,String(t))}function mt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pt(t)}function Ys(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(j(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ys(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Mr in e)?e._ctx=We:s===3&&We&&(We.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:We},n=32):(e=String(e),r&64?(n=16,e=[vs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Iu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ut([e.class,r.class]));else if(s==="style")e.style=js([e.style,r.style]);else if(br(s)){const i=e[s],o=r[s];o&&i!==o&&!(j(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Je(t,e,n,r=null){Ke(t,e,7,[n,r])}const Su=Sa();let Tu=0;function Cu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Su,i={uid:Tu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Go(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ca(r,s),emitsOptions:va(r,s),emit:null,emitted:null,propsDefaults:oe,inheritAttrs:r.inheritAttrs,ctx:oe,data:oe,props:oe,attrs:oe,slots:oe,refs:oe,setupState:oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Dl.bind(null,i),t.ce&&t.ce(i),i}let ye=null,Xs,Kt,Ui="__VUE_INSTANCE_SETTERS__";(Kt=os()[Ui])||(Kt=os()[Ui]=[]),Kt.push(t=>ye=t),Xs=t=>{Kt.length>1?Kt.forEach(e=>e(t)):Kt[0](t)};const sn=t=>{Xs(t),t.scope.on()},Ft=()=>{ye&&ye.scope.off(),Xs(null)};function Na(t){return t.vnode.shapeFlag&4}let Mn=!1;function Au(t,e=!1){Mn=e;const{props:n,children:r}=t.vnode,s=Na(t);uu(t,n,s,e),hu(t,r);const i=s?Ru(t,e):void 0;return Mn=!1,i}function Ru(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Sr(new Proxy(t.ctx,tu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Ou(t):null;sn(t),dn();const i=St(r,t,0,[t.props,s]);if(hn(),Ft(),Ho(i)){if(i.then(Ft,Ft),e)return i.then(o=>{ji(t,o,e)}).catch(o=>{Tr(o,t,0)});t.asyncDep=i}else ji(t,i,e)}else Ma(t,e)}function ji(t,e,n){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=ha(e)),Ma(t,n)}let Fi;function Ma(t,e,n){const r=t.type;if(!t.render){if(!e&&Fi&&!r.render){const s=r.template||Gs(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=we(we({isCustomElement:i,delimiters:c},o),a);r.render=Fi(s,l)}}t.render=r.render||Qe}{sn(t),dn();try{nu(t)}finally{hn(),Ft()}}}function Pu(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return ke(t,"get","$attrs"),e[n]}}))}function Ou(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Pu(t)},slots:t.slots,emit:t.emit,expose:e}}function Qs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ha(Sr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in En)return En[n](t)},has(e,n){return n in e||n in En}}))}function ku(t){return H(t)&&"__vccOpts"in t}const Oe=(t,e)=>Pl(t,e,Mn);function wt(t,e,n){const r=arguments.length;return r===2?ae(e)&&!j(e)?_s(e)?he(t,null,[e]):he(t,e):he(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&_s(n)&&(n=[n]),he(t,e,n))}const xu=Symbol.for("v-scx"),Nu=()=>be(xu),Mu="3.3.12",Du="http://www.w3.org/2000/svg",Dt=typeof document<"u"?document:null,Bi=Dt&&Dt.createElement("template"),Lu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Dt.createElementNS(Du,t):Dt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Dt.createTextNode(t),createComment:t=>Dt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Bi.innerHTML=r?`<svg>${t}</svg>`:t;const c=Bi.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Uu=Symbol("_vtc");function ju(t,e,n){const r=t[Uu];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Fu=Symbol("_vod"),Bu=Symbol("");function $u(t,e,n){const r=t.style,s=ge(n);if(n&&!s){if(e&&!ge(e))for(const i in e)n[i]==null&&ys(r,i,"");for(const i in n)ys(r,i,n[i])}else{const i=r.display;if(s){if(e!==n){const o=r[Bu];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");Fu in t&&(r.display=i)}}const $i=/\s*!important$/;function ys(t,e,n){if(j(n))n.forEach(r=>ys(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Hu(t,e);$i.test(n)?t.setProperty(fn(r),n.replace($i,""),"important"):t[r]=n}}const Hi=["Webkit","Moz","ms"],qr={};function Hu(t,e){const n=qr[e];if(n)return n;let r=nn(e);if(r!=="filter"&&r in t)return qr[e]=r;r=zo(r);for(let s=0;s<Hi.length;s++){const i=Hi[s]+r;if(i in t)return qr[e]=i}return e}const Vi="http://www.w3.org/1999/xlink";function Vu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Vi,e.slice(6,e.length)):t.setAttributeNS(Vi,e,n);else{const i=Qc(e);n==null||i&&!Ko(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Wu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const l=c==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ko(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function zu(t,e,n,r){t.addEventListener(e,n,r)}function Ku(t,e,n,r){t.removeEventListener(e,n,r)}const Wi=Symbol("_vei");function qu(t,e,n,r,s=null){const i=t[Wi]||(t[Wi]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Gu(e);if(r){const l=i[e]=Xu(r,s);zu(t,c,l,a)}else o&&(Ku(t,c,o,a),i[e]=void 0)}}const zi=/(?:Once|Passive|Capture)$/;function Gu(t){let e;if(zi.test(t)){e={};let r;for(;r=t.match(zi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fn(t.slice(2)),e]}let Gr=0;const Ju=Promise.resolve(),Yu=()=>Gr||(Ju.then(()=>Gr=0),Gr=Date.now());function Xu(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ke(Qu(r,n.value),e,5,[r])};return n.value=t,n.attached=Yu(),n}function Qu(t,e){if(j(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Ki=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Zu=(t,e,n,r,s=!1,i,o,c,a)=>{e==="class"?ju(t,r,s):e==="style"?$u(t,n,r):br(e)?Ds(e)||qu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ef(t,e,r,s))?Wu(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Vu(t,e,r,s))};function ef(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ki(e)&&H(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Ki(e)&&ge(n)?!1:e in t}const tf=we({patchProp:Zu},Lu);let qi;function nf(){return qi||(qi=gu(tf))}const rf=(...t)=>{const e=nf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=sf(r);if(!s)return;const i=e._component;!H(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function sf(t){return ge(t)?document.querySelector(t):t}var of=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Da;const Dr=t=>Da=t,La=Symbol();function bs(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Sn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Sn||(Sn={}));function af(){const t=Jo(!0),e=t.run(()=>te({}));let n=[],r=[];const s=Sr({install(i){Dr(s),s._a=i,i.provide(La,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!of?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ua=()=>{};function Gi(t,e,n,r=Ua){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Yo()&&el(s),s}function qt(t,...e){t.slice().forEach(n=>{n(...e)})}const cf=t=>t();function ws(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];bs(s)&&bs(r)&&t.hasOwnProperty(n)&&!me(r)&&!It(r)?t[n]=ws(s,r):t[n]=r}return t}const lf=Symbol();function uf(t){return!bs(t)||!t.hasOwnProperty(lf)}const{assign:gt}=Object;function ff(t){return!!(me(t)&&t.effect)}function df(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let a;function l(){c||(n.state.value[t]=s?s():{});const u=Tl(n.state.value[t]);return gt(u,i,Object.keys(o||{}).reduce((p,g)=>(p[g]=Sr(Oe(()=>{Dr(n);const v=n._s.get(t);return o[g].call(v,v)})),p),{}))}return a=ja(t,l,e,n,r,!0),a}function ja(t,e,n={},r,s,i){let o;const c=gt({actions:{}},n),a={deep:!0};let l,u,p=[],g=[],v;const T=r.state.value[t];!i&&!T&&(r.state.value[t]={}),te({});let A;function D(V){let U;l=u=!1,typeof V=="function"?(V(r.state.value[t]),U={type:Sn.patchFunction,storeId:t,events:v}):(ws(r.state.value[t],V),U={type:Sn.patchObject,payload:V,storeId:t,events:v});const Z=A=Symbol();Cr().then(()=>{A===Z&&(l=!0)}),u=!0,qt(p,U,r.state.value[t])}const P=i?function(){const{state:U}=n,Z=U?U():{};this.$patch(le=>{gt(le,Z)})}:Ua;function k(){o.stop(),p=[],g=[],r._s.delete(t)}function $(V,U){return function(){Dr(r);const Z=Array.from(arguments),le=[],ue=[];function _e(q){le.push(q)}function Fe(q){ue.push(q)}qt(g,{args:Z,name:V,store:z,after:_e,onError:Fe});let Ce;try{Ce=U.apply(this&&this.$id===t?this:z,Z)}catch(q){throw qt(ue,q),q}return Ce instanceof Promise?Ce.then(q=>(qt(le,q),q)).catch(q=>(qt(ue,q),Promise.reject(q))):(qt(le,Ce),Ce)}}const x={_p:r,$id:t,$onAction:Gi.bind(null,g),$patch:D,$reset:P,$subscribe(V,U={}){const Z=Gi(p,V,U.detached,()=>le()),le=o.run(()=>Tt(()=>r.state.value[t],ue=>{(U.flush==="sync"?u:l)&&V({storeId:t,type:Sn.direct,events:v},ue)},gt({},a,U)));return Z},$dispose:k},z=Ze(x);r._s.set(t,z);const re=(r._a&&r._a.runWithContext||cf)(()=>r._e.run(()=>(o=Jo()).run(e)));for(const V in re){const U=re[V];if(me(U)&&!ff(U)||It(U))i||(T&&uf(U)&&(me(U)?U.value=T[V]:ws(U,T[V])),r.state.value[t][V]=U);else if(typeof U=="function"){const Z=$(V,U);re[V]=Z,c.actions[V]=U}}return gt(z,re),gt(Y(z),re),Object.defineProperty(z,"$state",{get:()=>r.state.value[t],set:V=>{D(U=>{gt(U,V)})}}),r._p.forEach(V=>{gt(z,o.run(()=>V({store:z,app:r._a,pinia:r,options:c})))}),T&&i&&n.hydrate&&n.hydrate(z.$state,T),l=!0,u=!0,z}function hf(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(c,a){const l=lu();return c=c||(l?be(La,null):null),c&&Dr(c),c=Da,c._s.has(r)||(i?ja(r,e,s,c):df(r,s,c)),c._s.get(r)}return o.$id=r,o}var Ji={};/**
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
 */const Fa=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pf=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ba={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,u=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|l>>6,v=l&63;a||(v=64,o||(g=64)),r.push(n[u],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||p==null)throw new gf;const g=i<<2|c>>4;if(r.push(g),l!==64){const v=c<<4&240|l>>2;if(r.push(v),p!==64){const T=l<<6&192|p;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mf=function(t){const e=Fa(t);return Ba.encodeByteArray(e,!0)},$a=function(t){return mf(t).replace(/\./g,"")},Ha=function(t){try{return Ba.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _f(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vf=()=>_f().__FIREBASE_DEFAULTS__,yf=()=>{if(typeof process>"u"||typeof Ji>"u")return;const t=Ji.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ha(t[1]);return e&&JSON.parse(e)},Zs=()=>{try{return vf()||yf()||bf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wf=t=>{var e,n;return(n=(e=Zs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Va=()=>{var t;return(t=Zs())===null||t===void 0?void 0:t.config},Wa=t=>{var e;return(e=Zs())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ef{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function If(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Sf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cf(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Af(){try{return typeof indexedDB=="object"}catch{return!1}}function Rf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Pf="FirebaseError";class Ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Pf,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$n.prototype.create)}}class $n{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Of(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ot(s,c,r)}}function Of(t,e){return t.replace(kf,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const kf=/\{\$([^}]+)}/g;function xf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function dr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Yi(i)&&Yi(o)){if(!dr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Yi(t){return t!==null&&typeof t=="object"}/**
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
 */function Hn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Nf(t,e){const n=new Mf(t,e);return n.subscribe.bind(n)}class Mf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Df(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Jr),s.error===void 0&&(s.error=Jr),s.complete===void 0&&(s.complete=Jr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Df(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jr(){}/**
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
 */function pn(t){return t&&t._delegate?t._delegate:t}class on{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Lf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ef;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jf(e))try{this.getOrInitializeService({instanceIdentifier:Nt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nt){return this.instances.has(e)}getOptions(e=Nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Uf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nt){return this.component?this.component.multipleInstances?e:Nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uf(t){return t===Nt?void 0:t}function jf(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ff{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Bf={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},$f=ne.INFO,Hf={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Vf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Hf[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class za{constructor(e){this.name=e,this._logLevel=$f,this._logHandler=Vf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Wf=(t,e)=>e.some(n=>t instanceof n);let Xi,Qi;function zf(){return Xi||(Xi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kf(){return Qi||(Qi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ka=new WeakMap,Es=new WeakMap,qa=new WeakMap,Yr=new WeakMap,ei=new WeakMap;function qf(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ct(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ka.set(n,t)}).catch(()=>{}),ei.set(e,t),e}function Gf(t){if(Es.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Es.set(t,e)}let Is={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Es.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Jf(t){Is=t(Is)}function Yf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xr(this),e,...n);return qa.set(r,e.sort?e.sort():[e]),Ct(r)}:Kf().includes(t)?function(...e){return t.apply(Xr(this),e),Ct(Ka.get(this))}:function(...e){return Ct(t.apply(Xr(this),e))}}function Xf(t){return typeof t=="function"?Yf(t):(t instanceof IDBTransaction&&Gf(t),Wf(t,zf())?new Proxy(t,Is):t)}function Ct(t){if(t instanceof IDBRequest)return qf(t);if(Yr.has(t))return Yr.get(t);const e=Xf(t);return e!==t&&(Yr.set(t,e),ei.set(e,t)),e}const Xr=t=>ei.get(t);function Qf(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Ct(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Ct(o.result),a.oldVersion,a.newVersion,Ct(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Zf=["get","getKey","getAll","getAllKeys","count"],ed=["put","add","delete","clear"],Qr=new Map;function Zi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qr.get(e))return Qr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ed.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zf.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return Qr.set(e,i),i}Jf(t=>({...t,get:(e,n,r)=>Zi(e,n)||t.get(e,n,r),has:(e,n)=>!!Zi(e,n)||t.has(e,n)}));/**
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
 */class td{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ss="@firebase/app",eo="0.9.25";/**
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
 */const Ht=new za("@firebase/app"),rd="@firebase/app-compat",sd="@firebase/analytics-compat",id="@firebase/analytics",od="@firebase/app-check-compat",ad="@firebase/app-check",cd="@firebase/auth",ld="@firebase/auth-compat",ud="@firebase/database",fd="@firebase/database-compat",dd="@firebase/functions",hd="@firebase/functions-compat",pd="@firebase/installations",gd="@firebase/installations-compat",md="@firebase/messaging",_d="@firebase/messaging-compat",vd="@firebase/performance",yd="@firebase/performance-compat",bd="@firebase/remote-config",wd="@firebase/remote-config-compat",Ed="@firebase/storage",Id="@firebase/storage-compat",Sd="@firebase/firestore",Td="@firebase/firestore-compat",Cd="firebase",Ad="10.7.1";/**
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
 */const Ts="[DEFAULT]",Rd={[Ss]:"fire-core",[rd]:"fire-core-compat",[id]:"fire-analytics",[sd]:"fire-analytics-compat",[ad]:"fire-app-check",[od]:"fire-app-check-compat",[cd]:"fire-auth",[ld]:"fire-auth-compat",[ud]:"fire-rtdb",[fd]:"fire-rtdb-compat",[dd]:"fire-fn",[hd]:"fire-fn-compat",[pd]:"fire-iid",[gd]:"fire-iid-compat",[md]:"fire-fcm",[_d]:"fire-fcm-compat",[vd]:"fire-perf",[yd]:"fire-perf-compat",[bd]:"fire-rc",[wd]:"fire-rc-compat",[Ed]:"fire-gcs",[Id]:"fire-gcs-compat",[Sd]:"fire-fst",[Td]:"fire-fst-compat","fire-js":"fire-js",[Cd]:"fire-js-all"};/**
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
 */const hr=new Map,Cs=new Map;function Pd(t,e){try{t.container.addComponent(e)}catch(n){Ht.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dn(t){const e=t.name;if(Cs.has(e))return Ht.debug(`There were multiple attempts to register component ${e}.`),!1;Cs.set(e,t);for(const n of hr.values())Pd(n,t);return!0}function Ga(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Od={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},At=new $n("app","Firebase",Od);/**
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
 */class kd{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
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
 */const Vn=Ad;function Ja(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ts,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw At.create("bad-app-name",{appName:String(s)});if(n||(n=Va()),!n)throw At.create("no-options");const i=hr.get(s);if(i){if(dr(n,i.options)&&dr(r,i.config))return i;throw At.create("duplicate-app",{appName:s})}const o=new Ff(s);for(const a of Cs.values())o.addComponent(a);const c=new kd(n,r,o);return hr.set(s,c),c}function xd(t=Ts){const e=hr.get(t);if(!e&&t===Ts&&Va())return Ja();if(!e)throw At.create("no-app",{appName:t});return e}function Zt(t,e,n){var r;let s=(r=Rd[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ht.warn(c.join(" "));return}Dn(new on(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Nd="firebase-heartbeat-database",Md=1,Ln="firebase-heartbeat-store";let Zr=null;function Ya(){return Zr||(Zr=Qf(Nd,Md,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ln)}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),Zr}async function Dd(t){try{return await(await Ya()).transaction(Ln).objectStore(Ln).get(Xa(t))}catch(e){if(e instanceof Ot)Ht.warn(e.message);else{const n=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ht.warn(n.message)}}}async function to(t,e){try{const r=(await Ya()).transaction(Ln,"readwrite");await r.objectStore(Ln).put(e,Xa(t)),await r.done}catch(n){if(n instanceof Ot)Ht.warn(n.message);else{const r=At.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ht.warn(r.message)}}}function Xa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ld=1024,Ud=30*24*60*60*1e3;class jd{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bd(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=no();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Ud}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=no(),{heartbeatsToSend:r,unsentEntries:s}=Fd(this._heartbeatsCache.heartbeats),i=$a(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function no(){return new Date().toISOString().substring(0,10)}function Fd(t,e=Ld){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ro(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ro(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Bd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Af()?Rf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Dd(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return to(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return to(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ro(t){return $a(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function $d(t){Dn(new on("platform-logger",e=>new td(e),"PRIVATE")),Dn(new on("heartbeat",e=>new jd(e),"PRIVATE")),Zt(Ss,eo,t),Zt(Ss,eo,"esm2017"),Zt("fire-js","")}$d("");function ti(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Qa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hd=Qa,Za=new $n("auth","Firebase",Qa());/**
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
 */const pr=new za("@firebase/auth");function Vd(t,...e){pr.logLevel<=ne.WARN&&pr.warn(`Auth (${Vn}): ${t}`,...e)}function rr(t,...e){pr.logLevel<=ne.ERROR&&pr.error(`Auth (${Vn}): ${t}`,...e)}/**
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
 */function nt(t,...e){throw ni(t,...e)}function et(t,...e){return ni(t,...e)}function ec(t,e,n){const r=Object.assign(Object.assign({},Hd()),{[e]:n});return new $n("auth","Firebase",r).create(e,{appName:t.name})}function Wd(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&nt(t,"argument-error"),ec(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ni(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Za.create(t,...e)}function F(t,e,...n){if(!t)throw ni(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rr(e),new Error(e)}function lt(t,e){t||ot(e)}/**
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
 */function As(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zd(){return so()==="http:"||so()==="https:"}function so(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Kd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zd()||Sf()||"connection"in navigator)?navigator.onLine:!0}function qd(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wn{constructor(e,n){this.shortDelay=e,this.longDelay=n,lt(n>e,"Short delay should be less than long delay!"),this.isMobile=If()||Tf()}get(){return Kd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ri(t,e){lt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class tc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Gd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Jd=new Wn(3e4,6e4);function si(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gn(t,e,n,r,s={}){return nc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Hn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),tc.fetch()(rc(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function nc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Gd),e);try{const s=new Xd(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Zn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Zn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Zn(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ec(t,u,l);nt(t,u)}}catch(s){if(s instanceof Ot)throw s;nt(t,"network-request-failed",{message:String(s)})}}async function Yd(t,e,n,r,s={}){const i=await gn(t,e,n,r,s);return"mfaPendingCredential"in i&&nt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function rc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ri(t.config,s):`${t.config.apiScheme}://${s}`}class Xd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),Jd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=et(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Qd(t,e){return gn(t,"POST","/v1/accounts:delete",e)}async function Zd(t,e){return gn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Tn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function eh(t,e=!1){const n=pn(t),r=await n.getIdToken(e),s=ii(r);F(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Tn(es(s.auth_time)),issuedAtTime:Tn(es(s.iat)),expirationTime:Tn(es(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function es(t){return Number(t)*1e3}function ii(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ha(n);return s?JSON.parse(s):(rr("Failed to decode base64 JWT payload"),null)}catch(s){return rr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function th(t){const e=ii(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Un(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ot&&nh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class rh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tn(this.lastLoginAt),this.creationTime=Tn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Un(t,Zd(n,{idToken:r}));F(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?oh(i.providerUserInfo):[],c=ih(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new sc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,p)}async function sh(t){const e=pn(t);await gr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ih(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function oh(t){return t.map(e=>{var{providerId:n}=e,r=ti(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ah(t,e){const n=await nc(t,{},async()=>{const r=Hn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=rc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",tc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ch(t,e){return gn(t,"POST","/v2/accounts:revokeToken",si(t,e))}/**
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
 */class jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):th(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await ah(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new jn;return r&&(F(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(F(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function ht(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Bt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ti(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new rh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new sc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Un(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return eh(this,e)}reload(){return sh(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await gr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Un(this,Qd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,u;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(c=n.tenantId)!==null&&c!==void 0?c:void 0,D=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,P=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:$,emailVerified:x,isAnonymous:z,providerData:ie,stsTokenManager:re}=n;F($&&re,e,"internal-error");const V=jn.fromJSON(this.name,re);F(typeof $=="string",e,"internal-error"),ht(p,e.name),ht(g,e.name),F(typeof x=="boolean",e,"internal-error"),F(typeof z=="boolean",e,"internal-error"),ht(v,e.name),ht(T,e.name),ht(A,e.name),ht(D,e.name),ht(P,e.name),ht(k,e.name);const U=new Bt({uid:$,auth:e,email:g,emailVerified:x,displayName:p,isAnonymous:z,photoURL:T,phoneNumber:v,tenantId:A,stsTokenManager:V,createdAt:P,lastLoginAt:k});return ie&&Array.isArray(ie)&&(U.providerData=ie.map(Z=>Object.assign({},Z))),D&&(U._redirectEventId=D),U}static async _fromIdTokenResponse(e,n,r=!1){const s=new jn;s.updateFromServerResponse(n);const i=new Bt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await gr(i),i}}/**
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
 */const io=new Map;function at(t){lt(t instanceof Function,"Expected a class definition");let e=io.get(t);return e?(lt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,io.set(t,e),e)}/**
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
 */class ic{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ic.type="NONE";const oo=ic;/**
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
 */function sr(t,e,n){return`firebase:${t}:${e}:${n}`}class en{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=sr(this.userKey,s.apiKey,i),this.fullPersistenceKey=sr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new en(at(oo),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||at(oo);const o=sr(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const p=Bt._fromJSON(e,u);l!==i&&(c=p),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new en(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new en(i,e,r))}}/**
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
 */function ao(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(oc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uc(e))return"Blackberry";if(fc(e))return"Webos";if(oi(e))return"Safari";if((e.includes("chrome/")||ac(e))&&!e.includes("edge/"))return"Chrome";if(lc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function oc(t=Ie()){return/firefox\//i.test(t)}function oi(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ac(t=Ie()){return/crios\//i.test(t)}function cc(t=Ie()){return/iemobile/i.test(t)}function lc(t=Ie()){return/android/i.test(t)}function uc(t=Ie()){return/blackberry/i.test(t)}function fc(t=Ie()){return/webos/i.test(t)}function Lr(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function lh(t=Ie()){var e;return Lr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uh(){return Cf()&&document.documentMode===10}function dc(t=Ie()){return Lr(t)||lc(t)||fc(t)||uc(t)||/windows phone/i.test(t)||cc(t)}function fh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function hc(t,e=[]){let n;switch(t){case"Browser":n=ao(Ie());break;case"Worker":n=`${ao(Ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vn}/${r}`}/**
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
 */class dh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function hh(t,e={}){return gn(t,"GET","/v2/passwordPolicy",si(t,e))}/**
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
 */const ph=6;class gh{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:ph,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class mh{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new co(this),this.idTokenSubscription=new co(this),this.beforeStateQueue=new dh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Za,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await en.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?pn(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hh(this),n=new gh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $n("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ch(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&at(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await en.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Vd(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ur(t){return pn(t)}class co{constructor(e){this.auth=e,this.observer=null,this.addObserver=Nf(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function _h(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function vh(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=et("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",_h().appendChild(r)})}function yh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function bh(t,e){const n=Ga(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(dr(i,e??{}))return s;nt(s,"already-initialized")}return n.initialize({options:e})}function wh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(at);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Eh(t,e,n){const r=Ur(t);F(r._canInitEmulator,r,"emulator-config-failed"),F(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=pc(e),{host:o,port:c}=Ih(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Sh()}function pc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ih(t){const e=pc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:lo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:lo(o)}}}function lo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Sh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class gc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}/**
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
 */async function tn(t,e){return Yd(t,"POST","/v1/accounts:signInWithIdp",si(t,e))}/**
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
 */const Th="http://localhost";class Vt extends gc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ti(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Vt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return tn(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,tn(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,tn(e,n)}buildRequest(){const e={requestUri:Th,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Hn(n)}return e}}/**
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
 */class ai{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zn extends ai{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vt extends zn{constructor(){super("facebook.com")}static credential(e){return Vt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch{return null}}}vt.FACEBOOK_SIGN_IN_METHOD="facebook.com";vt.PROVIDER_ID="facebook.com";/**
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
 */class it extends zn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Vt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return it.credential(n,r)}catch{return null}}}it.GOOGLE_SIGN_IN_METHOD="google.com";it.PROVIDER_ID="google.com";/**
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
 */class yt extends zn{constructor(){super("github.com")}static credential(e){return Vt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
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
 */class bt extends zn{constructor(){super("twitter.com")}static credential(e,n){return Vt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bt.credential(n,r)}catch{return null}}}bt.TWITTER_SIGN_IN_METHOD="twitter.com";bt.PROVIDER_ID="twitter.com";/**
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
 */class an{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Bt._fromIdTokenResponse(e,r,s),o=uo(r);return new an({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=uo(r);return new an({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function uo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class mr extends Ot{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,mr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new mr(e,n,r,s)}}function mc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?mr._fromErrorAndOperation(t,i,e,r):i})}async function Ch(t,e,n=!1){const r=await Un(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return an._forOperation(t,"link",r)}/**
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
 */async function Ah(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Un(t,mc(r,s,e,t),n);F(i.idToken,r,"internal-error");const o=ii(i.idToken);F(o,r,"internal-error");const{sub:c}=o;return F(t.uid===c,r,"user-mismatch"),an._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&nt(r,"user-mismatch"),i}}/**
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
 */async function Rh(t,e,n=!1){const r="signIn",s=await mc(t,r,e),i=await an._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Ph(t,e,n,r){return pn(t).onIdTokenChanged(e,n,r)}function Oh(t,e,n){return pn(t).beforeAuthStateChanged(e,n)}const _r="__sak";/**
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
 */class _c{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_r,"1"),this.storage.removeItem(_r),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function kh(){const t=Ie();return oi(t)||Lr(t)}const xh=1e3,Nh=10;class vc extends _c{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kh()&&fh(),this.fallbackToPolling=dc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Nh):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vc.type="LOCAL";const Mh=vc;/**
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
 */class yc extends _c{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yc.type="SESSION";const bc=yc;/**
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
 */function Dh(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class jr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new jr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Dh(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jr.receivers=[];/**
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
 */function ci(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Lh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=ci("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tt(){return window}function Uh(t){tt().location.href=t}/**
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
 */function wc(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function jh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Bh(){return wc()?self:null}/**
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
 */const Ec="firebaseLocalStorageDb",$h=1,vr="firebaseLocalStorage",Ic="fbase_key";class Kn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fr(t,e){return t.transaction([vr],e?"readwrite":"readonly").objectStore(vr)}function Hh(){const t=indexedDB.deleteDatabase(Ec);return new Kn(t).toPromise()}function Rs(){const t=indexedDB.open(Ec,$h);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vr,{keyPath:Ic})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vr)?e(r):(r.close(),await Hh(),e(await Rs()))})})}async function fo(t,e,n){const r=Fr(t,!0).put({[Ic]:e,value:n});return new Kn(r).toPromise()}async function Vh(t,e){const n=Fr(t,!1).get(e),r=await new Kn(n).toPromise();return r===void 0?null:r.value}function ho(t,e){const n=Fr(t,!0).delete(e);return new Kn(n).toPromise()}const Wh=800,zh=3;class Sc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>zh)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jr._getInstance(Bh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jh(),!this.activeServiceWorker)return;this.sender=new Lh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rs();return await fo(e,_r,"1"),await ho(e,_r),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Vh(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ho(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Fr(s,!1).getAll();return new Kn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sc.type="LOCAL";const Kh=Sc;new Wn(3e4,6e4);/**
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
 */function Tc(t,e){return e?at(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class li extends gc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return tn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return tn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qh(t){return Rh(t.auth,new li(t),t.bypassAuthState)}function Gh(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Ah(n,new li(t),t.bypassAuthState)}async function Jh(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Ch(n,new li(t),t.bypassAuthState)}/**
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
 */class Cc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qh;case"linkViaPopup":case"linkViaRedirect":return Jh;case"reauthViaPopup":case"reauthViaRedirect":return Gh;default:nt(this.auth,"internal-error")}}resolve(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Yh=new Wn(2e3,1e4);async function Xh(t,e,n){const r=Ur(t);Wd(t,e,ai);const s=Tc(r,n);return new Lt(r,"signInViaPopup",e,s).executeNotNull()}class Lt extends Cc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Lt.currentPopupAction&&Lt.currentPopupAction.cancel(),Lt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){lt(this.filter.length===1,"Popup operations only handle one event");const e=ci();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Yh.get())};e()}}Lt.currentPopupAction=null;/**
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
 */const Qh="pendingRedirect",ir=new Map;class Zh extends Cc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ir.get(this.auth._key());if(!e){try{const r=await ep(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ir.set(this.auth._key(),e)}return this.bypassAuthState||ir.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ep(t,e){const n=rp(e),r=np(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function tp(t,e){ir.set(t._key(),e)}function np(t){return at(t._redirectPersistence)}function rp(t){return sr(Qh,t.config.apiKey,t.name)}async function sp(t,e,n=!1){const r=Ur(t),s=Tc(r,e),o=await new Zh(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const ip=10*60*1e3;class op{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ap(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ac(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(et(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ip&&this.cachedEventUids.clear(),this.cachedEventUids.has(po(e))}saveEventToCache(e){this.cachedEventUids.add(po(e)),this.lastProcessedEventTime=Date.now()}}function po(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ac({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ap(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ac(t);default:return!1}}/**
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
 */async function cp(t,e={}){return gn(t,"GET","/v1/projects",e)}/**
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
 */const lp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,up=/^https?/;async function fp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cp(t);for(const n of e)try{if(dp(n))return}catch{}nt(t,"unauthorized-domain")}function dp(t){const e=As(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!up.test(n))return!1;if(lp.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const hp=new Wn(3e4,6e4);function go(){const t=tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function pp(t){return new Promise((e,n)=>{var r,s,i;function o(){go(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{go(),n(et(t,"network-request-failed"))},timeout:hp.get()})}if(!((s=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=tt().gapi)===null||i===void 0)&&i.load)o();else{const c=yh("iframefcb");return tt()[c]=()=>{gapi.load?o():n(et(t,"network-request-failed"))},vh(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw or=null,e})}let or=null;function gp(t){return or=or||pp(t),or}/**
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
 */const mp=new Wn(5e3,15e3),_p="__/auth/iframe",vp="emulator/auth/iframe",yp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wp(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ri(e,vp):`https://${t.config.authDomain}/${_p}`,r={apiKey:e.apiKey,appName:t.name,v:Vn},s=bp.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Hn(r).slice(1)}`}async function Ep(t){const e=await gp(t),n=tt().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:wp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yp,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=et(t,"network-request-failed"),c=tt().setTimeout(()=>{i(o)},mp.get());function a(){tt().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const Ip={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sp=500,Tp=600,Cp="_blank",Ap="http://localhost";class mo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rp(t,e,n,r=Sp,s=Tp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Ip),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ie().toLowerCase();n&&(c=ac(l)?Cp:n),oc(l)&&(e=e||Ap,a.scrollbars="yes");const u=Object.entries(a).reduce((g,[v,T])=>`${g}${v}=${T},`,"");if(lh(l)&&c!=="_self")return Pp(e||"",c),new mo(null);const p=window.open(e||"",c,u);F(p,t,"popup-blocked");try{p.focus()}catch{}return new mo(p)}function Pp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Op="__/auth/handler",kp="emulator/auth/handler",xp=encodeURIComponent("fac");async function _o(t,e,n,r,s,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vn,eventId:s};if(e instanceof ai){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",xf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,p]of Object.entries(i||{}))o[u]=p}if(e instanceof zn){const u=e.getScopes().filter(p=>p!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await t._getAppCheckToken(),l=a?`#${xp}=${encodeURIComponent(a)}`:"";return`${Np(t)}?${Hn(c).slice(1)}${l}`}function Np({config:t}){return t.emulator?ri(t,kp):`https://${t.authDomain}/${Op}`}/**
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
 */const ts="webStorageSupport";class Mp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bc,this._completeRedirectFn=sp,this._overrideRedirectResult=tp}async _openPopup(e,n,r,s){var i;lt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await _o(e,n,r,As(),s);return Rp(e,o,ci())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await _o(e,n,r,As(),s);return Uh(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(lt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ep(e),r=new op(e);return n.register("authEvent",s=>(F(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ts,{type:ts},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ts];o!==void 0&&n(!!o),nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dc()||oi()||Lr()}}const Dp=Mp;var vo="@firebase/auth",yo="1.5.1";/**
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
 */class Lp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Up(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function jp(t){Dn(new on("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;F(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hc(t)},l=new mh(r,s,i,a);return wh(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dn(new on("auth-internal",e=>{const n=Ur(e.getProvider("auth").getImmediate());return(r=>new Lp(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(vo,yo,Up(t)),Zt(vo,yo,"esm2017")}/**
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
 */const Fp=5*60,Bp=Wa("authIdTokenMaxAge")||Fp;let bo=null;const $p=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bp)return;const s=n==null?void 0:n.token;bo!==s&&(bo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Hp(t=xd()){const e=Ga(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bh(t,{popupRedirectResolver:Dp,persistence:[Kh,Mh,bc]}),r=Wa("authTokenSyncURL");if(r){const i=$p(r);Oh(n,i,()=>i(n.currentUser)),Ph(n,o=>i(o))}const s=wf("auth");return s&&Eh(n,`http://${s}`),n}jp("Browser");var Vp="firebase",Wp="10.7.1";/**
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
 */Zt(Vp,Wp,"app");const zp={apiKey:"AIzaSyAG7RhfFYVnIaZWJO6TGQUwEotdbthjKiQ",authDomain:"oauth-test-409113.firebaseapp.com",projectId:"oauth-test-409113",storageBucket:"oauth-test-409113.appspot.com",messagingSenderId:"652423632088",appId:"1:652423632088:web:6634d5230b45947049f3ad",measurementId:"G-W934SN2KWS"},Kp=Ja(zp),ns=Hp(Kp),Wt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},qp={class:"w-full h-full flex items-center justify-center"},Gp={__name:"ThirdLogin",setup(t){const e=te(null),n=async()=>{const s=new it;try{await Xh(ns,s)}catch{}},r=async()=>{if(confirm("確定要登出?"))try{await ns.signOut()}catch{}};return xr(()=>{ns.onAuthStateChanged(s=>{e.value=s})}),(s,i)=>(Te(),Ue("div",qp,[e.value?(Te(),Ue("span",{key:0,class:"material-symbols-outlined w-full h-full",onClick:r},"logout")):(Te(),Ue("span",{key:1,class:"material-symbols-outlined w-full h-full",onClick:n},"person"))]))}},Jp=Wt(Gp,[["__scopeId","data-v-67124f6f"]]),Rc=hf("store",()=>({isClick:te(!1)})),Yp=t=>(Pr("data-v-e08bb057"),t=t(),Or(),t),Xp={class:"fixed top-0 w-full bg-white z-30"},Qp={class:"navBar relative w-full h-full flex justify-between items-center"},Zp=Yp(()=>fe("div",{class:"themeName absolute h-full flex justify-center items-center left-1/2 -translate-x-1/2 text-2xl border-y-black border-y-2"}," VIRTUALMODEL",-1)),eg={class:"funcContainer h-full border border-2 border-black hover:cursor-pointer"},tg={__name:"Navbar",setup(t){const e=Rc(),n=te(null),r=()=>{e.isClick=!e.isClick,n.value.classList.toggle("isClick")};return(s,i)=>(Te(),Ue("header",Xp,[fe("nav",Qp,[fe("div",{class:"hamberger h-full flex justify-center items-center border border-2 border-black hover:cursor-pointer",onClick:r},[fe("div",{ref_key:"hamberButton",ref:n,class:"hamberButton bg-black w-1/2 h-1/2"},null,512)]),Zp,fe("div",eg,[he(Jp)])])]))}},ng=Wt(tg,[["__scopeId","data-v-e08bb057"]]),rg=t=>(Pr("data-v-82d15372"),t=t(),Or(),t),sg=rg(()=>fe("div",{class:"topIcon w-8 h-8 bg-black"},null,-1)),ig=[sg],og={__name:"ScrollTop",setup(t){const e=te(0),n=te(!1),r=()=>{window.scrollTo({top:"0",behavior:"smooth"})};return xr(()=>{window.addEventListener("scroll",function(){e.value=window.scrollY,n.value=e.value>0})}),(s,i)=>(Te(),Ue("div",{class:Ut(["scrollTopButton fixed bottom-0 bg-white w-full flex justify-center items-center z-10 hover:cursor-pointer",{isScroll:n.value}]),onClick:r},ig,2))}},ag=Wt(og,[["__scopeId","data-v-82d15372"]]);/**
 * Vue 3 Carousel 0.3.1
 * (c) 2023
 * @license MIT
 */const ve={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,throttle:16,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0,i18n:{ariaNextSlide:"Navigate to next slide",ariaPreviousSlide:"Navigate to previous slide",ariaNavigateToSlide:"Navigate to slide {slideNumber}",ariaGallery:"Gallery",itemXofY:"Item {currentSlide} of {slidesCount}",iconArrowUp:"Arrow pointing upwards",iconArrowDown:"Arrow pointing downwards",iconArrowRight:"Arrow pointing to the right",iconArrowLeft:"Arrow pointing to the left"}},wo={itemsToShow:{default:ve.itemsToShow,type:Number},itemsToScroll:{default:ve.itemsToScroll,type:Number},wrapAround:{default:ve.wrapAround,type:Boolean},throttle:{default:ve.throttle,type:Number},snapAlign:{default:ve.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:ve.transition,type:Number},breakpoints:{default:ve.breakpoints,type:Object},autoplay:{default:ve.autoplay,type:Number},pauseAutoplayOnHover:{default:ve.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:ve.mouseDrag,type:Boolean},touchDrag:{default:ve.touchDrag,type:Boolean},dir:{default:ve.dir,validator(t){return["rtl","ltr"].includes(t)}},i18n:{default:ve.i18n,type:Object},settings:{default(){return{}},type:Object}};function cg({config:t,slidesCount:e}){const{snapAlign:n,wrapAround:r,itemsToShow:s=1}=t;if(r)return Math.max(e-1,0);let i;switch(n){case"start":i=e-s;break;case"end":i=e-1;break;case"center":case"center-odd":i=e-Math.ceil((s-.5)/2);break;case"center-even":i=e-Math.ceil(s/2);break;default:i=0;break}return Math.max(i,0)}function lg({config:t,slidesCount:e}){const{wrapAround:n,snapAlign:r,itemsToShow:s=1}=t;let i=0;if(n||s>e)return i;switch(r){case"start":i=0;break;case"end":i=s-1;break;case"center":case"center-odd":i=Math.floor((s-1)/2);break;case"center-even":i=Math.floor((s-2)/2);break;default:i=0;break}return i}function Ps({val:t,max:e,min:n}){return e<n?t:Math.min(Math.max(t,n),e)}function ug({config:t,currentSlide:e,slidesCount:n}){const{snapAlign:r,wrapAround:s,itemsToShow:i=1}=t;let o=e;switch(r){case"center":case"center-odd":o-=(i-1)/2;break;case"center-even":o-=(i-2)/2;break;case"end":o-=i-1;break}return s?o:Ps({val:o,max:n-i,min:0})}function Pc(t){return t?t.reduce((e,n)=>{var r;return n.type===Pe?[...e,...Pc(n.children)]:((r=n.type)===null||r===void 0?void 0:r.name)==="CarouselSlide"?[...e,n]:e},[]):[]}function Os({val:t,max:e,min:n=0}){return t>e?Os({val:t-(e+1),max:e,min:n}):t<n?Os({val:t+(e+1),max:e,min:n}):t}function fg(t,e){let n;return e?function(...r){const s=this;n||(t.apply(s,r),n=!0,setTimeout(()=>n=!1,e))}:t}function dg(t,e){let n;return function(...r){n&&clearTimeout(n),n=setTimeout(()=>{t(...r),n=null},e)}}function hg(t="",e={}){return Object.entries(e).reduce((n,[r,s])=>n.replace(`{${r}}`,String(s)),t)}var pg=Bn({name:"ARIA",setup(){const t=be("config",Ze(Object.assign({},ve))),e=be("currentSlide",te(0)),n=be("slidesCount",te(0));return()=>wt("div",{class:["carousel__liveregion","carousel__sr-only"],"aria-live":"polite","aria-atomic":"true"},hg(t.i18n.itemXofY,{currentSlide:e.value+1,slidesCount:n.value}))}}),Eo=Bn({name:"Carousel",props:wo,setup(t,{slots:e,emit:n,expose:r}){var s;const i=te(null),o=te([]),c=te(0),a=te(0),l=Ze(Object.assign({},ve));let u=Object.assign({},ve),p;const g=te((s=t.modelValue)!==null&&s!==void 0?s:0),v=te(0),T=te(0),A=te(0),D=te(0);let P,k;De("config",l),De("slidesCount",a),De("currentSlide",g),De("maxSlide",A),De("minSlide",D),De("slideWidth",c);function $(){p=Object.assign({},t.breakpoints),u=Object.assign(Object.assign(Object.assign({},u),t),{i18n:Object.assign(Object.assign({},u.i18n),t.i18n),breakpoints:void 0}),z(u)}function x(){if(!p||!Object.keys(p).length)return;const h=Object.keys(p).map(_=>Number(_)).sort((_,b)=>+b-+_);let m=Object.assign({},u);h.some(_=>{const b=window.matchMedia(`(min-width: ${_}px)`).matches;return b&&(m=Object.assign(Object.assign({},m),p[_])),b}),z(m)}function z(h){Object.entries(h).forEach(([m,_])=>l[m]=_)}const ie=dg(()=>{x(),re()},16);function re(){if(!i.value)return;const h=i.value.getBoundingClientRect();c.value=h.width/l.itemsToShow}function V(){a.value<=0||(T.value=Math.ceil((a.value-1)/2),A.value=cg({config:l,slidesCount:a.value}),D.value=lg({config:l,slidesCount:a.value}),l.wrapAround||(g.value=Ps({val:g.value,max:A.value,min:D.value})))}xr(()=>{Cr(()=>re()),setTimeout(()=>re(),1e3),x(),Be(),window.addEventListener("resize",ie,{passive:!0}),n("init")}),qs(()=>{k&&clearTimeout(k),P&&clearInterval(P),window.removeEventListener("resize",ie,{passive:!0})});let U=!1;const Z={x:0,y:0},le={x:0,y:0},ue=Ze({x:0,y:0}),_e=te(!1),Fe=te(!1),Ce=()=>{_e.value=!0},q=()=>{_e.value=!1};function X(h){["INPUT","TEXTAREA","SELECT"].includes(h.target.tagName)||(U=h.type==="touchstart",U||h.preventDefault(),!(!U&&h.button!==0||ce.value)&&(Z.x=U?h.touches[0].clientX:h.clientX,Z.y=U?h.touches[0].clientY:h.clientY,document.addEventListener(U?"touchmove":"mousemove",G,!0),document.addEventListener(U?"touchend":"mouseup",je,!0)))}const G=fg(h=>{Fe.value=!0,le.x=U?h.touches[0].clientX:h.clientX,le.y=U?h.touches[0].clientY:h.clientY;const m=le.x-Z.x,_=le.y-Z.y;ue.y=_,ue.x=m},l.throttle);function je(){const h=l.dir==="rtl"?-1:1,m=Math.sign(ue.x)*.4,_=Math.round(ue.x/c.value+m)*h;if(_&&!U){const b=C=>{C.stopPropagation(),window.removeEventListener("click",b,!0)};window.addEventListener("click",b,!0)}Ae(g.value-_),ue.x=0,ue.y=0,Fe.value=!1,document.removeEventListener(U?"touchmove":"mousemove",G,!0),document.removeEventListener(U?"touchend":"mouseup",je,!0)}function Be(){!l.autoplay||l.autoplay<=0||(P=setInterval(()=>{l.pauseAutoplayOnHover&&_e.value||$e()},l.autoplay))}function xe(){P&&(clearInterval(P),P=null),Be()}const ce=te(!1);function Ae(h){const m=l.wrapAround?h:Ps({val:h,max:A.value,min:D.value});g.value===m||ce.value||(n("slide-start",{slidingToIndex:h,currentSlideIndex:g.value,prevSlideIndex:v.value,slidesCount:a.value}),ce.value=!0,v.value=g.value,g.value=m,k=setTimeout(()=>{if(l.wrapAround){const _=Os({val:m,max:A.value,min:0});_!==g.value&&(g.value=_,n("loop",{currentSlideIndex:g.value,slidingToIndex:h}))}n("update:modelValue",g.value),n("slide-end",{currentSlideIndex:g.value,prevSlideIndex:v.value,slidesCount:a.value}),ce.value=!1,xe()},l.transition))}function $e(){Ae(g.value+l.itemsToScroll)}function ft(){Ae(g.value-l.itemsToScroll)}const pe={slideTo:Ae,next:$e,prev:ft};De("nav",pe),De("isSliding",ce);const y=Oe(()=>ug({config:l,currentSlide:g.value,slidesCount:a.value}));De("slidesToScroll",y);const R=Oe(()=>{const h=l.dir==="rtl"?-1:1,m=y.value*c.value*h;return{transform:`translateX(${ue.x-m}px)`,transition:`${ce.value?l.transition:0}ms`,margin:l.wrapAround?`0 -${a.value*c.value}px`:"",width:"100%"}});function S(){$(),x(),V(),re(),xe()}Object.keys(wo).forEach(h=>{["modelValue"].includes(h)||Tt(()=>t[h],S)}),Tt(()=>t.modelValue,h=>{h!==g.value&&Ae(Number(h))}),Tt(a,V),n("before-init"),$();const M={config:l,slidesCount:a,slideWidth:c,next:$e,prev:ft,slideTo:Ae,currentSlide:g,maxSlide:A,minSlide:D,middleSlide:T};r({updateBreakpointsConfigs:x,updateSlidesData:V,updateSlideWidth:re,initDefaultConfigs:$,restartCarousel:S,slideTo:Ae,next:$e,prev:ft,nav:pe,data:M});const K=e.default||e.slides,f=e.addons,d=Ze(M);return()=>{const h=Pc(K==null?void 0:K(d)),m=(f==null?void 0:f(d))||[];h.forEach((E,I)=>E.props.index=I);let _=h;if(l.wrapAround){const E=h.map((w,N)=>Pt(w,{index:-h.length+N,isClone:!0,key:`clone-before-${N}`})),I=h.map((w,N)=>Pt(w,{index:h.length+N,isClone:!0,key:`clone-after-${N}`}));_=[...E,...h,...I]}o.value=h,a.value=Math.max(h.length,1);const b=wt("ol",{class:"carousel__track",style:R.value,onMousedownCapture:l.mouseDrag?X:null,onTouchstartPassiveCapture:l.touchDrag?X:null},_),C=wt("div",{class:"carousel__viewport"},b);return wt("section",{ref:i,class:{carousel:!0,"is-sliding":ce.value,"is-dragging":Fe.value,"is-hover":_e.value,"carousel--rtl":l.dir==="rtl"},dir:l.dir,"aria-label":l.i18n.ariaGallery,tabindex:"0",onMouseenter:Ce,onMouseleave:q},[C,m,wt(pg)])}}}),Io;(function(t){t.arrowUp="arrowUp",t.arrowDown="arrowDown",t.arrowRight="arrowRight",t.arrowLeft="arrowLeft"})(Io||(Io={}));var So=Bn({name:"CarouselSlide",props:{index:{type:Number,default:1},isClone:{type:Boolean,default:!1}},setup(t,{slots:e}){const n=be("config",Ze(Object.assign({},ve))),r=be("currentSlide",te(0)),s=be("slidesToScroll",te(0)),i=be("isSliding",te(!1)),o=()=>t.index===r.value,c=()=>t.index===r.value-1,a=()=>t.index===r.value+1,l=()=>{const u=Math.floor(s.value),p=Math.ceil(s.value+n.itemsToShow-1);return t.index>=u&&t.index<=p};return()=>{var u;return wt("li",{style:{width:`${100/n.itemsToShow}%`},class:{carousel__slide:!0,"carousel__slide--clone":t.isClone,"carousel__slide--visible":l(),"carousel__slide--active":o(),"carousel__slide--prev":c(),"carousel__slide--next":a(),"carousel__slide--sliding":i.value},"aria-hidden":!l()},(u=e.default)===null||u===void 0?void 0:u.call(e))}}});const gg={class:"wrap w-full mx-auto"},mg={class:"wrapCarousel h-1/2 bg-white"},_g=["src"],vg={class:"wrapCarousel h-1/2 bg-white"},yg=["src"],bg={__name:"HelloWorld",setup(t){const e=te(["images/01.jpg","images/02.jpg","images/03.jpg","images/04.jpg"]),n=te(["images/03.jpg","images/04.jpg","images/01.jpg","images/02.jpg"]);return(r,s)=>(Te(),Ue("div",gg,[fe("div",mg,[he(Le(Eo),{class:"myCarouselOne h-full",transition:700,autoplay:3e3,"wrap-around":!0},{default:bn(()=>[(Te(!0),Ue(Pe,null,fs(e.value,i=>(Te(),Li(Le(So),{class:"myCarouselList",key:i},{default:bn(()=>[fe("img",{class:"h-full",src:i,alt:"model"},null,8,_g)]),_:2},1024))),128))]),_:1})]),fe("div",vg,[he(Le(Eo),{class:"myCarouselTwo h-full",transition:700,autoplay:3e3,"wrap-around":!0},{default:bn(()=>[(Te(!0),Ue(Pe,null,fs(n.value,i=>(Te(),Li(Le(So),{class:"myCarouselList",key:i},{default:bn(()=>[fe("img",{class:"h-full",src:i,alt:"model"},null,8,yg)]),_:2},1024))),128))]),_:1})])]))}},wg=Wt(bg,[["__scopeId","data-v-23327184"]]),Eg={class:"productContainer w-full"},Ig={class:"productWrap w-full lg:flex flex-wrap"},Sg={class:"name absolute top-0 right-0 text-base px-4 py-2"},Tg=["src"],Cg={class:"date absolute bottom-0 left-0 text-base px-4 py-2"},Ag={__name:"NewModel",setup(t){const e=te([{image:"images/05.jpg",name:"699-05",date:"2023.09"},{image:"images/06.jpg",name:"778C-DGF",date:"2023.05"},{image:"images/07.jpg",name:"944C-BUV",date:"2023.02"},{image:"images/08.jpg",name:"3613-04RD",date:"2022.11"},{image:"images/09.jpg",name:"5489N-24",date:"2022.06"},{image:"images/10.jpg",name:"200306ET",date:"2022.05"},{image:"images/11.jpg",name:"E777-30CM",date:"2022.02"},{image:"images/12.jpg",name:"E894-15",date:"2022.01"},{image:"images/13.jpg",name:"E895-15",date:"2021.08"},{image:"images/14.jpg",name:"E439WH-4",date:"2021.05"},{image:"images/15.jpg",name:"E617CO-07",date:"2021.02"},{image:"images/16.jpg",name:"E776-04",date:"2021.01"}]);return(n,r)=>(Te(),Ue("div",Eg,[fe("ul",Ig,[(Te(!0),Ue(Pe,null,fs(e.value,s=>(Te(),Ue("li",{class:"productList relative w-full lg:w-1/2 xl:w-1/3 hover:cursor-pointer",key:s},[fe("div",Sg,_i(s.name),1),fe("img",{class:"list w-full p-14",src:s.image,alt:"model"},null,8,Tg),fe("div",Cg,_i(s.date),1)]))),128))])]))}},Rg=Wt(Ag,[["__scopeId","data-v-64fe31bc"]]),Pg=t=>(Pr("data-v-70c1898c"),t=t(),Or(),t),Og=Pg(()=>fe("a",{href:"https://github.com/tangtang1b1b",target:"_blank",class:"text-yellow-300"},"Github",-1)),kg={__name:"HamberView",setup(t){const e=Rc();return(n,r)=>(Te(),Ue("div",{class:Ut(["maskContainer fixed flex flex-col justify-center items-center bg-black z-20 w-full h-full",{isClick:Le(e).isClick}])},[fe("p",{class:Ut(["text-white w-full text-4xl text-center py-5",{isClick:Le(e).isClick}])},"Hi ~ I'm Eric",2),fe("p",{class:Ut(["text-white w-screen text-4xl text-center origin-center py-10",{isClick:Le(e).isClick}])},[vs("See my "),Og,vs(" here")],2)],2))}},xg=Wt(kg,[["__scopeId","data-v-70c1898c"]]),Ng=t=>(Pr("data-v-27cb5f2f"),t=t(),Or(),t),Mg={class:"BannerContainer"},Dg=Ng(()=>fe("div",{class:"modelTitle flex justify-center items-center text-2xl font-bold border-b-black border-2"},"NEW MODEL",-1)),Lg={__name:"App",setup(t){return(e,n)=>(Te(),Ue(Pe,null,[fe("div",Mg,[he(xg),he(ng),he(wg),he(ag),Dg]),he(Rg)],64))}},Ug=Wt(Lg,[["__scopeId","data-v-27cb5f2f"]]);/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Gt=typeof window<"u";function jg(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Q=Object.assign;function rs(t,e){const n={};for(const r in e){const s=e[r];n[r]=qe(s)?s.map(t):t(s)}return n}const Cn=()=>{},qe=Array.isArray,Fg=/\/$/,Bg=t=>t.replace(Fg,"");function ss(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Wg(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function $g(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function To(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Hg(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&cn(e.matched[r],n.matched[s])&&Oc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function cn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Oc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Vg(t[n],e[n]))return!1;return!0}function Vg(t,e){return qe(t)?Co(t,e):qe(e)?Co(e,t):t===e}function Co(t,e){return qe(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Wg(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var Fn;(function(t){t.pop="pop",t.push="push"})(Fn||(Fn={}));var An;(function(t){t.back="back",t.forward="forward",t.unknown=""})(An||(An={}));function zg(t){if(!t)if(Gt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Bg(t)}const Kg=/^[^#]+#/;function qg(t,e){return t.replace(Kg,"#")+e}function Gg(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Br=()=>({left:window.pageXOffset,top:window.pageYOffset});function Jg(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Gg(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ao(t,e){return(history.state?history.state.position-e:-1)+t}const ks=new Map;function Yg(t,e){ks.set(t,e)}function Xg(t){const e=ks.get(t);return ks.delete(t),e}let Qg=()=>location.protocol+"//"+location.host;function kc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),To(a,"")}return To(n,t)+r+s}function Zg(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const v=kc(t,location),T=n.value,A=e.value;let D=0;if(g){if(n.value=v,e.value=g,o&&o===T){o=null;return}D=A?g.position-A.position:0}else r(v);s.forEach(P=>{P(n.value,T,{delta:D,type:Fn.pop,direction:D?D>0?An.forward:An.back:An.unknown})})};function a(){o=n.value}function l(g){s.push(g);const v=()=>{const T=s.indexOf(g);T>-1&&s.splice(T,1)};return i.push(v),v}function u(){const{history:g}=window;g.state&&g.replaceState(Q({},g.state,{scroll:Br()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:p}}function Ro(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Br():null}}function em(t){const{history:e,location:n}=window,r={value:kc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+a:Qg()+t+a;try{e[u?"replaceState":"pushState"](l,"",g),s.value=l}catch(v){console.error(v),n[u?"replace":"assign"](g)}}function o(a,l){const u=Q({},e.state,Ro(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=Q({},s.value,e.state,{forward:a,scroll:Br()});i(u.current,u,!0);const p=Q({},Ro(r.value,a,null),{position:u.position+1},l);i(a,p,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function tm(t){t=zg(t);const e=em(t),n=Zg(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:qg.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function nm(t){return typeof t=="string"||t&&typeof t=="object"}function xc(t){return typeof t=="string"||typeof t=="symbol"}const pt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Nc=Symbol("");var Po;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Po||(Po={}));function ln(t,e){return Q(new Error,{type:t,[Nc]:!0},e)}function rt(t,e){return t instanceof Error&&Nc in t&&(e==null||!!(t.type&e))}const Oo="[^/]+?",rm={sensitive:!1,strict:!1,start:!0,end:!0},sm=/[.+*?^${}()[\]/\\]/g;function im(t,e){const n=Q({},rm,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let p=0;p<l.length;p++){const g=l[p];let v=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(sm,"\\$&"),v+=40;else if(g.type===1){const{value:T,repeatable:A,optional:D,regexp:P}=g;i.push({name:T,repeatable:A,optional:D});const k=P||Oo;if(k!==Oo){v+=10;try{new RegExp(`(${k})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${T}" (${k}): `+x.message)}}let $=A?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;p||($=D&&l.length<2?`(?:/${$})`:"/"+$),D&&($+="?"),s+=$,v+=20,D&&(v+=-8),A&&(v+=-20),k===".*"&&(v+=-50)}u.push(v)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),p={};if(!u)return null;for(let g=1;g<u.length;g++){const v=u[g]||"",T=i[g-1];p[T.name]=v&&T.repeatable?v.split("/"):v}return p}function a(l){let u="",p=!1;for(const g of t){(!p||!u.endsWith("/"))&&(u+="/"),p=!1;for(const v of g)if(v.type===0)u+=v.value;else if(v.type===1){const{value:T,repeatable:A,optional:D}=v,P=T in l?l[T]:"";if(qe(P)&&!A)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const k=qe(P)?P.join("/"):P;if(!k)if(D)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):p=!0);else throw new Error(`Missing required param "${T}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function om(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function am(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=om(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ko(r))return 1;if(ko(s))return-1}return s.length-r.length}function ko(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const cm={type:0,value:""},lm=/[a-zA-Z0-9_]/;function um(t){if(!t)return[[]];if(t==="/")return[[cm]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${l}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function p(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function g(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&p(),o()):a===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:a==="("?n=2:lm.test(a)?g():(p(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:p(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),p(),o(),s}function fm(t,e,n){const r=im(um(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function dm(t,e){const n=[],r=new Map;e=Mo({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,p,g){const v=!g,T=hm(u);T.aliasOf=g&&g.record;const A=Mo(e,u),D=[T];if("alias"in u){const $=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of $)D.push(Q({},T,{components:g?g.record.components:T.components,path:x,aliasOf:g?g.record:T}))}let P,k;for(const $ of D){const{path:x}=$;if(p&&x[0]!=="/"){const z=p.record.path,ie=z[z.length-1]==="/"?"":"/";$.path=p.record.path+(x&&ie+x)}if(P=fm($,p,A),g?g.alias.push(P):(k=k||P,k!==P&&k.alias.push(P),v&&u.name&&!No(P)&&o(u.name)),T.children){const z=T.children;for(let ie=0;ie<z.length;ie++)i(z[ie],P,g&&g.children[ie])}g=g||P,(P.record.components&&Object.keys(P.record.components).length||P.record.name||P.record.redirect)&&a(P)}return k?()=>{o(k)}:Cn}function o(u){if(xc(u)){const p=r.get(u);p&&(r.delete(u),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(u);p>-1&&(n.splice(p,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return n}function a(u){let p=0;for(;p<n.length&&am(u,n[p])>=0&&(u.record.path!==n[p].record.path||!Mc(u,n[p]));)p++;n.splice(p,0,u),u.record.name&&!No(u)&&r.set(u.record.name,u)}function l(u,p){let g,v={},T,A;if("name"in u&&u.name){if(g=r.get(u.name),!g)throw ln(1,{location:u});A=g.record.name,v=Q(xo(p.params,g.keys.filter(k=>!k.optional).map(k=>k.name)),u.params&&xo(u.params,g.keys.map(k=>k.name))),T=g.stringify(v)}else if("path"in u)T=u.path,g=n.find(k=>k.re.test(T)),g&&(v=g.parse(T),A=g.record.name);else{if(g=p.name?r.get(p.name):n.find(k=>k.re.test(p.path)),!g)throw ln(1,{location:u,currentLocation:p});A=g.record.name,v=Q({},p.params,u.params),T=g.stringify(v)}const D=[];let P=g;for(;P;)D.unshift(P.record),P=P.parent;return{name:A,path:T,params:v,matched:D,meta:gm(D)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function xo(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function hm(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:pm(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function pm(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function No(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function gm(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function Mo(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Mc(t,e){return e.children.some(n=>n===t||Mc(t,n))}const Dc=/#/g,mm=/&/g,_m=/\//g,vm=/=/g,ym=/\?/g,Lc=/\+/g,bm=/%5B/g,wm=/%5D/g,Uc=/%5E/g,Em=/%60/g,jc=/%7B/g,Im=/%7C/g,Fc=/%7D/g,Sm=/%20/g;function ui(t){return encodeURI(""+t).replace(Im,"|").replace(bm,"[").replace(wm,"]")}function Tm(t){return ui(t).replace(jc,"{").replace(Fc,"}").replace(Uc,"^")}function xs(t){return ui(t).replace(Lc,"%2B").replace(Sm,"+").replace(Dc,"%23").replace(mm,"%26").replace(Em,"`").replace(jc,"{").replace(Fc,"}").replace(Uc,"^")}function Cm(t){return xs(t).replace(vm,"%3D")}function Am(t){return ui(t).replace(Dc,"%23").replace(ym,"%3F")}function Rm(t){return t==null?"":Am(t).replace(_m,"%2F")}function yr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Pm(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Lc," "),o=i.indexOf("="),c=yr(o<0?i:i.slice(0,o)),a=o<0?null:yr(i.slice(o+1));if(c in e){let l=e[c];qe(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function Do(t){let e="";for(let n in t){const r=t[n];if(n=Cm(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(qe(r)?r.map(i=>i&&xs(i)):[r&&xs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Om(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=qe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const km=Symbol(""),Lo=Symbol(""),fi=Symbol(""),Bc=Symbol(""),Ns=Symbol("");function vn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function _t(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=p=>{p===!1?c(ln(4,{from:n,to:e})):p instanceof Error?c(p):nm(p)?c(ln(2,{from:e,to:p})):(i&&r.enterCallbacks[s]===i&&typeof p=="function"&&i.push(p),o())},l=t.call(r&&r.instances[s],e,n,a);let u=Promise.resolve(l);t.length<3&&(u=u.then(a)),u.catch(p=>c(p))})}function is(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(xm(c)){const l=(c.__vccOpts||c)[e];l&&s.push(_t(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=jg(l)?l.default:l;i.components[o]=u;const g=(u.__vccOpts||u)[e];return g&&_t(g,n,r,i,o)()}))}}return s}function xm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Uo(t){const e=be(fi),n=be(Bc),r=Oe(()=>e.resolve(Le(t.to))),s=Oe(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],p=n.matched;if(!u||!p.length)return-1;const g=p.findIndex(cn.bind(null,u));if(g>-1)return g;const v=jo(a[l-2]);return l>1&&jo(u)===v&&p[p.length-1].path!==v?p.findIndex(cn.bind(null,a[l-2])):g}),i=Oe(()=>s.value>-1&&Lm(n.params,r.value.params)),o=Oe(()=>s.value>-1&&s.value===n.matched.length-1&&Oc(n.params,r.value.params));function c(a={}){return Dm(a)?e[Le(t.replace)?"replace":"push"](Le(t.to)).catch(Cn):Promise.resolve()}return{route:r,href:Oe(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const Nm=Bn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Uo,setup(t,{slots:e}){const n=Ze(Uo(t)),{options:r}=be(fi),s=Oe(()=>({[Fo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Fo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:wt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Mm=Nm;function Dm(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Lm(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!qe(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function jo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Fo=(t,e,n)=>t??e??n,Um=Bn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=be(Ns),s=Oe(()=>t.route||r.value),i=be(Lo,0),o=Oe(()=>{let l=Le(i);const{matched:u}=s.value;let p;for(;(p=u[l])&&!p.components;)l++;return l}),c=Oe(()=>s.value.matched[o.value]);De(Lo,Oe(()=>o.value+1)),De(km,c),De(Ns,s);const a=te();return Tt(()=>[a.value,c.value,t.name],([l,u,p],[g,v,T])=>{u&&(u.instances[p]=l,v&&v!==u&&l&&l===g&&(u.leaveGuards.size||(u.leaveGuards=v.leaveGuards),u.updateGuards.size||(u.updateGuards=v.updateGuards))),l&&u&&(!v||!cn(u,v)||!g)&&(u.enterCallbacks[p]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,p=c.value,g=p&&p.components[u];if(!g)return Bo(n.default,{Component:g,route:l});const v=p.props[u],T=v?v===!0?l.params:typeof v=="function"?v(l):v:null,D=wt(g,Q({},T,e,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(p.instances[u]=null)},ref:a}));return Bo(n.default,{Component:D,route:l})||D}}});function Bo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jm=Um;function Fm(t){const e=dm(t.routes,t),n=t.parseQuery||Pm,r=t.stringifyQuery||Do,s=t.history,i=vn(),o=vn(),c=vn(),a=El(pt);let l=pt;Gt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=rs.bind(null,y=>""+y),p=rs.bind(null,Rm),g=rs.bind(null,yr);function v(y,R){let S,M;return xc(y)?(S=e.getRecordMatcher(y),M=R):M=y,e.addRoute(M,S)}function T(y){const R=e.getRecordMatcher(y);R&&e.removeRoute(R)}function A(){return e.getRoutes().map(y=>y.record)}function D(y){return!!e.getRecordMatcher(y)}function P(y,R){if(R=Q({},R||a.value),typeof y=="string"){const h=ss(n,y,R.path),m=e.resolve({path:h.path},R),_=s.createHref(h.fullPath);return Q(h,m,{params:g(m.params),hash:yr(h.hash),redirectedFrom:void 0,href:_})}let S;if("path"in y)S=Q({},y,{path:ss(n,y.path,R.path).path});else{const h=Q({},y.params);for(const m in h)h[m]==null&&delete h[m];S=Q({},y,{params:p(h)}),R.params=p(R.params)}const M=e.resolve(S,R),K=y.hash||"";M.params=u(g(M.params));const f=$g(r,Q({},y,{hash:Tm(K),path:M.path})),d=s.createHref(f);return Q({fullPath:f,hash:K,query:r===Do?Om(y.query):y.query||{}},M,{redirectedFrom:void 0,href:d})}function k(y){return typeof y=="string"?ss(n,y,a.value.path):Q({},y)}function $(y,R){if(l!==y)return ln(8,{from:R,to:y})}function x(y){return re(y)}function z(y){return x(Q(k(y),{replace:!0}))}function ie(y){const R=y.matched[y.matched.length-1];if(R&&R.redirect){const{redirect:S}=R;let M=typeof S=="function"?S(y):S;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=k(M):{path:M},M.params={}),Q({query:y.query,hash:y.hash,params:"path"in M?{}:y.params},M)}}function re(y,R){const S=l=P(y),M=a.value,K=y.state,f=y.force,d=y.replace===!0,h=ie(S);if(h)return re(Q(k(h),{state:typeof h=="object"?Q({},K,h.state):K,force:f,replace:d}),R||S);const m=S;m.redirectedFrom=R;let _;return!f&&Hg(r,M,S)&&(_=ln(16,{to:m,from:M}),xe(M,M,!0,!1)),(_?Promise.resolve(_):Z(m,M)).catch(b=>rt(b)?rt(b,2)?b:Be(b):G(b,m,M)).then(b=>{if(b){if(rt(b,2))return re(Q({replace:d},k(b.to),{state:typeof b.to=="object"?Q({},K,b.to.state):K,force:f}),R||m)}else b=ue(m,M,!0,d,K);return le(m,M,b),b})}function V(y,R){const S=$(y,R);return S?Promise.reject(S):Promise.resolve()}function U(y){const R=$e.values().next().value;return R&&typeof R.runWithContext=="function"?R.runWithContext(y):y()}function Z(y,R){let S;const[M,K,f]=Bm(y,R);S=is(M.reverse(),"beforeRouteLeave",y,R);for(const h of M)h.leaveGuards.forEach(m=>{S.push(_t(m,y,R))});const d=V.bind(null,y,R);return S.push(d),pe(S).then(()=>{S=[];for(const h of i.list())S.push(_t(h,y,R));return S.push(d),pe(S)}).then(()=>{S=is(K,"beforeRouteUpdate",y,R);for(const h of K)h.updateGuards.forEach(m=>{S.push(_t(m,y,R))});return S.push(d),pe(S)}).then(()=>{S=[];for(const h of f)if(h.beforeEnter)if(qe(h.beforeEnter))for(const m of h.beforeEnter)S.push(_t(m,y,R));else S.push(_t(h.beforeEnter,y,R));return S.push(d),pe(S)}).then(()=>(y.matched.forEach(h=>h.enterCallbacks={}),S=is(f,"beforeRouteEnter",y,R),S.push(d),pe(S))).then(()=>{S=[];for(const h of o.list())S.push(_t(h,y,R));return S.push(d),pe(S)}).catch(h=>rt(h,8)?h:Promise.reject(h))}function le(y,R,S){c.list().forEach(M=>U(()=>M(y,R,S)))}function ue(y,R,S,M,K){const f=$(y,R);if(f)return f;const d=R===pt,h=Gt?history.state:{};S&&(M||d?s.replace(y.fullPath,Q({scroll:d&&h&&h.scroll},K)):s.push(y.fullPath,K)),a.value=y,xe(y,R,S,d),Be()}let _e;function Fe(){_e||(_e=s.listen((y,R,S)=>{if(!ft.listening)return;const M=P(y),K=ie(M);if(K){re(Q(K,{replace:!0}),M).catch(Cn);return}l=M;const f=a.value;Gt&&Yg(Ao(f.fullPath,S.delta),Br()),Z(M,f).catch(d=>rt(d,12)?d:rt(d,2)?(re(d.to,M).then(h=>{rt(h,20)&&!S.delta&&S.type===Fn.pop&&s.go(-1,!1)}).catch(Cn),Promise.reject()):(S.delta&&s.go(-S.delta,!1),G(d,M,f))).then(d=>{d=d||ue(M,f,!1),d&&(S.delta&&!rt(d,8)?s.go(-S.delta,!1):S.type===Fn.pop&&rt(d,20)&&s.go(-1,!1)),le(M,f,d)}).catch(Cn)}))}let Ce=vn(),q=vn(),X;function G(y,R,S){Be(y);const M=q.list();return M.length?M.forEach(K=>K(y,R,S)):console.error(y),Promise.reject(y)}function je(){return X&&a.value!==pt?Promise.resolve():new Promise((y,R)=>{Ce.add([y,R])})}function Be(y){return X||(X=!y,Fe(),Ce.list().forEach(([R,S])=>y?S(y):R()),Ce.reset()),y}function xe(y,R,S,M){const{scrollBehavior:K}=t;if(!Gt||!K)return Promise.resolve();const f=!S&&Xg(Ao(y.fullPath,0))||(M||!S)&&history.state&&history.state.scroll||null;return Cr().then(()=>K(y,R,f)).then(d=>d&&Jg(d)).catch(d=>G(d,y,R))}const ce=y=>s.go(y);let Ae;const $e=new Set,ft={currentRoute:a,listening:!0,addRoute:v,removeRoute:T,hasRoute:D,getRoutes:A,resolve:P,options:t,push:x,replace:z,go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:q.add,isReady:je,install(y){const R=this;y.component("RouterLink",Mm),y.component("RouterView",jm),y.config.globalProperties.$router=R,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Le(a)}),Gt&&!Ae&&a.value===pt&&(Ae=!0,x(s.location).catch(K=>{}));const S={};for(const K in pt)Object.defineProperty(S,K,{get:()=>a.value[K],enumerable:!0});y.provide(fi,R),y.provide(Bc,aa(S)),y.provide(Ns,a);const M=y.unmount;$e.add(y),y.unmount=function(){$e.delete(y),$e.size<1&&(l=pt,_e&&_e(),_e=null,a.value=pt,Ae=!1,X=!1),M()}}};function pe(y){return y.reduce((R,S)=>R.then(()=>U(S)),Promise.resolve())}return ft}function Bm(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>cn(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>cn(l,a))||s.push(a))}return[n,r,s]}const $m=Fm({history:tm(),routes:[]}),di=rf(Ug);di.use($m);di.use(af());di.mount("#app");
