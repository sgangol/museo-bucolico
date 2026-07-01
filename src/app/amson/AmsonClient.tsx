"use client";

import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Footer from "@/components/Footer";

export default function AmsonClient() {
  const pathname = usePathname();
  const festaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: festaProgress } = useScroll({
    target: festaRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(festaProgress, [0, 1], ["0%", "20%"]);
  const imgY = useTransform(festaProgress, [0, 1], ["0%", "-30%"]);
  const textY = useTransform(festaProgress, [0, 1], [50, -50]);

  return (
    <main key={pathname} className="flex min-h-screen flex-col bg-brand-white overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{ backgroundImage: 'url("/images/Amson mietitura.webp")' }}
        />
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-peach z-0" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-12 w-full h-full">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            src="/images/logo-museo-bucolico-b.webp"
            alt="Bucolicò Scudo"
            className="w-48 md:w-64 lg:w-80 mb-8 mx-auto drop-shadow-2xl"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="font-serif font-bold text-8xl md:text-9xl lg:text-[12rem] leading-none text-brand-white drop-shadow-lg"
          >
            AMSON
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="font-serif text-3xl md:text-5xl lg:text-7xl text-brand-peach mt-4 drop-shadow-lg"
          >
            34° edizione
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8 text-brand-red drop-shadow-md" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── LA FESTA (replica CommunitySection) ── */}
      <section
        ref={festaRef}
        className="relative min-h-[120vh] w-full flex items-center z-10 overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0 w-full h-[120%]"
          style={{
            backgroundImage: 'url("/images/e96e0bba-195a-4f7e-81d5-dd5711f27a19.webp")',
            y: bgY,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-white/80 to-brand-white z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-white via-transparent to-transparent z-0" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-peach to-transparent z-0" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">
          <div className="hidden lg:block relative">
            <motion.div
              style={{ y: imgY }}
              className="w-3/4 aspect-[4/3] rounded-sm shadow-2xl overflow-hidden ml-auto border-4 border-brand-white/50"
            >
              <div
                className="w-full h-full bg-cover bg-center mix-blend-luminosity"
                style={{
                  backgroundImage:
                    'url("/images/IMG_4460.webp")',
                }}
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
              L'AMSON A LA MADONA
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-lg md:text-xl text-brand-gray space-y-6 leading-relaxed"
            >
              <p className="text-2xl font-serif text-brand-red italic drop-shadow-sm">
                Quando il grano diventava comunità.
              </p>
              <p>
                Quando gli agricoltori dicono "suma d'amson", intendono dire che siamo nel tempo della mietitura del grano. Il momento d'oro dell'estate. Quello in cui si raccoglie ciò che la terra ha generato, con uno strumento antico, l'Amsura. Da qui nasce il nome della nostra festa, l'Amson a la Madona. Una sera, più di trent'anni fa, un gruppo di amici seduto al tavolo del Circolo Geom. Umberto Piazza di Santa Maria del Tempio si chiese cosa poter fare per la nostra comunità. La risposta arrivò semplice: "Santa Maria è terra agricola. Proponiamo le nostre tradizioni. Proponiamo l'Amson." Non fu una strategia. Fu cuore, braccia, e la fede nella Madonna del Tempio.
              </p>
              <p>
                Era il 1992. Negli anni a seguire, la nostra festa prese la forma che in tanti ricordano ancora oggi. Nei campi accanto al convento dei frati cappuccini venivano esposti trattori, macchine e attrezzi d'epoca. Si ricostruivano gli ambienti della casa contadina e del lavoro nei campi. Negli stand allestiti sul campo di calcio si potevano vedere gli abiti degli sposi, i lavoretti delle scuole, la biancheria, le stoviglie, le vecchie macchine da cucire, i lavori artigianali in ferro, in legno, in tufo. Alle undici la messa al campo, nel chiostro del convento. Poi il pranzo conviviale, e nel pomeriggio, dopo la sfilata dei trattori, la dimostrazione di mietitura e trebbiatura in un campo della Cascina Commenda.
              </p>
              <p>
                Nel 1993 l'allora sindaco di Casale Monferrato Riccardo Coppo definì Santa Maria del Tempio la capitale del Monferrato agricolo. Non per le dimensioni, non per il numero delle aziende. Per il modo in cui la nostra comunità custodiva i suoi ritmi, e per la cura con cui li raccontava a chi veniva da fuori.
              </p>
              <p>
                Negli anni l'Amson è cresciuto, restando fedele a se stesso. Capace di mettere insieme la rievocazione storica e l'innovazione, i mezzi d'epoca e quelli di ultima generazione, le associazioni di categoria e gli artigiani, i convegni tecnici e i giochi per i più piccoli. Ha attraversato le edizioni, una dopo l'altra, portando ogni volta qualcosa in più, senza mai perdere quello che era all'inizio, un atto d'amore per la nostra terra. Sono stati in tanti, in questi trentaquattro anni, a costruire l'Amson con le proprie mani. C'è un pezzo del loro lavoro in ogni edizione che arriva, nella messa che si celebra ancora nel campo, nella sfilata dei trattori, nella mietitura a mano che si ripete ogni estate.
              </p>
              <p>
                Perché oggi, come allora, le stesse spighe maturano negli stessi campi. Gli stessi gesti si ripetono, anno dopo anno. Le mani che sapevano come si fa non ci sono più tutte, ma il grano non lo sa, e matura lo stesso. Ed è proprio da qui, da questa festa nata attorno a un tavolo nel 1992, che è nata l'idea di Bucolicò. Perché custodire l'Amson per un weekend all'anno non bastava più. Serviva un luogo capace di tenere viva quella memoria tutto l'anno, di raccontarla anche a chi non ha mai trebbiato, anche a chi non conosce più il nome esatto di un attrezzo. L'Amson a la Madona resta la nostra radice. Bucolicò è il modo in cui quella radice continua a dare frutto.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CAROSELLO CARTOLINE ── */}
      <section className="relative py-24 overflow-hidden bg-brand-red">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-white text-center drop-shadow-sm"
          >
            La festa in immagini
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-xl text-brand-white/80 italic text-center mt-4"
          >
            Scorri per rivivere i momenti più belli
          </motion.p>
        </div>

        <PostcardCarousel />
      </section>

      <MapSection />

      <Footer />
    </main>
  );
}

/* ── POSTCARD CAROUSEL ── */
function PostcardCarousel() {
  const isPaused = useRef(false);
  const x = useMotionValue(0);
  const photos = [
    { id: 1, src: "/images/amson/amson-01.webp", caption: "La trebbia", rotation: -1.5 },
    { id: 2, src: "/images/amson/amson-02.webp", caption: "La raccolta", rotation: 2 },
    { id: 3, src: "/images/amson/IMG_8793.webp", caption: "La gente", rotation: -0.5 },
    { id: 4, src: "/images/amson/amson-04.webp", caption: "Il quartiere", rotation: 1.5 },
    { id: 5, src: "/images/amson/amson-05.webp", caption: "Campagnole", rotation: -2 },
    { id: 6, src: "/images/amson/amson-06.webp", caption: "Momenti", rotation: 0.8 },
    { id: 7, src: "/images/amson/amson-07.webp", caption: "All'opera", rotation: -1 },
    { id: 8, src: "/images/amson/amson-08.webp", caption: "Raccolto", rotation: 1.2 },
    { id: 9, src: "/images/amson/amson-09.webp", caption: "Giovanni e Piero", rotation: -0.8 },
    { id: 10, src: "/images/amson/amson-10.webp", caption: "Giugno 2023", rotation: 1.8 },
    { id: 13, src: "/images/amson/amson-13.webp", caption: "Il taglio", rotation: -2.5 },
    { id: 15, src: "/images/amson/amson-15.webp", caption: "La concimazione", rotation: -1.8 },
    { id: 16, src: "/images/amson/amson-16.webp", caption: "Padre Felice", rotation: 2.2 },
    { id: 17, src: "/images/amson/amson-17.webp", caption: "Ugo Anteo", rotation: -0.3 },
    { id: 18, src: "/images/amson/amson-18.webp", caption: "La trebbiatura", rotation: 1.3 },
    { id: 19, src: "/images/amson/amson-19.webp", caption: "L'amsura", rotation: -1.7 },
    { id: 20, src: "/images/amson/amson-20.webp", caption: "Ricordi", rotation: 0.2 },
  ];
  const cardWidth = 288;
  const gap = 32;
  const totalWidth = (cardWidth + gap) * photos.length;

  useAnimationFrame((_, delta) => {
    if (isPaused.current) return;
    const speed = 50;
    const newX = x.get() - speed * (delta / 1000);
    if (newX <= -totalWidth) {
      x.set(0);
    } else {
      x.set(newX);
    }
  });

  return (
    <div
      className="relative w-full overflow-hidden py-8"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      <motion.div
        className="flex gap-8 w-max px-4"
        style={{ x }}
      >
        {[...photos, ...photos].map((photo, i) => (
          <motion.div
            key={`${photo.id}-${i}`}
            className="flex-shrink-0 w-64 md:w-72 bg-brand-white p-3 pb-8 rounded-sm shadow-xl"
            style={{ transform: `rotate(${photo.rotation}deg)` }}
            whileHover={{
              scale: 1.05,
              rotate: "0deg",
              transition: { duration: 0.3 },
            }}
          >
            <div className="w-full aspect-[4/3] overflow-hidden rounded-sm mb-3">
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="font-serif text-sm text-center text-brand-gray italic">
              &ldquo;{photo.caption}&rdquo;
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

/* ── MAPPA EVENTO ── */
function MapSection() {
  const [isOpen, setIsOpen] = useState(false);

  // ESC key closes lightbox
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Image error state
  const [imgError, setImgError] = useState(false);

  return (
    <>
      {/* Map Section */}
      <section className="relative py-16 lg:py-24 bg-brand-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            {imgError ? (
              <div className="w-full aspect-[4/3] bg-gray-100 rounded-sm flex items-center justify-center">
                <p className="font-sans text-gray-400 text-lg">Mappa non disponibile</p>
              </div>
            ) : (
              <motion.img
                src="/images/Pianta Amson 2026.webp"
                alt="Pianta Amson 2026"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => setIsOpen(true)}
                onError={() => setImgError(true)}
                className="w-full h-auto rounded-sm shadow-xl cursor-pointer"
              />
            )}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onMouseDown={(e) => { if (e.target === e.currentTarget) setIsOpen(false); }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-8"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-10 text-white/80 hover:text-white transition-colors"
              aria-label="Chiudi mappa"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <motion.img
              key="map-lightbox"
              src="/images/Pianta Amson 2026.webp"
              alt="Pianta Amson 2026"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onError={() => setImgError(true)}
              className="max-h-[90vh] max-w-[90vw] md:max-w-[80vw] object-contain rounded-sm cursor-default select-none"
              style={{ maxWidth: "1200px" }}
              draggable={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}