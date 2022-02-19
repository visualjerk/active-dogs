import { reactive } from 'vue'

export const state = reactive({
  offline: false,
  updateAvailable: false,
})

window.addEventListener('online', () => {
  state.offline = false
})

window.addEventListener('offline', () => {
  state.offline = true
})
