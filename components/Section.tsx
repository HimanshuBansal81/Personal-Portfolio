import type { ReactNode } from "react";
import Container from "@/components/Container";
import Heading from "@/components/Heading";

type SectionProps = {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  contentClassName?: string;
};

export default function Section({
  children,
  title,
  subtitle,
  className = "",
  contentClassName = "",
}: SectionProps) {
  return (
    <section className={`py-16 sm:py-24 ${className}`.trim()}>
      <Container className={contentClassName}>
        {title && <Heading title={title} subtitle={subtitle} />}
        {!title && subtitle && <p className="theme-section-label">{subtitle}</p>}

        <div className={title || subtitle ? "mt-12" : ""}>{children}</div>
      </Container>
    </section>
  );
}
