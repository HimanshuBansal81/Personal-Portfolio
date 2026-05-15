import type { Metadata } from "next";
import "./globals.css";
import FloatingTechBackground from "@/components/FloatingTechBackground";
import Navbar from "@/components/Navbar";

const siteUrl = "https://himanshubansal.dev";
const siteTitle = "Himanshu Bansal | .NET Backend & Full Stack Developer";
const siteDescription =
  "Software Developer building backend-heavy full-stack systems with .NET, SQL, React, cloud deployment, and practical system design.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Himanshu Bansal",
  },
  description: siteDescription,
  applicationName: "Himanshu Bansal Portfolio",
  authors: [{ name: "Himanshu Bansal" }],
  creator: "Himanshu Bansal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Himanshu Bansal",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden bg-black text-white">
        <FloatingTechBackground />
        <Navbar />
        <main className="relative z-10 px-6 py-10 sm:px-8 lg:px-10">
          {children}
        </main>
      </body>
    </html>
  );
}
