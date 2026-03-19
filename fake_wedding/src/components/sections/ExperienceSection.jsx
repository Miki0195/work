import SectionTitle from '../ui/SectionTitle';
import RevealWrapper from '../ui/RevealWrapper';

const HIGHLIGHTS = [
  'Ceremónia',
  'Bevonulás',
  'Esküvői vacsora',
  'Torta',
  'Zene',
  'Tánc',
];

function MarqueeStrip() {
  const items = [...HIGHLIGHTS, ...HIGHLIGHTS];

  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden py-10 md:py-14 my-14 md:my-18 border-y border-charcoal/5 bg-ivory/40">
      <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
        {items.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal/85 hover:text-gold transition-colors duration-500 cursor-default whitespace-nowrap px-4 md:px-6">
              {item}
            </span>
            <span className="text-gold/50 text-xs mx-2 md:mx-4 select-none">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="elmeny" className="section-padding bg-white overflow-hidden">
      <div className="section-container">
        <SectionTitle
          title="Mi ez az élmény?"
          subtitle="Az Esküvő Party egy különleges rendezvénysorozat, amely lehetőséget ad arra, hogy a vendégek átéljék egy teljes esküvő hangulatát — vendégként."
        />

        <div className="max-w-2xl mx-auto text-center">
          <RevealWrapper>
            <p className="text-base md:text-lg leading-relaxed text-charcoal-light mb-4">
              A program során a résztvevők egy teljes esküvő minden pillanatát
              láthatják és átélhetik — a ceremóniától a táncig, a bevonulástól
              az esküvői vacsoráig.
            </p>
          </RevealWrapper>
          <RevealWrapper delay={100}>
            <p className="text-base md:text-lg leading-relaxed text-charcoal-light">
              Mindezt valódi esküvői szolgáltatókkal, akik a legmagasabb
              színvonalon mutatják be munkájukat. Nem csak inspiráció — ez egy
              valódi élmény.
            </p>
          </RevealWrapper>
        </div>
      </div>

      {/* Full-width flowing marquee */}
      <MarqueeStrip />
    </section>
  );
}
