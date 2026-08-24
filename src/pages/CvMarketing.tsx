import { Link } from 'react-router-dom'
import { RoleSwitch } from '../components/RoleSwitch'

export function CvMarketing() {
  return (
    <main className="page-content cv-page">
      <RoleSwitch />

      <div className="cv-card">
        <div className="cv-head">
          <div>
            <h1>Alejandro Polo Palacios</h1>
            <p className="cv-headline">Marketing Digital, Automatización y Producción de Contenido para Eventos</p>
          </div>
          <a className="btn-solid" href="/cv-marketing-alejandro-polo.pdf" download>
            Descargar PDF
          </a>
        </div>
        <p className="cv-contact">
          +507 6460-8610 · agent.apolo.st@gmail.com · github.com/alioth-stat · Nuevo Arraiján, Panamá Oeste
        </p>

        <section>
          <h2>Perfil</h2>
          <p>
            Profesional creativo y tecnológico con 5 años de experiencia en diseño audiovisual,
            edición en Adobe After Effects y Photoshop, y creación de contenido para redes
            sociales. Bilingüe nativo (español/inglés), con fortaleza en logística, organización
            y coordinación de proyectos. Combino criterio visual, conocimiento de tendencias y
            algoritmos de Instagram con automatización e inteligencia artificial para producir
            contenido y campañas que generan atención, interacción y asistencia a eventos.
          </p>
        </section>

        <section>
          <h2>Habilidades</h2>
          <div className="skill-groups">
            <div>
              <p className="skill-label">Contenido y redes</p>
              <p className="skill-items">Instagram Reels, Stories, TikTok, copywriting, calendario de contenido, community engagement</p>
            </div>
            <div>
              <p className="skill-label">Diseño y audiovisual</p>
              <p className="skill-items">Adobe After Effects (5 años), Adobe Photoshop (5 años), edición vertical 9:16, diseño de posters, diseño web</p>
            </div>
            <div>
              <p className="skill-label">Marketing</p>
              <p className="skill-items">Promoción de eventos, preventas, códigos QR, reservas, embudos de conversión, métricas de campaña</p>
            </div>
            <div>
              <p className="skill-label">Automatización</p>
              <p className="skill-items">Automatizaciones con IA para organización de leads, dashboards de rendimiento, integración de APIs</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Experiencia</h2>
          <p className="entry-title">DETA — Desarrollo Digital, IA y Proyectos</p>
          <p className="entry-meta">Ciudad de Panamá · Ago. 2024 – May. 2026</p>
          <ul>
            <li>Identifiqué oportunidades en distintos nichos del mercado panameño y desarrollé soluciones digitales adaptadas a sus necesidades.</li>
            <li>Actué como enlace de comunicación entre el CEO, clientes y grupos externos, coordinando varios proyectos y prioridades en paralelo.</li>
            <li>Diseñé interfaces, materiales digitales y experiencias web para productos y herramientas internas.</li>
            <li>Desarrollé automatizaciones y soluciones basadas en IA para agilizar investigación, organización de información y procesos operativos.</li>
            <li>Trabajé bajo metodologías ágiles, coordinando entregables, documentación y ejecución en equipos multidisciplinarios.</li>
          </ul>
        </section>

        <section>
          <h2>Portafolio creativo y digital</h2>
          <ul>
            <li><strong>Diseño audiovisual y motion graphics</strong> — edición y animación de piezas digitales con After Effects y Photoshop.</li>
            <li><strong>Diseño web</strong> — desarrollo de interfaces y landing pages para presentar productos y proyectos.</li>
            <li><strong>Automatización con IA</strong> — sistemas para organizar información, generar reportes y reducir trabajo manual.</li>
            <li>
              <strong>Propuesta creativa para KAOS Panamá</strong> — concepto de contenido diseñado
              específicamente para esta postulación (ver <Link to="/concept">Concepto</Link>).
            </li>
          </ul>
        </section>

        <section>
          <h2>Diferencial</h2>
          <p>Uso de IA, automatización y análisis de datos para acelerar la producción de contenido, organizar campañas y medir el desempeño digital.</p>
        </section>

        <section>
          <h2>Disponibilidad</h2>
          <p>Cobertura de eventos nocturnos y fines de semana. Disponible para realizar una prueba creativa.</p>
        </section>

        <section>
          <h2>Educación</h2>
          <p className="entry-title">Técnico Superior en Inteligencia Artificial</p>
          <p className="entry-meta">ITSE Tocumen · 2025 – presente (en curso)</p>
        </section>
      </div>
    </main>
  )
}
