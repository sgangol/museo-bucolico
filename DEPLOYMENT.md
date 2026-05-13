# Guida al Deployment - Museo Bucolicò

Questo progetto è ottimizzato per poter essere caricato online in diversi modi, a seconda dell'infrastruttura preferita (VPS con Docker, Vercel, Netlify, ecc.).

## Opzione 1: Vercel (Raccomandata)
Essendo basato su Next.js, il deployment su Vercel è automatico e non richiede configurazione:
1. Carica questo codice su una repository GitHub.
2. Accedi a [Vercel](https://vercel.com) e crea un nuovo progetto.
3. Importa la tua repository.
4. Vercel capirà automaticamente che è un progetto Next.js. Lascia i settaggi di default e clicca "Deploy".
5. Il sito sarà online con certificato SSL automatico.

## Opzione 2: Docker (Server Privato / VPS)
Se disponi di un server (es. Aruba, DigitalOcean, Hetzner) e vuoi usare Docker, il progetto include già tutto il necessario. La build sfrutta il meccanismo `standalone` di Next.js per creare un container leggerissimo.

### Avvio Veloce
Sul server, clona la repository e usa Docker Compose:
```bash
docker-compose up -d --build
```
Questo scaricherà le dipendenze, compilerà il sito in modalità ottimizzata e lo avvierà sulla porta `3000`.

### Requisiti Server per Docker
- RAM: Almeno 1GB (consigliati 2GB per la build).
- Una configurazione Reverse Proxy (es. NGINX o Traefik) per esporre la porta 3000 sull'esterno e gestire il certificato HTTPS.
