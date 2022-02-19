<template>
  <PageLayout
    :back-route="`/tabs/course/${course?.id}`"
    :loading="!course"
    :title="`Stunde anpassen - ${course?.name}`"
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
          <ion-input v-model="topicName" />
        </ion-item>
        <RadioInputList :list="topics" v-model="selectedTopicId" v-slot="topic">
          <ion-label>{{ topic.name }}</ion-label>
          <ion-badge slot="end">{{ knownByNumberOfCards(topic) }}</ion-badge>
        </RadioInputList>
        <ion-list-header>
          <ion-label color="dark">Teilnehmer</ion-label>
        </ion-list-header>
        <CustomerInputList
          :list="course.cards"
          v-model="selectedCardIds"
          v-slot="card"
        >
          <ion-label>
            {{ card.customers.dogname }} ({{ card.customers.name }})
          </ion-label>
          <ion-icon
            slot="end"
            v-if="knowsSelectedTopic(card)"
            :icon="flashOutline"
          ></ion-icon>
        </CustomerInputList>
        <ion-button expand="block" @click="updateCourseDate" class="ion-margin">
          Änderungen speichern
        </ion-button>
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
import { defineComponent, Ref, ref, unref, watch } from 'vue'
import {
  IonButton,
  IonListHeader,
  IonLabel,
  IonList,
  IonItem,
  IonInput,
  IonIcon,
  IonBadge,
  useIonRouter,
  onIonViewWillEnter,
} from '@ionic/vue'
import { supabase } from '@/api'
import PageLayout from '@/components/PageLayout.vue'
import CustomerInputList from '@/components/CustomerInputList.vue'
import RadioInputList from '@/components/RadioInputList.vue'
import { notify } from '@/notify'
import { useRoute } from 'vue-router'
import { flashOutline } from 'ionicons/icons'
import { state } from '@/store'

export default defineComponent({
  name: 'CourseCourseDateDetail',
  components: {
    IonButton,
    IonLabel,
    IonList,
    IonItem,
    IonIcon,
    PageLayout,
    IonInput,
    IonBadge,
    IonListHeader,
    CustomerInputList,
    RadioInputList,
  },
  setup() {
    const date = ref()
    const topicName = ref('')
    const topics: Ref<any[]> = ref([])
    const selectedTopicId = ref(null)
    const selectedCardIds: Ref<number[]> = ref([])
    let oldCardIds: number[] = []

    watch(topicName, () => {
      if (unref(topicName)) {
        selectedTopicId.value = null
      }
    })

    const courseDate = ref()
    const course = ref()
    const route = useRoute()
    const ionRouter = useIonRouter()
    const { courseDateId } = route.params

    async function getCourseDate() {
      const result = await supabase
        .from('course_dates')
        .select(
          `
          date,
          id,
          topics (
            id,
            name
          ),
          courses (
            name,
            id,
            cards (
              id,
              customers (
                id,
                name,
                dogname
              ),
              course_dates (
                topics (
                  id
                )
              )
            )
          ),
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
          id: courseDateId,
        })
      if (result.error) {
        return
      }
      courseDate.value = result.body[0]
      course.value = unref(courseDate).courses
      selectedTopicId.value = unref(courseDate).topics.id
      selectedCardIds.value = unref(courseDate).cards.map(({ id }: any) => id)
      oldCardIds = unref(selectedCardIds)
      date.value = new Date(unref(courseDate).date).toISOString().split('T')[0]
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
      getCourseDate()
      getTopics()
    }
    init()
    onIonViewWillEnter(init)

    async function updateCourseDate() {
      if (state.offline) {
        notify.error('Fehler beim Speichern. Keine Internetverbindung.')
        return
      }
      let topicId = unref(selectedTopicId)
      if (topicId == null) {
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
        topicId = topicData[0].id
      }

      const { error: courseDateError } = await supabase
        .from('course_dates')
        .update([
          {
            date: unref(date),
            topic_id: topicId,
          },
        ])
        .match({
          id: courseDateId,
        })
      if (courseDateError) {
        notify.error('Fehler beim Speichern der Stunde.', courseDateError)
        return
      }

      const newCardIds = unref(selectedCardIds).filter(
        (id) => !oldCardIds.includes(id)
      )
      const deleteCardIds = oldCardIds.filter(
        (id) => !unref(selectedCardIds).includes(id)
      )

      if (deleteCardIds.length) {
        const { error } = await supabase
          .from('card_course_date')
          .delete()
          .in('id', deleteCardIds)
        if (error) {
          notify.error('Fehler beim Hinzufügen der Teilnehmer.', error)
          return
        }
      }

      if (newCardIds.length) {
        const mapCardToCourseDate = (cardId: number) => ({
          card_id: cardId,
          course_date_id: courseDateId,
        })

        const { error } = await supabase
          .from('card_course_date')
          .insert(newCardIds.map(mapCardToCourseDate))
        if (error) {
          notify.error('Fehler beim Hinzufügen der Teilnehmer.', error)
          return
        }
      }

      notify.success('Kurs erfolgreich gespeichert.')
      ionRouter.navigate(`/tabs/course/${unref(course).id}`, 'back', 'push')
    }

    function knowsTopic(card: any, topicId: number | null): boolean {
      return card.course_dates.some(
        (courseDate: any) => courseDate.topics.id === topicId
      )
    }

    function knowsSelectedTopic(card: any) {
      return knowsTopic(card, unref(selectedTopicId))
    }

    function knownByNumberOfCards(topic: any) {
      let count = 0
      unref(course).cards.forEach((card: any) => {
        if (knowsTopic(card, topic.id)) {
          count++
        }
      })
      return count
    }

    return {
      course,
      topics,
      selectedTopicId,
      date,
      topicName,
      selectedCardIds,
      updateCourseDate,
      knowsSelectedTopic,
      knownByNumberOfCards,
      flashOutline,
    }
  },
})
</script>
