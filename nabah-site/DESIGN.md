# Design System: Nabah (نَبَأ) — Marketing Site

Reused verbatim from the shipping app's `design_guidelines.json` and
`frontend/src/theme.ts` — this site is not a new visual world, it is the
app's own "Jewel & Luxury" archetype extended onto the web. See
[[nabah-project-overview]] in project memory for where the source of truth
lives.

## 1. Visual Theme & Atmosphere

A restrained, jewel-box-dark interface: charcoal depths, a single warm gold
accent, and unhurried 400ms transitions that never bounce. Density is
gallery-airy (2–3) — generous section breathing room, never a "daily app"
grid. Variance is offset-asymmetric (6–7): the hero and phone mockup break
center, feature cards interlock in an uneven bento rather than three equal
columns. Motion is fluid-CSS (4–5), not cinematic-choreography — the app's
own animation law ("slow, deliberate, never bouncy") caps how far the site
is allowed to push GSAP.

## 2. Color Palette & Roles

- **Void Black** (`#0D0D0D`) — primary page background
- **Deep Surface** (`#111318`) — section/card background, modal sheets
- **Card Ink** (`#1A1B22`) — nested card fill, phone-mockup chrome
- **Hover Ink** (`#22232C`) — hover/active state fill
- **Subtle Border** (`#2A2820`) — hairline dividers, card edges
- **Gold Border** (`#C9A35540`) — accent-tinted borders (25% opacity gold)
- **Gold Primary** (`#C9A355`) — the ONE accent: CTAs, headline gold, icons, countdown numerals
- **Gold Muted** (`#8A7440`) — secondary gold (progress track, tagline text)
- **Text Primary** (`#EDE8DC`) — headings, primary body
- **Text Secondary** (`#A09880`) — body copy, descriptions
- **Text Dim** (`#5A5448`) — labels, captions, least-important text
- **Danger** (`#8B3A3A`) — reserved for destructive actions only (e.g. "Delete account" on Support page); never decorative

No other colors are permitted. No purple, no neon, no gradient text on
headlines beyond the single horizon-glow motif described below.

## 3. Typography Rules

- **Display:** Cormorant Garamond — H1/H2/H3, track-tight, gold or text-primary only
- **Arabic wordmark:** Scheherazade New — renders نَبَأ exactly as the app does, gold
- **Body:** Inter — the app's own body font; kept here deliberately (brand-authentic reuse, not the generic AI default). Also used for the phone-mockup countdown specifically, tabular lining numerals, because Cormorant's oldstyle figures read unevenly in a ticking clock.
- **Banned:** any other serif, any monospace (this is not a dashboard), no font weight above 700, no script/cursive tagline font (removed; "Nabah" is the only name, no "A Guide" subtitle anywhere on the site)

## 4. Hero

- Full-bleed Void Black background with the app's own splash motif: a
  radial "horizon glow" behind the wordmark and a fading kashida line —
  not a stock photo, not a mosque silhouette. This is the same concept
  already encoded as `logo_svg_concept` in the app's design guidelines,
  scaled up for web.
- Headline max 2 lines, `clamp()`-scaled, `max-w-5xl` container. Framing is
  plain and concrete ("Five daily prayers, one quiet place"), not a
  "companion app" marketing cliché.
- One action, shown as two disabled store badges side by side (App Store
  and Google Play; there are no live links yet, both platforms are coming
  soon). Same pattern repeats once more in the closing Action section;
  that's a hero/footer echo, not a second competing CTA.
- No scroll cue, no version badge, no eyebrow micro-label.

## 5. Component Stylings

- **Buttons:** flat gold fill with charcoal text for primary; ghost
  gold-bordered for secondary. `-1px` translate on `:active`, no glow.
- **Cards:** used only where they represent real app surfaces (feature
  tiles, the phone mockup). Radius locked at `20px` everywhere. Border is
  always `1px solid var(--border-subtle)`, never a drop shadow on black.
- **Phone mockup:** a pixel-accurate recreation of the real Home screen
  (avatar, Hijri/Gregorian header, hadith card, next-prayer countdown
  card with gold progress bar, 3-tile row) — real product truth, not a
  fabricated dashboard.
- **Legal pages (Privacy/Support):** same palette, but density steps up
  and variance steps down — single column, no bento, no scroll-jacking.
  Trust-first content outranks expression here.

## 6. Layout Principles

- `max-w-6xl` content containers, `24px` screen padding matching the app's own `screen_padding` token.
- Bento feature grid: 9 features across 3 even rows (2-wide + 2-wide, four 1-wide, then 1-wide + 1-wide + 2-wide for the "Coming Soon" Hajj & Umrah tile), 4 columns × 3 rows, explicitly placed so cell sizes stay proportionate to their row instead of one tile towering over its neighbors with dead space.
- Mobile collapses every multi-column section to single column below `768px`.
- `min-h-100dvh` for the hero, never `100vh`.

## 7. Motion & Interaction

- Default duration `400ms`, easing `ease-in-out` — taken directly from the app. No spring/bounce.
- Scroll reveals: opacity + `12px` rise, staggered `60ms` per item, via IntersectionObserver (no GSAP dependency needed for this scale of site).
- Everything collapses to instant under `prefers-reduced-motion: reduce`.
- Haptics are a native-app concept only — not applicable on web; omitted rather than faked.

## 8. Anti-Patterns (Banned)

No emojis, no pure `#000000` (use `#0D0D0D`), no neon glow, no purple, no
3-equal-column feature row, no stock mosque/desert photography, no fake
div screenshots that aren't the real UI, no em dash anywhere in copy, no
scroll-cue arrows, no section-number eyebrows, no "Lorem ipsum" or
placeholder legal text — every clause in Privacy/Support reflects what the
codebase actually does.
