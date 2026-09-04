export function Cv() {
  return (
    <main className="page-content cv-page">
      <div className="cv-card">
        <div className="cv-head">
          <div>
            <h1>Alejandro Polo Palacios</h1>
            <p className="cv-headline">Ingeniero de Agentes de IA · Automatización de Sistemas</p>
          </div>
          <a className="btn-solid cursor-target" href="/cv-alejandro-polo.pdf" download>
            Descargar PDF
          </a>
        </div>
        <p className="cv-contact">
          +507 6460-8610 · agent.apolo.st@gmail.com · apolo-portfolio.vercel.app ·
          github.com/alioth-stat · Nuevo Arraiján, Panamá Oeste, Panamá
        </p>

        <section>
          <h2>Perfil</h2>
          <p>
            Ingeniero en formación especializado en sistemas de IA agénticos y automatización.
            Como pasante de Ingeniería en IA en DETA, diseño e implemento frameworks de agentes
            autónomos, arquitecturas de Machine Learning y pipelines de evaluación para
            despliegues de LLM en producción, además de funcionalidades full-stack con Python y
            TypeScript/React. Curso el Técnico Superior en Inteligencia Artificial en el ITSE,
            Panamá. Becario de la Fundación Deveaux, Campeón del Voto Popular Regional
            (América Central/Sur) y Semifinalista Global del Breakthrough Junior Challenge 2024
            — top ~30 de más de 2,300 participantes.
          </p>
        </section>

        <section>
          <h2>Experiencia</h2>
          <p className="entry-title">DETA — Pasante de Ingeniería en IA</p>
          <p className="entry-meta">Ciudad de Panamá · Ago. 2024 – May. 2026</p>
          <ul>
            <li>Diseñó e implementó frameworks de agentes IA y pipelines multiagente para clientes empresariales.</li>
            <li>Arquitectó pipelines de evaluación ML y aplicó ingeniería de prompts para despliegues de LLM en producción.</li>
            <li>Desarrolló funcionalidades full-stack con Python (FastAPI/Flask) y TypeScript/React bajo metodología Agile/Scrum.</li>
            <li>Actuó como enlace de comunicación entre el CEO, clientes y equipos externos, coordinando múltiples proyectos en paralelo.</li>
          </ul>
        </section>

        <section>
          <h2>Proyectos</h2>
          <ul>
            <li><strong>VETTA</strong> — App veterinaria con IA: diagnóstico por visión por computadora y PLN, React Native + FastAPI/TensorFlow. <em>DETA, 2025</em></li>
            <li><strong>IMEJI</strong> — SaaS de nano-interfaz: plataforma de micro-UI personalizado con customización a nivel de nano-interacción. <em>DETA, 2025</em></li>
            <li><strong>REYDR</strong> — Sistema de alerta temprana: pipeline de ML para detección de brotes sobre datos epidemiológicos. <em>DETA, 2025</em></li>
            <li><strong>Conecta Panamá</strong> — App comunitaria para mejorar conectividad en comunidades desatendidas de Panamá; ganadora del Hackathon ITSE–MUPA 2025. <em>Personal, 2024</em></li>
            <li><strong>Vía Centenario — Gemelo Digital</strong> — Simulador y gemelo digital urbano para movilidad y logística en Panamá. <em>2025</em></li>
            <li><strong>Rediseño Web del ITSE</strong> — Rediseño frontend del sitio web del ITSE: accesibilidad, rendimiento e identidad visual. <em>ITSE, 2024</em></li>
            <li><strong>InpointOS / InmindOS</strong> — Investigación en interfaces de sistema operativo por reconocimiento de gestos y señales EEG. <em>Investigación, 2024–25</em></li>
          </ul>
        </section>

        <section>
          <h2>Educación</h2>
          <p className="entry-title">Técnico Superior en Inteligencia Artificial</p>
          <p className="entry-meta">ITSE Tocumen, Panamá · 2025 – presente (en curso)</p>
          <p className="entry-title">Bachillerato en Ciencias con Informática</p>
          <p className="entry-meta">Colegio Bilingüe San José del Carmen · Graduado 2024 · Quinto mejor promedio, currículo bilingüe (ES/EN)</p>
        </section>

        <section>
          <h2>Competencias</h2>
          <div className="skill-groups">
            <div>
              <p className="skill-label">Código</p>
              <p className="skill-items">Python, TypeScript, JavaScript, HTML/CSS, SQL, C++, Rust, C#</p>
            </div>
            <div>
              <p className="skill-label">Web / API</p>
              <p className="skill-items">React, React Native, Next.js, Swift, Express.js, FastAPI, Flask, Django, Supabase</p>
            </div>
            <div>
              <p className="skill-label">IA / ML</p>
              <p className="skill-items">TensorFlow, PyTorch, Keras, diseño de agentes, workflows subagénticos, ingeniería de prompts</p>
            </div>
            <div>
              <p className="skill-label">Diseño y herramientas</p>
              <p className="skill-items">Figma, Photoshop, Illustrator, After Effects, Blender, GIMP, Git, Jira, Scrum/Ágil</p>
            </div>
            <div>
              <p className="skill-label">Idiomas</p>
              <p className="skill-items">Español (nativo), Inglés (nativo)</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Honores y Reconocimientos</h2>
          <ul>
            <li><strong>2026</strong> — Becario, Beca Fundación Deveaux</li>
            <li><strong>2025</strong> — 1er Lugar, Hackathon ITSE–MUPA</li>
            <li><strong>2024</strong> — Campeón de Voto Popular y Semifinalista Global (top ~30/2,300+), Breakthrough Junior Challenge</li>
            <li><strong>2024</strong> — 1er Lugar, Química en la Cocina — III Competencia</li>
            <li><strong>2024</strong> — 1er Lugar, Proyecto de Física — SECUBICAR</li>
            <li><strong>2024</strong> — 1er Lugar, Olimpiada de Biología — SECUBICAR</li>
            <li><strong>2023</strong> — Vocero, Club de Ciencias — CBS del Carmen</li>
          </ul>
        </section>
      </div>
    </main>
  )
}
