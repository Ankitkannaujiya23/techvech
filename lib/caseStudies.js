import { SHOW_PLACEHOLDERS } from "@/lib/site";

// ---------------------------------------------------------------------------
// CASE STUDIES — PLACEHOLDERS.
// These three entries are templates, NOT real projects. While
// `placeholder: true` they are hidden in production, excluded from
// sitemap.xml and marked noindex, so fake content never reaches Google.
// To publish: replace the text with a real project (with client permission),
// set `placeholder: false`.
// ---------------------------------------------------------------------------

const allCaseStudies = [
  {
    slug: "retail-ecommerce-platform",
    placeholder: true,
    title: "[Project name] — E-commerce platform rebuild",
    client: "[Client name or 'Retail brand, India']",
    industry: "Retail / E-commerce",
    service: "Website Development",
    summary: "[One-sentence summary of what you built and for whom.]",
    challenge: "[What problem was the client facing before working with you?]",
    solution: "[What did you build and how? Mention stack, approach, notable decisions.]",
    results: [
      { value: "XX%", label: "[Real result metric]" },
      { value: "XX", label: "[Real result metric]" },
      { value: "XX", label: "[Real result metric]" },
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    date: "2026-11-01",
  },
  {
    slug: "fintech-mobile-app",
    placeholder: true,
    title: "[Project name] — Fintech mobile app",
    client: "[Client name or 'Fintech startup']",
    industry: "Fintech",
    service: "Mobile App Development",
    summary: "[One-sentence summary of what you built and for whom.]",
    challenge: "[What problem was the client facing before working with you?]",
    solution: "[What did you build and how? Mention stack, approach, notable decisions.]",
    results: [
      { value: "XX%", label: "[Real result metric]" },
      { value: "XX", label: "[Real result metric]" },
      { value: "XX", label: "[Real result metric]" },
    ],
    stack: ["Flutter", "Firebase", "Node.js"],
    date: "2026-10-15",
  },
  {
    slug: "healthtech-ai-automation",
    placeholder: true,
    title: "[Project name] — AI document automation",
    client: "[Client name or 'Healthtech company']",
    industry: "Healthtech",
    service: "AI Development",
    summary: "[One-sentence summary of what you built and for whom.]",
    challenge: "[What problem was the client facing before working with you?]",
    solution: "[What did you build and how? Mention stack, approach, notable decisions.]",
    results: [
      { value: "XX%", label: "[Real result metric]" },
      { value: "XX", label: "[Real result metric]" },
      { value: "XX", label: "[Real result metric]" },
    ],
    stack: ["Python", "OpenAI API", "FastAPI"],
    date: "2026-09-30",
  },
];

// Only these are shown / indexed. In production, placeholders drop out.
export const caseStudies = allCaseStudies.filter((c) => SHOW_PLACEHOLDERS || !c.placeholder);

export const getCaseStudy = (slug) => caseStudies.find((c) => c.slug === slug);
