<template>
  <PageLayout title="Kurse">
    <ion-button
      router-link="/tabs/course/create"
      class="ion-margin"
      expand="block"
    >
      Neuen Kurs hinzufügen
    </ion-button>
    <ion-card
      v-for="{ name, id, cards } in courses"
      :key="id"
      button
      :router-link="`/tabs/course/${id}`"
    >
      <ion-card-header>
        <ion-card-title>{{ name }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>{{ cards.length }} Teilnehmer</ion-card-content>
    </ion-card>
  </PageLayout>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  onIonViewWillEnter,
} from '@ionic/vue'
import { supabase } from '@/api'
import PageLayout from '@/components/PageLayout.vue'
import { notify } from '@/notify'

export default defineComponent({
  name: 'CourseOverview',
  components: {
    PageLayout,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  },
  setup() {
    const courses: Ref<any> = ref([])

    async function getCourses() {
      const result = await supabase
        .from('courses')
        .select(
          `
          name,
          id,
          cards (
            id
          )
        `
        )
        .order('name')
      if (result.error) {
        notify.error('Fehler beim Laden der Kurse.', result.error)
        return
      }
      courses.value = result.body
    }

    getCourses()
    onIonViewWillEnter(getCourses)

    return {
      courses,
    }
  },
})
</script>
