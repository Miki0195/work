import SectionTitle from '../ui/SectionTitle';
import RevealWrapper from '../ui/RevealWrapper';

const HIGHLIGHTS = [
  { label: 'Ceremónia', icon: '/icons/arch.png' },
  { label: 'Bevonulás', icon: '/icons/wedding-couple.png' },
  { label: 'Esküvői vacsora', icon: '/icons/romantic-dinner-2.png' },
  { label: 'Torta', icon: '/icons/wedding-cake.png' },
  { label: 'Zene', icon: '/icons/dj-music.png' },
  { label: 'Tánc', icon: '/icons/dance.png' },
];

function MarqueeStrip() {
  const items = [...HIGHLIGHTS, ...HIGHLIGHTS];

  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-10 md:py-14 my-14 md:my-18 border-y border-gold/10 bg-peach/5">
      <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
        {items.map((item, i) => (
          <div key={i} className="flex items-center shrink-0 group/item">
            <div className="flex items-center gap-3 md:gap-4 px-4 md:px-6 cursor-default">
              <img
                src={item.icon}
                alt=""
                className="wedding-icon w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 opacity-50 group-hover/item:opacity-80 transition-opacity duration-500"
              />
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal/85 group-hover/item:text-gold transition-colors duration-500 whitespace-nowrap">
                {item.label}
              </span>
            </div>
            <span className="text-gold/40 text-xs mx-2 md:mx-4 select-none">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="koncepcio" className="section-padding bg-white overflow-hidden">
      <div className="section-container">
        <div className="flex justify-center mb-6">
          <img
            src="/icons/dance-2.png"
            alt=""
            className="wedding-icon w-14 h-14 md:w-16 md:h-16 opacity-50"
          />
        </div>

        <SectionTitle
          title="Mi ez az esemény?"
        />

        <div className="max-w-2xl mx-auto text-center">
          <RevealWrapper>
            <p className="font-serif text-lg md:text-xl leading-relaxed text-charcoal-light mb-5">
              Ez nem egy hagyományos esküvő,
              <br className="hidden sm:block" />
              és nem is egy klasszikus kiállítás.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={100}>
            <p className="text-base md:text-lg leading-relaxed text-charcoal-light mb-5">
              Ez egy gondosan megalkotott élmény,
              ahol egy esküvő minden fontos pillanata valós környezetben jelenik meg.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={200}>
            <p className="text-base md:text-lg leading-relaxed text-charcoal-lighter italic">
              A vendégek nem csak szemlélők,
              hanem részesei annak a hangulatnak,
              amit egy valódi esküvő ad.
            </p>
          </RevealWrapper>
        </div>
      </div>

      <MarqueeStrip />
    </section>
  );
}
