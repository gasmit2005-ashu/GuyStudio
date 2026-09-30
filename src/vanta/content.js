// All Vanta copy and demo data lives here. Vanta is a fictional concept
// brand built to show what GuyStudio can build for a fashion/e-commerce
// client — not a real store.

export const VANTA_EMAIL = "hello@vanta.example"; // PLACEHOLDER — demo contact email

export const navLinks = [
  { label: "New Arrivals", href: "#vt-arrivals" },
  { label: "Men", href: "#vt-arrivals", filter: "Men" },
  { label: "Women", href: "#vt-arrivals", filter: "Women" },
  { label: "Collections", href: "#vt-collections" },
  { label: "About", href: "#vt-about" },
];

export const categories = ["All", "Men", "Women", "Unisex"];

export const products = [
  { id: "essential-tee", name: "Vanta Essential Oversized Tee", price: 1499, category: "Unisex", tag: "Bestseller", art: 0 },
  { id: "core-hoodie", name: "Vanta Core Hoodie", price: 3299, category: "Unisex", tag: "New", art: 1 },
  { id: "utility-jacket", name: "Vanta Utility Jacket", price: 4999, category: "Men", tag: "New", art: 2 },
  { id: "relaxed-cargo", name: "Vanta Relaxed Cargo", price: 2799, category: "Women", tag: "", art: 3 },
  { id: "signature-sweatshirt", name: "Vanta Signature Sweatshirt", price: 2999, category: "Unisex", tag: "Bestseller", art: 4 },
  { id: "essential-cap", name: "Vanta Essential Cap", price: 899, category: "Unisex", tag: "", art: 5 },
];

export const sizes = ["XS", "S", "M", "L", "XL"];

export const collections = [
  { name: "Essentials", text: "Everyday foundations in clean, wearable silhouettes." },
  { name: "Streetwear", text: "Bold, relaxed pieces built for city movement." },
  { name: "Outerwear", text: "Layers designed for transitional weather." },
  { name: "Accessories", text: "The details that finish a look." },
];

export const principles = [
  { n: "01", title: "Clean Design", text: "Minimal silhouettes made to stand out without trying too hard." },
  { n: "02", title: "Everyday Versatility", text: "Pieces designed to work across different looks and occasions." },
  { n: "03", title: "Confident Fit", text: "Modern proportions designed for a contemporary streetwear aesthetic." },
  { n: "04", title: "Built for Movement", text: "Comfort-focused pieces for everyday life." },
];

export const lookbook = [
  { label: "Drop 01 — Structure", art: 2 },
  { label: "Drop 02 — Ease", art: 3 },
  { label: "Drop 03 — Layers", art: 1 },
  // Add an `image: "/your-photo.jpg"` field to any item to use real photography.
];

export const faqs = [
  { q: "Is Vanta a real store?", a: "No — Vanta is a fictional concept brand built by GuyStudio to show what a complete fashion/e-commerce website could look like." },
  { q: "How does sizing work?", a: "Each product shows a standard XS–XL size range. In a live store this would link to a full size guide." },
  { q: "Can I actually buy something?", a: "This is a portfolio demo. Add to Bag and checkout are simulated locally — no payment is processed and nothing is stored." },
];

export const footerLinks = {
  Shop: [
    { label: "New Arrivals", href: "#vt-arrivals" },
    { label: "Men", href: "#vt-arrivals" },
    { label: "Women", href: "#vt-arrivals" },
    { label: "Collections", href: "#vt-collections" },
  ],
  Company: [
    { label: "About", href: "#vt-about" },
    { label: "Contact", href: `mailto:${VANTA_EMAIL}` },
    { label: "FAQ", href: "#vt-faq" },
  ],
  Social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
    { label: "Pinterest", href: "https://pinterest.com/" },
  ],
  Legal: [
    { label: "Privacy", href: "#vt-legal" },
    { label: "Terms", href: "#vt-legal" },
  ],
};

export const currency = (n) => `₹${n.toLocaleString("en-IN")}`;
