import { Link } from "../lib/router.jsx";
import { BrowserFrame, PhoneFrame } from "./DeviceMockups.jsx";
import { projectPath } from "./projects.jsx";

export default function ProjectCard({ project }) {
  const { DesktopPreview, PhonePreview } = project;
  return (
    <article className="overflow-hidden rounded-3xl bg-ink text-white">
      <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:p-14">
        <Link
          to={projectPath(project)}
          aria-label={`View ${project.name} live demo`}
          className="group relative block pb-10 pr-10 sm:pr-16"
        >
          <BrowserFrame url={project.demoUrl} className="transition duration-500 group-hover:-translate-y-1">
            <DesktopPreview className="block h-auto w-full" />
          </BrowserFrame>
          <PhoneFrame className="absolute bottom-0 right-0 w-[26%] min-w-[84px] transition duration-500 group-hover:-translate-y-2">
            <PhonePreview className="block h-auto w-full" />
          </PhoneFrame>
        </Link>

        <div>
          <span className="inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white/70">
            {project.status}
          </span>
          <h3 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">{project.name}</h3>
          <p className="mt-1 text-sm font-medium text-ignite">{project.category}</p>
          <p className="mt-3 text-sm text-white/50">{project.tags.join(" • ")}</p>
          <p className="mt-5 leading-relaxed text-white/65">{project.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.tech.map((t) => (
              <li key={t} className="rounded-full bg-white/[0.07] px-3 py-1 text-xs text-white/70">{t}</li>
            ))}
          </ul>
          <Link to={projectPath(project)} className="btn-primary mt-8">
            View Live Demo →
          </Link>
        </div>
      </div>
    </article>
  );
}
