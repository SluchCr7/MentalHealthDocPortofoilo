import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function TermsOfService() {
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
          Clinical Service Terms
        </h1>
        <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">
          Effective Date: May 21, 2026 &bull; California Lic Psy92410
        </p>
      </div>

      {/* Body content */}
      <div className="space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed">
        <p>
          By engaging in psychotherapy services or scheduling a secure consultation intake call with Dr. Evelyn Bennett, Ph.D. ("the Practice"), you agree to adhere to the following professional terms of service.
        </p>

        <section className="space-y-3">
          <h3 className="font-serif text-lg font-bold text-brand-navy dark:text-bg-beige uppercase tracking-wide">
            1. Therapeutic Fees & Payments
          </h3>
          <p>
            Patients agree to pay the standard session fee established during their intake diagnostic evaluation. All fees are due at the conclusion of each psychotherapy hour. We accept secure major credit cards, HSA/FSA debit cards, and bank routing transfers.
          </p>
          <p>
            Out-of-network super-bills are printed on the 1st of each calendar month. The Practice assumes no liability regarding the reimbursement decisions of your private health insurance provider.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-serif text-lg font-bold text-brand-navy dark:text-bg-beige uppercase tracking-wide">
            2. Strict 24-Hour Cancellation Policy
          </h3>
          <p>
            Because therapeutic appointment windows are allocated exclusively to your clinical care, the Practice enforces a strict **24-Hour Cancellation & Rescheduling Policy**. 
          </p>
          <p>
            Cancellations or session reschedules must be initiated at least 24 hours prior to the scheduled start time. Late cancellations, late reschedules, or missed appointments without notice will be charged the **full standard session fee**, processed automatically utilizing your payment credential on file, except in sudden, life-threatening physical emergencies.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-serif text-lg font-bold text-brand-navy dark:text-bg-beige uppercase tracking-wide">
            3. Telehealth Connectivity Responsibilities
          </h3>
          <p>
            For virtual counseling sessions, patients are responsible for securing a private, quiet physical space and maintaining a stable, high-speed internet connection. The Practice assumes no liability or fee refunds for session time lost due to technical connectivity errors occurring on the patient's device.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-serif text-lg font-bold text-brand-navy dark:text-bg-beige uppercase tracking-wide">
            4. Clinical Boundaries & Ethics
          </h3>
          <p>
            Psychotherapy is a specialized co-regulating service designed to treat mental health diagnoses. Dr. Bennett operates within strict professional boundaries. Clinical consultation calls, email updates, and worksheets are intended as therapeutic scaffolding. We do not provide continuous, emergency crisis management. If you are experiencing a life-threatening crisis, call **988** immediately.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="font-serif text-lg font-bold text-brand-navy dark:text-bg-beige uppercase tracking-wide">
            5. Acceptance of Terms
          </h3>
          <p>
            Reserving an appointment via the online scheduling wizard, submitting secure intake request documents, or signing practice intakes constitutes full, legally binding agreement to all clinical guidelines outlined in these Terms.
          </p>
        </section>
      </div>

    </div>
  );
}
