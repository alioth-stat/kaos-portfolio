type Project = {
  title: string
  tag: string
  blurb: string
  link: string
  linkLabel: string
  image?: string
  mark?: string
  accent?: 'a' | 'b' | 'c'
}

const projects: Project[] = [
  {
    title: 'SAPE-PrEP',
    tag: 'Producto full-stack · en vivo',
    blurb: 'Orientación educativa explicable. No diagnostica, no prescribe.',
    link: 'https://sape-prep.vercel.app',
    linkLabel: 'Ver sitio en vivo',
    image: '/projects/sape-prep.png',
  },
  {
    title: 'Conecta Panamá',
    tag: 'Súper-app comunitaria · ganó el Hackathon ITSE–MUPA 2025',
    blurb: 'Educación, comercio local y un asistente de IA, en una sola app.',
    link: 'https://conecta-panama.vercel.app',
    linkLabel: 'Ver sitio en vivo',
    image: '/projects/conecta-panama.png',
  },
  {
    title: 'LocalEpiGuard (REYDR)',
    tag: 'IA aplicada · salud escolar',
    blurb: 'Reporte y detección temprana de brotes escolares en Panamá.',
    link: 'https://reydr-smart-outbreak-detection-syst.vercel.app',
    linkLabel: 'Ver sitio en vivo',
    image: '/projects/reydr.png',
  },
  {
    title: 'Vía Centenario — Gemelo Digital',
    tag: 'Simulación urbana · React 3D',
    blurb: 'Mapa 3D y KPIs de tráfico para la Vía Centenario.',
    link: 'https://github.com/alioth-stat/Via-Centenario-Digital-Twin',
    linkLabel: 'Ver repositorio',
    mark: 'VC',
    accent: 'a',
  },
  {
    title: 'GLaDOS Desktop Assistant',
    tag: 'IA con personalidad · Electron',
    blurb: 'Asistente de escritorio con GPT-4 y la actitud de GLaDOS.',
    link: 'https://github.com/alioth-stat/GLaDOS-desktop-assistant',
    linkLabel: 'Ver repositorio',
    mark: 'GL',
    accent: 'b',
  },
  {
    title: 'Imaginery',
    tag: 'Herramienta visual · Python',
    blurb: 'Slideshow generativo de escritorio, con caché y limpieza automática.',
    link: 'https://github.com/alioth-stat',
    linkLabel: 'Ver perfil de GitHub',
    mark: 'IM',
    accent: 'c',
  },
]

export function Portfolio() {
  return (
    <main className="page-content portfolio-page">
      <section className="bio-hero">
        <p className="eyebrow">
          <span className="eyebrow-dot" />
          Sobre mí
        </p>
        <h1 className="kinetic-headline">
          Ayudo a marcas y eventos a crear <span className="accent-italic">contenido que conecta.</span>
        </h1>

        <div className="photo-pair">
          <div className="photo-frame photo-frame-a">
            <span>Foto próximamente</span>
          </div>
          <div className="photo-frame photo-frame-b">
            <span>Foto próximamente</span>
          </div>
        </div>

        <p className="bio-caption">
          Diseño, automatización con IA y una base técnica que no es la típica de alguien en
          marketing. Esto es lo que he hecho con esa mezcla.
        </p>
      </section>

      <section className="projects-section">
        <p className="section-label">Proyectos</p>
        <p className="tagline">Desliza para ver más →</p>

        <div className="project-carousel">
          {projects.map((p) => (
            <a className="carousel-card cursor-target" key={p.title} href={p.link} target="_blank" rel="noreferrer">
              <div className={`carousel-media${p.image ? '' : ` card-accent-${p.accent}`}`}>
                {p.image ? (
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
