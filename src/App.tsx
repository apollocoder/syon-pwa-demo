import { useEffect } from 'react'
import classes from './App.module.css'
import { ScanButton } from './components/ScanButton'
import { ShareButton } from './components/ShareButton'
import runOneSignal from './one-signal'

function App() {
  useEffect(() => {
    runOneSignal()
  }, [])

  return (
    <div className={classes.app}>
      <img src="/syon.png" alt="SYON" className={classes.logo} />
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>SYON</h1>
        <h2 className={classes.subTitle}>PWA Demo</h2>
      </div>
      <ShareButton />
      <ScanButton />
    </div>
  )
}

export default App
