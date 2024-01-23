import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Your favorite anime, all in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-[#000002] font-sans antialiased",
          fontSans.variable
        )}
      >
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
