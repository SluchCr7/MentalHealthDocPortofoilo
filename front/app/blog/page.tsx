"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, Compass, Calendar, ArrowRight, BookOpen, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { blogPosts } from "@/data/blog";

export default function BlogHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "Anxiety", "Trauma", "CBT", "Relationships", "Stress", "Mindfulness"];

  // Filter posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesCategory =
      activeCategory === "all" || post.category.toLowerCase() === activeCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 space-y-16 relative overflow-hidden">
      
      {/* Background Soft Orbs */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-teal-safe/5 rounded-full glow-orb -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gold-accent/5 rounded-full glow-orb -z-10" />

      {/* ======================================= */}
      {/* HEADER BANNER                           */}
      {/* ======================================= */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        className="text-center max-w-3xl mx-auto space-y-6"
      >
        <span className="text-xs uppercase font-semibold text-gold-accent dark:text-gold-light tracking-widest block">
          Neuroscience & Somatics
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-navy dark:text-bg-beige leading-tight">
          Aura Psychology & Research Library
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Bi-weekly essays exploring autonomic nervous system co-regulation, emotional boundaries, cognitive distortions reframing, and couples trauma repair.
        </p>
      </motion.div>

      {/* ======================================= */}
      {/* SEARCH AND FILTER BAR                   */}
      {/* ======================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Search */}
        <div className="lg:col-span-4 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search clinical topics..."
            className="w-full text-sm py-3.5 pl-11 pr-4 rounded-xl border border-brand-navy/10 bg-white/60 dark:border-brand-gold/15 dark:bg-brand-navy-light focus:outline-none focus:border-teal-safe transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted-foreground" />
        </div>

        {/* Filter categories */}
        <div className="lg:col-span-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none flex-wrap">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <Button
                key={cat}
                variant={isActive ? "primary" : "secondary"}
                onClick={() => setActiveCategory(cat)}
                className="text-[10px] uppercase tracking-widest font-semibold px-4 py-2"
              >
                {cat === "all" ? "All Essays" : cat}
              </Button>
            );
          })}
        </div>
      </div>

      {/* ======================================= */}
      {/* BLOG GRID                               */}
      {/* ======================================= */}
      <AnimatePresence mode="wait">
        {filteredPosts.length > 0 ? (
          <motion.div
            key="blog-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post) => (
              <motion.div key={post.slug} variants={fadeInVariants} layout>
                <Card className="h-full flex flex-col justify-between p-1">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-teal-safe bg-teal-safe/10 dark:bg-teal-safe/15 px-2.5 py-0.5 rounded-full border border-teal-safe/10">
                        {post.category}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground flex gap-1.5 items-center">
                        <Clock className="w-3.5 h-3.5" /> {post.readingTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl leading-snug line-clamp-2 hover:text-gold-accent dark:hover:text-gold-light transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3 mt-3 leading-relaxed text-sm">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Excerpt tags preview */}
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {post.tags.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="text-[9px] font-sans font-semibold text-muted-foreground/80 bg-brand-navy/5 dark:bg-brand-gold/5 px-2 py-0.5 rounded-full">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between items-center bg-brand-navy/[0.01] dark:bg-brand-gold/[0.01] pt-6">
                    <span className="text-xs text-muted-foreground font-semibold flex gap-1.5 items-center">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="flex gap-1.5 items-center text-xs uppercase tracking-wider font-semibold p-0 hover:translate-x-1 transition-all duration-300">
                        Read Essay <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Empty Search State */
          <motion.div
            key="empty-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 max-w-sm mx-auto space-y-4"
          >
            <div className="inline-flex p-4 bg-gold-accent/10 text-gold-accent rounded-full mb-2">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-bold text-brand-navy dark:text-bg-beige">
              No Clinical Essays Found
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We couldn't find any articles matching your search query. Please try searching other mental wellness keywords or categories.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
              className="text-xs uppercase tracking-wider font-semibold"
            >
              Reset Search Filter
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================= */}
      {/* DIRECT CONSULTATION AD                  */}
      {/* ======================================= */}
      <section className="bg-teal-safe/5 dark:bg-teal-safe/10 border border-teal-safe/10 rounded-[32px] p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto">
        <h3 className="font-serif text-2xl font-bold text-brand-navy dark:text-bg-beige">
          Confidential Consultation Support
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Need clarifying guidance on a specific mental health distress highlighted in these papers? I am here to help. Reach out securely today.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/booking">
            <Button variant="gold" size="lg" className="flex gap-2 items-center text-xs uppercase tracking-wider font-semibold">
              <BookOpen className="w-4.5 h-4.5" /> Book Consultation
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
