<template>
  <PageLayout back-route="/tabs/customer" title="Kunden hinzufügen">
    <div class="ion-padding">
      <ion-item>
        <ion-label position="stacked">Hundename</ion-label>
        <ion-input v-model="dogname" name="dogname"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Menschenname</ion-label>
        <ion-input v-model="name" name="name"></ion-input>
      </ion-item>
      <ion-button
        expand="block"
        @click="createCustomer"
        class="ion-margin-vertical"
      >
        Kunden hinzufügen
      </ion-button>
      <ion-button
        expand="block"
        router-link="/tabs/customer"
        router-direction="back"
        color="light"
        class="ion-margin-vertical"
      >
        Abbrechen
      </ion-button>
    </div>
  </PageLayout>
</template>

<script lang="ts">
import { defineComponent, ref, unref } from 'vue'
import {
  IonButton,
  IonLabel,
  IonInput,
  IonItem,
  useIonRouter,
} from '@ionic/vue'
import { supabase } from '@/api'
import PageLayout from '@/components/PageLayout.vue'
import { notify } from '@/notify'
import { state } from '@/store'

export default defineComponent({
  name: 'CustomerCreate',
  components: {
    PageLayout,
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
      if (state.offline) {
        notify.error('Fehler beim Erstellen. Keine Internetverbindung.')
        return
      }
      const { error } = await supabase.from('customers').insert([
        {
          dogname: unref(dogname),
          name: unref(name),
        },
      ])
      if (error) {
        notify.error('Fehler beim Hinzufügen des Kunden.', error)
        return
      }
      notify.success('Kunde erfolgreich hinzugefügt.')
      dogname.value = ''
      name.value = ''
      ionRouter.navigate('/tabs/customer', 'back', 'push')
    }

    return {
      dogname,
      name,
      createCustomer,
    }
  },
})
</script>
