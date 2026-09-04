import LetterGlitch from './LetterGlitch'

const NAVY_TEAL_GOLD = ['#051821', '#1A4645', '#266867', '#F58800']

export function GlitchBackground() {
  return (
    <div className="glitch-bg" aria-hidden="true">
      <LetterGlitch
        glitchColors={NAVY_TEAL_GOLD}
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
