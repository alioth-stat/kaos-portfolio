import { RoleSwitch } from '../components/RoleSwitch'

export function CvGeneral() {
  return (
    <main className="page-content cv-page">
      <RoleSwitch />

      <div className="cv-card">
        <div className="cv-head">
          <div>
            <h1>Alejandro Polo Palacios</h1>
            <p className="cv-headline">Ayudante General · Apoyo Operativo y Logística de Eventos</p>
          </div>
          <a className="btn-solid cursor-target" href="/cv-general-alejandro-polo.pdf" download>
            Descargar PDF
          </a>
        </div>
        <p className="cv-contact">
          +507 6460-8610 · agent.apolo.st@gmail.com · Nuevo Arraiján, Panamá Oeste
        </p>

        <section>
          <h2>Perfil</h2>
          <p>
            Persona organizada, puntual y con buena disposición física, con experiencia
            coordinando logística y tareas operativas bajo presión en entornos de eventos y
            competencias. Cómodo en equipos dinámicos, ambientes de alto movimiento y horarios
            nocturnos o de fin de semana.
          </p>
        </section>

        <section>
          <h2>Fortalezas</h2>
          <ul>
            <li>Montaje y desmontaje de espacios, organización de materiales y apoyo logístico</li>
            <li>Trabajo en equipo bajo presión y en horarios extendidos</li>
            <li>Puntualidad, responsabilidad y seguimiento de instrucciones</li>
            <li>Comunicación bilingüe — español nativo, inglés nativo</li>
            <li>Resolución rápida de problemas en entornos dinámicos</li>
          </ul>
        </section>

        <section>
          <h2>Experiencia</h2>
          <p className="entry-title">DETA — Apoyo en Coordinación de Proyectos y Logística</p>
          <p className="entry-meta">Ciudad de Panamá · Ago. 2024 – May. 2026</p>
          <ul>
            <li>Actué como enlace de comunicación entre el equipo interno, el CEO y grupos externos, coordinando tareas y prioridades en paralelo.</li>
            <li>Colaboré en la organización de entregables, cronogramas y documentación de múltiples proyectos simultáneos.</li>
            <li>Trabajé bajo metodologías ágiles, adaptándome a cambios de prioridad y plazos ajustados.</li>
          </ul>
        </section>

        <section>
          <h2>Participación en eventos y competencias</h2>
          <ul>
            <li><strong>1er Lugar, Hackathon ITSE–MUPA (2025)</strong> — coordinación de equipo y entrega bajo presión de tiempo.</li>
            <li><strong>Semifinalista Global, Breakthrough Junior Challenge (2024)</strong> — top ~30 de más de 2,300 participantes.</li>
          </ul>
        </section>

        <section>
          <h2>Educación</h2>
          <p className="entry-title">Técnico Superior en Inteligencia Artificial</p>
          <p className="entry-meta">ITSE Tocumen · 2025 – presente (en curso)</p>
        </section>

        <section>
          <h2>Disponibilidad</h2>
          <p>Disponible para trabajo nocturno y de fines de semana.</p>
        </section>
      </div>
    </main>
  )
}
