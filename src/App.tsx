import { registerSW } from 'virtual:pwa-register'
import classes from './App.module.css'
import { PaymentButton } from './components/ShareButton'
import { useState } from 'react'

const intervalMS = 10 * 1000

function App() {
  const [offlineReady, setOfflineReady] = useState(false)
  const [needRefresh, setNeedRefresh] = useState(false)

  const update = registerSW({
    onNeedRefresh() {
      setNeedRefresh(true)
    },
    onOfflineReady() {
      setOfflineReady(true)
    },
    onRegisteredSW(swUrl, registration) {
      registration &&
        setInterval(async () => {
          if (!(!registration.installing && navigator)) return

          if ('connection' in navigator && !navigator.onLine) return

          const resp = await fetch(swUrl, {
            cache: 'no-store',
            headers: {
              cache: 'no-store',
              'cache-control': 'no-cache'
            }
          })

          if (resp?.status === 200) await registration.update()
        }, intervalMS)
    }
  })

  return (
    <div className={classes.app}>
      <h1 className={classes.title}>SYON PWA Demo</h1>
      {needRefresh && (
        <button className="button" onClick={() => update()}>
          Update App
        </button>
      )}
      <img src="/syon.png" alt="SYON" className={classes.logo} />
      {!offlineReady && <div>Offline Ready</div>}
      <PaymentButton />
    </div>
  )
}

export default App
