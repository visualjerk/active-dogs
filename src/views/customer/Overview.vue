<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Kunden</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Kunden</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button router-link="/tabs/customer/create" class="button">
        Neuen Kunden hinzufügen
      </ion-button>
      <ion-card
        v-for="{ name, dogname, id } in customers"
        :key="id"
        button
        :router-link="`/tabs/customer/${id}`"
      >
        <ion-card-content> {{ dogname }} ({{ name }}) </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardContent,
  onIonViewWillEnter,
} from '@ionic/vue'
import { supabase } from '@/api'

export default defineComponent({
  name: 'CustomerOverview',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    IonCard,
    IonCardContent,
  },
  setup() {
    const customers: Ref<any> = ref([])

    async function getCustomers() {
      const result = await supabase
        .from('customers')
        .select(`name, dogname, id`)
        .order('dogname')
      if (result.error) {
        return
      }
      customers.value = result.body
    }
    getCustomers()
    onIonViewWillEnter(getCustomers)

    return {
      customers,
    }
  },
})
</script>

<style scoped>
.button {
  margin: 1rem;
}
</style>
