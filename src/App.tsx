import { useRegisterSW } from 'virtual:pwa-register/react'
import classes from './App.module.css'
import { PaymentButton } from './components/ShareButton'

const intervalMS = 10 * 1000

function App() {
  const { needRefresh, offlineReady, updateServiceWorker } = useRegisterSW({
    onRegisteredSW(swUrl, registration) {
      registration &&
        setInterval(async () => {
          if (!(!registration.installing && navigator)) return
          if ('connection' in navigator && !navigator.onLine) return
          const resp = await fetch(swUrl)
          if (resp?.status === 200) await registration.update()
        }, intervalMS)
    }
  })

  return (
    <div className={classes.app}>
      <h1 className={classes.title}>SYON PWA Demo</h1>
      {needRefresh && (
        <button className="button" onClick={() => updateServiceWorker()}>
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
