<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue'
import { defineComponent, watch } from 'vue'
import { state } from '@/store'
import { alert } from '@/alert'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },
  setup() {
    watch(
      () => state.updateAvailable,
      async (updateAvailable) => {
        if (!updateAvailable) {
          return
        }
        const update = await alert.confirm(
          'Update verfügbar',
          'Soll die App jetzt neu geladen werden?'
        )
        if (update) {
          location.reload()
        }
      },
      {
        immediate: true,
      }
    )
    watch(
      () => state.offline,
      (offline) => {
        if (!offline) {
          return
        }
        alert.confirm(
          'Keine Internetverbindung',
          'Die App hat keine Internetverbindung und funktioniert deshalb nur eingeschränkt. Bitte lade neu, wenn die Verbindung wieder hergestellt wurde.'
        )
      },
      {
        immediate: true,
      }
    )
  },
})
</script>
