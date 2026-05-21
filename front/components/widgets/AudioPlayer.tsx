"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, SkipForward, SkipBack, Volume2, Headphones, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Track {
  title: string;
  duration: string;
  seconds: number;
  description: string;
}

const MEDITATION_TRACKS: Track[] = [
  {
    title: "Somatic Grounding Anchor",
    duration: "5:00",
    seconds: 300,
    description: "Anchoring your physical body through gentle tactile awareness and tension release."
  },
  {
    title: "Anxiety Release Session",
    duration: "8:00",
    seconds: 480,
    description: "Acceptance-based breathing sequence to calm panic and regulate an over-active mind."
  },
  {
    title: "Deep Restful Transition",
    duration: "10:00",
    seconds: 600,
    description: "Vagal nerve stimulation exercises to transition into restorative evening sleep."
  }
];

export default function AudioPlayer() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [secondsPlayed, setSecondsPlayed] = useState(0);

  const activeTrack = MEDITATION_TRACKS[trackIndex];

  // Simulated progress timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setSecondsPlayed((prev) => {
          if (prev >= activeTrack.seconds) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, trackIndex, activeTrack.seconds]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setIsPlaying(false);
    setSecondsPlayed(0);
    setTrackIndex((prev) => (prev + 1) % MEDITATION_TRACKS.length);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setSecondsPlayed(0);
    setTrackIndex((prev) => (prev - 1 + MEDITATION_TRACKS.length) % MEDITATION_TRACKS.length);
  };

  // Format time
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs < 10 ? "0" : ""}${remainingSecs}`;
  };

  // Progress Percent
  const progressPercent = (secondsPlayed / activeTrack.seconds) * 100;

  return (
    <div className="w-full max-w-xl mx-auto rounded-3xl p-6 sm:p-8 bg-white/40 dark:bg-[#101726]/40 backdrop-blur-md border border-brand-navy/10 dark:border-brand-gold/10 relative overflow-hidden shadow-xl">
      {/* Background Calm Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-safe/5 via-transparent to-gold-accent/5 pointer-events-none" />

      {/* Header Info */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-xs uppercase tracking-widest font-semibold text-gold-accent dark:text-gold-light flex gap-2 items-center">
          <Headphones className="w-4 h-4" /> Mindful Listening
        </span>
        <span className="text-xs font-semibold text-brand-navy/55 dark:text-bg-beige/55 bg-brand-navy/5 dark:bg-brand-gold/10 px-3 py-1 rounded-full flex gap-1 items-center">
          <Sparkles className="w-3.5 h-3.5" /> Guided audio
        </span>
      </div>

      {/* Media info */}
      <div className="text-center mb-8 relative z-10">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-navy dark:text-bg-beige mb-2">
          {activeTrack.title}
        </h3>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto h-12 leading-relaxed">
          {activeTrack.description}
        </p>
      </div>

      {/* Dynamic Animated Waveform */}
      <div className="flex justify-center items-center gap-1.5 h-16 mb-8 relative">
        {Array.from({ length: 24 }).map((_, idx) => {
          // Compute random-looking but fixed heights
          const heights = [
            24, 40, 16, 48, 32, 56, 20, 44, 12, 36, 28, 48,
            32, 16, 40, 24, 56, 12, 36, 20, 44, 28, 48, 20
          ];
          const height = heights[idx];

          return (
            <motion.div
              key={idx}
              className="w-1.5 rounded-full bg-teal-safe/40 dark:bg-brand-gold/30"
              animate={
                isPlaying
                  ? {
                      height: [height * 0.3, height, height * 0.3],
                      backgroundColor: ["rgba(78, 159, 159, 0.4)", "rgba(197, 168, 128, 0.9)", "rgba(78, 159, 159, 0.4)"]
                    }
                  : { height: height * 0.3 }
              }
              transition={{
                duration: 1.2 + (idx % 3) * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          );
        })}
      </div>

      {/* Progress Playhead Scrubber */}
      <div className="mb-8 relative z-10">
        {/* Scrubber Line */}
        <div className="h-1.5 w-full bg-brand-navy/5 dark:bg-brand-gold/15 rounded-full relative overflow-hidden">
          <motion.div
            className="h-full bg-teal-safe rounded-full"
            style={{ width: `${progressPercent}%` }}
            transition={{ type: "tween", ease: "linear" }}
          />
        </div>
        {/* Timers */}
        <div className="flex justify-between items-center mt-2 text-xs font-semibold text-muted-foreground">
          <span>{formatTime(secondsPlayed)}</span>
          <span>{activeTrack.duration}</span>
        </div>
      </div>

      {/* Main Music Controls */}
      <div className="flex items-center justify-center gap-6 relative z-10">
        {/* Previous Track button */}
        <button
          onClick={handlePrev}
          className="p-3 text-muted-foreground hover:text-brand-navy dark:hover:text-bg-beige transition-colors cursor-pointer"
        >
          <SkipBack className="w-5 h-5" />
        </button>

        {/* Play/Pause Button */}
        <Button
          variant="teal"
          onClick={togglePlay}
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 p-0"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white ml-1 fill-current" />
          )}
        </Button>

        {/* Next Track button */}
        <button
          onClick={handleNext}
          className="p-3 text-muted-foreground hover:text-brand-navy dark:hover:text-bg-beige transition-colors cursor-pointer"
        >
          <SkipForward className="w-5 h-5" />
        </button>
      </div>

      {/* Footer volume indicator */}
      <div className="flex justify-center items-center gap-2 mt-6 text-xs text-muted-foreground/60">
        <Volume2 className="w-3.5 h-3.5" />
        <span>Stereo co-regulated somatic audio</span>
      </div>
    </div>
  );
}
