# CARPENTERIA PASTRO SRL — Project Context

> Read this file in full before making any changes.
> This is the single source of truth for design, architecture and tone.

---

## 1. PROJECT OVERVIEW

**Client:** Carpenteria Pastro srl  
**Industry:** Metal fabrication / Industrial B2B subcontracting  
**Tagline:** "The technical partner for custom metal fabrication"  
**Location:** Veneto, Italy — national reach, regional focus (150 km radius)  
**Target:** Structured B2B companies (100+ employees), procurement managers,
            technical offices, manufacturing entrepreneurs  
**Tone:** Formal, technical, professional. Never consumer-facing.  
**Primary language:** Italian. Structure ready for IT/EN bilingual expansion.

---

## 2. TECH STACK

- **Next.js** (App Router) — React framework for static and SSR pages
- **TypeScript** — all files are `.tsx` / `.ts`, no plain `.js`
- **Tailwind CSS** — utility-first for layout and spacing; design system tokens
  are defined in `globals.css` as CSroperties and referenced by Tailwind
- **Sanity CMS** — for editable content (portfolio, blog, testimonials);
  client configured in `lib/sanity.ts`
- **Lucide React** — `import { IconName } from 'lucide-react'`, never via CDN
- **next/font** — Google Fonts loading (Barlow Condensed + Inter)
  with `font-display: swap` and zero layout shift
- **next/image** — mandatory for every image: automatic optimisation,
  lazy loading and CLS prevention built in
- **Vercel** — deployment, automatic CI/CD from GitHub, preview for every PR

### Mandatory technical rules

- No `localStorage` or `sessionStorage` — use React state or context instead
- External links: always `target="_blank" rel="noopener noreferrer"`
- Every component lives in `components/` — no UI logic inline in `page.tsx`
- `page.tsx` only assembles sections, zero direct styles
- CSS tokens (colors, spacing, radius) live in `styles/tokens.css`,
  imported in `globals.css` — never hardcode hex values inside components

---

## 3. DESIGN S### Color Palette (dark industrial — FIXED, never change)

```css
:root {
  --color-bg:                  #0a0b0d;
  --color-surface:             #111318;
  --color-surface-2:           #181b22;
  --color-surface-3:           #1f222b;
  --color-border:              #252830;
  --color-border-highlight:    #2a4a7a;
  --color-primary:             #1b4f8a;
  --color-primary-hover:       #2563b0;
  --color-primary-light:       #4d8fd4;
  --color-accent-silver:       #8892a4;
  --color-accent-silver-bright:#c0c8d8;
  --color-text:                #e2e6ed;
  --color-text-muted:          #7a8394;
  --color-text-faint:          #3d4250;
  --color-divider:             #1e2130;
}
```

> The theme is **dark by default and fixed** — no light/dark mode toggle.

### Typography

```css
--font-display: 'Host Grotesk';
--font-body:    'Inter';
```

| Element | Font | Weight | Size |
|---|---|---|---|
| H1 — internal page hero | Host Grotesk | 900 | clamp(48px, 6vw, 96px) |
| H1 — homepage hero | Host Grotesk | 900 | clamp(44px, 6vw, 96px) |
| H2 — section title | Host Grotesk | 800 | clamp(32px, 4vw, 51px) |
| H3 — card title | Host Grotesk | 700 | clamp(19px, 2vw, 26px) |
| Section label / tag | Inter | 500 | 12px, uppercase, tracking 0.15em |
| Body copy | Inter | 300–400 | clamp(15px, 1vw, 17px) |
| Button | Inter | 600 | 14px, uppercase, tracking 0.08em |
| Tiny label | Inter | 500 | 12px, uppercase |

**Hard rules:**
- `Host Grotesk` only at 24px and above — never for body text
- Body text max `72ch`, long-form prose max `65ch`

### Spacing (4px base grid — never use arbitrary values)

```css
--space-1:  4px;
--space-2:  8px;
--space-3:  12px;
--space-4:  16px;
--space-5:  20px;
--space-6:  24px;
--space-8:  32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;
```

### Border Radius — SHARP, industrial

```css
--radius-sm: 4px;   /* tags, badges */
--radius-md: 12px;   /* cards, buttons, images */
```
> Never exceed `2px` border-radius. The brand is not soft.
