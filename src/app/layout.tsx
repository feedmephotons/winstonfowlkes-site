import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Winston Fowlkes | Consulting & Systems Architecture",
  description: "I architect digital systems that transform how businesses operate. Strategic consulting, custom software, and systems automation — helping companies modernize operations and build technology that works.",
  keywords: ["consulting", "systems architecture", "custom software", "automation", "web development", "AI integration", "Jacksonville FL", "digital transformation"],
  authors: [{ name: "Winston Fowlkes" }],
  creator: "Winston Fowlkes",
  openGraph: {
    title: "Winston Fowlkes | Consulting & Systems Architecture",
    description: "I architect digital systems that transform how businesses operate.",
    url: "https://winstonf.com",
    siteName: "Winston Fowlkes",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winston Fowlkes | Consulting & Systems Architecture",
    description: "I architect digital systems that transform how businesses operate.",
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
      <body className="antialiased bg-white text-foreground">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
