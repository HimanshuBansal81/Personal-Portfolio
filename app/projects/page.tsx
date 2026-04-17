import Section from "@/components/Section";

type Project = {
  title: string;
  description: string;
  problem: string;
  approach: string;
  result: string;
  techStack: string[];
  status: string;
};

const projects: Project[] = [
  {
    title: "URL Shortener System",
    description:
      "A scalable URL shortener designed to handle high traffic and fast redirection.",
    problem:
      "Efficiently storing and retrieving shortened URLs while minimizing database load.",
    approach:
      "Implemented caching strategies and optimized lookup mechanisms to ensure fast redirection even under load.",
    result:
      "Expected outcome: reliable short-link redirection with low lookup latency and reduced database pressure under traffic spikes.",
    techStack: [".NET", "Redis (planned)", "SQL"],
    status: "Planned",
  },
  {
    title: "Dynamic Rate Calculator",
    description:
      "A system for managing and calculating dynamic rates based on multiple parameters like origin, destination, weight, and date ranges.",
    problem:
      "Handling complex pricing logic with overlapping date ranges and multiple business rules.",
    approach:
      "Designed logic to split, override, and manage rate conflicts while maintaining data consistency.",
    result:
      "Expected outcome: a maintainable pricing engine that handles rule conflicts clearly and supports operational changes without fragile patches.",
    techStack: [".NET", "SQL Server"],
    status: "Planned",
  },
  {
    title: "Data Processing / Query Optimization System",
    description:
      "A backend system focused on efficient data retrieval and processing for large datasets.",
    problem:
      "Slow query performance and inefficient data handling in large-scale applications.",
    approach:
      "Applied query optimization, indexing strategies, and structured data flows to improve performance.",
    result:
      "Expected outcome: faster queries, more predictable system behavior, and a cleaner path for scaling large-volume data processing.",
    techStack: [".NET", "SQL"],
    status: "Planned",
  },
];

export default function ProjectsPage() {
  return (
    <div className="pb-8">
      <Section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-start">
          <div>
            <p className="theme-section-label">
              Portfolio
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Projects
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8">
              Here are some of the systems I’ve built and designed, focusing on
              real-world problems and scalable solutions.
            </p>
          </div>

          <aside className="theme-card rounded-3xl p-6">
            <p className="theme-section-label">
              Focus areas
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "Backend architecture",
                "Logic-heavy systems",
                "Data performance and reliability",
              ].map((item) => (
                <li
                  key={item}
                  className="border-b border-white/10 pb-4 text-sm leading-7 text-zinc-200 last:border-b-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <Section title="Selected Systems" subtitle="Case studies">
        <div className="grid gap-6 xl:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="theme-card group rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200/20 hover:shadow-[0_22px_60px_rgba(5,12,25,0.32)] sm:p-8"
            >
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  <span className="inline-flex w-fit rounded-full border border-sky-200/15 bg-sky-300/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-100/80">
                    {project.status}
                  </span>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div className="theme-card-muted rounded-3xl p-5">
                    <p className="theme-section-label text-xs">
                      Problem
                    </p>
                    <p className="mt-4 text-sm leading-7 text-zinc-200">
                      {project.problem}
                    </p>
                  </div>

                  <div className="theme-card-muted rounded-3xl p-5">
                    <p className="theme-section-label text-xs">
                      Approach
                    </p>
                    <p className="mt-4 text-sm leading-7 text-zinc-200">
                      {project.approach}
                    </p>
                  </div>

                  <div className="theme-card-muted rounded-3xl p-5">
                    <p className="theme-section-label text-xs">
                      Expected outcome
                    </p>
                    <p className="mt-4 text-sm leading-7 text-zinc-200">
                      {project.result}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="theme-section-label text-xs">
                    Tech stack
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
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
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
