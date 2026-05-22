"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function ContattiClient() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <main key={pathname} className="flex min-h-screen flex-col bg-brand-white overflow-x-hidden">
      <motion.section className="relative py-24 px-6 overflow-hidden">
        {/* Background image from test site */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{ backgroundImage: 'url("/images/sfondo.webp")', y: heroY }}
        />
        {/* Dark overlay to make text more readable */}
        <div className="absolute inset-0 bg-brand-black/50 z-0" />
        {/* Gradient to blend smoothly with the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-peach z-0" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl text-brand-white mb-4"
          >
            Contatti
          </motion.h1>
          <p className="font-serif text-xl text-brand-peach">
            Museo dell&apos;Agricoltura
          </p>
        </div>
      </motion.section>

      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-brand-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-shadow border-l-4 border-brand-red">
              <h2 className="font-serif text-2xl text-brand-dark mb-6">
                Scrivici
              </h2>
              <p className="text-brand-gray mb-6">
                Per info, donazioni, tesseramento e organizzare una visita:
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:santamariadeltempio@gmail.com"
                  className="block font-serif text-lg text-brand-dark hover:text-brand-red transition-colors"
                >
                  santamariadeltempio@gmail.com
                </a>
                <a
                  href="tel:+393491961776"
                  className="block font-serif text-lg text-brand-dark hover:text-brand-red transition-colors"
                >
                  +39 349 1961776
                </a>
              </div>
            </div>
            <div className="bg-brand-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-shadow border-l-4 border-brand-red">
              <h2 className="font-serif text-2xl text-brand-dark mb-6">
                Seguici
              </h2>
              <p className="text-brand-gray mb-4">Social:</p>
              <p className="font-serif text-lg text-brand-dark">
                Instagram e Facebook<br />
                @Santa Maria del Tempio
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-brand-white p-8 rounded-sm shadow-lg hover:shadow-xl transition-shadow border-l-4 border-brand-red mx-auto">
            <h2 className="font-serif text-2xl text-brand-dark mb-4">Dove siamo</h2>
            <p className="font-serif text-xl text-brand-gray">
              Bucolicò<br />
              Cantone Chiesa 34<br />
              15033 – Santa Maria del Tempio<br />
              Casale Monferrato (AL)
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
