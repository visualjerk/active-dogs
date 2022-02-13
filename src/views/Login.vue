<template>
  <ion-page>
    <div class="login">
      <ion-card class="card">
        <ion-card-header>Active Dogs Login</ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label position="stacked">Email</ion-label>
            <ion-input v-model="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Passwort</ion-label>
            <ion-input type="password" v-model="password"></ion-input>
          </ion-item>
          <ion-button expand="block" class="button" @click="login">
            Einloggen
          </ion-button>
          <ion-button
            expand="block"
            router-link="register"
            router-direction="forward"
            color="light"
          >
            Neuen Account registrieren
          </ion-button>
        </ion-card-content>
      </ion-card>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, ref, unref } from 'vue'
import {
  IonLabel,
  IonInput,
  IonItem,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonButton,
  IonPage,
  useIonRouter,
  toastController,
} from '@ionic/vue'
import { supabase } from '@/api'

export default defineComponent({
  name: 'LoginView',
  components: {
    IonLabel,
    IonInput,
    IonItem,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonButton,
    IonPage,
  },
  setup() {
    const email = ref('')
    const password = ref('')
    const ionRouter = useIonRouter()

    async function login() {
      const { error } = await supabase.auth.signIn({
        email: unref(email),
        password: unref(password),
      })
      if (error) {
        const toast = await toastController.create({
          message: 'Fehler beim Einloggen. Bitte versuche es erneut.',
          duration: 3000,
          color: 'danger',
        })
        toast.present()
        console.log(error)
        return
      }
      ionRouter.push('/')
    }

    return {
      email,
      password,
      login,
    }
  },
})
</script>

<style scoped>
.login {
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
