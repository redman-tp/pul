import{c as ae,j as p,l as R,p as ue,g as se,r as q,az as Y,ax as Z,ar as pe,aa as Ee,w as C,U as we,o as Q,au as Te,aF as _,a_ as G,av as ke,a$ as Ce,u as He,aD as Se,b0 as Me,a as We,b as qe,f as Pe,ae as Be,af as Le,b1 as Ae,i as ze,b2 as Fe,b3 as $e,b4 as J,aV as De,ay as Re,aW as _e,aE as Ke,b5 as Qe,b6 as je,Z as Ie,b7 as Oe,x as Ve}from"./index-B0iSiuEa.js";import{c as Ne}from"./selection-NvJEFU-3.js";const it=ae({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const l=p(()=>parseInt(e.lines,10)),t=p(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),o=p(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>R("div",{style:o.value,class:t.value},ue(n.default))}}),Ue={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},Xe={...Ue,contextMenu:Boolean};function Ye({showing:e,avoidEmit:n,configureAnchorEl:l}){const{props:t,proxy:o,emit:c}=se(),i=q(null);let f=null;function h(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const r={};l===void 0&&(Object.assign(r,{hide(a){o.hide(a)},toggle(a){o.toggle(a),a.qAnchorHandled=!0},toggleKey(a){Ee(a,13)===!0&&r.toggle(a)},contextClick(a){o.hide(a),Y(a),pe(()=>{o.show(a),a.qAnchorHandled=!0})},prevent:Y,mobileTouch(a){if(r.mobileCleanup(a),h(a)!==!0)return;o.hide(a),i.value.classList.add("non-selectable");const s=a.target;Z(r,"anchor",[[s,"touchmove","mobileCleanup","passive"],[s,"touchend","mobileCleanup","passive"],[s,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,o.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),e.value===!0&&a!==void 0&&Ne()}}),l=function(a=t.contextMenu){if(t.noParentEvent===!0||i.value===null)return;let s;a===!0?o.$q.platform.is.mobile===!0?s=[[i.value,"touchstart","mobileTouch","passive"]]:s=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:s=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],Z(r,"anchor",s)});function d(){Te(r,"anchor")}function g(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;l()}function x(){if(t.target===!1||t.target===""||o.$el.parentNode===null)i.value=null;else if(t.target===!0)g(o.$el.parentNode);else{let a=t.target;if(typeof t.target=="string")try{a=document.querySelector(t.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,l()):(i.value=null,console.error(`Anchor: target "${t.target}" not found`))}}return C(()=>t.contextMenu,a=>{i.value!==null&&(d(),l(a))}),C(()=>t.target,()=>{i.value!==null&&d(),x()}),C(()=>t.noParentEvent,a=>{i.value!==null&&(a===!0?d():l())}),we(()=>{x(),n!==!0&&t.modelValue===!0&&i.value===null&&c("update:modelValue",!1)}),Q(()=>{f!==null&&clearTimeout(f),d()}),{anchorEl:i,canShow:h,anchorEvents:r}}function Ze(e,n){const l=q(null);let t;function o(f,h){const r=`${h!==void 0?"add":"remove"}EventListener`,d=h!==void 0?h:t;f!==window&&f[r]("scroll",d,_.passive),window[r]("scroll",d,_.passive),t=h}function c(){l.value!==null&&(o(l.value),l.value=null)}const i=C(()=>e.noParentEvent,()=>{l.value!==null&&(c(),n())});return Q(i),{localScrollTarget:l,unconfigureScrollTarget:c,changeScrollEvent:o}}const{notPassiveCapture:P}=_,T=[];function B(e){const n=e.target;if(n===void 0||n.nodeType===8||n.classList.contains("no-pointer-events")===!0)return;let l=G.length-1;for(;l>=0;){const t=G[l].$;if(t.type.name==="QTooltip"){l--;continue}if(t.type.name!=="QDialog")break;if(t.props.seamless!==!0)return;l--}for(let t=T.length-1;t>=0;t--){const o=T[t];if((o.anchorEl.value===null||o.anchorEl.value.contains(n)===!1)&&(n===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(n)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function Ge(e){T.push(e),T.length===1&&(document.addEventListener("mousedown",B,P),document.addEventListener("touchstart",B,P))}function ee(e){const n=T.findIndex(l=>l===e);n!==-1&&(T.splice(n,1),T.length===0&&(document.removeEventListener("mousedown",B,P),document.removeEventListener("touchstart",B,P)))}let te,ne;function le(e){const n=e.split(" ");return n.length!==2?!1:["top","center","bottom"].includes(n[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(n[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Je(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const K={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{K[`${e}#ltr`]=e,K[`${e}#rtl`]=e});function oe(e,n){const l=e.split(" ");return{vertical:l[0],horizontal:K[`${l[1]}#${n===!0?"rtl":"ltr"}`]}}function et(e,n){let{top:l,left:t,right:o,bottom:c,width:i,height:f}=e.getBoundingClientRect();return n!==void 0&&(l-=n[1],t-=n[0],c+=n[1],o+=n[0],i+=n[0],f+=n[1]),{top:l,bottom:c,height:f,left:t,right:o,width:i,middle:t+(o-t)/2,center:l+(c-l)/2}}function tt(e,n,l){let{top:t,left:o}=e.getBoundingClientRect();return t+=n.top,o+=n.left,l!==void 0&&(t+=l[1],o+=l[0]),{top:t,bottom:t+1,height:1,left:o,right:o+1,width:1,middle:o,center:t}}function nt(e,n){return{top:0,center:n/2,bottom:n,left:0,middle:e/2,right:e}}function ie(e,n,l,t){return{top:e[l.vertical]-n[t.vertical],left:e[l.horizontal]-n[t.horizontal]}}function re(e,n=0){if(e.targetEl===null||e.anchorEl===null||n>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{re(e,n+1)},10);return}const{targetEl:l,offset:t,anchorEl:o,anchorOrigin:c,selfOrigin:i,absoluteOffset:f,fit:h,cover:r,maxHeight:d,maxWidth:g}=e;if(ke.is.ios===!0&&window.visualViewport!==void 0){const k=document.body.style,{offsetLeft:b,offsetTop:y}=window.visualViewport;b!==te&&(k.setProperty("--q-pe-left",b+"px"),te=b),y!==ne&&(k.setProperty("--q-pe-top",y+"px"),ne=y)}const{scrollLeft:x,scrollTop:a}=l,s=f===void 0?et(o,r===!0?[0,0]:t):tt(o,f,t);Object.assign(l.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g,maxHeight:d,visibility:"visible"});const{offsetWidth:M,offsetHeight:H}=l,{elWidth:W,elHeight:L}=h===!0||r===!0?{elWidth:Math.max(s.width,M),elHeight:r===!0?Math.max(s.height,H):H}:{elWidth:M,elHeight:H};let v={maxWidth:g,maxHeight:d};(h===!0||r===!0)&&(v.minWidth=s.width+"px",r===!0&&(v.minHeight=s.height+"px")),Object.assign(l.style,v);const E=nt(W,L);let m=ie(s,E,c,i);if(f===void 0||t===void 0)D(m,s,E,c,i);else{const{top:k,left:b}=m;D(m,s,E,c,i);let y=!1;if(m.top!==k){y=!0;const w=2*t[1];s.center=s.top-=w,s.bottom-=w+2}if(m.left!==b){y=!0;const w=2*t[0];s.middle=s.left-=w,s.right-=w+2}y===!0&&(m=ie(s,E,c,i),D(m,s,E,c,i))}v={top:m.top+"px",left:m.left+"px"},m.maxHeight!==void 0&&(v.maxHeight=m.maxHeight+"px",s.height>m.maxHeight&&(v.minHeight=v.maxHeight)),m.maxWidth!==void 0&&(v.maxWidth=m.maxWidth+"px",s.width>m.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(l.style,v),l.scrollTop!==a&&(l.scrollTop=a),l.scrollLeft!==x&&(l.scrollLeft=x)}function D(e,n,l,t,o){const c=l.bottom,i=l.right,f=Ce(),h=window.innerHeight-f,r=document.body.clientWidth;if(e.top<0||e.top+c>h)if(o.vertical==="center")e.top=n[t.vertical]>h/2?Math.max(0,h-c):0,e.maxHeight=Math.min(c,h);else if(n[t.vertical]>h/2){const d=Math.min(h,t.vertical==="center"?n.center:t.vertical===o.vertical?n.bottom:n.top);e.maxHeight=Math.min(c,d),e.top=Math.max(0,d-c)}else e.top=Math.max(0,t.vertical==="center"?n.center:t.vertical===o.vertical?n.top:n.bottom),e.maxHeight=Math.min(c,h-e.top);if(e.left<0||e.left+i>r)if(e.maxWidth=Math.min(i,r),o.horizontal==="middle")e.left=n[t.horizontal]>r/2?Math.max(0,r-i):0;else if(n[t.horizontal]>r/2){const d=Math.min(r,t.horizontal==="middle"?n.middle:t.horizontal===o.horizontal?n.right:n.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,t.horizontal==="middle"?n.middle:t.horizontal===o.horizontal?n.left:n.right),e.maxWidth=Math.min(i,r-e.left)}const at=ae({name:"QMenu",inheritAttrs:!1,props:{...Xe,...qe,...We,...Me,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noEscDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:le},self:{type:String,validator:le},offset:{type:Array,validator:Je},scrollTarget:Se,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...He,"click","escapeKey"],setup(e,{slots:n,emit:l,attrs:t}){let o=null,c,i,f;const h=se(),{proxy:r}=h,{$q:d}=r,g=q(null),x=q(!1),a=p(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),s=Pe(e,d),{registerTick:M,removeTick:H}=Be(),{registerTimeout:W}=Le(),{transitionProps:L,transitionStyle:v}=Ae(e),{localScrollTarget:E,changeScrollEvent:m,unconfigureScrollTarget:k}=Ze(e,U),{anchorEl:b,canShow:y}=Ye({showing:x}),{hide:w}=ze({showing:x,canShow:y,handleShow:me,handleHide:ve,hideOnRouteChange:a,processOnMount:!0}),{showPortal:j,hidePortal:I,renderPortal:ce}=Fe(h,g,xe,"menu"),A={anchorEl:b,innerRef:g,onClickOutside(u){if(e.persistent!==!0&&x.value===!0)return w(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&Ve(u),!0}},O=p(()=>oe(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),de=p(()=>e.cover===!0?O.value:oe(e.self||"top start",d.lang.rtl)),fe=p(()=>(e.square===!0?" q-menu--square":"")+(s.value===!0?" q-menu--dark q-dark":"")),he=p(()=>e.autoClose===!0?{onClick:ge}:{}),V=p(()=>x.value===!0&&e.persistent!==!0);C(V,u=>{u===!0?($e(F),Ge(A)):(J(F),ee(A))});function z(){Oe(()=>{let u=g.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function me(u){if(o=e.noRefocus===!1?document.activeElement:null,De(X),j(),U(),c=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const $=Re(u);if($.left!==void 0){const{top:be,left:ye}=b.value.getBoundingClientRect();c={left:$.left-ye,top:$.top-be}}}i===void 0&&(i=C(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,S)),e.noFocus!==!0&&document.activeElement.blur(),M(()=>{S(),e.noFocus!==!0&&z()}),W(()=>{d.platform.is.ios===!0&&(f=e.autoClose,g.value.click()),S(),j(!0),l("show",u)},e.transitionDuration)}function ve(u){H(),I(),N(!0),o!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u?.type.indexOf("key")===0?o.closest('[tabindex]:not([tabindex^="-"])'):void 0)||o).focus(),o=null),W(()=>{I(!0),l("hide",u)},e.transitionDuration)}function N(u){c=void 0,i!==void 0&&(i(),i=void 0),(u===!0||x.value===!0)&&(_e(X),k(),ee(A),J(F)),u!==!0&&(o=null)}function U(){(b.value!==null||e.scrollTarget!==void 0)&&(E.value=Ke(b.value,e.scrollTarget),m(E.value,S))}function ge(u){f!==!0?(Qe(r,u),l("click",u)):f=!1}function X(u){V.value===!0&&e.noFocus!==!0&&je(g.value,u.target)!==!0&&z()}function F(u){e.noEscDismiss!==!0&&(l("escapeKey"),w(u))}function S(){re({targetEl:g.value,offset:e.offset,anchorEl:b.value,anchorOrigin:O.value,selfOrigin:de.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function xe(){return R(Ie,L.value,()=>x.value===!0?R("div",{role:"menu",...t,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+fe.value,t.class],style:[t.style,v.value],...he.value},ue(n.default)):null)}return Q(N),Object.assign(r,{focus:z,updatePosition:S}),ce}});export{it as Q,at as a,le as b,Ze as c,Ye as d,Ge as e,oe as p,ee as r,re as s,Ue as u,Je as v};
