"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Compass, Mail, Phone, MapPin, Send, ShieldCheck, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

export default function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast("Invalid Email Address", "Please provide a valid secure email format.", "error");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      toast(
        "Subscription Confirmed",
        "You are now subscribed to Dr. Bennett's clinical wellness newsletter.",
        "success"
      );
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <footer className="relative bg-bg-beige-dark dark:bg-brand-navy border-t border-brand-navy/5 dark:border-brand-gold/10 pt-20 pb-10 overflow-hidden">
      
      {/* Background Calm Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(197,168,128,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(197,168,128,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Clinician Branding Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-teal-safe/10 dark:bg-brand-gold/15 flex items-center justify-center border border-teal-safe/15">
                <Compass className="w-5 h-5 text-teal-safe dark:text-brand-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold tracking-wider text-brand-navy dark:text-bg-beige leading-tight">
                  AURA CLINIC
                </span>
                <span className="text-[10px] tracking-widest font-semibold uppercase text-gold-accent dark:text-gold-light leading-none">
                  Clinical Psychotherapy
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              Providing evidence-based clinical psychotherapy in a safe, premium, emotionally-attuned private practice container.
            </p>
            
            {/* Secure Badges */}
            <div className="flex items-center gap-2.5 text-xs text-teal-safe font-semibold bg-teal-safe/5 dark:bg-teal-safe/10 px-4 py-2 rounded-2xl w-fit border border-teal-safe/10">
              <ShieldCheck className="w-4 h-4" /> HIPAA Encrypted & Secure
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-serif text-base font-bold text-brand-navy dark:text-bg-beige mb-6 uppercase tracking-wider">
              Therapy Directory
            </h4>
            <ul className="space-y-3.5 text-sm">
              {[
                { label: "Clinical Home", path: "/" },
                { label: "About Dr. Bennett", path: "/about" },
                { label: "Treatment Services", path: "/services" },
                { label: "Wellness Toolkit", path: "/resources" },
                { label: "Mental Health Blog", path: "/blog" },
                { label: "Secure Scheduling", path: "/booking" }
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.path}
                    className="text-muted-foreground hover:text-brand-navy dark:hover:text-bg-beige transition-colors duration-300 flex items-center gap-1 group"
                  >
                    <span className="h-1 w-1 bg-brand-navy/30 dark:bg-brand-gold/40 rounded-full group-hover:w-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Clinic Locations & Contact */}
          <div>
            <h4 className="font-serif text-base font-bold text-brand-navy dark:text-bg-beige mb-6 uppercase tracking-wider">
              Office Information
            </h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-accent dark:text-gold-light mt-0.5 shrink-0" />
                <span>
                  <strong>Aura Clinical Suite 400</strong>
                  <br />
                  120 Oakwood Blvd, Plaza West
                  <br />
                  Los Angeles, CA 90025
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-accent dark:text-gold-light shrink-0" />
                <span>(310) 555-0142</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-accent dark:text-gold-light shrink-0" />
                <span>evelyn@auratherapyclinic.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Subscription */}
          <div>
            <h4 className="font-serif text-base font-bold text-brand-navy dark:text-bg-beige mb-6 uppercase tracking-wider">
              Clinical Insights
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Subscribe to receive Dr. Bennett's bi-weekly clinical essays on neuroscience, somatic grounding, and boundary establishment.
            </p>
            
            {/* Form */}
            <form onSubmit={handleSubscribe} className="space-y-2 relative">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your secure email..."
                  required
                  className="w-full text-sm py-3 pl-4 pr-12 rounded-full border border-brand-navy/10 bg-white/60 dark:border-brand-gold/15 dark:bg-brand-navy-light focus:outline-none focus:border-teal-safe transition-all"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-1 top-1 p-2 bg-teal-safe hover:bg-[#3D8C8C] text-white rounded-full transition-all duration-300 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Middle Emergency Notice Banner (High-quality health requirement) */}
        <div className="border-t border-b border-brand-navy/10 dark:border-brand-gold/10 py-6 mb-10 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left bg-teal-safe/5 dark:bg-teal-safe/10 px-8 rounded-3xl">
          <div className="text-sm font-medium text-brand-navy/80 dark:text-bg-beige/80 flex gap-2 items-center">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse shrink-0" />
            <span>
              <strong>Emergency mental health notice:</strong> If you are experiencing an immediate psychological crisis or self-harm risk, please dial <strong>988</strong> or visit your nearest emergency room.
            </span>
          </div>
        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
          <div>
            &copy; {new Date().getFullYear()} Aura Clinical Psychotherapy. All rights reserved. Professional licensure code: CA Psy92410.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-brand-navy dark:hover:text-bg-beige transition-colors">
              Privacy Policy & HIPAA Disclosures
            </Link>
            <Link href="/terms" className="hover:text-brand-navy dark:hover:text-bg-beige transition-colors">
              Clinical Service Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
