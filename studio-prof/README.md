# 🚀 Conversion-Focused Campaign Landing Page

A modern, high-converting landing page template built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features A/B testing capabilities, event tracking hooks, and professional Hungarian copy.

## ✨ Features

### 🎯 Core Functionality
- **A/B Testing Ready**: Built-in variant support via query parameters (`?v=a` or `?v=b`)
- **Event Tracking Hooks**: Pre-configured tracking for page views, CTA clicks, and form submissions
- **Form Validation**: React Hook Form + Zod schema validation
- **Responsive Design**: Mobile-first approach with sticky mobile CTA bar
- **Accessibility**: Reduced motion support and semantic HTML

### 🎨 Design Components
- **Hero Section**: 
  - Variant A: Centered layout with animated gradient mesh background
  - Variant B: Split layout with video background
- **Social Proof**: Animated stats counter and "As Seen In" section
- **Use Case Carousel**: Swipeable cards with auto-rotation
- **Modern Gallery**: Masonry grid with lightbox modal
- **Comparison Table**: "Us vs. Typical" feature comparison
- **FAQ Accordion**: Smooth animations with expand/collapse
- **Final CTA**: Full section + sticky mobile bottom bar
- **Thank You Page**: Clean post-submission experience

### 🛠 Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form + Zod
- **State Management**: React hooks (no heavy libraries)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Setup

1. **Clone or download the project**
```bash
cd studio-prof
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### A/B Testing

Access different variants using query parameters:

- **Variant A** (Direct Value Proposition): `http://localhost:3000/?v=a`
- **Variant B** (Outcome-Driven): `http://localhost:3000/?v=b`

#### Variant Differences:

**Variant A:**
- Centered hero layout
- Animated gradient mesh background
- Direct value proposition headline
- CTA: "Kezdje el ingyen"

**Variant B:**
- Split hero layout with form on right
- Video background (professional business video)
- Outcome-driven headline (3x growth promise)
- CTA: "Igen, nézze meg hogyan"
- Feature list with checkmarks

### Event Tracking

The landing page includes pre-configured tracking hooks with console output. To integrate with Google Analytics 4:

1. **Open `src/lib/tracking.ts`**
2. **Uncomment the GA4 integration code**
3. **Add your GA4 Measurement ID**
4. **Replace console.log statements with actual gtag calls**

Example tracking events:
- `trackPageView(variant, 'landing')` - Page views
- `trackCTA(variant, 'hero-form', ctaText)` - CTA clicks
- `trackFormSubmit(variant, 'hero-form', success)` - Form submissions

### Form Integration

The subscribe form currently uses a mock API endpoint. To integrate with your backend:

1. **Open `src/app/api/subscribe/route.ts`**
2. **Implement your email service provider integration** (SendGrid, Mailchimp, etc.)
3. **Add database storage** (Prisma, MongoDB, etc.)
4. **Configure CRM integration** (HubSpot, Salesforce, etc.)

Example integrations are included as comments in the file.

## 📁 Project Structure

```
studio-prof/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── subscribe/
│   │   │       └── route.ts          # API endpoint for form submission
│   │   ├── thanks/
│   │   │   └── page.tsx              # Thank you page
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Main landing page
│   │   └── globals.css               # Global styles
│   ├── components/
│   │   ├── AnimatedBackground.tsx    # Gradient mesh animation
│   │   ├── VideoBackground.tsx       # Video background component
│   │   ├── HeroSection.tsx           # Hero with variants
│   │   ├── HeroForm.tsx              # Email capture form
│   │   ├── ProofSection.tsx          # Stats & social proof
│   │   ├── UseCaseCarousel.tsx       # Swipeable carousel
│   │   ├── GallerySection.tsx        # Masonry gallery with lightbox
│   │   ├── ComparisonSection.tsx     # Feature comparison table
│   │   ├── FAQSection.tsx            # Accordion FAQ
│   │   └── FinalCTASection.tsx       # Final CTA + sticky bar
│   └── lib/
│       ├── variants.ts               # A/B variant configuration
│       ├── tracking.ts               # Analytics hooks
│       ├── schemas.ts                # Zod validation schemas
│       └── utils.ts                  # Utility functions
├── public/                           # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## 🎨 Customization

### Changing Copy

All copy is in Hungarian and can be easily modified:

1. **Variant Headlines**: Edit `src/lib/variants.ts`
2. **Use Cases**: Modify the `useCases` array in `src/components/UseCaseCarousel.tsx`
3. **FAQ Content**: Update the `faqs` array in `src/components/FAQSection.tsx`
4. **Comparison Table**: Edit `comparisonData` in `src/components/ComparisonSection.tsx`

### Styling

The project uses Tailwind CSS with a custom color palette:

- Primary colors defined in `tailwind.config.ts`
- Global styles in `src/app/globals.css`
- Component-specific styles use Tailwind utility classes

### Images & Videos

**Gallery Images**: 
- Edit the `galleryImages` array in `src/components/GallerySection.tsx`
- Uses Unsplash for high-quality stock photos
- Configure Next.js Image domains in `next.config.js`

**Video Background**:
- Default video from Coverr (free stock videos)
- Change URL in `src/components/VideoBackground.tsx`
- Ensure video is optimized for web (< 5MB recommended)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

Compatible with:
- Vercel
- Netlify
- AWS Amplify
- Railway
- Any Node.js hosting

## ⚡ Performance

The landing page is optimized for performance:

- **No layout shift**: Reserved space for images and animated elements
- **CSS transforms**: Hardware-accelerated animations
- **Lazy loading**: Components load as they enter viewport
- **Image optimization**: Next.js Image component
- **Reduced motion**: Respects user preferences
- **Code splitting**: Automatic by Next.js

## 🔒 Privacy & Compliance

- GDPR-compliant form handling
- No tracking without consent (implement cookie banner if needed)
- Secure form submission over HTTPS
- Data validation on both client and server

## 📊 A/B Testing Strategy

### Metrics to Track

1. **Page Views**: Total visitors per variant
2. **CTA Clicks**: Click-through rate by location
3. **Form Submissions**: Conversion rate per variant
4. **Form Completion Time**: User engagement indicator
5. **Scroll Depth**: Content engagement

### Recommended Testing Duration

- Minimum 2 weeks
- At least 100 conversions per variant
- Statistical significance: 95% confidence level

### Analysis Tools

Integrate with:
- Google Analytics 4
- Google Optimize
- Hotjar (heatmaps)
- Microsoft Clarity (session recordings)

## 🛠 Development

### Available Scripts

```bash
# Development
npm run dev           # Start dev server

# Production
npm run build         # Build for production
npm run start         # Start production server

# Code Quality
npm run lint          # Run ESLint
```

### Environment Variables

Create a `.env.local` file for sensitive data:

```env
# Email Service
SENDGRID_API_KEY=your_key_here

# Database
DATABASE_URL=your_database_url

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# CRM
HUBSPOT_API_KEY=your_key_here
```

## 🤝 Component Reusability

This template is designed for easy reuse across industries:

1. **Copy is centralized**: Easy to find and replace
2. **Components are modular**: Mix and match sections
3. **Styling is consistent**: Tailwind utilities throughout
4. **Types are defined**: TypeScript for safety

### Quick Industry Adaptation

To adapt for a different industry:

1. Update copy in `src/lib/variants.ts`
2. Change use cases in carousel
3. Modify comparison table features
4. Update FAQ questions
5. Replace gallery images
6. Adjust color scheme in `tailwind.config.ts`

## 📝 License

This project is private and proprietary.

## 💬 Support

For questions or issues:
- Email: hello@studioprof.hu
- Phone: +36 30 123 4567

## 🎯 Conversion Optimization Tips

1. **Above the fold**: Keep the most important CTA visible
2. **Social proof**: Place testimonials strategically
3. **Urgency**: Consider adding countdown timers
4. **Trust signals**: Display security badges prominently
5. **Mobile optimization**: 60%+ of traffic is mobile
6. **Load speed**: Aim for < 3 seconds
7. **Clear CTA**: Use action-oriented button text
8. **Reduce friction**: Minimize required form fields

## 🔄 Roadmap

Future enhancements to consider:

- [ ] Multi-language support (i18n)
- [ ] Blog/content section
- [ ] Live chat integration
- [ ] Exit-intent popup
- [ ] Pricing page
- [ ] Customer testimonial video section
- [ ] Interactive ROI calculator
- [ ] Integration marketplace page

---

**Built with ❤️ for high-converting campaigns**
