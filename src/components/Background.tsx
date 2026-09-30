import { lazy, Suspense } from 'react'

// three.js is most of the bundle; load it after the page has painted
const CRTWarp = lazy(() => import('./CRTWarp'))

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// CRT plasma behind every page, tinted as a prism to match the nacre accent.
// Dim on purpose: the scrim keeps body text above AA contrast.
export function Background() {
  return (
    <div className="page-bg" aria-hidden="true">
      <Suspense fallback={null}>
        <CRTWarp
          backgroundColor="#0b0b0c"
          color="#d9d2f0"
          prismatic={1}
          rgbShift={0.05}
          brightness={0.7}
          speed={0.35}
          noise={0.06}
          mouseReact={false}
          paused={reducedMotion}
        />
      </Suspense>
      <div className="page-scrim" />
    </div>
  )
}
