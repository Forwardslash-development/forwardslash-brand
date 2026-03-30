# // forwardslash development
## Brand Identity Guidelines — v1.1

---

## 01 — Brand Foundation

### Mission

Forwardslash is a web application development practice built around a single principle: software should be engineered with precision, owned completely, and distributed on your terms.

### Brand Concept

The name Forwardslash is derived from the forward slash character ( / ) — the foundational separator of every URL on the web. When a user types `https://`, they are literally invoking the protocol this business lives inside. The brand mark is `//` (double forward slash), echoing the `https://` prefix that begins every secure web address.

This is not a decorative choice. It communicates:

- Deep technical literacy — the mark means something to the right audience
- The web as native territory — not a tool, but an environment
- Clarity and directness — a slash is the simplest possible separator

### Positioning Statement

```
// Precision-crafted web applications and PWAs. No gatekeepers — software
   your business owns outright, from the code to the distribution channel.
```

### Brand Personality

- **Direct** — State the outcome clearly. Clients hire results, not methodology.
- **Technical** — Speak the language with precision. The right clients will recognise the fluency and self-select accordingly.
- **Confident** — No hedging. Own the work and the expertise. Studio voice: "we build" not "we try to help you build."
- **Minimal** — One sentence is worth three. If it can be cut, cut it. This applies to code and copy alike.

---

## 02 — Logo System

### Primary Mark

The primary logo mark is `//` (double forward slash) set in a bold monospace typeface. It should never be replaced with a single slash, an artistic ligature, or any other character combination.

```
//                  ← Primary mark (always double)
// forwardslash     ← Horizontal lockup
forwardslash        ← Wordmark only (secondary use)
```

### Clearspace

Always maintain clearspace equal to the cap-height of the `//` mark on all four sides. Nothing — no text, imagery, or other graphic element — should intrude into this protected zone.

### Sizing

The mark must never be reproduced smaller than 16px in digital contexts or 6mm in print. At small sizes, use the mark alone (`//`), not the full wordmark.

### Logo Usage

| Do | Don't |
|----|-------|
| `//` on dark backgrounds (primary use) | Single slash `/` — always double |
| Use `//` in Signal (`#00E5B0`) on dark surfaces | Stretch, skew, or rotate the mark |
| Use `//` in Void (`#0A0A0B`) on Parchment (`#F0EEE8`) | Use the mark in Signal on a white background |
| Use `//` in Parchment on Void | Add drop shadows, outlines, or decorative effects |
| Keep the mark lowercase in wordmark contexts | Capitalise: "forwardslash" not "FORWARDSLASH" |

### Logo Files

| File | Use |
|------|-----|
| `mark-dark.svg` | Social avatar, app icon, dark UI |
| `mark-light.svg` | Print, proposals, light UI |
| `mark-signal-transparent.svg` | On dark photos or surfaces |
| `mark-dark-transparent.svg` | On light surfaces |
| `lockup-horizontal-dark.svg` | Website header, email header |
| `lockup-horizontal-light.svg` | Print, documents |
| `favicon.svg` | Browser tab, PWA |

---

## 03 — Color System

### Palette

| Swatch | Hex | Name | Usage |
|--------|-----|------|-------|
| ![#00E5B0](https://via.placeholder.com/16/00E5B0/00E5B0.png) | `#00E5B0` | Signal | Primary accent — links, icons, highlights |
| ![#0A0A0B](https://via.placeholder.com/16/0A0A0B/0A0A0B.png) | `#0A0A0B` | Void | Primary background |
| ![#1A1A1E](https://via.placeholder.com/16/1A1A1E/1A1A1E.png) | `#1A1A1E` | Surface | Secondary background, cards |
| ![#2A2A30](https://via.placeholder.com/16/2A2A30/2A2A30.png) | `#2A2A30` | Depth | Borders, dividers |
| ![#F0EEE8](https://via.placeholder.com/16/F0EEE8/F0EEE8.png) | `#F0EEE8` | Parchment | Light surface, inverted contexts |

### Color Hierarchy

- **Signal (`#00E5B0`)** — accent only. Use for the `//` mark, links, active states, and key callouts. Never use as a background fill for large areas.
- **Void + Surface** — primary backgrounds. 90% of dark-mode usage.
- **Parchment** — inverted contexts: print, light UI, business cards, proposals.
- **Depth (`#2A2A30`)** — borders, dividers, and subtle separators.

### Accessible Contrast

Signal (`#00E5B0`) on Void (`#0A0A0B`) achieves a contrast ratio of approximately 9.2:1, exceeding WCAG AA and AAA requirements for normal text.

---

## 04 — Typography

### Type System

Two typefaces only. Each has a distinct role.

#### Space Mono — Display & Brand

Used for: the logo mark, headlines, subheadings, UI labels, code specimens, taglines, and any text that carries brand identity.

- Weights: Bold (700) for the mark and display; Regular (400) for code specimens
- Letter-spacing: `-0.02em` for large display, `0.14em` for uppercase labels
- Google Fonts: [Space Mono](https://fonts.google.com/specimen/Space+Mono)

#### DM Sans — Body & Supporting Text

Used for: body copy, descriptions, proposals, footnotes, and UI body text. Its humanist structure prevents the brand from feeling cold.

- Weights: Light (300), Regular (400), Medium (500)
- Line-height: 1.65 for comfortable reading
- Google Fonts: [DM Sans](https://fonts.google.com/specimen/DM+Sans)

### Type Scale

| Role | Font | Size / Weight | Usage |
|------|------|---------------|-------|
| Display | Space Mono | 48px / 700 | Hero headlines |
| Heading 1 | Space Mono | 28px / 700 | Section titles |
| Heading 2 | DM Sans | 20px / 500 | Subsections |
| Body | DM Sans | 16px / 400 | Paragraphs |
| Code / Label | Space Mono | 13px / 400 | Inline code, labels |
| Caption | DM Sans | 12px / 300 | Notes, metadata |

### Typography Rules

| Do | Don't |
|----|-------|
| Lowercase brand name: forwardslash | Inter, Roboto, or system-ui as substitutes |
| Space Mono for all brand-facing text | Title Case on headings |
| DM Sans for long-form reading | All-caps for the brand name |
| Sentence case for headings and UI | Serif fonts in any brand context |
| Tight letter-spacing on large display type | More than two typefaces in one layout |

### Google Fonts Import

```css
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
```

---

## 05 — Brand Voice & Messaging

### Voice Principles

Forwardslash speaks in a studio voice — we/our throughout. The tone is direct, technically precise, and without filler. Every sentence should earn its place.

#### Direct
State the outcome, not the process. Clients hire results, not methodology.

```
// Good:  "We build web applications and PWAs engineered for the long term."
// Avoid: "We are passionate about leveraging modern technologies to deliver scalable solutions."
```

#### Technical
Use accurate technical language. Do not dumb down the work. The right clients will recognise the fluency and self-select accordingly.

```
// Good:  "Full-stack TypeScript. PWA-first. No App Store dependencies."
// Avoid: "We build all kinds of web stuff for businesses of all sizes."
```

#### Confident
No hedging language. Studio voice — we/our throughout.

```
// Good:  "We build. We ship. We maintain."
// Avoid: "We try to help clients achieve their goals through collaborative development."
```

#### Minimal
Cut every word that does not add meaning.

```
// Good:  "No gatekeepers. No platform tax. Just the web."
// Avoid: "With years of experience and a commitment to quality, we strive to deliver..."
```

### Tagline System

Taglines are written as code comments using `//` to open. The primary tagline is `// engineered to last.`

```
// engineered to last.          ← primary
// code worth keeping.
// built with intent.
// own your distribution.
// the web is the platform.
```

### Elevator Pitch

> Forwardslash is a web application development practice specialising in full-stack applications and Progressive Web Apps. We build software that runs on the open web — no App Store approvals, no platform tax, no gatekeepers. You own the code, the infrastructure, and the distribution channel.

---

## 06 — Digital Identity

### URL as Brand

The primary URL is the brand. The double slash in `https://` is the logo. Every time a client types the web address, they are engaging with the mark.

```
Preferred:   https://forwardslash.dev
Alternative: https://fwdslash.dev
```

### Email

```
hello@forwardslash.dev    ← General enquiries
work@forwardslash.dev     ← Project work
[name]@forwardslash.dev   ← Personal address
```

### Email Signature

```
[Full Name]
Web Application Developer
// forwardslash development
https://forwardslash.dev
```

### Social & Handles

Use `@forwardslashdev` or `@fwdslash` where available. Consistency across platforms matters more than an exact match.

---

## 07 — Brand Applications

### Progressive Web Apps

PWA development is a core Forwardslash specialisation and should be referenced in all service descriptions. The key message: PWAs run on the open web, install directly from the browser, and require no App Store approval, platform cut, or fragmented codebase.

- **Owned distribution** — no App Store, no Google Play, no 30% cut
- **Single codebase** for every device — desktop, mobile, tablet
- **Offline-capable**, installable, push notifications
- **Silent updates** — no user action required

### Business Card

- Front: Large `//` mark, name, title
- Back: Contact details on Parchment surface
- Size: Standard 85mm × 55mm
- Print: Uncoated stock preferred

### Proposals & Documents

- Header: `//` mark + forwardslash wordmark, left-aligned
- Accent: Signal underline on section headings
- Footer: Page number right-aligned, `// confidential` left-aligned
- Body: DM Sans for readability at length

### Web Presence

- Framework: Vite + TypeScript, PWA-first
- Performance: Lighthouse 95+ as baseline
- Hosted: GitHub Pages → `forwardslash.dev`
- Copy: Minimal. Let the work speak.

---

## 08 — Quick Reference

| Element | Value |
|---------|-------|
| Brand name | `forwardslash development` (lowercase) |
| Primary mark | `//` (double forward slash, always) |
| Primary tagline | `// engineered to last.` |
| Signal | `#00E5B0` |
| Void | `#0A0A0B` |
| Surface | `#1A1A1E` |
| Depth | `#2A2A30` |
| Parchment | `#F0EEE8` |
| Display font | Space Mono (700, 400) |
| Body font | DM Sans (300, 400, 500) |
| Domain | `https://forwardslash.dev` |
| Pronoun voice | We / our — studio voice throughout |
| Tagline format | `// [short statement, lowercase, period]` |
| Specialisation | PWA & full-stack web applications |
| Voice | Direct. Technical. Confident. Minimal. |

---

`// forwardslash development · brand system v1.1 · confidential`
