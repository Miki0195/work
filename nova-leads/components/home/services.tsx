"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, BarChart3 } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { services } from "@/content/services";

const iconMap = {
  target: Target,
  zap: Zap,
  chart: BarChart3,
};

export function Services() {
  return (
    <section className="section-padding">
      <div className="container-padding mx-auto">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="text-gradient">Szolgáltatások</span> a növekedéshez
            </h2>
            <p className="text-lg text-dark-300">
              Átfogó megoldásokat kínálunk minden értékesítési kihívásra. 
              AI-powered eszközeink és szakértő csapatunk garantálja a sikert.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Target;
            
            return (
              <SectionReveal key={service.slug} delay={index * 0.1}>
                <Link href={`/services/${service.slug}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="glass-hover p-8 rounded-2xl h-full group glow-border"
                  >
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-primary-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="text-white" size={32} />
                      </div>
                    </div>

                    <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-gradient transition-all">
                      {service.title}
                    </h3>

                    <p className="text-dark-400 mb-4 text-sm">
                      {service.subtitle}
                    </p>

                    <p className="text-dark-300 mb-6 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-start space-x-2 text-sm text-dark-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center text-primary-400 font-medium group-hover:text-primary-300 transition-colors">
                      Részletek
                      <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
                    </div>
                  </motion.div>
                </Link>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal delay={0.3}>
          <div className="text-center mt-12">
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 glass-hover rounded-lg font-medium text-white inline-flex items-center space-x-2 group"
              >
                <span>Összes szolgáltatás</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </motion.button>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
