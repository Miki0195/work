'use client'

import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { useLanguage } from '@/lib/language-context'

export function ProblemSolution() {
  const { t } = useLanguage()

  return (
    <>
      {/* Problem Section */}
      <Section className="bg-red-500/5 dark:bg-red-500/10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
              <AlertCircle className="h-4 w-4 text-red-500" />
              <span className="text-sm font-medium">{t.problem.title}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">{t.problem.headline}</h2>
            <p className="text-lg text-muted-foreground">{t.problem.description}</p>
            <ul className="space-y-4">
              {t.problem.points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <AlertCircle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Illustration placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] glass rounded-3xl flex items-center justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20" />
            <svg
              className="w-48 h-48 text-red-500/30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </motion.div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section className="bg-green-500/5 dark:bg-green-500/10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Illustration placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] glass rounded-3xl flex items-center justify-center overflow-hidden order-2 md:order-1"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20" />
            <svg
              className="w-48 h-48 text-green-500/30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 md:order-2"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">{t.solution.title}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">{t.solution.headline}</h2>
            <p className="text-lg text-muted-foreground">{t.solution.description}</p>
            <ul className="space-y-4">
              {t.solution.points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>
    </>
  )
}
