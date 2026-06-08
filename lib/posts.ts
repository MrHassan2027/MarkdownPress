import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

const POSTS_DIR = path.join(process.cwd(), "posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readingTime: number;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export function getAllPostsMeta(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith(".md"));
  return files
    .map(filename => {
      const slug = filename.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
      const { data, content } = matter(raw);
      const words = content.split(/\s+/).length;
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        tags: data.tags ?? [],
        excerpt: data.excerpt ?? content.slice(0, 150) + "...",
        readingTime: Math.ceil(words / 200),
      } as PostMeta;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPost(slug: string): Promise<Post> {
  const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const processed = await remark()
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);
  const words = content.split(/\s+/).length;
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    tags: data.tags ?? [],
    excerpt: data.excerpt ?? "",
    readingTime: Math.ceil(words / 200),
    contentHtml: String(processed),
  };
}

export function getAllTags(): string[] {
  const posts = getAllPostsMeta();
  return [...new Set(posts.flatMap(p => p.tags))].sort();
}
