'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Moon, Sun, Globe } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useLanguage } from '@/lib/language-context'
import { Button } from '@/components/ui/button'
import { smoothScroll } from '@/lib/utils'
import { analytics } from '@/lib/analytics'

interface HeaderProps {
  onContactClick: () => void
}

export function Header({ onContactClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: t.nav.features, href: 'benefits' },
    { label: t.nav.pricing, href: 'pricing' },
    { label: t.nav.testimonials, href: 'testimonials' },
    { label: t.nav.faq, href: 'faq' },
  ]

  const handleNavClick = (href: string) => {
    smoothScroll(href)
    setIsMobileMenuOpen(false)
    analytics.track('nav_click', { section: href })
  }

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'hu' : 'en'
    setLanguage(newLang)
    analytics.track('language_change', { language: newLang })
  }

  if (!mounted) return null

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"
          >
            Atlas
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative glass px-4 py-2 rounded-lg flex items-center gap-2 font-medium text-sm shadow-sm hover:shadow-md transition-shadow"
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">{language === 'en' ? 'English' : 'Magyar'}</span>
              <span className="sm:hidden">{language.toUpperCase()}</span>
              <motion.div
                initial={false}
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="text-xs opacity-50"
              >
                ⟳
              </motion.div>
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              aria-label="Toggle theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </motion.div>
            </motion.button>

            {/* Contact Button (Desktop) */}
            <Button
              onClick={() => {
                onContactClick()
                analytics.ctaClick('header_contact', 'header')
              }}
              className="hidden md:inline-flex"
              size="sm"
            >
              {t.nav.contact}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-border"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => {
                  onContactClick()
                  setIsMobileMenuOpen(false)
                  analytics.ctaClick('mobile_contact', 'header')
                }}
                className="w-full mt-2"
              >
                {t.nav.contact}
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}
