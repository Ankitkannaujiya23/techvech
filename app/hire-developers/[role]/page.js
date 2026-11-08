import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { roles, getRole, hireSteps, engagementModels } from "@/lib/roles";
import { pageMetadata } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return roles.map((r) => ({ role: r.slug }));
}
export const dynamicParams = false;

export function generateMetadata({ params }) {
  const role = getRole(params.role);
  if (!role) return {};
  return pageMetadata({
    title: role.metaTitle,
    description: role.metaDescription,
    path: `/hire-developers/${role.slug}`,
  });
}

export default function RolePage({ params }) {
  const role = getRole(params.role);
  if (!role) notFound();

  const path = `/hire-developers/${role.slug}`;
  const others = roles.filter((r) => r.slug !== role.slug);

  return (
    <main id="main">
      <JsonLd
        data={serviceSchema({ name: `Hire ${role.name}`, description: role.metaDescription, path })}
      />

      <PageHero
        accent="amber"
        eyebrow={`Hire ${role.name}`}
        title={role.h1}
        lead={role.lead}
        breadcrumbs={[
          { name: "Hire Developers", href: "/hire-developers" },
          { name: role.name, href: path },
        ]}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-semibold text-[#331A05] transition-transform hover:-translate-y-0.5"
        >
          Get a Shortlist in 48 Hours <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 md:grid-cols-2">
        <div>
          <SectionHead accent="amber" eyebrow="Skills" title="What our developers bring" />
          <ul className="flex flex-col gap-3">
            {role.skills.map((s) => (
              <li key={s} className="flex items-start gap-3 text-[14.5px] text-ink">
                <Check size={17} className="mt-0.5 flex-shrink-0 text-teal" aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHead accent="amber" eyebrow="Best for" title="When to hire" />
          <ul className="flex flex-col gap-3">
            {role.suits.map((s) => (
              <li key={s} className="rounded-xl border border-border bg-panel p-4 text-[14.5px] text-ink">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-border bg-panel py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead accent="amber" eyebrow="How it works" title="Hire in four steps" />
          <ol className="grid gap-5 md:grid-cols-4">
            {hireSteps.map((s) => (
              <li key={s.n} className="rounded-xl border border-border bg-panel2 p-6">
                <span className="mb-3 flex h-[26px] w-[26px] items-center justify-center rounded-md border border-amber/30 font-mono text-[13px] text-amber">{s.n}</span>
                <h3 className="text-[15px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-[13.5px] text-muted">{s.description}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {engagementModels.map((m) => (
              <div key={m.title} className="rounded-card border border-border bg-panel2 p-6">
                <h3 className="font-display text-base font-semibold text-ink">{m.title}</h3>
                <p className="mt-1.5 text-[13.5px] text-muted">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-24">
        <FAQ items={role.faqs} title={`Hiring ${role.name}: common questions`} eyebrow="FAQ" />
      </div>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <SectionHead accent="amber" eyebrow="Other roles" title="Looking for a different skill set?" />
        <div className="flex flex-wrap gap-2.5">
          {others.map((r) => (
            <Link
              key={r.slug}
              href={`/hire-developers/${r.slug}`}
              className="rounded-full border border-border px-4 py-2 font-mono text-[13px] text-muted transition-colors hover:border-amber/40 hover:text-amber"
            >
              Hire {r.name}
            </Link>
          ))}
        </div>
      </section>

      <CTASection title={`Ready to hire ${role.name.toLowerCase()}?`} text="Share your brief and we'll send matched profiles within about 48 hours." />
    </main>
  );
}
