import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Evelyn Bennett, Ph.D. | Clinical Psychotherapist & Somatic Therapist",
  description: "Experience premium, evidence-based clinical psychotherapy. Dr. Evelyn Bennett provides specialized treatment for anxiety, trauma recovery (EMDR), somatic healing, and couples counseling in an emotionally safe, private clinic container.",
  keywords: [
    "Clinical Psychologist",
    "Psychotherapist Los Angeles",
    "EMDR Trauma Therapy",
    "Anxiety Counseling",
    "Somatic Grounding Therapy",
    "Couples Counseling Gottman",
    "Mental Wellness Resources",
    "Cognitive Behavioral Therapy (CBT)",
    "Evidence-based therapy"
  ],
  authors: [{ name: "Dr. Evelyn Bennett, Ph.D." }],
  openGraph: {
    title: "Dr. Evelyn Bennett, Ph.D. | Clinical Psychotherapist",
    description: "Experience premium evidence-based clinical counseling. Specialized trauma recovery, worry management, couples dynamics, and somatic regulation.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-bg-beige text-brand-navy dark:bg-bg-navy dark:text-bg-beige">
        <ThemeProvider>
          <ToastProvider>
            {/* Scroll Indicator */}
            <ScrollProgress />

            {/* Header Navigation */}
            <Navbar />

            {/* Main Content Area */}
            <main className="flex-grow pt-24">
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
