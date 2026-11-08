import { ArrowRight } from "lucide-react";
import Terminal from "@/components/Terminal";

export default function Hero() {
  return (
    <section id="top" className="grid-texture relative overflow-hidden pb-20 pt-20 md:pt-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-teal">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            TechVech · Software Studio &amp; Developer Network
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl md:text-[56px]">
            We build your product.
            <br />
            Or we hand you <span className="text-teal">the developers</span> who can.
          </h1>

          <p className="mt-6 max-w-md text-[17.5px] text-muted">
            TechVech designs and ships websites, mobile apps and AI products end-to-end —
            or connects you directly with vetted developers you can hire onto your own
            team. Same quality bar, two ways to work with us.
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-canvas transition-transform hover:-translate-y-0.5"
            >
              Start a Project <ArrowRight size={16} />
            </a>
            <a
              href="#hire"
              className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-amber hover:text-amber"
            >
              Hire a Developer
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-7 font-mono text-[13px] text-muted">
            <span>
              <strong className="font-medium text-ink">Web</strong> · Mobile · AI
            </span>
            <span>
              <strong className="font-medium text-ink">40+</strong> projects shipped
            </span>
            <span>
              <strong className="font-medium text-ink">7–14 day</strong> dev onboarding
            </span>
          </div>
        </div>

        <Terminal />
      </div>
    </section>
  );
}
