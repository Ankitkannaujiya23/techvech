import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import { services } from "@/lib/services";

const highlights = {
  "website-development": [
    "SEO-first architecture & Core Web Vitals",
    "Custom design, no template look",
    "CMS, e-commerce, or full custom builds",
  ],
  "mobile-app-development": [
    "Native performance, one codebase",
    "Push, payments, offline-first builds",
    "App Store & Play Store submission handled",
  ],
  "ai-development": [
    "Chatbots, copilots & internal AI tools",
    "RAG pipelines & workflow automation",
    "Model fine-tuning & evaluation",
  ],
};

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 max-w-xl">
        <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-teal">
          What we build
        </span>
        <h2 className="font-display text-3xl font-bold text-ink md:text-[38px]">
          Three product types. One delivery standard.
        </h2>
        <p className="mt-3.5 text-base text-muted">
          Every engagement gets a dedicated engineer, a clear scope and weekly demos — no
          black box, no surprise invoices.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.slug}
            className="flex flex-col rounded-card border border-border bg-panel p-7 transition-all hover:-translate-y-1 hover:border-border-strong"
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-teal/10 text-teal">
              <ServiceIcon name={service.icon} />
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold text-ink">{service.name}</h3>
            <p className="mb-4 text-sm text-muted">{service.short}</p>
            <ul className="mb-6 flex flex-col gap-2">
              {highlights[service.slug].map((item) => (
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
              Learn more <ArrowRight size={14} aria-hidden="true" />
              <span className="sr-only"> about {service.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
