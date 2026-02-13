"use client";

import { motion } from "framer-motion";
import { FloatingOrbs } from "@/components/ui/floating-orbs";
import { CheckCircle2 } from "lucide-react";

export function PricingHero() {
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
            <span className="text-sm text-dark-300">Árazás</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight"
          >
            <span className="text-gradient">Befektetés</span> a növekedésbe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-dark-300 leading-relaxed mb-8"
          >
            Válassz a rugalmas csomagjaink közül. Minden csomag tartalmazza az AI-powered eszközöket 
            és a szakértői támogatást.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 glass px-6 py-4 rounded-xl"
          >
            {[
              "60 napos garancia",
              "Nincs kötöttség",
              "Átlátható árazás"
            ].map((item) => (
              <div key={item} className="flex items-center space-x-2 text-sm text-dark-300">
                <CheckCircle2 className="text-primary-400" size={16} />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
