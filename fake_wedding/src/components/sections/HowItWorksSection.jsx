import SectionTitle from '../ui/SectionTitle';
import RevealWrapper from '../ui/RevealWrapper';

const STEPS = [
  {
    number: '01',
    title: 'Megérkezel vendégként',
    description:
      'Ünnepélyes fogadtatás, ahol azonnal átérzed az esküvői hangulatot.',
    icon: '/icons/wedding-location.png',
  },
  {
    number: '02',
    title: 'Végignézed a ceremóniát',
    description:
      'Megható szertartás, amely egy valódi esküvő minden szépségét hozza el.',
    icon: '/icons/arch.png',
  },
  {
    number: '03',
    title: 'Vacsorázol',
    description:
      'Elegáns esküvői vacsora, tortával és minden hozzávalóval.',
    icon: '/icons/romantic-dinner.png',
  },
  {
    number: '04',
    title: 'Megismered a szolgáltatókat',
    description:
      'Valódi esküvői szakemberek mutatják be munkájukat élőben.',
    icon: '/icons/just-married.png',
  },
  {
    number: '05',
    title: 'Bulizol',
    description:
      'A nap lezárásaként felejthetetlen esküvői buli vár rád.',
    icon: '/icons/disco-ball.png',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="hogyan-mukodik" className="section-padding bg-ivory">
      <div className="section-container">
        <SectionTitle
          title="Hogyan működik"
          subtitle="Öt egyszerű lépés — egy felejthetetlen élmény."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-10 top-0 bottom-0 w-px bg-gold/20 hidden sm:block" />

          <div className="space-y-8 md:space-y-10">
            {STEPS.map((step, i) => (
              <RevealWrapper key={step.number} delay={i * 100}>
                <div className="flex gap-6 md:gap-8 group">
                  {/* Icon circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-gold/40 bg-gradient-to-br from-ivory to-peach/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300 overflow-hidden">
                      <img
                        src={step.icon}
                        alt=""
                        className="wedding-icon w-8 h-8 md:w-10 md:h-10 opacity-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                      />
                    </div>
                    <span className="absolute -bottom-1 -right-1 bg-ivory border border-gold/30 rounded-full w-6 h-6 flex items-center justify-center text-[10px] font-sans font-medium text-gold">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pt-2 md:pt-4">
                    <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-charcoal-lighter leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
