"use strict";(self["webpackChunkactive_dogs"]=self["webpackChunkactive_dogs"]||[]).push([[18],{4182:function(e,n,t){t.d(n,{Z:function(){return c}});var o=t(6252),r=t(3577);function u(e,n,t,u,i,a){const l=(0,o.up)("ion-checkbox"),s=(0,o.up)("ion-label"),d=(0,o.up)("ion-item"),c=(0,o.up)("ion-list");return(0,o.wg)(),(0,o.j4)(c,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.list,(n=>((0,o.wg)(),(0,o.j4)(d,{key:n.id},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{slot:"start","onUpdate:modelValue":t=>e.toggleCustomer(n.id),modelValue:e.isCustomerChecked(n.id)},null,8,["onUpdate:modelValue","modelValue"]),(0,o.WI)(e.$slots,"default",(0,r.vs)((0,o.F4)(n)),(()=>[(0,o.Wm)(s,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(n.dogname)+" ("+(0,r.zw)(n.name)+")",1)])),_:2},1024)]))])),_:2},1024)))),128))])),_:3})}var i=t(2262),a=t(255),l=(0,o.aZ)({name:"CustomerInputList",components:{IonCheckbox:a.nz,IonItem:a.Ie,IonLabel:a.Q$,IonList:a.q_},props:{list:{type:Array,default:()=>[]},modelValue:{type:Array,required:!0}},setup(e,{emit:n}){const t=(0,i.iH)(new Set);function r(e){return t.value.has(e)}function u(e){r(e)?t.value.delete(e):t.value.add(e),n("update:model-value",Array.from(t.value))}return(0,o.YP)((()=>e.modelValue),(()=>{t.value=new Set(e.modelValue)}),{immediate:!0}),{isCustomerChecked:r,toggleCustomer:u}}}),s=t(3744);const d=(0,s.Z)(l,[["render",u]]);var c=d},5813:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(6252),r=t(3577);function u(e,n,t,u,i,a){const l=(0,o.up)("ion-loading"),s=(0,o.up)("ion-back-button"),d=(0,o.up)("ion-buttons"),c=(0,o.up)("ion-title"),m=(0,o.up)("ion-toolbar"),f=(0,o.up)("ion-header"),p=(0,o.up)("ion-content"),g=(0,o.up)("ion-page");return(0,o.wg)(),(0,o.j4)(g,null,{default:(0,o.w5)((()=>[e.loading?((0,o.wg)(),(0,o.j4)(l,{key:0})):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[(0,o.Wm)(f,null,{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[e.backRoute?((0,o.wg)(),(0,o.j4)(d,{key:0,slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{"default-href":e.backRoute},null,8,["default-href"])])),_:1})):(0,o.kq)("",!0),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.Wm)(p,{fullscreen:!0},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{collapse:"condense"},{default:(0,o.w5)((()=>[(0,o.Wm)(m,null,{default:(0,o.w5)((()=>[(0,o.Wm)(d,{slot:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(s)])),_:1}),(0,o.Wm)(c,{size:"large"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,r.zw)(e.title),1)])),_:1})])),_:1})])),_:1}),(0,o.WI)(e.$slots,"default")])),_:3})],64))])),_:3})}var i=t(255),a=(0,o.aZ)({name:"CourseDetail",components:{IonButtons:i.Sm,IonBackButton:i.oU,IonHeader:i.Gu,IonLoading:i.wh,IonToolbar:i.sr,IonTitle:i.wd,IonContent:i.W2,IonPage:i._i},props:{backRoute:{type:String,default:null},loading:{type:Boolean,default:!1},title:{type:String,default:""}}}),l=t(3744);const s=(0,l.Z)(a,[["render",u]]);var d=s},1018:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var o=t(6252);const r=(0,o.Uk)(" Änderungen speichern "),u=(0,o.Uk)(" Zurück zum Kurs ");function i(e,n,t,i,a,l){const s=(0,o.up)("CustomerInputList"),d=(0,o.up)("ion-button"),c=(0,o.up)("PageLayout");return(0,o.wg)(),(0,o.j4)(c,{"back-route":`/tabs/course/${e.course?.id}`,loading:!e.course,title:`${e.course?.name} - Teilnehmer`},{default:(0,o.w5)((()=>[e.course?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o.Wm)(s,{list:e.customers,modelValue:e.selectedCustomerIds,"onUpdate:modelValue":n[0]||(n[0]=n=>e.selectedCustomerIds=n)},null,8,["list","modelValue"]),(0,o.Wm)(d,{expand:"block",onClick:e.saveCustomers,class:"ion-margin"},{default:(0,o.w5)((()=>[r])),_:1},8,["onClick"]),(0,o.Wm)(d,{class:"ion-margin",expand:"block","router-link":`/tabs/course/${e.course.id}`,"router-direction":"back",color:"light"},{default:(0,o.w5)((()=>[u])),_:1},8,["router-link"])],64)):(0,o.kq)("",!0)])),_:1},8,["back-route","loading","title"])}var a=t(2262),l=t(255),s=t(2119),d=t(7606),c=t(5813),m=t(4182),f=t(816),p=t(8219),g=t(7627),w=(0,o.aZ)({name:"CourseEditCustomer",components:{IonButton:l.YG,PageLayout:c.Z,CustomerInputList:m.Z},setup(){const e=(0,a.iH)(),n=(0,s.yj)(),t=(0,l.cj)(),{id:o}=n.params,r=(0,a.iH)([]);async function u(){const n=await d.O.from("courses").select("\n          name,\n          id,\n          customers (\n            id\n          )\n        ").match({id:o});n.error||(e.value=n.body[0],r.value=e.value.customers.map((({id:e})=>e)))}u(),(0,l.KA)(u);const i=(0,a.iH)([]);async function c(){const e=await d.O.from("customers").select("name, dogname, id");e.error||(i.value=e.body)}async function m(){if(g.S.offline)return void f.h.error("Fehler beim Speichern. Keine Internetverbindung.");const n=r.value,o=e.value.id,u=(0,a.SU)(e).customers.map((({id:e})=>e)),i=u.filter((e=>!n.includes(e))),l=n.filter((e=>!u.includes(e)));if(i.length){const e=await p.Z.confirm("Kursteilnehmer löschen?","Du bist dabei Kursteilnehmer zu entfernen. Wenn ein Kursteilnehmer entfernt wird, werden dadurch auch seine Stundenzuweisungen gelöscht.");if(!e)return;const{error:n,body:t}=await d.O.from("cards").select("id").eq("course_id",o).in("customer_id",i);if(n||!t)return void f.h.error("Fehler beim Holen der Kurszuweisungen.",n);const r=t.map((({id:e})=>e));if(r.length){const{error:e}=await d.O.from("card_course_date").delete().in("card_id",r);if(e)return void f.h.error("Fehler beim Löschen der Stundenzuweisungen.",e)}if(r.length){const{error:e}=await d.O.from("cards").delete().in("id",r);if(e)return void f.h.error("Fehler beim Löschen der Kundenzuweisungen.",e)}}const s=e=>({customer_id:e,course_id:o});if(l.length){const{error:e}=await d.O.from("cards").insert(l.map(s));if(e)return void f.h.error("Fehler beim Speichern der Änderungen.",e)}f.h.success("Teilnehmer erfolgreich gespeichert."),t.navigate(`/tabs/course/${e.value.id}`,"back","push")}return c(),(0,l.KA)(c),{course:e,customers:i,selectedCustomerIds:r,saveCustomers:m}}}),h=t(3744);const k=(0,h.Z)(w,[["render",i]]);var b=k}}]);
//# sourceMappingURL=18.13461ac1.js.map