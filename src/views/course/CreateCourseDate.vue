<template>
  <PageLayout
    :back-route="`/tabs/course/${course?.id}`"
    :loading="!course"
    :title="`Stunde hinzufügen - ${course?.name}`"
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
        <RadioInputList
          :list="sortedTopics"
          v-model="selectedTopicId"
          v-slot="topic"
        >
          <ion-label>{{ topic.name }}</ion-label>
          <ion-badge slot="end">{{ topic.cardsVisited }}</ion-badge>
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
            v-if="visitedSelectedTopic(card)"
            :icon="flashOutline"
          ></ion-icon>
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
import { computed, defineComponent, Ref, ref, unref, watch } from 'vue'
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
  name: 'CourseCreateCourseDate',
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
    const dateDefault = new Date().toISOString().split('T')[0]
    const date = ref(dateDefault)
    const topicName = ref('')
    const topics: Ref<any[]> = ref([])
    const selectedTopicId = ref(null)
    const selectedCardIds: Ref<number[]> = ref([])

    watch(topicName, () => {
      if (unref(topicName)) {
        selectedTopicId.value = null
      }
    })

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
            ),
            course_dates (
              topics (
                id
              )
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
      if (state.offline) {
        notify.error('Fehler beim Erstellen. Keine Internetverbindung.')
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

      const { error: courseDateError, data: courseDateData } = await supabase
        .from('course_dates')
        .insert([
          {
            date: unref(date),
            course_id: unref(course).id,
            topic_id: topicId,
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

    function knowsTopic(card: any, topicId: number | null): boolean {
      return card.course_dates.some(
        (courseDate: any) => courseDate.topics.id === topicId
      )
    }

    function visitedSelectedTopic(card: any) {
      return knowsTopic(card, unref(selectedTopicId))
    }

    function getVisitedCards(topic: any) {
      let count = 0
      unref(course).cards.forEach((card: any) => {
        if (knowsTopic(card, topic.id)) {
          count++
        }
      })
      return count
    }

    const sortedTopics = computed(() => {
      return unref(topics)
        .map((topic) => ({
          ...topic,
          cardsVisited: getVisitedCards(topic),
        }))
        .sort((a, b) => a.cardsVisited - b.cardsVisited)
    })

    return {
      course,
      sortedTopics,
      selectedTopicId,
      date,
      topicName,
      selectedCardIds,
      createCourseDate,
      visitedSelectedTopic,
      flashOutline,
    }
  },
})
</script>
