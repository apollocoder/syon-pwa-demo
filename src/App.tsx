import { useEffect } from 'react'
import './App.css'
import { PaymentButton } from './components/ContactButton'

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
