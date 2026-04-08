/**
 * Central vendor data source.
 *
 * ── Field guide ──────────────────────────────────────────────
 *  slug          URL-safe identifier (used in /szolgaltatok/:slug)
 *  category      Display name shown everywhere
 *  name          Vendor / business name
 *  accent        One-liner shown in the listing on the homepage
 *  tagline       Short poetic line displayed under the title on the detail page
 *  description   Array of paragraph strings — the main body text
 *  highlights    Array of short strings — key qualities / selling points
 *  coverImage    Path or URL for the hero/cover image (import or public path)
 *  galleryImages Array of { src, alt } objects for the gallery grid
 *  contact       { name, role, email, phone } — optional vendor contact info
 *  socials       { instagram, facebook, tiktok, website } — optional social links
 * ─────────────────────────────────────────────────────────────
 */

const vendors = [
  {
    slug: 'helyszin',
    category: 'Helyszín',
    name: 'Kristály Étterem',
    accent: 'Ahol az esküvő életre kel.',
    tagline: 'Győr szívében, ahol az ünnep méltó keretet kap.',
    description: [
      'A Kristály Étterem Győr egyik legismertebb rendezvényhelyszíne, ahol az elegancia és a gasztronómia találkozik. Az étterem különleges atmoszférát biztosít, amely tökéletes hátteret ad egy felejthetetlen esküvői élményhez.',
      'A gondosan megtervezett terek, a professzionális kiszolgálás és az ízletes menüsor garantálja, hogy a vendégek valódi esküvői hangulatot élhessenek át.',
    ],
    highlights: [
      'Elegáns rendezvénytermek',
      'Prémium gasztronómia',
      'Professzionális kiszolgálás',
      'Központi elhelyezkedés',
    ],
    coverImage: '/vendors/kristaly_etterem/kristaly_cover.jpg',
    galleryImages: [],
    contact: {
      name: 'Kristály Étterem',
      role: 'Helyszín',
    },
    socials: {
      instagram: 'https://www.instagram.com/kristalyetteremgyor',
      facebook: 'https://www.facebook.com/share/1EyeJURcGt/',
      website: 'https://www.kristalyetterem.hu',
    },
  },
  {
    slug: 'dj',
    category: 'DJ',
    name: 'DJ Ernő',
    accent: 'Az est hangulatának zenei irányítója.',
    tagline: 'A ritmus, ami összeköt.',
    description: [
      'DJ Ernő pontosan tudja, hogyan kell felépíteni egy estét — az érzelmes pillanatokból a felhőtlen buliig. Tapasztalata és stílusérzéke garantálja, hogy minden vendég megtalálja a maga ritmusát.',
      'Profi hangrendszerrel és személyre szabott playlisttel gondoskodik arról, hogy az est zenei világa tökéletesen illeszkedjen az esemény hangulatához.',
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
      name: 'DJ Ernő',
      role: 'DJ',
    },
    socials: {
      facebook: 'https://www.facebook.com/share/1Hk73fRJ4A/',
      tiktok: 'https://www.tiktok.com/@dj.rno',
    },
  },
  {
    slug: 'fotos',
    category: 'Fotós',
    name: 'Orosz Sanyi — Békés Fotó',
    accent: 'A pillanatok megörökítője.',
    tagline: 'Egyetlen kattintás, örök emlék.',
    description: [
      'Orosz Sanyi művészi szemmel és professzionális technikával örökíti meg az est legszebb momentumait. A Békés Fotó nevéhez méltóan nyugodt, természetes stílusban dolgozik, hogy az eredmény nem csupán fotó legyen — hanem hangulat, érzelem és emlékezés egyetlen képben.',
      'Tapasztalata és odafigyelése garantálja, hogy egyetlen fontos pillanat se maradjon ki.',
    ],
    highlights: [
      'Művészi megközelítés',
      'Természetes pillanatok',
      'Prémium minőség',
      'Gyors feldolgozás',
    ],
    coverImage: '/vendors/orosz/orosz_cover.jpg',
    galleryImages: [],
    contact: {
      name: 'Orosz Sanyi',
      role: 'Fotós',
    },
    socials: {
      facebook: 'https://www.facebook.com/share/18EaYNoq6Z/',
      website: 'https://bekesfoto.hu',
    },
  },
  {
    slug: 'sminkes',
    category: 'Sminkes',
    name: 'HD BeautyLand',
    accent: 'A tökéletes megjelenés mestere.',
    tagline: 'Szépség, ami magabiztosságot ad.',
    description: [
      'A HD BeautyLand a legújabb technikákkal és prémium termékekkel dolgozik, hogy a modellek és vendégek tökéletesen nézzenek ki az est során.',
      'Az esküvői smink nem csupán szépítés — ez egy művészeti forma, ami kiemeli a természetes vonásokat és tartós eleganciát biztosít. A HD BeautyLand szakértelmével minden részlet a helyére kerül.',
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
      name: 'HD BeautyLand',
      role: 'Sminkes',
    },
    socials: {
      instagram: 'https://www.instagram.com/hdbeautyland',
      facebook: 'https://www.facebook.com/share/1Jo4Q3u4fg/',
    },
  },
  {
    slug: 'dekor',
    category: 'Dekor',
    name: 'Devomax',
    accent: 'A vizuális élmény megteremtője.',
    tagline: 'Ahol a részletek mesélnek.',
    description: [
      'A Devomax csapata precíz ízléssel és kreatív szemlélettel hozza létre azt a vizuális világot, ami az élményt teljessé teszi. A dekoráció az, ami egy teret igazán esküvői helyszínné varázsol.',
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
      name: 'Devomax',
      role: 'Dekor',
    },
    socials: {
      facebook: 'https://www.facebook.com/share/1LfSUYhWux/',
      website: 'https://webshop.devomax.hu',
    },
  },
  {
    slug: 'szertartasvezeto',
    category: 'Szertartásvezető',
    name: 'Máté Lívia',
    accent: 'A szertartás szíve és lelke.',
    tagline: 'A ceremóniamester, aki összefogja az estét.',
    description: [
      'Máté Lívia szertartásvezetőként az egész estet összetartja — biztosítja a folyamatos programot, a megható pillanatokat és azt, hogy minden vendég jól érezze magát.',
      'Tapasztalt és karizmatikus szakember, aki modern stílusban, mégis szívből vezeti a szertartást. Személyes megközelítése garantálja, hogy az este minden pillanata különleges legyen.',
    ],
    highlights: [
      'Tapasztalt szertartásvezető',
      'Modern stílus',
      'Személyes megközelítés',
      'Megható ceremóniák',
    ],
    coverImage: null,
    galleryImages: [],
    contact: {
      name: 'Máté Lívia',
      role: 'Szertartásvezető',
    },
    socials: {
      website: 'https://szertartasvezetogyor.hu',
    },
  },
  {
    slug: 'photomirror',
    category: 'Photomirror',
    name: 'Photomirror Hungary',
    accent: 'Interaktív fotóélmény az estére.',
    tagline: 'A tükör, ami többet mutat.',
    description: [
      'A Photomirror Hungary egy különleges, interaktív fotóélményt biztosít az est során. A tükör fotóautomata nem csupán szórakozás — egyedi, azonnal kinyomtatott emlékeket készít minden vendég számára.',
      'A modern technológia és az elegáns design tökéletesen illeszkedik az esküvői hangulathoz, miközben garantáltan mindenkit megnevettet és emlékezetes pillanatokat teremt.',
    ],
    highlights: [
      'Interaktív élmény',
      'Azonnali nyomtatás',
      'Elegáns megjelenés',
      'Egyedi emlékek',
    ],
    coverImage: null,
    galleryImages: [],
    contact: {
      name: 'Photomirror Hungary',
      role: 'Tükör fotóautomata',
    },
    socials: {
      instagram: 'https://www.instagram.com/photomirrorhungary',
      facebook: 'https://www.facebook.com/share/1AtjVeoeAR/',
      website: 'https://photomirror.hu',
    },
  },
  {
    slug: '360-selfie',
    category: '360° Selfie',
    name: 'Vibe Selfie — Dobra Bence',
    accent: 'A party legmenőbb attrakcióját hozza.',
    tagline: '360 fokban az élmény.',
    description: [
      'A Vibe Selfie 360°-os fotóautomatája az est egyik leglátványosabb attrakcióját biztosítja. A vendégek egy forgó platformon állva készíthetnek lenyűgöző, cinematic videókat, amelyeket azonnal megoszthatnak közösségi felületeiken.',
      'Dobra Bence gondoskodik a profeszionális háttérről és arról, hogy a technológia zökkenőmentesen működjön — így a vendégeknek csak szórakozniuk kell.',
    ],
    highlights: [
      '360°-os videók',
      'Azonnali megosztás',
      'Látványos attrakció',
      'Professzionális felszerelés',
    ],
    coverImage: null,
    galleryImages: [],
    contact: {
      name: 'Dobra Bence',
      role: '360° Selfie automata',
    },
    socials: {
      instagram: 'https://www.instagram.com/vibe_selfie_fotoautomata',
      facebook: 'https://www.facebook.com/share/1ChT7Nhws1/',
      website: 'https://vibeselfie.hu',
    },
  },
];

export default vendors;

export function getVendorBySlug(slug) {
  return vendors.find((v) => v.slug === slug) ?? null;
}
