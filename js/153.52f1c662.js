"use strict";(self["webpackChunkactive_dogs"]=self["webpackChunkactive_dogs"]||[]).push([[153],{530:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(252),a=t(577);function u(e,n,t,u,l,r){const i=(0,o.up)("ion-loading"),d=(0,o.up)("ion-back-button"),s=(0,o.up)("ion-buttons"),c=(0,o.up)("ion-title"),m=(0,o.up)("ion-toolbar"),f=(0,o.up)("ion-header"),p=(0,o.up)("ion-content"),g=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(g,null,{default:(0,o.w5)((()=>[e.loading?((0,o.wg)(),(0,o.j4)(i,{key:0})):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{color:"dark"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{"default-href":e.backRoute},null,8,["default-href"])])),_:1}),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.Wm)(p,{fullscreen:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{collapse:"condense"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(d)])),_:1}),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.WI)(e.$slots,"default")])),_:3})],64))])),_:3})}var l=t(255),r=(0,o.aZ)({name:"CourseDetail",components:{IonButtons:l.Sm,IonBackButton:l.oU,IonHeader:l.Gu,IonLoading:l.wh,IonToolbar:l.sr,IonTitle:l.wd,IonContent:l.W2,IonPage:l._i},props:{backRoute:{type:String,default:null},loading:{type:Boolean,default:!1},title:{type:String,default:""}}}),i=t(744);const d=(0,i.Z)(r,[["render",u]]);var s=d},153:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var o=t(252);const a={class:"ion-padding"},u=(0,o.Uk)("Hundename"),l=(0,o.Uk)("Menschenname"),r=(0,o.Uk)(" Kunden hinzufügen "),i=(0,o.Uk)(" Abbrechen ");function d(e,n,t,d,s,c){const m=(0,o.up)("ion-label"),f=(0,o.up)("ion-input"),p=(0,o.up)("ion-item"),g=(0,o.up)("ion-button"),w=(0,o.up)("PageLayout");return(0,o.wg)(),(0,o.j4)(w,{"back-route":"/tabs/customer",title:"Kunden hinzufügen"},{default:(0,o.w5)((()=>[(0,o._)("div",a,[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{position:"stacked"},{default:(0,o.w5)((()=>[u])),_:1}),(0,o.Wm)(f,{modelValue:e.dogname,"onUpdate:modelValue":n[0]||(n[0]=n=>e.dogname=n),name:"dogname"},null,8,["modelValue"])])),_:1}),(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{position:"stacked"},{default:(0,o.w5)((()=>[l])),_:1}),(0,o.Wm)(f,{modelValue:e.name,"onUpdate:modelValue":n[1]||(n[1]=n=>e.name=n),name:"name"},null,8,["modelValue"])])),_:1}),(0,o.Wm)(g,{expand:"block",onClick:e.createCustomer,class:"ion-margin-vertical"},{default:(0,o.w5)((()=>[r])),_:1},8,["onClick"]),(0,o.Wm)(g,{expand:"block","router-link":"/tabs/customer","router-direction":"back",color:"light",class:"ion-margin-vertical"},{default:(0,o.w5)((()=>[i])),_:1})])])),_:1})}var s=t(262),c=t(255),m=t(606),f=t(530),p=t(816),g=(0,o.aZ)({name:"CustomerCreate",components:{PageLayout:f.Z,IonButton:c.YG,IonLabel:c.Q$,IonInput:c.pK,IonItem:c.Ie},setup(){const e=(0,s.iH)(""),n=(0,s.iH)(""),t=(0,c.cj)();async function o(){const{error:o}=await m.O.from("customers").insert([{dogname:(0,s.SU)(e),name:(0,s.SU)(n)}]);o?p.h.error("Fehler beim Hinzufügen des Kunden.",o):(p.h.success("Kunde erfolgreich hinzugefügt."),e.value="",n.value="",t.navigate("/tabs/customer","back","push"))}return{dogname:e,name:n,createCustomer:o}}}),w=t(744);const k=(0,w.Z)(g,[["render",d]]);var b=k}}]);
//# sourceMappingURL=153.52f1c662.js.map