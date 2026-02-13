import { Metadata } from "next";
import { CaseStudiesHero } from "@/components/case-studies/hero";
import { CaseStudiesGrid } from "@/components/case-studies/grid";

export const metadata: Metadata = {
  title: "Esettanulmányok - Nova Leads",
  description: "Nézd meg, hogyan segítettünk ügyfeleinknek elérni figyelemre méltó eredményeket lead generation és értékesítési automatizáció területén.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesGrid />
    </>
  );
}
