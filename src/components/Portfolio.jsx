import ProjectCard from "../portfolio/ProjectCard.jsx";
import { projects } from "../portfolio/projects.jsx";

export default function Portfolio() {
  return (
    <section id="portfolio" className="border-t border-line py-20 md:py-28">
      <div className="container-content">
        <div className="max-w-2xl">
          <p className="section-label">What We Can Build</p>
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            We don't just talk about websites. We build them.
          </h2>
          <p className="mt-4 leading-relaxed text-ink/60">
            From local businesses to modern brands, we build digital experiences designed to turn attention into
            customers.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-5 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-ink md:text-2xl">
              Want something like this for your business?
            </p>
            <p className="mt-1.5 text-sm text-ink/60">
              GuyStudio designs and builds modern digital experiences for local businesses and growing brands.
            </p>
          </div>
          <a href="#audit" className="btn-primary shrink-0">Get a Free Business Audit</a>
        </div>
      </div>
    </section>
  );
}
