"use strict";(self["webpackChunkactive_dogs"]=self["webpackChunkactive_dogs"]||[]).push([[628],{5813:function(e,n,t){t.d(n,{Z:function(){return c}});var o=t(6252),a=t(3577);function u(e,n,t,u,l,r){const d=(0,o.up)("ion-loading"),i=(0,o.up)("ion-back-button"),c=(0,o.up)("ion-buttons"),s=(0,o.up)("ion-title"),m=(0,o.up)("ion-toolbar"),w=(0,o.up)("ion-header"),f=(0,o.up)("ion-content"),k=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(k,null,{default:(0,o.w5)((()=>[e.loading?((0,o.wg)(),(0,o.j4)(d,{key:0})):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[e.backRoute?((0,o.wg)(),(0,o.j4)(c,{key:0,slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{"default-href":e.backRoute},null,8,["default-href"])])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.Wm)(f,{fullscreen:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(w,{collapse:"condense"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(i)])),_:1}),(0,o.Wm)(s,{size:"large"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.WI)(e.$slots,"default")])),_:3})],64))])),_:3})}var l=t(255),r=(0,o.aZ)({name:"CourseDetail",components:{IonButtons:l.Sm,IonBackButton:l.oU,IonHeader:l.Gu,IonLoading:l.wh,IonToolbar:l.sr,IonTitle:l.wd,IonContent:l.W2,IonPage:l._i},props:{backRoute:{type:String,default:null},loading:{type:Boolean,default:!1},title:{type:String,default:""}}}),d=t(3744);const i=(0,d.Z)(r,[["render",u]]);var c=i},8628:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var o=t(6252),a=t(3577);const u=(0,o.Uk)("Bezahlt"),l=(0,o.Uk)("ja"),r=(0,o.Uk)("nein"),d=(0,o.Uk)("Stundenanzahl"),i=(0,o.Uk)("Besuchte Stunden"),c=(0,o.Uk)("Der Teilnehmer hat noch keine Stunden ..."),s=(0,o.Uk)(" Zurück zum Kurs ");function m(e,n,t,m,w,f){const k=(0,o.up)("ion-label"),g=(0,o.up)("ion-icon"),p=(0,o.up)("ion-button"),_=(0,o.up)("ion-item"),y=(0,o.up)("ion-badge"),h=(0,o.up)("ion-list-header"),W=(0,o.up)("ion-list"),b=(0,o.up)("PageLayout");return(0,o.wg)(),(0,o.j4)(b,{"back-route":`/tabs/course/${e.course?.id}`,loading:!e.card,title:`${e.customer?.dogname} (${e.customer?.name})`},{default:(0,o.w5)((()=>[e.course&&e.card?((0,o.wg)(),(0,o.j4)(W,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{lines:"none"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[u])),_:1}),(0,o.Wm)(p,{slot:"end",color:e.card.payed?"success":"light",onClick:n[0]||(n[0]=n=>e.togglePayed(e.card))},{default:(0,o.w5)((()=>[e.card.payed?((0,o.wg)(),(0,o.j4)(g,{key:0,icon:e.checkmarkCircle,slot:"start"},null,8,["icon"])):((0,o.wg)(),(0,o.j4)(g,{key:1,icon:e.closeCircle,slot:"start"},null,8,["icon"])),e.card.payed?((0,o.wg)(),(0,o.iD)(o.HY,{key:2},[l],64)):((0,o.wg)(),(0,o.iD)(o.HY,{key:3},[r],64))])),_:1},8,["color"])])),_:1}),(0,o.Wm)(_,{lines:"none"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[d])),_:1}),(0,o.Wm)(y,{slot:"end"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.card.course_dates?.length)+"/10",1)])),_:1})])),_:1}),(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[i])),_:1})])),_:1}),e.card.course_dates.length?((0,o.wg)(!0),(0,o.iD)(o.HY,{key:1},(0,o.Ko)(e.card.course_dates,(n=>((0,o.wg)(),(0,o.j4)(_,{key:n.id,button:"","router-link":`/tabs/course/${e.course.id}/coursedatedetail/${n.id}`},{default:(0,o.w5)((()=>[(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(new Date(n.date).toLocaleDateString())+": "+(0,a.zw)(n.topics.name),1)])),_:2},1024)])),_:2},1032,["router-link"])))),128)):((0,o.wg)(),(0,o.j4)(_,{key:0,lines:"none"},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{icon:e.pawOutline,slot:"start"},null,8,["icon"]),(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[c])),_:1})])),_:1})),(0,o.Wm)(p,{expand:"block","router-link":`/tabs/course/${e.course.id}`,"router-direction":"back",color:"light",class:"ion-margin"},{default:(0,o.w5)((()=>[s])),_:1},8,["router-link"])])),_:1})):(0,o.kq)("",!0)])),_:1},8,["back-route","loading","title"])}var w=t(2262),f=t(255),k=t(7606),g=t(5813),p=t(2119),_=t(8903),y=t(816),h=(0,o.aZ)({name:"CourseCardDetail",components:{IonButton:f.YG,IonLabel:f.Q$,IonList:f.q_,IonItem:f.Ie,IonIcon:f.gu,PageLayout:g.Z,IonBadge:f.yp,IonListHeader:f.yh},setup(){const e=(0,w.iH)(),n=(0,w.iH)(),t=(0,w.iH)(),o=(0,p.yj)(),{cardId:a}=o.params;async function u(){const o=await k.O.from("cards").select("\n          id,\n          payed,\n          courses (\n            id,\n            name\n          ),\n          course_dates (\n            id,\n            date,\n            topics (\n              id,\n              name\n            )\n          ),\n          customers (\n            id,\n            name,\n            dogname\n          )\n        ").match({id:a});o.error||(e.value=o.body[0],t.value=(0,w.SU)(e).courses,n.value=(0,w.SU)(e).customers)}function l(){u()}async function r(e){const{error:n}=await k.O.from("cards").update({payed:!e.payed}).match({id:e.id});n?y.h.error("Fehler beim Ändern des Bezahlstatus.",n):u()}return l(),(0,f.KA)(l),{card:e,course:t,customer:n,pawOutline:_.WG6,checkmarkCircle:_.I1A,closeCircle:_.XZx,togglePayed:r}}}),W=t(3744);const b=(0,W.Z)(h,[["render",m]]);var I=b}}]);
//# sourceMappingURL=628.44da57e7.js.map