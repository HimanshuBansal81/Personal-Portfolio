import Section from "@/components/Section";

const skillGroups = [
  {
    title: "Core Professional Skills",
    description:
      "Technologies I use or have used in professional backend-heavy enterprise work.",
    skills: [
      "C#",
      ".NET",
      "ASP.NET",
      "ASP.NET Core",
      "REST APIs",
      "SQL Server",
      "Stored Procedures",
      "Query Optimization",
      "JavaScript",
      "jQuery",
      "Kendo UI",
      "Git",
      "Azure DevOps",
      "Serilog",
    ],
  },
  {
    title: "Modern Project Stack",
    description:
      "Technologies I am using in modern personal projects and portfolio work.",
    skills: [
      ".NET 8 Web API",
      "Entity Framework Core",
      "PostgreSQL",
      "JWT Authentication",
      "Rate Limiting",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Render",
      "Vercel",
      "Docker",
    ],
  },
  {
    title: "Currently Learning / Building With",
    description:
      "Areas I am actively learning and applying through current projects.",
    skills: [
      "Redis Caching",
      "Google Cloud Run",
      "Clean Architecture",
      "Microservices Basics",
      "xUnit / Testing Basics",
      "Java DSA",
      "AI-assisted Development",
    ],
  },
];

export default function TechStack() {
  return (
    <Section
      title="Skills I use to build backend-heavy full-stack systems"
      subtitle="Tech Stack"
      className="border-t border-white/10"
    >
      <div>
        <p className="max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8">
          I work mainly with .NET, SQL, and backend-heavy business
          applications. Alongside my professional work, I am building modern
          projects using .NET 8, PostgreSQL, Redis, Docker, React, cloud
          deployment, and AI-assisted development workflows.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="theme-card-muted rounded-3xl p-6"
            >
              <div className="flex h-full flex-col">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-sky-200/10 bg-sky-300/5 px-3 py-1 text-xs font-medium leading-6 text-sky-100/75"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
