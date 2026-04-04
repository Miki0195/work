import { useScrollReveal } from '../../hooks/useScrollReveal';
import Button from '../ui/Button';

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 lg:py-40 bg-charcoal overflow-hidden"
    >
      {/* Subtle warm glow accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-peach/5 blur-3xl" />
      </div>

      <div className="section-container relative z-10 text-center">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex justify-center mb-8">
            <img
              src="/icons/dance.png"
              alt=""
              className="w-14 h-14 md:w-16 md:h-16 opacity-40 select-none pointer-events-none"
              style={{ filter: 'brightness(1.8) grayscale(0.2)' }}
            />
          </div>

          <h2 className="font-serif text-display-sm md:text-display lg:text-display-lg font-medium text-ivory mb-6">
            Szeretnél részese lenni?
          </h2>

          <div className="mx-auto h-px w-16 bg-gold/40 mb-8" />

          <p className="max-w-lg mx-auto text-base md:text-lg text-ivory/70 leading-relaxed mb-10">
            Tapasztald meg élőben, milyen,
            <br className="hidden sm:block" />
            amikor egy esküvő nem csak egy esemény, hanem élmény.
          </p>

          <Button href="#esemenyek" size="lg" variant="ivory">
            Jegyvásárlás
          </Button>
        </div>
      </div>
    </section>
  );
}
