<template>
  <ion-page>
    <ion-loading v-if="loading"></ion-loading>
    <template v-else>
      <ion-header>
        <ion-toolbar color="dark">
          <ion-buttons slot="start">
            <ion-back-button :default-href="backRoute"></ion-back-button>
          </ion-buttons>
          <ion-title>{{ title }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-back-button></ion-back-button>
            </ion-buttons>
            <ion-title>
              {{ title }}
            </ion-title>
          </ion-toolbar>
        </ion-header>
        <slot />
      </ion-content>
    </template>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  IonPage,
  IonButtons,
  IonBackButton,
  IonLoading,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/vue'

export default defineComponent({
  name: 'CourseDetail',
  components: {
    IonButtons,
    IonBackButton,
    IonHeader,
    IonLoading,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
  },
  props: {
    backRoute: {
      type: String,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
  },
})
</script>
