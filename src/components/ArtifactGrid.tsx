"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
  "https://www.museobucolico.it/wp-content/uploads/DSC1449-scaled.jpg",
  "https://www.museobucolico.it/wp-content/uploads/DSC1488-1024x683.jpg",
  "https://www.museobucolico.it/wp-content/uploads/DSC1393-scaled.jpg",
  "https://www.museobucolico.it/wp-content/uploads/image-8-1024x962.jpeg",
  "https://www.museobucolico.it/wp-content/uploads/DSC_1131-scaled.jpg",
  "https://www.museobucolico.it/wp-content/uploads/IMG_8675-768x1024.jpeg"
];

export default function ArtifactGrid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="py-32 bg-brand-red relative z-10 px-6 overflow-hidden">
      {/* Decorative large text behind the grid */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.03] overflow-hidden z-0">
        <motion.span 
          style={{ x: useTransform(scrollYProgress, [0, 1], [-200, 200]) }}
          className="font-serif text-[30vw] text-white whitespace-nowrap font-bold"
        >
          MEMORIA
        </motion.span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl text-white mb-8 drop-shadow-md"
          >
            L&apos;Emersione della Memoria
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed"
          >
            Trattori e strumenti, provenienti da collezioni private e donati appositamente, 
            diventano patrimonio collettivo. Ogni oggetto custodisce una storia di fatica e innovazione, 
            di cambiamento e continuità.
          </motion.p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {images.map((src, index) => {
            const yOffset = index % 3 === 0 ? y1 : index % 3 === 1 ? y2 : y3;
            
            return (
              <motion.div
                key={index}
                style={{ y: yOffset }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden bg-brand-dark rounded-sm shadow-2xl hover:shadow-brand-dark/50 transition-shadow duration-500"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url('${src}')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="block text-brand-red font-sans text-sm tracking-widest uppercase mb-2">Collezione</span>
                    <span className="font-serif text-white text-2xl drop-shadow-md">Memoria Contadina</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
