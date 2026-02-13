import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Atlas Consultancy | Premium Web Development & Design',
  description: 'We craft premium web experiences that drive results. From strategy to launch, we build digital products that captivate, convert, and scale.',
  keywords: ['web development', 'web design', 'digital agency', 'Next.js', 'React', 'UI/UX'],
  authors: [{ name: 'Atlas Consultancy' }],
  creator: 'Atlas Consultancy',
  metadataBase: new URL('https://atlascons.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://atlascons.com',
    siteName: 'Atlas Consultancy',
    title: 'Atlas Consultancy | Premium Web Development & Design',
    description: 'We craft premium web experiences that drive results. From strategy to launch, we build digital products that captivate, convert, and scale.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Atlas Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Consultancy | Premium Web Development & Design',
    description: 'We craft premium web experiences that drive results.',
    images: ['/og-image.jpg'],
    creator: '@atlascons',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // TODO: Add your verification tokens
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Atlas Consultancy',
              url: 'https://atlascons.com',
              logo: 'https://atlascons.com/logo.png',
              description: 'Premium web development and design agency',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-555-123-4567',
                contactType: 'Customer Service',
                email: 'hello@atlascons.com',
              },
              sameAs: [
                'https://twitter.com/atlascons',
                'https://linkedin.com/company/atlascons',
                'https://github.com/atlascons',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Atlas Consultancy',
              url: 'https://atlascons.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://atlascons.com/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className={inter.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
