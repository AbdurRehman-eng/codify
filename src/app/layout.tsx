import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/ui/Footer";
import Navbar from "@/app/ui/navbar";

export const metadata: Metadata = {
  title: "Codify",
  description: "A platform for coding competitions where developers can solve challenges, participate in contests, and improve their programming skills with real-time evaluations and leaderboards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
