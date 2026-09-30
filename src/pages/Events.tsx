import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Split } from '@/components/Split'
import { eventsByYear } from '@/data/events'
import { projects } from '@/data/projects'
import { gsap, useMotion } from '@/lib/motion'

const titleOf = (slug: string) => projects.find((p) => p.slug === slug)?.title ?? slug

export function Events() {
  const root = useRef<HTMLElement>(null)

  useMotion(root, () => {
    gsap.from('.page-head .split-char', { yPercent: 110, duration: 1.1, stagger: 0.04, ease: 'expo.out' })

    gsap.utils.toArray<HTMLElement>('.year-block').forEach((block) => {
      // the double rule draws across as each year arrives
      gsap.fromTo(
        block,
        { '--rule': 0 },
        { '--rule': 1, ease: 'none', scrollTrigger: { trigger: block, start: 'top 90%', end: 'top 50%', scrub: true } },
      )
      gsap.from(block.querySelectorAll('.event'), {
        y: 48,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'expo.out',
        scrollTrigger: { trigger: block, start: 'top 70%' },
      })
    })
  })

  return (
    <main ref={root} className="shell">
      <header className="page-head">
        <h1 className="display nacre">
          <Split text="Eventos" by="char" />
        </h1>
        <p>Hackathons, competencias y reconocimientos, del más reciente al primero.</p>
      </header>

      {eventsByYear.map(({ year, events }) => (
        <section key={year} className="year-block" aria-labelledby={`y-${year}`}>
          <h2 id={`y-${year}`} className="year display">
            {year}
          </h2>
          <div>
            {events.map((e, i) => (
              <article key={e.title} className="event">
                <span className="catalog">
                  Nº {String(i + 1).padStart(2, '0')}
                  {e.when ? ` · ${e.when}` : ''}
                </span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
                {e.projects && (
                  <div className="event-projects">
                    {e.projects.map((slug) => (
                      <Link key={slug} to={`/portfolio#${slug}`} className="btn-line cursor-target">
                        {titleOf(slug)} →
                      </Link>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}
