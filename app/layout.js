import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import { SITE } from "@/lib/site";
import { getNavLinks } from "@/lib/nav";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f8fa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f19" },
  ],
};

// Site-wide defaults. Individual pages override title/description/canonical
// through lib/seo.js -> pageMetadata(). Social images come automatically from
// app/opengraph-image.js and app/twitter-image.js.
export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "TechVech — Websites, Mobile Apps & AI Products. Or Hire the Developers Who Build Them.",
    template: "%s | TechVech",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "TechVech",
    "website development company",
    "mobile app development company",
    "AI development company",
    "hire developers India",
    "software development agency",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "technology",
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [{ url: "/feed.xml", title: "TechVech Blog" }] },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE.name,
    locale: "en_IN",
    title: "TechVech — Build Your Product, Or Hire the Team That Can",
    description:
      "Websites, mobile apps and AI systems built by TechVech's in-house team — or hire vetted developers directly for your own team.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechVech — Build Your Product, Or Hire the Team That Can",
    description:
      "Websites, mobile apps and AI systems — built in-house, or by developers you hire directly.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  // Set NEXT_PUBLIC_GOOGLE_VERIFICATION to the token Google Search Console gives you.
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-teal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-canvas"
          >
            Skip to content
          </a>
          <Navbar links={getNavLinks()} />
          {children}
          <Footer links={getNavLinks()} />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
