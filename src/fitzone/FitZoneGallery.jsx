import Reveal from "./Reveal.jsx";
import { TileArt } from "./FitZoneArt.jsx";
import { gallery } from "./content.js";
import { container, eyebrow, h2, sectionPad } from "./ui.js";

export default function FitZoneGallery() {
  return (
    <section id="fz-gallery" className={`${sectionPad} bg-fz-surface`}>
      <div className={container}>
        <Reveal className="max-w-xl">
          <p className={eyebrow}>Inside the studio</p>
          <h2 className={h2}>Spaces designed for every kind of session.</h2>
        </Reveal>
        <div className="mt-12 grid auto-rows-[180px] gap-4 sm:grid-cols-2 md:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal key={g.label} delay={i * 60} className={g.span}>
              <figure className="relative flex h-full min-h-[180px] items-end overflow-hidden rounded-2xl border border-white/10 bg-fz-bg p-5">
                {g.image ? (
                  <img src={g.image} alt={g.label} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                ) : (
                  <TileArt index={g.art} className="absolute right-3 top-3 h-2/3 opacity-60" />
                )}
                <figcaption className="relative font-display text-sm font-semibold text-white">{g.label}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-xs text-fz-muted">Concept visuals · Demo project</p>
      </div>
    </section>
  );
}
