import { useLayoutEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Runs `setup` only when the visitor allows motion; everything it creates is
// reverted on unmount, when deps change, or when the preference flips.
export function useMotion(scope: RefObject<HTMLElement | null>, setup: () => void, deps: unknown[] = []) {
  useLayoutEffect(() => {
    const mm = gsap.matchMedia(scope.current ?? undefined)
    mm.add('(prefers-reduced-motion: no-preference)', setup)
    return () => mm.revert()
  }, deps)
}

export { gsap, ScrollTrigger }
