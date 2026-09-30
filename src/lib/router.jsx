import { useEffect, useState } from "react";

// Tiny History-API router: no dependency, supports back/forward.
export function navigate(to) {
  const current = window.location.pathname + window.location.hash;
  if (current === to) return;
  // remember where the visitor was, so Back can restore the scroll position
  window.history.replaceState({ ...(window.history.state || {}), scrollY: window.scrollY }, "");
  window.history.pushState({}, "", to);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function usePath() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  return path;
}

export function Link({ to, children, onClick, ...rest }) {
  function handle(e) {
    onClick?.(e);
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    navigate(to);
  }
  return (
    <a href={to} onClick={handle} {...rest}>
      {children}
    </a>
  );
}

export function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute("content", description);
  }, [title, description]);
}
