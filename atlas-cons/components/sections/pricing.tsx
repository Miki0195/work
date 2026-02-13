'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { analytics } from '@/lib/analytics'

interface PricingProps {
  onContactClick: () => void
}

export function Pricing({ onContactClick }: PricingProps) {
  const { t } = useLanguage()

  return (
    <Section id="pricing" className="bg-muted/30">
      <div className="text-center space-y-4 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          {t.pricing.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground"
        >
          {t.pricing.subtitle}
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {t.pricing.plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -8 }}
            className={`relative glass rounded-3xl p-8 space-y-8 ${
              'popular' in plan && plan.popular
                ? 'ring-2 ring-primary shadow-2xl shadow-primary/20 scale-105'
                : ''
            }`}
          >
            {'popular' in plan && plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                {t.pricing.plans[1].cta}
              </div>
            )}

            {/* Header */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold">{plan.price}</p>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              onClick={() => {
                onContactClick()
                analytics.ctaClick(`pricing_${plan.name.toLowerCase()}`, 'pricing')
                analytics.pricingView(plan.name)
              }}
              variant={plan.popular ? 'primary' : 'outline'}
              className="w-full"
              size="lg"
            >
              {plan.cta}
            </Button>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
