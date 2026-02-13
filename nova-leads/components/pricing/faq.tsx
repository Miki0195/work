"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { faqs } from "@/content/faq";

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Filter FAQs related to pricing
  const pricingFaqs = faqs.filter(faq => 
    faq.category === "Általános" || 
    faq.category === "ROI" || 
    faq.category === "Szerződés"
  );

  return (
    <section className="section-padding">
      <div className="container-padding mx-auto">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Gyakori <span className="text-gradient">kérdések</span>
            </h2>
            <p className="text-lg text-dark-300">
              Minden, amit tudnod kell az árazásunkról és a szolgáltatásainkról.
            </p>
          </div>
        </SectionReveal>

        <div className="max-w-3xl mx-auto space-y-4">
          {pricingFaqs.map((faq, index) => (
            <SectionReveal key={index} delay={index * 0.05}>
              <motion.div
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-dark-800/30 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </span>
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
