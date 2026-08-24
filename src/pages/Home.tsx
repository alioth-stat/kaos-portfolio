import { Link } from 'react-router-dom'
import { RoleSwitch } from '../components/RoleSwitch'

export function Home() {
  return (
    <main className="page-content hero">
      <div className="hero-photo" aria-label="Foto profesional próximamente">
        <span>Foto próximamente</span>
      </div>

      <h1>Alejandro Polo Palacios</h1>
      <p className="tagline">
        Marketing digital, contenido audiovisual y automatización con IA para eventos y marcas.
      </p>

      <p className="bio">
        Cinco años en diseño audiovisual —After Effects, Photoshop— y bilingüe desde siempre.
        Empecé en logística y coordinación de proyectos, y hoy uso esa base para producir
        contenido y campañas: entiendo cómo se mueve Instagram, y sumo automatización e IA
        para que un evento se llene, no solo se vea bien.
      </p>

      <RoleSwitch />

      <div className="hero-links">
        <Link to="/portfolio" className="btn-outline cursor-target">Ver portafolio</Link>
        <Link to="/concept" className="btn-outline cursor-target">Propuesta para KAOS Panamá</Link>
      </div>
    </main>
  )
}
