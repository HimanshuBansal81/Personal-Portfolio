import Link from "next/link";
import Container from "@/components/Container";
import TerminalTyping from "@/components/TerminalTyping";

export default function Head() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(99,163,255,0.16),transparent_28%)]" />
      <Container className="flex justify-center">
        <div className="w-full max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-sky-200/15 bg-sky-300/5 px-4 py-1.5 text-sm font-medium tracking-wide text-sky-100/80 backdrop-blur">
            Backend-focused full-stack engineering
          </div>

          <div className="mt-8 space-y-6 sm:space-y-8">
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
              I build{" "}
              <span className="bg-gradient-to-r from-sky-100 via-blue-200 to-slate-300 bg-clip-text text-transparent">
                backend systems
              </span>{" "}
              that handle real-world complexity.
            </h1>

            <p className="max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8">
              Software Developer specializing in .NET, SQL, and system
              design. I build scalable applications that solve real business
              problems.
            </p>

            <TerminalTyping />
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/projects" className="theme-button-primary">
              View Projects
            </Link>

            <Link href="/contact" className="theme-button-secondary">
              Let&apos;s Work Together
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
