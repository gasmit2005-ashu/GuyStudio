import { GarmentArt } from "./VantaArt.jsx";
import { currency } from "./content.js";
import { useCart } from "./CartContext.jsx";

export default function ProductCard({ product, onQuickView }) {
  const { wishlist, toggleWishlist, addItem, openBag } = useCart();
  const wished = wishlist.has(product.id);

  function quickAdd(e) {
    e.stopPropagation();
    addItem(product.id, "M", 1);
    openBag();
  }

  return (
    <article className="group">
      <button onClick={() => onQuickView(product)} className="relative block w-full overflow-hidden bg-vt-surface text-left">
        <div className="relative aspect-[4/5]">
          <GarmentArt index={product.art} className="absolute inset-0 h-full w-full p-10 transition duration-500 group-hover:scale-105" />
          {product.tag && (
            <span className="absolute left-3 top-3 bg-vt-paper px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-vt-bg">
              {product.tag}
            </span>
          )}
          <span
            role="button"
            tabIndex={0}
            aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
            onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
            onKeyDown={(e) => e.key === "Enter" && toggleWishlist(product.id)}
            className={`absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border transition ${
              wished ? "border-vt-paper bg-vt-paper text-vt-bg" : "border-vt-paper/30 text-vt-paper/80 hover:border-vt-paper"
            }`}
          >
            <svg viewBox="0 0 24 24" fill={wished ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
              <path d="M12 20s-7-4.35-9.5-8.8C.7 8 2.2 4.5 5.8 4.1c2-.2 3.6.9 4.2 2.4.6-1.5 2.2-2.6 4.2-2.4 3.6.4 5.1 3.9 3.3 7.1C19 15.65 12 20 12 20Z" />
            </svg>
          </span>

          <div className="absolute inset-x-0 bottom-0 flex translate-y-full gap-2 p-3 transition duration-300 group-hover:translate-y-0">
            <button
              onClick={(e) => { e.stopPropagation(); onQuickView(product); }}
              className="flex-1 border border-vt-paper/40 bg-vt-bg/80 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-vt-paper backdrop-blur hover:border-vt-paper"
            >
              Quick View
            </button>
            <button
              onClick={quickAdd}
              className="flex-1 bg-vt-paper py-2.5 text-[11px] font-semibold uppercase tracking-wide text-vt-bg hover:bg-white"
            >
              Add to Bag
            </button>
          </div>
        </div>
      </button>

      <div className="mt-3.5 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-medium text-vt-paper">{product.name}</h3>
          <p className="mt-1 text-xs uppercase tracking-wide text-vt-muted">{product.category}</p>
        </div>
        <p className="whitespace-nowrap text-sm font-semibold text-vt-paper">{currency(product.price)}</p>
      </div>
    </article>
  );
}
