import { useEffect, useState } from 'react'
import OneSignal from 'react-onesignal'
import classes from './NotificationDisplay.module.css'

export const NotificationDisplay = () => {
  const [message, setMessage] = useState<string | null>(null)

  useEffect(() => {
    OneSignal.Notifications.addEventListener('click', ({ notification }) => {
      setMessage(`${notification.title}: ${notification.body}`)
    })
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
