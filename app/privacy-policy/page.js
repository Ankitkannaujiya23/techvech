import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How TechVech collects, uses and protects information submitted through its website.",
  path: "/privacy-policy",
});

// GENERIC TEMPLATE — have a lawyer review and adapt before launch.
export default function PrivacyPage() {
  return (
    <main id="main">
      <PageHero
        title="Privacy Policy"
        lead="Last updated: [add date]. This is a template — review with legal counsel before publishing."
        breadcrumbs={[{ name: "Privacy Policy", href: "/privacy-policy" }]}
      />
      <article className="mx-auto flex max-w-3xl flex-col gap-5 px-6 pb-24 text-[16px] leading-relaxed text-muted">
        <h2 className="font-display text-2xl font-bold text-ink">Information we collect</h2>
        <p>When you submit a form on {SITE.url}, we collect the details you provide: name, email, project type, budget range and message. We may also collect basic analytics data such as pages visited and device type.</p>
        <h2 className="font-display text-2xl font-bold text-ink">How we use it</h2>
        <p>We use your information to respond to inquiries, prepare proposals, match developers to hiring requests and improve our website. We do not sell your personal information.</p>
        <h2 className="font-display text-2xl font-bold text-ink">Third-party services</h2>
        <p>We use third-party services such as form processing (Formspree) and analytics (Google Analytics) that may process data on our behalf under their own policies.</p>
        <h2 className="font-display text-2xl font-bold text-ink">Data retention and your rights</h2>
        <p>We keep inquiry data only as long as needed for business and legal purposes. You may request access, correction or deletion of your information at any time.</p>
        <h2 className="font-display text-2xl font-bold text-ink">Contact</h2>
        <p>Questions about this policy: <a className="text-teal" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      </article>
    </main>
  );
}
