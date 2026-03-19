import SectionTitle from '../ui/SectionTitle';
import RevealWrapper from '../ui/RevealWrapper';
import Button from '../ui/Button';

export default function EventsSection() {
  return (
    <section id="esemenyek" className="section-padding bg-ivory">
      <div className="section-container">
        <SectionTitle
          title="Események"
          subtitle="Foglalj helyet a következő élményre, és légy része egy különleges esküvői hangulatú eseménynek."
        />

        {/* Featured Event Card */}
        <RevealWrapper>
          <div className="max-w-3xl mx-auto">
            <div className="relative border border-gold/30 bg-white p-8 md:p-12 lg:p-14 text-center group hover:border-gold/60 transition-all duration-500 hover:shadow-lg hover:shadow-gold/5">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/40" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/40" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/40" />

              {/* Event badge */}
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="block w-6 h-px bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-medium">
                  Következő esemény
                </span>
                <span className="block w-6 h-px bg-gold" />
              </div>

              <h3 className="font-serif text-display-sm md:text-display text-charcoal mb-4">
                Győri Esküvő Party
              </h3>

              <div className="gold-divider mb-6" />

              <div className="space-y-2 mb-8">
                <p className="font-serif text-xl md:text-2xl text-charcoal">
                  2026. május 9.
                </p>
                <p className="text-sm md:text-base text-charcoal-lighter">
                  Kristály Étterem
                </p>
                <p className="text-sm text-charcoal-lighter/70">
                  200 vendég
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="#" size="lg">
                  Jegyvásárlás
                </Button>
                <Button href="#kapcsolat" variant="ghost" size="md">
                  Részletek kérése
                </Button>
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* Supporting microcopy */}
        <RevealWrapper delay={200}>
          <p className="text-center text-sm text-charcoal-lighter mt-10 max-w-md mx-auto">
            Korlátozott számú hely érhető el. Foglalj időben, hogy ne maradj le
            erről a különleges élményről.
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}
