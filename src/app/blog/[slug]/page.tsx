import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import Section from "@/components/ui/Section";
import { getPost, getPostSlugs, formatDate } from "@/lib/blog";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar activePage="Blog" />
      <main>
        <article>
          <header className="relative overflow-hidden pt-32 pb-12">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface-900 to-surface-950" />
            <div className="mx-auto max-w-3xl px-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-brand hover:underline"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Back to blog
              </Link>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/50">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>·</span>
                <span>{post.author}</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand/15 px-2.5 py-0.5 text-xs font-medium text-brand"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="mt-4 text-h1 font-bold text-white text-balance">
                {post.title}
              </h1>
            </div>
          </header>

          <Section as="div" width="narrow" className="bg-surface-950 py-12">
            <div
              className="prose-b2b"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </Section>
        </article>
      </main>
      <Footer />
    </>
  );
}
