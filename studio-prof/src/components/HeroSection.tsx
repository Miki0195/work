'use client';

import { motion } from 'framer-motion';
import { VariantType, variantConfigs } from '@/lib/variants';
import { VideoBackground } from './VideoBackground';
import { AnimatedBackground } from './AnimatedBackground';
import { HeroForm } from './HeroForm';

interface HeroSectionProps {
  variant: VariantType;
}

export function HeroSection({ variant }: HeroSectionProps) {
  const config = variantConfigs[variant];
  const isCentered = config.heroLayout === 'centered';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-white">
      {/* Background - video for variant B, animated gradient for variant A */}
      {variant === 'b' ? (
        <VideoBackground />
      ) : (
        <div className="absolute inset-0">
          <AnimatedBackground />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {isCentered ? (
          // Variant A: Centered layout
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-primary-700 bg-primary-100 rounded-full">
                Megbízható • Hatékony • Bizonyított
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              {config.headline}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-gray-700 mb-12 leading-relaxed"
            >
              {config.subheadline}
            </motion.p>

            <motion.div variants={itemVariants} className="max-w-xl mx-auto">
              <HeroForm variant={variant} ctaText={config.ctaText} ctaSubtext={config.ctaSubtext} />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Ingyenes próbaidőszak</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Nincs hitelkártya</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Bármikor lemondható</span>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          // Variant B: Split layout
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="text-white">
              <motion.div variants={itemVariants}>
                <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-primary-900 bg-white rounded-full">
                  ⚡ Garantált eredmények vagy pénzvisszafizetés
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              >
                {config.headline}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl sm:text-2xl mb-8 leading-relaxed text-primary-50"
              >
                {config.subheadline}
              </motion.p>

              <motion.ul variants={itemVariants} className="space-y-4 mb-8">
                {[
                  'Automatizált munkafolyamatok 24/7',
                  'Dedikált ügyfélszolgálat magyarul',
                  'Teljes körű adatbiztonság és GDPR megfelelőség',
                  'Integráció minden népszerű rendszerrel',
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-green-400 flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-2xl p-8">
              <HeroForm variant={variant} ctaText={config.ctaText} ctaSubtext={config.ctaSubtext} />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
