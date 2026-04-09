import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const STORAGE_KEY = 'cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[70] p-4 md:p-6">
      <div className="section-container max-w-3xl">
        <div className="bg-white border border-gold/20 shadow-xl shadow-charcoal/10 p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-charcoal leading-relaxed">
              Ez a weboldal sütiket használ a működés biztosítása és a
              felhasználói élmény javítása érdekében.{' '}
              <Link
                to="/adatvedelmi-tajekoztato"
                className="text-gold hover:underline"
              >
                Adatvédelmi tájékoztató
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={decline}
              className="px-4 py-2 text-xs uppercase tracking-widest text-charcoal-lighter hover:text-charcoal font-sans font-medium transition-colors duration-300"
            >
              Elutasítom
            </button>
            <button
              onClick={accept}
              className="px-5 py-2 text-xs uppercase tracking-widest bg-gold text-charcoal hover:bg-gold-dark font-sans font-medium transition-colors duration-300 border border-gold hover:border-gold-dark"
            >
              Elfogadom
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
