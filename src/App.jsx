import { Suspense, useLayoutEffect } from "react";
import { useDocumentMeta, usePath } from "./lib/router.jsx";
import { findProject } from "./portfolio/projects.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import OurWork from "./components/OurWork.jsx";
import Pricing from "./components/Pricing.jsx";
import FreeAudit from "./components/FreeAudit.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function Home() {
  useDocumentMeta(
    "GuyStudio — We Build. Automate. Grow.",
    "GuyStudio helps Indian local businesses grow online with AI content, professional websites, lead generation and automation."
  );
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <HowItWorks />
        <OurWork />
        <Pricing />
        <FreeAudit />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function DemoLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink text-sm text-white/60" role="status">
      Loading demo…
    </div>
  );
}

export default function App() {
  const path = usePath();
  const match = path.match(/^\/portfolio\/([^/]+)\/?$/);
  const project = match ? findProject(match[1]) : null;

  // Scroll handling between GuyStudio and demo pages (incl. browser Back/Forward)
  useLayoutEffect(() => {
    const jump = (top) => window.scrollTo({ top, behavior: "instant" });
    if (project) return jump(0);
    const { hash } = window.location;
    const el = hash ? document.getElementById(hash.slice(1)) : null;
    if (el) return el.scrollIntoView({ behavior: "instant" });
    const saved = window.history.state?.scrollY;
    jump(typeof saved === "number" ? saved : 0);
  }, [path, project]);

  if (project) {
    const { Demo } = project;
    return (
      <Suspense fallback={<DemoLoading />}>
        <Demo />
      </Suspense>
    );
  }
  return <Home />;
}
