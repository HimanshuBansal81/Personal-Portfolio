import { notFound } from "next/navigation";
import Section from "@/components/Section";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";

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
          <div className="flex flex-wrap items-center gap-3">
            <p className="theme-section-label">{post.formattedDate}</p>
            <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
              {post.readingTime}
            </span>
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.03] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-base leading-8 text-zinc-300 sm:text-lg sm:leading-8">
            {post.description}
          </p>
        </div>
      </Section>

      <Section className="border-t border-white/10 pt-0 sm:pt-0">
        <article className="mx-auto max-w-3xl">
          <div
            className="[&_h1]:text-4xl [&_h1]:font-semibold [&_h1]:tracking-[-0.04em] [&_h2]:mt-10 [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:tracking-[-0.03em] [&_h3]:mt-8 [&_h3]:text-2xl [&_h3]:font-semibold [&_p]:mt-5 [&_p]:text-base [&_p]:leading-8 [&_p]:text-zinc-300 [&_ul]:mt-5 [&_ul]:space-y-3 [&_ul]:pl-6 [&_li]:text-base [&_li]:leading-8 [&_li]:text-zinc-300 [&_strong]:text-white [&_a]:text-sky-200"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </Section>
    </div>
  );
}
