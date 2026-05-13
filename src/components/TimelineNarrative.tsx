"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TimelineNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const yOffset1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yOffset2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section ref={containerRef} className="relative min-h-[200vh] w-full bg-brand-white py-32" id="il-museo">
      {/* Immersive sticky background image with scroll-linked scale */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://www.museobucolico.it/wp-content/uploads/santa-aerea-storica-1024x502.jpg")',
            scale: backgroundScale
          }}
        />
        <div className="absolute inset-0 bg-brand-black/60 transition-colors duration-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 -mt-[100vh]">
        
        <motion.div 
          style={{ y: yOffset1 }}
          className="min-h-screen flex items-center"
        >
          <div className="bg-brand-white/95 backdrop-blur-xl p-8 md:p-14 border-t-4 border-brand-red shadow-2xl rounded-sm">
            <h2 className="font-serif text-5xl md:text-7xl text-brand-dark mb-8 text-center md:text-left drop-shadow-sm">Il Museo</h2>
            <div className="font-sans text-lg md:text-2xl leading-relaxed text-brand-gray space-y-6">
              <p className="text-3xl font-serif text-brand-red italic mb-8">Un museo a cielo aperto, dove la terra racconta.</p>
              <p>Bucolicò è molto più di un&apos;esposizione: è un <strong>Museo agricolo open air</strong> di mezzi e attrezzi d&apos;epoca, dove la storia contadina prende vita e respiro.</p>
              <p>Trattori e strumenti, provenienti da collezioni private e donati appositamente, diventano patrimonio collettivo. Non si tratta solo di conservare oggetti, ma di attuare un profondo <em>recupero di memoria e identità</em>.</p>
              <p>Un ambizioso progetto dell&apos;Arch. Simone Filippini che intende esaltare il meraviglioso contesto agricolo del quartiere di Santa Maria del Tempio, rispettandone e valorizzandone la storia, riorganizzando in modo funzionale e armonico gli spazi.</p>
              <p className="border-l-4 border-brand-red pl-6 py-2 my-8 text-brand-dark font-medium italic">Un racconto intimo di come la comunità vede, percepisce e attribuisce valore al proprio territorio: alle sue memorie, alla sua gente, alle sue trasformazioni, alla sua realtà attuale e a come vorrebbe che fosse in futuro.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: yOffset2 }}
          className="min-h-screen flex items-center"
        >
          <div className="bg-brand-dark/95 backdrop-blur-xl p-8 md:p-14 border-b-4 border-brand-red shadow-2xl rounded-sm ml-auto text-brand-white">
            <div className="font-sans text-lg md:text-2xl leading-relaxed space-y-6">
              <p>Nato da un progetto condiviso tra la comunità, la Parrocchia e il Circolo Geom. Umberto Piazza, il museo integra negli spazi della frazione percorsi dedicati alla storia e all&apos;evoluzione dell&apos;agricoltura.</p>
              <p>Non un semplice spazio espositivo, ma un organismo vivo che respira con le stagioni e racconta il territorio attraverso ciò che lo ha costruito — <em>la lavorazione agricola, il sapere contadino, l&apos;ingegno delle mani</em>.</p>
              <p>Trattori, attrezzi e strumenti del passato, recuperati e restaurati grazie all&apos;incredibile competenza di artigiani e agricoltori locali, tornano a parlare. Ogni oggetto custodisce una storia di fatica, innovazione, cambiamento e continuità.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-brand-white/20 my-8">
                <div className="text-center"><span className="block text-brand-red font-serif text-3xl">Primavera</span><span className="text-sm uppercase tracking-widest opacity-80">semina</span></div>
                <div className="text-center"><span className="block text-brand-peach font-serif text-3xl">Estate</span><span className="text-sm uppercase tracking-widest opacity-80">grano dorato</span></div>
                <div className="text-center"><span className="block text-brand-dark font-serif text-3xl">Autunno</span><span className="text-sm uppercase tracking-widest opacity-80">raccolto</span></div>
                <div className="text-center"><span className="block text-brand-gray font-serif text-3xl">Inverno</span><span className="text-sm uppercase tracking-widest opacity-80">silenzio</span></div>
              </div>

              <p>Un&apos;esperienza sensoriale e culturale. Uno spazio di incontro capace di ospitare generazioni diverse, eventi e iniziative in cui la storia non è solo esposta, ma vissuta da bambini, giovani e anziani insieme.</p>
              <p className="font-serif text-2xl text-brand-peach italic mt-8 text-center">Custodia e visione. Radice e direzione. Il racconto di un cammino che unisce tradizione e innovazione.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
