<template>
  <PageLayout
    back-route="/tabs/course"
    :loading="!course"
    :title="course?.name"
  >
    <template v-if="course">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Stunden</ion-card-title>
        </ion-card-header>
        <ion-card-content v-if="!course.course_dates.length">
          <ion-icon :icon="pawOutline"></ion-icon>
          Der Kurs hat noch keine Stunden ...
        </ion-card-content>
        <ion-list v-else>
          <ion-item
            v-for="course_date in course.course_dates"
            :key="course_date.id"
          >
            <ion-icon :icon="calendar" slot="start"></ion-icon>
            <ion-label>
              {{ new Date(course_date.date).toLocaleDateString() }}:
              {{ course_date.topics.name }}
            </ion-label>
            <ion-badge slot="end">
              {{ course_date.cards?.length }}
            </ion-badge>
          </ion-item>
        </ion-list>
        <ion-button
          :router-link="`/tabs/course/${course.id}/createcoursedate`"
          color="light"
          class="ion-margin"
        >
          Stunde hinzufügen
        </ion-button>
      </ion-card>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Teilnehmer</ion-card-title>
        </ion-card-header>
        <ion-card-content v-if="!cards.length">
          <ion-icon :icon="pawOutline"></ion-icon>
          Der Kurs ist noch leer ...
        </ion-card-content>
        <ion-list v-else>
          <ion-item v-for="card in cards" :key="card.id">
            <ion-icon :icon="person" slot="start"></ion-icon>
            <ion-label
              >{{ card.customers.dogname }} ({{
                card.customers.name
              }})</ion-label
            >
            <div slot="end" class="buttons">
              <ion-button
                :color="card.payed ? 'success' : 'light'"
                @click="togglePayed(card)"
              >
                <ion-icon
                  :icon="checkmarkCircle"
                  v-if="card.payed"
                  slot="start"
                ></ion-icon>
                <ion-icon :icon="closeCircle" v-else slot="start"></ion-icon>
                bezahlt
              </ion-button>
              <ion-badge>{{ card.course_dates?.length }} / 10</ion-badge>
            </div>
          </ion-item>
        </ion-list>
        <ion-button
          :router-link="`/tabs/course/${course.id}/editcustomer`"
          color="light"
          class="ion-margin"
        >
          Teilnehmer bearbeiten
        </ion-button>
      </ion-card>
      <ion-button
        expand="block"
        @click="deleteCourse"
        class="ion-margin"
        color="danger"
      >
        Kurs löschen
      </ion-button>
      <ion-button
        expand="block"
        router-link="/tabs/course"
        router-direction="back"
        color="light"
        class="ion-margin"
      >
        Zurück zur Übersicht
      </ion-button>
    </template>
  </PageLayout>
</template>

<script lang="ts">
import { computed, defineComponent, ref, unref } from 'vue'
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
  IonButton,
  IonBadge,
  useIonRouter,
  onIonViewWillEnter,
} from '@ionic/vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/api'
import {
  person,
  pawOutline,
  calendar,
  checkmarkCircle,
  closeCircle,
} from 'ionicons/icons'
import PageLayout from '@/components/PageLayout.vue'
import { notify } from '@/notify'

export default defineComponent({
  name: 'CourseDetail',
  components: {
    PageLayout,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonItem,
    IonLabel,
    IonList,
    IonIcon,
    IonBadge,
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
        cards (
          id,
          payed,
          customers (
            id,
            name,
            dogname
          ),
          course_dates (
            id
          )
        ),
        course_dates (
          id,
          date,
          topics (
            name
          ),
          cards (
            id
          )
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
        notify.error('Fehler beim Löschen des Kurses.', error)
        return
      }
      notify.success('Kurs erfolgreich gelöscht.')
      ionRouter.push('/tabs/course')
    }

    async function togglePayed(card: any) {
      const { error } = await supabase
        .from('cards')
        .update({
          payed: !card.payed,
        })
        .match({ id: card.id })
      if (error) {
        notify.error('Fehler beim Ändern des Bezahlstatus.', error)
        return
      }
      getCourse()
    }

    const cards = computed(() =>
      unref(course).cards.sort((a: any, b: any) => a.id - b.id)
    )

    return {
      course,
      cards,
      deleteCourse,
      togglePayed,
      person,
      pawOutline,
      calendar,
      checkmarkCircle,
      closeCircle,
    }
  },
})
</script>

<style scoped>
.buttons {
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>
