"use strict";(self["webpackChunkactive_dogs"]=self["webpackChunkactive_dogs"]||[]).push([[831],{530:function(e,n,t){t.d(n,{Z:function(){return c}});var o=t(252),u=t(577);function a(e,n,t,a,l,r){const i=(0,o.up)("ion-loading"),s=(0,o.up)("ion-back-button"),c=(0,o.up)("ion-buttons"),d=(0,o.up)("ion-title"),f=(0,o.up)("ion-toolbar"),m=(0,o.up)("ion-header"),p=(0,o.up)("ion-content"),g=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(g,null,{default:(0,o.w5)((()=>[e.loading?((0,o.wg)(),(0,o.j4)(i,{key:0})):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{color:"dark"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{"default-href":e.backRoute},null,8,["default-href"])])),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.Wm)(p,{fullscreen:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{collapse:"condense"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(s)])),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.WI)(e.$slots,"default")])),_:3})],64))])),_:3})}var l=t(255),r=(0,o.aZ)({name:"CourseDetail",components:{IonButtons:l.Sm,IonBackButton:l.oU,IonHeader:l.Gu,IonLoading:l.wh,IonToolbar:l.sr,IonTitle:l.wd,IonContent:l.W2,IonPage:l._i},props:{backRoute:{type:String,default:null},loading:{type:Boolean,default:!1},title:{type:String,default:""}}}),i=t(744);const s=(0,i.Z)(r,[["render",a]]);var c=s},831:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var o=t(252);const u={class:"ion-padding"},a=(0,o.Uk)("Name"),l=(0,o.Uk)(" Kurs hinzufügen "),r=(0,o.Uk)(" Abbrechen ");function i(e,n,t,i,s,c){const d=(0,o.up)("ion-label"),f=(0,o.up)("ion-input"),m=(0,o.up)("ion-item"),p=(0,o.up)("ion-button"),g=(0,o.up)("PageLayout");return(0,o.wg)(),(0,o.j4)(g,{"back-route":"/tabs/course",title:"Kurs hinzufügen"},{default:(0,o.w5)((()=>[(0,o._)("div",u,[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{position:"stacked"},{default:(0,o.w5)((()=>[a])),_:1}),(0,o.Wm)(f,{modelValue:e.name,"onUpdate:modelValue":n[0]||(n[0]=n=>e.name=n)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(p,{expand:"block",onClick:e.createCourse,class:"ion-margin-vertical"},{default:(0,o.w5)((()=>[l])),_:1},8,["onClick"]),(0,o.Wm)(p,{expand:"block","router-link":"/tabs/course","router-direction":"back",color:"light",class:"ion-margin-vertical"},{default:(0,o.w5)((()=>[r])),_:1})])])),_:1})}var s=t(262),c=t(255),d=t(606),f=t(530),m=t(816),p=(0,o.aZ)({name:"CoursesCreate",components:{IonButton:c.YG,IonLabel:c.Q$,IonInput:c.pK,IonItem:c.Ie,PageLayout:f.Z},setup(){const e=(0,s.iH)(""),n=(0,c.cj)();async function t(){const{error:t}=await d.O.from("courses").insert([{name:(0,s.SU)(e)}]);t?m.h.error("Fehler beim Hinzufügen des Kurses.",t):(m.h.success("Kurs erfolgreich hinzugefügt."),e.value="",n.navigate("/tabs/course","back","push"))}return{name:e,createCourse:t}}}),g=t(744);const w=(0,g.Z)(p,[["render",i]]);var k=w}}]);
//# sourceMappingURL=831.32624094.js.map