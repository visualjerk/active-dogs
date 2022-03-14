"use strict";(self["webpackChunkactive_dogs"]=self["webpackChunkactive_dogs"]||[]).push([[614],{5813:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(6252),r=t(3577);function a(e,n,t,a,u,i){const l=(0,o.up)("ion-loading"),c=(0,o.up)("ion-back-button"),s=(0,o.up)("ion-buttons"),d=(0,o.up)("ion-title"),m=(0,o.up)("ion-toolbar"),f=(0,o.up)("ion-header"),g=(0,o.up)("ion-content"),h=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(h,null,{default:(0,o.w5)((()=>[e.loading?((0,o.wg)(),(0,o.j4)(l,{key:0})):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[e.backRoute?((0,o.wg)(),(0,o.j4)(s,{key:0,slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{"default-href":e.backRoute},null,8,["default-href"])])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.Wm)(g,{fullscreen:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{collapse:"condense"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(c)])),_:1}),(0,o.Wm)(d,{size:"large"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.WI)(e.$slots,"default")])),_:3})],64))])),_:3})}var u=t(8510),i=(0,o.aZ)({name:"CourseDetail",components:{IonButtons:u.Sm,IonBackButton:u.oU,IonHeader:u.Gu,IonLoading:u.wh,IonToolbar:u.sr,IonTitle:u.wd,IonContent:u.W2,IonPage:u._i},props:{backRoute:{type:String,default:null},loading:{type:Boolean,default:!1},title:{type:String,default:""}}}),l=t(3744);const c=(0,l.Z)(i,[["render",a]]);var s=c},7218:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var o=t(6252);const r=(0,o.Uk)(" Kunde löschen "),a=(0,o.Uk)(" Zurück zur Übersicht ");function u(e,n,t,u,i,l){const c=(0,o.up)("ion-button"),s=(0,o.up)("PageLayout");return(0,o.wg)(),(0,o.j4)(s,{"back-route":"/tabs/customer",loading:!e.customer,title:`${e.customer?.dogname} (${e.customer?.name})`},{default:(0,o.w5)((()=>[e.customer?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o.Wm)(c,{expand:"block",onClick:e.deleteCustomer,class:"ion-margin",color:"danger"},{default:(0,o.w5)((()=>[r])),_:1},8,["onClick"]),(0,o.Wm)(c,{expand:"block","router-link":"/tabs/customer","router-direction":"back",class:"ion-margin",color:"light"},{default:(0,o.w5)((()=>[a])),_:1})],64)):(0,o.kq)("",!0)])),_:1},8,["loading","title"])}var i=t(2262),l=t(8510),c=t(2119),s=t(7606),d=t(5813),m=t(816),f=t(8219),g=t(7627),h=(0,o.aZ)({name:"CustomerDetail",components:{PageLayout:d.Z,IonButton:l.YG},setup(){const e=(0,i.iH)(),n=(0,c.yj)(),t=(0,l.cj)(),{id:o}=n.params;async function r(){const n=await s.O.from("customers").select("\n          name,\n          dogname,\n          id,\n          cards (\n            id\n          )\n        ").match({id:o});n.error||(e.value=n.body[0])}async function a(){if(g.S.offline)return void m.h.error("Fehler beim Löschen. Keine Internetverbindung.");const n=await f.Z.confirm("Kunde wirklich löschen?",`Soll der Kunde "${(0,i.SU)(e).dogname} (${(0,i.SU)(e).name})" und seine Stundeninformationen endgültig gelöscht werden?`);if(!n)return;const r=(0,i.SU)(e).cards.map((({id:e})=>e));if(r.length){const{error:e}=await s.O.from("card_course_date").delete().in("card_id",r);if(e)return void m.h.error("Fehler beim Löschen der Stundendaten.",e)}if(r.length){const{error:e}=await s.O.from("cards").delete().in("id",r);if(e)return void m.h.error("Fehler beim Löschen der Kurszuweisungen.",e)}const{error:a}=await s.O.from("customers").delete().match({id:o});a?m.h.error("Fehler beim Löschen des Kunden.",a):(m.h.success("Kunde erfolgreich gelöscht."),t.navigate("/tabs/customer","back","push"))}return r(),(0,l.KA)(r),{customer:e,deleteCustomer:a}}}),w=t(3744);const k=(0,w.Z)(h,[["render",u]]);var p=k}}]);
//# sourceMappingURL=614.55359588.js.map