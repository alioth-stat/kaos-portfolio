# DESIGN.md

Direction from the owner (Alioth), transcribed:

> For recruiters, and for high-level people in the Panamanian market looking for innovators.
> Black and pearlescent shine, mixed with vintage elements and glassmorphism (my style in web design).
> Always readable and inviting. Heavy with motion, big type, only the crucial text.

Dial: ENERGY 3 / RHYTHM 3 / MOTION 3

## Palette

| Token | Value | Use |
|---|---|---|
| `--ink` | `#0b0b0c` | Page ground. Black is the owner's brand choice, not a "tech" default. |
| `--ink-2` | `#151517` | Raised surfaces (rows on hover, media wells). |
| `--pearl` | `#ece7df` | Body text. Warm off-white reads as printed paper, not screen white. |
| `--pearl-2` | `#cbc5bb` | Secondary text. |
| `--pearl-3` | `#bdb7ae` | Meta text only (dates, catalogue numbers). AA even over the brightest CRT background cells. |
| `--nacre` | pearl gradient | The one accent. Only on: the name, one italic word per screen, the primary CTA. |

The nacre gradient mixes rose, aqua, gold and lilac because real mother-of-pearl does; saturation raised at the owner's request. It moves only when the visitor scrolls or hovers, never on a loop.

Scale: root font-size is 90% and vw-based sizes were scaled by 0.9 (owner asked for everything a little smaller).

## Type

- Display: **Fraunces** (variable, soft + wonk axes). A 1970s-style soft serif is the vintage voice; big sizes only.
- Text: **Hanken Grotesk**. A grotesque with early-1900s roots that pairs with the serif and stays readable at 16px.

## Vintage elements

- Catalogue numbering (`Nº 01`) on projects and events: the identity motif, repeated on every page.
- Double rules (`border-style: double`) as section dividers, like an old printed programme.
- Film grain overlay, static, very low opacity: makes the black read as a photographic print.
- Portrait shown uncropped and in full color (owner's request).

## Glass

Glass is the owner's signature: the nav, the project dialog, the portrait plate, and (owner's request, 2026-09-30) every feature panel in "Obra reciente", using the React Bits `GlassSurface` from the shadcn registry. This knowingly exceeds antislop's 2-surface cap (R-10).

## Motion (GSAP + ScrollTrigger)

Every animation is tied to load or to the visitor's scroll/hover, and all of it switches off under `prefers-reduced-motion`.

- Name letters rise once on load: the first focal point.
- Statement paragraph lights up word by word as you scroll: makes the crucial text get read.
- Project media reveal with a clip wipe and parallax: gives each project its own moment.
- Timeline rule draws with scroll on the events page.
- Background: React Bits `CRTWarp` (shadcn registry `@react-bits/CRTWarp-TS-CSS`), with a local `prismatic` uniform that cycles a pastel rainbow across the plasma so it reads as mother-of-pearl. Owner's request. It animates continuously (the one looping motion on the site); paused under reduced motion. A scrim keeps text contrast at AA.
