<template>
  <PageLayout
    :back-route="`/tabs/course/${course?.id}`"
    :loading="!course"
    :title="`${course?.name} - Stunde hinzufügen`"
  >
    <template v-if="course">
      <div class="ion-padding">
        <ion-item>
          <ion-label position="stacked">Datum</ion-label>
          <ion-input v-model="date" type="date" required />
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Thema</ion-label>
          <ion-input v-model="topicName" required />
        </ion-item>
        <ion-item-group>
          <ion-item-divider>
            <ion-label color="dark">Teilnehmer</ion-label>
          </ion-item-divider>
          <CustomerInputList
            :customers="course.customers"
            v-model="selectedCustomerIds"
          ></CustomerInputList>
        </ion-item-group>
        <ion-button
          expand="block"
          @click="createCourseDate"
          class="ion-margin-vertical"
        >
          Stunde hinzufügen
        </ion-button>
        <ion-button
          expand="block"
          :router-link="`/tabs/course/${course.id}`"
          router-direction="back"
          color="light"
          class="ion-margin-vertical"
        >
          Abbrechen
        </ion-button>
      </div>
    </template>
  </PageLayout>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, unref } from 'vue'
import {
  IonButton,
  IonItemGroup,
  IonItemDivider,
  IonLabel,
  IonItem,
  IonInput,
  useIonRouter,
  onIonViewWillEnter,
} from '@ionic/vue'
import { supabase } from '@/api'
import PageLayout from '@/components/PageLayout.vue'
import CustomerInputList from '@/components/CustomerInputList.vue'
import { notify } from '@/notify'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'CourseCreateCourseDate',
  components: {
    IonButton,
    IonLabel,
    IonItem,
    PageLayout,
    IonInput,
    IonItemGroup,
    IonItemDivider,
    CustomerInputList,
  },
  setup() {
    const dateDefault = new Date().toISOString().split('T')[0]
    const date = ref(dateDefault)
    const topicName = ref('')
    const selectedCustomerIds: Ref<number[]> = ref([])

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
          customers (
            id,
            name,
            dogname
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
    function init() {
      date.value = dateDefault
      topicName.value = ''
      selectedCustomerIds.value = []
      getCourse()
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

      const mapCustomerToCourseDate = (customerId: number) => ({
        customer_id: customerId,
        course_date_id: courseDateData[0].id,
      })

      const { error } = await supabase
        .from('customer_course_date')
        .insert(unref(selectedCustomerIds).map(mapCustomerToCourseDate))
      if (error) {
        notify.error('Fehler beim Hinzufügen der Teilnehmer.', error)
        return
      }

      notify.success('Kurs erfolgreich hinzugefügt.')
      ionRouter.push(`/tabs/course/${unref(course).id}`)
    }

    return {
      course,
      date,
      topicName,
      selectedCustomerIds,
      createCourseDate,
    }
  },
})
</script>
