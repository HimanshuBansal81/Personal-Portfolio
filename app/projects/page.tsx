import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import {
  projectCategories,
  projects,
  type Project,
  type ProjectCategory,
} from "@/lib/projects";

const title = "Projects";
const description =
  "Case studies and project notes on backend-heavy systems, full-stack applications, logistics workflows, and structured learning projects.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Himanshu Bansal",
    description,
    url: "/projects",
  },
  twitter: {
    title: "Projects | Himanshu Bansal",
    description,
  },
};

type ProjectsPageProps = {
  searchParams?: Promise<{
    category?: string | string[];
  }>;
};

function getSelectedCategory(category?: string | string[]) {
  const value = Array.isArray(category) ? category[0] : category;

  if (
    value &&
    projectCategories.includes(value as ProjectCategory)
  ) {
    return value as ProjectCategory;
  }

  return undefined;
}

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-3">
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
          Live
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
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="theme-card group rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-200/20 hover:shadow-[0_22px_60px_rgba(5,12,25,0.32)] sm:p-8">
      <div className="flex h-full flex-col gap-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex w-fit rounded-full border border-sky-200/15 bg-sky-300/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-sky-100/75">
                {project.category}
              </span>
              <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-zinc-300/80">
                {project.status}
              </span>
            </div>

            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
              {project.title}
            </h3>
            <p className="mt-3 text-sm font-medium text-sky-100/70">
              {project.type}
            </p>
          </div>

          <p className="text-sm font-medium text-zinc-400 sm:text-right">
            {project.timeline}
          </p>
        </div>

        <p className="max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
          {project.summary}
        </p>

        <div className="grid gap-4 lg:grid-cols-2">
          <div className="theme-card-muted rounded-3xl p-5">
            <p className="theme-section-label text-xs">Problem</p>
            <p className="mt-4 text-sm leading-7 text-zinc-200">
              {project.problem}
            </p>
          </div>

          <div className="theme-card-muted rounded-3xl p-5">
            <p className="theme-section-label text-xs">My Contribution</p>
            <p className="mt-4 text-sm leading-7 text-zinc-200">
              {project.contribution}
            </p>
          </div>
        </div>

        <div>
          <p className="theme-section-label text-xs">Tech</p>
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

        {(project.links.caseStudy ||
          project.links.live ||
          project.links.github) && (
          <div className="mt-auto">
            <ProjectActions project={project} />
          </div>
        )}
      </div>
    </article>
  );
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const selectedCategory = getSelectedCategory(
    (await searchParams)?.category,
  );
  const visibleProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  return (
    <div className="pb-8">
      <Section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-start">
          <div>
            <p className="theme-section-label">Portfolio</p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Projects
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8">
              A focused showcase of backend-heavy systems, full-stack products,
              professional logistics work, and structured learning projects.
            </p>
          </div>

          <aside className="theme-card rounded-3xl p-6">
            <p className="theme-section-label">Focus areas</p>
            <ul className="mt-6 space-y-4">
              {[
                "Backend architecture and API design",
                "Data modeling, pricing logic, and reliability",
                "Full-stack delivery with practical deployment",
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
        <div className="mb-10 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className={
              !selectedCategory
                ? "theme-button-primary px-4 py-2 text-xs"
                : "theme-button-secondary px-4 py-2 text-xs"
            }
          >
            All
          </Link>

          {projectCategories.map((category) => (
            <Link
              key={category}
              href={`/projects?category=${encodeURIComponent(category)}`}
              className={
                selectedCategory === category
                  ? "theme-button-primary px-4 py-2 text-xs"
                  : "theme-button-secondary px-4 py-2 text-xs"
              }
            >
              {category}
            </Link>
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
}
