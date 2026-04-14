import SectionTitle from '../ui/SectionTitle';
import RevealWrapper from '../ui/RevealWrapper';
import { SOCIAL_ICONS } from '../ui/SocialIcons';
import { SITE_SOCIAL_CARDS, INSTAGRAM_EMBED_SLUG } from '../../config/siteSocial';

function instagramEmbedSrc(slug) {
  const clean = slug
    .trim()
    .replace(/^https?:\/\/(www\.)?instagram\.com\//i, '')
    .replace(/^\/+/, '')
    .replace(/\/embed\/?$/i, '')
    .replace(/\/$/, '');
  if (!clean) return null;
  return `https://www.instagram.com/${clean}/embed/?cr=1`;
}

export default function GallerySection() {
  const embedSrc = INSTAGRAM_EMBED_SLUG ? instagramEmbedSrc(INSTAGRAM_EMBED_SLUG) : null;
  const instagramProfile = SITE_SOCIAL_CARDS.find((c) => c.key === 'instagram')?.url;

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

        {/* Social cards — same icon treatment as vendor pages */}
        <RevealWrapper>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto mb-14 md:mb-16">
            {SITE_SOCIAL_CARDS.map((platform) => {
              const meta = SOCIAL_ICONS[platform.key];
              if (!meta) return null;
              return (
                <a
                  key={platform.key}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center border border-gold/15 bg-gradient-to-b from-white to-peach/5 p-6 md:p-8 text-center transition-all duration-300 hover:border-gold/40 hover:shadow-md hover:shadow-gold/5"
                >
                  <span className="flex items-center justify-center w-14 h-14 rounded-full border border-gold/25 text-charcoal-lighter group-hover:border-gold group-hover:text-gold group-hover:bg-gold/5 transition-all duration-300 mb-4 [&_svg]:w-7 [&_svg]:h-7">
                    {meta.icon}
                  </span>
                  <span className="block font-serif text-lg md:text-xl text-charcoal group-hover:text-gold transition-colors duration-300 mb-1">
                    {platform.label}
                  </span>
                  <span className="block text-xs text-charcoal-lighter font-sans tracking-wide">
                    {platform.handle}
                  </span>
                </a>
              );
            })}
          </div>
        </RevealWrapper>

        {/* Instagram embed — single highlight reel/post */}
        <RevealWrapper delay={100}>
          <div className="max-w-lg mx-auto">
            <h3 className="text-center font-serif text-xl md:text-2xl text-charcoal mb-2">
              Pillanat az Instagramról
            </h3>
            <p className="text-center text-xs text-charcoal-lighter mb-6 max-w-md mx-auto">
              {embedSrc
                ? 'A videó lejátszásához kattints a beágyazott tartalomra, ha szükséges.'
                : 'Add meg a beágyazandó poszt vagy reel azonosítóját a konfigurációban (lásd alább).'}
            </p>

            {embedSrc ? (
              <div className="relative rounded-sm border border-gold/20 bg-white overflow-hidden shadow-lg shadow-gold/5">
                <div className="relative w-full overflow-hidden" style={{ minHeight: '480px' }}>
                  <iframe
                    title="Instagram beágyazás"
                    src={embedSrc}
                    className="absolute left-0 top-0 w-full h-full min-h-[520px] border-0"
                    allow="encrypted-media; autoplay; clipboard-write"
                    loading="lazy"
                  />
                </div>
              </div>
            ) : (
              <div className="border border-dashed border-gold/30 bg-white/60 p-8 md:p-10 text-center rounded-sm">
                <p className="text-sm text-charcoal-light leading-relaxed mb-4">
                  A videó megjelenítéséhez másold be a <strong>konkrét poszt vagy reel</strong>{' '}
                  útvonalát a <code className="text-xs bg-ivory-dark px-1.5 py-0.5 rounded">src/config/siteSocial.js</code>{' '}
                  fájlban az <code className="text-xs bg-ivory-dark px-1.5 py-0.5 rounded">INSTAGRAM_EMBED_SLUG</code>{' '}
                  változóba, pl. <code className="text-xs bg-ivory-dark px-1.5 py-0.5 rounded">reel/AbCdEf123</code>.
                </p>
                {instagramProfile && (
                  <a
                    href={instagramProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-gold hover:underline font-sans font-medium"
                  >
                    Instagram profil megnyitása →
                  </a>
                )}
              </div>
            )}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
