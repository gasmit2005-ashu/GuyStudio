import Logo from "./Logo.jsx";

const socials = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "YouTube", href: "https://youtube.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="container-content flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <Logo markClassName="w-16 h-16" />
        </div>

        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink/60 hover:text-ink transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>

        <p className="text-sm text-ink/40">Copyright 2026 GuyStudio.</p>
      </div>
    </footer>
  );
}
