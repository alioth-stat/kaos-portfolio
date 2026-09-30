import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { ProjectDialog } from '@/components/ProjectDialog'
import { posterOf } from '@/components/ProjectMedia'
import { Split } from '@/components/Split'
import { projects, sectorLabels, type Sector } from '@/data/projects'
import { gsap, useMotion } from '@/lib/motion'

type Filter = 'all' | Sector

export function Portfolio() {
  const root = useRef<HTMLElement>(null)
  const preview = useRef<HTMLDivElement>(null)
  const [filter, setFilter] = useState<Filter>('all')
  const [hovered, setHovered] = useState<string | null>(null)
  const { hash } = useLocation()
  const navigate = useNavigate()

  // the open project lives in the URL hash so a single project can be shared
  const open = projects.find((p) => p.slug === hash.slice(1)) ?? null
  const visible = filter === 'all' ? projects : projects.filter((p) => p.sectors.includes(filter))
  const hoveredProject = projects.find((p) => p.slug === hovered)

  useMotion(root, () => {
    gsap.from('.page-head .split-char', { yPercent: 110, duration: 1.1, stagger: 0.04, ease: 'expo.out' })
  })

  useMotion(
    root,
    () => {
      gsap.from('.index-row', { y: 28, opacity: 0, duration: 0.8, stagger: 0.05, ease: 'expo.out' })
    },
    [filter],
  )

  // preview image trails the pointer with a little lag
  useEffect(() => {
    const el = preview.current
    if (!el) return
    const x = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3' })
    const y = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3' })
    const move = (e: PointerEvent) => {
      x(e.clientX + 24)
      y(e.clientY - 120)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  useEffect(() => {
    gsap.to(preview.current, { opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.92, duration: 0.3 })
  }, [hovered])

  return (
    <main ref={root} className="shell">
      <header className="page-head">
        <h1 className="display nacre">
          <Split text="Proyectos" by="char" />
        </h1>
        <p>
          Sistemas de IA y software que construí en hackathons, en DETA y por mi cuenta. Abre cualquiera para ver
          capturas, stack y enlaces.
        </p>
      </header>

      <ToggleGroup
        type="single"
        value={filter}
        onValueChange={(v) => v && setFilter(v as Filter)}
        className="filters"
        aria-label="Filtrar proyectos por área"
      >
        <ToggleGroupItem value="all" className="cursor-target">
          Todos ({projects.length})
        </ToggleGroupItem>
        {(Object.keys(sectorLabels) as Sector[]).map((s) => (
          <ToggleGroupItem key={s} value={s} className="cursor-target">
            {sectorLabels[s]}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <ul className="index" onPointerLeave={() => setHovered(null)}>
        {visible.map((p) => (
          <li key={p.slug}>
            <button
              type="button"
              className="index-row cursor-target"
              onPointerEnter={() => setHovered(p.slug)}
              onClick={() => navigate(`#${p.slug}`)}
            >
              <span className="catalog">Nº {String(projects.indexOf(p) + 1).padStart(2, '0')}</span>
              <span>
                <span className="name">{p.title}</span>
                <span className="line">{p.line}</span>
              </span>
              <span className="sector meta">{p.sectors.map((s) => sectorLabels[s]).join(', ')}</span>
              <span className="year meta">{p.year}</span>
              <img className="index-thumb" src={posterOf(p.media[0])} alt="" loading="lazy" />
            </button>
          </li>
        ))}
      </ul>

      <div ref={preview} className="preview" aria-hidden="true">
        {hoveredProject && <img src={posterOf(hoveredProject.media[0])} alt="" />}
      </div>

      <div className="h-24" />

      <ProjectDialog project={open} onClose={() => navigate('/portfolio', { replace: true })} />
    </main>
  )
}
