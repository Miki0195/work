import { useScrollReveal } from '../../hooks/useScrollReveal';
import Button from '../ui/Button';

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section
      id="fooldal"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-ivory-dark/50 via-ivory to-ivory" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #2B2B2B 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Decorative gold accent lines */}
      <div className="absolute top-1/4 left-0 w-32 md:w-48 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-1/3 right-0 w-32 md:w-48 h-px bg-gradient-to-l from-transparent via-gold/30 to-transparent" />

      <div className="section-container relative z-10 text-center py-32 md:py-40">
        {/* Top accent */}
        <div
          className={`transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="block w-8 h-px bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-sans font-medium">
              Fake Wedding Experience
            </span>
            <span className="block w-8 h-px bg-gold" />
          </div>
        </div>

        {/* Main headline */}
        <h1
          className={`font-serif text-display-sm sm:text-display md:text-display-lg lg:text-display-xl font-medium text-charcoal mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Győri Esküvő
          <br />
          <span className="text-gold">Party</span>
        </h1>

        {/* Tagline */}
        <p
          className={`font-serif text-xl md:text-2xl lg:text-3xl text-charcoal-light italic mb-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Éld át egy esküvő minden pillanatát — vendégként.
        </p>

        {/* Supporting text */}
        <p
          className={`max-w-xl mx-auto text-sm md:text-base text-charcoal-lighter leading-relaxed mb-10 transition-all duration-1000 delay-[400ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Egy különleges esemény, ahol vendégként élheted át egy esküvő teljes
          hangulatát — inspirációval, valódi szolgáltatókkal és felejthetetlen
          ünnepi élménnyel.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Button href="#esemenyek" size="lg">
            Események
          </Button>
          <Button href="#esemenyek" variant="secondary" size="lg">
            Jegyvásárlás
          </Button>
        </div>

        {/* Bottom decorative element */}
        <div
          className={`mt-20 flex justify-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-charcoal-lighter">
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans">
              Fedezd fel
            </span>
            <div className="w-px h-8 bg-gold/40 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
