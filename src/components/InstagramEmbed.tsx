import { useEffect, useRef, useState } from 'react'

// Uses Instagram's own official embed (embed.js + blockquote), the same
// markup their own "Embed" share option generates — the post is rendered by
// Instagram's script from their servers, nothing is scraped or rehosted.
declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

let scriptLoadPromise: Promise<void> | null = null

function loadEmbedScript(): Promise<void> {
  if (window.instgrm) return Promise.resolve()
  if (scriptLoadPromise) return scriptLoadPromise
  scriptLoadPromise = new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    script.onload = () => resolve()
    document.body.appendChild(script)
  })
  return scriptLoadPromise
}

// Instagram's widget refuses to render narrower than ~328px, so shrinking it
// means scaling the whole iframe down and matching the wrapper's box to the
// scaled size (transform doesn't shrink layout size on its own).
const SCALE = 0.64
const NATURAL_WIDTH = 328

export function InstagramEmbed({ url }: { url: string }) {
  const innerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | null>(null)

  useEffect(() => {
    let cancelled = false
    let observer: ResizeObserver | null = null
    let pollId: ReturnType<typeof setInterval> | null = null

    loadEmbedScript().then(() => {
      if (cancelled) return
      window.instgrm?.Embeds.process()
      pollId = setInterval(() => {
        const iframe = innerRef.current?.querySelector('iframe')
        if (iframe) {
          if (pollId) clearInterval(pollId)
          observer = new ResizeObserver((entries) => {
            const h = entries[0]?.contentRect.height
            if (h) setHeight(h * SCALE)
          })
          observer.observe(iframe)
        }
      }, 200)
    })

    return () => {
      cancelled = true
      if (pollId) clearInterval(pollId)
      observer?.disconnect()
    }
  }, [url])

  return (
    <div
      className="instagram-embed"
      style={{ width: NATURAL_WIDTH * SCALE, height: height ?? undefined }}
    >
      <div className="instagram-embed-inner" ref={innerRef} style={{ transform: `scale(${SCALE})` }}>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
        />
      </div>
    </div>
  )
}
