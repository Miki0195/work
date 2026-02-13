"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/section-reveal";

const trustedBy = [
  "TechStart Solutions",
  "FinanceFlow",
  "CloudSync Pro",
  "DataVault Systems",
  "InnovateLab",
  "ScaleUp Ventures",
];

export function Proof() {
  return (
    <section className="section-padding bg-dark-900/50 border-y border-dark-800">
      <div className="container-padding mx-auto">
        <SectionReveal>
          <div className="text-center mb-12">
            <p className="text-dark-400 uppercase tracking-wider text-sm font-semibold mb-8">
              Megbíznak bennünk a vezető tech vállalatok
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {trustedBy.map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-dark-500 hover:text-dark-300 transition-colors text-lg font-semibold"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Elégedett ügyfél" },
              { number: "2.4M+", label: "Generált kvalifikált lead" },
              { number: "€18M+", label: "Ügyfél bevétel növekedés" },
              { number: "4.9/5", label: "Ügyfél értékelés" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-dark-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
