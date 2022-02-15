<template>
  <ion-page>
    <ion-loading v-if="!customer"></ion-loading>
    <template v-else>
      <ion-header>
        <ion-toolbar>
          <ion-title>{{ customer.dogname }} ({{ customer.name }})</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title>
              {{ customer.dogname }} ({{ customer.name }})
            </ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-button
          expand="block"
          @click="deleteCustomer"
          class="button"
          color="danger"
        >
          Kunde löschen
        </ion-button>
        <ion-button
          expand="block"
          router-link="/tabs/customer"
          router-direction="back"
          color="light"
        >
          Zurück zur Übersicht
        </ion-button>
      </ion-content>
    </template>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  IonPage,
  IonLoading,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  toastController,
  useIonRouter,
  onIonViewWillEnter,
} from '@ionic/vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/api'

export default defineComponent({
  name: 'CustomerDetail',
  components: {
    IonHeader,
    IonLoading,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
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
        const toast = await toastController.create({
          message: 'Fehler beim Löschen des Kunden.',
          duration: 3000,
          color: 'danger',
        })
        toast.present()
        console.error(error)
        return
      }
      const toast = await toastController.create({
        message: 'Kunde erfolgreich gelöscht.',
        duration: 3000,
      })
      toast.present()
      ionRouter.push('/tabs/customer')
    }

    return {
      customer,
      deleteCustomer,
    }
  },
})
</script>

<style scoped>
.button {
  margin: 1rem;
}
</style>
