import { useEffect } from 'react'
import './App.css'
import { PaymentButton } from './components/PaymentButton'

function App() {
  useEffect(() => {
    // runOneSignal()
  }, [])

  return (
    <>
      <PaymentButton />
    </>
  )
}

export default App
