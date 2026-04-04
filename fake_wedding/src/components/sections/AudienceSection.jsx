import SectionTitle from '../ui/SectionTitle';
import RevealWrapper from '../ui/RevealWrapper';

const EXPERIENCE_CARDS = [
  {
    title: 'Valódi hangulat',
    description:
      'Egy este, amelynek minden részlete egy esküvő atmoszféráját idézi.',
    icon: '/icons/cheers.png',
  },
  {
    title: 'Komplett élmény',
    description:
      'Dekor, zene, gasztronómia és látvány – egyetlen, összehangolt élményben.',
    icon: '/icons/romantic-dinner.png',
  },
  {
    title: 'Inspiráció',
    description:
      'Stílusok, megoldások és pillanatok, amelyek segítenek elképzelni a saját esküvődet.',
    icon: '/icons/marriage.png',
  },
];

const AUDIENCE_ITEMS = [
  {
    text: 'Jegyespároknak, akik szeretnék élőben is átélni az esküvő hangulatát.',
    icon: '/icons/marriage.png',
    accent: 'Pároknak',
  },
  {
    text: 'Azoknak, akik inspirációt keresnek.',
    icon: '/icons/wedding-photography.png',
    accent: 'Álmodozóknak',
  },
  {
    text: 'És mindenkinek, aki egy elegáns, különleges estére vágyik.',
    icon: '/icons/dance-2.png',
    accent: 'Mindenkinek',
  },
];

export default function AudienceSection() {
  return (
    <section id="elmeny" className="bg-ivory">
      {/* ── Top: Experience cards ── */}
      <div className="section-padding">
        <div className="section-container">
          <SectionTitle title="Mire számíthatsz az este során?" />

          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {EXPERIENCE_CARDS.map((card, i) => (
              <RevealWrapper key={card.title} delay={i * 120}>
                <div className="group h-full border border-gold/10 bg-gradient-to-b from-white to-peach/5 p-8 md:p-10 transition-all duration-300 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-18 h-18 rounded-full bg-gradient-to-br from-peach/15 to-gold/10 flex items-center justify-center group-hover:from-peach/25 group-hover:to-gold/15 transition-all duration-300">
                      <img
                        src={card.icon}
                        alt=""
                        className="wedding-icon w-10 h-10 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-charcoal-lighter leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom: Kiknek szól — visual showcase ── */}
      <div className="relative overflow-hidden">
        {/* Warm gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-ivory-dark via-peach/10 to-rose/10" />

        {/* Floating decorative blurs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 left-1/4 w-80 h-80 rounded-full bg-peach/15 blur-3xl" />
          <div className="absolute -bottom-16 right-1/6 w-64 h-64 rounded-full bg-gold/8 blur-3xl" />
          <div className="absolute top-1/2 -left-20 w-48 h-48 rounded-full bg-rose/10 blur-3xl" />
        </div>

        <div className="relative section-container py-20 md:py-28 lg:py-32">
          {/* Section header */}
          <RevealWrapper>
            <div className="text-center mb-14 md:mb-18">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="block w-10 h-px bg-gold/50" />
                <img
                  src="/icons/just-married.png"
                  alt=""
                  className="wedding-icon w-8 h-8 opacity-60"
                />
                <span className="block w-10 h-px bg-gold/50" />
              </div>
              <h3 className="font-serif text-display-sm md:text-display font-medium text-charcoal">
                Kiknek szól ez az esemény?
              </h3>
            </div>
          </RevealWrapper>

          {/* Audience items — alternating layout */}
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            {AUDIENCE_ITEMS.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <RevealWrapper key={item.accent} delay={i * 150}>
                  <div
                    className={`group relative flex items-center gap-5 md:gap-8 ${
                      isEven ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    {/* Icon bubble */}
                    <div className="flex-shrink-0">
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/80 backdrop-blur-sm border border-gold/20 flex items-center justify-center shadow-lg shadow-gold/5 group-hover:border-gold/50 group-hover:shadow-xl group-hover:shadow-gold/10 transition-all duration-500">
                        <img
                          src={item.icon}
                          alt=""
                          className="wedding-icon w-10 h-10 md:w-12 md:h-12 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                        />
                        {/* Accent ring */}
                        <div className="absolute inset-0 rounded-full border border-gold/10 scale-[1.15] group-hover:scale-[1.25] group-hover:border-gold/20 transition-all duration-700" />
                      </div>
                    </div>

                    {/* Content card */}
                    <div
                      className={`flex-1 bg-white/70 backdrop-blur-sm border border-gold/10 p-6 md:p-8 group-hover:bg-white/90 group-hover:border-gold/30 group-hover:shadow-lg group-hover:shadow-gold/5 transition-all duration-500 ${
                        isEven ? 'text-left' : 'text-right'
                      }`}
                    >
                      <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-gold/70 font-sans font-medium mb-2 group-hover:text-gold transition-colors duration-300">
                        {item.accent}
                      </span>
                      <p className="font-serif text-base md:text-lg lg:text-xl text-charcoal leading-relaxed group-hover:text-charcoal transition-colors duration-300">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </RevealWrapper>
              );
            })}
          </div>

          {/* Bottom flourish */}
          <RevealWrapper delay={500}>
            <div className="flex justify-center mt-14 md:mt-18">
              <div className="flex items-center gap-4">
                <span className="block w-12 h-px bg-gold/30" />
                <img
                  src="/icons/church.png"
                  alt=""
                  className="wedding-icon w-6 h-6 opacity-35"
                />
                <span className="block w-12 h-px bg-gold/30" />
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
