# Nova Leads - Premium Business Website

A futuristic, high-performance multi-page business website built with Next.js 14, featuring AI-powered lead generation and sales automation services. This project showcases modern web development practices with stunning animations, accessibility features, and SEO optimization.

![Nova Leads](https://via.placeholder.com/1200x630/0ea5e9/ffffff?text=Nova+Leads)

## 🚀 Features

### Pages (8 Total)
1. **Home** - Hero section, services overview, social proof, featured case studies
2. **About** - Company story, values, team cards with profiles
3. **Services** - Overview of 3 main services with detailed descriptions
4. **Service Detail** - Dynamic routes for each service (`/services/[slug]`)
5. **Pricing** - 3 pricing tiers + add-ons section
6. **Case Studies** - Listing of success stories
7. **Case Study Detail** - Dynamic routes for each case study (`/work/[slug]`)
8. **Contact** - Form with validation, contact info, map placeholder, FAQ section

### Design & UX
- 🎨 **Futuristic Design** - Clean, high-end "agency" aesthetic with strong typography
- ✨ **Premium Animations** - Framer Motion powered smooth transitions and section reveals
- 🎯 **Responsive** - Mobile-first design, works flawlessly on all devices
- 🌈 **Gradient Accents** - Subtle gradient effects throughout
- 💎 **Glass Morphism** - Modern glassmorphic UI elements

### Functionality
- ⚡ **Command Palette** - Quick navigation with ⌘K shortcut
- 📝 **Contact Form** - Zod validation, API route handler (mock)
- 📧 **Newsletter** - Subscribe form with validation
- 🔍 **Search** - Local search through command palette
- 🎯 **Sticky Navbar** - Active page/section state
- 📱 **Mobile Menu** - Smooth animated mobile navigation

### Performance & Accessibility
- 🚀 **Lighthouse Optimized** - High performance scores
- ♿ **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- 🎭 **Respects Motion** - Honors `prefers-reduced-motion`
- 🌐 **SEO Ready** - Meta tags, Open Graph, JSON-LD schemas
- 📊 **Analytics Ready** - Structured for easy analytics integration

### Technical Features
- 💻 **Next.js 14** - App Router, Server Components
- 🎨 **Tailwind CSS** - Custom design system with animations
- 🎬 **Framer Motion** - Smooth, performant animations
- ✅ **TypeScript** - Full type safety
- 📦 **Content System** - Easy to edit content in `/content`
- 🗺️ **Sitemap & Robots** - Automatic generation
- 🔍 **JSON-LD** - Organization & LocalBusiness schemas

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Validation:** Zod
- **Command Palette:** cmdk
- **Icons:** Lucide React
- **Fonts:** Inter, Cal Sans

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone or navigate to the project:**
```bash
cd nova-leads
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
nova-leads/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── api/                      # API routes
│   │   └── contact/              # Contact form handler
│   ├── contact/                  # Contact page
│   ├── pricing/                  # Pricing page
│   ├── services/                 # Services listing
│   │   └── [slug]/              # Dynamic service pages
│   ├── work/                     # Case studies listing
│   │   └── [slug]/              # Dynamic case study pages
│   ├── fonts/                    # Local fonts
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── loading.tsx               # Root loading state
│   ├── page.tsx                  # Home page
│   ├── robots.ts                 # Robots.txt
│   └── sitemap.ts                # Sitemap generator
├── components/                   # React components
│   ├── about/                    # About page components
│   ├── case-studies/             # Case studies components
│   ├── contact/                  # Contact page components
│   ├── home/                     # Home page components
│   ├── layout/                   # Layout components (Navbar, Footer)
│   ├── pricing/                  # Pricing page components
│   ├── seo/                      # SEO components (JSON-LD)
│   ├── services/                 # Services components
│   ├── ui/                       # Reusable UI components
│   └── command-palette.tsx       # ⌘K command palette
├── content/                      # Content management
│   ├── case-studies.ts           # Case studies data
│   ├── faq.ts                    # FAQ content
│   ├── pricing.ts                # Pricing tiers & add-ons
│   ├── services.ts               # Services data
│   └── team.ts                   # Team members
├── lib/                          # Utility functions
│   ├── hooks/                    # Custom React hooks
│   ├── validations/              # Zod schemas
│   ├── constants.ts              # Site configuration
│   └── utils.ts                  # Helper functions
├── public/                       # Static assets
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## 🎨 Customization

### Update Site Information

Edit `/lib/constants.ts`:
```typescript
export const SITE_CONFIG = {
  name: "Your Company Name",
  description: "Your description",
  url: "https://yoursite.com",
  // ... more config
};
```

### Edit Content

All content is centralized in the `/content` folder for easy editing:

- **Services:** `/content/services.ts`
- **Case Studies:** `/content/case-studies.ts`
- **Pricing:** `/content/pricing.ts`
- **Team:** `/content/team.ts`
- **FAQ:** `/content/faq.ts`

### Customize Colors

Edit `/tailwind.config.ts`:
```typescript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
},
```

### Add New Pages

1. Create a new folder in `/app`
2. Add `page.tsx` for the page content
3. Add `loading.tsx` for the loading state (optional)
4. Update navigation in `/lib/constants.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Self-hosted with Docker

Build command: `npm run build`
Start command: `npm run start`

## 🌐 SEO Features

- ✅ Per-page metadata with Open Graph images
- ✅ JSON-LD structured data (Organization, LocalBusiness, Service)
- ✅ Automatic sitemap generation
- ✅ Robots.txt configuration
- ✅ Semantic HTML structure
- ✅ Optimized images with next/image
- ✅ Mobile-friendly responsive design

## ♿ Accessibility

- ✅ Semantic HTML elements
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus visible states
- ✅ Respects prefers-reduced-motion
- ✅ Color contrast compliance
- ✅ Screen reader friendly

## 📝 Content Language

All content is in **Hungarian** for authenticity, featuring:
- Professional business copy
- 3 detailed case studies with real metrics
- Complete service descriptions
- Team member bios
- Comprehensive FAQ section

## 🎯 Key Features Showcase

### Command Palette (⌘K)
Press `⌘K` (Mac) or `Ctrl+K` (Windows/Linux) to open the command palette for quick navigation.

### Smooth Animations
- Page transitions
- Section reveals on scroll
- Hover effects
- Loading states
- Micro-interactions

### Form Validation
Contact and newsletter forms use Zod for robust validation with friendly error messages.

### Responsive Design
Tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🐛 Development

### Run Linting
```bash
npm run lint
```

### Check Types
```bash
npx tsc --noEmit
```

## 📄 License

This project is a portfolio demonstration. Feel free to use it as a reference for your own projects.

## 🤝 Contributing

This is a showcase project, but suggestions and improvements are welcome!

## 📧 Contact

For questions or feedback about this project:
- Email: hello@novaleads.hu
- Website: [Nova Leads](https://novaleads.hu)

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS
