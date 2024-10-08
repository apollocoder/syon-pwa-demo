/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from 'react'
import classes from './ScanButton.module.css'

declare let NDEFReader: any

export const ScanButton = () => {
  const abortController = useRef<AbortController | null>(null)
  const [scanning, setScanning] = useState(false)
  const [result, setResult] = useState<unknown | null>(null)

  const utter = (string: string) => {
    const utterance = new SpeechSynthesisUtterance(string)
    utterance.lang = 'en-US'
    speechSynthesis.speak(utterance)
  }

  const readTag = ({ message }: any) => {
    const { records } = message

    const decoded = records
      .map((record: any) => {
        const { encoding, data } = record
        const decoder = encoding ? new TextDecoder(encoding) : new TextDecoder()
        return decoder.decode(data)
      })
      .join(' ')

    setResult(decoded)
    utter(decoded)
  }

  const startScanning = () =>
    new Promise((resolve, reject) => {
      try {
        if (!NDEFReader) return
        const reader = new NDEFReader()

        setScanning(true)

        reader.addEventListener('reading', (event: any) => {
          resolve(readTag(event))
        })

        reader.addEventListener('readingerror', (event: unknown) => {
          console.error(event)
          reject(event)
        })

        abortController.current = new AbortController()
        reader.scan({ signal: abortController.current.signal })
      } catch (error) {
        console.error(error)
        stopScanning()
        reject(error)
      }
    })

  const stopScanning = () => {
    abortController.current?.abort()
    setResult(null)
    console.error(null)
    setScanning(false)
  }

  const message = !scanning
    ? result === null
      ? null
      : JSON.stringify(result)
    : 'Scan Now!'

  return (
    <div className={classes.container}>
      <h2>Scan NFC</h2>
      {'NDEFReader' in window ? (
        <>
          <div className={classes.hint}>Turn on volume and scan a badge!</div>
          <button
            className={`button ${scanning ? classes.running : ''}`}
            onClick={scanning ? stopScanning : startScanning}
          >
            {scanning ? 'Stop Scanning' : 'Start Scanning'}
          </button>
          {message && <div className={classes.output}>{message}</div>}
        </>
      ) : (
        <div>NFC not supported on this device</div>
      )}
    </div>
  )
}
