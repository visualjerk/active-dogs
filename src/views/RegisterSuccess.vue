<template>
  <ion-page>
    <div class="register">
      <ion-card class="card">
        <ion-card-header>Registrierung Erfolgreich</ion-card-header>
        <ion-card-content>
          <ion-text color="success">
            Bitte überprüfe dein Email Postfach und klicke den gesendeten Link,
            um die Registrierung abzuschließen.
          </ion-text>
          <ion-button
            expand="block"
            router-link="login"
            router-direction="back"
            color="light"
          >
            Zurück zum Login
          </ion-button>
        </ion-card-content>
      </ion-card>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  IonText,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonButton,
  IonPage,
} from '@ionic/vue'

export default defineComponent({
  name: 'RegisterView',
  components: {
    IonText,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonButton,
    IonPage,
  },
})
</script>

<style scoped>
.register {
  display: grid;
  height: 100%;
  place-items: center;
}

.card {
  max-width: 24rem;
  width: 100%;
}

.button {
  margin: 1rem 0;
}
</style>
