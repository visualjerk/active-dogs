"use strict";(self["webpackChunkactive_dogs"]=self["webpackChunkactive_dogs"]||[]).push([[717],{5813:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(6252),r=t(3577);function l(e,n,t,l,a,u){const s=(0,o.up)("ion-loading"),i=(0,o.up)("ion-back-button"),d=(0,o.up)("ion-buttons"),c=(0,o.up)("ion-title"),w=(0,o.up)("ion-toolbar"),m=(0,o.up)("ion-header"),g=(0,o.up)("ion-content"),f=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(f,null,{default:(0,o.w5)((()=>[e.loading?((0,o.wg)(),(0,o.j4)(s,{key:0})):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[e.backRoute?((0,o.wg)(),(0,o.j4)(d,{key:0,slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{"default-href":e.backRoute},null,8,["default-href"])])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.Wm)(g,{fullscreen:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(m,{collapse:"condense"},{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(i)])),_:1}),(0,o.Wm)(c,{size:"large"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.WI)(e.$slots,"default")])),_:3})],64))])),_:3})}var a=t(8510),u=(0,o.aZ)({name:"CourseDetail",components:{IonButtons:a.Sm,IonBackButton:a.oU,IonHeader:a.Gu,IonLoading:a.wh,IonToolbar:a.sr,IonTitle:a.wd,IonContent:a.W2,IonPage:a._i},props:{backRoute:{type:String,default:null},loading:{type:Boolean,default:!1},title:{type:String,default:""}}}),s=t(3744);const i=(0,s.Z)(u,[["render",l]]);var d=i},4717:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var o=t(6252),r=t(3577);const l=(0,o.Uk)("Stunden"),a=(0,o.Uk)("Der Kurs hat noch keine Stunden ..."),u=(0,o.Uk)(" Weniger anzeigen "),s=(0,o.Uk)(" Alle anzeigen "),i=(0,o.Uk)(" Stunde hinzufügen "),d=(0,o.Uk)("Teilnehmer"),c=(0,o.Uk)("Der Kurs ist noch leer ..."),w={slot:"end",class:"buttons"},m=(0,o.Uk)(" € "),g=(0,o.Uk)(" Teilnehmer bearbeiten "),f=(0,o.Uk)(" Zurück zur Übersicht "),k=(0,o.Uk)(" Kurs löschen ");function h(e,n,t,h,_,p){const b=(0,o.up)("ion-label"),W=(0,o.up)("ion-list-header"),y=(0,o.up)("ion-icon"),U=(0,o.up)("ion-item"),C=(0,o.up)("ion-badge"),D=(0,o.up)("ion-button"),I=(0,o.up)("ion-list"),S=(0,o.up)("PageLayout");return(0,o.wg)(),(0,o.j4)(S,{"back-route":"/tabs/course",loading:!e.course,title:e.course?.name},{default:(0,o.w5)((()=>[e.course?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[l])),_:1})])),_:1}),e.visibleCourseDates.length?((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.visibleCourseDates,(n=>((0,o.wg)(),(0,o.j4)(U,{key:n.id,button:"","router-link":`/tabs/course/${e.course.id}/coursedatedetail/${n.id}`},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(new Date(n.date).toLocaleDateString())+": "+(0,r.zw)(n.topics.name),1)])),_:2},1024),(0,o.Wm)(C,{slot:"end"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(n.cards?.length),1)])),_:2},1024)])),_:2},1032,["router-link"])))),128)),e.showCourseDateExpand||e.showAllCourseDates?((0,o.wg)(),(0,o.j4)(D,{key:0,onClick:n[0]||(n[0]=n=>e.showAllCourseDates=!e.showAllCourseDates),class:"ion-margin-horizontal ion-margin-top",size:"small",fill:"clear"},{default:(0,o.w5)((()=>[e.showAllCourseDates?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[u],64)):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[s],64))])),_:1})):(0,o.kq)("",!0)],64)):((0,o.wg)(),(0,o.j4)(U,{key:0,lines:"none"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{icon:e.pawOutline,slot:"start"},null,8,["icon"]),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[a])),_:1})])),_:1}))])),_:1}),(0,o.Wm)(D,{"router-link":`/tabs/course/${e.course.id}/createcoursedate`,color:"light",class:"ion-margin",expand:"block"},{default:(0,o.w5)((()=>[i])),_:1},8,["router-link"]),(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Wm)(W,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[d])),_:1})])),_:1}),e.cards.length?((0,o.wg)(!0),(0,o.iD)(o.HY,{key:1},(0,o.Ko)(e.cards,(n=>((0,o.wg)(),(0,o.j4)(U,{key:n.id,button:"","router-link":`/tabs/course/${e.course.id}/carddetail/${n.id}`},{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(n.customers.dogname)+" ("+(0,r.zw)(n.customers.name)+") ",1)])),_:2},1024),(0,o._)("div",w,[(0,o.Wm)(D,{color:n.payed?"success":"light"},{default:(0,o.w5)((()=>[n.payed?((0,o.wg)(),(0,o.j4)(y,{key:0,icon:e.checkmarkCircle,slot:"start"},null,8,["icon"])):((0,o.wg)(),(0,o.j4)(y,{key:1,icon:e.closeCircle,slot:"start"},null,8,["icon"])),m])),_:2},1032,["color"]),(0,o.Wm)(C,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(n.course_dates?.length)+" / "+(0,r.zw)(n.count),1)])),_:2},1024)])])),_:2},1032,["router-link"])))),128)):((0,o.wg)(),(0,o.j4)(U,{key:0,lines:"none"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{icon:e.pawOutline,slot:"start"},null,8,["icon"]),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[c])),_:1})])),_:1}))])),_:1}),(0,o.Wm)(D,{"router-link":`/tabs/course/${e.course.id}/editcustomer`,color:"light",class:"ion-margin ion-margin-bottom-large",expand:"block"},{default:(0,o.w5)((()=>[g])),_:1},8,["router-link"]),(0,o.Wm)(D,{expand:"block","router-link":"/tabs/course","router-direction":"back",color:"light",class:"ion-margin"},{default:(0,o.w5)((()=>[f])),_:1}),(0,o.Wm)(D,{expand:"block",onClick:e.deleteCourse,class:"ion-margin",color:"danger"},{default:(0,o.w5)((()=>[k])),_:1},8,["onClick"])],64)):(0,o.kq)("",!0)])),_:1},8,["loading","title"])}var _=t(2262),p=t(8510),b=t(2119),W=t(7606),y=t(8903),U=t(5813),C=t(816),D=t(8219),I=t(7627),S=(0,o.aZ)({name:"CourseDetail",components:{PageLayout:U.Z,IonButton:p.YG,IonItem:p.Ie,IonLabel:p.Q$,IonList:p.q_,IonListHeader:p.yh,IonIcon:p.gu,IonBadge:p.yp},setup(){const e=(0,_.iH)(),n=(0,b.yj)(),t=(0,p.cj)(),{id:r}=n.params,l=(0,_.iH)(!1),a=(0,o.Fl)((()=>(0,_.SU)(e)?.course_dates||[])),u=(0,o.Fl)((()=>(0,_.SU)(l)?(0,_.SU)(a):(0,_.SU)(a).slice(0,3))),s=(0,o.Fl)((()=>(0,_.SU)(a).length>(0,_.SU)(u).length));async function i(){const n=await W.O.from("courses").select("\n          name,\n          id,\n          cards (\n            id,\n            payed,\n            count,\n            customers (\n              id,\n              name,\n              dogname\n            ),\n            course_dates (\n              id\n            )\n          ),\n          course_dates (\n            id,\n            date,\n            topics (\n              name\n            ),\n            cards (\n              id\n            )\n          )\n        ").match({id:r}).order("date",{foreignTable:"course_dates",ascending:!1});n.error?C.h.error("Fehler beim Laden der der Kurse.",n.error):e.value=n.body[0]}async function d(){if(I.S.offline)return void C.h.error("Fehler beim Löschen. Keine Internetverbindung.");const n=await D.Z.confirm("Kurs wirklich löschen?",`Soll der Kurs "${(0,_.SU)(e).name}" endgültig gelöscht werden?`);if(!n)return;const o=(0,_.SU)(e).cards.map((({id:e})=>e)),l=(0,_.SU)(e).course_dates.map((({id:e})=>e));if(o.length){const{error:e}=await W.O.from("card_course_date_relation").delete().in("card_id",o);if(e)return void C.h.error("Fehler beim Löschen der Stundenzuweisungen.",e)}if(o.length){const{error:e}=await W.O.from("cards").delete().in("id",o);if(e)return void C.h.error("Fehler beim Löschen der Kundenzuweisungen.",e)}if(l.length){const{error:e}=await W.O.from("course_dates").delete().in("id",l);if(e)return void C.h.error("Fehler beim Löschen der Stunden.",e)}const{error:a}=await W.O.from("courses").delete().match({id:r});a?C.h.error("Fehler beim Löschen des Kurses.",a):(C.h.success("Kurs erfolgreich gelöscht."),t.navigate("/tabs/course","back","push"))}i(),(0,p.KA)(i);const c=(0,o.Fl)((()=>(0,_.SU)(e).cards.sort(((e,n)=>e.id-n.id))));return{course:e,visibleCourseDates:u,showAllCourseDates:l,showCourseDateExpand:s,cards:c,deleteCourse:d,pawOutline:y.WG6,checkmarkCircle:y.I1A,closeCircle:y.XZx}}}),v=t(3744);const z=(0,v.Z)(S,[["render",h],["__scopeId","data-v-81de2230"]]);var j=z}}]);
//# sourceMappingURL=717.37c4bae4.js.map