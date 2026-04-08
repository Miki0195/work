import { useParams, Link } from 'react-router-dom';
import { getVendorBySlug } from '../data/vendors';
import vendors from '../data/vendors';
import RevealWrapper from '../components/ui/RevealWrapper';
import Button from '../components/ui/Button';

const SOCIAL_ICONS = {
  instagram: {
    label: 'Instagram',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  facebook: {
    label: 'Facebook',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  tiktok: {
    label: 'TikTok',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
  },
  website: {
    label: 'Weboldal',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
      </svg>
    ),
  },
};

function SocialLinks({ socials }) {
  if (!socials) return null;

  const entries = Object.entries(socials).filter(
    ([key, url]) => url && SOCIAL_ICONS[key],
  );

  if (entries.length === 0) return null;

  return (
    <div className="flex items-center justify-center gap-3 mt-6">
      {entries.map(([key, url]) => {
        const { label, icon } = SOCIAL_ICONS[key];
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="group flex items-center justify-center w-11 h-11 rounded-full border border-gold/20 text-charcoal-lighter hover:border-gold hover:text-gold hover:bg-gold/5 transition-all duration-300"
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
}

function SocialLinksLight({ socials }) {
  if (!socials) return null;

  const entries = Object.entries(socials).filter(
    ([key, url]) => url && SOCIAL_ICONS[key],
  );

  if (entries.length === 0) return null;

  return (
    <div className="flex items-center gap-3 mt-4">
      {entries.map(([key, url]) => {
        const { label, icon } = SOCIAL_ICONS[key];
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-ivory/15 text-ivory/40 hover:border-gold hover:text-gold transition-all duration-300"
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
}

function VendorNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ivory">
      <div className="text-center section-container">
        <h1 className="font-serif text-display-sm text-charcoal mb-4">
          Szolgáltató nem található
        </h1>
        <p className="text-charcoal-lighter mb-8">
          A keresett szolgáltató oldala nem elérhető.
        </p>
        <Button href="/#szolgaltatok" variant="secondary">
          Vissza a szolgáltatókhoz
        </Button>
      </div>
    </div>
  );
}

export default function VendorPage() {
  const { slug } = useParams();
  const vendor = getVendorBySlug(slug);

  if (!vendor) return <VendorNotFound />;

  const currentIndex = vendors.findIndex((v) => v.slug === slug);
  const prevVendor = vendors[currentIndex - 1] ?? null;
  const nextVendor = vendors[currentIndex + 1] ?? null;

  return (
    <article className="pt-24 md:pt-28">
      {/* ── Hero / Cover ─────────────────────────────────── */}
      <section className="relative bg-charcoal overflow-hidden">
        {vendor.coverImage && (
          <>
            <img
              src={vendor.coverImage}
              alt={vendor.category}
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/50" />
          </>
        )}

        <div className="relative z-10 section-container py-24 md:py-36 lg:py-44">
          <RevealWrapper>
            <Link
              to="/#szolgaltatok"
              className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-gold/70 font-sans font-medium hover:text-gold transition-colors duration-300 mb-10 group"
            >
              <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              Szolgáltatók
            </Link>
          </RevealWrapper>

          <RevealWrapper delay={100}>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-gold/50" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-medium">
                {String(currentIndex + 1).padStart(2, '0')} / {String(vendors.length).padStart(2, '0')}
              </span>
              <span className="block w-8 h-px bg-gold/50" />
            </div>
          </RevealWrapper>

          <RevealWrapper delay={200}>
            <h1 className="font-serif text-display-sm sm:text-display md:text-display-lg text-ivory mb-3">
              {vendor.category}
            </h1>
            {vendor.name && (
              <p className="font-sans text-sm md:text-base uppercase tracking-[0.15em] text-gold/80 mb-4">
                {vendor.name}
              </p>
            )}
          </RevealWrapper>

          {vendor.tagline && (
            <RevealWrapper delay={300}>
              <p className="font-serif text-xl md:text-2xl text-ivory/60 italic max-w-xl">
                {vendor.tagline}
              </p>
            </RevealWrapper>
          )}

          <RevealWrapper delay={400}>
            <SocialLinksLight socials={vendor.socials} />
          </RevealWrapper>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ivory to-transparent" />
      </section>

      {/* ── Description ──────────────────────────────────── */}
      <section className="section-padding bg-ivory">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Main text */}
            <div className="lg:col-span-3">
              {vendor.description.length > 0 ? (
                vendor.description.map((paragraph, i) => (
                  <RevealWrapper key={i} delay={i * 80}>
                    <p className="text-base md:text-lg leading-relaxed text-charcoal-light mb-6 last:mb-0">
                      {paragraph}
                    </p>
                  </RevealWrapper>
                ))
              ) : (
                <RevealWrapper>
                  <p className="text-base md:text-lg leading-relaxed text-charcoal-lighter italic">
                    {vendor.accent}
                  </p>
                </RevealWrapper>
              )}
            </div>

            {/* Highlights sidebar */}
            {vendor.highlights.length > 0 && (
              <div className="lg:col-span-2">
                <RevealWrapper delay={100}>
                  <div className="border-t border-charcoal/10 pt-6">
                    <h3 className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-medium mb-6">
                      Jellemzők
                    </h3>
                    <ul className="space-y-4">
                      {vendor.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 group">
                          <span className="block w-5 h-px bg-gold/40 mt-3 group-hover:w-8 group-hover:bg-gold transition-all duration-300 shrink-0" />
                          <span className="font-serif text-lg text-charcoal group-hover:text-gold transition-colors duration-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealWrapper>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────── */}
      {vendor.galleryImages.length > 0 && (
        <section className="section-padding bg-white">
          <div className="section-container">
            <RevealWrapper>
              <h2 className="font-serif text-display-sm text-charcoal mb-12 text-center">
                Galéria
              </h2>
            </RevealWrapper>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {vendor.galleryImages.map((img, i) => (
                <RevealWrapper key={i} delay={i * 60}>
                  <div className="group relative aspect-[4/3] overflow-hidden bg-ivory-dark">
                    <img
                      src={img.src}
                      alt={img.alt || vendor.category}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Gallery placeholder (when no images yet) ───── */}
      {vendor.galleryImages.length === 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="section-container">
            <RevealWrapper>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] bg-gradient-to-br from-ivory-dark via-peach/5 to-rose/8 border border-gold/8 flex items-center justify-center"
                  >
                    <span className="font-serif text-lg text-charcoal/10">
                      {vendor.category}
                    </span>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </section>
      )}

      {/* ── Contact + Socials ──────────────────────────────── */}
      {vendor.contact && (
        <section className="section-padding bg-ivory">
          <div className="section-container max-w-2xl mx-auto text-center">
            <RevealWrapper>
              <h3 className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-medium mb-6">
                Kapcsolat
              </h3>
              {vendor.contact.name && (
                <p className="font-serif text-2xl text-charcoal mb-1">
                  {vendor.contact.name}
                </p>
              )}
              {vendor.contact.role && (
                <p className="text-sm text-charcoal-lighter mb-4">
                  {vendor.contact.role}
                </p>
              )}
              {vendor.contact.email && (
                <a
                  href={`mailto:${vendor.contact.email}`}
                  className="block text-base text-charcoal hover:text-gold transition-colors duration-300 mb-1"
                >
                  {vendor.contact.email}
                </a>
              )}
              {vendor.contact.phone && (
                <a
                  href={`tel:${vendor.contact.phone}`}
                  className="block text-base text-charcoal hover:text-gold transition-colors duration-300"
                >
                  {vendor.contact.phone}
                </a>
              )}

              <SocialLinks socials={vendor.socials} />
            </RevealWrapper>
          </div>
        </section>
      )}

      {/* ── Prev / Next navigation ───────────────────────── */}
      <section className="bg-charcoal">
        <div className="grid sm:grid-cols-2">
          {prevVendor ? (
            <Link
              to={`/szolgaltatok/${prevVendor.slug}`}
              className="group flex flex-col justify-center px-8 md:px-14 py-12 md:py-16 border-b sm:border-b-0 sm:border-r border-ivory/8 transition-colors duration-500"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/30 font-sans mb-3">
                ← Előző
              </span>
              <span className="font-serif text-xl md:text-2xl text-ivory/60 group-hover:text-gold transition-colors duration-500">
                {prevVendor.category}
              </span>
              {prevVendor.name && (
                <span className="text-xs text-ivory/25 font-sans mt-1">
                  {prevVendor.name}
                </span>
              )}
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextVendor ? (
            <Link
              to={`/szolgaltatok/${nextVendor.slug}`}
              className="group flex flex-col justify-center items-end text-right px-8 md:px-14 py-12 md:py-16 transition-colors duration-500"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/30 font-sans mb-3">
                Következő →
              </span>
              <span className="font-serif text-xl md:text-2xl text-ivory/60 group-hover:text-gold transition-colors duration-500">
                {nextVendor.category}
              </span>
              {nextVendor.name && (
                <span className="text-xs text-ivory/25 font-sans mt-1">
                  {nextVendor.name}
                </span>
              )}
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>
      </section>
    </article>
  );
}
