import { useState } from "react";
import { useDocumentMeta } from "../lib/router.jsx";
import { CartProvider } from "./CartContext.jsx";
import VantaNavbar from "./VantaNavbar.jsx";
import VantaHero from "./VantaHero.jsx";
import VantaProductGrid from "./VantaProductGrid.jsx";
import VantaCollections from "./VantaCollections.jsx";
import VantaAbout from "./VantaAbout.jsx";
import VantaLookbook from "./VantaLookbook.jsx";
import VantaNewsletter from "./VantaNewsletter.jsx";
import VantaFAQ from "./VantaFAQ.jsx";
import VantaFooter from "./VantaFooter.jsx";
import ProductModal from "./ProductModal.jsx";
import BagDrawer from "./BagDrawer.jsx";

function VantaContent() {
  const [quickView, setQuickView] = useState(null);
  const [filter, setFilter] = useState("All");

  return (
    <div className="vt-root min-h-screen overflow-x-clip bg-vt-bg font-body text-vt-paper">
      <VantaNavbar onSelectFilter={setFilter} />
      <main>
        <VantaHero />
        <VantaProductGrid onQuickView={setQuickView} filter={filter} setFilter={setFilter} />
        <VantaCollections />
        <VantaAbout />
        <VantaLookbook />
        <VantaNewsletter />
        <VantaFAQ />
      </main>
      <VantaFooter />
      <ProductModal product={quickView} onClose={() => setQuickView(null)} />
      <BagDrawer />
    </div>
  );
}

export default function VantaSite() {
  useDocumentMeta(
    "Vanta — Premium Fashion Website Demo | GuyStudio",
    "Explore a premium fashion and e-commerce website concept created by GuyStudio."
  );
  return (
    <CartProvider>
      <VantaContent />
    </CartProvider>
  );
}
