import { HeroCampaignArt } from "./VantaArt.jsx";
import { btnOutline, btnSolid, container } from "./ui.js";

export default function VantaHero() {
  return (
    <section id="vt-top" className="relative overflow-hidden">
      <div className={`${container} grid min-h-[86vh] items-center gap-10 py-16 lg:grid-cols-2 lg:py-0`}>
        <div className="relative z-10">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-vt-muted">
            Premium contemporary streetwear
          </p>
          <h1 className="font-display text-6xl font-extrabold uppercase leading-[0.95] tracking-tight text-vt-paper sm:text-7xl lg:text-8xl">
            Wear Your
            <span className="block">Edge.</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-vt-muted">
            Modern essentials designed for people who move differently.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#vt-arrivals" className={btnSolid}>Shop New Arrivals</a>
            <a href="#vt-collections" className={btnOutline}>Explore Collection</a>
          </div>
        </div>

        <div className="relative -mx-5 aspect-[3/4] sm:mx-0 lg:aspect-auto lg:h-[80vh]">
          <HeroCampaignArt className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}
