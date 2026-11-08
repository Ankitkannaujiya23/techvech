import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import { caseStudies } from "@/lib/caseStudies";
import { pageMetadata } from "@/lib/seo";

// If there are no real case studies yet, keep this page out of search results.
export const metadata = pageMetadata({
  title: "Case Studies",
  description:
    "See how TechVech builds websites, mobile apps and AI products for startups and businesses — real projects, real results.",
  path: "/case-studies",
  noindex: caseStudies.length === 0 || caseStudies.every((c) => c.placeholder),
});

export default function CaseStudiesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Case studies"
        title="Products we've shipped, and what they achieved."
        lead="Problem, solution and measurable results — from first brief to launch."
        breadcrumbs={[{ name: "Case Studies", href: "/case-studies" }]}
      />
      <section className="mx-auto max-w-6xl px-6 pb-24">
        {caseStudies.length === 0 ? (
          <p className="rounded-card border border-border bg-panel p-8 text-muted">
            Detailed case studies are coming soon. In the meantime,{" "}
            <Link href="/contact" className="font-semibold text-teal">tell us about your project</Link>.
          </p>
        ) : (
          <div className="grid gap-5 md:grid-cols-3">
            {caseStudies.map((c) => (
              <article
                key={c.slug}
                className="relative flex flex-col rounded-card border border-border bg-panel p-7 transition-all hover:-translate-y-1 hover:border-border-strong"
              >
                <span className="mb-3 font-mono text-xs uppercase tracking-widest text-teal">{c.service}</span>
                <h2 className="font-display text-lg font-semibold leading-snug text-ink">
                  <Link href={`/case-studies/${c.slug}`} className="after:absolute after:inset-0">
                    {c.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm text-muted">{c.summary}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {c.stack.map((s) => (
                    <span key={s} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">{s}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
      <CTASection />
    </main>
  );
}
