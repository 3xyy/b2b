// File-based blog collection. Reads Markdown files from src/content/blog at
// build time (server-only) and parses frontmatter + body. Works under
// `output: "export"` because Server Components run during the static build.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export interface PostMeta {
  slug: string;
  title: string;
  date: string; // ISO yyyy-mm-dd
  excerpt: string;
  author: string;
  tags: string[];
}

export interface Post extends PostMeta {
  html: string;
}

function readSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

function parse(slug: string): Post {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ? String(data.date).slice(0, 10) : "",
    excerpt: data.excerpt ?? "",
    author: data.author ?? "Bin to Better",
    tags: Array.isArray(data.tags) ? data.tags : [],
    html: marked.parse(content, { async: false }) as string,
  };
}

const byDateDesc = (a: PostMeta, b: PostMeta) => (a.date < b.date ? 1 : -1);

export function getAllPosts(): Post[] {
  return readSlugs().map(parse).sort(byDateDesc);
}

export function getPostSlugs(): string[] {
  return readSlugs();
}

export function getPost(slug: string): Post | null {
  try {
    return parse(slug);
  } catch {
    return null;
  }
}

export function formatDate(iso: string): string {
  if (!iso) return "";
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
