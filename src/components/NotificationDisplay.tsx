import { useEffect, useState } from 'react'
import OneSignal from 'react-onesignal'

export const NotificationDisplay = () => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    OneSignal.Notifications.addEventListener('click', ({ notification }) => {
      setMessage(`${notification.title}: ${notification.body}`)
    })
  })

  return message && <div>{message}</div>
}
