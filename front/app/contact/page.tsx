"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Compass,
  Heart,
  MessageSquare,
  ShieldCheck,
  Map,
  Sparkles,
  PhoneCall
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/data/faq";
import { useToast } from "@/components/ui/Toast";

export default function Contact() {
  const { toast } = useToast();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiry, setInquiry] = useState("general");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      toast("Incomplete Form", "Please fill in all mandatory fields.", "error");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      toast(
        "Secure Consultation Request Queued",
        "Your secure intake has been transmitted. Dr. Bennett's assistant will contact you in 24 hours.",
        "success"
      );
      setName("");
      setEmail("");
      setPhone("");
      setInquiry("general");
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 space-y-24 relative overflow-hidden">
      
      {/* Background Soft Orbs */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-teal-safe/5 rounded-full glow-orb -z-10" />
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
          Office Coordinates
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-navy dark:text-bg-beige leading-tight">
          Clinical consultation & intake
        </h1>
        <p className="text-sm uppercase tracking-widest text-teal-safe dark:text-brand-gold font-semibold">
          Confidential Telehealth & In-Person Los Angeles practice
        </p>
      </motion.div>

      {/* ======================================= */}
      {/* CRISIS BANNER                           */}
      {/* ======================================= */}
      <section className="bg-rose-500/10 border border-rose-500/20 rounded-[32px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto text-left relative overflow-hidden">
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-full bg-rose-500/15 flex items-center justify-center shrink-0 border border-rose-500/20 text-rose-500">
            <Heart className="w-6 h-6 fill-rose-500 animate-pulse" />
          </div>
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-brand-navy dark:text-bg-beige text-lg">Crisis On-Call Notice</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you or a loved one are experiencing severe suicidal thoughts, self-harm crisis, or an immediate psychiatric risk, please bypass this form and call the <strong>Suicide & Crisis Lifeline at 988</strong> immediately, or visit the nearest hospital emergency room.
            </p>
          </div>
        </div>
        <Link href="tel:988" className="shrink-0 w-full md:w-auto">
          <Button variant="gold" className="w-full flex gap-2 items-center text-xs uppercase tracking-wider font-semibold py-3 px-6">
            <PhoneCall className="w-4 h-4" /> Dial 988 Lifeline
          </Button>
        </Link>
      </section>

      {/* ======================================= */}
      {/* CONTACT GRID MAP AND DATA               */}
      {/* ======================================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Contact details Left */}
        <div className="lg:col-span-5 space-y-8 text-left">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-brand-navy dark:text-bg-beige">Clinic Office details</h3>
            <p className="text-base text-muted-foreground leading-relaxed">
              Feel free to call our Los Angeles office or write to our secure HIPAA email address. We respond to all professional inquiries within one business day.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-teal-safe/10 text-teal-safe flex items-center justify-center shrink-0 border border-teal-safe/15">
                <MapPin className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-brand-navy dark:text-bg-beige text-base">Office Location</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  120 Oakwood Blvd, Suite 400
                  <br />
                  Los Angeles, CA 90025
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-teal-safe/10 text-teal-safe flex items-center justify-center shrink-0 border border-teal-safe/15">
                <Phone className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-brand-navy dark:text-bg-beige text-base">Encrypted Clinical Line</h4>
                <p className="text-sm text-muted-foreground mt-1">(310) 555-0142</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-teal-safe/10 text-teal-safe flex items-center justify-center shrink-0 border border-teal-safe/15">
                <Mail className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-brand-navy dark:text-bg-beige text-base">Secure Clinical Mail</h4>
                <p className="text-sm text-muted-foreground mt-1">evelyn@auratherapyclinic.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-teal-safe/10 text-teal-safe flex items-center justify-center shrink-0 border border-teal-safe/15">
                <Clock className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-brand-navy dark:text-bg-beige text-base">Clinical Hours</h4>
                <p className="text-sm text-muted-foreground mt-1">Monday - Thursday: 9:00 AM - 6:00 PM</p>
                <p className="text-sm text-muted-foreground">Friday: 9:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Styled CSS visual Google Maps placeholder */}
          <div className="relative w-full aspect-[16/9] rounded-[24px] bg-gradient-to-tr from-brand-navy to-brand-navy-light dark:from-brand-navy-light dark:to-[#18233a] border border-brand-gold/15 overflow-hidden shadow-md flex items-center justify-center">
            {/* Visual map nodes */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(197,168,128,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(197,168,128,0.2)_1px,transparent_1px)] bg-[size:16px_16px]" />
            <div className="absolute w-24 h-24 rounded-full bg-teal-safe/25 glow-orb blur-xl" />
            
            <div className="text-center space-y-3 z-10 p-6">
              <div className="inline-flex p-2.5 bg-white/10 rounded-full border border-white/10 text-brand-gold">
                <Map className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-sm font-bold text-white tracking-wide">Secure Intake Mapping Suite</h4>
              <p className="text-[10px] text-white/50 leading-relaxed uppercase tracking-widest font-semibold">Suite 400, Los Angeles Office</p>
              <Link href="https://maps.google.com" target="_blank">
                <Button variant="ghost" size="sm" className="text-[10px] font-sans font-semibold uppercase tracking-wider text-brand-gold border border-brand-gold/20 hover:bg-brand-gold/10 hover:border-brand-gold/45 rounded-full py-1.5 px-4 mt-2">
                  Launch Google Directions
                </Button>
              </Link>
            </div>
          </div>

        </div>

        {/* Secure Form Right */}
        <div className="lg:col-span-7 bg-white/40 dark:bg-[#101726]/40 backdrop-blur-md rounded-[32px] border border-brand-navy/10 dark:border-brand-gold/10 p-8 sm:p-10 shadow-lg relative">
          
          <div className="border-b border-brand-navy/5 dark:border-brand-gold/10 pb-3 flex justify-between items-center mb-8">
            <h3 className="text-xl font-serif font-bold text-brand-navy dark:text-bg-beige flex gap-2 items-center">
              <MessageSquare className="w-5 h-5 text-gold-accent dark:text-gold-light" /> Confidential Consultation Intake
            </h3>
            <span className="text-[10px] text-teal-safe font-semibold flex gap-1 items-center bg-teal-safe/10 px-3 py-1 rounded-full border border-teal-safe/10 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" /> HIPAA Secured
            </span>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs uppercase font-bold text-brand-navy/70 dark:text-bg-beige/70 tracking-wider">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Jane Doe..."
                  className="w-full text-sm py-3 px-4 rounded-xl border border-brand-navy/10 bg-white/60 dark:border-brand-gold/15 dark:bg-brand-navy-light focus:outline-none focus:border-teal-safe transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs uppercase font-bold text-brand-navy/70 dark:text-bg-beige/70 tracking-wider">Secure Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="jane@secure.com..."
                  className="w-full text-sm py-3 px-4 rounded-xl border border-brand-navy/10 bg-white/60 dark:border-brand-gold/15 dark:bg-brand-navy-light focus:outline-none focus:border-teal-safe transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-xs uppercase font-bold text-brand-navy/70 dark:text-bg-beige/70 tracking-wider">Confidential Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  placeholder="(310) 555-0142"
                  className="w-full text-sm py-3 px-4 rounded-xl border border-brand-navy/10 bg-white/60 dark:border-brand-gold/15 dark:bg-brand-navy-light focus:outline-none focus:border-teal-safe transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs uppercase font-bold text-brand-navy/70 dark:text-bg-beige/70 tracking-wider">Inquiry Type</label>
                <select
                  value={inquiry}
                  onChange={(e) => setInquiry(e.target.value)}
                  className="w-full text-sm py-3 px-4 rounded-xl border border-brand-navy/10 bg-white/60 dark:border-brand-gold/15 dark:bg-brand-navy-light focus:outline-none focus:border-teal-safe transition-all appearance-none cursor-pointer"
                >
                  <option value="general">General Professional Inquiry</option>
                  <option value="intake">Book Consultation (Complimentary 15m call)</option>
                  <option value="billing">Out-of-Network Insurance & Superbill Audits</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs uppercase font-bold text-brand-navy/70 dark:text-bg-beige/70 tracking-wider">Message for the Clinician</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Briefly describe your goals. Please do not share highly detailed historical somatic medical files in this preliminary box."
                className="w-full text-sm py-3 px-4 rounded-xl border border-brand-navy/10 bg-white/60 dark:border-brand-gold/15 dark:bg-brand-navy-light focus:outline-none focus:border-teal-safe transition-all resize-none"
              />
            </div>

            <Button
              type="submit"
              variant="gold"
              disabled={isSubmitting}
              className="w-full py-4 text-xs font-semibold uppercase tracking-widest font-serif flex gap-2 items-center justify-center"
            >
              {isSubmitting ? "Queueing secure transmission..." : "Transmit Encrypted Message"}
            </Button>
          </form>

        </div>
      </section>

      {/* ======================================= */}
      {/* ACCORDION FAQ PANE                      */}
      {/* ======================================= */}
      <section id="faq" className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs uppercase font-semibold text-gold-accent dark:text-gold-light tracking-widest block">
            Information Clearings
          </span>
          <h2 className="text-3xl font-serif font-bold text-brand-navy dark:text-bg-beige">
            Billing & Operational FAQs
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Clarify out-of-network reimbursement structures, cancellation boundaries, and telehealth operations instantly.
          </p>
        </div>

        <div className="text-left bg-white/30 dark:bg-[#101726]/30 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-brand-navy/5 dark:border-brand-gold/10">
          <Accordion items={faqs} />
        </div>
      </section>

    </div>
  );
}
