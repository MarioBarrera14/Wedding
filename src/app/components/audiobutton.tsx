'use client'

import { useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

export default function Auboton() {
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleAudio = () => {
    setIsPlaying(!isPlaying)
    // Aquí iría la lógica para reproducir/pausar la canción
    console.log(isPlaying ? "Pausando canción" : "Reproduciendo canción")
  }

  return (
    <button
      className={`fixed right-2 top-1/4 transform -translate-y-1/4 w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
        isPlaying ? "bg-amber-400" : "bg-amber-100"
      }`}
      onClick={toggleAudio}
      aria-label={isPlaying ? "Pausar canción" : "Reproducir canción"}
    >
      {isPlaying ? (
        <Volume2 className="w-6 h-6 text-amber-800" />
      ) : (
        <VolumeX className="w-6 h-6 text-amber-800" />
      )}
    </button>
  )
}
