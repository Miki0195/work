"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { getFeaturedCaseStudies } from "@/content/case-studies";

export function CaseStudiesSection() {
  const featuredCaseStudies = getFeaturedCaseStudies();

  return (
    <section className="section-padding bg-dark-900/50">
      <div className="container-padding mx-auto">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              Bizonyított <span className="text-gradient">eredmények</span>
            </h2>
            <p className="text-lg text-dark-300">
              Nézd meg, hogyan segítettünk ügyfeleinknek elérni a következő szintet 
              az értékesítési növekedésben és bevétel generálásban.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCaseStudies.map((study, index) => (
            <SectionReveal key={study.slug} delay={index * 0.1}>
              <Link href={`/work/${study.slug}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="glass-hover rounded-2xl overflow-hidden h-full group"
                >
                  {/* Image placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-900/40 to-purple-900/40 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TrendingUp className="text-primary-400 opacity-50" size={64} />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full text-xs text-primary-300 font-medium">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold mb-2 text-white group-hover:text-gradient transition-all">
                      {study.title}
                    </h3>
                    <p className="text-primary-400 text-sm font-medium mb-4">
                      {study.client}
                    </p>
                    <p className="text-dark-300 text-sm mb-6 line-clamp-2">
                      {study.challenge}
                    </p>

                    {/* Key metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.results.slice(0, 2).map((result, i) => (
                        <div key={i} className="text-center p-3 bg-dark-800/50 rounded-lg">
                          <div className="text-2xl font-display font-bold text-gradient mb-1">
                            {result.value}
                          </div>
                          <div className="text-xs text-dark-400">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-primary-400 font-medium text-sm group-hover:text-primary-300 transition-colors">
                      Esettanulmány megtekintése
                      <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={16} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <div className="text-center">
            <Link href="/work">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 glass-hover rounded-lg font-medium text-white inline-flex items-center space-x-2 group"
              >
                <span>Összes esettanulmány</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </motion.button>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
