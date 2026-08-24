import { useEffect, useRef, useState } from 'react'

// Points at YouTube's own hosted stream via their official IFrame Player
// API — nothing is downloaded or rehosted, playback stays on YouTube's
// infrastructure. Never autoplays: playback only starts from the button.
const YOUTUBE_VIDEO_ID = '3GRqXlKj40M'

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady?: () => void
  }
}

let apiLoadPromise: Promise<void> | null = null

function loadYouTubeApi(): Promise<void> {
  if (window.YT?.Player) return Promise.resolve()
  if (apiLoadPromise) return apiLoadPromise
  apiLoadPromise = new Promise((resolve) => {
    const previous = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previous?.()
      resolve()
    }
    const script = document.createElement('script')
    script.src = 'https://www.youtube.com/iframe_api'
    document.head.appendChild(script)
  })
  return apiLoadPromise
}

export function AudioPlayer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<any>(null)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(60)

  useEffect(() => {
    let cancelled = false
    loadYouTubeApi().then(() => {
      if (cancelled || !containerRef.current) return
      playerRef.current = new window.YT.Player(containerRef.current, {
        height: '0',
        width: '0',
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: { loop: 1, playlist: YOUTUBE_VIDEO_ID, controls: 0 },
        events: {
          onReady: (e: any) => {
            e.target.setVolume(volume)
            setReady(true)
          },
        },
      })
    })
    return () => {
      cancelled = true
      playerRef.current?.destroy?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    playerRef.current?.setVolume?.(volume)
  }, [volume])

  const toggle = () => {
    const p = playerRef.current
    if (!p) return
    if (playing) p.pauseVideo()
    else p.playVideo()
    setPlaying(!playing)
  }

  return (
    <div className="audio-player" title="Audio vía YouTube">
      <div ref={containerRef} className="audio-player-embed" />
      <button
        className="audio-player-toggle cursor-target"
        onClick={toggle}
        disabled={!ready}
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
        max={100}
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        aria-label="Volumen"
      />
    </div>
  )
}
