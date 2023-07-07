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
import PageLayout from '@/components/PageLayout.vue'
import CustomerInputList from '@/components/CustomerInputList.vue'
import { notify } from '@/notify'
import { alert } from '@/alert'
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
        notify.error('Fehler beim Laden der Kurse.', result.error)
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
        notify.error('Fehler beim Laden des Kunden.', result.error)
        return
      }
      customers.value = result.body
    }
    getCustomers()
    onIonViewWillEnter(getCustomers)

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
        const confirm = await alert.confirm(
          'Kursteilnehmer löschen?',
          'Du bist dabei Kursteilnehmer zu entfernen. Wenn ein Kursteilnehmer entfernt wird, werden dadurch auch seine Stundenzuweisungen gelöscht.'
        )
        if (!confirm) {
          return
        }

        // Get card ids
        const { error, body } = await supabase
          .from('cards')
          .select(`id`)
          .eq('course_id', courseId)
          .in('customer_id', removedCustomerIds)

        if (error || !body) {
          notify.error('Fehler beim Holen der Kurszuweisungen.', error)
          return
        }

        const cardIds = body.map(({ id }: any) => id)

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
      }

      const mapCustomerToCourse = (customerId: number) => ({
        customer_id: customerId,
        course_id: courseId,
      })

      if (newCustomerIds.length) {
        const { error } = await supabase
          .from('cards')
          .insert(newCustomerIds.map(mapCustomerToCourse))
        if (error) {
          notify.error('Fehler beim Speichern der Änderungen.', error)
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
