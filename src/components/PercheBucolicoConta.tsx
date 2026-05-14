"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PercheBucolicoConta() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden min-h-screen">
      {/* Background image with overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://www.museobucolico.it/wp-content/uploads/santa-aerea-storica-1024x502.jpg")',
          y: bgY
        }}
      />
      <div className="absolute inset-0 bg-brand-black/60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-brand-white mb-4">
            PERCHÉ BUCOLICÒ CONTA
          </h2>
          <p className="text-lg md:text-xl text-brand-peach font-medium">
            oltre il borgo, oltre il Monferrato
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            style={{ y: cardY, transformStyle: "preserve-3d" }}
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-brand-white/95 backdrop-blur-sm p-8 md:p-12 rounded-sm shadow-2xl transition-all duration-300 border-t-4 border-brand-red"
          >
            <p className="text-lg md:text-xl leading-relaxed text-brand-gray">
              L&apos;Italia è un paese agricolo che ha quasi smesso di saperlo. In pochi decenni, il sapere contadino accumulato in secoli di pratica, le tecniche, gli strumenti, il vocabolario, il senso del tempo, si è dissolto nella velocità della modernizzazione, lasciando un vuoto che nessun archivio digitale è davvero in grado di colmare.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-brand-gray mt-6">
              Bucolicò nasce per rispondere a questo vuoto, e lo fa in modo concreto, situato, replicabile.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-brand-gray mt-6">
              Non è un museo nel senso convenzionale del termine: non raccoglie oggetti da esporre in modo neutro, ma costruisce un sistema di relazioni tra un territorio, la sua comunità, la sua storia materiale e le generazioni che lo abitano oggi.
            </p>
          </motion.div>

          <motion.div
            style={{ y: cardY, transformStyle: "preserve-3d" }}
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-brand-white/95 backdrop-blur-sm p-8 md:p-12 rounded-sm shadow-2xl transition-all duration-300 border-t-4 border-brand-red"
          >
            <p className="text-lg md:text-xl leading-relaxed text-brand-gray">
              Il metodo è semplice e potente insieme: recuperare i mezzi e gli attrezzi della tradizione agricola locale, documentarne l&apos;uso attraverso il sapere vivo degli anziani del luogo, restituirli alla collettività in uno spazio aperto e accessibile, e tenerli in dialogo permanente con una pratica agricola reale, il campo di grano che cresce e viene raccolto ogni anno davanti agli occhi di chi visita.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-brand-gray mt-6">
              Questo approccio ha un valore che va ben oltre Santa Maria del Tempio. Il modello Bucolicò è pensato per durare e per essere trasferibile. Le scelte progettuali, il coinvolgimento diretto della comunità locale, la struttura leggera e a bassa soglia economica, la capacità di intrecciare conservazione del patrimonio, animazione culturale e presidio del territorio: tutto questo rende Bucolicò un progetto studiabile, raccontabile, replicabile in altri contesti rurali che stanno attraversando le stesse sfide.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-brand-gray mt-6">
              Custodire la memoria di come si lavorava la terra non è nostalgia. È una forma di intelligenza collettiva, il riconoscimento che sapere da dove veniamo è la condizione per capire dove possiamo andare.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
