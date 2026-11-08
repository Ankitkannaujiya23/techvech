import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import { homeFaqs } from "@/lib/homeFaqs";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact — Start a Project or Hire Developers",
  description:
    "Tell TechVech about your website, mobile app or AI project, or request developers to hire. Reply within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title="Start a project or request developers."
        lead="Share a few details and we'll reply within one business day with next steps — usually a short call and a clear scope."
        breadcrumbs={[{ name: "Contact", href: "/contact" }]}
      />
      <Contact />
      <FAQ items={homeFaqs.slice(0, 4)} />
    </main>
  );
}
