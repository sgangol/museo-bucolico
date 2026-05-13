"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export default function VisitInfo() {
  return (
    <section className="py-32 bg-brand-white relative z-10 text-center px-6 border-t border-brand-peach">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.img 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          src="https://www.museobucolico.it/wp-content/uploads/2024/06/logo-museo-bucolico.png" 
          alt="Bucolicò Logo"
          className="w-48 mb-16"
        />

        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-dark leading-tight mb-16"
        >
          Custodia e visione.<br/> Radice e direzione.<br/>
          <span className="text-brand-red">Il racconto di un cammino.</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          <a 
            href="mailto:santamariadeltempio@gmail.com"
            className="group flex items-center gap-4 text-brand-gray hover:text-brand-red transition-colors"
          >
            <div className="w-12 h-12 rounded-full border border-brand-peach flex items-center justify-center group-hover:border-brand-red transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <span className="font-sans text-lg tracking-wide">santamariadeltempio@gmail.com</span>
          </a>

          <a 
            href="tel:+393491961776"
            className="group flex items-center gap-4 text-brand-gray hover:text-brand-red transition-colors"
          >
            <div className="w-12 h-12 rounded-full border border-brand-peach flex items-center justify-center group-hover:border-brand-red transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <span className="font-sans text-lg tracking-wide">+39 349 1961776</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
