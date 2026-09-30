import { useState } from "react";
import BackToGuyStudio from "./BackToGuyStudio.jsx";
import { navLinks } from "./content.js";
import { btnPrimary, container } from "./ui.js";

export default function FitZoneNavbar({ onBook }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Portfolio disclosure + way back to the agency site */}
      <div className="sticky top-0 z-[60] border-b border-white/10 bg-black text-xs text-white/70">
        <div className={`${container} flex h-10 items-center justify-between`}>
          <BackToGuyStudio className="inline-flex items-center rounded-full bg-fz-accent px-3.5 py-1 text-xs font-bold text-fz-bg transition hover:brightness-110" />
          <span>
            <span className="sm:hidden">Portfolio Demo</span>
            <span className="hidden sm:inline">Concept Website · Portfolio Demo</span>
          </span>
        </div>
      </div>

      <header className="sticky top-10 z-50 border-b border-white/10 bg-fz-bg/85 backdrop-blur-md">
        <nav className={`${container} flex h-16 items-center justify-between`}>
          <a href="#fz-top" className="flex items-center gap-2 font-display text-lg font-extrabold tracking-wide text-white">
            <span className="h-3 w-3 rotate-45 bg-fz-accent" aria-hidden="true" />
            FITZONE
          </a>
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/70 transition hover:text-white">
                {l.label}
              </a>
            ))}
          </div>
          <button onClick={onBook} className={`${btnPrimary} hidden !py-2.5 lg:inline-flex`}>
            Book Your Free Trial
          </button>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span className="flex w-6 flex-col gap-1.5">
              <span className={`h-0.5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </nav>
        {open && (
          <div className="flex flex-col gap-4 border-t border-white/10 bg-fz-bg px-5 py-6 lg:hidden">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base text-white/80">
                {l.label}
              </a>
            ))}
            <BackToGuyStudio className="text-base font-semibold text-fz-accent" />
            <button
              onClick={() => {
                setOpen(false);
                onBook();
              }}
              className={`${btnPrimary} mt-2`}
            >
              Book Your Free Trial
            </button>
          </div>
        )}
      </header>
    </>
  );
}
