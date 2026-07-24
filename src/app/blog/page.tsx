import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import PageHeader from "@/components/sections/shared/PageHeader";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Updates, milestones, and stories from the Bin to Better community — recycling projects, events, and impact.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar activePage="Blog" />
      <main>
        <PageHeader
          eyebrow="News & Stories"
          title="From the"
          titleAccent="Blog"
          subheading="Milestones, project updates, and stories from the Bin to Better community."
        />

        <Section width="default" className="bg-surface-900 pt-4">
          {posts.length === 0 ? (
            <p className="text-center text-white/60">No posts yet — check back soon.</p>
          ) : (
            <div className="space-y-6">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.06}>
                  <Link href={`/blog/${post.slug}`} className="block">
                    <Card interactive className="p-7 md:p-8">
                      <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-white/50">
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-brand/15 px-2.5 py-0.5 text-xs font-medium text-brand"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-2xl font-bold text-white">{post.title}</h2>
                      <p className="mt-3 text-white/65">{post.excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                        Read more
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </span>
                    </Card>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </Section>
      </main>
      <Footer />
    </>
  );
}
