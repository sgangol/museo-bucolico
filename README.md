# Museo Bucolicò - Website Repository

Benvenuti nel repository del sito web del **Museo Bucolicò**, il primo museo agricolo open-air del Piemonte, a Santa Maria del Tempio.

## Stack Tecnologico
- **Framework:** Next.js 15 (App Router)
- **UI/Styling:** Tailwind CSS v4
- **Animazioni:** Framer Motion
- **Icone:** Lucide React
- **Linguaggio:** TypeScript
- **Container:** Docker

## Struttura del Progetto
L'architettura segue una logica a componenti basata sull'esperienza di "Scrollytelling":
- `src/app/page.tsx`: Pagina principale che assembla il racconto.
- `src/components/`:
  - `SeasonalHero`: Il banner iniziale immersivo.
  - `TimelineNarrative`: Sezione parallax che cambia con le stagioni.
  - `ArtifactGrid`: Galleria evocativa dei mezzi storici.
  - `CommunitySection`: Storia della comunità e dell'Arch. Filippini.
  - `VisitInfo`: Call to action e contatti.
  - `Footer`: Footer con link e copyright.

## Sviluppo Locale
1. Assicurati di avere Node.js installato.
2. Esegui `npm install` per installare le dipendenze.
3. Esegui `npm run dev` per avviare il server di sviluppo su `http://localhost:3000`.

Per testare la build di produzione localmente:
```bash
npm run build
npm run start
```

## Deployment
Vedi il file [DEPLOYMENT.md](DEPLOYMENT.md) per istruzioni su come caricare il sito online tramite Docker o Vercel.

## Aggiornamento Contenuti
Vedi il file [CONTENT_GUIDE.md](CONTENT_GUIDE.md) per capire come modificare testi o immagini senza dover conoscere la programmazione avanzata.
