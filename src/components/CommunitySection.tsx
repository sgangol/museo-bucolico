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
              Nati nei primi anni ’60 a Santa Maria del Tempio, frazione agricola di Casale Monferrato, siamo cresciuti da una semplice stanza al secondo piano di una casa privata — un luogo di lettura, dialogo, musica e amicizia — fino a diventare un punto di riferimento vivo per tutto il territorio.
            </p>
            <p>
              Nel 1981 abbiamo scelto la nostra identità: il Circolo è intitolato al Geom. Umberto Piazza, giovane della frazione prematuramente scomparso, ricordato per la sua solarità, il senso civico e la generosità. Il suo nome rappresenta i valori che ci guidano ancora oggi.
            </p>
            <p>
              Associazione senza scopo di lucro iscritta al Terzo Settore e affiliata a CSEN, promuoviamo il territorio e creiamo occasioni di incontro attraverso eventi diventati parte dell’identità del Monferrato: il Rogo della Vegia, la Festa del Grano, la Castagnata, la Bottega dell’Ottimismo e il Santa Wave Festival.
            </p>
            <p>
              Oggi il Circolo è uno spazio di aggregazione, ristorazione per i soci, cultura e musica dal vivo — aperto a volontari, famiglie, giovani e anziani che credono nella forza dello stare insieme.
            </p>
            <p className="font-medium text-brand-dark">
              Dal sogno di una piccola stanza, continuiamo a costruire comunità, custodire la memoria, generare futuro.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
