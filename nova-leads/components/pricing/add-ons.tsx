"use client";

import { motion } from "framer-motion";
import { Linkedin, FileText, Phone, BarChart3, Users, Search } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { addOns } from "@/content/pricing";

const iconMap: Record<string, any> = {
  linkedin: Linkedin,
  content: FileText,
  phone: Phone,
  analytics: BarChart3,
  training: Users,
  search: Search,
};

export function AddOns() {
  return (
    <section className="section-padding bg-dark-900/50">
      <div className="container-padding mx-auto">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              <span className="text-gradient">Kiegészítő</span> szolgáltatások
            </h2>
            <p className="text-lg text-dark-300">
              Bővítsd a csomagodat extra funkciókkal és szolgáltatásokkal 
              a még jobb eredmények érdekében.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOns.map((addon, index) => {
            const Icon = iconMap[addon.icon] || FileText;
            
            return (
              <SectionReveal key={addon.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-hover p-6 rounded-xl h-full"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary-400" size={24} />
                  </div>

                  <h3 className="text-lg font-display font-bold mb-2 text-white">
                    {addon.name}
                  </h3>

                  <p className="text-sm text-dark-300 mb-4 leading-relaxed">
                    {addon.description}
                  </p>

                  <div className="text-primary-400 font-semibold">
                    {addon.price}
                  </div>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
