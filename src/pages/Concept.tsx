import { ConceptVideoBackground } from '../components/ConceptVideoBackground'
import { InstagramEmbed } from '../components/InstagramEmbed'

const igPosts = [
  'https://www.instagram.com/reel/DcTLlQMBGoi/',
  'https://www.instagram.com/p/Db8-NEulYld/',
  'https://www.instagram.com/reel/DbwGQZnBGQA/',
]

const figures = [
  { id: 'guy', image: '/concept/cutout-guy.png' },
  { id: 'dj', image: '/concept/cutout-dj.png' },
  { id: 'girl', image: '/concept/cutout-girl.png' },
] as const

export function Concept() {
  return (
    <main className="page-content concept-page">
      <ConceptVideoBackground />

      <h1>Concepto: Noche KAOS</h1>
      <p className="tagline">
        Propuesta creativa para KAOS Panamá
      </p>

      <section className="kaos-hero">
        <div className="cutout-row">
          {figures.map((f) => (
            <button key={f.id} className={`cutout-figure cursor-target cutout-${f.id}`} aria-label={f.id}>
              <img className="cutout-figure-fill" src={f.image} alt="" />
            </button>
          ))}
        </div>

        <div className="kaos-info-grid">
          <div className="kaos-info-col">
            <p className="kaos-info-heading">Entrada General</p>
            <p>Libre hasta las 11:00 PM</p>
            <p>Preventa por Passline</p>
          </div>

          <div className="kaos-info-center">
            <p className="poster-eyebrow">Casco Antiguo · Panamá</p>
            <p className="poster-title">KAOS</p>
            <p className="poster-sub">Noche de Sábado</p>
            <div className="poster-lineup">
              <p>DJ LINEUP</p>
              <p>DJ Nombre 1 — DJ Nombre 2 — DJ Nombre 3</p>
            </div>
            <p className="poster-cta">Escanea el QR</p>
          </div>

          <div className="kaos-info-col">
            <p className="kaos-info-heading">Ladies Pass</p>
            <p>Libre hasta las 11:00 PM</p>
            <p>Reservas de cumpleaños</p>
          </div>
        </div>
      </section>

      <section className="concept-block">
        <p className="section-label">@kaosclubpanama</p>
        <div className="carousel-mock">
          {igPosts.map((url) => (
            <InstagramEmbed url={url} key={url} />
          ))}
        </div>
      </section>
    </main>
  )
}
