import { Metadata } from "next";
import { SectionReveal } from "@/components/ui/section-reveal";

export const metadata: Metadata = {
  title: "Adatvédelmi szabályzat - Nova Leads",
  description: "Adatvédelmi és adatkezelési tájékoztató",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-padding mx-auto max-w-4xl">
        <SectionReveal>
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-8">
            <span className="text-gradient">Adatvédelmi</span> szabályzat
          </h1>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4 text-white">
                1. Bevezetés
              </h2>
              <p className="text-dark-300 leading-relaxed">
                A Nova Leads (&ldquo;mi&rdquo;, &ldquo;minket&rdquo;, &ldquo;miénk&rdquo;) elkötelezett az Ön személyes adatainak védelme iránt. 
                Ez az adatvédelmi szabályzat leírja, hogyan gyűjtjük, használjuk és védjük az Ön adatait 
                a szolgáltatásaink használata során.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4 text-white">
                2. Gyűjtött adatok
              </h2>
              <p className="text-dark-300 leading-relaxed mb-4">
                Az alábbi személyes adatokat gyűjthetjük:
              </p>
              <ul className="list-disc list-inside text-dark-300 space-y-2">
                <li>Név és kapcsolattartási információk (email, telefonszám)</li>
                <li>Céginformációk</li>
                <li>Használati adatok és cookie-k</li>
                <li>Kommunikációs preferenciák</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4 text-white">
                3. Adatok használata
              </h2>
              <p className="text-dark-300 leading-relaxed mb-4">
                Az adatokat a következő célokra használjuk:
              </p>
              <ul className="list-disc list-inside text-dark-300 space-y-2">
                <li>Szolgáltatásaink nyújtása és fejlesztése</li>
                <li>Ügyfélkapcsolatok kezelése</li>
                <li>Marketing kommunikáció (hozzájárulás esetén)</li>
                <li>Jogi kötelezettségek teljesítése</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4 text-white">
                4. Adatbiztonság
              </h2>
              <p className="text-dark-300 leading-relaxed">
                Megfelelő technikai és szervezési intézkedéseket alkalmazunk az adatok védelme érdekében. 
                Az adatokat biztonságos szervereken tároljuk, és csak jogosult személyek férhetnek hozzájuk.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4 text-white">
                5. Az Ön jogai
              </h2>
              <p className="text-dark-300 leading-relaxed mb-4">
                A GDPR szerint Önnek joga van:
              </p>
              <ul className="list-disc list-inside text-dark-300 space-y-2">
                <li>Hozzáférni a személyes adataihoz</li>
                <li>Helyesbíteni a pontatlan adatokat</li>
                <li>Töröltetni az adatokat (&ldquo;elfeledtetéshez való jog&rdquo;)</li>
                <li>Korlátozni az adatkezelést</li>
                <li>Adathordozhatóság</li>
                <li>Tiltakozni az adatkezelés ellen</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4 text-white">
                6. Cookie-k
              </h2>
              <p className="text-dark-300 leading-relaxed">
                Weboldalunk cookie-kat használ a felhasználói élmény javítása és az analitika érdekében. 
                A böngésző beállításaiban bármikor letilthatja a cookie-kat.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4 text-white">
                7. Kapcsolat
              </h2>
              <p className="text-dark-300 leading-relaxed">
                Ha kérdése van az adatvédelmi szabályzattal kapcsolatban, keressen minket:
              </p>
              <p className="text-primary-400 mt-4">
                Email: hello@novaleads.hu<br />
                Telefon: +36 1 234 5678
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <p className="text-dark-400 text-sm">
                Utoljára frissítve: 2026. február 13.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
