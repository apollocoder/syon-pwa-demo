import { useEffect } from 'react'
import { PaymentButton } from './components/ShareButton'
import classes from './App.module.css'

function App() {
  useEffect(() => {
    // runOneSignal()
  }, [])

  return (
    <div className={classes.app}>
      <img src="/syon.png" alt="SYON" className={classes.logo} />
      <PaymentButton />
    </div>
  )
}

export default App
