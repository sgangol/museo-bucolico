# Mobile Responsiveness Audit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Audit and fix mobile responsiveness issues across all pages, ensuring Lenis disengages on touch devices, scroll is native, and all UI elements are optimized for small screens.

**Architecture:** 
- Phase 1: Verify Lenis touch detection logic in `SmoothScrolling.tsx`
- Phase 2: Audit responsive classes in each page component (Sostienici, Credits, Contatti, Home)
- Phase 3: Fix font sizes, grid layouts, touch targets, and overflow issues
- Phase 4: Verify no horizontal scroll, proper touch targets (44px+), legible text

**Tech Stack:** Next.js 15, Tailwind CSS v4, Framer Motion, Lenis

---

### Task 1: Verify SmoothScrolling.tsx Touch Detection

**Files:**
- Modify: `src/components/SmoothScrolling.tsx`

**Current State Analysis:**
- Line 12: `window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0`
- This logic correctly detects touch devices
- Line 16: Sets `scrollBehavior = 'smooth'` for touch (native browser scroll)

**Action:** Keep current logic - it's correct. Add comment for maintainers.

**Verification:**
- On touch devices, Lenis should be completely bypassed
- Browser native smooth scroll should activate

---

### Task 2: SostieniciPage - Font Size & Layout Audit

**Files:**
- Modify: `src/app/sostienici/SostieniciClient.tsx`

**Issues Found:**
1. Line 72: `text-5xl md:text-7xl lg:text-8xl` - Title too large on mobile (5xl ≈ 3rem/48px)
2. Line 165: IBAN code needs `break-all` or `overflow-x-auto` to prevent overflow
3. Line 50: Hero section `min-h-[80vh]` - acceptable
4. Line 112: `hover:scale-1.02` - scale causes issues on touch; use different interaction

**Fixes Required:**
```tsx
// Line 72 - Scale down mobile title
className="font-serif font-bold text-3xl md:text-5xl lg:text-7xl..."

// Line 165 - IBAN box fix
<code className="inline-block bg-brand-peach/20 px-4 py-3 font-mono text-brand-dark text-sm md:text-xl rounded overflow-x-auto break-all...">
```

---

### Task 3: CreditsPage - Card 3D & Grid Audit

**Files:**
- Modify: `src/app/credits/CreditsClient.tsx`

**Issues Found:**
1. Line 78: `text-5xl md:text-6xl` - Title OK (5xl = 3rem, readable)
2. Line 107: Grid `md:grid-cols-2 lg:grid-cols-3` - correct
3. Line 116: `hover:scale-[1.02]` - scale not meaningful on touch; use `active:scale-0.98` or remove
4. Line 140: Grid `gap-x-12` - too wide for mobile; should be `gap-x-6` on mobile
5. 22 names - verify no horizontal overflow with `max-w-full`

**Fixes Required:**
```tsx
// Line 116 - Better touch interaction
className="bg-brand-white p-6 rounded-sm shadow-lg active:scale-[0.98]..."

// Line 140 - Mobile gap fix
<div className="grid md:grid-cols-2 gap-x-6 md:gap-x-12 gap-y-6">
```

---

### Task 4: ContattiPage - Form & Layout Audit

**Files:**
- Modify: `src/app/contatti/ContattiClient.tsx`

**Issues Found:**
1. Line 49: `text-5xl md:text-6xl` - OK for mobile
2. Line 61: Grid `md:grid-cols-2` - correct
3. Line 124-186: Form input `w-full` - correct, but check button height
4. Line 182: Button `px-6 py-3` - min height 48px (44px+ required for accessibility) ✓ OK
5. Line 36: `scale-105` on hero background - may cause overflow on mobile

**Fixes Required:**
```tsx
// Line 36 - Remove scale or add overflow-hidden
className="absolute inset-0 bg-cover bg-center z-0 scale-105 overflow-hidden"

// Line 182 - Ensure button touch target
className="w-full bg-brand-red text-brand-white px-6 py-4 font-sans font-medium active:scale-[0.98]..."
```

---

### Task 5: SeasonalHero - Mobile Typography Audit

**Files:**
- Modify: `src/components/SeasonalHero.tsx`

**Issues Found:**
1. Line 33: `text-3xl md:text-5xl` - Title readable on mobile ✓ OK
2. Line 26: Logo `w-48 md:w-64 lg:w-80` - correct responsive sizing ✓ OK
3. Line 45: "Scopri di più" label - small but acceptable (xs = 0.75rem)

---

### Task 6: Run Verification Suite

**Commands:**
```bash
cd museo-bucolico-prod
npm run build
npm run lint
```

**Manual Checks:**
- [ ] No horizontal scroll on mobile (all pages)
- [ ] Touch targets >= 44px height
- [ ] Text >= 14px on mobile
- [ ] Scroll is native on touch (no Lenis lag)
- [ ] Cards react to tap (not hover-only)

---

### Task 7: Commit Changes

**Commit Message:**
```
fix: mobile responsiveness audit, Lenis touch logic, grid polish

- SmoothScrolling: add comment for touch detection logic (already correct)
- SostieniciClient: scale down hero title 5xl→3xl on mobile, fix IBAN overflow
- CreditsClient: fix grid gap for mobile, update card touch interaction
- ContattiClient: ensure form button 44px+ touch target
- SeasonalHero: verify responsive sizing (already OK)
```

---

## Checklist Summary

| Page | Status | Key Fixes |
|------|--------|-----------|
| SmoothScrolling | ✓ OK | Touch detection correct |
| Sostienici | 🔧 Fix | Title scale, IBAN overflow, touch interaction |
| Credits | 🔧 Fix | Grid gap, card interaction |
| Contatti | ✓ OK | Form already responsive |
| SeasonalHero | ✓ OK | Already responsive |
