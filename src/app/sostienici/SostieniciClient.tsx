"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import { Heart, Users, HandHeart, Archive } from "lucide-react";

export default function SostieniciClient() {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const supportOptions = [
    {
      title: "Erogazioni Liberali",
      description: "Il museo gestito interamente da volontari. Ogni donazione, piccola o grande, ci aiuta a preservare la storia agricoltura locale.",
      cta: "Contatta",
      ctaLink: "/contatti",
      quote: "Ogni gesto conta. Anche il tuo.",
      icon: Heart,
    },
    {
      title: "Sponsorizzazioni",
      description: "Le aziende possono sostenerci con sponsorizzazioni, coniugando visibilità e valorizzazione del territorio.",
      cta: "Contatta",
      ctaLink: "/contatti",
      icon: Users,
    },
    {
      title: "Tesseramento",
      description: "Diventa socio del nostro museo. La tessera il modo migliore per restare aggiornato sulle iniziative e partecipare alla vita del museo.",
      cta: "Diventa socio",
      ctaLink: "/contatti",
      quote: "Quello che costruiamo qui non appartiene a nessuno in particolare appartiene a tutti.",
      icon: HandHeart,
    },
    {
      title: "Esponi da Noi",
      description: "Hai attrezzi agricoli antichi? Il pezzo rimane tuo: tu lo presti, noi lo valorizziamo e lo esponiamo al pubblico.",
      cta: "Scrivici",
      ctaLink: "/contatti",
      quote: "Il pezzo rimane tuo: tu lo presti, noi lo valorizziamo.",
      icon: Archive,
    },
  ];

  return (
    <main key={pathname} className="flex min-h-screen flex-col bg-brand-white overflow-x-hidden">
      <section ref={containerRef} className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url(https://www.museobucolico.it/wp-content/uploads/2024/06/sfondo.png)",
            y: heroY
          }}
        />
        <div className="absolute inset-0 bg-brand-black/50 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-peach z-[1]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 text-center px-6"
          style={{ y: heroY }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif font-bold text-3xl md:text-5xl lg:text-7xl text-brand-white mb-6 leading-snug drop-shadow-lg"
          >
            Sostieni Bucolicò
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-2xl md:text-3xl text-brand-peach italic drop-shadow-lg"
          >
            Ogni gesto conta. Anche il tuo.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-24 px-6 bg-brand-peach pb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-brand-dark mb-4">Come puoi aiutarci</h2>
            <p className="font-sans text-lg text-brand-gray max-w-2xl mx-auto">
              Il museo vive grazie alla comunità. Ogni contributo, piccolo o grande, fa la differenza.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-brand-white p-8 border-l-4 border-brand-red shadow-xl hover:shadow-2xl transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-brand-red/10 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand-red" />
                    </div>
                    <h3 className="font-serif text-2xl text-brand-dark">
                      {option.title}
                    </h3>
                  </div>
                  <p className="text-brand-gray mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  {option.quote && (
                    <blockquote className="font-serif italic text-brand-red text-lg mb-6 border-l-2 border-brand-peach pl-4">
                      {option.quote}
                    </blockquote>
                  )}
                  <a
                    href={option.ctaLink}
                    className="inline-block bg-brand-red text-brand-white px-6 py-4 font-sans font-medium hover:bg-brand-dark transition-all active:scale-[0.98]"
                  >
                    {option.cta}
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-6 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url(https://www.museobucolico.it/wp-content/uploads/santa-aerea-storica-1024x502.jpg)" }}
        />
        <div className="absolute inset-0 bg-brand-dark/70 z-0" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="bg-brand-white p-10 md:p-16 rounded-sm shadow-2xl border-t-4 border-brand-red"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-6">
              IBAN per donazioni
            </h2>
            <p className="text-brand-gray mb-6 text-lg">
              Per effettuare un&apos;erogazione liberale, utilizza il seguente IBAN:
            </p>
            <code className="inline-block bg-brand-peach/20 px-4 py-3 font-mono text-brand-dark text-sm md:text-xl rounded overflow-x-auto break-all whitespace-pre-wrap">
              IT87V0623022601000046703000
            </code>
            <p className="mt-6 text-brand-gray text-sm">
              Tutte le donazioni sono detraibili fiscalmente.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 bg-brand-red">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-4xl text-brand-peach italic leading-relaxed"
          >
            &quot;Quello che costruiamo qui non appartiene a nessuno in particolare — appartiene a tutti.&quot;
          </motion.blockquote>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 font-sans text-brand-white/60"
          >
            — La comunità di Bucolicò
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  );
}