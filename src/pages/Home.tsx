import { Link } from 'react-router-dom'

export function Home() {
  return (
    <main className="page-content hero">
      <div className="hero-photo">
        <img src="/projects/alejandro-professional.jpg" alt="Alejandro Polo Palacios" />
      </div>

      <h1>Alejandro Polo Palacios</h1>
      <p className="tagline">
        Ingeniería de agentes IA, automatización de sistemas y desarrollo full-stack.
      </p>

      <p className="bio">
        Pasante de Ingeniería en IA en DETA (8+ meses), donde diseño frameworks de agentes
        autónomos, arquitecturas de Machine Learning y funcionalidades full-stack en producción.
        Curso el Técnico Superior en Inteligencia Artificial en el ITSE y soy becario de la
        Fundación Deveaux. Bilingüe nativo, con antecedentes en coordinación de proyectos que
        aplico al trabajo técnico en equipo.
      </p>

      <div className="hero-links">
        <Link to="/portfolio" className="btn-outline cursor-target">Ver portafolio</Link>
        <Link to="/cv" className="btn-solid cursor-target">Ver CV</Link>
      </div>
    </main>
  )
}
