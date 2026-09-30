import { Fragment } from 'react'

// Renders text as individually animatable spans. Screen readers get the
// plain string from the sr-only copy instead of letter-by-letter spans.
export function Split({ text, by, className }: { text: string; by: 'char' | 'word'; className?: string }) {
  const parts = by === 'char' ? [...text] : text.split(' ')
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {parts.map((p, i) => (
          <Fragment key={i}>
            <span className={by === 'char' ? 'split-char' : 'split-word'}>{p === ' ' ? ' ' : p}</span>
            {/* the space lives outside the inline-block, or it collapses */}
            {by === 'word' && i < parts.length - 1 ? ' ' : null}
          </Fragment>
        ))}
      </span>
    </span>
  )
}
