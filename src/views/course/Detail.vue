<template>
  <PageLayout
    back-route="/tabs/course"
    :loading="!course"
    :title="course?.name"
  >
    <template v-if="course">
      <ion-list>
        <ion-list-header>
          <ion-label>Stunden</ion-label>
        </ion-list-header>
        <ion-item v-if="!visibleCourseDates.length" lines="none">
          <ion-icon :icon="pawOutline" slot="start"></ion-icon>
          <ion-label>Der Kurs hat noch keine Stunden ...</ion-label>
        </ion-item>
        <template v-else>
          <ion-item
            v-for="course_date in visibleCourseDates"
            :key="course_date.id"
            button
            :router-link="`/tabs/course/${course.id}/coursedatedetail/${course_date.id}`"
          >
            <ion-label>
              {{ new Date(course_date.date).toLocaleDateString() }}:
              {{ course_date.topics.name }}
            </ion-label>
            <ion-badge slot="end">
              {{ course_date.cards?.length }}
            </ion-badge>
          </ion-item>
          <ion-button
            v-if="showCourseDateExpand || showAllCourseDates"
            @click="showAllCourseDates = !showAllCourseDates"
            class="ion-margin-horizontal ion-margin-top"
            size="small"
            fill="clear"
          >
            <template v-if="showAllCourseDates"> Weniger anzeigen </template>
            <template v-else> Alle anzeigen </template>
          </ion-button>
        </template>
      </ion-list>
      <ion-button
        :router-link="`/tabs/course/${course.id}/createcoursedate`"
        color="light"
        class="ion-margin"
        expand="block"
      >
        Stunde hinzufügen
      </ion-button>

      <ion-list>
        <ion-list-header>
          <ion-label>Teilnehmer</ion-label>
        </ion-list-header>
        <ion-item v-if="!cards.length" lines="none">
          <ion-icon :icon="pawOutline" slot="start"></ion-icon>
          <ion-label>Der Kurs ist noch leer ...</ion-label>
        </ion-item>
        <template v-else>
          <ion-item
            v-for="card in cards"
            :key="card.id"
            button
            :router-link="`/tabs/course/${course.id}/carddetail/${card.id}`"
          >
            <ion-label>
              {{ card.customers.dogname }} ({{ card.customers.name }})
            </ion-label>
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
                €
              </ion-button>
              <ion-badge>{{ card.course_dates?.length }} / 10</ion-badge>
            </div>
          </ion-item>
        </template>
      </ion-list>
      <ion-button
        :router-link="`/tabs/course/${course.id}/editcustomer`"
        color="light"
        class="ion-margin ion-margin-bottom-large"
        expand="block"
      >
        Teilnehmer bearbeiten
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
      <ion-button
        expand="block"
        @click="deleteCourse"
        class="ion-margin"
        color="danger"
      >
        Kurs löschen
      </ion-button>
    </template>
  </PageLayout>
</template>

<script lang="ts">
import { computed, defineComponent, ref, unref } from 'vue'
import {
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
  IonButton,
  IonListHeader,
  IonBadge,
  useIonRouter,
  onIonViewWillEnter,
} from '@ionic/vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/api'
import { pawOutline, checkmarkCircle, closeCircle } from 'ionicons/icons'
import PageLayout from '@/components/PageLayout.vue'
import { notify } from '@/notify'
import { alert } from '@/alert'
import { state } from '@/store'

export default defineComponent({
  name: 'CourseDetail',
  components: {
    PageLayout,
    IonButton,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonIcon,
    IonBadge,
  },
  setup() {
    const course = ref()
    const route = useRoute()
    const ionRouter = useIonRouter()
    const { id } = route.params

    const showAllCourseDates = ref(false)
    const courseDates = computed(() => unref(course)?.course_dates || [])
    const visibleCourseDates = computed(() => {
      if (unref(showAllCourseDates)) {
        return unref(courseDates)
      }
      return unref(courseDates).slice(0, 3)
    })
    const showCourseDateExpand = computed(
      () => unref(courseDates).length > unref(visibleCourseDates).length
    )

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
        .order('date', { foreignTable: 'course_dates', ascending: false })

      if (result.error) {
        return
      }
      course.value = result.body[0]
    }
    getCourse()
    onIonViewWillEnter(getCourse)

    async function deleteCourse() {
      if (state.offline) {
        notify.error('Fehler beim Löschen. Keine Internetverbindung.')
        return
      }
      const confirm = await alert.confirm(
        'Kurs wirklich löschen?',
        `Soll der Kurs "${unref(course).name}" endgültig gelöscht werden?`
      )
      if (!confirm) {
        return
      }

      const cardIds = unref(course).cards.map(({ id }: any) => id)
      const courseDateIds = unref(course).course_dates.map(({ id }: any) => id)

      // Delete card course dates
      if (cardIds.length) {
        const { error } = await supabase
          .from('card_course_date')
          .delete()
          .in('card_id', cardIds)
        if (error) {
          notify.error('Fehler beim Löschen der Stundenzuweisungen.', error)
          return
        }
      }

      // Delete cards
      if (cardIds.length) {
        const { error } = await supabase
          .from('cards')
          .delete()
          .in('id', cardIds)
        if (error) {
          notify.error('Fehler beim Löschen der Kundenzuweisungen.', error)
          return
        }
      }

      // Delete course dates
      if (courseDateIds.length) {
        const { error } = await supabase
          .from('course_dates')
          .delete()
          .in('id', courseDateIds)
        if (error) {
          notify.error('Fehler beim Löschen der Stunden.', error)
          return
        }
      }

      const { error } = await supabase.from('courses').delete().match({ id })
      if (error) {
        notify.error('Fehler beim Löschen des Kurses.', error)
        return
      }
      notify.success('Kurs erfolgreich gelöscht.')
      ionRouter.navigate('/tabs/course', 'back', 'push')
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
      visibleCourseDates,
      showAllCourseDates,
      showCourseDateExpand,
      cards,
      deleteCourse,
      togglePayed,
      pawOutline,
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

.ion-margin-bottom-large {
  margin-bottom: 3rem;
}
</style>
