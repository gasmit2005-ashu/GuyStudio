import Reveal from "./Reveal.jsx";
import { pillars } from "./content.js";
import { container, eyebrow, h2, sectionPad } from "./ui.js";

export default function FitZoneAbout() {
  return (
    <>
      {/* Trust / value */}
      <section className="border-y border-white/10 bg-fz-surface">
        <div className={`${container} grid gap-px py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8`}>
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="py-4">
              <h3 className="font-display text-base font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fz-muted">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="fz-about" className={sectionPad}>
        <div className={`${container} grid gap-12 lg:grid-cols-2`}>
          <Reveal>
            <p className={eyebrow}>About FitZone</p>
            <h2 className={h2}>An everyday fitness partner, not just a gym.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-fz-muted">
              FitZone is a premium neighbourhood fitness studio designed to be an everyday fitness partner. It is
              built for young adults and working professionals in urban India who want real coaching, a schedule
              that respects their time, and a community that keeps them coming back.
            </p>
            <p className="mt-5 leading-relaxed text-fz-muted">
              The approach is simple: keep the experience premium without making it intimidating, and put
              coaching and accountability ahead of competition.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
