import { useScrollReveal } from '../../hooks/useScrollReveal';
import Button from '../ui/Button';

export default function HeroSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section
      id="fooldal"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ivory"
    >
      {/* Soft peach dot accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-peach/20 blur-3xl" />
        <div className="absolute top-1/4 right-0 w-48 h-48 rounded-full bg-peach/15 blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-peach/10 blur-3xl" />
        <div className="absolute -bottom-10 right-1/3 w-40 h-40 rounded-full bg-rose/10 blur-3xl" />
      </div>

      <div className="section-container relative z-10 text-center pt-28 md:pt-36 pb-10">
        {/* Hero banner image */}
        <div
          className={`transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-[0.98]'
          }`}
        >
          <img
            src="/hero_banner.png"
            alt="Győri Esküvő Party — Hamis esküvő, Igazi élmény"
            className="w-full max-w-4xl mx-auto rounded-sm"
            draggable={false}
          />
        </div>

        {/* Supporting text */}
        <div
          className={`max-w-xl mx-auto mt-8 mb-10 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="font-serif text-lg md:text-xl lg:text-2xl text-charcoal-light leading-relaxed mb-3">
            Egy különleges este Győrben,
            <br className="hidden sm:block" />
            ahol egy esküvő minden részlete életre kel.
          </p>
          <p className="text-sm md:text-base text-charcoal-lighter leading-relaxed">
            Egy olyan élmény, amely nem csak megmutatja,
            <br className="hidden sm:block" />
            hanem érezteti is, milyen lehet a saját nagy napod.
          </p>
        </div>

        {/* CTAs — Apple-style dual buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Button href="#esemenyek" size="lg">
            Jegyvásárlás
          </Button>
          <Button href="#koncepcio" variant="secondary" size="lg">
            Tudj meg többet
          </Button>
        </div>

        {/* Scroll hint */}
        <div
          className={`mt-16 md:mt-20 flex justify-center transition-all duration-1000 delay-700 ${
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
