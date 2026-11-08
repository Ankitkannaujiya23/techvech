// PLACEHOLDER TESTIMONIALS — replace with real client quotes, names and
// roles before launch. Keep the same shape (quote / name / role).
const testimonials = [
  {
    quote:
      "TechVech shipped our MVP in six weeks and it hasn't needed a rewrite since. Communication was the best part — never had to chase an update.",
    name: "Ritika Sharma",
    role: "Founder, retail-tech startup",
  },
  {
    quote:
      "We hired two developers through TechVech for a three-month sprint. Both were productive in under a week — better than our last two agency hires combined.",
    name: "Arjun Mehta",
    role: "Engineering Manager, fintech",
  },
  {
    quote:
      "The AI pipeline they built cut our manual review time by more than half. Clear scoping upfront meant zero surprises on the final bill.",
    name: "Sana Iqbal",
    role: "Ops Lead, healthtech",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 max-w-xl">
        <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-teal">
          Client feedback
        </span>
        <h2 className="font-display text-3xl font-bold text-ink md:text-[38px]">
          What it&apos;s like to work with us.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col gap-5 rounded-card border border-border bg-panel p-7"
          >
            <p className="text-[14.5px] leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-auto flex items-center gap-3">
              <div className="h-[38px] w-[38px] flex-shrink-0 rounded-full bg-gradient-to-br from-teal to-amber" />
              <div>
                <div className="text-[13.5px] font-semibold text-ink">{t.name}</div>
                <div className="text-xs text-muted">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
