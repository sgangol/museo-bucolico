# Guida all'Aggiornamento dei Contenuti - Museo Bucolicò

Come concordato durante la fase di progettazione, questa pagina del museo agisce come un "manifesto" visivo ad alto impatto. Non c'è un pannello di controllo (CMS) tradizionale, per mantenere le massime performance e le animazioni su misura. 

Tuttavia, cambiare le foto o i testi è molto semplice.

## Come cambiare le immagini
Le immagini sono definite direttamente nei file dei componenti all'interno della cartella `src/components`.
Per modificare uno sfondo, ti basta aprire il file interessato e sostituire l'URL.

1. **Sfondo del Titolo Iniziale (Hero):** 
   - Apri `src/components/SeasonalHero.tsx`
   - Cerca la riga `backgroundImage: 'linear-gradient(...), url("https://...")'`
   - Cambia l'indirizzo URL dell'immagine.

2. **Galleria Fotografica (L'Emersione della Memoria):**
   - Apri `src/components/ArtifactGrid.tsx`
   - Attualmente usa immagini generiche da Unsplash. Troverai un blocco `backgroundImage: url(...)`. Puoi caricare le tue immagini nella cartella `public/images/` e scrivere `backgroundImage: url('/images/foto1.jpg')`.

3. **Collage della Comunità:**
   - Apri `src/components/CommunitySection.tsx`
   - Ci sono due `div` con `backgroundImage`. Cambia l'URL allo stesso modo.

## Come cambiare i Testi
Se un domani volessi modificare una parola o aggiornare un numero di telefono:

1. **Contatti (Telefono/Email):**
   - Apri `src/components/VisitInfo.tsx`
   - Modifica i link `href="mailto:..."` o `href="tel:..."` e il testo visibile tra i tag `<span>`.

2. **Paragrafi della Storia:**
   - Apri il componente specifico (es. `CommunitySection.tsx` o `TimelineNarrative.tsx`).
   - Scorri verso il basso e vedrai i testi originali scritti in italiano tra i tag `<p>` o `<span>`. Sostituiscili.

> **Importante:** Dopo ogni modifica ai file di codice, se sei in produzione (su server/Vercel) il sito dovrà essere ricompilato (eseguendo una nuova build o facendo il "push" del codice se usi Vercel).
