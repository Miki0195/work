import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';
import RevealWrapper from '../ui/RevealWrapper';
import vendors from '../../data/vendors';

function VendorRow({ vendor, index }) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <RevealWrapper delay={index * 60}>
      <Link
        to={`/szolgaltatok/${vendor.slug}`}
        className="group relative block border-b border-ivory/8 last:border-b-0"
      >
        <div className="flex items-center gap-5 md:gap-10 py-6 md:py-8">
          {/* Number */}
          <span className="font-sans text-[10px] tracking-[0.3em] text-ivory/25 group-hover:text-gold transition-colors duration-500 w-6 shrink-0">
            {num}
          </span>

          {/* Category + vendor name */}
          <div className="flex-1">
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory/80 group-hover:text-ivory transition-colors duration-500">
              {vendor.category}
            </h3>
            {vendor.name && (
              <p className="text-xs md:text-sm text-ivory/30 font-sans mt-1 group-hover:text-gold/60 transition-colors duration-500">
                {vendor.name}
              </p>
            )}
          </div>

          {/* Accent text */}
          <span className="hidden sm:block text-xs md:text-sm text-ivory/0 group-hover:text-ivory/45 font-sans italic max-w-[200px] md:max-w-xs text-right transition-all duration-500 translate-x-4 group-hover:translate-x-0">
            {vendor.accent}
          </span>

          {/* Arrow */}
          <span className="text-gold/0 group-hover:text-gold/60 transition-all duration-500 -translate-x-2 group-hover:translate-x-0 text-sm shrink-0">
            →
          </span>
        </div>

        <div className="absolute bottom-0 left-0 h-px bg-gold/50 w-0 group-hover:w-full transition-all duration-700 ease-out" />
      </Link>
    </RevealWrapper>
  );
}

export default function VendorsSection() {
  return (
    <section id="szolgaltatok" className="section-padding bg-charcoal">
      <div className="section-container">
        <div className="flex justify-center mb-6">
          <img
            src="/icons/apple.png"
            alt=""
            className="w-12 h-12 md:w-14 md:h-14 opacity-40 select-none pointer-events-none"
            style={{ filter: 'brightness(1.8) grayscale(0.2)' }}
          />
        </div>

        <SectionTitle
          title="Akik megalkotják az estét"
          subtitle="Az esemény mögött olyan szakemberek állnak, akik a saját területükön is a legmagasabb színvonalat képviselik. Együtt dolgoznak azon, hogy ez az este minden részletében egységes és emlékezetes legyen."
          light
        />

        <div className="max-w-4xl mx-auto border-t border-ivory/8">
          {vendors.map((vendor, i) => (
            <VendorRow key={vendor.slug} vendor={vendor} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
