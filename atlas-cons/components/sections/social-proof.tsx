'use client'

import { motion } from 'framer-motion'
import { Users, TrendingUp, Briefcase, Star } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { useLanguage } from '@/lib/language-context'

export function SocialProof() {
  const { t } = useLanguage()

  const metrics = [
    { icon: Users, label: t.socialProof.metrics.clients, color: 'text-blue-500' },
    { icon: TrendingUp, label: t.socialProof.metrics.revenue, color: 'text-green-500' },
    { icon: Briefcase, label: t.socialProof.metrics.projects, color: 'text-purple-500' },
    { icon: Star, label: t.socialProof.metrics.satisfaction, color: 'text-yellow-500' },
  ]

  const logos = ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix']

  return (
    <Section id="social-proof" className="border-t border-border">
      <div className="text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-semibold text-muted-foreground"
        >
          {t.socialProof.title}
        </motion.h2>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.6, scale: 1 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-2xl md:text-3xl font-bold"
            >
              {logo}
            </motion.div>
          ))}
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 pt-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group cursor-default"
            >
              {/* Background icon decoration */}
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <metric.icon className={`h-32 w-32 ${metric.color}`} />
              </div>

              {/* Content */}
              <div className="relative space-y-3">
                {/* Icon in a nice container */}
                <div className={`inline-flex p-3 rounded-xl ${metric.color.replace('text-', 'bg-')}/10 group-hover:scale-110 transition-transform`}>
                  <metric.icon className={`h-6 w-6 ${metric.color}`} />
                </div>
                
                {/* Metric value */}
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {metric.label.split(' ')[0]}
                </p>
                
                {/* Metric description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {metric.label.split(' ').slice(1).join(' ')}
                </p>
              </div>

              {/* Shine effect on hover */}
              <motion.div
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
