import RevealWrapper from '../components/ui/RevealWrapper';

export default function AdatvedelmiPage() {
  return (
    <article className="pt-28 md:pt-36 pb-20 md:pb-28 bg-ivory">
      <div className="section-container max-w-3xl">
        <RevealWrapper>
          <h1 className="font-serif text-display-sm md:text-display font-medium text-charcoal mb-4">
            Adatvédelmi tájékoztató
          </h1>
          <p className="text-sm text-charcoal-lighter mb-12">
            Hatályos: [KITÖLTENDŐ: dátum, pl. 2026. május 1.]
          </p>
        </RevealWrapper>

        <div className="prose-wedding space-y-10">
          {/* 1 */}
          <RevealWrapper>
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-4">
                1. Adatkezelő
              </h2>
              <div className="text-sm md:text-base text-charcoal-light leading-relaxed space-y-2">
                <p><strong>Név:</strong> [KITÖLTENDŐ: teljes név vagy cégnév]</p>
                <p><strong>Székhely:</strong> [KITÖLTENDŐ: cím]</p>
                <p><strong>Adószám:</strong> [KITÖLTENDŐ: adószám]</p>
                <p><strong>Cégjegyzékszám:</strong> [KITÖLTENDŐ: ha van]</p>
                <p><strong>E-mail:</strong> info@gyorieskuvoparty.hu</p>
                <p><strong>Telefon:</strong> [KITÖLTENDŐ: telefonszám]</p>
                <p><strong>Weboldal:</strong> gyorieskuvoparty.hu</p>
              </div>
            </section>
          </RevealWrapper>

          {/* 2 */}
          <RevealWrapper>
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-4">
                2. A tájékoztató célja
              </h2>
              <p className="text-sm md:text-base text-charcoal-light leading-relaxed">
                Jelen adatvédelmi tájékoztató célja, hogy a gyorieskuvoparty.hu
                weboldal (a továbbiakban: &ldquo;Weboldal&rdquo;) látogatóit tájékoztassa
                a személyes adataik kezeléséről az Európai Parlament és a Tanács
                (EU) 2016/679 számú általános adatvédelmi rendelete (GDPR),
                valamint az információs önrendelkezési jogról és az
                információszabadságról szóló 2011. évi CXII. törvény (Infotv.)
                alapján.
              </p>
            </section>
          </RevealWrapper>

          {/* 3 */}
          <RevealWrapper>
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-4">
                3. Kezelt adatok köre és az adatkezelés célja
              </h2>

              <h3 className="font-serif text-lg text-charcoal mb-2 mt-6">
                3.1 Kapcsolatfelvétel e-mailben
              </h3>
              <div className="text-sm md:text-base text-charcoal-light leading-relaxed space-y-1">
                <p><strong>Kezelt adatok:</strong> név, e-mail cím, az üzenet tartalma.</p>
                <p><strong>Cél:</strong> kapcsolatfelvétel, kérdések megválaszolása.</p>
                <p><strong>Jogalap:</strong> az érintett hozzájárulása (GDPR 6. cikk (1) bek. a) pont).</p>
                <p><strong>Megőrzési idő:</strong> a cél megvalósulásáig, de legfeljebb 2 év.</p>
              </div>

              <h3 className="font-serif text-lg text-charcoal mb-2 mt-6">
                3.2 Jegyvásárlás
              </h3>
              <div className="text-sm md:text-base text-charcoal-light leading-relaxed space-y-1">
                <p><strong>Kezelt adatok:</strong> [KITÖLTENDŐ: név, e-mail, számlázási adatok, stb.]</p>
                <p><strong>Cél:</strong> jegyértékesítés, számla kiállítása.</p>
                <p><strong>Jogalap:</strong> szerződés teljesítése (GDPR 6. cikk (1) bek. b) pont), jogi kötelezettség teljesítése (GDPR 6. cikk (1) bek. c) pont).</p>
                <p><strong>Megőrzési idő:</strong> a számvitelről szóló 2000. évi C. törvény alapján 8 év.</p>
              </div>

              <h3 className="font-serif text-lg text-charcoal mb-2 mt-6">
                3.3 Weboldal látogatása (sütik)
              </h3>
              <div className="text-sm md:text-base text-charcoal-light leading-relaxed space-y-1">
                <p><strong>Kezelt adatok:</strong> IP-cím, böngésző típusa, látogatás időpontja, megtekintett oldalak.</p>
                <p><strong>Cél:</strong> a Weboldal működésének biztosítása, látogatottság mérése.</p>
                <p><strong>Jogalap:</strong> az adatkezelő jogos érdeke (GDPR 6. cikk (1) bek. f) pont) a működéshez szükséges sütik esetén; hozzájárulás (GDPR 6. cikk (1) bek. a) pont) az analitikai sütik esetén.</p>
                <p><strong>Megőrzési idő:</strong> munkamenet végéig (munkamenet sütik), legfeljebb 13 hónap (analitikai sütik).</p>
              </div>

              <h3 className="font-serif text-lg text-charcoal mb-2 mt-6">
                3.4 Közösségi média
              </h3>
              <div className="text-sm md:text-base text-charcoal-light leading-relaxed space-y-1">
                <p>
                  A Weboldalon közösségi média felületekre (Instagram, Facebook,
                  TikTok) mutató hivatkozások találhatók. Ezek a felületek saját
                  adatvédelmi szabályzattal rendelkeznek, amelyekért az
                  Adatkezelő nem felelős.
                </p>
              </div>
            </section>
          </RevealWrapper>

          {/* 4 */}
          <RevealWrapper>
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-4">
                4. Sütik (cookie-k)
              </h2>
              <div className="text-sm md:text-base text-charcoal-light leading-relaxed space-y-3">
                <p>
                  A Weboldal sütiket (cookie-kat) használ a működés biztosítása
                  és a felhasználói élmény javítása érdekében.
                </p>
                <div className="border border-charcoal/10 overflow-hidden mt-4">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-ivory-dark text-left">
                        <th className="px-4 py-3 font-sans font-medium text-charcoal text-xs uppercase tracking-wider">Süti neve</th>
                        <th className="px-4 py-3 font-sans font-medium text-charcoal text-xs uppercase tracking-wider">Típus</th>
                        <th className="px-4 py-3 font-sans font-medium text-charcoal text-xs uppercase tracking-wider">Élettartam</th>
                        <th className="px-4 py-3 font-sans font-medium text-charcoal text-xs uppercase tracking-wider">Cél</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-charcoal/5">
                        <td className="px-4 py-3">cookie_consent</td>
                        <td className="px-4 py-3">Szükséges</td>
                        <td className="px-4 py-3">1 év</td>
                        <td className="px-4 py-3">Süti-hozzájárulás megjegyzése</td>
                      </tr>
                      <tr className="border-t border-charcoal/5">
                        <td className="px-4 py-3">[KITÖLTENDŐ]</td>
                        <td className="px-4 py-3">Analitikai</td>
                        <td className="px-4 py-3">[KITÖLTENDŐ]</td>
                        <td className="px-4 py-3">[KITÖLTENDŐ]</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </RevealWrapper>

          {/* 5 */}
          <RevealWrapper>
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-4">
                5. Adattovábbítás, adatfeldolgozók
              </h2>
              <div className="text-sm md:text-base text-charcoal-light leading-relaxed space-y-2">
                <p>Az Adatkezelő az alábbi adatfeldolgozókat veszi igénybe:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li><strong>Tárhelyszolgáltató:</strong> [KITÖLTENDŐ: név, cím]</li>
                  <li><strong>Jegyértékesítő rendszer:</strong> [KITÖLTENDŐ: ha van, pl. Eventbrite, Ticket4u stb.]</li>
                  <li><strong>Számlázó rendszer:</strong> [KITÖLTENDŐ: ha van, pl. Számlázz.hu, Billingo stb.]</li>
                  <li><strong>Analitika:</strong> [KITÖLTENDŐ: pl. Google Analytics — Google Ireland Ltd.]</li>
                </ul>
                <p className="mt-3">
                  Az Adatkezelő harmadik országba (EGT-n kívülre) személyes
                  adatot nem továbbít, kivéve ha az adatfeldolgozó ezt szükségessé
                  teszi (pl. Google LLC — a megfelelőséget az EU–U.S. Data Privacy
                  Framework biztosítja).
                </p>
              </div>
            </section>
          </RevealWrapper>

          {/* 6 */}
          <RevealWrapper>
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-4">
                6. Az érintett jogai
              </h2>
              <div className="text-sm md:text-base text-charcoal-light leading-relaxed space-y-2">
                <p>A GDPR alapján Ön jogosult:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li><strong>Hozzáférés joga</strong> — tájékoztatást kérhet arról, hogy milyen adatait kezeljük (GDPR 15. cikk).</li>
                  <li><strong>Helyesbítés joga</strong> — kérheti pontatlan adatai javítását (GDPR 16. cikk).</li>
                  <li><strong>Törlés joga</strong> — kérheti adatai törlését (&ldquo;elfeledtetéshez való jog&rdquo;, GDPR 17. cikk).</li>
                  <li><strong>Korlátozás joga</strong> — kérheti az adatkezelés korlátozását (GDPR 18. cikk).</li>
                  <li><strong>Adathordozhatóság joga</strong> — kérheti adatai géppel olvasható formában történő átadását (GDPR 20. cikk).</li>
                  <li><strong>Tiltakozás joga</strong> — tiltakozhat a jogos érdeken alapuló adatkezelés ellen (GDPR 21. cikk).</li>
                  <li><strong>Hozzájárulás visszavonása</strong> — bármikor, a visszavonás előtti adatkezelés jogszerűségének érintése nélkül.</li>
                </ul>
                <p className="mt-3">
                  Kérelmét az info@gyorieskuvoparty.hu e-mail címre küldheti.
                  A kérelmet 30 napon belül teljesítjük.
                </p>
              </div>
            </section>
          </RevealWrapper>

          {/* 7 */}
          <RevealWrapper>
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-4">
                7. Jogorvoslati lehetőségek
              </h2>
              <div className="text-sm md:text-base text-charcoal-light leading-relaxed space-y-2">
                <p>
                  Amennyiben úgy ítéli meg, hogy az adatkezelés jogellenes, az
                  alábbi szervekhez fordulhat:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>
                    <strong>Nemzeti Adatvédelmi és Információszabadság Hatóság (NAIH)</strong><br />
                    Cím: 1055 Budapest, Falk Miksa utca 9–11.<br />
                    Telefon: +36 (1) 391-1400<br />
                    E-mail: ugyfelszolgalat@naih.hu<br />
                    Weboldal: <a href="https://naih.hu" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">naih.hu</a>
                  </li>
                  <li className="mt-2">
                    Bírósági úton is érvényesítheti jogait a lakóhelye vagy
                    tartózkodási helye szerinti törvényszéknél.
                  </li>
                </ul>
              </div>
            </section>
          </RevealWrapper>

          {/* 8 */}
          <RevealWrapper>
            <section>
              <h2 className="font-serif text-xl md:text-2xl text-charcoal mb-4">
                8. A tájékoztató módosítása
              </h2>
              <p className="text-sm md:text-base text-charcoal-light leading-relaxed">
                Az Adatkezelő fenntartja a jogot, hogy a jelen tájékoztatót
                egyoldalúan módosítsa. A módosított tájékoztató a Weboldalon
                történő közzététellel lép hatályba.
              </p>
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
