"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";

const steps = [
  {
    number: "01",
    title: "Felfedezés",
    description: "Első konzultáció, ahol megismerjük a vállalkozásod, céljaid, kihívásaid és a jelenlegi értékesítési folyamatod."
  },
  {
    number: "02",
    title: "Stratégia",
    description: "Egyedi stratégiát dolgozunk ki az ideális ügyfélprofilod, célpiacod és értékesítési célkitűzéseid alapján."
  },
  {
    number: "03",
    title: "Implementáció",
    description: "Felállítjuk az összes rendszert, integrációt és kampányt. Átfogó onboarding és képzés a csapatodnak."
  },
  {
    number: "04",
    title: "Optimalizáció",
    description: "Folyamatos monitoring, A/B tesztelés és finomhangolás a legjobb eredmények elérése érdekében."
  },
  {
    number: "05",
    title: "Skálázás",
    description: "Ahogy nőnek az eredmények, együtt skálázzuk a kampányokat és bővítjük a lehetőségeket."
  }
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-dark-900/50">
      <div className="container-padding mx-auto">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Hogyan <span className="text-gradient">dolgozunk</span>
            </h2>
            <p className="text-lg text-dark-300">
              Bizonyított folyamat, amely biztosítja a gyors indulást és a fenntartható eredményeket.
            </p>
          </div>
        </SectionReveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/50 to-purple-500/50" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <SectionReveal key={step.number} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="relative flex items-start space-x-6 glass-hover p-6 rounded-xl"
                  >
                    {/* Step number */}
                    <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex flex-col items-center justify-center relative z-10">
                      <span className="text-2xl font-display font-bold text-white">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-display font-bold mb-2 text-white flex items-center">
                        {step.title}
                        <CheckCircle2 className="ml-3 text-primary-400" size={20} />
                      </h3>
                      <p className="text-dark-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
