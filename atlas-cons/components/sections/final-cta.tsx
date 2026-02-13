'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { analytics } from '@/lib/analytics'

interface FinalCTAProps {
  onContactClick: () => void
}

export function FinalCTA({ onContactClick }: FinalCTAProps) {
  const { t } = useLanguage()

  return (
    <Section className="relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-background -z-10 rounded-3xl" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-48 -right-48 w-96 h-96 bg-primary/30 rounded-full blur-3xl -z-10"
      />

      <div className="relative glass rounded-3xl p-12 md:p-20 text-center space-y-8 noise">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full"
        >
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Limited Spots Available</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold"
        >
          {t.finalCTA.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          {t.finalCTA.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Button
            size="lg"
            onClick={() => {
              onContactClick()
              analytics.ctaClick('final_cta', 'final_cta')
            }}
            className="group text-lg px-8 py-6 h-auto"
          >
            {t.finalCTA.cta}
            <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
