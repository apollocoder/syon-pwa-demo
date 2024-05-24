import { useState } from 'react'

export const PaymentButton = () => {
  const [paymentResponse, setPaymentResponse] = useState<PaymentResponse>()

  const onCardClick = async () => {
    const request = new PaymentRequest([applePayMethod], paymentDetails)
    const response = await request.show()
    setPaymentResponse(response)
  }

  return (
    <>
      <button onClick={onCardClick}>Bezahlen</button>
      {JSON.stringify(paymentResponse)}
    </>
  )
}

const applePayMethod = {
  supportedMethods: 'https://apple.com/apple-pay',
  data: {
    version: 3,
    merchantIdentifier: 'merchant.whatpwacando.today',
    merchantCapabilities: ['supports3DS', 'supportsCredit', 'supportsDebit'],
    supportedNetworks: ['amex', 'discover', 'masterCard', 'visa', 'maestro'],
    countryCode: 'US'
  }
}

const paymentDetails = {
  id: 'order-53278946',
  displayItems: [
    {
      label: 'PWA Demo Payment',
      amount: { currency: 'CHF', value: '42.00' }
    }
  ],
  total: {
    label: 'Total',
    amount: { currency: 'USD', value: '42.00' }
  }
}
