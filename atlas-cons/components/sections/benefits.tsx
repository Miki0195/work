'use client'

import { motion } from 'framer-motion'
import { Zap, Smartphone, Search, Target, Layers, Headphones } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { useLanguage } from '@/lib/language-context'

export function Benefits() {
  const { t } = useLanguage()

  const icons = [Zap, Smartphone, Search, Target, Layers, Headphones]

  return (
    <Section id="benefits">
      <div className="text-center space-y-4 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          {t.benefits.title}
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.benefits.items.map((benefit, index) => {
          const Icon = icons[index]
          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-8 space-y-4 group cursor-default"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
