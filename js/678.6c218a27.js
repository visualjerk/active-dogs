"use strict";(self["webpackChunkactive_dogs"]=self["webpackChunkactive_dogs"]||[]).push([[678],{4182:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(6252),o=t(3577);function u(e,n,t,u,i,a){const l=(0,r.up)("ion-checkbox"),s=(0,r.up)("ion-label"),d=(0,r.up)("ion-item"),c=(0,r.up)("ion-list");return(0,r.wg)(),(0,r.j4)(c,null,{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.list,(n=>((0,r.wg)(),(0,r.j4)(d,{key:n.id},{default:(0,r.w5)((()=>[(0,r.Wm)(l,{slot:"start","onUpdate:modelValue":t=>e.toggleCustomer(n.id),modelValue:e.isCustomerChecked(n.id)},null,8,["onUpdate:modelValue","modelValue"]),(0,r.WI)(e.$slots,"default",(0,o.vs)((0,r.F4)(n)),(()=>[(0,r.Wm)(s,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(n.dogname)+" ("+(0,o.zw)(n.name)+")",1)])),_:2},1024)]))])),_:2},1024)))),128))])),_:3})}var i=t(2262),a=t(8510),l=(0,r.aZ)({name:"CustomerInputList",components:{IonCheckbox:a.nz,IonItem:a.Ie,IonLabel:a.Q$,IonList:a.q_},props:{list:{type:Array,default:()=>[]},modelValue:{type:Array,required:!0}},setup(e,{emit:n}){const t=(0,i.iH)(new Set);function o(e){return t.value.has(e)}function u(e){o(e)?t.value.delete(e):t.value.add(e),n("update:model-value",Array.from(t.value))}return(0,r.YP)((()=>e.modelValue),(()=>{t.value=new Set(e.modelValue)}),{immediate:!0}),{isCustomerChecked:o,toggleCustomer:u}}}),s=t(3744);const d=(0,s.Z)(l,[["render",u]]);var c=d},5813:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(6252),o=t(3577);function u(e,n,t,u,i,a){const l=(0,r.up)("ion-loading"),s=(0,r.up)("ion-back-button"),d=(0,r.up)("ion-buttons"),c=(0,r.up)("ion-title"),m=(0,r.up)("ion-toolbar"),f=(0,r.up)("ion-header"),p=(0,r.up)("ion-content"),h=(0,r.up)("ion-page");return(0,r.wg)(),(0,r.j4)(h,null,{default:(0,r.w5)((()=>[e.loading?((0,r.wg)(),(0,r.j4)(l,{key:0})):((0,r.wg)(),(0,r.iD)(r.HY,{key:1},[(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[e.backRoute?((0,r.wg)(),(0,r.j4)(d,{key:0,slot:"start"},{default:(0,r.w5)((()=>[(0,r.Wm)(s,{"default-href":e.backRoute},null,8,["default-href"])])),_:1})):(0,r.kq)("",!0),(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,r.Wm)(p,{fullscreen:!0},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{collapse:"condense"},{default:(0,r.w5)((()=>[(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(d,{slot:"start"},{default:(0,r.w5)((()=>[(0,r.Wm)(s)])),_:1}),(0,r.Wm)(c,{size:"large"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,r.WI)(e.$slots,"default")])),_:3})],64))])),_:3})}var i=t(8510),a=(0,r.aZ)({name:"CourseDetail",components:{IonButtons:i.Sm,IonBackButton:i.oU,IonHeader:i.Gu,IonLoading:i.wh,IonToolbar:i.sr,IonTitle:i.wd,IonContent:i.W2,IonPage:i._i},props:{backRoute:{type:String,default:null},loading:{type:Boolean,default:!1},title:{type:String,default:""}}}),l=t(3744);const s=(0,l.Z)(a,[["render",u]]);var d=s},6678:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(6252);const o=(0,r.Uk)(" Änderungen speichern "),u=(0,r.Uk)(" Zurück zum Kurs ");function i(e,n,t,i,a,l){const s=(0,r.up)("CustomerInputList"),d=(0,r.up)("ion-button"),c=(0,r.up)("PageLayout");return(0,r.wg)(),(0,r.j4)(c,{"back-route":`/tabs/course/${e.course?.id}`,loading:!e.course,title:`${e.course?.name} - Teilnehmer`},{default:(0,r.w5)((()=>[e.course?((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r.Wm)(s,{list:e.customers,modelValue:e.selectedCustomerIds,"onUpdate:modelValue":n[0]||(n[0]=n=>e.selectedCustomerIds=n)},null,8,["list","modelValue"]),(0,r.Wm)(d,{expand:"block",onClick:e.saveCustomers,class:"ion-margin"},{default:(0,r.w5)((()=>[o])),_:1},8,["onClick"]),(0,r.Wm)(d,{class:"ion-margin",expand:"block","router-link":`/tabs/course/${e.course.id}`,"router-direction":"back",color:"light"},{default:(0,r.w5)((()=>[u])),_:1},8,["router-link"])],64)):(0,r.kq)("",!0)])),_:1},8,["back-route","loading","title"])}var a=t(2262),l=t(8510),s=t(2119),d=t(7606),c=t(5813),m=t(4182),f=t(816),p=t(8219),h=t(7627),g=(0,r.aZ)({name:"CourseEditCustomer",components:{IonButton:l.YG,PageLayout:c.Z,CustomerInputList:m.Z},setup(){const e=(0,a.iH)(),n=(0,s.yj)(),t=(0,l.cj)(),{id:r}=n.params,o=(0,a.iH)([]);async function u(){const n=await d.O.from("courses").select("\n          name,\n          id,\n          customers (\n            id\n          )\n        ").match({id:r});n.error?f.h.error("Fehler beim Laden der Kurse.",n.error):(e.value=n.body[0],o.value=e.value.customers.map((({id:e})=>e)))}u(),(0,l.KA)(u);const i=(0,a.iH)([]);async function c(){const e=await d.O.from("customers").select("name, dogname, id");e.error?f.h.error("Fehler beim Laden des Kunden.",e.error):i.value=e.body}async function m(){if(h.S.offline)return void f.h.error("Fehler beim Speichern. Keine Internetverbindung.");const n=o.value,r=e.value.id,u=(0,a.SU)(e).customers.map((({id:e})=>e)),i=u.filter((e=>!n.includes(e))),l=n.filter((e=>!u.includes(e)));if(i.length){const e=await p.Z.confirm("Kursteilnehmer löschen?","Du bist dabei Kursteilnehmer zu entfernen. Wenn ein Kursteilnehmer entfernt wird, werden dadurch auch seine Stundenzuweisungen gelöscht.");if(!e)return;const{error:n,body:t}=await d.O.from("cards").select("id").eq("course_id",r).in("customer_id",i);if(n||!t)return void f.h.error("Fehler beim Holen der Kurszuweisungen.",n);const o=t.map((({id:e})=>e));if(o.length){const{error:e}=await d.O.from("card_course_date").delete().in("card_id",o);if(e)return void f.h.error("Fehler beim Löschen der Stundenzuweisungen.",e)}if(o.length){const{error:e}=await d.O.from("cards").delete().in("id",o);if(e)return void f.h.error("Fehler beim Löschen der Kundenzuweisungen.",e)}}const s=e=>({customer_id:e,course_id:r});if(l.length){const{error:e}=await d.O.from("cards").insert(l.map(s));if(e)return void f.h.error("Fehler beim Speichern der Änderungen.",e)}f.h.success("Teilnehmer erfolgreich gespeichert."),t.navigate(`/tabs/course/${e.value.id}`,"back","push")}return c(),(0,l.KA)(c),{course:e,customers:i,selectedCustomerIds:o,saveCustomers:m}}}),w=t(3744);const b=(0,w.Z)(g,[["render",i]]);var k=b}}]);
//# sourceMappingURL=678.6c218a27.js.map