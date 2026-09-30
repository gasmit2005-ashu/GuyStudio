import BackToGuyStudio from "./BackToGuyStudio.jsx";
import { navLinks } from "./content.js";
import { container } from "./ui.js";

export default function FitZoneFooter() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className={`${container} flex flex-col gap-8 md:flex-row md:items-start md:justify-between`}>
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-extrabold tracking-wide text-white">
            <span className="h-3 w-3 rotate-45 bg-fz-accent" aria-hidden="true" />
            FITZONE
          </p>
          <p className="mt-2 text-sm text-fz-muted">Train Smart. Live Stronger.</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-fz-muted">
          {navLinks.map((l) => (
            <li key={l.href}><a href={l.href} className="hover:text-white">{l.label}</a></li>
          ))}
        </ul>
      </div>
      <div className={`${container} mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-fz-muted sm:flex-row sm:items-center sm:justify-between`}>
        <p>Concept Website · Portfolio Demo — created by GuyStudio. FitZone is a fictional project.</p>
        <BackToGuyStudio className="font-semibold text-white hover:text-fz-accent" />
      </div>
    </footer>
  );
}
