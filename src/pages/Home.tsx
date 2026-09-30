import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Split } from '@/components/Split'
import { ProjectMedia } from '@/components/ProjectMedia'
import GlassSurface from '@/components/GlassSurface'
import { featured, projects } from '@/data/projects'
import { eventsByYear } from '@/data/events'
import { gsap, useMotion } from '@/lib/motion'

const statement =
  'Pasé casi dos años en DETA diseñando agentes y pipelines de ML para clientes reales. Ahora construyo prototipos que corren la IA en el dispositivo: los datos no salen del banco, del hospital ni de la frontera.'

const latestEvents = eventsByYear.flatMap((y) => y.events.map((e) => ({ ...e, year: y.year }))).slice(0, 3)

const compositions = ['feature-a', 'feature-b', 'feature-c']

export function Home() {
  const root = useRef<HTMLElement>(null)

  useMotion(root, () => {
    // load: the name rises letter by letter, then the rest settles in
    const intro = gsap.timeline({ defaults: { ease: 'expo.out' } })
    intro
      .from('.hero-name .split-char', { yPercent: 115, duration: 1.2, stagger: 0.035 })
      .from('.portrait', { y: 80, rotate: 9, opacity: 0, duration: 1.4 }, 0.25)
      .from('.hero-foot > *', { y: 24, opacity: 0, duration: 1, stagger: 0.1 }, 0.6)

    // scroll: the pearl shifts and the name drifts up as you leave the hero
    gsap.to('.hero-name', {
      '--nacre-x': '100%',
      yPercent: -12,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    })

    // statement lights up word by word, so the pitch gets read
    gsap.fromTo(
      '.statement .split-word',
      { opacity: 0.14 },
      {
        opacity: 1,
        stagger: 0.12,
        ease: 'none',
        scrollTrigger: { trigger: '.statement', start: 'top 70%', end: 'bottom 55%', scrub: true },
      },
    )

    gsap.utils.toArray<HTMLElement>('.feature').forEach((el) => {
      const media = el.querySelector('.feature-media')
      const inner = el.querySelector('.feature-media > *')
      gsap.fromTo(
        media,
        { clipPath: 'inset(14% 10% 14% 10%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 35%', scrub: true },
        },
      )
      gsap.fromTo(
        inner,
        { yPercent: -10 },
        { yPercent: 0, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } },
      )
      gsap.from(el.querySelectorAll('.feature-text > *'), {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 70%' },
      })
    })

    gsap.from('.programme li', {
      x: -32,
      opacity: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: 'expo.out',
      scrollTrigger: { trigger: '.programme', start: 'top 80%' },
    })

    gsap.from('.closing .split-char', {
      yPercent: 110,
      duration: 1.1,
      stagger: 0.04,
      ease: 'expo.out',
      scrollTrigger: { trigger: '.closing', start: 'top 75%' },
    })
    gsap.to('.closing .big', {
      '--nacre-x': '100%',
      ease: 'none',
      scrollTrigger: { trigger: '.closing', start: 'top bottom', end: 'bottom bottom', scrub: true },
    })
  })

  return (
    <main ref={root}>
      <section className="hero shell">
        <figure className="portrait">
          <img src="/projects/alioth-polo.jpg" alt="Alejandro Polo Palacios durante una entrevista de prensa" />
          <figcaption>Panamá, 2026</figcaption>
        </figure>

        <h1 className="hero-name display nacre">
          <Split text="Alejandro" by="char" className="line" />
          <Split text="Polo Palacios" by="char" className="line line-2" />
        </h1>

        <div className="hero-foot">
          <div>
            <p className="hero-claim">
              Construyo IA que trabaja donde está el problema: en el banco, en la frontera, en el aula.
            </p>
            <div className="hero-actions">
              <Link to="/portfolio" className="btn-pearl cursor-target">
                Ver los proyectos
              </Link>
              <a href="/cv-alioth-polo.pdf" download className="btn-line cursor-target">
                Descargar CV (PDF)
              </a>
            </div>
          </div>
          <p className="meta m-0 text-right max-md:text-left">
            Ingeniero de agentes de IA
            <br />
            ITSE · Beca Fundación Deveaux
          </p>
        </div>
      </section>

      <section className="statement shell">
        <span className="catalog">Sobre mí</span>
        <p>
          <Split text={statement} by="word" />
        </p>
      </section>

      <section className="shell" aria-labelledby="work-title">
        <hr className="rule-double" />
        <div className="work-head">
          <h2 id="work-title" className="display">Obra reciente</h2>
          <Link to="/portfolio" className="btn-line cursor-target">
            Los {projects.length} proyectos →
          </Link>
        </div>

        {featured.map((p, i) => (
          <GlassSurface
            key={p.slug}
            width="100%"
            height="auto"
            borderRadius={10}
            backgroundOpacity={0.4}
            saturation={1.3}
            className="feature-glass"
          >
            <Link to={`/portfolio#${p.slug}`} className={`feature ${compositions[i]} cursor-target`}>
              <div className="feature-media">
                <ProjectMedia media={p.media[0]} />
              </div>
              <div className="feature-text">
                <div>
                  <span className="catalog">
                    Nº {String(i + 1).padStart(2, '0')} · {p.year}
                  </span>
                  <h3 className="display">{p.title}</h3>
                </div>
                <div>
                  <p>{p.line}</p>
                  {p.context && <p className="meta">{p.context}</p>}
                  <span className="btn-line">Ver el proyecto →</span>
                </div>
              </div>
            </Link>
          </GlassSurface>
        ))}
      </section>

      <section className="shell" aria-labelledby="events-title">
        <hr className="rule-double" />
        <div className="work-head">
          <h2 id="events-title" className="display">En escena</h2>
          <Link to="/eventos" className="btn-line cursor-target">
            Toda la trayectoria →
          </Link>
        </div>
        <ul className="programme">
          {latestEvents.map((e) => (
            <li key={e.title}>
              <span className="catalog">{e.when ? `${e.when} ${e.year}` : e.year}</span>
              <p className="title">{e.title}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="closing shell">
        <span className="catalog">Contacto</span>
        <div>
          <a href="mailto:agent.apolo.st@gmail.com" className="big display nacre cursor-target">
            <Split text="Hablemos." by="char" />
          </a>
        </div>
        <p className="meta mt-6">agent.apolo.st@gmail.com · +507 6460-8610</p>
      </section>
    </main>
  )
}
