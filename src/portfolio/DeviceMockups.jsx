// Generic device frames — reused by every portfolio project.
export function BrowserFrame({ children, url = "yourbusiness.in", className = "" }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-white/10 bg-ink2 shadow-2xl shadow-black/40 ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-3 truncate rounded-md bg-white/[0.06] px-3 py-1 text-[11px] text-white/40">{url}</span>
      </div>
      {children}
    </div>
  );
}

export function PhoneFrame({ children, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-[1.6rem] border-[5px] border-ink2 bg-ink2 shadow-2xl shadow-black/50 ring-1 ring-white/15 ${className}`}>
      {children}
    </div>
  );
}
