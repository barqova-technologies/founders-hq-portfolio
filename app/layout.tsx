import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import PageTransition from "@/components/layout/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Founder's HQ — Where founders find their people.",
  description:
    "Founder's HQ is a working community of operators, builders and outliers — running cohort accelerators, founder meetups and a 200+ mentor network across six Indian cities.",
  keywords: [
    "startup community",
    "founder community India",
    "startup accelerator Hyderabad",
    "founder meetups",
    "startup cohort",
    "Founder's HQ",
  ],
  openGraph: {
    title: "Founder's HQ — Where founders find their people.",
    description:
      "A working community of operators and outliers. Cohorts, meetups, mentors and demo days across six Indian cities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-primary text-text antialiased">
        <Preloader />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
