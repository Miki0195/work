'use client'

import { Mail, Phone } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function Footer() {
  const { t } = useLanguage()

  const footerSections = [
    { title: t.footer.company.title, links: t.footer.company.links },
    { title: t.footer.services.title, links: t.footer.services.links },
    { title: t.footer.resources.title, links: t.footer.resources.links },
    { title: t.footer.legal.title, links: t.footer.legal.links },
  ]

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo & Contact */}
          <div className="col-span-2 space-y-4">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Atlas
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t.footer.contact.title}
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${t.footer.contact.email}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                {t.footer.contact.email}
              </a>
              <a
                href={`tel:${t.footer.contact.phone}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                {t.footer.contact.phone}
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <button className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
