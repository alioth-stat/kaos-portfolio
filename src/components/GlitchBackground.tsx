import LetterGlitch from './LetterGlitch'

const RED_CRIMSON = ['#450a0a', '#7f1d1d', '#dc2626', '#ef4444']

export function GlitchBackground() {
  return (
    <div className="glitch-bg" aria-hidden="true">
      <LetterGlitch
        glitchColors={RED_CRIMSON}
        glitchSpeed={60}
        smooth
        outerVignette
        centerVignette={false}
        characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789"
      />
      <div className="glitch-scrim" />
    </div>
  )
}
