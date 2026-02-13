import { Metadata } from "next";
import { AboutHero } from "@/components/about/hero";
import { Story } from "@/components/about/story";
import { Values } from "@/components/about/values";
import { Team } from "@/components/about/team";

export const metadata: Metadata = {
  title: "Rólunk - Nova Leads",
  description: "Ismerj meg minket! A Nova Leads csapata elkötelezett amellett, hogy a legjobb lead generation és értékesítési automatizáció megoldásokat biztosítsa B2B vállalkozásoknak.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <Values />
      <Team />
    </>
  );
}
