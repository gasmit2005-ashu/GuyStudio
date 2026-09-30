# GuyStudio

Marketing site for GuyStudio — "We Build. Automate. Grow."

Built with React + Vite + Tailwind CSS. No paid APIs, no backend required to run.

## 1. Setup

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## 2. Before you launch — things to change

- **WhatsApp number** — set your real number in:
  - `src/components/FreeAudit.jsx` (`WHATSAPP_NUMBER`)
  - `src/components/Contact.jsx` (`WHATSAPP_NUMBER`)
  - Format: country code + number, no `+`, no spaces (e.g. `"919876543210"`).
- **Email** — set your real address in `src/components/Contact.jsx` (`CONTACT_EMAIL`).
- **Social links** — update the Instagram/YouTube/LinkedIn URLs in `src/components/Footer.jsx`.
- **Demo projects** — `src/components/OurWork.jsx` holds the three concept projects (FitZone
  Fitness, Iron Nation Gym, Elite Fitness Club). They're intentionally labeled "Concept / Demo
  Project" — keep that label if you edit them, since none of these are real clients.
- **Pricing** — `src/components/Pricing.jsx`.

## 3. The Free AI Audit form

The form currently opens WhatsApp with the submitted details pre-filled (no backend needed).
If you'd rather collect submissions into a spreadsheet or inbox, swap the `handleSubmit` function
in `src/components/FreeAudit.jsx` for a call to a form backend (e.g. Formspree, Google Apps
Script tied to a Sheet, or your own serverless function) — all free-tier options that don't
require a paid API.

## 4. Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

## 5. Deploy to Vercel

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts (framework preset: Vite). Run `vercel --prod` to deploy to production.

**Option B — Git + Vercel dashboard**

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Vite — leave the defaults (Build Command: `npm run build`, Output
   Directory: `dist`) and click Deploy.

No environment variables are required.

## Portfolio & demo projects

The **Portfolio** section (`#portfolio`) shows large project cards for two fictional concept
websites: **FitZone Fitness** (gym) and **Vanta** (fashion/e-commerce). "View Live Demo" opens the
full site *inside this app* at `/portfolio/fitzone` or `/portfolio/vanta` (tiny built-in History-API
router, no extra dependencies — same one used before, just now serving two demos). "← Back to
GuyStudio" is shared by both demos (`src/lib/BackToGuyStudio.jsx`) and always returns to `/`, the
GuyStudio homepage — never to the other demo. Browser Back/Forward also work.

`vercel.json` contains the SPA rewrite so both demo routes work on refresh and direct links.

### FitZone placeholders to replace
- `src/fitzone/content.js` → `FITZONE_WHATSAPP` (placeholder number) and `FITZONE_EMAIL`
- Trainer names/bios, plan highlights, FAQ, programs — all in `src/fitzone/content.js`
- Gallery tiles are vector "concept visuals". Add an `image: "/your-photo.jpg"` field to any item in
  `gallery` (`content.js`) to use real photography (put files in `public/`).

### Vanta placeholders to replace
- `src/vanta/content.js` → `VANTA_EMAIL`, product names/prices, collections, lookbook, FAQ.
- Products and lookbook use vector "concept visuals". Add an `image: "/your-photo.jpg"` field to any
  product or lookbook item to use real photography (put files in `public/`).
- The shopping bag, wishlist, quick-view and checkout are fully working **client-side demos** — no
  backend, no payment gateway. "Demo Checkout" explains this to the visitor instead of pretending to
  charge them.

### Adding another demo project later
1. Build the demo under `src/<name>/` with a default-exported root component.
2. Add one entry to `src/portfolio/projects.jsx` (slug, name, tags, tech, previews, lazy `Demo`).
3. Use `src/lib/BackToGuyStudio.jsx` inside it for the return-to-GuyStudio button.
4. It appears in the Portfolio section and gets the route `/portfolio/<slug>` automatically.

## Project structure

```
src/
  lib/
    router.jsx             (navigate, Link, usePath, useDocumentMeta)
    BackToGuyStudio.jsx     (shared "← Back to GuyStudio" button, used by every demo)
  components/               (GuyStudio agency sections, incl. Portfolio.jsx)
  portfolio/                (ProjectCard, DeviceMockups, projects.jsx registry)
  fitzone/                  (complete FitZone demo site + content.js)
  vanta/                    (complete Vanta demo: site, cart context, product grid/modal/bag, content.js)
  App.jsx  main.jsx  index.css
```
