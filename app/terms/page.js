import PageHero from "@/components/PageHero";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "Terms governing use of the TechVech website and inquiries for services.",
  path: "/terms",
});

// GENERIC TEMPLATE — have a lawyer review and adapt before launch.
export default function TermsPage() {
  return (
    <main id="main">
      <PageHero
        title="Terms of Service"
        lead="Last updated: [add date]. This is a template — review with legal counsel before publishing."
        breadcrumbs={[{ name: "Terms", href: "/terms" }]}
      />
      <article className="mx-auto flex max-w-3xl flex-col gap-5 px-6 pb-24 text-[16px] leading-relaxed text-muted">
        <h2 className="font-display text-2xl font-bold text-ink">Use of this website</h2>
        <p>The content on {SITE.url} is provided for general information about TechVech&apos;s services. It is not a binding offer; engagements are governed by a separate written agreement.</p>
        <h2 className="font-display text-2xl font-bold text-ink">Services and engagements</h2>
        <p>Project scope, pricing, timelines, intellectual-property assignment and confidentiality are defined in the contract signed for each engagement. Developer-hiring engagements are governed by their own service terms.</p>
        <h2 className="font-display text-2xl font-bold text-ink">Limitation of liability</h2>
        <p>To the maximum extent permitted by law, TechVech is not liable for indirect or consequential damages arising from use of this website.</p>
        <h2 className="font-display text-2xl font-bold text-ink">Contact</h2>
        <p>Questions about these terms: <a className="text-teal" href={`mailto:${SITE.email}`}>{SITE.email}</a>.</p>
      </article>
    </main>
  );
}
