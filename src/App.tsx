import { useRegisterSW } from 'virtual:pwa-register/react'
import classes from './App.module.css'
import { PaymentButton } from './components/ShareButton'

const intervalMS = 10 * 1000

function App() {
  const {
    needRefresh: [needRefresh],
    offlineReady: [offlineReady],
    updateServiceWorker
  } = useRegisterSW({
    onRegistered(registration) {
      registration &&
        setInterval(() => {
          registration.update()
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
