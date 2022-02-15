<template>
  <ion-page>
    <ion-loading v-if="!course"></ion-loading>
    <template v-else>
      <ion-header>
        <ion-toolbar>
          <ion-title>{{ course.name }} - Teilnehmer</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title>{{ course.name }} - Teilnehmer</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-list>
          <ion-item v-for="customer in customers" :key="customer.id">
            <ion-label>{{ customer.dogname }} ({{ customer.name }})</ion-label>
            <ion-checkbox
              slot="end"
              @update:modelValue="toggleCustomer(customer.id)"
              :modelValue="isCustomerChecked(customer.id)"
            >
            </ion-checkbox>
          </ion-item>
        </ion-list>
        <ion-button expand="block" @click="saveCustomers">
          Änderungen speichern
        </ion-button>
        <ion-button
          expand="block"
          :router-link="`/tabs/course/${course.id}`"
          router-direction="back"
          color="light"
        >
          Zurück zum Kurs
        </ion-button>
      </ion-content>
    </template>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import {
  IonPage,
  IonLoading,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCheckbox,
  IonItem,
  IonLabel,
  IonList,
  toastController,
  useIonRouter,
  onIonViewWillEnter,
} from '@ionic/vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/api'
import { PostgrestError } from '@supabase/postgrest-js'

export default defineComponent({
  name: 'CourseEditCustomer',
  components: {
    IonHeader,
    IonLoading,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonButton,
    IonCheckbox,
    IonItem,
    IonLabel,
    IonList,
  },
  setup() {
    const course = ref()
    const route = useRoute()
    const ionRouter = useIonRouter()
    const { id } = route.params
    const selectedCustomerIds: Ref<Set<number>> = ref(new Set())

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
      selectedCustomerIds.value = new Set(
        course.value.customers.map(({ id }: any) => id)
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

    function isCustomerChecked(id: number) {
      return selectedCustomerIds.value.has(id)
    }

    function toggleCustomer(id: number) {
      if (isCustomerChecked(id)) {
        selectedCustomerIds.value.delete(id)
      } else {
        selectedCustomerIds.value.add(id)
      }
    }

    async function handleError(error: PostgrestError) {
      const toast = await toastController.create({
        message: `Fehler beim Speichern der Änderungen: ${error.message}`,
        duration: 5000,
        color: 'danger',
      })
      toast.present()
      console.error(error)
    }

    async function saveCustomers() {
      const customerIds = Array.from(selectedCustomerIds.value.values())
      const courseId = course.value.id

      if (course.value.customers.length) {
        const result = await supabase
          .from('customers')
          .update({ course_id: null })
          .eq('course_id', courseId)
        if (result.error) {
          handleError(result.error)
          return
        }
      }

      if (customerIds.length) {
        const { error: error2 } = await supabase
          .from('customers')
          .update({ course_id: courseId })
          .in('id', customerIds)
        if (error2) {
          handleError(error2)
          return
        }
      }

      const toast = await toastController.create({
        message: 'Teilnehmer erfolgreich gespeichert.',
        duration: 3000,
      })
      toast.present()
      ionRouter.push(`/tabs/course/${course.value.id}`)
    }

    return {
      course,
      customers,
      isCustomerChecked,
      toggleCustomer,
      saveCustomers,
    }
  },
})
</script>

<style scoped>
.button {
  margin: 1rem;
}
</style>
