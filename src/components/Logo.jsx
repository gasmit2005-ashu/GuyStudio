// The badge is a full circular lockup (mark + wordmark + tagline) supplied
// as a single image, so it's rendered as-is rather than paired with a
// separate text label.
export function LogoMark({ className = "w-8 h-8" }) {
  return <img src="/logo.jpg" alt="GuyStudio" className={`${className} object-contain rounded-full`} />;
}

export default function Logo({ className = "", markClassName = "w-12 h-12" }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <LogoMark className={markClassName} />
    </span>
  );
}
