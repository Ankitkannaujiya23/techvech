import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import HireDevelopers from "@/components/HireDevelopers";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import LatestPosts from "@/components/LatestPosts";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { homeFaqs } from "@/lib/homeFaqs";

// Navbar + Footer now live in app/layout.js so every page shares them.
export default function HomePage() {
  return (
    <main id="main">
      <Hero />
      <TrustBar />
      <Services />
      <HireDevelopers />
      <Process />
      <WhyUs />
      <TechStack />
      <Testimonials />
      <LatestPosts />
      <FAQ items={homeFaqs} />
      <Contact />
    </main>
  );
}
