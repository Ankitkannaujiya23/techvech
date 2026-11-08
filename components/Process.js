const steps = [
  {
    n: "01",
    title: "Discover",
    description: "Scope, goals and success metrics locked down in one working session.",
  },
  {
    n: "02",
    title: "Design",
    description: "Wireframes and UI direction reviewed with you before a line of code is written.",
  },
  {
    n: "03",
    title: "Build",
    description: "Weekly demos, staging links and a shared task board — always visible.",
  },
  {
    n: "04",
    title: "Launch & Support",
    description: "Deployed, monitored, and backed by a support window after go-live.",
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 max-w-xl">
        <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-teal">
          How we build
        </span>
        <h2 className="font-display text-3xl font-bold text-ink md:text-[38px]">
          Four stages, start to launch.
        </h2>
        <p className="mt-3.5 text-base text-muted">
          The same sequence for every website, app or AI build — so you always know what&apos;s
          next.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-card border border-border-strong bg-border-strong sm:grid-cols-2 md:grid-cols-4">
        {steps.map((step) => (
          <div key={step.n} className="bg-canvas p-7">
            <span className="mb-4 block font-mono text-[13px] text-teal">{step.n}</span>
            <h3 className="mb-2 font-display text-lg font-semibold text-ink">{step.title}</h3>
            <p className="text-[13.5px] text-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
