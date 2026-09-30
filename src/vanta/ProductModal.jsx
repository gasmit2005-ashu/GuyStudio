import { useEffect, useRef, useState } from "react";
import { GarmentArt } from "./VantaArt.jsx";
import { currency, sizes } from "./content.js";
import { useCart } from "./CartContext.jsx";
import { btnOutline, btnSolid } from "./ui.js";

export default function ProductModal({ product, onClose }) {
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const dialogRef = useRef(null);
  const { addItem, openBag } = useCart();

  useEffect(() => {
    if (!product) return;
    setSize("M");
    setQty(1);
    setAdded(false);
    const previous = document.activeElement;
    document.body.style.overflow = "hidden";
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, [product, onClose]);

  if (!product) return null;

  function addToBag(thenOpenBag) {
    addItem(product.id, size, qty);
    setAdded(true);
    if (thenOpenBag) {
      openBag();
      onClose();
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/75 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="vt-product-title"
        className="grid max-h-[94vh] w-full max-w-3xl grid-cols-1 overflow-y-auto rounded-t-2xl bg-vt-surface sm:grid-cols-2 sm:rounded-2xl"
      >
        <div className="relative flex aspect-square items-center justify-center bg-vt-bg sm:aspect-auto">
          <GarmentArt index={product.art} className="h-2/3 w-2/3" />
          <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-vt-line text-vt-paper/70 hover:text-vt-paper sm:hidden">
            ✕
          </button>
        </div>

        <div className="relative p-6 sm:p-8">
          <button onClick={onClose} aria-label="Close" className="absolute right-6 top-6 hidden h-9 w-9 items-center justify-center rounded-full border border-vt-line text-vt-paper/70 hover:text-vt-paper sm:flex">
            ✕
          </button>
          {product.tag && <span className="text-xs font-semibold uppercase tracking-wide text-vt-muted">{product.tag}</span>}
          <h2 id="vt-product-title" className="mt-2 font-display text-2xl font-bold text-vt-paper">{product.name}</h2>
          <p className="mt-2 text-lg font-semibold text-vt-paper">{currency(product.price)}</p>
          <p className="mt-4 text-sm leading-relaxed text-vt-muted">
            A concept product from the Vanta demo store — clean lines, relaxed proportions, made for everyday wear.
          </p>

          <div className="mt-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-vt-muted">Size</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`h-10 w-10 border text-sm font-medium transition ${
                    size === s ? "border-vt-paper bg-vt-paper text-vt-bg" : "border-vt-line text-vt-paper/80 hover:border-vt-paper/60"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-vt-muted">Quantity</p>
            <div className="inline-flex items-center border border-vt-line">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="h-10 w-10 text-vt-paper hover:bg-white/5" aria-label="Decrease quantity">−</button>
              <span className="w-10 text-center text-sm text-vt-paper">{qty}</span>
              <button onClick={() => setQty((q) => Math.min(9, q + 1))} className="h-10 w-10 text-vt-paper hover:bg-white/5" aria-label="Increase quantity">+</button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => addToBag(false)} className={`${btnOutline} flex-1`}>Add to Bag</button>
            <button onClick={() => addToBag(true)} className={`${btnSolid} flex-1`}>Buy Now</button>
          </div>
          {added && <p className="mt-3 text-xs text-vt-muted">Added to bag · size {size} · demo only, nothing is charged.</p>}
        </div>
      </div>
    </div>
  );
}
