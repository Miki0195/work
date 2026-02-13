"use client";

import { motion } from "framer-motion";
import { Rocket, Target, Users } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";

export function Story() {
  return (
    <section className="section-padding">
      <div className="container-padding mx-auto">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
                A <span className="text-gradient">történetünk</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="space-y-12">
            <SectionReveal delay={0.1}>
              <div className="glass p-8 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold mb-3 text-white">
                      2018: Az alapítás
                    </h3>
                    <p className="text-dark-300 leading-relaxed">
                      A Nova Leads-et Viktor alapította, miután 12+ évet töltött B2B tech sales és 
                      marketing területén vezető pozíciókban olyan vállalatoknál, mint a Salesforce és HubSpot. 
                      Látva, hogy a legtöbb kis- és közepes vállalkozás küzd az értékesítési növekedéssel 
                      a megfelelő eszközök és tudás hiánya miatt, elhatározta, hogy változtat ezen.
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="glass p-8 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold mb-3 text-white">
                      2020-2022: Növekedés és AI integráció
                    </h3>
                    <p className="text-dark-300 leading-relaxed">
                      Az első két évben 20+ ügyfelet szolgáltunk ki sikeresen, átlagosan 300%+ növekedést 
                      generálva a lead volumenben. 2020-ban elkezztük integrálni a mesterséges intelligencia 
                      és machine learning technológiákat a lead scoring és prediktív analitika területein. 
                      Ez lehetővé tette, hogy még pontosabb és hatékonyabb kampányokat futtassunk.
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="glass p-8 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold mb-3 text-white">
                      2023-Ma: Teljes értékesítési ekoszisztéma
                    </h3>
                    <p className="text-dark-300 leading-relaxed">
                      Mára 50+ elégedett ügyfelet szolgálunk ki, és több mint 2.4 millió kvalifikált leadet 
                      generáltunk. A szolgáltatásainkat kiterjesztettük teljes értékesítési automatizációra, 
                      adatanalitikára és consulting-ra. Büszkék vagyunk arra, hogy ügyfeleinknél €18M+ 
                      bevétel növekedést segítettünk elérni. A csapatunk 15 főre bővült, specialisták 
                      a lead generation, marketing automation, data science és client success területeken.
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
