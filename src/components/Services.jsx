const services = [
  {
    title: "AI Social Media Content",
    desc: "A steady stream of content so your page never goes quiet.",
    items: ["Reels", "Posts", "Captions", "Content calendars", "Promotional creatives"],
  },
  {
    title: "Business Websites",
    desc: "A site built to load fast, look sharp and turn visitors into enquiries.",
    items: ["Professional websites", "Landing pages", "Mobile-first design", "WhatsApp integration", "Lead forms"],
  },
  {
    title: "Lead Generation Systems",
    desc: "Every enquiry captured, tracked and followed up — nothing missed.",
    items: ["Enquiry forms", "Lead tracking", "WhatsApp workflows", "Follow-up systems"],
  },
  {
    title: "AI Automation",
    desc: "The repetitive work handled automatically, day and night.",
    items: ["FAQ systems", "Customer response workflows", "Content workflows", "Business process automation"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 border-t border-line">
      <div className="container-content">
        <div className="max-w-xl">
          <p className="section-label">What we do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
            Four systems, one goal: more customers walking through your door.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-px bg-line rounded-2xl overflow-hidden">
          {services.map((s) => (
            <div key={s.title} className="bg-paper p-8 md:p-10">
              <h3 className="text-xl font-display font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-ink/60 leading-relaxed">{s.desc}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-ink/70 bg-paper2 border border-line rounded-full px-3.5 py-1.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
