import type { Media } from '@/data/projects'

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Videos loop silently like a moving screenshot; with reduced motion they
// stay on the poster and show controls instead.
export function ProjectMedia({ media, eager }: { media: Media; eager?: boolean }) {
  if (media.kind === 'video') {
    return (
      <video
        autoPlay={!reducedMotion}
        controls={reducedMotion}
        loop
        muted
        playsInline
        poster={media.poster}
        aria-label={media.alt}
      >
        {media.webm && <source src={media.webm} type="video/webm" />}
        <source src={media.mp4} type="video/mp4" />
      </video>
    )
  }
  return <img src={media.src} alt={media.alt} loading={eager ? 'eager' : 'lazy'} />
}

export function posterOf(media: Media) {
  return media.kind === 'video' ? media.poster : media.src
}
