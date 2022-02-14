<template>
  <ion-page>
    <ion-loading v-if="!course"></ion-loading>
    <template v-else>
      <ion-header>
        <ion-toolbar>
          <ion-title>{{ course.name }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title>
              {{ course.name }}
            </ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-button
          expand="block"
          @click="deleteCourse"
          class="button"
          color="danger"
        >
          Kurs löschen
        </ion-button>
        <ion-button
          expand="block"
          router-link="/tabs/courses"
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
} from '@ionic/vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/api'

export default defineComponent({
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
    const course = ref()
    const route = useRoute()
    const ionRouter = useIonRouter()
    const { id } = route.params

    async function getCourse() {
      const result = await supabase.from('courses').select(`name, id`).match({
        id,
      })
      if (result.error) {
        return
      }
      course.value = result.body[0]
    }
    getCourse()

    async function deleteCourse() {
      const { error } = await supabase.from('courses').delete().match({ id })
      if (error) {
        const toast = await toastController.create({
          message: 'Fehler beim Löschen des Kurses.',
          duration: 3000,
          color: 'danger',
        })
        toast.present()
        console.log(error)
        return
      }
      const toast = await toastController.create({
        message: 'Kurs erfolgreich gelöscht.',
        duration: 3000,
        color: 'success',
      })
      toast.present()
      ionRouter.push('/tabs/courses')
    }

    return {
      course,
      deleteCourse,
    }
  },
})
</script>

<style scoped>
.button {
  margin: 1rem;
}
</style>
