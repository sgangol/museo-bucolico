"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CommunitySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="relative min-h-[120vh] w-full flex items-center z-10 overflow-hidden" id="chi-siamo">
      
      {/* Immersive Background Image with parallax */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0 w-full h-[120%]"
        style={{ 
          backgroundImage: 'url("https://www.museobucolico.it/wp-content/uploads/la-strada-di-santa-1024x741.jpg")',
          y: bgY
        }}
      />
      
      {/* Gradient Overlay for transitions and text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-white/80 to-brand-white z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-white via-transparent to-transparent z-0" />
      {/* Transition from the previous section */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-peach to-transparent z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">
        
        {/* Secondary Image floating, with scroll parallax */}
        <div className="hidden lg:block relative">
          <motion.div 
            style={{ y: imgY }}
            className="w-3/4 aspect-[4/3] rounded-sm shadow-2xl overflow-hidden ml-auto border-4 border-brand-white/50"
          >
            <div 
              className="w-full h-full bg-cover bg-center mix-blend-luminosity"
              style={{ backgroundImage: 'url("https://www.museobucolico.it/wp-content/uploads/santa_blackandwhite-1024x722.jpg")' }}
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
            Chi siamo
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-brand-gray space-y-6 leading-relaxed"
          >
            <p className="text-2xl font-serif text-brand-red italic drop-shadow-sm">Siamo una comunità.<br />Siamo memoria che cammina.</p>
            <p>
              Santa Maria del Tempio è una frazione agricola del Comune di Casale Monferrato, nel cuore del Basso Monferrato. Un borgo piccolo e radicato, con origini templari e francescane, i campi di grano che si distendono fino all&apos;orizzonte, l&apos;odore della terra che cambia con le stagioni. Un luogo che potrebbe essere dimenticato, e che invece ha scelto di ricordare.
            </p>
            <p>
              L&apos;Associazione di Promozione Sociale di Santa Maria del Tempio è nata nei primi anni Sessanta, da una stanza al secondo piano di una casa privata: un posto dove leggere, parlare, fare musica, stare insieme. Da lì siamo cresciuti, lentamente e con ostinazione, fino a diventare un punto di riferimento vivo per tutta la comunità locale.
            </p>
            <p>
              Il nostro Circolo porta il nome del Geom. Umberto Piazza, giovane della frazione scomparso prematuramente nel 1981, ricordato per la solarità, il senso civico, la generosità. Il suo nome non è un&apos;intitolazione formale: è un promemoria quotidiano di come scegliamo di stare nel mondo.
            </p>
            <p>
              Associazione di Promozione Sociale iscritta al Registro Unico del Terzo Settore, affiliata a CSEN, da decenni promuoviamo il territorio attraverso eventi che sono diventati parte dell&apos;identità del Monferrato. L&apos;Amson a la Madona, rievocazione della mietitura e trebbiatura del grano nata nel lontano 1992, è la radice da cui tutto è cresciuto. Insieme a lei, il Rogo della Vegia, la Bottega dell&apos;Ottimismo e il Santa Wave Festival.
            </p>
            <p>
              L&apos;associazione gestisce un circolo aperto tutto l&apos;anno: uno spazio di aggregazione, cultura e musica, dove si incontrano volontari, famiglie, bambini, anziani, musicisti e artisti. Un luogo che cresce con chi lo abita.
            </p>
            <p className="font-medium text-brand-dark">
              Da quella piccola stanza continuiamo a costruire comunità, custodire la memoria, immaginare il futuro.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
