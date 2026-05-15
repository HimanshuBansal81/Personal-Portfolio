import { remark } from "remark";
import html from "remark-html";
import { blogPosts } from "@/lib/blog-posts";

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  formattedDate: string;
  displayDate: string;
  category: string;
  readTime: string;
  summary: string;
  description: string;
  readingTime: string;
  tags: string[];
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

function toPostMeta(post: (typeof blogPosts)[number]): BlogPostMeta {
  return {
    slug: post.slug,
    title: post.title,
    date: post.date,
    formattedDate: post.displayDate,
    displayDate: post.displayDate,
    category: post.category,
    readTime: post.readTime,
    summary: post.summary,
    description: post.summary,
    readingTime: post.readTime,
    tags: post.tags,
  };
}

export function getSortedPosts(): BlogPostMeta[] {
  return blogPosts
    .map(toPostMeta)
    .sort((firstPost, secondPost) =>
      firstPost.date < secondPost.date ? 1 : -1,
    );
}

export function getPostSlugs() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return null;
  }

  const processedContent = await remark().use(html).process(post.content);

  return {
    ...toPostMeta(post),
    contentHtml: processedContent.toString(),
  };
}
