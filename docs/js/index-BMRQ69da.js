import{c as D,o as C,a as u,d as E,r as W,b as R,e as K,s as P,D as Q,f as q,S as Z,P as ee,W as te,C as ne,O as ae,A as oe,g as se,V as z,h as j,i as S,j as H,k as N,B as re,M as ie,l as ce,m as le,n as de,T as ue,R as pe,p as me,q as ve,t as he,u as ge,E as fe,v as _e,G as we,w as I,x as ye,y as be,z as V,F as T,H as F,I as G,J as xe,K as Ce,L as Ee,N as Le}from"./vendor-BNgbsM_F.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const h of n.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const k=(d,t)=>{const i=d.__vccOpts||d;for(const[r,e]of t)i[r]=e;return i},Pe={},Se={class:"layout-brand"};function ke(d,t){return C(),D("div",Se,t[0]||(t[0]=[u("div",{class:"layout-brand-logo"},null,-1),u("div",{class:"layout-brand-title"},"Type-055-Destroyer",-1)]))}const Be=k(Pe,[["render",ke],["__scopeId","data-v-13d74a6d"]]),Me={class:"layout-actions"},Ae=E({__name:"LayoutActions",setup(d){const t=W(!0),i={onTheme(r){const e=r.clientX,n=r.clientY,h=Math.hypot(Math.max(e,innerWidth-e),Math.max(n,innerHeight-n));t.value=!t.value,document.startViewTransition(()=>{const g=document.documentElement;g.classList.remove(t.value?"dark":"light"),g.classList.add(t.value?"light":"dark"),document.body.setAttribute("arco-theme",t.value?"dark":"light")}).ready.then(()=>{const g=[`circle(0px at ${e}px ${n}px)`,`circle(${h}px at ${e}px ${n}px)`];document.documentElement.animate({clipPath:t.value?[...g].reverse():[...g]},{duration:500,easing:"ease-in",pseudoElement:t.value?"::view-transition-old(root)":"::view-transition-new(root)"})})},onGithub(){window.open("https://github.com/fengtianxi001","_blank")}};return(r,e)=>(C(),D("div",Me,[u("div",{class:"action-item",onClick:e[0]||(e[0]=(...n)=>i.onGithub&&i.onGithub(...n))},e[1]||(e[1]=[u("i",{class:"mf-icon mf-icon-github"},null,-1)]))]))}}),Re=k(Ae,[["__scopeId","data-v-763ba1f6"]]),De={class:"layout"},Oe={class:"layout-header"},$e={style:{display:"flex"}},ze={style:{display:"flex"}},He={class:"layout-body"},Ne=E({__name:"Layout",setup(d){return(t,i)=>(C(),D("div",De,[u("div",Oe,[u("div",$e,[R(Be)]),u("div",ze,[R(Re)])]),u("div",He,[K(t.$slots,"default")])]))}});function Te(){const d=W(),t=P(),i=P(),r=P(),e=P(),n=P(),h=new Map,L=[],g=new j,w=new Map,B=()=>{const a=new j().getDelta();r.value.render(t.value,i.value);const s=g.getDelta();L.forEach(o=>o.update(s)),h.forEach(o=>o.render(a)),w.forEach(o=>S(o)&&o()),e.value.render(t.value,i.value),H.update(),requestAnimationFrame(()=>B())},M=()=>{const{clientWidth:a,clientHeight:s}=d.value;t.value=new Z,i.value=new ee(45,a/s,1,1e4),i.value.position.set(250,150,-300),r.value=new te({antialias:!0,alpha:!0}),r.value.shadowMap.enabled=!1,r.value.outputEncoding=void 0,r.value.setSize(a,s),r.value.setClearAlpha(.5),d.value.appendChild(r.value.domElement),e.value=new ne,e.value.setSize(a,s),e.value.domElement.className="css2d-renderer",e.value.domElement.style.position="absolute",e.value.domElement.style.top="0px",e.value.domElement.style.pointerEvents="none",d.value.appendChild(e.value.domElement),n.value=new ae(i.value,r.value.domElement),n.value.minPolarAngle=0,n.value.enableDamping=!0,n.value.dampingFactor=.1,n.value.target.set(0,0,0),n.value.maxPolarAngle=Math.PI/2,n.value.minDistance=10,n.value.update();const o=new oe(10066329,10);t.value.add(o);const c=new se(16777215,.5);c.position.set(20,20,20),c.position.multiplyScalar(1),c.castShadow=!0,c.shadow.mapSize=new z(1024,1024),t.value.add(c)},x=new Q;x.setDecoderPath("./js/draco/gltf/"),x.setDecoderConfig({type:"js"});const O=a=>{const s=new we;s.setDRACOLoader(x);const o=(c,p)=>p(c);return new Promise(c=>{s.load(a,p=>o(p,c))})},_=a=>{const s=new ge(r.value);return new Promise(o=>{new fe().load(a,c=>{c.mapping=_e;const p=s.fromEquirectangular(c);o({exrCubeRenderTarget:p,exrBackground:c})})})},y=a=>new Promise(s=>{const o=new ue().load(a.texture,m=>m.wrapS=m.wrapT=pe),c=new me(a.width,a.height),p={textureWidth:256,textureHeight:256,waterNormals:o,sunColor:15853778,waterColor:6390721,distortionScale:3.7,fog:!1,side:he},l=new ve(c,Object.assign(p,a.options??{}));w.set(l,()=>{l.material.uniforms.time.value+=1/60}),s(l)}),b=()=>{const a=new le(5e3);t.value.add(a)},$=()=>{const a=new re(1,1,1),s=new ie({color:65280}),o=new ce(a,s);t.value.add(o)},A=(a,s)=>{const o=c=>{const l=d.value.getBoundingClientRect(),m=new z((c.clientX-l.left)/l.width*2-1,-((c.clientY-l.top)/l.height)*2+1),v=new I;v.setFromCamera(m,i.value);const f=v.intersectObject(a,!0);S(s)&&s(f)};document.addEventListener("click",o),N(()=>document.removeEventListener("click",o))},Y=(a,s)=>{const o=c=>{const l=d.value.getBoundingClientRect(),m=new z((c.clientX-l.left)/l.width*2-1,-((c.clientY-l.top)/l.height)*2+1),v=new I;v.setFromCamera(m,i.value);const f=v.intersectObject(a,!0);S(s)&&s(f)};document.addEventListener("mousemove",o),N(()=>document.removeEventListener("mousemove",o))},J=()=>{const a=()=>{const{clientWidth:s,clientHeight:o}=d.value;i.value.aspect=s/o,i.value.updateProjectionMatrix(),r.value.setSize(s,o),e.value.setSize(s,o),n.value.update()};window.addEventListener("resize",a),N(()=>{window.removeEventListener("resize",a)})},X=a=>{const{from:s,to:o,duration:c,easing:p=H.Easing.Quadratic.Out,onUpdate:l,onComplete:m}=a;return new H.Tween(s).to(o,c).easing(p).onUpdate(v=>S(l)&&l(v)).onComplete(v=>S(m)&&m(v))},U=(a,s)=>{const c=((l,m)=>{const v=E({render:()=>be(l,m)}),f=R(v);return ye(f,document.createElement("div")),console.log("instance",f),f.el.nodeName==="#text"?f.el.nextElementSibling:f.el})(a,s);return new de(c)};return q(()=>{M(),B()}),{container:d,scene:t,camera:i,renderer:r,cssRenderer:e,controls:n,mixers:L,renderMixins:w,composers:h,loadGltf:O,loadEXR:_,loadWater:y,loadCSS2DByVue:U,loadAxesHelper:b,loadTestScene:$,addModelPick:A,addModelHoverPick:Y,addWindowResize:J,transitionAnimation:X}}const Ge={class:"base-marker"},We={style:{width:"200px","word-break":"break-all"}},je=E({__name:"BaseMarker",props:{name:{},desc:{},title:{}},setup(d){return(t,i)=>(C(),V(G(xe),{title:t.title,trigger:"click"},{content:T(()=>[u("div",We,F(t.desc),1)]),default:T(()=>[u("div",Ge,F(t.name),1)]),_:1},8,["title"]))}}),Ie=k(je,[["__scopeId","data-v-09b4fcd3"]]),Fe=""+new URL("../gif/loading-B6YHAyP3.gif",import.meta.url).href,qe={class:"base-loading"},Ve=E({__name:"BaseLoading",props:{loading:{type:Boolean}},setup(d){return(t,i)=>Ce((C(),D("div",qe,i[0]||(i[0]=[u("img",{src:Fe,alt:""},null,-1),u("div",null,"场景正在加载中...",-1)]),512)),[[Ee,t.loading]])}}),Ye=k(Ve,[["__scopeId","data-v-2e5ebab3"]]),Je=E({__name:"App",setup(d){const t=W(!0),{container:i,scene:r,loadGltf:e,loadEXR:n,loadWater:h,loadCSS2DByVue:L,addWindowResize:g}=Te(),w={water:"./textures/waternormals.jpg",hdr:"./hdrs/aristea_wreck_puresky_2k.exr",ship:"./models/cn_type_055_nanchang_v3.0.glb"},B=[{name:"H/PJ-45B (130mm)",point:{x:.14138107432110125,y:24.165143216341583,z:-96.0002365535531},desc:"130mm naval guns of the Chinese Navy. In fact, it is equipped with the H/PJ-45, but the model is usually equipped with stronger equipment."},{name:"GJB 5860-2006",point:{x:-.3841052855757674,y:20.799999594688416,z:-53.935075918036645},desc:"Large VLS of the Chinese Navy. Inside, the Chinese Navy ships YJ-12 and HHQ-9B are stored."},{name:"TYPE 1130",point:{x:.00968257654837057,y:30.556166491636482,z:-36.73000121116638},desc:"30mm caliber CIWS of the Chinese Navy"},{name:"H/PJ-17C",point:{x:-.062348653134737475,y:35.366373907828674,z:168.0691910414079},desc:"Original 30mm anti-ship automatic gun specially developed by FeriseCAT for the Chinese Navy"},{name:"TYPE 346B",point:{x:14.661111149851592,y:37.74721611655127,z:-14.651002400944662},desc:"Anti-aircraft radar owned by the Chinese Navy. The actual exploration range is said to be 400km~600km."}];return q(()=>{g();const M=n(w.hdr).then(({exrCubeRenderTarget:_,exrBackground:y})=>{r.value.background=y,r.value.environment=_.texture}),x=h({texture:w.water,width:1e3*100,height:1e3*100}).then(_=>{_.rotation.x=-Math.PI*.5,r.value.add(_)}),O=e(w.ship).then(_=>{const y=_.scene;y.scale.set(2,2,2),y.position.set(0,2,0),r.value.add(y),B.forEach((b,$)=>{const A=L(Ie,{name:$+1,desc:b.desc,title:b.name});A.position.set(b.point.x,b.point.y,b.point.z),r.value.add(A)})});Promise.all([M,x,O]).then(()=>{t.value=!1})}),(M,x)=>(C(),V(G(Ne),null,{default:T(()=>[R(G(Ye),{loading:t.value},null,8,["loading"]),u("div",{class:"container",ref_key:"container",ref:i},null,512)]),_:1}))}}),Xe=k(Je,[["__scopeId","data-v-1d330a31"]]),Ue=async()=>{Le(Xe).mount("#app")};Ue();
