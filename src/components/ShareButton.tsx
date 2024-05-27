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
      console.log(e)
    } finally {
      setFile(null)
    }
  }

  return (
    <div>
      <h2>Share a File</h2>
      <input
        ref={ref}
        type="file"
        style={{ display: 'none' }}
        onChange={saveFile}
      />
      {file ? (
        <button className="button" onClick={shareFile}>
          Share File
        </button>
      ) : (
        <button className="button" onClick={openFileSelect}>
          Select File
        </button>
      )}
    </div>
  )
}
