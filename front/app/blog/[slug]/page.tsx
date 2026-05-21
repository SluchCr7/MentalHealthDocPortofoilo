import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, CheckCircle, Quote, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { blogPosts } from "@/data/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Find matched post
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  // Get related posts (exclude current)
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="max-w-7xl mx-auto px-6 sm:px-8 py-16 space-y-16 relative overflow-hidden">
      
      {/* Background Soft Orbs */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-teal-safe/5 rounded-full glow-orb -z-10" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gold-accent/5 rounded-full glow-orb -z-10" />

      {/* ======================================= */}
      {/* BACK NAVIGATION                         */}
      {/* ======================================= */}
      <div className="text-left">
        <Link href="/blog">
          <Button variant="ghost" size="sm" className="flex gap-2 items-center text-xs uppercase tracking-wider font-semibold">
            <ArrowLeft className="w-4 h-4" /> Back to Blog Directory
          </Button>
        </Link>
      </div>

      {/* ======================================= */}
      {/* ARTICLE HEADER BLOCK                    */}
      {/* ======================================= */}
      <header className="max-w-3xl space-y-6 text-left border-b border-brand-navy/5 dark:border-brand-gold/10 pb-8">
        <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground">
          <span className="text-[10px] uppercase font-bold tracking-widest text-teal-safe bg-teal-safe/10 px-3 py-1 rounded-full border border-teal-safe/10">
            {post.category}
          </span>
          <span className="flex gap-1.5 items-center">
            <Clock className="w-3.5 h-3.5" /> {post.readingTime}
          </span>
          <span className="flex gap-1.5 items-center">
            <Calendar className="w-3.5 h-3.5" />
            {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4.5xl font-serif font-bold text-brand-navy dark:text-bg-beige leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gold-accent/15 flex items-center justify-center border border-gold-accent/10">
            <span className="text-xs font-serif font-bold text-gold-accent">EB</span>
          </div>
          <div>
            <p className="text-xs font-bold text-brand-navy dark:text-bg-beige">{post.author}</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mt-0.5">Licensed Clinical Psychologist</p>
          </div>
        </div>
      </header>

      {/* ======================================= */}
      {/* ARTICLE GRID LAYOUT                     */}
      {/* ======================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Main Article Content left Column */}
        <div className="lg:col-span-8 space-y-8 text-left text-base sm:text-lg text-muted-foreground leading-relaxed">
          
          {/* Paragraphs loop */}
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          {/* Pullquote Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-teal-safe/5 dark:bg-teal-safe/10 border-l-[6px] border-teal-safe flex items-start gap-4 shadow-sm my-10">
            <Quote className="w-10 h-10 text-teal-safe shrink-0 mt-1" />
            <blockquote className="font-serif text-lg sm:text-xl font-medium text-brand-navy dark:text-bg-beige leading-relaxed italic">
              "{post.quote}"
            </blockquote>
          </div>

          {/* Clinical Action Plan Checklist Card */}
          <div className="rounded-[32px] border border-brand-navy/10 bg-white/40 dark:border-brand-gold/15 dark:bg-brand-navy-light/40 backdrop-blur-md p-6 sm:p-10 my-10 space-y-6">
            <h3 className="font-serif text-xl font-bold text-brand-navy dark:text-bg-beige flex gap-2 items-center">
              <CheckCircle className="w-5 h-5 text-teal-safe" /> Actionable Resiliency Blueprint
            </h3>
            <p className="text-sm text-muted-foreground">
              Dr. Bennett recommends integrating these daily somatic and cognitive behaviors to anchor nervous system safety:
            </p>
            
            <ul className="space-y-4 text-sm text-muted-foreground">
              {post.tips.map((tip, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-teal-safe shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Sidebar Column Right */}
        <aside className="lg:col-span-4 space-y-8 text-left">
          
          {/* Quick Schedule card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-serif">Secure Support consultation</CardTitle>
              <CardDescription>Are you experiencing chronic worry, PTSD distress, or couples friction?</CardDescription>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-3">
              <p>I provide specialized clinical care structured for your neurology. Let's schedule a 1-on-1 co-regulating discussion.</p>
              <div className="flex items-center gap-2 text-teal-safe font-semibold">
                <ShieldCheck className="w-4 h-4" /> HIPAA Verified & Secure
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/booking" className="w-full">
                <Button variant="gold" className="w-full text-xs uppercase tracking-wider font-semibold">
                  Schedule Initial Call
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Related Articles list */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-bold text-brand-navy dark:text-bg-beige uppercase tracking-wider border-b border-brand-navy/5 dark:border-brand-gold/10 pb-2">
              Related Clinical Essays
            </h4>
            <div className="space-y-4">
              {relatedPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="block group">
                  <div className="p-4 rounded-2xl bg-white/40 border border-brand-navy/5 group-hover:border-teal-safe dark:bg-brand-navy-light/40 dark:border-brand-gold/10 dark:group-hover:border-brand-gold/50 transition-all duration-300">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-teal-safe bg-teal-safe/10 px-2 py-0.5 rounded">
                      {related.category}
                    </span>
                    <h5 className="font-serif text-sm font-bold text-brand-navy dark:text-bg-beige mt-2 group-hover:text-gold-accent dark:group-hover:text-gold-light line-clamp-2">
                      {related.title}
                    </h5>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </aside>

      </div>

    </article>
  );
}
