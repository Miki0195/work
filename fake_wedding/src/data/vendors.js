/**
 * Central vendor data source.
 *
 * To fill in a vendor's detail page, update the fields below.
 * The VendorPage template will automatically render everything you provide.
 *
 * ── Field guide ──────────────────────────────────────────────
 *  slug          URL-safe identifier (used in /szolgaltatok/:slug)
 *  category      Display name shown everywhere
 *  accent        One-liner shown in the listing on the homepage
 *  tagline       Short poetic line displayed under the title on the detail page
 *  description   Array of paragraph strings — the main body text
 *  highlights    Array of short strings — key qualities / selling points
 *  coverImage    Path or URL for the hero/cover image (import or public path)
 *  galleryImages Array of { src, alt } objects for the gallery grid
 *  contact       { name, role, email, phone } — optional vendor contact info
 * ─────────────────────────────────────────────────────────────
 */

const vendors = [
  {
    slug: 'helyszin',
    category: 'Helyszín',
    accent: 'Az események kerete és alapja.',
    tagline: 'Ahol az ünnep életre kel.',
    description: [
      'A helyszín határozza meg az egész esemény hangulatát. Partnereink olyan különleges tereket biztosítanak, amelyek méltó keretét adják egy felejthetetlen esküvői élménynek.',
      'Legyen szó elegáns étteremről, romantikus kastélyról vagy modern rendezvényközpontról — minden helyszín gondosan válogatott, hogy a vendégek valódi esküvői atmoszférát élhessenek át.',
    ],
    highlights: [
      'Exkluzív helyszínek',
      'Elegáns berendezés',
      'Tökéletes hangulat',
      'Professzionális kiszolgálás',
    ],
    coverImage: null,
    galleryImages: [],
    contact: {
      name: 'Profi Helyszín',
      role: 'Helyszín',
      email: 'info@profihangrendszer.hu',
      phone: '+36 30 123 4567',
    },
  },
  {
    slug: 'dj',
    category: 'DJ',
    accent: 'A buli lelke és a hangulat garanciája.',
    tagline: 'A ritmus, ami összeköt.',
    description: [
      'Egy esküvő lelke a zene. DJ partnereink pontosan tudják, hogyan kell felépíteni egy estét — az érzelmes pillanatokból a felhőtlen buliig.',
      'Profi hangrendszerrel, tapasztalattal és stílusérzékkel gondoskodnak arról, hogy minden vendég megtalálja a maga ritmusát.',
    ],
    highlights: [
      'Profi hangrendszer',
      'Hangulatépítés',
      'Személyre szabott playlist',
      'Esküvői rutin',
    ],
    coverImage: null,
    galleryImages: [],
    contact: {
      name: 'Profi Hangrendszer',
      role: 'DJ',
      email: 'info@profihangrendszer.hu',
      phone: '+36 30 123 4567',
    },
  },
  {
    slug: 'fotos',
    category: 'Fotós',
    accent: 'A pillanatok megörökítője.',
    tagline: 'Egyetlen kattintás, örök emlék.',
    description: [
      'A legjobb pillanatok azok, amelyeket újra és újra át lehet élni. Fotós partnereink művészi szemmel és professzionális technikával örökítik meg az est legszebb momentumait.',
      'Az eredmény nem csupán fotó — hanem hangulat, érzelem és emlékezés egyetlen képben.',
    ],
    highlights: [
      'Művészi megközelítés',
      'Természetes pillanatok',
      'Prémium minőség',
      'Gyors feldolgozás',
    ],
    coverImage: null,
    galleryImages: [],
    contact: {
      name: 'Profi Fotós',
      role: 'Fotós',
      email: 'info@profihangrendszer.hu',
      phone: '+36 30 123 4567',
    },
  },
  {
    slug: 'videos',
    category: 'Videós',
    accent: 'Mozgóképben rögzített emlékek.',
    tagline: 'Az este, ahogy valóban történt.',
    description: [
      'A videó az egyetlen médium, ami visszaadja a mozgást, a hangot és az érzelmek dinamikáját. Videós partnereink filmes minőségben dokumentálják az eseményt.',
      'Legyen szó rövid összefoglalóról vagy teljes estés felvételről — a végeredmény mindig cinematic élmény.',
    ],
    highlights: [
      'Cinematic minőség',
      'Professzionális vágás',
      'Drónfelvételek',
      'Hangulat film',
    ],
    coverImage: null,
    galleryImages: [],
    contact: {
      name: 'Profi Videós',
      role: 'Videós',
      email: 'info@profihangrendszer.hu',
      phone: '+36 30 123 4567',
    },
  },
  {
    slug: 'sminkes',
    category: 'Sminkes',
    accent: 'A tökéletes megjelenés mestere.',
    tagline: 'Szépség, ami magabiztosságot ad.',
    description: [
      'A megjelenés az önbizalom alapja. Sminkes partnereink a legújabb technikákkal és prémium termékekkel dolgoznak, hogy a vendégek és modellek tökéletesen nézzenek ki.',
      'Az esküvői smink nem csupán szépítés — ez egy művészeti forma, ami kiemeli a természetes vonásokat és tartós eleganciát biztosít.',
    ],
    highlights: [
      'Prémium termékek',
      'Tartós technikák',
      'Természetes elegancia',
      'Személyre szabott look',
    ],
    coverImage: null,
    galleryImages: [],
    contact: {
      name: 'Profi Sminkes',
      role: 'Sminkes',
      email: 'info@profihangrendszer.hu',
      phone: '+36 30 123 4567',
    },
  },
  {
    slug: 'dekor',
    category: 'Dekor',
    accent: 'A vizuális élmény megteremtője.',
    tagline: 'Ahol a részletek mesélnek.',
    description: [
      'A dekoráció az, ami egy teret igazán esküvői helyszínné varázsol. Dekor partnereink precíz ízléssel és kreatív szemlélettel hozzák létre azt a vizuális világot, ami az élményt teljessé teszi.',
      'Virágok, textúrák, fények és apró részletek — minden elem összhangban van, hogy koherens és lenyűgöző összképet alkosson.',
    ],
    highlights: [
      'Egyedi koncepció',
      'Virágkompozíciók',
      'Fénydekoráció',
      'Összehangolt részletek',
    ],
    coverImage: null,
    galleryImages: [],
    contact: {
      name: 'Profi Dekor',
      role: 'Dekor',
      email: 'info@profihangrendszer.hu',
      phone: '+36 30 123 4567',
    },
  },
  {
    slug: 'vofely',
    category: 'Vőfély',
    accent: 'A hagyomány és az est vezetője.',
    tagline: 'A ceremóniamester, aki összefogja az estét.',
    description: [
      'A vőfély az, aki az egész estet összetartja — biztosítja a folyamatos programot, a hagyományok betartását és azt, hogy minden vendég jól érezze magát.',
      'Partnereink tapasztalt, karizmatikus szakemberek, akik modern stílusban, mégis a magyar esküvői hagyományok tiszteletben tartásával vezetik az estét.',
    ],
    highlights: [
      'Tapasztalt ceremóniamester',
      'Modern stílus',
      'Magyar hagyományok',
      'Folyamatos program',
    ],
    coverImage: null,
    galleryImages: [],
    contact: {
      name: 'Profi Vőfély',
      role: 'Vőfély',
      email: 'info@profihangrendszer.hu',
      phone: '+36 30 123 4567',
    },
  },
];

export default vendors;

export function getVendorBySlug(slug) {
  return vendors.find((v) => v.slug === slug) ?? null;
}
