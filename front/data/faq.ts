export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Fees & Insurance" | "Therapy Process";
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "What should I expect during my very first clinical intake session?",
    answer: "Your initial intake session is a safe, non-judgmental space designed to gather a comprehensive history. We will discuss your current struggles, historical background, sleep habits, and coping mechanisms. Together, we will outline your clinical treatment goals and collaborate on a personalized therapy timeline that feels emotionally safe and manageable.",
    category: "Therapy Process"
  },
  {
    id: "faq-2",
    question: "Do you accept health insurance or provide out-of-network super-bills?",
    answer: "I operate as an out-of-network provider to maintain the highest level of client confidentiality and clinical freedom. Many PPO health insurance plans offer significant out-of-network reimbursement (often between 50% and 80%). At the end of each calendar month, I will provide you with a fully detailed, secure clinical Superbill that you can submit directly to your insurance company for reimbursement.",
    category: "Fees & Insurance"
  },
  {
    id: "faq-3",
    question: "What is your standard cancellation and rescheduling policy?",
    answer: "Because therapeutic time slots are dedicated exclusively to your care, I require a minimum of 24 hours' notice for all cancellations or rescheduling requests. Cancellations made with less than 24 hours' notice, as well as missed appointments, will be subject to the full standard session fee, except in cases of sudden medical emergency.",
    category: "Fees & Insurance"
  },
  {
    id: "faq-4",
    question: "Is clinical therapy completely confidential?",
    answer: "Yes, absolute confidentiality is a cornerstone of clinical psychotherapy. Under HIPAA regulations and professional licensure standards, your clinical record, session topics, and booking details are strictly confidential. The only legal exceptions occur if there is an imminent threat of harm to yourself or others, or in response to a direct, legally binding court order.",
    category: "General"
  },
  {
    id: "faq-5",
    question: "How long does a course of evidence-based therapy typically last?",
    answer: "Therapy is a dynamic process tailored to individual complexity. Short-term, highly focused Cognitive Behavioral Therapy (CBT) or stress management can produce significant relief within 8 to 16 sessions. Complex trauma, deep attachment patterns, or schema work may benefit from longer-term support spanning several months to a year. We continually assess progress together.",
    category: "Therapy Process"
  },
  {
    id: "faq-6",
    question: "How does virtual online telehealth therapy compare to in-person sessions?",
    answer: "Clinical efficacy studies consistently demonstrate that teletherapy delivers identical outcomes to in-person counseling for anxiety, depression, and stress. Our secure, HIPAA-compliant virtual platform features high-definition video, interactive whiteboards, and absolute privacy, offering the convenience of accessing clinical support from your home or office.",
    category: "General"
  },
  {
    id: "faq-7",
    question: "What is EMDR, and how does it help process trauma?",
    answer: "Eye Movement Desensitization and Reprocessing (EMDR) is an extensively researched, structured psychotherapy that helps the brain reprocess traumatic memories. By utilizing bilateral stimulation (such as side-to-side eye movements or gentle tapping), EMDR stimulates both hemispheres of the brain to unlock unprocessed emotional memory, shifting it from a highly raw threat state to normal, integrated memory.",
    category: "Therapy Process"
  }
];
