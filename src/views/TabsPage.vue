<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar color="light" slot="bottom">
        <ion-tab-button tab="course" :href="`${baseUrl}tabs/course`">
          <ion-icon :icon="calendar" />
          <ion-label>Kurse</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="customer" :href="`${baseUrl}tabs/customer`">
          <ion-icon :icon="people" />
          <ion-label>Kunden</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from '@ionic/vue'
import { calendar, people } from 'ionicons/icons'

export default defineComponent({
  name: 'TabsPage',
  components: {
    IonLabel,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  },
  setup() {
    const baseUrl = process.env.BASE_URL

    return {
      baseUrl,
      calendar,
      people,
    }
  },
})
</script>
