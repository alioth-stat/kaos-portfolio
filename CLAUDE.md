# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio + CV site for Alioth Polo Palacios (GitHub `alioth-stat`). Deployed on Vercel at apolo-portfolio.vercel.app. All site copy is Spanish (`<html lang="es">`).

**Name (owner's instruction):** visible site UI (page text, `<title>`/meta, alt text, aria labels, web CV and the PDF CV) shows **Alejandro Polo Palacios**. Everything else (filenames, package name, code identifiers, repo metadata, docs, conversation) uses **Alioth**.

## Commands

```bash
npm run dev       # Vite dev server on http://localhost:5174
npm run build     # tsc typecheck + vite build → dist/
npm run preview   # serve dist/
npm run gen:pdfs  # render cv-src/cv.html → public/cv-*.pdf via Puppeteer
```

No test runner or linter is configured; `npm run build` (runs `tsc`) is the only check.

## Architecture

- Vite + React 19 + TypeScript SPA, `react-router-dom` routes in `src/App.tsx`: `/` (Home), `/portfolio`, `/eventos`, `/cv`; unknown paths redirect to `/`. `vercel.json` rewrites extensionless paths to `index.html` so deep links work.
- **Design direction lives in `DESIGN.md`** (owner's brief, palette, type, motion rules, dials). UI work is filtered through the antislop skills; read DESIGN.md before touching styles.
- Content is data, not markup: `src/data/projects.ts` (all projects, sectors, media, links; `featured` picks the three on Home) and `src/data/events.ts` (timeline). Home, Portfolio and Events all read from these. Assets live in `public/projects/` (webp screenshots; videos as mp4, optional webm).
- A project opens in a shadcn `Dialog` driven by the URL hash: `/portfolio#<slug>` opens that project, so Home features and event entries link straight to it.
- Styling: Tailwind v4 (`@tailwindcss/vite`) + shadcn/ui (`components.json`, style `radix-vega`, components in `src/components/ui/`). Most look-and-feel is hand-written classes in `src/styles.css`; shadcn tokens (`--background`, `--primary`...) are mapped onto the palette vars (`--ink`, `--pearl`, `--nacre`) at the top of that file. `@/` aliases `src/`.
- Motion: GSAP + ScrollTrigger through `useMotion()` in `src/lib/motion.ts`, which only runs under `prefers-reduced-motion: no-preference` and reverts on unmount. Use `gsap.from/fromTo` so the no-motion state is the final, visible state. Text that animates per letter/word is rendered with `<Split>` (keeps an sr-only copy for screen readers).
- `.nacre` (pearl gradient text) uses `background-attachment: fixed` so split letters share one continuous gradient; don't drop that or split text goes invisible.
- `App.tsx` mounts global chrome on every route: `Background` (React Bits `CRTWarp` WebGL shader via three.js, paused under reduced motion), `TargetCursor` (GSAP custom cursor), `NavBar`, `Footer`.
- React Bits components come through the shadcn CLI: `components.json` registers `@react-bits` (`npx shadcn@latest add @react-bits/<Name>-TS-CSS`). `CRTWarp.tsx` carries a local `prismatic` uniform addition; re-adding it from the registry overwrites that. Clickable elements that should snap the cursor need the `cursor-target` class.
- **CV exists twice:** `src/pages/Cv.tsx` (web) and `cv-src/cv.html` + `cv-src/theme.css` (print source). Edit both, run `npm run gen:pdfs`, and check the PDF is still 1 page. Commit the regenerated `public/cv-alioth-polo.pdf`.
- `dist/` is gitignored build output; ignore it when searching.
