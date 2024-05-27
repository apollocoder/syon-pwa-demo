import OneSignal from 'react-onesignal'

export default async function runOneSignal() {
  OneSignal.Notifications.addEventListener('click', event => {
    console.log('OneSignal notification displayed:', event)
  })

  await OneSignal.init({
    appId: 'e9f9b4b7-da07-4c2e-a74c-4c9072ac63d3',
    serviceWorkerParam: { scope: '/onesignal/onsSignalScope/' },
    serviceWorkerPath: 'onesignal/OneSignalSDKWorker.js',
    allowLocalhostAsSecureOrigin: true,
    notifyButton: {
      enable: true
    }
  })
}
