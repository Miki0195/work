import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professzionális Üzleti Megoldások | Studio Prof',
  description: 'Alakítsa át vállalkozását modern digitális megoldásainkkal. Bizonyított eredmények, kiváló ügyfélszolgálat.',
  keywords: 'üzleti megoldások, digitális transzformáció, vállalati szoftver, automatizálás',
  openGraph: {
    title: 'Professzionális Üzleti Megoldások | Studio Prof',
    description: 'Alakítsa át vállalkozását modern digitális megoldásainkkal.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
