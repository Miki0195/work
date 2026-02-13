'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-9xl font-display font-bold text-gradient mb-4">
          Hiba
        </h1>
        <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-white">
          Valami hiba történt
        </h2>
        <p className="text-lg text-dark-300 mb-8">
          Elnézést kérünk a kellemetlenségért. Kérlek próbáld újra.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg font-medium transition-all duration-200"
          >
            Újra próbálom
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 glass-hover rounded-lg font-medium text-white"
          >
            <Home className="mr-2" size={20} />
            Vissza a kezdőlapra
          </Link>
        </div>
      </div>
    </div>
  );
}
