import Reveal from "./Reveal.jsx";
import { FITZONE_EMAIL, FITZONE_WHATSAPP } from "./content.js";
import { btnGhost, btnPrimary, container, eyebrow, h2, sectionPad } from "./ui.js";

export default function FitZoneContact({ onBook }) {
  return (
    <section id="fz-contact" className={`${sectionPad} bg-fz-surface`}>
      <div className={`${container} grid gap-10 lg:grid-cols-2`}>
        <Reveal>
          <p className={eyebrow}>Contact</p>
          <h2 className={h2}>Talk to the FitZone team.</h2>
          <p className="mt-4 max-w-md text-fz-muted">
            The quickest way to get answers is WhatsApp. Or book a free trial and we will get in touch.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-2xl border border-white/10 bg-fz-bg p-7">
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${FITZONE_WHATSAPP}?text=${encodeURIComponent("Hi FitZone, I'd like to know more.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary}
              >
                Chat on WhatsApp
              </a>
              <button onClick={onBook} className={btnGhost}>Book Your Free Trial</button>
            </div>
            <dl className="mt-7 space-y-4 text-sm">
              <div>
                <dt className="text-fz-muted">Email</dt>
                <dd className="mt-0.5 break-all text-white">{FITZONE_EMAIL}</dd>
              </div>
              <div>
                <dt className="text-fz-muted">Location</dt>
                <dd className="mt-0.5 text-white">Shared on enquiry</dd>
              </div>
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
