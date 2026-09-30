const plans = [
  {
    name: "Starter",
    price: "₹2,999",
    highlight: false,
    features: [
      "12 content pieces / month",
      "Captions",
      "Content calendar",
      "4 promotional creatives",
      "Basic Google Business recommendations",
    ],
  },
  {
    name: "Growth",
    price: "₹6,999",
    highlight: true,
    features: [
      "20 content pieces / month",
      "WhatsApp enquiry workflow",
      "Landing page",
      "Lead tracking",
      "Monthly report",
    ],
  },
  {
    name: "Pro",
    price: "₹11,999",
    highlight: false,
    features: [
      "30 content pieces / month",
      "Website",
      "AI FAQ system",
      "Lead follow-up workflow",
      "Promotional campaigns",
      "Weekly optimization",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 border-t border-line">
      <div className="container-content">
        <div className="max-w-xl">
          <p className="section-label">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
            Straightforward monthly plans.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 items-start">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 ${
                p.highlight
                  ? "bg-ink text-white border-2 border-ignite md:-translate-y-3"
                  : "bg-paper border border-line text-ink"
              }`}
            >
              {p.highlight && (
                <span className="inline-block text-xs font-semibold text-ignite bg-white/10 rounded-full px-3 py-1 mb-4">
                  Most chosen
                </span>
              )}
              <h3 className="font-display font-semibold text-lg">{p.name}</h3>
              <p className="mt-3 text-3xl font-display font-bold">
                {p.price}
                <span className={`text-base font-normal ${p.highlight ? "text-white/50" : "text-ink/45"}`}>
                  {" "}
                  / month
                </span>
              </p>
              <ul className="mt-7 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                        p.highlight ? "bg-ignite" : "bg-ignite"
                      }`}
                    />
                    <span className={p.highlight ? "text-white/80" : "text-ink/70"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#audit"
                className={`mt-8 w-full ${p.highlight ? "btn-primary" : "btn-secondary"}`}
              >
                Get Free AI Audit
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink/50">
          Plans can be customized according to business requirements.
        </p>
      </div>
    </section>
  );
}
