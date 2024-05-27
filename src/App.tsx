import { registerSW } from 'virtual:pwa-register'
import classes from './App.module.css'
import { PaymentButton } from './components/ShareButton'

function App() {
  registerSW({
    immediate: true
  })

  return (
    <div className={classes.app}>
      <h1 className={classes.title}>PWA Demo</h1>
      <img src="/syon.png" alt="SYON" className={classes.logo} />
      <PaymentButton />
    </div>
  )
}

export default App
