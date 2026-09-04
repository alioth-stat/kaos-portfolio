import { NavLink } from 'react-router-dom'

export function NavBar() {
  return (
    <header className="nav">
      <NavLink to="/" className="nav-brand cursor-target" aria-label="Alejandro Polo Palacios — inicio">
        <span className="nav-mark">AP</span>
      </NavLink>
      <nav className="nav-links">
        <NavLink to="/portfolio" className={({ isActive }) => `cursor-target${isActive ? ' active' : ''}`}>Portafolio</NavLink>
        <NavLink to="/cv" className={({ isActive }) => `cursor-target${isActive ? ' active' : ''}`}>CV</NavLink>
      </nav>
    </header>
  )
}
