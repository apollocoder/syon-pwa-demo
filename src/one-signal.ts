import OneSignal from 'react-onesignal'

export default async function runOneSignal(email?: string) {
  await OneSignal.init({
    appId: 'e9f9b4b7-da07-4c2e-a74c-4c9072ac63d3',
    allowLocalhostAsSecureOrigin: true,
    serviceWorkerParam: { scope: '/one-signal' }
  })

  OneSignal.login('tobi.buechel@gmail.com')

  console.log('subscribing to one signal', email)

  await OneSignal.Slidedown.promptPush()
}
