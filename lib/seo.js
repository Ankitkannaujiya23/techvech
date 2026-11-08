import { SITE } from "@/lib/site";

// Builds consistent per-page metadata: title, description, canonical URL,
// Open Graph and Twitter tags. Images come from app/opengraph-image.js.
export function pageMetadata({
  title,
  description,
  path = "/",
  type = "website",
  noindex = false,
  publishedTime,
  modifiedTime,
}) {
  const fullTitle = `${title} | ${SITE.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: SITE.name,
      title: fullTitle,
      description,
      locale: "en_IN",
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
    ...(noindex && { robots: { index: false, follow: false } }),
  };
}
