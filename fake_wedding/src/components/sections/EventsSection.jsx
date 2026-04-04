import SectionTitle from '../ui/SectionTitle';
import RevealWrapper from '../ui/RevealWrapper';
import Button from '../ui/Button';

export default function EventsSection() {
  return (
    <section id="esemenyek" className="section-padding bg-white">
      <div className="section-container">
        <SectionTitle
          title="Következő esemény"
        />

        {/* Featured Event Card */}
        <RevealWrapper>
          <div className="max-w-3xl mx-auto">
            <div className="relative border border-gold/30 bg-gradient-to-b from-ivory to-peach/5 p-8 md:p-12 lg:p-14 text-center group hover:border-gold/60 transition-all duration-500 hover:shadow-lg hover:shadow-gold/5">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/40" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/40" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/40" />

              {/* Event icon */}
              <div className="mb-5 flex justify-center">
                <img
                  src="/icons/wedding-invitation.png"
                  alt=""
                  className="wedding-icon w-12 h-12 md:w-14 md:h-14 opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
              </div>

              <h3 className="font-serif text-display-sm md:text-display text-charcoal mb-4">
                Győri Esküvő Party
              </h3>

              <div className="gold-divider mb-6" />

              <div className="space-y-2 mb-6">
                <p className="font-serif text-xl md:text-2xl text-charcoal">
                  2026. május 9.
                </p>
              </div>

              <p className="text-base md:text-lg text-charcoal-lighter leading-relaxed max-w-md mx-auto mb-8">
                Egy este, ahol a részletek összeállnak,
                <br className="hidden sm:block" />
                és az élmény valódivá válik.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="#" size="lg">
                  Jegyvásárlás
                </Button>
                <Button href="#kapcsolat" variant="ghost" size="md">
                  Részletek
                </Button>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
