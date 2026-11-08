const stats = [
  { value: "40+", label: "Projects delivered" },
  { value: "25+", label: "Developers placed" },
  { value: "4.9/5", label: "Avg. client rating" },
  { value: "12d", label: "Avg. hiring turnaround" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-panel/40 py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="px-2 py-2 text-center">
            <div className="font-display text-3xl font-bold text-ink">{stat.value}</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
