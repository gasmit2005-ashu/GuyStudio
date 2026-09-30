import { lazy } from "react";
import { FitZoneDesktopPreview, FitZonePhonePreview } from "../fitzone/FitZonePreview.jsx";
import { VantaDesktopPreview, VantaPhonePreview } from "../vanta/VantaPreview.jsx";

// Add a new demo here and it appears in the portfolio automatically:
//   1. build the demo site under src/<name>/ with a default-exported root component
//   2. add an entry below (slug -> path /portfolio/<slug>)
export const projects = [
  {
    slug: "fitzone",
    name: "FitZone Fitness",
    category: "Fitness Website",
    status: "Demo Project · Concept Website",
    tags: ["Premium", "Modern", "Responsive"],
    description:
      "A conversion-focused fitness website concept designed for a modern fitness business — from hero and programs to memberships, a free-trial flow and WhatsApp enquiries.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    demoUrl: "yourgym.in",
    DesktopPreview: FitZoneDesktopPreview,
    PhonePreview: FitZonePhonePreview,
    Demo: lazy(() => import("../fitzone/FitZoneSite.jsx")),
  },
  {
    slug: "vanta",
    name: "Vanta",
    category: "Fashion & E-commerce Website",
    status: "Demo Project · Concept Website",
    tags: ["Premium", "Editorial", "Responsive"],
    description:
      "A premium fashion/e-commerce concept for a contemporary streetwear brand — product browsing, a quick-view modal, wishlist and a fully working demo shopping bag.",
    tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    demoUrl: "shopvanta.in",
    DesktopPreview: VantaDesktopPreview,
    PhonePreview: VantaPhonePreview,
    Demo: lazy(() => import("../vanta/VantaSite.jsx")),
  },
];

export const projectPath = (p) => `/portfolio/${p.slug}`;
export const findProject = (slug) => projects.find((p) => p.slug === slug);
