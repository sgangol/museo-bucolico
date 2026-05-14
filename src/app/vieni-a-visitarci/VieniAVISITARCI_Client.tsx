"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function VieniAVISITARCI_Client() {
  const pathname = usePathname();

  const mapVariants = {
    initial: { rotateX: 0, rotateY: 0, y: 0 },
    hover: {
      rotateX: 10,
      rotateY: 10,
      y: -20,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  } as const;

  const orariVariants = {
    initial: { rotateX: 0, rotateY: 0, y: 0 },
    hover: {
      rotateX: -10,
      rotateY: -10,
      y: -20,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  } as const;

  return (
    <main key={pathname} className="flex min-h-screen flex-col bg-brand-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative py-32 px-6 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background image from test site */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0 scale-110"
          style={{
            backgroundImage: 'url("https://www.cloudsami.net/bucolico/wp-content/uploads/2024/06/sfondo.png")'
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Dark overlay to make text more readable */}
        <div className="absolute inset-0 bg-brand-black/60 z-0" />
        {/* Gradient to blend smoothly with the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-peach z-0" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl text-brand-white mb-6"
          >
            Vieni a Visitarci
          </motion.h1>
          <p className="font-serif text-xl md:text-2xl text-brand-peach">
            Museo dell&apos;Agricoltura a Santa Maria del Tempio
          </p>
        </div>
      </motion.section>

      {/* Intro Section */}
      <section className="py-16 px-6 bg-brand-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-white p-8 md:p-12 rounded-sm shadow-xl border-t-4 border-brand-red">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-8 text-center">
              Il Museo Bucolicò
            </h2>
            <p className="font-sans text-lg md:text-xl text-brand-gray leading-relaxed mb-6">
              Il Museo Bucolicò ti aspetta a Santa Maria del Tempio, nel cuore del Monferrato.
            </p>
            <p className="font-sans text-lg md:text-xl text-brand-gray leading-relaxed mb-6">
              Un luogo dove la storia agricola torna a vivere attraverso trattori d&apos;epoca,
              attrezzi antichi e un campo di grano che cresce tra le opere.
            </p>
            <p className="font-sans text-lg md:text-xl text-brand-gray leading-relaxed mb-6">
              Vieni a scoprire un museo a cielo aperto, dove ogni stagione racconta una diversa
              storia di fatica, ingegno e memoria.
            </p>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section className="py-16 px-6 bg-brand-peach">
        <div className="max-w-6xl mx-auto">
          <div className="bg-brand-white p-8 md:p-12 rounded-sm shadow-xl border-t-4 border-brand-red">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-8 text-center">
              Orari di Apertura
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Primavera/Estate */}
              <div className="bg-brand-white p-6 rounded-sm border border-brand-gray/20 shadow-sm">
                <h3 className="font-serif text-2xl text-brand-dark mb-4">Primavera / Estate</h3>
                <ul className="font-sans text-lg text-brand-gray space-y-2">
                  <li className="flex justify-between border-b border-brand-gray/20 pb-2">
                    <span>Lunedì</span>
                    <span className="font-semibold text-brand-red">CHIUSO</span>
                  </li>
                  <li className="flex justify-between border-b border-brand-gray/20 pb-2">
                    <span>Martedì</span>
                    <span className="text-brand-gray">18:00 - 24:00</span>
                  </li>
                  <li className="flex justify-between border-b border-brand-gray/20 pb-2">
                    <span>Mercoledì</span>
                    <span className="text-brand-gray">18:00 - 20:30</span>
                  </li>
                  <li className="flex justify-between border-b border-brand-gray/20 pb-2">
                    <span>Giovedì</span>
                    <span className="text-brand-gray">18:00 - 24:00</span>
                  </li>
                  <li className="flex justify-between border-b border-brand-gray/20 pb-2">
                    <span>Venerdì</span>
                    <span className="text-brand-gray">18:00 - 01:00</span>
                  </li>
                  <li className="flex justify-between border-b border-brand-gray/20 pb-2">
                    <span>Sabato</span>
                    <span className="text-brand-gray">18:00 - 02:00</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span>Domenica</span>
                    <span className="text-brand-gray">10:30 - 13:00 / 16:00 - 21:00</span>
                  </li>
                </ul>
              </div>

              {/* Autunno/Inverno */}
              <div className="bg-brand-white p-6 rounded-sm border border-brand-gray/20 shadow-sm">
                <h3 className="font-serif text-2xl text-brand-dark mb-4">Autunno / Inverno</h3>
                <ul className="font-sans text-lg text-brand-gray space-y-2">
                  <li className="flex justify-between border-b border-brand-gray/20 pb-2">
                    <span>Lunedì</span>
                    <span className="font-semibold text-brand-red">CHIUSO</span>
                  </li>
                  <li className="flex justify-between border-b border-brand-gray/20 pb-2">
                    <span>Martedì</span>
                    <span className="font-semibold text-brand-red">CHIUSO</span>
                  </li>
                  <li className="flex justify-between border-b border-brand-gray/20 pb-2">
                    <span>Mercoledì</span>
                    <span className="font-semibold text-brand-red">CHIUSO</span>
                  </li>
                  <li className="flex justify-between border-b border-brand-gray/20 pb-2">
                    <span>Giovedì</span>
                    <span className="text-brand-gray">18:00 - 24:00</span>
                  </li>
                  <li className="flex justify-between border-b border-brand-gray/20 pb-2">
                    <span>Venerdì</span>
                    <span className="text-brand-gray">18:00 - 01:00</span>
                  </li>
                  <li className="flex justify-between border-b border-brand-gray/20 pb-2">
                    <span>Sabato</span>
                    <span className="text-brand-gray">18:00 - 02:00</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span>Domenica</span>
                    <span className="text-brand-gray">10:30 - 13:00 / 16:00 - 21:00</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Info Contatti */}
            <div className="mt-8 pt-6 border-t-2 border-brand-red">
              <p className="font-sans text-lg text-brand-gray text-center mb-4">
                Per visite fuori orario, gruppi, eventi su misura e informazioni:
              </p>
              <div className="text-center mb-6">
                <a
                  href="tel:+393491961776"
                  className="inline-flex items-center justify-center bg-brand-red text-brand-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-brand-dark transition-all"
                >
                  +39 349 1961776
                </a>
              </div>
              <p className="font-serif text-xl md:text-2xl text-brand-red italic text-center">
                &quot;BUCOLICÒ SEGUE IL RITMO DELLE STAGIONI: OGNI VISITA È DIVERSA DALLE PRECEDENTI&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Collage 3D Style */}
      <section className="py-16 px-6 bg-brand-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="relative w-full mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-2xl rotate-1 p-4 md:p-6">
              <Image
                src="/images/mappa_museo.png"
                alt="Mappa del Museo Bucolicò"
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-6 bg-brand-red/10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-brand-white p-8 md:p-12 rounded-sm shadow-xl border-t-4 border-brand-red">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-6">
              Prenota la tua Visita
            </h2>
            <p className="font-sans text-lg text-brand-gray mb-8">
              Per informazioni, tesseramento e organizzare una visita guidata:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="mailto:santamariadeltempio@gmail.com"
                className="flex items-center justify-center gap-3 bg-brand-white p-4 rounded-sm border border-brand-gray/30 hover:border-brand-red transition-all hover:bg-brand-red/5"
              >
                <span className="font-serif text-xl text-brand-dark">santamariadeltempio@gmail.com</span>
              </a>
              <a
                href="tel:+393491961776"
                className="flex items-center justify-center gap-3 bg-brand-white p-4 rounded-sm border border-brand-gray/30 hover:border-brand-red transition-all hover:bg-brand-red/5"
              >
                <span className="font-serif text-xl text-brand-dark">+39 349 1961776</span>
              </a>
            </div>
            <p className="mt-6 text-center text-brand-gray font-sans text-sm">
              Per partecipare agli eventi è necessario essere tesserati.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
