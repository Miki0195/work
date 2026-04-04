import SectionTitle from '../ui/SectionTitle';
import RevealWrapper from '../ui/RevealWrapper';

const SOCIAL_PLATFORMS = [
  { label: 'Instagram', icon: '📸', handle: '@gyorieskuvoparty' },
  { label: 'Facebook', icon: '💒', handle: 'Győri Esküvő Party' },
  { label: 'TikTok', icon: '🎬', handle: '@gyorieskuvoparty' },
];

export default function GallerySection() {
  return (
    <section id="social" className="section-padding bg-ivory">
      <div className="section-container">
        <div className="flex justify-center mb-6">
          <img
            src="/icons/wedding-photography.png"
            alt=""
            className="wedding-icon w-12 h-12 md:w-14 md:h-14 opacity-50"
          />
        </div>

        <SectionTitle
          title="Nézz bele az esemény világába"
          subtitle="A legfrissebb tartalmakat és pillanatokat közösségi felületeinken találod."
        />

        {/* Social platform cards */}
        <RevealWrapper>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-12">
            {SOCIAL_PLATFORMS.map((platform) => (
              <a
                key={platform.label}
                href="#"
                className="group block border border-gold/15 bg-gradient-to-b from-white to-peach/5 p-6 md:p-8 text-center transition-all duration-300 hover:border-gold/40 hover:shadow-md hover:shadow-gold/5"
              >
                <span className="block text-3xl mb-3">{platform.icon}</span>
                <span className="block font-serif text-lg md:text-xl text-charcoal group-hover:text-gold transition-colors duration-300 mb-1">
                  {platform.label}
                </span>
                <span className="block text-xs text-charcoal-lighter font-sans">
                  {platform.handle}
                </span>
              </a>
            ))}
          </div>
        </RevealWrapper>

        {/* Social feed placeholder grid */}
        <RevealWrapper delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="group relative aspect-square bg-gradient-to-br from-ivory-dark via-peach/8 to-rose/10 border border-gold/8 overflow-hidden cursor-pointer transition-all duration-500 hover:border-gold/30 hover:shadow-md"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="block text-2xl mb-2 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                      {['📸', '🎶', '💐', '🥂', '💒', '🎂', '💃', '✨'][i]}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-charcoal/20 font-sans">
                      Hamarosan
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>

        <RevealWrapper delay={200}>
          <p className="text-center text-sm text-charcoal-lighter mt-8 max-w-md mx-auto italic">
            A közösségi felületeinken hamarosan megjelennek az esemény pillanatai.
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}
