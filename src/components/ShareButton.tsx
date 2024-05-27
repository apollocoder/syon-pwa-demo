import { useRef, useState } from 'react'

export const PaymentButton = () => {
  const ref = useRef<HTMLInputElement>(null)
  const [file, setFile] = useState<File | null>(null)

  const openFileSelect = () => {
    ref.current?.click()
  }

  const saveFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) setFile(file)
  }

  const shareFile = async () => {
    if (!file) return
    try {
      await navigator.share({
        files: [file]
      })
    } catch (e) {
      alert('Share API not available')
    }
  }

  return (
    <>
      <input
        ref={ref}
        type="file"
        style={{ display: 'none' }}
        onChange={saveFile}
      />
      <button className="button" onClick={openFileSelect}>
        Select File
      </button>
      <button className="button" onClick={shareFile}>
        Share File
      </button>
    </>
  )
}
