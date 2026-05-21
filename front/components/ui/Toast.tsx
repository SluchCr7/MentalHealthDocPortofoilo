"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertTriangle, Info } from "lucide-react";

type ToastType = "success" | "error" | "info";

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  type?: ToastType;
}

type ToastContextType = {
  toast: (title: string, description?: string, type?: ToastType) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const toast = useCallback((title: string, description?: string, type: ToastType = "success") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, description, type }]);
    
    // Automatically remove after 4 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {/* Toast Render Node */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 w-full max-w-sm pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => {
            const icons = {
              success: <CheckCircle className="w-5 h-5 text-teal-safe" />,
              error: <AlertTriangle className="w-5 h-5 text-rose-500" />,
              info: <Info className="w-5 h-5 text-gold-accent" />,
            };

            const borders = {
              success: "border-teal-safe/20 dark:border-teal-safe/30",
              error: "border-rose-500/20 dark:border-rose-500/30",
              info: "border-gold-accent/20 dark:border-gold-accent/30",
            };

            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                className={`pointer-events-auto flex items-start gap-4 p-5 rounded-2xl border shadow-xl bg-white/95 dark:bg-brand-navy-light/95 backdrop-blur-md glass ${borders[t.type || "success"]}`}
              >
                {/* Icon wrapper */}
                <div className="mt-0.5">{icons[t.type || "success"]}</div>
                
                {/* Message wrapper */}
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-brand-navy dark:text-bg-beige font-sans">
                    {t.title}
                  </h4>
                  {t.description && (
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {t.description}
                    </p>
                  )}
                </div>

                {/* Dismiss button */}
                <button
                  onClick={() => removeToast(t.id)}
                  className="p-1 text-muted-foreground/60 hover:text-brand-navy dark:hover:text-bg-beige transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
