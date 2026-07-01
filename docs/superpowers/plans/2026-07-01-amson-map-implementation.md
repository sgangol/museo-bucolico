# Amson Map Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add clickable event map with lightbox to Amson page, below carousel, above footer.

**Architecture:** Single new function component `MapSection` in `AmsonClient.tsx` (same pattern as `PostcardCarousel`). Lightbox via `AnimatePresence` + Framer Motion. No new dependencies.

**Tech Stack:** Next.js 16, Tailwind v4, Framer Motion 12, Lucide React

**Files Modified:**
- `public/images/Pianta Amson 2026.png` → convert to `.webp`
- `src/app/amson/AmsonClient.tsx` — add imports, MapSection component, render call

---

### Task 1: Convert map PNG to WebP

**Files:**
- Source: `public/images/Pianta Amson 2026.png`
- Destination: `public/images/Pianta Amson 2026.webp`

- [ ] **Step 1: Convert image**

Run: `python -c "from PIL import Image; img = Image.open(r'public/images/Pianta Amson 2026.png'); img.save(r'public/images/Pianta Amson 2026.webp', 'WEBP', quality=85)"` from within `museo-bucolico-prod/`

Expected: `public/images/Pianta Amson 2026.webp` created, file smaller than PNG.

---

### Task 2: Update imports in AmsonClient.tsx

**Files:**
- Modify: `src/app/amson/AmsonClient.tsx:3` and `:6`

- [ ] **Step 1: Add AnimatePresence to framer-motion import**

Change line 3 from:
```tsx
import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame } from "framer-motion";
```
To:
```tsx
import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame, AnimatePresence } from "framer-motion";
```

- [ ] **Step 2: Add useState and useEffect to React import**

Change line 6 from:
```tsx
import { useRef } from "react";
```
To:
```tsx
import { useRef, useState, useEffect } from "react";
```

- [ ] **Step 3: Verify imports compile**

Run: `npm run lint`
Expected: 0 errors related to imports.

- [ ] **Step 4: Commit**

```bash
git add src/app/amson/AmsonClient.tsx
git commit -m "chore: add AnimatePresence, useState, useEffect imports for map"
```

---

### Task 3: Add MapSection component + MapLightbox logic

**Files:**
- Modify: `src/app/amson/AmsonClient.tsx` (after line 253, after PostcardCarousel)

- [ ] **Step 1: Add MapSection function component**

After the closing `}` of `PostcardCarousel` (line 253), append the following code:

```tsx
/* ── MAPPA EVENTO ── */
function MapSection() {
  const [isOpen, setIsOpen] = useState(false);

  // ESC key closes lightbox
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Image error state
  const [imgError, setImgError] = useState(false);

  return (
    <>
      {/* Map Section */}
      <section className="relative py-16 lg:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {imgError ? (
              <div className="w-full aspect-[4/3] bg-gray-100 rounded-sm flex items-center justify-center">
                <p className="font-sans text-gray-400 text-lg">Mappa non disponibile</p>
              </div>
            ) : (
              <motion.img
                src="/images/Pianta Amson 2026.webp"
                alt="Pianta Amson 2026"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(true)}
                onError={() => setImgError(true)}
                className="w-full h-auto rounded-sm shadow-xl cursor-pointer"
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onMouseDown={(e) => { if (e.target === e.currentTarget) setIsOpen(false); }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-10 text-white/80 hover:text-white transition-colors"
              aria-label="Chiudi mappa"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <motion.img
              key="map-lightbox"
              src="/images/Pianta Amson 2026.webp"
              alt="Pianta Amson 2026"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onError={() => setImgError(true)}
              className="max-h-[90vh] max-w-[90vw] md:max-w-[80vw] object-contain rounded-sm cursor-default select-none"
              style={{ maxWidth: "1200px" }}
              draggable={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
```

---

### Task 4: Insert MapSection in page render

**Files:**
- Modify: `src/app/amson/AmsonClient.tsx` (between carousel section and Footer)

- [ ] **Step 1: Add `<MapSection />` between carousel `</section>` (line 172) and `<Footer />` (line 174)

Insert a blank line and `<MapSection />` after the closing `</section>` of the carousel block.

---

### Task 5: Build and verify

- [ ] **Step 1: Run lint**

Run: `npm run lint`
Expected: 0 errors.

- [ ] **Step 2: Run build**

Run: `npm run build`
Expected: exit 0.

- [ ] **Step 3: Final commit**

```bash
git add src/app/amson/AmsonClient.tsx public/images/Pianta\ Amson\ 2026.webp
git commit -m "feat: add clickable event map with lightbox to Amson page"
```