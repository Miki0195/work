import RevealWrapper from '../components/ui/RevealWrapper';
import { Link } from 'react-router-dom';

export default function ImpresszumPage() {
  return (
    <article className="pt-28 md:pt-36 pb-20 md:pb-28 bg-ivory">
      <div className="section-container max-w-3xl">
        <RevealWrapper>
          <h1 className="font-serif text-display-sm md:text-display font-medium text-charcoal mb-12">
            Impresszum
          </h1>
        </RevealWrapper>

        <div className="space-y-10">
          {/* Provider info */}
          <RevealWrapper>
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-4">
                Szolgáltató adatai
              </h2>
              <p className="text-xs text-charcoal-lighter mb-4">
                A 2001. évi CVIII. törvény 4. § (1) bekezdése alapján
              </p>
              <div className="border border-charcoal/10 bg-white p-6 md:p-8 space-y-3">
                <div className="grid grid-cols-[140px_1fr] gap-y-3 text-sm md:text-base text-charcoal-light">
                  <span className="font-sans font-medium text-charcoal text-xs uppercase tracking-wider pt-0.5">Név</span>
                  <span>[KITÖLTENDŐ: teljes név vagy cégnév]</span>

                  <span className="font-sans font-medium text-charcoal text-xs uppercase tracking-wider pt-0.5">Székhely</span>
                  <span>[KITÖLTENDŐ: irányítószám, város, utca, házszám]</span>

                  <span className="font-sans font-medium text-charcoal text-xs uppercase tracking-wider pt-0.5">Adószám</span>
                  <span>[KITÖLTENDŐ: adószám]</span>

                  <span className="font-sans font-medium text-charcoal text-xs uppercase tracking-wider pt-0.5">Cégjegyzékszám</span>
                  <span>[KITÖLTENDŐ: ha egyéni vállalkozó, nyilvántartási szám]</span>

                  <span className="font-sans font-medium text-charcoal text-xs uppercase tracking-wider pt-0.5">E-mail</span>
                  <span>
                    <a href="mailto:info@gyorieskuvoparty.hu" className="text-charcoal hover:text-gold transition-colors">
                      info@gyorieskuvoparty.hu
                    </a>
                  </span>

                  <span className="font-sans font-medium text-charcoal text-xs uppercase tracking-wider pt-0.5">Telefon</span>
                  <span>[KITÖLTENDŐ: telefonszám]</span>
                </div>
              </div>
            </section>
          </RevealWrapper>

          {/* Hosting */}
          <RevealWrapper>
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-4">
                Tárhelyszolgáltató
              </h2>
              <div className="border border-charcoal/10 bg-white p-6 md:p-8 space-y-3">
                <div className="grid grid-cols-[140px_1fr] gap-y-3 text-sm md:text-base text-charcoal-light">
                  <span className="font-sans font-medium text-charcoal text-xs uppercase tracking-wider pt-0.5">Név</span>
                  <span>[KITÖLTENDŐ: tárhelyszolgáltató neve, pl. Netlify, Vercel, stb.]</span>

                  <span className="font-sans font-medium text-charcoal text-xs uppercase tracking-wider pt-0.5">Székhely</span>
                  <span>[KITÖLTENDŐ: tárhelyszolgáltató címe]</span>

                  <span className="font-sans font-medium text-charcoal text-xs uppercase tracking-wider pt-0.5">Weboldal</span>
                  <span>[KITÖLTENDŐ: tárhelyszolgáltató weboldala]</span>
                </div>
              </div>
            </section>
          </RevealWrapper>

          {/* Content responsibility */}
          <RevealWrapper>
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-4">
                Tartalomért felelős személy
              </h2>
              <div className="text-sm md:text-base text-charcoal-light leading-relaxed space-y-2">
                <p>
                  <strong>Név:</strong> [KITÖLTENDŐ: a tartalomért felelős személy neve]
                </p>
                <p>
                  <strong>E-mail:</strong>{' '}
                  <a href="mailto:info@gyorieskuvoparty.hu" className="text-charcoal hover:text-gold transition-colors">
                    info@gyorieskuvoparty.hu
                  </a>
                </p>
              </div>
            </section>
          </RevealWrapper>

          {/* Intellectual property */}
          <RevealWrapper>
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-4">
                Szerzői jogok
              </h2>
              <p className="text-sm md:text-base text-charcoal-light leading-relaxed">
                A Weboldal teljes tartalma (szövegek, képek, grafikai elemek,
                logók, arculati elemek) szerzői jogi védelem alatt áll. Azok
                felhasználása, másolása, terjesztése kizárólag az Adatkezelő
                előzetes írásbeli hozzájárulásával engedélyezett.
              </p>
            </section>
          </RevealWrapper>

          {/* Icon credits */}
          <RevealWrapper>
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-4">
                Ikonok forrása
              </h2>
              <p className="text-sm md:text-base text-charcoal-light leading-relaxed mb-3">
                A weboldalon használt ikonok a{' '}
                <a
                  href="https://www.flaticon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  Flaticon
                </a>{' '}
                szolgáltatásból származnak. Készítők:
              </p>
              <ul className="text-sm text-charcoal-lighter leading-relaxed space-y-1 list-disc list-inside ml-2">
                <li>istar_design_bureau — Flaticon</li>
                <li>Freepik — Flaticon</li>
                <li>gravisio — Flaticon</li>
                <li>Adury5711 — Flaticon</li>
                <li>Design Circle — Flaticon</li>
                <li>photo3idea_studio — Flaticon</li>
              </ul>
            </section>
          </RevealWrapper>

          {/* Links to other legal pages */}
          <RevealWrapper>
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-4">
                Kapcsolódó dokumentumok
              </h2>
              <div className="text-sm md:text-base text-charcoal-light leading-relaxed">
                <Link
                  to="/adatvedelmi-tajekoztato"
                  className="text-gold hover:underline"
                >
                  Adatvédelmi tájékoztató →
                </Link>
              </div>
            </section>
          </RevealWrapper>

          <RevealWrapper>
            <div className="gold-divider mt-12 mb-6" />
            <p className="text-xs text-charcoal-lighter text-center">
              Utolsó frissítés: [KITÖLTENDŐ: dátum]
            </p>
          </RevealWrapper>
        </div>
      </div>
    </article>
  );
}
