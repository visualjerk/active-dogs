"use strict";(self["webpackChunkactive_dogs"]=self["webpackChunkactive_dogs"]||[]).push([[165],{182:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(252),u=n(577);function a(e,t,n,a,l,i){const r=(0,o.up)("ion-checkbox"),d=(0,o.up)("ion-label"),s=(0,o.up)("ion-item"),c=(0,o.up)("ion-list");return(0,o.wg)(),(0,o.j4)(c,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.list,(t=>((0,o.wg)(),(0,o.j4)(s,{key:t.id},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{slot:"start","onUpdate:modelValue":n=>e.toggleCustomer(t.id),modelValue:e.isCustomerChecked(t.id)},null,8,["onUpdate:modelValue","modelValue"]),(0,o.WI)(e.$slots,"default",(0,u.vs)((0,o.F4)(t)),(()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(t.dogname)+" ("+(0,u.zw)(t.name)+")",1)])),_:2},1024)]))])),_:2},1024)))),128))])),_:3})}var l=n(262),i=n(255),r=(0,o.aZ)({name:"CustomerInputList",components:{IonCheckbox:i.nz,IonItem:i.Ie,IonLabel:i.Q$,IonList:i.q_},props:{list:{type:Array,default:()=>[]},modelValue:{type:Array,required:!0}},setup(e,{emit:t}){const n=(0,l.iH)(new Set);function u(e){return n.value.has(e)}function a(e){u(e)?n.value.delete(e):n.value.add(e),t("update:model-value",Array.from(n.value))}return(0,o.YP)((()=>e.modelValue),(()=>{n.value=new Set(e.modelValue)}),{immediate:!0}),{isCustomerChecked:u,toggleCustomer:a}}}),d=n(744);const s=(0,d.Z)(r,[["render",a]]);var c=s},530:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(252),u=n(577);function a(e,t,n,a,l,i){const r=(0,o.up)("ion-loading"),d=(0,o.up)("ion-back-button"),s=(0,o.up)("ion-buttons"),c=(0,o.up)("ion-title"),m=(0,o.up)("ion-toolbar"),p=(0,o.up)("ion-header"),f=(0,o.up)("ion-content"),w=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(w,null,{default:(0,o.w5)((()=>[e.loading?((0,o.wg)(),(0,o.j4)(r,{key:0})):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{color:"dark"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{"default-href":e.backRoute},null,8,["default-href"])])),_:1}),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.Wm)(f,{fullscreen:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{collapse:"condense"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(d)])),_:1}),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.WI)(e.$slots,"default")])),_:3})],64))])),_:3})}var l=n(255),i=(0,o.aZ)({name:"CourseDetail",components:{IonButtons:l.Sm,IonBackButton:l.oU,IonHeader:l.Gu,IonLoading:l.wh,IonToolbar:l.sr,IonTitle:l.wd,IonContent:l.W2,IonPage:l._i},props:{backRoute:{type:String,default:null},loading:{type:Boolean,default:!1},title:{type:String,default:""}}}),r=n(744);const d=(0,r.Z)(i,[["render",a]]);var s=d},974:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(252),u=n(577);function a(e,t,n,a,l,i){const r=(0,o.up)("ion-radio"),d=(0,o.up)("ion-label"),s=(0,o.up)("ion-item"),c=(0,o.up)("ion-radio-group"),m=(0,o.up)("ion-list");return(0,o.wg)(),(0,o.j4)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{"allow-empty-selection":!0,value:e.modelValue,onIonChange:e.setOption},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.list,(t=>((0,o.wg)(),(0,o.j4)(s,{key:t.id},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{value:t.id,slot:"start"},null,8,["value"]),(0,o.WI)(e.$slots,"default",(0,u.vs)((0,o.F4)(t)),(()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(t.name),1)])),_:2},1024)]))])),_:2},1024)))),128))])),_:3},8,["value","onIonChange"])])),_:3})}var l=n(255),i=(0,o.aZ)({name:"RadioInputList",components:{IonRadioGroup:l.se,IonRadio:l.B7,IonItem:l.Ie,IonLabel:l.Q$,IonList:l.q_},props:{list:{type:Array,default:()=>[]},modelValue:{type:Number,default:null}},setup(e,{emit:t}){function n(e){t("update:model-value",e.detail.value)}return{setOption:n}}}),r=n(744);const d=(0,r.Z)(i,[["render",a]]);var s=d},165:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var o=n(252),u=n(577);const a=(0,o.Uk)("Datum"),l=(0,o.Uk)("Thema"),i=(0,o.Uk)("Neues Thema"),r=(0,o.Uk)("Teilnehmer"),d=(0,o.Uk)(" Änderungen speichern "),s=(0,o.Uk)(" Zurück zum Kurs ");function c(e,t,n,c,m,p){const f=(0,o.up)("ion-label"),w=(0,o.up)("ion-input"),g=(0,o.up)("ion-item"),k=(0,o.up)("ion-list-header"),I=(0,o.up)("ion-badge"),_=(0,o.up)("RadioInputList"),h=(0,o.up)("ion-icon"),v=(0,o.up)("CustomerInputList"),b=(0,o.up)("ion-button"),W=(0,o.up)("ion-list"),U=(0,o.up)("PageLayout");return(0,o.wg)(),(0,o.j4)(U,{"back-route":`/tabs/course/${e.course?.id}`,loading:!e.course,title:`Stunde anpassen - ${e.course?.name}`},{default:(0,o.w5)((()=>[e.course?((0,o.wg)(),(0,o.j4)(W,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{position:"stacked"},{default:(0,o.w5)((()=>[a])),_:1}),(0,o.Wm)(w,{modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),type:"date",required:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{color:"dark"},{default:(0,o.w5)((()=>[l])),_:1})])),_:1}),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{position:"stacked"},{default:(0,o.w5)((()=>[i])),_:1}),(0,o.Wm)(w,{modelValue:e.topicName,"onUpdate:modelValue":t[1]||(t[1]=t=>e.topicName=t)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(_,{list:e.topics,modelValue:e.selectedTopicId,"onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedTopicId=t)},{default:(0,o.w5)((t=>[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(t.name),1)])),_:2},1024),(0,o.Wm)(I,{slot:"end"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(e.knownByNumberOfCards(t)),1)])),_:2},1024)])),_:1},8,["list","modelValue"]),(0,o.Wm)(k,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{color:"dark"},{default:(0,o.w5)((()=>[r])),_:1})])),_:1}),(0,o.Wm)(v,{list:e.course.cards,modelValue:e.selectedCardIds,"onUpdate:modelValue":t[3]||(t[3]=t=>e.selectedCardIds=t)},{default:(0,o.w5)((t=>[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,u.zw)(t.customers.dogname)+" ("+(0,u.zw)(t.customers.name)+") ",1)])),_:2},1024),e.knowsSelectedTopic(t)?((0,o.wg)(),(0,o.j4)(h,{key:0,slot:"end",icon:e.flashOutline},null,8,["icon"])):(0,o.kq)("",!0)])),_:1},8,["list","modelValue"]),(0,o.Wm)(b,{expand:"block",onClick:e.updateCourseDate,class:"ion-margin"},{default:(0,o.w5)((()=>[d])),_:1},8,["onClick"]),(0,o.Wm)(b,{expand:"block","router-link":`/tabs/course/${e.course.id}`,"router-direction":"back",color:"light",class:"ion-margin"},{default:(0,o.w5)((()=>[s])),_:1},8,["router-link"])])),_:1})):(0,o.kq)("",!0)])),_:1},8,["back-route","loading","title"])}var m=n(262),p=n(255),f=n(606),w=n(530),g=n(182),k=n(974),I=n(816),_=n(119),h=n(903),v=(0,o.aZ)({name:"CourseCourseDateDetail",components:{IonButton:p.YG,IonLabel:p.Q$,IonList:p.q_,IonItem:p.Ie,IonIcon:p.gu,PageLayout:w.Z,IonInput:p.pK,IonBadge:p.yp,IonListHeader:p.yh,CustomerInputList:g.Z,RadioInputList:k.Z},setup(){const e=(0,m.iH)(),t=(0,m.iH)(""),n=(0,m.iH)([]),u=(0,m.iH)(null),a=(0,m.iH)([]);let l=[];(0,o.YP)(t,(()=>{(0,m.SU)(t)&&(u.value=null)}));const i=(0,m.iH)(),r=(0,m.iH)(),d=(0,_.yj)(),s=(0,p.cj)(),{courseDateId:c}=d.params;async function w(){const t=await f.O.from("course_dates").select("\n          date,\n          id,\n          topics (\n            id,\n            name\n          ),\n          courses (\n            name,\n            id,\n            cards (\n              id,\n              customers (\n                id,\n                name,\n                dogname\n              ),\n              course_dates (\n                topics (\n                  id\n                )\n              )\n            )\n          ),\n          cards (\n            id,\n            customers (\n              id,\n              name,\n              dogname\n            )\n          )\n        ").match({id:c});t.error||(i.value=t.body[0],r.value=(0,m.SU)(i).courses,u.value=(0,m.SU)(i).topics.id,a.value=(0,m.SU)(i).cards.map((({id:e})=>e)),l=(0,m.SU)(a),e.value=new Date((0,m.SU)(i).date).toISOString().split("T")[0])}async function g(){const e=await f.O.from("topics").select("\n          name,\n          id\n        ");e.error||(n.value=e.body)}function k(){w(),g()}async function v(){let n=(0,m.SU)(u);if(null==n){const{error:e,data:o}=await f.O.from("topics").insert([{name:(0,m.SU)(t)}]);if(e||!o?.length)return void I.h.error("Fehler beim Erstellen des Themas",e);n=o[0].id}const{error:o}=await f.O.from("course_dates").update([{date:(0,m.SU)(e),topic_id:n}]).match({id:c});if(o)return void I.h.error("Fehler beim Speichern der Stunde.",o);const i=(0,m.SU)(a).filter((e=>!l.includes(e))),d=l.filter((e=>!(0,m.SU)(a).includes(e)));if(d.length){const{error:e}=await f.O.from("card_course_date").delete().in("id",d);if(e)return void I.h.error("Fehler beim Hinzufügen der Teilnehmer.",e)}if(i.length){const e=e=>({card_id:e,course_date_id:c}),{error:t}=await f.O.from("card_course_date").insert(i.map(e));if(t)return void I.h.error("Fehler beim Hinzufügen der Teilnehmer.",t)}I.h.success("Kurs erfolgreich gespeichert."),s.navigate(`/tabs/course/${(0,m.SU)(r).id}`,"back","push")}function b(e,t){return e.course_dates.some((e=>e.topics.id===t))}function W(e){return b(e,(0,m.SU)(u))}function U(e){let t=0;return(0,m.SU)(r).cards.forEach((n=>{b(n,e.id)&&t++})),t}return k(),(0,p.KA)(k),{course:r,topics:n,selectedTopicId:u,date:e,topicName:t,selectedCardIds:a,updateCourseDate:v,knowsSelectedTopic:W,knownByNumberOfCards:U,flashOutline:h.PjC}}}),b=n(744);const W=(0,b.Z)(v,[["render",c]]);var U=W}}]);
//# sourceMappingURL=165.0ea9e61a.js.map