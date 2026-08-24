import { NavLink } from 'react-router-dom'

export function NavBar() {
  return (
    <header className="nav">
      <NavLink to="/" className="nav-brand cursor-target">Alejandro Polo Palacios</NavLink>
      <nav className="nav-links">
        <NavLink to="/portfolio" className={({ isActive }) => `cursor-target${isActive ? ' active' : ''}`}>Portafolio</NavLink>
        <NavLink to="/concept" className={({ isActive }) => `cursor-target${isActive ? ' active' : ''}`}>Concepto KAOS</NavLink>
        <NavLink to="/cv/general" className={({ isActive }) => `cursor-target${isActive ? ' active' : ''}`}>CV General</NavLink>
        <NavLink to="/cv/marketing" className={({ isActive }) => `cursor-target${isActive ? ' active' : ''}`}>CV Marketing</NavLink>
      </nav>
    </header>
  )
}
