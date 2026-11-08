// Renders blog "blocks" (see lib/blog.js) as readable article markup.
export default function ContentBlocks({ blocks }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        if (block.t === "h2")
          return (
            <h2 key={i} className="mt-6 font-display text-2xl font-bold text-ink">
              {block.c}
            </h2>
          );
        if (block.t === "ul")
          return (
            <ul key={i} className="flex flex-col gap-2.5">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[16px] leading-relaxed text-muted">
                  <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-teal" />
                  {item}
                </li>
              ))}
            </ul>
          );
        if (block.t === "callout")
          return (
            <aside key={i} className="rounded-card border border-teal/30 bg-teal/5 p-5 text-[15.5px] leading-relaxed text-ink">
              {block.c}
            </aside>
          );
        return (
          <p key={i} className="text-[16px] leading-relaxed text-muted">
            {block.c}
          </p>
        );
      })}
    </div>
  );
}
