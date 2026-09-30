import { useState } from "react";
import Reveal from "../fitzone/Reveal.jsx";
import ProductCard from "./ProductCard.jsx";
import { categories, products } from "./content.js";
import { container, eyebrow, h2, sectionPad } from "./ui.js";

export default function VantaProductGrid({ onQuickView, filter, setFilter }) {
  const list = filter === "All" ? products : products.filter((p) => p.category === filter || p.category === "Unisex");

  return (
    <section id="vt-arrivals" className={sectionPad}>
      <div className={container}>
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className={eyebrow}>New Arrivals</p>
            <h2 className={h2}>The Latest Essentials</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                  filter === c ? "border-vt-paper bg-vt-paper text-vt-bg" : "border-vt-line text-vt-muted hover:border-vt-paper/50 hover:text-vt-paper"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 70}>
              <ProductCard product={p} onQuickView={onQuickView} />
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-vt-muted">Concept products · demo pricing · portfolio store</p>
      </div>
    </section>
  );
}
