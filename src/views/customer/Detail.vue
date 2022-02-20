<template>
  <PageLayout
    back-route="/tabs/customer"
    :loading="!customer"
    :title="`${customer?.dogname} (${customer?.name})`"
  >
    <template v-if="customer">
      <ion-button
        expand="block"
        @click="deleteCustomer"
        class="ion-margin"
        color="danger"
      >
        Kunde löschen
      </ion-button>
      <ion-button
        expand="block"
        router-link="/tabs/customer"
        router-direction="back"
        class="ion-margin"
        color="light"
      >
        Zurück zur Übersicht
      </ion-button>
    </template>
  </PageLayout>
</template>

<script lang="ts">
import { defineComponent, ref, unref } from 'vue'
import { IonButton, useIonRouter, onIonViewWillEnter } from '@ionic/vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/api'
import PageLayout from '@/components/PageLayout.vue'
import { notify } from '@/notify'
import { alert } from '@/alert'
import { state } from '@/store'

export default defineComponent({
  name: 'CustomerDetail',
  components: {
    PageLayout,
    IonButton,
  },
  setup() {
    const customer = ref()
    const route = useRoute()
    const ionRouter = useIonRouter()
    const { id } = route.params

    async function getCustomer() {
      const result = await supabase
        .from('customers')
        .select(
          `
          name,
          dogname,
          id,
          cards (
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
      customer.value = result.body[0]
    }
    getCustomer()
    onIonViewWillEnter(getCustomer)

    async function deleteCustomer() {
      if (state.offline) {
        notify.error('Fehler beim Löschen. Keine Internetverbindung.')
        return
      }
      const confirm = await alert.confirm(
        'Kunde wirklich löschen?',
        `Soll der Kunde "${unref(customer).dogname} (${
          unref(customer).name
        })" und seine Stundeninformationen endgültig gelöscht werden?`
      )
      if (!confirm) {
        return
      }

      const cardIds = unref(customer).cards.map(({ id }: any) => id)
      if (cardIds.length) {
        const { error } = await supabase
          .from('card_course_date')
          .delete()
          .in('card_id', cardIds)
        if (error) {
          notify.error('Fehler beim Löschen der Stundendaten.', error)
          return
        }
      }
      if (cardIds.length) {
        const { error } = await supabase
          .from('cards')
          .delete()
          .in('id', cardIds)
        if (error) {
          notify.error('Fehler beim Löschen der Kurszuweisungen.', error)
          return
        }
      }

      const { error } = await supabase.from('customers').delete().match({ id })
      if (error) {
        notify.error('Fehler beim Löschen des Kunden.', error)
        return
      }
      notify.success('Kunde erfolgreich gelöscht.')
      ionRouter.navigate('/tabs/customer', 'back', 'push')
    }

    return {
      customer,
      deleteCustomer,
    }
  },
})
</script>
