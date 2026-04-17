import Link from "next/link";
import Section from "@/components/Section";

const services = [
  "Backend system design for logic-heavy applications",
  "API and database development with .NET and SQL",
  "Improving system structure, performance, and maintainability",
];

export default function ServicesPreview() {
  return (
    <Section
      title="Services"
      subtitle="What I can help with"
      className="border-t border-white/10"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-start">
        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service}
              className="theme-card-muted flex gap-4 rounded-3xl p-5"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-300/75" />
              <p className="text-sm leading-7 text-zinc-300 sm:text-base">
                {service}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-xl">
          <p className="text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8">
            I work best on software that needs more than surface-level polish:
            systems with real rules, meaningful data flow, and architecture
            decisions that affect long-term reliability.
          </p>
          <Link href="/services" className="theme-button-secondary mt-8">
            See services
          </Link>
        </div>
      </div>
    </Section>
  );
}
