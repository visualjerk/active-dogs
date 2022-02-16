import { toastController } from '@ionic/vue'
import { PostgrestError, ApiError } from '@supabase/supabase-js'

export const notify = {
  async error(message: string, error?: PostgrestError | ApiError | null) {
    const messageParts = [message]
    if (error) {
      messageParts.push(error.message)
    }
    const toast = await toastController.create({
      message: messageParts.join(' '),
      duration: 5000,
      color: 'danger',
    })
    toast.present()
    console.error(error)
  },
  async success(message: string) {
    const toast = await toastController.create({
      message,
      duration: 3000,
    })
    toast.present()
  },
}
