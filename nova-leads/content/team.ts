export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  expertise: string[];
}

export const team: TeamMember[] = [
  {
    name: "Takács Viktor",
    position: "Alapító & CEO",
    bio: "Viktor 12+ évet töltött B2B tech sales és marketing területén, vezető szerepekben olyan vállalatoknál, mint a Salesforce és HubSpot. A Nova Leads-et azzal a vízióval alapította, hogy az AI és automatizáció erejével demokratizálja a high-end értékesítési stratégiákat minden növekvő vállalkozás számára.",
    image: "/images/team/viktor.jpg",
    linkedin: "https://linkedin.com/in/takacsviktor",
    expertise: ["Sales Strategy", "Business Development", "SaaS Growth"]
  },
  {
    name: "Horváth Anna",
    position: "Head of Growth",
    bio: "Anna egy elismert growth marketing szakértő, aki kampányokat vezetett több mint 50 B2B SaaS vállalkozás számára. Specialitása a data-driven kampányoptimalizálás és a multi-channel lead generation stratégiák. Szenvedélye, hogy mérhető és megismételhető növekedési rendszereket építsen.",
    image: "/images/team/anna.jpg",
    linkedin: "https://linkedin.com/in/horvathanna",
    expertise: ["Growth Marketing", "Lead Generation", "Analytics"]
  },
  {
    name: "Kiss Dániel",
    position: "CTO",
    bio: "Dániel korábban ML engineerként dolgozott a Google-nél, majd később saját marketing tech startupot alapított. A Nova Leads-nél az AI-alapú lead scoring és prediktív analitika rendszerek fejlesztését vezeti. Megszállott az automatizáció és a skálázható technológiai megoldások iránt.",
    image: "/images/team/daniel.jpg",
    linkedin: "https://linkedin.com/in/kissdaniel",
    expertise: ["AI/ML", "Sales Automation", "Data Engineering"]
  },
  {
    name: "Molnár Réka",
    position: "Head of Client Success",
    bio: "Réka több mint 8 éves tapasztalattal rendelkezik B2B account management és customer success területén. Küldetése, hogy minden ügyfelünk elérje a kitűzött célokat és még többet. Híres a proaktív problémamegoldásáról és a strategiai tanácsadói hozzáállásáról.",
    image: "/images/team/reka.jpg",
    linkedin: "https://linkedin.com/in/molnarreka",
    expertise: ["Client Success", "Account Management", "Consulting"]
  },
  {
    name: "Tóth Balázs",
    position: "Senior Data Analyst",
    bio: "Balázs adattudós háttérrel rendelkezik, korábban nagy multinacionális cégek számára épített prediktív modelleket. A Nova Leads-nél az értékesítési analytics és reporting rendszereket fejleszti. Hisz abban, hogy minden üzleti döntésnek adatokon kell alapulnia.",
    image: "/images/team/balazs.jpg",
    linkedin: "https://linkedin.com/in/tothbalazs",
    expertise: ["Data Analytics", "Predictive Modeling", "Business Intelligence"]
  },
  {
    name: "Varga Zsófia",
    position: "Lead Automation Specialist",
    bio: "Zsófia az automatizáció és marketing operations varázslója. 6+ év tapasztalattal dolgozott B2B marketing automation platformokkal, beleértve a Marketo, Pardot és HubSpot-ot. A Nova Leads-nél komplex értékesítési munkafolyamatok tervezését és implementálását vezeti.",
    image: "/images/team/zsofia.jpg",
    linkedin: "https://linkedin.com/in/vargazsofia",
    expertise: ["Marketing Automation", "Workflow Design", "CRM Integration"]
  }
];
