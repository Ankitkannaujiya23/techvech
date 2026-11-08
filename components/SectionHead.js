// Eyebrow + h2 + optional description. Matches the home-page section headers.
export default function SectionHead({ eyebrow, title, description, accent = "teal" }) {
  return (
    <div className="mb-12 max-w-xl">
      {eyebrow && (
        <span
          className={`mb-3 inline-block font-mono text-xs uppercase tracking-widest ${
            accent === "amber" ? "text-amber" : "text-teal"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold text-ink md:text-[38px]">{title}</h2>
      {description && <p className="mt-3.5 text-base text-muted">{description}</p>}
    </div>
  );
}
