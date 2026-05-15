import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import { getSortedPosts } from "@/lib/blog";

const title = "Blog";
const description =
  "A practical engineering learning timeline covering portfolio building, .NET projects, deployment, DSA preparation, and backend system design.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Himanshu Bansal",
    description,
    url: "/blog",
  },
  twitter: {
    title: "Blog | Himanshu Bansal",
    description,
  },
};

export default function BlogPage() {
  const posts = getSortedPosts();

  return (
    <div className="pb-8">
      <Section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:items-start">
          <div>
            <p className="theme-section-label">Blog</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Notes on systems, backend architecture, and practical engineering.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8">
              A timeline of what I am building and learning across portfolio
              work, full-stack deployment, backend system design, interview
              preparation, and modern .NET engineering.
            </p>
          </div>

          <aside className="theme-card rounded-3xl p-6">
            <p className="theme-section-label">Learning themes</p>
            <ul className="mt-6 space-y-4">
              {[
                "Proof-of-work project building",
                "Backend and full-stack delivery",
                "Career growth through structured learning",
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

      <Section
        title="Engineering Learning Timeline"
        subtitle="Latest first"
        className="border-t border-white/10"
      >
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="theme-card rounded-[2rem] p-6 transition duration-300 hover:border-sky-200/20 hover:shadow-[0_22px_60px_rgba(5,12,25,0.32)] sm:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="theme-section-label text-xs">
                      {post.displayDate}
                    </p>
                    <span className="rounded-full border border-sky-200/10 bg-sky-300/5 px-3 py-1 text-xs font-medium text-sky-100/75">
                      {post.category}
                    </span>
                    <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {post.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-300">
                    {post.summary}
                  </p>
                </div>

                {post.slug && (
                  <Link
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="theme-button-secondary w-full shrink-0 sm:w-auto"
                  >
                    Read Article
                  </Link>
                )}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-zinc-300/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
