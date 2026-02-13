'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Section } from '@/components/ui/section'
import { useLanguage } from '@/lib/language-context'

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <Section id="testimonials">
      <div className="text-center space-y-4 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold"
        >
          {t.testimonials.title}
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {t.testimonials.items.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5 }}
            className="glass rounded-2xl p-8 space-y-6 relative overflow-hidden group"
          >
            {/* Quote icon */}
            <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10 group-hover:text-primary/20 transition-colors" />

            {/* Rating */}
            <div className="flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
              ))}
            </div>

            {/* Content */}
            <p className="text-lg leading-relaxed italic">&ldquo;{testimonial.content}&rdquo;</p>

            {/* Author */}
            <div className="border-t border-border pt-6">
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
