# Quick Start Guide

## 🚀 Get Started in 3 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Test A/B Variants

### Variant A (Direct Value Proposition)
```
http://localhost:3000/?v=a
```
- Centered hero layout
- Animated gradient background
- Standard CTA copy

### Variant B (Outcome-Driven)
```
http://localhost:3000/?v=b
```
- Split hero layout with form
- Video background
- Bold promise headline (3x growth)

## 📝 Test the Form

1. Navigate to the hero section
2. Fill in email (required): `test@example.com`
3. Add name and company size (optional)
4. Click submit
5. You'll be redirected to `/thanks`
6. Check console for tracking events

## 🔍 View Console Logs

Open browser DevTools (F12) to see:
- ✅ Page view events
- ✅ CTA click events
- ✅ Form submission events
- ✅ API responses

All events are logged with variant information for easy A/B analysis.

## 🎨 Customize Content

### Change Headlines
Edit `src/lib/variants.ts`:
```typescript
export const variantConfigs: Record<VariantType, VariantConfig> = {
  a: {
    headline: 'Your New Headline Here',
    // ...
  },
  // ...
}
```

### Update Use Cases
Edit `src/components/UseCaseCarousel.tsx`:
```typescript
const useCases: UseCase[] = [
  {
    title: 'Your Use Case',
    description: 'Description here',
    // ...
  },
  // ...
]
```

### Modify FAQ
Edit `src/components/FAQSection.tsx`:
```typescript
const faqs: FAQ[] = [
  {
    question: 'Your question?',
    answer: 'Your answer here.',
  },
  // ...
]
```

## 🎥 Change Video Background

Edit `src/components/VideoBackground.tsx`:
```typescript
const defaultVideoUrl = 'YOUR_VIDEO_URL_HERE.mp4';
```

**Free video sources:**
- [Coverr](https://coverr.co/) - Free stock videos
- [Pexels Videos](https://www.pexels.com/videos/)
- [Pixabay Videos](https://pixabay.com/videos/)

## 🖼️ Update Gallery Images

Edit `src/components/GallerySection.tsx`:
```typescript
const galleryImages: GalleryImage[] = [
  {
    url: 'YOUR_IMAGE_URL',
    alt: 'Description',
    caption: 'Caption text',
  },
  // ...
]
```

**Free image sources:**
- [Unsplash](https://unsplash.com/) - High-quality free images
- [Pexels](https://www.pexels.com/) - Free stock photos

## 🎨 Change Color Scheme

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#YOUR_COLOR',
    600: '#YOUR_COLOR',
    // ...
  },
}
```

## 📧 Connect Email Service

1. Sign up for an email service (SendGrid, Mailchimp, etc.)
2. Get your API key
3. Edit `src/app/api/subscribe/route.ts`
4. Uncomment and configure the integration code

## 📊 Add Google Analytics

1. Create GA4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Edit `src/lib/tracking.ts`
4. Uncomment GA4 integration code
5. Add your Measurement ID

## 🔨 Build for Production

```bash
# Create production build
npm run build

# Test production build locally
npm start
```

## 🚀 Deploy

### Vercel (Easiest)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
1. Push code to GitHub
2. Connect repository to your hosting platform
3. Set build command: `npm run build`
4. Set start command: `npm start`

## 📱 Test Mobile Experience

1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select mobile device
4. Scroll down to see sticky bottom CTA bar

## 🎯 Next Steps

1. ✅ Customize content for your industry
2. ✅ Replace placeholder images/videos
3. ✅ Configure email integration
4. ✅ Set up analytics tracking
5. ✅ Test both A/B variants thoroughly
6. ✅ Deploy to production
7. ✅ Monitor conversion metrics

## 💡 Pro Tips

- **Test forms**: Always test the complete user journey
- **Check mobile**: 60%+ of traffic is mobile
- **Optimize images**: Compress before uploading
- **Test load speed**: Use Google PageSpeed Insights
- **Monitor analytics**: Track which variant performs better
- **Iterate**: Use data to continuously improve

## 🆘 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Check for TypeScript errors
npx tsc --noEmit

# Run linter
npm run lint
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)

---

**Need help?** Check the main README.md or contact support.
