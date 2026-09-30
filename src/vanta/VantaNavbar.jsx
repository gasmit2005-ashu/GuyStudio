import { useState } from "react";
import BackToGuyStudio from "../lib/BackToGuyStudio.jsx";
import { navLinks } from "./content.js";
import { useCart } from "./CartContext.jsx";
import { container } from "./ui.js";

function Icon({ d, className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={d} />
    </svg>
  );
}
const ICONS = {
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-5.4-5.4",
  account: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 9a8 8 0 0 1 16 0",
  heart: "M12 20s-7-4.35-9.5-8.8C.7 8 2.2 4.5 5.8 4.1c2-.2 3.6.9 4.2 2.4.6-1.5 2.2-2.6 4.2-2.4 3.6.4 5.1 3.9 3.3 7.1C19 15.65 12 20 12 20Z",
  bag: "M6 8h12l-1 12H7L6 8Zm3 0V6a3 3 0 1 1 6 0v2",
};

export default function VantaNavbar({ onSelectFilter }) {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const { count, wishlist, openBag } = useCart();

  return (
    <>
      <div className="sticky top-0 z-[60] border-b border-vt-line bg-black text-xs text-vt-paper/70">
        <div className={`${container} flex h-10 items-center justify-between`}>
          <BackToGuyStudio className="font-semibold text-vt-paper hover:text-white" />
          <span>
            <span className="sm:hidden">Portfolio Demo</span>
            <span className="hidden sm:inline">Concept Website · Portfolio Demo</span>
          </span>
        </div>
      </div>

      <header className="sticky top-10 z-50 border-b border-vt-line bg-vt-bg/90 backdrop-blur-md">
        <nav className={`${container} flex h-18 items-center justify-between py-4`}>
          <a href="#vt-top" className="font-display text-xl font-extrabold tracking-[0.28em] text-vt-paper">
            VANTA
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => l.filter && onSelectFilter?.(l.filter)}
                className="text-xs font-medium uppercase tracking-[0.12em] text-vt-paper/70 transition hover:text-vt-paper"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3">
            <div className="relative hidden sm:block">
              <button aria-label="Search" onClick={() => setSearchOpen((v) => !v)} className="flex h-10 w-10 items-center justify-center text-vt-paper/80 hover:text-vt-paper">
                <Icon d={ICONS.search} />
              </button>
              {searchOpen && (
                <div className="absolute right-0 top-11 w-64 rounded-lg border border-vt-line bg-vt-surface p-3 shadow-2xl">
                  <input
                    autoFocus
                    placeholder="Search products (demo)"
                    className="w-full border-b border-vt-line bg-transparent pb-2 text-sm text-vt-paper outline-none placeholder:text-vt-muted"
                  />
                </div>
              )}
            </div>
            <div className="relative hidden sm:block">
              <button aria-label="Account" onClick={() => setAccountOpen((v) => !v)} className="flex h-10 w-10 items-center justify-center text-vt-paper/80 hover:text-vt-paper">
                <Icon d={ICONS.account} />
              </button>
              {accountOpen && (
                <div className="absolute right-0 top-11 w-56 rounded-lg border border-vt-line bg-vt-surface p-4 text-xs text-vt-muted shadow-2xl">
                  Demo account · sign-in is not connected in this portfolio concept.
                </div>
              )}
            </div>
            <a href="#vt-arrivals" aria-label="Wishlist" className="relative hidden h-10 w-10 items-center justify-center text-vt-paper/80 hover:text-vt-paper sm:flex">
              <Icon d={ICONS.heart} />
              {wishlist.size > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-vt-paper text-[10px] font-bold text-vt-bg">
                  {wishlist.size}
                </span>
              )}
            </a>
            <button aria-label="Shopping bag" onClick={openBag} className="relative flex h-10 w-10 items-center justify-center text-vt-paper/80 hover:text-vt-paper">
              <Icon d={ICONS.bag} />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-vt-paper text-[10px] font-bold text-vt-bg">
                  {count}
                </span>
              )}
            </button>
            <button
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center lg:hidden"
            >
              <span className="flex w-6 flex-col gap-1.5">
                <span className={`h-0.5 bg-vt-paper transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
                <span className={`h-0.5 bg-vt-paper transition-opacity ${open ? "opacity-0" : ""}`} />
                <span className={`h-0.5 bg-vt-paper transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </nav>
        {open && (
          <div className="flex flex-col gap-4 border-t border-vt-line bg-vt-bg px-5 py-6 lg:hidden">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => {
                  setOpen(false);
                  l.filter && onSelectFilter?.(l.filter);
                }}
                className="text-sm font-medium uppercase tracking-[0.12em] text-vt-paper/85"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-5 border-t border-vt-line pt-4 text-vt-paper/80">
              <Icon d={ICONS.search} />
              <Icon d={ICONS.account} />
              <span className="flex items-center gap-1.5">
                <Icon d={ICONS.heart} /> {wishlist.size}
              </span>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
