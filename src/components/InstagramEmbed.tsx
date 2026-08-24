import { useEffect, useRef } from 'react'

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

export function InstagramEmbed({ url }: { url: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    loadEmbedScript().then(() => {
      window.instgrm?.Embeds.process()
    })
  }, [url])

  return (
    <div className="instagram-embed" ref={containerRef}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
      />
    </div>
  )
}
