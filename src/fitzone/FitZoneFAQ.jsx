import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { faqs } from "./content.js";
import { container, eyebrow, h2, sectionPad } from "./ui.js";

export default function FitZoneFAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="fz-faq" className={sectionPad}>
      <div className={`${container} max-w-3xl`}>
        <Reveal>
          <p className={eyebrow}>FAQ</p>
          <h2 className={h2}>Good to know.</h2>
        </Reveal>
        <div className="mt-10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-white/10">
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-base font-medium text-white md:text-lg"
                  >
                    {f.q}
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/25 text-fz-muted transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                </h3>
                {isOpen && <p className="max-w-2xl pb-6 leading-relaxed text-fz-muted">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
