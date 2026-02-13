import { Metadata } from "next";
import { ContactHero } from "@/components/contact/hero";
import { ContactForm } from "@/components/contact/form";
import { ContactInfo } from "@/components/contact/info";
import { ContactFAQ } from "@/components/contact/faq";

export const metadata: Metadata = {
  title: "Kapcsolat - Nova Leads",
  description: "Vedd fel velünk a kapcsolatot! Foglalj egy ingyenes konzultációt és beszéljük meg, hogyan segíthetünk elérni az értékesítési céljaidat.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="section-padding">
        <div className="container-padding mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <ContactFAQ />
    </>
  );
}
