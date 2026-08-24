type Project = {
  title: string
  tag: string
  description: string
  link: string
  linkLabel: string
}

const projects: Project[] = [
  {
    title: 'SAPE-PrEP',
    tag: 'Producto full-stack · desplegado en vivo',
    description:
      'Aplicación web de orientación educativa (no diagnóstica) con un motor de reglas explicable, backend en FastAPI y frontend en React/TypeScript. Desplegada en producción en Vercel.',
    link: 'https://sape-prep-du55.vercel.app',
    linkLabel: 'Ver sitio en vivo',
  },
  {
    title: 'Vía Centenario — Gemelo Digital',
    tag: 'Simulación urbana · React 3D',
    description:
      'Simulador y gemelo digital de la Vía Centenario: mapa 3D interactivo, panel de KPIs, controles de escenario y comparación de tráfico, propuesto como herramienta de movilidad y logística para Panamá.',
    link: 'https://github.com/alioth-stat/Via-Centenario-Digital-Twin',
    linkLabel: 'Ver repositorio',
  },
  {
    title: 'Conecta Panamá',
    tag: 'Super-app comunitaria · ganador de hackathon',
    description:
      'Plataforma que conecta a ciudadanos panameños con educación, información verificada y comercio local: microaprendizaje gamificado, marketplace georreferenciado y asistente de IA. Proyecto ganador del Hackathon ITSE–MUPA 2025.',
    link: 'https://github.com/alioth-stat/conecta-panama',
    linkLabel: 'Ver repositorio',
  },
  {
    title: 'REYDR — Sistema de Detección de Brotes',
    tag: 'IA aplicada · dashboards',
    description:
      'Sistema de alerta temprana para brotes de enfermedades, con modelo de predicción entrenado sobre datos biométricos capturados en Panamá y dashboards de monitoreo.',
    link: 'https://github.com/alioth-stat/REYDR-Smart-Outbreak-Detection-System',
    linkLabel: 'Ver repositorio',
  },
  {
    title: 'Imaginery',
    tag: 'Herramienta visual · Python',
    description:
      'Aplicación de escritorio que transmite un slideshow continuo de imágenes con manejo de caché y limpieza automática — un experimento de producción de contenido visual generativo/curado en tiempo real.',
    link: 'https://github.com/alioth-stat',
    linkLabel: 'Ver perfil de GitHub',
  },
  {
    title: 'GLaDOS Desktop Assistant',
    tag: 'IA con personalidad · Electron',
    description:
      'Asistente de escritorio con IA (GPT-4) inspirado en GLaDOS de Portal: interfaz temática, diagnósticos del sistema y atajos de teclado, con builds multiplataforma.',
    link: 'https://github.com/alioth-stat/GLaDOS-desktop-assistant',
    linkLabel: 'Ver repositorio',
  },
]

export function Portfolio() {
  return (
    <main className="page-content">
      <h1>Portafolio</h1>
      <p className="tagline">
        Selección de proyectos que combinan diseño, producto y automatización con IA.
      </p>

      <div className="project-grid">
        {projects.map((p) => (
          <a className="project-card cursor-target" key={p.title} href={p.link} target="_blank" rel="noreferrer">
            <p className="project-tag">{p.tag}</p>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <span className="project-link">{p.linkLabel} →</span>
          </a>
        ))}
      </div>
    </main>
  )
}
