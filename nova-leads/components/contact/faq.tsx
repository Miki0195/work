"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { faqs } from "@/content/faq";

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-dark-900/50">
      <div className="container-padding mx-auto">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Gyakran Ismételt <span className="text-gradient">Kérdések</span>
            </h2>
            <p className="text-lg text-dark-300">
              Válaszok a leggyakoribb kérdésekre. Ha nem találod a választ, 
              írj nekünk bizalommal!
            </p>
          </div>
        </SectionReveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <SectionReveal key={index} delay={index * 0.05}>
              <motion.div
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-dark-800/30 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex-1 pr-8">
                    <span className="text-lg font-semibold text-white block mb-1">
                      {faq.question}
                    </span>
                    <span className="text-xs text-primary-400 font-medium">
                      {faq.category}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="text-primary-400" size={24} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-dark-300 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
