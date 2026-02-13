import { Metadata } from "next";
import { SectionReveal } from "@/components/ui/section-reveal";

export const metadata: Metadata = {
  title: "Felhasználási feltételek - Nova Leads",
  description: "Általános Szerződési Feltételek",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container-padding mx-auto max-w-4xl">
        <SectionReveal>
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-8">
            <span className="text-gradient">Felhasználási</span> feltételek
          </h1>

          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4 text-white">
                1. Általános rendelkezések
              </h2>
              <p className="text-dark-300 leading-relaxed">
                Ezen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) szabályozzák a Nova Leads 
                (székhely: 1052 Budapest, Váci utca 47.) által nyújtott szolgáltatások igénybevételének 
                feltételeit. A szolgáltatások igénybevételével Ön elfogadja jelen ÁSZF rendelkezéseit.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4 text-white">
                2. Szolgáltatások
              </h2>
              <p className="text-dark-300 leading-relaxed mb-4">
                A Nova Leads az alábbi szolgáltatásokat nyújtja:
              </p>
              <ul className="list-disc list-inside text-dark-300 space-y-2">
                <li>Lead generation szolgáltatások</li>
                <li>Értékesítési automatizáció</li>
                <li>Adatelemzés és business intelligence</li>
                <li>Marketing consulting</li>
              </ul>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4 text-white">
                3. Szerződés létrejötte
              </h2>
              <p className="text-dark-300 leading-relaxed">
                A szerződés az ajánlat elfogadásával és az előleg beérkezésével jön létre. 
                Az ajánlat 30 napig érvényes. A szolgáltatás megkezdése a szerződés aláírását követően történik.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4 text-white">
                4. Árak és fizetési feltételek
              </h2>
              <p className="text-dark-300 leading-relaxed">
                Az árak magyar forintban (HUF) értendők és tartalmazzák az ÁFÁ-t. 
                A fizetés előre, banki átutalással vagy online fizetési módszerekkel történik. 
                Havi előfizetés esetén a számlázás minden hónap első napján történik.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4 text-white">
                5. Felmondás
              </h2>
              <p className="text-dark-300 leading-relaxed">
                A Starter csomag havi felmondható. A Professional csomag 3 hónapos minimális futamidejű, 
                utána 30 napos felmondási idővel mondható fel. Az Enterprise szerződések egyedi feltételeket tartalmaznak.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4 text-white">
                6. Garancia és felelősség
              </h2>
              <p className="text-dark-300 leading-relaxed">
                60 napos elégedettségi garanciát vállalunk. Ha az első 60 napban nem elégedett a szolgáltatással, 
                teljes mértékben visszatérítjük a díjat. Felelősségünk az adott időszakra fizetett díj összegére korlátozódik.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4 text-white">
                7. Szellemi tulajdon
              </h2>
              <p className="text-dark-300 leading-relaxed">
                Az általunk létrehozott tartalmak, stratégiák és kampányok szellemi tulajdona a szerződés 
                teljes kifizetését követően az Ügyfélé. A használt szoftverek és eszközök tulajdonjoga a Nova Leads-é marad.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4 text-white">
                8. Titoktartás
              </h2>
              <p className="text-dark-300 leading-relaxed">
                Mindkét fél kötelezi magát, hogy a másik féltől kapott bizalmas információkat titokban tartja 
                és azokat kizárólag a szerződés teljesítése céljából használja fel.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4 text-white">
                9. Jogviták rendezése
              </h2>
              <p className="text-dark-300 leading-relaxed">
                A szerződésre a magyar jog az irányadó. Jogvita esetén a felek elsősorban békés úton 
                próbálják rendezni nézeteltéréseiket. Ennek sikertelensége esetén a Pesti Központi Kerületi Bíróság illetékes.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold mb-4 text-white">
                10. Kapcsolat
              </h2>
              <p className="text-dark-300 leading-relaxed">
                Kérdés esetén keressen minket bizalommal:
              </p>
              <p className="text-primary-400 mt-4">
                Email: hello@novaleads.hu<br />
                Telefon: +36 1 234 5678<br />
                Cím: 1052 Budapest, Váci utca 47.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl">
              <p className="text-dark-400 text-sm">
                Hatályos: 2026. február 13-tól
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
