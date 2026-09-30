import Reveal from "./Reveal.jsx";
import { RingsArt } from "./FitZoneArt.jsx";
import { btnGhost, btnPrimary, container } from "./ui.js";

const week = [
  { day: "Mon", what: "Strength" },
  { day: "Wed", what: "Functional" },
  { day: "Fri", what: "Mobility" },
];

export default function FitZoneHero({ onBook }) {
  return (
    <section id="fz-top" className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
      <div className={`${container} grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]`}>
        <div>
          <p className="mb-5 text-sm font-semibold text-fz-accent">Premium neighbourhood fitness studio</p>
          <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Train Smart.
            <span className="block text-fz-accent">Live Stronger.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fz-muted">
            Personalized training, flexible schedules, and a supportive fitness community designed for working professionals.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <button onClick={onBook} className={btnPrimary}>Book Your Free Trial</button>
            <a href="#fz-programs" className={btnGhost}>Explore Programs</a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <RingsArt className="w-full" />
          <Reveal className="absolute bottom-2 left-2 right-2 sm:bottom-6 sm:left-auto sm:right-0 sm:w-64">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md">
              <p className="text-xs text-fz-muted">Sample week</p>
              <ul className="mt-3 space-y-2.5">
                {week.map((w) => (
                  <li key={w.day} className="flex items-center justify-between text-sm text-white">
                    <span className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-fz-accent" />
                      {w.what}
                    </span>
                    <span className="text-fz-muted">{w.day}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
