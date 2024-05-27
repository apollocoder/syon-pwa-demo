export const PaymentButton = () => {
  const onButtonClick = async () => {
    navigator.share({
      files: [
        new File(['Hello, World!\nRegards, SYON'], 'hello-world.txt', {
          type: 'text/plain'
        })
      ]
    })
  }

  return (
    <>
      <button className="button" onClick={onButtonClick}>
        Share File
      </button>
    </>
  )
}
