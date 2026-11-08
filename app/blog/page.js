import PageHero from "@/components/PageHero";
import { PostGrid } from "@/components/LatestPosts";
import CTASection from "@/components/CTASection";
import { posts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blog: App, Web, AI & Hiring Guides",
  description:
    "Practical guides on mobile app costs, hiring developers, native vs cross-platform development and building AI products — from the TechVech team.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Blog"
        title="Practical guides for founders and product teams."
        lead="What things cost, how to hire well, and how to build with AI — written to help you decide, not to sell you something."
        breadcrumbs={[{ name: "Blog", href: "/blog" }]}
      />
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <PostGrid items={posts} />
      </section>
      <CTASection />
    </main>
  );
}
