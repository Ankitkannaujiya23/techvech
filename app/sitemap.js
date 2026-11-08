import { SITE } from "@/lib/site";
import { services } from "@/lib/services";
import { roles } from "@/lib/roles";
import { posts } from "@/lib/blog";
import { caseStudies } from "@/lib/caseStudies";

// Auto-generated /sitemap.xml. New services, roles, posts and (real) case
// studies are included automatically when you add them to lib/*.js.
export default function sitemap() {
  const u = (path) => `${SITE.url}${path}`;
  const now = new Date();

  const staticPages = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/hire-developers", priority: 0.9, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
  ].map((p) => ({ url: u(p.path), lastModified: now, changeFrequency: p.changeFrequency, priority: p.priority }));

  const servicePages = services.map((s) => ({
    url: u(`/services/${s.slug}`), lastModified: now, changeFrequency: "monthly", priority: 0.9,
  }));
  const rolePages = roles.map((r) => ({
    url: u(`/hire-developers/${r.slug}`), lastModified: now, changeFrequency: "monthly", priority: 0.8,
  }));
  const postPages = posts.map((p) => ({
    url: u(`/blog/${p.slug}`), lastModified: new Date(p.updated || p.date), changeFrequency: "monthly", priority: 0.6,
  }));

  // Placeholder case studies stay OUT of the sitemap.
  const real = caseStudies.filter((c) => !c.placeholder);
  const casePages = real.length
    ? [
        { url: u("/case-studies"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        ...real.map((c) => ({ url: u(`/case-studies/${c.slug}`), lastModified: new Date(c.date), changeFrequency: "yearly", priority: 0.6 })),
      ]
    : [];

  return [...staticPages, ...servicePages, ...rolePages, ...postPages, ...casePages];
}
