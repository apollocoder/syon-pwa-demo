import { useCallback, useEffect, useState } from 'react'
import classes from './NotificationDisplay.module.css'

export const NotificationDisplay = () => {
  const [message, setMessage] = useState<string | null>(null)

  const handleLocationChange = useCallback(() => {
    const { search } = window.location
    const searchParams = new URLSearchParams(search)
    if (searchParams.has('notification'))
      setMessage(searchParams.get('notification'))
    else setMessage(null)
  }, [])

  useEffect(() => {
    handleLocationChange()
  }, [handleLocationChange])

  useEffect(() => {
    window.addEventListener('popstate', handleLocationChange)
    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [handleLocationChange])

  return (
    message && (
      <div className={classes.container}>
        <h2>Notification Received</h2>
        <div>{message}</div>
      </div>
    )
  )
}
