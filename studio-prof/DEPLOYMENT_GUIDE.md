# 🚀 Deployment Guide

Complete guide for deploying your landing page to production.

## 🎯 Pre-Deployment Checklist

### Content & Configuration
- [ ] All copy reviewed and finalized
- [ ] Hungarian text proofread (grammar, typos)
- [ ] Contact information updated (email, phone)
- [ ] Company name/branding correct
- [ ] Video URL configured (if using custom)
- [ ] Gallery images optimized and uploaded
- [ ] Social media links added
- [ ] Terms & Privacy pages created/linked

### Technical Setup
- [ ] Email service configured (SendGrid/Mailchimp)
- [ ] Database connected (if storing leads)
- [ ] Analytics tracking set up (GA4)
- [ ] Error tracking configured (Sentry)
- [ ] Environment variables set
- [ ] API endpoints tested
- [ ] Both variants tested (?v=a and ?v=b)
- [ ] Thank you page working
- [ ] Forms submitting successfully

### Testing
- [ ] Desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Mobile browsers (iOS Safari, Chrome)
- [ ] Tablet view tested
- [ ] Form validation working
- [ ] All links working
- [ ] Images loading correctly
- [ ] Video playing (if applicable)
- [ ] Page load speed < 3 seconds
- [ ] No console errors
- [ ] Lighthouse score > 90

### SEO & Meta
- [ ] Meta title set
- [ ] Meta description set
- [ ] Open Graph tags configured
- [ ] Favicon added
- [ ] robots.txt configured
- [ ] sitemap.xml generated
- [ ] Canonical URLs set

---

## 📋 Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel:**
- Created by Next.js team
- Zero configuration
- Automatic deployments
- Free SSL certificates
- Global CDN
- Excellent performance
- Free hobby tier

#### Steps:

1. **Install Vercel CLI** (optional)
```bash
npm i -g vercel
```

2. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_URL
git push -u origin main
```

3. **Deploy via Vercel Dashboard**
- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Connect GitHub repository
- Configure settings:
  - Framework: Next.js
  - Build Command: `npm run build`
  - Output Directory: `.next`
- Add environment variables
- Click "Deploy"

4. **Or Deploy via CLI**
```bash
vercel
```

#### Custom Domain
```bash
# Add custom domain
vercel domains add yourdomain.com

# Configure DNS
# A record: 76.76.21.21
# CNAME: cname.vercel-dns.com
```

#### Environment Variables
```bash
# Add via dashboard or CLI
vercel env add SENDGRID_API_KEY
vercel env add DATABASE_URL
vercel env add NEXT_PUBLIC_GA_MEASUREMENT_ID
```

---

### Option 2: Netlify

**Why Netlify:**
- Simple deployment
- Great for static sites
- Built-in forms (can replace API)
- A/B testing features
- Free tier available

#### Steps:

1. **Build the project**
```bash
npm run build
```

2. **Install Netlify CLI**
```bash
npm i -g netlify-cli
```

3. **Deploy**
```bash
netlify deploy --prod
```

4. **Or via Dashboard**
- Go to [netlify.com](https://netlify.com)
- Drag & drop `.next` folder
- Or connect GitHub repo

#### Configuration (netlify.toml)
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

---

### Option 3: Railway

**Why Railway:**
- Simple Node.js hosting
- Good for full-stack apps
- Database included
- Easy environment variables

#### Steps:

1. **Install Railway CLI**
```bash
npm i -g @railway/cli
```

2. **Login and Initialize**
```bash
railway login
railway init
```

3. **Deploy**
```bash
railway up
```

4. **Set Environment Variables**
```bash
railway variables set SENDGRID_API_KEY=your_key
```

---

### Option 4: DigitalOcean App Platform

**Why DigitalOcean:**
- Good pricing
- Scalable
- Database options
- Full control

#### Steps:

1. Push to GitHub
2. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
3. Create new app
4. Connect GitHub
5. Configure:
   - Build: `npm run build`
   - Run: `npm start`
6. Add environment variables
7. Deploy

---

### Option 5: AWS Amplify

**Why AWS:**
- Enterprise scale
- AWS ecosystem integration
- Global CDN
- Advanced features

#### Steps:

1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Click "Connect app"
3. Choose GitHub
4. Select repository
5. Configure build settings:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```
6. Add environment variables
7. Deploy

---

## 🔐 Environment Variables Setup

### Required Variables

```bash
# Production URL
NEXT_PUBLIC_APP_URL=https://yourdomain.com

# Email Service (choose one)
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxx
MAILCHIMP_API_KEY=xxxxxxxxxxxxxxxxxxxxxxx

# Database (if storing leads)
DATABASE_URL=postgresql://user:pass@host:5432/db

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# CRM (optional)
HUBSPOT_API_KEY=xxxxxxxxxxxxxxxxxxxxxxx
```

### How to Set (Vercel)
1. Go to project settings
2. Navigate to "Environment Variables"
3. Add each variable
4. Select environment (Production/Preview/Development)
5. Save and redeploy

---

## 📊 Post-Deployment Setup

### 1. Google Analytics 4

```typescript
// Edit src/lib/tracking.ts
// Uncomment GA4 integration code
// Add your Measurement ID

export function initTracking() {
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
}
```

### 2. Email Service (SendGrid Example)

```typescript
// Edit src/app/api/subscribe/route.ts
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

await sgMail.send({
  to: validatedData.email,
  from: 'hello@yourdomain.com',
  templateId: 'd-xxxxxxxxxxxxxxxxxxx',
  dynamicTemplateData: {
    name: validatedData.name || 'Kedves Ügyfél',
    variant: variant,
  },
});
```

### 3. Database (Prisma Example)

```bash
# Install Prisma
npm install @prisma/client
npm install -D prisma

# Initialize
npx prisma init

# Create schema (prisma/schema.prisma)
```

```prisma
model Subscriber {
  id          String   @id @default(cuid())
  email       String   @unique
  name        String?
  companySize String?
  variant     String
  createdAt   DateTime @default(now())
}
```

```bash
# Migrate
npx prisma migrate dev --name init
```

```typescript
// Use in API route
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

await prisma.subscriber.create({
  data: {
    email: validatedData.email,
    name: validatedData.name,
    companySize: validatedData.companySize,
    variant: variant,
  },
});
```

---

## 🔍 Monitoring & Analytics

### Google Analytics 4 Events

Track these events:
- `page_view` with variant
- `cta_click` with location
- `form_start`
- `form_submit`
- `form_error`

### Conversion Goals

Set up goals for:
1. Form submission (primary)
2. CTA clicks (secondary)
3. Scroll depth > 75%
4. Time on page > 2 minutes

### Google Search Console

1. Verify domain ownership
2. Submit sitemap
3. Monitor search performance
4. Check for crawl errors

### Hotjar or Microsoft Clarity

Add heatmap tracking:
```html
<!-- Add to layout.tsx <head> -->
<script>
  // Hotjar or Clarity script
</script>
```

---

## 🎯 A/B Testing Setup

### URL Structure
- Variant A: `yourdomain.com/?v=a`
- Variant B: `yourdomain.com/?v=b`

### Traffic Split (via CDN)

#### Cloudflare Workers
```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const variant = Math.random() < 0.5 ? 'a' : 'b';
  const url = new URL(request.url);
  url.searchParams.set('v', variant);
  return fetch(url);
}
```

#### Vercel Edge Config
```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const variant = Math.random() < 0.5 ? 'a' : 'b';
  const url = request.nextUrl.clone();
  url.searchParams.set('v', variant);
  return NextResponse.redirect(url);
}
```

---

## 📈 Performance Optimization

### Image Optimization
```bash
# Compress images before upload
npm install -g imagemin-cli

imagemin input/*.jpg --out-dir=output --plugin=mozjpeg
```

### Lighthouse Score
Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Load Testing
```bash
# Install k6
brew install k6  # macOS
choco install k6  # Windows

# Run load test
k6 run load-test.js
```

---

## 🔒 Security Checklist

- [ ] SSL certificate active (HTTPS)
- [ ] Environment variables secured
- [ ] API routes protected
- [ ] CORS configured correctly
- [ ] Rate limiting on API endpoints
- [ ] SQL injection prevention (Prisma handles)
- [ ] XSS protection (React handles)
- [ ] Content Security Policy set
- [ ] No sensitive data in client code

---

## 📱 Domain Configuration

### DNS Settings

For most providers:
```
Type    Name    Value                TTL
A       @       76.76.21.21         300
CNAME   www     cname.vercel-dns.com 300
```

### SSL Certificate

Automatically provided by:
- Vercel
- Netlify
- Railway
- Cloudflare

Or use Let's Encrypt for custom hosting.

---

## 🚦 Go-Live Checklist

### Day Before Launch
- [ ] Final content review
- [ ] Test all forms
- [ ] Verify analytics tracking
- [ ] Check email notifications
- [ ] Test on real devices
- [ ] DNS propagation complete
- [ ] SSL certificate active

### Launch Day
- [ ] Deploy to production
- [ ] Verify live site working
- [ ] Test both variants
- [ ] Submit form as test
- [ ] Check analytics real-time view
- [ ] Monitor error logs
- [ ] Share link with team

### First Week
- [ ] Monitor daily traffic
- [ ] Check conversion rates
- [ ] Review user feedback
- [ ] Fix any bugs quickly
- [ ] Optimize based on data

---

## 🆘 Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading
- Check Next.js Image domains in `next.config.js`
- Verify image URLs are accessible
- Check file sizes (< 500KB recommended)

### Forms Not Submitting
- Check API route is deployed
- Verify environment variables
- Check browser console for errors
- Test API endpoint directly

### Analytics Not Tracking
- Verify GA4 Measurement ID
- Check if ad blockers are interfering
- Test in incognito mode
- Wait 24-48 hours for data to appear

---

## 📞 Support Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind Docs](https://tailwindcss.com/docs)

### Community
- [Next.js Discord](https://discord.gg/nextjs)
- [Vercel Discord](https://discord.gg/vercel)
- Stack Overflow

---

## 🎉 You're Live!

After deployment:
1. ✅ Test both variants thoroughly
2. ✅ Monitor analytics daily
3. ✅ Collect user feedback
4. ✅ Iterate and improve
5. ✅ Scale what works

**Congratulations on your launch! 🚀**
