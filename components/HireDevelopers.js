import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hireSteps, roles } from "@/lib/roles";

// Sample profiles are illustrative placeholders — replace with your real bench.
// Each links to its role landing page for internal linking.
const developers = [
  { slug: "react-developers", role: "Frontend Engineer", stack: "React", detail: "5 yrs · Next.js, TypeScript" },
  { slug: "flutter-developers", role: "Mobile Engineer", stack: "Flutter", detail: "4 yrs · iOS & Android" },
  { slug: "ai-ml-engineers", role: "AI / ML Engineer", stack: "Python", detail: "6 yrs · LLMs, PyTorch" },
  { slug: "nodejs-developers", role: "Backend Engineer", stack: "Node", detail: "5 yrs · Node.js, PostgreSQL" },
];

export default function HireDevelopers() {
  return (
    <section id="hire" className="border-y border-border bg-panel py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-amber">
            Developer network
          </span>
          <h2 className="font-display text-3xl font-bold text-ink md:text-[38px]">
            Need extra hands, not another agency?
          </h2>
          <p className="mt-3.5 max-w-md text-base text-muted">
            Hire vetted developers straight from the TechVech network — contract,
            contract-to-hire, or full-time. They work inside your team, your tools, your
            timezone overlap.
          </p>

          <ol className="mt-8 flex flex-col gap-[18px]">
            {hireSteps.map((step) => (
              <li key={step.n} className="flex items-start gap-3.5">
                <span className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-md border border-amber/30 font-mono text-[13px] text-amber">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold text-ink">{step.title}</h3>
                  <p className="text-[13.5px] text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-amber px-5 py-3 text-sm font-semibold text-[#331A05] transition-transform hover:-translate-y-0.5"
            >
              Request Developers <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link href="/hire-developers" className="text-sm font-semibold text-amber">
              Browse all roles
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {roles.map((r) => (
              <Link
                key={r.slug}
                href={`/hire-developers/${r.slug}`}
                className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-amber/40 hover:text-amber"
              >
                {r.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          {developers.map((dev) => (
            <Link
              key={dev.role}
              href={`/hire-developers/${dev.slug}`}
              className="flex items-center gap-3.5 rounded-xl border border-border bg-panel2 p-4 transition-colors hover:border-border-strong"
            >
              <div className="h-[42px] w-[42px] flex-shrink-0 rounded-lg bg-gradient-to-br from-amber to-teal" />
              <div className="min-w-0 flex-1">
                <div className="mb-0.5 flex items-center gap-2">
                  <span className="text-sm font-semibold text-ink">{dev.role}</span>
                  <span className="rounded border border-teal/30 px-1.5 py-0.5 font-mono text-[10.5px] text-teal">
                    {dev.stack}
                  </span>
                </div>
                <div className="text-xs text-muted">{dev.detail}</div>
              </div>
              <span className="whitespace-nowrap font-mono text-[11px] text-teal-dim">● Available</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
