import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Section from "@/components/Section";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  const title = post.title;
  const description = post.summary;
  const url = `/blog/${post.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Himanshu Bansal`,
      description,
      url,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      title: `${title} | Himanshu Bansal`,
      description,
    },
  };
}

export async function generateStaticParams() {
  return getPostSlugs();
}

export default async function BlogPostPage(
  props: PageProps<"/blog/[slug]">,
) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pb-8">
      <Section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl">
          <Link href="/blog" className="theme-link text-sm font-medium">
            Back to Blog
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <p className="theme-section-label">{post.formattedDate}</p>
            <span className="rounded-full border border-sky-200/10 bg-sky-300/5 px-3 py-1 text-xs font-medium text-sky-100/75">
              {post.category}
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
              {post.readTime}
            </span>
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8">
            {post.description}
          </p>
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
        </div>
      </Section>

      <Section className="border-t border-white/10 pt-0 sm:pt-0">
        <article className="mx-auto max-w-3xl">
          <div
            className="[&_a]:text-sky-200 [&_code]:rounded-md [&_code]:border [&_code]:border-white/10 [&_code]:bg-white/[0.04] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&_code]:text-sky-100 [&_h1]:text-4xl [&_h1]:font-semibold [&_h1]:tracking-[-0.04em] [&_h2]:mt-12 [&_h2]:border-t [&_h2]:border-white/10 [&_h2]:pt-10 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:tracking-[-0.03em] [&_h2]:text-white [&_h3]:mt-8 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-white [&_li]:text-base [&_li]:leading-8 [&_li]:text-zinc-300 [&_p]:mt-5 [&_p]:text-base [&_p]:leading-8 [&_p]:text-zinc-300 [&_pre_code]:border-0 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre]:mt-6 [&_pre]:overflow-x-auto [&_pre]:rounded-3xl [&_pre]:border [&_pre]:border-white/10 [&_pre]:bg-slate-950/70 [&_pre]:p-5 [&_pre]:text-sm [&_pre]:leading-7 [&_strong]:text-white [&_ul]:mt-5 [&_ul]:space-y-3 [&_ul]:pl-6"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </Section>
    </div>
  );
}
