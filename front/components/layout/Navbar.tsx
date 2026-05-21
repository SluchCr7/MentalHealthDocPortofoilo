"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Calendar, Compass } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Toolkit", path: "/resources" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Manage body scroll lock when mobile drawer opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on link click
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "glass py-4 shadow-sm border-b border-brand-navy/5 dark:border-brand-gold/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Clinic Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="w-10 h-10 rounded-full bg-teal-safe/10 dark:bg-brand-gold/15 flex items-center justify-center border border-teal-safe/15 group-hover:border-teal-safe transition-all duration-300">
              <Compass className="w-5 h-5 text-teal-safe dark:text-brand-gold" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-wider text-brand-navy dark:text-bg-beige leading-tight">
                AURA THERAPY
              </span>
              <span className="text-[10px] tracking-widest font-semibold uppercase text-gold-accent dark:text-gold-light leading-none">
                Dr. Evelyn Bennett
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative text-sm font-medium transition-colors duration-300 py-1.5 ${
                    isActive
                      ? "text-brand-navy dark:text-bg-beige font-semibold"
                      : "text-muted-foreground hover:text-brand-navy dark:hover:text-bg-beige"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-safe rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action buttons (Theme + CTA) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme switcher */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-muted-foreground hover:text-brand-navy dark:hover:text-bg-beige hover:bg-brand-navy/5 dark:hover:bg-brand-gold/10 transition-all duration-300 cursor-pointer"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 180 : 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </motion.div>
            </button>

            {/* Quick Session Book button */}
            <Link href="/booking">
              <Button variant="gold" size="sm" className="flex gap-2 items-center text-xs uppercase tracking-wider font-semibold">
                <Calendar className="w-4 h-4" /> Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile UI Menu Triggers */}
          <div className="flex items-center gap-3 md:hidden z-50">
            {/* Theme switcher in mobile nav header */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-muted-foreground hover:text-brand-navy dark:hover:text-bg-beige cursor-pointer"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-navy dark:text-bg-beige focus:outline-none cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Slide-out Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-30 md:hidden flex justify-end">
            {/* Overlay Mask */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleLinkClick}
              className="fixed inset-0 bg-brand-navy/40 dark:bg-black/60 backdrop-blur-xs"
            />

            {/* Drawer Pane */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", duration: 0.45, bounce: 0 }}
              className="relative w-80 max-w-full h-full bg-bg-beige dark:bg-brand-navy shadow-2xl p-8 pt-28 flex flex-col justify-between border-l border-brand-navy/5 dark:border-brand-gold/10"
            >
              {/* Drawer Links Stack */}
              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={handleLinkClick}
                      className={`text-xl font-serif font-bold transition-all ${
                        isActive
                          ? "text-teal-safe dark:text-brand-gold translate-x-1"
                          : "text-brand-navy hover:text-teal-safe dark:text-bg-beige dark:hover:text-brand-gold"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile CTA */}
              <div className="space-y-4">
                <hr className="border-brand-navy/5 dark:border-brand-gold/10" />
                <Link href="/booking" onClick={handleLinkClick} className="block">
                  <Button variant="gold" className="w-full flex gap-2 items-center justify-center text-xs uppercase tracking-wider font-semibold py-4">
                    <Calendar className="w-4.5 h-4.5" /> Book Session
                  </Button>
                </Link>
                <div className="text-center text-xs text-muted-foreground">
                  Confidential intake screeners included
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
