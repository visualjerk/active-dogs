"use strict";(self["webpackChunkactive_dogs"]=self["webpackChunkactive_dogs"]||[]).push([[272],{4182:function(e,t,o){o.d(t,{Z:function(){return c}});var n=o(6252),u=o(3577);function r(e,t,o,r,a,l){const s=(0,n.up)("ion-checkbox"),i=(0,n.up)("ion-label"),d=(0,n.up)("ion-item"),c=(0,n.up)("ion-list");return(0,n.wg)(),(0,n.j4)(c,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.list,(t=>((0,n.wg)(),(0,n.j4)(d,{key:t.id},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{slot:"start","onUpdate:modelValue":o=>e.toggleCustomer(t.id),modelValue:e.isCustomerChecked(t.id)},null,8,["onUpdate:modelValue","modelValue"]),(0,n.WI)(e.$slots,"default",(0,u.vs)((0,n.F4)(t)),(()=>[(0,n.Wm)(i,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,u.zw)(t.dogname)+" ("+(0,u.zw)(t.name)+")",1)])),_:2},1024)]))])),_:2},1024)))),128))])),_:3})}var a=o(2262),l=o(2488),s=(0,n.aZ)({name:"CustomerInputList",components:{IonCheckbox:l.nz,IonItem:l.Ie,IonLabel:l.Q$,IonList:l.q_},props:{list:{type:Array,default:()=>[]},modelValue:{type:Array,required:!0}},setup(e,{emit:t}){const o=(0,a.iH)(new Set);function u(e){return o.value.has(e)}function r(e){u(e)?o.value.delete(e):o.value.add(e),t("update:model-value",Array.from(o.value))}return(0,n.YP)((()=>e.modelValue),(()=>{o.value=new Set(e.modelValue)}),{immediate:!0}),{isCustomerChecked:u,toggleCustomer:r}}}),i=o(3744);const d=(0,i.Z)(s,[["render",r]]);var c=d},8530:function(e,t,o){o.d(t,{Z:function(){return d}});var n=o(6252),u=o(3577);function r(e,t,o,r,a,l){const s=(0,n.up)("ion-loading"),i=(0,n.up)("ion-back-button"),d=(0,n.up)("ion-buttons"),c=(0,n.up)("ion-title"),m=(0,n.up)("ion-toolbar"),f=(0,n.up)("ion-header"),p=(0,n.up)("ion-content"),g=(0,n.up)("ion-page");return(0,n.wg)(),(0,n.j4)(g,null,{default:(0,n.w5)((()=>[e.loading?((0,n.wg)(),(0,n.j4)(s,{key:0})):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m,{color:"dark"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{slot:"start"},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{"default-href":e.backRoute},null,8,["default-href"])])),_:1}),(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,u.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,n.Wm)(p,{fullscreen:!0},{default:(0,n.w5)((()=>[(0,n.Wm)(f,{collapse:"condense"},{default:(0,n.w5)((()=>[(0,n.Wm)(m,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{slot:"start"},{default:(0,n.w5)((()=>[(0,n.Wm)(i)])),_:1}),(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,u.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,n.WI)(e.$slots,"default")])),_:3})],64))])),_:3})}var a=o(2488),l=(0,n.aZ)({name:"CourseDetail",components:{IonButtons:a.Sm,IonBackButton:a.oU,IonHeader:a.Gu,IonLoading:a.wh,IonToolbar:a.sr,IonTitle:a.wd,IonContent:a.W2,IonPage:a._i},props:{backRoute:{type:String,default:null},loading:{type:Boolean,default:!1},title:{type:String,default:""}}}),s=o(3744);const i=(0,s.Z)(l,[["render",r]]);var d=i},9272:function(e,t,o){o.r(t),o.d(t,{default:function(){return k}});var n=o(6252);const u=(0,n.Uk)(" Änderungen speichern "),r=(0,n.Uk)(" Zurück zum Kurs ");function a(e,t,o,a,l,s){const i=(0,n.up)("CustomerInputList"),d=(0,n.up)("ion-button"),c=(0,n.up)("PageLayout");return(0,n.wg)(),(0,n.j4)(c,{"back-route":`/tabs/course/${e.course?.id}`,loading:!e.course,title:`${e.course?.name} - Teilnehmer`},{default:(0,n.w5)((()=>[e.course?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n.Wm)(i,{list:e.customers,modelValue:e.selectedCustomerIds,"onUpdate:modelValue":t[0]||(t[0]=t=>e.selectedCustomerIds=t)},null,8,["list","modelValue"]),(0,n.Wm)(d,{expand:"block",onClick:e.saveCustomers,class:"ion-margin"},{default:(0,n.w5)((()=>[u])),_:1},8,["onClick"]),(0,n.Wm)(d,{class:"ion-margin",expand:"block","router-link":`/tabs/course/${e.course.id}`,"router-direction":"back",color:"light"},{default:(0,n.w5)((()=>[r])),_:1},8,["router-link"])],64)):(0,n.kq)("",!0)])),_:1},8,["back-route","loading","title"])}var l=o(2262),s=o(2488),i=o(2119),d=o(9735),c=o(8530),m=o(4182),f=o(816),p=(0,n.aZ)({name:"CourseEditCustomer",components:{IonButton:s.YG,PageLayout:c.Z,CustomerInputList:m.Z},setup(){const e=(0,l.iH)(),t=(0,i.yj)(),o=(0,s.cj)(),{id:n}=t.params,u=(0,l.iH)([]);async function r(){const t=await d.O.from("courses").select("\n          name,\n          id,\n          customers (\n            id\n          )\n        ").match({id:n});t.error||(e.value=t.body[0],u.value=e.value.customers.map((({id:e})=>e)))}r(),(0,s.KA)(r);const a=(0,l.iH)([]);async function c(){const e=await d.O.from("customers").select("name, dogname, id");e.error||(a.value=e.body)}async function m(e){f.h.error("Fehler beim Speichern der Änderungen.",e)}async function p(){const t=u.value,n=e.value.id,r=(0,l.SU)(e).customers.map((({id:e})=>e)),a=r.filter((e=>!t.includes(e))),s=t.filter((e=>!r.includes(e)));if(a.length){const e=await d.O.from("cards").delete().eq("course_id",n).in("customer_id",a);if(e.error)return void m(e.error)}const i=e=>({customer_id:e,course_id:n});if(s.length){const{error:e}=await d.O.from("cards").insert(s.map(i));if(e)return void m(e)}f.h.success("Teilnehmer erfolgreich gespeichert."),o.navigate(`/tabs/course/${e.value.id}`,"back","push")}return c(),(0,s.KA)(c),{course:e,customers:a,selectedCustomerIds:u,saveCustomers:p}}}),g=o(3744);const w=(0,g.Z)(p,[["render",a]]);var k=w}}]);
//# sourceMappingURL=272.ddfd39e3.js.map