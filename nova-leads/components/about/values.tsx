"use client";

import { motion } from "framer-motion";
import { Heart, Zap, Trophy, Shield, Users, Lightbulb } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";

const values = [
  {
    icon: Heart,
    title: "Ügyfél-központúság",
    description: "Az ügyfeleink sikere a mi sikerünk. Minden döntésünket a maximális ügyfélérték szem előtt tartásával hozzuk meg.",
  },
  {
    icon: Zap,
    title: "Innováció",
    description: "Folyamatosan keressük a legújabb technológiákat és módszereket, hogy mindig a piaci élvonalban legyünk.",
  },
  {
    icon: Trophy,
    title: "Kiválóság",
    description: "Nem érjük be a jóval. Minden projektben a legjobb eredményekre törekszünk, mérhetően és következetesen.",
  },
  {
    icon: Shield,
    title: "Átláthatóság",
    description: "Őszinte kommunikáció, világos metrikák és teljes átláthatóság minden folyamatban és eredményben.",
  },
  {
    icon: Users,
    title: "Együttműködés",
    description: "Nem csak szolgáltatók vagyunk, hanem partnerek. Együtt dolgozunk az ügyfeleinkkel a közös célokért.",
  },
  {
    icon: Lightbulb,
    title: "Tanulás",
    description: "Minden projektből tanulunk, folyamatosan fejlesztjük magunkat és megosztjuk a tudásunkat.",
  },
];

export function Values() {
  return (
    <section className="section-padding bg-dark-900/50">
      <div className="container-padding mx-auto">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              <span className="text-gradient">Értékeink</span>
            </h2>
            <p className="text-lg text-dark-300">
              Ezek az alapelvek vezérlik mindennapjainkat és határozzák meg, 
              hogyan dolgozunk az ügyfeleinkkel.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <SectionReveal key={value.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="glass-hover p-6 rounded-xl group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-white">
                  {value.title}
                </h3>
                <p className="text-dark-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
