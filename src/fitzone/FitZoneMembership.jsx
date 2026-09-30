import Reveal from "./Reveal.jsx";
import { FITZONE_WHATSAPP, plans } from "./content.js";
import { btnGhost, btnPrimary, container, eyebrow, h2, sectionPad } from "./ui.js";

export default function FitZoneMembership({ onBook }) {
  return (
    <section id="fz-membership" className={sectionPad}>
      <div className={container}>
        <Reveal className="max-w-xl">
          <p className={eyebrow}>Membership</p>
          <h2 className={h2}>Three ways to train with FitZone.</h2>
          <p className="mt-4 text-fz-muted">Pricing on enquiry. Choose a plan and the team will guide you.</p>
        </Reveal>
        <div className="mt-12 grid items-stretch gap-5 md:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <article
                className={`flex h-full flex-col rounded-2xl p-8 ${
                  p.featured ? "border-2 border-fz-accent bg-fz-surface" : "border border-white/10 bg-fz-surface"
                }`}
              >
                <h3 className="font-display text-xl font-semibold text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-fz-muted">{p.tagline}</p>
                <p className="mt-6 font-display text-lg font-semibold text-fz-accent">Pricing on enquiry</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-fz-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col gap-3">
                  <button onClick={onBook} className={p.featured ? btnPrimary : btnGhost}>
                    Book Your Free Trial
                  </button>
                  <a
                    href={`https://wa.me/${FITZONE_WHATSAPP}?text=${encodeURIComponent(`Hi FitZone, I'd like to know more about the ${p.name} plan.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-sm text-fz-muted transition hover:text-white"
                  >
                    Ask about {p.name} on WhatsApp
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
