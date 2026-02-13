"use client";

import { motion } from "framer-motion";
import { FloatingOrbs } from "@/components/ui/floating-orbs";

export function CaseStudiesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      <FloatingOrbs />
      
      <div className="container-padding mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border border-primary-500/30 mb-8"
          >
            <span className="text-sm text-dark-300">Esettanulmányok</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight"
          >
            <span className="text-gradient">Bizonyított</span> eredmények
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-dark-300 leading-relaxed"
          >
            Valós vállalkozások, valós kihívások, valós eredmények. 
            Nézd meg, hogyan segítettünk ügyfeleinknek elérni a céljaikat.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
