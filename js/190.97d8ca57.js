"use strict";(self["webpackChunkactive_dogs"]=self["webpackChunkactive_dogs"]||[]).push([[190],{219:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(255);const l={async confirm(e,n){let t=!1;const l=await o.Cl.create({header:e,message:n,buttons:["Abbrechen",{text:"Bestätigen",handler(){t=!0}}]});return await l.present(),await l.onDidDismiss(),t}}},584:function(e,n,t){t.d(n,{Z:function(){return c}});var o=t(252),l=t(577);function a(e,n,t,a,s,r){const u=(0,o.up)("ion-loading"),i=(0,o.up)("ion-back-button"),c=(0,o.up)("ion-buttons"),d=(0,o.up)("ion-title"),w=(0,o.up)("ion-toolbar"),m=(0,o.up)("ion-header"),g=(0,o.up)("ion-content"),k=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(k,null,{default:(0,o.w5)((()=>[e.loading?((0,o.wg)(),(0,o.j4)(u,{key:0})):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{color:"dark"},{default:(0,o.w5)((()=>[(0,o.Wm)(c,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{"default-href":e.backRoute?`${e.baseUrl}${e.backRoute}`:null},null,8,["default-href"])])),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.Wm)(g,{fullscreen:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{collapse:"condense"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(i)])),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.WI)(e.$slots,"default")])),_:3})],64))])),_:3})}var s=t(255),r=(0,o.aZ)({name:"CourseDetail",components:{IonButtons:s.Sm,IonBackButton:s.oU,IonHeader:s.Gu,IonLoading:s.wh,IonToolbar:s.sr,IonTitle:s.wd,IonContent:s.W2,IonPage:s._i},props:{backRoute:{type:String,default:null},loading:{type:Boolean,default:!1},title:{type:String,default:""}},setup(){const e="/active-dogs/";return{baseUrl:e}}}),u=t(744);const i=(0,u.Z)(r,[["render",a]]);var c=i},190:function(e,n,t){t.r(n),t.d(n,{default:function(){return z}});var o=t(252),l=t(577);const a=(0,o.Uk)("Stunden"),s=(0,o.Uk)("Der Kurs hat noch keine Stunden ..."),r=(0,o.Uk)(" Weniger anzeigen "),u=(0,o.Uk)(" Alle anzeigen "),i=(0,o.Uk)(" Stunde hinzufügen "),c=(0,o.Uk)("Teilnehmer"),d=(0,o.Uk)("Der Kurs ist noch leer ..."),w={slot:"end",class:"buttons"},m=(0,o.Uk)(" € "),g=(0,o.Uk)(" Teilnehmer bearbeiten "),k=(0,o.Uk)(" Zurück zur Übersicht "),f=(0,o.Uk)(" Kurs löschen ");function h(e,n,t,h,p,b){const _=(0,o.up)("ion-label"),y=(0,o.up)("ion-list-header"),W=(0,o.up)("ion-icon"),U=(0,o.up)("ion-item"),C=(0,o.up)("ion-badge"),D=(0,o.up)("ion-button"),I=(0,o.up)("ion-list"),v=(0,o.up)("PageLayout");return(0,o.wg)(),(0,o.j4)(v,{"back-route":"tabs/course",loading:!e.course,title:e.course?.name},{default:(0,o.w5)((()=>[e.course?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[a])),_:1})])),_:1}),e.visibleCourseDates.length?((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.visibleCourseDates,(n=>((0,o.wg)(),(0,o.j4)(U,{key:n.id,button:"","router-link":`/tabs/course/${e.course.id}/coursedatedetail/${n.id}`},{default:(0,o.w5)((()=>[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(new Date(n.date).toLocaleDateString())+": "+(0,l.zw)(n.topics.name),1)])),_:2},1024),(0,o.Wm)(C,{slot:"end"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(n.cards?.length),1)])),_:2},1024)])),_:2},1032,["router-link"])))),128)),e.showCourseDateExpand||e.showAllCourseDates?((0,o.wg)(),(0,o.j4)(D,{key:0,onClick:n[0]||(n[0]=n=>e.showAllCourseDates=!e.showAllCourseDates),class:"ion-margin-horizontal ion-margin-top",size:"small",fill:"clear"},{default:(0,o.w5)((()=>[e.showAllCourseDates?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[r],64)):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[u],64))])),_:1})):(0,o.kq)("",!0)],64)):((0,o.wg)(),(0,o.j4)(U,{key:0,lines:"none"},{default:(0,o.w5)((()=>[(0,o.Wm)(W,{icon:e.pawOutline,slot:"start"},null,8,["icon"]),(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[s])),_:1})])),_:1}))])),_:1}),(0,o.Wm)(D,{"router-link":`/tabs/course/${e.course.id}/createcoursedate`,color:"light",class:"ion-margin",expand:"block"},{default:(0,o.w5)((()=>[i])),_:1},8,["router-link"]),(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y,null,{default:(0,o.w5)((()=>[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[c])),_:1})])),_:1}),e.cards.length?((0,o.wg)(!0),(0,o.iD)(o.HY,{key:1},(0,o.Ko)(e.cards,(n=>((0,o.wg)(),(0,o.j4)(U,{key:n.id},{default:(0,o.w5)((()=>[(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(n.customers.dogname)+" ("+(0,l.zw)(n.customers.name)+")",1)])),_:2},1024),(0,o._)("div",w,[(0,o.Wm)(D,{color:n.payed?"success":"light",onClick:t=>e.togglePayed(n)},{default:(0,o.w5)((()=>[n.payed?((0,o.wg)(),(0,o.j4)(W,{key:0,icon:e.checkmarkCircle,slot:"start"},null,8,["icon"])):((0,o.wg)(),(0,o.j4)(W,{key:1,icon:e.closeCircle,slot:"start"},null,8,["icon"])),m])),_:2},1032,["color","onClick"]),(0,o.Wm)(C,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(n.course_dates?.length)+" / 10",1)])),_:2},1024)])])),_:2},1024)))),128)):((0,o.wg)(),(0,o.j4)(U,{key:0,lines:"none"},{default:(0,o.w5)((()=>[(0,o.Wm)(W,{icon:e.pawOutline,slot:"start"},null,8,["icon"]),(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[d])),_:1})])),_:1}))])),_:1}),(0,o.Wm)(D,{"router-link":`/tabs/course/${e.course.id}/editcustomer`,color:"light",class:"ion-margin ion-margin-bottom-large",expand:"block"},{default:(0,o.w5)((()=>[g])),_:1},8,["router-link"]),(0,o.Wm)(D,{expand:"block","router-link":"/tabs/course","router-direction":"back",color:"light",class:"ion-margin"},{default:(0,o.w5)((()=>[k])),_:1}),(0,o.Wm)(D,{expand:"block",onClick:e.deleteCourse,class:"ion-margin",color:"danger"},{default:(0,o.w5)((()=>[f])),_:1},8,["onClick"])],64)):(0,o.kq)("",!0)])),_:1},8,["loading","title"])}var p=t(262),b=t(255),_=t(119),y=t(606),W=t(903),U=t(584),C=t(816),D=t(219),I=(0,o.aZ)({name:"CourseDetail",components:{PageLayout:U.Z,IonButton:b.YG,IonItem:b.Ie,IonLabel:b.Q$,IonList:b.q_,IonListHeader:b.yh,IonIcon:b.gu,IonBadge:b.yp},setup(){const e=(0,p.iH)(),n=(0,_.yj)(),t=(0,b.cj)(),{id:l}=n.params,a=(0,p.iH)(!1),s=(0,o.Fl)((()=>(0,p.SU)(e)?.course_dates||[])),r=(0,o.Fl)((()=>(0,p.SU)(a)?(0,p.SU)(s):(0,p.SU)(s).slice(0,3))),u=(0,o.Fl)((()=>(0,p.SU)(s).length>(0,p.SU)(r).length));async function i(){const n=await y.O.from("courses").select("\n          name,\n          id,\n          cards (\n            id,\n            payed,\n            customers (\n              id,\n              name,\n              dogname\n            ),\n            course_dates (\n              id\n            )\n          ),\n          course_dates (\n            id,\n            date,\n            topics (\n              name\n            ),\n            cards (\n              id\n            )\n          )\n        ").match({id:l}).order("date",{foreignTable:"course_dates",ascending:!1});n.error||(e.value=n.body[0])}async function c(){const n=await D.Z.confirm("Kurs wirklich löschen?",`Soll der Kurs "${(0,p.SU)(e).name}" endgültig gelöscht werden?`);if(!n)return;const{error:o}=await y.O.from("courses").delete().match({id:l});o?C.h.error("Fehler beim Löschen des Kurses.",o):(C.h.success("Kurs erfolgreich gelöscht."),t.navigate("/tabs/course","back","push"))}async function d(e){const{error:n}=await y.O.from("cards").update({payed:!e.payed}).match({id:e.id});n?C.h.error("Fehler beim Ändern des Bezahlstatus.",n):i()}i(),(0,b.KA)(i);const w=(0,o.Fl)((()=>(0,p.SU)(e).cards.sort(((e,n)=>e.id-n.id))));return{course:e,visibleCourseDates:r,showAllCourseDates:a,showCourseDateExpand:u,cards:w,deleteCourse:c,togglePayed:d,pawOutline:W.WG6,checkmarkCircle:W.I1A,closeCircle:W.XZx}}}),v=t(744);const S=(0,v.Z)(I,[["render",h],["__scopeId","data-v-d8f0ee52"]]);var z=S}}]);
//# sourceMappingURL=190.97d8ca57.js.map