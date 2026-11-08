import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHead from "@/components/SectionHead";
import { posts } from "@/lib/blog";

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });
}

// Grid of blog cards — used on the home page and the blog index.
export function PostGrid({ items }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((post) => (
        <article
          key={post.slug}
          className="relative flex flex-col rounded-card border border-border bg-panel p-7 transition-all hover:-translate-y-1 hover:border-border-strong"
        >
          <span className="mb-3 font-mono text-xs uppercase tracking-widest text-teal">{post.category}</span>
          <h3 className="font-display text-lg font-semibold leading-snug text-ink">
            <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
              {post.title}
            </Link>
          </h3>
          <p className="mt-3 text-sm text-muted">{post.description}</p>
          <div className="mt-auto pt-5 font-mono text-xs text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function LatestPosts() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <SectionHead
        eyebrow="Insights"
        title="Guides for founders and product teams."
        description="Practical answers on app costs, hiring developers and building with AI."
      />
      <PostGrid items={posts.slice(0, 3)} />
      <Link href="/blog" className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-teal">
        Read all articles <ArrowRight size={14} aria-hidden="true" />
      </Link>
    </section>
  );
}
