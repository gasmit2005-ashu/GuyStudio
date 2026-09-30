import { useEffect, useState } from "react";
import { currency } from "./content.js";
import { useCart } from "./CartContext.jsx";
import { btnSolid } from "./ui.js";

export default function BagDrawer() {
  const { bagOpen, closeBag, lines, subtotal, setQty, removeItem } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  useEffect(() => {
    if (!bagOpen) return;
    setCheckedOut(false);
    document.body.style.overflow = "hidden";
    function onKey(e) {
      if (e.key === "Escape") closeBag();
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [bagOpen, closeBag]);

  if (!bagOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/70 backdrop-blur-sm" onMouseDown={(e) => e.target === e.currentTarget && closeBag()}>
      <aside role="dialog" aria-modal="true" aria-label="Shopping bag" className="flex h-full w-full max-w-md flex-col bg-vt-surface">
        <div className="flex items-center justify-between border-b border-vt-line p-6">
          <h2 className="font-display text-lg font-bold uppercase tracking-wide text-vt-paper">Your Bag ({lines.reduce((n, l) => n + l.qty, 0)})</h2>
          <button onClick={closeBag} aria-label="Close bag" className="flex h-9 w-9 items-center justify-center rounded-full border border-vt-line text-vt-paper/70 hover:text-vt-paper">✕</button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {lines.length === 0 ? (
            <p className="text-sm text-vt-muted">Your bag is empty. Add a product to see it here.</p>
          ) : checkedOut ? (
            <div className="py-8 text-center">
              <p className="font-display text-xl font-bold text-vt-paper">Demo Checkout</p>
              <p className="mt-3 text-sm leading-relaxed text-vt-muted">
                This is a portfolio concept — payment functionality is not connected. In a live Vanta store, this is
                where checkout and payment would happen.
              </p>
            </div>
          ) : (
            <ul className="space-y-6">
              {lines.map((l) => (
                <li key={`${l.id}__${l.size}`} className="flex gap-4">
                  <div className="h-20 w-16 shrink-0 bg-vt-bg" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-medium text-vt-paper">{l.product?.name}</p>
                      <button onClick={() => removeItem(l.id, l.size)} className="text-xs text-vt-muted hover:text-vt-paper" aria-label={`Remove ${l.product?.name}`}>Remove</button>
                    </div>
                    <p className="mt-1 text-xs text-vt-muted">Size {l.size}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="inline-flex items-center border border-vt-line">
                        <button onClick={() => setQty(l.id, l.size, l.qty - 1)} className="h-8 w-8 text-vt-paper hover:bg-white/5" aria-label="Decrease quantity">−</button>
                        <span className="w-8 text-center text-xs text-vt-paper">{l.qty}</span>
                        <button onClick={() => setQty(l.id, l.size, l.qty + 1)} className="h-8 w-8 text-vt-paper hover:bg-white/5" aria-label="Increase quantity">+</button>
                      </div>
                      <p className="text-sm font-semibold text-vt-paper">{currency((l.product?.price || 0) * l.qty)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && !checkedOut && (
          <div className="border-t border-vt-line p-6">
            <div className="flex items-center justify-between text-sm text-vt-paper">
              <span>Subtotal</span>
              <span className="font-semibold">{currency(subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-vt-muted">Shipping and taxes calculated at checkout.</p>
            <button onClick={() => setCheckedOut(true)} className={`${btnSolid} mt-5 w-full`}>Demo Checkout</button>
          </div>
        )}
        {checkedOut && (
          <div className="border-t border-vt-line p-6">
            <button onClick={closeBag} className={`${btnSolid} w-full`}>Continue Browsing</button>
          </div>
        )}
      </aside>
    </div>
  );
}
