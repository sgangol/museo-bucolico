"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AmsonHomeCTA() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-brand-peach to-brand-white text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6 drop-shadow-sm">
          Scopri l&apos;Amson
        </h2>
        <p className="font-sans text-lg md:text-xl text-brand-gray mb-8 leading-relaxed max-w-2xl mx-auto">
          La festa pi&ugrave; importante del museo: rievocazione della mietitura e trebbiatura del grano. Un tuffo nelle tradizioni contadine del Monferrato.
        </p>
        <Link href="/amson">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-red text-brand-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:shadow-brand-red/50 transition-all font-sans"
          >
            Scopri l&apos;Amson
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}