type Skill = {
  name: string
  // Simple Icons slug + brand hex (no #) for CDN-served logos.
  slug?: string
  color?: string
  // Fallback text badge for brands not available as open icons (e.g. Adobe
  // pulled their products from Simple Icons) — edit PHOTOSHOP_LOGO_SRC /
  // AFTEREFFECTS_LOGO_SRC below to swap in a real image instead.
  label?: string
}

// ---- Replace these two with a real image path (e.g. '/logos/photoshop.png')
// once you have a properly licensed Adobe logo asset. Leave null to keep the
// text-badge fallback used below. ----
const PHOTOSHOP_LOGO_SRC: string | null = null
const AFTEREFFECTS_LOGO_SRC: string | null = null

const skills: Skill[] = [
  { name: 'Photoshop', label: 'Ps' },
  { name: 'After Effects', label: 'Ae' },
  { name: 'Blender', slug: 'blender', color: 'E87D0D' },
  { name: 'React', slug: 'react', color: '61DAFB' },
  { name: 'Vercel', slug: 'vercel', color: 'ffffff' },
  { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
  { name: 'Android', slug: 'android', color: '3DDC84' },
  { name: 'Instagram', slug: 'instagram', color: 'FF0069' },
  { name: 'X', slug: 'x', color: 'ffffff' },
  { name: 'Twitch', slug: 'twitch', color: '9146FF' },
  { name: 'YouTube', slug: 'youtube', color: 'FF0000' },
  { name: 'TikTok', slug: 'tiktok', color: 'ffffff' },
]

function LogoItem({ skill }: { skill: Skill }) {
  if (skill.name === 'Photoshop' && PHOTOSHOP_LOGO_SRC) {
    return <img className="logo-loop-img" src={PHOTOSHOP_LOGO_SRC} alt={skill.name} title={skill.name} />
  }
  if (skill.name === 'After Effects' && AFTEREFFECTS_LOGO_SRC) {
    return <img className="logo-loop-img" src={AFTEREFFECTS_LOGO_SRC} alt={skill.name} title={skill.name} />
  }
  if (skill.label) {
    return (
      <span className="logo-loop-badge" title={skill.name}>
        {skill.label}
      </span>
    )
  }
  return (
    <img
      className="logo-loop-img"
      src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
      alt={skill.name}
      title={skill.name}
      loading="lazy"
    />
  )
}

export function LogoLoop() {
  const doubled = [...skills, ...skills]
  return (
    <div className="logo-loop" aria-label="Herramientas y plataformas">
      <div className="logo-loop-track">
        {doubled.map((s, i) => (
          <div className="logo-loop-item" key={`${s.name}-${i}`}>
            <LogoItem skill={s} />
          </div>
        ))}
      </div>
    </div>
  )
}
