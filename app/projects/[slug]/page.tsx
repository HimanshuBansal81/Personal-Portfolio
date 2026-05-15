import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Section from "@/components/Section";
import { getProjectBySlug, projects, type Project } from "@/lib/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const title = project.title;
  const description = project.summary;
  const url = `/projects/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Himanshu Bansal`,
      description,
      url,
      type: "article",
    },
    twitter: {
      title: `${title} | Himanshu Bansal`,
      description,
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

function DetailPanel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="theme-card-muted rounded-3xl p-6">
      <p className="theme-section-label text-xs">{title}</p>
      <div className="mt-4 text-sm leading-7 text-zinc-200 sm:text-base">
        {children}
      </div>
    </section>
  );
}

function DetailList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300/75" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function OverviewPanel({ paragraphs }: { paragraphs: string[] }) {
  return (
    <section className="theme-card rounded-[2rem] p-6 sm:p-8">
      <p className="theme-section-label text-xs">Overview</p>
      <div className="mt-4 space-y-5 text-sm leading-7 text-zinc-200 sm:text-base sm:leading-8">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  const hasLinks = project.links.live || project.links.github;

  if (!hasLinks) {
    return (
      <p className="text-sm leading-7 text-zinc-400">
        No public live demo or repository is available for this project yet.
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      {project.links.live && (
        <Link
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className="theme-button-primary px-4 py-2 text-xs"
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

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pb-8">
      <Section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="max-w-5xl">
          <Link href="/projects" className="theme-link text-sm font-medium">
            Back to Projects
          </Link>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="inline-flex w-fit rounded-full border border-sky-200/15 bg-sky-300/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-sky-100/75">
              {project.status}
            </span>
            <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-zinc-300/80">
              {project.type}
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
            {project.timeline}
          </p>

          <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8">
            {project.summary}
          </p>
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <OverviewPanel paragraphs={project.overview} />

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <DetailPanel title="Problem">
            <p>{project.problem}</p>
          </DetailPanel>

          <DetailPanel title="My Role / Contribution">
            <p>{project.contribution}</p>
          </DetailPanel>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-3">
          <DetailPanel title="Key Features">
            <DetailList items={project.features} />
          </DetailPanel>

          <DetailPanel title="Challenges">
            <DetailList items={project.challenges} />
          </DetailPanel>

          <DetailPanel title="Learnings">
            <DetailList items={project.learnings} />
          </DetailPanel>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
          <DetailPanel title="Architecture / Flow">
            <DetailList items={project.architecture} />
          </DetailPanel>

          <div className="space-y-6">
            <DetailPanel title="Tech Stack">
              <div className="space-y-5">
                {project.techGroups.map((group) => (
                  <div key={group.title}>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                      {group.title}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-sky-200/10 bg-sky-300/5 px-3 py-1 text-xs font-medium text-sky-100/75"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </DetailPanel>

            <DetailPanel title="Next Improvements">
              <DetailList items={project.nextImprovements} />
            </DetailPanel>

            <DetailPanel title="Links">
              <ProjectLinks project={project} />
            </DetailPanel>
          </div>
        </div>
      </Section>
    </div>
  );
}
