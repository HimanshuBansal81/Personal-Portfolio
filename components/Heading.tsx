type HeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function Heading({
  title,
  subtitle,
  className = "",
}: HeadingProps) {
  return (
    <div className={`max-w-2xl ${className}`.trim()}>
      {subtitle && <p className="theme-section-label">{subtitle}</p>}
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
    </div>
  );
}
