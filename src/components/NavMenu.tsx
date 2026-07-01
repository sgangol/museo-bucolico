"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Chi siamo" },
  { href: "/amson", label: "Amson" },
  { href: "/sostienici", label: "Sostienici" },
  { href: "/credits", label: "Credits" },
  { href: "/contatti", label: "Contatti" },
  { href: "/vieni-a-visitarci", label: "Vieni a visitarci" },
];

const overlayVariants = {
  open: { opacity: 0.5 },
  closed: { opacity: 0 },
};

const panelVariants = {
  open: { x: 0 },
  closed: { x: "-100%" },
};

const itemVariants = {
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.2 + i * 0.05, duration: 0.3 },
  }),
  closed: { opacity: 0, x: -20, transition: { duration: 0.15 } },
};

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  // Close on route change
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Escape key closes menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-6 left-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-brand-red text-white shadow-lg hover:scale-105 active:scale-95 transition-transform"
        aria-label="Apri menu"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-black cursor-pointer"
            onClick={close}
          />
        )}
      </AnimatePresence>

      {/* Menu panel */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="panel"
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed top-0 left-0 z-40 h-full w-[280px] bg-brand-red shadow-2xl flex flex-col"
          >
            {/* Close button inside panel */}
            <div className="flex justify-end p-4">
              <button
                onClick={close}
                className="flex items-center justify-center w-10 h-10 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Chiudi menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Links */}
            <ul className="flex-1 flex flex-col justify-center gap-2 px-8">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  variants={itemVariants}
                  custom={i}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <Link
                    href={link.href}
                    onClick={close}
                    className={`block text-2xl font-serif tracking-wide transition-colors ${
                      pathname === link.href
                        ? "text-white underline underline-offset-4 decoration-white/60"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}