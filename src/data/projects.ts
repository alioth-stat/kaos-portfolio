export type Sector = 'edge' | 'finance' | 'community' | 'web'

export const sectorLabels: Record<Sector, string> = {
  edge: 'IA en el dispositivo',
  finance: 'Banca y riesgo',
  community: 'Comunidad y educación',
  web: 'Web y creativo',
}

export type Media =
  | { kind: 'image'; src: string; alt: string; portrait?: boolean }
  | { kind: 'video'; mp4: string; webm?: string; poster: string; alt: string }

export type Project = {
  slug: string
  title: string
  year?: string
  sectors: Sector[]
  line: string
  context?: string
  body: string[]
  stack: string[]
  media: Media[]
  links: { label: string; href: string }[]
}

const ISD = 'Decentralized AI Hackathon · ISD Summit Panamá, septiembre 2026'

export const projects: Project[] = [
  {
    slug: 'delta-swarm',
    title: 'Delta-Swarm',
    year: '2026',
    sectors: ['finance'],
    line: 'Alerta temprana de fuga de depósitos, con una persona aprobando cada acción.',
    context: 'Hackathon Caja de Ahorros ITSE 2026 · Equipo 07, DELTA Black',
    body: [
      'Un modelo calcula la probabilidad de que cada cliente de depósitos se vaya, usando solo información de los 12 meses anteriores. Validación por cliente: AUC 0.80, KS 0.47.',
      'Los casos se ordenan por dinero en juego, no por probabilidad. Cada uno recibe una causa, un perfil y una acción de un catálogo de 27. Agentes ejecutan correos, cartas y tareas solo después de que una persona aprueba, y cada paso queda en un registro auditable.',
    ],
    stack: ['Python', 'MLflow', 'SageMaker', 'FastAPI', 'React'],
    media: [
      { kind: 'video', mp4: '/projects/delta-demo.mp4', poster: '/projects/delta-poster.webp', alt: 'Demo de la cola de casos de Delta-Swarm' },
      { kind: 'image', src: '/projects/delta-ficha.webp', alt: 'Ficha de un caso: causa, perfil y acción propuesta', portrait: true },
    ],
    links: [{ label: 'Ver la presentación', href: 'https://delta-swarm-hackathon.vercel.app' }],
  },
  {
    slug: 'colmena',
    title: 'Colmena',
    year: '2026',
    sectors: ['edge'],
    line: 'Un enjambre de IA que aprende en cada dispositivo y comparte lo aprendido por P2P.',
    context: `${ISD} · Reto Sovereign Intelligence at the Edge`,
    body: [
      'Cada nodo corre un modelo pequeño con QVAC y revisa sus respuestas con un verificador: un programa, etiquetas conocidas o una persona. Solo lo verificado sirve para entrenar.',
      'Cuando una habilidad falla, el nodo fabrica la herramienta que le falta y la comparte con otros nodos. Los datos crudos no salen del dispositivo y ninguna inferencia pasa por la nube.',
    ],
    stack: ['QVAC', 'Qwen3 0.6B', 'Pears P2P', 'FastAPI', 'React'],
    media: [{ kind: 'image', src: '/projects/colmena.webp', alt: 'Panel de un nodo de Colmena con sus habilidades y herramientas' }],
    links: [
      { label: 'Ver la presentación', href: 'https://colmena-pitch.vercel.app' },
      { label: 'Ver el sitio', href: 'https://colmena-xi.vercel.app' },
      { label: 'Ver el repositorio', href: 'https://github.com/alioth-stat/colmena' },
    ],
  },
  {
    slug: 'puente',
    title: 'Puente',
    year: '2026',
    sectors: ['edge', 'community'],
    line: 'Traductor de voz sin conexión para los puntos de recepción del Darién.',
    context: `${ISD} · Categoría Psy Models`,
    body: [
      'Conecta a un trabajador humanitario que habla español con un migrante que habla swahili, somalí o yoruba. La voz se transcribe con Whisper y la traducción corre en el dispositivo, sin nube.',
      'Si la salida no está en el idioma pedido, reintenta una vez y lo marca en pantalla.',
    ],
    stack: ['QVAC', 'Whisper', 'TranslatePsy', 'FastAPI', 'React'],
    media: [
      { kind: 'image', src: '/projects/puente-conversation.webp', alt: 'Conversación traducida entre español y swahili' },
      { kind: 'image', src: '/projects/puente-conversation-en.webp', alt: 'La misma interfaz en inglés' },
      { kind: 'image', src: '/projects/puente-empty.webp', alt: 'Pantalla inicial de Puente' },
    ],
    links: [
      { label: 'Ver la presentación', href: 'https://puente-pitch.vercel.app' },
      { label: 'Ver el repositorio', href: 'https://github.com/alioth-stat/puente' },
    ],
  },
  {
    slug: 'sentinel-aml',
    title: 'Sentinel-AML',
    year: '2026',
    sectors: ['edge', 'finance'],
    line: 'Detecta fraude y lavado de dinero en tiempo real, sin sacar datos del banco.',
    context: `${ISD} · Reto Caja de Ahorros`,
    body: [
      'Se conecta como consumidor adicional del stream de transacciones. Cinco heurísticas filtran primero y un modelo local juzga lo sospechoso: tipo, confianza y motivo en español.',
      'Con 85% de confianza o más congela la cuenta al instante y avisa a un analista.',
    ],
    stack: ['QVAC', 'FastAPI', 'SQLite', 'React'],
    media: [
      { kind: 'image', src: '/projects/sentinel-aml-stream.webp', alt: 'Stream de transacciones y alertas con veredicto y motivo' },
      { kind: 'image', src: '/projects/sentinel-aml.webp', alt: 'Resumen de alertas y cuentas congeladas' },
    ],
    links: [
      { label: 'Ver la presentación', href: 'https://caja-ahorros-sentinel-aml-pitch.vercel.app' },
      { label: 'Ver el repositorio', href: 'https://github.com/alioth-stat/caja-ahorros-sentinel-aml' },
    ],
  },
  {
    slug: 'sentinel-dns',
    title: 'Sentinel-DNS',
    year: '2026',
    sectors: ['edge'],
    line: 'Seguridad y calidad de red a partir de la telemetría DNS de un operador.',
    context: `${ISD} · Reto Ovnicom`,
    body: [
      'Clasifica dominios sospechosos (DGA, typosquatting, tunneling, beaconing) y envía alertas a Wazuh. También calcula un puntaje de calidad de red por zona con latencia, NXDOMAIN y saturación.',
      'Toda la inferencia corre en el equipo, sin tocar el pipeline de producción.',
    ],
    stack: ['QVAC', 'Wazuh', 'FastAPI', 'React'],
    media: [
      { kind: 'image', src: '/projects/sentinel-dns-alerts.webp', alt: 'Tablero de alertas DNS' },
      { kind: 'image', src: '/projects/sentinel-dns-qoe.webp', alt: 'Calidad de red por zona' },
      { kind: 'image', src: '/projects/sentinel-dns-transparency.webp', alt: 'Panel de transparencia del modelo' },
    ],
    links: [
      { label: 'Ver la presentación', href: 'https://ovnicom-sentinel-dns-pitch.vercel.app' },
      { label: 'Ver el repositorio', href: 'https://github.com/alioth-stat/ovnicom-sentinel-dns' },
    ],
  },
  {
    slug: 'philips',
    title: 'Base Instalada Philips',
    year: '2026',
    sectors: ['edge'],
    line: 'Un colaborador describe el equipo de un hospital y la app lo convierte en datos.',
    context: `${ISD} · Reto Philips`,
    body: [
      'En la visita, el colaborador describe lo que ve. La app extrae cliente, ciudad, modalidad, marca, modelo, cantidad y antigüedad, sin llenar un formulario a mano.',
      'Cada paso de inferencia corre en la misma máquina. Ninguna solicitud llega a un LLM en la nube.',
    ],
    stack: ['QVAC', 'FastAPI', 'SQLite', 'React'],
    media: [
      { kind: 'image', src: '/projects/philips-review.webp', alt: 'Revisión de los datos extraídos' },
      { kind: 'image', src: '/projects/philips-capture.webp', alt: 'Captura de la descripción del equipo' },
      { kind: 'image', src: '/projects/philips-panel.webp', alt: 'Panel de la base instalada' },
    ],
    links: [{ label: 'Ver el repositorio', href: 'https://github.com/alioth-stat/phillips-installed-base-intelligence' }],
  },
  {
    slug: 'asistencia',
    title: 'Asistencia escolar',
    year: '2026',
    sectors: ['community'],
    line: 'Asistencia automática para colegios, con aviso a los padres cuando un estudiante falta.',
    body: [
      'Los estudiantes marcan entrada y salida con QR o carné. El docente pasa lista tarjeta por tarjeta, y si un estudiante sigue ausente después del periodo de gracia, el sistema avisa a sus acudientes.',
    ],
    stack: ['NestJS', 'Next.js', 'Prisma', 'PostgreSQL', 'BullMQ'],
    media: [
      { kind: 'image', src: '/projects/asistencia-session.webp', alt: 'Pase de lista tarjeta por tarjeta en el móvil', portrait: true },
      { kind: 'image', src: '/projects/asistencia-home.webp', alt: 'Inicio del docente con la clase actual', portrait: true },
    ],
    links: [],
  },
  {
    slug: 'conecta-panama',
    title: 'Conecta Panamá',
    year: '2025',
    sectors: ['community'],
    line: 'Educación, comercio local y un asistente de IA en una sola app.',
    context: 'Hackathon ITSE–MUPA 2025 · 1er lugar',
    body: ['Súper-app comunitaria para mejorar la conectividad en comunidades desatendidas de Panamá.'],
    stack: ['React', 'TypeScript', 'Vercel'],
    media: [{ kind: 'image', src: '/projects/conecta-panama.png', alt: 'Inicio de Conecta Panamá' }],
    links: [{ label: 'Ver el sitio', href: 'https://conecta-panama.vercel.app' }],
  },
  {
    slug: 'via-centenario',
    title: 'Vía Centenario, gemelo digital',
    year: '2025',
    sectors: ['community'],
    line: 'Mapa 3D y KPIs de tráfico para la Vía Centenario.',
    body: ['Simulador y gemelo digital urbano para movilidad y logística en Panamá.'],
    stack: ['React', 'Three.js'],
    media: [{ kind: 'image', src: '/projects/via-centenario.jpg', alt: 'Mapa 3D de la Vía Centenario' }],
    links: [{ label: 'Ver el repositorio', href: 'https://github.com/alioth-stat/Via-Centenario-Digital-Twin' }],
  },
  {
    slug: 'ruido-marginal',
    title: 'Ruido Marginal Fest',
    year: '2026',
    sectors: ['web'],
    line: 'Sitio de un festival: lineup, entradas y FAQ, con identidad visual propia.',
    body: ['Diseño web y hosting del sitio del festival.'],
    stack: ['Next.js', 'Vercel'],
    media: [{ kind: 'image', src: '/projects/ruidomarginal.png', alt: 'Portada del sitio de Ruido Marginal Fest' }],
    links: [{ label: 'Ver el sitio', href: 'https://ruidomarginal.vercel.app' }],
  },
  {
    slug: 'glados',
    title: 'GLaDOS Desktop Assistant',
    year: '2025',
    sectors: ['web'],
    line: 'Asistente de escritorio con GPT-4 y la actitud de GLaDOS.',
    body: ['App de Electron con personalidad sarcástica, interfaz de Aperture Labs, diagnóstico del sistema y atajos de teclado.'],
    stack: ['Electron', 'OpenAI API'],
    media: [{ kind: 'image', src: '/projects/glados.jpg', alt: 'Interfaz del asistente GLaDOS' }],
    links: [{ label: 'Ver el repositorio', href: 'https://github.com/alioth-stat/GLaDOS-desktop-assistant' }],
  },
  {
    slug: 'imaginery',
    title: 'Imaginery',
    sectors: ['web'],
    line: 'Slideshow generativo de escritorio, con caché y limpieza automática.',
    body: ['Herramienta visual en Python que genera y rota imágenes en el escritorio.'],
    stack: ['Python'],
    media: [
      { kind: 'video', webm: '/projects/imaginery.webm', mp4: '/projects/imaginery.mp4', poster: '/projects/imaginery-poster.jpg', alt: 'Imaginery en funcionamiento' },
    ],
    links: [{ label: 'Ver el perfil de GitHub', href: 'https://github.com/alioth-stat' }],
  },
]

export const featured = ['delta-swarm', 'colmena', 'via-centenario'].map((s) => projects.find((p) => p.slug === s)!)
