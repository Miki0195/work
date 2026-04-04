import { useParams, Link } from 'react-router-dom';
import { getVendorBySlug } from '../data/vendors';
import vendors from '../data/vendors';
import RevealWrapper from '../components/ui/RevealWrapper';
import Button from '../components/ui/Button';

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
        {/* Cover image (renders when provided) */}
        {vendor.coverImage && (
          <img
            src={vendor.coverImage}
            alt={vendor.category}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        )}

        <div className="relative section-container py-24 md:py-36 lg:py-44">
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
            <h1 className="font-serif text-display-sm sm:text-display md:text-display-lg text-ivory mb-5">
              {vendor.category}
            </h1>
          </RevealWrapper>

          {vendor.tagline && (
            <RevealWrapper delay={300}>
              <p className="font-serif text-xl md:text-2xl text-ivory/60 italic max-w-xl">
                {vendor.tagline}
              </p>
            </RevealWrapper>
          )}
        </div>

        {/* Bottom edge fade */}
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

      {/* ── Contact ──────────────────────────────────────── */}
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
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>
      </section>
    </article>
  );
}
