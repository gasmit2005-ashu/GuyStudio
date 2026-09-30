import Reveal from "./Reveal.jsx";
import { btnPrimary, container } from "./ui.js";

export default function FitZoneTrialCTA({ onBook }) {
  return (
    <section className="pb-20 md:pb-28">
      <div className={container}>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-fz-accent/30 bg-fz-surface px-6 py-14 text-center sm:px-12 md:py-20">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[14px] border-fz-accent/10" aria-hidden="true" />
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
              Ready to train smart?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-fz-muted">
              Try FitZone with a free trial session and see how it fits into your week.
            </p>
            <button onClick={onBook} className={`${btnPrimary} mt-8`}>Book Your Free Trial</button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
