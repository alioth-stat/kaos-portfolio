const projects: [string, string, string][] = [
  ['Delta-Swarm', 'Alerta temprana de fuga de depósitos (AUC 0.80) con acciones aprobadas por una persona.', 'Hackathon Caja de Ahorros ITSE, 2026'],
  ['Colmena, Puente, Sentinel-AML, Sentinel-DNS, Base Instalada Philips', 'Cinco prototipos de IA en el dispositivo con QVAC: aprendizaje P2P, traducción de voz offline, fraude/AML, amenazas DNS y datos de campo.', 'Decentralized AI Hackathon, ISD Summit Panamá, 2026'],
  ['Asistencia escolar', 'Asistencia por QR o carné con aviso automático a acudientes. NestJS, Next.js.', '2026'],
  ['VETTA', 'App veterinaria con IA: diagnóstico por visión por computadora y PLN, React Native + FastAPI/TensorFlow.', 'DETA, 2025'],
  ['IMEJI', 'SaaS de nano-interfaz: plataforma de micro-UI personalizado con customización a nivel de nano-interacción.', 'DETA, 2025'],
  ['REYDR', 'Sistema de alerta temprana: pipeline de ML para detección de brotes sobre datos epidemiológicos.', 'DETA, 2025'],
  ['Conecta Panamá', 'App comunitaria para mejorar la conectividad en comunidades desatendidas de Panamá; ganadora del Hackathon ITSE–MUPA 2025.', 'Personal, 2024'],
  ['Vía Centenario, gemelo digital', 'Simulador y gemelo digital urbano para movilidad y logística en Panamá.', '2025'],
  ['Rediseño web del ITSE', 'Rediseño frontend del sitio del ITSE: accesibilidad, rendimiento e identidad visual.', 'ITSE, 2024'],
  ['InpointOS / InmindOS', 'Investigación en interfaces de sistema operativo por reconocimiento de gestos y señales EEG.', 'Investigación, 2024–25'],
]

const skills: [string, string][] = [
  ['Código', 'Python, TypeScript, JavaScript, HTML/CSS, SQL, C++, Rust, C#'],
  ['Web / API', 'React, React Native, Next.js, Swift, Express.js, FastAPI, Flask, Django, Supabase'],
  ['IA / ML', 'TensorFlow, PyTorch, Keras, QVAC, diseño de agentes, workflows subagénticos, ingeniería de prompts'],
  ['Diseño y herramientas', 'Figma, Photoshop, Illustrator, After Effects, Blender, GIMP, Git, Jira, Scrum/Ágil'],
  ['Idiomas', 'Español (nativo), inglés (nativo)'],
]

const honors: [string, string][] = [
  ['2026', 'Participante, Decentralized AI Hackathon, ISD Summit Panamá (cinco prototipos)'],
  ['2026', 'Participante, Hackathon Caja de Ahorros ITSE'],
  ['2026', 'Becario, Beca Fundación Deveaux'],
  ['2025', '1er lugar, Hackathon ITSE–MUPA'],
  ['2024', 'Campeón de Voto Popular y semifinalista global (top ~30 de 2,300+), Breakthrough Junior Challenge'],
  ['2024', '1er lugar, Química en la Cocina, III Competencia'],
  ['2024', '1er lugar, Proyecto de Física, SECUBICAR'],
  ['2024', '1er lugar, Olimpiada de Biología, SECUBICAR'],
  ['2023', 'Vocero, Club de Ciencias, CBS del Carmen'],
]

export function Cv() {
  return (
    <main className="shell">
      <article className="cv-sheet">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1>Alejandro Polo Palacios</h1>
            <p className="cv-headline">Ingeniero de agentes de IA · Automatización de sistemas</p>
          </div>
          <a className="btn-ink cursor-target" href="/cv-alioth-polo.pdf" download>
            Descargar PDF
          </a>
        </div>
        <p className="cv-contact">
          +507 6460-8610 · agent.apolo.st@gmail.com · apolo-portfolio.vercel.app · github.com/alioth-stat · Nuevo
          Arraiján, Panamá Oeste
        </p>

        <section>
          <h2>Perfil</h2>
          <p>
            Ingeniero en formación especializado en sistemas de IA agénticos y automatización. En DETA diseñé frameworks
            de agentes autónomos, arquitecturas de Machine Learning y pipelines de evaluación para LLM en producción,
            además de funcionalidades full-stack con Python y TypeScript/React. En 2026 construí seis prototipos en los
            hackathons de ISD Summit y Caja de Ahorros, cinco de ellos con la inferencia en el dispositivo. Curso el
            Técnico Superior en Inteligencia Artificial en el ITSE con la Beca Fundación Deveaux.
          </p>
        </section>

        <section>
          <h2>Experiencia</h2>
          <p className="entry-title">DETA · Pasante de Ingeniería en IA</p>
          <p className="entry-meta">Ciudad de Panamá · Ago. 2024 a May. 2026</p>
          <ul>
            <li>Diseñó e implementó frameworks de agentes IA y pipelines multiagente para clientes empresariales.</li>
            <li>Arquitectó pipelines de evaluación ML y aplicó ingeniería de prompts para despliegues de LLM en producción.</li>
            <li>Desarrolló funcionalidades full-stack con Python (FastAPI/Flask) y TypeScript/React bajo metodología Agile/Scrum.</li>
            <li>Actuó como enlace entre el CEO, clientes y equipos externos, coordinando varios proyectos en paralelo.</li>
          </ul>
        </section>

        <section>
          <h2>Proyectos</h2>
          <ul>
            {projects.map(([name, text, where]) => (
              <li key={name}>
                <strong>{name}</strong>: {text} <em>{where}</em>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Educación</h2>
          <p className="entry-title">Técnico Superior en Inteligencia Artificial</p>
          <p className="entry-meta">ITSE Tocumen, Panamá · 2025 a la fecha</p>
          <p className="entry-title">Bachillerato en Ciencias con Informática</p>
          <p className="entry-meta">
            Colegio Bilingüe San José del Carmen · Graduado 2024 · Quinto mejor promedio, currículo bilingüe (ES/EN)
          </p>
        </section>

        <section>
          <h2>Competencias</h2>
          <div className="grid gap-3">
            {skills.map(([label, items]) => (
              <div key={label}>
                <p className="entry-title">{label}</p>
                <p className="m-0 text-[#55514b]">{items}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>Honores y reconocimientos</h2>
          <ul>
            {honors.map(([year, text]) => (
              <li key={text}>
                <strong>{year}</strong> · {text}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  )
}
