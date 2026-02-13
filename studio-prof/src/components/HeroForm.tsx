'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { subscribeFormSchema, type SubscribeFormData, companySizeOptions } from '@/lib/schemas';
import { trackCTA, trackFormSubmit } from '@/lib/tracking';
import { VariantType } from '@/lib/variants';
import { useRouter } from 'next/navigation';

interface HeroFormProps {
  variant: VariantType;
  ctaText: string;
  ctaSubtext: string;
}

export function HeroForm({ variant, ctaText, ctaSubtext }: HeroFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeFormSchema),
  });

  const onSubmit = async (data: SubscribeFormData) => {
    setIsSubmitting(true);
    trackCTA(variant, 'hero-form', ctaText);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, variant }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      trackFormSubmit(variant, 'hero-form', true);
      router.push(`/thanks?v=${variant}`);
    } catch (error) {
      trackFormSubmit(variant, 'hero-form', false, error instanceof Error ? error.message : 'Unknown error');
      alert('Hiba történt. Kérjük próbálja újra később.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          type="email"
          placeholder="Email cím *"
          {...register('email')}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Név (opcionális)"
            {...register('name')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
          />
        </div>

        <div>
          <select
            {...register('companySize')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
          >
            <option value="">Cégméret (opcionális)</option>
            {companySizeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Küldés...' : ctaText}
      </motion.button>

      <p className="text-sm text-center text-gray-600">{ctaSubtext}</p>
    </form>
  );
}
