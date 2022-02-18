<template>
  <PageLayout title="Kunden">
    <ion-button
      router-link="/tabs/customer/create"
      expand="block"
      class="ion-margin"
    >
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
  </PageLayout>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import {
  IonButton,
  IonCard,
  IonCardContent,
  onIonViewWillEnter,
} from '@ionic/vue'
import { supabase } from '@/api'
import PageLayout from '@/components/PageLayout.vue'

export default defineComponent({
  name: 'CustomerOverview',
  components: {
    PageLayout,
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
