import { useEffect, useState } from 'react'

export function GlitchText({
  words,
  interval = 2000,
  className = '',
}: {
  words: string[]
  interval?: number
  className?: string
}) {
  const [i, setI] = useState(0)

  useEffect(() => {
    if (words.length < 2) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words, interval])

  return (
    <span className={`glitch-word ${className}`} key={i}>
      {words[i]}
    </span>
  )
}
