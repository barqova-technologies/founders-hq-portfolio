import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import PageTransition from "@/components/layout/PageTransition";
import { SITE } from "@/lib/data";

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

const description =
  "Founder's HQ is a new working community of operators, builders and outliers - starting in Lucknow with a founding cohort, regular meetups and a hand-picked mentor bench. Cohort 01 applications open.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Founder's HQ - Where founders find their people.",
    template: "%s - Founder's HQ",
  },
  description,
  applicationName: SITE.name,
  keywords: [
    "startup community",
    "founder community India",
    "startup community Lucknow",
    "startup accelerator Uttar Pradesh",
    "founder meetups Lucknow",
    "startup cohort",
    "Founder's HQ",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Founder's HQ - Where founders find their people.",
    description:
      "A new working community of operators and outliers, starting in Lucknow. Founding cohort forming now.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder's HQ - Where founders find their people.",
    description:
      "A new working community of operators and outliers, starting in Lucknow. Founding cohort forming now.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  colorScheme: "dark light",
};

// Organization structured data for search engines.
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/icon`,
  image: `${SITE.url}/opengraph-image`,
  description,
  email: SITE.email,
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  sameAs: Object.values(SITE.socials).filter(Boolean),
};

// Runs before paint so the saved theme is applied with no flash.
// New visitors default to dark (the brand default); a saved choice wins.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t='dark';}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme='dark';}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-primary text-text antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Preloader />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
