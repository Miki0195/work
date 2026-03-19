import SectionTitle from '../ui/SectionTitle';
import RevealWrapper from '../ui/RevealWrapper';

const STEPS = [
  {
    number: '01',
    title: 'Megérkezel vendégként',
    description:
      'Ünnepélyes fogadtatás, ahol azonnal átérzed az esküvői hangulatot.',
  },
  {
    number: '02',
    title: 'Végignézed a ceremóniát',
    description:
      'Megható szertartás, amely egy valódi esküvő minden szépségét hozza el.',
  },
  {
    number: '03',
    title: 'Vacsorázol',
    description:
      'Elegáns esküvői vacsora, tortával és minden hozzávalóval.',
  },
  {
    number: '04',
    title: 'Megismered a szolgáltatókat',
    description:
      'Valódi esküvői szakemberek mutatják be munkájukat élőben.',
  },
  {
    number: '05',
    title: 'Bulizol',
    description:
      'A nap lezárásaként felejthetetlen esküvői buli vár rád.',
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
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gold/20 hidden sm:block" />

          <div className="space-y-8 md:space-y-10">
            {STEPS.map((step, i) => (
              <RevealWrapper key={step.number} delay={i * 100}>
                <div className="flex gap-6 md:gap-8 group">
                  {/* Number circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-gold/40 bg-ivory flex items-center justify-center group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
                      <span className="font-serif text-lg md:text-xl text-gold font-medium">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1 md:pt-3">
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
