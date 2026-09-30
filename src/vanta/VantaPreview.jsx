// Lightweight SVG renderings of the Vanta hero for the GuyStudio portfolio
// card — mirrors how FitZonePreview.jsx works.
const font = "Sora, sans-serif";

export function VantaDesktopPreview({ className = "" }) {
  return (
    <svg viewBox="0 0 1200 720" className={className} role="img" aria-label="Vanta website homepage preview">
      <rect width="1200" height="720" fill="#0B0B0C" />
      <rect y="0" width="1200" height="76" fill="#0B0B0C" />
      <rect x="0" y="76" width="1200" height="1" fill="#fff" opacity=".08" />
      <text x="48" y="46" fill="#F3F1EC" fontFamily={font} fontWeight="800" fontSize="22" letterSpacing="5">VANTA</text>
      {[420, 520, 620, 720].map((x, i) => (
        <rect key={x} x={x} y="34" width={[86, 64, 96, 70][i]} height="7" rx="3.5" fill="#F3F1EC" opacity=".35" />
      ))}
      {[1010, 1052, 1094, 1136].map((x) => (
        <circle key={x} cx={x} cy="38" r="9" fill="none" stroke="#F3F1EC" strokeOpacity=".5" strokeWidth="1.4" />
      ))}

      <rect x="700" y="76" width="452" height="644" fill="#161616" />
      <g transform="translate(830 210)" fill="#F3F1EC" fillOpacity=".8">
        <path d="M120 90 L230 60 L340 90 L360 190 L300 210 L300 470 L160 470 L160 210 L100 190 Z" />
      </g>

      <text x="48" y="230" fill="#8C8880" fontFamily={font} fontWeight="600" fontSize="14" letterSpacing="4">PREMIUM CONTEMPORARY STREETWEAR</text>
      <text x="46" y="330" fill="#F3F1EC" fontFamily={font} fontWeight="800" fontSize="88" letterSpacing="1">WEAR YOUR</text>
      <text x="46" y="418" fill="#F3F1EC" fontFamily={font} fontWeight="800" fontSize="88" letterSpacing="1">EDGE.</text>
      <text x="48" y="470" fill="#8C8880" fontFamily={font} fontSize="19">Modern essentials designed for people who move</text>
      <text x="48" y="497" fill="#8C8880" fontFamily={font} fontSize="19">differently.</text>
      <rect x="48" y="534" width="238" height="54" fill="#F3F1EC" />
      <text x="167" y="567" textAnchor="middle" fill="#0B0B0C" fontFamily={font} fontWeight="700" fontSize="13" letterSpacing="2">SHOP NEW ARRIVALS</text>
      <rect x="302" y="534" width="216" height="54" fill="none" stroke="#F3F1EC" strokeOpacity=".4" />
      <text x="410" y="567" textAnchor="middle" fill="#F3F1EC" fontFamily={font} fontWeight="700" fontSize="13" letterSpacing="2">EXPLORE COLLECTION</text>
    </svg>
  );
}

export function VantaPhonePreview({ className = "" }) {
  return (
    <svg viewBox="0 0 300 620" className={className} role="img" aria-label="Vanta mobile preview">
      <rect width="300" height="620" fill="#0B0B0C" />
      <text x="20" y="38" fill="#F3F1EC" fontFamily={font} fontWeight="800" fontSize="15" letterSpacing="4">VANTA</text>
      <rect x="240" y="27" width="14" height="14" rx="3" fill="none" stroke="#F3F1EC" strokeOpacity=".5" />
      <rect x="0" y="58" width="300" height="1" fill="#fff" opacity=".08" />

      <rect x="0" y="330" width="300" height="290" fill="#161616" />
      <g transform="translate(95 400)" fill="#F3F1EC" fillOpacity=".8">
        <path d="M60 44 L110 30 L160 44 L172 90 L142 98 L142 214 L78 214 L78 98 L48 90 Z" />
      </g>

      <text x="20" y="118" fill="#8C8880" fontFamily={font} fontWeight="600" fontSize="9" letterSpacing="2">PREMIUM STREETWEAR</text>
      <text x="18" y="160" fill="#F3F1EC" fontFamily={font} fontWeight="800" fontSize="34">WEAR</text>
      <text x="18" y="198" fill="#F3F1EC" fontFamily={font} fontWeight="800" fontSize="34">YOUR EDGE.</text>
      <text x="20" y="232" fill="#8C8880" fontFamily={font} fontSize="11">Modern essentials for people</text>
      <text x="20" y="248" fill="#8C8880" fontFamily={font} fontSize="11">who move differently.</text>
      <rect x="20" y="272" width="150" height="40" fill="#F3F1EC" />
      <text x="95" y="297" textAnchor="middle" fill="#0B0B0C" fontFamily={font} fontWeight="700" fontSize="9.5" letterSpacing="1.5">SHOP NEW ARRIVALS</text>
    </svg>
  );
}
