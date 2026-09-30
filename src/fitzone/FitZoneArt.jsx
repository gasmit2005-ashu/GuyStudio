// Abstract SVG motifs used in the hero and gallery (no external images needed).
export function RingsArt({ className = "" }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true">
      <circle cx="200" cy="200" r="190" fill="none" stroke="#2BD9E8" strokeOpacity=".14" strokeWidth="2" />
      <circle cx="200" cy="200" r="145" fill="none" stroke="#2BD9E8" strokeOpacity=".26" strokeWidth="2" />
      <circle
        cx="200" cy="200" r="100" fill="none" stroke="#2BD9E8" strokeWidth="12" strokeLinecap="round"
        strokeDasharray="420 210" transform="rotate(-120 200 200)"
      />
      <path d="M40 330 L360 70" stroke="#fff" strokeOpacity=".08" strokeWidth="2" />
      <path d="M70 360 L390 100" stroke="#fff" strokeOpacity=".05" strokeWidth="2" />
    </svg>
  );
}

const tiles = [
  <g key="0"><rect x="30" y="120" width="140" height="10" rx="5" /><rect x="10" y="100" width="18" height="50" rx="4" /><rect x="172" y="100" width="18" height="50" rx="4" /></g>,
  <g key="1"><circle cx="100" cy="90" r="42" fill="none" strokeWidth="8" stroke="currentColor" /><path d="M40 150 L160 150" strokeWidth="8" stroke="currentColor" strokeLinecap="round" /></g>,
  <g key="2"><circle cx="60" cy="100" r="16" /><circle cx="100" cy="80" r="16" /><circle cx="140" cy="100" r="16" /><path d="M40 150 Q100 110 160 150" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" /></g>,
  <g key="3"><path d="M30 130 Q65 60 100 130 T170 130" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" /></g>,
  <g key="4"><path d="M20 140 L70 90 L110 120 L180 50" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" /></g>,
];

export function TileArt({ index, className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={`text-fz-accent/70 fill-current ${className}`} aria-hidden="true">
      {tiles[index % tiles.length]}
    </svg>
  );
}
