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
        <ion-card>
          <ion-card-header>
            <ion-card-title>Stunden</ion-card-title>
            <ion-card-content> Stundentage </ion-card-content>
          </ion-card-header>
        </ion-card>
        <ion-card>
          <ion-card-header>
            <ion-card-title>Teilnehmer</ion-card-title>
          </ion-card-header>
          <ion-card-content v-if="!course.customers.length">
            <ion-icon :icon="pawOutline"></ion-icon>
            Der Kurs ist noch leer ...
          </ion-card-content>
          <ion-list v-else>
            <ion-item v-for="customer in course.customers" :key="customer.id">
              <ion-icon :icon="person" slot="start"></ion-icon>
              <ion-label
                >{{ customer.dogname }} ({{ customer.name }})</ion-label
              >
            </ion-item>
          </ion-list>
          <ion-button
            :router-link="`/tabs/course/${course.id}/editcustomer`"
            color="light"
          >
            Teilnehmer bearbeiten
          </ion-button>
        </ion-card>
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
          router-link="/tabs/course"
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
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
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
import { person, pawOutline } from 'ionicons/icons'

export default defineComponent({
  name: 'CourseDetail',
  components: {
    IonHeader,
    IonLoading,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonList,
    IonIcon,
  },
  setup() {
    const course = ref()
    const route = useRoute()
    const ionRouter = useIonRouter()
    const { id } = route.params

    async function getCourse() {
      const result = await supabase
        .from('courses')
        .select(
          `
        name,
        id,
        customers (
          id,
          name,
          dogname
        )
      `
        )
        .match({
          id,
        })

      if (result.error) {
        return
      }
      course.value = result.body[0]
    }
    getCourse()
    onIonViewWillEnter(getCourse)

    async function deleteCourse() {
      const { error } = await supabase.from('courses').delete().match({ id })
      if (error) {
        const toast = await toastController.create({
          message: 'Fehler beim Löschen des Kurses.',
          duration: 3000,
          color: 'danger',
        })
        toast.present()
        console.error(error)
        return
      }
      const toast = await toastController.create({
        message: 'Kurs erfolgreich gelöscht.',
        duration: 3000,
      })
      toast.present()
      ionRouter.push('/tabs/course')
    }

    return {
      course,
      deleteCourse,
      person,
      pawOutline,
    }
  },
})
</script>

<style scoped>
.button {
  margin: 1rem;
}
</style>
