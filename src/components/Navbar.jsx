import { useEffect, useState } from "react";
import Logo from "./Logo.jsx";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Our Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="container-content flex items-center justify-between h-20">
        <a href="#home" aria-label="GuyStudio home">
          <Logo markClassName="w-14 h-14" />
        </a>

        <div className="hidden xl:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/70 hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a href="#audit" className="hidden xl:inline-flex btn-primary text-sm px-5 py-3">
          Get Free AI Audit
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="xl:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`h-0.5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div className="xl:hidden bg-paper border-t border-line px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-ink/80"
            >
              {l.label}
            </a>
          ))}
          <a href="#audit" onClick={() => setOpen(false)} className="btn-primary mt-2">
            Get Free AI Audit
          </a>
        </div>
      )}
    </header>
  );
}
