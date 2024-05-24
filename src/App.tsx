import { useEffect } from 'react'
import './App.css'
import { PaymentButton } from './components/PaymentButton'
import runOneSignal from './one-signal'

function App() {
  useEffect(() => {
    runOneSignal()
  }, [])

  return (
    <>
      <PaymentButton />
    </>
  )
}

export default App
