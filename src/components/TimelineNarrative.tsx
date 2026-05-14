"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TimelineNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const yOffset1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yOffset2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section ref={containerRef} className="relative min-h-[200vh] w-full bg-brand-white py-32" id="il-museo">
      {/* Immersive sticky background image with scroll-linked scale */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://www.museobucolico.it/wp-content/uploads/santa-aerea-storica-1024x502.jpg")',
            scale: backgroundScale
          }}
        />
        <div className="absolute inset-0 bg-brand-black/60 transition-colors duration-1000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 -mt-[100vh]">
        
        <motion.div 
          style={{ y: yOffset1 }}
          className="min-h-screen flex items-center"
        >
          <div className="bg-brand-white/95 backdrop-blur-xl p-8 md:p-14 border-t-4 border-brand-red shadow-2xl rounded-sm">
            <h2 className="font-serif text-5xl md:text-7xl text-brand-dark mb-8 text-center md:text-left drop-shadow-sm">Il Museo</h2>
            <div className="font-sans text-lg md:text-2xl leading-relaxed text-brand-gray space-y-6">
              <p className="text-3xl font-serif text-brand-red italic mb-8">Un museo a cielo aperto, dove la terra racconta.</p>
              <p>Bucolicò è il primo museo agricolo open air del Monferrato. Non un luogo di conservazione statica, ma un paesaggio vissuto, uno spazio in cui la storia agricola non è dietro una teca di vetro ma sotto i piedi, tra le mani, nell&apos;aria. Un organismo vivo che respira con le stagioni, si trasforma con la luce, parla a chi sa fermarsi ad ascoltare.</p>
              <p>Trattori e attrezzi provenienti da collezioni private, donati con generosità da chi li custodiva come reliquie di famiglia, diventano qui patrimonio collettivo. Ogni oggetto è una voce che aspettava di essere ascoltata. Porta con sé la fatica e l&apos;ingegno di chi ha lavorato questa terra curvo sotto il sole, senza monumenti e senza archivi, solo mani, stagioni, e la certezza silenziosa che il lavoro avesse senso. Generazioni intere che non immaginavano di essere storia, e che Bucolicò ha scelto di non lasciare andare.</p>
              <p>Il progetto è dell&apos;Arch. Simone Filippini, e nasce da una visione precisa: esaltare il contesto agricolo di Santa Maria del Tempio rispettandone la storia, riorganizzando gli spazi in modo funzionale e armonico, restituendo al borgo una dignità che il tempo non ha tolto ma che troppo spesso si fatica a vedere. Bucolicò è nato da un lavoro condiviso tra la comunità, la Parrocchia e il Circolo. È cresciuto grazie a mani volontarie, a competenze donate, alla pazienza di chi sapeva restaurare e a quella di chi sapeva aspettare. Ogni elemento del percorso porta in sé il segno di questa collaborazione, dalla targa &quot;Testi Caùdi d&apos;la Madona&quot; fino a quella di &quot;BarColicò&quot;, forgiate a mano da artigiani del posto, sono un atto d&apos;amore verso questo luogo.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: yOffset2 }}
          className="min-h-screen flex items-center"
        >
          <div className="bg-brand-dark/95 backdrop-blur-xl p-8 md:p-14 border-b-4 border-brand-red shadow-2xl rounded-sm ml-auto text-brand-white">
            <div className="font-sans text-lg md:text-2xl leading-relaxed space-y-6">
              <p>Tra gli strumenti e la memoria, c&apos;è un campo di grano che ogni anno torna a crescere. Un piccolo appezzamento coltivato direttamente nello spazio espositivo: viene seminato, seguito, raccolto secondo i tempi dell&apos;anno agricolo. Non una ricostruzione, non una scenografia, ma grano vero, terra vera, lavoro vero. Un modo per dire che la memoria, a Bucolicò, non è qualcosa che si guarda: è qualcosa che ancora cresce. Il percorso si snoda seguendo il ritmo dell&apos;anno: la semina in autunno, il grano che cresce durante l&apos;inverno, la spigatura in primavera, il raccolto d&apos;estate. Non una successione didattica, ma una narrazione. Un modo di ricordare che il tempo, qui, non si misura in ore ma in stagioni.</p>
              <p>Bucolicò è uno spazio dove il tempo si accorcia. Davanti a un trattore di inizio Novecento, un bambino chiede. Un anziano che lo ha guidato chiude gli occhi e ricorda. In quell&apos;istante sospeso tra la domanda e la risposta c&apos;è tutto ciò che un museo può sperare di essere. Storia che passa di bocca in bocca e si deposita nella memoria.</p>

              <p className="font-serif text-2xl text-brand-peach italic mt-8 text-center">Custodia e visione. Radice e direzione. Il racconto di un cammino che non è finito.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
