(function(){var e={1993:function(e){function n(e){return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}))}n.keys=function(){return[]},n.resolve=n,n.id=1993,e.exports=n},1875:function(e){function n(e){return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}))}n.keys=function(){return[]},n.resolve=n,n.id=1875,e.exports=n},9735:function(e,n,t){"use strict";t.d(n,{O:function(){return i}});var o=t(6186);const r="https://mstepdozqbuywwiffixm.supabase.co",a="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1zdGVwZG96cWJ1eXd3aWZmaXhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ3NzQxMTMsImV4cCI6MTk2MDM1MDExM30.hKjsQP_TjCVNDyrmzmA7pA0e8zbPIu7MDuqnawukllY",i=(0,o.eI)(r,a)},7041:function(e,n,t){"use strict";var o=t(9963),r=t(6252);function a(e,n,t,o,a,i){const u=(0,r.up)("ion-router-outlet"),c=(0,r.up)("ion-app");return(0,r.wg)(),(0,r.j4)(c,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u)])),_:1})}var i=t(2488),u=(0,r.aZ)({name:"App",components:{IonApp:i.dr,IonRouterOutlet:i.jP}}),c=t(3744);const l=(0,c.Z)(u,[["render",a]]);var s=l,d=t(9735),p=t(1089);const f={class:"login"},m=(0,r.Uk)("Active Dogs Login"),h=(0,r.Uk)("Email"),b=(0,r.Uk)("Passwort"),g=(0,r.Uk)(" Einloggen "),v=(0,r.Uk)(" Neuen Account registrieren ");function w(e,n,t,o,a,i){const u=(0,r.up)("ion-card-header"),c=(0,r.up)("ion-label"),l=(0,r.up)("ion-input"),s=(0,r.up)("ion-item"),d=(0,r.up)("ion-button"),p=(0,r.up)("ion-card-content"),w=(0,r.up)("ion-card"),I=(0,r.up)("ion-page");return(0,r.wg)(),(0,r.j4)(I,null,{default:(0,r.w5)((()=>[(0,r._)("div",f,[(0,r.Wm)(w,{class:"card"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[m])),_:1}),(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,{position:"stacked"},{default:(0,r.w5)((()=>[h])),_:1}),(0,r.Wm)(l,{modelValue:e.email,"onUpdate:modelValue":n[0]||(n[0]=n=>e.email=n)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,{position:"stacked"},{default:(0,r.w5)((()=>[b])),_:1}),(0,r.Wm)(l,{type:"password",modelValue:e.password,"onUpdate:modelValue":n[1]||(n[1]=n=>e.password=n)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,{expand:"block",class:"button",onClick:e.login},{default:(0,r.w5)((()=>[g])),_:1},8,["onClick"]),(0,r.Wm)(d,{expand:"block","router-link":"register","router-direction":"forward",color:"light"},{default:(0,r.w5)((()=>[v])),_:1})])),_:1})])),_:1})])])),_:1})}var I=t(2262),_=t(816),k=(0,r.aZ)({name:"LoginView",components:{IonLabel:i.Q$,IonInput:i.pK,IonItem:i.Ie,IonCard:i.PM,IonCardContent:i.FN,IonCardHeader:i.Zi,IonButton:i.YG,IonPage:i._i},setup(){const e=(0,I.iH)(""),n=(0,I.iH)(""),t=(0,i.cj)();async function o(){const{error:o}=await d.O.auth.signIn({email:(0,I.SU)(e),password:(0,I.SU)(n)});o?_.h.error("Fehler beim Einloggen.",o):t.push("/")}return{email:e,password:n,login:o}}});const y=(0,c.Z)(k,[["render",w],["__scopeId","data-v-084eeed6"]]);var W=y;const C={class:"register"},U=(0,r.Uk)("Register Account"),O=(0,r.Uk)("Email"),j=(0,r.Uk)("Passwort"),P=(0,r.Uk)(" Registrieren "),E=(0,r.Uk)(" Zurück zum Login ");function N(e,n,t,o,a,i){const u=(0,r.up)("ion-card-header"),c=(0,r.up)("ion-label"),l=(0,r.up)("ion-input"),s=(0,r.up)("ion-item"),d=(0,r.up)("ion-button"),p=(0,r.up)("ion-card-content"),f=(0,r.up)("ion-card"),m=(0,r.up)("ion-page");return(0,r.wg)(),(0,r.j4)(m,null,{default:(0,r.w5)((()=>[(0,r._)("div",C,[(0,r.Wm)(f,{class:"card"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[U])),_:1}),(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,{position:"stacked"},{default:(0,r.w5)((()=>[O])),_:1}),(0,r.Wm)(l,{modelValue:e.email,"onUpdate:modelValue":n[0]||(n[0]=n=>e.email=n)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,{position:"stacked"},{default:(0,r.w5)((()=>[j])),_:1}),(0,r.Wm)(l,{type:"password",modelValue:e.password,"onUpdate:modelValue":n[1]||(n[1]=n=>e.password=n)},null,8,["modelValue"])])),_:1}),(0,r.Wm)(d,{expand:"block",class:"button",onClick:e.register},{default:(0,r.w5)((()=>[P])),_:1},8,["onClick"]),(0,r.Wm)(d,{expand:"block","router-link":"login","router-direction":"back",color:"light"},{default:(0,r.w5)((()=>[E])),_:1})])),_:1})])),_:1})])])),_:1})}var Z=(0,r.aZ)({name:"RegisterView",components:{IonLabel:i.Q$,IonInput:i.pK,IonItem:i.Ie,IonCard:i.PM,IonCardContent:i.FN,IonCardHeader:i.Zi,IonButton:i.YG,IonPage:i._i},setup(){const e=(0,I.iH)(""),n=(0,I.iH)(""),t=(0,i.cj)();async function o(){const{error:o}=await d.O.auth.signUp({email:(0,I.SU)(e),password:(0,I.SU)(n)});o?_.h.error("Fehler beim Registrieren.",o):t.push("/register-success")}return{email:e,password:n,register:o}}});const M=(0,c.Z)(Z,[["render",N],["__scopeId","data-v-f708f21e"]]);var T=M;const x={class:"register"},V=(0,r.Uk)("Registrierung Erfolgreich"),A=(0,r.Uk)(" Bitte überprüfe dein Email Postfach und klicke den gesendeten Link, um die Registrierung abzuschließen. "),L=(0,r.Uk)(" Zurück zum Login ");function S(e,n,t,o,a,i){const u=(0,r.up)("ion-card-header"),c=(0,r.up)("ion-text"),l=(0,r.up)("ion-button"),s=(0,r.up)("ion-card-content"),d=(0,r.up)("ion-card"),p=(0,r.up)("ion-page");return(0,r.wg)(),(0,r.j4)(p,null,{default:(0,r.w5)((()=>[(0,r._)("div",x,[(0,r.Wm)(d,{class:"card"},{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[V])),_:1}),(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,{color:"success"},{default:(0,r.w5)((()=>[A])),_:1}),(0,r.Wm)(l,{expand:"block","router-link":"login","router-direction":"back",color:"light"},{default:(0,r.w5)((()=>[L])),_:1})])),_:1})])),_:1})])])),_:1})}var D=(0,r.aZ)({components:{IonText:i.yW,IonCard:i.PM,IonCardContent:i.FN,IonCardHeader:i.Zi,IonButton:i.YG,IonPage:i._i}});const F=(0,c.Z)(D,[["render",S],["__scopeId","data-v-5a3014b0"]]);var z=F;const B=(0,r.Uk)("Kurse"),R=(0,r.Uk)("Kunden");function H(e,n,t,o,a,i){const u=(0,r.up)("ion-router-outlet"),c=(0,r.up)("ion-icon"),l=(0,r.up)("ion-label"),s=(0,r.up)("ion-tab-button"),d=(0,r.up)("ion-tab-bar"),p=(0,r.up)("ion-tabs"),f=(0,r.up)("ion-page");return(0,r.wg)(),(0,r.j4)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u),(0,r.Wm)(d,{color:"light",slot:"bottom"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{tab:"course",href:"/tabs/course"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{icon:e.calendar},null,8,["icon"]),(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[B])),_:1})])),_:1}),(0,r.Wm)(s,{tab:"customer",href:"/tabs/customer"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{icon:e.people},null,8,["icon"]),(0,r.Wm)(l,null,{default:(0,r.w5)((()=>[R])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var J=t(8903),Q=(0,r.aZ)({name:"TabsPage",components:{IonLabel:i.Q$,IonTabs:i.UN,IonTabBar:i.yq,IonTabButton:i.ZU,IonIcon:i.gu,IonPage:i._i,IonRouterOutlet:i.jP},setup(){return{calendar:J.YNA,people:J.MI}}});const Y=(0,c.Z)(Q,[["render",H]]);var G=Y;const K=[{path:"/login",component:W,meta:{public:!0}},{path:"/register",component:T,meta:{public:!0}},{path:"/register-success",component:z,meta:{public:!0}},{path:"/",redirect:"/tabs/course"},{path:"/tabs/",component:G,children:[{path:"",redirect:"/tabs/course"},{path:"course",redirect:"/tabs/course/overview",component:()=>t.e(350).then(t.bind(t,5350)),children:[{path:"overview",component:()=>t.e(172).then(t.bind(t,4172))},{path:"create",component:()=>t.e(831).then(t.bind(t,5831))},{path:":id",component:()=>t.e(777).then(t.bind(t,5777))},{path:":id/editcustomer",component:()=>t.e(272).then(t.bind(t,9272))},{path:":id/createcoursedate",component:()=>t.e(409).then(t.bind(t,7409))},{path:":id/coursedatedetail/:courseDateId",component:()=>t.e(165).then(t.bind(t,8165))}]},{path:"customer",redirect:"/tabs/customer/overview",component:()=>t.e(592).then(t.bind(t,7592)),children:[{path:"overview",component:()=>t.e(102).then(t.bind(t,4102))},{path:"create",component:()=>t.e(153).then(t.bind(t,1153))},{path:":id",component:()=>t.e(773).then(t.bind(t,1773))}]}]}],X=(0,p.p7)({history:(0,p.PO)("https://visualjerk.github.io/active-dogs/"),routes:K});X.beforeEach(((e,n,t)=>{if(!e.meta.public&&!d.O.auth.user())return t("/login");t()}));var q=X;t(8851),t(1292),t(1633),t(1045),t(6187),t(2299),t(3423),t(4687),t(9147),t(6250);const $=(0,o.ri)(s).use(i.oX).use(q);q.isReady().then((()=>{$.mount("#app")}))},816:function(e,n,t){"use strict";t.d(n,{h:function(){return r}});var o=t(2488);const r={async error(e,n){const t=[e];n&&t.push(n.message);const r=await o.Mn.create({message:t.join(" "),duration:5e3,color:"danger"});r.present(),console.error(n)},async success(e){const n=await o.Mn.create({message:e,duration:3e3});n.present()}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],a=e[s][2];for(var u=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var l=r();void 0!==l&&(n=l)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{78:"e0ca7848",102:"fd1f8c72",153:"74102507",165:"790434a4",168:"9390e98d",172:"a1746973",272:"ddfd39e3",338:"780baa9c",350:"67635997",409:"63148be5",541:"52e78cdd",544:"c59cbf6d",576:"0ba5a5a9",592:"0526bd24",753:"9e7f813f",773:"ad7ad63e",775:"aca82f25",777:"233dd6e7",831:"ad16d7ed",880:"2be6c813",990:"48f44ff6"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+".fbda6427.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="active-dogs:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,c;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var d=l[s];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+a){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=o),e[o]=[r];var p=function(n,t){u.onerror=u.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="https://visualjerk.github.io/active-dogs/"}(),function(){var e=function(e,n,t,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=a,r.href=n,document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),u=t.p+i;if(n(i,u))return r();e(o,u,r,a)}))},r={143:0};t.f.miniCss=function(e,n){var t={777:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),u=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],u=o[1],c=o[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(c)var s=c(t)}for(n&&n(o);l<i.length;l++)a=i[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(s)},o=self["webpackChunkactive_dogs"]=self["webpackChunkactive_dogs"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(7041)}));o=t.O(o)})();
//# sourceMappingURL=app.34fba035.js.map