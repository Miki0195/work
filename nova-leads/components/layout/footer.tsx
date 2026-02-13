"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin, Send } from "lucide-react";
import { SITE_CONFIG, NAVIGATION } from "@/lib/constants";
import { newsletterSchema } from "@/lib/validations/contact";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    const result = newsletterSchema.safeParse({ email });
    
    if (!result.success) {
      setStatus("error");
      setMessage(result.error.errors[0].message);
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setStatus("success");
    setMessage("Sikeresen feliratkoztál a hírlevelünkre!");
    setEmail("");
    
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 3000);
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: SITE_CONFIG.links.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: SITE_CONFIG.links.twitter, label: "Twitter" },
    { icon: Facebook, href: SITE_CONFIG.links.facebook, label: "Facebook" },
    { icon: Instagram, href: SITE_CONFIG.links.instagram, label: "Instagram" },
  ];

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container-padding mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block group">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="relative w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">N</span>
                  </div>
                </div>
                <span className="font-display text-2xl font-bold text-gradient">
                  {SITE_CONFIG.name}
                </span>
              </div>
            </Link>
            <p className="text-dark-400 text-sm leading-relaxed">
              Következő generációs lead generation és értékesítési automatizáció AI-powered eszközökkel.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-dark-400 hover:text-primary-400 transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Gyors linkek</h3>
            <ul className="space-y-3">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Elérhetőség</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-start space-x-3 text-dark-400 hover:text-primary-400 transition-colors text-sm group"
                >
                  <Mail size={18} className="mt-0.5 flex-shrink-0" />
                  <span>{SITE_CONFIG.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, '')}`}
                  className="flex items-start space-x-3 text-dark-400 hover:text-primary-400 transition-colors text-sm group"
                >
                  <Phone size={18} className="mt-0.5 flex-shrink-0" />
                  <span>{SITE_CONFIG.contact.phone}</span>
                </a>
              </li>
              <li className="flex items-start space-x-3 text-dark-400 text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>{SITE_CONFIG.contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hírlevél</h3>
            <p className="text-dark-400 text-sm mb-4">
              Iratkozz fel, hogy hetente friss tippeket kapj az értékesítési növekedéshez.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  disabled={status === "loading"}
                  className="w-full px-4 py-2.5 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-dark-500 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors text-sm disabled:opacity-50"
                  aria-label="Email cím"
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-4 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <span>Küldés...</span>
                ) : (
                  <>
                    <span>Feliratkozás</span>
                    <Send size={16} />
                  </>
                )}
              </motion.button>
              {message && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm ${
                    status === "success" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {message}
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-dark-500 text-sm">
              © {currentYear} {SITE_CONFIG.name}. Minden jog fenntartva.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-dark-500 hover:text-primary-400 transition-colors">
                Adatvédelem
              </Link>
              <Link href="/terms" className="text-dark-500 hover:text-primary-400 transition-colors">
                Felhasználási feltételek
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
