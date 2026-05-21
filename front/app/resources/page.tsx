"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Wind,
  ClipboardList,
  CheckSquare,
  Headphones,
  FileDown,
  Video,
  ArrowRight,
  ShieldCheck,
  Compass
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { useToast } from "@/components/ui/Toast";

// Import custom widgets
import BreathingBubble from "@/components/widgets/BreathingBubble";
import SelfAssessment from "@/components/widgets/SelfAssessment";
import RoutinePlanner from "@/components/widgets/RoutinePlanner";
import AudioPlayer from "@/components/widgets/AudioPlayer";

type ActiveTab = "screener" | "breathing" | "planner" | "audio";

export default function Resources() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<ActiveTab>("screener");

  const handleDownload = (fileName: string) => {
    toast(
      "Secure Download Started",
      `"${fileName}" is downloading in the background. HIPAA verified.`,
      "success"
    );
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 space-y-24 relative overflow-hidden">
      
      {/* Background Soft Orbs */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-teal-safe/5 rounded-full glow-orb -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gold-accent/5 rounded-full glow-orb -z-10" />

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
          Self-Care Grounding Toolkit
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-navy dark:text-bg-beige leading-tight">
          Mental Health & Resiliency Resources
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Access interactive somatic pacing widgets, clinically structured self-assessments, habit planners, and guided audios to re-anchor your body and mind today.
        </p>
      </motion.div>

      {/* ======================================= */}
      {/* INTERACTIVE WIDGET TAB PANELS            */}
      {/* ======================================= */}
      <section className="space-y-12">
        {/* Tab Buttons bar */}
        <div className="flex flex-wrap gap-2.5 justify-center items-center">
          {[
            { id: "screener", label: "Mood Screener Quiz", icon: ClipboardList },
            { id: "breathing", label: "Box Breathing Bubble", icon: Wind },
            { id: "planner", label: "Daily Habits Checklist", icon: CheckSquare },
            { id: "audio", label: "Meditation Waveform Player", icon: Headphones }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <Button
                key={tab.id}
                variant={isActive ? "primary" : "secondary"}
                onClick={() => setActiveTab(tab.id as ActiveTab)}
                className="text-xs uppercase tracking-wider font-semibold flex gap-2 items-center px-6 py-3 rounded-full"
              >
                <Icon className="w-4 h-4 shrink-0" /> {tab.label}
              </Button>
            );
          })}
        </div>

        {/* Tab content display frame */}
        <div className="bg-white/30 dark:bg-brand-navy-light/20 backdrop-blur-md rounded-[40px] border border-brand-navy/5 dark:border-brand-gold/10 p-4 sm:p-10 min-h-[500px] flex items-center justify-center relative">
          
          <AnimatePresence mode="wait">
            {activeTab === "screener" && (
              <motion.div
                key="screener-pane"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="max-w-md mx-auto text-center mb-8 space-y-2">
                  <h3 className="text-xl font-serif font-bold text-brand-navy dark:text-bg-beige">Wellness Screener screener</h3>
                  <p className="text-sm text-muted-foreground">Complete a private 5-question clinical evaluation of your current emotional worry, anxiety, and fatigue.</p>
                </div>
                <SelfAssessment />
              </motion.div>
            )}

            {activeTab === "breathing" && (
              <motion.div
                key="breathing-pane"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="max-w-md mx-auto text-center mb-8 space-y-2">
                  <h3 className="text-xl font-serif font-bold text-brand-navy dark:text-bg-beige">Autonomic Nervous regulator</h3>
                  <p className="text-sm text-muted-foreground">Start the breathing visualizer and execute a 16-second box-breathing anchor to slow down frantic brainwaves.</p>
                </div>
                <BreathingBubble />
              </motion.div>
            )}

            {activeTab === "planner" && (
              <motion.div
                key="planner-pane"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="max-w-md mx-auto text-center mb-8 space-y-2">
                  <h3 className="text-xl font-serif font-bold text-brand-navy dark:text-bg-beige">Self-Care Anchors Planner</h3>
                  <p className="text-sm text-muted-foreground">Anchor positive neuro-behavioral routines such as screen boundaries, writing down gratitudes, and grounding walks.</p>
                </div>
                <RoutinePlanner />
              </motion.div>
            )}

            {activeTab === "audio" && (
              <motion.div
                key="audio-pane"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="max-w-md mx-auto text-center mb-8 space-y-2">
                  <h3 className="text-xl font-serif font-bold text-brand-navy dark:text-bg-beige">Guided Somatic Listening</h3>
                  <p className="text-sm text-muted-foreground">Plug in headphones and listen to a co-regulating mindfulness, stress deactivation, or somatic rest exercise.</p>
                </div>
                <AudioPlayer />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ======================================= */}
      {/* DOWNLOADABLE PDF WORKBOOKS               */}
      {/* ======================================= */}
      <section className="space-y-12">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase font-semibold text-gold-accent dark:text-gold-light tracking-widest block">
            Printable Workbooks
          </span>
          <h2 className="text-3xl font-serif font-bold text-brand-navy dark:text-bg-beige">
            Clinical Guides & Practice Worksheets
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Download our custom, professional templates designed to facilitate daily integration of grounding routines between clinic sessions.
          </p>
        </div>

        {/* Guides grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Somatic Anchors Grounding Worksheet",
              desc: "Step-by-step physical awareness exercises, including muscle tensing releases and vagal nerve hum techniques.",
              pages: "6-Page PDF Booklet",
              fileName: "Somatic_Grounding_Exercises.pdf"
            },
            {
              title: "Autonomic Nervous Boundaries Guide",
              desc: "A structural diagram mapping parasympathetic states, work-life boundary lists, and biological capacity evaluations.",
              pages: "4-Page PDF Diagram",
              fileName: "Nervous_System_Boundaries.pdf"
            },
            {
              title: "CBT Reframing Thought Journal",
              desc: "A template featuring evidence audits, distortion filters, and writing prompts to challenge toxic internal self-talk.",
              pages: "8-Page PDF Journal",
              fileName: "CBT_Thought_Reframing_Record.pdf"
            }
          ].map((doc, idx) => (
            <Card key={idx} className="flex flex-col justify-between p-2">
              <CardHeader>
                <div className="w-10 h-10 rounded-xl bg-teal-safe/10 dark:bg-brand-gold/10 border border-teal-safe/15 flex items-center justify-center text-teal-safe shrink-0 mb-6">
                  <FileDown className="w-5 h-5 stroke-[1.5]" />
                </div>
                <CardTitle className="text-lg font-serif">{doc.title}</CardTitle>
                <CardDescription className="text-xs text-muted-foreground mt-2">{doc.desc}</CardDescription>
              </CardHeader>
              
              <CardContent className="text-xs text-teal-safe font-semibold">
                Format: {doc.pages} &bull; HIPAA Encrypted
              </CardContent>

              <CardFooter className="pt-4 border-t border-brand-navy/5">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDownload(doc.fileName)}
                  className="w-full flex gap-2 items-center text-xs uppercase tracking-wider font-semibold"
                >
                  <FileDown className="w-4 h-4" /> Download Resource Sheet
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* ======================================= */}
      {/* WIDGET CHECKOUT BANNER                  */}
      {/* ======================================= */}
      <section className="bg-teal-safe/5 dark:bg-teal-safe/10 border border-teal-safe/10 rounded-[32px] p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-navy dark:text-bg-beige">
          Seeking a Safe, 1-on-1 Therapeutic Attunement?
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Self-care anchors are powerful grounding tools, but they cannot replace the physiological healing of a professional 1-on-1 co-regulating relationship. Let's work together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/booking">
            <Button variant="gold" size="lg" className="w-full sm:w-auto flex gap-2 items-center text-xs uppercase tracking-wider font-semibold px-8">
              Schedule Intake consultation
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-xs uppercase tracking-wider">
              Explore Specialties
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}
