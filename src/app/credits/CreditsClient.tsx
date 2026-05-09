"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";

export default function CreditsClient() {
  // useScroll senza target → usa window scroll (default)
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"]
  });

  // Transform per effetto parallax sull'hero background
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const exhibitors = [
    "Roberto Bedon",
    "Rosella Conti",
    "Paolo Costanzo",
    "Tiziana Guaschino",
    "Marco Leporati",
    "Gianni Rosolen",
    "Francesco Tiengo",
    "Franco Ubertazzi",
    "Fam. Aldo Bertolotti",
    "Fam. Buzzi",
    "Fam. Riccardo Caprioglio",
    "Fam. Riccardo Coppo",
    "Fam. Ugo Fiori",
    "Fam. Marco Ganora",
    "Fam. Giuliano Marchesin",
    "Fam. Piero Mazzucco",
    "Fam. Ugo Merlo e Ottavia Montanini",
    "Fam. Mauro Pugno",
    "Fam. Rasera",
    "Fam. Giuseppe Scarrone",
    "Comune di Casale Monferrato",
    "Comune di Frassineto Po",
  ];

  const organigramma = {
    presidente: "Sabrina Barbano",
    vicePresidente: "Matteo Mazzucco",
    segretario: "Matteo Biasi",
    tesoriere: "Riccardo Basso",
    relazioni: "Patrizio Rocchetta",
    presidenteOnorario: "Don Giuseppe Cesana",
    progetto: "Arch. Simone Filippini",
    allestimenti: "Matteo Soldi – Enrico Ganora – Mirko Mazzucco",
    consulente: "Michele Giordano",
    conservatore: "Andrea Fiori – Paolo Fiori",
    restauratore: "Giorgio Barbano",
    partnership: "Rossella Filippini",
    serviziEducativi: "Gigi Fiori",
    grafica: "Piero Bergamelli",
    foto: "Samantha Scarrone – Stefano Bragato – Manuel Sacchi",
    web: "Samantha Battezzati",
    accoglienza: "Raffaella Glionna – Aurora Croatto – Clelia Anoffo – Giuliano Anoffo – Mariangela Brugnone – Alessandra Rocchetta",
  };

  return (
    <main className="flex min-h-screen flex-col bg-brand-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-brand-dark overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url(https://www.museobucolico.it/wp-content/uploads/2024/06/sfondo.png)",
            y: heroY
          }}
        />
        <div className="absolute inset-0 bg-brand-black/50 z-0" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl text-brand-white mb-4"
          >
            Credits
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-xl text-brand-peach"
          >
            Museo dell&apos;Agricoltura
          </motion.p>
        </div>
      </section>

      {/* Exhibitors Section */}
      <section className="py-20 px-6 bg-brand-peach">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl text-brand-dark mb-8 text-center"
          >
            Gli attrezzi e i mezzi attualmente esposti in questo museo sono stati
            generosamente messi a disposizione da:
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.05 }}
          >
            {exhibitors.map((name, index) => (
              <motion.div
                key={index}
                className="bg-brand-white p-6 rounded-sm shadow-lg hover:shadow-xl hover:scale-[1.02] border-l-4 border-brand-red transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="font-sans text-brand-gray">{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Organigramma Section */}
      <section className="py-20 px-6 bg-brand-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl text-brand-dark mb-12 text-center"
          >
            Organigramma
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="border-b border-brand-gray/20 pb-4">
              <h3 className="font-sans text-sm text-brand-red uppercase tracking-wider mb-1">
                Presidente
              </h3>
              <p className="font-serif text-xl text-brand-dark">
                {organigramma.presidente}
              </p>
            </div>
            <div className="border-b border-brand-gray/20 pb-4">
              <h3 className="font-sans text-sm text-brand-red uppercase tracking-wider mb-1">
                Vice Presidente
              </h3>
              <p className="font-serif text-xl text-brand-dark">
                {organigramma.vicePresidente}
              </p>
            </div>
            <div className="border-b border-brand-gray/20 pb-4">
              <h3 className="font-sans text-sm text-brand-red uppercase tracking-wider mb-1">
                Segretario
              </h3>
              <p className="font-serif text-xl text-brand-dark">
                {organigramma.segretario}
              </p>
            </div>
            <div className="border-b border-brand-gray/20 pb-4">
              <h3 className="font-sans text-sm text-brand-red uppercase tracking-wider mb-1">
                Tesoriere
              </h3>
              <p className="font-serif text-xl text-brand-dark">
                {organigramma.tesoriere}
              </p>
            </div>
            <div className="border-b border-brand-gray/20 pb-4">
              <h3 className="font-sans text-sm text-brand-red uppercase tracking-wider mb-1">
                Pubbliche Relazioni
              </h3>
              <p className="font-serif text-xl text-brand-dark">
                {organigramma.relazioni}
              </p>
            </div>
            <div className="border-b border-brand-gray/20 pb-4">
              <h3 className="font-sans text-sm text-brand-red uppercase tracking-wider mb-1">
                Presidente Onorario
              </h3>
              <p className="font-serif text-xl text-brand-dark">
                {organigramma.presidenteOnorario}
              </p>
            </div>
            <div className="border-b border-brand-gray/20 pb-4">
              <h3 className="font-sans text-sm text-brand-red uppercase tracking-wider mb-1">
                Progetto
              </h3>
              <p className="font-serif text-xl text-brand-dark">
                {organigramma.progetto}
              </p>
            </div>
            <div className="border-b border-brand-gray/20 pb-4">
              <h3 className="font-sans text-sm text-brand-red uppercase tracking-wider mb-1">
                Allestimenti
              </h3>
              <p className="font-serif text-xl text-brand-dark">
                {organigramma.allestimenti}
              </p>
            </div>
            <div className="border-b border-brand-gray/20 pb-4">
              <h3 className="font-sans text-sm text-brand-red uppercase tracking-wider mb-1">
                Consulente Tecnico
              </h3>
              <p className="font-serif text-xl text-brand-dark">
                {organigramma.consulente}
              </p>
            </div>
            <div className="border-b border-brand-gray/20 pb-4">
              <h3 className="font-sans text-sm text-brand-red uppercase tracking-wider mb-1">
                Conservatore
              </h3>
              <p className="font-serif text-xl text-brand-dark">
                {organigramma.conservatore}
              </p>
            </div>
            <div className="border-b border-brand-gray/20 pb-4">
              <h3 className="font-sans text-sm text-brand-red uppercase tracking-wider mb-1">
                Restauratore
              </h3>
              <p className="font-serif text-xl text-brand-dark">
                {organigramma.restauratore}
              </p>
            </div>
            <div className="border-b border-brand-gray/20 pb-4">
              <h3 className="font-sans text-sm text-brand-red uppercase tracking-wider mb-1">
                Partnership & Sponsorship
              </h3>
              <p className="font-serif text-xl text-brand-dark">
                {organigramma.partnership}
              </p>
            </div>
            <div className="border-b border-brand-gray/20 pb-4">
              <h3 className="font-sans text-sm text-brand-red uppercase tracking-wider mb-1">
                Servizi Educativi
              </h3>
              <p className="font-serif text-xl text-brand-dark">
                {organigramma.serviziEducativi}
              </p>
            </div>
            <div className="border-b border-brand-gray/20 pb-4">
              <h3 className="font-sans text-sm text-brand-red uppercase tracking-wider mb-1">
                Grafica
              </h3>
              <p className="font-serif text-xl text-brand-dark">
                {organigramma.grafica}
              </p>
            </div>
            <div className="border-b border-brand-gray/20 pb-4">
              <h3 className="font-sans text-sm text-brand-red uppercase tracking-wider mb-1">
                Foto
              </h3>
              <p className="font-serif text-xl text-brand-dark">{organigramma.foto}</p>
            </div>
            <div className="border-b border-brand-gray/20 pb-4">
              <h3 className="font-sans text-sm text-brand-red uppercase tracking-wider mb-1">
                Web
              </h3>
              <p className="font-serif text-xl text-brand-dark">{organigramma.web}</p>
            </div>
            <div className="border-b border-brand-gray/20 pb-4">
              <h3 className="font-sans text-sm text-brand-red uppercase tracking-wider mb-1">
                Accoglienza
              </h3>
              <p className="font-serif text-xl text-brand-dark">
                {organigramma.accoglienza}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}