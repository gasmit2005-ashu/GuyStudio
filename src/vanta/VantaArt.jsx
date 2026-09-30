// Abstract SVG garment silhouettes — used instead of stock photography so
// the demo needs no external images or network access.
const silhouettes = [
  <g key="0"><path d="M60 40 L100 50 L140 40 L150 70 L128 78 L128 170 L72 170 L72 78 L50 70 Z" /></g>,
  <g key="1"><path d="M55 55 L100 42 L145 55 L158 92 L132 100 L132 172 L68 172 L68 100 L42 92 Z" /><circle cx="100" cy="60" r="12" fill="none" stroke="currentColor" strokeWidth="4" /></g>,
  <g key="2"><path d="M58 46 L100 36 L142 46 L156 84 L134 92 L134 172 L66 172 L66 92 L44 84 Z" /><path d="M100 36 L100 172" stroke="currentColor" strokeOpacity=".4" strokeWidth="2" /><path d="M70 100 L130 100" stroke="currentColor" strokeOpacity=".4" strokeWidth="2" /></g>,
  <g key="3"><path d="M72 50 L128 50 L136 172 L108 172 L104 110 L96 110 L92 172 L64 172 Z" /></g>,
  <g key="4"><path d="M56 58 L100 44 L144 58 L150 86 L126 94 L126 172 L74 172 L74 94 L50 86 Z" /></g>,
  <g key="5"><path d="M60 90 A40 34 0 0 1 140 90 L140 100 L60 100 Z" /><rect x="55" y="98" width="90" height="14" rx="7" /></g>,
];

export function GarmentArt({ index = 0, className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={`fill-current text-vt-paper/70 ${className}`} aria-hidden="true">
      {silhouettes[index % silhouettes.length]}
    </svg>
  );
}

export function HeroCampaignArt({ className = "" }) {
  return (
    <svg viewBox="0 0 900 1100" className={className} aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="900" height="1100" fill="#161616" />
      <rect x="0" y="0" width="900" height="1100" fill="url(#vtgrad)" />
      <defs>
        <linearGradient id="vtgrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1c1c1c" />
          <stop offset="1" stopColor="#0b0b0c" />
        </linearGradient>
      </defs>
      <g transform="translate(250 260)" className="text-vt-paper/80 fill-current">
        <path d="M120 90 L230 60 L340 90 L360 190 L300 210 L300 470 L160 470 L160 210 L100 190 Z" />
      </g>
      <line x1="80" y1="120" x2="80" y2="980" stroke="#fff" strokeOpacity=".06" />
      <line x1="820" y1="120" x2="820" y2="980" stroke="#fff" strokeOpacity=".06" />
    </svg>
  );
}
