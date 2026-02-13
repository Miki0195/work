'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface UseCase {
  title: string;
  description: string;
  icon: string;
  results: string[];
  color: string;
}

const useCases: UseCase[] = [
  {
    title: 'E-commerce Automatizálás',
    description: 'Automatizálja megrendeléseit, készletkezelését és ügyfélkommunikációját egyetlen platformon keresztül.',
    icon: '🛒',
    results: [
      '85% gyorsabb megrendelés feldolgozás',
      '99.9% készlet pontosság',
      '40% kevesebb ügyfélszolgálati ticket',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Értékesítési Csapat Menedzsment',
    description: 'Kövesse nyomon csapatát, optimalizálja a sales funnelt és növelje a konverziót adatalapú döntésekkel.',
    icon: '📊',
    results: [
      '2.5x több kvalifikált lead',
      '35% magasabb konverziós arány',
      'Valós idejű teljesítmény dashboard',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Ügyfélkapcsolat Kezelés (CRM)',
    description: 'Építsen erősebb ügyfélkapcsolatokat személyre szabott kommunikációval és proaktív ügyfélszolgálattal.',
    icon: '🤝',
    results: [
      '60% jobb ügyfélmegtartás',
      '4.8/5 ügyfél elégedettségi score',
      'Automated follow-up rendszer',
    ],
    color: 'from-green-500 to-emerald-500',
  },
];

export function UseCaseCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % useCases.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Használati Esetek Minden Iparágban
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Platformunk igazodik az Ön egyedi üzleti igényeihez. Fedezze fel, hogyan segíthetünk.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative h-[650px] sm:h-[600px] md:h-[550px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              <div className="h-full max-w-4xl mx-auto px-2 sm:px-0">
                <div className={`h-full bg-gradient-to-br ${useCases[currentIndex].color} rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden flex flex-col`}>
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                  
                  <div className="relative z-10 flex-1 flex flex-col min-h-0">
                    <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">{useCases[currentIndex].icon}</div>
                    
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                      {useCases[currentIndex].title}
                    </h3>
                    
                    <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 leading-relaxed">
                      {useCases[currentIndex].description}
                    </p>

                    <div className="mb-6 sm:mb-8">
                      <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 uppercase tracking-wide">
                        Mért Eredmények:
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {useCases[currentIndex].results.map((result, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="flex items-start gap-2 sm:gap-3"
                          >
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-base sm:text-lg">{result}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all self-start text-sm sm:text-base"
                    >
                      Tudjon meg többet
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center z-20 hover:scale-110"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center z-20 hover:scale-110"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {useCases.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all ${
                index === currentIndex
                  ? 'w-12 h-3 bg-primary-600'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              } rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
