import { useCallback, useEffect, useState } from 'react'
import classes from './NotificationDisplay.module.css'

export const NotificationDisplay = () => {
  const [message, setMessage] = useState<string | null>(null)

  const handleLocationChange = useCallback(() => {
    const { search } = window.location
    const searchParams = new URLSearchParams(search)
    if (searchParams.has('notification'))
      setMessage(searchParams.get('notification'))
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

  useEffect(() => {
    const cry = (event: Event) => {
      event.preventDefault()
      alert('😭')
    }
    window.addEventListener('notificationclick', cry)
    return () => {
      window.removeEventListener('notificationclick', cry)
    }
  }, [])

  return (
    message && (
      <div className={classes.container}>
        <h2>Notification Received</h2>
        <div>{message}</div>
      </div>
    )
  )
}
