import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Closing call-to-action used at the bottom of inner pages.
export default function CTASection({
  title = "Ready to build — or to hire the team that can?",
  text = "Tell us what you need. You get a reply within one business day, and a clear scope and fixed quote — not a sales pitch.",
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-card border border-border bg-panel p-8 text-center md:p-14">
        <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold text-ink md:text-[32px]">{title}</h2>
        <p className="mx-auto mt-3.5 max-w-xl text-[15px] text-muted">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3.5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-canvas transition-transform hover:-translate-y-0.5"
          >
            Start a Project <ArrowRight size={16} />
          </Link>
          <Link
            href="/hire-developers"
            className="inline-flex items-center gap-2 rounded-lg border border-border-strong px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-amber hover:text-amber"
          >
            Hire Developers
          </Link>
        </div>
      </div>
    </section>
  );
}
