import Link from "next/link";
import Section from "@/components/Section";

export default function AboutPreview() {
  return (
    <Section
      title="Built for systems where the logic matters"
      subtitle="About"
      className="border-t border-white/10"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-end">
        <div className="max-w-3xl space-y-5 text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8">
          <p>
            I’m a backend-focused full-stack engineer working with .NET, SQL,
            and system design to build software that needs to hold up under
            real operational complexity.
          </p>
          <p>
            That includes pricing systems, workflow-heavy tools, and data-driven
            applications where correctness, maintainability, and performance are
            part of the product.
          </p>
          <p>
            I approach development with a systems mindset: understand the
            constraints, structure the logic clearly, and build for the way the
            software will actually be used.
          </p>
        </div>

        <div className="theme-card-muted rounded-3xl p-6">
          <p className="theme-section-label text-xs">Approach</p>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            Clear architecture, realistic trade-offs, and software that remains
            understandable as complexity grows.
          </p>
          <Link href="/about" className="theme-button-secondary mt-8 w-full sm:w-auto">
            Learn more
          </Link>
        </div>
      </div>
    </Section>
  );
}
