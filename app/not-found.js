import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata = { title: "Page not found", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <main id="main">
      <PageHero
        eyebrow="404"
        title="That page doesn't exist."
        lead="The link may be outdated or mistyped. Here's where to go next."
      >
        <Link href="/" className="rounded-lg bg-teal px-5 py-3 text-sm font-semibold text-canvas">Back to home</Link>
        <Link href="/services" className="rounded-lg border border-border-strong px-5 py-3 text-sm font-semibold text-ink">Our services</Link>
        <Link href="/hire-developers" className="rounded-lg border border-border-strong px-5 py-3 text-sm font-semibold text-ink">Hire developers</Link>
      </PageHero>
    </main>
  );
}
