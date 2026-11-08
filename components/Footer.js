import Link from "next/link";
import { SITE } from "@/lib/site";
import { services } from "@/lib/services";
import { roles } from "@/lib/roles";

// Footer doubles as an internal-linking hub: every service, hiring page and
// key section is one click from every page — good for crawling and for users.
export default function Footer({ links = [] }) {
  const company = links.filter((l) => !["/services", "/hire-developers"].includes(l.href));

  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-mono text-lg text-ink">
              <span className="text-teal">&gt;_</span>techvech
            </Link>
            <p className="mt-3.5 max-w-[260px] text-[13.5px] text-muted">
              A software studio and developer network building websites, mobile apps and AI
              products — or the team to build them with you.
            </p>
          </div>

          <FooterCol
            title="Services"
            links={services.map((s) => ({ label: s.name, href: `/services/${s.slug}` }))}
          />
          <FooterCol
            title="Hire Developers"
            links={roles.map((r) => ({ label: r.name, href: `/hire-developers/${r.slug}` }))}
          />
          <FooterCol title="Company" links={company} />
          <FooterCol
            title="Contact"
            links={[
              { label: SITE.email, href: `mailto:${SITE.email}` },
              { label: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, "")}` },
              { label: SITE.address.full, href: "/contact" },
            ]}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted">
          <span>© {new Date().getFullYear()} TechVech. All rights reserved.</span>
          <div className="flex flex-wrap gap-5">
            {SITE.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...(s.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer me" })}
                className="transition-colors hover:text-ink"
              >
                {s.label}
              </a>
            ))}
            <Link href="/privacy-policy" className="transition-colors hover:text-ink">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-ink">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h2 className="mb-4 font-mono text-xs uppercase tracking-wide text-muted">{title}</h2>
      <div className="flex flex-col gap-2.5">
        {links.map((link) => {
          const external = link.href.startsWith("mailto:") || link.href.startsWith("tel:");
          const cls = "text-sm text-muted transition-colors hover:text-ink";
          return external ? (
            <a key={link.label} href={link.href} className={cls}>{link.label}</a>
          ) : (
            <Link key={link.label} href={link.href} className={cls}>{link.label}</Link>
          );
        })}
      </div>
    </div>
  );
}
