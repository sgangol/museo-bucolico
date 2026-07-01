# Amson Map Section — Design Spec

**Date:** 2026-06-30
**Status:** Approved
**Project:** Museo Bucolicò

## Goal

Add event map (Pianta Amson 2026) to Amson page, placed below postcard carousel and above footer. Map must be clearly readable with click-to-expand lightbox.

## Placement

- **Section:** Between `PostcardCarousel` and `Footer` in `AmsonClient.tsx`
- **Background:** `bg-brand-white` (white/neutral)
- **Format:** Full-width section with padding

## Component: MapSection

New function component inside `AmsonClient.tsx`, same pattern as `PostcardCarousel`.

### Structure

```
<section bg-brand-white py-16>
  <container max-w-7xl mx-auto px-6>
    <motion.div (entrance animation)>
      <img map.webp, w-full h-auto, shadow, cursor-pointer>
    </motion.div>
  </container>
</section>
```

### States

| State | Behavior |
|-------|----------|
| Default | Map displayed at full container width, aspect ratio preserved, subtle shadow, cursor pointer |
| Hover | Slight scale (1.02) via `whileHover` |
| Loading (image) | Default `<img>` loading="lazy", fade in via motion |
| Error (image) | Broken image fallback: gray placeholder with "Mappa non disponibile" text |
| Click | Opens lightbox overlay |

## Component: MapLightbox

Full-screen modal overlay for zoomed map viewing.

### Structure

```
<AnimatePresence>
  {isOpen && (
    <motion.div fixed inset-0 z-50 bg-black/80 flex items-center justify-center>
      <button X icon, absolute top-6 right-6, text-white, z-10 />
      <motion.img map.webp, max-h-[90vh] max-w-[90vw] object-contain, cursor-default>
    </motion.div>
  )}
</AnimatePresence>
```

### States

| State | Behavior |
|-------|----------|
| Open | Dark overlay fades in, map scales up from center, body scroll locked |
| Close | Reverse animation, body scroll restored, `onMouseDown` on overlay (not img) closes |
| ESC key | Keydown listener closes lightbox |
| Error | Overlay shows error message, close button always visible |

### Interactions

- Click map thumbnail → open lightbox
- Click overlay background (outside image) → close
- Press ESC → close
- Click X button → close
- Body scroll locked when open (`overflow: hidden` on `<body>`)

## Technical Details

### Image

- **Source:** `/public/images/Pianta Amson 2026.png` → convert to `.webp`
- **Path in code:** `/images/Pianta Amson 2026.webp`
- **Conversion:** PNG → WebP, quality 85

### Dependencies

None new. All from existing stack:
- `framer-motion`: `AnimatePresence`, `motion.div`, `motion.img`
- Already imported: `motion`, `useScroll`, `useTransform`, `useMotionValue`, `useAnimationFrame`
- Add: `AnimatePresence` to framer-motion import

### New Imports

- `useState` from React (check if already imported)
- `useEffect` from React for ESC key handler (check if already imported)
- `AnimatePresence` from framer-motion (add to existing import line)

### Code Changes

1. **Import line** (line 3): Add `AnimatePresence` and `useState`/`useEffect` if not present
2. **After PostcardCarousel** (line 223-253): Add `MapSection` function component
3. **Page render** (between line 172 and 174): Add `<MapSection />` between carousel section and Footer

### Animation Specs

| Element | Animation |
|---------|-----------|
| Map section | `initial: { opacity: 0, y: 30 }` → `whileInView: { opacity: 1, y: 0 }`, duration 0.8s |
| Lightbox backdrop | `initial: { opacity: 0 }` → `animate: { opacity: 1 }`, duration 0.3s |
| Lightbox image | `initial: { scale: 0.9, opacity: 0 }` → `animate: { scale: 1, opacity: 1 }`, duration 0.3s |
| Exit | Reverse, same duration |

## Responsive

| Breakpoint | Map width | Lightbox image |
|------------|-----------|----------------|
| Mobile (<768px) | Full width with 24px padding | Full width with 16px padding |
| Tablet (768px+) | max-w-4xl | 90vw |
| Desktop (1024px+) | max-w-5xl | 80vw (max 1200px) |

## Verification

- [ ] `npm run build` → exit 0
- [ ] `npm run lint` → 0 errors
- [ ] Map loads and is readable at all breakpoints
- [ ] Lightbox opens on click
- [ ] Lightbox closes on: X button, ESC, click outside image
- [ ] Body scroll locked while lightbox open
- [ ] No regressions to carousel or other sections