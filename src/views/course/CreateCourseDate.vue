<template>
  <PageLayout
    :back-route="`/tabs/course/${course?.id}`"
    :loading="!course"
    :title="`${course?.name} - Stunde hinzufügen`"
  >
    <template v-if="course">
      <ion-list>
        <ion-item>
          <ion-label position="stacked">Datum</ion-label>
          <ion-input v-model="date" type="date" required />
        </ion-item>
        <ion-list-header>
          <ion-label color="dark">Thema</ion-label>
        </ion-list-header>
        <ion-item>
          <ion-label position="stacked">Neues Thema</ion-label>
          <ion-input v-model="topicName" required />
        </ion-item>
        <RadioInputList :list="topics" v-model="selectedTopicId">
        </RadioInputList>
        <ion-list-header>
          <ion-label color="dark">Teilnehmer</ion-label>
        </ion-list-header>
        <CustomerInputList
          :list="course.cards"
          v-model="selectedCardIds"
          v-slot="card"
        >
          {{ card.customers.dogname }} ({{ card.customers.name }})
        </CustomerInputList>
        <ion-button expand="block" @click="createCourseDate" class="ion-margin">
          Stunde hinzufügen
        </ion-button>
        <ion-button
          expand="block"
          :router-link="`/tabs/course/${course.id}`"
          router-direction="back"
          color="light"
          class="ion-margin"
        >
          Abbrechen
        </ion-button>
      </ion-list>
    </template>
  </PageLayout>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, unref } from 'vue'
import {
  IonButton,
  IonListHeader,
  IonLabel,
  IonList,
  IonItem,
  IonInput,
  useIonRouter,
  onIonViewWillEnter,
} from '@ionic/vue'
import { supabase } from '@/api'
import PageLayout from '@/components/PageLayout.vue'
import CustomerInputList from '@/components/CustomerInputList.vue'
import RadioInputList from '@/components/RadioInputList.vue'
import { notify } from '@/notify'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'CourseCreateCourseDate',
  components: {
    IonButton,
    IonLabel,
    IonList,
    IonItem,
    PageLayout,
    IonInput,
    IonListHeader,
    CustomerInputList,
    RadioInputList,
  },
  setup() {
    const dateDefault = new Date().toISOString().split('T')[0]
    const date = ref(dateDefault)
    const topicName = ref('')
    const topics: Ref<any[]> = ref([])
    const selectedTopicId = ref()
    const selectedCardIds: Ref<number[]> = ref([])

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
            customers (
              id,
              name,
              dogname
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

    async function getTopics() {
      const result = await supabase.from('topics').select(
        `
          name,
          id
        `
      )
      if (result.error) {
        return
      }
      topics.value = result.body
    }

    function init() {
      date.value = dateDefault
      topicName.value = ''
      selectedTopicId.value = null
      selectedCardIds.value = []
      getCourse()
      getTopics()
    }
    init()
    onIonViewWillEnter(init)

    async function createCourseDate() {
      const { error: topicError, data: topicData } = await supabase
        .from('topics')
        .insert([
          {
            name: unref(topicName),
          },
        ])
      if (topicError || !topicData?.length) {
        notify.error('Fehler beim Erstellen des Themas', topicError)
        return
      }

      const { error: courseDateError, data: courseDateData } = await supabase
        .from('course_dates')
        .insert([
          {
            date: unref(date),
            course_id: unref(course).id,
            topic_id: topicData[0].id,
          },
        ])
      if (courseDateError || !courseDateData?.length) {
        notify.error('Fehler beim Erstellen der Stunde.', courseDateError)
        return
      }

      const mapCardToCourseDate = (cardId: number) => ({
        card_id: cardId,
        course_date_id: courseDateData[0].id,
      })

      const { error } = await supabase
        .from('card_course_date')
        .insert(unref(selectedCardIds).map(mapCardToCourseDate))
      if (error) {
        notify.error('Fehler beim Hinzufügen der Teilnehmer.', error)
        return
      }

      notify.success('Kurs erfolgreich hinzugefügt.')
      ionRouter.navigate(`/tabs/course/${unref(course).id}`, 'back', 'push')
    }

    return {
      course,
      topics,
      selectedTopicId,
      date,
      topicName,
      selectedCardIds,
      createCourseDate,
    }
  },
})
</script>
