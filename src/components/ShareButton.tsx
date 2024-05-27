import { useRef, useState } from 'react'
import classes from './ShareButton.module.css'

export const ShareButton = () => {
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
    <div className={classes.container}>
      <h2>Share a File</h2>
      <input
        ref={ref}
        type="file"
        style={{ display: 'none' }}
        onChange={saveFile}
      />
      {file ? (
        <button className="button" onClick={shareFile}>
          Share {file.name}
        </button>
      ) : (
        <button className="button" onClick={openFileSelect}>
          Select File
        </button>
      )}
    </div>
  )
}
