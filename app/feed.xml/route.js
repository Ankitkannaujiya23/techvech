import { SITE } from "@/lib/site";
import { posts } from "@/lib/blog";

// RSS feed at /feed.xml — helps blog discovery and syndication.
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  const items = posts
    .map(
      (p) => `<item>
<title>${esc(p.title)}</title>
<link>${SITE.url}/blog/${p.slug}</link>
<guid isPermaLink="true">${SITE.url}/blog/${p.slug}</guid>
<pubDate>${new Date(p.date).toUTCString()}</pubDate>
<description>${esc(p.description)}</description>
</item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>TechVech Blog</title>
<link>${SITE.url}/blog</link>
<description>Guides on app development costs, hiring developers and building with AI.</description>
${items}
</channel></rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
