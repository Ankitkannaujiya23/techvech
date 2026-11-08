import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

// Contact details come from lib/site.js (placeholders flagged there).
export default function Contact({ defaultType }) {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 rounded-card border border-border bg-panel p-8 md:grid-cols-[0.9fr_1.1fr] md:gap-14 md:p-16">
        <div>
          <span className="mb-3 inline-block font-mono text-xs uppercase tracking-widest text-teal">
            Get started
          </span>
          <h2 className="font-display text-2xl font-bold text-ink md:text-[32px]">
            Tell us what you&apos;re building.
          </h2>
          <p className="mt-3.5 max-w-sm text-[15px] text-muted">
            Whether it&apos;s a full product build or you just need developers for your
            existing team — reply comes within one business day.
          </p>

          <div className="mt-6 flex flex-col gap-3.5">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-teal"
            >
              <Mail size={16} aria-hidden="true" /> {SITE.email}
            </a>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2.5 text-sm text-muted transition-colors hover:text-teal"
            >
              <Phone size={16} aria-hidden="true" /> {SITE.phone}
            </a>
            <span className="flex items-center gap-2.5 text-sm text-muted">
              <MapPin size={16} aria-hidden="true" /> {SITE.address.full}
            </span>
          </div>
        </div>

        <ContactForm defaultType={defaultType} />
      </div>
    </section>
  );
}
