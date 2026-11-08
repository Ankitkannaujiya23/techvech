// ---------------------------------------------------------------------------
// Central site configuration. Every page, schema block and sitemap entry reads
// from here, so you only change contact details / socials in ONE place.
// Values marked PLACEHOLDER must be replaced with real data before launch.
// ---------------------------------------------------------------------------

const url = (process.env.NEXT_PUBLIC_SITE_URL || "https://techvech.com").replace(/\/$/, "");

export const SITE = {
  name: "TechVech",
  url,
  tagline: "Software studio & developer network",
  description:
    "TechVech designs and builds websites, mobile apps and AI products for startups and businesses — and connects you with vetted developers to hire directly for your own team.",

  // PLACEHOLDER — real contact details
  email: "techvechofficial@gmail.com",
  phone: "+91 8808247847",
  address: {
    locality: "Noida",
    region: "Delhi NCR",
    country: "IN",
    full: "Noida, Delhi NCR, India",
  },

  // PLACEHOLDER — put full https:// profile URLs. Entries left as "#" are
  // hidden from structured data automatically.
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "Twitter / X", href: "#" },
    { label: "GitHub", href: "#" },
  ],
};

// Placeholder case studies / content are hidden (and kept out of the sitemap
// + search results) in production unless you flip this on. Once you replace a
// case study with a real one, set its `placeholder` flag to false.
export const SHOW_PLACEHOLDERS =
  process.env.NODE_ENV !== "production" ||
  process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true";
