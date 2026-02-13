import { Metadata } from "next";
import { ServicesHero } from "@/components/services/hero";
import { ServicesGrid } from "@/components/services/grid";
import { ProcessSection } from "@/components/services/process";

export const metadata: Metadata = {
  title: "Szolgáltatások - Nova Leads",
  description: "Lead generation, értékesítési automatizáció és adatelemzés - átfogó megoldások a vállalkozásod növekedéséhez.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
    </>
  );
}
