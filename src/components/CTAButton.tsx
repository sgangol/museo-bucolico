"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTAButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="flex justify-center py-12"
    >
      <Link href="/vieni-a-visitarci">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-brand-red text-brand-white px-8 py-4 rounded-lg text-lg font-medium shadow-lg hover:shadow-brand-red/50 transition-all"
        >
          Vieni a visitarci
        </motion.button>
      </Link>
    </motion.div>
  );
}
