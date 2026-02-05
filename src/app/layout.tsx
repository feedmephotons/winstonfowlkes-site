import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Winston Fowlkes | Design & Consulting",
  description: "I design, build, and automate modern digital systems that actually scale. From cinematic visuals to AI-powered software — helping companies move faster, look better, and operate smarter.",
  keywords: ["digital systems", "web development", "video production", "AI integration", "consulting", "Jacksonville FL", "marketing", "branding"],
  authors: [{ name: "Winston Fowlkes" }],
  creator: "Winston Fowlkes",
  openGraph: {
    title: "Winston Fowlkes | Design & Consulting",
    description: "I design, build, and automate modern digital systems that actually scale.",
    url: "https://winstonfowlkes.com",
    siteName: "Winston Fowlkes",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winston Fowlkes | Design & Consulting",
    description: "I design, build, and automate modern digital systems that actually scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        {/* Noise Overlay */}
        <div className="noise-overlay" />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
