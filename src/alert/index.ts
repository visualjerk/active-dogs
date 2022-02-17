import { alertController } from '@ionic/vue'

export const alert = {
  async confirm(header: string, message?: string): Promise<boolean> {
    let confirm = false
    const alert = await alertController.create({
      header,
      message,
      buttons: [
        'Abbrechen',
        {
          text: 'Bestätigen',
          handler() {
            confirm = true
          },
        },
      ],
    })
    await alert.present()
    await alert.onDidDismiss()
    return confirm
  },
}
