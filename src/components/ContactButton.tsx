export const PaymentButton = () => {
  const onButtonClick = async () => {
    navigator.share({ text: 'Hello World!' })
  }

  return (
    <>
      <button onClick={onButtonClick}>Share</button>
    </>
  )
}
