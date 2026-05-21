"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  HeartPulse,
  ShieldAlert,
  Users,
  Home,
  Sparkles,
  Smile,
  Video,
  CheckCircle,
  Calendar,
  DollarSign,
  Clock,
  Compass,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { services } from "@/data/services";

const iconMap: Record<string, React.ComponentType<any>> = {
  Brain: Brain,
  HeartPulse: HeartPulse,
  ShieldAlert: ShieldAlert,
  Users: Users,
  Home: Home,
  Sparkles: Sparkles,
  Smile: Smile,
  Video: Video
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<"all" | "individual" | "relational" | "specialty">("all");

  const filteredServices = services.filter((s) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "individual") {
      return ["anxiety", "depression", "trauma", "stress", "online"].includes(s.id);
    }
    if (activeCategory === "relational") {
      return ["relationships", "family"].includes(s.id);
    }
    if (activeCategory === "specialty") {
      return ["trauma", "teen", "online"].includes(s.id);
    }
    return true;
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 space-y-24 relative overflow-hidden">
      
      {/* Background Calm Orbs */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-teal-safe/5 rounded-full glow-orb -z-10" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gold-accent/5 rounded-full glow-orb -z-10" />

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
          Therapeutic Catalog
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-navy dark:text-bg-beige leading-tight">
          Specialty Psychological Services & Modalities
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Dr. Bennett integrates highly researched, evidence-based systems (CBT, EMDR, ACT, EFT couples repairs) to restore nervous system sovereignty.
        </p>
      </motion.div>

      {/* ======================================= */}
      {/* DYNAMIC CATEGORY FILTERS                */}
      {/* ======================================= */}
      <div className="flex flex-wrap gap-3 justify-center items-center">
        {[
          { label: "All Specialty Programs", category: "all" },
          { label: "Individual Psychotherapy", category: "individual" },
          { label: "Relational & Couples Support", category: "relational" },
          { label: "Advanced Somatic/Specialties", category: "specialty" }
        ].map((tab) => {
          const isActive = activeCategory === tab.category;
          return (
            <Button
              key={tab.category}
              variant={isActive ? "primary" : "secondary"}
              onClick={() => setActiveCategory(tab.category as any)}
              className="text-xs uppercase tracking-wider font-semibold px-6 py-2.5"
            >
              {tab.label}
            </Button>
          );
        })}
      </div>

      {/* ======================================= */}
      {/* DETAILED SERVICES LIST                  */}
      {/* ======================================= */}
      <motion.div
        layout
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
      >
        {filteredServices.map((service) => {
          const Icon = iconMap[service.icon] || Brain;
          return (
            <motion.div
              layout
              key={service.id}
              variants={fadeInVariants}
              id={service.id}
              className="scroll-mt-32"
            >
              <Card className="h-full flex flex-col justify-between p-2">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-safe/10 dark:bg-brand-gold/10 border border-teal-safe/15 dark:border-brand-gold/25 flex items-center justify-center text-teal-safe dark:text-brand-gold shrink-0">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 justify-end">
                      {service.methodologies.slice(0, 2).map((m, i) => (
                        <span key={i} className="text-[9px] uppercase font-bold tracking-widest text-gold-accent dark:text-gold-light bg-gold-accent/10 dark:bg-gold-light/10 px-2 py-0.5 rounded">
                          {m.split(" ")[0]} {/* abbreviation or first word */}
                        </span>
                      ))}
                    </div>
                  </div>

                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm mt-3 text-muted-foreground leading-relaxed">
                    {service.longDesc}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Scope lists */}
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase font-bold text-brand-navy dark:text-bg-beige tracking-wider">
                      What is Included in Session scope:
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex gap-2.5 items-center">
                          <CheckCircle className="w-4 h-4 text-teal-safe shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing details */}
                  <div className="flex items-center gap-6 p-4 rounded-2xl bg-brand-navy/5 dark:bg-brand-gold/5 border border-brand-navy/5 dark:border-brand-gold/5 text-sm">
                    <div className="flex items-center gap-1.5 text-brand-navy dark:text-bg-beige">
                      <DollarSign className="w-4 h-4 text-gold-accent" />
                      <span>Rate: <strong>{service.pricing}</strong></span>
                    </div>
                    <div className="h-4 w-0.5 bg-brand-navy/10 dark:bg-brand-gold/15" />
                    <div className="flex items-center gap-1.5 text-brand-navy dark:text-bg-beige">
                      <Clock className="w-4 h-4 text-gold-accent" />
                      <span>Duration: <strong>{service.duration}</strong></span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between items-center bg-brand-navy/[0.01] dark:bg-brand-gold/[0.01] pt-6">
                  <div className="text-xs text-muted-foreground flex gap-1 items-center">
                    <ShieldCheck className="w-4 h-4 text-teal-safe" /> HIPAA Video Encrypted
                  </div>
                  <Link href={`/booking?service=${service.id}`} className="shrink-0">
                    <Button variant="gold" size="sm" className="flex gap-2 items-center text-xs uppercase tracking-wider font-semibold">
                      <Calendar className="w-4 h-4" /> Book Session
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* ======================================= */}
      {/* REIMBURSEMENT DISCLOSURE BANNER         */}
      {/* ======================================= */}
      <section className="bg-white/40 dark:bg-brand-navy-light/40 border border-brand-navy/10 dark:border-brand-gold/10 rounded-[32px] p-8 sm:p-10 text-left space-y-6 max-w-4xl mx-auto">
        <h3 className="font-serif text-2xl font-bold text-brand-navy dark:text-bg-beige flex gap-2 items-center">
          <Compass className="w-6 h-6 text-teal-safe" /> Out-of-Network Health Insurance Reimbursements
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          I operate as an out-of-network provider. This ensures absolute diagnostic confidentiality, full clinical freedom, and protects you from standard health insurance audits. Many PPO health insurance policies provide substantial out-of-network benefits (often covering 50% to 80% of standard psychotherapy session rates).
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          At the conclusion of each month, I will output a secure, fully-coded medical **Superbill** that you can upload directly to your insurance company. I recommend calling your insurance company prior to scheduling to verify your "Out-of-Network Outpatient Psychotherapy" deductible and reimbursement percentages.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <Link href="/contact#faq">
            <Button variant="outline" size="sm" className="text-xs uppercase tracking-wider font-semibold">
              Read Insurance FAQs
            </Button>
          </Link>
          <Link href="/booking">
            <Button variant="teal" size="sm" className="text-xs uppercase tracking-wider font-semibold px-8">
              Schedule Free 15m Call
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
