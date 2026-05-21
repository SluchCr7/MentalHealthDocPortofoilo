import React from "react";
import Link from "next/link";
import { ShieldCheck, Compass, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16 space-y-12 text-left">
      
      {/* Back button */}
      <div>
        <Link href="/">
          <Button variant="ghost" size="sm" className="flex gap-2 items-center text-xs uppercase tracking-wider font-semibold">
            <ArrowLeft className="w-4 h-4" /> Return to Home
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 border-b border-brand-navy/5 dark:border-brand-gold/10 pb-8">
        <div className="inline-flex p-3 bg-teal-safe/10 text-teal-safe rounded-full">
          <ShieldCheck className="w-8 h-8" />
        </div>
        <h1 className="text-3.5xl font-serif font-bold text-brand-navy dark:text-bg-beige leading-tight">
          Privacy Policy & HIPAA Disclosures
        </h1>
        <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
          Effective Date: May 21, 2026 &bull; California Lic Psy92410
        </p>
      </div>

      {/* Body content */}
      <div className="space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
        <p>
          Dr. Evelyn Bennett, Ph.D., Clinical Psychotherapy & Consultation ("the Practice") is dedicated to protecting the absolute privacy, security, and integrity of your Personal Health Information (PHI). This document outlines how we collect, store, and utilize details regarding your therapeutic sessions, scheduling metrics, and online website logs.
        </p>

        <section className="space-y-3">
          <h3 className="font-serif text-lg font-bold text-brand-navy dark:text-bg-beige uppercase tracking-wide">
            1. Scope of HIPAA Confidentiality
          </h3>
          <p>
            Under federal HIPAA (Health Insurance Portability and Accountability Act) standards and professional psychotherapeutic licensure codes, your patient record is strictly confidential. This encompasses session clinical logs, therapeutic treatment planning, scheduling entries, secure text transcripts, and out-of-network super-bill documents.
          </p>
          <p>
            We will never disclose your PHI to third-party entities—including employer corporations, health insurance agencies, or family members—without your explicit, legally signed **Written Authorization of Disclosure**, except in cases where we are legally mandated to report.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-serif text-lg font-bold text-brand-navy dark:text-bg-beige uppercase tracking-wide">
            2. Legal Mandates of Disclosure (Confidentiality Exceptions)
          </h3>
          <p>
            Federal and state statutes outline specific, narrow exceptions where the Practice is legally forced to bypass standard client confidentiality:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Imminent Threat of Harm</strong>: If there is clear, confirmed evidence of intent to inflict severe harm upon yourself or another identified individual.</li>
            <li><strong>Abuse Reporting</strong>: Mandatory reporting of suspected current or historical abuse of a child, elder, or dependent adult under CA protective statutes.</li>
            <li><strong>Legally Binding Subpoena</strong>: In response to a direct, legally certified court order issued by a licensed judicial judge.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="font-serif text-lg font-bold text-brand-navy dark:text-bg-beige uppercase tracking-wide">
            3. Telehealth Electronic Safety & Encryptions
          </h3>
          <p>
            Virtual counseling sessions are conducted exclusively utilizing our high-definition telehealth platform. This infrastructure features complete end-to-end (AES-256) encryption and adheres directly to rigorous HIPAA security standards. No diagnostic streams, voice recordings, or video assets are ever recorded, processed, or cached by our systems.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-serif text-lg font-bold text-brand-navy dark:text-bg-beige uppercase tracking-wide">
            4. Online Contact Forms & Cookies
          </h3>
          <p>
            Standard digital forms completed on this portfolio website (including the breathing tool, mood screener checklists, or newsletter subscriptions) are designed primarily to facilitate customer engagement. Standard metadata checks are encrypted. We utilize anonymous analytics cookies to monitor performance parameters and optimize loading timelines. No medical records are processed by our standard website server.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-serif text-lg font-bold text-brand-navy dark:text-bg-beige uppercase tracking-wide">
            5. Contact and Inquiries
          </h3>
          <p>
            If you have questions regarding this Privacy Policy or wish to request an audit of your clinical files, please write directly to:
            <br />
            <strong>Practice Privacy Auditor</strong>: privacy@auratherapyclinic.com
          </p>
        </section>
      </div>

    </div>
  );
}
