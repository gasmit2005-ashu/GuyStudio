import { Link } from "../lib/router.jsx";

const demos = [
  {
    name: "FitZone Fitness",
    demoPath: "/portfolio/fitzone",
    accent: "bg-ignite",
    website: "A single-page site built around a free trial offer, class timings and a sticky WhatsApp button.",
    social: "A weekly content calendar mixing transformation-style reels, trainer intros and class highlights.",
    creative: "A promotional creative for a 3-day free trial, built for Instagram Stories and WhatsApp Status.",
    lead: "A WhatsApp-first enquiry form asking for goal, preferred timing and a callback slot.",
  },
  {
    name: "Iron Nation Gym",
    accent: "bg-grow",
    website: "A landing page centered on strength-training credibility — coaches, equipment and gym floor.",
    social: "Reels focused on training form, PR moments and equipment walkthroughs.",
    creative: "A membership-drive creative for the new-year fitness rush.",
    lead: "A short enquiry form that routes straight into a lead tracker for follow-up calls.",
  },
  {
    name: "Elite Fitness Club",
    accent: "bg-ink",
    website: "A premium-feel multi-section site for a full-service club — memberships, trainers and facilities.",
    social: "A content mix of facility tours, member milestones and class schedules.",
    creative: "A creative for a premium annual membership offer.",
    lead: "A tiered enquiry form that qualifies leads by membership interest before follow-up.",
  },
];

function DemoCard({ demo }) {
  return (
    <div className="border border-line rounded-2xl overflow-hidden bg-paper">
      <div className={`h-2 ${demo.accent}`} />
      <div className="p-7 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-display font-semibold text-ink">{demo.name}</h3>
          <span className="shrink-0 text-xs font-semibold text-ink/50 border border-ink/15 rounded-full px-3 py-1">
            Concept / Demo Project
          </span>
        </div>

        <dl className="mt-6 space-y-4">
          <div>
            <dt className="text-xs font-semibold text-ink/40 uppercase tracking-wide">Website concept</dt>
            <dd className="mt-1 text-sm text-ink/70 leading-relaxed">{demo.website}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold text-ink/40 uppercase tracking-wide">Social media concept</dt>
            <dd className="mt-1 text-sm text-ink/70 leading-relaxed">{demo.social}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold text-ink/40 uppercase tracking-wide">Promotional creative</dt>
            <dd className="mt-1 text-sm text-ink/70 leading-relaxed">{demo.creative}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold text-ink/40 uppercase tracking-wide">Lead-generation concept</dt>
            <dd className="mt-1 text-sm text-ink/70 leading-relaxed">{demo.lead}</dd>
          </div>
        </dl>
        {demo.demoPath && (
          <Link to={demo.demoPath} className="mt-6 inline-block text-sm font-semibold text-ignite hover:underline">
            Open live demo →
          </Link>
        )}
      </div>
    </div>
  );
}

export default function OurWork() {
  return (
    <section id="work" className="py-20 md:py-28 border-t border-line">
      <div className="container-content">
        <div className="max-w-xl">
          <p className="section-label">Our work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
            Concept projects showing how we'd approach a fitness business.
          </h2>
          <p className="mt-4 text-ink/60 leading-relaxed">
            These are concept / demo projects created to show our approach — not real clients or
            live results.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {demos.map((d) => (
            <DemoCard key={d.name} demo={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
