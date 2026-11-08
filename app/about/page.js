import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import WhyUs from "@/components/WhyUs";
import CTASection from "@/components/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About TechVech",
  description:
    "TechVech is a software studio and developer network building websites, mobile apps and AI products — and helping businesses hire vetted developers.",
  path: "/about",
});

// PLACEHOLDER COPY — rewrite with your real story, founders, team size,
// location and founding year. Real names + photos improve trust and E-E-A-T.
const vetting = [
  { title: "Technical screening", description: "Skills assessed by our own engineers against the role's stack." },
  { title: "Code & project review", description: "We review real work, not just resumes and certificates." },
  { title: "Communication check", description: "Clear English and collaboration skills for working in your team." },
  { title: "Trial & feedback", description: "Interview before hiring, with replacement support if it's not a fit." },
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="About us"
        title="A software studio — and the developers behind it."
        lead="TechVech builds websites, mobile apps and AI products for startups and businesses, and opens the same engineering bench to teams who want to hire developers directly."
        breadcrumbs={[{ name: "About", href: "/about" }]}
      />

      <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 md:grid-cols-2">
        <div>
          <SectionHead eyebrow="Our story" title="Why TechVech exists" />
          <div className="flex flex-col gap-4 text-[16px] leading-relaxed text-muted">
            <p>
              [Replace with your story.] We started TechVech because good software teams are hard to
              find and harder to trust. Founders either overpay agencies or gamble on unvetted freelancers.
            </p>
            <p>
              So we built both sides under one roof: a delivery team that ships complete products, and a
              vetted developer network you can hire directly when you want to build in-house.
            </p>
          </div>
        </div>
        <div>
          <SectionHead eyebrow="Two ways to work" title="Build with us, or hire from us" />
          <div className="flex flex-col gap-4">
            <div className="rounded-card border border-border bg-panel p-6">
              <h3 className="font-display text-lg font-semibold text-ink">Product delivery</h3>
              <p className="mt-1.5 text-sm text-muted">Fixed-scope websites, mobile apps and AI systems delivered end-to-end with weekly demos.</p>
            </div>
            <div className="rounded-card border border-border bg-panel p-6">
              <h3 className="font-display text-lg font-semibold text-ink">Developer hiring</h3>
              <p className="mt-1.5 text-sm text-muted">Pre-vetted developers on contract, contract-to-hire or full-time terms, managed by you.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-panel py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead accent="amber" eyebrow="Vetting" title="How we vet every developer" description="Replace this with your actual vetting process." />
          <ol className="grid gap-5 md:grid-cols-4">
            {vetting.map((v, i) => (
              <li key={v.title} className="rounded-xl border border-border bg-panel2 p-6">
                <span className="mb-3 block font-mono text-[13px] text-amber">0{i + 1}</span>
                <h3 className="text-[15px] font-semibold text-ink">{v.title}</h3>
                <p className="mt-1.5 text-[13.5px] text-muted">{v.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="pt-24">
        <WhyUs />
      </div>
      <CTASection />
    </main>
  );
}
