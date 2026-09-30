import BackToGuyStudio from "../lib/BackToGuyStudio.jsx";
import { footerLinks } from "./content.js";
import { container } from "./ui.js";

export default function VantaFooter() {
  return (
    <footer id="vt-legal" className="border-t border-vt-line py-16">
      <div className={`${container} grid gap-10 sm:grid-cols-2 lg:grid-cols-5`}>
        <div className="lg:col-span-1">
          <p className="font-display text-lg font-extrabold tracking-[0.28em] text-vt-paper">VANTA</p>
          <p className="mt-3 text-sm text-vt-muted">Wear your edge.</p>
        </div>
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <p className="text-xs font-semibold uppercase tracking-wide text-vt-muted">{group}</p>
            <ul className="mt-4 space-y-2.5">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-vt-muted hover:text-vt-paper"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={`${container} mt-10 flex flex-col gap-3 border-t border-vt-line pt-6 text-xs text-vt-muted sm:flex-row sm:items-center sm:justify-between`}>
        <p>Concept Website · Portfolio Demo — created by GuyStudio. Vanta is a fictional brand.</p>
        <BackToGuyStudio className="font-semibold text-vt-paper hover:text-white" />
      </div>
    </footer>
  );
}
