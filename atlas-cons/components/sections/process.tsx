'use client'

import { motion } from 'framer-motion'
import { Search as SearchIcon, Palette, Code, Rocket } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { useLanguage } from '@/lib/language-context'

export function Process() {
  const { t } = useLanguage()

  const icons = [SearchIcon, Palette, Code, Rocket]
  const colors = ['text-blue-500', 'text-purple-500', 'text-green-500', 'text-orange-500']
  const bgColors = ['bg-blue-500/10', 'bg-purple-500/10', 'bg-green-500/10', 'bg-orange-500/10']

  return (
    <Section className="bg-muted/30">
      <div className="text-center space-y-4 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          {t.process.title}
        </motion.h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Animated connecting line - desktop only */}
        <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 via-green-500 to-orange-500 origin-left"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {t.process.steps.map((step, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative flex flex-col items-center"
              >
                {/* Icon container with animated entrance */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
                  className="relative mb-6 z-10"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`relative w-24 h-24 ${bgColors[index]} rounded-2xl flex items-center justify-center shadow-lg border border-white/10 dark:border-gray-800/50`}
                  >
                    <Icon className={`h-12 w-12 ${colors[index]}`} />
                    
                    {/* Step number badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.5, type: 'spring' }}
                      className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-primary to-purple-600 text-primary-foreground rounded-full flex items-center justify-center text-base font-bold shadow-lg"
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>

                  {/* Connecting arrow for mobile/tablet */}
                  {index < 3 && (
                    <div className="lg:hidden absolute top-1/2 -right-8 md:-right-10">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 0.3, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.6 }}
                      >
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </motion.div>
                    </div>
                  )}
                </motion.div>

                {/* Content */}
                <div className="text-center space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold">{step.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
