<template>
  <ion-page>
    <ion-router-outlet></ion-router-outlet>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonPage, IonRouterOutlet } from '@ionic/vue'

export default defineComponent({
  name: 'CourseIndex',
  components: {
    IonPage,
    IonRouterOutlet,
  },
})
</script>
