import Reveal from "./Reveal.jsx";
import { trainers } from "./content.js";
import { container, eyebrow, h2, sectionPad } from "./ui.js";

export default function FitZoneTrainers() {
  return (
    <section id="fz-trainers" className={`${sectionPad} bg-fz-surface`}>
      <div className={container}>
        <Reveal className="max-w-xl">
          <p className={eyebrow}>Trainers</p>
          <h2 className={h2}>Coaches who keep you accountable.</h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {trainers.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <article className="h-full overflow-hidden rounded-2xl border border-white/10 bg-fz-bg">
                <div className="relative flex h-44 items-center justify-center bg-fz-surface2">
                  <span className="font-display text-5xl font-extrabold text-white/15">{t.name.slice(-1)}</span>
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 px-3 py-1 text-xs font-medium text-white/80">
                    Demo Profile
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-white">{t.name}</h3>
                  <p className="mt-1 text-sm font-medium text-fz-accent">{t.focus}</p>
                  <p className="mt-3 text-sm leading-relaxed text-fz-muted">{t.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
