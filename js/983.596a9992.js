"use strict";(self["webpackChunkactive_dogs"]=self["webpackChunkactive_dogs"]||[]).push([[983],{4182:function(e,n,t){t.d(n,{Z:function(){return c}});var o=t(6252),a=t(3577);function u(e,n,t,u,l,r){const i=(0,o.up)("ion-checkbox"),d=(0,o.up)("ion-label"),s=(0,o.up)("ion-item"),c=(0,o.up)("ion-list");return(0,o.wg)(),(0,o.j4)(c,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.list,(n=>((0,o.wg)(),(0,o.j4)(s,{key:n.id},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{slot:"start","onUpdate:modelValue":t=>e.toggleCustomer(n.id),modelValue:e.isCustomerChecked(n.id)},null,8,["onUpdate:modelValue","modelValue"]),(0,o.WI)(e.$slots,"default",(0,a.vs)((0,o.F4)(n)),(()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(n.dogname)+" ("+(0,a.zw)(n.name)+")",1)])),_:2},1024)]))])),_:2},1024)))),128))])),_:3})}var l=t(2262),r=t(8510),i=(0,o.aZ)({name:"CustomerInputList",components:{IonCheckbox:r.nz,IonItem:r.Ie,IonLabel:r.Q$,IonList:r.q_},props:{list:{type:Array,default:()=>[]},modelValue:{type:Array,required:!0}},setup(e,{emit:n}){const t=(0,l.iH)(new Set);function a(e){return t.value.has(e)}function u(e){a(e)?t.value.delete(e):t.value.add(e),n("update:model-value",Array.from(t.value))}return(0,o.YP)((()=>e.modelValue),(()=>{t.value=new Set(e.modelValue)}),{immediate:!0}),{isCustomerChecked:a,toggleCustomer:u}}}),d=t(3744);const s=(0,d.Z)(i,[["render",u]]);var c=s},5813:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(6252),a=t(3577);function u(e,n,t,u,l,r){const i=(0,o.up)("ion-loading"),d=(0,o.up)("ion-back-button"),s=(0,o.up)("ion-buttons"),c=(0,o.up)("ion-title"),m=(0,o.up)("ion-toolbar"),p=(0,o.up)("ion-header"),f=(0,o.up)("ion-content"),w=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(w,null,{default:(0,o.w5)((()=>[e.loading?((0,o.wg)(),(0,o.j4)(i,{key:0})):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[e.backRoute?((0,o.wg)(),(0,o.j4)(s,{key:0,slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{"default-href":e.backRoute},null,8,["default-href"])])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.Wm)(f,{fullscreen:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{collapse:"condense"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(d)])),_:1}),(0,o.Wm)(c,{size:"large"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.WI)(e.$slots,"default")])),_:3})],64))])),_:3})}var l=t(8510),r=(0,o.aZ)({name:"CourseDetail",components:{IonButtons:l.Sm,IonBackButton:l.oU,IonHeader:l.Gu,IonLoading:l.wh,IonToolbar:l.sr,IonTitle:l.wd,IonContent:l.W2,IonPage:l._i},props:{backRoute:{type:String,default:null},loading:{type:Boolean,default:!1},title:{type:String,default:""}}}),i=t(3744);const d=(0,i.Z)(r,[["render",u]]);var s=d},5753:function(e,n,t){t.d(n,{Z:function(){return s}});var o=t(6252),a=t(3577);function u(e,n,t,u,l,r){const i=(0,o.up)("ion-radio"),d=(0,o.up)("ion-label"),s=(0,o.up)("ion-item"),c=(0,o.up)("ion-radio-group"),m=(0,o.up)("ion-list");return(0,o.wg)(),(0,o.j4)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{"allow-empty-selection":!0,value:e.modelValue,onIonChange:e.setOption},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.list,(n=>((0,o.wg)(),(0,o.j4)(s,{key:n.id},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{value:n.id,slot:"start"},null,8,["value"]),(0,o.WI)(e.$slots,"default",(0,a.vs)((0,o.F4)(n)),(()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(n.name),1)])),_:2},1024)]))])),_:2},1024)))),128))])),_:3},8,["value","onIonChange"])])),_:3})}var l=t(8510),r=(0,o.aZ)({name:"RadioInputList",components:{IonRadioGroup:l.se,IonRadio:l.B7,IonItem:l.Ie,IonLabel:l.Q$,IonList:l.q_},props:{list:{type:Array,default:()=>[]},modelValue:{type:Number,default:null}},setup(e,{emit:n}){function t(e){n("update:model-value",e.detail.value)}return{setOption:t}}}),i=t(3744);const d=(0,i.Z)(r,[["render",u]]);var s=d},5983:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var o=t(6252),a=t(3577);const u=(0,o.Uk)("Datum"),l=(0,o.Uk)("Thema"),r=(0,o.Uk)("Neues Thema"),i=(0,o.Uk)("Teilnehmer"),d=(0,o.Uk)(" Änderungen speichern "),s=(0,o.Uk)(" Zurück zum Kurs "),c=(0,o.Uk)(" Stunde löschen ");function m(e,n,t,m,p,f){const w=(0,o.up)("ion-label"),h=(0,o.up)("ion-input"),g=(0,o.up)("ion-item"),_=(0,o.up)("ion-list-header"),k=(0,o.up)("ion-badge"),I=(0,o.up)("RadioInputList"),b=(0,o.up)("ion-icon"),v=(0,o.up)("CustomerInputList"),S=(0,o.up)("ion-button"),U=(0,o.up)("ion-list"),W=(0,o.up)("PageLayout");return(0,o.wg)(),(0,o.j4)(W,{"back-route":`/tabs/course/${e.course?.id}`,loading:!e.course,title:`Stunde anpassen - ${e.course?.name}`},{default:(0,o.w5)((()=>[e.course?((0,o.wg)(),(0,o.j4)(U,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{position:"stacked"},{default:(0,o.w5)((()=>[u])),_:1}),(0,o.Wm)(h,{modelValue:e.date,"onUpdate:modelValue":n[0]||(n[0]=n=>e.date=n),type:"date",required:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{color:"dark"},{default:(0,o.w5)((()=>[l])),_:1})])),_:1}),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{position:"stacked"},{default:(0,o.w5)((()=>[r])),_:1}),(0,o.Wm)(h,{modelValue:e.topicName,"onUpdate:modelValue":n[1]||(n[1]=n=>e.topicName=n)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(I,{list:e.topics,modelValue:e.selectedTopicId,"onUpdate:modelValue":n[2]||(n[2]=n=>e.selectedTopicId=n)},{default:(0,o.w5)((n=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(n.name),1)])),_:2},1024),(0,o.Wm)(k,{slot:"end"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(e.knownByNumberOfCards(n)),1)])),_:2},1024)])),_:1},8,["list","modelValue"]),(0,o.Wm)(_,null,{default:(0,o.w5)((()=>[(0,o.Wm)(w,{color:"dark"},{default:(0,o.w5)((()=>[i])),_:1})])),_:1}),(0,o.Wm)(v,{list:e.course.cards,modelValue:e.selectedCardIds,"onUpdate:modelValue":n[3]||(n[3]=n=>e.selectedCardIds=n)},{default:(0,o.w5)((n=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)(n.customers.dogname)+" ("+(0,a.zw)(n.customers.name)+") ",1)])),_:2},1024),e.knowsSelectedTopic(n)?((0,o.wg)(),(0,o.j4)(b,{key:0,slot:"end",icon:e.flashOutline},null,8,["icon"])):(0,o.kq)("",!0)])),_:1},8,["list","modelValue"]),(0,o.Wm)(S,{expand:"block",onClick:e.updateCourseDate,class:"ion-margin"},{default:(0,o.w5)((()=>[d])),_:1},8,["onClick"]),(0,o.Wm)(S,{expand:"block","router-link":`/tabs/course/${e.course.id}`,"router-direction":"back",color:"light",class:"ion-margin"},{default:(0,o.w5)((()=>[s])),_:1},8,["router-link"]),(0,o.Wm)(S,{expand:"block",onClick:e.deleteCourseDate,class:"ion-margin",color:"danger"},{default:(0,o.w5)((()=>[c])),_:1},8,["onClick"])])),_:1})):(0,o.kq)("",!0)])),_:1},8,["back-route","loading","title"])}var p=t(2262),f=t(8510),w=t(7606),h=t(5813),g=t(4182),_=t(5753),k=t(816),I=t(2119),b=t(8903),v=t(7627),S=t(8219),U=(0,o.aZ)({name:"CourseCourseDateDetail",components:{IonButton:f.YG,IonLabel:f.Q$,IonList:f.q_,IonItem:f.Ie,IonIcon:f.gu,PageLayout:h.Z,IonInput:f.pK,IonBadge:f.yp,IonListHeader:f.yh,CustomerInputList:g.Z,RadioInputList:_.Z},setup(){const e=(0,p.iH)(),n=(0,p.iH)(""),t=(0,p.iH)([]),a=(0,p.iH)(null),u=(0,p.iH)([]);let l=[];(0,o.YP)(n,(()=>{(0,p.SU)(n)&&(a.value=null)}));const r=(0,p.iH)(),i=(0,p.iH)(),d=(0,I.yj)(),s=(0,f.cj)(),{courseDateId:c}=d.params;async function m(){const n=await w.O.from("course_dates").select("\n          date,\n          id,\n          topics (\n            id,\n            name\n          ),\n          courses (\n            name,\n            id,\n            cards (\n              id,\n              customers (\n                id,\n                name,\n                dogname\n              ),\n              course_dates (\n                topics (\n                  id\n                )\n              )\n            )\n          ),\n          cards (\n            id,\n            customers (\n              id,\n              name,\n              dogname\n            )\n          )\n        ").match({id:c});n.error?k.h.error("Fehler beim Laden der Stunden.",n.error):(r.value=n.body[0],i.value=(0,p.SU)(r).courses,a.value=(0,p.SU)(r).topics.id,u.value=(0,p.SU)(r).cards.map((({id:e})=>e)),l=(0,p.SU)(u),e.value=new Date((0,p.SU)(r).date).toISOString().split("T")[0])}async function h(){const e=await w.O.from("topics").select("\n          name,\n          id\n        ");e.error?k.h.error("Fehler beim Laden der Themen.",e.error):t.value=e.body}function g(){m(),h()}async function _(){if(v.S.offline)return void k.h.error("Fehler beim Speichern. Keine Internetverbindung.");let t=(0,p.SU)(a);if(null==t){const{error:e,data:o}=await w.O.from("topics").insert([{name:(0,p.SU)(n)}]);if(e||!o?.length)return void k.h.error("Fehler beim Erstellen des Themas",e);t=o[0].id}const{error:o}=await w.O.from("course_dates").update([{date:(0,p.SU)(e),topic_id:t}]).match({id:c});if(o)return void k.h.error("Fehler beim Speichern der Stunde.",o);const r=(0,p.SU)(i).id,d=(0,p.SU)(u).filter((e=>!l.includes(e))),m=l.filter((e=>!(0,p.SU)(u).includes(e)));if(m.length){const{error:e}=await w.O.from("card_course_date_relation").delete().eq("course_id",r).in("card_id",m);if(e)return void k.h.error("Fehler beim Hinzufügen der Teilnehmer.",e)}if(d.length){const e=e=>({card_id:e,course_date_id:c}),{error:n}=await w.O.from("card_course_date_relation").insert(d.map(e));if(n)return void k.h.error("Fehler beim Hinzufügen der Teilnehmer.",n)}k.h.success("Stunde erfolgreich gespeichert."),s.navigate(`/tabs/course/${(0,p.SU)(i).id}`,"back","push")}function U(e,n){return e.course_dates.some((e=>e.topics.id===n))}function W(e){return U(e,(0,p.SU)(a))}function y(e){let n=0;return(0,p.SU)(i).cards.forEach((t=>{U(t,e.id)&&n++})),n}async function C(){if(v.S.offline)return void k.h.error("Fehler beim Löschen. Keine Internetverbindung.");const e=await S.Z.confirm("Stunde wirklich löschen?","Dadurch wird die Stunde auch bei allen Teilnehmern entfernt. Soll diese Stunde endgültig gelöscht werden?");if(!e)return;const n=(0,p.SU)(r).cards.map((({id:e})=>e));if(n.length){const{error:e}=await w.O.from("card_course_date_relation").delete().match({course_date_id:c}).in("card_id",n);if(e)return void k.h.error("Fehler beim Löschen der Stundenzuweisungen.",e)}const{error:t}=await w.O.from("course_dates").delete().match({id:c});t?k.h.error("Fehler beim Löschen der Stunde.",t):(k.h.success("Stunde erfolgreich gelöscht."),s.navigate(`/tabs/course/${(0,p.SU)(i).id}`,"back","push"))}return g(),(0,f.KA)(g),{course:i,topics:t,selectedTopicId:a,date:e,topicName:n,selectedCardIds:u,updateCourseDate:_,knowsSelectedTopic:W,knownByNumberOfCards:y,deleteCourseDate:C,flashOutline:b.PjC}}}),W=t(3744);const y=(0,W.Z)(U,[["render",m]]);var C=y}}]);
//# sourceMappingURL=983.596a9992.js.map