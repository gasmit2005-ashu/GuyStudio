import Reveal from "../fitzone/Reveal.jsx";
import { GarmentArt } from "./VantaArt.jsx";
import { lookbook } from "./content.js";
import { btnOutline, container, eyebrow, h2, sectionPad } from "./ui.js";

export default function VantaLookbook() {
  return (
    <section className={sectionPad}>
      <div className={container}>
        <Reveal className="max-w-xl">
          <p className={eyebrow}>Lookbook</p>
          <h2 className={h2}>The Latest Drop</h2>
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {lookbook.map((l, i) => (
            <Reveal key={l.label} delay={i * 80}>
              <div className="group relative aspect-[3/4] overflow-hidden bg-vt-surface">
                {l.image ? (
                  <img src={l.image} alt={l.label} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                ) : (
                  <GarmentArt index={l.art} className="h-full w-full p-10 transition duration-500 group-hover:scale-105" />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                  <p className="text-sm font-medium text-vt-paper">{l.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#vt-collections" className={btnOutline}>Explore the Collection</a>
        </div>
      </div>
    </section>
  );
}
