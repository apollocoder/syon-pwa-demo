import { useEffect } from 'react'
import classes from './App.module.css'
import { PaymentButton } from './components/ShareButton'
import { WebPushClient } from '@magicbell/webpush'

const client = new WebPushClient({
  apiKey: '6eed9cd644cad6f5cc09405ef676fcda6c188561',
  userEmail: 'tobi.buechel@gmail.com',
  serviceWorkerPath: '/sw-mb.js'
})

function App() {
  useEffect(() => {
    if (!client.isSubscribed()) client.subscribe()
  }, [])

  return (
    <div className={classes.app}>
      <img src="/syon.png" alt="SYON" className={classes.logo} />
      <h1 className={classes.title}>SYON</h1>
      <h2 className={classes.subTitle}>PWA Demo</h2>
      <PaymentButton />
    </div>
  )
}

export default App
