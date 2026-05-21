"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckSquare, Square, Award, Sparkles, Smile, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Task {
  id: string;
  name: string;
  category: string;
  description: string;
  points: number;
}

const SELF_CARE_TASKS: Task[] = [
  {
    id: "task-1",
    name: "Somatic Breathing Anchor",
    category: "Regulation",
    description: "Practice box breathing or grounding for 5 full minutes.",
    points: 25
  },
  {
    id: "task-2",
    name: "Gratitude Scribing",
    category: "Cognitive",
    description: "Write down three specific things you are grateful for today.",
    points: 25
  },
  {
    id: "task-3",
    name: "Nature Anchoring Walk",
    category: "Physiology",
    description: "Take a 15-minute screen-free walk outdoors to calm the senses.",
    points: 25
  },
  {
    id: "task-4",
    name: "Digital Sunset Hour",
    category: "Boundaries",
    description: "Silence all professional screens 60 minutes before going to bed.",
    points: 25
  }
];

export default function RoutinePlanner() {
  const [completedIds, setCompletedIds] = useState<string[]>([]);

  const handleToggle = (id: string) => {
    setCompletedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleReset = () => {
    setCompletedIds([]);
  };

  // Compute daily score
  const totalClarityScore = completedIds.reduce((sum, id) => {
    const task = SELF_CARE_TASKS.find((t) => t.id === id);
    return sum + (task ? task.points : 0);
  }, 0);

  const getEncouragement = () => {
    if (totalClarityScore === 0) return "Begin with one small step for yourself today.";
    if (totalClarityScore <= 25) return "Wonderful start. You are actively prioritizing your nervous system.";
    if (totalClarityScore <= 75) return "Fabulous progress! Feel the grounding expansion in your posture.";
    return "Complete Harmony! You have fully anchored your body and mind today.";
  };

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl p-6 sm:p-8 bg-white/40 dark:bg-[#101726]/40 backdrop-blur-md border border-brand-navy/10 dark:border-brand-gold/10 relative overflow-hidden shadow-xl">
      {/* Background Soft Orbs */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold-accent/5 glow-orb" />
      
      {/* Widget Header */}
      <div className="flex justify-between items-start mb-6 border-b border-brand-navy/5 dark:border-brand-gold/10 pb-4">
        <div>
          <span className="text-xs uppercase tracking-widest font-semibold text-gold-accent dark:text-gold-light flex gap-2 items-center mb-1">
            <Sparkles className="w-4 h-4" /> Self-Care Anchors
          </span>
          <h3 className="text-xl font-serif font-bold text-brand-navy dark:text-bg-beige">
            Daily Clarity Tracker
          </h3>
        </div>
        {completedIds.length > 0 && (
          <button
            onClick={handleReset}
            className="text-xs flex gap-1 items-center text-muted-foreground hover:text-brand-navy dark:hover:text-bg-beige transition-colors duration-300 font-medium cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Clear
          </button>
        )}
      </div>

      {/* Mind Clarity Progress Ring / Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-brand-navy/80 dark:text-bg-beige/80 flex gap-2 items-center">
            {totalClarityScore === 100 ? (
              <Award className="w-4.5 h-4.5 text-gold-accent dark:text-gold-light" />
            ) : (
              <Smile className="w-4.5 h-4.5 text-teal-safe" />
            )}
            Clarity Progress
          </span>
          <span className="text-lg font-bold text-teal-safe">{totalClarityScore}%</span>
        </div>

        {/* Visual loading bar */}
        <div className="h-3 w-full bg-brand-navy/5 dark:bg-brand-gold/15 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-teal-safe to-gold-accent dark:to-gold-light rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${totalClarityScore}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        {/* Encouraging caption */}
        <p className="text-sm text-muted-foreground mt-3 italic leading-relaxed text-center">
          "{getEncouragement()}"
        </p>
      </div>

      {/* Checklist Grid */}
      <div className="space-y-3">
        {SELF_CARE_TASKS.map((task) => {
          const isDone = completedIds.includes(task.id);
          return (
            <div
              key={task.id}
              onClick={() => handleToggle(task.id)}
              className={`flex items-start gap-4 p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                isDone
                  ? "bg-teal-safe/[0.03] border-teal-safe/30 dark:bg-[#1C4D4D]/5 dark:border-teal-safe/40 shadow-sm"
                  : "bg-white/30 border-brand-navy/5 hover:border-brand-navy/20 dark:bg-brand-navy-light/20 dark:border-brand-gold/10 dark:hover:border-brand-gold/20"
              }`}
            >
              {/* Checkbox Icon */}
              <button className="text-teal-safe mt-0.5 focus:outline-none cursor-pointer">
                {isDone ? (
                  <CheckSquare className="w-5 h-5 fill-teal-safe/10" />
                ) : (
                  <Square className="w-5 h-5 text-muted-foreground/40" />
                )}
              </button>

              {/* Text descriptions */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className={`text-base font-semibold transition-colors duration-300 ${isDone ? "text-brand-navy dark:text-bg-beige line-through opacity-60" : "text-brand-navy dark:text-bg-beige"}`}>
                    {task.name}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-accent dark:text-gold-light bg-gold-accent/10 dark:bg-gold-light/10 px-2 py-0.5 rounded">
                    {task.category}
                  </span>
                </div>
                <p className={`text-sm text-muted-foreground mt-1 leading-relaxed ${isDone ? "opacity-40" : ""}`}>
                  {task.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
