// Lightweight SVG renderings of the FitZone hero for the GuyStudio portfolio
// card. Vector art scales perfectly without shipping the full site.
const A = "#2BD9E8";
const font = "Sora, sans-serif";

export function FitZoneDesktopPreview({ className = "" }) {
  return (
    <svg viewBox="0 0 1200 720" className={className} role="img" aria-label="FitZone Fitness website homepage preview">
      <rect width="1200" height="720" fill="#0C0E12" />
      <rect y="0" width="1200" height="84" fill="#0C0E12" />
      <rect x="0" y="84" width="1200" height="1" fill="#fff" opacity=".1" />
      <rect x="48" y="34" width="16" height="16" fill={A} transform="rotate(45 56 42)" />
      <text x="80" y="50" fill="#fff" fontFamily={font} fontWeight="800" fontSize="24" letterSpacing="2">FITZONE</text>
      {[440, 520, 610, 700, 800].map((x, i) => (
        <rect key={x} x={x} y="38" width={[56, 68, 60, 76, 60][i]} height="8" rx="4" fill="#fff" opacity=".3" />
      ))}
      <rect x="980" y="30" width="172" height="40" rx="20" fill={A} />
      <text x="1066" y="55" textAnchor="middle" fill="#0C0E12" fontFamily={font} fontWeight="600" fontSize="14">Book Your Free Trial</text>

      <g transform="translate(700 90)">
        <circle cx="240" cy="290" r="250" fill="none" stroke={A} strokeOpacity=".14" strokeWidth="2" />
        <circle cx="240" cy="290" r="190" fill="none" stroke={A} strokeOpacity=".26" strokeWidth="2" />
        <circle cx="240" cy="290" r="130" fill="none" stroke={A} strokeWidth="14" strokeLinecap="round" strokeDasharray="520 300" transform="rotate(-120 240 290)" />
      </g>
      <rect x="800" y="290" width="290" height="190" rx="24" fill="#fff" fillOpacity=".07" stroke="#fff" strokeOpacity=".14" />
      <text x="826" y="326" fill="#9AA3B2" fontFamily={font} fontSize="15">Sample week</text>
      {["Strength", "Functional", "Mobility"].map((t, i) => (
        <g key={t}>
          <circle cx="832" cy={366 + i * 36} r="5" fill={A} />
          <text x="850" y={371 + i * 36} fill="#fff" fontFamily={font} fontSize="17">{t}</text>
        </g>
      ))}

      <text x="48" y="270" fill="#9AA3B2" fontFamily={font} fontWeight="600" fontSize="17">Premium neighbourhood fitness studio</text>
      <text x="48" y="360" fill="#fff" fontFamily={font} fontWeight="800" fontSize="92">Train Smart.</text>
      <text x="48" y="455" fill={A} fontFamily={font} fontWeight="800" fontSize="92">Live Stronger.</text>
      <text x="48" y="510" fill="#9AA3B2" fontFamily={font} fontSize="21">Personalized training, flexible schedules and a supportive</text>
      <text x="48" y="540" fill="#9AA3B2" fontFamily={font} fontSize="21">community designed for working professionals.</text>
      <rect x="48" y="574" width="250" height="56" rx="28" fill={A} />
      <text x="173" y="608" textAnchor="middle" fill="#0C0E12" fontFamily={font} fontWeight="600" fontSize="17">Book Your Free Trial</text>
      <rect x="316" y="574" width="192" height="56" rx="28" fill="none" stroke="#fff" strokeOpacity=".3" />
      <text x="412" y="608" textAnchor="middle" fill="#fff" fontFamily={font} fontWeight="600" fontSize="17">Explore Programs</text>
    </svg>
  );
}

export function FitZonePhonePreview({ className = "" }) {
  return (
    <svg viewBox="0 0 300 620" className={className} role="img" aria-label="FitZone Fitness mobile preview">
      <rect width="300" height="620" fill="#0C0E12" />
      <rect x="22" y="26" width="10" height="10" fill={A} transform="rotate(45 27 31)" />
      <text x="42" y="38" fill="#fff" fontFamily={font} fontWeight="800" fontSize="16" letterSpacing="1.5">FITZONE</text>
      <rect x="252" y="28" width="26" height="2.5" rx="1" fill="#fff" />
      <rect x="252" y="35" width="26" height="2.5" rx="1" fill="#fff" />
      <rect x="252" y="42" width="26" height="2.5" rx="1" fill="#fff" />
      <rect y="62" width="300" height="1" fill="#fff" opacity=".1" />

      <circle cx="240" cy="470" r="150" fill="none" stroke={A} strokeOpacity=".16" strokeWidth="2" />
      <circle cx="240" cy="470" r="100" fill="none" stroke={A} strokeWidth="10" strokeLinecap="round" strokeDasharray="330 300" transform="rotate(-140 240 470)" />

      <text x="24" y="130" fill="#9AA3B2" fontFamily={font} fontWeight="600" fontSize="11">Premium neighbourhood fitness studio</text>
      <text x="24" y="180" fill="#fff" fontFamily={font} fontWeight="800" fontSize="30">Train Smart.</text>
      <text x="24" y="218" fill={A} fontFamily={font} fontWeight="800" fontSize="30">Live Stronger.</text>
      <text x="24" y="252" fill="#9AA3B2" fontFamily={font} fontSize="12">Personalized training, flexible</text>
      <text x="24" y="270" fill="#9AA3B2" fontFamily={font} fontSize="12">schedules and a supportive community.</text>
      <rect x="24" y="298" width="188" height="44" rx="22" fill={A} />
      <text x="118" y="326" textAnchor="middle" fill="#0C0E12" fontFamily={font} fontWeight="600" fontSize="13">Book Your Free Trial</text>
      <rect x="24" y="356" width="188" height="44" rx="22" fill="none" stroke="#fff" strokeOpacity=".3" />
      <text x="118" y="384" textAnchor="middle" fill="#fff" fontFamily={font} fontWeight="600" fontSize="13">Explore Programs</text>
    </svg>
  );
}
