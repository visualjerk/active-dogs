<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Kunden hinzufügen</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title>Kunden hinzufügen</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="content">
        <ion-item>
          <ion-label position="stacked">Hundename</ion-label>
          <ion-input v-model="dogname"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Menschenname</ion-label>
          <ion-input v-model="name"></ion-input>
        </ion-item>
        <ion-button expand="block" class="button" @click="createCustomer">
          Kunden hinzufügen
        </ion-button>
        <ion-button
          expand="block"
          router-link="/tabs/customer"
          router-direction="back"
          color="light"
        >
          Abbrechen
        </ion-button>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, unref } from 'vue'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonLabel,
  IonInput,
  IonItem,
  useIonRouter,
  toastController,
} from '@ionic/vue'
import { supabase } from '@/api'

export default defineComponent({
  name: 'CustomerCreate',
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonLabel,
    IonInput,
    IonItem,
  },
  setup() {
    const dogname = ref('')
    const name = ref('')
    const ionRouter = useIonRouter()

    async function createCustomer() {
      const { error } = await supabase.from('customers').insert([
        {
          dogname: unref(dogname),
          name: unref(name),
        },
      ])
      if (error) {
        const toast = await toastController.create({
          message: 'Fehler beim Hinzufügen des Kunden.',
          duration: 3000,
          color: 'danger',
        })
        toast.present()
        console.error(error)
        return
      }
      const toast = await toastController.create({
        message: 'Kunde erfolgreich hinzugefügt.',
        duration: 3000,
      })
      toast.present()
      dogname.value = ''
      name.value = ''
      ionRouter.push('/tabs/customer')
    }

    return {
      dogname,
      name,
      createCustomer,
    }
  },
})
</script>

<style scoped>
.content {
  padding: 1rem;
}

.button {
  margin: 1rem 0;
}
</style>
