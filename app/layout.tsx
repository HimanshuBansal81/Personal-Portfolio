import "./globals.css";
import FloatingTechBackground from "@/components/FloatingTechBackground";
import Navbar from "@/components/Navbar";

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
