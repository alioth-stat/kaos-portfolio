import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'
import { ProjectMedia } from './ProjectMedia'
import { sectorLabels, type Project } from '@/data/projects'

export function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <Dialog open={project !== null} onOpenChange={(open) => !open && onClose()}>
      {project && (
        <DialogContent className="project-dialog sm:max-w-4xl gap-6">
          <div className="pr-10">
            <p className="catalog m-0">
              {[project.year, ...project.sectors.map((s) => sectorLabels[s])].filter(Boolean).join(' · ')}
            </p>
            <DialogTitle className="display nacre">{project.title}</DialogTitle>
            <DialogDescription className="text-lg text-[var(--pearl)] mt-4 mb-0 max-w-[48ch]">
              {project.line}
            </DialogDescription>
          </div>

          {project.media.length > 1 ? (
            <Carousel opts={{ loop: true }} className="mx-10 sm:mx-12">
              <CarouselContent>
                {project.media.map((m, i) => (
                  <CarouselItem key={i}>
                    <div className={`dialog-media${m.kind === 'image' && m.portrait ? ' portrait' : ''}`}>
                      <ProjectMedia media={m} eager={i === 0} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="cursor-target" />
              <CarouselNext className="cursor-target" />
            </Carousel>
          ) : (
            <div className={`dialog-media${project.media[0].kind === 'image' && project.media[0].portrait ? ' portrait' : ''}`}>
              <ProjectMedia media={project.media[0]} eager />
            </div>
          )}

          <div className="grid gap-6 md:grid-cols-[3fr_2fr]">
            <div className="text-[var(--pearl-2)] space-y-3">
              {project.context && <p className="meta m-0">{project.context}</p>}
              {project.body.map((p) => (
                <p key={p} className="m-0">{p}</p>
              ))}
            </div>
            <div className="space-y-5">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <Badge key={s} variant="outline" className="border-[var(--line-2)] text-[var(--pearl-2)] font-normal">
                    {s}
                  </Badge>
                ))}
              </div>
              {project.links.length > 0 ? (
                <div className="flex flex-col items-start">
                  {project.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="btn-line cursor-target">
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              ) : (
                <div>
                  <p className="meta m-0">Código privado.</p>
                  <a
                    href={`mailto:agent.apolo.st@gmail.com?subject=${encodeURIComponent(project.title)}`}
                    className="btn-line cursor-target"
                  >
                    Escribir sobre este proyecto
                  </a>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}
