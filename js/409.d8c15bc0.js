"use strict";(self["webpackChunkactive_dogs"]=self["webpackChunkactive_dogs"]||[]).push([[409],{182:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(252),l=n(577);function u(e,t,n,u,a,i){const d=(0,o.up)("ion-checkbox"),r=(0,o.up)("ion-label"),s=(0,o.up)("ion-item"),c=(0,o.up)("ion-list");return(0,o.wg)(),(0,o.j4)(c,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.list,(t=>((0,o.wg)(),(0,o.j4)(s,{key:t.id},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{slot:"start","onUpdate:modelValue":n=>e.toggleCustomer(t.id),modelValue:e.isCustomerChecked(t.id)},null,8,["onUpdate:modelValue","modelValue"]),(0,o.WI)(e.$slots,"default",(0,l.vs)((0,o.F4)(t)),(()=>[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(t.dogname)+" ("+(0,l.zw)(t.name)+")",1)])),_:2},1024)]))])),_:2},1024)))),128))])),_:3})}var a=n(262),i=n(255),d=(0,o.aZ)({name:"CustomerInputList",components:{IonCheckbox:i.nz,IonItem:i.Ie,IonLabel:i.Q$,IonList:i.q_},props:{list:{type:Array,default:()=>[]},modelValue:{type:Array,required:!0}},setup(e,{emit:t}){const n=(0,a.iH)(new Set);function l(e){return n.value.has(e)}function u(e){l(e)?n.value.delete(e):n.value.add(e),t("update:model-value",Array.from(n.value))}return(0,o.YP)((()=>e.modelValue),(()=>{n.value=new Set(e.modelValue)}),{immediate:!0}),{isCustomerChecked:l,toggleCustomer:u}}}),r=n(744);const s=(0,r.Z)(d,[["render",u]]);var c=s},530:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(252),l=n(577);function u(e,t,n,u,a,i){const d=(0,o.up)("ion-loading"),r=(0,o.up)("ion-back-button"),s=(0,o.up)("ion-buttons"),c=(0,o.up)("ion-title"),m=(0,o.up)("ion-toolbar"),p=(0,o.up)("ion-header"),f=(0,o.up)("ion-content"),w=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(w,null,{default:(0,o.w5)((()=>[e.loading?((0,o.wg)(),(0,o.j4)(d,{key:0})):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o.Wm)(p,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,{color:"dark"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{"default-href":e.backRoute},null,8,["default-href"])])),_:1}),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.Wm)(f,{fullscreen:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{collapse:"condense"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(s,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(r)])),_:1}),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.WI)(e.$slots,"default")])),_:3})],64))])),_:3})}var a=n(255),i=(0,o.aZ)({name:"CourseDetail",components:{IonButtons:a.Sm,IonBackButton:a.oU,IonHeader:a.Gu,IonLoading:a.wh,IonToolbar:a.sr,IonTitle:a.wd,IonContent:a.W2,IonPage:a._i},props:{backRoute:{type:String,default:null},loading:{type:Boolean,default:!1},title:{type:String,default:""}}}),d=n(744);const r=(0,d.Z)(i,[["render",u]]);var s=r},974:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(252),l=n(577);function u(e,t,n,u,a,i){const d=(0,o.up)("ion-radio"),r=(0,o.up)("ion-label"),s=(0,o.up)("ion-item"),c=(0,o.up)("ion-radio-group"),m=(0,o.up)("ion-list");return(0,o.wg)(),(0,o.j4)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{"allow-empty-selection":!0,value:e.modelValue,onIonChange:e.setOption},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.list,(t=>((0,o.wg)(),(0,o.j4)(s,{key:t.id},{default:(0,o.w5)((()=>[(0,o.Wm)(d,{value:t.id,slot:"start"},null,8,["value"]),(0,o.WI)(e.$slots,"default",(0,l.vs)((0,o.F4)(t)),(()=>[(0,o.Wm)(r,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(t.name),1)])),_:2},1024)]))])),_:2},1024)))),128))])),_:3},8,["value","onIonChange"])])),_:3})}var a=n(255),i=(0,o.aZ)({name:"RadioInputList",components:{IonRadioGroup:a.se,IonRadio:a.B7,IonItem:a.Ie,IonLabel:a.Q$,IonList:a.q_},props:{list:{type:Array,default:()=>[]},modelValue:{type:Number,default:null}},setup(e,{emit:t}){function n(e){t("update:model-value",e.detail.value)}return{setOption:n}}}),d=n(744);const r=(0,d.Z)(i,[["render",u]]);var s=r},409:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var o=n(252),l=n(577);const u=(0,o.Uk)("Datum"),a=(0,o.Uk)("Thema"),i=(0,o.Uk)("Neues Thema"),d=(0,o.Uk)("Teilnehmer"),r=(0,o.Uk)(" Stunde hinzufügen "),s=(0,o.Uk)(" Abbrechen ");function c(e,t,n,c,m,p){const f=(0,o.up)("ion-label"),w=(0,o.up)("ion-input"),g=(0,o.up)("ion-item"),I=(0,o.up)("ion-list-header"),_=(0,o.up)("ion-badge"),k=(0,o.up)("RadioInputList"),h=(0,o.up)("ion-icon"),v=(0,o.up)("CustomerInputList"),W=(0,o.up)("ion-button"),b=(0,o.up)("ion-list"),U=(0,o.up)("PageLayout");return(0,o.wg)(),(0,o.j4)(U,{"back-route":`/tabs/course/${e.course?.id}`,loading:!e.course,title:`Stunde hinzufügen - ${e.course?.name}`},{default:(0,o.w5)((()=>[e.course?((0,o.wg)(),(0,o.j4)(b,{key:0},{default:(0,o.w5)((()=>[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{position:"stacked"},{default:(0,o.w5)((()=>[u])),_:1}),(0,o.Wm)(w,{modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),type:"date",required:""},null,8,["modelValue"])])),_:1}),(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{color:"dark"},{default:(0,o.w5)((()=>[a])),_:1})])),_:1}),(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{position:"stacked"},{default:(0,o.w5)((()=>[i])),_:1}),(0,o.Wm)(w,{modelValue:e.topicName,"onUpdate:modelValue":t[1]||(t[1]=t=>e.topicName=t)},null,8,["modelValue"])])),_:1}),(0,o.Wm)(k,{list:e.sortedTopics,modelValue:e.selectedTopicId,"onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedTopicId=t)},{default:(0,o.w5)((e=>[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.name),1)])),_:2},1024),(0,o.Wm)(_,{slot:"end"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.cardsVisited),1)])),_:2},1024)])),_:1},8,["list","modelValue"]),(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f,{color:"dark"},{default:(0,o.w5)((()=>[d])),_:1})])),_:1}),(0,o.Wm)(v,{list:e.course.cards,modelValue:e.selectedCardIds,"onUpdate:modelValue":t[3]||(t[3]=t=>e.selectedCardIds=t)},{default:(0,o.w5)((t=>[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(t.customers.dogname)+" ("+(0,l.zw)(t.customers.name)+") ",1)])),_:2},1024),e.visitedSelectedTopic(t)?((0,o.wg)(),(0,o.j4)(h,{key:0,slot:"end",icon:e.flashOutline},null,8,["icon"])):(0,o.kq)("",!0)])),_:1},8,["list","modelValue"]),(0,o.Wm)(W,{expand:"block",onClick:e.createCourseDate,class:"ion-margin"},{default:(0,o.w5)((()=>[r])),_:1},8,["onClick"]),(0,o.Wm)(W,{expand:"block","router-link":`/tabs/course/${e.course.id}`,"router-direction":"back",color:"light",class:"ion-margin"},{default:(0,o.w5)((()=>[s])),_:1},8,["router-link"])])),_:1})):(0,o.kq)("",!0)])),_:1},8,["back-route","loading","title"])}var m=n(262),p=n(255),f=n(606),w=n(530),g=n(182),I=n(974),_=n(816),k=n(119),h=n(903),v=(0,o.aZ)({name:"CourseCreateCourseDate",components:{IonButton:p.YG,IonLabel:p.Q$,IonList:p.q_,IonItem:p.Ie,IonIcon:p.gu,PageLayout:w.Z,IonInput:p.pK,IonBadge:p.yp,IonListHeader:p.yh,CustomerInputList:g.Z,RadioInputList:I.Z},setup(){const e=(new Date).toISOString().split("T")[0],t=(0,m.iH)(e),n=(0,m.iH)(""),l=(0,m.iH)([]),u=(0,m.iH)(null),a=(0,m.iH)([]);(0,o.YP)(n,(()=>{(0,m.SU)(n)&&(u.value=null)}));const i=(0,m.iH)(),d=(0,k.yj)(),r=(0,p.cj)(),{id:s}=d.params;async function c(){const e=await f.O.from("courses").select("\n          name,\n          id,\n          cards (\n            id,\n            customers (\n              id,\n              name,\n              dogname\n            ),\n            course_dates (\n              topics (\n                id\n              )\n            )\n          )\n        ").match({id:s});e.error||(i.value=e.body[0])}async function w(){const e=await f.O.from("topics").select("\n          name,\n          id\n        ");e.error||(l.value=e.body)}function g(){t.value=e,n.value="",u.value=null,a.value=[],c(),w()}async function I(){let e=(0,m.SU)(u);if(null==e){const{error:t,data:o}=await f.O.from("topics").insert([{name:(0,m.SU)(n)}]);if(t||!o?.length)return void _.h.error("Fehler beim Erstellen des Themas",t);e=o[0].id}const{error:o,data:l}=await f.O.from("course_dates").insert([{date:(0,m.SU)(t),course_id:(0,m.SU)(i).id,topic_id:e}]);if(o||!l?.length)return void _.h.error("Fehler beim Erstellen der Stunde.",o);const d=e=>({card_id:e,course_date_id:l[0].id}),{error:s}=await f.O.from("card_course_date").insert((0,m.SU)(a).map(d));s?_.h.error("Fehler beim Hinzufügen der Teilnehmer.",s):(_.h.success("Kurs erfolgreich hinzugefügt."),r.navigate(`/tabs/course/${(0,m.SU)(i).id}`,"back","push"))}function v(e,t){return e.course_dates.some((e=>e.topics.id===t))}function W(e){return v(e,(0,m.SU)(u))}function b(e){let t=0;return(0,m.SU)(i).cards.forEach((n=>{v(n,e.id)&&t++})),t}g(),(0,p.KA)(g);const U=(0,o.Fl)((()=>(0,m.SU)(l).map((e=>({...e,cardsVisited:b(e)}))).sort(((e,t)=>e.cardsVisited-t.cardsVisited))));return{course:i,sortedTopics:U,selectedTopicId:u,date:t,topicName:n,selectedCardIds:a,createCourseDate:I,visitedSelectedTopic:W,flashOutline:h.PjC}}}),W=n(744);const b=(0,W.Z)(v,[["render",c]]);var U=b}}]);
//# sourceMappingURL=409.d8c15bc0.js.map