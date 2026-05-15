import Link from "next/link";
import Section from "@/components/Section";
import { featuredProjects } from "@/lib/projects";

type FeaturedProjectsProps = {
  limit?: number;
  showCta?: boolean;
};

export default function FeaturedProjects({
  limit = featuredProjects.length,
  showCta = false,
}: FeaturedProjectsProps) {
  const visibleProjects = featuredProjects.slice(0, limit);

  return (
    <Section
      title="Featured Work"
      subtitle="Selected projects"
      className="border-t border-white/10"
    >
      <div>
        <p className="max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8">
          A few projects that reflect how I approach architecture, product
          thinking, and real-world engineering constraints.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="theme-card group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200/20 hover:shadow-[0_22px_60px_rgba(5,12,25,0.32)]"
            >
              <div className="flex h-full flex-col">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm font-medium text-sky-100/70">
                      {project.type}
                    </p>
                  </div>

                  <span className="inline-flex w-fit shrink-0 rounded-full border border-sky-200/15 bg-sky-300/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-sky-100/75">
                    {project.status}
                  </span>
                </div>

                <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                  {project.timeline}
                </p>

                <div className="flex flex-1 flex-col">
                  <p className="mt-4 text-sm leading-7 text-zinc-300">
                    {project.summary}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-sky-200/10 bg-sky-300/5 px-3 py-1 text-xs font-medium text-sky-100/75"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(project.links.caseStudy ||
                    project.links.live ||
                    project.links.github) && (
                    <div className="mt-8 flex flex-wrap gap-3">
                      {project.links.caseStudy && (
                        <Link
                          href={project.links.caseStudy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="theme-button-primary px-4 py-2 text-xs"
                        >
                          Case Study
                        </Link>
                      )}

                      {project.links.live && (
                        <Link
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="theme-button-secondary px-4 py-2 text-xs"
                        >
                          Live Demo
                        </Link>
                      )}

                      {project.links.github && (
                        <Link
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="theme-button-secondary px-4 py-2 text-xs"
                        >
                          GitHub
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {showCta && (
          <div className="mt-10">
            <Link href="/projects" className="theme-button-secondary">
              View all projects
            </Link>
          </div>
        )}
      </div>
    </Section>
  );
}
