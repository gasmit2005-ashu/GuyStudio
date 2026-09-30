import Reveal from "./Reveal.jsx";
import { schedule } from "./content.js";
import { container, eyebrow, h2, sectionPad } from "./ui.js";

export default function FitZoneSchedule() {
  return (
    <section id="fz-schedule" className={sectionPad}>
      <div className={container}>
        <Reveal className="max-w-xl">
          <p className={eyebrow}>Built for your schedule</p>
          <h2 className={h2}>Your day is busy. Your training fits in.</h2>
          <p className="mt-4 text-fz-muted">Pick the time of day that works and build the habit around it.</p>
        </Reveal>
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {schedule.map((s, i) => (
            <li key={s.slot} className="bg-fz-bg p-7">
              <Reveal delay={i * 80}>
                <h3 className="font-display text-lg font-semibold text-white">{s.slot}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fz-muted">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
