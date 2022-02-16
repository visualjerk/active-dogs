<template>
  <PageLayout
    back-route="/tabs/customer"
    :loading="!customer"
    :title="`${customer?.dogname} (${customer?.name})`"
  >
    <template v-if="customer">
      <ion-button
        expand="block"
        @click="deleteCustomer"
        class="ion-margin"
        color="danger"
      >
        Kunde löschen
      </ion-button>
      <ion-button
        expand="block"
        router-link="/tabs/customer"
        router-direction="back"
        class="ion-margin"
        color="light"
      >
        Zurück zur Übersicht
      </ion-button>
    </template>
  </PageLayout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { IonButton, useIonRouter, onIonViewWillEnter } from '@ionic/vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/api'
import PageLayout from '@/components/PageLayout.vue'
import { notify } from '@/notify'

export default defineComponent({
  name: 'CustomerDetail',
  components: {
    PageLayout,
    IonButton,
  },
  setup() {
    const customer = ref()
    const route = useRoute()
    const ionRouter = useIonRouter()
    const { id } = route.params

    async function getCustomer() {
      const result = await supabase
        .from('customers')
        .select(`name, dogname, id`)
        .match({
          id,
        })
      if (result.error) {
        return
      }
      customer.value = result.body[0]
    }
    getCustomer()
    onIonViewWillEnter(getCustomer)

    async function deleteCustomer() {
      const { error } = await supabase.from('customers').delete().match({ id })
      if (error) {
        notify.error('Fehler beim Löschen des Kunden.', error)
        return
      }
      notify.success('Kunde erfolgreich gelöscht.')
      ionRouter.push('/tabs/customer')
    }

    return {
      customer,
      deleteCustomer,
    }
  },
})
</script>
