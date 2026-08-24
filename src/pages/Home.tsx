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
        Profesional creativo y tecnológico con 5 años de experiencia en diseño audiovisual
        (Adobe After Effects, Photoshop), bilingüe nativo y con fondo sólido en logística,
        organización y coordinación de proyectos. Combino criterio visual y conocimiento de
        tendencias de Instagram con automatización e inteligencia artificial para producir
        contenido y campañas que generan atención, interacción y asistencia a eventos.
      </p>

      <RoleSwitch />

      <div className="hero-links">
        <Link to="/portfolio" className="btn-outline">Ver portafolio</Link>
        <Link to="/concept" className="btn-outline">Propuesta para KAOS Panamá</Link>
      </div>
    </main>
  )
}
