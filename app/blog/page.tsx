import Link from "next/link";
import Section from "@/components/Section";
import { getSortedPosts } from "@/lib/blog";

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
              Writing focused on building reliable software, working through
              complexity, and improving systems that need to perform under
              real-world conditions.
            </p>
          </div>

          <aside className="theme-card rounded-3xl p-6">
            <p className="theme-section-label">Publishing style</p>
            <ul className="mt-6 space-y-4">
              {[
                "Short, practical backend notes",
                "Real-world system design thinking",
                "Performance and maintainability",
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

      <Section title="All Posts" subtitle="Latest first" className="border-t border-white/10">
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="theme-card rounded-[2rem] p-6 transition duration-300 hover:border-sky-200/20 hover:shadow-[0_22px_60px_rgba(5,12,25,0.32)] sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <p className="theme-section-label text-xs">{post.formattedDate}</p>
                <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  {post.readingTime}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                {post.title}
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-300">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="theme-button-secondary mt-8 w-full sm:w-auto"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
