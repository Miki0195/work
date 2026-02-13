'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/header'
import { Hero } from '@/components/sections/hero'
import { SocialProof } from '@/components/sections/social-proof'
import { ProblemSolution } from '@/components/sections/problem-solution'
import { Benefits } from '@/components/sections/benefits'
import { Process } from '@/components/sections/process'
import { Testimonials } from '@/components/sections/testimonials'
import { Pricing } from '@/components/sections/pricing'
import { FAQ } from '@/components/sections/faq'
import { FinalCTA } from '@/components/sections/final-cta'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { analytics } from '@/lib/analytics'

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  useEffect(() => {
    // Track page view
    analytics.page('home')
  }, [])

  const handleContactClick = () => {
    setIsContactOpen(true)
  }

  return (
    <main className="min-h-screen">
      <Header onContactClick={handleContactClick} />
      <Hero onContactClick={handleContactClick} />
      <SocialProof />
      <ProblemSolution />
      <Benefits />
      <Process />
      <Testimonials />
      <Pricing onContactClick={handleContactClick} />
      <FAQ />
      <FinalCTA onContactClick={handleContactClick} />
      <Footer />
      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  )
}
