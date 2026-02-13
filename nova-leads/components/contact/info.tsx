"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <SectionReveal delay={0.1}>
        <div className="glass p-8 rounded-2xl">
          <h2 className="text-2xl font-display font-bold mb-6 text-white">
            Elérhetőségek
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-white" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-dark-400 mb-1">Email</h3>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="text-white hover:text-primary-400 transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-white" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-dark-400 mb-1">Telefon</h3>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, '')}`}
                  className="text-white hover:text-primary-400 transition-colors"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-dark-400 mb-1">Cím</h3>
                <p className="text-white">{SITE_CONFIG.contact.address}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="text-white" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-dark-400 mb-1">Nyitvatartás</h3>
                <p className="text-white">Hétfő - Péntek: 9:00 - 18:00</p>
                <p className="text-dark-400 text-sm mt-1">Hétvégén zárva</p>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal delay={0.2}>
        <div className="glass p-8 rounded-2xl">
          <h3 className="text-xl font-display font-bold mb-4 text-white">
            Térkép
          </h3>
          {/* Map placeholder */}
          <div className="aspect-video rounded-xl bg-gradient-to-br from-primary-900/40 to-purple-900/40 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            <div className="relative z-10 text-center">
              <MapPin className="text-primary-400 mx-auto mb-2" size={48} />
              <p className="text-dark-400 text-sm">
                Interaktív térkép<br />
                (Google Maps integráció)
              </p>
            </div>
          </div>
        </div>
      </SectionReveal>
    </div>
  );
}
