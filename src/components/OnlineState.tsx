import { useEffect, useState } from 'react'
import classes from './OnlineState.module.css'

export const OnlineState = () => {
  const [state, setState] = useState(navigator.onLine)
  const [changeTime, setChangeTime] = useState(new Date())

  useEffect(() => {
    const handleOnline = () => {
      setState(true)
      setChangeTime(new Date())
    }
    const handleOffline = () => {
      setState(false)
      setChangeTime(new Date())
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return (
    <div className={classes.container}>
      <h2>{state ? 'Online' : 'Offline'}</h2>
      <div>Detected at {changeTime.toLocaleTimeString('de-CH')}</div>
    </div>
  )
}
