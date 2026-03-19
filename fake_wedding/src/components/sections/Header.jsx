import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const NAV_ITEMS = [
  { label: 'Főoldal', hash: '#fooldal' },
  { label: 'Élmény', hash: '#elmeny' },
  { label: 'Hogyan működik', hash: '#hogyan-mukodik' },
  { label: 'Kiknek szól', hash: '#kiknek-szol' },
  { label: 'Szolgáltatók', hash: '#szolgaltatok' },
  { label: 'Események', hash: '#esemenyek' },
  { label: 'Galéria', hash: '#galeria' },
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
        Fake Wedding Experience
      </span>
    </>
  );

  const ctaHref = isHome ? '#esemenyek' : '/#esemenyek';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
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
            className={`block w-6 h-px bg-charcoal transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-charcoal transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-charcoal transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-[3.5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-ivory z-40 flex flex-col transition-all duration-500 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="section-container flex items-center justify-between py-5">
          {isHome ? (
            <a href="#fooldal" className="flex flex-col leading-none" onClick={() => setMobileOpen(false)}>
              {logoEl}
            </a>
          ) : (
            <Link to="/" className="flex flex-col leading-none" onClick={() => setMobileOpen(false)}>
              {logoEl}
            </Link>
          )}
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2"
            aria-label="Menü bezárása"
          >
            <span className="block w-6 h-px bg-charcoal rotate-45 translate-y-px" />
            <span className="block w-6 h-px bg-charcoal -rotate-45 -translate-y-px" />
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center flex-1 gap-6">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.hash}
              item={item}
              onClick={() => setMobileOpen(false)}
              className="text-sm uppercase tracking-[0.2em] text-charcoal hover:text-gold transition-colors duration-300 font-medium"
            />
          ))}
          <Button
            href={ctaHref}
            size="md"
            onClick={() => setMobileOpen(false)}
          >
            Jegyvásárlás
          </Button>
        </nav>
      </div>
    </header>
  );
}
