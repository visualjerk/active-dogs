<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Kurs hinzufügen</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title>Kurs hinzufügen</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="content">
        <ion-item>
          <ion-label position="stacked">Name</ion-label>
          <ion-input v-model="name"></ion-input>
        </ion-item>
        <ion-button expand="block" class="button" @click="createCourse">
          Kurs hinzufügen
        </ion-button>
        <ion-button
          expand="block"
          router-link="/tabs/course"
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
  name: 'CoursesCreate',
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
    const name = ref('')
    const ionRouter = useIonRouter()

    async function createCourse() {
      console.log(supabase.auth.user())
      const { error } = await supabase.from('courses').insert([
        {
          name: unref(name),
        },
      ])
      if (error) {
        const toast = await toastController.create({
          message: 'Fehler beim Hinzufügen des Kurses.',
          duration: 3000,
          color: 'danger',
        })
        toast.present()
        console.log(error)
        return
      }
      const toast = await toastController.create({
        message: 'Kurs erfolgreich hinzugefügt.',
        duration: 3000,
        color: 'success',
      })
      toast.present()
      name.value = ''
      ionRouter.push('/tabs/course')
    }

    return {
      name,
      createCourse,
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
