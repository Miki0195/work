import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Koncepció', href: '#koncepcio' },
  { label: 'Élmény', href: '#elmeny' },
  { label: 'Események', href: '#esemenyek' },
  { label: 'Szolgáltatók', href: '#szolgaltatok' },
  { label: 'Social', href: '#social' },
  { label: 'Kapcsolat', href: '#kapcsolat' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="section-container py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Brand */}
          <div>
            <a href="#fooldal" className="inline-block group">
              <span className="block font-serif text-xl font-semibold text-ivory group-hover:text-gold transition-colors duration-300">
                Győri Esküvő Party
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-ivory/40 font-sans mt-1">
                Fake Wedding
              </span>
            </a>
            <p className="text-sm text-ivory/50 leading-relaxed mt-4 max-w-xs">
              Egy különleges esküvői élmény, ahol vendégként élheted át az
              ünnep minden pillanatát.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-medium mb-5">
              Navigáció
            </h4>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-ivory/50 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-medium mb-5">
              Kapcsolat
            </h4>
            <a
              href="mailto:info@gyorieskuvoparty.hu"
              className="text-sm text-ivory/50 hover:text-gold transition-colors duration-300"
            >
              info@gyorieskuvoparty.hu
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-ivory/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-ivory/30">
              © {new Date().getFullYear()} Győri Esküvő Party. Minden jog
              fenntartva.
            </p>

            {/* Legal links */}
            <div className="flex items-center gap-4">
              <Link
                to="/impresszum"
                className="text-xs text-ivory/30 hover:text-gold transition-colors duration-300"
              >
                Impresszum
              </Link>
              <span className="text-ivory/15">|</span>
              <Link
                to="/adatvedelmi-tajekoztato"
                className="text-xs text-ivory/30 hover:text-gold transition-colors duration-300"
              >
                Adatvédelem
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="/icons/cheers.png"
                alt=""
                className="w-5 h-5 opacity-25 select-none pointer-events-none"
                style={{ filter: 'brightness(2) grayscale(0.3)' }}
              />
              <p className="text-xs text-ivory/20 italic font-serif">
                Ahol az ünnep mindenkié.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
