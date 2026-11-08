import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import ServiceIcon from "@/components/ServiceIcon";
import SectionHead from "@/components/SectionHead";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Software Development Services",
  description:
    "Website development, mobile app development and AI development services from TechVech — SEO-first, fixed-scope projects delivered end-to-end.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Services"
        title="Websites, mobile apps and AI — built end-to-end."
        lead="One team for design, engineering and launch. Choose a full product build, or pair our delivery team with developers hired from our network."
        breadcrumbs={[{ name: "Services", href: "/services" }]}
      />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="flex flex-col rounded-card border border-border bg-panel p-7 transition-all hover:-translate-y-1 hover:border-border-strong"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal">
                <ServiceIcon name={service.icon} />
              </div>
              <h2 className="mb-2 font-display text-xl font-semibold text-ink">{service.name}</h2>
              <p className="mb-5 text-sm text-muted">{service.short}</p>
              <ul className="mb-6 flex flex-col gap-2">
                {service.included.slice(0, 4).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13.5px] text-muted">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-teal" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/${service.slug}`}
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-teal"
              >
                Explore {service.name} <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Process />
      <TechStack />
      <CTASection />
    </main>
  );
}
