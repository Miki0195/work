'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryImage {
  url: string;
  alt: string;
  caption: string;
}

const galleryImages: GalleryImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80',
    alt: 'Modern irodai környezet',
    caption: 'Hatékony csapatmunka',
  },
  {
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    alt: 'Analitika és grafikonok',
    caption: 'Adatalapú döntéshozatal',
  },
  {
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80',
    alt: 'Üzleti megbeszélés',
    caption: 'Stratégiai tervezés',
  },
  {
    url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    alt: 'Sikeres csapat',
    caption: 'Növekvő eredmények',
  },
  {
    url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80',
    alt: 'Innovatív megoldások',
    caption: 'Modern technológia',
  },
  {
    url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
    alt: 'Ügyfélszolgálat',
    caption: '24/7 támogatás',
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      } else if (e.key === 'ArrowLeft' && selectedImage > 0) {
        setSelectedImage(selectedImage - 1);
      } else if (e.key === 'ArrowRight' && selectedImage < galleryImages.length - 1) {
        setSelectedImage(selectedImage + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Betekintés A Munkánkba
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Nézze meg, hogyan segítünk vállalkozásoknak elérni céljaikat
          </p>
        </motion.div>

        {/* Clean Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              {/* Image */}
              <div className="relative w-full h-full">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              {/* Minimal Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-medium mb-1 tracking-wide uppercase">
                    {image.caption}
                  </p>
                  <h3 className="text-white text-xl font-bold">
                    {image.alt}
                  </h3>
                </div>
              </div>

              {/* Minimal Corner Indicator */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Lightbox Modal */}
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/98 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:rotate-90 z-20"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
                <Image
                  src={galleryImages[selectedImage].url}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
              
              {/* Image Info */}
              <div className="mt-6 text-center">
                <p className="text-primary-400 text-sm font-medium mb-2 tracking-wide uppercase">
                  {galleryImages[selectedImage].caption}
                </p>
                <h3 className="text-white text-2xl sm:text-3xl font-bold">
                  {galleryImages[selectedImage].alt}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            {selectedImage > 0 && (
              <button
                className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {selectedImage < galleryImages.length - 1 && (
              <button
                className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Keyboard Hint */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 text-gray-400 text-sm">
              <span className="hidden sm:flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white/10 rounded text-xs">←</kbd>
                <kbd className="px-2 py-1 bg-white/10 rounded text-xs">→</kbd>
                Navigálás
              </span>
              <span className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white/10 rounded text-xs">ESC</kbd>
                Bezárás
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
