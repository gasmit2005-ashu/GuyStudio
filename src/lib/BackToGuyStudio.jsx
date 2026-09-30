import { navigate } from "./router.jsx";

// Shared by every portfolio demo (FitZone, Vanta, future ones). Always
// returns to the GuyStudio homepage ("/"), never to another demo. Uses the
// in-app router so browser Back/Forward keep working; if the view hasn't
// switched shortly after (e.g. an unexpected render problem), it falls back
// to a full page load so the visitor is never stuck.
export function goToGuyStudio(e) {
  if (e && (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0)) return; // let "open in new tab" work
  e?.preventDefault();
  navigate("/");
  setTimeout(() => {
    if (document.querySelector(".fz-root, .vt-root")) window.location.assign("/");
  }, 300);
}

export default function BackToGuyStudio({ className = "", children = "← Back to GuyStudio" }) {
  return (
    <a href="/" onClick={goToGuyStudio} className={className}>
      {children}
    </a>
  );
}
