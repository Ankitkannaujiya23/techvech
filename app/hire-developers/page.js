import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHead from "@/components/SectionHead";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { roles, hireSteps, engagementModels } from "@/lib/roles";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Hire Developers in India",
  description:
    "Hire vetted React, Node.js, Flutter, Python and AI/ML developers on contract, contract-to-hire or full-time. Shortlist in 48 hours, onboard in days.",
  path: "/hire-developers",
});

const faqs = [
  { q: "How does hiring developers through TechVech work?", a: "You share the role, stack and duration. We send a shortlist of vetted developers in about 48 hours, you interview them directly, and once you confirm we handle contracts, timesheets and payments." },
  { q: "How are your developers vetted?", a: "Candidates go through technical screening and code review by our own engineers, plus a check on communication and past project work, before their profile reaches you." },
  { q: "Can I hire a single developer or a whole team?", a: "Both. Start with one developer or build a squad with a lead, designer and QA, and scale up or down as your roadmap changes." },
  { q: "What if the developer is not the right fit?", a: "Tell us early and we arrange a replacement so your project keeps its momentum." },
  { q: "Who owns the work the developer produces?", a: "You do. Work is covered by an NDA and IP assignment, and developers work inside your repositories and accounts." },
];

export default function HireDevelopersPage() {
  return (
    <main id="main">
      <PageHero
        accent="amber"
        eyebrow="Developer network"
        title="Hire vetted developers for your team."
        lead="Contract, contract-to-hire or full-time. Developers work inside your tools and timezone overlap, with contracts, timesheets and payments handled by TechVech."
        breadcrumbs={[{ name: "Hire Developers", href: "/hire-developers" }]}
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-semibold text-[#331A05] transition-transform hover:-translate-y-0.5"
        >
          Request Developers <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <SectionHead accent="amber" eyebrow="Roles" title="Hire by skill" description="Pick the role closest to what you need — each page covers skills, use cases and how engagement works." />
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {roles.map((r) => (
            <Link
              key={r.slug}
              href={`/hire-developers/${r.slug}`}
              className="rounded-card border border-border bg-panel p-7 transition-all hover:-translate-y-1 hover:border-border-strong"
            >
              <span className="rounded border border-teal/30 px-1.5 py-0.5 font-mono text-[10.5px] text-teal">{r.stack}</span>
              <h2 className="mt-3 font-display text-lg font-semibold text-ink">Hire {r.name}</h2>
              <p className="mt-2 text-sm text-muted">{r.skills.slice(0, 3).join(" · ")}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <SectionHead accent="amber" eyebrow="Engagement models" title="Three ways to hire" />
        <div className="grid gap-5 md:grid-cols-3">
          {engagementModels.map((m) => (
            <div key={m.title} className="rounded-card border border-border bg-panel p-7">
              <h3 className="font-display text-lg font-semibold text-ink">{m.title}</h3>
              <p className="mt-2 text-sm text-muted">{m.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-panel py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHead accent="amber" eyebrow="How it works" title="From brief to onboarded in days." />
          <ol className="grid gap-5 md:grid-cols-4">
            {hireSteps.map((s) => (
              <li key={s.n} className="rounded-xl border border-border bg-panel2 p-6">
                <span className="mb-3 flex h-[26px] w-[26px] items-center justify-center rounded-md border border-amber/30 font-mono text-[13px] text-amber">{s.n}</span>
                <h3 className="text-[15px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-1.5 text-[13.5px] text-muted">{s.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="pt-24">
        <FAQ items={faqs} eyebrow="Hiring FAQ" />
      </div>
      <CTASection title="Tell us the role. Get a shortlist in 48 hours." text="Share the stack, seniority and duration — we reply within one business day with matched profiles." />
    </main>
  );
}
