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
      <img src="/syon.png" alt="SYON" className={classes.logo} />
      <h1 className={classes.title}>SYON</h1>
      <h2 className={classes.subTitle}>PWA Demo</h2>
      {needRefresh && (
        <button className="button" onClick={() => updateServiceWorker()}>
          Update App
        </button>
      )}
      {offlineReady && <div>Offline Ready</div>}
      <PaymentButton />
    </div>
  )
}

export default App
