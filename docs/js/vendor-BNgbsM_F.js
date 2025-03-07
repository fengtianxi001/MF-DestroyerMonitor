/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const St={},Kr=[],jn=()=>{},Eg=()=>!1,Na=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),yu=n=>n.startsWith("onUpdate:"),Wt=Object.assign,Su=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Tg=Object.prototype.hasOwnProperty,gt=(n,e)=>Tg.call(n,e),Ke=Array.isArray,$r=n=>Ua(n)==="[object Map]",Xd=n=>Ua(n)==="[object Set]",Qe=n=>typeof n=="function",Pt=n=>typeof n=="string",Ai=n=>typeof n=="symbol",wt=n=>n!==null&&typeof n=="object",jd=n=>(wt(n)||Qe(n))&&Qe(n.then)&&Qe(n.catch),Yd=Object.prototype.toString,Ua=n=>Yd.call(n),bg=n=>Ua(n).slice(8,-1),qd=n=>Ua(n)==="[object Object]",Mu=n=>Pt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Xs=xu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ag=/-(\w)/g,Tn=Oa(n=>n.replace(Ag,(e,t)=>t?t.toUpperCase():"")),wg=/\B([A-Z])/g,Sr=Oa(n=>n.replace(wg,"-$1").toLowerCase()),Fa=Oa(n=>n.charAt(0).toUpperCase()+n.slice(1)),nl=Oa(n=>n?`on${Fa(n)}`:""),Gi=(n,e)=>!Object.is(n,e),il=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Kd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Rg=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Cg=n=>{const e=Pt(n)?Number(n):NaN;return isNaN(e)?n:e};let lh;const Ba=()=>lh||(lh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Eu(n){if(Ke(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=Pt(i)?Dg(i):Eu(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Pt(n)||wt(n))return n}const Pg=/;(?![^(]*\))/g,Lg=/:([^]+)/,Ig=/\/\*[^]*?\*\//g;function Dg(n){const e={};return n.replace(Ig,"").split(Pg).forEach(t=>{if(t){const i=t.split(Lg);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Zr(n){let e="";if(Pt(n))e=n;else if(Ke(n))for(let t=0;t<n.length;t++){const i=Zr(n[t]);i&&(e+=i+" ")}else if(wt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Ng="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ug=xu(Ng);function $d(n){return!!n||n===""}const Zd=n=>!!(n&&n.__v_isRef===!0),sc=n=>Pt(n)?n:n==null?"":Ke(n)||wt(n)&&(n.toString===Yd||!Qe(n.toString))?Zd(n)?sc(n.value):JSON.stringify(n,Jd,2):String(n),Jd=(n,e)=>Zd(e)?Jd(n,e.value):$r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[rl(i,s)+" =>"]=r,t),{})}:Xd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>rl(t))}:Ai(e)?rl(e):wt(e)&&!Ke(e)&&!qd(e)?String(e):e,rl=(n,e="")=>{var t;return Ai(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gn;class Og{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=gn,!e&&gn&&(this.index=(gn.scopes||(gn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=gn;try{return gn=this,e()}finally{gn=t}}}on(){gn=this}off(){gn=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Fg(){return gn}let Et;const sl=new WeakSet;class Qd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,gn&&gn.active&&gn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,sl.has(this)&&(sl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||tp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ch(this),np(this);const e=Et,t=Nn;Et=this,Nn=!0;try{return this.fn()}finally{ip(this),Et=e,Nn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Au(e);this.deps=this.depsTail=void 0,ch(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?sl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){oc(this)&&this.run()}get dirty(){return oc(this)}}let ep=0,js,Ys;function tp(n,e=!1){if(n.flags|=8,e){n.next=Ys,Ys=n;return}n.next=js,js=n}function Tu(){ep++}function bu(){if(--ep>0)return;if(Ys){let e=Ys;for(Ys=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;js;){let e=js;for(js=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function np(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ip(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Au(i),Bg(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function oc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(rp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function rp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===no))return;n.globalVersion=no;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!oc(n)){n.flags&=-3;return}const t=Et,i=Nn;Et=n,Nn=!0;try{np(n);const r=n.fn(n._value);(e.version===0||Gi(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Et=t,Nn=i,ip(n),n.flags&=-3}}function Au(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Au(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Bg(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Nn=!0;const sp=[];function qi(){sp.push(Nn),Nn=!1}function Ki(){const n=sp.pop();Nn=n===void 0?!0:n}function ch(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Et;Et=void 0;try{e()}finally{Et=t}}}let no=0;class kg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Et||!Nn||Et===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Et)t=this.activeLink=new kg(Et,this),Et.deps?(t.prevDep=Et.depsTail,Et.depsTail.nextDep=t,Et.depsTail=t):Et.deps=Et.depsTail=t,op(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Et.depsTail,t.nextDep=void 0,Et.depsTail.nextDep=t,Et.depsTail=t,Et.deps===t&&(Et.deps=i)}return t}trigger(e){this.version++,no++,this.notify(e)}notify(e){Tu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bu()}}}function op(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)op(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const _a=new WeakMap,_r=Symbol(""),ac=Symbol(""),io=Symbol("");function Jt(n,e,t){if(Nn&&Et){let i=_a.get(n);i||_a.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new wu),r.map=i,r.key=t),r.track()}}function mi(n,e,t,i,r,s){const o=_a.get(n);if(!o){no++;return}const a=l=>{l&&l.trigger()};if(Tu(),e==="clear")o.forEach(a);else{const l=Ke(n),c=l&&Mu(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===io||!Ai(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(io)),e){case"add":l?c&&a(o.get("length")):(a(o.get(_r)),$r(n)&&a(o.get(ac)));break;case"delete":l||(a(o.get(_r)),$r(n)&&a(o.get(ac)));break;case"set":$r(n)&&a(o.get(_r));break}}bu()}function Hg(n,e){const t=_a.get(n);return t&&t.get(e)}function Ar(n){const e=dt(n);return e===n?e:(Jt(e,"iterate",io),Un(n)?e:e.map(rn))}function Ru(n){return Jt(n=dt(n),"iterate",io),n}const zg={__proto__:null,[Symbol.iterator](){return ol(this,Symbol.iterator,rn)},concat(...n){return Ar(this).concat(...n.map(e=>Ke(e)?Ar(e):e))},entries(){return ol(this,"entries",n=>(n[1]=rn(n[1]),n))},every(n,e){return ii(this,"every",n,e,void 0,arguments)},filter(n,e){return ii(this,"filter",n,e,t=>t.map(rn),arguments)},find(n,e){return ii(this,"find",n,e,rn,arguments)},findIndex(n,e){return ii(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ii(this,"findLast",n,e,rn,arguments)},findLastIndex(n,e){return ii(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ii(this,"forEach",n,e,void 0,arguments)},includes(...n){return al(this,"includes",n)},indexOf(...n){return al(this,"indexOf",n)},join(n){return Ar(this).join(n)},lastIndexOf(...n){return al(this,"lastIndexOf",n)},map(n,e){return ii(this,"map",n,e,void 0,arguments)},pop(){return ws(this,"pop")},push(...n){return ws(this,"push",n)},reduce(n,...e){return uh(this,"reduce",n,e)},reduceRight(n,...e){return uh(this,"reduceRight",n,e)},shift(){return ws(this,"shift")},some(n,e){return ii(this,"some",n,e,void 0,arguments)},splice(...n){return ws(this,"splice",n)},toReversed(){return Ar(this).toReversed()},toSorted(n){return Ar(this).toSorted(n)},toSpliced(...n){return Ar(this).toSpliced(...n)},unshift(...n){return ws(this,"unshift",n)},values(){return ol(this,"values",rn)}};function ol(n,e,t){const i=Ru(n),r=i[e]();return i!==n&&!Un(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Vg=Array.prototype;function ii(n,e,t,i,r,s){const o=Ru(n),a=o!==n&&!Un(n),l=o[e];if(l!==Vg[e]){const h=l.apply(n,s);return a?rn(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,rn(h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&r?r(u):u}function uh(n,e,t,i){const r=Ru(n);let s=t;return r!==n&&(Un(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,rn(a),l,n)}),r[e](s,...i)}function al(n,e,t){const i=dt(n);Jt(i,"iterate",io);const r=i[e](...t);return(r===-1||r===!1)&&Iu(t[0])?(t[0]=dt(t[0]),i[e](...t)):r}function ws(n,e,t=[]){qi(),Tu();const i=dt(n)[e].apply(n,t);return bu(),Ki(),i}const Gg=xu("__proto__,__v_isRef,__isVue"),ap=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ai));function Wg(n){Ai(n)||(n=String(n));const e=dt(this);return Jt(e,"has",n),e.hasOwnProperty(n)}class lp{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?e_:fp:s?hp:up).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ke(e);if(!r){let l;if(o&&(l=zg[t]))return l;if(t==="hasOwnProperty")return Wg}const a=Reflect.get(e,t,qt(e)?e:i);return(Ai(t)?ap.has(t):Gg(t))||(r||Jt(e,"get",t),s)?a:qt(a)?o&&Mu(t)?a:a.value:wt(a)?r?Pu(a):ka(a):a}}class cp extends lp{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=xr(s);if(!Un(i)&&!xr(i)&&(s=dt(s),i=dt(i)),!Ke(e)&&qt(s)&&!qt(i))return l?!1:(s.value=i,!0)}const o=Ke(e)&&Mu(t)?Number(t)<e.length:gt(e,t),a=Reflect.set(e,t,i,qt(e)?e:r);return e===dt(r)&&(o?Gi(i,s)&&mi(e,"set",t,i):mi(e,"add",t,i)),a}deleteProperty(e,t){const i=gt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&mi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Ai(t)||!ap.has(t))&&Jt(e,"has",t),i}ownKeys(e){return Jt(e,"iterate",Ke(e)?"length":_r),Reflect.ownKeys(e)}}class Xg extends lp{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const jg=new cp,Yg=new Xg,qg=new cp(!0);const lc=n=>n,Ao=n=>Reflect.getPrototypeOf(n);function Kg(n,e,t){return function(...i){const r=this.__v_raw,s=dt(r),o=$r(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=r[n](...i),u=t?lc:e?cc:rn;return!e&&Jt(s,"iterate",l?ac:_r),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function wo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function $g(n,e){const t={get(r){const s=this.__v_raw,o=dt(s),a=dt(r);n||(Gi(r,a)&&Jt(o,"get",r),Jt(o,"get",a));const{has:l}=Ao(o),c=e?lc:n?cc:rn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Jt(dt(r),"iterate",_r),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=dt(s),a=dt(r);return n||(Gi(r,a)&&Jt(o,"has",r),Jt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=dt(a),c=e?lc:n?cc:rn;return!n&&Jt(l,"iterate",_r),a.forEach((u,h)=>r.call(s,c(u),c(h),o))}};return Wt(t,n?{add:wo("add"),set:wo("set"),delete:wo("delete"),clear:wo("clear")}:{add(r){!e&&!Un(r)&&!xr(r)&&(r=dt(r));const s=dt(this);return Ao(s).has.call(s,r)||(s.add(r),mi(s,"add",r,r)),this},set(r,s){!e&&!Un(s)&&!xr(s)&&(s=dt(s));const o=dt(this),{has:a,get:l}=Ao(o);let c=a.call(o,r);c||(r=dt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Gi(s,u)&&mi(o,"set",r,s):mi(o,"add",r,s),this},delete(r){const s=dt(this),{has:o,get:a}=Ao(s);let l=o.call(s,r);l||(r=dt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&mi(s,"delete",r,void 0),c},clear(){const r=dt(this),s=r.size!==0,o=r.clear();return s&&mi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Kg(r,n,e)}),t}function Cu(n,e){const t=$g(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(gt(t,r)&&r in i?t:i,r,s)}const Zg={get:Cu(!1,!1)},Jg={get:Cu(!1,!0)},Qg={get:Cu(!0,!1)};const up=new WeakMap,hp=new WeakMap,fp=new WeakMap,e_=new WeakMap;function t_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function n_(n){return n.__v_skip||!Object.isExtensible(n)?0:t_(bg(n))}function ka(n){return xr(n)?n:Lu(n,!1,jg,Zg,up)}function i_(n){return Lu(n,!1,qg,Jg,hp)}function Pu(n){return Lu(n,!0,Yg,Qg,fp)}function Lu(n,e,t,i,r){if(!wt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=n_(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function qs(n){return xr(n)?qs(n.__v_raw):!!(n&&n.__v_isReactive)}function xr(n){return!!(n&&n.__v_isReadonly)}function Un(n){return!!(n&&n.__v_isShallow)}function Iu(n){return n?!!n.__v_raw:!1}function dt(n){const e=n&&n.__v_raw;return e?dt(e):n}function r_(n){return!gt(n,"__v_skip")&&Object.isExtensible(n)&&Kd(n,"__v_skip",!0),n}const rn=n=>wt(n)?ka(n):n,cc=n=>wt(n)?Pu(n):n;function qt(n){return n?n.__v_isRef===!0:!1}function jt(n){return dp(n,!1)}function t1(n){return dp(n,!0)}function dp(n,e){return qt(n)?n:new s_(n,e)}class s_{constructor(e,t){this.dep=new wu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:dt(e),this._value=t?e:rn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Un(e)||xr(e);e=i?e:dt(e),Gi(e,t)&&(this._rawValue=e,this._value=i?e:rn(e),this.dep.trigger())}}function o_(n){return qt(n)?n.value:n}const a_={get:(n,e,t)=>e==="__v_raw"?n:o_(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return qt(r)&&!qt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function pp(n){return qs(n)?n:new Proxy(n,a_)}function l_(n){const e=Ke(n)?new Array(n.length):{};for(const t in n)e[t]=u_(n,t);return e}class c_{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Hg(dt(this._object),this._key)}}function u_(n,e,t){const i=n[e];return qt(i)?i:new c_(n,e,t)}class h_{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new wu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=no-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return tp(this,!0),!0}get value(){const e=this.dep.track();return rp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function f_(n,e,t=!1){let i,r;return Qe(n)?i=n:(i=n.get,r=n.set),new h_(i,r,t)}const Ro={},va=new WeakMap;let cr;function d_(n,e=!1,t=cr){if(t){let i=va.get(t);i||va.set(t,i=[]),i.push(n)}}function p_(n,e,t=St){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=t,c=S=>r?S:Un(S)||r===!1||r===0?gi(S,1):gi(S);let u,h,f,d,g=!1,x=!1;if(qt(n)?(h=()=>n.value,g=Un(n)):qs(n)?(h=()=>c(n),g=!0):Ke(n)?(x=!0,g=n.some(S=>qs(S)||Un(S)),h=()=>n.map(S=>{if(qt(S))return S.value;if(qs(S))return c(S);if(Qe(S))return l?l(S,2):S()})):Qe(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){qi();try{f()}finally{Ki()}}const S=cr;cr=u;try{return l?l(n,3,[d]):n(d)}finally{cr=S}}:h=jn,e&&r){const S=h,H=r===!0?1/0:r;h=()=>gi(S(),H)}const m=Fg(),p=()=>{u.stop(),m&&m.active&&Su(m.effects,u)};if(s&&e){const S=e;e=(...H)=>{S(...H),p()}}let R=x?new Array(n.length).fill(Ro):Ro;const w=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const H=u.run();if(r||g||(x?H.some((O,I)=>Gi(O,R[I])):Gi(H,R))){f&&f();const O=cr;cr=u;try{const I=[H,R===Ro?void 0:x&&R[0]===Ro?[]:R,d];l?l(e,3,I):e(...I),R=H}finally{cr=O}}}else u.run()};return a&&a(w),u=new Qd(h),u.scheduler=o?()=>o(w,!1):w,d=S=>d_(S,!1,u),f=u.onStop=()=>{const S=va.get(u);if(S){if(l)l(S,4);else for(const H of S)H();va.delete(u)}},e?i?w(!0):R=u.run():o?o(w.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function gi(n,e=1/0,t){if(e<=0||!wt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,qt(n))gi(n.value,e,t);else if(Ke(n))for(let i=0;i<n.length;i++)gi(n[i],e,t);else if(Xd(n)||$r(n))n.forEach(i=>{gi(i,e,t)});else if(qd(n)){for(const i in n)gi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&gi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function go(n,e,t,i){try{return i?n(...i):n()}catch(r){Ha(r,e,t)}}function Bn(n,e,t,i){if(Qe(n)){const r=go(n,e,t,i);return r&&jd(r)&&r.catch(s=>{Ha(s,e,t)}),r}if(Ke(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Bn(n[s],e,t,i));return r}}function Ha(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||St;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(s){qi(),go(s,null,10,[n,l,c]),Ki();return}}m_(n,t,r,i,o)}function m_(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const sn=[];let Hn=-1;const Jr=[];let ki=null,Gr=0;const mp=Promise.resolve();let xa=null;function uc(n){const e=xa||mp;return n?e.then(this?n.bind(this):n):e}function g_(n){let e=Hn+1,t=sn.length;for(;e<t;){const i=e+t>>>1,r=sn[i],s=ro(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Du(n){if(!(n.flags&1)){const e=ro(n),t=sn[sn.length-1];!t||!(n.flags&2)&&e>=ro(t)?sn.push(n):sn.splice(g_(e),0,n),n.flags|=1,gp()}}function gp(){xa||(xa=mp.then(vp))}function __(n){Ke(n)?Jr.push(...n):ki&&n.id===-1?ki.splice(Gr+1,0,n):n.flags&1||(Jr.push(n),n.flags|=1),gp()}function hh(n,e,t=Hn+1){for(;t<sn.length;t++){const i=sn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;sn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function _p(n){if(Jr.length){const e=[...new Set(Jr)].sort((t,i)=>ro(t)-ro(i));if(Jr.length=0,ki){ki.push(...e);return}for(ki=e,Gr=0;Gr<ki.length;Gr++){const t=ki[Gr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ki=null,Gr=0}}const ro=n=>n.id==null?n.flags&2?-1:1/0:n.id;function vp(n){try{for(Hn=0;Hn<sn.length;Hn++){const e=sn[Hn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),go(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Hn<sn.length;Hn++){const e=sn[Hn];e&&(e.flags&=-2)}Hn=-1,sn.length=0,_p(),xa=null,(sn.length||Jr.length)&&vp()}}let zt=null,xp=null;function ya(n){const e=zt;return zt=n,xp=n&&n.type.__scopeId||null,e}function hc(n,e=zt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&bh(-1);const s=ya(e);let o;try{o=n(...r)}finally{ya(s),i._d&&bh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function v_(n,e){if(zt===null)return n;const t=Ya(zt),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=St]=e[r];s&&(Qe(s)&&(s={mounted:s,updated:s}),s.deep&&gi(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ji(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(qi(),Bn(l,t,8,[n.el,a,n,e]),Ki())}}const yp=Symbol("_vte"),Sp=n=>n.__isTeleport,Ks=n=>n&&(n.disabled||n.disabled===""),fh=n=>n&&(n.defer||n.defer===""),dh=n=>typeof SVGElement<"u"&&n instanceof SVGElement,ph=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,fc=(n,e)=>{const t=n&&n.to;return Pt(t)?e?e(t):null:t},Mp={name:"Teleport",__isTeleport:!0,process(n,e,t,i,r,s,o,a,l,c){const{mc:u,pc:h,pbc:f,o:{insert:d,querySelector:g,createText:x,createComment:m}}=c,p=Ks(e.props);let{shapeFlag:R,children:w,dynamicChildren:S}=e;if(n==null){const H=e.el=x(""),O=e.anchor=x("");d(H,t,i),d(O,t,i);const I=(T,E)=>{R&16&&(r&&r.isCE&&(r.ce._teleportTarget=T),u(w,T,E,r,s,o,a,l))},V=()=>{const T=e.target=fc(e.props,g),E=Ep(T,e,x,d);T&&(o!=="svg"&&dh(T)?o="svg":o!=="mathml"&&ph(T)&&(o="mathml"),p||(I(T,E),aa(e,!1)))};p&&(I(t,O),aa(e,!0)),fh(e.props)?nn(()=>{V(),e.el.__isMounted=!0},s):V()}else{if(fh(e.props)&&!n.el.__isMounted){nn(()=>{Mp.process(n,e,t,i,r,s,o,a,l,c),delete n.el.__isMounted},s);return}e.el=n.el,e.targetStart=n.targetStart;const H=e.anchor=n.anchor,O=e.target=n.target,I=e.targetAnchor=n.targetAnchor,V=Ks(n.props),T=V?t:O,E=V?H:I;if(o==="svg"||dh(O)?o="svg":(o==="mathml"||ph(O))&&(o="mathml"),S?(f(n.dynamicChildren,S,T,r,s,o,a),Uu(n,e,!0)):l||h(n,e,T,E,r,s,o,a,!1),p)V?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Co(e,t,H,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const F=e.target=fc(e.props,g);F&&Co(e,F,null,c,0)}else V&&Co(e,O,I,c,1);aa(e,p)}},remove(n,e,t,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:h,props:f}=n;if(h&&(r(c),r(u)),s&&r(l),o&16){const d=s||!Ks(f);for(let g=0;g<a.length;g++){const x=a[g];i(x,e,t,d,!!x.dynamicChildren)}}},move:Co,hydrate:x_};function Co(n,e,t,{o:{insert:i},m:r},s=2){s===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,h=s===2;if(h&&i(o,e,t),(!h||Ks(u))&&l&16)for(let f=0;f<c.length;f++)r(c[f],e,t,2);h&&i(a,e,t)}function x_(n,e,t,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},h){const f=e.target=fc(e.props,l);if(f){const d=Ks(e.props),g=f._lpa||f.firstChild;if(e.shapeFlag&16)if(d)e.anchor=h(o(n),e,a(n),t,i,r,s),e.targetStart=g,e.targetAnchor=g&&o(g);else{e.anchor=o(n);let x=g;for(;x;){if(x&&x.nodeType===8){if(x.data==="teleport start anchor")e.targetStart=x;else if(x.data==="teleport anchor"){e.targetAnchor=x,f._lpa=e.targetAnchor&&o(e.targetAnchor);break}}x=o(x)}e.targetAnchor||Ep(f,e,u,c),h(g&&o(g),e,f,t,i,r,s)}aa(e,d)}return e.anchor&&o(e.anchor)}const y_=Mp;function aa(n,e){const t=n.ctx;if(t&&t.ut){let i,r;for(e?(i=n.el,r=n.anchor):(i=n.targetStart,r=n.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function Ep(n,e,t,i){const r=e.targetStart=t(""),s=e.targetAnchor=t("");return r[yp]=s,n&&(i(r,n),i(s,n)),s}const Hi=Symbol("_leaveCb"),Po=Symbol("_enterCb");function S_(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Mr(()=>{n.isMounted=!0}),_o(()=>{n.isUnmounting=!0}),n}const yn=[Function,Array],Tp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yn,onEnter:yn,onAfterEnter:yn,onEnterCancelled:yn,onBeforeLeave:yn,onLeave:yn,onAfterLeave:yn,onLeaveCancelled:yn,onBeforeAppear:yn,onAppear:yn,onAfterAppear:yn,onAppearCancelled:yn},bp=n=>{const e=n.subTree;return e.component?bp(e.component):e},M_={name:"BaseTransition",props:Tp,setup(n,{slots:e}){const t=tm(),i=S_();return()=>{const r=e.default&&Rp(e.default(),!0);if(!r||!r.length)return;const s=Ap(r),o=dt(n),{mode:a}=o;if(i.isLeaving)return ll(s);const l=mh(s);if(!l)return ll(s);let c=dc(l,o,i,t,h=>c=h);l.type!==_n&&so(l,c);let u=t.subTree&&mh(t.subTree);if(u&&u.type!==_n&&!hr(l,u)&&bp(t).type!==_n){let h=dc(u,o,i,t);if(so(u,h),a==="out-in"&&l.type!==_n)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,u=void 0},ll(s);a==="in-out"&&l.type!==_n?h.delayLeave=(f,d,g)=>{const x=wp(i,u);x[String(u.key)]=u,f[Hi]=()=>{d(),f[Hi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Ap(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==_n){e=t;break}}return e}const E_=M_;function wp(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function dc(n,e,t,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:x,onBeforeAppear:m,onAppear:p,onAfterAppear:R,onAppearCancelled:w}=e,S=String(n.key),H=wp(t,n),O=(T,E)=>{T&&Bn(T,i,9,E)},I=(T,E)=>{const F=E[1];O(T,E),Ke(T)?T.every(z=>z.length<=1)&&F():T.length<=1&&F()},V={mode:o,persisted:a,beforeEnter(T){let E=l;if(!t.isMounted)if(s)E=m||l;else return;T[Hi]&&T[Hi](!0);const F=H[S];F&&hr(n,F)&&F.el[Hi]&&F.el[Hi](),O(E,[T])},enter(T){let E=c,F=u,z=h;if(!t.isMounted)if(s)E=p||c,F=R||u,z=w||h;else return;let K=!1;const ne=T[Po]=he=>{K||(K=!0,he?O(z,[T]):O(F,[T]),V.delayedLeave&&V.delayedLeave(),T[Po]=void 0)};E?I(E,[T,ne]):ne()},leave(T,E){const F=String(n.key);if(T[Po]&&T[Po](!0),t.isUnmounting)return E();O(f,[T]);let z=!1;const K=T[Hi]=ne=>{z||(z=!0,E(),ne?O(x,[T]):O(g,[T]),T[Hi]=void 0,H[F]===n&&delete H[F])};H[F]=n,d?I(d,[T,K]):K()},clone(T){const E=dc(T,e,t,i,r);return r&&r(E),E}};return V}function ll(n){if(Va(n))return n=Ei(n),n.children=null,n}function mh(n){if(!Va(n))return Sp(n.type)&&n.children?Ap(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Qe(t.default))return t.default()}}function so(n,e){n.shapeFlag&6&&n.component?(n.transition=e,so(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Rp(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===cn?(o.patchFlag&128&&r++,i=i.concat(Rp(o.children,e,a))):(e||o.type!==_n)&&i.push(a!=null?Ei(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function za(n,e){return Qe(n)?Wt({name:n.name},e,{setup:n}):n}function Cp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Sa(n,e,t,i,r=!1){if(Ke(n)){n.forEach((g,x)=>Sa(g,e&&(Ke(e)?e[x]:e),t,i,r));return}if(Qr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Sa(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?Ya(i.component):i.el,o=r?null:s,{i:a,r:l}=n,c=e&&e.r,u=a.refs===St?a.refs={}:a.refs,h=a.setupState,f=dt(h),d=h===St?()=>!1:g=>gt(f,g);if(c!=null&&c!==l&&(Pt(c)?(u[c]=null,d(c)&&(h[c]=null)):qt(c)&&(c.value=null)),Qe(l))go(l,a,12,[o,u]);else{const g=Pt(l),x=qt(l);if(g||x){const m=()=>{if(n.f){const p=g?d(l)?h[l]:u[l]:l.value;r?Ke(p)&&Su(p,s):Ke(p)?p.includes(s)||p.push(s):g?(u[l]=[s],d(l)&&(h[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,d(l)&&(h[l]=o)):x&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,nn(m,t)):m()}}}Ba().requestIdleCallback;Ba().cancelIdleCallback;const Qr=n=>!!n.type.__asyncLoader,Va=n=>n.type.__isKeepAlive;function T_(n,e){Lp(n,"a",e)}function Pp(n,e){Lp(n,"da",e)}function Lp(n,e,t=Yt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ga(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Va(r.parent.vnode)&&b_(i,e,t,r),r=r.parent}}function b_(n,e,t,i){const r=Ga(e,n,i,!0);Ip(()=>{Su(i[e],r)},t)}function Ga(n,e,t=Yt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{qi();const a=vo(t),l=Bn(e,t,n,o);return a(),Ki(),l});return i?r.unshift(s):r.push(s),s}}const wi=n=>(e,t=Yt)=>{(!lo||n==="sp")&&Ga(n,(...i)=>e(...i),t)},A_=wi("bm"),Mr=wi("m"),w_=wi("bu"),Wa=wi("u"),_o=wi("bum"),Ip=wi("um"),R_=wi("sp"),C_=wi("rtg"),P_=wi("rtc");function L_(n,e=Yt){Ga("ec",n,e)}const I_="components";function D_(n,e){return U_(I_,n,!0,e)||n}const N_=Symbol.for("v-ndc");function U_(n,e,t=!0,i=!1){const r=zt||Yt;if(r){const s=r.type;{const a=y0(s,!1);if(a&&(a===e||a===Tn(e)||a===Fa(Tn(e))))return s}const o=gh(r[n]||s[n],e)||gh(r.appContext[n],e);return!o&&i?s:o}}function gh(n,e){return n&&(n[e]||n[Tn(e)]||n[Fa(Tn(e))])}function cl(n,e,t={},i,r){if(zt.ce||zt.parent&&Qr(zt.parent)&&zt.parent.ce)return e!=="default"&&(t.name=e),vc(),xc(cn,null,[Rt("slot",t,i&&i())],64);let s=n[e];s&&s._c&&(s._d=!1),vc();const o=s&&Dp(s(t)),a=t.key||o&&o.key,l=xc(cn,{key:(a&&!Ai(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&n._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Dp(n){return n.some(e=>ao(e)?!(e.type===_n||e.type===cn&&!Dp(e.children)):!0)?n:null}const pc=n=>n?nm(n)?Ya(n):pc(n.parent):null,$s=Wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>pc(n.parent),$root:n=>pc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Up(n),$forceUpdate:n=>n.f||(n.f=()=>{Du(n.update)}),$nextTick:n=>n.n||(n.n=uc.bind(n.proxy)),$watch:n=>n0.bind(n)}),ul=(n,e)=>n!==St&&!n.__isScriptSetup&&gt(n,e),O_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ul(i,e))return o[e]=1,i[e];if(r!==St&&gt(r,e))return o[e]=2,r[e];if((c=n.propsOptions[0])&&gt(c,e))return o[e]=3,s[e];if(t!==St&&gt(t,e))return o[e]=4,t[e];mc&&(o[e]=0)}}const u=$s[e];let h,f;if(u)return e==="$attrs"&&Jt(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==St&&gt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,gt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ul(r,e)?(r[e]=t,!0):i!==St&&gt(i,e)?(i[e]=t,!0):gt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==St&&gt(n,o)||ul(e,o)||(a=s[0])&&gt(a,o)||gt(i,o)||gt($s,o)||gt(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:gt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function _h(n){return Ke(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let mc=!0;function F_(n){const e=Up(n),t=n.proxy,i=n.ctx;mc=!1,e.beforeCreate&&vh(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:R,destroyed:w,unmounted:S,render:H,renderTracked:O,renderTriggered:I,errorCaptured:V,serverPrefetch:T,expose:E,inheritAttrs:F,components:z,directives:K,filters:ne}=e;if(c&&B_(c,i,null),o)for(const ue in o){const $=o[ue];Qe($)&&(i[ue]=$.bind(t))}if(r){const ue=r.call(t,t);wt(ue)&&(n.data=ka(ue))}if(mc=!0,s)for(const ue in s){const $=s[ue],ye=Qe($)?$.bind(t,t):Qe($.get)?$.get.bind(t,t):jn,we=!Qe($)&&Qe($.set)?$.set.bind(t):jn,Ie=_i({get:ye,set:we});Object.defineProperty(i,ue,{enumerable:!0,configurable:!0,get:()=>Ie.value,set:Ue=>Ie.value=Ue})}if(a)for(const ue in a)Np(a[ue],i,t,ue);if(l){const ue=Qe(l)?l.call(t):l;Reflect.ownKeys(ue).forEach($=>{Fp($,ue[$])})}u&&vh(u,n,"c");function J(ue,$){Ke($)?$.forEach(ye=>ue(ye.bind(t))):$&&ue($.bind(t))}if(J(A_,h),J(Mr,f),J(w_,d),J(Wa,g),J(T_,x),J(Pp,m),J(L_,V),J(P_,O),J(C_,I),J(_o,R),J(Ip,S),J(R_,T),Ke(E))if(E.length){const ue=n.exposed||(n.exposed={});E.forEach($=>{Object.defineProperty(ue,$,{get:()=>t[$],set:ye=>t[$]=ye})})}else n.exposed||(n.exposed={});H&&n.render===jn&&(n.render=H),F!=null&&(n.inheritAttrs=F),z&&(n.components=z),K&&(n.directives=K),T&&Cp(n)}function B_(n,e,t=jn){Ke(n)&&(n=gc(n));for(const i in n){const r=n[i];let s;wt(r)?"default"in r?s=vr(r.from||i,r.default,!0):s=vr(r.from||i):s=vr(r),qt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function vh(n,e,t){Bn(Ke(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Np(n,e,t,i){let r=i.includes(".")?Kp(t,i):()=>t[i];if(Pt(n)){const s=e[n];Qe(s)&&Wi(r,s)}else if(Qe(n))Wi(r,n.bind(t));else if(wt(n))if(Ke(n))n.forEach(s=>Np(s,e,t,i));else{const s=Qe(n.handler)?n.handler.bind(t):e[n.handler];Qe(s)&&Wi(r,s,n)}}function Up(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Ma(l,c,o,!0)),Ma(l,e,o)),wt(e)&&s.set(e,l),l}function Ma(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ma(n,s,t,!0),r&&r.forEach(o=>Ma(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=k_[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const k_={data:xh,props:yh,emits:yh,methods:Hs,computed:Hs,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:Hs,directives:Hs,watch:z_,provide:xh,inject:H_};function xh(n,e){return e?n?function(){return Wt(Qe(n)?n.call(this,this):n,Qe(e)?e.call(this,this):e)}:e:n}function H_(n,e){return Hs(gc(n),gc(e))}function gc(n){if(Ke(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function en(n,e){return n?[...new Set([].concat(n,e))]:e}function Hs(n,e){return n?Wt(Object.create(null),n,e):e}function yh(n,e){return n?Ke(n)&&Ke(e)?[...new Set([...n,...e])]:Wt(Object.create(null),_h(n),_h(e??{})):e}function z_(n,e){if(!n)return e;if(!e)return n;const t=Wt(Object.create(null),n);for(const i in e)t[i]=en(n[i],e[i]);return t}function Op(){return{app:null,config:{isNativeTag:Eg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let V_=0;function G_(n,e){return function(i,r=null){Qe(i)||(i=Wt({},i)),r!=null&&!wt(r)&&(r=null);const s=Op(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:V_++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:E0,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&Qe(u.install)?(o.add(u),u.install(c,...h)):Qe(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||Rt(i,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Ya(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Bn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=es;es=c;try{return u()}finally{es=h}}};return c}}let es=null;function Fp(n,e){if(Yt){let t=Yt.provides;const i=Yt.parent&&Yt.parent.provides;i===t&&(t=Yt.provides=Object.create(i)),t[n]=e}}function vr(n,e,t=!1){const i=Yt||zt;if(i||es){const r=es?es._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Qe(e)?e.call(i&&i.proxy):e}}const Bp={},kp=()=>Object.create(Bp),Hp=n=>Object.getPrototypeOf(n)===Bp;function W_(n,e,t,i=!1){const r={},s=kp();n.propsDefaults=Object.create(null),zp(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:i_(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function X_(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=dt(r),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Xa(n.emitsOptions,f))continue;const d=e[f];if(l)if(gt(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=Tn(f);r[g]=_c(l,a,g,d,n,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{zp(n,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!gt(e,h)&&((u=Sr(h))===h||!gt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=_c(l,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!gt(e,h))&&(delete s[h],c=!0)}c&&mi(n.attrs,"set","")}function zp(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Xs(l))continue;const c=e[l];let u;r&&gt(r,u=Tn(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Xa(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=dt(t),c=a||St;for(let u=0;u<s.length;u++){const h=s[u];t[h]=_c(r,l,h,c[h],n,!gt(c,h))}}return o}function _c(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=gt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Qe(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=vo(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Sr(t))&&(i=!0))}return i}const j_=new WeakMap;function Vp(n,e,t=!1){const i=t?j_:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let l=!1;if(!Qe(n)){const u=h=>{l=!0;const[f,d]=Vp(h,e,!0);Wt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return wt(n)&&i.set(n,Kr),Kr;if(Ke(s))for(let u=0;u<s.length;u++){const h=Tn(s[u]);Sh(h)&&(o[h]=St)}else if(s)for(const u in s){const h=Tn(u);if(Sh(h)){const f=s[u],d=o[h]=Ke(f)||Qe(f)?{type:f}:Wt({},f),g=d.type;let x=!1,m=!0;if(Ke(g))for(let p=0;p<g.length;++p){const R=g[p],w=Qe(R)&&R.name;if(w==="Boolean"){x=!0;break}else w==="String"&&(m=!1)}else x=Qe(g)&&g.name==="Boolean";d[0]=x,d[1]=m,(x||gt(d,"default"))&&a.push(h)}}const c=[o,a];return wt(n)&&i.set(n,c),c}function Sh(n){return n[0]!=="$"&&!Xs(n)}const Gp=n=>n[0]==="_"||n==="$stable",Nu=n=>Ke(n)?n.map(zn):[zn(n)],Y_=(n,e,t)=>{if(e._n)return e;const i=hc((...r)=>Nu(e(...r)),t);return i._c=!1,i},Wp=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Gp(r))continue;const s=n[r];if(Qe(s))e[r]=Y_(r,s,i);else if(s!=null){const o=Nu(s);e[r]=()=>o}}},Xp=(n,e)=>{const t=Nu(e);n.slots.default=()=>t},jp=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},q_=(n,e,t)=>{const i=n.slots=kp();if(n.vnode.shapeFlag&32){const r=e._;r?(jp(i,e,t),t&&Kd(i,"_",r,!0)):Wp(e,i)}else e&&Xp(n,e)},K_=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=St;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:jp(r,e,t):(s=!e.$stable,Wp(e,r)),o=e}else e&&(Xp(n,e),o={default:1});if(s)for(const a in r)!Gp(a)&&o[a]==null&&delete r[a]},nn=c0;function $_(n){return Z_(n)}function Z_(n,e){const t=Ba();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=jn,insertStaticContent:g}=n,x=(D,B,b,me=null,ie=null,oe=null,le=void 0,ge=null,te=!!B.dynamicChildren)=>{if(D===B)return;D&&!hr(D,B)&&(me=be(D),Ue(D,ie,oe,!0),D=null),B.patchFlag===-2&&(te=!1,B.dynamicChildren=null);const{type:M,ref:y,shapeFlag:k}=B;switch(M){case ja:m(D,B,b,me);break;case _n:p(D,B,b,me);break;case fl:D==null&&R(B,b,me,le);break;case cn:z(D,B,b,me,ie,oe,le,ge,te);break;default:k&1?H(D,B,b,me,ie,oe,le,ge,te):k&6?K(D,B,b,me,ie,oe,le,ge,te):(k&64||k&128)&&M.process(D,B,b,me,ie,oe,le,ge,te,Ve)}y!=null&&ie&&Sa(y,D&&D.ref,oe,B||D,!B)},m=(D,B,b,me)=>{if(D==null)i(B.el=a(B.children),b,me);else{const ie=B.el=D.el;B.children!==D.children&&c(ie,B.children)}},p=(D,B,b,me)=>{D==null?i(B.el=l(B.children||""),b,me):B.el=D.el},R=(D,B,b,me)=>{[D.el,D.anchor]=g(D.children,B,b,me,D.el,D.anchor)},w=({el:D,anchor:B},b,me)=>{let ie;for(;D&&D!==B;)ie=f(D),i(D,b,me),D=ie;i(B,b,me)},S=({el:D,anchor:B})=>{let b;for(;D&&D!==B;)b=f(D),r(D),D=b;r(B)},H=(D,B,b,me,ie,oe,le,ge,te)=>{B.type==="svg"?le="svg":B.type==="math"&&(le="mathml"),D==null?O(B,b,me,ie,oe,le,ge,te):T(D,B,ie,oe,le,ge,te)},O=(D,B,b,me,ie,oe,le,ge)=>{let te,M;const{props:y,shapeFlag:k,transition:Z,dirs:Q}=D;if(te=D.el=o(D.type,oe,y&&y.is,y),k&8?u(te,D.children):k&16&&V(D.children,te,null,me,ie,hl(D,oe),le,ge),Q&&Ji(D,null,me,"created"),I(te,D,D.scopeId,le,me),y){for(const Ae in y)Ae!=="value"&&!Xs(Ae)&&s(te,Ae,null,y[Ae],oe,me);"value"in y&&s(te,"value",null,y.value,oe),(M=y.onVnodeBeforeMount)&&kn(M,me,D)}Q&&Ji(D,null,me,"beforeMount");const ee=J_(ie,Z);ee&&Z.beforeEnter(te),i(te,B,b),((M=y&&y.onVnodeMounted)||ee||Q)&&nn(()=>{M&&kn(M,me,D),ee&&Z.enter(te),Q&&Ji(D,null,me,"mounted")},ie)},I=(D,B,b,me,ie)=>{if(b&&d(D,b),me)for(let oe=0;oe<me.length;oe++)d(D,me[oe]);if(ie){let oe=ie.subTree;if(B===oe||Zp(oe.type)&&(oe.ssContent===B||oe.ssFallback===B)){const le=ie.vnode;I(D,le,le.scopeId,le.slotScopeIds,ie.parent)}}},V=(D,B,b,me,ie,oe,le,ge,te=0)=>{for(let M=te;M<D.length;M++){const y=D[M]=ge?zi(D[M]):zn(D[M]);x(null,y,B,b,me,ie,oe,le,ge)}},T=(D,B,b,me,ie,oe,le)=>{const ge=B.el=D.el;let{patchFlag:te,dynamicChildren:M,dirs:y}=B;te|=D.patchFlag&16;const k=D.props||St,Z=B.props||St;let Q;if(b&&Qi(b,!1),(Q=Z.onVnodeBeforeUpdate)&&kn(Q,b,B,D),y&&Ji(B,D,b,"beforeUpdate"),b&&Qi(b,!0),(k.innerHTML&&Z.innerHTML==null||k.textContent&&Z.textContent==null)&&u(ge,""),M?E(D.dynamicChildren,M,ge,b,me,hl(B,ie),oe):le||$(D,B,ge,null,b,me,hl(B,ie),oe,!1),te>0){if(te&16)F(ge,k,Z,b,ie);else if(te&2&&k.class!==Z.class&&s(ge,"class",null,Z.class,ie),te&4&&s(ge,"style",k.style,Z.style,ie),te&8){const ee=B.dynamicProps;for(let Ae=0;Ae<ee.length;Ae++){const j=ee[Ae],ce=k[j],Fe=Z[j];(Fe!==ce||j==="value")&&s(ge,j,ce,Fe,ie,b)}}te&1&&D.children!==B.children&&u(ge,B.children)}else!le&&M==null&&F(ge,k,Z,b,ie);((Q=Z.onVnodeUpdated)||y)&&nn(()=>{Q&&kn(Q,b,B,D),y&&Ji(B,D,b,"updated")},me)},E=(D,B,b,me,ie,oe,le)=>{for(let ge=0;ge<B.length;ge++){const te=D[ge],M=B[ge],y=te.el&&(te.type===cn||!hr(te,M)||te.shapeFlag&70)?h(te.el):b;x(te,M,y,null,me,ie,oe,le,!0)}},F=(D,B,b,me,ie)=>{if(B!==b){if(B!==St)for(const oe in B)!Xs(oe)&&!(oe in b)&&s(D,oe,B[oe],null,ie,me);for(const oe in b){if(Xs(oe))continue;const le=b[oe],ge=B[oe];le!==ge&&oe!=="value"&&s(D,oe,ge,le,ie,me)}"value"in b&&s(D,"value",B.value,b.value,ie)}},z=(D,B,b,me,ie,oe,le,ge,te)=>{const M=B.el=D?D.el:a(""),y=B.anchor=D?D.anchor:a("");let{patchFlag:k,dynamicChildren:Z,slotScopeIds:Q}=B;Q&&(ge=ge?ge.concat(Q):Q),D==null?(i(M,b,me),i(y,b,me),V(B.children||[],b,y,ie,oe,le,ge,te)):k>0&&k&64&&Z&&D.dynamicChildren?(E(D.dynamicChildren,Z,b,ie,oe,le,ge),(B.key!=null||ie&&B===ie.subTree)&&Uu(D,B,!0)):$(D,B,b,y,ie,oe,le,ge,te)},K=(D,B,b,me,ie,oe,le,ge,te)=>{B.slotScopeIds=ge,D==null?B.shapeFlag&512?ie.ctx.activate(B,b,me,le,te):ne(B,b,me,ie,oe,le,te):he(D,B,te)},ne=(D,B,b,me,ie,oe,le)=>{const ge=D.component=m0(D,me,ie);if(Va(D)&&(ge.ctx.renderer=Ve),g0(ge,!1,le),ge.asyncDep){if(ie&&ie.registerDep(ge,J,le),!D.el){const te=ge.subTree=Rt(_n);p(null,te,B,b)}}else J(ge,D,B,b,ie,oe,le)},he=(D,B,b)=>{const me=B.component=D.component;if(a0(D,B,b))if(me.asyncDep&&!me.asyncResolved){ue(me,B,b);return}else me.next=B,me.update();else B.el=D.el,me.vnode=B},J=(D,B,b,me,ie,oe,le)=>{const ge=()=>{if(D.isMounted){let{next:k,bu:Z,u:Q,parent:ee,vnode:Ae}=D;{const Re=Yp(D);if(Re){k&&(k.el=Ae.el,ue(D,k,le)),Re.asyncDep.then(()=>{D.isUnmounted||ge()});return}}let j=k,ce;Qi(D,!1),k?(k.el=Ae.el,ue(D,k,le)):k=Ae,Z&&il(Z),(ce=k.props&&k.props.onVnodeBeforeUpdate)&&kn(ce,ee,k,Ae),Qi(D,!0);const Fe=Eh(D),ve=D.subTree;D.subTree=Fe,x(ve,Fe,h(ve.el),be(ve),D,ie,oe),k.el=Fe.el,j===null&&l0(D,Fe.el),Q&&nn(Q,ie),(ce=k.props&&k.props.onVnodeUpdated)&&nn(()=>kn(ce,ee,k,Ae),ie)}else{let k;const{el:Z,props:Q}=B,{bm:ee,m:Ae,parent:j,root:ce,type:Fe}=D,ve=Qr(B);Qi(D,!1),ee&&il(ee),!ve&&(k=Q&&Q.onVnodeBeforeMount)&&kn(k,j,B),Qi(D,!0);{ce.ce&&ce.ce._injectChildStyle(Fe);const Re=D.subTree=Eh(D);x(null,Re,b,me,D,ie,oe),B.el=Re.el}if(Ae&&nn(Ae,ie),!ve&&(k=Q&&Q.onVnodeMounted)){const Re=B;nn(()=>kn(k,j,Re),ie)}(B.shapeFlag&256||j&&Qr(j.vnode)&&j.vnode.shapeFlag&256)&&D.a&&nn(D.a,ie),D.isMounted=!0,B=b=me=null}};D.scope.on();const te=D.effect=new Qd(ge);D.scope.off();const M=D.update=te.run.bind(te),y=D.job=te.runIfDirty.bind(te);y.i=D,y.id=D.uid,te.scheduler=()=>Du(y),Qi(D,!0),M()},ue=(D,B,b)=>{B.component=D;const me=D.vnode.props;D.vnode=B,D.next=null,X_(D,B.props,me,b),K_(D,B.children,b),qi(),hh(D),Ki()},$=(D,B,b,me,ie,oe,le,ge,te=!1)=>{const M=D&&D.children,y=D?D.shapeFlag:0,k=B.children,{patchFlag:Z,shapeFlag:Q}=B;if(Z>0){if(Z&128){we(M,k,b,me,ie,oe,le,ge,te);return}else if(Z&256){ye(M,k,b,me,ie,oe,le,ge,te);return}}Q&8?(y&16&&Me(M,ie,oe),k!==M&&u(b,k)):y&16?Q&16?we(M,k,b,me,ie,oe,le,ge,te):Me(M,ie,oe,!0):(y&8&&u(b,""),Q&16&&V(k,b,me,ie,oe,le,ge,te))},ye=(D,B,b,me,ie,oe,le,ge,te)=>{D=D||Kr,B=B||Kr;const M=D.length,y=B.length,k=Math.min(M,y);let Z;for(Z=0;Z<k;Z++){const Q=B[Z]=te?zi(B[Z]):zn(B[Z]);x(D[Z],Q,b,null,ie,oe,le,ge,te)}M>y?Me(D,ie,oe,!0,!1,k):V(B,b,me,ie,oe,le,ge,te,k)},we=(D,B,b,me,ie,oe,le,ge,te)=>{let M=0;const y=B.length;let k=D.length-1,Z=y-1;for(;M<=k&&M<=Z;){const Q=D[M],ee=B[M]=te?zi(B[M]):zn(B[M]);if(hr(Q,ee))x(Q,ee,b,null,ie,oe,le,ge,te);else break;M++}for(;M<=k&&M<=Z;){const Q=D[k],ee=B[Z]=te?zi(B[Z]):zn(B[Z]);if(hr(Q,ee))x(Q,ee,b,null,ie,oe,le,ge,te);else break;k--,Z--}if(M>k){if(M<=Z){const Q=Z+1,ee=Q<y?B[Q].el:me;for(;M<=Z;)x(null,B[M]=te?zi(B[M]):zn(B[M]),b,ee,ie,oe,le,ge,te),M++}}else if(M>Z)for(;M<=k;)Ue(D[M],ie,oe,!0),M++;else{const Q=M,ee=M,Ae=new Map;for(M=ee;M<=Z;M++){const Ce=B[M]=te?zi(B[M]):zn(B[M]);Ce.key!=null&&Ae.set(Ce.key,M)}let j,ce=0;const Fe=Z-ee+1;let ve=!1,Re=0;const Le=new Array(Fe);for(M=0;M<Fe;M++)Le[M]=0;for(M=Q;M<=k;M++){const Ce=D[M];if(ce>=Fe){Ue(Ce,ie,oe,!0);continue}let Xe;if(Ce.key!=null)Xe=Ae.get(Ce.key);else for(j=ee;j<=Z;j++)if(Le[j-ee]===0&&hr(Ce,B[j])){Xe=j;break}Xe===void 0?Ue(Ce,ie,oe,!0):(Le[Xe-ee]=M+1,Xe>=Re?Re=Xe:ve=!0,x(Ce,B[Xe],b,null,ie,oe,le,ge,te),ce++)}const ze=ve?Q_(Le):Kr;for(j=ze.length-1,M=Fe-1;M>=0;M--){const Ce=ee+M,Xe=B[Ce],Ge=Ce+1<y?B[Ce+1].el:me;Le[M]===0?x(null,Xe,b,Ge,ie,oe,le,ge,te):ve&&(j<0||M!==ze[j]?Ie(Xe,b,Ge,2):j--)}}},Ie=(D,B,b,me,ie=null)=>{const{el:oe,type:le,transition:ge,children:te,shapeFlag:M}=D;if(M&6){Ie(D.component.subTree,B,b,me);return}if(M&128){D.suspense.move(B,b,me);return}if(M&64){le.move(D,B,b,Ve);return}if(le===cn){i(oe,B,b);for(let k=0;k<te.length;k++)Ie(te[k],B,b,me);i(D.anchor,B,b);return}if(le===fl){w(D,B,b);return}if(me!==2&&M&1&&ge)if(me===0)ge.beforeEnter(oe),i(oe,B,b),nn(()=>ge.enter(oe),ie);else{const{leave:k,delayLeave:Z,afterLeave:Q}=ge,ee=()=>i(oe,B,b),Ae=()=>{k(oe,()=>{ee(),Q&&Q()})};Z?Z(oe,ee,Ae):Ae()}else i(oe,B,b)},Ue=(D,B,b,me=!1,ie=!1)=>{const{type:oe,props:le,ref:ge,children:te,dynamicChildren:M,shapeFlag:y,patchFlag:k,dirs:Z,cacheIndex:Q}=D;if(k===-2&&(ie=!1),ge!=null&&Sa(ge,null,b,D,!0),Q!=null&&(B.renderCache[Q]=void 0),y&256){B.ctx.deactivate(D);return}const ee=y&1&&Z,Ae=!Qr(D);let j;if(Ae&&(j=le&&le.onVnodeBeforeUnmount)&&kn(j,B,D),y&6)Ee(D.component,b,me);else{if(y&128){D.suspense.unmount(b,me);return}ee&&Ji(D,null,B,"beforeUnmount"),y&64?D.type.remove(D,B,b,Ve,me):M&&!M.hasOnce&&(oe!==cn||k>0&&k&64)?Me(M,B,b,!1,!0):(oe===cn&&k&384||!ie&&y&16)&&Me(te,B,b),me&&Ze(D)}(Ae&&(j=le&&le.onVnodeUnmounted)||ee)&&nn(()=>{j&&kn(j,B,D),ee&&Ji(D,null,B,"unmounted")},b)},Ze=D=>{const{type:B,el:b,anchor:me,transition:ie}=D;if(B===cn){fe(b,me);return}if(B===fl){S(D);return}const oe=()=>{r(b),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(D.shapeFlag&1&&ie&&!ie.persisted){const{leave:le,delayLeave:ge}=ie,te=()=>le(b,oe);ge?ge(D.el,oe,te):te()}else oe()},fe=(D,B)=>{let b;for(;D!==B;)b=f(D),r(D),D=b;r(B)},Ee=(D,B,b)=>{const{bum:me,scope:ie,job:oe,subTree:le,um:ge,m:te,a:M}=D;Mh(te),Mh(M),me&&il(me),ie.stop(),oe&&(oe.flags|=8,Ue(le,D,B,b)),ge&&nn(ge,B),nn(()=>{D.isUnmounted=!0},B),B&&B.pendingBranch&&!B.isUnmounted&&D.asyncDep&&!D.asyncResolved&&D.suspenseId===B.pendingId&&(B.deps--,B.deps===0&&B.resolve())},Me=(D,B,b,me=!1,ie=!1,oe=0)=>{for(let le=oe;le<D.length;le++)Ue(D[le],B,b,me,ie)},be=D=>{if(D.shapeFlag&6)return be(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const B=f(D.anchor||D.el),b=B&&B[yp];return b?f(b):B};let Oe=!1;const it=(D,B,b)=>{D==null?B._vnode&&Ue(B._vnode,null,null,!0):x(B._vnode||null,D,B,null,null,null,b),B._vnode=D,Oe||(Oe=!0,hh(),_p(),Oe=!1)},Ve={p:x,um:Ue,m:Ie,r:Ze,mt:ne,mc:V,pc:$,pbc:E,n:be,o:n};return{render:it,hydrate:void 0,createApp:G_(it)}}function hl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Qi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function J_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Uu(n,e,t=!1){const i=n.children,r=e.children;if(Ke(i)&&Ke(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=zi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&Uu(o,a)),a.type===ja&&(a.el=o.el)}}function Q_(n){const e=n.slice(),t=[0];let i,r,s,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function Yp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yp(e)}function Mh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const e0=Symbol.for("v-scx"),t0=()=>vr(e0);function Wi(n,e,t){return qp(n,e,t)}function qp(n,e,t=St){const{immediate:i,deep:r,flush:s,once:o}=t,a=Wt({},t),l=e&&i||!e&&s!=="post";let c;if(lo){if(s==="sync"){const d=t0();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=jn,d.resume=jn,d.pause=jn,d}}const u=Yt;a.call=(d,g,x)=>Bn(d,u,g,x);let h=!1;s==="post"?a.scheduler=d=>{nn(d,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():Du(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=p_(n,e,a);return lo&&(c?c.push(f):l&&f()),f}function n0(n,e,t){const i=this.proxy,r=Pt(n)?n.includes(".")?Kp(i,n):()=>i[n]:n.bind(i,i);let s;Qe(e)?s=e:(s=e.handler,t=e);const o=vo(this),a=qp(r,s.bind(i),t);return o(),a}function Kp(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const i0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Tn(e)}Modifiers`]||n[`${Sr(e)}Modifiers`];function r0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||St;let r=t;const s=e.startsWith("update:"),o=s&&i0(i,e.slice(7));o&&(o.trim&&(r=t.map(u=>Pt(u)?u.trim():u)),o.number&&(r=t.map(Rg)));let a,l=i[a=nl(e)]||i[a=nl(Tn(e))];!l&&s&&(l=i[a=nl(Sr(e))]),l&&Bn(l,n,6,r);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Bn(c,n,6,r)}}function $p(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Qe(n)){const l=c=>{const u=$p(c,e,!0);u&&(a=!0,Wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(wt(n)&&i.set(n,null),null):(Ke(s)?s.forEach(l=>o[l]=null):Wt(o,s),wt(n)&&i.set(n,o),o)}function Xa(n,e){return!n||!Na(e)?!1:(e=e.slice(2).replace(/Once$/,""),gt(n,e[0].toLowerCase()+e.slice(1))||gt(n,Sr(e))||gt(n,e))}function Eh(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:x}=n,m=ya(n);let p,R;try{if(t.shapeFlag&4){const S=r||i,H=S;p=zn(c.call(H,S,u,h,d,f,g)),R=a}else{const S=e;p=zn(S.length>1?S(h,{attrs:a,slots:o,emit:l}):S(h,null)),R=e.props?a:s0(a)}}catch(S){Zs.length=0,Ha(S,n,1),p=Rt(_n)}let w=p;if(R&&x!==!1){const S=Object.keys(R),{shapeFlag:H}=w;S.length&&H&7&&(s&&S.some(yu)&&(R=o0(R,s)),w=Ei(w,R,!1,!0))}return t.dirs&&(w=Ei(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&so(w,t.transition),p=w,ya(m),p}const s0=n=>{let e;for(const t in n)(t==="class"||t==="style"||Na(t))&&((e||(e={}))[t]=n[t]);return e},o0=(n,e)=>{const t={};for(const i in n)(!yu(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function a0(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Th(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Xa(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Th(i,o,c):!0:!!o;return!1}function Th(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Xa(t,s))return!0}return!1}function l0({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Zp=n=>n.__isSuspense;function c0(n,e){e&&e.pendingBranch?Ke(n)?e.effects.push(...n):e.effects.push(n):__(n)}const cn=Symbol.for("v-fgt"),ja=Symbol.for("v-txt"),_n=Symbol.for("v-cmt"),fl=Symbol.for("v-stc"),Zs=[];let vn=null;function vc(n=!1){Zs.push(vn=n?null:[])}function u0(){Zs.pop(),vn=Zs[Zs.length-1]||null}let oo=1;function bh(n,e=!1){oo+=n,n<0&&vn&&e&&(vn.hasOnce=!0)}function Jp(n){return n.dynamicChildren=oo>0?vn||Kr:null,u0(),oo>0&&vn&&vn.push(n),n}function n1(n,e,t,i,r,s){return Jp(Ea(n,e,t,i,r,s,!0))}function xc(n,e,t,i,r){return Jp(Rt(n,e,t,i,r,!0))}function ao(n){return n?n.__v_isVNode===!0:!1}function hr(n,e){return n.type===e.type&&n.key===e.key}const Qp=({key:n})=>n??null,la=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Pt(n)||qt(n)||Qe(n)?{i:zt,r:n,k:e,f:!!t}:n:null);function Ea(n,e=null,t=null,i=0,r=null,s=n===cn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Qp(e),ref:e&&la(e),scopeId:xp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:zt};return a?(Ou(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Pt(t)?8:16),oo>0&&!o&&vn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&vn.push(l),l}const Rt=h0;function h0(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===N_)&&(n=_n),ao(n)){const a=Ei(n,e,!0);return t&&Ou(a,t),oo>0&&!s&&vn&&(a.shapeFlag&6?vn[vn.indexOf(n)]=a:vn.push(a)),a.patchFlag=-2,a}if(S0(n)&&(n=n.__vccOpts),e){e=f0(e);let{class:a,style:l}=e;a&&!Pt(a)&&(e.class=Zr(a)),wt(l)&&(Iu(l)&&!Ke(l)&&(l=Wt({},l)),e.style=Eu(l))}const o=Pt(n)?1:Zp(n)?128:Sp(n)?64:wt(n)?4:Qe(n)?2:0;return Ea(n,e,t,i,r,o,s,!0)}function f0(n){return n?Iu(n)||Hp(n)?Wt({},n):n:null}function Ei(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?em(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Qp(c),ref:e&&e.ref?t&&s?Ke(s)?s.concat(la(e)):[s,la(e)]:la(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==cn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ei(n.ssContent),ssFallback:n.ssFallback&&Ei(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&so(u,l.clone(u)),u}function yc(n=" ",e=0){return Rt(ja,null,n,e)}function zn(n){return n==null||typeof n=="boolean"?Rt(_n):Ke(n)?Rt(cn,null,n.slice()):ao(n)?zi(n):Rt(ja,null,String(n))}function zi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ei(n)}function Ou(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ke(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Ou(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!Hp(e)?e._ctx=zt:r===3&&zt&&(zt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Qe(e)?(e={default:e,_ctx:zt},t=32):(e=String(e),i&64?(t=16,e=[yc(e)]):t=8);n.children=e,n.shapeFlag|=t}function em(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Zr([e.class,i.class]));else if(r==="style")e.style=Eu([e.style,i.style]);else if(Na(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ke(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function kn(n,e,t,i=null){Bn(n,e,7,[t,i])}const d0=Op();let p0=0;function m0(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||d0,s={uid:p0++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Og(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vp(i,r),emitsOptions:$p(i,r),emit:null,emitted:null,propsDefaults:St,inheritAttrs:i.inheritAttrs,ctx:St,data:St,props:St,attrs:St,slots:St,refs:St,setupState:St,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=r0.bind(null,s),n.ce&&n.ce(s),s}let Yt=null;const tm=()=>Yt||zt;let Ta,Sc;{const n=Ba(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Ta=e("__VUE_INSTANCE_SETTERS__",t=>Yt=t),Sc=e("__VUE_SSR_SETTERS__",t=>lo=t)}const vo=n=>{const e=Yt;return Ta(n),n.scope.on(),()=>{n.scope.off(),Ta(e)}},Ah=()=>{Yt&&Yt.scope.off(),Ta(null)};function nm(n){return n.vnode.shapeFlag&4}let lo=!1;function g0(n,e=!1,t=!1){e&&Sc(e);const{props:i,children:r}=n.vnode,s=nm(n);W_(n,i,s,e),q_(n,r,t);const o=s?_0(n,e):void 0;return e&&Sc(!1),o}function _0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,O_);const{setup:i}=t;if(i){qi();const r=n.setupContext=i.length>1?x0(n):null,s=vo(n),o=go(i,n,0,[n.props,r]),a=jd(o);if(Ki(),s(),(a||n.sp)&&!Qr(n)&&Cp(n),a){if(o.then(Ah,Ah),e)return o.then(l=>{wh(n,l)}).catch(l=>{Ha(l,n,0)});n.asyncDep=o}else wh(n,o)}else im(n)}function wh(n,e,t){Qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:wt(e)&&(n.setupState=pp(e)),im(n)}function im(n,e,t){const i=n.type;n.render||(n.render=i.render||jn);{const r=vo(n);qi();try{F_(n)}finally{Ki(),r()}}}const v0={get(n,e){return Jt(n,"get",""),n[e]}};function x0(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,v0),slots:n.slots,emit:n.emit,expose:e}}function Ya(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(pp(r_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in $s)return $s[t](n)},has(e,t){return t in e||t in $s}})):n.proxy}function y0(n,e=!0){return Qe(n)?n.displayName||n.name:n.name||e&&n.__name}function S0(n){return Qe(n)&&"__vccOpts"in n}const _i=(n,e)=>f_(n,e,lo);function M0(n,e,t){const i=arguments.length;return i===2?wt(e)&&!Ke(e)?ao(e)?Rt(n,null,[e]):Rt(n,e):Rt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ao(t)&&(t=[t]),Rt(n,e,t))}const E0="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mc;const Rh=typeof window<"u"&&window.trustedTypes;if(Rh)try{Mc=Rh.createPolicy("vue",{createHTML:n=>n})}catch{}const rm=Mc?n=>Mc.createHTML(n):n=>n,T0="http://www.w3.org/2000/svg",b0="http://www.w3.org/1998/Math/MathML",fi=typeof document<"u"?document:null,Ch=fi&&fi.createElement("template"),A0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?fi.createElementNS(T0,n):e==="mathml"?fi.createElementNS(b0,n):t?fi.createElement(n,{is:t}):fi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>fi.createTextNode(n),createComment:n=>fi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>fi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Ch.innerHTML=rm(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Ch.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Pi="transition",Rs="animation",co=Symbol("_vtc"),sm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},w0=Wt({},Tp,sm),R0=n=>(n.displayName="Transition",n.props=w0,n),C0=R0((n,{slots:e})=>M0(E_,P0(n),e)),er=(n,e=[])=>{Ke(n)?n.forEach(t=>t(...e)):n&&n(...e)},Ph=n=>n?Ke(n)?n.some(e=>e.length>1):n.length>1:!1;function P0(n){const e={};for(const z in n)z in sm||(e[z]=n[z]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,g=L0(r),x=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:R,onEnterCancelled:w,onLeave:S,onLeaveCancelled:H,onBeforeAppear:O=p,onAppear:I=R,onAppearCancelled:V=w}=e,T=(z,K,ne,he)=>{z._enterCancelled=he,tr(z,K?u:a),tr(z,K?c:o),ne&&ne()},E=(z,K)=>{z._isLeaving=!1,tr(z,h),tr(z,d),tr(z,f),K&&K()},F=z=>(K,ne)=>{const he=z?I:R,J=()=>T(K,z,ne);er(he,[K,J]),Lh(()=>{tr(K,z?l:s),ri(K,z?u:a),Ph(he)||Ih(K,i,x,J)})};return Wt(e,{onBeforeEnter(z){er(p,[z]),ri(z,s),ri(z,o)},onBeforeAppear(z){er(O,[z]),ri(z,l),ri(z,c)},onEnter:F(!1),onAppear:F(!0),onLeave(z,K){z._isLeaving=!0;const ne=()=>E(z,K);ri(z,h),z._enterCancelled?(ri(z,f),Uh()):(Uh(),ri(z,f)),Lh(()=>{z._isLeaving&&(tr(z,h),ri(z,d),Ph(S)||Ih(z,i,m,ne))}),er(S,[z,ne])},onEnterCancelled(z){T(z,!1,void 0,!0),er(w,[z])},onAppearCancelled(z){T(z,!0,void 0,!0),er(V,[z])},onLeaveCancelled(z){E(z),er(H,[z])}})}function L0(n){if(n==null)return null;if(wt(n))return[dl(n.enter),dl(n.leave)];{const e=dl(n);return[e,e]}}function dl(n){return Cg(n)}function ri(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[co]||(n[co]=new Set)).add(e)}function tr(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[co];t&&(t.delete(e),t.size||(n[co]=void 0))}function Lh(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let I0=0;function Ih(n,e,t,i){const r=n._endId=++I0,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=D0(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),s()},f=d=>{d.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function D0(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),r=i(`${Pi}Delay`),s=i(`${Pi}Duration`),o=Dh(r,s),a=i(`${Rs}Delay`),l=i(`${Rs}Duration`),c=Dh(a,l);let u=null,h=0,f=0;e===Pi?o>0&&(u=Pi,h=o,f=s.length):e===Rs?c>0&&(u=Rs,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?Pi:Rs:null,f=u?u===Pi?s.length:l.length:0);const d=u===Pi&&/\b(transform|all)(,|$)/.test(i(`${Pi}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function Dh(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Nh(t)+Nh(n[i])))}function Nh(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Uh(){return document.body.offsetHeight}function N0(n,e,t){const i=n[co];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ba=Symbol("_vod"),om=Symbol("_vsh"),U0={beforeMount(n,{value:e},{transition:t}){n[ba]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Cs(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Cs(n,!0),i.enter(n)):i.leave(n,()=>{Cs(n,!1)}):Cs(n,e))},beforeUnmount(n,{value:e}){Cs(n,e)}};function Cs(n,e){n.style.display=e?n[ba]:"none",n[om]=!e}const O0=Symbol(""),F0=/(^|;)\s*display\s*:/;function B0(n,e,t){const i=n.style,r=Pt(t);let s=!1;if(t&&!r){if(e)if(Pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ca(i,a,"")}else for(const o in e)t[o]==null&&ca(i,o,"");for(const o in t)o==="display"&&(s=!0),ca(i,o,t[o])}else if(r){if(e!==t){const o=i[O0];o&&(t+=";"+o),i.cssText=t,s=F0.test(t)}}else e&&n.removeAttribute("style");ba in n&&(n[ba]=s?i.display:"",n[om]&&(i.display="none"))}const Oh=/\s*!important$/;function ca(n,e,t){if(Ke(t))t.forEach(i=>ca(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=k0(n,e);Oh.test(t)?n.setProperty(Sr(i),t.replace(Oh,""),"important"):n[i]=t}}const Fh=["Webkit","Moz","ms"],pl={};function k0(n,e){const t=pl[e];if(t)return t;let i=Tn(e);if(i!=="filter"&&i in n)return pl[e]=i;i=Fa(i);for(let r=0;r<Fh.length;r++){const s=Fh[r]+i;if(s in n)return pl[e]=s}return e}const Bh="http://www.w3.org/1999/xlink";function kh(n,e,t,i,r,s=Ug(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Bh,e.slice(6,e.length)):n.setAttributeNS(Bh,e,t):t==null||s&&!$d(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ai(t)?String(t):t)}function Hh(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?rm(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=$d(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function H0(n,e,t,i){n.addEventListener(e,t,i)}function z0(n,e,t,i){n.removeEventListener(e,t,i)}const zh=Symbol("_vei");function V0(n,e,t,i,r=null){const s=n[zh]||(n[zh]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=G0(e);if(i){const c=s[e]=j0(i,r);H0(n,a,c,l)}else o&&(z0(n,a,o,l),s[e]=void 0)}}const Vh=/(?:Once|Passive|Capture)$/;function G0(n){let e;if(Vh.test(n)){e={};let i;for(;i=n.match(Vh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Sr(n.slice(2)),e]}let ml=0;const W0=Promise.resolve(),X0=()=>ml||(W0.then(()=>ml=0),ml=Date.now());function j0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Bn(Y0(i,t.value),e,5,[i])};return t.value=n,t.attached=X0(),t}function Y0(n,e){if(Ke(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Gh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,q0=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?N0(n,i,o):e==="style"?B0(n,t,i):Na(e)?yu(e)||V0(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):K0(n,e,i,o))?(Hh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&kh(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Pt(i))?Hh(n,Tn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),kh(n,e,i,o))};function K0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Gh(e)&&Qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Gh(e)&&Pt(t)?!1:e in n}const $0=Wt({patchProp:q0},A0);let Wh;function am(){return Wh||(Wh=$_($0))}const i1=(...n)=>{am().render(...n)},r1=(...n)=>{const e=am().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=J0(i);if(!r)return;const s=e._component;!Qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Z0(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Z0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function J0(n){return Pt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fu="173",ts={ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Q0=0,Xh=1,ev=2,lm=1,tv=2,hi=3,qn=0,fn=1,Gn=2,Xi=0,ns=1,jh=2,Yh=3,qh=4,nv=5,fr=100,iv=101,rv=102,sv=103,ov=104,av=200,lv=201,cv=202,uv=203,Ec=204,Tc=205,hv=206,fv=207,dv=208,pv=209,mv=210,gv=211,_v=212,vv=213,xv=214,bc=0,Ac=1,wc=2,as=3,Rc=4,Cc=5,Pc=6,Lc=7,cm=0,yv=1,Sv=2,ji=0,Mv=1,Ev=2,Tv=3,bv=4,Av=5,wv=6,Rv=7,Kh="attached",Cv="detached",um=300,ls=301,cs=302,Ic=303,Dc=304,qa=306,us=1e3,Wn=1001,Aa=1002,an=1003,hm=1004,zs=1005,Vt=1006,ua=1007,Xn=1008,Ti=1009,fm=1010,dm=1011,uo=1012,Bu=1013,yr=1014,un=1015,yi=1016,ku=1017,Hu=1018,hs=1020,pm=35902,mm=1021,gm=1022,xn=1023,_m=1024,vm=1025,is=1026,fs=1027,Ka=1028,zu=1029,xm=1030,Vu=1031,Gu=1033,ha=33776,fa=33777,da=33778,pa=33779,Nc=35840,Uc=35841,Oc=35842,Fc=35843,Bc=36196,kc=37492,Hc=37496,zc=37808,Vc=37809,Gc=37810,Wc=37811,Xc=37812,jc=37813,Yc=37814,qc=37815,Kc=37816,$c=37817,Zc=37818,Jc=37819,Qc=37820,eu=37821,ma=36492,tu=36494,nu=36495,ym=36283,iu=36284,ru=36285,su=36286,ho=2300,fo=2301,gl=2302,$h=2400,Zh=2401,Jh=2402,Pv=2500,Lv=0,Sm=1,ou=2,Iv=3200,Dv=3201,Mm=0,Nv=1,vi="",It="srgb",Xt="srgb-linear",wa="linear",xt="srgb",wr=7680,Qh=519,Uv=512,Ov=513,Fv=514,Em=515,Bv=516,kv=517,Hv=518,zv=519,au=35044,ef="300 es",Si=2e3,Ra=2001;class Er{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tf=1234567;const Js=Math.PI/180,ds=180/Math.PI;function On(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function ot(n,e,t){return Math.max(e,Math.min(t,n))}function Wu(n,e){return(n%e+e)%e}function Vv(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Gv(n,e,t){return n!==e?(t-n)/(e-n):0}function Qs(n,e,t){return(1-t)*n+t*e}function Wv(n,e,t,i){return Qs(n,e,1-Math.exp(-t*i))}function Xv(n,e=1){return e-Math.abs(Wu(n,e*2)-e)}function jv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Yv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function qv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Kv(n,e){return n+Math.random()*(e-n)}function $v(n){return n*(.5-Math.random())}function Zv(n){n!==void 0&&(tf=n);let e=tf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jv(n){return n*Js}function Qv(n){return n*ds}function ex(n){return(n&n-1)===0&&n!==0}function tx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function nx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ix(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),d=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function In(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Tm={DEG2RAD:Js,RAD2DEG:ds,generateUUID:On,clamp:ot,euclideanModulo:Wu,mapLinear:Vv,inverseLerp:Gv,lerp:Qs,damp:Wv,pingpong:Xv,smoothstep:jv,smootherstep:Yv,randInt:qv,randFloat:Kv,randFloatSpread:$v,seededRandom:Zv,degToRad:Jv,radToDeg:Qv,isPowerOfTwo:ex,ceilPowerOfTwo:tx,floorPowerOfTwo:nx,setQuaternionFromProperEuler:ix,normalize:_t,denormalize:In};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rt{constructor(e,t,i,r,s,o,a,l,c){rt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],x=r[0],m=r[3],p=r[6],R=r[1],w=r[4],S=r[7],H=r[2],O=r[5],I=r[8];return s[0]=o*x+a*R+l*H,s[3]=o*m+a*w+l*O,s[6]=o*p+a*S+l*I,s[1]=c*x+u*R+h*H,s[4]=c*m+u*w+h*O,s[7]=c*p+u*S+h*I,s[2]=f*x+d*R+g*H,s[5]=f*m+d*w+g*O,s[8]=f*p+d*S+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_l.makeScale(e,t)),this}rotate(e){return this.premultiply(_l.makeRotation(-e)),this}translate(e,t){return this.premultiply(_l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _l=new rt;function bm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function po(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rx(){const n=po("canvas");return n.style.display="block",n}const nf={};function Wr(n){n in nf||(nf[n]=!0,console.warn(n))}function sx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function ox(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ax(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const rf=new rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sf=new rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lx(){const n={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===xt&&(r.r=Mi(r.r),r.g=Mi(r.g),r.b=Mi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xt&&(r.r=rs(r.r),r.g=rs(r.g),r.b=rs(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vi?wa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Xt]:{primaries:e,whitePoint:i,transfer:wa,toXYZ:rf,fromXYZ:sf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:rf,fromXYZ:sf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),n}const ct=lx();function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Rr;class cx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rr===void 0&&(Rr=po("canvas")),Rr.width=e.width,Rr.height=e.height;const i=Rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Rr}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=po("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mi(t[i]/255)*255):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ux=0;class Am{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vl(r[o].image)):s.push(vl(r[o]))}else s=vl(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function vl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hx=0;class Gt extends Er{constructor(e=Gt.DEFAULT_IMAGE,t=Gt.DEFAULT_MAPPING,i=Wn,r=Wn,s=Vt,o=Xn,a=xn,l=Ti,c=Gt.DEFAULT_ANISOTROPY,u=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=On(),this.name="",this.source=new Am(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==um)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case us:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case us:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=um;Gt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,S=(d+1)/2,H=(p+1)/2,O=(u+f)/4,I=(h+x)/4,V=(g+m)/4;return w>S&&w>H?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=O/i,s=I/i):S>H?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=O/r,s=V/r):H<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(H),i=I/s,r=V/s),this.set(i,r,s,t),this}let R=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(R)<.001&&(R=1),this.x=(m-g)/R,this.y=(h-x)/R,this.z=(f-u)/R,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fx extends Er{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Gt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Am(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends fx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class wm extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dx extends Gt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kn{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*x,R=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const H=Math.sqrt(w),O=Math.atan2(H,p*R);m=Math.sin(m*O)/H,a=Math.sin(a*O)/H}const S=a*R;if(l=l*m+f*S,c=c*m+d*S,u=u*m+g*S,h=h*m+x*S,m===1-a){const H=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=H,c*=H,u*=H,h*=H}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(of.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(of.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xl.copy(this).projectOnVector(e),this.sub(xl)}reflect(e){return this.sub(xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xl=new G,of=new Kn;class Ri{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lo.copy(i.boundingBox)),Lo.applyMatrix4(e.matrixWorld),this.union(Lo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),Io.subVectors(this.max,Ps),Cr.subVectors(e.a,Ps),Pr.subVectors(e.b,Ps),Lr.subVectors(e.c,Ps),Li.subVectors(Pr,Cr),Ii.subVectors(Lr,Pr),nr.subVectors(Cr,Lr);let t=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-nr.z,nr.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,nr.z,0,-nr.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-nr.y,nr.x,0];return!yl(t,Cr,Pr,Lr,Io)||(t=[1,0,0,0,1,0,0,0,1],!yl(t,Cr,Pr,Lr,Io))?!1:(Do.crossVectors(Li,Ii),t=[Do.x,Do.y,Do.z],yl(t,Cr,Pr,Lr,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new G,new G,new G,new G,new G,new G,new G,new G],wn=new G,Lo=new Ri,Cr=new G,Pr=new G,Lr=new G,Li=new G,Ii=new G,nr=new G,Ps=new G,Io=new G,Do=new G,ir=new G;function yl(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ir.fromArray(n,s);const a=r.x*Math.abs(ir.x)+r.y*Math.abs(ir.y)+r.z*Math.abs(ir.z),l=e.dot(ir),c=t.dot(ir),u=i.dot(ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const px=new Ri,Ls=new G,Sl=new G;class Jn{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):px.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);const t=Ls.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ls,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(Sl)),this.expandByPoint(Ls.copy(e.center).sub(Sl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new G,Ml=new G,No=new G,Di=new G,El=new G,Uo=new G,Tl=new G;class xs{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ml.copy(e).add(t).multiplyScalar(.5),No.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(Ml);const s=e.distanceTo(t)*.5,o=-this.direction.dot(No),a=Di.dot(this.direction),l=-Di.dot(No),c=Di.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Ml).addScaledVector(No,f),d}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,r,s){El.subVectors(t,e),Uo.subVectors(i,e),Tl.crossVectors(El,Uo);let o=this.direction.dot(Tl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,e);const l=a*this.direction.dot(Uo.crossVectors(Di,Uo));if(l<0)return null;const c=a*this.direction.dot(El.cross(Di));if(c<0||l+c>o)return null;const u=-a*Di.dot(Tl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(e,t,i,r,s,o,a,l,c,u,h,f,d,g,x,m){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,d,g,x,m)}set(e,t,i,r,s,o,a,l,c,u,h,f,d,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),o=1/Ir.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,x=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mx,e,gx)}lookAt(e,t,i){const r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ni.crossVectors(i,pn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ni.crossVectors(i,pn)),Ni.normalize(),Oo.crossVectors(pn,Ni),r[0]=Ni.x,r[4]=Oo.x,r[8]=pn.x,r[1]=Ni.y,r[5]=Oo.y,r[9]=pn.y,r[2]=Ni.z,r[6]=Oo.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],x=i[6],m=i[10],p=i[14],R=i[3],w=i[7],S=i[11],H=i[15],O=r[0],I=r[4],V=r[8],T=r[12],E=r[1],F=r[5],z=r[9],K=r[13],ne=r[2],he=r[6],J=r[10],ue=r[14],$=r[3],ye=r[7],we=r[11],Ie=r[15];return s[0]=o*O+a*E+l*ne+c*$,s[4]=o*I+a*F+l*he+c*ye,s[8]=o*V+a*z+l*J+c*we,s[12]=o*T+a*K+l*ue+c*Ie,s[1]=u*O+h*E+f*ne+d*$,s[5]=u*I+h*F+f*he+d*ye,s[9]=u*V+h*z+f*J+d*we,s[13]=u*T+h*K+f*ue+d*Ie,s[2]=g*O+x*E+m*ne+p*$,s[6]=g*I+x*F+m*he+p*ye,s[10]=g*V+x*z+m*J+p*we,s[14]=g*T+x*K+m*ue+p*Ie,s[3]=R*O+w*E+S*ne+H*$,s[7]=R*I+w*F+S*he+H*ye,s[11]=R*V+w*z+S*J+H*we,s[15]=R*T+w*K+S*ue+H*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*d-i*l*d)+x*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+m*(+t*c*h-t*a*d-s*o*h+i*o*d+s*a*u-i*c*u)+p*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],R=h*m*c-x*f*c+x*l*d-a*m*d-h*l*p+a*f*p,w=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,S=u*x*c-g*h*c+g*a*d-o*x*d-u*a*p+o*h*p,H=g*h*l-u*x*l-g*a*f+o*x*f+u*a*m-o*h*m,O=t*R+i*w+r*S+s*H;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/O;return e[0]=R*I,e[1]=(x*f*s-h*m*s-x*r*d+i*m*d+h*r*p-i*f*p)*I,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*p+i*l*p)*I,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*d-i*l*d)*I,e[4]=w*I,e[5]=(u*m*s-g*f*s+g*r*d-t*m*d-u*r*p+t*f*p)*I,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*I,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*I,e[8]=S*I,e[9]=(g*h*s-u*x*s-g*i*d+t*x*d+u*i*p-t*h*p)*I,e[10]=(o*x*s-g*a*s+g*i*c-t*x*c-o*i*p+t*a*p)*I,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*d-t*a*d)*I,e[12]=H*I,e[13]=(u*x*r-g*h*r+g*i*f-t*x*f-u*i*m+t*h*m)*I,e[14]=(g*a*r-o*x*r-g*i*l+t*x*l+o*i*m-t*a*m)*I,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,x=o*u,m=o*h,p=a*h,R=l*c,w=l*u,S=l*h,H=i.x,O=i.y,I=i.z;return r[0]=(1-(x+p))*H,r[1]=(d+S)*H,r[2]=(g-w)*H,r[3]=0,r[4]=(d-S)*O,r[5]=(1-(f+p))*O,r[6]=(m+R)*O,r[7]=0,r[8]=(g+w)*I,r[9]=(m-R)*I,r[10]=(1-(f+x))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ir.set(r[0],r[1],r[2]).length();const o=Ir.set(r[4],r[5],r[6]).length(),a=Ir.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const c=1/s,u=1/o,h=1/a;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,t.setFromRotationMatrix(Rn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Si){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let d,g;if(a===Si)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ra)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Si){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,d=(i+r)*u;let g,x;if(a===Si)g=(o+s)*h,x=-2*h;else if(a===Ra)g=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ir=new G,Rn=new $e,mx=new G(0,0,0),gx=new G(1,1,1),Ni=new G,Oo=new G,pn=new G,af=new $e,lf=new Kn;class $n{constructor(e=0,t=0,i=0,r=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return af.makeRotationFromQuaternion(e),this.setFromRotationMatrix(af,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lf.setFromEuler(this),this.setFromQuaternion(lf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Xu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _x=0;const cf=new G,Dr=new Kn,ai=new $e,Fo=new G,Is=new G,vx=new G,xx=new Kn,uf=new G(1,0,0),hf=new G(0,1,0),ff=new G(0,0,1),df={type:"added"},yx={type:"removed"},Nr={type:"childadded",child:null},bl={type:"childremoved",child:null};class At extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DEFAULT_UP.clone();const e=new G,t=new $n,i=new Kn,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new rt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=At.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(uf,e)}rotateY(e){return this.rotateOnAxis(hf,e)}rotateZ(e){return this.rotateOnAxis(ff,e)}translateOnAxis(e,t){return cf.copy(e).applyQuaternion(this.quaternion),this.position.add(cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uf,e)}translateY(e){return this.translateOnAxis(hf,e)}translateZ(e){return this.translateOnAxis(ff,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fo.copy(e):Fo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Is,Fo,this.up):ai.lookAt(Fo,Is,this.up),this.quaternion.setFromRotationMatrix(ai),r&&(ai.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(ai),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(df),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yx),bl.child=e,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(df),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,xx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}At.DEFAULT_UP=new G(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new G,li=new G,Al=new G,ci=new G,Ur=new G,Or=new G,pf=new G,wl=new G,Rl=new G,Cl=new G,Pl=new ut,Ll=new ut,Il=new ut;class Dn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Cn.subVectors(e,t),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Cn.subVectors(r,t),li.subVectors(i,t),Al.subVectors(e,t);const o=Cn.dot(Cn),a=Cn.dot(li),l=Cn.dot(Al),c=li.dot(li),u=li.dot(Al),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Pl.setScalar(0),Ll.setScalar(0),Il.setScalar(0),Pl.fromBufferAttribute(e,t),Ll.fromBufferAttribute(e,i),Il.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Pl,s.x),o.addScaledVector(Ll,s.y),o.addScaledVector(Il,s.z),o}static isFrontFacing(e,t,i,r){return Cn.subVectors(i,t),li.subVectors(e,t),Cn.cross(li).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Cn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ur.subVectors(r,i),Or.subVectors(s,i),wl.subVectors(e,i);const l=Ur.dot(wl),c=Or.dot(wl);if(l<=0&&c<=0)return t.copy(i);Rl.subVectors(e,r);const u=Ur.dot(Rl),h=Or.dot(Rl);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ur,o);Cl.subVectors(e,s);const d=Ur.dot(Cl),g=Or.dot(Cl);if(g>=0&&d<=g)return t.copy(s);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Or,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return pf.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(pf,a);const p=1/(m+x+f);return o=x*p,a=f*p,t.copy(i).addScaledVector(Ur,o).addScaledVector(Or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function Dl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ct.workingColorSpace){if(e=Wu(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Dl(o,s,e+1/3),this.g=Dl(o,s,e),this.b=Dl(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,t=It){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const i=Rm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=rs(e.r),this.g=rs(e.g),this.b=rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return ct.fromWorkingColorSpace(Zt.copy(this),e),Math.round(ot(Zt.r*255,0,255))*65536+Math.round(ot(Zt.g*255,0,255))*256+Math.round(ot(Zt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Zt.copy(this),t);const i=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=It){ct.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,i=Zt.g,r=Zt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+t,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ui),e.getHSL(Bo);const i=Qs(Ui.h,Bo.h,t),r=Qs(Ui.s,Bo.s,t),s=Qs(Ui.l,Bo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new qe;qe.NAMES=Rm;let Sx=0;class Yn extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=On(),this.name="",this.type="Material",this.blending=ns,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ec,this.blendDst=Tc,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(i.blending=this.blending),this.side!==qn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ec&&(i.blendSrc=this.blendSrc),this.blendDst!==Tc&&(i.blendDst=this.blendDst),this.blendEquation!==fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pr extends Yn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=cm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xi=Mx();function Mx(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function Ex(n){Math.abs(n)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),n=ot(n,-65504,65504),xi.floatView[0]=n;const e=xi.uint32View[0],t=e>>23&511;return xi.baseTable[t]+((e&8388607)>>xi.shiftTable[t])}function Tx(n){const e=n>>10;return xi.uint32View[0]=xi.mantissaTable[xi.offsetTable[e]+(n&1023)]+xi.exponentTable[e],xi.floatView[0]}const mf={toHalfFloat:Ex,fromHalfFloat:Tx},Lt=new G,ko=new Je;let bx=0;class Kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=au,this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==au&&(e.usage=this.usage),e}}class Cm extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Pm extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Fn extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ax=0;const Sn=new $e,Nl=new At,Fr=new G,mn=new Ri,Ds=new Ri,Ht=new G;class bn extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bm(e)?Pm:Cm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new rt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,i){return Sn.makeTranslation(e,t,i),this.applyMatrix4(Sn),this}scale(e,t,i){return Sn.makeScale(e,t,i),this.applyMatrix4(Sn),this}lookAt(e){return Nl.lookAt(e),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(mn.min,Ds.min),mn.expandByPoint(Ht),Ht.addVectors(mn.max,Ds.max),mn.expandByPoint(Ht)):(mn.expandByPoint(Ds.min),mn.expandByPoint(Ds.max))}mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ht.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(e,c),Ht.add(Fr)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let V=0;V<i.count;V++)a[V]=new G,l[V]=new G;const c=new G,u=new G,h=new G,f=new Je,d=new Je,g=new Je,x=new G,m=new G;function p(V,T,E){c.fromBufferAttribute(i,V),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,E),f.fromBufferAttribute(s,V),d.fromBufferAttribute(s,T),g.fromBufferAttribute(s,E),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const F=1/(d.x*g.y-g.x*d.y);isFinite(F)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(F),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(F),a[V].add(x),a[T].add(x),a[E].add(x),l[V].add(m),l[T].add(m),l[E].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let V=0,T=R.length;V<T;++V){const E=R[V],F=E.start,z=E.count;for(let K=F,ne=F+z;K<ne;K+=3)p(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const w=new G,S=new G,H=new G,O=new G;function I(V){H.fromBufferAttribute(r,V),O.copy(H);const T=a[V];w.copy(T),w.sub(H.multiplyScalar(H.dot(T))).normalize(),S.crossVectors(O,T);const F=S.dot(l[V])<0?-1:1;o.setXYZW(V,w.x,w.y,w.z,F)}for(let V=0,T=R.length;V<T;++V){const E=R[V],F=E.start,z=E.count;for(let K=F,ne=F+z;K<ne;K+=3)I(e.getX(K+0)),I(e.getX(K+1)),I(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Kt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gf=new $e,rr=new xs,Ho=new Jn,_f=new G,zo=new G,Vo=new G,Go=new G,Ul=new G,Wo=new G,vf=new G,Xo=new G;class hn extends At{constructor(e=new bn,t=new pr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Ul.fromBufferAttribute(h,e),o?Wo.addScaledVector(Ul,u):Wo.addScaledVector(Ul.sub(t),u))}t.add(Wo)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(s),rr.copy(e.ray).recast(e.near),!(Ho.containsPoint(rr.origin)===!1&&(rr.intersectSphere(Ho,_f)===null||rr.origin.distanceToSquared(_f)>(e.far-e.near)**2))&&(gf.copy(s).invert(),rr.copy(e.ray).applyMatrix4(gf),!(i.boundingBox!==null&&rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,rr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],R=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let S=R,H=w;S<H;S+=3){const O=a.getX(S),I=a.getX(S+1),V=a.getX(S+2);r=jo(this,p,e,i,c,u,h,O,I,V),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const R=a.getX(m),w=a.getX(m+1),S=a.getX(m+2);r=jo(this,o,e,i,c,u,h,R,w,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],R=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let S=R,H=w;S<H;S+=3){const O=S,I=S+1,V=S+2;r=jo(this,p,e,i,c,u,h,O,I,V),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const R=m,w=m+1,S=m+2;r=jo(this,o,e,i,c,u,h,R,w,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function wx(n,e,t,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===qn,a),l===null)return null;Xo.copy(a),Xo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Xo);return c<t.near||c>t.far?null:{distance:c,point:Xo.clone(),object:n}}function jo(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,zo),n.getVertexPosition(l,Vo),n.getVertexPosition(c,Go);const u=wx(n,e,t,i,zo,Vo,Go,vf);if(u){const h=new G;Dn.getBarycoord(vf,zo,Vo,Go,h),r&&(u.uv=Dn.getInterpolatedAttribute(r,a,l,c,h,new Je)),s&&(u.uv1=Dn.getInterpolatedAttribute(s,a,l,c,h,new Je)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,l,c,h,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new G,materialIndex:0};Dn.getNormal(zo,Vo,Go,f.normal),u.face=f,u.barycoord=h}return u}class xo extends bn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Fn(c,3)),this.setAttribute("normal",new Fn(u,3)),this.setAttribute("uv",new Fn(h,2));function g(x,m,p,R,w,S,H,O,I,V,T){const E=S/I,F=H/V,z=S/2,K=H/2,ne=O/2,he=I+1,J=V+1;let ue=0,$=0;const ye=new G;for(let we=0;we<J;we++){const Ie=we*F-K;for(let Ue=0;Ue<he;Ue++){const Ze=Ue*E-z;ye[x]=Ze*R,ye[m]=Ie*w,ye[p]=ne,c.push(ye.x,ye.y,ye.z),ye[x]=0,ye[m]=0,ye[p]=O>0?1:-1,u.push(ye.x,ye.y,ye.z),h.push(Ue/I),h.push(1-we/V),ue+=1}}for(let we=0;we<V;we++)for(let Ie=0;Ie<I;Ie++){const Ue=f+Ie+he*we,Ze=f+Ie+he*(we+1),fe=f+(Ie+1)+he*(we+1),Ee=f+(Ie+1)+he*we;l.push(Ue,Ze,Ee),l.push(Ze,fe,Ee),$+=6}a.addGroup(d,$,T),d+=$,f+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function tn(n){const e={};for(let t=0;t<n.length;t++){const i=ps(n[t]);for(const r in i)e[r]=i[r]}return e}function Rx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const lu={clone:ps,merge:tn};var Cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends Yn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cx,this.fragmentShader=Px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=Rx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Im extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new G,xf=new Je,yf=new Je;class on extends Im{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Js*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ds*2*Math.atan(Math.tan(Js*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,xf,yf),t.subVectors(yf,xf)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Js*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Br=-90,kr=1;class Lx extends At{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(Br,kr,e,t);r.layers=this.layers,this.add(r);const s=new on(Br,kr,e,t);s.layers=this.layers,this.add(s);const o=new on(Br,kr,e,t);o.layers=this.layers,this.add(o);const a=new on(Br,kr,e,t);a.layers=this.layers,this.add(a);const l=new on(Br,kr,e,t);l.layers=this.layers,this.add(l);const c=new on(Br,kr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ra)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Dm extends Gt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ls,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ix extends Yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dm(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new xo(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Xi});s.uniforms.tEquirect.value=t;const o=new hn(r,s),a=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Vt),new Lx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}let mr=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Dx={type:"move"};class Ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new mr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class o1 extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Nx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=au,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new G;class ju{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ju(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Sf=new G,Mf=new ut,Ef=new ut,Ux=new G,Tf=new $e,Yo=new G,Fl=new Jn,bf=new $e,Bl=new xs;class Ox extends hn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Kh,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ri),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Yo),this.boundingBox.expandByPoint(Yo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Yo),this.boundingSphere.expandByPoint(Yo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fl.copy(this.boundingSphere),Fl.applyMatrix4(r),e.ray.intersectsSphere(Fl)!==!1&&(bf.copy(r).invert(),Bl.copy(e.ray).applyMatrix4(bf),!(this.boundingBox!==null&&Bl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ut,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Kh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Mf.fromBufferAttribute(r.attributes.skinIndex,e),Ef.fromBufferAttribute(r.attributes.skinWeight,e),Sf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Ef.getComponent(s);if(o!==0){const a=Mf.getComponent(s);Tf.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Ux.copy(Sf).applyMatrix4(Tf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Nm extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Yu extends Gt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=an,u=an,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Af=new $e,Fx=new $e;class qu{constructor(e=[],t=[]){this.uuid=On(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new $e;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Fx;Af.multiplyMatrices(a,t[s]),Af.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new qu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Yu(t,e,e,xn,un);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Nm),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class cu extends Kt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Hr=new $e,wf=new $e,qo=[],Rf=new Ri,Bx=new $e,Ns=new hn,Us=new Jn;class kx extends hn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Bx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hr),Rf.copy(e.boundingBox).applyMatrix4(Hr),this.boundingBox.union(Rf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Hr),Us.copy(e.boundingSphere).applyMatrix4(Hr),this.boundingSphere.union(Us)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ns.geometry=this.geometry,Ns.material=this.material,Ns.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(i),e.ray.intersectsSphere(Us)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Hr),wf.multiplyMatrices(i,Hr),Ns.matrixWorld=wf,Ns.raycast(e,qo);for(let o=0,a=qo.length;o<a;o++){const l=qo[o];l.instanceId=s,l.object=this,t.push(l)}qo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Yu(new Float32Array(r*this.count),r,this.count,Ka,un));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const kl=new G,Hx=new G,zx=new rt;class pi{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=kl.subVectors(i,t).cross(Hx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(kl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||zx.getNormalMatrix(e),r=this.coplanarPoint(kl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new Jn,Ko=new G;class Ku{constructor(e=new pi,t=new pi,i=new pi,r=new pi,s=new pi,o=new pi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Si){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],x=r[10],m=r[11],p=r[12],R=r[13],w=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-d,S-p).normalize(),i[1].setComponents(l+s,f+c,m+d,S+p).normalize(),i[2].setComponents(l+o,f+u,m+g,S+R).normalize(),i[3].setComponents(l-o,f-u,m-g,S-R).normalize(),i[4].setComponents(l-a,f-h,m-x,S-w).normalize(),t===Si)i[5].setComponents(l+a,f+h,m+x,S+w).normalize();else if(t===Ra)i[5].setComponents(a,h,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ko.x=r.normal.x>0?e.max.x:e.min.x,Ko.y=r.normal.y>0?e.max.y:e.min.y,Ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $u extends Yn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ca=new G,Pa=new G,Cf=new $e,Os=new xs,$o=new Jn,Hl=new G,Pf=new G;class Zu extends At{constructor(e=new bn,t=new $u){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ca.fromBufferAttribute(t,r-1),Pa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ca.distanceTo(Pa);e.setAttribute("lineDistance",new Fn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),$o.copy(i.boundingSphere),$o.applyMatrix4(r),$o.radius+=s,e.ray.intersectsSphere($o)===!1)return;Cf.copy(r).invert(),Os.copy(e.ray).applyMatrix4(Cf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){const p=u.getX(x),R=u.getX(x+1),w=Zo(this,e,Os,l,p,R,x);w&&t.push(w)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(d),p=Zo(this,e,Os,l,x,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){const p=Zo(this,e,Os,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=Zo(this,e,Os,l,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zo(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Ca.fromBufferAttribute(a,r),Pa.fromBufferAttribute(a,s),t.distanceSqToSegment(Ca,Pa,Hl,Pf)>i)return;Hl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Hl);if(!(c<e.near||c>e.far))return{distance:c,point:Pf.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Lf=new G,If=new G;class Um extends Zu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Lf.fromBufferAttribute(t,r),If.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Lf.distanceTo(If);e.setAttribute("lineDistance",new Fn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vx extends Zu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Om extends Yn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Df=new $e,uu=new xs,Jo=new Jn,Qo=new G;class Gx extends At{constructor(e=new bn,t=new Om){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(r),Jo.radius+=s,e.ray.intersectsSphere(Jo)===!1)return;Df.copy(r).invert(),uu.copy(e.ray).applyMatrix4(Df);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){const m=c.getX(g);Qo.fromBufferAttribute(h,m),Nf(Qo,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Qo.fromBufferAttribute(h,g),Nf(Qo,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Nf(n,e,t,i,r,s,o){const a=uu.distanceSqToPoint(n);if(a<t){const l=new G;uu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Fm extends Gt{constructor(e,t,i,r,s,o,a,l,c,u=is){if(u!==is&&u!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===is&&(i=yr),i===void 0&&u===fs&&(i=hs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $a extends bn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const R=p*f-o;for(let w=0;w<c;w++){const S=w*h-s;g.push(S,-R,0),x.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<a;R++){const w=R+c*p,S=R+c*(p+1),H=R+1+c*(p+1),O=R+1+c*p;d.push(w,S,O),d.push(S,H,O)}this.setIndex(d),this.setAttribute("position",new Fn(g,3)),this.setAttribute("normal",new Fn(x,3)),this.setAttribute("uv",new Fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $a(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ju extends Yn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mm,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qn extends Ju{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Wx extends Yn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xx extends Yn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ea(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function jx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Yx(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Uf(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Bm(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class yo{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class qx extends yo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$h,endingEnd:$h}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zh:s=e,a=2*t-i;break;case Jh:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Zh:o=e,l=2*i-t;break;case Jh:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,R=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,w=(-1-d)*m+(1.5+d)*x+.5*g,S=d*m-d*x;for(let H=0;H!==a;++H)s[H]=p*o[u+H]+R*o[c+H]+w*o[l+H]+S*o[h+H];return s}}class Kx extends yo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class $x extends yo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class ei{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ea(t,this.TimeBufferType),this.values=ea(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ea(e.times,Array),values:ea(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $x(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ho:t=this.InterpolantFactoryMethodDiscrete;break;case fo:t=this.InterpolantFactoryMethodLinear;break;case gl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ho;case this.InterpolantFactoryMethodLinear:return fo;case this.InterpolantFactoryMethodSmooth:return gl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&jx(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===gl,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ei.prototype.TimeBufferType=Float32Array;ei.prototype.ValueBufferType=Float32Array;ei.prototype.DefaultInterpolation=fo;class ys extends ei{constructor(e,t,i){super(e,t,i)}}ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=ho;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;class km extends ei{}km.prototype.ValueTypeName="color";class ms extends ei{}ms.prototype.ValueTypeName="number";class Zx extends yo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Kn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class gs extends ei{InterpolantFactoryMethodLinear(e){return new Zx(this.times,this.values,this.getValueSize(),e)}}gs.prototype.ValueTypeName="quaternion";gs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ss extends ei{constructor(e,t,i){super(e,t,i)}}Ss.prototype.ValueTypeName="string";Ss.prototype.ValueBufferType=Array;Ss.prototype.DefaultInterpolation=ho;Ss.prototype.InterpolantFactoryMethodLinear=void 0;Ss.prototype.InterpolantFactoryMethodSmooth=void 0;class _s extends ei{}_s.prototype.ValueTypeName="vector";class Jx{constructor(e="",t=-1,i=[],r=Pv){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=On(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(ey(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(ei.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=Yx(l);l=Uf(l,1,u),c=Uf(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new ms(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,x){if(d.length!==0){const m=[],p=[];Bm(d,m,p,g),m.length!==0&&x.push(new h(f,m,p))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(const x in d){const m=[],p=[];for(let R=0;R!==f[g].morphTargets.length;++R){const w=f[g];m.push(w.time),p.push(w.morphTarget===x?1:0)}r.push(new ms(".morphTargetInfluence["+x+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";i(_s,d+".position",f,"pos",r),i(gs,d+".quaternion",f,"rot",r),i(_s,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Qx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ms;case"vector":case"vector2":case"vector3":case"vector4":return _s;case"color":return km;case"quaternion":return gs;case"bool":case"boolean":return ys;case"string":return Ss}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function ey(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Qx(n.type);if(n.times===void 0){const t=[],i=[];Bm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Vi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ty{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const ny=new ty;class $i{constructor(e){this.manager=e!==void 0?e:ny,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}$i.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class iy extends Error{constructor(e,t){super(e),this.response=t}}class mo extends $i{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Vi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:i,onError:r});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ui[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let x=0;const m=new ReadableStream({start(p){R();function R(){h.read().then(({done:w,value:S})=>{if(w)p.close();else{x+=S.byteLength;const H=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let O=0,I=u.length;O<I;O++){const V=u[O];V.onProgress&&V.onProgress(H)}p.enqueue(S),R()}},w=>{p.error(w)})}}});return new Response(m)}else throw new iy(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Vi.add(e,c);const u=ui[e];delete ui[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ui[e];if(u===void 0)throw this.manager.itemError(e),c;delete ui[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ry extends $i{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=po("img");function l(){u(),Vi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class sy extends $i{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new Yu,a=new mo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Wn,o.wrapT=c.wrapT!==void 0?c.wrapT:Wn,o.magFilter=c.magFilter!==void 0?c.magFilter:Vt,o.minFilter=c.minFilter!==void 0?c.minFilter:Vt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Xn),c.mipmapCount===1&&(o.minFilter=Vt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},i,r),o}}class oy extends $i{constructor(e){super(e)}load(e,t,i,r){const s=new Gt,o=new ry(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Za extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const zl=new $e,Of=new G,Ff=new G;class Qu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ku,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Of.setFromMatrixPosition(e.matrixWorld),t.position.copy(Of),Ff.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ff),t.updateMatrixWorld(),zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ay extends Qu{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ds*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ly extends Za{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ay}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bf=new $e,Fs=new G,Vl=new G;class cy extends Qu{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Fs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Fs),Vl.copy(i.position),Vl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Vl),i.updateMatrixWorld(),r.makeTranslation(-Fs.x,-Fs.y,-Fs.z),Bf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bf)}}class uy extends Za{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new cy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class eh extends Im{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hy extends Qu{constructor(){super(new eh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fy extends Za{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new hy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class a1 extends Za{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class eo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class dy extends $i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vi.get(e);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Vi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Vi.add(e,l),s.manager.itemStart(e)}}class py extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class l1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=kf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function kf(){return performance.now()}const th="\\[\\]\\.:\\/",my=new RegExp("["+th+"]","g"),nh="[^"+th+"]",gy="[^"+th.replace("\\.","")+"]",_y=/((?:WC+[\/:])*)/.source.replace("WC",nh),vy=/(WCOD+)?/.source.replace("WCOD",gy),xy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",nh),yy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",nh),Sy=new RegExp("^"+_y+vy+xy+yy+"$"),My=["material","materials","bones","map"];class Ey{constructor(e,t,i){const r=i||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class vt{constructor(e,t,i){this.path=t,this.parsedPath=i||vt.parseTrackName(t),this.node=vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new vt.Composite(e,t,i):new vt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(my,"")}static parseTrackName(e){const t=Sy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);My.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}vt.Composite=Ey;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Hf=new $e;class c1{constructor(e,t,i=0,r=1/0){this.ray=new xs(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Xu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hf),this}intersectObject(e,t=!0,i=[]){return hu(e,this,i,t),i.sort(zf),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)hu(e[r],this,i,t);return i.sort(zf),i}}function zf(n,e){return n.distance-e.distance}function hu(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)hu(s[o],e,t,!0)}}class Vf{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ot(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class u1 extends Um{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new bn;r.setAttribute("position",new Fn(t,3)),r.setAttribute("color",new Fn(i,3));const s=new $u({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new qe,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ty extends Er{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Gf(n,e,t,i){const r=by(i);switch(t){case mm:return n*e;case _m:return n*e;case vm:return n*e*2;case Ka:return n*e/r.components*r.byteLength;case zu:return n*e/r.components*r.byteLength;case xm:return n*e*2/r.components*r.byteLength;case Vu:return n*e*2/r.components*r.byteLength;case gm:return n*e*3/r.components*r.byteLength;case xn:return n*e*4/r.components*r.byteLength;case Gu:return n*e*4/r.components*r.byteLength;case ha:case fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case da:case pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Uc:case Fc:return Math.max(n,16)*Math.max(e,8)/4;case Nc:case Oc:return Math.max(n,8)*Math.max(e,8)/2;case Bc:case kc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case jc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case qc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case $c:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case eu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ma:case tu:case nu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ym:case iu:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ru:case su:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function by(n){switch(n){case Ti:case fm:return{byteLength:1,components:1};case uo:case dm:case yi:return{byteLength:2,components:1};case ku:case Hu:return{byteLength:2,components:4};case yr:case Bu:case un:return{byteLength:4,components:1};case pm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fu);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hm(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ay(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const x=h[d];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var wy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ry=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ny=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Oy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,By=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ky=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$y=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iS="gl_FragColor = linearToOutputTexel( gl_FragColor );",rS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,lS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,uS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_S=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,yS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ES=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,AS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,RS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,US=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,XS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$S=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,cM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,yM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,SM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,DM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,NM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,UM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,XM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,YM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,rE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,st={alphahash_fragment:wy,alphahash_pars_fragment:Ry,alphamap_fragment:Cy,alphamap_pars_fragment:Py,alphatest_fragment:Ly,alphatest_pars_fragment:Iy,aomap_fragment:Dy,aomap_pars_fragment:Ny,batching_pars_vertex:Uy,batching_vertex:Oy,begin_vertex:Fy,beginnormal_vertex:By,bsdfs:ky,iridescence_fragment:Hy,bumpmap_pars_fragment:zy,clipping_planes_fragment:Vy,clipping_planes_pars_fragment:Gy,clipping_planes_pars_vertex:Wy,clipping_planes_vertex:Xy,color_fragment:jy,color_pars_fragment:Yy,color_pars_vertex:qy,color_vertex:Ky,common:$y,cube_uv_reflection_fragment:Zy,defaultnormal_vertex:Jy,displacementmap_pars_vertex:Qy,displacementmap_vertex:eS,emissivemap_fragment:tS,emissivemap_pars_fragment:nS,colorspace_fragment:iS,colorspace_pars_fragment:rS,envmap_fragment:sS,envmap_common_pars_fragment:oS,envmap_pars_fragment:aS,envmap_pars_vertex:lS,envmap_physical_pars_fragment:xS,envmap_vertex:cS,fog_vertex:uS,fog_pars_vertex:hS,fog_fragment:fS,fog_pars_fragment:dS,gradientmap_pars_fragment:pS,lightmap_pars_fragment:mS,lights_lambert_fragment:gS,lights_lambert_pars_fragment:_S,lights_pars_begin:vS,lights_toon_fragment:yS,lights_toon_pars_fragment:SS,lights_phong_fragment:MS,lights_phong_pars_fragment:ES,lights_physical_fragment:TS,lights_physical_pars_fragment:bS,lights_fragment_begin:AS,lights_fragment_maps:wS,lights_fragment_end:RS,logdepthbuf_fragment:CS,logdepthbuf_pars_fragment:PS,logdepthbuf_pars_vertex:LS,logdepthbuf_vertex:IS,map_fragment:DS,map_pars_fragment:NS,map_particle_fragment:US,map_particle_pars_fragment:OS,metalnessmap_fragment:FS,metalnessmap_pars_fragment:BS,morphinstance_vertex:kS,morphcolor_vertex:HS,morphnormal_vertex:zS,morphtarget_pars_vertex:VS,morphtarget_vertex:GS,normal_fragment_begin:WS,normal_fragment_maps:XS,normal_pars_fragment:jS,normal_pars_vertex:YS,normal_vertex:qS,normalmap_pars_fragment:KS,clearcoat_normal_fragment_begin:$S,clearcoat_normal_fragment_maps:ZS,clearcoat_pars_fragment:JS,iridescence_pars_fragment:QS,opaque_fragment:eM,packing:tM,premultiplied_alpha_fragment:nM,project_vertex:iM,dithering_fragment:rM,dithering_pars_fragment:sM,roughnessmap_fragment:oM,roughnessmap_pars_fragment:aM,shadowmap_pars_fragment:lM,shadowmap_pars_vertex:cM,shadowmap_vertex:uM,shadowmask_pars_fragment:hM,skinbase_vertex:fM,skinning_pars_vertex:dM,skinning_vertex:pM,skinnormal_vertex:mM,specularmap_fragment:gM,specularmap_pars_fragment:_M,tonemapping_fragment:vM,tonemapping_pars_fragment:xM,transmission_fragment:yM,transmission_pars_fragment:SM,uv_pars_fragment:MM,uv_pars_vertex:EM,uv_vertex:TM,worldpos_vertex:bM,background_vert:AM,background_frag:wM,backgroundCube_vert:RM,backgroundCube_frag:CM,cube_vert:PM,cube_frag:LM,depth_vert:IM,depth_frag:DM,distanceRGBA_vert:NM,distanceRGBA_frag:UM,equirect_vert:OM,equirect_frag:FM,linedashed_vert:BM,linedashed_frag:kM,meshbasic_vert:HM,meshbasic_frag:zM,meshlambert_vert:VM,meshlambert_frag:GM,meshmatcap_vert:WM,meshmatcap_frag:XM,meshnormal_vert:jM,meshnormal_frag:YM,meshphong_vert:qM,meshphong_frag:KM,meshphysical_vert:$M,meshphysical_frag:ZM,meshtoon_vert:JM,meshtoon_frag:QM,points_vert:eE,points_frag:tE,shadow_vert:nE,shadow_frag:iE,sprite_vert:rE,sprite_frag:sE},Pe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rt}},envmap:{envMap:{value:null},envMapRotation:{value:new rt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rt},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0},uvTransform:{value:new rt}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rt},alphaMap:{value:null},alphaMapTransform:{value:new rt},alphaTest:{value:0}}},Vn={basic:{uniforms:tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:tn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:tn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new qe(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:tn([Pe.points,Pe.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:tn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:tn([Pe.common,Pe.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:tn([Pe.sprite,Pe.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rt}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:tn([Pe.common,Pe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:tn([Pe.lights,Pe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Vn.physical={uniforms:tn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rt},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rt},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rt},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rt},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rt},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rt}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const ta={r:0,b:0,g:0},or=new $n,oE=new $e;function aE(n,e,t,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?t:e).get(S)),S}function x(w){let S=!1;const H=g(w);H===null?p(a,l):H&&H.isColor&&(p(H,1),S=!0);const O=n.xr.getEnvironmentBlendMode();O==="additive"?i.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,S){const H=g(S);H&&(H.isCubeTexture||H.mapping===qa)?(u===void 0&&(u=new hn(new xo(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:ps(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,I,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),or.copy(S.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),u.material.uniforms.envMap.value=H,u.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(oE.makeRotationFromEuler(or)),u.material.toneMapped=ct.getTransfer(H.colorSpace)!==xt,(h!==H||f!==H.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=H,f=H.version,d=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):H&&H.isTexture&&(c===void 0&&(c=new hn(new $a(2,2),new bi({name:"BackgroundMaterial",uniforms:ps(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=H,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ct.getTransfer(H.colorSpace)!==xt,H.matrixAutoUpdate===!0&&H.updateMatrix(),c.material.uniforms.uvTransform.value.copy(H.matrix),(h!==H||f!==H.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=H,f=H.version,d=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,S){w.getRGB(ta,Lm(n)),i.buffers.color.setClear(ta.r,ta.g,ta.b,S,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,S=1){a.set(w),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:x,addToRenderList:m,dispose:R}}function lE(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(E,F,z,K,ne){let he=!1;const J=h(K,z,F);s!==J&&(s=J,c(s.object)),he=d(E,K,z,ne),he&&g(E,K,z,ne),ne!==null&&e.update(ne,n.ELEMENT_ARRAY_BUFFER),(he||o)&&(o=!1,S(E,F,z,K),ne!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function h(E,F,z){const K=z.wireframe===!0;let ne=i[E.id];ne===void 0&&(ne={},i[E.id]=ne);let he=ne[F.id];he===void 0&&(he={},ne[F.id]=he);let J=he[K];return J===void 0&&(J=f(l()),he[K]=J),J}function f(E){const F=[],z=[],K=[];for(let ne=0;ne<t;ne++)F[ne]=0,z[ne]=0,K[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:K,object:E,attributes:{},index:null}}function d(E,F,z,K){const ne=s.attributes,he=F.attributes;let J=0;const ue=z.getAttributes();for(const $ in ue)if(ue[$].location>=0){const we=ne[$];let Ie=he[$];if(Ie===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(Ie=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(Ie=E.instanceColor)),we===void 0||we.attribute!==Ie||Ie&&we.data!==Ie.data)return!0;J++}return s.attributesNum!==J||s.index!==K}function g(E,F,z,K){const ne={},he=F.attributes;let J=0;const ue=z.getAttributes();for(const $ in ue)if(ue[$].location>=0){let we=he[$];we===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(we=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(we=E.instanceColor));const Ie={};Ie.attribute=we,we&&we.data&&(Ie.data=we.data),ne[$]=Ie,J++}s.attributes=ne,s.attributesNum=J,s.index=K}function x(){const E=s.newAttributes;for(let F=0,z=E.length;F<z;F++)E[F]=0}function m(E){p(E,0)}function p(E,F){const z=s.newAttributes,K=s.enabledAttributes,ne=s.attributeDivisors;z[E]=1,K[E]===0&&(n.enableVertexAttribArray(E),K[E]=1),ne[E]!==F&&(n.vertexAttribDivisor(E,F),ne[E]=F)}function R(){const E=s.newAttributes,F=s.enabledAttributes;for(let z=0,K=F.length;z<K;z++)F[z]!==E[z]&&(n.disableVertexAttribArray(z),F[z]=0)}function w(E,F,z,K,ne,he,J){J===!0?n.vertexAttribIPointer(E,F,z,ne,he):n.vertexAttribPointer(E,F,z,K,ne,he)}function S(E,F,z,K){x();const ne=K.attributes,he=z.getAttributes(),J=F.defaultAttributeValues;for(const ue in he){const $=he[ue];if($.location>=0){let ye=ne[ue];if(ye===void 0&&(ue==="instanceMatrix"&&E.instanceMatrix&&(ye=E.instanceMatrix),ue==="instanceColor"&&E.instanceColor&&(ye=E.instanceColor)),ye!==void 0){const we=ye.normalized,Ie=ye.itemSize,Ue=e.get(ye);if(Ue===void 0)continue;const Ze=Ue.buffer,fe=Ue.type,Ee=Ue.bytesPerElement,Me=fe===n.INT||fe===n.UNSIGNED_INT||ye.gpuType===Bu;if(ye.isInterleavedBufferAttribute){const be=ye.data,Oe=be.stride,it=ye.offset;if(be.isInstancedInterleavedBuffer){for(let Ve=0;Ve<$.locationSize;Ve++)p($.location+Ve,be.meshPerAttribute);E.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let Ve=0;Ve<$.locationSize;Ve++)m($.location+Ve);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let Ve=0;Ve<$.locationSize;Ve++)w($.location+Ve,Ie/$.locationSize,fe,we,Oe*Ee,(it+Ie/$.locationSize*Ve)*Ee,Me)}else{if(ye.isInstancedBufferAttribute){for(let be=0;be<$.locationSize;be++)p($.location+be,ye.meshPerAttribute);E.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let be=0;be<$.locationSize;be++)m($.location+be);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let be=0;be<$.locationSize;be++)w($.location+be,Ie/$.locationSize,fe,we,Ie*Ee,Ie/$.locationSize*be*Ee,Me)}}else if(J!==void 0){const we=J[ue];if(we!==void 0)switch(we.length){case 2:n.vertexAttrib2fv($.location,we);break;case 3:n.vertexAttrib3fv($.location,we);break;case 4:n.vertexAttrib4fv($.location,we);break;default:n.vertexAttrib1fv($.location,we)}}}}R()}function H(){V();for(const E in i){const F=i[E];for(const z in F){const K=F[z];for(const ne in K)u(K[ne].object),delete K[ne];delete F[z]}delete i[E]}}function O(E){if(i[E.id]===void 0)return;const F=i[E.id];for(const z in F){const K=F[z];for(const ne in K)u(K[ne].object),delete K[ne];delete F[z]}delete i[E.id]}function I(E){for(const F in i){const z=i[F];if(z[E.id]===void 0)continue;const K=z[E.id];for(const ne in K)u(K[ne].object),delete K[ne];delete z[E.id]}}function V(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:V,resetDefaultState:T,dispose:H,releaseStatesOfGeometry:O,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:R}}function cE(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function uE(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==xn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const V=I===yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Ti&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==un&&!V)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),H=g>0,O=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:H,maxSamples:O}}function hE(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new pi,a=new rt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const R=s?0:i,w=R*4;let S=p.clippingState||null;l.value=S,S=u(g,f,w,d);for(let H=0;H!==w;++H)S[H]=t[H];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,S=d;w!==x;++w,S+=4)o.copy(h[w]).applyMatrix4(R,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function fE(n){let e=new WeakMap;function t(o,a){return a===Ic?o.mapping=ls:a===Dc&&(o.mapping=cs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ic||a===Dc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ix(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const jr=4,Wf=[.125,.215,.35,.446,.526,.582],dr=20,Gl=new eh,Xf=new qe;let Wl=null,Xl=0,jl=0,Yl=!1;const ur=(1+Math.sqrt(5))/2,zr=1/ur,jf=[new G(-ur,zr,0),new G(ur,zr,0),new G(-zr,0,ur),new G(zr,0,ur),new G(0,ur,-zr),new G(0,ur,zr),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Yf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$f(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wl,Xl,jl),this._renderer.xr.enabled=Yl,e.scissorTest=!1,na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ls||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wl=this._renderer.getRenderTarget(),Xl=this._renderer.getActiveCubeFace(),jl=this._renderer.getActiveMipmapLevel(),Yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:yi,format:xn,colorSpace:Xt,depthBuffer:!1},r=qf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qf(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dE(s)),this._blurMaterial=pE(s,e,t)}return r}_compileMaterial(e){const t=new hn(this._lodPlanes[0],e);this._renderer.compile(t,Gl)}_sceneToCubeUV(e,t,i,r){const a=new on(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Xf),u.toneMapping=ji,u.autoClear=!1;const d=new pr({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),g=new hn(new xo,d);let x=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(Xf),x=!0);for(let p=0;p<6;p++){const R=p%3;R===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):R===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const w=this._cubeSize;na(r,R*w,p>2?w:0,w,w),u.setRenderTarget(r),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ls||e.mapping===cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$f()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new hn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;na(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Gl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=jf[(r-s-1)%jf.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new hn(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*dr-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):dr;m>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);const p=[];let R=0;for(let I=0;I<dr;++I){const V=I/x,T=Math.exp(-V*V/2);p.push(T),I===0?R+=T:I<m&&(R+=2*T)}for(let I=0;I<p.length;I++)p[I]=p[I]/R;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;const S=this._sizeLods[r],H=3*S*(r>w-jr?r-w+jr:0),O=4*(this._cubeSize-S);na(t,H,O,3*S,2*S),l.setRenderTarget(t),l.render(h,Gl)}}function dE(n){const e=[],t=[],i=[];let r=n;const s=n-jr+1+Wf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-jr?l=Wf[o-n+jr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,R=new Float32Array(x*g*d),w=new Float32Array(m*g*d),S=new Float32Array(p*g*d);for(let O=0;O<d;O++){const I=O%3*2/3-1,V=O>2?0:-1,T=[I,V,0,I+2/3,V,0,I+2/3,V+1,0,I,V,0,I+2/3,V+1,0,I,V+1,0];R.set(T,x*g*O),w.set(f,m*g*O);const E=[O,O,O,O,O,O];S.set(E,p*g*O)}const H=new bn;H.setAttribute("position",new Kt(R,x)),H.setAttribute("uv",new Kt(w,m)),H.setAttribute("faceIndex",new Kt(S,p)),e.push(H),r>jr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qf(n,e,t){const i=new Yi(n,e,t);return i.texture.mapping=qa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function na(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function pE(n,e,t){const i=new Float32Array(dr),r=new G(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Kf(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function $f(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function ih(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mE(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ic||l===Dc,u=l===ls||l===cs;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Yf(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&r(d)?(t===null&&(t=new Yf(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function gE(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Wr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _E(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let x=0;if(d!==null){const R=d.array;x=d.version;for(let w=0,S=R.length;w<S;w+=3){const H=R[w+0],O=R[w+1],I=R[w+2];f.push(H,O,O,I,I,H)}}else if(g!==void 0){const R=g.array;x=g.version;for(let w=0,S=R.length/3-1;w<S;w+=3){const H=w+0,O=w+1,I=w+2;f.push(H,O,O,I,I,H)}}else return;const m=new(bm(f)?Pm:Cm)(f,1);m.version=x;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function vE(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,f*o,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,f,0,x,0,g);let p=0;for(let R=0;R<g;R++)p+=d[R]*x[R];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function xE(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function yE(n,e,t){const i=new WeakMap,r=new ut;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let T=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let w=0;d===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let S=a.attributes.position.count*w,H=1;S>e.maxTextureSize&&(H=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const O=new Float32Array(S*H*4*h),I=new wm(O,S,H,h);I.type=un,I.needsUpdate=!0;const V=w*4;for(let E=0;E<h;E++){const F=m[E],z=p[E],K=R[E],ne=S*H*4*E;for(let he=0;he<F.count;he++){const J=he*V;d===!0&&(r.fromBufferAttribute(F,he),O[ne+J+0]=r.x,O[ne+J+1]=r.y,O[ne+J+2]=r.z,O[ne+J+3]=0),g===!0&&(r.fromBufferAttribute(z,he),O[ne+J+4]=r.x,O[ne+J+5]=r.y,O[ne+J+6]=r.z,O[ne+J+7]=0),x===!0&&(r.fromBufferAttribute(K,he),O[ne+J+8]=r.x,O[ne+J+9]=r.y,O[ne+J+10]=r.z,O[ne+J+11]=K.itemSize===4?r.w:1)}}f={count:h,texture:I,size:new Je(S,H)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];const g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function SE(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const zm=new Gt,Zf=new Fm(1,1),Vm=new wm,Gm=new dx,Wm=new Dm,Jf=[],Qf=[],ed=new Float32Array(16),td=new Float32Array(9),nd=new Float32Array(4);function Ms(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Jf[r];if(s===void 0&&(s=new Float32Array(r),Jf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ja(n,e){let t=Qf[e];t===void 0&&(t=new Int32Array(e),Qf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function ME(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function EE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2fv(this.addr,e),Ft(t,e)}}function TE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;n.uniform3fv(this.addr,e),Ft(t,e)}}function bE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4fv(this.addr,e),Ft(t,e)}}function AE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,i))return;nd.set(i),n.uniformMatrix2fv(this.addr,!1,nd),Ft(t,i)}}function wE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,i))return;td.set(i),n.uniformMatrix3fv(this.addr,!1,td),Ft(t,i)}}function RE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,i))return;ed.set(i),n.uniformMatrix4fv(this.addr,!1,ed),Ft(t,i)}}function CE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function PE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2iv(this.addr,e),Ft(t,e)}}function LE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3iv(this.addr,e),Ft(t,e)}}function IE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4iv(this.addr,e),Ft(t,e)}}function DE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function NE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;n.uniform2uiv(this.addr,e),Ft(t,e)}}function UE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;n.uniform3uiv(this.addr,e),Ft(t,e)}}function OE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;n.uniform4uiv(this.addr,e),Ft(t,e)}}function FE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Zf.compareFunction=Em,s=Zf):s=zm,t.setTexture2D(e||s,r)}function BE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Gm,r)}function kE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Wm,r)}function HE(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Vm,r)}function zE(n){switch(n){case 5126:return ME;case 35664:return EE;case 35665:return TE;case 35666:return bE;case 35674:return AE;case 35675:return wE;case 35676:return RE;case 5124:case 35670:return CE;case 35667:case 35671:return PE;case 35668:case 35672:return LE;case 35669:case 35673:return IE;case 5125:return DE;case 36294:return NE;case 36295:return UE;case 36296:return OE;case 35678:case 36198:case 36298:case 36306:case 35682:return FE;case 35679:case 36299:case 36307:return BE;case 35680:case 36300:case 36308:case 36293:return kE;case 36289:case 36303:case 36311:case 36292:return HE}}function VE(n,e){n.uniform1fv(this.addr,e)}function GE(n,e){const t=Ms(e,this.size,2);n.uniform2fv(this.addr,t)}function WE(n,e){const t=Ms(e,this.size,3);n.uniform3fv(this.addr,t)}function XE(n,e){const t=Ms(e,this.size,4);n.uniform4fv(this.addr,t)}function jE(n,e){const t=Ms(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function YE(n,e){const t=Ms(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qE(n,e){const t=Ms(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function KE(n,e){n.uniform1iv(this.addr,e)}function $E(n,e){n.uniform2iv(this.addr,e)}function ZE(n,e){n.uniform3iv(this.addr,e)}function JE(n,e){n.uniform4iv(this.addr,e)}function QE(n,e){n.uniform1uiv(this.addr,e)}function eT(n,e){n.uniform2uiv(this.addr,e)}function tT(n,e){n.uniform3uiv(this.addr,e)}function nT(n,e){n.uniform4uiv(this.addr,e)}function iT(n,e,t){const i=this.cache,r=e.length,s=Ja(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||zm,s[o])}function rT(n,e,t){const i=this.cache,r=e.length,s=Ja(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Gm,s[o])}function sT(n,e,t){const i=this.cache,r=e.length,s=Ja(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Wm,s[o])}function oT(n,e,t){const i=this.cache,r=e.length,s=Ja(t,r);Ot(i,s)||(n.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Vm,s[o])}function aT(n){switch(n){case 5126:return VE;case 35664:return GE;case 35665:return WE;case 35666:return XE;case 35674:return jE;case 35675:return YE;case 35676:return qE;case 5124:case 35670:return KE;case 35667:case 35671:return $E;case 35668:case 35672:return ZE;case 35669:case 35673:return JE;case 5125:return QE;case 36294:return eT;case 36295:return tT;case 36296:return nT;case 35678:case 36198:case 36298:case 36306:case 35682:return iT;case 35679:case 36299:case 36307:return rT;case 35680:case 36300:case 36308:case 36293:return sT;case 36289:case 36303:case 36311:case 36292:return oT}}class lT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=zE(t.type)}}class cT{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aT(t.type)}}class uT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ql=/(\w+)(\])?(\[|\.)?/g;function id(n,e){n.seq.push(e),n.map[e.id]=e}function hT(n,e,t){const i=n.name,r=i.length;for(ql.lastIndex=0;;){const s=ql.exec(i),o=ql.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){id(t,c===void 0?new lT(a,n,e):new cT(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new uT(a),id(t,h)),t=h}}}class ga{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);hT(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function rd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const fT=37297;let dT=0;function pT(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const sd=new rt;function mT(n){ct._getMatrix(sd,ct.workingColorSpace,n);const e=`mat3( ${sd.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(n)){case wa:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function od(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+pT(n.getShaderSource(e),o)}else return r}function gT(n,e){const t=mT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _T(n,e){let t;switch(e){case Mv:t="Linear";break;case Ev:t="Reinhard";break;case Tv:t="Cineon";break;case bv:t="ACESFilmic";break;case wv:t="AgX";break;case Rv:t="Neutral";break;case Av:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ia=new G;function vT(){ct.getLuminanceCoefficients(ia);const n=ia.x.toFixed(4),e=ia.y.toFixed(4),t=ia.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function yT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ST(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Vs(n){return n!==""}function ad(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ld(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MT=/^[ \t]*#include +<([\w\d./]+)>/gm;function fu(n){return n.replace(MT,TT)}const ET=new Map;function TT(n,e){let t=st[e];if(t===void 0){const i=ET.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fu(t)}const bT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cd(n){return n.replace(bT,AT)}function AT(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ud(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function wT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===lm?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function RT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ls:case cs:e="ENVMAP_TYPE_CUBE";break;case qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function PT(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case cm:e="ENVMAP_BLENDING_MULTIPLY";break;case yv:e="ENVMAP_BLENDING_MIX";break;case Sv:e="ENVMAP_BLENDING_ADD";break}return e}function LT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function IT(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=wT(t),c=RT(t),u=CT(t),h=PT(t),f=LT(t),d=xT(t),g=yT(s),x=r.createProgram();let m,p,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Vs).join(`
`),p.length>0&&(p+=`
`)):(m=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),p=[ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?st.tonemapping_pars_fragment:"",t.toneMapping!==ji?_T("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,gT("linearToOutputTexel",t.outputColorSpace),vT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),o=fu(o),o=ad(o,t),o=ld(o,t),a=fu(a),a=ad(a,t),a=ld(a,t),o=cd(o),a=cd(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=R+m+o,S=R+p+a,H=rd(r,r.VERTEX_SHADER,w),O=rd(r,r.FRAGMENT_SHADER,S);r.attachShader(x,H),r.attachShader(x,O),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function I(F){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(x).trim(),K=r.getShaderInfoLog(H).trim(),ne=r.getShaderInfoLog(O).trim();let he=!0,J=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(he=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,H,O);else{const ue=od(r,H,"vertex"),$=od(r,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+z+`
`+ue+`
`+$)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(K===""||ne==="")&&(J=!1);J&&(F.diagnostics={runnable:he,programLog:z,vertexShader:{log:K,prefix:m},fragmentShader:{log:ne,prefix:p}})}r.deleteShader(H),r.deleteShader(O),V=new ga(r,x),T=ST(r,x)}let V;this.getUniforms=function(){return V===void 0&&I(this),V};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(x,fT)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dT++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=H,this.fragmentShader=O,this}let DT=0;class NT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new UT(e),t.set(e,i)),i}}class UT{constructor(e){this.id=DT++,this.code=e,this.usedTimes=0}}function OT(n,e,t,i,r,s,o){const a=new Xu,l=new NT,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,E,F,z,K){const ne=z.fog,he=K.geometry,J=T.isMeshStandardMaterial?z.environment:null,ue=(T.isMeshStandardMaterial?t:e).get(T.envMap||J),$=ue&&ue.mapping===qa?ue.image.height:null,ye=g[T.type];T.precision!==null&&(d=r.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const we=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Ie=we!==void 0?we.length:0;let Ue=0;he.morphAttributes.position!==void 0&&(Ue=1),he.morphAttributes.normal!==void 0&&(Ue=2),he.morphAttributes.color!==void 0&&(Ue=3);let Ze,fe,Ee,Me;if(ye){const pt=Vn[ye];Ze=pt.vertexShader,fe=pt.fragmentShader}else Ze=T.vertexShader,fe=T.fragmentShader,l.update(T),Ee=l.getVertexShaderID(T),Me=l.getFragmentShaderID(T);const be=n.getRenderTarget(),Oe=n.state.buffers.depth.getReversed(),it=K.isInstancedMesh===!0,Ve=K.isBatchedMesh===!0,ht=!!T.map,D=!!T.matcap,B=!!ue,b=!!T.aoMap,me=!!T.lightMap,ie=!!T.bumpMap,oe=!!T.normalMap,le=!!T.displacementMap,ge=!!T.emissiveMap,te=!!T.metalnessMap,M=!!T.roughnessMap,y=T.anisotropy>0,k=T.clearcoat>0,Z=T.dispersion>0,Q=T.iridescence>0,ee=T.sheen>0,Ae=T.transmission>0,j=y&&!!T.anisotropyMap,ce=k&&!!T.clearcoatMap,Fe=k&&!!T.clearcoatNormalMap,ve=k&&!!T.clearcoatRoughnessMap,Re=Q&&!!T.iridescenceMap,Le=Q&&!!T.iridescenceThicknessMap,ze=ee&&!!T.sheenColorMap,Ce=ee&&!!T.sheenRoughnessMap,Xe=!!T.specularMap,Ge=!!T.specularColorMap,et=!!T.specularIntensityMap,X=Ae&&!!T.transmissionMap,re=Ae&&!!T.thicknessMap,ae=!!T.gradientMap,_e=!!T.alphaMap,Ne=T.alphaTest>0,De=!!T.alphaHash,tt=!!T.extensions;let bt=ji;T.toneMapped&&(be===null||be.isXRRenderTarget===!0)&&(bt=n.toneMapping);const Bt={shaderID:ye,shaderType:T.type,shaderName:T.name,vertexShader:Ze,fragmentShader:fe,defines:T.defines,customVertexShaderID:Ee,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:Ve,batchingColor:Ve&&K._colorsTexture!==null,instancing:it,instancingColor:it&&K.instanceColor!==null,instancingMorph:it&&K.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:be===null?n.outputColorSpace:be.isXRRenderTarget===!0?be.texture.colorSpace:Xt,alphaToCoverage:!!T.alphaToCoverage,map:ht,matcap:D,envMap:B,envMapMode:B&&ue.mapping,envMapCubeUVHeight:$,aoMap:b,lightMap:me,bumpMap:ie,normalMap:oe,displacementMap:f&&le,emissiveMap:ge,normalMapObjectSpace:oe&&T.normalMapType===Nv,normalMapTangentSpace:oe&&T.normalMapType===Mm,metalnessMap:te,roughnessMap:M,anisotropy:y,anisotropyMap:j,clearcoat:k,clearcoatMap:ce,clearcoatNormalMap:Fe,clearcoatRoughnessMap:ve,dispersion:Z,iridescence:Q,iridescenceMap:Re,iridescenceThicknessMap:Le,sheen:ee,sheenColorMap:ze,sheenRoughnessMap:Ce,specularMap:Xe,specularColorMap:Ge,specularIntensityMap:et,transmission:Ae,transmissionMap:X,thicknessMap:re,gradientMap:ae,opaque:T.transparent===!1&&T.blending===ns&&T.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ne,alphaHash:De,combine:T.combine,mapUv:ht&&x(T.map.channel),aoMapUv:b&&x(T.aoMap.channel),lightMapUv:me&&x(T.lightMap.channel),bumpMapUv:ie&&x(T.bumpMap.channel),normalMapUv:oe&&x(T.normalMap.channel),displacementMapUv:le&&x(T.displacementMap.channel),emissiveMapUv:ge&&x(T.emissiveMap.channel),metalnessMapUv:te&&x(T.metalnessMap.channel),roughnessMapUv:M&&x(T.roughnessMap.channel),anisotropyMapUv:j&&x(T.anisotropyMap.channel),clearcoatMapUv:ce&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Le&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(T.sheenRoughnessMap.channel),specularMapUv:Xe&&x(T.specularMap.channel),specularColorMapUv:Ge&&x(T.specularColorMap.channel),specularIntensityMapUv:et&&x(T.specularIntensityMap.channel),transmissionMapUv:X&&x(T.transmissionMap.channel),thicknessMapUv:re&&x(T.thicknessMap.channel),alphaMapUv:_e&&x(T.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(oe||y),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!he.attributes.uv&&(ht||_e),fog:!!ne,useFog:T.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Oe,skinning:K.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ue,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,decodeVideoTexture:ht&&T.map.isVideoTexture===!0&&ct.getTransfer(T.map.colorSpace)===xt,decodeVideoTextureEmissive:ge&&T.emissiveMap.isVideoTexture===!0&&ct.getTransfer(T.emissiveMap.colorSpace)===xt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Gn,flipSided:T.side===fn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:tt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&T.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function p(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const F in T.defines)E.push(F),E.push(T.defines[F]);return T.isRawShaderMaterial===!1&&(R(E,T),w(E,T),E.push(n.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function R(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function w(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function S(T){const E=g[T.type];let F;if(E){const z=Vn[E];F=lu.clone(z.uniforms)}else F=T.uniforms;return F}function H(T,E){let F;for(let z=0,K=u.length;z<K;z++){const ne=u[z];if(ne.cacheKey===E){F=ne,++F.usedTimes;break}}return F===void 0&&(F=new IT(n,E,T,s),u.push(F)),F}function O(T){if(--T.usedTimes===0){const E=u.indexOf(T);u[E]=u[u.length-1],u.pop(),T.destroy()}}function I(T){l.remove(T)}function V(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:H,releaseProgram:O,releaseShaderCache:I,programs:u,dispose:V}}function FT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function BT(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function hd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function fd(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,d,g,x,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,g,x,m){const p=o(h,f,d,g,x,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(h,f,d,g,x,m){const p=o(h,f,d,g,x,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||BT),i.length>1&&i.sort(f||hd),r.length>1&&r.sort(f||hd)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function kT(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new fd,n.set(i,[o])):r>=s.length?(o=new fd,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function HT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new qe};break;case"SpotLight":t={position:new G,direction:new G,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function zT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let VT=0;function GT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function WT(n){const e=new HT,t=zT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new $e,o=new $e;function a(c){let u=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,R=0,w=0,S=0,H=0,O=0,I=0;c.sort(GT);for(let T=0,E=c.length;T<E;T++){const F=c[T],z=F.color,K=F.intensity,ne=F.distance,he=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=z.r*K,h+=z.g*K,f+=z.b*K;else if(F.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(F.sh.coefficients[J],K);I++}else if(F.isDirectionalLight){const J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const ue=F.shadow,$=t.get(F);$.shadowIntensity=ue.intensity,$.shadowBias=ue.bias,$.shadowNormalBias=ue.normalBias,$.shadowRadius=ue.radius,$.shadowMapSize=ue.mapSize,i.directionalShadow[d]=$,i.directionalShadowMap[d]=he,i.directionalShadowMatrix[d]=F.shadow.matrix,R++}i.directional[d]=J,d++}else if(F.isSpotLight){const J=e.get(F);J.position.setFromMatrixPosition(F.matrixWorld),J.color.copy(z).multiplyScalar(K),J.distance=ne,J.coneCos=Math.cos(F.angle),J.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),J.decay=F.decay,i.spot[x]=J;const ue=F.shadow;if(F.map&&(i.spotLightMap[H]=F.map,H++,ue.updateMatrices(F),F.castShadow&&O++),i.spotLightMatrix[x]=ue.matrix,F.castShadow){const $=t.get(F);$.shadowIntensity=ue.intensity,$.shadowBias=ue.bias,$.shadowNormalBias=ue.normalBias,$.shadowRadius=ue.radius,$.shadowMapSize=ue.mapSize,i.spotShadow[x]=$,i.spotShadowMap[x]=he,S++}x++}else if(F.isRectAreaLight){const J=e.get(F);J.color.copy(z).multiplyScalar(K),J.halfWidth.set(F.width*.5,0,0),J.halfHeight.set(0,F.height*.5,0),i.rectArea[m]=J,m++}else if(F.isPointLight){const J=e.get(F);if(J.color.copy(F.color).multiplyScalar(F.intensity),J.distance=F.distance,J.decay=F.decay,F.castShadow){const ue=F.shadow,$=t.get(F);$.shadowIntensity=ue.intensity,$.shadowBias=ue.bias,$.shadowNormalBias=ue.normalBias,$.shadowRadius=ue.radius,$.shadowMapSize=ue.mapSize,$.shadowCameraNear=ue.camera.near,$.shadowCameraFar=ue.camera.far,i.pointShadow[g]=$,i.pointShadowMap[g]=he,i.pointShadowMatrix[g]=F.shadow.matrix,w++}i.point[g]=J,g++}else if(F.isHemisphereLight){const J=e.get(F);J.skyColor.copy(F.color).multiplyScalar(K),J.groundColor.copy(F.groundColor).multiplyScalar(K),i.hemi[p]=J,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const V=i.hash;(V.directionalLength!==d||V.pointLength!==g||V.spotLength!==x||V.rectAreaLength!==m||V.hemiLength!==p||V.numDirectionalShadows!==R||V.numPointShadows!==w||V.numSpotShadows!==S||V.numSpotMaps!==H||V.numLightProbes!==I)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+H-O,i.spotLightMap.length=H,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=I,V.directionalLength=d,V.pointLength=g,V.spotLength=x,V.rectAreaLength=m,V.hemiLength=p,V.numDirectionalShadows=R,V.numPointShadows=w,V.numSpotShadows=S,V.numSpotMaps=H,V.numLightProbes=I,i.version=VT++)}function l(c,u){let h=0,f=0,d=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,R=c.length;p<R;p++){const w=c[p];if(w.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(w.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(w.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function dd(n){const e=new WT(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function XT(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new dd(n),e.set(r,[a])):s>=o.length?(a=new dd(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const jT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qT(n,e,t){let i=new Ku;const r=new Je,s=new Je,o=new ut,a=new Wx({depthPacking:Dv}),l=new Xx,c={},u=t.maxTextureSize,h={[qn]:fn,[fn]:qn,[Gn]:Gn},f=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:jT,fragmentShader:YT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new bn;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new hn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lm;let p=this.type;this.render=function(O,I,V){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||O.length===0)return;const T=n.getRenderTarget(),E=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Xi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const K=p!==hi&&this.type===hi,ne=p===hi&&this.type!==hi;for(let he=0,J=O.length;he<J;he++){const ue=O[he],$=ue.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const ye=$.getFrameExtents();if(r.multiply(ye),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ye.x),r.x=s.x*ye.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ye.y),r.y=s.y*ye.y,$.mapSize.y=s.y)),$.map===null||K===!0||ne===!0){const Ie=this.type!==hi?{minFilter:an,magFilter:an}:{};$.map!==null&&$.map.dispose(),$.map=new Yi(r.x,r.y,Ie),$.map.texture.name=ue.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const we=$.getViewportCount();for(let Ie=0;Ie<we;Ie++){const Ue=$.getViewport(Ie);o.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),z.viewport(o),$.updateMatrices(ue,Ie),i=$.getFrustum(),S(I,V,$.camera,ue,this.type)}$.isPointLightShadow!==!0&&this.type===hi&&R($,V),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,E,F)};function R(O,I){const V=e.update(x);f.defines.VSM_SAMPLES!==O.blurSamples&&(f.defines.VSM_SAMPLES=O.blurSamples,d.defines.VSM_SAMPLES=O.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Yi(r.x,r.y)),f.uniforms.shadow_pass.value=O.map.texture,f.uniforms.resolution.value=O.mapSize,f.uniforms.radius.value=O.radius,n.setRenderTarget(O.mapPass),n.clear(),n.renderBufferDirect(I,null,V,f,x,null),d.uniforms.shadow_pass.value=O.mapPass.texture,d.uniforms.resolution.value=O.mapSize,d.uniforms.radius.value=O.radius,n.setRenderTarget(O.map),n.clear(),n.renderBufferDirect(I,null,V,d,x,null)}function w(O,I,V,T){let E=null;const F=V.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(F!==void 0)E=F;else if(E=V.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const z=E.uuid,K=I.uuid;let ne=c[z];ne===void 0&&(ne={},c[z]=ne);let he=ne[K];he===void 0&&(he=E.clone(),ne[K]=he,I.addEventListener("dispose",H)),E=he}if(E.visible=I.visible,E.wireframe=I.wireframe,T===hi?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:h[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,V.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const z=n.properties.get(E);z.light=V}return E}function S(O,I,V,T,E){if(O.visible===!1)return;if(O.layers.test(I.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&E===hi)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,O.matrixWorld);const K=e.update(O),ne=O.material;if(Array.isArray(ne)){const he=K.groups;for(let J=0,ue=he.length;J<ue;J++){const $=he[J],ye=ne[$.materialIndex];if(ye&&ye.visible){const we=w(O,ye,T,E);O.onBeforeShadow(n,O,I,V,K,we,$),n.renderBufferDirect(V,null,K,we,O,$),O.onAfterShadow(n,O,I,V,K,we,$)}}}else if(ne.visible){const he=w(O,ne,T,E);O.onBeforeShadow(n,O,I,V,K,he,null),n.renderBufferDirect(V,null,K,he,O,null),O.onAfterShadow(n,O,I,V,K,he,null)}}const z=O.children;for(let K=0,ne=z.length;K<ne;K++)S(z[K],I,V,T,E)}function H(O){O.target.removeEventListener("dispose",H);for(const V in c){const T=c[V],E=O.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const KT={[bc]:Ac,[wc]:Pc,[Rc]:Lc,[as]:Cc,[Ac]:bc,[Pc]:wc,[Lc]:Rc,[Cc]:as};function $T(n,e){function t(){let X=!1;const re=new ut;let ae=null;const _e=new ut(0,0,0,0);return{setMask:function(Ne){ae!==Ne&&!X&&(n.colorMask(Ne,Ne,Ne,Ne),ae=Ne)},setLocked:function(Ne){X=Ne},setClear:function(Ne,De,tt,bt,Bt){Bt===!0&&(Ne*=bt,De*=bt,tt*=bt),re.set(Ne,De,tt,bt),_e.equals(re)===!1&&(n.clearColor(Ne,De,tt,bt),_e.copy(re))},reset:function(){X=!1,ae=null,_e.set(-1,0,0,0)}}}function i(){let X=!1,re=!1,ae=null,_e=null,Ne=null;return{setReversed:function(De){if(re!==De){const tt=e.get("EXT_clip_control");re?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT);const bt=Ne;Ne=null,this.setClear(bt)}re=De},getReversed:function(){return re},setTest:function(De){De?be(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(De){ae!==De&&!X&&(n.depthMask(De),ae=De)},setFunc:function(De){if(re&&(De=KT[De]),_e!==De){switch(De){case bc:n.depthFunc(n.NEVER);break;case Ac:n.depthFunc(n.ALWAYS);break;case wc:n.depthFunc(n.LESS);break;case as:n.depthFunc(n.LEQUAL);break;case Rc:n.depthFunc(n.EQUAL);break;case Cc:n.depthFunc(n.GEQUAL);break;case Pc:n.depthFunc(n.GREATER);break;case Lc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_e=De}},setLocked:function(De){X=De},setClear:function(De){Ne!==De&&(re&&(De=1-De),n.clearDepth(De),Ne=De)},reset:function(){X=!1,ae=null,_e=null,Ne=null,re=!1}}}function r(){let X=!1,re=null,ae=null,_e=null,Ne=null,De=null,tt=null,bt=null,Bt=null;return{setTest:function(pt){X||(pt?be(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(pt){re!==pt&&!X&&(n.stencilMask(pt),re=pt)},setFunc:function(pt,dn,An){(ae!==pt||_e!==dn||Ne!==An)&&(n.stencilFunc(pt,dn,An),ae=pt,_e=dn,Ne=An)},setOp:function(pt,dn,An){(De!==pt||tt!==dn||bt!==An)&&(n.stencilOp(pt,dn,An),De=pt,tt=dn,bt=An)},setLocked:function(pt){X=pt},setClear:function(pt){Bt!==pt&&(n.clearStencil(pt),Bt=pt)},reset:function(){X=!1,re=null,ae=null,_e=null,Ne=null,De=null,tt=null,bt=null,Bt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,R=null,w=null,S=null,H=null,O=null,I=new qe(0,0,0),V=0,T=!1,E=null,F=null,z=null,K=null,ne=null;const he=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ue=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec($)[1]),J=ue>=1):$.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),J=ue>=2);let ye=null,we={};const Ie=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),Ze=new ut().fromArray(Ie),fe=new ut().fromArray(Ue);function Ee(X,re,ae,_e){const Ne=new Uint8Array(4),De=n.createTexture();n.bindTexture(X,De),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<ae;tt++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,_e,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(re+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return De}const Me={};Me[n.TEXTURE_2D]=Ee(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=Ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=Ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=Ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),be(n.DEPTH_TEST),o.setFunc(as),ie(!1),oe(Xh),be(n.CULL_FACE),b(Xi);function be(X){u[X]!==!0&&(n.enable(X),u[X]=!0)}function Oe(X){u[X]!==!1&&(n.disable(X),u[X]=!1)}function it(X,re){return h[X]!==re?(n.bindFramebuffer(X,re),h[X]=re,X===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=re),X===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Ve(X,re){let ae=d,_e=!1;if(X){ae=f.get(re),ae===void 0&&(ae=[],f.set(re,ae));const Ne=X.textures;if(ae.length!==Ne.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let De=0,tt=Ne.length;De<tt;De++)ae[De]=n.COLOR_ATTACHMENT0+De;ae.length=Ne.length,_e=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,_e=!0);_e&&n.drawBuffers(ae)}function ht(X){return g!==X?(n.useProgram(X),g=X,!0):!1}const D={[fr]:n.FUNC_ADD,[iv]:n.FUNC_SUBTRACT,[rv]:n.FUNC_REVERSE_SUBTRACT};D[sv]=n.MIN,D[ov]=n.MAX;const B={[av]:n.ZERO,[lv]:n.ONE,[cv]:n.SRC_COLOR,[Ec]:n.SRC_ALPHA,[mv]:n.SRC_ALPHA_SATURATE,[dv]:n.DST_COLOR,[hv]:n.DST_ALPHA,[uv]:n.ONE_MINUS_SRC_COLOR,[Tc]:n.ONE_MINUS_SRC_ALPHA,[pv]:n.ONE_MINUS_DST_COLOR,[fv]:n.ONE_MINUS_DST_ALPHA,[gv]:n.CONSTANT_COLOR,[_v]:n.ONE_MINUS_CONSTANT_COLOR,[vv]:n.CONSTANT_ALPHA,[xv]:n.ONE_MINUS_CONSTANT_ALPHA};function b(X,re,ae,_e,Ne,De,tt,bt,Bt,pt){if(X===Xi){x===!0&&(Oe(n.BLEND),x=!1);return}if(x===!1&&(be(n.BLEND),x=!0),X!==nv){if(X!==m||pt!==T){if((p!==fr||S!==fr)&&(n.blendEquation(n.FUNC_ADD),p=fr,S=fr),pt)switch(X){case ns:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jh:n.blendFunc(n.ONE,n.ONE);break;case Yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ns:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}R=null,w=null,H=null,O=null,I.set(0,0,0),V=0,m=X,T=pt}return}Ne=Ne||re,De=De||ae,tt=tt||_e,(re!==p||Ne!==S)&&(n.blendEquationSeparate(D[re],D[Ne]),p=re,S=Ne),(ae!==R||_e!==w||De!==H||tt!==O)&&(n.blendFuncSeparate(B[ae],B[_e],B[De],B[tt]),R=ae,w=_e,H=De,O=tt),(bt.equals(I)===!1||Bt!==V)&&(n.blendColor(bt.r,bt.g,bt.b,Bt),I.copy(bt),V=Bt),m=X,T=!1}function me(X,re){X.side===Gn?Oe(n.CULL_FACE):be(n.CULL_FACE);let ae=X.side===fn;re&&(ae=!ae),ie(ae),X.blending===ns&&X.transparent===!1?b(Xi):b(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),s.setMask(X.colorWrite);const _e=X.stencilWrite;a.setTest(_e),_e&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ge(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?be(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(X){E!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),E=X)}function oe(X){X!==Q0?(be(n.CULL_FACE),X!==F&&(X===Xh?n.cullFace(n.BACK):X===ev?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),F=X}function le(X){X!==z&&(J&&n.lineWidth(X),z=X)}function ge(X,re,ae){X?(be(n.POLYGON_OFFSET_FILL),(K!==re||ne!==ae)&&(n.polygonOffset(re,ae),K=re,ne=ae)):Oe(n.POLYGON_OFFSET_FILL)}function te(X){X?be(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function M(X){X===void 0&&(X=n.TEXTURE0+he-1),ye!==X&&(n.activeTexture(X),ye=X)}function y(X,re,ae){ae===void 0&&(ye===null?ae=n.TEXTURE0+he-1:ae=ye);let _e=we[ae];_e===void 0&&(_e={type:void 0,texture:void 0},we[ae]=_e),(_e.type!==X||_e.texture!==re)&&(ye!==ae&&(n.activeTexture(ae),ye=ae),n.bindTexture(X,re||Me[X]),_e.type=X,_e.texture=re)}function k(){const X=we[ye];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Z(){try{n.compressedTexImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function j(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ce(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{n.texStorage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{n.texStorage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Re(){try{n.texImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Le(){try{n.texImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ze(X){Ze.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),Ze.copy(X))}function Ce(X){fe.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),fe.copy(X))}function Xe(X,re){let ae=c.get(re);ae===void 0&&(ae=new WeakMap,c.set(re,ae));let _e=ae.get(X);_e===void 0&&(_e=n.getUniformBlockIndex(re,X.name),ae.set(X,_e))}function Ge(X,re){const _e=c.get(re).get(X);l.get(re)!==_e&&(n.uniformBlockBinding(re,_e,X.__bindingPointIndex),l.set(re,_e))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ye=null,we={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,R=null,w=null,S=null,H=null,O=null,I=new qe(0,0,0),V=0,T=!1,E=null,F=null,z=null,K=null,ne=null,Ze.set(0,0,n.canvas.width,n.canvas.height),fe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:be,disable:Oe,bindFramebuffer:it,drawBuffers:Ve,useProgram:ht,setBlending:b,setMaterial:me,setFlipSided:ie,setCullFace:oe,setLineWidth:le,setPolygonOffset:ge,setScissorTest:te,activeTexture:M,bindTexture:y,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:Q,texImage2D:Re,texImage3D:Le,updateUBOMapping:Xe,uniformBlockBinding:Ge,texStorage2D:Fe,texStorage3D:ve,texSubImage2D:ee,texSubImage3D:Ae,compressedTexSubImage2D:j,compressedTexSubImage3D:ce,scissor:ze,viewport:Ce,reset:et}}function ZT(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,y){return d?new OffscreenCanvas(M,y):po("canvas")}function x(M,y,k){let Z=1;const Q=te(M);if((Q.width>k||Q.height>k)&&(Z=k/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const ee=Math.floor(Z*Q.width),Ae=Math.floor(Z*Q.height);h===void 0&&(h=g(ee,Ae));const j=y?g(ee,Ae):h;return j.width=ee,j.height=Ae,j.getContext("2d").drawImage(M,0,0,ee,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ee+"x"+Ae+")."),j}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){n.generateMipmap(M)}function R(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(M,y,k,Z,Q=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ee=y;if(y===n.RED&&(k===n.FLOAT&&(ee=n.R32F),k===n.HALF_FLOAT&&(ee=n.R16F),k===n.UNSIGNED_BYTE&&(ee=n.R8)),y===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(ee=n.R8UI),k===n.UNSIGNED_SHORT&&(ee=n.R16UI),k===n.UNSIGNED_INT&&(ee=n.R32UI),k===n.BYTE&&(ee=n.R8I),k===n.SHORT&&(ee=n.R16I),k===n.INT&&(ee=n.R32I)),y===n.RG&&(k===n.FLOAT&&(ee=n.RG32F),k===n.HALF_FLOAT&&(ee=n.RG16F),k===n.UNSIGNED_BYTE&&(ee=n.RG8)),y===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(ee=n.RG8UI),k===n.UNSIGNED_SHORT&&(ee=n.RG16UI),k===n.UNSIGNED_INT&&(ee=n.RG32UI),k===n.BYTE&&(ee=n.RG8I),k===n.SHORT&&(ee=n.RG16I),k===n.INT&&(ee=n.RG32I)),y===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),k===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),k===n.UNSIGNED_INT&&(ee=n.RGB32UI),k===n.BYTE&&(ee=n.RGB8I),k===n.SHORT&&(ee=n.RGB16I),k===n.INT&&(ee=n.RGB32I)),y===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),k===n.UNSIGNED_INT&&(ee=n.RGBA32UI),k===n.BYTE&&(ee=n.RGBA8I),k===n.SHORT&&(ee=n.RGBA16I),k===n.INT&&(ee=n.RGBA32I)),y===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),y===n.RGBA){const Ae=Q?wa:ct.getTransfer(Z);k===n.FLOAT&&(ee=n.RGBA32F),k===n.HALF_FLOAT&&(ee=n.RGBA16F),k===n.UNSIGNED_BYTE&&(ee=Ae===xt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function S(M,y){let k;return M?y===null||y===yr||y===hs?k=n.DEPTH24_STENCIL8:y===un?k=n.DEPTH32F_STENCIL8:y===uo&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===yr||y===hs?k=n.DEPTH_COMPONENT24:y===un?k=n.DEPTH_COMPONENT32F:y===uo&&(k=n.DEPTH_COMPONENT16),k}function H(M,y){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==an&&M.minFilter!==Vt?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function O(M){const y=M.target;y.removeEventListener("dispose",O),V(y),y.isVideoTexture&&u.delete(y)}function I(M){const y=M.target;y.removeEventListener("dispose",I),E(y)}function V(M){const y=i.get(M);if(y.__webglInit===void 0)return;const k=M.source,Z=f.get(k);if(Z){const Q=Z[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&T(M),Object.keys(Z).length===0&&f.delete(k)}i.remove(M)}function T(M){const y=i.get(M);n.deleteTexture(y.__webglTexture);const k=M.source,Z=f.get(k);delete Z[y.__cacheKey],o.memory.textures--}function E(M){const y=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let Q=0;Q<y.__webglFramebuffer[Z].length;Q++)n.deleteFramebuffer(y.__webglFramebuffer[Z][Q]);else n.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[Z]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=M.textures;for(let Z=0,Q=k.length;Z<Q;Z++){const ee=i.get(k[Z]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(k[Z])}i.remove(M)}let F=0;function z(){F=0}function K(){const M=F;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),F+=1,M}function ne(M){const y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.wrapR||0),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.colorSpace),y.join()}function he(M,y){const k=i.get(M);if(M.isVideoTexture&&le(M),M.isRenderTargetTexture===!1&&M.version>0&&k.__version!==M.version){const Z=M.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(k,M,y);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+y)}function J(M,y){const k=i.get(M);if(M.version>0&&k.__version!==M.version){fe(k,M,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+y)}function ue(M,y){const k=i.get(M);if(M.version>0&&k.__version!==M.version){fe(k,M,y);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+y)}function $(M,y){const k=i.get(M);if(M.version>0&&k.__version!==M.version){Ee(k,M,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+y)}const ye={[us]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[Aa]:n.MIRRORED_REPEAT},we={[an]:n.NEAREST,[hm]:n.NEAREST_MIPMAP_NEAREST,[zs]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[ua]:n.LINEAR_MIPMAP_NEAREST,[Xn]:n.LINEAR_MIPMAP_LINEAR},Ie={[Uv]:n.NEVER,[zv]:n.ALWAYS,[Ov]:n.LESS,[Em]:n.LEQUAL,[Fv]:n.EQUAL,[Hv]:n.GEQUAL,[Bv]:n.GREATER,[kv]:n.NOTEQUAL};function Ue(M,y){if(y.type===un&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Vt||y.magFilter===ua||y.magFilter===zs||y.magFilter===Xn||y.minFilter===Vt||y.minFilter===ua||y.minFilter===zs||y.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,ye[y.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ye[y.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ye[y.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,we[y.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,we[y.minFilter]),y.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,Ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===an||y.minFilter!==zs&&y.minFilter!==Xn||y.type===un&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ze(M,y){let k=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",O));const Z=y.source;let Q=f.get(Z);Q===void 0&&(Q={},f.set(Z,Q));const ee=ne(y);if(ee!==M.__cacheKey){Q[ee]===void 0&&(Q[ee]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[ee].usedTimes++;const Ae=Q[M.__cacheKey];Ae!==void 0&&(Q[M.__cacheKey].usedTimes--,Ae.usedTimes===0&&T(y)),M.__cacheKey=ee,M.__webglTexture=Q[ee].texture}return k}function fe(M,y,k){let Z=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=n.TEXTURE_3D);const Q=Ze(M,y),ee=y.source;t.bindTexture(Z,M.__webglTexture,n.TEXTURE0+k);const Ae=i.get(ee);if(ee.version!==Ae.__version||Q===!0){t.activeTexture(n.TEXTURE0+k);const j=ct.getPrimaries(ct.workingColorSpace),ce=y.colorSpace===vi?null:ct.getPrimaries(y.colorSpace),Fe=y.colorSpace===vi||j===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ve=x(y.image,!1,r.maxTextureSize);ve=ge(y,ve);const Re=s.convert(y.format,y.colorSpace),Le=s.convert(y.type);let ze=w(y.internalFormat,Re,Le,y.colorSpace,y.isVideoTexture);Ue(Z,y);let Ce;const Xe=y.mipmaps,Ge=y.isVideoTexture!==!0,et=Ae.__version===void 0||Q===!0,X=ee.dataReady,re=H(y,ve);if(y.isDepthTexture)ze=S(y.format===fs,y.type),et&&(Ge?t.texStorage2D(n.TEXTURE_2D,1,ze,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,ze,ve.width,ve.height,0,Re,Le,null));else if(y.isDataTexture)if(Xe.length>0){Ge&&et&&t.texStorage2D(n.TEXTURE_2D,re,ze,Xe[0].width,Xe[0].height);for(let ae=0,_e=Xe.length;ae<_e;ae++)Ce=Xe[ae],Ge?X&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Ce.width,Ce.height,Re,Le,Ce.data):t.texImage2D(n.TEXTURE_2D,ae,ze,Ce.width,Ce.height,0,Re,Le,Ce.data);y.generateMipmaps=!1}else Ge?(et&&t.texStorage2D(n.TEXTURE_2D,re,ze,ve.width,ve.height),X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve.width,ve.height,Re,Le,ve.data)):t.texImage2D(n.TEXTURE_2D,0,ze,ve.width,ve.height,0,Re,Le,ve.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ge&&et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,ze,Xe[0].width,Xe[0].height,ve.depth);for(let ae=0,_e=Xe.length;ae<_e;ae++)if(Ce=Xe[ae],y.format!==xn)if(Re!==null)if(Ge){if(X)if(y.layerUpdates.size>0){const Ne=Gf(Ce.width,Ce.height,y.format,y.type);for(const De of y.layerUpdates){const tt=Ce.data.subarray(De*Ne/Ce.data.BYTES_PER_ELEMENT,(De+1)*Ne/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,De,Ce.width,Ce.height,1,Re,tt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Ce.width,Ce.height,ve.depth,Re,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,ze,Ce.width,Ce.height,ve.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?X&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Ce.width,Ce.height,ve.depth,Re,Le,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,ze,Ce.width,Ce.height,ve.depth,0,Re,Le,Ce.data)}else{Ge&&et&&t.texStorage2D(n.TEXTURE_2D,re,ze,Xe[0].width,Xe[0].height);for(let ae=0,_e=Xe.length;ae<_e;ae++)Ce=Xe[ae],y.format!==xn?Re!==null?Ge?X&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Ce.width,Ce.height,Re,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,ze,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?X&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Ce.width,Ce.height,Re,Le,Ce.data):t.texImage2D(n.TEXTURE_2D,ae,ze,Ce.width,Ce.height,0,Re,Le,Ce.data)}else if(y.isDataArrayTexture)if(Ge){if(et&&t.texStorage3D(n.TEXTURE_2D_ARRAY,re,ze,ve.width,ve.height,ve.depth),X)if(y.layerUpdates.size>0){const ae=Gf(ve.width,ve.height,y.format,y.type);for(const _e of y.layerUpdates){const Ne=ve.data.subarray(_e*ae/ve.data.BYTES_PER_ELEMENT,(_e+1)*ae/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_e,ve.width,ve.height,1,Re,Le,Ne)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Re,Le,ve.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ze,ve.width,ve.height,ve.depth,0,Re,Le,ve.data);else if(y.isData3DTexture)Ge?(et&&t.texStorage3D(n.TEXTURE_3D,re,ze,ve.width,ve.height,ve.depth),X&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Re,Le,ve.data)):t.texImage3D(n.TEXTURE_3D,0,ze,ve.width,ve.height,ve.depth,0,Re,Le,ve.data);else if(y.isFramebufferTexture){if(et)if(Ge)t.texStorage2D(n.TEXTURE_2D,re,ze,ve.width,ve.height);else{let ae=ve.width,_e=ve.height;for(let Ne=0;Ne<re;Ne++)t.texImage2D(n.TEXTURE_2D,Ne,ze,ae,_e,0,Re,Le,null),ae>>=1,_e>>=1}}else if(Xe.length>0){if(Ge&&et){const ae=te(Xe[0]);t.texStorage2D(n.TEXTURE_2D,re,ze,ae.width,ae.height)}for(let ae=0,_e=Xe.length;ae<_e;ae++)Ce=Xe[ae],Ge?X&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Re,Le,Ce):t.texImage2D(n.TEXTURE_2D,ae,ze,Re,Le,Ce);y.generateMipmaps=!1}else if(Ge){if(et){const ae=te(ve);t.texStorage2D(n.TEXTURE_2D,re,ze,ae.width,ae.height)}X&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Re,Le,ve)}else t.texImage2D(n.TEXTURE_2D,0,ze,Re,Le,ve);m(y)&&p(Z),Ae.__version=ee.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function Ee(M,y,k){if(y.image.length!==6)return;const Z=Ze(M,y),Q=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+k);const ee=i.get(Q);if(Q.version!==ee.__version||Z===!0){t.activeTexture(n.TEXTURE0+k);const Ae=ct.getPrimaries(ct.workingColorSpace),j=y.colorSpace===vi?null:ct.getPrimaries(y.colorSpace),ce=y.colorSpace===vi||Ae===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Fe=y.isCompressedTexture||y.image[0].isCompressedTexture,ve=y.image[0]&&y.image[0].isDataTexture,Re=[];for(let _e=0;_e<6;_e++)!Fe&&!ve?Re[_e]=x(y.image[_e],!0,r.maxCubemapSize):Re[_e]=ve?y.image[_e].image:y.image[_e],Re[_e]=ge(y,Re[_e]);const Le=Re[0],ze=s.convert(y.format,y.colorSpace),Ce=s.convert(y.type),Xe=w(y.internalFormat,ze,Ce,y.colorSpace),Ge=y.isVideoTexture!==!0,et=ee.__version===void 0||Z===!0,X=Q.dataReady;let re=H(y,Le);Ue(n.TEXTURE_CUBE_MAP,y);let ae;if(Fe){Ge&&et&&t.texStorage2D(n.TEXTURE_CUBE_MAP,re,Xe,Le.width,Le.height);for(let _e=0;_e<6;_e++){ae=Re[_e].mipmaps;for(let Ne=0;Ne<ae.length;Ne++){const De=ae[Ne];y.format!==xn?ze!==null?Ge?X&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne,0,0,De.width,De.height,ze,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne,Xe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne,0,0,De.width,De.height,ze,Ce,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne,Xe,De.width,De.height,0,ze,Ce,De.data)}}}else{if(ae=y.mipmaps,Ge&&et){ae.length>0&&re++;const _e=te(Re[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,re,Xe,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ve){Ge?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Re[_e].width,Re[_e].height,ze,Ce,Re[_e].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Xe,Re[_e].width,Re[_e].height,0,ze,Ce,Re[_e].data);for(let Ne=0;Ne<ae.length;Ne++){const tt=ae[Ne].image[_e].image;Ge?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne+1,0,0,tt.width,tt.height,ze,Ce,tt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne+1,Xe,tt.width,tt.height,0,ze,Ce,tt.data)}}else{Ge?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ze,Ce,Re[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,Xe,ze,Ce,Re[_e]);for(let Ne=0;Ne<ae.length;Ne++){const De=ae[Ne];Ge?X&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne+1,0,0,ze,Ce,De.image[_e]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne+1,Xe,ze,Ce,De.image[_e])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),ee.__version=Q.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function Me(M,y,k,Z,Q,ee){const Ae=s.convert(k.format,k.colorSpace),j=s.convert(k.type),ce=w(k.internalFormat,Ae,j,k.colorSpace),Fe=i.get(y),ve=i.get(k);if(ve.__renderTarget=y,!Fe.__hasExternalTextures){const Re=Math.max(1,y.width>>ee),Le=Math.max(1,y.height>>ee);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,ee,ce,Re,Le,y.depth,0,Ae,j,null):t.texImage2D(Q,ee,ce,Re,Le,0,Ae,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),oe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,Q,ve.__webglTexture,0,ie(y)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,Q,ve.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(M,y,k){if(n.bindRenderbuffer(n.RENDERBUFFER,M),y.depthBuffer){const Z=y.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,ee=S(y.stencilBuffer,Q),Ae=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=ie(y);oe(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,ee,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,j,ee,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ee,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,M)}else{const Z=y.textures;for(let Q=0;Q<Z.length;Q++){const ee=Z[Q],Ae=s.convert(ee.format,ee.colorSpace),j=s.convert(ee.type),ce=w(ee.internalFormat,Ae,j,ee.colorSpace),Fe=ie(y);k&&oe(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,ce,y.width,y.height):oe(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,ce,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ce,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(M,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),he(y.depthTexture,0);const Q=Z.__webglTexture,ee=ie(y);if(y.depthTexture.format===is)oe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(y.depthTexture.format===fs)oe(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function it(M){const y=i.get(M),k=M.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==M.depthTexture){const Z=M.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=Z}if(M.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Oe(y.__webglFramebuffer,M)}else if(k){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=n.createRenderbuffer(),be(y.__webglDepthbuffer[Z],M,!1);else{const Q=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=y.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),be(y.__webglDepthbuffer,M,!1);else{const Z=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(M,y,k){const Z=i.get(M);y!==void 0&&Me(Z.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&it(M)}function ht(M){const y=M.texture,k=i.get(M),Z=i.get(y);M.addEventListener("dispose",I);const Q=M.textures,ee=M.isWebGLCubeRenderTarget===!0,Ae=Q.length>1;if(Ae||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=y.version,o.memory.textures++),ee){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let ce=0;ce<y.mipmaps.length;ce++)k.__webglFramebuffer[j][ce]=n.createFramebuffer()}else k.__webglFramebuffer[j]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<y.mipmaps.length;j++)k.__webglFramebuffer[j]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let j=0,ce=Q.length;j<ce;j++){const Fe=i.get(Q[j]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&oe(M)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<Q.length;j++){const ce=Q[j];k.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[j]);const Fe=s.convert(ce.format,ce.colorSpace),ve=s.convert(ce.type),Re=w(ce.internalFormat,Fe,ve,ce.colorSpace,M.isXRRenderTarget===!0),Le=ie(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Re,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,k.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),be(k.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,y);for(let j=0;j<6;j++)if(y.mipmaps&&y.mipmaps.length>0)for(let ce=0;ce<y.mipmaps.length;ce++)Me(k.__webglFramebuffer[j][ce],M,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce);else Me(k.__webglFramebuffer[j],M,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let j=0,ce=Q.length;j<ce;j++){const Fe=Q[j],ve=i.get(Fe);t.bindTexture(n.TEXTURE_2D,ve.__webglTexture),Ue(n.TEXTURE_2D,Fe),Me(k.__webglFramebuffer,M,Fe,n.COLOR_ATTACHMENT0+j,n.TEXTURE_2D,0),m(Fe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(j=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,Z.__webglTexture),Ue(j,y),y.mipmaps&&y.mipmaps.length>0)for(let ce=0;ce<y.mipmaps.length;ce++)Me(k.__webglFramebuffer[ce],M,y,n.COLOR_ATTACHMENT0,j,ce);else Me(k.__webglFramebuffer,M,y,n.COLOR_ATTACHMENT0,j,0);m(y)&&p(j),t.unbindTexture()}M.depthBuffer&&it(M)}function D(M){const y=M.textures;for(let k=0,Z=y.length;k<Z;k++){const Q=y[k];if(m(Q)){const ee=R(M),Ae=i.get(Q).__webglTexture;t.bindTexture(ee,Ae),p(ee),t.unbindTexture()}}}const B=[],b=[];function me(M){if(M.samples>0){if(oe(M)===!1){const y=M.textures,k=M.width,Z=M.height;let Q=n.COLOR_BUFFER_BIT;const ee=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(M),j=y.length>1;if(j)for(let ce=0;ce<y.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ce=0;ce<y.length;ce++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ce]);const Fe=i.get(y[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,k,Z,0,0,k,Z,Q,n.NEAREST),l===!0&&(B.length=0,b.length=0,B.push(n.COLOR_ATTACHMENT0+ce),M.depthBuffer&&M.resolveDepthBuffer===!1&&(B.push(ee),b.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,B))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let ce=0;ce<y.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ce]);const Fe=i.get(y[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const y=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ie(M){return Math.min(r.maxSamples,M.samples)}function oe(M){const y=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function le(M){const y=o.render.frame;u.get(M)!==y&&(u.set(M,y),M.update())}function ge(M,y){const k=M.colorSpace,Z=M.format,Q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||k!==Xt&&k!==vi&&(ct.getTransfer(k)===xt?(Z!==xn||Q!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function te(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=z,this.setTexture2D=he,this.setTexture2DArray=J,this.setTexture3D=ue,this.setTextureCube=$,this.rebindTextures=Ve,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=oe}function JT(n,e){function t(i,r=vi){let s;const o=ct.getTransfer(r);if(i===Ti)return n.UNSIGNED_BYTE;if(i===ku)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fm)return n.BYTE;if(i===dm)return n.SHORT;if(i===uo)return n.UNSIGNED_SHORT;if(i===Bu)return n.INT;if(i===yr)return n.UNSIGNED_INT;if(i===un)return n.FLOAT;if(i===yi)return n.HALF_FLOAT;if(i===mm)return n.ALPHA;if(i===gm)return n.RGB;if(i===xn)return n.RGBA;if(i===_m)return n.LUMINANCE;if(i===vm)return n.LUMINANCE_ALPHA;if(i===is)return n.DEPTH_COMPONENT;if(i===fs)return n.DEPTH_STENCIL;if(i===Ka)return n.RED;if(i===zu)return n.RED_INTEGER;if(i===xm)return n.RG;if(i===Vu)return n.RG_INTEGER;if(i===Gu)return n.RGBA_INTEGER;if(i===ha||i===fa||i===da||i===pa)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ha)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===da)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ha)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===da)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nc||i===Uc||i===Oc||i===Fc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bc||i===kc||i===Hc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bc||i===kc)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Hc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===zc||i===Vc||i===Gc||i===Wc||i===Xc||i===jc||i===Yc||i===qc||i===Kc||i===$c||i===Zc||i===Jc||i===Qc||i===eu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===zc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Wc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$c)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Zc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qc)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eu)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ma||i===tu||i===nu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ma)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===tu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===nu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ym||i===iu||i===ru||i===su)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ma)return s.COMPRESSED_RED_RGTC1_EXT;if(i===iu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ru)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===su)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const QT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Gt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new bi({vertexShader:QT,fragmentShader:eb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new $a(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nb extends Er{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const x=new tb,m=t.getContextAttributes();let p=null,R=null;const w=[],S=[],H=new Je;let O=null;const I=new on;I.viewport=new ut;const V=new on;V.viewport=new ut;const T=[I,V],E=new py;let F=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(fe){let Ee=w[fe];return Ee===void 0&&(Ee=new Ol,w[fe]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function(fe){let Ee=w[fe];return Ee===void 0&&(Ee=new Ol,w[fe]=Ee),Ee.getGripSpace()},this.getHand=function(fe){let Ee=w[fe];return Ee===void 0&&(Ee=new Ol,w[fe]=Ee),Ee.getHandSpace()};function K(fe){const Ee=S.indexOf(fe.inputSource);if(Ee===-1)return;const Me=w[Ee];Me!==void 0&&(Me.update(fe.inputSource,fe.frame,c||o),Me.dispatchEvent({type:fe.type,data:fe.inputSource}))}function ne(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",ne),r.removeEventListener("inputsourceschange",he);for(let fe=0;fe<w.length;fe++){const Ee=S[fe];Ee!==null&&(S[fe]=null,w[fe].disconnect(Ee))}F=null,z=null,x.reset(),e.setRenderTarget(p),d=null,f=null,h=null,r=null,R=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(H.width,H.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(fe){s=fe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(fe){a=fe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(fe){c=fe},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(fe){if(r=fe,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",ne),r.addEventListener("inputsourceschange",he),m.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,be=null,Oe=null;m.depth&&(Oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=m.stencil?fs:is,be=m.stencil?hs:yr);const it={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(it),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),R=new Yi(f.textureWidth,f.textureHeight,{format:xn,type:Ti,depthTexture:new Fm(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const Me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),R=new Yi(d.framebufferWidth,d.framebufferHeight,{format:xn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function he(fe){for(let Ee=0;Ee<fe.removed.length;Ee++){const Me=fe.removed[Ee],be=S.indexOf(Me);be>=0&&(S[be]=null,w[be].disconnect(Me))}for(let Ee=0;Ee<fe.added.length;Ee++){const Me=fe.added[Ee];let be=S.indexOf(Me);if(be===-1){for(let it=0;it<w.length;it++)if(it>=S.length){S.push(Me),be=it;break}else if(S[it]===null){S[it]=Me,be=it;break}if(be===-1)break}const Oe=w[be];Oe&&Oe.connect(Me)}}const J=new G,ue=new G;function $(fe,Ee,Me){J.setFromMatrixPosition(Ee.matrixWorld),ue.setFromMatrixPosition(Me.matrixWorld);const be=J.distanceTo(ue),Oe=Ee.projectionMatrix.elements,it=Me.projectionMatrix.elements,Ve=Oe[14]/(Oe[10]-1),ht=Oe[14]/(Oe[10]+1),D=(Oe[9]+1)/Oe[5],B=(Oe[9]-1)/Oe[5],b=(Oe[8]-1)/Oe[0],me=(it[8]+1)/it[0],ie=Ve*b,oe=Ve*me,le=be/(-b+me),ge=le*-b;if(Ee.matrixWorld.decompose(fe.position,fe.quaternion,fe.scale),fe.translateX(ge),fe.translateZ(le),fe.matrixWorld.compose(fe.position,fe.quaternion,fe.scale),fe.matrixWorldInverse.copy(fe.matrixWorld).invert(),Oe[10]===-1)fe.projectionMatrix.copy(Ee.projectionMatrix),fe.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const te=Ve+le,M=ht+le,y=ie-ge,k=oe+(be-ge),Z=D*ht/M*te,Q=B*ht/M*te;fe.projectionMatrix.makePerspective(y,k,Z,Q,te,M),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert()}}function ye(fe,Ee){Ee===null?fe.matrixWorld.copy(fe.matrix):fe.matrixWorld.multiplyMatrices(Ee.matrixWorld,fe.matrix),fe.matrixWorldInverse.copy(fe.matrixWorld).invert()}this.updateCamera=function(fe){if(r===null)return;let Ee=fe.near,Me=fe.far;x.texture!==null&&(x.depthNear>0&&(Ee=x.depthNear),x.depthFar>0&&(Me=x.depthFar)),E.near=V.near=I.near=Ee,E.far=V.far=I.far=Me,(F!==E.near||z!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),F=E.near,z=E.far),I.layers.mask=fe.layers.mask|2,V.layers.mask=fe.layers.mask|4,E.layers.mask=I.layers.mask|V.layers.mask;const be=fe.parent,Oe=E.cameras;ye(E,be);for(let it=0;it<Oe.length;it++)ye(Oe[it],be);Oe.length===2?$(E,I,V):E.projectionMatrix.copy(I.projectionMatrix),we(fe,E,be)};function we(fe,Ee,Me){Me===null?fe.matrix.copy(Ee.matrixWorld):(fe.matrix.copy(Me.matrixWorld),fe.matrix.invert(),fe.matrix.multiply(Ee.matrixWorld)),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.updateMatrixWorld(!0),fe.projectionMatrix.copy(Ee.projectionMatrix),fe.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),fe.isPerspectiveCamera&&(fe.fov=ds*2*Math.atan(1/fe.projectionMatrix.elements[5]),fe.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(fe){l=fe,f!==null&&(f.fixedFoveation=fe),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=fe)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let Ie=null;function Ue(fe,Ee){if(u=Ee.getViewerPose(c||o),g=Ee,u!==null){const Me=u.views;d!==null&&(e.setRenderTargetFramebuffer(R,d.framebuffer),e.setRenderTarget(R));let be=!1;Me.length!==E.cameras.length&&(E.cameras.length=0,be=!0);for(let Ve=0;Ve<Me.length;Ve++){const ht=Me[Ve];let D=null;if(d!==null)D=d.getViewport(ht);else{const b=h.getViewSubImage(f,ht);D=b.viewport,Ve===0&&(e.setRenderTargetTextures(R,b.colorTexture,f.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(R))}let B=T[Ve];B===void 0&&(B=new on,B.layers.enable(Ve),B.viewport=new ut,T[Ve]=B),B.matrix.fromArray(ht.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(ht.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(D.x,D.y,D.width,D.height),Ve===0&&(E.matrix.copy(B.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),be===!0&&E.cameras.push(B)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const Ve=h.getDepthInformation(Me[0]);Ve&&Ve.isValid&&Ve.texture&&x.init(e,Ve,r.renderState)}}for(let Me=0;Me<w.length;Me++){const be=S[Me],Oe=w[Me];be!==null&&Oe!==void 0&&Oe.update(be,Ee,c||o)}Ie&&Ie(fe,Ee),Ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Ee}),g=null}const Ze=new Hm;Ze.setAnimationLoop(Ue),this.setAnimationLoop=function(fe){Ie=fe},this.dispose=function(){}}}const ar=new $n,ib=new $e;function rb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Lm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,R,w,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,R,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const R=e.get(p),w=R.envMap,S=R.envMapRotation;w&&(m.envMap.value=w,ar.copy(S),ar.x*=-1,ar.y*=-1,ar.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),m.envMapRotation.value.setFromMatrix4(ib.makeRotationFromEuler(ar)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,R,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*R,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,R){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const R=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,w){const S=w.program;i.uniformBlockBinding(R,S)}function c(R,w){let S=r[R.id];S===void 0&&(g(R),S=u(R),r[R.id]=S,R.addEventListener("dispose",m));const H=w.program;i.updateUBOMapping(R,H);const O=e.render.frame;s[R.id]!==O&&(f(R),s[R.id]=O)}function u(R){const w=h();R.__bindingPointIndex=w;const S=n.createBuffer(),H=R.__size,O=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,H,O),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,S),S}function h(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const w=r[R.id],S=R.uniforms,H=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let O=0,I=S.length;O<I;O++){const V=Array.isArray(S[O])?S[O]:[S[O]];for(let T=0,E=V.length;T<E;T++){const F=V[T];if(d(F,O,T,H)===!0){const z=F.__offset,K=Array.isArray(F.value)?F.value:[F.value];let ne=0;for(let he=0;he<K.length;he++){const J=K[he],ue=x(J);typeof J=="number"||typeof J=="boolean"?(F.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,z+ne,F.__data)):J.isMatrix3?(F.__data[0]=J.elements[0],F.__data[1]=J.elements[1],F.__data[2]=J.elements[2],F.__data[3]=0,F.__data[4]=J.elements[3],F.__data[5]=J.elements[4],F.__data[6]=J.elements[5],F.__data[7]=0,F.__data[8]=J.elements[6],F.__data[9]=J.elements[7],F.__data[10]=J.elements[8],F.__data[11]=0):(J.toArray(F.__data,ne),ne+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,F.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(R,w,S,H){const O=R.value,I=w+"_"+S;if(H[I]===void 0)return typeof O=="number"||typeof O=="boolean"?H[I]=O:H[I]=O.clone(),!0;{const V=H[I];if(typeof O=="number"||typeof O=="boolean"){if(V!==O)return H[I]=O,!0}else if(V.equals(O)===!1)return V.copy(O),!0}return!1}function g(R){const w=R.uniforms;let S=0;const H=16;for(let I=0,V=w.length;I<V;I++){const T=Array.isArray(w[I])?w[I]:[w[I]];for(let E=0,F=T.length;E<F;E++){const z=T[E],K=Array.isArray(z.value)?z.value:[z.value];for(let ne=0,he=K.length;ne<he;ne++){const J=K[ne],ue=x(J),$=S%H,ye=$%ue.boundary,we=$+ye;S+=ye,we!==0&&H-we<ue.storage&&(S+=H-we),z.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=ue.storage}}}const O=S%H;return O>0&&(S+=H-O),R.__size=S,R.__cache={},this}function x(R){const w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),w}function m(R){const w=R.target;w.removeEventListener("dispose",m);const S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(const R in r)n.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class h1{constructor(e={}){const{canvas:t=rx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const R=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this.toneMapping=ji,this.toneMappingExposure=1;const S=this;let H=!1,O=0,I=0,V=null,T=-1,E=null;const F=new ut,z=new ut;let K=null;const ne=new qe(0);let he=0,J=t.width,ue=t.height,$=1,ye=null,we=null;const Ie=new ut(0,0,J,ue),Ue=new ut(0,0,J,ue);let Ze=!1;const fe=new Ku;let Ee=!1,Me=!1;this.transmissionResolutionScale=1;const be=new $e,Oe=new $e,it=new G,Ve=new ut,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function B(){return V===null?$:1}let b=i;function me(v,C){return t.getContext(v,C)}try{const v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fu}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",De,!1),b===null){const C="webgl2";if(b=me(C,v),b===null)throw me(C)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let ie,oe,le,ge,te,M,y,k,Z,Q,ee,Ae,j,ce,Fe,ve,Re,Le,ze,Ce,Xe,Ge,et,X;function re(){ie=new gE(b),ie.init(),Ge=new JT(b,ie),oe=new uE(b,ie,e,Ge),le=new $T(b,ie),oe.reverseDepthBuffer&&f&&le.buffers.depth.setReversed(!0),ge=new xE(b),te=new FT,M=new ZT(b,ie,le,te,oe,Ge,ge),y=new fE(S),k=new mE(S),Z=new Ay(b),et=new lE(b,Z),Q=new _E(b,Z,ge,et),ee=new SE(b,Q,Z,ge),ze=new yE(b,oe,M),ve=new hE(te),Ae=new OT(S,y,k,ie,oe,et,ve),j=new rb(S,te),ce=new kT,Fe=new XT(ie),Le=new aE(S,y,k,le,ee,d,l),Re=new qT(S,ee,oe),X=new sb(b,ge,oe,le),Ce=new cE(b,ie,ge),Xe=new vE(b,ie,ge),ge.programs=Ae.programs,S.capabilities=oe,S.extensions=ie,S.properties=te,S.renderLists=ce,S.shadowMap=Re,S.state=le,S.info=ge}re();const ae=new nb(S,b);this.xr=ae,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const v=ie.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=ie.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(v){v!==void 0&&($=v,this.setSize(J,ue,!1))},this.getSize=function(v){return v.set(J,ue)},this.setSize=function(v,C,P=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=v,ue=C,t.width=Math.floor(v*$),t.height=Math.floor(C*$),P===!0&&(t.style.width=v+"px",t.style.height=C+"px"),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(J*$,ue*$).floor()},this.setDrawingBufferSize=function(v,C,P){J=v,ue=C,$=P,t.width=Math.floor(v*P),t.height=Math.floor(C*P),this.setViewport(0,0,v,C)},this.getCurrentViewport=function(v){return v.copy(F)},this.getViewport=function(v){return v.copy(Ie)},this.setViewport=function(v,C,P,U){v.isVector4?Ie.set(v.x,v.y,v.z,v.w):Ie.set(v,C,P,U),le.viewport(F.copy(Ie).multiplyScalar($).round())},this.getScissor=function(v){return v.copy(Ue)},this.setScissor=function(v,C,P,U){v.isVector4?Ue.set(v.x,v.y,v.z,v.w):Ue.set(v,C,P,U),le.scissor(z.copy(Ue).multiplyScalar($).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(v){le.setScissorTest(Ze=v)},this.setOpaqueSort=function(v){ye=v},this.setTransparentSort=function(v){we=v},this.getClearColor=function(v){return v.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(v=!0,C=!0,P=!0){let U=0;if(v){let L=!1;if(V!==null){const W=V.texture.format;L=W===Gu||W===Vu||W===zu}if(L){const W=V.texture.type,Y=W===Ti||W===yr||W===uo||W===hs||W===ku||W===Hu,q=Le.getClearColor(),se=Le.getClearAlpha(),de=q.r,pe=q.g,xe=q.b;Y?(g[0]=de,g[1]=pe,g[2]=xe,g[3]=se,b.clearBufferuiv(b.COLOR,0,g)):(x[0]=de,x[1]=pe,x[2]=xe,x[3]=se,b.clearBufferiv(b.COLOR,0,x))}else U|=b.COLOR_BUFFER_BIT}C&&(U|=b.DEPTH_BUFFER_BIT),P&&(U|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Le.dispose(),ce.dispose(),Fe.dispose(),te.dispose(),y.dispose(),k.dispose(),ee.dispose(),et.dispose(),X.dispose(),Ae.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Mo),ae.removeEventListener("sessionend",Eo),ti.stop()};function _e(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const v=ge.autoReset,C=Re.enabled,P=Re.autoUpdate,U=Re.needsUpdate,L=Re.type;re(),ge.autoReset=v,Re.enabled=C,Re.autoUpdate=P,Re.needsUpdate=U,Re.type=L}function De(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function tt(v){const C=v.target;C.removeEventListener("dispose",tt),bt(C)}function bt(v){Bt(v),te.remove(v)}function Bt(v){const C=te.get(v).programs;C!==void 0&&(C.forEach(function(P){Ae.releaseProgram(P)}),v.isShaderMaterial&&Ae.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,P,U,L,W){C===null&&(C=ht);const Y=L.isMesh&&L.matrixWorld.determinant()<0,q=el(v,C,P,U,L);le.setMaterial(U,Y);let se=P.index,de=1;if(U.wireframe===!0){if(se=Q.getWireframeAttribute(P),se===void 0)return;de=2}const pe=P.drawRange,xe=P.attributes.position;let Se=pe.start*de,Te=(pe.start+pe.count)*de;W!==null&&(Se=Math.max(Se,W.start*de),Te=Math.min(Te,(W.start+W.count)*de)),se!==null?(Se=Math.max(Se,0),Te=Math.min(Te,se.count)):xe!=null&&(Se=Math.max(Se,0),Te=Math.min(Te,xe.count));const ke=Te-Se;if(ke<0||ke===1/0)return;et.setup(L,U,q,P,se);let je,We=Ce;if(se!==null&&(je=Z.get(se),We=Xe,We.setIndex(je)),L.isMesh)U.wireframe===!0?(le.setLineWidth(U.wireframeLinewidth*B()),We.setMode(b.LINES)):We.setMode(b.TRIANGLES);else if(L.isLine){let Be=U.linewidth;Be===void 0&&(Be=1),le.setLineWidth(Be*B()),L.isLineSegments?We.setMode(b.LINES):L.isLineLoop?We.setMode(b.LINE_LOOP):We.setMode(b.LINE_STRIP)}else L.isPoints?We.setMode(b.POINTS):L.isSprite&&We.setMode(b.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)We.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))We.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Be=L._multiDrawStarts,nt=L._multiDrawCounts,He=L._multiDrawCount,mt=se?Z.get(se).bytesPerElement:1,Dt=te.get(U).currentProgram.getUniforms();for(let ft=0;ft<He;ft++)Dt.setValue(b,"_gl_DrawID",ft),We.render(Be[ft]/mt,nt[ft])}else if(L.isInstancedMesh)We.renderInstances(Se,ke,L.count);else if(P.isInstancedBufferGeometry){const Be=P._maxInstanceCount!==void 0?P._maxInstanceCount:1/0,nt=Math.min(P.instanceCount,Be);We.renderInstances(Se,ke,nt)}else We.render(Se,ke)};function pt(v,C,P){v.transparent===!0&&v.side===Gn&&v.forceSinglePass===!1?(v.side=fn,v.needsUpdate=!0,br(v,C,P),v.side=qn,v.needsUpdate=!0,br(v,C,P),v.side=Gn):br(v,C,P)}this.compile=function(v,C,P=null){P===null&&(P=v),p=Fe.get(P),p.init(C),w.push(p),P.traverseVisible(function(L){L.isLight&&L.layers.test(C.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),v!==P&&v.traverseVisible(function(L){L.isLight&&L.layers.test(C.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights();const U=new Set;return v.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const W=L.material;if(W)if(Array.isArray(W))for(let Y=0;Y<W.length;Y++){const q=W[Y];pt(q,P,L),U.add(q)}else pt(W,P,L),U.add(W)}),w.pop(),p=null,U},this.compileAsync=function(v,C,P=null){const U=this.compile(v,C,P);return new Promise(L=>{function W(){if(U.forEach(function(Y){te.get(Y).currentProgram.isReady()&&U.delete(Y)}),U.size===0){L(v);return}setTimeout(W,10)}ie.get("KHR_parallel_shader_compile")!==null?W():setTimeout(W,10)})};let dn=null;function An(v){dn&&dn(v)}function Mo(){ti.stop()}function Eo(){ti.start()}const ti=new Hm;ti.setAnimationLoop(An),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(v){dn=v,ae.setAnimationLoop(v),v===null?ti.stop():ti.start()},ae.addEventListener("sessionstart",Mo),ae.addEventListener("sessionend",Eo),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(C),C=ae.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,C,V),p=Fe.get(v,w.length),p.init(C),w.push(p),Oe.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),fe.setFromProjectionMatrix(Oe),Me=this.localClippingEnabled,Ee=ve.init(this.clippingPlanes,Me),m=ce.get(v,R.length),m.init(),R.push(m),ae.enabled===!0&&ae.isPresenting===!0){const W=S.xr.getDepthSensingMesh();W!==null&&Es(W,C,-1/0,S.sortObjects)}Es(v,C,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ye,we),D=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,D&&Le.addToRenderList(m,v),this.info.render.frame++,Ee===!0&&ve.beginShadows();const P=p.state.shadowsArray;Re.render(P,v,C),Ee===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const U=m.opaque,L=m.transmissive;if(p.setupLights(),C.isArrayCamera){const W=C.cameras;if(L.length>0)for(let Y=0,q=W.length;Y<q;Y++){const se=W[Y];To(U,L,v,se)}D&&Le.render(v);for(let Y=0,q=W.length;Y<q;Y++){const se=W[Y];Ts(m,v,se,se.viewport)}}else L.length>0&&To(U,L,v,C),D&&Le.render(v),Ts(m,v,C);V!==null&&I===0&&(M.updateMultisampleRenderTarget(V),M.updateRenderTargetMipmap(V)),v.isScene===!0&&v.onAfterRender(S,v,C),et.resetDefaultState(),T=-1,E=null,w.pop(),w.length>0?(p=w[w.length-1],Ee===!0&&ve.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Es(v,C,P,U){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)P=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||fe.intersectsSprite(v)){U&&Ve.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Oe);const Y=ee.update(v),q=v.material;q.visible&&m.push(v,Y,q,P,Ve.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||fe.intersectsObject(v))){const Y=ee.update(v),q=v.material;if(U&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ve.copy(v.boundingSphere.center)):(Y.boundingSphere===null&&Y.computeBoundingSphere(),Ve.copy(Y.boundingSphere.center)),Ve.applyMatrix4(v.matrixWorld).applyMatrix4(Oe)),Array.isArray(q)){const se=Y.groups;for(let de=0,pe=se.length;de<pe;de++){const xe=se[de],Se=q[xe.materialIndex];Se&&Se.visible&&m.push(v,Y,Se,P,Ve.z,xe)}}else q.visible&&m.push(v,Y,q,P,Ve.z,null)}}const W=v.children;for(let Y=0,q=W.length;Y<q;Y++)Es(W[Y],C,P,U)}function Ts(v,C,P,U){const L=v.opaque,W=v.transmissive,Y=v.transparent;p.setupLightsView(P),Ee===!0&&ve.setGlobalState(S.clippingPlanes,P),U&&le.viewport(F.copy(U)),L.length>0&&Tr(L,C,P),W.length>0&&Tr(W,C,P),Y.length>0&&Tr(Y,C,P),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function To(v,C,P,U){if((P.isScene===!0?P.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[U.id]===void 0&&(p.state.transmissionRenderTarget[U.id]=new Yi(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?yi:Ti,minFilter:Xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const W=p.state.transmissionRenderTarget[U.id],Y=U.viewport||F;W.setSize(Y.z*S.transmissionResolutionScale,Y.w*S.transmissionResolutionScale);const q=S.getRenderTarget();S.setRenderTarget(W),S.getClearColor(ne),he=S.getClearAlpha(),he<1&&S.setClearColor(16777215,.5),S.clear(),D&&Le.render(P);const se=S.toneMapping;S.toneMapping=ji;const de=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),p.setupLightsView(U),Ee===!0&&ve.setGlobalState(S.clippingPlanes,U),Tr(v,P,U),M.updateMultisampleRenderTarget(W),M.updateRenderTargetMipmap(W),ie.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let xe=0,Se=C.length;xe<Se;xe++){const Te=C[xe],ke=Te.object,je=Te.geometry,We=Te.material,Be=Te.group;if(We.side===Gn&&ke.layers.test(U.layers)){const nt=We.side;We.side=fn,We.needsUpdate=!0,bo(ke,P,U,je,We,Be),We.side=nt,We.needsUpdate=!0,pe=!0}}pe===!0&&(M.updateMultisampleRenderTarget(W),M.updateRenderTargetMipmap(W))}S.setRenderTarget(q),S.setClearColor(ne,he),de!==void 0&&(U.viewport=de),S.toneMapping=se}function Tr(v,C,P){const U=C.isScene===!0?C.overrideMaterial:null;for(let L=0,W=v.length;L<W;L++){const Y=v[L],q=Y.object,se=Y.geometry,de=U===null?Y.material:U,pe=Y.group;q.layers.test(P.layers)&&bo(q,C,P,se,de,pe)}}function bo(v,C,P,U,L,W){v.onBeforeRender(S,C,P,U,L,W),v.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),L.onBeforeRender(S,C,P,U,v,W),L.transparent===!0&&L.side===Gn&&L.forceSinglePass===!1?(L.side=fn,L.needsUpdate=!0,S.renderBufferDirect(P,C,U,L,v,W),L.side=qn,L.needsUpdate=!0,S.renderBufferDirect(P,C,U,L,v,W),L.side=Gn):S.renderBufferDirect(P,C,U,L,v,W),v.onAfterRender(S,C,P,U,L,W)}function br(v,C,P){C.isScene!==!0&&(C=ht);const U=te.get(v),L=p.state.lights,W=p.state.shadowsArray,Y=L.state.version,q=Ae.getParameters(v,L.state,W,C,P),se=Ae.getProgramCacheKey(q);let de=U.programs;U.environment=v.isMeshStandardMaterial?C.environment:null,U.fog=C.fog,U.envMap=(v.isMeshStandardMaterial?k:y).get(v.envMap||U.environment),U.envMapRotation=U.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,de===void 0&&(v.addEventListener("dispose",tt),de=new Map,U.programs=de);let pe=de.get(se);if(pe!==void 0){if(U.currentProgram===pe&&U.lightsStateVersion===Y)return As(v,q),pe}else q.uniforms=Ae.getUniforms(v),v.onBeforeCompile(q,S),pe=Ae.acquireProgram(q,se),de.set(se,pe),U.uniforms=q.uniforms;const xe=U.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(xe.clippingPlanes=ve.uniform),As(v,q),U.needsLights=Ci(v),U.lightsStateVersion=Y,U.needsLights&&(xe.ambientLightColor.value=L.state.ambient,xe.lightProbe.value=L.state.probe,xe.directionalLights.value=L.state.directional,xe.directionalLightShadows.value=L.state.directionalShadow,xe.spotLights.value=L.state.spot,xe.spotLightShadows.value=L.state.spotShadow,xe.rectAreaLights.value=L.state.rectArea,xe.ltc_1.value=L.state.rectAreaLTC1,xe.ltc_2.value=L.state.rectAreaLTC2,xe.pointLights.value=L.state.point,xe.pointLightShadows.value=L.state.pointShadow,xe.hemisphereLights.value=L.state.hemi,xe.directionalShadowMap.value=L.state.directionalShadowMap,xe.directionalShadowMatrix.value=L.state.directionalShadowMatrix,xe.spotShadowMap.value=L.state.spotShadowMap,xe.spotLightMatrix.value=L.state.spotLightMatrix,xe.spotLightMap.value=L.state.spotLightMap,xe.pointShadowMap.value=L.state.pointShadowMap,xe.pointShadowMatrix.value=L.state.pointShadowMatrix),U.currentProgram=pe,U.uniformsList=null,pe}function bs(v){if(v.uniformsList===null){const C=v.currentProgram.getUniforms();v.uniformsList=ga.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function As(v,C){const P=te.get(v);P.outputColorSpace=C.outputColorSpace,P.batching=C.batching,P.batchingColor=C.batchingColor,P.instancing=C.instancing,P.instancingColor=C.instancingColor,P.instancingMorph=C.instancingMorph,P.skinning=C.skinning,P.morphTargets=C.morphTargets,P.morphNormals=C.morphNormals,P.morphColors=C.morphColors,P.morphTargetsCount=C.morphTargetsCount,P.numClippingPlanes=C.numClippingPlanes,P.numIntersection=C.numClipIntersection,P.vertexAlphas=C.vertexAlphas,P.vertexTangents=C.vertexTangents,P.toneMapping=C.toneMapping}function el(v,C,P,U,L){C.isScene!==!0&&(C=ht),M.resetTextureUnits();const W=C.fog,Y=U.isMeshStandardMaterial?C.environment:null,q=V===null?S.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Xt,se=(U.isMeshStandardMaterial?k:y).get(U.envMap||Y),de=U.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pe=!!P.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),xe=!!P.morphAttributes.position,Se=!!P.morphAttributes.normal,Te=!!P.morphAttributes.color;let ke=ji;U.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(ke=S.toneMapping);const je=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,We=je!==void 0?je.length:0,Be=te.get(U),nt=p.state.lights;if(Ee===!0&&(Me===!0||v!==E)){const Mt=v===E&&U.id===T;ve.setState(U,v,Mt)}let He=!1;U.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==nt.state.version||Be.outputColorSpace!==q||L.isBatchedMesh&&Be.batching===!1||!L.isBatchedMesh&&Be.batching===!0||L.isBatchedMesh&&Be.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Be.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Be.instancing===!1||!L.isInstancedMesh&&Be.instancing===!0||L.isSkinnedMesh&&Be.skinning===!1||!L.isSkinnedMesh&&Be.skinning===!0||L.isInstancedMesh&&Be.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Be.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Be.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Be.instancingMorph===!1&&L.morphTexture!==null||Be.envMap!==se||U.fog===!0&&Be.fog!==W||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ve.numPlanes||Be.numIntersection!==ve.numIntersection)||Be.vertexAlphas!==de||Be.vertexTangents!==pe||Be.morphTargets!==xe||Be.morphNormals!==Se||Be.morphColors!==Te||Be.toneMapping!==ke||Be.morphTargetsCount!==We)&&(He=!0):(He=!0,Be.__version=U.version);let mt=Be.currentProgram;He===!0&&(mt=br(U,C,L));let Dt=!1,ft=!1,lt=!1;const Ye=mt.getUniforms(),Ct=Be.uniforms;if(le.useProgram(mt.program)&&(Dt=!0,ft=!0,lt=!0),U.id!==T&&(T=U.id,ft=!0),Dt||E!==v){le.buffers.depth.getReversed()?(be.copy(v.projectionMatrix),ox(be),ax(be),Ye.setValue(b,"projectionMatrix",be)):Ye.setValue(b,"projectionMatrix",v.projectionMatrix),Ye.setValue(b,"viewMatrix",v.matrixWorldInverse);const Nt=Ye.map.cameraPosition;Nt!==void 0&&Nt.setValue(b,it.setFromMatrixPosition(v.matrixWorld)),oe.logarithmicDepthBuffer&&Ye.setValue(b,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ye.setValue(b,"isOrthographic",v.isOrthographicCamera===!0),E!==v&&(E=v,ft=!0,lt=!0)}if(L.isSkinnedMesh){Ye.setOptional(b,L,"bindMatrix"),Ye.setOptional(b,L,"bindMatrixInverse");const Mt=L.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),Ye.setValue(b,"boneTexture",Mt.boneTexture,M))}L.isBatchedMesh&&(Ye.setOptional(b,L,"batchingTexture"),Ye.setValue(b,"batchingTexture",L._matricesTexture,M),Ye.setOptional(b,L,"batchingIdTexture"),Ye.setValue(b,"batchingIdTexture",L._indirectTexture,M),Ye.setOptional(b,L,"batchingColorTexture"),L._colorsTexture!==null&&Ye.setValue(b,"batchingColorTexture",L._colorsTexture,M));const kt=P.morphAttributes;if((kt.position!==void 0||kt.normal!==void 0||kt.color!==void 0)&&ze.update(L,P,mt),(ft||Be.receiveShadow!==L.receiveShadow)&&(Be.receiveShadow=L.receiveShadow,Ye.setValue(b,"receiveShadow",L.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Ct.envMap.value=se,Ct.flipEnvMap.value=se.isCubeTexture&&se.isRenderTargetTexture===!1?-1:1),U.isMeshStandardMaterial&&U.envMap===null&&C.environment!==null&&(Ct.envMapIntensity.value=C.environmentIntensity),ft&&(Ye.setValue(b,"toneMappingExposure",S.toneMappingExposure),Be.needsLights&&ni(Ct,lt),W&&U.fog===!0&&j.refreshFogUniforms(Ct,W),j.refreshMaterialUniforms(Ct,U,$,ue,p.state.transmissionRenderTarget[v.id]),ga.upload(b,bs(Be),Ct,M)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ga.upload(b,bs(Be),Ct,M),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ye.setValue(b,"center",L.center),Ye.setValue(b,"modelViewMatrix",L.modelViewMatrix),Ye.setValue(b,"normalMatrix",L.normalMatrix),Ye.setValue(b,"modelMatrix",L.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Mt=U.uniformsGroups;for(let Nt=0,tl=Mt.length;Nt<tl;Nt++){const Zi=Mt[Nt];X.update(Zi,mt),X.bind(Zi,mt)}}return mt}function ni(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function Ci(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(v,C,P){te.get(v.texture).__webglTexture=C,te.get(v.depthTexture).__webglTexture=P;const U=te.get(v);U.__hasExternalTextures=!0,U.__autoAllocateDepthBuffer=P===void 0,U.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,C){const P=te.get(v);P.__webglFramebuffer=C,P.__useDefaultFramebuffer=C===void 0};const _=b.createFramebuffer();this.setRenderTarget=function(v,C=0,P=0){V=v,O=C,I=P;let U=!0,L=null,W=!1,Y=!1;if(v){const se=te.get(v);if(se.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(b.FRAMEBUFFER,null),U=!1;else if(se.__webglFramebuffer===void 0)M.setupRenderTarget(v);else if(se.__hasExternalTextures)M.rebindTextures(v,te.get(v.texture).__webglTexture,te.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const xe=v.depthTexture;if(se.__boundDepthTexture!==xe){if(xe!==null&&te.has(xe)&&(v.width!==xe.image.width||v.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(v)}}const de=v.texture;(de.isData3DTexture||de.isDataArrayTexture||de.isCompressedArrayTexture)&&(Y=!0);const pe=te.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(pe[C])?L=pe[C][P]:L=pe[C],W=!0):v.samples>0&&M.useMultisampledRTT(v)===!1?L=te.get(v).__webglMultisampledFramebuffer:Array.isArray(pe)?L=pe[P]:L=pe,F.copy(v.viewport),z.copy(v.scissor),K=v.scissorTest}else F.copy(Ie).multiplyScalar($).floor(),z.copy(Ue).multiplyScalar($).floor(),K=Ze;if(P!==0&&(L=_),le.bindFramebuffer(b.FRAMEBUFFER,L)&&U&&le.drawBuffers(v,L),le.viewport(F),le.scissor(z),le.setScissorTest(K),W){const se=te.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+C,se.__webglTexture,P)}else if(Y){const se=te.get(v.texture),de=C;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,se.__webglTexture,P,de)}else if(v!==null&&P!==0){const se=te.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,se.__webglTexture,P)}T=-1},this.readRenderTargetPixels=function(v,C,P,U,L,W,Y){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let q=te.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Y!==void 0&&(q=q[Y]),q){le.bindFramebuffer(b.FRAMEBUFFER,q);try{const se=v.texture,de=se.format,pe=se.type;if(!oe.textureFormatReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-U&&P>=0&&P<=v.height-L&&b.readPixels(C,P,U,L,Ge.convert(de),Ge.convert(pe),W)}finally{const se=V!==null?te.get(V).__webglFramebuffer:null;le.bindFramebuffer(b.FRAMEBUFFER,se)}}},this.readRenderTargetPixelsAsync=async function(v,C,P,U,L,W,Y){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let q=te.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Y!==void 0&&(q=q[Y]),q){const se=v.texture,de=se.format,pe=se.type;if(!oe.textureFormatReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(C>=0&&C<=v.width-U&&P>=0&&P<=v.height-L){le.bindFramebuffer(b.FRAMEBUFFER,q);const xe=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,xe),b.bufferData(b.PIXEL_PACK_BUFFER,W.byteLength,b.STREAM_READ),b.readPixels(C,P,U,L,Ge.convert(de),Ge.convert(pe),0);const Se=V!==null?te.get(V).__webglFramebuffer:null;le.bindFramebuffer(b.FRAMEBUFFER,Se);const Te=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await sx(b,Te,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,xe),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,W),b.deleteBuffer(xe),b.deleteSync(Te),W}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,C=null,P=0){v.isTexture!==!0&&(Wr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),C=arguments[0]||null,v=arguments[1]);const U=Math.pow(2,-P),L=Math.floor(v.image.width*U),W=Math.floor(v.image.height*U),Y=C!==null?C.x:0,q=C!==null?C.y:0;M.setTexture2D(v,0),b.copyTexSubImage2D(b.TEXTURE_2D,P,0,0,Y,q,L,W),le.unbindTexture()};const A=b.createFramebuffer(),N=b.createFramebuffer();this.copyTextureToTexture=function(v,C,P=null,U=null,L=0,W=null){v.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture function signature has changed."),U=arguments[0]||null,v=arguments[1],C=arguments[2],W=arguments[3]||0,P=null),W===null&&(L!==0?(Wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),W=L,L=0):W=0);let Y,q,se,de,pe,xe,Se,Te,ke;const je=v.isCompressedTexture?v.mipmaps[W]:v.image;if(P!==null)Y=P.max.x-P.min.x,q=P.max.y-P.min.y,se=P.isBox3?P.max.z-P.min.z:1,de=P.min.x,pe=P.min.y,xe=P.isBox3?P.min.z:0;else{const kt=Math.pow(2,-L);Y=Math.floor(je.width*kt),q=Math.floor(je.height*kt),v.isDataArrayTexture?se=je.depth:v.isData3DTexture?se=Math.floor(je.depth*kt):se=1,de=0,pe=0,xe=0}U!==null?(Se=U.x,Te=U.y,ke=U.z):(Se=0,Te=0,ke=0);const We=Ge.convert(C.format),Be=Ge.convert(C.type);let nt;C.isData3DTexture?(M.setTexture3D(C,0),nt=b.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(M.setTexture2DArray(C,0),nt=b.TEXTURE_2D_ARRAY):(M.setTexture2D(C,0),nt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,C.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,C.unpackAlignment);const He=b.getParameter(b.UNPACK_ROW_LENGTH),mt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Dt=b.getParameter(b.UNPACK_SKIP_PIXELS),ft=b.getParameter(b.UNPACK_SKIP_ROWS),lt=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,je.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,je.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,de),b.pixelStorei(b.UNPACK_SKIP_ROWS,pe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,xe);const Ye=v.isDataArrayTexture||v.isData3DTexture,Ct=C.isDataArrayTexture||C.isData3DTexture;if(v.isDepthTexture){const kt=te.get(v),Mt=te.get(C),Nt=te.get(kt.__renderTarget),tl=te.get(Mt.__renderTarget);le.bindFramebuffer(b.READ_FRAMEBUFFER,Nt.__webglFramebuffer),le.bindFramebuffer(b.DRAW_FRAMEBUFFER,tl.__webglFramebuffer);for(let Zi=0;Zi<se;Zi++)Ye&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,te.get(v).__webglTexture,L,xe+Zi),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,te.get(C).__webglTexture,W,ke+Zi)),b.blitFramebuffer(de,pe,Y,q,Se,Te,Y,q,b.DEPTH_BUFFER_BIT,b.NEAREST);le.bindFramebuffer(b.READ_FRAMEBUFFER,null),le.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(L!==0||v.isRenderTargetTexture||te.has(v)){const kt=te.get(v),Mt=te.get(C);le.bindFramebuffer(b.READ_FRAMEBUFFER,A),le.bindFramebuffer(b.DRAW_FRAMEBUFFER,N);for(let Nt=0;Nt<se;Nt++)Ye?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,kt.__webglTexture,L,xe+Nt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,kt.__webglTexture,L),Ct?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Mt.__webglTexture,W,ke+Nt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Mt.__webglTexture,W),L!==0?b.blitFramebuffer(de,pe,Y,q,Se,Te,Y,q,b.COLOR_BUFFER_BIT,b.NEAREST):Ct?b.copyTexSubImage3D(nt,W,Se,Te,ke+Nt,de,pe,Y,q):b.copyTexSubImage2D(nt,W,Se,Te,de,pe,Y,q);le.bindFramebuffer(b.READ_FRAMEBUFFER,null),le.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Ct?v.isDataTexture||v.isData3DTexture?b.texSubImage3D(nt,W,Se,Te,ke,Y,q,se,We,Be,je.data):C.isCompressedArrayTexture?b.compressedTexSubImage3D(nt,W,Se,Te,ke,Y,q,se,We,je.data):b.texSubImage3D(nt,W,Se,Te,ke,Y,q,se,We,Be,je):v.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,W,Se,Te,Y,q,We,Be,je.data):v.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,W,Se,Te,je.width,je.height,We,je.data):b.texSubImage2D(b.TEXTURE_2D,W,Se,Te,Y,q,We,Be,je);b.pixelStorei(b.UNPACK_ROW_LENGTH,He),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,mt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Dt),b.pixelStorei(b.UNPACK_SKIP_ROWS,ft),b.pixelStorei(b.UNPACK_SKIP_IMAGES,lt),W===0&&C.generateMipmaps&&b.generateMipmap(nt),le.unbindTexture()},this.copyTextureToTexture3D=function(v,C,P=null,U=null,L=0){return v.isTexture!==!0&&(Wr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),P=arguments[0]||null,U=arguments[1]||null,v=arguments[2],C=arguments[3],L=arguments[4]||0),Wr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,C,P,U,L)},this.initRenderTarget=function(v){te.get(v).__webglFramebuffer===void 0&&M.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?M.setTextureCube(v,0):v.isData3DTexture?M.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?M.setTexture2DArray(v,0):M.setTexture2D(v,0),le.unbindTexture()},this.resetState=function(){O=0,I=0,V=null,le.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const pd={type:"change"},rh={type:"start"},Xm={type:"end"},ra=new xs,md=new pi,ob=Math.cos(70*Tm.DEG2RAD),Ut=new G,ln=2*Math.PI,yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Kl=1e-6;class f1 extends Ty{constructor(e,t=null){super(e,t),this.state=yt.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ts.ROTATE,MIDDLE:ts.DOLLY,RIGHT:ts.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Kn,this._lastTargetPosition=new G,this._quat=new Kn().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vf,this._sphericalDelta=new Vf,this._scale=1,this._panOffset=new G,this._rotateStart=new Je,this._rotateEnd=new Je,this._rotateDelta=new Je,this._panStart=new Je,this._panEnd=new Je,this._panDelta=new Je,this._dollyStart=new Je,this._dollyEnd=new Je,this._dollyDelta=new Je,this._dollyDirection=new G,this._mouse=new Je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lb.bind(this),this._onPointerDown=ab.bind(this),this._onPointerUp=cb.bind(this),this._onContextMenu=gb.bind(this),this._onMouseWheel=fb.bind(this),this._onKeyDown=db.bind(this),this._onTouchStart=pb.bind(this),this._onTouchMove=mb.bind(this),this._onMouseDown=ub.bind(this),this._onMouseMove=hb.bind(this),this._interceptControlDown=_b.bind(this),this._interceptControlUp=vb.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pd),this.update(),this.state=yt.NONE}update(e=null){const t=this.object.position;Ut.copy(t).sub(this.target),Ut.applyQuaternion(this._quat),this._spherical.setFromVector3(Ut),this.autoRotate&&this.state===yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),r<-Math.PI?r+=ln:r>Math.PI&&(r-=ln),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ut.setFromSpherical(this._spherical),Ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ut.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ra.origin.copy(this.object.position),ra.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ra.direction))<ob?this.object.lookAt(this.target):(md.setFromNormalAndCoplanarPoint(this.object.up,this.target),ra.intersectPlane(md,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Kl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Kl||this._lastTargetPosition.distanceToSquared(this.target)>Kl?(this.dispatchEvent(pd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ut.setFromMatrixColumn(t,0),Ut.multiplyScalar(-e),this._panOffset.add(Ut)}_panUp(e,t){this.screenSpacePanning===!0?Ut.setFromMatrixColumn(t,1):(Ut.setFromMatrixColumn(t,0),Ut.crossVectors(this.object.up,Ut)),Ut.multiplyScalar(e),this._panOffset.add(Ut)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ut.copy(r).sub(this.target);let s=Ut.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*t*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=t-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Je,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ab(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function lb(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function cb(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xm),this.state=yt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ub(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=yt.DOLLY;break;case ts.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=yt.ROTATE}break;case ts.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=yt.PAN}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(rh)}function hb(n){switch(this.state){case yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function fb(n){this.enabled===!1||this.enableZoom===!1||this.state!==yt.NONE||(n.preventDefault(),this.dispatchEvent(rh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Xm))}function db(n){this.enabled!==!1&&this._handleKeyDown(n)}function pb(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=yt.TOUCH_ROTATE;break;case Xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=yt.TOUCH_PAN;break;default:this.state=yt.NONE}break;case 2:switch(this.touches.TWO){case Xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=yt.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=yt.TOUCH_DOLLY_ROTATE;break;default:this.state=yt.NONE}break;default:this.state=yt.NONE}this.state!==yt.NONE&&this.dispatchEvent(rh)}function mb(n){switch(this._trackPointer(n),this.state){case yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=yt.NONE}}function gb(n){this.enabled!==!1&&n.preventDefault()}function _b(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vb(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class d1 extends At{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Je(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Vr=new G,gd=new $e,_d=new $e,vd=new G,xd=new G;class p1{constructor(e={}){const t=this;let i,r,s,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(g,x){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),x.parent===null&&x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),gd.copy(x.matrixWorldInverse),_d.multiplyMatrices(x.projectionMatrix,gd),u(g,g,x),d(g)},this.setSize=function(g,x){i=g,r=x,s=i/2,o=r/2,l.style.width=g+"px",l.style.height=x+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let x=0,m=g.children.length;x<m;x++)c(g.children[x])}function u(g,x,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){Vr.setFromMatrixPosition(g.matrixWorld),Vr.applyMatrix4(_d);const p=Vr.z>=-1&&Vr.z<=1&&g.layers.test(m.layers)===!0,R=g.element;R.style.display=p===!0?"":"none",p===!0&&(g.onBeforeRender(t,x,m),R.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(Vr.x*s+s)+"px,"+(-Vr.y*o+o)+"px)",R.parentNode!==l&&l.appendChild(R),g.onAfterRender(t,x,m));const w={distanceToCameraSquared:h(m,g)};a.objects.set(g,w)}for(let p=0,R=g.children.length;p<R;p++)u(g.children[p],x,m)}function h(g,x){return vd.setFromMatrixPosition(g.matrixWorld),xd.setFromMatrixPosition(x.matrixWorld),vd.distanceToSquared(xd)}function f(g){const x=[];return g.traverseVisible(function(m){m.isCSS2DObject&&x.push(m)}),x}function d(g){const x=f(g).sort(function(p,R){if(p.renderOrder!==R.renderOrder)return R.renderOrder-p.renderOrder;const w=a.objects.get(p).distanceToCameraSquared,S=a.objects.get(R).distanceToCameraSquared;return w-S}),m=x.length;for(let p=0,R=x.length;p<R;p++)x[p].element.style.zIndex=m-p}}}function yd(n,e){if(e===Lv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===ou||e===Sm){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===ou)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class m1 extends $i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Eb(t)}),this.register(function(t){return new Tb(t)}),this.register(function(t){return new Db(t)}),this.register(function(t){return new Nb(t)}),this.register(function(t){return new Ub(t)}),this.register(function(t){return new Ab(t)}),this.register(function(t){return new wb(t)}),this.register(function(t){return new Rb(t)}),this.register(function(t){return new Cb(t)}),this.register(function(t){return new Mb(t)}),this.register(function(t){return new Pb(t)}),this.register(function(t){return new bb(t)}),this.register(function(t){return new Ib(t)}),this.register(function(t){return new Lb(t)}),this.register(function(t){return new yb(t)}),this.register(function(t){return new Ob(t)}),this.register(function(t){return new Fb(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=eo.extractUrlBase(e);o=eo.resolveURL(c,this.path)}else o=eo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new mo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===jm){try{o[at.KHR_BINARY_GLTF]=new Bb(e)}catch(h){r&&r(h);return}s=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Zb(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case at.KHR_MATERIALS_UNLIT:o[h]=new Sb;break;case at.KHR_DRACO_MESH_COMPRESSION:o[h]=new kb(s,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[h]=new Hb;break;case at.KHR_MESH_QUANTIZATION:o[h]=new zb;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function xb(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class yb{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new qe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Xt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new fy(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new uy(u),c.distance=h;break;case"spot":c=new ly(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),di(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class Sb{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return pr}extendParams(e,t,i){const r=[];e.color=new qe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Xt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,It))}return Promise.all(r)}}class Mb{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Eb{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(a,a)}return Promise.all(s)}}class Tb{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class bb{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Ab{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new qe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Xt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,It)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class wb{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Rb{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new qe().setRGB(a[0],a[1],a[2],Xt),Promise.all(s)}}class Cb{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Pb{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new qe().setRGB(a[0],a[1],a[2],Xt),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,It)),Promise.all(s)}}class Lb{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class Ib{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Qn}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class Db{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Nb{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ub{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ob{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,r.mode,r.filter),d})})}else return null}}class Fb{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Mn.TRIANGLES&&c.mode!==Mn.TRIANGLE_STRIP&&c.mode!==Mn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const x=new $e,m=new G,p=new Kn,R=new G(1,1,1),w=new kx(g.geometry,g.material,f);for(let S=0;S<f;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,S),l.SCALE&&R.fromBufferAttribute(l.SCALE,S),w.setMatrixAt(S,x.compose(m,p,R));for(const S in l)if(S==="_COLOR_0"){const H=l[S];w.instanceColor=new cu(H.array,H.itemSize,H.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);At.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),d.push(w)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const jm="glTF",Bs=12,Sd={JSON:1313821514,BIN:5130562};class Bb{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Bs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Bs,s=new DataView(e,Bs);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Sd.JSON){const c=new Uint8Array(e,Bs+o,a);this.content=i.decode(c)}else if(l===Sd.BIN){const c=Bs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class kb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=du[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=du[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],d=ss[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){r.decodeDracoFile(u,function(d){for(const g in d.attributes){const x=d.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}h(d)},a,c,Xt,f)})})}}class Hb{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class zb{constructor(){this.name=at.KHR_MESH_QUANTIZATION}}class Ym extends yo{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,x=g-c,m=-2*d+3*f,p=d-f,R=1-m,w=p-f+h;for(let S=0;S!==a;S++){const H=o[x+S+a],O=o[x+S+l]*u,I=o[g+S+a],V=o[g+S]*u;s[S]=R*H+w*O+m*I+p*V}return s}}const Vb=new Kn;class Gb extends Ym{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return Vb.fromArray(s).normalize().toArray(s),s}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Md={9728:an,9729:Vt,9984:hm,9985:ua,9986:zs,9987:Xn},Ed={33071:Wn,33648:Aa,10497:us},$l={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},du={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Fi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Wb={CUBICSPLINE:void 0,LINEAR:fo,STEP:ho},Zl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Xb(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ju({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qn})),n.DefaultMaterial}function lr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function di(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function jb(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(r){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=h),s&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function Yb(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qb(n){let e;const t=n.extensions&&n.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jl(t.attributes):e=n.indices+":"+Jl(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Jl(n.targets[i]);return e}function Jl(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function pu(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Kb(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const $b=new $e;class Zb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new xb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new oy(this.options.manager):this.textureLoader=new dy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new mo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return lr(s,a,r),di(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(eo.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=$l[r.type],a=ss[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Kt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=$l[r.type],c=ss[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,d=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let x,m;if(d&&d!==h){const p=Math.floor(f/d),R="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let w=t.cache.get(R);w||(x=new c(a,p*d,r.count*d/u),w=new Nx(x,d/u),t.cache.add(R,w)),m=new ju(w,l,f%d/u,g)}else a===null?x=new c(r.count*l):x=new c(a,f,r.count*l),m=new Kt(x,l,g);if(r.sparse!==void 0){const p=$l.SCALAR,R=ss[r.sparse.indices.componentType],w=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,H=new R(o[1],w,r.sparse.count*p),O=new c(o[2],S,r.sparse.count*l);a!==null&&(m=new Kt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let I=0,V=H.length;I<V;I++){const T=H[I];if(m.setX(T,O[I*l]),l>=2&&m.setY(T,O[I*l+1]),l>=3&&m.setZ(T,O[I*l+2]),l>=4&&m.setW(T,O[I*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=Md[f.magFilter]||Vt,u.minFilter=Md[f.minFilter]||Xn,u.wrapS=Ed[f.wrapS]||us,u.wrapT=Ed[f.wrapT]||us,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==an&&u.minFilter!==Vt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Gt(x);m.needsUpdate=!0,f(m)}),t.load(eo.resolveURL(h,s.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),di(h,o),h.userData.mimeType=o.mimeType||Kb(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[at.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Om,Yn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new $u,Yn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ju}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[at.KHR_MATERIALS_UNLIT]){const h=r[at.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new qe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Xt),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,It)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Gn);const u=s.alphaMode||Zl.OPAQUE;if(u===Zl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Zl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==pr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Je(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==pr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==pr){const h=s.emissiveFactor;a.emissive=new qe().setRGB(h[0],h[1],h[2],Xt)}return s.emissiveTexture!==void 0&&o!==pr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,It)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),di(h,s),t.associations.set(h,{materials:e}),s.extensions&&lr(r,h,s),h})}createUniqueName(e){const t=vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Td(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=qb(c),h=r[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[at.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Td(new bn,c,t),r[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Xb(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const x=u[d],m=o[d];let p;const R=c[d];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Ox(x,R):new hn(x,R),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?p.geometry=yd(p.geometry,Sm):m.mode===Mn.TRIANGLE_FAN&&(p.geometry=yd(p.geometry,ou));else if(m.mode===Mn.LINES)p=new Um(x,R);else if(m.mode===Mn.LINE_STRIP)p=new Zu(x,R);else if(m.mode===Mn.LINE_LOOP)p=new Vx(x,R);else if(m.mode===Mn.POINTS)p=new Gx(x,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Yb(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),di(p,s),m.extensions&&lr(r,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&lr(r,h[0],s),h[0];const f=new mr;s.extensions&&lr(r,f,s),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new on(Tm.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new eh(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),di(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new $e;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new qu(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){const d=r.channels[h],g=r.samplers[d.sampler],x=d.target,m=x.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,R=r.parameters!==void 0?r.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",R)),c.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let R=0,w=f.length;R<w;R++){const S=f[R],H=d[R],O=g[R],I=x[R],V=m[R];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const T=i._createAnimationTracks(S,H,O,I,V);if(T)for(let E=0;E<T.length;E++)p.push(T[E])}return new Jx(s,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,$b)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Nm:c.length>1?u=new mr:c.length===1?u=c[0]:u=new At,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),di(u,s),s.extensions&&lr(i,u,s),s.matrix!==void 0){const h=new $e;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new mr;i.name&&(s.name=r.createUniqueName(i.name)),di(s,i),i.extensions&&lr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of r.associations)(f instanceof Yn||f instanceof Gt)&&h.set(f,d);return u.traverse(f=>{const d=r.associations.get(f);d!=null&&h.set(f,d)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];Fi[s.path]===Fi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Fi[s.path]){case Fi.weights:c=ms;break;case Fi.rotation:c=gs;break;case Fi.position:case Fi.scale:c=_s;break;default:switch(i.itemSize){case 1:c=ms;break;case 2:case 3:default:c=_s;break}break}const u=r.interpolation!==void 0?Wb[r.interpolation]:fo,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Fi[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=pu(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof gs?Gb:Ym;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Jb(n,e,t){const i=e.attributes,r=new Ri;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new G(l[0],l[1],l[2]),new G(c[0],c[1],c[2])),a.normalized){const u=pu(ss[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new G,l=new G;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const x=pu(ss[f.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Jn;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function Td(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=du[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return ct.workingColorSpace!==Xt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),di(n,e),Jb(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?jb(n,e.targets,t):n})}const Ql=new WeakMap;class g1 extends $i{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,r){const s=new mo(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,r)},i,r)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,It,i).catch(i)}decodeDracoFile(e,t,i,r,s=Xt,o=()=>{}){const a={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const i=JSON.stringify(t);if(Ql.has(e)){const l=Ql.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(r=l,new Promise((c,u)=>{r._callbacks[s]={resolve:c,reject:u},r.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{r&&s&&this._releaseTask(r,s)}),Ql.set(e,{key:i,promise:a}),a}_createGeometry(e){const t=new bn;e.index&&t.setIndex(new Kt(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const r=e.attributes[i],s=r.name,o=r.array,a=r.itemSize,l=new Kt(o,a);s==="color"&&(this._assignVertexColorSpace(l,r.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==It)return;const i=new qe;for(let r=0,s=e.count;r<s;r++)i.fromBufferAttribute(e,r),ct.toWorkingColorSpace(i,It),e.setXYZ(r,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new mo(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((r,s)=>{i.load(e,r,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const r=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const s=Qb.toString(),o=["/* draco decoder */",r,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(s){const o=s.data;switch(o.type){case"decode":r._callbacks[o.id].resolve(o);break;case"error":r._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,s){return r._taskLoad>s._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Qb(){let n,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":n=a.decoderConfig,e=new Promise(function(u){n.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(n)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(l),c),g=d.attributes.map(x=>x.array.buffer);d.index&&g.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},g)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(f)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(g===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const x={index:null,attributes:[]};for(const m in u){const p=self[h[m]];let R,w;if(c.useUniqueIDs)w=u[m],R=a.GetAttributeByUniqueId(f,w);else{if(w=a.GetAttributeId(f,o[u[m]]),w===-1)continue;R=a.GetAttribute(f,w)}const S=r(o,a,f,m,p,R);m==="color"&&(S.vertexColorSpace=c.vertexColorSpace),x.attributes.push(S)}return g===o.TRIANGULAR_MESH&&(x.index=i(o,a,f)),o.destroy(f),x}function i(o,a,l){const u=l.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function r(o,a,l,c,u,h){const f=h.num_components(),g=l.num_points()*f,x=g*u.BYTES_PER_ELEMENT,m=s(o,u),p=o._malloc(x);a.GetAttributeDataArrayForAllPoints(l,h,m,x,p);const R=new u(o.HEAPF32.buffer,p,g).slice();return o._free(p),{name:c,array:R,itemSize:f}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}var eA=typeof global=="object"&&global&&global.Object===Object&&global,tA=typeof self=="object"&&self&&self.Object===Object&&self,nA=eA||tA||Function("return this")(),La=nA.Symbol,qm=Object.prototype,iA=qm.hasOwnProperty,rA=qm.toString,ks=La?La.toStringTag:void 0;function sA(n){var e=iA.call(n,ks),t=n[ks];try{n[ks]=void 0;var i=!0}catch{}var r=rA.call(n);return i&&(e?n[ks]=t:delete n[ks]),r}var oA=Object.prototype,aA=oA.toString;function lA(n){return aA.call(n)}var cA="[object Null]",uA="[object Undefined]",bd=La?La.toStringTag:void 0;function hA(n){return n==null?n===void 0?uA:cA:bd&&bd in Object(n)?sA(n):lA(n)}function fA(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var dA="[object AsyncFunction]",pA="[object Function]",mA="[object GeneratorFunction]",gA="[object Proxy]";function _1(n){if(!fA(n))return!1;var e=hA(n);return e==pA||e==mA||e==dA||e==gA}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var En=Uint8Array,Yr=Uint16Array,_A=Int32Array,Km=new En([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),$m=new En([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),vA=new En([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Zm=function(n,e){for(var t=new Yr(31),i=0;i<31;++i)t[i]=e+=1<<n[i-1];for(var r=new _A(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)r[s]=s-t[i]<<5|i;return{b:t,r}},Jm=Zm(Km,2),Qm=Jm.b,xA=Jm.r;Qm[28]=258,xA[258]=28;var yA=Zm($m,0),SA=yA.b,mu=new Yr(32768);for(var Tt=0;Tt<32768;++Tt){var Bi=(Tt&43690)>>1|(Tt&21845)<<1;Bi=(Bi&52428)>>2|(Bi&13107)<<2,Bi=(Bi&61680)>>4|(Bi&3855)<<4,mu[Tt]=((Bi&65280)>>8|(Bi&255)<<8)>>1}var to=function(n,e,t){for(var i=n.length,r=0,s=new Yr(e);r<i;++r)n[r]&&++s[n[r]-1];var o=new Yr(e);for(r=1;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new Yr(1<<e);var l=15-e;for(r=0;r<i;++r)if(n[r])for(var c=r<<4|n[r],u=e-n[r],h=o[n[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[mu[h]>>l]=c}else for(a=new Yr(i),r=0;r<i;++r)n[r]&&(a[r]=mu[o[n[r]-1]++]>>15-n[r]);return a},So=new En(288);for(var Tt=0;Tt<144;++Tt)So[Tt]=8;for(var Tt=144;Tt<256;++Tt)So[Tt]=9;for(var Tt=256;Tt<280;++Tt)So[Tt]=7;for(var Tt=280;Tt<288;++Tt)So[Tt]=8;var eg=new En(32);for(var Tt=0;Tt<32;++Tt)eg[Tt]=5;var MA=to(So,9,1),EA=to(eg,5,1),ec=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},Pn=function(n,e,t){var i=e/8|0;return(n[i]|n[i+1]<<8)>>(e&7)&t},tc=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},TA=function(n){return(n+7)/8|0},bA=function(n,e,t){return(t==null||t>n.length)&&(t=n.length),new En(n.subarray(e,t))},AA=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ln=function(n,e,t){var i=new Error(e||AA[n]);if(i.code=n,Error.captureStackTrace&&Error.captureStackTrace(i,Ln),!t)throw i;return i},wA=function(n,e,t,i){var r=n.length,s=0;if(!r||e.f&&!e.l)return t||new En(0);var o=!t,a=o||e.i!=2,l=e.i;o&&(t=new En(r*3));var c=function(ht){var D=t.length;if(ht>D){var B=new En(Math.max(D*2,ht));B.set(t),t=B}},u=e.f||0,h=e.p||0,f=e.b||0,d=e.l,g=e.d,x=e.m,m=e.n,p=r*8;do{if(!d){u=Pn(n,h,1);var R=Pn(n,h+1,3);if(h+=3,R)if(R==1)d=MA,g=EA,x=9,m=5;else if(R==2){var O=Pn(n,h,31)+257,I=Pn(n,h+10,15)+4,V=O+Pn(n,h+5,31)+1;h+=14;for(var T=new En(V),E=new En(19),F=0;F<I;++F)E[vA[F]]=Pn(n,h+F*3,7);h+=I*3;for(var z=ec(E),K=(1<<z)-1,ne=to(E,z,1),F=0;F<V;){var he=ne[Pn(n,h,K)];h+=he&15;var w=he>>4;if(w<16)T[F++]=w;else{var J=0,ue=0;for(w==16?(ue=3+Pn(n,h,3),h+=2,J=T[F-1]):w==17?(ue=3+Pn(n,h,7),h+=3):w==18&&(ue=11+Pn(n,h,127),h+=7);ue--;)T[F++]=J}}var $=T.subarray(0,O),ye=T.subarray(O);x=ec($),m=ec(ye),d=to($,x,1),g=to(ye,m,1)}else Ln(1);else{var w=TA(h)+4,S=n[w-4]|n[w-3]<<8,H=w+S;if(H>r){l&&Ln(0);break}a&&c(f+S),t.set(n.subarray(w,H),f),e.b=f+=S,e.p=h=H*8,e.f=u;continue}if(h>p){l&&Ln(0);break}}a&&c(f+131072);for(var we=(1<<x)-1,Ie=(1<<m)-1,Ue=h;;Ue=h){var J=d[tc(n,h)&we],Ze=J>>4;if(h+=J&15,h>p){l&&Ln(0);break}if(J||Ln(2),Ze<256)t[f++]=Ze;else if(Ze==256){Ue=h,d=null;break}else{var fe=Ze-254;if(Ze>264){var F=Ze-257,Ee=Km[F];fe=Pn(n,h,(1<<Ee)-1)+Qm[F],h+=Ee}var Me=g[tc(n,h)&Ie],be=Me>>4;Me||Ln(3),h+=Me&15;var ye=SA[be];if(be>3){var Ee=$m[be];ye+=tc(n,h)&(1<<Ee)-1,h+=Ee}if(h>p){l&&Ln(0);break}a&&c(f+131072);var Oe=f+fe;if(f<ye){var it=s-ye,Ve=Math.min(ye,Oe);for(it+f<0&&Ln(3);f<Ve;++f)t[f]=i[it+f]}for(;f<Oe;++f)t[f]=t[f-ye]}}e.l=d,e.p=Ue,e.b=f,e.f=u,d&&(u=1,e.m=x,e.d=g,e.n=m)}while(!u);return f!=t.length&&o?bA(t,0,f):t.subarray(0,f)},RA=new En(0),CA=function(n,e){return((n[0]&15)!=8||n[0]>>4>7||(n[0]<<8|n[1])%31)&&Ln(6,"invalid zlib data"),(n[1]>>5&1)==1&&Ln(6,"invalid zlib data: "+(n[1]&32?"need":"unexpected")+" dictionary"),(n[1]>>3&4)+2};function sa(n,e){return wA(n.subarray(CA(n),-4),{i:2},e,e)}var PA=typeof TextDecoder<"u"&&new TextDecoder,LA=0;try{PA.decode(RA,{stream:!0}),LA=1}catch{}class v1 extends sy{constructor(e){super(e),this.type=yi}parse(e){const T=Math.pow(2.7182818,2.2);function E(_,A){let N=0;for(let C=0;C<65536;++C)(C==0||_[C>>3]&1<<(C&7))&&(A[N++]=C);const v=N-1;for(;N<65536;)A[N++]=0;return v}function F(_){for(let A=0;A<16384;A++)_[A]={},_[A].len=0,_[A].lit=0,_[A].p=null}const z={l:0,c:0,lc:0};function K(_,A,N,v,C){for(;N<_;)A=A<<8|Ce(v,C),N+=8;N-=_,z.l=A>>N&(1<<_)-1,z.c=A,z.lc=N}const ne=new Array(59);function he(_){for(let N=0;N<=58;++N)ne[N]=0;for(let N=0;N<65537;++N)ne[_[N]]+=1;let A=0;for(let N=58;N>0;--N){const v=A+ne[N]>>1;ne[N]=A,A=v}for(let N=0;N<65537;++N){const v=_[N];v>0&&(_[N]=v|ne[v]++<<6)}}function J(_,A,N,v,C,P){const U=A;let L=0,W=0;for(;v<=C;v++){if(U.value-A.value>N)return!1;K(6,L,W,_,U);const Y=z.l;if(L=z.c,W=z.lc,P[v]=Y,Y==63){if(U.value-A.value>N)throw new Error("Something wrong with hufUnpackEncTable");K(8,L,W,_,U);let q=z.l+6;if(L=z.c,W=z.lc,v+q>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;q--;)P[v++]=0;v--}else if(Y>=59){let q=Y-59+2;if(v+q>C+1)throw new Error("Something wrong with hufUnpackEncTable");for(;q--;)P[v++]=0;v--}}he(P)}function ue(_){return _&63}function $(_){return _>>6}function ye(_,A,N,v){for(;A<=N;A++){const C=$(_[A]),P=ue(_[A]);if(C>>P)throw new Error("Invalid table entry");if(P>14){const U=v[C>>P-14];if(U.len)throw new Error("Invalid table entry");if(U.lit++,U.p){const L=U.p;U.p=new Array(U.lit);for(let W=0;W<U.lit-1;++W)U.p[W]=L[W]}else U.p=new Array(1);U.p[U.lit-1]=A}else if(P){let U=0;for(let L=1<<14-P;L>0;L--){const W=v[(C<<14-P)+U];if(W.len||W.p)throw new Error("Invalid table entry");W.len=P,W.lit=A,U++}}}return!0}const we={c:0,lc:0};function Ie(_,A,N,v){_=_<<8|Ce(N,v),A+=8,we.c=_,we.lc=A}const Ue={c:0,lc:0};function Ze(_,A,N,v,C,P,U,L,W){if(_==A){v<8&&(Ie(N,v,C,P),N=we.c,v=we.lc),v-=8;let Y=N>>v;if(Y=new Uint8Array([Y])[0],L.value+Y>W)return!1;const q=U[L.value-1];for(;Y-- >0;)U[L.value++]=q}else if(L.value<W)U[L.value++]=_;else return!1;Ue.c=N,Ue.lc=v}function fe(_){return _&65535}function Ee(_){const A=fe(_);return A>32767?A-65536:A}const Me={a:0,b:0};function be(_,A){const N=Ee(_),C=Ee(A),P=N+(C&1)+(C>>1),U=P,L=P-C;Me.a=U,Me.b=L}function Oe(_,A){const N=fe(_),v=fe(A),C=N-(v>>1)&65535,P=v+C-32768&65535;Me.a=P,Me.b=C}function it(_,A,N,v,C,P,U){const L=U<16384,W=N>C?C:N;let Y=1,q,se;for(;Y<=W;)Y<<=1;for(Y>>=1,q=Y,Y>>=1;Y>=1;){se=0;const de=se+P*(C-q),pe=P*Y,xe=P*q,Se=v*Y,Te=v*q;let ke,je,We,Be;for(;se<=de;se+=xe){let nt=se;const He=se+v*(N-q);for(;nt<=He;nt+=Te){const mt=nt+Se,Dt=nt+pe,ft=Dt+Se;L?(be(_[nt+A],_[Dt+A]),ke=Me.a,We=Me.b,be(_[mt+A],_[ft+A]),je=Me.a,Be=Me.b,be(ke,je),_[nt+A]=Me.a,_[mt+A]=Me.b,be(We,Be),_[Dt+A]=Me.a,_[ft+A]=Me.b):(Oe(_[nt+A],_[Dt+A]),ke=Me.a,We=Me.b,Oe(_[mt+A],_[ft+A]),je=Me.a,Be=Me.b,Oe(ke,je),_[nt+A]=Me.a,_[mt+A]=Me.b,Oe(We,Be),_[Dt+A]=Me.a,_[ft+A]=Me.b)}if(N&Y){const mt=nt+pe;L?be(_[nt+A],_[mt+A]):Oe(_[nt+A],_[mt+A]),ke=Me.a,_[mt+A]=Me.b,_[nt+A]=ke}}if(C&Y){let nt=se;const He=se+v*(N-q);for(;nt<=He;nt+=Te){const mt=nt+Se;L?be(_[nt+A],_[mt+A]):Oe(_[nt+A],_[mt+A]),ke=Me.a,_[mt+A]=Me.b,_[nt+A]=ke}}q=Y,Y>>=1}return se}function Ve(_,A,N,v,C,P,U,L,W){let Y=0,q=0;const se=U,de=Math.trunc(v.value+(C+7)/8);for(;v.value<de;)for(Ie(Y,q,N,v),Y=we.c,q=we.lc;q>=14;){const xe=Y>>q-14&16383,Se=A[xe];if(Se.len)q-=Se.len,Ze(Se.lit,P,Y,q,N,v,L,W,se),Y=Ue.c,q=Ue.lc;else{if(!Se.p)throw new Error("hufDecode issues");let Te;for(Te=0;Te<Se.lit;Te++){const ke=ue(_[Se.p[Te]]);for(;q<ke&&v.value<de;)Ie(Y,q,N,v),Y=we.c,q=we.lc;if(q>=ke&&$(_[Se.p[Te]])==(Y>>q-ke&(1<<ke)-1)){q-=ke,Ze(Se.p[Te],P,Y,q,N,v,L,W,se),Y=Ue.c,q=Ue.lc;break}}if(Te==Se.lit)throw new Error("hufDecode issues")}}const pe=8-C&7;for(Y>>=pe,q-=pe;q>0;){const xe=A[Y<<14-q&16383];if(xe.len)q-=xe.len,Ze(xe.lit,P,Y,q,N,v,L,W,se),Y=Ue.c,q=Ue.lc;else throw new Error("hufDecode issues")}return!0}function ht(_,A,N,v,C,P){const U={value:0},L=N.value,W=ze(A,N),Y=ze(A,N);N.value+=4;const q=ze(A,N);if(N.value+=4,W<0||W>=65537||Y<0||Y>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const se=new Array(65537),de=new Array(16384);F(de);const pe=v-(N.value-L);if(J(_,N,pe,W,Y,se),q>8*(v-(N.value-L)))throw new Error("Something wrong with hufUncompress");ye(se,W,Y,de),Ve(se,de,_,N,q,Y,P,C,U)}function D(_,A,N){for(let v=0;v<N;++v)A[v]=_[A[v]]}function B(_){for(let A=1;A<_.length;A++){const N=_[A-1]+_[A]-128;_[A]=N}}function b(_,A){let N=0,v=Math.floor((_.length+1)/2),C=0;const P=_.length-1;for(;!(C>P||(A[C++]=_[N++],C>P));)A[C++]=_[v++]}function me(_){let A=_.byteLength;const N=new Array;let v=0;const C=new DataView(_);for(;A>0;){const P=C.getInt8(v++);if(P<0){const U=-P;A-=U+1;for(let L=0;L<U;L++)N.push(C.getUint8(v++))}else{const U=P;A-=2;const L=C.getUint8(v++);for(let W=0;W<U+1;W++)N.push(L)}}return N}function ie(_,A,N,v,C,P){let U=new DataView(P.buffer);const L=N[_.idx[0]].width,W=N[_.idx[0]].height,Y=3,q=Math.floor(L/8),se=Math.ceil(L/8),de=Math.ceil(W/8),pe=L-(se-1)*8,xe=W-(de-1)*8,Se={value:0},Te=new Array(Y),ke=new Array(Y),je=new Array(Y),We=new Array(Y),Be=new Array(Y);for(let He=0;He<Y;++He)Be[He]=A[_.idx[He]],Te[He]=He<1?0:Te[He-1]+se*de,ke[He]=new Float32Array(64),je[He]=new Uint16Array(64),We[He]=new Uint16Array(se*64);for(let He=0;He<de;++He){let mt=8;He==de-1&&(mt=xe);let Dt=8;for(let lt=0;lt<se;++lt){lt==se-1&&(Dt=pe);for(let Ye=0;Ye<Y;++Ye)je[Ye].fill(0),je[Ye][0]=C[Te[Ye]++],oe(Se,v,je[Ye]),le(je[Ye],ke[Ye]),ge(ke[Ye]);te(ke);for(let Ye=0;Ye<Y;++Ye)M(ke[Ye],We[Ye],lt*64)}let ft=0;for(let lt=0;lt<Y;++lt){const Ye=N[_.idx[lt]].type;for(let Ct=8*He;Ct<8*He+mt;++Ct){ft=Be[lt][Ct];for(let kt=0;kt<q;++kt){const Mt=kt*64+(Ct&7)*8;U.setUint16(ft+0*2*Ye,We[lt][Mt+0],!0),U.setUint16(ft+1*2*Ye,We[lt][Mt+1],!0),U.setUint16(ft+2*2*Ye,We[lt][Mt+2],!0),U.setUint16(ft+3*2*Ye,We[lt][Mt+3],!0),U.setUint16(ft+4*2*Ye,We[lt][Mt+4],!0),U.setUint16(ft+5*2*Ye,We[lt][Mt+5],!0),U.setUint16(ft+6*2*Ye,We[lt][Mt+6],!0),U.setUint16(ft+7*2*Ye,We[lt][Mt+7],!0),ft+=8*2*Ye}}if(q!=se)for(let Ct=8*He;Ct<8*He+mt;++Ct){const kt=Be[lt][Ct]+8*q*2*Ye,Mt=q*64+(Ct&7)*8;for(let Nt=0;Nt<Dt;++Nt)U.setUint16(kt+Nt*2*Ye,We[lt][Mt+Nt],!0)}}}const nt=new Uint16Array(L);U=new DataView(P.buffer);for(let He=0;He<Y;++He){N[_.idx[He]].decoded=!0;const mt=N[_.idx[He]].type;if(N[He].type==2)for(let Dt=0;Dt<W;++Dt){const ft=Be[He][Dt];for(let lt=0;lt<L;++lt)nt[lt]=U.getUint16(ft+lt*2*mt,!0);for(let lt=0;lt<L;++lt)U.setFloat32(ft+lt*2*mt,re(nt[lt]),!0)}}}function oe(_,A,N){let v,C=1;for(;C<64;)v=A[_.value],v==65280?C=64:v>>8==255?C+=v&255:(N[C]=v,C++),_.value++}function le(_,A){A[0]=re(_[0]),A[1]=re(_[1]),A[2]=re(_[5]),A[3]=re(_[6]),A[4]=re(_[14]),A[5]=re(_[15]),A[6]=re(_[27]),A[7]=re(_[28]),A[8]=re(_[2]),A[9]=re(_[4]),A[10]=re(_[7]),A[11]=re(_[13]),A[12]=re(_[16]),A[13]=re(_[26]),A[14]=re(_[29]),A[15]=re(_[42]),A[16]=re(_[3]),A[17]=re(_[8]),A[18]=re(_[12]),A[19]=re(_[17]),A[20]=re(_[25]),A[21]=re(_[30]),A[22]=re(_[41]),A[23]=re(_[43]),A[24]=re(_[9]),A[25]=re(_[11]),A[26]=re(_[18]),A[27]=re(_[24]),A[28]=re(_[31]),A[29]=re(_[40]),A[30]=re(_[44]),A[31]=re(_[53]),A[32]=re(_[10]),A[33]=re(_[19]),A[34]=re(_[23]),A[35]=re(_[32]),A[36]=re(_[39]),A[37]=re(_[45]),A[38]=re(_[52]),A[39]=re(_[54]),A[40]=re(_[20]),A[41]=re(_[22]),A[42]=re(_[33]),A[43]=re(_[38]),A[44]=re(_[46]),A[45]=re(_[51]),A[46]=re(_[55]),A[47]=re(_[60]),A[48]=re(_[21]),A[49]=re(_[34]),A[50]=re(_[37]),A[51]=re(_[47]),A[52]=re(_[50]),A[53]=re(_[56]),A[54]=re(_[59]),A[55]=re(_[61]),A[56]=re(_[35]),A[57]=re(_[36]),A[58]=re(_[48]),A[59]=re(_[49]),A[60]=re(_[57]),A[61]=re(_[58]),A[62]=re(_[62]),A[63]=re(_[63])}function ge(_){const A=.5*Math.cos(.7853975),N=.5*Math.cos(3.14159/16),v=.5*Math.cos(3.14159/8),C=.5*Math.cos(3*3.14159/16),P=.5*Math.cos(5*3.14159/16),U=.5*Math.cos(3*3.14159/8),L=.5*Math.cos(7*3.14159/16),W=new Array(4),Y=new Array(4),q=new Array(4),se=new Array(4);for(let de=0;de<8;++de){const pe=de*8;W[0]=v*_[pe+2],W[1]=U*_[pe+2],W[2]=v*_[pe+6],W[3]=U*_[pe+6],Y[0]=N*_[pe+1]+C*_[pe+3]+P*_[pe+5]+L*_[pe+7],Y[1]=C*_[pe+1]-L*_[pe+3]-N*_[pe+5]-P*_[pe+7],Y[2]=P*_[pe+1]-N*_[pe+3]+L*_[pe+5]+C*_[pe+7],Y[3]=L*_[pe+1]-P*_[pe+3]+C*_[pe+5]-N*_[pe+7],q[0]=A*(_[pe+0]+_[pe+4]),q[3]=A*(_[pe+0]-_[pe+4]),q[1]=W[0]+W[3],q[2]=W[1]-W[2],se[0]=q[0]+q[1],se[1]=q[3]+q[2],se[2]=q[3]-q[2],se[3]=q[0]-q[1],_[pe+0]=se[0]+Y[0],_[pe+1]=se[1]+Y[1],_[pe+2]=se[2]+Y[2],_[pe+3]=se[3]+Y[3],_[pe+4]=se[3]-Y[3],_[pe+5]=se[2]-Y[2],_[pe+6]=se[1]-Y[1],_[pe+7]=se[0]-Y[0]}for(let de=0;de<8;++de)W[0]=v*_[16+de],W[1]=U*_[16+de],W[2]=v*_[48+de],W[3]=U*_[48+de],Y[0]=N*_[8+de]+C*_[24+de]+P*_[40+de]+L*_[56+de],Y[1]=C*_[8+de]-L*_[24+de]-N*_[40+de]-P*_[56+de],Y[2]=P*_[8+de]-N*_[24+de]+L*_[40+de]+C*_[56+de],Y[3]=L*_[8+de]-P*_[24+de]+C*_[40+de]-N*_[56+de],q[0]=A*(_[de]+_[32+de]),q[3]=A*(_[de]-_[32+de]),q[1]=W[0]+W[3],q[2]=W[1]-W[2],se[0]=q[0]+q[1],se[1]=q[3]+q[2],se[2]=q[3]-q[2],se[3]=q[0]-q[1],_[0+de]=se[0]+Y[0],_[8+de]=se[1]+Y[1],_[16+de]=se[2]+Y[2],_[24+de]=se[3]+Y[3],_[32+de]=se[3]-Y[3],_[40+de]=se[2]-Y[2],_[48+de]=se[1]-Y[1],_[56+de]=se[0]-Y[0]}function te(_){for(let A=0;A<64;++A){const N=_[0][A],v=_[1][A],C=_[2][A];_[0][A]=N+1.5747*C,_[1][A]=N-.1873*v-.4682*C,_[2][A]=N+1.8556*v}}function M(_,A,N){for(let v=0;v<64;++v)A[N+v]=mf.toHalfFloat(y(_[v]))}function y(_){return _<=1?Math.sign(_)*Math.pow(Math.abs(_),2.2):Math.sign(_)*Math.pow(T,Math.abs(_)-1)}function k(_){return new DataView(_.array.buffer,_.offset.value,_.size)}function Z(_){const A=_.viewer.buffer.slice(_.offset.value,_.offset.value+_.size),N=new Uint8Array(me(A)),v=new Uint8Array(N.length);return B(N),b(N,v),new DataView(v.buffer)}function Q(_){const A=_.array.slice(_.offset.value,_.offset.value+_.size),N=sa(A),v=new Uint8Array(N.length);return B(N),b(N,v),new DataView(v.buffer)}function ee(_){const A=_.viewer,N={value:_.offset.value},v=new Uint16Array(_.columns*_.lines*(_.inputChannels.length*_.type)),C=new Uint8Array(8192);let P=0;const U=new Array(_.inputChannels.length);for(let xe=0,Se=_.inputChannels.length;xe<Se;xe++)U[xe]={},U[xe].start=P,U[xe].end=U[xe].start,U[xe].nx=_.columns,U[xe].ny=_.lines,U[xe].size=_.type,P+=U[xe].nx*U[xe].ny*U[xe].size;const L=ae(A,N),W=ae(A,N);if(W>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(L<=W)for(let xe=0;xe<W-L+1;xe++)C[xe+L]=Xe(A,N);const Y=new Uint16Array(65536),q=E(C,Y),se=ze(A,N);ht(_.array,A,N,se,v,P);for(let xe=0;xe<_.inputChannels.length;++xe){const Se=U[xe];for(let Te=0;Te<U[xe].size;++Te)it(v,Se.start+Te,Se.nx,Se.size,Se.ny,Se.nx*Se.size,q)}D(Y,v,P);let de=0;const pe=new Uint8Array(v.buffer.byteLength);for(let xe=0;xe<_.lines;xe++)for(let Se=0;Se<_.inputChannels.length;Se++){const Te=U[Se],ke=Te.nx*Te.size,je=new Uint8Array(v.buffer,Te.end*2,ke*2);pe.set(je,de),de+=ke*2,Te.end+=ke}return new DataView(pe.buffer)}function Ae(_){const A=_.array.slice(_.offset.value,_.offset.value+_.size),N=sa(A),v=_.inputChannels.length*_.lines*_.columns*_.totalBytes,C=new ArrayBuffer(v),P=new DataView(C);let U=0,L=0;const W=new Array(4);for(let Y=0;Y<_.lines;Y++)for(let q=0;q<_.inputChannels.length;q++){let se=0;switch(_.inputChannels[q].pixelType){case 1:W[0]=U,W[1]=W[0]+_.columns,U=W[1]+_.columns;for(let pe=0;pe<_.columns;++pe){const xe=N[W[0]++]<<8|N[W[1]++];se+=xe,P.setUint16(L,se,!0),L+=2}break;case 2:W[0]=U,W[1]=W[0]+_.columns,W[2]=W[1]+_.columns,U=W[2]+_.columns;for(let pe=0;pe<_.columns;++pe){const xe=N[W[0]++]<<24|N[W[1]++]<<16|N[W[2]++]<<8;se+=xe,P.setUint32(L,se,!0),L+=4}break}}return P}function j(_){const A=_.viewer,N={value:_.offset.value},v=new Uint8Array(_.columns*_.lines*(_.inputChannels.length*_.type*2)),C={version:Ge(A,N),unknownUncompressedSize:Ge(A,N),unknownCompressedSize:Ge(A,N),acCompressedSize:Ge(A,N),dcCompressedSize:Ge(A,N),rleCompressedSize:Ge(A,N),rleUncompressedSize:Ge(A,N),rleRawSize:Ge(A,N),totalAcUncompressedCount:Ge(A,N),totalDcUncompressedCount:Ge(A,N),acCompression:Ge(A,N)};if(C.version<2)throw new Error("EXRLoader.parse: "+ni.compression+" version "+C.version+" is unsupported");const P=new Array;let U=ae(A,N)-2;for(;U>0;){const Se=ce(A.buffer,N),Te=Xe(A,N),ke=Te>>2&3,je=(Te>>4)-1,We=new Int8Array([je])[0],Be=Xe(A,N);P.push({name:Se,index:We,type:Be,compression:ke}),U-=Se.length+3}const L=ni.channels,W=new Array(_.inputChannels.length);for(let Se=0;Se<_.inputChannels.length;++Se){const Te=W[Se]={},ke=L[Se];Te.name=ke.name,Te.compression=0,Te.decoded=!1,Te.type=ke.pixelType,Te.pLinear=ke.pLinear,Te.width=_.columns,Te.height=_.lines}const Y={idx:new Array(3)};for(let Se=0;Se<_.inputChannels.length;++Se){const Te=W[Se];for(let ke=0;ke<P.length;++ke){const je=P[ke];Te.name==je.name&&(Te.compression=je.compression,je.index>=0&&(Y.idx[je.index]=Se),Te.offset=Se)}}let q,se,de;if(C.acCompressedSize>0)switch(C.acCompression){case 0:q=new Uint16Array(C.totalAcUncompressedCount),ht(_.array,A,N,C.acCompressedSize,q,C.totalAcUncompressedCount);break;case 1:const Se=_.array.slice(N.value,N.value+C.totalAcUncompressedCount),Te=sa(Se);q=new Uint16Array(Te.buffer),N.value+=C.totalAcUncompressedCount;break}if(C.dcCompressedSize>0){const Se={array:_.array,offset:N,size:C.dcCompressedSize};se=new Uint16Array(Q(Se).buffer),N.value+=C.dcCompressedSize}if(C.rleRawSize>0){const Se=_.array.slice(N.value,N.value+C.rleCompressedSize),Te=sa(Se);de=me(Te.buffer),N.value+=C.rleCompressedSize}let pe=0;const xe=new Array(W.length);for(let Se=0;Se<xe.length;++Se)xe[Se]=new Array;for(let Se=0;Se<_.lines;++Se)for(let Te=0;Te<W.length;++Te)xe[Te].push(pe),pe+=W[Te].width*_.type*2;ie(Y,xe,W,q,se,v);for(let Se=0;Se<W.length;++Se){const Te=W[Se];if(!Te.decoded)switch(Te.compression){case 2:let ke=0,je=0;for(let We=0;We<_.lines;++We){let Be=xe[Se][ke];for(let nt=0;nt<Te.width;++nt){for(let He=0;He<2*Te.type;++He)v[Be++]=de[je+He*Te.width*Te.height];je++}ke++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(v.buffer)}function ce(_,A){const N=new Uint8Array(_);let v=0;for(;N[A.value+v]!=0;)v+=1;const C=new TextDecoder().decode(N.slice(A.value,A.value+v));return A.value=A.value+v+1,C}function Fe(_,A,N){const v=new TextDecoder().decode(new Uint8Array(_).slice(A.value,A.value+N));return A.value=A.value+N,v}function ve(_,A){const N=Le(_,A),v=ze(_,A);return[N,v]}function Re(_,A){const N=ze(_,A),v=ze(_,A);return[N,v]}function Le(_,A){const N=_.getInt32(A.value,!0);return A.value=A.value+4,N}function ze(_,A){const N=_.getUint32(A.value,!0);return A.value=A.value+4,N}function Ce(_,A){const N=_[A.value];return A.value=A.value+1,N}function Xe(_,A){const N=_.getUint8(A.value);return A.value=A.value+1,N}const Ge=function(_,A){let N;return"getBigInt64"in DataView.prototype?N=Number(_.getBigInt64(A.value,!0)):N=_.getUint32(A.value+4,!0)+Number(_.getUint32(A.value,!0)<<32),A.value+=8,N};function et(_,A){const N=_.getFloat32(A.value,!0);return A.value+=4,N}function X(_,A){return mf.toHalfFloat(et(_,A))}function re(_){const A=(_&31744)>>10,N=_&1023;return(_>>15?-1:1)*(A?A===31?N?NaN:1/0:Math.pow(2,A-15)*(1+N/1024):6103515625e-14*(N/1024))}function ae(_,A){const N=_.getUint16(A.value,!0);return A.value+=2,N}function _e(_,A){return re(ae(_,A))}function Ne(_,A,N,v){const C=N.value,P=[];for(;N.value<C+v-1;){const U=ce(A,N),L=Le(_,N),W=Xe(_,N);N.value+=3;const Y=Le(_,N),q=Le(_,N);P.push({name:U,pixelType:L,pLinear:W,xSampling:Y,ySampling:q})}return N.value+=1,P}function De(_,A){const N=et(_,A),v=et(_,A),C=et(_,A),P=et(_,A),U=et(_,A),L=et(_,A),W=et(_,A),Y=et(_,A);return{redX:N,redY:v,greenX:C,greenY:P,blueX:U,blueY:L,whiteX:W,whiteY:Y}}function tt(_,A){const N=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],v=Xe(_,A);return N[v]}function bt(_,A){const N=Le(_,A),v=Le(_,A),C=Le(_,A),P=Le(_,A);return{xMin:N,yMin:v,xMax:C,yMax:P}}function Bt(_,A){const N=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],v=Xe(_,A);return N[v]}function pt(_,A){const N=["ENVMAP_LATLONG","ENVMAP_CUBE"],v=Xe(_,A);return N[v]}function dn(_,A){const N=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],v=["ROUND_DOWN","ROUND_UP"],C=ze(_,A),P=ze(_,A),U=Xe(_,A);return{xSize:C,ySize:P,levelMode:N[U&15],roundingMode:v[U>>4]}}function An(_,A){const N=et(_,A),v=et(_,A);return[N,v]}function Mo(_,A){const N=et(_,A),v=et(_,A),C=et(_,A);return[N,v,C]}function Eo(_,A,N,v,C){if(v==="string"||v==="stringvector"||v==="iccProfile")return Fe(A,N,C);if(v==="chlist")return Ne(_,A,N,C);if(v==="chromaticities")return De(_,N);if(v==="compression")return tt(_,N);if(v==="box2i")return bt(_,N);if(v==="envmap")return pt(_,N);if(v==="tiledesc")return dn(_,N);if(v==="lineOrder")return Bt(_,N);if(v==="float")return et(_,N);if(v==="v2f")return An(_,N);if(v==="v3f")return Mo(_,N);if(v==="int")return Le(_,N);if(v==="rational")return ve(_,N);if(v==="timecode")return Re(_,N);if(v==="preview")return N.value+=C,"skipped";N.value+=C}function ti(_,A){const N=Math.log2(_);return A=="ROUND_DOWN"?Math.floor(N):Math.ceil(N)}function Es(_,A,N){let v=0;switch(_.levelMode){case"ONE_LEVEL":v=1;break;case"MIPMAP_LEVELS":v=ti(Math.max(A,N),_.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return v}function Ts(_,A,N,v){const C=new Array(_);for(let P=0;P<_;P++){const U=1<<P;let L=A/U|0;v=="ROUND_UP"&&L*U<A&&(L+=1);const W=Math.max(L,1);C[P]=(W+N-1)/N|0}return C}function To(){const _=this,A=_.offset,N={value:0};for(let v=0;v<_.tileCount;v++){const C=Le(_.viewer,A),P=Le(_.viewer,A);A.value+=8,_.size=ze(_.viewer,A);const U=C*_.blockWidth,L=P*_.blockHeight;_.columns=U+_.blockWidth>_.width?_.width-U:_.blockWidth,_.lines=L+_.blockHeight>_.height?_.height-L:_.blockHeight;const W=_.columns*_.totalBytes,q=_.size<_.lines*W?_.uncompress(_):k(_);A.value+=_.size;for(let se=0;se<_.lines;se++){const de=se*_.columns*_.totalBytes;for(let pe=0;pe<_.inputChannels.length;pe++){const xe=ni.channels[pe].name,Se=_.channelByteOffsets[xe]*_.columns,Te=_.decodeChannels[xe];if(Te===void 0)continue;N.value=de+Se;const ke=(_.height-(1+L+se))*_.outLineWidth;for(let je=0;je<_.columns;je++){const We=ke+(je+U)*_.outputChannels+Te;_.byteArray[We]=_.getter(q,N)}}}}}function Tr(){const _=this,A=_.offset,N={value:0};for(let v=0;v<_.height/_.blockHeight;v++){const C=Le(_.viewer,A)-ni.dataWindow.yMin;_.size=ze(_.viewer,A),_.lines=C+_.blockHeight>_.height?_.height-C:_.blockHeight;const P=_.columns*_.totalBytes,L=_.size<_.lines*P?_.uncompress(_):k(_);A.value+=_.size;for(let W=0;W<_.blockHeight;W++){const Y=v*_.blockHeight,q=W+_.scanOrder(Y);if(q>=_.height)continue;const se=W*P,de=(_.height-1-q)*_.outLineWidth;for(let pe=0;pe<_.inputChannels.length;pe++){const xe=ni.channels[pe].name,Se=_.channelByteOffsets[xe]*_.columns,Te=_.decodeChannels[xe];if(Te!==void 0){N.value=se+Se;for(let ke=0;ke<_.columns;ke++){const je=de+ke*_.outputChannels+Te;_.byteArray[je]=_.getter(L,N)}}}}}}function bo(_,A,N){const v={};if(_.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");v.version=_.getUint8(4);const C=_.getUint8(5);v.spec={singleTile:!!(C&2),longName:!!(C&4),deepFormat:!!(C&8),multiPart:!!(C&16)},N.value=8;let P=!0;for(;P;){const U=ce(A,N);if(U==0)P=!1;else{const L=ce(A,N),W=ze(_,N),Y=Eo(_,A,N,L,W);Y===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${L}'.`):v[U]=Y}}if(C&-7)throw console.error("THREE.EXRHeader:",v),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return v}function br(_,A,N,v,C){const P={size:0,viewer:A,array:N,offset:v,width:_.dataWindow.xMax-_.dataWindow.xMin+1,height:_.dataWindow.yMax-_.dataWindow.yMin+1,inputChannels:_.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Xt};switch(_.compression){case"NO_COMPRESSION":P.blockHeight=1,P.uncompress=k;break;case"RLE_COMPRESSION":P.blockHeight=1,P.uncompress=Z;break;case"ZIPS_COMPRESSION":P.blockHeight=1,P.uncompress=Q;break;case"ZIP_COMPRESSION":P.blockHeight=16,P.uncompress=Q;break;case"PIZ_COMPRESSION":P.blockHeight=32,P.uncompress=ee;break;case"PXR24_COMPRESSION":P.blockHeight=16,P.uncompress=Ae;break;case"DWAA_COMPRESSION":P.blockHeight=32,P.uncompress=j;break;case"DWAB_COMPRESSION":P.blockHeight=256,P.uncompress=j;break;default:throw new Error("EXRLoader.parse: "+_.compression+" is unsupported")}const U={};for(const q of _.channels)switch(q.name){case"Y":case"R":case"G":case"B":case"A":U[q.name]=!0,P.type=q.pixelType}let L=!1;if(U.R&&U.G&&U.B)L=!U.A,P.outputChannels=4,P.decodeChannels={R:0,G:1,B:2,A:3};else if(U.Y)P.outputChannels=1,P.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(P.type==1)switch(C){case un:P.getter=_e;break;case yi:P.getter=ae;break}else if(P.type==2)switch(C){case un:P.getter=et;break;case yi:P.getter=X}else throw new Error("EXRLoader.parse: unsupported pixelType "+P.type+" for "+_.compression+".");P.columns=P.width;const W=P.width*P.height*P.outputChannels;switch(C){case un:P.byteArray=new Float32Array(W),L&&P.byteArray.fill(1,0,W);break;case yi:P.byteArray=new Uint16Array(W),L&&P.byteArray.fill(15360,0,W);break;default:console.error("THREE.EXRLoader: unsupported type: ",C);break}let Y=0;for(const q of _.channels)P.decodeChannels[q.name]!==void 0&&(P.channelByteOffsets[q.name]=Y),Y+=q.pixelType*2;if(P.totalBytes=Y,P.outLineWidth=P.width*P.outputChannels,_.lineOrder==="INCREASING_Y"?P.scanOrder=q=>q:P.scanOrder=q=>P.height-1-q,P.outputChannels==4?(P.format=xn,P.colorSpace=Xt):(P.format=Ka,P.colorSpace=vi),_.spec.singleTile){P.blockHeight=_.tiles.ySize,P.blockWidth=_.tiles.xSize;const q=Es(_.tiles,P.width,P.height),se=Ts(q,P.width,_.tiles.xSize,_.tiles.roundingMode),de=Ts(q,P.height,_.tiles.ySize,_.tiles.roundingMode);P.tileCount=se[0]*de[0];for(let pe=0;pe<q;pe++)for(let xe=0;xe<de[pe];xe++)for(let Se=0;Se<se[pe];Se++)Ge(A,v);P.decode=To.bind(P)}else{P.blockWidth=P.width;const q=Math.ceil(P.height/P.blockHeight);for(let se=0;se<q;se++)Ge(A,v);P.decode=Tr.bind(P)}return P}const bs={value:0},As=new DataView(e),el=new Uint8Array(e),ni=bo(As,e,bs),Ci=br(ni,As,el,bs,this.type);return Ci.decode(),{header:ni,width:Ci.width,height:Ci.height,data:Ci.byteArray,format:Ci.format,colorSpace:Ci.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,i,r){function s(o,a){o.colorSpace=a.colorSpace,o.minFilter=Vt,o.magFilter=Vt,o.generateMipmaps=!1,o.flipY=!1,t&&t(o,a)}return super.load(e,s,i,r)}}class x1 extends hn{constructor(e,t={}){super(e),this.isWater=!0;const i=this,r=t.textureWidth!==void 0?t.textureWidth:512,s=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,l=t.time!==void 0?t.time:0,c=t.waterNormals!==void 0?t.waterNormals:null,u=t.sunDirection!==void 0?t.sunDirection:new G(.70707,.70707,0),h=new qe(t.sunColor!==void 0?t.sunColor:16777215),f=new qe(t.waterColor!==void 0?t.waterColor:8355711),d=t.eye!==void 0?t.eye:new G(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,x=t.side!==void 0?t.side:qn,m=t.fog!==void 0?t.fog:!1,p=new pi,R=new G,w=new G,S=new G,H=new $e,O=new G(0,0,-1),I=new ut,V=new G,T=new G,E=new ut,F=new $e,z=new on,K=new Yi(r,s),ne={name:"MirrorShader",uniforms:lu.merge([Pe.fog,Pe.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new $e},sunColor:{value:new qe(8355711)},sunDirection:{value:new G(.70707,.70707,0)},eye:{value:new G},waterColor:{value:new qe(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},he=new bi({name:ne.name,uniforms:lu.clone(ne.uniforms),vertexShader:ne.vertexShader,fragmentShader:ne.fragmentShader,lights:!0,side:x,fog:m});he.uniforms.mirrorSampler.value=K.texture,he.uniforms.textureMatrix.value=F,he.uniforms.alpha.value=a,he.uniforms.time.value=l,he.uniforms.normalSampler.value=c,he.uniforms.sunColor.value=h,he.uniforms.waterColor.value=f,he.uniforms.sunDirection.value=u,he.uniforms.distortionScale.value=g,he.uniforms.eye.value=d,i.material=he,i.onBeforeRender=function(J,ue,$){if(w.setFromMatrixPosition(i.matrixWorld),S.setFromMatrixPosition($.matrixWorld),H.extractRotation(i.matrixWorld),R.set(0,0,1),R.applyMatrix4(H),V.subVectors(w,S),V.dot(R)>0)return;V.reflect(R).negate(),V.add(w),H.extractRotation($.matrixWorld),O.set(0,0,-1),O.applyMatrix4(H),O.add(S),T.subVectors(w,O),T.reflect(R).negate(),T.add(w),z.position.copy(V),z.up.set(0,1,0),z.up.applyMatrix4(H),z.up.reflect(R),z.lookAt(T),z.far=$.far,z.updateMatrixWorld(),z.projectionMatrix.copy($.projectionMatrix),F.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),F.multiply(z.projectionMatrix),F.multiply(z.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(R,w),p.applyMatrix4(z.matrixWorldInverse),I.set(p.normal.x,p.normal.y,p.normal.z,p.constant);const ye=z.projectionMatrix;E.x=(Math.sign(I.x)+ye.elements[8])/ye.elements[0],E.y=(Math.sign(I.y)+ye.elements[9])/ye.elements[5],E.z=-1,E.w=(1+ye.elements[10])/ye.elements[14],I.multiplyScalar(2/I.dot(E)),ye.elements[2]=I.x,ye.elements[6]=I.y,ye.elements[10]=I.z+1-o,ye.elements[14]=I.w,d.setFromMatrixPosition($.matrixWorld);const we=J.getRenderTarget(),Ie=J.xr.enabled,Ue=J.shadowMap.autoUpdate;i.visible=!1,J.xr.enabled=!1,J.shadowMap.autoUpdate=!1,J.setRenderTarget(K),J.state.buffers.depth.setMask(!0),J.autoClear===!1&&J.clear(),J.render(ue,z),i.visible=!0,J.xr.enabled=Ie,J.shadowMap.autoUpdate=Ue,J.setRenderTarget(we);const Ze=$.viewport;Ze!==void 0&&J.state.viewport(Ze)}}}var os=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return this.None(n)},Out:function(n){return this.None(n)},InOut:function(n){return this.None(n)}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var e=1.70158;return n===1?1:n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return n===0?0:--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}}),Bounce:Object.freeze({In:function(n){return 1-os.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?os.Bounce.In(n*2)*.5:os.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(e){return Math.pow(e,n)},Out:function(e){return 1-Math.pow(1-e,n)},InOut:function(e){return e<.5?Math.pow(e*2,n)/2:(1-Math.pow(2-e*2,n))/2+.5}}}}),qr=function(){return performance.now()},tg=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=qr()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var s=this._tweens[i[r]],o=!t;s&&s.update(e,o)===!1&&!t&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),gr={Linear:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=gr.Utils.Linear;return e<0?s(n[0],n[1],i):e>1?s(n[t],n[t-1],t-i):s(n[r],n[r+1>t?t:r+1],i-r)},Bezier:function(n,e){for(var t=0,i=n.length-1,r=Math.pow,s=gr.Utils.Bernstein,o=0;o<=i;o++)t+=r(1-e,i-o)*r(e,o)*n[o]*s(i,o);return t},CatmullRom:function(n,e){var t=n.length-1,i=t*e,r=Math.floor(i),s=gr.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(r=Math.floor(i=t*(1+e))),s(n[(r-1+t)%t],n[r],n[(r+1)%t],n[(r+2)%t],i-r)):e<0?n[0]-(s(n[0],n[0],n[1],n[1],-i)-n[0]):e>1?n[t]-(s(n[t],n[t],n[t-1],n[t-1],i-t)-n[t]):s(n[r?r-1:0],n[r],n[t<r+1?t:r+1],n[t<r+2?t:r+2],i-r)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=gr.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var i=e;i>1;i--)t*=i;return n[e]=t,t}}(),CatmullRom:function(n,e,t,i,r){var s=(t-n)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*t+s+o)*l+(-3*e+3*t-2*s-o)*a+s*r+e}}},sh=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),gu=new tg,IA=function(){function n(e,t){t===void 0&&(t=gu),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=os.Linear.None,this._interpolationFunction=gr.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=sh.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.getDuration=function(){return this._duration},n.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},n.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},n.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},n.prototype.start=function(e,t){if(e===void 0&&(e=qr()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var s in this._valuesEnd)r[s]=this._valuesEnd[s];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},n.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},n.prototype._setupProperties=function(e,t,i,r,s){for(var o in i){var a=e[o],l=Array.isArray(a),c=l?"array":typeof a,u=!l&&Array.isArray(i[o]);if(!(c==="undefined"||c==="function")){if(u){var h=i[o];if(h.length===0)continue;for(var f=[a],d=0,g=h.length;d<g;d+=1){var x=this._handleRelativeValue(a,h[d]);if(isNaN(x)){u=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(x)}u&&(i[o]=f)}if((c==="object"||l)&&a&&!u){t[o]=l?[]:{};var m=a;for(var p in m)t[o][p]=m[p];r[o]=l?[]:{};var h=i[o];if(!this._isDynamic){var R={};for(var p in h)R[p]=h[p];i[o]=h=R}this._setupProperties(m,t[o],h,r[o],s)}else(typeof t[o]>"u"||s)&&(t[o]=a),l||(t[o]*=1),u?r[o]=i[o].slice().reverse():r[o]=t[o]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=qr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=qr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return e===void 0&&(e=gu),this._group=e,this},n.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},n.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},n.prototype.easing=function(e){return e===void 0&&(e=os.Linear.None),this._easingFunction=e,this},n.prototype.interpolation=function(e){return e===void 0&&(e=gr.Linear),this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){var i=this,r;if(e===void 0&&(e=qr()),t===void 0&&(t=!0),this._isPaused)return!0;var s,o=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>o)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var a=e-this._startTime,l=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),c=this._duration+this._repeat*l,u=function(){if(i._duration===0||a>c)return 1;var m=Math.trunc(a/l),p=a-m*l,R=Math.min(p/i._duration,1);return R===0&&a===i._duration?1:R},h=u(),f=this._easingFunction(h);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,f),this._onUpdateCallback&&this._onUpdateCallback(this._object,h),this._duration===0||a>=this._duration)if(this._repeat>0){var d=Math.min(Math.trunc((a-this._duration)/l)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=d);for(s in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[s]=="string"&&(this._valuesStartRepeat[s]=this._valuesStartRepeat[s]+parseFloat(this._valuesEnd[s])),this._yoyo&&this._swapEndStartRepeatValues(s),this._valuesStart[s]=this._valuesStartRepeat[s];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=l*d,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var g=0,x=this._chainedTweens.length;g<x;g++)this._chainedTweens[g].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,i,r){for(var s in i)if(t[s]!==void 0){var o=t[s]||0,a=i[s],l=Array.isArray(e[s]),c=Array.isArray(a),u=!l&&c;u?e[s]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[s],o,a,r):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*r))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}(),DA="23.1.1",NA=sh.nextId,Zn=gu,UA=Zn.getAll.bind(Zn),OA=Zn.removeAll.bind(Zn),FA=Zn.add.bind(Zn),BA=Zn.remove.bind(Zn),kA=Zn.update.bind(Zn),y1={Easing:os,Group:tg,Interpolation:gr,now:qr,Sequence:sh,nextId:NA,Tween:IA,VERSION:DA,getAll:UA,removeAll:OA,add:FA,remove:BA,update:kA};const ng=Object.prototype.toString;function ig(n){return ng.call(n)==="[object Array]"}function HA(n){return ng.call(n)==="[object String]"}function rg(n){return typeof n=="function"}const sg=Symbol("ArcoConfigProvider");var zA=Object.defineProperty,VA=Object.defineProperties,GA=Object.getOwnPropertyDescriptors,Ad=Object.getOwnPropertySymbols,WA=Object.prototype.hasOwnProperty,XA=Object.prototype.propertyIsEnumerable,wd=(n,e,t)=>e in n?zA(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,jA=(n,e)=>{for(var t in e||(e={}))WA.call(e,t)&&wd(n,t,e[t]);if(Ad)for(var t of Ad(e))XA.call(e,t)&&wd(n,t,e[t]);return n},YA=(n,e)=>VA(n,GA(e));const qA="A",KA="arco",_u="$arco",og=n=>{var e;return(e=n==null?void 0:n.componentPrefix)!=null?e:qA},ag=(n,e)=>{var t;e&&e.classPrefix&&(n.config.globalProperties[_u]=YA(jA({},(t=n.config.globalProperties[_u])!=null?t:{}),{classPrefix:e.classPrefix}))},lg=n=>{var e,t,i;const r=tm(),s=vr(sg,void 0),o=(i=(t=s==null?void 0:s.prefixCls)!=null?t:(e=r==null?void 0:r.appContext.config.globalProperties[_u])==null?void 0:e.classPrefix)!=null?i:KA;return n?`${o}-${n}`:o};var cg=function(){if(typeof Map<"u")return Map;function n(e,t){var i=-1;return e.some(function(r,s){return r[0]===t?(i=s,!0):!1}),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(t){var i=n(this.__entries__,t),r=this.__entries__[i];return r&&r[1]},e.prototype.set=function(t,i){var r=n(this.__entries__,t);~r?this.__entries__[r][1]=i:this.__entries__.push([t,i])},e.prototype.delete=function(t){var i=this.__entries__,r=n(i,t);~r&&i.splice(r,1)},e.prototype.has=function(t){return!!~n(this.__entries__,t)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,i){i===void 0&&(i=null);for(var r=0,s=this.__entries__;r<s.length;r++){var o=s[r];t.call(i,o[1],o[0])}},e}()}(),vu=typeof window<"u"&&typeof document<"u"&&window.document===document,Ia=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),$A=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Ia):function(n){return setTimeout(function(){return n(Date.now())},1e3/60)}}(),ZA=2;function JA(n,e){var t=!1,i=!1,r=0;function s(){t&&(t=!1,n()),i&&a()}function o(){$A(s)}function a(){var l=Date.now();if(t){if(l-r<ZA)return;i=!0}else t=!0,i=!1,setTimeout(o,e);r=l}return a}var QA=20,ew=["top","right","bottom","left","width","height","size","weight"],tw=typeof MutationObserver<"u",nw=function(){function n(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=JA(this.refresh.bind(this),QA)}return n.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},n.prototype.removeObserver=function(e){var t=this.observers_,i=t.indexOf(e);~i&&t.splice(i,1),!t.length&&this.connected_&&this.disconnect_()},n.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},n.prototype.updateObservers_=function(){var e=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return e.forEach(function(t){return t.broadcastActive()}),e.length>0},n.prototype.connect_=function(){!vu||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),tw?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},n.prototype.disconnect_=function(){!vu||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},n.prototype.onTransitionEnd_=function(e){var t=e.propertyName,i=t===void 0?"":t,r=ew.some(function(s){return!!~i.indexOf(s)});r&&this.refresh()},n.getInstance=function(){return this.instance_||(this.instance_=new n),this.instance_},n.instance_=null,n}(),ug=function(n,e){for(var t=0,i=Object.keys(e);t<i.length;t++){var r=i[t];Object.defineProperty(n,r,{value:e[r],enumerable:!1,writable:!1,configurable:!0})}return n},vs=function(n){var e=n&&n.ownerDocument&&n.ownerDocument.defaultView;return e||Ia},hg=Qa(0,0,0,0);function Da(n){return parseFloat(n)||0}function Rd(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return e.reduce(function(i,r){var s=n["border-"+r+"-width"];return i+Da(s)},0)}function iw(n){for(var e=["top","right","bottom","left"],t={},i=0,r=e;i<r.length;i++){var s=r[i],o=n["padding-"+s];t[s]=Da(o)}return t}function rw(n){var e=n.getBBox();return Qa(0,0,e.width,e.height)}function sw(n){var e=n.clientWidth,t=n.clientHeight;if(!e&&!t)return hg;var i=vs(n).getComputedStyle(n),r=iw(i),s=r.left+r.right,o=r.top+r.bottom,a=Da(i.width),l=Da(i.height);if(i.boxSizing==="border-box"&&(Math.round(a+s)!==e&&(a-=Rd(i,"left","right")+s),Math.round(l+o)!==t&&(l-=Rd(i,"top","bottom")+o)),!aw(n)){var c=Math.round(a+s)-e,u=Math.round(l+o)-t;Math.abs(c)!==1&&(a-=c),Math.abs(u)!==1&&(l-=u)}return Qa(r.left,r.top,a,l)}var ow=function(){return typeof SVGGraphicsElement<"u"?function(n){return n instanceof vs(n).SVGGraphicsElement}:function(n){return n instanceof vs(n).SVGElement&&typeof n.getBBox=="function"}}();function aw(n){return n===vs(n).document.documentElement}function lw(n){return vu?ow(n)?rw(n):sw(n):hg}function cw(n){var e=n.x,t=n.y,i=n.width,r=n.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(s.prototype);return ug(o,{x:e,y:t,width:i,height:r,top:t,right:e+i,bottom:r+t,left:e}),o}function Qa(n,e,t,i){return{x:n,y:e,width:t,height:i}}var uw=function(){function n(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Qa(0,0,0,0),this.target=e}return n.prototype.isActive=function(){var e=lw(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},n.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},n}(),hw=function(){function n(e,t){var i=cw(t);ug(this,{target:e,contentRect:i})}return n}(),fw=function(){function n(e,t,i){if(this.activeObservations_=[],this.observations_=new cg,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=i}return n.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof vs(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new uw(e)),this.controller_.addObserver(this),this.controller_.refresh())}},n.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof vs(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},n.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},n.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&e.activeObservations_.push(t)})},n.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map(function(i){return new hw(i.target,i.broadcastRect())});this.callback_.call(e,t,e),this.clearActive()}},n.prototype.clearActive=function(){this.activeObservations_.splice(0)},n.prototype.hasActive=function(){return this.activeObservations_.length>0},n}(),fg=typeof WeakMap<"u"?new WeakMap:new cg,dg=function(){function n(e){if(!(this instanceof n))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=nw.getInstance(),i=new fw(e,t,this);fg.set(this,i)}return n}();["observe","unobserve","disconnect"].forEach(function(n){dg.prototype[n]=function(){var e;return(e=fg.get(this))[n].apply(e,arguments)}});var pg=function(){return typeof Ia.ResizeObserver<"u"?Ia.ResizeObserver:dg}(),Cd;(function(n){n[n.ELEMENT=1]="ELEMENT",n[n.FUNCTIONAL_COMPONENT=2]="FUNCTIONAL_COMPONENT",n[n.STATEFUL_COMPONENT=4]="STATEFUL_COMPONENT",n[n.COMPONENT=6]="COMPONENT",n[n.TEXT_CHILDREN=8]="TEXT_CHILDREN",n[n.ARRAY_CHILDREN=16]="ARRAY_CHILDREN",n[n.SLOTS_CHILDREN=32]="SLOTS_CHILDREN",n[n.TELEPORT=64]="TELEPORT",n[n.SUSPENSE=128]="SUSPENSE",n[n.COMPONENT_SHOULD_KEEP_ALIVE=256]="COMPONENT_SHOULD_KEEP_ALIVE",n[n.COMPONENT_KEPT_ALIVE=512]="COMPONENT_KEPT_ALIVE"})(Cd||(Cd={}));var Pd;(function(n){n[n.TEXT=1]="TEXT",n[n.CLASS=2]="CLASS",n[n.STYLE=4]="STYLE",n[n.PROPS=8]="PROPS",n[n.FULL_PROPS=16]="FULL_PROPS",n[n.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",n[n.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",n[n.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",n[n.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",n[n.NEED_PATCH=512]="NEED_PATCH",n[n.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",n[n.DEV_ROOT_FRAGMENT=2048]="DEV_ROOT_FRAGMENT",n[n.HOISTED=-1]="HOISTED",n[n.BAIL=-2]="BAIL"})(Pd||(Pd={}));const mg=n=>!!(n&&n.shapeFlag&1),gg=(n,e)=>!!(n&&n.shapeFlag&6),dw=(n,e)=>!!(n&&n.shapeFlag&16),pw=n=>{if(!n)return!0;for(const e of n)if(e.children)return!1;return!0},_g=(n,e)=>{if(n&&n.length>0)for(let t=0;t<n.length;t++){const i=n[t];if(mg(i)||gg(i)){const s=rg(e)?e(i):e;return n[t]=Ei(i,s,!0),!0}const r=vg(i);if(r&&r.length>0&&_g(r,e))return!0}return!1},vg=n=>{if(dw(n,n.children))return n.children;if(ig(n))return n},xg=n=>{var e,t;if(mg(n))return n.el;if(gg(n)){if(((e=n.el)==null?void 0:e.nodeType)===1)return n.el;if((t=n.component)!=null&&t.subTree){const i=xg(n.component.subTree);if(i)return i}}else{const i=vg(n);return yg(i)}},yg=n=>{if(n&&n.length>0)for(const e of n){const t=xg(e);if(t)return t}},Sg=typeof window>"u"?global:window,mw=Sg.requestAnimationFrame,Ld=Sg.cancelAnimationFrame;function Id(n){let e=0;const t=(...i)=>{e&&Ld(e),e=mw(()=>{n(...i),e=0})};return t.cancel=()=>{Ld(e),e=0},t}const oh=()=>{},gw=()=>{const{body:n}=document,e=document.documentElement;let t;try{t=(window.top||window.self||window).document.body}catch{}return{height:Math.max(n.scrollHeight,n.offsetHeight,e.clientHeight,e.scrollHeight,e.offsetHeight,(t==null?void 0:t.scrollHeight)||0,(t==null?void 0:t.clientHeight)||0),width:Math.max(n.scrollWidth,n.offsetWidth,e.clientWidth,e.scrollWidth,e.offsetWidth,(t==null?void 0:t.scrollWidth)||0,(t==null?void 0:t.clientWidth)||0)}},ah=(()=>{try{return!(typeof window<"u"&&document!==void 0)}catch{return!0}})(),nc=ah?oh:(n,e,t,i=!1)=>{n.addEventListener(e,t,i)},Dd=ah?oh:(n,e,t,i=!1)=>{n.removeEventListener(e,t,i)},_w=(n,e)=>{var t;return ah?oh():(t=document.querySelector(n))!=null?t:void 0},vw=(n,e)=>{if(HA(n)){const t=n[0]==="#"?`[id='${n.slice(1)}']`:n;return _w(t)}return n};var xw=(n,e)=>{for(const[t,i]of e)n[t]=i;return n},yw=Object.defineProperty,Nd=Object.getOwnPropertySymbols,Sw=Object.prototype.hasOwnProperty,Mw=Object.prototype.propertyIsEnumerable,Ud=(n,e,t)=>e in n?yw(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ew=(n,e)=>{for(var t in e||(e={}))Sw.call(e,t)&&Ud(n,t,e[t]);if(Nd)for(var t of Nd(e))Mw.call(e,t)&&Ud(n,t,e[t]);return n};const Tw=(n,e)=>{const t=Ew({},n);for(const i of e)i in t&&delete t[i];return t};var bw=Object.defineProperty,Od=Object.getOwnPropertySymbols,Aw=Object.prototype.hasOwnProperty,ww=Object.prototype.propertyIsEnumerable,Fd=(n,e,t)=>e in n?bw(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Gs=(n,e)=>{for(var t in e||(e={}))Aw.call(e,t)&&Fd(n,t,e[t]);if(Od)for(var t of Od(e))ww.call(e,t)&&Fd(n,t,e[t]);return n};const Rw=()=>{const{height:n,width:e}=gw();return{width:Math.min(e,window.innerWidth),height:Math.min(n,window.innerHeight)}},Bd=(n,e)=>{var t,i;const r=n.getBoundingClientRect();return{top:r.top,bottom:r.bottom,left:r.left,right:r.right,scrollTop:r.top-e.top,scrollBottom:r.bottom-e.top,scrollLeft:r.left-e.left,scrollRight:r.right-e.left,width:(t=n.offsetWidth)!=null?t:n.clientWidth,height:(i=n.offsetHeight)!=null?i:n.clientHeight}},Cw=n=>{switch(n){case"top":case"tl":case"tr":return"top";case"bottom":case"bl":case"br":return"bottom";case"left":case"lt":case"lb":return"left";case"right":case"rt":case"rb":return"right";default:return"top"}},oa=(n,e)=>{switch(e){case"top":switch(n){case"bottom":return"top";case"bl":return"tl";case"br":return"tr";default:return n}case"bottom":switch(n){case"top":return"bottom";case"tl":return"bl";case"tr":return"br";default:return n}case"left":switch(n){case"right":return"left";case"rt":return"lt";case"rb":return"lb";default:return n}case"right":switch(n){case"left":return"right";case"lt":return"rt";case"lb":return"rb";default:return n}default:return n}},Pw=(n,e,{containerRect:t,triggerRect:i,popupRect:r,offset:s,translate:o})=>{const a=Cw(n),l=Rw(),c={top:t.top+e.top,bottom:l.height-(t.top+e.top+r.height),left:t.left+e.left,right:l.width-(t.left+e.left+r.width)};let u=n;if(a==="top"&&c.top<0)if(i.top>r.height)e.top=-t.top;else{const h=Ws("bottom",i,r,{offset:s,translate:o});l.height-(t.top+h.top+r.height)>0&&(u=oa(n,"bottom"),e.top=h.top)}if(a==="bottom"&&c.bottom<0)if(l.height-i.bottom>r.height)e.top=-t.top+(l.height-r.height);else{const h=Ws("top",i,r,{offset:s,translate:o});t.top+h.top>0&&(u=oa(n,"top"),e.top=h.top)}if(a==="left"&&c.left<0)if(i.left>r.width)e.left=-t.left;else{const h=Ws("right",i,r,{offset:s,translate:o});l.width-(t.left+h.left+r.width)>0&&(u=oa(n,"right"),e.left=h.left)}if(a==="right"&&c.right<0)if(l.width-i.right>r.width)e.left=-t.left+(l.width-r.width);else{const h=Ws("left",i,r,{offset:s,translate:o});t.left+h.left>0&&(u=oa(n,"left"),e.left=h.left)}return(a==="top"||a==="bottom")&&(c.left<0?e.left=-t.left:c.right<0&&(e.left=-t.left+(l.width-r.width))),(a==="left"||a==="right")&&(c.top<0?e.top=-t.top:c.bottom<0&&(e.top=-t.top+(l.height-r.height))),{popupPosition:e,position:u}},Ws=(n,e,t,{offset:i=0,translate:r=[0,0]}={})=>{var s;const o=(s=ig(r)?r:r[n])!=null?s:[0,0];switch(n){case"top":return{left:e.scrollLeft+Math.round(e.width/2)-Math.round(t.width/2)+o[0],top:e.scrollTop-t.height-i+o[1]};case"tl":return{left:e.scrollLeft+o[0],top:e.scrollTop-t.height-i+o[1]};case"tr":return{left:e.scrollRight-t.width+o[0],top:e.scrollTop-t.height-i+o[1]};case"bottom":return{left:e.scrollLeft+Math.round(e.width/2)-Math.round(t.width/2)+o[0],top:e.scrollBottom+i+o[1]};case"bl":return{left:e.scrollLeft+o[0],top:e.scrollBottom+i+o[1]};case"br":return{left:e.scrollRight-t.width+o[0],top:e.scrollBottom+i+o[1]};case"left":return{left:e.scrollLeft-t.width-i+o[0],top:e.scrollTop+Math.round(e.height/2)-Math.round(t.height/2)+o[1]};case"lt":return{left:e.scrollLeft-t.width-i+o[0],top:e.scrollTop+o[1]};case"lb":return{left:e.scrollLeft-t.width-i+o[0],top:e.scrollBottom-t.height+o[1]};case"right":return{left:e.scrollRight+i+o[0],top:e.scrollTop+Math.round(e.height/2)-Math.round(t.height/2)+o[1]};case"rt":return{left:e.scrollRight+i+o[0],top:e.scrollTop+o[1]};case"rb":return{left:e.scrollRight+i+o[0],top:e.scrollBottom-t.height+o[1]};default:return{left:0,top:0}}},Lw=n=>{let e="0";["top","bottom"].includes(n)?e="50%":["left","lt","lb","tr","br"].includes(n)&&(e="100%");let t="0";return["left","right"].includes(n)?t="50%":["top","tl","tr","lb","rb"].includes(n)&&(t="100%"),`${e} ${t}`},Iw=(n,e,t,i,{offset:r=0,translate:s=[0,0],customStyle:o={},autoFitPosition:a=!1}={})=>{let l=n,c=Ws(n,t,i,{offset:r,translate:s});if(a){const h=Pw(n,c,{containerRect:e,popupRect:i,triggerRect:t,offset:r,translate:s});c=h.popupPosition,l=h.position}return{style:Gs({left:`${c.left}px`,top:`${c.top}px`},o),position:l}},Dw=(n,e,t,{customStyle:i={}})=>{if(["top","tl","tr","bottom","bl","br"].includes(n)){let s=Math.abs(e.scrollLeft+e.width/2-t.scrollLeft);return s>t.width-8&&(e.width>t.width?s=t.width/2:s=t.width-8),["top","tl","tr"].includes(n)?Gs({left:`${s}px`,bottom:"0",transform:"translate(-50%,50%) rotate(45deg)"},i):Gs({left:`${s}px`,top:"0",transform:"translate(-50%,-50%) rotate(45deg)"},i)}let r=Math.abs(e.scrollTop+e.height/2-t.scrollTop);return r>t.height-8&&(e.height>t.height?r=t.height/2:r=t.height-8),["left","lt","lb"].includes(n)?Gs({top:`${r}px`,right:"0",transform:"translate(50%,-50%) rotate(45deg)"},i):Gs({top:`${r}px`,left:"0",transform:"translate(-50%,-50%) rotate(45deg)"},i)},Nw=n=>n.scrollHeight>n.offsetHeight||n.scrollWidth>n.offsetWidth,kd=n=>{var e;const t=[];let i=n;for(;i&&i!==document.documentElement;)Nw(i)&&t.push(i),i=(e=i.parentElement)!=null?e:void 0;return t},Mg=()=>{const n={},e=jt(),t=()=>{const i=yg(n.value);i!==e.value&&(e.value=i)};return Mr(()=>t()),Wa(()=>t()),{children:n,firstElement:e}};var Hd=za({name:"ResizeObserver",props:{watchOnUpdated:Boolean},emits:["resize"],setup(n,{emit:e,slots:t}){const{children:i,firstElement:r}=Mg();let s;const o=l=>{l&&(s=new pg(c=>{const u=c[0];e("resize",u)}),s.observe(l))},a=()=>{s&&(s.disconnect(),s=null)};return Wi(r,l=>{s&&a(),l&&o(l)}),_o(()=>{s&&a()}),()=>{var l;return i.value=(l=t.default)==null?void 0:l.call(t),i.value}}});function Uw(n,e){const t=jt(n[e]);return Wa(()=>{const i=n[e];t.value!==i&&(t.value=i)}),t}const zd=Symbol("ArcoTrigger"),Ow=1e3,Fw=5e3,Bw=1;class kw{constructor(){this.popupStack={popup:new Set,dialog:new Set,message:new Set},this.getNextZIndex=e=>(e==="message"?Array.from(this.popupStack.message).pop()||Fw:Array.from(this.popupStack.popup).pop()||Ow)+Bw,this.add=e=>{const t=this.getNextZIndex(e);return this.popupStack[e].add(t),e==="dialog"&&this.popupStack.popup.add(t),t},this.delete=(e,t)=>{this.popupStack[t].delete(e),t==="dialog"&&this.popupStack.popup.delete(e)},this.isLastDialog=e=>this.popupStack.dialog.size>1?e===Array.from(this.popupStack.dialog).pop():!0}}const Vd=new kw;function Hw(n,{visible:e,runOnMounted:t}={}){const i=jt(0),r=()=>{i.value=Vd.add(n)},s=()=>{Vd.delete(i.value,n)},o=()=>!1;return Wi(()=>e==null?void 0:e.value,a=>{a?r():s()},{immediate:!0}),t&&(Mr(()=>{r()}),_o(()=>{s()})),{zIndex:Pu(i),open:r,close:s,isLastDialog:o}}const zw=({elementRef:n,onResize:e})=>{let t;return{createResizeObserver:()=>{n.value&&(t=new pg(s=>{const o=s[0];rg(e)&&e(o)}),t.observe(n.value))},destroyResizeObserver:()=>{t&&(t.disconnect(),t=null)}}};var Vw=za({name:"ClientOnly",setup(n,{slots:e}){const t=jt(!1);return Mr(()=>t.value=!0),()=>{var i;return t.value?(i=e.default)==null?void 0:i.call(e):null}}});const Gw=({popupContainer:n,visible:e,defaultContainer:t="body",documentContainer:i})=>{const r=jt(n.value),s=jt(),o=()=>{const a=vw(n.value),l=a?n.value:t,c=a??document.documentElement;l!==r.value&&(r.value=l),c!==s.value&&(s.value=c)};return Mr(()=>o()),Wi(e,a=>{r.value!==n.value&&a&&o()}),{teleportContainer:r,containerRef:s}};var Ww=Object.defineProperty,Xw=Object.defineProperties,jw=Object.getOwnPropertyDescriptors,Gd=Object.getOwnPropertySymbols,Yw=Object.prototype.hasOwnProperty,qw=Object.prototype.propertyIsEnumerable,Wd=(n,e,t)=>e in n?Ww(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Kw=(n,e)=>{for(var t in e||(e={}))Yw.call(e,t)&&Wd(n,t,e[t]);if(Gd)for(var t of Gd(e))qw.call(e,t)&&Wd(n,t,e[t]);return n},$w=(n,e)=>Xw(n,jw(e));const Zw=["onClick","onMouseenter","onMouseleave","onFocusin","onFocusout","onContextmenu"];var ic=za({name:"Trigger",inheritAttrs:!1,props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"hover"},position:{type:String,default:"bottom"},disabled:{type:Boolean,default:!1},popupOffset:{type:Number,default:0},popupTranslate:{type:[Array,Object]},showArrow:{type:Boolean,default:!1},alignPoint:{type:Boolean,default:!1},popupHoverStay:{type:Boolean,default:!0},blurToClose:{type:Boolean,default:!0},clickToClose:{type:Boolean,default:!0},clickOutsideToClose:{type:Boolean,default:!0},unmountOnClose:{type:Boolean,default:!0},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupStyle:{type:Object},animationName:{type:String,default:"fade-in"},duration:{type:[Number,Object]},mouseEnterDelay:{type:Number,default:100},mouseLeaveDelay:{type:Number,default:100},focusDelay:{type:Number,default:0},autoFitPopupWidth:{type:Boolean,default:!1},autoFitPopupMinWidth:{type:Boolean,default:!1},autoFixPosition:{type:Boolean,default:!0},popupContainer:{type:[String,Object]},updateAtScroll:{type:Boolean,default:!1},autoFitTransformOrigin:{type:Boolean,default:!1},hideEmpty:{type:Boolean,default:!1},openedClass:{type:[String,Array,Object]},autoFitPosition:{type:Boolean,default:!0},renderToBody:{type:Boolean,default:!0},preventFocus:{type:Boolean,default:!1},scrollToClose:{type:Boolean,default:!1},scrollToCloseDistance:{type:Number,default:0}},emits:{"update:popupVisible":n=>!0,popupVisibleChange:n=>!0,show:()=>!0,hide:()=>!0,resize:()=>!0},setup(n,{emit:e,slots:t,attrs:i}){const{popupContainer:r}=l_(n),s=lg("trigger"),o=_i(()=>Tw(i,Zw)),a=vr(sg,void 0),l=_i(()=>[].concat(n.trigger)),c=new Set,u=vr(zd,void 0),{children:h,firstElement:f}=Mg(),d=jt(),g=jt(n.defaultPopupVisible),x=jt(n.position),m=jt({}),p=jt({}),R=jt({}),w=jt(),S=jt({top:0,left:0});let H=null,O=null;const I=_i(()=>{var j;return(j=n.popupVisible)!=null?j:g.value}),{teleportContainer:V,containerRef:T}=Gw({popupContainer:r,visible:I,documentContainer:!0}),{zIndex:E}=Hw("popup",{visible:I});let F=0,z=!1,K=!1;const ne=()=>{F&&(window.clearTimeout(F),F=0)},he=j=>{if(n.alignPoint){const{pageX:ce,pageY:Fe}=j;S.value={top:Fe,left:ce}}},J=()=>{if(!f.value||!d.value||!T.value)return;const j=T.value.getBoundingClientRect(),ce=n.alignPoint?{top:S.value.top,bottom:S.value.top,left:S.value.left,right:S.value.left,scrollTop:S.value.top,scrollBottom:S.value.top,scrollLeft:S.value.left,scrollRight:S.value.left,width:0,height:0}:Bd(f.value,j),Fe=()=>Bd(d.value,j),ve=Fe(),{style:Re,position:Le}=Iw(n.position,j,ce,ve,{offset:n.popupOffset,translate:n.popupTranslate,customStyle:n.popupStyle,autoFitPosition:n.autoFitPosition});n.autoFitTransformOrigin&&(p.value={transformOrigin:Lw(Le)}),n.autoFitPopupMinWidth?Re.minWidth=`${ce.width}px`:n.autoFitPopupWidth&&(Re.width=`${ce.width}px`),x.value!==Le&&(x.value=Le),m.value=Re,n.showArrow&&uc(()=>{R.value=Dw(Le,ce,Fe(),{customStyle:n.arrowStyle})})},ue=(j,ce)=>{if(j===I.value&&F===0)return;const Fe=()=>{g.value=j,e("update:popupVisible",j),e("popupVisibleChange",j),j&&uc(()=>{J()})};j||(H=null,O=null),ce?(ne(),j!==I.value&&(F=window.setTimeout(Fe,ce))):Fe()},$=j=>{var ce;(ce=i.onClick)==null||ce.call(i,j),!(n.disabled||I.value&&!n.clickToClose)&&(l.value.includes("click")?(he(j),ue(!I.value)):l.value.includes("contextMenu")&&I.value&&ue(!1))},ye=j=>{var ce;(ce=i.onMouseenter)==null||ce.call(i,j),!(n.disabled||!l.value.includes("hover"))&&(he(j),ue(!0,n.mouseEnterDelay))},we=j=>{u==null||u.onMouseenter(j),ye(j)},Ie=j=>{var ce;(ce=i.onMouseleave)==null||ce.call(i,j),!(n.disabled||!l.value.includes("hover"))&&ue(!1,n.mouseLeaveDelay)},Ue=j=>{u==null||u.onMouseleave(j),Ie(j)},Ze=j=>{var ce;(ce=i.onFocusin)==null||ce.call(i,j),!(n.disabled||!l.value.includes("focus"))&&ue(!0,n.focusDelay)},fe=j=>{var ce;(ce=i.onFocusout)==null||ce.call(i,j),!(n.disabled||!l.value.includes("focus"))&&n.blurToClose&&ue(!1)},Ee=j=>{var ce;(ce=i.onContextmenu)==null||ce.call(i,j),!(n.disabled||!l.value.includes("contextMenu")||I.value&&!n.clickToClose)&&(he(j),ue(!I.value),j.preventDefault())};Fp(zd,ka({onMouseenter:we,onMouseleave:Ue,addChildRef:j=>{c.add(j),u==null||u.addChildRef(j)},removeChildRef:j=>{c.delete(j),u==null||u.removeChildRef(j)}}));const Oe=()=>{Dd(document.documentElement,"mousedown",ht),z=!1},it=Uw(t,"content"),Ve=_i(()=>{var j;return n.hideEmpty&&pw((j=it.value)==null?void 0:j.call(it))}),ht=j=>{var ce,Fe,ve;if(!((ce=f.value)!=null&&ce.contains(j.target)||(Fe=d.value)!=null&&Fe.contains(j.target))){for(const Re of c)if((ve=Re.value)!=null&&ve.contains(j.target))return;Oe(),ue(!1)}},D=(j,ce)=>{const[Fe,ve]=j,{scrollTop:Re,scrollLeft:Le}=ce;return Math.abs(Re-Fe)>=n.scrollToCloseDistance||Math.abs(Le-ve)>=n.scrollToCloseDistance},B=Id(j=>{if(I.value)if(n.scrollToClose||a!=null&&a.scrollToClose){const ce=j.target;H||(H=[ce.scrollTop,ce.scrollLeft]),D(H,ce)?ue(!1):J()}else J()}),b=()=>{Dd(window,"scroll",me),K=!1},me=Id(j=>{const ce=j.target.documentElement;O||(O=[ce.scrollTop,ce.scrollLeft]),D(O,ce)&&(ue(!1),b())}),ie=()=>{I.value&&J()},oe=()=>{ie(),e("resize")},le=j=>{n.preventFocus&&j.preventDefault()};u==null||u.addChildRef(d);const ge=_i(()=>I.value?n.openedClass:void 0);let te;Wi(I,j=>{if(n.clickOutsideToClose&&(!j&&z?Oe():j&&!z&&(nc(document.documentElement,"mousedown",ht),z=!0)),(n.scrollToClose||a!=null&&a.scrollToClose)&&(nc(window,"scroll",me),K=!0),n.updateAtScroll||a!=null&&a.updateAtScroll){if(j){te=kd(f.value);for(const ce of te)ce.addEventListener("scroll",B)}else if(te){for(const ce of te)ce.removeEventListener("scroll",B);te=void 0}}j&&(k.value=!0)}),Wi(()=>[n.autoFitPopupWidth,n.autoFitPopupMinWidth],()=>{I.value&&J()});const{createResizeObserver:M,destroyResizeObserver:y}=zw({elementRef:T,onResize:ie});Mr(()=>{if(M(),I.value&&(J(),n.clickOutsideToClose&&!z&&(nc(document.documentElement,"mousedown",ht),z=!0),n.updateAtScroll||a!=null&&a.updateAtScroll)){te=kd(f.value);for(const j of te)j.addEventListener("scroll",B)}}),Wa(()=>{I.value&&J()}),Pp(()=>{ue(!1)}),_o(()=>{if(u==null||u.removeChildRef(d),y(),z&&Oe(),K&&b(),te){for(const j of te)j.removeEventListener("scroll",B);te=void 0}});const k=jt(I.value),Z=jt(!1),Q=()=>{Z.value=!0},ee=()=>{Z.value=!1,I.value&&e("show")},Ae=()=>{Z.value=!1,I.value||(k.value=!1,e("hide"))};return()=>{var j,ce;return h.value=(ce=(j=t.default)==null?void 0:j.call(t))!=null?ce:[],_g(h.value,{class:ge.value,onClick:$,onMouseenter:ye,onMouseleave:Ie,onFocusin:Ze,onFocusout:fe,onContextmenu:Ee}),Rt(cn,null,[n.autoFixPosition?Rt(Hd,{onResize:oe},{default:()=>[h.value]}):h.value,Rt(Vw,null,{default:()=>[Rt(y_,{to:V.value,disabled:!n.renderToBody},{default:()=>[(!n.unmountOnClose||I.value||k.value)&&!Ve.value&&Rt(Hd,{onResize:ie},{default:()=>[Rt("div",em({ref:d,class:[`${s}-popup`,`${s}-position-${x.value}`],style:$w(Kw({},m.value),{zIndex:E.value,pointerEvents:Z.value?"none":"auto"}),"trigger-placement":x.value,onMouseenter:we,onMouseleave:Ue,onMousedown:le},o.value),[Rt(C0,{name:n.animationName,duration:n.duration,appear:!0,onBeforeEnter:Q,onAfterEnter:ee,onBeforeLeave:Q,onAfterLeave:Ae},{default:()=>{var Fe;return[v_(Rt("div",{class:`${s}-popup-wrapper`,style:p.value},[Rt("div",{class:[`${s}-content`,n.contentClass],style:n.contentStyle},[(Fe=t.content)==null?void 0:Fe.call(t)]),n.showArrow&&Rt("div",{ref:w,class:[`${s}-arrow`,n.arrowClass],style:R.value},null)]),[[U0,I.value]])]}})])]})]})]})])}}});const Jw=Object.assign(ic,{install:(n,e)=>{ag(n,e);const t=og(e);n.component(t+ic.name,ic)}}),Qw=za({name:"Popover",components:{Trigger:Jw},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},title:String,content:String,trigger:{type:[String,Array],default:"hover"},position:{type:String,default:"top"},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupContainer:{type:[String,Object]}},emits:{"update:popupVisible":n=>!0,popupVisibleChange:n=>!0},setup(n,{emit:e}){const t=lg("popover"),i=jt(n.defaultPopupVisible),r=_i(()=>{var l;return(l=n.popupVisible)!=null?l:i.value}),s=l=>{i.value=l,e("update:popupVisible",l),e("popupVisibleChange",l)},o=_i(()=>[`${t}-popup-content`,n.contentClass]),a=_i(()=>[`${t}-popup-arrow`,n.arrowClass]);return{prefixCls:t,computedPopupVisible:r,contentCls:o,arrowCls:a,handlePopupVisibleChange:s}}});function e1(n,e,t,i,r,s){const o=D_("trigger");return vc(),xc(o,{class:Zr(n.prefixCls),trigger:n.trigger,position:n.position,"popup-visible":n.computedPopupVisible,"popup-offset":10,"content-class":n.contentCls,"content-style":n.contentStyle,"arrow-class":n.arrowCls,"arrow-style":n.arrowStyle,"show-arrow":"","popup-container":n.popupContainer,"animation-name":"zoom-in-fade-out","auto-fit-transform-origin":"",onPopupVisibleChange:n.handlePopupVisibleChange},{content:hc(()=>[Ea("div",{class:Zr(`${n.prefixCls}-title`)},[cl(n.$slots,"title",{},()=>[yc(sc(n.title),1)])],2),Ea("div",{class:Zr(`${n.prefixCls}-content`)},[cl(n.$slots,"content",{},()=>[yc(sc(n.content),1)])],2)]),default:hc(()=>[cl(n.$slots,"default")]),_:3},8,["class","trigger","position","popup-visible","content-class","content-style","arrow-class","arrow-style","popup-container","onPopupVisibleChange"])}var rc=xw(Qw,[["render",e1]]);const S1=Object.assign(rc,{install:(n,e)=>{ag(n,e);const t=og(e);n.component(t+rc.name,rc)}});export{a1 as A,xo as B,p1 as C,g1 as D,v1 as E,hc as F,m1 as G,sc as H,o_ as I,S1 as J,v_ as K,U0 as L,pr as M,r1 as N,f1 as O,on as P,us as R,o1 as S,oy as T,Je as V,h1 as W,Ea as a,Rt as b,n1 as c,za as d,cl as e,Mr as f,fy as g,l1 as h,_1 as i,y1 as j,Ip as k,hn as l,u1 as m,d1 as n,vc as o,$a as p,x1 as q,jt as r,t1 as s,Gn as t,Yf as u,Ic as v,c1 as w,i1 as x,M0 as y,xc as z};
