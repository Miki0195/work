"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { team } from "@/content/team";

export function Team() {
  return (
    <section className="section-padding">
      <div className="container-padding mx-auto">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Ismerkedj meg a <span className="text-gradient">csapattal</span>
            </h2>
            <p className="text-lg text-dark-300">
              Szakértők lead generation, értékesítési automatizáció és data analytics területén, 
              akik elkötelezettek az ügyfeleink sikere iránt.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <SectionReveal key={member.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="glass-hover rounded-2xl overflow-hidden group"
              >
                {/* Image placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-primary-900/40 to-purple-900/40 overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-4xl font-display font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-1 text-white group-hover:text-gradient transition-all">
                    {member.name}
                  </h3>
                  <p className="text-primary-400 text-sm font-medium mb-4">
                    {member.position}
                  </p>
                  
                  <p className="text-dark-300 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Expertise tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-dark-800/50 rounded text-xs text-dark-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social links */}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm text-primary-400 hover:text-primary-300 transition-colors"
                    >
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
