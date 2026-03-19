import SectionTitle from '../ui/SectionTitle';
import RevealWrapper from '../ui/RevealWrapper';

export default function ContactSection() {
  return (
    <section id="kapcsolat" className="section-padding bg-ivory">
      <div className="section-container">
        <SectionTitle title="Kapcsolat" />

        <RevealWrapper>
          <div className="max-w-lg mx-auto text-center">
            <p className="text-base md:text-lg text-charcoal-lighter leading-relaxed mb-8">
              Kérdésed van az eseménnyel kapcsolatban? Szeretnél többet
              megtudni, vagy egyedi igényed lenne? Vedd fel velünk a
              kapcsolatot.
            </p>

            <div className="inline-flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-medium">
                Email
              </span>
              <span className="block w-6 h-px bg-gold" />
            </div>

            <a
              href="mailto:info@gyorieskuvoparty.hu"
              className="block font-serif text-xl md:text-2xl text-charcoal hover:text-gold transition-colors duration-300"
            >
              info@gyorieskuvoparty.hu
            </a>

            <div className="gold-divider mt-10 mb-6" />

            <p className="text-xs text-charcoal-lighter/60 uppercase tracking-widest">
              Hamarosan válaszolunk
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
