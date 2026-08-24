import { NavLink } from 'react-router-dom'

export function NavBar() {
  return (
    <header className="nav">
      <NavLink to="/" className="nav-brand">Alejandro Polo Palacios</NavLink>
      <nav className="nav-links">
        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>Portafolio</NavLink>
        <NavLink to="/concept" className={({ isActive }) => (isActive ? 'active' : '')}>Concepto KAOS</NavLink>
        <NavLink to="/cv/general" className={({ isActive }) => (isActive ? 'active' : '')}>CV General</NavLink>
        <NavLink to="/cv/marketing" className={({ isActive }) => (isActive ? 'active' : '')}>CV Marketing</NavLink>
      </nav>
    </header>
  )
}
