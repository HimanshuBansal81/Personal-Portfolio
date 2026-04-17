import Link from "next/link";
import Section from "@/components/Section";

const services = [
  {
    title: "Backend Development",
    items: [
      "Building APIs using .NET",
      "Implementing complex business logic",
      "Designing scalable system architecture",
    ],
  },
  {
    title: "Database & Performance Optimization",
    items: [
      "SQL query optimization",
      "Improving system performance",
      "Efficient data modeling",
    ],
  },
  {
    title: "System Design & Problem Solving",
    items: [
      "Handling complex workflows and logic",
      "Breaking down large problems into solutions",
      "Designing maintainable systems",
    ],
  },
  {
    title: "Deployment & Delivery",
    items: [
      "Version control using Git",
      "CI/CD pipeline setup",
      "Docker-based deployment",
      "Managing application environments",
    ],
  },
];

const clientTypes = [
  "Startups with messy or growing backend systems",
  "Applications facing performance issues",
  "Teams dealing with complex business logic",
  "Projects that require structured backend design",
];

const processSteps = [
  "Understand the problem and constraints",
  "Design a clean and scalable solution",
  "Build, test, and optimize the system",
];

const outcomes = [
  "Clean backend architecture",
  "Improved system performance",
  "Maintainable and scalable logic",
  "Structured problem-solving approach",
];

export default function ServicesPage() {
  return (
    <div className="pb-8">
      <Section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-start">
          <div>
            <p className="theme-section-label">Services</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              I build and optimize backend systems that actually scale.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8">
              From APIs to data-heavy systems, I focus on building reliable,
              high-performance solutions for real-world problems.
            </p>
          </div>

          <aside className="theme-card rounded-3xl p-6">
            <p className="theme-section-label">Specialization</p>
            <ul className="mt-6 space-y-4">
              {[
                ".NET backend systems",
                "SQL and performance optimization",
                "System design for complex workflows",
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

      <Section title="Core Services" subtitle="What I offer">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="theme-card rounded-3xl p-6">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                {service.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {service.items.map((item) => (
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

      <Section
        title="What You Get"
        subtitle="Outcomes"
        className="border-t border-white/10"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {outcomes.map((outcome) => (
            <div key={outcome} className="theme-card-muted rounded-3xl p-5">
              <div className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300/70" />
                <p className="text-base leading-8 text-zinc-300">{outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Who This Is For"
        subtitle="Best fit"
        className="border-t border-white/10"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {clientTypes.map((client) => (
            <div key={client} className="theme-card-muted rounded-3xl p-5">
              <p className="text-base leading-8 text-zinc-300">{client}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="How I Work"
        subtitle="Process"
        className="border-t border-white/10"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step} className="theme-card-muted rounded-3xl p-6">
              <p className="theme-section-label text-xs">0{index + 1}</p>
              <p className="mt-4 text-lg font-medium leading-8 text-white">
                {step}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-t border-white/10">
        <div className="theme-card rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12">
          <div className="max-w-4xl">
            <p className="theme-section-label">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Have a system that needs fixing, scaling, or building from
              scratch?
            </h2>
            <Link href="/contact" className="theme-button-primary mt-8">
              Contact Me
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
