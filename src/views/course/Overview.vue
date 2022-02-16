<template>
  <PageLayout title="Kurse">
    <ion-button router-link="/tabs/course/create" class="ion-margin">
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
  name: 'CourseOverview',
  components: {
    PageLayout,
    IonButton,
    IonCard,
    IonCardContent,
  },
  setup() {
    const courses: Ref<any> = ref([])

    async function getCourses() {
      const result = await supabase
        .from('courses')
        .select(`name, id`)
        .order('name')
      if (result.error) {
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
