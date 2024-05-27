import { registerSW } from 'virtual:pwa-register'
import classes from './App.module.css'
import { PaymentButton } from './components/ShareButton'
import { useState } from 'react'

function App() {
  const [offlineReady, setOfflineReady] = useState(false)
  const [needRefresh, setNeedRefresh] = useState(false)

  registerSW({
    immediate: true,
    onNeedRefresh: () => {
      setNeedRefresh(true)
    },
    onOfflineReady: () => {
      setOfflineReady(true)
    }
  })

  return (
    <div className={classes.app}>
      <h1 className={classes.title}>SYON PWA Demo</h1>
      {needRefresh && (
        <button className="button" onClick={() => window.location.reload()}>
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
