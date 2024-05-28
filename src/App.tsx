import { useEffect } from 'react'
import classes from './App.module.css'
import { NotificationDisplay } from './components/NotificationDisplay'
import { OnlineState } from './components/OnlineState'
import { ScanButton } from './components/ScanButton'
import { ShareButton } from './components/ShareButton'
import runOneSignal from './one-signal'

function App() {
  useEffect(() => {
    runOneSignal()
  }, [])

  return (
    <div className={classes.app}>
      <div className={classes.titleContainer}>
        <img src="/syon.png" alt="SYON" className={classes.logo} />
        <h1 className={classes.title}>SYON</h1>
        <h2 className={classes.subTitle}>PWA Demo</h2>
      </div>
      <div>Path: {window.location.pathname}</div>
      <div>Search: {window.location.search}</div>
      <OnlineState />
      <NotificationDisplay />
      <ShareButton />
      <ScanButton />
    </div>
  )
}

export default App
