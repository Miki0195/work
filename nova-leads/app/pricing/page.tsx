import { Metadata } from "next";
import { PricingHero } from "@/components/pricing/hero";
import { PricingTiers } from "@/components/pricing/tiers";
import { AddOns } from "@/components/pricing/add-ons";
import { PricingFAQ } from "@/components/pricing/faq";

export const metadata: Metadata = {
  title: "Árak - Nova Leads",
  description: "Rugalmas árazási csomagok minden méretű vállalkozásnak. Válaszd ki a számodra legmegfelelőbb megoldást és kezdj el növekedni még ma.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingTiers />
      <AddOns />
      <PricingFAQ />
    </>
  );
}
