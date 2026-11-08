import { caseStudies } from "@/lib/caseStudies";

// Primary navigation. "Case Studies" only appears once there is at least one
// real (non-placeholder) case study to show in production.
export function getNavLinks() {
  return [
    { href: "/services", label: "Services" },
    { href: "/hire-developers", label: "Hire Developers" },
    ...(caseStudies.length ? [{ href: "/case-studies", label: "Case Studies" }] : []),
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
}
