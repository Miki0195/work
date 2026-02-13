import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Quote, CheckCircle2 } from "lucide-react";
import { getCaseStudyBySlug, caseStudies } from "@/content/case-studies";
import { SectionReveal } from "@/components/ui/section-reveal";
import { Button } from "@/components/ui/button";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${study.title} - ${study.client} | Nova Leads`,
    description: study.challenge.substring(0, 160),
  };
}

export default function CaseStudyDetailPage({ params }: Props) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container-padding mx-auto">
        {/* Back button */}
        <Link
          href="/work"
          className="inline-flex items-center space-x-2 text-dark-400 hover:text-primary-400 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Vissza az esettanulmányokhoz</span>
        </Link>

        {/* Hero */}
        <SectionReveal>
          <div className="max-w-4xl mb-16">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1.5 bg-primary-500/20 border border-primary-500/30 rounded-full text-sm text-primary-300 font-medium">
                {study.industry}
              </span>
              <span className="px-4 py-1.5 bg-dark-800/50 border border-dark-700 rounded-full text-sm text-dark-400">
                {study.duration}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              {study.title}
            </h1>

            <p className="text-xl text-primary-400 font-medium mb-6">
              {study.client}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {study.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-dark-800/50 rounded text-sm text-dark-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Results Grid */}
        <SectionReveal delay={0.1}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {study.results.map((result, i) => (
              <div key={i} className="glass p-6 rounded-xl text-center">
                <div className="text-4xl font-display font-bold text-gradient mb-2">
                  {result.value}
                </div>
                <div className="text-sm font-semibold text-white mb-2">
                  {result.metric}
                </div>
                <div className="text-xs text-dark-400 leading-relaxed">
                  {result.description}
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Challenge & Solution */}
        <div className="max-w-4xl mx-auto space-y-12 mb-16">
          <SectionReveal delay={0.2}>
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">
                A <span className="text-gradient">kihívás</span>
              </h2>
              <p className="text-lg text-dark-300 leading-relaxed">
                {study.challenge}
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">
                A <span className="text-gradient">megoldás</span>
              </h2>
              <p className="text-lg text-dark-300 leading-relaxed">
                {study.solution}
              </p>
            </div>
          </SectionReveal>

          {/* Services Used */}
          <SectionReveal delay={0.4}>
            <div>
              <h3 className="text-xl font-display font-bold mb-4 text-white">
                Használt szolgáltatások
              </h3>
              <div className="flex flex-wrap gap-3">
                {study.services.map((service) => (
                  <Link
                    key={service}
                    href={`/services/${service}`}
                    className="px-4 py-2 glass-hover rounded-lg text-sm text-primary-400 hover:text-primary-300 transition-colors inline-flex items-center space-x-2"
                  >
                    <CheckCircle2 size={16} />
                    <span className="capitalize">{service.replace('-', ' ')}</span>
                  </Link>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Testimonial */}
        <SectionReveal delay={0.5}>
          <div className="glass p-12 rounded-3xl max-w-4xl mx-auto mb-16 relative">
            <Quote className="absolute top-8 left-8 text-primary-500/20" size={48} />
            <div className="relative z-10">
              <p className="text-xl text-dark-200 leading-relaxed mb-8 italic">
                "{study.testimonial.quote}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold">
                  {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {study.testimonial.author}
                  </div>
                  <div className="text-sm text-dark-400">
                    {study.testimonial.position}, {study.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal delay={0.6}>
          <div className="glass p-12 rounded-3xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-4">
              Hasonló <span className="text-gradient">eredményekre</span> vágysz?
            </h2>
            <p className="text-lg text-dark-300 mb-8">
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
