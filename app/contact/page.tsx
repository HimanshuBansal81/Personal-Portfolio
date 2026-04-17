import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";

const contactDetails = [
  {
    label: "Email",
    value: "himanshub49@gmail.com",
    href: "mailto:himanshub49@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Himanshu Bansal",
    href: "https://www.linkedin.com/in/himanshu-bansal-211a62225/",
  },
];

export default function ContactPage() {
  return (
    <div className="pb-8">
      <Section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="theme-section-label">Contact</p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            Let&apos;s work together
          </h1>
          <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8">
            If you have a system to build, optimize, or fix, feel free to reach
            out.
          </p>
        </div>
      </Section>

      <Section className="border-t border-white/10 pt-0 sm:pt-0">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)]">
          <aside className="theme-card rounded-[2rem] p-6 sm:p-8">
            <p className="theme-section-label">Contact info</p>
            <div className="mt-6 space-y-5">
              {contactDetails.map((item) => (
                <div key={item.label} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    className="theme-link mt-3 inline-block text-base leading-7"
                    target={item.href.startsWith("https") ? "_blank" : undefined}
                    rel={item.href.startsWith("https") ? "noreferrer" : undefined}
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </aside>

          <ContactForm />
        </div>
      </Section>
    </div>
  );
}
