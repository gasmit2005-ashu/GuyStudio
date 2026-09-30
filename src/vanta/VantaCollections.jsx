import Reveal from "../fitzone/Reveal.jsx";
import { GarmentArt } from "./VantaArt.jsx";
import { collections } from "./content.js";
import { container, eyebrow, h2, sectionPad } from "./ui.js";

export default function VantaCollections() {
  return (
    <section id="vt-collections" className={`${sectionPad} bg-vt-surface`}>
      <div className={container}>
        <Reveal className="max-w-xl">
          <p className={eyebrow}>The Core Collection</p>
          <h2 className={h2}>Built for Everyday Movement</h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden border border-vt-line sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((c, i) => (
            <Reveal key={c.name} delay={i * 70}>
              <div className="group relative flex aspect-[3/4] flex-col justify-end bg-vt-bg p-6">
                <GarmentArt index={i} className="absolute inset-6 bottom-16 opacity-40 transition duration-500 group-hover:opacity-70" />
                <h3 className="relative font-display text-lg font-bold uppercase tracking-wide text-vt-paper">{c.name}</h3>
                <p className="relative mt-2 text-xs leading-relaxed text-vt-muted">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
