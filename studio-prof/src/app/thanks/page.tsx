'use client';

import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { trackPageView } from '@/lib/tracking';
import Link from 'next/link';

function ThanksContent() {
  const searchParams = useSearchParams();
  const variant = searchParams.get('v') || 'a';

  useEffect(() => {
    trackPageView(variant, 'thanks');
  }, [variant]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-green-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        {/* Success Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8"
          >
            <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            🎉 Köszönjük a regisztrációt!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 mb-8"
          >
            Elküldtünk egy megerősítő emailt a megadott címre. Kérjük, ellenőrizze a postafiókját.
          </motion.p>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-6 mb-8 text-left"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              📋 Következő lépések:
            </h2>
            <ol className="space-y-3">
              {[
                {
                  title: 'Erősítse meg az emailjét',
                  description: 'Kattintson a linkre az emailben (5 percen belül megérkezik)',
                },
                {
                  title: 'Teljesítse a profilt',
                  description: 'Ossza meg velünk vállalkozása igényeit (2 perc)',
                },
                {
                  title: 'Ütemezzen egy bevezetést',
                  description: 'Ingyenes 30 perces konzultáció a szakértőnkkel',
                },
                {
                  title: 'Kezdje el használni',
                  description: 'Azonnali hozzáférés minden funkcióhoz 14 napig',
                },
              ].map((step, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.div>

          {/* What to Expect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 text-left border border-green-200"
          >
            <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <span>💡</span>
              Mire számíthat:
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Személyre szabott üdvözlő email hasznos forrásokkal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Dedikált customer success manager kirendelése</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Hozzáférés az exkluzív onboarding anyagokhoz</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Csatlakozás a közösségi fórumunkhoz</span>
              </li>
            </ul>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="mailto:hello@studiorof.hu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Írok egy emailt
            </motion.a>
            <Link href={`/?v=${variant}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white hover:bg-gray-50 text-primary-600 font-semibold rounded-lg border-2 border-primary-600 transition-all"
              >
                Vissza a főoldalra
              </motion.button>
            </Link>
          </motion.div>

          {/* Support Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-600">
              Kérdése van? Keressen minket bármikor:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-sm">
              <a href="mailto:hello@studioprof.hu" className="text-primary-600 hover:text-primary-700 font-medium">
                hello@studioprof.hu
              </a>
              <span className="text-gray-400">•</span>
              <a href="tel:+36301234567" className="text-primary-600 hover:text-primary-700 font-medium">
                +36 30 123 4567
              </a>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600">24/7 Chat támogatás</span>
            </div>
          </motion.div>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-600 mb-4">
            Csatlakozott a 500+ elégedett ügyfélhez
          </p>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-sm font-semibold text-gray-700">4.9/5 értékelés</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function ThanksPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent"></div>
        </div>
      </div>
    }>
      <ThanksContent />
    </Suspense>
  );
}
