import Link from "next/link";
import Section from "@/components/Section";

export default function ContactCta() {
  return (
    <Section className="border-t border-white/10">
      <div className="theme-card rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12">
        <div className="max-w-4xl">
          <p className="theme-section-label">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            Building something complex, operational, or logic-heavy?
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8">
            I’m interested in working on systems that need careful thinking,
            reliable execution, and engineering decisions grounded in how the
            product actually works.
          </p>
          <Link href="/contact" className="theme-button-primary mt-8">
            Contact Me
          </Link>
        </div>
      </div>
    </Section>
  );
}
