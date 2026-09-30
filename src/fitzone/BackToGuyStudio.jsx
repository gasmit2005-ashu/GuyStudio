// FitZone's back button now lives in src/lib (shared with every demo, e.g.
// Vanta) — re-exported here so FitZoneNavbar.jsx / FitZoneFooter.jsx don't
// need to change their import path.
export { default, goToGuyStudio } from "../lib/BackToGuyStudio.jsx";
