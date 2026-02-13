import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Target, TrendingUp } from "lucide-react";
import { getServiceBySlug, services } from "@/content/services";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Button } from "@/components/ui/button";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} - Nova Leads`,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-padding mx-auto">
        {/* Back button */}
        <Link
          href="/services"
          className="inline-flex items-center space-x-2 text-dark-400 hover:text-primary-400 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Vissza a szolgáltatásokhoz</span>
        </Link>

        {/* Hero */}
        <SectionReveal>
          <div className="max-w-4xl mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-primary-400 font-medium mb-6">
              {service.subtitle}
            </p>
            <p className="text-lg text-dark-300 leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact">
                <Button size="lg">Ingyenes konzultáció</Button>
              </Link>
              <div className="text-dark-400">
                <span className="font-semibold text-primary-400 text-xl">{service.pricing.starting}</span>
                <span className="text-dark-500"> -tól kezdődően</span>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Features & Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <SectionReveal delay={0.1}>
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                  <Target className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-display font-bold text-white">
                  Funkciók
                </h2>
              </div>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start space-x-3 text-dark-300">
                    <CheckCircle2 className="text-primary-400 flex-shrink-0 mt-0.5" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="glass p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-white" size={20} />
                </div>
                <h2 className="text-2xl font-display font-bold text-white">
                  Előnyök
                </h2>
              </div>
              <ul className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start space-x-3 text-dark-300">
                    <CheckCircle2 className="text-purple-400 flex-shrink-0 mt-0.5" size={20} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        </div>

        {/* Process */}
        <SectionReveal delay={0.3}>
          <div className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-12 text-center">
              A <span className="text-gradient">folyamat</span>
            </h2>
            <div className="space-y-8">
              {service.process.map((step, index) => (
                <div key={step.step} className="glass p-8 rounded-2xl">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-display font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-bold mb-3 text-white">
                        {step.title}
                      </h3>
                      <p className="text-dark-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal delay={0.4}>
          <div className="glass p-12 rounded-3xl text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Készen állsz a <span className="text-gradient">kezdésre</span>?
            </h2>
            <p className="text-lg text-dark-300 mb-8 max-w-2xl mx-auto">
              Foglalj egy ingyenes konzultációt és beszéljük meg, 
              hogyan segíthetünk elérni az értékesítési céljaidat.
            </p>
            <Link href="/contact">
              <Button size="lg">Ingyenes konzultáció</Button>
            </Link>
          </div>
        </SectionReveal>
      </div>
    </div>
  );
}
