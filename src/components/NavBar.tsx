import { NavLink } from 'react-router-dom'
import { GlitchText } from './GlitchText'

// Template slot: drop an image/gif at public/nav/companion.gif (or .png/.webp)
// and point this at it, e.g. '/nav/companion.gif'. Until set, an empty
// dashed-border box is shown next to the AP/AS mark.
const NAV_MEDIA_SRC: string | null = null

export function NavBar() {
  return (
    <header className="nav">
      <NavLink to="/" className="nav-brand cursor-target" aria-label="Alejandro Polo Palacios — inicio">
        <GlitchText words={['AP', 'AS']} interval={2400} className="nav-mark" />
        <span className="nav-media-slot">{NAV_MEDIA_SRC && <img src={NAV_MEDIA_SRC} alt="" />}</span>
      </NavLink>
      <nav className="nav-links">
        <NavLink to="/portfolio" className={({ isActive }) => `cursor-target${isActive ? ' active' : ''}`}>Portafolio</NavLink>
        <NavLink to="/concept" className={({ isActive }) => `cursor-target${isActive ? ' active' : ''}`}>Concepto KAOS</NavLink>
        <NavLink to="/cv/general" className={({ isActive }) => `cursor-target${isActive ? ' active' : ''}`}>CV General</NavLink>
        <NavLink to="/cv/marketing" className={({ isActive }) => `cursor-target${isActive ? ' active' : ''}`}>CV Marketing</NavLink>
      </nav>
    </header>
  )
}
