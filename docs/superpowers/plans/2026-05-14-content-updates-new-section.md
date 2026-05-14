# Content Updates & New Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update homepage content, add new 3D section "PERCHÉ BUCOLICÒ CONTA", update Sostienici page, create new Viene a visitarci page, add CTA button

**Architecture:** 
- Phase 1: Extract and update existing page content from PDF
- Phase 2: Create new 3D parallax section component
- Phase 3: Create new route `/vieni-a-visitarci` with map/orario visuals
- Phase 4: Add CTA button to homepage
- Phase 5: Build and verify

**Tech Stack:** Next.js 15, Tailwind CSS v4, Framer Motion, TypeScript

**Images to add to `public/images/`:**
- `mappa-sito.png` - from "mappa per sito.png"
- `orari.png` - from "orari.png"

---

### Task 1: Update CommunitySection.tsx ("CHI SIAMO" text)

**Files:**
- Modify: `src/components/CommunitySection.tsx`

**Source text from PDF:**
```
Siamo una comunità. Siamo memoria che cammina.

Santa Maria del Tempio è una frazione agricola del Comune di Casale Monferrato, nel cuore del Basso Monferrato. Un borgo piccolo e radicato, con origini templari e francescane, i campi di grano che si distendono fino all'orizzonte, l'odore della terra che cambia con le stagioni. Un luogo che potrebbe essere dimenticato, e che invece ha scelto di ricordare.

L'Associazione di Promozione Sociale di Santa Maria del Tempio è nata nei primi anni Sessanta, da una stanza al secondo piano di una casa privata: un posto dove leggere, parlare, fare musica, stare insieme. Da lì siamo cresciuti, lentamente e con ostinazione, fino a diventare un punto di riferimento vivo per tutta la comunità locale.

Il nostro Circolo porta il nome del Geom. Umberto Piazza, giovane della frazione scomparso prematuramente nel 1981, ricordato per la solarità, il senso civico, la generosità. Il suo nome non è un'intitolazione formale: è un promemoria quotidiano di come scegliamo di stare nel mondo.

Associazione di Promozione Sociale iscritta al Registro Unico del Terzo Settore, affiliata a CSEN, da decenni promuoviamo il territorio attraverso eventi che sono diventati parte dell'identità del Monferrato. L'Amson a la Madona, rievocazione della mietitura e trebbiatura del grano nata nel lontano 1992, è la radice da cui tutto è cresciuto. Insieme a lei, il Rogo della Vegia, la Bottega dell'Ottimismo e il Santa Wave Festival.

L'associazione gestisce un circolo aperto tutto l'anno: uno spazio di aggregazione, cultura e musica, dove si incontrano volontari, famiglie, bambini, anziani, musicisti e artisti. Un luogo che cresce con chi lo abita.

Da quella piccola stanza continuiamo a costruire comunità, custodire la memoria, immaginare il futuro.
```

**Changes:**
- Replace existing paragraph text (lines 71-85) with new text
- Keep structure: title, subtitle, paragraphs
- Keep Italian accents and formatting

**Verification:**
```bash
npm run dev
# Navigate to homepage, verify "CHI SIAMO" section has updated text
```

---

### Task 2: Update TimelineNarrative.tsx ("IL MUSEO" text)

**Files:**
- Modify: `src/components/TimelineNarrative.tsx`

**Source text from PDF (Il Museo section):**
```
Un museo a cielo aperto, dove la terra racconta.

Bucolicò è il primo museo agricolo open air del Monferrato. Non un luogo di conservazione statica, ma un paesaggio vissuto, uno spazio in cui la storia agricola non è dietro una teca di vetro ma sotto i piedi, tra le mani, nell'aria. Un organismo vivo che respira con le stagioni, si trasforma con la luce, parla a chi sa fermarsi ad ascoltare.

Trattori e attrezzi provenienti da collezioni private, donati con generosità da chi li custodiva come reliquie di famiglia, diventano qui patrimonio collettivo. Ogni oggetto è una voce che aspettava di essere ascoltata. Porta con sé la fatica e l'ingegno di chi ha lavorato questa terra curvo sotto il sole, senza monumenti e senza archivi, solo mani, stagioni, e la certezza silenziosa che il lavoro avesse senso. Generazioni intere che non immaginavano di essere storia, e che Bucolicò ha scelto di non lasciare andare.

Il progetto è dell'Arch. Simone Filippini, e nasce da una visione precisa: esaltare il contesto agricolo di Santa Maria del Tempio rispettandone la storia, riorganizzando gli spazi in modo funzionale e armonico, restituendo al borgo una dignità che il tempo non ha tolto ma che troppo spesso si fatica a vedere. Bucolicò è nato da un lavoro condiviso tra la comunità, la Parrocchia e il Circolo. È cresciuto grazie a mani volontarie, a competenze donate, alla pazienza di chi sapeva restaurare e a quella di chi sapeva aspettare. Ogni elemento del percorso porta in sé il segno di questa collaborazione, dalla targa "Testi Caùdi d'la Madona" fino a quella di "BarColicò", forgiate a mano da artigiani del posto, sono un atto d'amore verso questo luogo.

Tra gli strumenti e la memoria, c'è un campo di grano che ogni anno torna a crescere. Un piccolo appezzamento coltivato direttamente nello spazio espositivo: viene seminato, seguito, raccolto secondo i tempi dell'anno agricolo. Non una ricostruzione, non una scenografia, ma grano vero, terra vera, lavoro vero. Un modo per dire che la memoria, a Bucolicò, non è qualcosa che si guarda: è qualcosa che ancora cresce. Il percorso si snoda seguendo il ritmo dell'anno: la semina in autunno, il grano che cresce durante l'inverno, la spigatura in primavera, il raccolto d'estate. Non una successione didattica, ma una narrazione. Un modo di ricordare che il tempo, qui, non si misura in ore ma in stagioni.

Bucolicò è uno spazio dove il tempo si accorcia. Davanti a un trattore di inizio Novecento, un bambino chiede. Un anziano che lo ha guidato chiude gli occhi e ricorda. In quell'istante sospeso tra la domanda e la risposta c'è tutto ciò che un museo può sperare di essere. Storia che passa di bocca in bocca e si deposita nella memoria.

Custodia e visione. Radice e direzione. Il racconto di un cammino che non è finito.
```

**Changes:**
- Replace text in both cards (left: "Il Museo", right: continuation)
- Keep existing structure: title, subtitle, paragraphs
- Preserve styling (italics, bold, gradients)

**Verification:**
```bash
npm run dev
# Scroll to "Il Museo" section, verify text updated
```

---

### Task 3: Create new component PercheBucolicoConta.tsx

**Files:**
- Create: `src/components/PercheBucolicoConta.tsx`

**Source text from PDF:**
```
PERCHÉ BUCOLICÒ CONTA — oltre il borgo, oltre il Monferrato

L'Italia è un paese agricolo che ha quasi smesso di saperlo. In pochi decenni, il sapere contadino accumulato in secoli di pratica, le tecniche, gli strumenti, il vocabolario, il senso del tempo, si è dissolto nella velocità della modernizzazione, lasciando un vuoto che nessun archivio digitale è davvero in grado di colmare.

Bucolicò nasce per rispondere a questo vuoto, e lo fa in modo concreto, situato, replicabile.

Non è un museo nel senso convenzionale del termine: non raccoglie oggetti da esporre in modo neutro, ma costruisce un sistema di relazioni tra un territorio, la sua comunità, la sua storia materiale e le generazioni che lo abitano oggi. Il metodo è semplice e potente insieme: recuperare i mezzi e gli attrezzi della tradizione agricola locale, documentarne l'uso attraverso il sapere vivo degli anziani del luogo, restituirli alla collettività in uno spazio aperto e accessibile, e tenerli in dialogo permanente con una pratica agricola reale, il campo di grano che cresce e viene raccolto ogni anno davanti agli occhi di chi visita.

Questo approccio ha un valore che va ben oltre Santa Maria del Tempio. Il modello Bucolicò è pensato per durare e per essere trasferibile. Le scelte progettuali, il coinvolgimento diretto della comunità locale, la struttura leggera e a bassa soglia economica, la capacità di intrecciare conservazione del patrimonio, animazione culturale e presidio del territorio: tutto questo rende Bucolicò un progetto studiabile, raccontabile, replicabile in altri contesti rurali che stanno attraversando le stesse sfide.

Custodire la memoria di come si lavorava la terra non è nostalgia. È una forma di intelligenza collettiva, il riconoscimento che sapere da dove veniamo è la condizione per capire dove possiamo andare.
```

**Design Requirements:**
- Card in sospensione (floating cards with 3D effect on hover)
- Parallax background effect
- Smooth scroll animation
- Brand colors: red, peach, white
- Mobile-first responsive grid

**Component Structure:**
```tsx
import { motion } from "framer-motion";

export default function PercheBucolicoConta() {
  return (
    <section className="py-32 bg-brand-white relative overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 bg-brand-peach/30 -z-0" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark text-center mb-16"
        >
          PERCHÉ BUCOLICÒ CONTA
          <span className="block text-brand-red text-2xl md:text-3xl mt-4">oltre il borgo, oltre il Monferrato</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Floating card 1 */}
          <motion.div 
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            className="bg-brand-white p-8 md:p-12 rounded-sm shadow-2xl hover:shadow-brand-red/20 transition-all"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Content */}
          </motion.div>
          
          {/* Floating card 2 */}
          <motion.div 
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            className="bg-brand-white p-8 md:p-12 rounded-sm shadow-2xl hover:shadow-brand-red/20 transition-all"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Content */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

**Verification:**
```bash
npm run dev
# Verify new section appears between ArtifactGrid and CommunitySection
# Hover over cards - should have 3D effect
```

---

### Task 4: Update homepage.tsx component order

**Files:**
- Modify: `src/app/page.tsx`

**Changes:**
- Import `PercheBucolicoConta` component
- Add new section AFTER `ArtifactGrid` and BEFORE `VisitInfo`

**New order:**
```tsx
<SeasonalHero />
<CommunitySection />
<TimelineNarrative />
<ArtifactGrid />
<PercheBucolicoConta />  // NEW
<VisitInfo />
<Footer />
```

**Verification:**
```bash
npm run dev
# Verify section order on homepage
```

---

### Task 5: Update SostieniciClient.tsx text

**Files:**
- Modify: `src/app/sostienici/SostieniciClient.tsx`

**Source text from PDF (SOSTIENICI section):**
```
Quello che costruiamo qui è di tutti. È fatto di tempo donato, di oggetti affidati, di storie condivise.

Bucolicò vive grazie al lavoro volontario di chi ci crede, alla generosità di chi porta competenze e memoria, alla fiducia di chi sceglie di sostenerci concretamente. Ogni contributo, piccolo o grande, alimenta qualcosa di prezioso: una memoria condivisa, un luogo aperto, una comunità che continua a scegliere di stare insieme.

**Erogazioni liberali** Il museo è gestito interamente da volontari. Le donazioni ci permettono di continuare il lavoro di recupero, restauro e valorizzazione del patrimonio agricolo. Ogni cifra è utile, e tutte le donazioni sono fiscalmente detraibili.

**Sponsorizzazioni** Le aziende che scelgono di sostenerci trovano in Bucolicò un partner che parla al territorio con autenticità. Qui la visibilità non è pubblicità: è appartenenza.

**Tesseramento** Diventare soci è il modo più diretto per essere parte di questa storia. La tessera dà accesso alla vita dell'associazione, agli eventi, alle iniziative, e soprattutto alla sensazione di contribuire a qualcosa che vale.

**Esponi da noi** Hai attrezzi, strumenti o macchinari agricoli che vorresti valorizzare? Il pezzo rimane tuo: tu lo affidi a noi, noi lo raccontiamo al pubblico. Insieme, trasformiamo un ricordo privato in patrimonio di tutti.
```

**Changes:**
- Update description text in support options
- Update quote text to match PDF
- Keep IBAN: `IT87V0623022601000046703000`
- Keep contact links unchanged

**Verification:**
```bash
npm run dev
# Navigate to /sostienici, verify updated text
```

---

### Task 6: Create new page /vieni-a-visitarci

**Files:**
- Create: `src/app/vieni-a-visitarci/page.tsx`
- Create: `src/app/vieni-a-visitarci/VieniAVISITARCI_Client.tsx`

**Requirements:**
1. Hero section (SeasonalHero variant or custom)
2. Intro text (create coherent text matching museum tone)
3. Map in 3D effect (using `mappa per sito.png`)
4. Orari section (using `orari.png`)
5. Additional contextual info
6. Responsive with smooth scroll

**Component Structure:**
```tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function VieniAVISITARCI() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center z-0" />
        <div className="absolute inset-0 bg-brand-black/50 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-peach z-[1]" />
        
        <div className="relative z-10 text-center px-6">
          <motion.h1 className="font-serif text-3xl md:text-5xl lg:text-7xl text-brand-white mb-6" />
          <motion.p className="font-serif text-2xl md:text-3xl text-brand-peach italic" />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="font-serif text-4xl md:text-5xl text-brand-dark text-center mb-12" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              whileHover={{ rotateY: 10, rotateX: 5 }}
              className="relative aspect-[4/3] rounded-sm shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-cover bg-center" />
            </motion.div>
            
            <div>
              <motion.p className="font-sans text-lg md:text-xl text-brand-gray leading-relaxed" />
            </div>
          </div>
        </div>
      </section>

      {/* Orari Section */}
      <section className="py-24 px-6 bg-brand-peach">
        {/* Similar 3D effect */}
      </section>

      {/* Info Section */}
      <section className="py-24 px-6 bg-brand-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p className="font-sans text-lg md:text-xl text-brand-gray" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

**Verification:**
```bash
npm run dev
# Navigate to /vieni-a-visitarci
# Verify map/orario 3D effects work
```

---

### Task 7: Create CTA button in homepage

**Files:**
- Modify: `src/app/page.tsx` - add button component
- Modify: `src/components/VisitInfo.tsx` - or add new button section

**Button Design:**
- Text: "Vieni a visitarci"
- Link: `/vieni-a-visitarci`
- Color: `bg-brand-red` with `hover:bg-brand-dark`
- Shape: rounded corners
- Position: Above footer, below "PERCHÉ BUCOLICÒ CONTA"

**Styling:**
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-brand-red text-brand-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:shadow-brand-red/50 transition-all"
>
  Vieni a visitarci
</motion.button>
```

**Placement:**
- Add after `PercheBucolicoConta` section
- Before `VisitInfo` section

**Verification:**
```bash
npm run dev
# Verify button visible and clickable
# Verify link navigates to /vieni-a-visitarci
```

---

### Task 8: Build and verification

**Commands:**
```bash
cd museo-bucolico-prod
npm run build
npm run lint
```

**Manual verification checklist:**
- [ ] All PDF text updated in CommunitySection
- [ ] All PDF text updated in TimelineNarrative
- [ ] New "PERCHÉ BUCOLICÒ CONTA" section visible with 3D effects
- [ ] Section order: Hero → Community → Timeline → ArtifactGrid → PercheBucolicoConta → VisitInfo → Footer
- [ ] Sostienici page has updated text, IBAN preserved
- [ ] New `/vieni-a-visitarci` route accessible
- [ ] Map and Orario images visible with 3D effects
- [ ] CTA button visible on homepage, links to new page
- [ ] No console errors
- [ ] Build succeeds
- [ ] Lint passes

**Manual browser tests:**
- [ ] Mobile: scroll works smoothly
- [ ] Mobile: touch targets ≥44px
- [ ] Desktop: hover 3D effects work
- [ ] All links navigate correctly
- [ ] No horizontal overflow

---

## Checklist Summary

| Task | Status | Files Modified |
|------|--------|----------------|
| 1. CommunitySection update | | CommunitySection.tsx |
| 2. TimelineNarrative update | | TimelineNarrative.tsx |
| 3. Create PercheBucolicoConta | | New: PercheBucolicoConta.tsx |
| 4. Update homepage order | | page.tsx |
| 5. Sostienici text update | | SostieniciClient.tsx |
| 6. Create /vieni-a-visitarci | | New: page.tsx + Client |
| 7. Add CTA button | | page.tsx + VisitInfo |
| 8. Build & verify | | All files |
