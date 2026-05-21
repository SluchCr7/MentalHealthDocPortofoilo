"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  HeartPulse,
  ShieldAlert,
  Users,
  Home as HomeIcon,
  Sparkles,
  Smile,
  Video,
  ArrowRight,
  CheckCircle,
  Calendar,
  Compass,
  Star,
  Clock,
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  ShieldAlert as AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { services } from "@/data/services";
import { blogPosts } from "@/data/blog";
import { faqs } from "@/data/faq";
import { useToast } from "@/components/ui/Toast";

// Map string icon names to Lucide icons
const iconMap: Record<string, React.ComponentType<any>> = {
  Brain: Brain,
  HeartPulse: HeartPulse,
  ShieldAlert: ShieldAlert,
  Users: Users,
  Home: HomeIcon,
  Sparkles: Sparkles,
  Smile: Smile,
  Video: Video
};

export default function Home() {
  const { toast } = useToast();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMsg, setContactMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Testimonials list
  const testimonials = [
    {
      quote: "Working with Dr. Bennett fundamentally altered the way I relate to my anxiety. The integration of somatic experiencing and practical CBT tools gave me control over panic loops that had paralyzed me for years.",
      client: "Sarah M.",
      profession: "Creative Director",
      rating: 5,
      issue: "High-Functioning Anxiety Recovery"
    },
    {
      quote: "Her clinical couples counseling saved our marriage. She decodes patterns without taking sides, creating an incredibly secure container where we could repair attachment ruptures we didn't know were there.",
      client: "David & Marcus L.",
      profession: "Healthcare Executives",
      rating: 5,
      issue: "Relational Cohesion & Repair"
    },
    {
      quote: "The EMDR sessions for complex childhood trauma recovery were intensive but deeply liberating. Dr. Bennett handles vulnerable somatic experiences with immense attunement, care, and professional wisdom.",
      client: "Elena R.",
      profession: "Academic Researcher",
      rating: 5,
      issue: "Somatic EMDR Processing"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName || !contactEmail || !contactMsg) {
      toast("Incomplete Fields", "Please complete all fields in the secure form.", "error");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      toast(
        "Secure Intake Message Sent",
        "Your confidential request has been queued securely. Dr. Bennett will contact you within 24 hours.",
        "success"
      );
      setContactName("");
      setContactEmail("");
      setContactMsg("");
      setIsSubmitting(false);
    }, 1500);
  };

  // Scroll reveal options
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="flex flex-col gap-24 relative overflow-hidden pb-12">
      
      {/* Dynamic Animated Blur Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-teal-safe/5 glow-orb animate-pulse-slow -z-10" />
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] rounded-full bg-gold-accent/5 glow-orb animate-spin-slow -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-teal-safe/5 glow-orb animate-pulse-slow -z-10" />

      {/* ======================================= */}
      {/* 1. HERO SECTION                         */}
      {/* ======================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-16 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Hero Content Left */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Safe tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-xs font-semibold text-teal-safe dark:text-brand-gold bg-teal-safe/10 dark:bg-brand-gold/15 border border-teal-safe/10 dark:border-brand-gold/20 px-4 py-2 rounded-full uppercase tracking-wider"
            >
              <Compass className="w-4 h-4" /> Evidence-Based Somatic & CBT Practice
            </motion.div>

            {/* Main Header Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-navy dark:text-bg-beige leading-[1.12]"
            >
              Reclaim Your Emotional Safety & <span className="text-gold-accent dark:text-gold-light italic">Mental Sovereignty</span>
            </motion.h1>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Welcome to a supportive, premium clinical container. I integrate cognitive restructuring with trauma-informed somatic experiencing to help you soothe chronic overwhelm, repair relational boundaries, and heal attachment wounds.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/booking">
                <Button variant="gold" size="lg" className="w-full sm:w-auto flex gap-2 items-center text-sm uppercase tracking-wider font-semibold">
                  <Calendar className="w-5 h-5" /> Schedule Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto flex gap-2 items-center text-sm uppercase tracking-wider">
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            {/* Hero Statistics Counters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-10 border-t border-brand-navy/5 dark:border-brand-gold/10"
            >
              {[
                { number: "12+", label: "Years Experience" },
                { number: "1,500+", label: "Clients Guided" },
                { number: "98%", label: "Anxiety Relief Rate" }
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-brand-navy dark:text-brand-gold">
                    {stat.number}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1 tracking-wider uppercase font-semibold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Hero Visual Abstract Representation Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative w-full aspect-[4/5] max-w-sm mx-auto flex items-center justify-center"
          >
            {/* Elegant glassmorphic clinical avatar structure */}
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-tr from-brand-navy to-brand-navy-light dark:from-brand-navy-light dark:to-[#17223b] overflow-hidden shadow-2xl border border-brand-gold/10 relative">
              
              {/* Abstract luxury CSS backdrop curves */}
              <div className="absolute top-0 right-0 w-44 h-44 rounded-full bg-gold-accent/20 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-teal-safe/25 blur-3xl" />
              
              {/* Inner glowing core representation */}
              <div className="absolute inset-10 rounded-[30px] border border-brand-gold/20 flex flex-col justify-end p-8 text-white bg-black/10 backdrop-blur-xs">
                <div className="space-y-2">
                  <div className="inline-flex p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                    <Compass className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-bold tracking-wide">
                    Dr. Evelyn Bennett
                  </h3>
                  <p className="text-xs text-brand-gold uppercase tracking-wider font-semibold">
                    Ph.D., LCP | Licensed Clinical Psychologist
                  </p>
                  <p className="text-[10px] text-white/60 leading-relaxed pt-2 border-t border-white/10 font-sans">
                    Specialized in Somatic Integration, Cognitive Restructuring, & Attachment-focused trauma recovery.
                  </p>
                </div>
              </div>

              {/* Floating micro indicators */}
              <div className="absolute top-10 left-8 glass rounded-2xl p-4 border border-white/10 shadow-lg flex items-center gap-3 animate-float">
                <div className="w-3 h-3 rounded-full bg-teal-safe animate-ping" />
                <span className="text-[10px] font-semibold tracking-wider text-brand-navy dark:text-bg-beige uppercase">
                  Accepting New Patients
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ======================================= */}
      {/* 2. ABOUT CLINICIAN                      */}
      {/* ======================================= */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto w-full py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Details Left */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase font-semibold text-gold-accent dark:text-gold-light tracking-widest block">
              Professional Biography
            </span>
            <h2 className="text-3.5xl font-serif font-bold text-brand-navy dark:text-bg-beige leading-tight">
              A Compassionate, Evidence-Based Therapeutic Philosophy
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              For over twelve years, I have helped clients navigate the intricate landscapes of their nervous systems. I believe that emotional struggles are not systemic design failures, but rather protective physiological patterns that can be re-patterned and healed.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              My therapeutic container integrates strict academic training with deep clinical empathy, ensuring you feel clinically understood, fully validated, and emotionally anchored throughout your healing journey.
            </p>

            <Link href="/about" className="inline-block pt-2">
              <Button variant="outline" className="flex gap-2 items-center text-xs uppercase tracking-wider font-semibold">
                Read Full Biography <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Credentials timeline Right */}
          <div className="lg:col-span-7 bg-white/40 dark:bg-brand-navy-light/40 backdrop-blur-md rounded-[32px] border border-brand-navy/5 dark:border-brand-gold/10 p-8 sm:p-10">
            <h3 className="text-xl font-serif font-bold text-brand-navy dark:text-bg-beige mb-8 border-b border-brand-navy/5 dark:border-brand-gold/10 pb-4">
              Clinical Qualifications & Credentials
            </h3>
            
            {/* Timeline */}
            <div className="space-y-8 relative">
              <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-brand-navy/10 dark:bg-brand-gold/15" />
              
              {[
                { year: "2018 - Present", title: "Private Clinical Practice Director", detail: "Specializing in Somatic EMDR, worry restructuring, and relationship repair." },
                { year: "2014 - 2018", title: "Senior Clinical Psychologist | LA Health Systems", detail: "Led anxiety intensive treatment plans and PTSD exposure recovery groups." },
                { year: "2014", title: "Doctor of Philosophy in Clinical Psychology", detail: "University of California, Los Angeles (UCLA) | Specialization in Somatic Attachment." },
                { year: "Licensure", title: "California Board of Psychology License #CA92410", detail: "Compliant with state-wide psychotherapeutic standards and ongoing audits." }
              ].map((cred, idx) => (
                <div key={idx} className="flex gap-6 relative pl-8">
                  {/* Timeline dot */}
                  <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-teal-safe border-2 border-white dark:border-brand-navy z-10" />
                  
                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold text-gold-accent dark:text-gold-light uppercase tracking-wider">
                      {cred.year}
                    </span>
                    <h4 className="text-base font-bold text-brand-navy dark:text-bg-beige">
                      {cred.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cred.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ======================================= */}
      {/* 3. THERAPEUTIC SERVICES                 */}
      {/* ======================================= */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto w-full py-12 text-center">
        {/* Header */}
        <div className="max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase font-semibold text-gold-accent dark:text-gold-light tracking-widest block">
            Areas of Specialization
          </span>
          <h2 className="text-3.5xl sm:text-4xl font-serif font-bold text-brand-navy dark:text-bg-beige leading-tight">
            Tailored Treatment Pathways Designed for Nervous System Safety
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Evidence-based modalities adapted specifically to support your unique emotional landscape and promote lasting resilience.
          </p>
        </div>

        {/* Services Grid (6 key showcase items) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          {services.slice(0, 6).map((service) => {
            const Icon = iconMap[service.icon] || Brain;
            return (
              <motion.div key={service.id} variants={fadeInVariants}>
                <Card className="h-full flex flex-col justify-between">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-teal-safe/10 dark:bg-brand-gold/10 border border-teal-safe/15 dark:border-brand-gold/20 flex items-center justify-center text-teal-safe dark:text-brand-gold mb-6">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.shortDesc}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex gap-2.5 items-center">
                          <CheckCircle className="w-4 h-4 text-teal-safe shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="flex justify-between items-center bg-brand-navy/[0.01] dark:bg-brand-gold/[0.01] pt-6">
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Standard rate</span>
                      <span className="text-lg font-serif font-bold text-brand-navy dark:text-bg-beige">
                        {service.pricing} <span className="text-xs font-normal font-sans text-muted-foreground">/ {service.duration}</span>
                      </span>
                    </div>
                    <Link href={`/services#${service.id}`}>
                      <Button variant="ghost" size="sm" className="flex gap-1.5 items-center text-xs uppercase tracking-wider font-semibold p-0 hover:translate-x-1 transition-all duration-300">
                        Details <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All Services Callout */}
        <div className="mt-12">
          <Link href="/services">
            <Button variant="outline" size="lg" className="px-10 flex gap-2 items-center text-xs uppercase tracking-wider font-semibold">
              View All Specialty Programs <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ======================================= */}
      {/* 4. CLIENT TESTIMONIALS                  */}
      {/* ======================================= */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto w-full py-12 text-center bg-teal-safe/5 dark:bg-teal-safe/10 rounded-[40px] border border-teal-safe/10">
        <div className="max-w-4xl mx-auto space-y-8 relative py-8 px-4 sm:px-12">
          
          <span className="text-xs uppercase font-semibold text-teal-safe tracking-widest block">
            Co-Regulated Client Success
          </span>

          {/* Testimonial slider content */}
          <div className="min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="flex justify-center gap-1 text-gold-accent">
                  {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg sm:text-2xl font-serif font-medium text-brand-navy dark:text-bg-beige leading-relaxed italic">
                  "{testimonials[activeTestimonial].quote}"
                </blockquote>

                <div>
                  <h4 className="font-sans text-base font-bold text-brand-navy dark:text-bg-beige">
                    {testimonials[activeTestimonial].client}
                  </h4>
                  <p className="text-xs uppercase tracking-widest text-gold-accent dark:text-gold-light font-semibold mt-1">
                    {testimonials[activeTestimonial].profession} &bull; {testimonials[activeTestimonial].issue}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bullet navigations */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeTestimonial === idx ? "w-8 bg-teal-safe" : "w-2.5 bg-brand-navy/15 dark:bg-brand-gold/25"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ======================================= */}
      {/* 5. INTERACTIVE TOOLKIT PREVIEW           */}
      {/* ======================================= */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto w-full py-12 text-center">
        <div className="max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs uppercase font-semibold text-gold-accent dark:text-gold-light tracking-widest block">
            Self-Care Grounding Toolkit
          </span>
          <h2 className="text-3.5xl sm:text-4xl font-serif font-bold text-brand-navy dark:text-bg-beige leading-tight">
            Interactive Mental Wellness Utilities
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Begin exploring simple box-breathing regulators, mood self-screeners, and routine planners instantly to begin re-centering your neurology.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          <Card className="flex flex-col justify-between">
            <CardHeader>
              <div className="w-12 h-12 rounded-2xl bg-teal-safe/10 dark:bg-brand-gold/10 border border-teal-safe/15 dark:border-brand-gold/20 flex items-center justify-center text-teal-safe mb-6">
                <Smile className="w-6 h-6 stroke-[1.5]" />
              </div>
              <CardTitle>Nervous System Breathing Bubble</CardTitle>
              <CardDescription>
                A visual breathing cue supporting a 4-4-4-4 seconds box breathing structure to downregulate heart rates and soothe flight-or-fight signals.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/resources" className="w-full">
                <Button variant="teal" className="w-full text-xs uppercase tracking-wider font-semibold">
                  Open Breathing Tool
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col justify-between">
            <CardHeader>
              <div className="w-12 h-12 rounded-2xl bg-teal-safe/10 dark:bg-brand-gold/10 border border-teal-safe/15 dark:border-brand-gold/20 flex items-center justify-center text-teal-safe mb-6">
                <Compass className="w-6 h-6 stroke-[1.5]" />
              </div>
              <CardTitle>5-Question Clinical Resiliency Screener</CardTitle>
              <CardDescription>
                An interactive sifting assessment measuring clinical anxiety and fatigue patterns, producing specialized recommended care blueprints.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/resources" className="w-full">
                <Button variant="gold" className="w-full text-xs uppercase tracking-wider font-semibold">
                  Take Free Screener
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col justify-between">
            <CardHeader>
              <div className="w-12 h-12 rounded-2xl bg-teal-safe/10 dark:bg-brand-gold/10 border border-teal-safe/15 dark:border-brand-gold/20 flex items-center justify-center text-teal-safe mb-6">
                <Sparkles className="w-6 h-6 stroke-[1.5]" />
              </div>
              <CardTitle>Mindfulness Routine Checklist</CardTitle>
              <CardDescription>
                Check off daily cognitive and somatic behaviors—such as gratitude scribing and digital sunsets—to increase your internal coherence score.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/resources" className="w-full">
                <Button variant="outline" className="w-full text-xs uppercase tracking-wider font-semibold">
                  Open Habit Tracker
                </Button>
              </Link>
            </CardFooter>
          </Card>

        </div>
      </section>

      {/* ======================================= */}
      {/* 6. CLINICAL MENTAL HEALTH BLOG           */}
      {/* ======================================= */}
      <section className="px-6 sm:px-8 max-w-7xl mx-auto w-full py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="space-y-4">
            <span className="text-xs uppercase font-semibold text-gold-accent dark:text-gold-light tracking-widest block">
              Neuroscience & Psychology
            </span>
            <h2 className="text-3.5xl font-serif font-bold text-brand-navy dark:text-bg-beige leading-tight">
              Clinical Insights & Somatic Essays
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              Understand the biological and psychological mechanism of cognitive distortions, somatic trauma holding, and relational co-regulation.
            </p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="flex gap-2 items-center text-xs uppercase tracking-wider font-semibold whitespace-nowrap">
              Visit Full Blog <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        {/* Blog grid (3 articles) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {blogPosts.slice(0, 3).map((post) => (
            <motion.div key={post.slug} variants={fadeInVariants}>
              <Card className="h-full flex flex-col justify-between">
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-teal-safe bg-teal-safe/10 px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground flex gap-1.5 items-center">
                      <Clock className="w-3.5 h-3.5" /> {post.readingTime}
                    </span>
                  </div>
                  <CardTitle className="text-xl line-clamp-2 hover:text-gold-accent dark:hover:text-gold-light transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3 mt-3">{post.excerpt}</CardDescription>
                </CardHeader>
                
                <CardFooter className="flex justify-between items-center bg-brand-navy/[0.01] dark:bg-brand-gold/[0.01] pt-6">
                  <span className="text-xs text-muted-foreground font-semibold">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="flex gap-1.5 items-center text-xs uppercase tracking-wider font-semibold p-0 hover:translate-x-1 transition-all duration-300">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ======================================= */}
      {/* 7. FREQUENTLY ASKED QUESTIONS            */}
      {/* ======================================= */}
      <section className="px-6 sm:px-8 max-w-4xl mx-auto w-full py-12 text-center">
        <div className="space-y-4 mb-16">
          <span className="text-xs uppercase font-semibold text-gold-accent dark:text-gold-light tracking-widest block">
            Therapy Process Clearings
          </span>
          <h2 className="text-3.5xl sm:text-4xl font-serif font-bold text-brand-navy dark:text-bg-beige leading-tight">
            Frequently Answered Questions
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Clear pathways regarding scheduling, out-of-network insurance billing, intake disclosures, and session timelines.
          </p>
        </div>

        {/* Custom Accordion */}
        <div className="text-left bg-white/30 dark:bg-[#101726]/30 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-brand-navy/5 dark:border-brand-gold/10">
          <Accordion items={faqs.slice(0, 5)} />
        </div>
      </section>

      {/* ======================================= */}
      {/* 8. CONTACT & HOURS SECTION              */}
      {/* ======================================= */}
      <section id="contact" className="px-6 sm:px-8 max-w-7xl mx-auto w-full py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16"
        >
          {/* Clinic Hours & Details Left */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs uppercase font-semibold text-gold-accent dark:text-gold-light tracking-widest block">
                Office Coordinates
              </span>
              <h2 className="text-3.5xl font-serif font-bold text-brand-navy dark:text-bg-beige leading-tight">
                Get In Touch Securely
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                If you are ready to establish therapeutic support, please complete the secure clinical consultation request or contact our Los Angeles office directly.
              </p>
            </div>

            {/* Quick Hours grid */}
            <div className="bg-white/40 dark:bg-brand-navy-light/40 rounded-2xl p-6 border border-brand-navy/5 dark:border-brand-gold/10 space-y-4">
              <h4 className="font-serif text-base font-bold text-brand-navy dark:text-bg-beige flex gap-2 items-center">
                <Clock className="w-5 h-5 text-gold-accent dark:text-gold-light" /> Clinic Business Hours
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between border-b border-brand-navy/5 dark:border-brand-gold/5 pb-2">
                  <span>Monday - Thursday</span>
                  <span className="font-semibold text-brand-navy dark:text-bg-beige">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-brand-navy/5 dark:border-brand-gold/5 pb-2">
                  <span>Friday</span>
                  <span className="font-semibold text-brand-navy dark:text-bg-beige">9:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span>Saturday - Sunday</span>
                  <span className="text-rose-500 font-semibold uppercase tracking-widest text-[10px] mt-0.5">Closed (Urgent On-Call Only)</span>
                </li>
              </ul>
            </div>

            {/* Quick contact methods */}
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-teal-safe/10 text-teal-safe flex items-center justify-center shrink-0 border border-teal-safe/15">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-navy dark:text-bg-beige text-base">Office Suite</h4>
                  <p className="mt-0.5">120 Oakwood Blvd, Suite 400, Los Angeles, CA 90025</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-teal-safe/10 text-teal-safe flex items-center justify-center shrink-0 border border-teal-safe/15">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-navy dark:text-bg-beige text-base">Confidential Line</h4>
                  <p className="mt-0.5">(310) 555-0142</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-teal-safe/10 text-teal-safe flex items-center justify-center shrink-0 border border-teal-safe/15">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-navy dark:text-bg-beige text-base">Secure Clinical Mail</h4>
                  <p className="mt-0.5">evelyn@auratherapyclinic.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Secure Intake Form Right */}
          <div className="lg:col-span-7 bg-white/40 dark:bg-[#101726]/40 backdrop-blur-md rounded-[32px] border border-brand-navy/10 dark:border-brand-gold/10 p-8 sm:p-10 shadow-lg relative">
            
            {/* Form Title */}
            <h3 className="text-xl font-serif font-bold text-brand-navy dark:text-bg-beige mb-2 flex gap-2 items-center">
              <MessageSquare className="w-5 h-5 text-gold-accent dark:text-gold-light" /> Confidential Intake Request
            </h3>
            <p className="text-xs text-muted-foreground mb-8">
              This form is secure and HIPAA encrypted. Please do not share highly detailed somatic medical history.
            </p>

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase font-semibold text-brand-navy/70 dark:text-bg-beige/70 tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    required
                    placeholder="Jane Doe..."
                    className="w-full text-sm py-3 px-4 rounded-xl border border-brand-navy/10 bg-white/60 dark:border-brand-gold/15 dark:bg-brand-navy-light focus:outline-none focus:border-teal-safe transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-semibold text-brand-navy/70 dark:text-bg-beige/70 tracking-wider">
                    Secure Email
                  </label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    required
                    placeholder="jane@secure.com..."
                    className="w-full text-sm py-3 px-4 rounded-xl border border-brand-navy/10 bg-white/60 dark:border-brand-gold/15 dark:bg-brand-navy-light focus:outline-none focus:border-teal-safe transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase font-semibold text-brand-navy/70 dark:text-bg-beige/70 tracking-wider">
                  How can we support your wellness today?
                </label>
                <textarea
                  value={contactMsg}
                  onChange={(e) => setContactMsg(e.target.value)}
                  required
                  rows={4}
                  placeholder="Tell us what you are looking for (e.g. Anxiety therapy, Couples counseling, EMDR)..."
                  className="w-full text-sm py-3 px-4 rounded-xl border border-brand-navy/10 bg-white/60 dark:border-brand-gold/15 dark:bg-brand-navy-light focus:outline-none focus:border-teal-safe transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                disabled={isSubmitting}
                className="w-full py-4 text-xs font-semibold uppercase tracking-widest font-serif flex gap-2 items-center justify-center"
              >
                {isSubmitting ? "Queueing Secure Intake..." : "Submit Secure Intake Request"}
              </Button>
            </form>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
