import { LogoLoop } from '../components/LogoLoop'

type Project = {
  title: string
  tag: string
  blurb: string
  link: string
  linkLabel: string
  image?: string
  video?: { webm: string; mp4: string; poster: string }
  mark?: string
  accent?: 'a' | 'b' | 'c'
}

const projects: Project[] = [
  {
    title: 'Conecta Panamá',
    tag: 'Súper-app comunitaria · ganó el Hackathon ITSE–MUPA 2025',
    blurb: 'Educación, comercio local y un asistente de IA, en una sola app.',
    link: 'https://conecta-panama.vercel.app',
    linkLabel: 'Ver sitio en vivo',
    image: '/projects/conecta-panama.png',
  },
  {
    title: 'Ruido Marginal Fest',
    tag: 'Diseño web y hosting · Next.js',
    blurb: 'Sitio de un festival: lineup, entradas y FAQ, con identidad visual propia.',
    link: 'https://ruidomarginal.vercel.app',
    linkLabel: 'Ver sitio en vivo',
    image: '/projects/ruidomarginal.png',
  },
  {
    title: 'Vía Centenario — Gemelo Digital',
    tag: 'Simulación urbana · React 3D',
    blurb: 'Mapa 3D y KPIs de tráfico para la Vía Centenario.',
    link: 'https://github.com/alioth-stat/Via-Centenario-Digital-Twin',
    linkLabel: 'Ver repositorio',
    image: '/projects/via-centenario.jpg',
  },
  {
    title: 'GLaDOS Desktop Assistant',
    tag: 'IA con personalidad · Electron',
    blurb: 'Asistente de escritorio con GPT-4 y la actitud de GLaDOS.',
    link: 'https://github.com/alioth-stat/GLaDOS-desktop-assistant',
    linkLabel: 'Ver repositorio',
    image: '/projects/glados.jpg',
  },
  {
    title: 'Imaginery',
    tag: 'Herramienta visual · Python',
    blurb: 'Slideshow generativo de escritorio, con caché y limpieza automática.',
    link: 'https://github.com/alioth-stat',
    linkLabel: 'Ver perfil de GitHub',
    video: {
      webm: '/projects/imaginery.webm',
      mp4: '/projects/imaginery.mp4',
      poster: '/projects/imaginery-poster.jpg',
    },
  },
]

export function Portfolio() {
  return (
    <main className="page-content portfolio-page">
      <section className="bio-hero">
        <p className="bio-name">Alejandro Polo Palacios</p>
        <p className="eyebrow">
          <span className="eyebrow-dot" />
          Sobre mí
        </p>
        <h1 className="kinetic-headline">
          Construyo <span className="accent-italic">sistemas de IA y software</span> que
          resuelven problemas reales.
        </h1>

        <div className="bio-row">
          <figure className="photo-frame photo-frame-a">
            <img src="/projects/alejandro-professional.jpg" alt="Alejandro Polo Palacios en una entrevista de prensa" />
            <figcaption>Prensa y comunicación</figcaption>
          </figure>
          <div className="bio-row-text">
            <p>
              Trabajo con IA por delante de casi todo lo que hago. Soy becario de la Fundación
              Deveaux, y en DETA pasé buena parte de mi tiempo construyendo plataformas para la
              próxima generación de panameños: Conecta Panamá, ganador del Hackathon ITSE–MUPA
              2025, es el ejemplo más directo.
            </p>
          </div>
        </div>

        <div className="bio-row-text bio-para-full">
          <p>
            El resto es curiosidad técnica aplicada a lo que me interesa: salud, movilidad
            urbana, videojuegos, IA con personalidad. Es una combinación poco común en Panamá, y
            ahí está lo que aporto: puedo pensar como ingeniero y ejecutar como creativo, sin
            quedarme solo en uno de los dos lados.
          </p>
        </div>
      </section>

      <LogoLoop />

      <section className="projects-section">
        <p className="section-label">Proyectos</p>
        <p className="tagline">Desliza para ver más →</p>

        <div className="project-carousel">
          {projects.map((p) => (
            <a className="carousel-card cursor-target" key={p.title} href={p.link} target="_blank" rel="noreferrer">
              <div className={`carousel-media${p.image || p.video ? '' : ` card-accent-${p.accent}`}`}>
                {p.video ? (
                  <video autoPlay loop muted playsInline poster={p.video.poster}>
                    <source src={p.video.webm} type="video/webm" />
                    <source src={p.video.mp4} type="video/mp4" />
                  </video>
                ) : p.image ? (
                  <img src={p.image} alt={p.title} loading="lazy" />
                ) : (
                  <span className="carousel-mark">{p.mark}</span>
                )}
              </div>
              <div className="carousel-body">
                <p className="carousel-tag">{p.tag}</p>
                <h3>{p.title}</h3>
                <p className="carousel-blurb">{p.blurb}</p>
                <span className="carousel-link">{p.linkLabel} →</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
