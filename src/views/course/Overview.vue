<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Kurse</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Kurse</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button router-link="/tabs/course/create" class="button">
        Neuen Kurs hinzufügen
      </ion-button>
      <ion-card
        v-for="{ name, id } in courses"
        :key="id"
        button
        :router-link="`/tabs/course/${id}`"
      >
        <ion-card-content> {{ name }} </ion-card-content>
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
} from '@ionic/vue'
import { supabase } from '@/api'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'CourseOverview',
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
    const courses: Ref<any> = ref([])

    async function getCourses() {
      const result = await supabase.from('courses').select(`name, id`)
      if (result.error) {
        return
      }
      courses.value = result.body
    }

    getCourses()

    useRouter().beforeResolve(() => {
      getCourses()
    })

    return {
      courses,
    }
  },
})
</script>

<style scoped>
.button {
  margin: 1rem;
}
</style>
