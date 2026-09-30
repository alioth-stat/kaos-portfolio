import { NavLink } from 'react-router-dom'

const links = [
  { to: '/portfolio', label: 'Proyectos' },
  { to: '/eventos', label: 'Eventos' },
  { to: '/cv', label: 'CV' },
]

export function NavBar() {
  return (
    <header className="nav">
      <NavLink to="/" className="nav-mark nacre cursor-target" aria-label="Alejandro Polo Palacios, inicio">
        AP
      </NavLink>
      <nav className="nav-links" aria-label="Principal">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} className={({ isActive }) => `cursor-target${isActive ? ' active' : ''}`}>
            {l.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
