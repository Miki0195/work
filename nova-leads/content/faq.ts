export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    question: "Mennyi idő alatt látok eredményeket?",
    answer: "A legtöbb ügyfél az első kvalifikált leadeket már az első 2-3 héten belül megkapja. A jelentős eredmények (növekvő konverziós arány, ROI) általában 60-90 nap után kezdenek látszódni, ahogy finomhangoljuk a kampányokat és optimalizáljuk a folyamatokat. A legfontosabb, hogy folyamatos fejlődést biztosítunk, nem gyors \"csodaszereket\".",
    category: "Általános"
  },
  {
    question: "Milyen iparágakban dolgoztok?",
    answer: "Specializációnk a B2B tech, SaaS, FinTech és professzionális szolgáltatások. Tapasztalatunk van startup-októl enterprise vállalatokig. Ha az üzleti modelled lead generation-re vagy komplex értékesítési ciklusra épül, valószínűleg tudunk segíteni. Ingyenes konzultáción megnézzük, hogy illeszkedünk-e.",
    category: "Általános"
  },
  {
    question: "Hogyan mérik a lead minőséget?",
    answer: "Egyedi lead scoring rendszert használunk, amely figyelembe veszi a demográfiai adatokat (vállalat mérete, iparág, pozíció) és viselkedési jelzéseket (email nyitás, link kattintás, weboldal látogatás). Csak azokat a leadeket adjuk át, amelyek megfelelnek az előre egyeztetett ICP (Ideal Customer Profile) kritériumoknak és érdeklődést mutattak a szolgáltatásaid iránt.",
    category: "Lead Generation"
  },
  {
    question: "Integrálódik a meglévő CRM rendszerünkkel?",
    answer: "Igen, tapasztalatunk van az összes főbb CRM platformmal: Salesforce, HubSpot, Pipedrive, Microsoft Dynamics, Zoho és még sok más. Az onboarding során beállítjuk a kétirányú szinkronizálást, így a leadek automatikusan megjelennek a CRM-edben és a tevékenységek is visszakerülnek az analitikai rendszerünkbe.",
    category: "Technológia"
  },
  {
    question: "Mi van, ha nem vagyok elégedett az eredményekkel?",
    answer: "60 napos garancia időszakot biztosítunk minden új ügyfélnek. Ha az első két hónapban nem látod a megígért eredményeket, teljes mértékben visszatérítjük a díjat. Emellett folyamatos kommunikációt tartunk és rugalmasan alkalmazkodunk a változó igényekhez. Az ügyfél elégedettség a prioritásunk.",
    category: "Általános"
  },
  {
    question: "Mennyi bevételt generálhatok a szolgáltatásaitokkal?",
    answer: "Ez erősen függ az iparágadtól, termékáradtól és értékesítési folyamatodtól. Ügyfeleink átlagosan 4-7x ROI-t érnek el az első 6 hónapban. Egy tipikus Professional package ügyfél 550.000 Ft/hó befektetéssel 2-4 millió Ft értékű új dealeket zár. Az ingyenes konzultáción konkrét számokat tudunk becsülni a te esetedben.",
    category: "ROI"
  },
  {
    question: "Milyen hosszú a szerződés?",
    answer: "Rugalmas szerződési feltételeket kínálunk. A Starter package havi felmondással jár, a Professional minimum 3 hónapos elkötelezettséget igényel (ami reális az eredmények eléréséhez), az Enterprise egyedi megállapodás. Nincs rejtett díj vagy kilépési büntetés a minimum periódus után.",
    category: "Szerződés"
  },
  {
    question: "Ki fogja kezelni a kampányainkat?",
    answer: "Minden ügyfél kap egy dedikált Account Manager-t, aki az elsődleges kapcsolattartód. Mögötte egy teljes csapat dolgozik: campaign specialists, data analysts, automation engineers és a vezetőség. A Professional és Enterprise ügyfelek rendszeres stratégiai megbeszéléseken vesznek részt a teljes csapattal.",
    category: "Általános"
  },
  {
    question: "Szükségem van saját értékesítési csapatra?",
    answer: "Igen, mi leadeket és lehetőségeket generálunk, de az üzletkötés a te felelősséged marad. Ugyanakkor, ha nincs még értékesítési csapatod vagy kapacitásod szűk, tudunk ajánlani partner cégeket vagy interim sales talent-et. A sales automation megoldásaink jelentősen csökkentik a szükséges csapat méretet.",
    category: "Értékesítés"
  },
  {
    question: "Milyen reportingot kapok?",
    answer: "Valós idejű hozzáférést biztosítunk az analytics dashboardhoz, ahol 24/7 láthatod a kampány teljesítményt. Ezen felül havi részletes riportokat küldünk, amelyek tartalmazzák a leadek számát, minőséget, konverziós arányokat, ROI méréseket és ajánlásokat a következő időszakra. Professional és Enterprise ügyfelek heti/napi riportokat is kaphatnak.",
    category: "Reporting"
  }
];
