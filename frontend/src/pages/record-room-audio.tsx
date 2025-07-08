/* eslint-disable no-console */
/** biome-ignore-all lint/suspicious/noConsole: <explanation> */
import { Button } from '@/components/ui/button'
import React, { useRef, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'

const isRecordingSupported =
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === 'function' &&
  typeof globalThis.MediaRecorder === 'function'

export function RecordRoomAudio(): React.JSX.Element {
  const params = useParams<{ roomId: string }>()
  const [isRecording, setIsRecording] = useState(false)
  const recorder = useRef<MediaRecorder | null>(null)
  const intervalRef = useRef<NodeJS.Timeout>(null)

  const stopRecording = (): void => {
    setIsRecording(false)

    if (recorder.current && recorder.current.state !== 'inactive') {
      recorder.current.stop()
    }

    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const uploadAudio = async (audio: Blob): Promise<void> => {
    const formData = new FormData()

    formData.append('file', audio, 'audio.webm')

    const response = await fetch(
      `http://localhost:3333/rooms/${params.roomId}/audio`,
      {
        method: 'POST',
        body: formData,
      }
    )

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await response.json()

    console.log(result)
  }

  const createRecorder = (audio: MediaStream): void => {
    recorder.current = new MediaRecorder(audio, {
      mimeType: 'audio/webm',
      audioBitsPerSecond: 64_000,
    })

    recorder.current.ondataavailable = (event): void => {
      if (event.data.size > 0) {
        uploadAudio(event.data)
      }
    }

    recorder.current.onstart = (): void => {
      console.log('Gravação iniciada!')
    }

    recorder.current.onstop = (): void => {
      console.log('Gravação encerrada/pausada')
    }

    recorder.current.start()
  }

  const startRecording = async (): Promise<void> => {
    if (!isRecordingSupported) {
      alert('O seu navegador não suporta gravação')

      return
    }

    setIsRecording(true)

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    })

    createRecorder(audio)

    intervalRef.current = setInterval(() => {
      recorder.current?.stop()

      createRecorder(audio)
    }, 5000)
  }

  if (!params.roomId) {
    return <Navigate replace to="/" />
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      {isRecording ? (
        <Button onClick={stopRecording}>Pausar gravação</Button>
      ) : (
        <Button onClick={startRecording}>Gravar áudio</Button>
      )}
      {isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
    </div>
  )
}
