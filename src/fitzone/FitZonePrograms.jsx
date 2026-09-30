import Reveal from "./Reveal.jsx";
import { programs } from "./content.js";
import { container, eyebrow, h2, sectionPad } from "./ui.js";

export default function FitZonePrograms() {
  return (
    <section id="fz-programs" className={`${sectionPad} bg-fz-surface`}>
      <div className={container}>
        <Reveal className="max-w-xl">
          <p className={eyebrow}>Programs</p>
          <h2 className={h2}>Training built around how you want to move.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 80}>
              <article className="group h-full rounded-2xl border border-white/10 bg-fz-bg p-7 transition duration-300 hover:-translate-y-1 hover:border-fz-accent/50">
                <span className="font-display text-sm font-semibold text-fz-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fz-muted">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
