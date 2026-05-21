"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RefreshCw, Wind } from "lucide-react";
import { Button } from "@/components/ui/Button";

type BreatheState = "idle" | "inhining" | "holding_full" | "exhaling" | "holding_empty";

const CYCLE_STEPS = [
  { state: "inhining" as BreatheState, label: "Breathe In", duration: 4, instructions: "Fill your lungs slowly with air." },
  { state: "holding_full" as BreatheState, label: "Hold Breath", duration: 4, instructions: "Suspend the air in your chest with ease." },
  { state: "exhaling" as BreatheState, label: "Breathe Out", duration: 4, instructions: "Exhale fully through your mouth." },
  { state: "holding_empty" as BreatheState, label: "Hold Empty", duration: 4, instructions: "Rest with lungs completely relaxed." }
];

export default function BreathingBubble() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(4);
  const [cycleCount, setCycleCount] = useState(0);

  // Active step info
  const currentStep = CYCLE_STEPS[stepIndex];

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isPlaying) {
      timer = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            // Move to next step
            setStepIndex((prevIndex) => {
              const nextIndex = (prevIndex + 1) % 4;
              if (nextIndex === 0) {
                setCycleCount((c) => c + 1);
              }
              return nextIndex;
            });
            // Reset countdown to the next step's duration
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isPlaying]);

  const togglePlay = () => {
    if (!isPlaying) {
      setStepIndex(0);
      setSecondsRemaining(4);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setStepIndex(0);
    setSecondsRemaining(4);
    setCycleCount(0);
  };

  // Determine visual scaling depending on breathing phase
  const getScale = () => {
    if (!isPlaying) return 1.0;
    
    switch (currentStep.state) {
      case "inhining":
        // Gradually expand from 1.0 to 1.6
        return 1.6 - (secondsRemaining / 4) * 0.6;
      case "holding_full":
        return 1.6;
      case "exhaling":
        // Gradually contract from 1.6 to 1.0
        return 1.0 + (secondsRemaining / 4) * 0.6;
      case "holding_empty":
        return 1.0;
      default:
        return 1.0;
    }
  };

  const getStepColor = () => {
    if (!isPlaying) return "bg-brand-navy dark:bg-brand-gold";
    
    switch (currentStep.state) {
      case "inhining":
        return "bg-teal-safe";
      case "holding_full":
        return "bg-[#388080]";
      case "exhaling":
        return "bg-gold-accent";
      case "holding_empty":
        return "bg-brand-navy/60 dark:bg-brand-gold/60";
      default:
        return "bg-brand-navy";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 text-center">
      {/* Visual Breathing Bubble Frame */}
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center mb-8">
        
        {/* Pulsing visual halo */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              animate={{
                scale: getScale() * 1.25,
                opacity: [0.15, 0.35, 0.15]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full glow-orb bg-teal-safe/30"
            />
          )}
        </AnimatePresence>

        {/* Outer thin ring indicator */}
        <div className="absolute inset-0 rounded-full border border-brand-navy/5 dark:border-brand-gold/15" />

        {/* Central Core Breathing Bubble */}
        <motion.div
          animate={{ scale: getScale() }}
          transition={{ type: "tween", ease: "easeInOut", duration: isPlaying ? 1 : 0.4 }}
          className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full flex flex-col items-center justify-center shadow-xl text-white transition-colors duration-1000 ${getStepColor()}`}
        >
          {isPlaying ? (
            <div className="flex flex-col items-center">
              <span className="text-4xl sm:text-5xl font-serif font-semibold">
                {secondsRemaining}
              </span>
              <span className="text-xs uppercase tracking-widest mt-1 opacity-80">
                Seconds
              </span>
            </div>
          ) : (
            <Wind className="w-12 h-12 stroke-[1.5]" />
          )}
        </motion.div>
      </div>

      {/* Breathing State Labels & Guidelines */}
      <div className="h-28 mb-8 max-w-sm">
        {isPlaying ? (
          <motion.div
            key={currentStep.state}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col space-y-2"
          >
            <h3 className="text-2xl font-serif font-bold text-brand-navy dark:text-bg-beige">
              {currentStep.label}
            </h3>
            <p className="text-base text-muted-foreground">
              {currentStep.instructions}
            </p>
            {cycleCount > 0 && (
              <span className="text-xs font-semibold text-teal-safe uppercase tracking-widest mt-2 block">
                Completed cycles: {cycleCount}
              </span>
            )}
          </motion.div>
        ) : (
          <div className="flex flex-col space-y-2">
            <h3 className="text-2xl font-serif font-bold text-brand-navy dark:text-bg-beige">
              Box Breathing Guide
            </h3>
            <p className="text-base text-muted-foreground">
              A clinical deep-breathing exercise used to instantly soothe your nervous system, lower heart rate, and clear mental clutter.
            </p>
          </div>
        )}
      </div>

      {/* Control Buttons */}
      <div className="flex gap-4 items-center">
        <Button
          variant={isPlaying ? "outline" : "teal"}
          onClick={togglePlay}
          className="px-6 flex gap-2 items-center"
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4" /> Pause
            </>
          ) : (
            <>
              <Play className="w-4 h-4 fill-current" /> Start Practice
            </>
          )}
        </Button>
        {isPlaying && (
          <Button
            variant="secondary"
            onClick={handleReset}
            className="px-4"
          >
            <RefreshCw className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
