"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function SeasonalHero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background image from test site */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ backgroundImage: 'url("https://www.cloudsami.net/bucolico/wp-content/uploads/2024/06/sfondo.png")' }}
      />
      {/* Dark overlay to make text more readable */}
      <div className="absolute inset-0 bg-black/30 z-0" />
      {/* Gradient to blend smoothly with the next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-peach z-0" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-12 w-full h-full">
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src="https://www.cloudsami.net/bucolico/wp-content/uploads/2024/07/SANTA-SCUDO-con-scritta-rossa.png" 
          alt="Bucolicò Scudo"
          className="w-48 md:w-64 lg:w-80 mb-12 mx-auto drop-shadow-2xl"
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="font-serif font-bold text-3xl md:text-5xl text-brand-white max-w-3xl leading-snug drop-shadow-lg mx-auto"
        >
          Bucolicò,<br />il primo museo agricolo<br />open air, sta sorgendo a<br />Santa Maria del Tempio
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
      >
        <span className="text-xs uppercase tracking-widest text-brand-white mb-2 font-sans font-bold drop-shadow-md">Scopri di più</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-brand-red drop-shadow-md" />
        </motion.div>
      </motion.div>
    </section>
  );
}
