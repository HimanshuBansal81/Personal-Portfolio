import Section from "@/components/Section";

const capabilityGroups = [
  {
    title: "Backend & System Development",
    items: [
      "Building APIs and backend services with .NET",
      "Designing maintainable system architectures",
      "Implementing complex business logic for pricing, rules, and workflows",
    ],
  },
  {
    title: "Database & Performance",
    items: [
      "Writing optimized SQL queries and stored procedures",
      "Improving performance in data-heavy applications",
      "Designing efficient relational data models",
    ],
  },
  {
    title: "Problem Solving & System Thinking",
    items: [
      "Breaking complex problems into structured solutions",
      "Handling edge cases and real-world constraints",
      "Debugging and improving existing systems",
    ],
  },
  {
    title: "AI & Modern Practices",
    items: [
      "Using AI-assisted workflows for prototyping and iteration",
      "Applying AI tools where they improve speed and clarity",
      "Recognizing where AI helps and where engineering judgment matters more",
    ],
  },
  {
    title: "Collaboration & Execution",
    items: [
      "Planning features clearly before implementation",
      "Managing technical trade-offs and delivery constraints",
      "Resolving conflicts in logic, requirements, and system behavior",
    ],
  },
  {
    title: "Development Workflow & Deployment",
    items: [
      "Using Git with structured branching and team collaboration",
      "Setting up CI/CD pipelines for build and deployment automation",
      "Containerizing applications with Docker for consistent environments",
      "Understanding deployment workflows and environment management",
      "Deploying and maintaining applications in production-like setups",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="pb-8">
      <Section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-start">
          <div>
            <p className="theme-section-label">
              About
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              I build backend systems that handle real-world complexity.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8">
              Backend-focused full-stack engineer working with .NET, SQL, and
              system design to build logic-heavy applications that need to be
              correct, reliable, and maintainable under real conditions.
            </p>
          </div>

          <aside className="theme-card rounded-3xl p-6">
            <p className="theme-section-label">
              Working style
            </p>
            <ul className="mt-6 space-y-4">
              {[
                "Backend-first thinking",
                "Structured system design",
                "Real-world business logic",
              ].map((area) => (
                <li
                  key={area}
                  className="border-b border-white/10 pb-4 text-sm leading-7 text-zinc-200 last:border-b-0 last:pb-0"
                >
                  {area}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <Section title="What I do" subtitle="01">
        <div className="max-w-3xl space-y-5 text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8">
          <p>
            I build backend systems that handle real-world complexity.
          </p>
          <p>
            My work focuses on designing and implementing logic-heavy
            applications, systems where correctness, performance, and
            scalability actually matter.
          </p>
          <p>
            I work extensively with .NET and SQL to build APIs, optimize data
            flows, and solve problems like pricing logic, data consistency, and
            system performance.
          </p>
          <p>
            Beyond just writing code, I think in terms of systems, how
            components interact, where things break, and how to make them
            reliable under real-world conditions.
          </p>
        </div>
      </Section>

      <Section title="Background" subtitle="02">
        <div className="max-w-3xl space-y-5 text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8">
          <p>
            I have a background in Computer Science, where I developed a strong
            foundation in problem solving and analytical thinking.
          </p>
          <p>
            I&apos;ve always been curious about how things work under the hood,
            whether it&apos;s software systems, performance bottlenecks, or how
            data flows through an application.
          </p>
          <p>
            Mathematics has played a big role in shaping my thinking,
            especially when it comes to logic, optimization, and structured
            problem solving.
          </p>
          <p>
            Over time, this curiosity naturally evolved into building and
            improving real-world systems.
          </p>
        </div>
      </Section>

      <Section title="Capabilities" subtitle="03">
        <div className="grid gap-6 lg:grid-cols-2">
          {capabilityGroups.map((group) => (
            <article
              key={group.title}
              className="theme-card rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-7 text-zinc-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section title="How I work" subtitle="04">
        <div className="max-w-3xl space-y-5 text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8">
          <p>
            I approach development with a focus on clarity and reliability.
          </p>
          <p>
            I start by understanding the problem deeply, what needs to be
            solved, what constraints exist, and where things can go wrong.
          </p>
          <p>
            From there, I design solutions that are not just functional, but
            maintainable and scalable over time.
          </p>
          <p>
            I pay close attention to edge cases, data consistency, and
            performance, especially in systems that deal with real-world
            complexity.
          </p>
          <p>
            I prefer simple, well-structured solutions over over-engineered
            ones.
          </p>
          <p>
            The goal is always the same: build systems that work correctly,
            scale well, and are easy to reason about.
          </p>
        </div>
      </Section>

      <Section className="pt-4 sm:pt-6">
        <div className="theme-card-muted rounded-3xl px-6 py-10 sm:px-8">
          <p className="max-w-3xl text-xl font-medium leading-8 tracking-[-0.02em] text-white sm:text-2xl sm:leading-9">
            I&apos;m always interested in working on systems that are
            challenging, meaningful, and require thinking beyond just writing
            code.
          </p>
        </div>
      </Section>
    </div>
  );
}
