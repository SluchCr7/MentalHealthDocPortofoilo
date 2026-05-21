"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Calendar, Award, CheckCircle, GraduationCap, FileText, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";

export default function About() {
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
      
      {/* Background Soft Orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-safe/5 rounded-full glow-orb -z-10" />
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
          Meet Your Clinician
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-navy dark:text-bg-beige leading-tight">
          Dr. Evelyn Bennett, Ph.D.
        </h1>
        <p className="text-sm uppercase tracking-widest text-teal-safe dark:text-brand-gold font-semibold">
          Licensed Clinical Psychologist & Somatic Therapist &bull; CA Lic #92410
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Integrating scientific clinical rigour with somatic attachment safety to guide you out of chronic worry and trauma back into vital mental peace.
        </p>
      </motion.div>

      {/* ======================================= */}
      {/* BIOGRAPHY SECTION                       */}
      {/* ======================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Visual frame Left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="lg:col-span-5 relative aspect-[4/5] rounded-[40px] bg-gradient-to-tr from-brand-navy-light to-brand-navy dark:from-brand-navy-light dark:to-[#1a253d] border border-brand-gold/15 overflow-hidden shadow-xl"
        >
          {/* Calm graphic overlays */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-accent/15 blur-xl" />
          <div className="absolute bottom-0 left-0 w-52 h-52 bg-teal-safe/20 blur-2xl" />
          
          <div className="absolute inset-8 rounded-[30px] border border-brand-gold/15 flex flex-col justify-end p-8 text-white bg-black/10 backdrop-blur-xs">
            <div className="space-y-2">
              <div className="inline-flex p-2.5 bg-white/10 rounded-full border border-white/10">
                <GraduationCap className="w-5 h-5 text-brand-gold" />
              </div>
              <h3 className="font-serif text-lg font-bold">Academic Core</h3>
              <p className="text-xs text-brand-gold font-semibold uppercase tracking-wider">UCLA Ph.D. &bull; Stanford Fellowship</p>
              <p className="text-[10px] text-white/60 leading-relaxed font-sans mt-2 pt-2 border-t border-white/10">
                Specialized in autonomic nervous system regulation, complex post-traumatic restoration, and interpersonal couples attunement.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Biography Content Right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="lg:col-span-7 space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-navy dark:text-bg-beige">
            My Clinical Philosophy & Journey
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            I began my academic and clinical career at UCLA, researching the bi-directional communication pathways between the brain and the somatic nervous system. My research continually confirmed that chronic anxiety, trauma-bracing, and relational panic are not faults in human intellect. Rather, they are highly refined survival defenses developed by our physiology in response to stress.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            During my subsequent post-doctoral clinical fellowship at Stanford University Hospital, I worked extensively with survivors of acute trauma, complex stress, and high-functioning burnout. There, I realized that while Cognitive Behavioral Therapy (CBT) provides excellent cognitive reframing tools, true emotional resolution requires involving the body.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            In my current private clinical practice in Los Angeles, I specialize in combining top-down cognitive reframing with bottom-up somatic tools (EMDR and Polyvagal exercises). This ensures that we do not just 'understand' your stress, but rather actively soothe the autonomic nervous system to achieve physiological peace and attachment safety.
          </p>
        </motion.div>
      </section>

      {/* ======================================= */}
      {/* CORE GUIDING CLINICAL VALUES            */}
      {/* ======================================= */}
      <section className="text-center space-y-16">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase font-semibold text-gold-accent dark:text-gold-light tracking-widest block">
            Guiding Principles
          </span>
          <h2 className="text-3xl font-serif font-bold text-brand-navy dark:text-bg-beige">
            Core Values of Our Clinical Container
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            These professional values guide every therapeutic session, diagnostic mapping, and client co-regulation interaction.
          </p>
        </div>

        {/* Grid cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"
        >
          {[
            {
              icon: Shield,
              title: "Confidentiality & Emotional Safety",
              desc: "Providing a strictly secure, non-judgmental container adhering to advanced HIPAA and state licensure privacy standards."
            },
            {
              icon: Heart,
              title: "Relational Attunement",
              desc: "Tuning in deeply to your unique pacing and physiological boundaries. We go as fast or slow as your nervous system permits."
            },
            {
              icon: Award,
              title: "Clinical Excellence",
              desc: "Employing only rigorous, evidence-based practices (CBT, EMDR, Gottman couples work) with confirmed clinical efficacy."
            }
          ].map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div key={idx} variants={fadeInVariants}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-2xl bg-teal-safe/10 dark:bg-brand-gold/10 border border-teal-safe/15 flex items-center justify-center text-teal-safe mb-6">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <CardTitle>{val.title}</CardTitle>
                    <CardDescription>{val.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ======================================= */}
      {/* DETAILED EDUCATION & RESIDENCY PATHWAY */}
      {/* ======================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Education column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="space-y-8 text-left"
        >
          <h3 className="text-2xl font-serif font-bold text-brand-navy dark:text-bg-beige border-b border-brand-navy/5 dark:border-brand-gold/15 pb-4 flex gap-2 items-center">
            <GraduationCap className="w-6 h-6 text-gold-accent" /> Education & Training
          </h3>

          <div className="space-y-6">
            {[
              { title: "Stanford University Medical Center", subtitle: "Clinical Fellowship in Trauma & Stress Regulation (2014 - 2015)", detail: "Advanced specialization in EMDR modalities and somatic experiencing for complex shock traumas." },
              { title: "University of California, Los Angeles (UCLA)", subtitle: "Doctor of Philosophy (Ph.D.) in Clinical Psychology (2009 - 2014)", detail: "Graduate researcher in biological psychology. Dissertation on Autonomic Heart-Rate Variability in Chronic Worry." },
              { title: "University of California, Berkeley", subtitle: "Bachelor of Arts (B.A.) in Psychology & Cognitive Science (2005 - 2009)", detail: "Graduated Magna Cum Laude. Focused on neurological bases of cognitive distortions." }
            ].map((edu, idx) => (
              <div key={idx} className="space-y-1.5 p-5 bg-white/40 dark:bg-brand-navy-light/40 border border-brand-navy/5 dark:border-brand-gold/10 rounded-2xl">
                <h4 className="text-lg font-bold text-brand-navy dark:text-bg-beige">{edu.title}</h4>
                <h5 className="text-xs uppercase font-semibold text-gold-accent dark:text-gold-light">{edu.subtitle}</h5>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{edu.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Publications column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="space-y-8 text-left"
        >
          <h3 className="text-2xl font-serif font-bold text-brand-navy dark:text-bg-beige border-b border-brand-navy/5 dark:border-brand-gold/15 pb-4 flex gap-2 items-center">
            <FileText className="w-6 h-6 text-gold-accent" /> Academic Publications
          </h3>

          <div className="space-y-6">
            {[
              { title: "Autonomic Dysregulation in Chronic Worry States", journal: "Journal of Psychophysiology & Cognitive Stress (2018)", detail: "A clinical review of autonomic arousal mapping in Generalized Anxiety Disorder, confirming the importance of bottom-up heart rate coherence." },
              { title: "Somatic Experiencing and EMDR: Combined Modalities", journal: "Trauma Recovery & Neuro-Linguistic Studies (2016)", detail: "Investigating the acceleration of traumatic reprocessing when incorporating polyvagal sensory grounding during traditional EMDR targets." },
              { title: "Attachment Trauma Repair in Couples Counseling", journal: "Contemporary Relational Psychotherapy (2015)", detail: "A case-controlled study on Emotionally Focused Couples Therapy (EFT) utilizing specific Gottman communication repairs to restore safety." }
            ].map((pub, idx) => (
              <div key={idx} className="space-y-1.5 p-5 bg-white/40 dark:bg-brand-navy-light/40 border border-brand-navy/5 dark:border-brand-gold/10 rounded-2xl">
                <h4 className="text-lg font-bold text-brand-navy dark:text-bg-beige">{pub.title}</h4>
                <h5 className="text-xs uppercase font-semibold text-gold-accent dark:text-gold-light">{pub.journal}</h5>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{pub.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ======================================= */}
      {/* FINAL CALL TO ACTION                     */}
      {/* ======================================= */}
      <section className="text-center py-12 border-t border-brand-navy/10 dark:border-brand-gold/10">
        <div className="max-w-2xl mx-auto space-y-8">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-navy dark:text-bg-beige leading-tight">
            Ready to Begin Re-patterning Stress?
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            I offer a complimentary 15-minute secure video consultation to discuss your clinical needs, historical timelines, and ensure our therapy is an attunement match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button variant="gold" size="lg" className="w-full sm:w-auto flex gap-2 items-center text-sm uppercase tracking-wider font-semibold">
                <Calendar className="w-5 h-5" /> Secure Consultation Booking
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full sm:w-auto flex gap-2 items-center text-sm uppercase tracking-wider">
                Visit Contact Info
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
