<template>
  <PageLayout
    :back-route="`/tabs/course/${course?.id}`"
    :loading="!course"
    :title="`${course?.name} - Teilnehmer`"
  >
    <template v-if="course">
      <CustomerInputList
        :list="customers"
        v-model="selectedCustomerIds"
      ></CustomerInputList>
      <ion-button expand="block" @click="saveCustomers" class="ion-margin">
        Änderungen speichern
      </ion-button>
      <ion-button
        class="ion-margin"
        expand="block"
        :router-link="`/tabs/course/${course.id}`"
        router-direction="back"
        color="light"
      >
        Zurück zum Kurs
      </ion-button>
    </template>
  </PageLayout>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, unref } from 'vue'
import { IonButton, useIonRouter, onIonViewWillEnter } from '@ionic/vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/api'
import { PostgrestError } from '@supabase/postgrest-js'
import PageLayout from '@/components/PageLayout.vue'
import CustomerInputList from '@/components/CustomerInputList.vue'
import { notify } from '@/notify'
import { state } from '@/store'

export default defineComponent({
  name: 'CourseEditCustomer',
  components: {
    IonButton,
    PageLayout,
    CustomerInputList,
  },
  setup() {
    const course = ref()
    const route = useRoute()
    const ionRouter = useIonRouter()
    const { id } = route.params
    const selectedCustomerIds: Ref<number[]> = ref([])

    async function getCourse() {
      const result = await supabase
        .from('courses')
        .select(
          `
          name,
          id,
          customers (
            id
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
      selectedCustomerIds.value = course.value.customers.map(
        ({ id }: any) => id
      )
    }
    getCourse()
    onIonViewWillEnter(getCourse)

    const customers: Ref<any> = ref([])

    async function getCustomers() {
      const result = await supabase
        .from('customers')
        .select(`name, dogname, id`)
      if (result.error) {
        return
      }
      customers.value = result.body
    }
    getCustomers()
    onIonViewWillEnter(getCustomers)

    async function handleError(error: PostgrestError) {
      notify.error('Fehler beim Speichern der Änderungen.', error)
    }

    async function saveCustomers() {
      if (state.offline) {
        notify.error('Fehler beim Speichern. Keine Internetverbindung.')
        return
      }
      const customerIds = selectedCustomerIds.value
      const courseId = course.value.id
      const oldCustomerIds = unref(course).customers.map(({ id }: any) => id)
      const removedCustomerIds = oldCustomerIds.filter(
        (id: number) => !customerIds.includes(id)
      )
      const newCustomerIds = customerIds.filter(
        (id: number) => !oldCustomerIds.includes(id)
      )

      if (removedCustomerIds.length) {
        const result = await supabase
          .from('cards')
          .delete()
          .eq('course_id', courseId)
          .in('customer_id', removedCustomerIds)
        if (result.error) {
          handleError(result.error)
          return
        }
      }

      const mapCustomerToCourse = (customerId: number) => ({
        customer_id: customerId,
        course_id: courseId,
      })

      if (newCustomerIds.length) {
        const { error: error2 } = await supabase
          .from('cards')
          .insert(newCustomerIds.map(mapCustomerToCourse))
        if (error2) {
          handleError(error2)
          return
        }
      }

      notify.success('Teilnehmer erfolgreich gespeichert.')
      ionRouter.navigate(`/tabs/course/${course.value.id}`, 'back', 'push')
    }

    return {
      course,
      customers,
      selectedCustomerIds,
      saveCustomers,
    }
  },
})
</script>
