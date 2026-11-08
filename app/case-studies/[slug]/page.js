import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}
export const dynamicParams = false;

export function generateMetadata({ params }) {
  const c = getCaseStudy(params.slug);
  if (!c) return {};
  return pageMetadata({
    title: c.title,
    description: c.summary,
    path: `/case-studies/${c.slug}`,
    noindex: c.placeholder, // placeholders never get indexed
  });
}

export default function CaseStudyPage({ params }) {
  const c = getCaseStudy(params.slug);
  if (!c) notFound();

  return (
    <main id="main">
      <PageHero
        eyebrow={`${c.industry} · ${c.service}`}
        title={c.title}
        lead={c.summary}
        breadcrumbs={[
          { name: "Case Studies", href: "/case-studies" },
          { name: c.title, href: `/case-studies/${c.slug}` },
        ]}
      />

      {c.placeholder && (
        <div className="mx-auto mb-10 max-w-6xl px-6">
          <p className="rounded-xl border border-amber/40 bg-amber/10 p-4 text-sm text-amber">
            Placeholder case study — replace with a real project in lib/caseStudies.js and set
            placeholder: false. Hidden from visitors and search engines in production.
          </p>
        </div>
      )}

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-5 md:grid-cols-3">
          {c.results.map((r, i) => (
            <div key={i} className="rounded-card border border-border bg-panel p-7 text-center">
              <div className="font-display text-4xl font-bold text-teal">{r.value}</div>
              <div className="mt-1 text-sm text-muted">{r.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-24 md:grid-cols-2">
        <div>
          <h2 className="mb-3 font-display text-2xl font-bold text-ink">The challenge</h2>
          <p className="text-[16px] leading-relaxed text-muted">{c.challenge}</p>
        </div>
        <div>
          <h2 className="mb-3 font-display text-2xl font-bold text-ink">What we built</h2>
          <p className="text-[16px] leading-relaxed text-muted">{c.solution}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {c.stack.map((s) => (
              <span key={s} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
