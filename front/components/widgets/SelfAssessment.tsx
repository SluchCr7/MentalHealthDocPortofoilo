"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ClipboardList, ArrowRight, ArrowLeft, RefreshCw, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface Question {
  id: number;
  text: string;
  options: { label: string; value: number }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Over the last two weeks, how frequently have you felt nervous, anxious, or on edge?",
    options: [
      { label: "Not at all", value: 0 },
      { label: "Several days of the week", value: 1 },
      { label: "More than half the days", value: 2 },
      { label: "Nearly every day", value: 3 }
    ]
  },
  {
    id: 2,
    text: "Have you found it challenging to control or stop your worrying?",
    options: [
      { label: "Not at all", value: 0 },
      { label: "Several days of the week", value: 1 },
      { label: "More than half the days", value: 2 },
      { label: "Nearly every day", value: 3 }
    ]
  },
  {
    id: 3,
    text: "How often have you had trouble relaxing, winding down, or falling asleep?",
    options: [
      { label: "Not at all", value: 0 },
      { label: "Several days of the week", value: 1 },
      { label: "More than half the days", value: 2 },
      { label: "Nearly every day", value: 3 }
    ]
  },
  {
    id: 4,
    text: "How frequently have you felt down, depressed, unmotivated, or hopeless?",
    options: [
      { label: "Not at all", value: 0 },
      { label: "Several days of the week", value: 1 },
      { label: "More than half the days", value: 2 },
      { label: "Nearly every day", value: 3 }
    ]
  },
  {
    id: 5,
    text: "How would you describe your overall mental and physical energy level recently?",
    options: [
      { label: "Vitalized and resilient", value: 0 },
      { label: "Slightly fatigued, but functioning", value: 1 },
      { label: "Frequently drained and overwhelmed", value: 2 },
      { label: "Completely exhausted or burnt out", value: 3 }
    ]
  }
];

export default function SelfAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const activeQuestion = QUESTIONS[currentStep];
  const progressPercent = ((currentStep) / QUESTIONS.length) * 100;

  const handleSelectOption = (questionId: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (answers[activeQuestion.id] === undefined) return;
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Evaluate scores
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);

  const getEvaluation = () => {
    if (totalScore <= 3) {
      return {
        title: "Calm & Centered",
        badgeColor: "bg-teal-safe/10 text-teal-safe border-teal-safe/25",
        summary: "Your responses suggest a highly stable, regulated nervous system with minimal stress or anxiety levels. This is an excellent baseline.",
        recommendation: "Focus on preventative self-care, maintaining daily routines, and exploring light breathing exercises to anchor your resilience.",
        service: "Stress & Burnout Consultation",
        link: "/services#stress-management"
      };
    } else if (totalScore <= 8) {
      return {
        title: "Moderate Tension & Fatigue",
        badgeColor: "bg-gold-accent/10 text-gold-accent border-gold-accent/25",
        summary: "Your responses indicate moderate emotional exhaustion, recurring worry, or biological tension. You are likely holding significant everyday pressures.",
        recommendation: "We recommend learning targeted Cognitive Behavioral (CBT) skills to challenge worrying habits, along with establishing clear boundaries to protect your energy.",
        service: "Anxiety Therapy & Worry Management",
        link: "/services#anxiety-therapy"
      };
    } else {
      return {
        title: "Severe Overwhelm & Burnout",
        badgeColor: "bg-rose-500/10 text-rose-500 border-rose-500/25",
        summary: "Your responses show heavy nervous system overload, profound exhaustion, or persistent low mood. You are likely feeling emotionally drained or stuck.",
        recommendation: "Your nervous system requires deep, compassionate clinical support to process stress. Working 1-on-1 with a clinician using evidence-based trauma-informed techniques is highly recommended.",
        service: "Trauma Recovery & EMDR or Depression Counseling",
        link: "/services"
      };
    }
  };

  const evaluation = getEvaluation();

  return (
    <div className="w-full max-w-2xl mx-auto rounded-3xl p-6 sm:p-8 bg-white/40 dark:bg-[#101726]/40 backdrop-blur-md border border-brand-navy/10 dark:border-brand-gold/10 relative overflow-hidden shadow-xl">
      
      {/* Background Calm Orb */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-teal-safe/5 glow-orb" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-gold-accent/5 glow-orb" />

      <AnimatePresence mode="wait">
        {!isCompleted ? (
          <motion.div
            key="quiz-step"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10"
          >
            {/* Header progress info */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-gold-accent dark:text-gold-light flex gap-2 items-center">
                <ClipboardList className="w-4 h-4" /> Question {currentStep + 1} of {QUESTIONS.length}
              </span>
              <span className="text-sm font-semibold text-brand-navy/60 dark:text-bg-beige/60">
                {Math.round((currentStep / QUESTIONS.length) * 100)}% Complete
              </span>
            </div>

            {/* Visual progress bar */}
            <div className="h-1.5 w-full bg-brand-navy/5 dark:bg-brand-gold/10 rounded-full mb-8 overflow-hidden">
              <motion.div
                layoutId="progressBar"
                className="h-full bg-teal-safe rounded-full"
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Question Text */}
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-navy dark:text-bg-beige mb-6 leading-relaxed">
              {activeQuestion.text}
            </h3>

            {/* Options list */}
            <div className="space-y-3 mb-8">
              {activeQuestion.options.map((opt) => {
                const isSelected = answers[activeQuestion.id] === opt.value;
                return (
                  <button
                    key={opt.label}
                    onClick={() => handleSelectOption(activeQuestion.id, opt.value)}
                    className={`w-full flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-teal-safe/10 border-teal-safe dark:bg-[#1C4D4D] dark:border-teal-safe/80 shadow-md scale-[1.01]"
                        : "bg-white/40 border-brand-navy/10 hover:border-brand-navy/35 hover:bg-brand-navy/[0.01] dark:bg-brand-navy-light/40 dark:border-brand-gold/15 dark:hover:border-brand-gold/30"
                    }`}
                  >
                    <span className={`text-base ${isSelected ? "font-semibold text-brand-navy dark:text-bg-beige" : "text-muted-foreground"}`}>
                      {opt.label}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-teal-safe border-transparent text-white"
                          : "border-brand-navy/20 dark:border-brand-gold/20"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Action buttons */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="ghost"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="flex gap-2 items-center text-sm"
              >
                <ArrowLeft className="w-4 h-4" /> Previous
              </Button>
              <Button
                variant="primary"
                onClick={handleNext}
                disabled={answers[activeQuestion.id] === undefined}
                className="flex gap-2 items-center px-6"
              >
                {currentStep === QUESTIONS.length - 1 ? "Submit Assessment" : "Next Question"}
                {currentStep !== QUESTIONS.length - 1 && <ArrowRight className="w-4 h-4" />}
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="quiz-results"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center relative z-10 py-4"
          >
            {/* Success icon banner */}
            <div className="inline-flex p-4 bg-teal-safe/10 text-teal-safe rounded-full mb-6">
              <ClipboardList className="w-10 h-10" />
            </div>

            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold-accent dark:text-gold-light mb-1">
              Assessment Results
            </h3>
            <h2 className="text-3xl font-serif font-bold text-brand-navy dark:text-bg-beige mb-4">
              Your Resiliency Blueprint
            </h2>

            {/* Point badge */}
            <div className={`inline-block px-4 py-1.5 rounded-full border text-sm font-semibold mb-6 ${evaluation.badgeColor}`}>
              Mental State: {evaluation.title} ({totalScore} / 15)
            </div>

            {/* Clinical Evaluation detail */}
            <div className="text-left bg-white/60 dark:bg-brand-navy-light/40 rounded-2xl p-6 sm:p-8 border border-brand-navy/5 dark:border-brand-gold/10 mb-8 space-y-4">
              <div>
                <h4 className="text-sm font-bold text-brand-navy dark:text-bg-beige uppercase tracking-wider mb-1">
                  Clinical Overview
                </h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {evaluation.summary}
                </p>
              </div>
              <hr className="border-brand-navy/5 dark:border-brand-gold/10" />
              <div>
                <h4 className="text-sm font-bold text-brand-navy dark:text-bg-beige uppercase tracking-wider mb-1">
                  Action Plan Recommendation
                </h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {evaluation.recommendation}
                </p>
              </div>
            </div>

            {/* Suggested Pathway service */}
            <div className="p-6 rounded-2xl bg-teal-safe/5 border border-teal-safe/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-left mb-8">
              <div>
                <span className="text-xs uppercase font-semibold text-teal-safe tracking-widest">Recommended Modality</span>
                <h4 className="text-lg font-serif font-bold text-brand-navy dark:text-bg-beige mt-0.5">
                  {evaluation.service}
                </h4>
              </div>
              <Link href={evaluation.link} className="w-full sm:w-auto">
                <Button variant="teal" size="sm" className="w-full text-xs font-semibold uppercase tracking-wider">
                  Learn About Modality
                </Button>
              </Link>
            </div>

            {/* Command links */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="outline"
                onClick={handleReset}
                className="w-full sm:w-auto flex gap-2 items-center text-sm"
              >
                <RefreshCw className="w-4 h-4" /> Retake Screener
              </Button>
              <Link href="/booking" className="w-full sm:w-auto">
                <Button
                  variant="gold"
                  className="w-full sm:w-auto flex gap-2 items-center text-sm font-semibold uppercase tracking-wider px-8"
                >
                  <PhoneCall className="w-4 h-4" /> Request Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
