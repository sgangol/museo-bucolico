import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-black text-brand-white py-12 text-center text-sm font-sans relative z-10 border-t border-brand-red">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {year} Museo dell&apos;Agricoltura Bucolicò - Santa Maria del Tempio</p>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-brand-red transition-colors">Chi siamo</Link>
          <Link href="/sostienici" className="hover:text-brand-red transition-colors">Sostienici</Link>
          <Link href="/credits" className="hover:text-brand-red transition-colors">Credits</Link>
          <Link href="/contatti" className="hover:text-brand-red transition-colors">Contatti</Link>
          <Link href="/vieni-a-visitarci" className="hover:text-brand-red transition-colors">Vieni a visitarci</Link>
        </div>
      </div>
    </footer>
  );
}
