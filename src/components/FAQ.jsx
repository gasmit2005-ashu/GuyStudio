import { useState } from "react";

const faqs = [
  {
    q: "What businesses do you work with?",
    a: "We work with local businesses across India, with a particular focus on gyms and fitness studios. Our systems are built around what local, service-based businesses actually need.",
  },
  {
    q: "How does the free AI audit work?",
    a: "Share a few details about your business — your Instagram, website (if you have one) and WhatsApp number. We review your current online presence and get back to you with what's working and what isn't.",
  },
  {
    q: "Do you build websites?",
    a: "Yes. We build mobile-first websites and landing pages designed to load fast and turn visitors into enquiries, with WhatsApp integration and lead forms built in.",
  },
  {
    q: "Can you manage social media?",
    a: "Yes. We create AI-assisted content — reels, posts, captions and promotional creatives — organized around a monthly content calendar.",
  },
  {
    q: "Do you provide WhatsApp automation?",
    a: "Yes. We set up WhatsApp enquiry workflows and follow-up systems so no lead is missed, as part of our Growth and Pro plans.",
  },
  {
    q: "Can packages be customized?",
    a: "Yes. Every plan can be adjusted to fit your business's specific requirements — just tell us what you need.",
  },
];

function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-display font-medium text-ink text-base md:text-lg">{item.q}</span>
        <span
          className={`shrink-0 w-6 h-6 rounded-full border border-ink/20 flex items-center justify-center text-ink/60 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-200 ease-out ${
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
        style={{ display: "grid" }}
      >
        <div className="overflow-hidden">
          <p className="text-ink/60 leading-relaxed max-w-2xl">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28 border-t border-line">
      <div className="container-content max-w-3xl">
        <p className="section-label">FAQ</p>
        <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">
          Common questions.
        </h2>

        <div className="mt-10">
          {faqs.map((f, i) => (
            <FaqItem
              key={f.q}
              item={f}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
