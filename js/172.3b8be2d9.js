"use strict";(self["webpackChunkactive_dogs"]=self["webpackChunkactive_dogs"]||[]).push([[172],{530:function(n,e,t){t.d(e,{Z:function(){return s}});var o=t(252),u=t(577);function a(n,e,t,a,l,r){const d=(0,o.up)("ion-loading"),i=(0,o.up)("ion-back-button"),s=(0,o.up)("ion-buttons"),c=(0,o.up)("ion-title"),f=(0,o.up)("ion-toolbar"),w=(0,o.up)("ion-header"),p=(0,o.up)("ion-content"),m=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(m,null,{default:(0,o.w5)((()=>[n.loading?((0,o.wg)(),(0,o.j4)(d,{key:0})):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{color:"dark"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{"default-href":n.backRoute},null,8,["default-href"])])),_:1}),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(n.title),1)])),_:1})])),_:1})])),_:1}),(0,o.Wm)(p,{fullscreen:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{collapse:"condense"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(i)])),_:1}),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(n.title),1)])),_:1})])),_:1})])),_:1}),(0,o.WI)(n.$slots,"default")])),_:3})],64))])),_:3})}var l=t(255),r=(0,o.aZ)({name:"CourseDetail",components:{IonButtons:l.Sm,IonBackButton:l.oU,IonHeader:l.Gu,IonLoading:l.wh,IonToolbar:l.sr,IonTitle:l.wd,IonContent:l.W2,IonPage:l._i},props:{backRoute:{type:String,default:null},loading:{type:Boolean,default:!1},title:{type:String,default:""}}}),d=t(744);const i=(0,d.Z)(r,[["render",a]]);var s=i},172:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var o=t(252),u=t(577);const a=(0,o.Uk)(" Neuen Kurs hinzufügen ");function l(n,e,t,l,r,d){const i=(0,o.up)("ion-button"),s=(0,o.up)("ion-card-title"),c=(0,o.up)("ion-card-header"),f=(0,o.up)("ion-card-content"),w=(0,o.up)("ion-card"),p=(0,o.up)("PageLayout");return(0,o.wg)(),(0,o.j4)(p,{title:"Kurse"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{"router-link":"/tabs/course/create",class:"ion-margin",expand:"block"},{default:(0,o.w5)((()=>[a])),_:1}),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.courses,(({name:n,id:e,cards:t})=>((0,o.wg)(),(0,o.j4)(w,{key:e,button:"","router-link":`/tabs/course/${e}`},{default:(0,o.w5)((()=>[(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(n),1)])),_:2},1024)])),_:2},1024),(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(t.length)+" Teilnehmer",1)])),_:2},1024)])),_:2},1032,["router-link"])))),128))])),_:1})}var r=t(262),d=t(255),i=t(606),s=t(530),c=(0,o.aZ)({name:"CourseOverview",components:{PageLayout:s.Z,IonButton:d.YG,IonCard:d.PM,IonCardHeader:d.Zi,IonCardTitle:d.Dq,IonCardContent:d.FN},setup(){const n=(0,r.iH)([]);async function e(){const e=await i.O.from("courses").select("\n          name,\n          id,\n          cards (\n            id\n          )\n        ").order("name");e.error||(n.value=e.body)}return e(),(0,d.KA)(e),{courses:n}}}),f=t(744);const w=(0,f.Z)(c,[["render",l]]);var p=w}}]);
//# sourceMappingURL=172.3b8be2d9.js.map