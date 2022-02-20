<template>
  <PageLayout
    :back-route="`/tabs/course/${course?.id}`"
    :loading="!card"
    :title="`${customer?.dogname} (${customer?.name})`"
  >
    <template v-if="course && card">
      <ion-list>
        <ion-item lines="none">
          <ion-label>Bezahlt</ion-label>
          <ion-button
            slot="end"
            :color="card.payed ? 'success' : 'light'"
            @click="togglePayed(card)"
          >
            <ion-icon
              :icon="checkmarkCircle"
              v-if="card.payed"
              slot="start"
            ></ion-icon>
            <ion-icon :icon="closeCircle" v-else slot="start"></ion-icon>
            <template v-if="card.payed">ja</template>
            <template v-else>nein</template>
          </ion-button>
        </ion-item>
        <ion-item lines="none">
          <ion-label>Stundenanzahl</ion-label>
          <ion-badge slot="end">{{ card.course_dates?.length }}/10</ion-badge>
        </ion-item>
        <ion-list-header>
          <ion-label>Besuchte Stunden</ion-label>
        </ion-list-header>
        <ion-item v-if="!card.course_dates.length" lines="none">
          <ion-icon :icon="pawOutline" slot="start"></ion-icon>
          <ion-label>Der Teilnehmer hat noch keine Stunden ...</ion-label>
        </ion-item>
        <template v-else>
          <ion-item
            v-for="course_date in card.course_dates"
            :key="course_date.id"
            button
            :router-link="`/tabs/course/${course.id}/coursedatedetail/${course_date.id}`"
          >
            <ion-label>
              {{ new Date(course_date.date).toLocaleDateString() }}:
              {{ course_date.topics.name }}
            </ion-label>
          </ion-item>
        </template>
        <ion-button
          expand="block"
          :router-link="`/tabs/course/${course.id}`"
          router-direction="back"
          color="light"
          class="ion-margin"
        >
          Zurück zum Kurs
        </ion-button>
      </ion-list>
    </template>
  </PageLayout>
</template>

<script lang="ts">
import { defineComponent, ref, unref } from 'vue'
import {
  IonButton,
  IonListHeader,
  IonLabel,
  IonList,
  IonItem,
  IonIcon,
  IonBadge,
  onIonViewWillEnter,
} from '@ionic/vue'
import { supabase } from '@/api'
import PageLayout from '@/components/PageLayout.vue'
import { useRoute } from 'vue-router'
import { pawOutline, checkmarkCircle, closeCircle } from 'ionicons/icons'
import { notify } from '@/notify'

export default defineComponent({
  name: 'CourseCardDetail',
  components: {
    IonButton,
    IonLabel,
    IonList,
    IonItem,
    IonIcon,
    PageLayout,
    IonBadge,
    IonListHeader,
  },
  setup() {
    const card = ref()
    const customer = ref()
    const course = ref()
    const route = useRoute()
    const { cardId } = route.params

    async function getCard() {
      const result = await supabase
        .from('cards')
        .select(
          `
          id,
          payed,
          courses (
            id,
            name
          ),
          course_dates (
            id,
            date,
            topics (
              id,
              name
            )
          ),
          customers (
            id,
            name,
            dogname
          )
        `
        )
        .match({
          id: cardId,
        })
      if (result.error) {
        return
      }
      card.value = result.body[0]
      course.value = unref(card).courses
      customer.value = unref(card).customers
    }

    function init() {
      getCard()
    }
    init()
    onIonViewWillEnter(init)

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
      getCard()
    }

    return {
      card,
      course,
      customer,
      pawOutline,
      checkmarkCircle,
      closeCircle,
      togglePayed,
    }
  },
})
</script>
