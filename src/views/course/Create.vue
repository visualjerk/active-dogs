<template>
  <PageLayout back-route="tabs/course" title="Kurs hinzufügen">
    <div class="ion-padding">
      <ion-item>
        <ion-label position="stacked">Name</ion-label>
        <ion-input v-model="name"></ion-input>
      </ion-item>
      <ion-button
        expand="block"
        @click="createCourse"
        class="ion-margin-vertical"
      >
        Kurs hinzufügen
      </ion-button>
      <ion-button
        expand="block"
        router-link="/tabs/course"
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

export default defineComponent({
  name: 'CoursesCreate',
  components: {
    IonButton,
    IonLabel,
    IonInput,
    IonItem,
    PageLayout,
  },
  setup() {
    const name = ref('')
    const ionRouter = useIonRouter()

    async function createCourse() {
      const { error } = await supabase.from('courses').insert([
        {
          name: unref(name),
        },
      ])
      if (error) {
        notify.error('Fehler beim Hinzufügen des Kurses.', error)
        return
      }
      notify.success('Kurs erfolgreich hinzugefügt.')
      name.value = ''
      ionRouter.navigate('/tabs/course', 'back', 'push')
    }

    return {
      name,
      createCourse,
    }
  },
})
</script>
