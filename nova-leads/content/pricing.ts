export interface PricingTier {
  name: string;
  slug: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface AddOn {
  name: string;
  description: string;
  price: string;
  icon: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    slug: "starter",
    price: "250.000 Ft",
    period: "hó",
    description: "Kisebb vállalkozásoknak, akik most kezdik az értékesítési növekedést",
    features: [
      "500 kvalifikált lead/hó",
      "1 aktív kampány",
      "Email outreach automatizálás",
      "Alapvető CRM integráció",
      "Havi teljesítmény riport",
      "Email támogatás (48h válaszidő)",
      "Lead scoring dashboard"
    ],
    highlighted: false,
    cta: "Kezdjünk neki"
  },
  {
    name: "Professional",
    slug: "professional",
    price: "550.000 Ft",
    period: "hó",
    description: "Növekvő vállalkozásoknak, akik skálázni akarnak",
    features: [
      "1500 kvalifikált lead/hó",
      "3 aktív kampány párhuzamosan",
      "Multi-channel outreach (email + LinkedIn)",
      "Teljes CRM integráció és szinkronizálás",
      "AI-alapú lead scoring és prioritizálás",
      "Prediktív analytics dashboard",
      "Heti teljesítmény riportok",
      "Sales automation workflows (5 workflow)",
      "Dedikált Account Manager",
      "Priority support (12h válaszidő)",
      "Havidvali stratégiai megbeszélés"
    ],
    highlighted: true,
    cta: "Népszerű választás"
  },
  {
    name: "Enterprise",
    slug: "enterprise",
    price: "Egyedi",
    period: "ajánlat",
    description: "Nagyvállalatok és komplex értékesítési szervezetek számára",
    features: [
      "Korlátlan lead volume",
      "Korlátlan kampány",
      "Full-service multi-channel strategy",
      "Egyedi API integrációk",
      "White-label reporting",
      "Dedikált Customer Success Team",
      "Custom AI model training",
      "Korlátlan automation workflows",
      "24/7 prioritás support",
      "Heti stratégiai call-ok",
      "Egyedi SLA megállapodás",
      "On-site konzultáció és training"
    ],
    highlighted: false,
    cta: "Egyedi ajánlat"
  }
];

export const addOns: AddOn[] = [
  {
    name: "LinkedIn Premium Outreach",
    description: "Célzott LinkedIn kampányok közvetlen üzenetekkel és InMail-lel. Ideális B2B döntéshozók elérésére.",
    price: "180.000 Ft/hó",
    icon: "linkedin"
  },
  {
    name: "Content Marketing Package",
    description: "Havi 8 darab optimalizált blog poszt, case study vagy white paper a lead magnet kampányokhoz.",
    price: "320.000 Ft/hó",
    icon: "content"
  },
  {
    name: "Cold Calling Campaign",
    description: "Profi telefonos értékesítési kampány qualifikált leadeknek. Natív magyar beszélők.",
    price: "280.000 Ft/hó",
    icon: "phone"
  },
  {
    name: "Advanced Analytics & BI",
    description: "Egyedi Power BI vagy Tableau dashboardok mély üzleti insights-okkal és prediktív modellekkel.",
    price: "220.000 Ft/hó",
    icon: "analytics"
  },
  {
    name: "Sales Team Training",
    description: "Negyedéves sales training workshopok a csapatodnak. Új stratégiák, eszközök, best practice-ek.",
    price: "450.000 Ft/alkalom",
    icon: "training"
  },
  {
    name: "Competitive Intelligence",
    description: "Havi kompetitív analízis: mit csinálnak a versenytársaid, milyen kampányokat futtatnak, hol hirdetnek.",
    price: "150.000 Ft/hó",
    icon: "search"
  }
];
