# Quick Start Guide

## 🚀 Installation

If you encounter npm cache permission issues, try one of these methods:

### Method 1: Fix npm cache permissions (Recommended)

```bash
sudo chown -R $(whoami) ~/.npm
cd /Users/buchsbaummiklos/Projects/work/atlas-cons
npm install
npm run dev
```

### Method 2: Use a temporary cache

```bash
cd /Users/buchsbaummiklos/Projects/work/atlas-cons
npm install --cache=/tmp/npm-cache
npm run dev
```

### Method 3: Use yarn or pnpm instead

```bash
# Using yarn
yarn install
yarn dev

# Using pnpm
pnpm install
pnpm dev
```

## 📦 What's Included

### Complete Landing Page with:

✅ **Hero Section** - Eye-catching headline with animated gradients and CTAs  
✅ **Social Proof** - Company logos and metric cards  
✅ **Problem/Solution** - Two-column sections with illustrations  
✅ **Benefits Grid** - 6 feature cards with icons  
✅ **Process Timeline** - 4-step workflow visualization  
✅ **Testimonials** - 3 client reviews with star ratings  
✅ **Pricing Tables** - 3-tier pricing with "Most Popular" highlight  
✅ **FAQ Accordion** - 6 common questions  
✅ **Final CTA** - Conversion-focused banner  
✅ **Footer** - Links, contact info, and legal  

### Key Features:

✅ **Bilingual Support** - English & Hungarian (toggle in header)  
✅ **Dark/Light Theme** - Automatic system detection + manual toggle  
✅ **Contact Form** - Full validation with Zod + React Hook Form  
✅ **Lead API** - POST endpoint at `/api/lead` (ready for CRM integration)  
✅ **SEO Optimized** - Meta tags, OG tags, JSON-LD, sitemap  
✅ **Analytics Ready** - Event tracking placeholders for GA4/Meta Pixel  
✅ **Animations** - Framer Motion with reduced-motion support  
✅ **Fully Responsive** - Mobile, tablet, desktop optimized  

## 🎨 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Theme**: next-themes

## 🔧 Key Files to Customize

1. **Copy/Content**: `lib/translations.ts`
2. **Branding/Colors**: `tailwind.config.ts` + `app/globals.css`
3. **Lead Integration**: `app/api/lead/route.ts`
4. **Analytics**: `lib/analytics.ts`
5. **SEO Metadata**: `app/layout.tsx`

## 📝 Next Steps

1. **Install dependencies** (see methods above)
2. **Run `npm run dev`** and open http://localhost:3000
3. **Test the contact form** - Check console for lead submissions
4. **Switch themes** - Toggle light/dark mode
5. **Change language** - Toggle EN/HU
6. **Customize copy** - Edit `lib/translations.ts`
7. **Add your branding** - Update colors in Tailwind config
8. **Integrate CRM** - Add your service in `app/api/lead/route.ts`
9. **Add analytics** - Set up GA4/Meta Pixel in `lib/analytics.ts`
10. **Build for production** - Run `npm run build`

## 🐛 Common Issues

### TypeScript errors?
```bash
npx tsc --noEmit
```

### Build errors?
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Port 3000 in use?
```bash
npm run dev -- -p 3001
```

## 📞 Need Help?

Check the main `README.md` for detailed documentation on:
- Analytics integration
- Database/CRM setup
- Email service configuration
- Deployment guides
- Advanced customization

---

**Ready to build something amazing! 🚀**
