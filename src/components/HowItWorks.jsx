const steps = [
  {
    n: "1",
    title: "Free AI Audit",
    desc: "We review your current online presence — website, social pages and enquiry flow.",
  },
  {
    n: "2",
    title: "We identify opportunities",
    desc: "We map out exactly where you're losing attention and losing enquiries.",
  },
  {
    n: "3",
    title: "We build your digital growth system",
    desc: "Content, website and lead capture, built and connected together.",
  },
  {
    n: "4",
    title: "Ongoing support & optimization",
    desc: "We keep refining the system as your business grows.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-20 md:py-28 border-t border-line bg-ink text-white">
      <div className="container-content">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-ignite mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            From free audit to a working growth system, in four steps.
          </h2>
        </div>

        <div className="mt-16 relative grid md:grid-cols-4 gap-10 md:gap-6">
          <div
            className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-white/15"
            aria-hidden="true"
          />
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="w-12 h-12 rounded-full bg-ink2 border border-white/15 flex items-center justify-center font-display font-semibold relative z-10">
                {s.n}
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-white/55 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
