import SectionTitle from '../ui/SectionTitle';
import RevealWrapper from '../ui/RevealWrapper';

const AUDIENCES = [
  {
    title: 'Házasodni készülő párok',
    description:
      'Ismerd meg a legjobb szolgáltatókat és inspirálódj a saját nagy napodra.',
  },
  {
    title: 'Inspirációt keresők',
    description:
      'Fedezd fel az esküvői világ legújabb trendjeit és ötleteit élőben.',
  },
  {
    title: 'Szolgáltatókat keresők',
    description:
      'Találkozz valódi esküvői szakemberekkel, és lásd munkájukat a gyakorlatban.',
  },
  {
    title: 'Esküvő iránt érdeklődők',
    description:
      'Élvezd az esküvői hangulatot és az ünnepi élményt kötelezettség nélkül.',
  },
];

export default function AudienceSection() {
  return (
    <section id="kiknek-szol" className="section-padding bg-white">
      <div className="section-container">
        <SectionTitle
          title="Kiknek szól?"
          subtitle="Az eseményt mindazoknak ajánljuk, akik nemcsak nézni szeretnék az esküvői világot, hanem valóban át is élnék annak hangulatát."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCES.map((item, i) => (
            <RevealWrapper key={item.title} delay={i * 100}>
              <div className="group h-full border border-charcoal/8 bg-ivory/30 p-7 md:p-8 transition-all duration-300 hover:border-gold/40 hover:bg-ivory hover:shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <span className="block w-8 h-px bg-gold/60 group-hover:w-12 transition-all duration-300" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-sans font-medium">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-lighter leading-relaxed">
                  {item.description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
