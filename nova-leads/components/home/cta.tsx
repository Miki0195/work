"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-purple-900/20 to-dark-950" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="container-padding mx-auto relative z-10">
        <SectionReveal>
          <div className="max-w-4xl mx-auto text-center glass p-12 rounded-3xl">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-8 shadow-lg shadow-primary-500/50"
            >
              <Calendar className="text-white" size={36} />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              Készen állsz a <span className="text-gradient">növekedésre</span>?
            </h2>

            <p className="text-lg md:text-xl text-dark-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Foglalj egy ingyenes 30 perces konzultációt, ahol megbeszéljük 
              az értékesítési céljaidat és kidolgozunk egy egyedi stratégiát.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto group">
                  Ingyenes konzultáció
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Árak megtekintése
                </Button>
              </Link>
            </div>

            <div className="mt-10 pt-8 border-t border-dark-800">
              <p className="text-sm text-dark-400">
                <span className="text-primary-400 font-semibold">60 napos garancia</span> 
                {" "}· Nem kell köteleződni · Nincs rejtett költség
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
