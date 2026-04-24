import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIAssistant from "@/components/AIAssistant";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vantage Travels | Expertos en Bariloche y Patagonia",
  description: "Tu agencia de confianza especializada en San Carlos de Bariloche y sus alrededores. Experiencias únicas, ski, aventura y lujo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased bg-white selection:bg-primary/30">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <AIAssistant />
      </body>
    </html>
  );
}
