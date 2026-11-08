const reasons = [
  {
    title: "Fixed, transparent pricing",
    description: "Quoted upfront by scope — no surprise hourly overruns.",
  },
  {
    title: "NDA & IP protection",
    description: "Your code, data and ideas stay yours, in writing, from day one.",
  },
  {
    title: "Dedicated project lead",
    description: "One point of contact who actually knows your project.",
  },
  {
    title: "On-time delivery",
    description: "Milestone-based timelines with weekly progress you can see.",
  },
  {
    title: "Post-launch support",
    description: "Bug fixes and monitoring included after every launch.",
  },
  {
    title: "Vetted talent only",
    description: "Every developer we place is technically screened by our own team first.",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 max-w-xl">
        <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-teal">
          Why teams trust us
        </span>
        <h2 className="font-display text-3xl font-bold text-ink md:text-[38px]">
          Built to be checked, not just believed.
        </h2>
      </div>

      <div className="grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2 md:grid-cols-3">
        {reasons.map((reason) => (
          <div key={reason.title} className="bg-canvas p-7">
            <h3 className="mb-2 flex items-center gap-2 text-[15.5px] font-semibold text-ink">
              <span className="font-mono text-teal">✓</span>
              {reason.title}
            </h3>
            <p className="text-[13.5px] text-muted">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
