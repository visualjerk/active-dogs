<template>
  <ion-page>
    <div class="register">
      <ion-card class="card">
        <ion-card-header>Register Account</ion-card-header>
        <ion-card-content>
          <ion-item>
            <ion-label position="stacked">Email</ion-label>
            <ion-input v-model="email"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="stacked">Passwort</ion-label>
            <ion-input type="password" v-model="password"></ion-input>
          </ion-item>
          <ion-button expand="block" class="button" @click="register">
            Registrieren
          </ion-button>
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
import { defineComponent, ref, unref } from 'vue'
import { supabase } from '@/api'
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

export default defineComponent({
  name: 'RegisterView',
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

    async function register() {
      const { error } = await supabase.auth.signUp({
        email: unref(email),
        password: unref(password),
      })
      if (error) {
        const toast = await toastController.create({
          message: `Fehler beim Registrieren: ${error.message}`,
          duration: 3000,
          color: 'danger',
        })
        toast.present()
        console.log(error)
        return
      }
      ionRouter.push('/register-success')
    }

    return {
      email,
      password,
      register,
    }
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
