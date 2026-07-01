# Pagina Amson — Festa del Grano

**Data:** 2026-06-29
**Progetto:** Museo Bucolicò — sito web

## Obiettivo

Creare nuova pagina dedicata all'Amson (festa del grano), festa principale del museo. La pagina replica pattern visivi della homepage (hero, footer, layout "Chi siamo") con contenuti dedicati e nuovo carosello foto in stile cartolina.

## Struttura Pagina

### Route
- `/amson` → server component `/src/app/amson/page.tsx` + client component `/src/app/amson/AmsonClient.tsx`

### Sezioni (top→bottom)

1. **Hero (full-screen)**
   - Stesso componente `SeasonalHero` o versione parametrizzata
   - Stessa immagine sfondo `/images/sfondo.webp`
   - Stessa animazione logo + testo
   - Titolo: **"AMSON"** (grande, Playfair Display)
   - Sottotitolo: **"34° edizione"** (più piccolo, sotto)
   - Chevron "Scopri di più" animato

2. **"La Festa" Block**
   - Replica struttura `CommunitySection` ("Chi siamo")
   - Parallax background con immagine
   - Card bianca con bordo rosso, stesso layout 2-colonne
   - Contenuto: testo descrittivo festa (placeholder sul taglio del grano 30 anni fa in Italia)
   - Foto affiancate (stessa posizione immagine sinistra in b/n)

3. **Carosello Cartoline**
   - Nuovo componente `PostcardCarousel` o inline in AmsonClient
   - Foto in stile cartolina/ Polaroid: bordo bianco, ombra, leggera rotazione random
   - Auto-scroll orizzontale infinito (Framer Motion)
   - Pausa su hover
   - Titolo/frase sotto ogni cartolina
   - Sfondo sezione: brand-peach (`#FFEDE6`) o brand-white

4. **Footer**
   - Stesso componente `<Footer />` della homepage

### Navigazione Homepage → Amson

- Link "Amson" nel Footer (accanto a "Chi siamo", "Sostienici")
- Sezione dedicata in homepage con CTA "Scopri l'Amson"

## Componenti da Creare/Modificare

### Nuovi
| File | Descrizione |
|------|-------------|
| `/src/app/amson/page.tsx` | Server component, metadata SEO |
| `/src/app/amson/AmsonClient.tsx` | Client component, layout completo |

### Esistenti (riuso)
| Componente | Uso |
|------------|-----|
| `SeasonalHero` | Hero con titolo personalizzato |
| `CommunitySection` | Template per blocco "La Festa" |
| `Footer` | Footer identico |

### Esistenti (modifica)
| File | Modifica |
|------|----------|
| `/src/app/page.tsx` | Aggiungere sezione/CTA per Amson |
| `/src/components/Footer.tsx` | Aggiungere link "Amson" |

## Stack Tecnico

- Next.js 16 App Router (server + client pattern)
- Framer Motion 12.38.0 per animazioni
- Tailwind CSS 4 (tramite @theme tokens)
- Playfair Display (titoli) + Inter (testo)
- Immagini in formato .webp in `/public/images/`

## Pattern Esistente (da seguire)

Ogni pagina segue:
1. `/src/app/[pagina]/page.tsx` — esporta `metadata: Metadata`
2. `/src/app/[pagina]/[Pagina]Client.tsx` — UI con `<main key={pathname}>`

## Verification

1. `npm run dev` — pagina `/amson` funzionante
2. Hero mostra "AMSON" + "34° edizione"
3. Blocco "La Festa" ha parallax e card corretti
4. Carosello scorre automaticamente, pausa su hover
5. Footer ha link "Amson"
6. Homepage ha CTA per Amson
7. Build: `npm run build` senza errori