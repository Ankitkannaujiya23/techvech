import Breadcrumbs from "@/components/Breadcrumbs";

// Shared hero for inner pages. Same visual language as the home hero
// (grid texture, mono eyebrow, display heading). Renders the page's only <h1>.
export default function PageHero({ eyebrow, title, lead, breadcrumbs, accent = "teal", children }) {
  return (
    <section className="grid-texture relative overflow-hidden pb-14 pt-14 md:pt-20">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        {eyebrow && (
          <span
            className={`mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest ${
              accent === "amber" ? "text-amber" : "text-teal"
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${accent === "amber" ? "bg-amber" : "bg-teal"}`} />
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {lead && <p className="mt-6 max-w-2xl text-[17.5px] text-muted">{lead}</p>}
        {children && <div className="mt-9 flex flex-wrap gap-3.5">{children}</div>}
      </div>
    </section>
  );
}
