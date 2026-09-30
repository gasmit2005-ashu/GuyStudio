import Reveal from "../fitzone/Reveal.jsx";
import { principles } from "./content.js";
import { container, eyebrow, h2, sectionPad } from "./ui.js";

export default function VantaAbout() {
  return (
    <>
      <section id="vt-about" className={sectionPad}>
        <div className={`${container} grid gap-12 lg:grid-cols-2`}>
          <Reveal>
            <p className={eyebrow}>The Vanta Standard</p>
            <h2 className={h2}>Clean Lines. Confident Everyday Wear.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base leading-relaxed text-vt-muted">
              Vanta focuses on clean silhouettes, versatile essentials, and modern streetwear designed for everyday
              confidence. Every piece is built to move between a workday and a weekend without losing its edge.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-vt-muted">
              This is a concept brand created for GuyStudio's portfolio — a demonstration of what a complete
              fashion/e-commerce experience could look like, not a real label.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={`${sectionPad} bg-vt-surface`}>
        <div className={container}>
          <Reveal className="max-w-xl">
            <p className={eyebrow}>Why Vanta</p>
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden border border-vt-line sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 70}>
                <div className="h-full bg-vt-bg p-7">
                  <span className="font-display text-sm font-semibold text-vt-muted">{p.n}</span>
                  <h3 className="mt-4 font-display text-base font-bold uppercase tracking-wide text-vt-paper">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-vt-muted">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
