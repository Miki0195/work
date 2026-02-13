export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  pricing: {
    starting: string;
    typical: string;
  };
  caseStudyIds?: string[];
}

export const services: Service[] = [
  {
    slug: "lead-generation",
    title: "Lead Generálás",
    subtitle: "Minőségi leadek a növekedéshez",
    description: "Fejlett AI-alapú rendszerekkel azonosítjuk és szólítjuk meg azokat a potenciális ügyfeleket, akik valóban érdeklődnek a szolgáltatásaid iránt. Nem csak mennyiséget, hanem minőséget garantálunk.",
    icon: "target",
    features: [
      "AI-vezérelt lead scoring és minősítés",
      "Multi-channel megközelítés (email, LinkedIn, telefon)",
      "Prediktív analitika és személyre szabott üzenetek",
      "Valós idejű lead nyomon követés és értesítések",
      "CRM integráció és automatikus lead szinkronizálás",
      "A/B tesztelés és kampány optimalizálás"
    ],
    benefits: [
      "3-5x több minősített lead az első 60 napban",
      "45% magasabb konverziós arány",
      "Átlátható ROI mérés és reporting",
      "Csökkentett ügyfélszerzési költségek"
    ],
    process: [
      {
        step: 1,
        title: "Célcsoport elemzés",
        description: "Mélységi kutatás az ideális ügyfélprofilodról (ICP). Azonosítjuk azokat a vállalkozásokat és döntéshozókat, akik a legnagyobb valószínűséggel érdekeltek a szolgáltatásaidban."
      },
      {
        step: 2,
        title: "Kampánystratégia",
        description: "Egyedi multi-channel stratégiát dolgozunk ki, amely ötvözi az email marketing, LinkedIn outreach és célzott hirdetések erejét. Minden üzenet személyre szabott és releváns."
      },
      {
        step: 3,
        title: "Aktiválás és optimalizálás",
        description: "Kampányaink élő indítása folyamatos A/B teszteléssel. Valós időben figyeljük a teljesítményt és optimalizáljuk az üzeneteket a maximális eredményért."
      },
      {
        step: 4,
        title: "Lead kvalifikáció",
        description: "AI-alapú scoring rendszerrel minősítjük a leadeket. Csak az értékesítésre kész, magas potenciálú kontaktokat adjunk át a csapatodnak."
      },
      {
        step: 5,
        title: "Folyamatos fejlesztés",
        description: "Havi riportok és stratégiai megbeszélések. Folyamatosan finomhangoljuk a kampányokat a tanultak és az új piaci trendek alapján."
      }
    ],
    pricing: {
      starting: "250.000 Ft/hó",
      typical: "400.000 - 800.000 Ft/hó"
    },
    caseStudyIds: ["techstart-leads", "fintech-scale"]
  },
  {
    slug: "sales-automation",
    title: "Értékesítési Automatizáció",
    subtitle: "Hatékonyság AI-powered eszközökkel",
    description: "Automatizáljuk az értékesítési folyamat időigényes részeit, hogy a csapatod arra koncentrálhasson, amiben a legjobb: az üzletkötésre. Modern AI eszközeink 24/7 dolgoznak a sikerért.",
    icon: "zap",
    features: [
      "Email kampány automatizáció személyre szabással",
      "Intelligens follow-up szekvenciák",
      "Lead nurturing automatikus munkafolyamatok",
      "Sales playbook automatizálás",
      "Értekezlet ütemezés AI asszisztenssel",
      "Automatikus reporting és analitika"
    ],
    benefits: [
      "60% időmegtakarítás az admin feladatokon",
      "Konzisztens vevői élmény minden érintkezési ponton",
      "Kevesebb emberi hiba és elmulasztott lehetőség",
      "Mérhetően gyorsabb értékesítési ciklus"
    ],
    process: [
      {
        step: 1,
        title: "Folyamat audit",
        description: "Részletesen feltérképezzük a jelenlegi értékesítési folyamatokat. Azonosítjuk a szűk keresztmetszeteket, időpazarló feladatokat és automatizálható területeket."
      },
      {
        step: 2,
        title: "Rendszer tervezés",
        description: "Egyedi automatizációs architektúrát dolgozunk ki, amely illeszkedik a CRM rendszeredhez és értékesítési módszertanodhoz. Minden workflow áttekinthető és könnyen módosítható."
      },
      {
        step: 3,
        title: "Implementáció",
        description: "Szakértőink beállítják az összes automatizációt és integrációt. Alapos tesztelést végzünk minden munkafolyamaton, hogy biztosítsuk a hibamentes működést."
      },
      {
        step: 4,
        title: "Csapat onboarding",
        description: "Átfogó képzést biztosítunk a csapatodnak az új rendszerről. Minden felhasználó megtanulja, hogyan hozza ki a maximumot az automatizációból."
      },
      {
        step: 5,
        title: "Monitoring és skálázás",
        description: "Folyamatosan monitorozzuk a rendszer teljesítményét. Javaslatokat teszünk új automatizációs lehetőségekre ahogy a vállalkozásod növekszik."
      }
    ],
    pricing: {
      starting: "400.000 Ft egyszer",
      typical: "600.000 - 1.200.000 Ft egyszer + 80.000 Ft/hó támogatás"
    },
    caseStudyIds: ["saas-automation"]
  },
  {
    slug: "data-analytics",
    title: "Adatelemzés & Insights",
    subtitle: "Döntések adatok alapján",
    description: "Változtasd az értékesítési adatokat stratégiai előnnyé. Fejlett analitikai dashboardjaink és prediktív modelljeink segítenek megérteni, mi működik és mi nem, hogy mindig a legjobb döntéseket hozhasd.",
    icon: "chart",
    features: [
      "Egyedi analitikai dashboardok",
      "Prediktív értékesítési forecasting",
      "Ügyfélútszám-elemzés és optimalizálás",
      "Kampány teljesítménymérés és ROI tracking",
      "Kompetitív intelligencia és piaci trendek",
      "Automatikus anomália detektálás"
    ],
    benefits: [
      "Adatalapú döntéshozatal teljes értékesítési folyamaton",
      "Korai figyelmeztetések problémákra és lehetőségekre",
      "Pontosabb előrejelzések és kapacitástervezés",
      "Mérhető fejlődés minden KPI-ban"
    ],
    process: [
      {
        step: 1,
        title: "Adatforrások integráció",
        description: "Összekapcsoljuk az összes adatforrást: CRM, marketing automation, webanalitika, pénzügyi rendszerek. Egy központi adatbázisban egyesítünk mindent."
      },
      {
        step: 2,
        title: "KPI meghatározás",
        description: "Együtt definiáljuk azokat a kulcsfontosságú metrikákat, amelyek valóban számítanak a vállalkozásod számára. Fókuszban a bevétel, növekedés és hatékonyság."
      },
      {
        step: 3,
        title: "Dashboard fejlesztés",
        description: "Egyedi vizuális dashboardokat készítünk, amelyek valós időben mutatják a legfontosabb metrikákat. Intuitív, könnyen érthető és minden eszközön elérhető."
      },
      {
        step: 4,
        title: "Prediktív modellek",
        description: "Machine learning algoritmusokkal építünk előrejelző modelleket. Megjósolhatod az értékesítési trendeket, lead minőséget és vásárlói élettartam értéket."
      },
      {
        step: 5,
        title: "Insights és akciók",
        description: "Nem csak számokat adunk, hanem konkrét ajánlásokat is. Havi stratégiai megbeszéléseken áttekintjük az adatokat és megtervezzük a következő lépéseket."
      }
    ],
    pricing: {
      starting: "300.000 Ft/hó",
      typical: "500.000 - 1.000.000 Ft/hó"
    },
    caseStudyIds: ["fintech-scale"]
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
