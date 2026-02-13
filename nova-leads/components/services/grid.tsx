"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, BarChart3, CheckCircle2 } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { services } from "@/content/services";

const iconMap = {
  target: Target,
  zap: Zap,
  chart: BarChart3,
};

export function ServicesGrid() {
  return (
    <section className="section-padding">
      <div className="container-padding mx-auto">
        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Target;
            const isEven = index % 2 === 0;
            
            return (
              <SectionReveal key={service.slug} delay={index * 0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-6">
                      <Icon className="text-white" size={32} />
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
                      {service.title}
                    </h2>

                    <p className="text-primary-400 text-lg font-medium mb-6">
                      {service.subtitle}
                    </p>

                    <p className="text-dark-300 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {service.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <CheckCircle2 className="text-primary-400 flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-dark-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <Link href={`/services/${service.slug}`}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg font-medium transition-all duration-200 inline-flex items-center space-x-2 group"
                        >
                          <span>Részletek</span>
                          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                        </motion.button>
                      </Link>

                      <div className="text-dark-400 text-sm">
                        <span className="font-semibold text-primary-400">{service.pricing.starting}</span>
                        <span className="text-dark-500"> -tól</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass p-8 rounded-2xl relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative">
                        <div className="aspect-square rounded-xl bg-gradient-to-br from-primary-900/40 to-purple-900/40 flex items-center justify-center">
                          <Icon className="text-primary-400 opacity-50" size={120} />
                        </div>
                        
                        <div className="mt-6 grid grid-cols-2 gap-4">
                          {service.benefits.slice(0, 2).map((benefit, i) => (
                            <div key={i} className="glass p-4 rounded-lg">
                              <div className="text-sm text-dark-400 leading-relaxed">
                                {benefit}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
