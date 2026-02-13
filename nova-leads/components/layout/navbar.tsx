"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAVIGATION, SITE_CONFIG } from "@/lib/constants";
import { useScroll } from "@/lib/hooks/use-scroll";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const scrolled = useScroll(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass shadow-lg border-b border-dark-800/50"
          : "bg-transparent"
      )}
    >
      <nav className="container-padding mx-auto">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            aria-label="Nova Leads kezdőlap"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">N</span>
              </div>
            </div>
            <span className="font-display text-xl sm:text-2xl font-bold text-gradient">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAVIGATION.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative",
                    isActive
                      ? "text-primary-400"
                      : "text-dark-300 hover:text-dark-50 hover:bg-dark-800/50"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => {
                const event = new KeyboardEvent('keydown', {
                  key: 'k',
                  metaKey: true,
                  ctrlKey: true,
                });
                window.dispatchEvent(event);
              }}
              className="text-dark-400 hover:text-dark-200 transition-colors text-sm"
              aria-label="Keresés megnyitása"
            >
              <kbd className="px-2 py-1 text-xs font-semibold text-dark-400 bg-dark-800 border border-dark-700 rounded-lg">
                ⌘K
              </kbd>
            </button>
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:scale-105"
            >
              Kezdjünk neki
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-dark-300 hover:text-dark-50 transition-colors"
            aria-label={mobileMenuOpen ? "Menü bezárása" : "Menü megnyitása"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden glass border-t border-dark-800/50"
          >
            <div className="container-padding py-4 space-y-2">
              {NAVIGATION.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                      isActive
                        ? "bg-primary-500/10 text-primary-400"
                        : "text-dark-300 hover:text-dark-50 hover:bg-dark-800/50"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-medium text-center mt-4"
              >
                Kezdjünk neki
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
