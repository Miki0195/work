import { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { Services } from "@/components/home/services";
import { Proof } from "@/components/home/proof";
import { CaseStudiesSection } from "@/components/home/case-studies-section";
import { CTA } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Nova Leads - AI-powered Lead Generation és Értékesítési Automatizáció",
  description: "Szuperelj növekedést AI-alapú lead generation, értékesítési automatizáció és prediktív analitika megoldásainkkal. Minősített leadek, mérhető eredmények.",
  openGraph: {
    title: "Nova Leads - AI-powered Lead Generation",
    description: "Következő generációs értékesítési megoldások B2B vállalkozásoknak",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Proof />
      <Services />
      <CaseStudiesSection />
      <CTA />
    </>
  );
}
