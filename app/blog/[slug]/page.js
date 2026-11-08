import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import ContentBlocks from "@/components/ContentBlocks";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import SectionHead from "@/components/SectionHead";
import { PostGrid, formatDate } from "@/components/LatestPosts";
import { posts, getPost } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { articleSchema } from "@/lib/schema";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}
export const dynamicParams = false;

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updated || post.date,
  });
}

export default function PostPage({ params }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main id="main">
      <JsonLd data={articleSchema(post)} />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        lead={post.description}
        breadcrumbs={[
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
      />

      <article className="mx-auto max-w-3xl px-6 pb-20">
        <div className="mb-10 border-b border-border pb-6 font-mono text-xs text-muted">
          By TechVech Team · <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime}
        </div>
        <ContentBlocks blocks={post.blocks} />
        <div className="mt-12 rounded-card border border-border bg-panel p-6 text-[15px] text-muted">
          Need help with your own project?{" "}
          <Link href="/contact" className="font-semibold text-teal">Talk to TechVech</Link> or{" "}
          <Link href="/hire-developers" className="font-semibold text-amber">hire vetted developers</Link>.
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <SectionHead eyebrow="Keep reading" title="More guides" />
        <PostGrid items={related} />
      </section>

      <CTASection />
    </main>
  );
}
