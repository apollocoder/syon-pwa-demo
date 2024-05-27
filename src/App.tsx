import classes from './App.module.css'
import { PaymentButton } from './components/ShareButton'

function App() {
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
