'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion } from 'framer-motion'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { Modal } from '@/components/ui/modal'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/language-context'
import { analytics } from '@/lib/analytics'

const createFormSchema = (t: any) =>
  z.object({
    name: z.string().min(2, { message: t.form.errors.required }),
    email: z.string().email({ message: t.form.errors.email }),
    company: z.string().min(2, { message: t.form.errors.required }),
    budget: z.string().min(1, { message: t.form.errors.required }),
    message: z.string().min(10, { message: t.form.errors.required }),
  })

type FormData = z.infer<ReturnType<typeof createFormSchema>>

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const { t } = useLanguage()
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const formSchema = createFormSchema(t)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      setSubmitError(null)

      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      // Track successful submission
      analytics.formSubmit('contact_form')

      // Show success state
      setIsSuccess(true)
      reset()

      // Auto-close after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
        onClose()
      }, 3000)
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError(t.form.errors.generic)
    }
  }

  const handleClose = () => {
    setIsSuccess(false)
    setSubmitError(null)
    reset()
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="md">
      {!isSuccess ? (
        <>
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">{t.form.title}</h2>
            <p className="text-sm text-muted-foreground">{t.form.subtitle}</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium">
                {t.form.fields.name}
              </label>
              <input
                id="name"
                type="text"
                {...register('name')}
                className="w-full px-3 py-2 text-sm rounded-lg glass border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium">
                {t.form.fields.email}
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full px-3 py-2 text-sm rounded-lg glass border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Company */}
            <div className="space-y-1.5">
              <label htmlFor="company" className="text-sm font-medium">
                {t.form.fields.company}
              </label>
              <input
                id="company"
                type="text"
                {...register('company')}
                className="w-full px-3 py-2 text-sm rounded-lg glass border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Acme Inc."
              />
              {errors.company && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.company.message}
                </p>
              )}
            </div>

            {/* Budget */}
            <div className="space-y-1.5">
              <label htmlFor="budget" className="text-sm font-medium">
                {t.form.fields.budget}
              </label>
              <select
                id="budget"
                {...register('budget')}
                className="w-full px-3 py-2 text-sm rounded-lg glass border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              >
                <option value="">Select a range</option>
                {t.form.budgetOptions.map((option: string) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.budget && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.budget.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium">
                {t.form.fields.message}
              </label>
              <textarea
                id="message"
                {...register('message')}
                rows={3}
                className="w-full px-3 py-2 text-sm rounded-lg glass border border-border focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                placeholder="Tell us about your project..."
              />
              {errors.message && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Error message */}
            {submitError && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 flex items-center gap-2 text-sm">
                <AlertCircle className="h-4 w-4" />
                {submitError}
              </div>
            )}

            {/* Submit button */}
            <Button
              type="submit"
              size="md"
              className="w-full mt-2"
              isLoading={isSubmitting}
            >
              {isSubmitting ? t.form.submitting : t.form.submit}
            </Button>
          </form>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8 space-y-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
          </motion.div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">{t.form.success.title}</h3>
            <p className="text-sm text-muted-foreground">{t.form.success.message}</p>
          </div>
          <Button onClick={handleClose} size="md">{t.form.success.cta}</Button>
        </motion.div>
      )}
    </Modal>
  )
}
