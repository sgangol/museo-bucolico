# Amson Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create new `/amson` page for Festa del Grano with hero, description block, postcard carousel, footer. Add navigation from homepage.

**Architecture:** Server component exports metadata, client component contains UI. Reuses visual patterns from SeasonalHero, CommunitySection, Footer. New PostcardCarousel component for photo gallery.

**Tech Stack:** Next.js 16 App Router, Framer Motion 12, Tailwind CSS 4, TypeScript

**Design doc:** `docs/superpowers/specs/2026-06-29-amson-page-design.md`

---

### Task 1: Create Amson server page + client component

**Files:**
- Create: `src/app/amson/page.tsx`
- Create: `src/app/amson/AmsonClient.tsx`

- [ ] **Step 1: Create `src/app/amson/page.tsx`**

```tsx
import AmsonClient from "./AmsonClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amson - Festa del Grano | Museo Bucolicò",
  description:
    "L'Amson a la Madona è la rievocazione della mietitura e trebbiatura del grano a Santa Maria del Tempio. Giunta alla 34ª edizione, è la festa più importante del Museo Bucolicò.",
  openGraph: {
    title: "Amson - Festa del Grano | Museo Bucolicò",
    description:
      "34ª edizione dell'Amson a la Madona: la rievocazione della mietitura e trebbiatura del grano a Santa Maria del Tempio.",
    url: "https://www.museobucolico.it/amson",
    siteName: "Museo Bucolicò",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-default.webp",
        width: 1200,
        height: 630,
        alt: "Amson - Festa del Grano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amson - Festa del Grano | Museo Bucolicò",
    description:
      "34ª edizione dell'Amson a la Madona: la rievocazione della mietitura e trebbiatura del grano.",
  },
};

export default function Amson() {
  return <AmsonClient />;
}
```

- [ ] **Step 2: Create `src/app/amson/AmsonClient.tsx`** — full layout with hero, festa section, carousel, footer

```tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import Footer from "@/components/Footer";

export default function AmsonClient() {
  const pathname = usePathname();
  const festaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: festaProgress } = useScroll({
    target: festaRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(festaProgress, [0, 1], ["0%", "20%"]);
  const imgY = useTransform(festaProgress, [0, 1], ["0%", "-30%"]);
  const textY = useTransform(festaProgress, [0, 1], [50, -50]);

  return (
    <main key={pathname} className="flex min-h-screen flex-col bg-brand-white overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{ backgroundImage: 'url("/images/sfondo.webp")' }}
        />
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-peach z-0" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-12 w-full h-full">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            src="https://www.cloudsami.net/bucolico/wp-content/uploads/2024/07/SANTA-SCUDO-con-scritta-rossa.png"
            alt="Bucolicò Scudo"
            className="w-48 md:w-64 lg:w-80 mb-8 mx-auto drop-shadow-2xl"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="font-serif font-bold text-6xl md:text-8xl text-brand-white drop-shadow-lg"
          >
            AMSON
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="font-serif text-2xl md:text-3xl text-brand-peach mt-2 drop-shadow-lg"
          >
            34° edizione
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        >
          <span className="text-xs uppercase tracking-widest text-brand-white mb-2 font-sans font-bold drop-shadow-md">
            Scopri di più
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-brand-red drop-shadow-md" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── LA FESTA (replica CommunitySection) ── */}
      <section
        ref={festaRef}
        className="relative min-h-[120vh] w-full flex items-center z-10 overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0 w-full h-[120%]"
          style={{
            backgroundImage: 'url("/images/la-strada-di-santa-1024x741.webp")',
            y: bgY,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-white/80 to-brand-white z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-white via-transparent to-transparent z-0" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-peach to-transparent z-0" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">
          <div className="hidden lg:block relative">
            <motion.div
              style={{ y: imgY }}
              className="w-3/4 aspect-[4/3] rounded-sm shadow-2xl overflow-hidden ml-auto border-4 border-brand-white/50"
            >
              <div
                className="w-full h-full bg-cover bg-center mix-blend-luminosity"
                style={{
                  backgroundImage:
                    'url("/images/santa_blackandwhite-1024x722.webp")',
                }}
              />
            </motion.div>
          </div>

          <motion.div
            style={{ y: textY }}
            className="bg-brand-white/95 backdrop-blur-md p-8 md:p-12 lg:p-16 rounded-sm shadow-xl lg:bg-transparent lg:shadow-none lg:backdrop-blur-none lg:p-0"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-8 drop-shadow-sm"
            >
              La Festa
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-lg md:text-xl text-brand-gray space-y-6 leading-relaxed"
            >
              <p className="text-2xl font-serif text-brand-red italic drop-shadow-sm">
                Quando il grano diventava comunità.
              </p>
              <p>
                Trent&apos;anni fa, in Italia, la mietitura del grano non era solo un lavoro: era un rito collettivo. Intere famiglie scendevano nei campi, i nonni insegnavano ai nipoti l&apos;arte della falce, e il profumo delle spighe mature segnava il vero inizio dell&apos;estate. A Santa Maria del Tempio, quella tradizione non si è spenta.
              </p>
              <p>
                L&apos;Amson a la Madona nasce nel 1992 per ricordare le radici contadine del Monferrato. Per un giorno, il borgo torna indietro nel tempo: i trattori d&apos;epoca solcano i campi, la trebbiatrice si mette in moto con il suo rumore inconfondibile, e il grano viene raccolto come si faceva una volta. I bambini scoprono da dove arriva il pane, gli anziani ritrovano gesti dimenticati, e la comunità si stringe intorno a un passato che continua a vivere.
              </p>
              <p>
                Oggi l&apos;Amson è molto più di una rievocazione: è un abbraccio tra generazioni, un modo per dire che la memoria contadina non è una cosa da museo — è qualcosa che si tocca, si sente, si celebra insieme.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CAROSELLO CARTOLINE ── */}
      <section className="relative py-24 overflow-hidden bg-brand-peach">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark text-center drop-shadow-sm"
          >
            La festa in immagini
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-xl text-brand-gray italic text-center mt-4"
          >
            Scorri per rivivere i momenti pi&ugrave; belli
          </motion.p>
        </div>

        <PostcardCarousel />
      </section>

      <Footer />
    </main>
  );
}

/* ── POSTCARD CAROUSEL ── */
function PostcardCarousel() {
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);
  const photos = [
    { id: 1, caption: "Amson 2025", rotation: -1.5 },
    { id: 2, caption: "La trebbiatura", rotation: 2 },
    { id: 3, caption: "I bambini", rotation: -0.5 },
    { id: 4, caption: "Il raccolto", rotation: 1.5 },
    { id: 5, caption: "Tradizione", rotation: -2 },
    { id: 6, caption: "La comunità", rotation: 0.8 },
    { id: 7, caption: "I trattori d'epoca", rotation: -1 },
    { id: 8, caption: "Il grano", rotation: 1.2 },
  ];
  const cardWidth = 288; // w-72 = 288px
  const gap = 32; // gap-8 = 32px
  const totalWidth = (cardWidth + gap) * photos.length;

  useEffect(() => {
    if (isPaused) {
      controls.stop();
    } else {
      controls.start({
        x: [-totalWidth, 0],
        transition: {
          duration: 60,
          ease: "linear",
          repeat: Infinity,
        },
      });
    }
  }, [isPaused, controls, totalWidth]);

  return (
    <div
      className="relative w-full overflow-hidden py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-8 w-max px-4"
        animate={controls}
      >
        {[...photos, ...photos].map((photo, i) => (
          <motion.div
            key={`${photo.id}-${i}`}
            className="flex-shrink-0 w-64 md:w-72 bg-brand-white p-3 pb-8 rounded-sm shadow-xl"
            style={{ transform: `rotate(${photo.rotation}deg)` }}
            whileHover={{
              scale: 1.05,
              rotate: "0deg",
              transition: { duration: 0.3 },
            }}
          >
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-brand-peach to-brand-gray/20 flex items-center justify-center text-brand-gray/40 font-serif text-sm mb-3 overflow-hidden rounded-sm">
              <div className="text-center p-4">
                <span className="text-4xl block mb-2">📸</span>
                <span>Foto {photo.id}</span>
              </div>
            </div>
            <p className="font-serif text-sm text-center text-brand-gray italic">
              &ldquo;{photo.caption}&rdquo;
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
```

Add `useAnimationControls` and `useEffect, useState` at top of AmsonClient:

```tsx
import { motion, useScroll, useTransform, useAnimationControls } from "framer-motion";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import Footer from "@/components/Footer";
```

- [ ] **Step 3: Verify build**

```bash
cd museo-bucolico-prod && npm run build
```

Expected: exit 0, no TypeScript/lint errors.

---

### Task 2: Add Amson link to Footer

**Files:**
- Modify: `src/components/Footer.tsx`

- [ ] **Step 1: Add Amson link after "Chi siamo" in Footer**

```tsx
<div className="flex gap-6">
  <Link href="/" className="hover:text-brand-red transition-colors">Chi siamo</Link>
  <Link href="/amson" className="hover:text-brand-red transition-colors">Amson</Link>
  <Link href="/sostienici" className="hover:text-brand-red transition-colors">Sostienici</Link>
  <Link href="/credits" className="hover:text-brand-red transition-colors">Credits</Link>
  <Link href="/contatti" className="hover:text-brand-red transition-colors">Contatti</Link>
  <Link href="/vieni-a-visitarci" className="hover:text-brand-red transition-colors">Vieni a visitarci</Link>
</div>
```

- [ ] **Step 2: Verify build**

```bash
cd museo-bucolico-prod && npm run build
```

Expected: exit 0.

---

### Task 3: Add Amson CTA to Homepage

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Create AmsonCTA component** as a simple section with link to /amson

Add to `src/app/page.tsx` between `PercheBucolicoConta` and `CTAButton`:

First, add import at top:

```tsx
import Link from "next/link";
```

Then add component inside the main before `CTAButton`:

```tsx
<section className="relative py-24 px-6 bg-gradient-to-b from-brand-peach to-brand-white text-center overflow-hidden">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-50px" }}
    transition={{ duration: 0.8 }}
    className="max-w-3xl mx-auto"
  >
    <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6 drop-shadow-sm">
      Scopri l&apos;Amson
    </h2>
    <p className="font-sans text-lg md:text-xl text-brand-gray mb-8 leading-relaxed max-w-2xl mx-auto">
      La festa pi&ugrave; importante del museo: rievocazione della mietitura e trebbiatura del grano. Un tuffo nelle tradizioni contadine del Monferrato.
    </p>
    <Link href="/amson">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-brand-red text-brand-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:shadow-brand-red/50 transition-all font-sans"
      >
        Scopri l&apos;Amson
      </motion.button>
    </Link>
  </motion.div>
</section>
```

Add `motion` import at top of page.tsx:

```tsx
import SeasonalHero from "@/components/SeasonalHero";
```

Wait — page.tsx is a server component. `motion` is client-only. Need to either:
- Make this section a separate client component, OR
- Add `"use client"` directive to page.tsx (but that would break server component benefits)

**Best approach:** Create a small client component `AmsonHomeCTA.tsx`.

- [ ] **Step 2: Create `src/components/AmsonHomeCTA.tsx`**

```tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AmsonHomeCTA() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-brand-peach to-brand-white text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6 drop-shadow-sm">
          Scopri l&apos;Amson
        </h2>
        <p className="font-sans text-lg md:text-xl text-brand-gray mb-8 leading-relaxed max-w-2xl mx-auto">
          La festa pi&ugrave; importante del museo: rievocazione della mietitura e trebbiatura del grano. Un tuffo nelle tradizioni contadine del Monferrato.
        </p>
        <Link href="/amson">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-red text-brand-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:shadow-brand-red/50 transition-all font-sans"
          >
            Scopri l&apos;Amson
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 3: Import and use in page.tsx**

```tsx
import AmsonHomeCTA from "@/components/AmsonHomeCTA";

// In the JSX, after <PercheBucolicoConta />:
<AmsonHomeCTA />
```

Full modified page.tsx JSX:

```tsx
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-white overflow-x-hidden">
      <SeasonalHero />
      <CommunitySection />
      <TimelineNarrative />
      <ArtifactGrid />
      <PercheBucolicoConta />
      <AmsonHomeCTA />
      <CTAButton />
      <VisitInfo />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 4: Verify build**

```bash
cd museo-bucolico-prod && npm run build
```

Expected: exit 0.

---

### Verification

- [ ] `npm run dev` — navigate to `/amson`
- [ ] Hero shows logo + "AMSON" + "34° edizione" + chevron
- [ ] "La Festa" section has parallax background, image, text card
- [ ] Postcard carousel auto-scrolls horizontally, pauses on hover
- [ ] Footer has "Amson" link
- [ ] Homepage has "Scopri l'Amson" CTA section between PercheBucolicoConta and CTAButton
- [ ] `npm run build` → exit 0
