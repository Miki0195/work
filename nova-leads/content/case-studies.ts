export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  services: string[];
  duration: string;
  image: string;
  tags: string[];
  featured: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "techstart-leads",
    title: "400% növekedés a minősített leadekben",
    client: "TechStart Solutions",
    industry: "B2B SaaS",
    challenge: "A TechStart Solutions, egy gyorsan növekvő CRM szoftver startup, nehezen talált megfelelő minőségű leadeket. A korábbi marketing erőfeszítéseik sok alacsony minőségű érdeklődőt hoztak, amelyek ritkán konvertáltak fizető ügyfelekké. Az értékesítési csapat túl sok időt töltött nem releváns leadekkel, miközben a valódi lehetőségek elvesztek a zajban.",
    solution: "Átfogó lead generation stratégiát dolgoztunk ki, amely AI-alapú lead scoring-ot és multi-channel outreach kampányokat ötvözött. Először is mélyrehatóan elemeztük a meglévő ügyfélbázisukat, hogy megértsük az ideális ügyfélprofilt (ICP). Ezután felépítettünk egy személyre szabott email és LinkedIn kampányt, amely specifikusan a döntéshozókat célozta tech vállalatoknál. A kampányok folyamatos A/B tesztelésével és optimalizálásával biztosítottuk a maximális eredményt.",
    results: [
      {
        metric: "Lead minőség",
        value: "+412%",
        description: "Több mint négyszeres növekedés az SQL (Sales Qualified Lead) számában"
      },
      {
        metric: "Konverziós arány",
        value: "38%",
        description: "A leadek 38%-a vált fizető ügyféllé (korábban 9%)"
      },
      {
        metric: "Értékesítési ciklus",
        value: "-32 nap",
        description: "Jelentősen rövidebb értékesítési folyamat a jobb lead minőségnek köszönhetően"
      },
      {
        metric: "ROI",
        value: "680%",
        description: "Minden befektetett forintból 6,8 forint bevétel az első 6 hónapban"
      }
    ],
    testimonial: {
      quote: "A Nova Leads teljesen átalakította a lead generation folyamatunkat. Korábban rengeteg időt pazaroltunk nem megfelelő leadekre. Most minden hét kvalifikált érdeklődőkkel van tele, és az értékesítési csapatom végre arra tud fókuszálni, amiben a legjobb: üzletkötésre. Az eredmények magukért beszélnek.",
      author: "Kovács Péter",
      position: "Értékesítési Igazgató",
      company: "TechStart Solutions"
    },
    services: ["lead-generation", "data-analytics"],
    duration: "6 hónap",
    image: "/images/case-studies/techstart.jpg",
    tags: ["Lead Generation", "B2B SaaS", "Sales Automation"],
    featured: true
  },
  {
    slug: "fintech-scale",
    title: "Lead-to-close idő 45%-os csökkentése",
    client: "FinanceFlow",
    industry: "FinTech",
    challenge: "A FinanceFlow, egy innovatív pénzügyi technológiai platform, erős terméket épített, de az értékesítési folyamat túl lassú és ineffektív volt. Az értékesítési ciklus átlagosan 4-5 hónapot vett igénybe, rengeteg manuális follow-up email, találkozó koordinálás és proposal készítéssel. Az értékesítési csapat 70%-os kapacitással dolgozott admin feladatokon, nem pedig értékesítéssel.",
    solution: "Komplex értékesítési automatizációs rendszert implementáltunk, amely integrálja a CRM-et, email marketing platformot és ütemezési eszközöket. Létrehoztunk intelligens lead nurturing szekvenciákat, amelyek automatikusan személyre szabott tartalmakat küldenek a potenciális ügyfeleknek az értékesítési folyamat minden szakaszában. AI-alapú scoring rendszerrel priorizáltuk a leadeket, hogy az értékesítők mindig a legnagyobb potenciállal rendelkező ügyfelekre fókuszáljanak. Prediktív analitika dashboardot építettünk, amely előre jelezte az üzletkötés valószínűségét.",
    results: [
      {
        metric: "Értékesítési ciklus",
        value: "-45%",
        description: "Az átlagos deal bezárási idő 4,5 hónapról 2,5 hónapra csökkent"
      },
      {
        metric: "Csapat produktivitás",
        value: "+156%",
        description: "Értékesítők több mint kétszer annyi időt töltenek aktív értékesítéssel"
      },
      {
        metric: "Deal érték",
        value: "+34%",
        description: "Az átlagos szerződés értéke nőtt a jobb lead kvalifikációnak köszönhetően"
      },
      {
        metric: "Win rate",
        value: "67%",
        description: "A lehetőségek 67%-a zárult sikerrel (korábban 42%)"
      }
    ],
    testimonial: {
      quote: "A Nova Leads csapata nem csak eszközöket adott, hanem teljesen újragondolta az értékesítési folyamatunkat. Az automatizáció felszabadította az értékesítőinket a fárasztó admin munkától, és végre a stratégiai munkára koncentrálhatnak. A dashboardjaik kristálytiszta rálátást adnak az értékesítési pipeline-ra, így sokkal pontosabban tudjuk előre jelezni a bevételt.",
      author: "Nagy Eszter",
      position: "COO",
      company: "FinanceFlow"
    },
    services: ["sales-automation", "data-analytics", "lead-generation"],
    duration: "4 hónap",
    image: "/images/case-studies/financeflow.jpg",
    tags: ["Sales Automation", "FinTech", "Process Optimization"],
    featured: true
  },
  {
    slug: "saas-automation",
    title: "3x több deal ugyanazzal a csapattal",
    client: "CloudSync Pro",
    industry: "Enterprise SaaS",
    challenge: "A CloudSync Pro, egy enterprise szintű felhőalapú együttműködési platform, a skálázás kihívásával szembesült. Bár a kereslet folyamatosan nőtt, az értékesítési csapat nem tudott elég gyorsan bővülni az igényeknek megfelelően. Az új értékesítők onboardingja lassú volt, és a konzisztencia hiányzott a sales pitch-ben és follow-up folyamatokban. A vállalat vezetősége nem akart agresszívan toborzni a proven rendszer hiánya miatt.",
    solution: "Sales playbook automatizációt és AI-vezérelt értékesítési asszisztenst fejlesztettünk ki. Szabványosítottuk az értékesítési folyamatot és automatizált munkafolyamatokat hoztunk létre minden érintkezési ponthoz. Az AI asszisztens valós időben javasolja a következő legjobb lépést minden ügyféllel való interakciónál, személyre szabott email template-eket generál és automatikusan ütemezi a follow-up-okat. Átfogó analitikai rendszert implementáltunk, amely folyamatosan tanulja és optimalizálja az értékesítési folyamatot.",
    results: [
      {
        metric: "Zárt dealek száma",
        value: "+287%",
        description: "Majdnem háromszoros növekedés ugyanakkora értékesítési csapattal"
      },
      {
        metric: "Új értékesítő ramp-up",
        value: "-65%",
        description: "Új csapattagok 3,5 hónap helyett 1,2 hónap alatt termelik az első dealjüket"
      },
      {
        metric: "Response time",
        value: "< 5 perc",
        description: "Azonnali automatizált válaszok leadeknek, 24/7"
      },
      {
        metric: "Költséghatékonyság",
        value: "€120k",
        description: "Éves megtakarítás toborzási és training költségekben"
      }
    ],
    testimonial: {
      quote: "Képtelenek voltunk lépést tartani a kereslettel, de nem akartunk elhamarkodottan új értékesítőket felvenni. A Nova Leads megoldása tökéletes volt: megszoroztuk az output-ot anélkül, hogy jelentősen növeltük volna a csapatot. Az AI asszisztens olyan, mintha minden értékesítőnknek lenne egy személyi trénere, aki végigvezeti őket a legjobb gyakorlatokon.",
      author: "Szabó Márk",
      position: "VP of Sales",
      company: "CloudSync Pro"
    },
    services: ["sales-automation", "lead-generation"],
    duration: "5 hónap",
    image: "/images/case-studies/cloudsync.jpg",
    tags: ["Sales Automation", "Enterprise SaaS", "AI Assistant"],
    featured: true
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.slug === slug);
};

export const getFeaturedCaseStudies = (): CaseStudy[] => {
  return caseStudies.filter(study => study.featured);
};
