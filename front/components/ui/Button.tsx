"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold" | "teal";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, isLoading, disabled, ...props }, ref) => {
    
    // Core Tailwind styling mapping
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
    
    const variants = {
      primary: "bg-brand-navy text-bg-beige border border-transparent hover:bg-brand-navy-light focus:ring-brand-navy shadow-sm dark:bg-brand-gold dark:text-brand-navy dark:hover:bg-brand-gold-light",
      secondary: "bg-bg-beige-dark text-brand-navy hover:bg-bg-beige border border-transparent dark:bg-brand-navy-light dark:text-bg-beige dark:hover:bg-brand-navy",
      outline: "border border-brand-navy/20 bg-transparent text-brand-navy hover:bg-brand-navy/5 focus:ring-brand-navy dark:border-brand-gold/30 dark:text-brand-gold dark:hover:bg-brand-gold/10",
      ghost: "bg-transparent text-brand-navy hover:bg-brand-navy/5 dark:text-bg-beige dark:hover:bg-bg-beige/5",
      gold: "bg-gold-accent text-brand-navy border border-transparent hover:bg-[#B59870] hover:text-white shadow-md dark:bg-gold-light dark:text-brand-navy dark:hover:bg-[#EEDBC5]",
      teal: "bg-teal-safe text-white hover:bg-[#3D8C8C] shadow-md hover:shadow-lg focus:ring-teal-safe"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg"
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : null}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
