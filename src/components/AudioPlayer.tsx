import { useEffect, useRef, useState } from 'react'

// Template slot: drop a licensed/owned track at public/audio/bg.mp3 and set
// TRACK_SRC below. Left null until then — nothing plays, but the player UI
// still renders so the control is in place. Never autoplays: browsers block
// unmuted autoplay by default, and starting audio without a user action is
// bad practice regardless — playback always starts from a real click here.
const TRACK_SRC: string | null = null

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(0.6)

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume
  }, [volume])

  if (!TRACK_SRC) return null

  const toggle = () => {
    const el = audioRef.current
    if (!el) return
    if (playing) {
      el.pause()
    } else {
      void el.play()
    }
    setPlaying(!playing)
  }

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={TRACK_SRC} loop />
      <button
        className="audio-player-toggle cursor-target"
        onClick={toggle}
        aria-label={playing ? 'Pausar música' : 'Reproducir música'}
      >
        {playing ? (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" />
            <rect x="14" y="5" width="4" height="14" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M7 5v14l12-7z" />
          </svg>
        )}
      </button>
      <input
        className="audio-player-volume"
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        aria-label="Volumen"
      />
    </div>
  )
}
