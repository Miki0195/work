import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import Button from '../ui/Button';

const NAV_ITEMS = [
  { label: 'Koncepció', hash: '#koncepcio' },
  { label: 'Élmény', hash: '#elmeny' },
  { label: 'Események', hash: '#esemenyek' },
  { label: 'Szolgáltatók', hash: '#szolgaltatok' },
  { label: 'Social', hash: '#social' },
  { label: 'Kapcsolat', hash: '#kapcsolat' },
];

function NavLink({ item, onClick, className }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const base =
    className ||
    'text-xs uppercase tracking-widest text-charcoal-light hover:text-gold transition-colors duration-300 font-medium';

  if (isHome) {
    return (
      <a href={item.hash} onClick={onClick} className={base}>
        {item.label}
      </a>
    );
  }

  return (
    <Link to={`/${item.hash}`} onClick={onClick} className={base}>
      {item.label}
    </Link>
  );
}

function MobileMenu({ isOpen, onClose, logoEl, ctaHref, isHome }) {
  return createPortal(
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`lg:hidden fixed inset-0 z-[55] bg-charcoal/30 transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Panel */}
      <div
        className={`lg:hidden fixed top-0 right-0 z-[60] h-[100dvh] w-full max-w-sm bg-ivory shadow-2xl transition-transform duration-500 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal/5">
            {isHome ? (
              <a href="#fooldal" className="flex flex-col leading-none" onClick={onClose}>
                {logoEl}
              </a>
            ) : (
              <Link to="/" className="flex flex-col leading-none" onClick={onClose}>
                {logoEl}
              </Link>
            )}
            <button
              onClick={onClose}
              className="p-2 -mr-2 group"
              aria-label="Menü bezárása"
            >
              <div className="relative w-6 h-6">
                <span className="absolute top-1/2 left-0 block w-6 h-px bg-charcoal group-hover:bg-gold transition-colors duration-300 rotate-45" />
                <span className="absolute top-1/2 left-0 block w-6 h-px bg-charcoal group-hover:bg-gold transition-colors duration-300 -rotate-45" />
              </div>
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex-1 flex flex-col justify-center px-6 gap-1">
            {NAV_ITEMS.map((item, i) => (
              <div
                key={item.hash}
                className="overflow-hidden"
                style={{
                  transition: `opacity 400ms ${isOpen ? i * 80 + 200 : 0}ms, transform 400ms ${isOpen ? i * 80 + 200 : 0}ms`,
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0)' : 'translateX(24px)',
                }}
              >
                <NavLink
                  item={item}
                  onClick={onClose}
                  className="block py-3 text-base uppercase tracking-[0.15em] text-charcoal hover:text-gold transition-colors duration-300 font-medium border-b border-charcoal/5"
                />
              </div>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div
            className="px-6 pb-8 pt-4"
            style={{
              transition: `opacity 400ms ${isOpen ? NAV_ITEMS.length * 80 + 300 : 0}ms, transform 400ms ${isOpen ? NAV_ITEMS.length * 80 + 300 : 0}ms`,
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(12px)',
            }}
          >
            <Button
              href={ctaHref}
              size="lg"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center font-sans font-medium tracking-wide transition-all duration-300 ease-out bg-gold text-charcoal hover:bg-gold-dark active:bg-gold-dark border border-gold hover:border-gold-dark shadow-sm hover:shadow-md px-9 py-4 text-sm uppercase tracking-widest"
            >
              Jegyvásárlás
            </Button>

            {/* Decorative flourish */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <span className="block w-8 h-px bg-gold/30" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-charcoal-lighter/50 font-sans">
                Fake Wedding
              </span>
              <span className="block w-8 h-px bg-gold/30" />
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const logoEl = (
    <>
      <span className="font-serif text-lg md:text-xl font-semibold tracking-tight text-charcoal group-hover:text-gold transition-colors duration-300">
        Győri Esküvő Party
      </span>
      <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal-lighter font-sans mt-0.5">
        Fake Wedding
      </span>
    </>
  );

  const ctaHref = isHome ? '#esemenyek' : '/#esemenyek';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="section-container flex items-center justify-between">
          {isHome ? (
            <a href="#fooldal" className="flex flex-col leading-none group">
              {logoEl}
            </a>
          ) : (
            <Link to="/" className="flex flex-col leading-none group">
              {logoEl}
            </Link>
          )}

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.hash} item={item} />
            ))}
            <Button href={ctaHref} size="sm">
              Jegyvásárlás
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label={mobileOpen ? 'Menü bezárása' : 'Menü megnyitása'}
          >
            <span
              className={`block w-6 h-px bg-charcoal transition-all duration-300 origin-center ${
                mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-charcoal transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-charcoal transition-all duration-300 origin-center ${
                mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu rendered via portal — outside header to avoid backdrop-filter issues */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        logoEl={logoEl}
        ctaHref={ctaHref}
        isHome={isHome}
      />
    </>
  );
}
