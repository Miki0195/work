"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { pricingTiers } from "@/content/pricing";

export function PricingTiers() {
  return (
    <section className="section-padding">
      <div className="container-padding mx-auto">
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <SectionReveal key={tier.slug} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: tier.highlighted ? 0 : -8 }}
                className={`glass rounded-2xl p-8 h-full flex flex-col relative ${
                  tier.highlighted ? 'border-2 border-primary-500 shadow-2xl shadow-primary-500/20' : ''
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="px-4 py-1 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full text-white text-sm font-medium">
                      Népszerű
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-display font-bold mb-2 text-white">
                    {tier.name}
                  </h3>
                  <p className="text-dark-400 text-sm mb-6">
                    {tier.description}
                  </p>

                  <div className="flex items-baseline space-x-2">
                    {tier.slug !== 'enterprise' ? (
                      <>
                        <span className="text-4xl font-display font-bold text-gradient">
                          {tier.price}
                        </span>
                        <span className="text-dark-400">/ {tier.period}</span>
                      </>
                    ) : (
                      <span className="text-4xl font-display font-bold text-gradient">
                        {tier.price}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3 text-sm text-dark-300">
                      <CheckCircle2 className="text-primary-400 flex-shrink-0 mt-0.5" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="w-full">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                      tier.highlighted
                        ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg shadow-primary-500/25'
                        : 'glass-hover text-white'
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
