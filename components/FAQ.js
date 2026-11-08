import { Plus } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import SectionHead from "@/components/SectionHead";
import { faqSchema } from "@/lib/schema";

// Accessible FAQ built on native <details>/<summary> (no client JS) with
// FAQPage structured data for rich results. items: [{ q, a }]
export default function FAQ({ items, title = "Frequently asked questions", eyebrow = "FAQ" }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <JsonLd data={faqSchema(items)} />
      <SectionHead eyebrow={eyebrow} title={title} />
      <div className="max-w-3xl divide-y divide-border rounded-card border border-border bg-panel">
        {items.map((item) => (
          <details key={item.q} className="group px-6 py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15.5px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
              {item.q}
              <Plus
                size={18}
                className="flex-shrink-0 text-teal transition-transform group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
