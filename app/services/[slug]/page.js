import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { services, getService } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";

// Pre-render every service page at build time (fast + crawlable).
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export const dynamicParams = false;

export function generateMetadata({ params }) {
  const service = getService(params.slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default function ServicePage({ params }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <main id="main">
      <JsonLd data={serviceSchema({ name: service.name, description: service.metaDescription, path })} />

      <PageHero
        eyebrow={service.name}
        title={service.h1}
        lead={service.lead}
        breadcrumbs={[
          { name: "Services", href: "/services" },
          { name: service.name, href: path },
        ]}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-canvas transition-transform hover:-translate-y-0.5"
        >
          Get a Fixed Quote <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <Link
          href="/hire-developers"
          className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-amber hover:text-amber"
        >
          Or hire developers
        </Link>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <SectionHead eyebrow="What's included" title={`What you get with our ${service.name.toLowerCase()} service`} />
        <ul className="grid gap-3.5 md:grid-cols-2">
          {service.included.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-panel p-4 text-[14.5px] text-ink">
              <Check size={17} className="mt-0.5 flex-shrink-0 text-teal" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <SectionHead eyebrow="Use cases" title="What teams build with us" />
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {service.useCases.map((u) => (
            <div key={u} className="rounded-card border border-border bg-panel p-6 text-[15px] font-semibold text-ink">
              {u}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {service.tech.map((t) => (
            <span key={t} className="rounded-full border border-border px-4 py-2 font-mono text-[13px] text-muted">
              {t}
            </span>
          ))}
        </div>
      </section>

      <Process />
      <FAQ items={service.faqs} title={`${service.name}: common questions`} />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <SectionHead eyebrow="Related" title="Explore our other services" />
        <div className="grid gap-5 md:grid-cols-2">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="rounded-card border border-border bg-panel p-7 transition-all hover:-translate-y-1 hover:border-border-strong"
            >
              <h3 className="font-display text-lg font-semibold text-ink">{s.name}</h3>
              <p className="mt-2 text-sm text-muted">{s.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
