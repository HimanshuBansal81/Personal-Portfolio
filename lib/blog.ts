import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  formattedDate: string;
  description: string;
  readingTime: string;
};

type BlogFrontmatter = {
  title?: string;
  date?: string;
  description?: string;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
  }).format(new Date(date));
}

function getReadingTime(content: string) {
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));

  return `${minutes} min read`;
}

function ensurePostsDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

function parsePostFile(fileName: string): BlogPostMeta {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as BlogFrontmatter;
  const date = frontmatter.date ?? "";

  return {
    slug,
    title: frontmatter.title ?? slug,
    date,
    formattedDate: date ? formatDate(date) : "",
    description: frontmatter.description ?? "",
    readingTime: getReadingTime(content),
  };
}

export function getSortedPosts(): BlogPostMeta[] {
  ensurePostsDirectory();

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(parsePostFile)
    .sort((firstPost, secondPost) =>
      firstPost.date < secondPost.date ? 1 : -1,
    );
}

export function getPostSlugs() {
  ensurePostsDirectory();

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => ({
      slug: fileName.replace(/\.md$/, ""),
    }));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  ensurePostsDirectory();

  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as BlogFrontmatter;
  const processedContent = await remark().use(html).process(content);

  return {
    slug,
    title: frontmatter.title ?? slug,
    date: frontmatter.date ?? "",
    formattedDate: frontmatter.date ? formatDate(frontmatter.date) : "",
    description: frontmatter.description ?? "",
    readingTime: getReadingTime(content),
    contentHtml: processedContent.toString(),
  };
}
