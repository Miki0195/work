import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CommandPalette } from "@/components/command-palette";
import { OrganizationSchema, LocalBusinessSchema } from "@/components/seo/json-ld";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const calSans = localFont({
  src: "./fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal",
  weight: "600",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} - AI-powered Lead Generation és Értékesítési Automatizáció`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "lead generation",
    "értékesítési automatizáció",
    "sales automation",
    "B2B marketing",
    "CRM integráció",
    "AI lead scoring",
    "marketing automation"
  ],
  authors: [{ name: "Nova Leads" }],
  creator: "Nova Leads",
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: "@novaleads",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body className={`${inter.variable} ${calSans.variable} font-sans antialiased bg-dark-950 text-dark-50`}>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}
