# Atlas Consultancy - Premium Landing Page

A production-ready, modern, high-converting landing page built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **🚀 Next.js 14** - App Router with React Server Components
- **💎 Premium Design** - Modern UI with glassmorphism, gradients, and subtle animations
- **🌍 Bilingual Support** - English and Hungarian language toggle
- **🌓 Dark/Light Theme** - System-aware theme switching
- **📱 Fully Responsive** - Mobile-first design that works on all devices
- **⚡ Performance Optimized** - Sub-second load times, optimized images, dynamic imports
- **♿ Accessible** - Respects reduced-motion preferences, keyboard navigation
- **📊 Analytics Ready** - Built-in event tracking (ready for GA4/Meta Pixel)
- **✉️ Lead Capture** - Contact form with validation and success states
- **🎨 Micro-interactions** - Hover states, button press animations, section reveals
- **🔍 SEO Optimized** - Meta tags, OG tags, JSON-LD structured data, sitemap, robots.txt

## 📁 Project Structure

```
atlas-cons/
├── app/
│   ├── api/
│   │   └── lead/
│   │       └── route.ts          # Lead submission API endpoint
│   ├── globals.css               # Global styles and custom CSS
│   ├── layout.tsx                # Root layout with SEO metadata
│   ├── page.tsx                  # Main landing page
│   ├── providers.tsx             # Theme and language providers
│   └── sitemap.ts                # Dynamic sitemap
├── components/
│   ├── sections/
│   │   ├── hero.tsx              # Hero section
│   │   ├── social-proof.tsx      # Social proof section
│   │   ├── problem-solution.tsx  # Problem/Solution sections
│   │   ├── benefits.tsx          # Benefits grid (6 cards)
│   │   ├── process.tsx           # Process timeline (4 steps)
│   │   ├── testimonials.tsx      # Testimonials (3 cards)
│   │   ├── pricing.tsx           # Pricing tiers (3 plans)
│   │   ├── faq.tsx               # FAQ accordion
│   │   └── final-cta.tsx         # Final CTA banner
│   ├── ui/
│   │   ├── button.tsx            # Animated button component
│   │   ├── modal.tsx             # Modal dialog component
│   │   ├── section.tsx           # Section wrapper
│   │   └── container.tsx         # Container wrapper
│   ├── contact-form.tsx          # Lead capture form
│   ├── header.tsx                # Navigation header
│   └── footer.tsx                # Footer
├── lib/
│   ├── translations.ts           # EN/HU translations
│   ├── language-context.tsx      # Language provider
│   ├── analytics.ts              # Analytics utilities
│   └── utils.ts                  # Helper functions
├── public/
│   └── robots.txt                # Robots.txt for SEO
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Run the development server:**

```bash
npm run dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Color Palette

The design uses CSS custom properties for theming:

- **Primary**: Purple gradient (`hsl(262 83% 58%)`)
- **Background**: White/Dark gray
- **Foreground**: Dark/Light text
- **Muted**: Subtle text and backgrounds
- **Accent**: Interactive elements

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes (4xl-8xl)
- **Body**: Regular, readable (base-xl)

### Spacing

Consistent spacing using Tailwind's spacing scale (4, 8, 12, 16, 20, 24, 32, etc.)

### Animations

All animations use Framer Motion and respect `prefers-reduced-motion`:

- **Hero**: Gradient orbs, fade-in animations
- **Sections**: Scroll-triggered reveals
- **Cards**: Hover lift effects
- **Buttons**: Press and hover states
- **Modal**: Scale and fade animations

## 🌍 Language Support

The site supports English and Hungarian. To add more languages:

1. **Add translations to `lib/translations.ts`:**

```typescript
export const translations = {
  en: { ... },
  hu: { ... },
  de: { ... }, // Add German
}
```

2. **Update the Language type:**

```typescript
export type Language = 'en' | 'hu' | 'de'
```

3. **Update the language toggle in `components/header.tsx`**

## 📊 Analytics Integration

### Setup Google Analytics 4

1. **Add your GA4 measurement ID to `app/layout.tsx`:**

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
```

2. **Update `lib/analytics.ts`:**

```typescript
export const analytics = {
  track: (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, properties)
    }
  },
}
```

### Setup Meta Pixel

1. **Add Meta Pixel script to `app/layout.tsx`**

2. **Update `lib/analytics.ts` with Meta Pixel tracking**

### Tracked Events

- `page_view` - Page visits
- `form_submit` - Form submissions
- `cta_click` - CTA button clicks
- `pricing_view` - Pricing plan views
- `nav_click` - Navigation clicks
- `language_change` - Language switches

## ✉️ Lead Management

### Current Setup

Leads are currently stored in memory and logged to the console. This is for demonstration only.

### Integration Options

#### Option 1: Database Storage

**PostgreSQL with Prisma:**

```bash
npm install @prisma/client prisma
npx prisma init
```

Update `app/api/lead/route.ts` to use Prisma.

**Supabase:**

```bash
npm install @supabase/supabase-js
```

#### Option 2: CRM Integration

**HubSpot:**

```bash
npm install @hubspot/api-client
```

**Salesforce:**

```bash
npm install jsforce
```

#### Option 3: Email Notifications

**Resend:**

```bash
npm install resend
```

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'leads@atlascons.com',
  to: 'sales@atlascons.com',
  subject: `New lead from ${name}`,
  html: `...`,
})
```

**SendGrid:**

```bash
npm install @sendgrid/mail
```

### Update Lead Endpoint

Edit `app/api/lead/route.ts` and replace the `TODO` comments with your integration.

## 🔐 Environment Variables

Create a `.env.local` file:

```env
# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXX

# Lead Management
RESEND_API_KEY=re_xxxxxxxxxxxx
# or
SENDGRID_API_KEY=SG.xxxxxxxxxxxx

# Database (if using)
DATABASE_URL=postgresql://...
# or
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx

# CRM (if using)
HUBSPOT_API_KEY=xxx
```

## 🎯 SEO Checklist

- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (Organization, WebSite)
- ✅ Sitemap (automatically generated)
- ✅ Robots.txt
- ⬜ Add Google Search Console verification
- ⬜ Add Bing Webmaster Tools verification
- ⬜ Update OG image (`public/og-image.jpg`)
- ⬜ Update favicon (`public/favicon.ico`)

## 📱 Performance Optimizations

- **Dynamic Imports**: Large components loaded on demand
- **Image Optimization**: Next.js Image component with AVIF/WebP
- **Font Optimization**: Next.js Font with preloading
- **Code Splitting**: Automatic route-based splitting
- **CSS Optimization**: Tailwind CSS purging unused styles
- **Bundle Analysis**: Run `npm run build` to see bundle size

## 🧪 Testing

```bash
# Run linter
npm run lint

# Type check
npx tsc --noEmit

# Build test
npm run build
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy

### Netlify

```bash
npm run build
# Upload .next folder
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## 📝 Customization Guide

### Change Brand Colors

Edit `tailwind.config.ts` and `app/globals.css`:

```css
:root {
  --primary: 262 83% 58%; /* Your brand color */
}
```

### Update Copy

Edit `lib/translations.ts` - all text content is centralized here.

### Add/Remove Sections

Edit `app/page.tsx` and add/remove section components.

### Modify Form Fields

Edit `components/contact-form.tsx` and update the Zod schema.

### Change Pricing Plans

Edit the pricing section in `lib/translations.ts`.

## 🐛 Troubleshooting

### Hydration Errors

If you see hydration errors, ensure:
- Theme provider is properly initialized
- No mismatched HTML between server and client
- Use `suppressHydrationWarning` on `<html>` tag

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Type Errors

```bash
# Regenerate types
npx tsc --noEmit
```

## 📄 License

This project is private and proprietary.

## 🤝 Support

For questions or support, contact:
- Email: hello@atlascons.com
- Phone: +1 (555) 123-4567

---

**Built with ❤️ by Atlas Consultancy**
