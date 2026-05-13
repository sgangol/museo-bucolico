# Museo Bucolicò - Executive Blueprint

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build immersive scrollytelling museum website with Next.js 15, Tailwind v4, Framer Motion, Lenis

**Architecture:** Server-components first, client components only where needed (interactions, scroll tracking, forms). Component-based architecture with shared tokens for design consistency.

**Tech Stack:** Next.js 15 (App Router), Tailwind CSS v4, Framer Motion 12+, Lenis 1.3+, TypeScript, Lucide React

---

## 📜 SECTION 1: BLUEPRINT & TECH STACK

### Fixed Stack
| Component | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.2.6 (App Router) | SSR/SSG, routing, metadata |
| React | 19.2.4 | UI rendering |
| Tailwind CSS | 4.0.0 | CSS-in-JS via @theme directive |
| Framer Motion | 12.38.0 | Animations, scroll tracking |
| Lenis | 1.3.23 | Smooth scroll (desktop only) |
| TypeScript | 5.x | Type safety |
| Lucide React | 1.14.0 | Icon library |

### Core Commands
```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Production build (standalone output)
npm run start    # Run production locally
npm run lint     # ESLint check
```

### Project Structure
```
src/
├── app/
│   ├── (routes)/
│   │   ├── page.tsx              # Homepage
│   │   ├── sostienici/page.tsx   # Donate page
│   │   ├── contatti/page.tsx     # Contact page
│   │   └── credits/page.tsx      # Credits page
│   ├── layout.tsx                # Root layout with fonts, Lenis wrapper
│   └── globals.css               # Design tokens via @theme
├── components/
│   ├── SeasonalHero.tsx          # Hero with seasonal bg
│   ├── TimelineNarrative.tsx     # Parallax section
│   ├── ArtifactGrid.tsx          # 3D hover gallery
│   ├── CommunitySection.tsx      # Storytelling section
│   ├── VisitInfo.tsx             # Contact CTA section
│   ├── Footer.tsx                # Nav footer
│   └── SmoothScrolling.tsx       # Lenis wrapper with touch detection
└── public/                       # Static assets
```

---

## 🧱 SECTION 2: ARCHITECTURE & COMPONENTS

### Homepage Component Order (`page.tsx`)
```tsx
<SeasonalHero />          // Full-screen hero with gradient overlay
<CommunitySection />      // Parallax storytelling section
<TimelineNarrative />     // Sticky parallax with 2 text cards
<ArtifactGrid />          // Gallery with staggered entry
<VisitInfo />             // Contact info + CTA
<Footer />                // Navigation footer
```

### Component Specifications

#### SeasonalHero
- Full-screen fixed bg image
- Dark overlay + peach gradient to next section
- Logo reveal with scale animation
- Animated chevron down CTA
- **Props:** None (self-contained)

#### TimelineNarrative
- min-h-[200vh] container for scroll-linked parallax
- Sticky background with scale transform
- Two alternating cards (left/right) with text
- Scroll offset: ["start end", "end start"]
- **Props:** None (self-contained)

#### ArtifactGrid
- 3-column responsive grid
- 3 staggered vertical parallax curves
- 3D hover with lift + shadow
- "MEMORIA" large text in background
- **Props:** None (self-contained)

#### CommunitySection
- min-h-[120vh] parallax container
- Floating secondary image with scroll offset
- Overlay gradients for text readability
- Asymmetric layout (text left, image right on desktop)
- **Props:** None (self-contained)

#### VisitInfo
- Centered layout with logo
- Two contact cards (email + phone)
- Grid layout for mobile/fallback
- **Props:** None (self-contained)

#### Footer
- Black background with red top border
- Copyright + nav links (Chi siamo, Sostienici, Credits, Contatti)
- **Props:** None (self-contained)

### Subpage Pattern
Each subpage uses:
- `key={pathname}` on main to force Framer re-mount
- Metadata export for SEO
- Client wrapper component for interactions
- Consistent token usage

---

## 🎨 SECTION 3: DESIGN SYSTEM & TOKENS

### Color Tokens (globals.css)
```css
@theme inline {
  --color-brand-red: #DD183B;       // Primary brand color
  --color-brand-dark: #0F172A;      // Dark text, backgrounds
  --color-brand-gray: #3A3A3A;      // Secondary text
  --color-brand-peach: #FFEDE6;     // Accent, gradients
  --color-brand-white: #FFFFFF;     // Base white
  --color-brand-black: #140609;     // Deep black overlay
}
```

### Font Tokens
```css
--font-serif: var(--font-playfair);  // Headings, display
--font-sans: var(--font-inter);      // Body text, UI
```

### Usage Rules
- **NEVER** use hex codes directly in component code
- **ALWAYS** use semantic tokens: `text-brand-red`, `bg-brand-white`, `border-brand-peach`
- Token values mapped in globals.css via `@theme inline`
- Font variables set in `layout.tsx` via next/font/google

### Typography Scale (Tailwind classes)
| Element | Desktop Size | Mobile Size |
|---------|-------------|-------------|
| Hero title | text-5xl → text-7xl | text-3xl → text-4xl |
| Section h2 | text-4xl → text-6xl | text-3xl → text-4xl |
| Section h3 | text-2xl → text-3xl | text-xl → text-2xl |
| Body text | text-lg → text-xl | text-base → text-lg |

---

## ✨ SECTION 4: ANIMATIONS & UX

### Framer Motion Patterns

#### Entrance Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, margin: "-50px" }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
```

#### Stagger Container
```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: false, margin: "-50px" }}
  transition={{ staggerChildren: 0.05 }}
>
```

#### Parallax (Scroll-Linked)
```tsx
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start end", "end start"]
});
const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
```

### Lenis Smooth Scroll

#### Touch Detection
```tsx
const isTouchDevice = 
  window.matchMedia('(pointer: coarse)').matches || 
  navigator.maxTouchPoints > 0;

if (isTouchDevice) {
  document.documentElement.style.scrollBehavior = 'smooth';
  return; // Skip Lenis init
}
```

#### Lenis Config
```tsx
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
```

### Accessibility
- `prefers-reduced-motion` support via native `motion` props
- `whileInView` uses native Intersection Observer (no lib needed)
- Touch targets ≥44px height for form elements
- Form inputs have explicit labels
- Semantic HTML structure preserved

### Performance Rules
- Animations use `transform`/`opacity` only (GPU accelerated)
- No `top`/`left`/`width`/`height` animations (avoid layout shift)
- Images with `loading="lazy"` where appropriate
- Lazy-loaded client components only when needed

---

## 🌐 SECTION 5: CONFIGURATION & NGROK

### Next.js Config (`next.config.ts`)
```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',     // For Docker builds
  images: { unoptimized: true }, // For tunneling without server-side optimization
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  }
};

export default nextConfig;
```

### Local Testing with ngrok
```bash
# Terminal 1: Start Next.js
npm run dev

# Terminal 2: Start ngrok
ngrok http 3000
```

### ngrok Notes
- Local images (`/public/images/...`) work without configuration
- External assets must be in `images.remotePatterns` config
- Image refresh in dev: automatic (no cache invalidation needed)
- Mobile testing: ngrok URL + mobile device on same network

### Environment Variables (optional)
```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## 📝 SECTION 6: CONTENT UPDATE GUIDE (NO-CODE)

### How to Update Text

**1. Locate the file**
- Open `src/components/` folder
- Find component containing text (e.g., `VisitInfo.tsx` for contact info)

**2. Find and replace text**
- Press `CTRL+F` (or `CMD+F` on Mac)
- Paste exact phrase to find
- Replace ONLY text inside `<p>`, `<span>`, `{ }`, or `<h2>` tags
- **NEVER** modify: class names, variables, functions, JSX tags

**3. Find and replace images (URL)**
- For external images: search for `src="https://..."` and replace URL
- For local images: upload to `public/images/`, then search `url("/images/...")`

### How to Update Images

**External image (URL):**
```tsx
// Before
src="https://example.com/old-image.jpg"

// After
src="https://example.com/new-image.jpg"
```

**Local image (in public/):**
```tsx
// Before
src="/images/old-name.jpg"

// After
src="/images/new-name.jpg"
```

### Critical Warnings
⚠️ **NEVER modify:**
- `className="..."` values (Tailwind classes)
- `initial={{ ... }}` / `whileInView={{ ... }}` blocks
- Function names or parameters
- Variable names
- HTML/JSX structure

⚠️ **If uncertain:**
- Stop and ask for help
- Do not guess - broken layout results from small changes

### Quick Reference Table

| Action | File Location | What to Change | Warning |
|--------|--------------|----------------|---------|
| Update hero title | `SeasonalHero.tsx` | Text inside `<motion.h1>` | Keep markdown structure |
| Update section text | `TimelineNarrative.tsx` | Text inside `<p>` tags | Don't touch `<div>` classes |
| Update card content | `ArtifactGrid.tsx` | Text between tags | Preserve `map()` index |
| Update contact info | `VisitInfo.tsx` | Text inside component | Keep `<a>` href attributes |
| Update footer links | `Footer.tsx` | Link text | Don't change `href="/..."` |

---

## 🤖 SECTION 7: AI INSTRUCTIONS (BLUEPRINT USAGE)

### Bootstrap Prompt for New Project

```
Use this CLAUDE.md as executive blueprint.

1. Initialize Next.js 15 + Tailwind v4 + TypeScript project
2. Apply design system tokens with these values:
   - brand-red: #DD183B
   - brand-dark: #0F172A  
   - brand-gray: #3A3A3A
   - brand-peach: #FFEDE6
   - brand-white: #FFFFFF
   - brand-black: #140609
   - font-serif: Playfair Display
   - font-sans: Inter

3. Generate homepage with components (in order):
   - SeasonalHero
   - CommunitySection
   - TimelineNarrative
   - ArtifactGrid
   - VisitInfo
   - Footer

4. Create subpages with exact coherency:
   - /sostienici (SostieniciClient)
   - /contatti (ContattiClient)
   - /credits (CreditsClient)

5. Implement animations per Section 4 specs:
   - Entrance animations with whileInView
   - Stagger children for grids
   - Scroll parallax only on hero sections
   - Lenis with touch detection

6. Verify:
   - npm run build → exit 0
   - npm run lint → 0 errors
```

### Strict Rules for Claude Code

✅ **MUST follow:**
- Stack fixed: no libraries outside Section 1
- Token-only: never hardcode hex colors
- Animations preserved: entrance/stagger/parallax as specified
- Scrollytelling: components assembled in exact order
- Mobile-first: Lenis disabled on touch, 44px touch targets
- Caveman-first: minimal code, zero boilerplate

❌ **NEVER do:**
- Change component order without justification
- Add custom CSS beyond globals.css tokens
- Modify SmoothScrolling logic
- Remove key={pathname} from subpages
- Use hardcoded colors or fonts
- Skip verification commands

---

## ✅ VERIFICATION CHECKLIST

Before marking complete:
- [ ] `npm run build` → exit 0
- [ ] `npm run lint` → 0 errors
- [ ] All 7 sections present in correct order
- [ ] No hardcoded colors (all use tokens)
- [ ] ngrok instructions tested
- [ ] Content guide verified for clarity
- [ ] Bootstrap prompt tested in new project

---

*Blueprint version: 1.0.0-stable*
*Last updated: 2026-05-12*
*Maintained via superpowers pipeline: writing-plans → executing-plans → verification-before-completion*
