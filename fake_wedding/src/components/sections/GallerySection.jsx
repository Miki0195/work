import SectionTitle from '../ui/SectionTitle';
import RevealWrapper from '../ui/RevealWrapper';

const GALLERY_ITEMS = [
  { label: 'Ceremónia', span: 'col-span-2 row-span-2', aspect: 'aspect-square' },
  { label: 'Elegancia', span: 'col-span-1 row-span-1', aspect: 'aspect-square' },
  { label: 'Buli', span: 'col-span-1 row-span-1', aspect: 'aspect-square' },
  { label: 'Hangulat', span: 'col-span-1 row-span-1', aspect: 'aspect-[4/3]' },
  { label: 'Közösség', span: 'col-span-1 row-span-1', aspect: 'aspect-[4/3]' },
  { label: 'Romantika', span: 'col-span-2 row-span-1', aspect: 'aspect-[21/9]' },
  { label: 'Ünnep', span: 'col-span-1 row-span-1', aspect: 'aspect-square' },
  { label: 'Mozgás', span: 'col-span-1 row-span-1', aspect: 'aspect-square' },
];

const CATEGORY_TABS = ['Fotók', 'Videók', 'Hangulat'];

export default function GallerySection() {
  return (
    <section id="galeria" className="section-padding bg-white">
      <div className="section-container">
        <SectionTitle
          title="Galéria"
          subtitle="Pillanatok, amelyek megmutatják az élmény valódi hangulatát."
        />

        {/* Category tabs */}
        <RevealWrapper>
          <div className="flex items-center justify-center gap-8 mb-12">
            {CATEGORY_TABS.map((tab, i) => (
              <button
                key={tab}
                className={`text-xs uppercase tracking-[0.2em] font-sans font-medium transition-colors duration-300 pb-2 border-b ${
                  i === 0
                    ? 'text-gold border-gold'
                    : 'text-charcoal-lighter border-transparent hover:text-charcoal hover:border-charcoal/20'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </RevealWrapper>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <RevealWrapper
              key={item.label}
              delay={i * 60}
              className={item.span}
            >
              <div
                className={`group relative ${item.aspect} bg-gradient-to-br from-ivory-dark to-rose/10 border border-charcoal/5 overflow-hidden cursor-pointer transition-all duration-500 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5`}
              >
                {/* Placeholder visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span className="font-serif text-xl md:text-2xl text-charcoal/15 group-hover:text-charcoal/25 transition-colors duration-500">
                      {item.label}
                    </span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-500" />

                {/* Bottom label on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-charcoal/80 font-sans font-medium bg-ivory/90 backdrop-blur-sm px-3 py-1.5 inline-block">
                    {item.label}
                  </span>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
