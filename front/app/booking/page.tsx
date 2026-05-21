"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Calendar,
  Clock,
  Compass,
  DollarSign,
  Heart,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Video
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { services } from "@/data/services";
import { useToast } from "@/components/ui/Toast";

type Step = "modality" | "date_time" | "details" | "confirm";

const TIME_SLOTS = [
  "09:00 AM", "10:30 AM", "12:00 PM", "01:30 PM", "03:00 PM", "04:30 PM"
];

// Helper to generate dates for next 14 days
const generateAvailableDates = () => {
  const dates = [];
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  for (let i = 1; i <= 14; i++) {
    const d = new Date();
    d.setDate(d.getDate() + i);
    
    // Skip weekends
    if (d.getDay() !== 0 && d.getDay() !== 6) {
      dates.push({
        raw: d,
        dayStr: days[d.getDay()],
        dateNum: d.getDate(),
        monthStr: months[d.getMonth()],
        fullString: d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
      });
    }
  }
  return dates;
};

function BookingContent() {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  
  const [currentStep, setCurrentStep] = useState<Step>("modality");
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [selectedDateIndex, setSelectedDateIndex] = useState<number | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  
  // Patient details state
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientMessage, setPatientMessage] = useState("");
  const [paymentChoice, setPaymentChoice] = useState("out_of_network");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState("");

  const availableDates = generateAvailableDates();
  const selectedService = services.find((s) => s.id === selectedServiceId);
  const selectedDate = selectedDateIndex !== null ? availableDates[selectedDateIndex] : null;

  // Auto-fill service from URL query param
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam && services.some((s) => s.id === serviceParam)) {
      setSelectedServiceId(serviceParam);
      setCurrentStep("date_time");
    }
  }, [searchParams]);

  const handleNextStep = () => {
    if (currentStep === "modality" && !selectedServiceId) {
      toast("Selection Required", "Please select a therapeutic modality to proceed.", "error");
      return;
    }
    if (currentStep === "date_time" && (selectedDateIndex === null || !selectedTimeSlot)) {
      toast("Date & Time Required", "Please pick a date and time slot to proceed.", "error");
      return;
    }
    if (currentStep === "details" && (!patientName || !patientEmail || !patientPhone)) {
      toast("Missing Information", "Please complete all patient fields.", "error");
      return;
    }

    if (currentStep === "modality") setCurrentStep("date_time");
    else if (currentStep === "date_time") setCurrentStep("details");
    else if (currentStep === "details") setCurrentStep("confirm");
  };

  const handlePrevStep = () => {
    if (currentStep === "confirm") setCurrentStep("details");
    else if (currentStep === "details") setCurrentStep("date_time");
    else if (currentStep === "date_time") setCurrentStep("modality");
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const code = "AURA-" + Math.floor(100000 + Math.random() * 900000);
      setConfirmationCode(code);
      setIsSubmitting(false);
      setIsCompleted(true);
      toast(
        "Secure Consultation Confirmed",
        `Your session has been scheduled successfully. Reference: ${code}`,
        "success"
      );
    }, 2000);
  };

  // Step indicator render
  const getStepProgress = () => {
    if (currentStep === "modality") return 25;
    if (currentStep === "date_time") return 50;
    if (currentStep === "details") return 75;
    return 100;
  };

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 space-y-12 relative overflow-hidden">
      
      {/* Background Soft Orbs */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-teal-safe/5 rounded-full glow-orb -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gold-accent/5 rounded-full glow-orb -z-10" />

      {/* ======================================= */}
      {/* HEADER                                  */}
      {/* ======================================= */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <span className="text-xs uppercase font-semibold text-gold-accent dark:text-gold-light tracking-widest block">
          Secure Registration Portal
        </span>
        <h1 className="text-3.5xl sm:text-4xl font-serif font-bold text-brand-navy dark:text-bg-beige leading-tight">
          Secure Therapeutic Onboarding
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Establish diagnostic parameters, customize dates, and secure patient intake forms in our HIPAA-compliant, encrypted container.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {!isCompleted ? (
          <motion.div
            key="booking-flow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="space-y-8"
          >
            {/* ======================================= */}
            {/* PROGRESS STEP BAR                       */}
            {/* ======================================= */}
            <div className="space-y-4 max-w-xl mx-auto">
              <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <span className={currentStep === "modality" ? "text-teal-safe font-bold" : ""}>1. Modality</span>
                <span className={currentStep === "date_time" ? "text-teal-safe font-bold" : ""}>2. Date & Time</span>
                <span className={currentStep === "details" ? "text-teal-safe font-bold" : ""}>3. Intake Form</span>
                <span className={currentStep === "confirm" ? "text-teal-safe font-bold" : ""}>4. Review</span>
              </div>
              <div className="h-1.5 w-full bg-brand-navy/5 dark:bg-brand-gold/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-teal-safe rounded-full"
                  animate={{ width: `${getStepProgress()}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* ======================================= */}
            {/* RENDER STEP BLOCKS                      */}
            {/* ======================================= */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Form left Column */}
              <div className="lg:col-span-8 bg-white/40 dark:bg-[#101726]/40 backdrop-blur-md rounded-[32px] border border-brand-navy/10 dark:border-brand-gold/10 p-6 sm:p-10 shadow-lg min-h-[420px] flex flex-col justify-between">
                
                {/* STEP 1: MODALITY */}
                {currentStep === "modality" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-serif font-bold text-brand-navy dark:text-bg-beige">
                      Step 1: Choose Your Therapeutic Modality
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {services.map((service) => {
                        const isSelected = selectedServiceId === service.id;
                        return (
                          <button
                            key={service.id}
                            onClick={() => setSelectedServiceId(service.id)}
                            className={`p-5 rounded-2xl border text-left flex items-start gap-4 transition-all duration-300 cursor-pointer ${
                              isSelected
                                ? "bg-teal-safe/10 border-teal-safe dark:bg-[#1C4D4D] dark:border-teal-safe/80 shadow-md scale-[1.01]"
                                : "bg-white/40 border-brand-navy/5 hover:border-brand-navy/20 dark:bg-brand-navy-light/40 dark:border-brand-gold/10 dark:hover:border-brand-gold/25"
                            }`}
                          >
                            <div className={`p-2 rounded-xl border shrink-0 ${isSelected ? "bg-teal-safe border-transparent text-white" : "bg-brand-navy/5 border-brand-navy/5 text-teal-safe dark:bg-brand-gold/10 dark:text-brand-gold"}`}>
                              <Compass className="w-5 h-5 stroke-[1.5]" />
                            </div>
                            <div className="space-y-1">
                              <h4 className={`text-sm font-semibold ${isSelected ? "text-brand-navy dark:text-bg-beige" : "text-brand-navy dark:text-bg-beige"}`}>
                                {service.title}
                              </h4>
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {service.shortDesc}
                              </p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: DATE & TIME */}
                {currentStep === "date_time" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-8"
                  >
                    <h3 className="text-xl font-serif font-bold text-brand-navy dark:text-bg-beige">
                      Step 2: Custom Date & Session Slot Pick
                    </h3>
                    
                    {/* Visual calendar dates list */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex gap-1.5 items-center">
                        <Calendar className="w-4 h-4" /> Available Dates
                      </h4>
                      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-thin">
                        {availableDates.map((date, idx) => {
                          const isSelected = selectedDateIndex === idx;
                          return (
                            <button
                              key={idx}
                              onClick={() => setSelectedDateIndex(idx)}
                              className={`flex flex-col items-center justify-center p-4 rounded-xl border text-center shrink-0 w-20 cursor-pointer transition-all duration-300 ${
                                isSelected
                                  ? "bg-teal-safe border-transparent text-white shadow-md scale-105"
                                  : "bg-white/40 border-brand-navy/5 hover:border-brand-navy/20 text-muted-foreground dark:bg-brand-navy-light/40 dark:border-brand-gold/10 dark:hover:border-brand-gold/20"
                              }`}
                            >
                              <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">{date.dayStr}</span>
                              <span className="text-xl font-serif font-bold my-1">{date.dateNum}</span>
                              <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">{date.monthStr}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time slot grid */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex gap-1.5 items-center">
                        <Clock className="w-4 h-4" /> Available Time Slots
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {TIME_SLOTS.map((slot) => {
                          const isSelected = selectedTimeSlot === slot;
                          return (
                            <button
                              key={slot}
                              onClick={() => setSelectedTimeSlot(slot)}
                              className={`py-3 px-4 rounded-xl border text-center font-medium text-sm transition-all duration-300 cursor-pointer ${
                                isSelected
                                  ? "bg-teal-safe border-transparent text-white shadow-md"
                                  : "bg-white/40 border-brand-navy/5 hover:border-brand-navy/20 text-muted-foreground dark:bg-brand-navy-light/40 dark:border-brand-gold/10 dark:hover:border-brand-gold/20"
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                  </motion.div>
                )}

                {/* STEP 3: PATIENT INTAKE DETAILS */}
                {currentStep === "details" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <div className="border-b border-brand-navy/5 dark:border-brand-gold/10 pb-3 flex justify-between items-center">
                      <h3 className="text-xl font-serif font-bold text-brand-navy dark:text-bg-beige">
                        Step 3: Secure Patient Intake Details
                      </h3>
                      <span className="text-[10px] text-teal-safe font-semibold flex gap-1 items-center bg-teal-safe/10 px-3 py-1 rounded-full border border-teal-safe/10">
                        <ShieldCheck className="w-3.5 h-3.5" /> HIPAA Encrypted
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs uppercase font-bold text-brand-navy/70 dark:text-bg-beige/70 tracking-wider">Your Full Name</label>
                        <input
                          type="text"
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          required
                          placeholder="John Doe..."
                          className="w-full text-sm py-3 px-4 rounded-xl border border-brand-navy/10 bg-white/60 dark:border-brand-gold/15 dark:bg-brand-navy-light focus:outline-none focus:border-teal-safe transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs uppercase font-bold text-brand-navy/70 dark:text-bg-beige/70 tracking-wider">Secure Email</label>
                        <input
                          type="email"
                          value={patientEmail}
                          onChange={(e) => setPatientEmail(e.target.value)}
                          required
                          placeholder="john@securemail.com..."
                          className="w-full text-sm py-3 px-4 rounded-xl border border-brand-navy/10 bg-white/60 dark:border-brand-gold/15 dark:bg-brand-navy-light focus:outline-none focus:border-teal-safe transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs uppercase font-bold text-brand-navy/70 dark:text-bg-beige/70 tracking-wider">Confidential Phone</label>
                        <input
                          type="tel"
                          value={patientPhone}
                          onChange={(e) => setPatientPhone(e.target.value)}
                          required
                          placeholder="(555) 000-0000"
                          className="w-full text-sm py-3 px-4 rounded-xl border border-brand-navy/10 bg-white/60 dark:border-brand-gold/15 dark:bg-brand-navy-light focus:outline-none focus:border-teal-safe transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs uppercase font-bold text-brand-navy/70 dark:text-bg-beige/70 tracking-wider">Payment / Insurance Method</label>
                        <select
                          value={paymentChoice}
                          onChange={(e) => setPaymentChoice(e.target.value)}
                          className="w-full text-sm py-3 px-4 rounded-xl border border-brand-navy/10 bg-white/60 dark:border-brand-gold/15 dark:bg-brand-navy-light focus:outline-none focus:border-teal-safe transition-all appearance-none cursor-pointer"
                        >
                          <option value="out_of_network">Out-of-Network (Monthly Superbill)</option>
                          <option value="private_pay">Private Pay / Self-Pay</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs uppercase font-bold text-brand-navy/70 dark:text-bg-beige/70 tracking-wider flex gap-1.5 items-center">
                        <MessageSquare className="w-4 h-4" /> Message for the Clinician (Optional)
                      </label>
                      <textarea
                        value={patientMessage}
                        onChange={(e) => setPatientMessage(e.target.value)}
                        rows={3}
                        placeholder="Briefly share any goals, questions, or specific details for this initial call..."
                        className="w-full text-sm py-3 px-4 rounded-xl border border-brand-navy/10 bg-white/60 dark:border-brand-gold/15 dark:bg-brand-navy-light focus:outline-none focus:border-teal-safe transition-all resize-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: REVIEW & CONFIRM */}
                {currentStep === "confirm" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6 text-left"
                  >
                    <h3 className="text-xl font-serif font-bold text-brand-navy dark:text-bg-beige">
                      Step 4: Final Consultation Overview
                    </h3>
                    
                    <div className="bg-white/60 dark:bg-brand-navy-light/40 rounded-2xl border border-brand-navy/5 dark:border-brand-gold/10 p-6 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-gold-accent dark:text-gold-light">Selected Modality</span>
                          <h4 className="text-base font-serif font-bold text-brand-navy dark:text-bg-beige mt-0.5">{selectedService?.title}</h4>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-gold-accent dark:text-gold-light">Session Standard Fee</span>
                          <p className="text-base font-bold text-brand-navy dark:text-bg-beige mt-0.5">{selectedService?.pricing} <span className="text-xs font-normal text-muted-foreground">/ {selectedService?.duration}</span></p>
                        </div>
                      </div>

                      <hr className="border-brand-navy/5 dark:border-brand-gold/10" />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-gold-accent dark:text-gold-light">Date</span>
                          <p className="text-base font-bold text-brand-navy dark:text-bg-beige mt-0.5">{selectedDate?.fullString}</p>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-gold-accent dark:text-gold-light">Time Slot</span>
                          <p className="text-base font-bold text-brand-navy dark:text-bg-beige mt-0.5">{selectedTimeSlot}</p>
                        </div>
                      </div>

                      <hr className="border-brand-navy/5 dark:border-brand-gold/10" />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-gold-accent dark:text-gold-light">Patient Identity</span>
                          <p className="text-sm font-semibold text-brand-navy dark:text-bg-beige mt-0.5">{patientName}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{patientEmail} &bull; {patientPhone}</p>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold tracking-widest text-gold-accent dark:text-gold-light">Reimbursement Routing</span>
                          <p className="text-xs text-muted-foreground mt-1">
                            {paymentChoice === "out_of_network" ? "Out-of-Network PPO Superbill (reimbursements average 50-80%)" : "Direct self-pay private transaction"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-teal-safe/5 border border-teal-safe/10 text-xs text-muted-foreground flex gap-3 items-center">
                      <ShieldCheck className="w-5 h-5 text-teal-safe shrink-0 animate-pulse" />
                      <span>By completing this booking, you agree to our 24-hour clinic cancellation boundaries. The intake link is secure, HIPAA compliant, and encrypted.</span>
                    </div>

                  </motion.div>
                )}

                {/* Footer Controls */}
                <div className="flex justify-between items-center border-t border-brand-navy/5 dark:border-brand-gold/10 pt-6 mt-8">
                  <Button
                    variant="ghost"
                    onClick={handlePrevStep}
                    disabled={currentStep === "modality"}
                    className="flex gap-2 items-center text-xs uppercase tracking-wider font-semibold"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </Button>
                  
                  {currentStep === "confirm" ? (
                    <Button
                      variant="gold"
                      onClick={handleSubmitBooking}
                      disabled={isSubmitting}
                      className="px-10 text-xs uppercase tracking-widest font-serif font-bold flex gap-2 items-center"
                    >
                      {isSubmitting ? "Securing Session..." : "Confirm & Book Session"}
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={handleNextStep}
                      className="px-8 text-xs uppercase tracking-wider font-semibold flex gap-2 items-center"
                    >
                      Next Step <ArrowRight className="w-4 h-4" />
                    </Button>
                  )}
                </div>

              </div>

              {/* Secure Info right Column */}
              <div className="lg:col-span-4 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg font-serif">Onboarding Care Checklist</CardTitle>
                    <CardDescription>What to prepare for your secure consultation session:</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-xs text-muted-foreground">
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-teal-safe shrink-0 mt-0.5" />
                      <span><strong>15-Minute Video Consultation</strong>: Complimentary session to map clinical goals and verify compatibility.</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-teal-safe shrink-0 mt-0.5" />
                      <span><strong>Insurance Out-of-Network Check</strong>: Verify your outpatient behavioral health benefits for Superbill processing.</span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-teal-safe shrink-0 mt-0.5" />
                      <span><strong>Intake Forms link</strong>: Encrypted intake questionnaire will be emailed upon session reservation confirmation.</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Secure Seal */}
                <div className="p-6 rounded-[24px] bg-teal-safe/5 border border-teal-safe/10 flex items-center gap-4 text-left">
                  <div className="w-10 h-10 rounded-full bg-teal-safe/10 text-teal-safe flex items-center justify-center border border-teal-safe/15 shrink-0">
                    <Video className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-brand-navy dark:text-bg-beige uppercase tracking-wider">Telehealth Platform</h4>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">Fully secure, high-definition HIPAA-compliant video container. No software installation needed.</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        ) : (
          /* ======================================= */
          /* SECURE SUCCESS SCREEN                   */
          /* ======================================= */
          <motion.div
            key="booking-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-xl mx-auto py-12 relative"
          >
            {/* Confetti Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-safe/10 glow-orb animate-pulse-slow -z-10" />

            <div className="inline-flex p-4 bg-teal-safe/10 text-teal-safe rounded-full mb-6">
              <CheckCircle className="w-12 h-12 stroke-[1.5]" />
            </div>

            <h2 className="text-3xl font-serif font-bold text-brand-navy dark:text-bg-beige mb-3">
              Consultation Scheduled Successfully
            </h2>
            <p className="text-base text-muted-foreground max-w-md mx-auto leading-relaxed mb-8">
              Excellent step toward your somatic and nervous system safety. Your confidential details have been successfully locked and verified.
            </p>

            {/* Receipt Summary Card */}
            <div className="bg-white/60 dark:bg-brand-navy-light/40 rounded-2xl border border-brand-navy/10 dark:border-brand-gold/15 p-6 text-left space-y-4 mb-8">
              <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <span>Confirmation Code</span>
                <span className="font-mono text-teal-safe">{confirmationCode}</span>
              </div>
              <hr className="border-brand-navy/5 dark:border-brand-gold/10" />
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-semibold text-gold-accent dark:text-gold-light">Intake Date & Time</span>
                <p className="text-sm font-bold text-brand-navy dark:text-bg-beige">{selectedDate?.fullString} &bull; {selectedTimeSlot}</p>
              </div>
              <hr className="border-brand-navy/5 dark:border-brand-gold/10" />
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-semibold text-gold-accent dark:text-gold-light">Intake Modality</span>
                <p className="text-sm font-bold text-brand-navy dark:text-bg-beige">{selectedService?.title}</p>
              </div>
              <hr className="border-brand-navy/5 dark:border-brand-gold/10" />
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-semibold text-gold-accent dark:text-gold-light">Patient Identity</span>
                <p className="text-sm font-bold text-brand-navy dark:text-bg-beige">{patientName}</p>
                <p className="text-xs text-muted-foreground mt-0.5">A secure intake link has been sent to <strong>{patientEmail}</strong>.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button variant="outline" className="w-full sm:w-auto text-xs uppercase tracking-wider font-semibold">
                  Return to Home
                </Button>
              </Link>
              <Link href="/resources">
                <Button variant="primary" className="w-full sm:w-auto text-xs uppercase tracking-wider font-semibold px-8">
                  Visit Toolkit Resources
                </Button>
              </Link>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default function Booking() {
  return (
    <Suspense fallback={
      <div className="min-h-[60vh] flex items-center justify-center bg-transparent">
        <div className="text-center space-y-4">
          <div className="w-10 h-10 border-2 border-teal-safe border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Loading Onboarding Portal...</p>
        </div>
      </div>
    }>
      <BookingContent />
    </Suspense>
  );
}
