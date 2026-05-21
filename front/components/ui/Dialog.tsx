"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Dialog({
  isOpen,
  onClose,
  title,
  children,
  className,
}: DialogProps) {
  // Prevent scrolling under the modal overlay
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm dark:bg-black/80"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
            className={cn(
              "relative w-full max-w-lg overflow-hidden rounded-3xl border border-brand-navy/10 bg-white p-8 shadow-2xl dark:border-brand-gold/10 dark:bg-brand-navy-light z-10 glass",
              className
            )}
          >
            {/* Header Close button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 p-2 text-muted-foreground rounded-full hover:bg-brand-navy/5 hover:text-brand-navy dark:hover:bg-brand-gold/5 dark:hover:text-bg-beige transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Title */}
            {title && (
              <h2 className="text-2xl font-serif font-bold text-brand-navy dark:text-bg-beige mb-6 pr-8">
                {title}
              </h2>
            )}

            {/* Content Slot */}
            <div className="relative text-muted-foreground">{children}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
