import Link from "next/link";
import Section from "@/components/Section";

const projects = [
  {
    title: "Pricing Engine Platform",
    description:
      "Built a rules-driven pricing system for handling complex rate calculations, approval workflows, and reporting across internal teams.",
    techStack: [".NET", "SQL Server", "REST APIs"],
  },
  {
    title: "Operations Dashboard",
    description:
      "Designed a centralized dashboard for monitoring system health, surfacing business-critical metrics, and reducing manual reporting effort.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Workflow Automation Suite",
    description:
      "Developed an internal toolset that streamlined multi-step business processes and improved data consistency between teams and systems.",
    techStack: ["C#", "Entity Framework", "PostgreSQL"],
  },
];

type FeaturedProjectsProps = {
  limit?: number;
  showCta?: boolean;
};

export default function FeaturedProjects({
  limit = projects.length,
  showCta = false,
}: FeaturedProjectsProps) {
  const visibleProjects = projects.slice(0, limit);

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

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="theme-card group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200/20 hover:shadow-[0_22px_60px_rgba(5,12,25,0.32)]"
            >
              <div className="flex h-full flex-col">
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">
                    {project.description}
                  </p>
                </div>

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
