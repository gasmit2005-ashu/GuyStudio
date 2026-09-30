/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        ink2: "#131E31",
        paper: "#F7F8FA",
        paper2: "#EDEFF3",
        ignite: "#FF5A1F",
        "ignite-dark": "#E14A12",
        grow: "#16A34A",
        slate: "#64748B",
        line: "#E2E5EA",
        // FitZone demo theme (kept separate from the GuyStudio palette)
        "fz-bg": "#0C0E12",
        "fz-surface": "#14171D",
        "fz-surface2": "#1B1F27",
        "fz-accent": "#2BD9E8",
        "fz-muted": "#9AA3B2",
        // Vanta demo theme (premium fashion editorial — separate from both
        // the GuyStudio and FitZone palettes)
        "vt-bg": "#0B0B0C",
        "vt-surface": "#161616",
        "vt-paper": "#F3F1EC",
        "vt-muted": "#8C8880",
        "vt-line": "#2A2A2A",
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
