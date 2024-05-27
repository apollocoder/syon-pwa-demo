import { registerSW } from 'virtual:pwa-register'
import classes from './App.module.css'
import { PaymentButton } from './components/ShareButton'
import { useState } from 'react'

function App() {
  const [offlineReady, setOfflineReady] = useState(false)

  const updateSW = registerSW({
    onOfflineReady() {
      setOfflineReady(true)
    }
  })

  return (
    <div className={classes.app}>
      <h1 className={classes.title}>PWA Demo</h1>
      {offlineReady && <button onClick={updateSW}>Update</button>}
      <img src="/syon.png" alt="SYON" className={classes.logo} />
      <PaymentButton />
    </div>
  )
}

export default App
