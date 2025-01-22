import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/ui/Footer";
import Navbar from "@/app/ui/navbar";
import { Sorts_Mill_Goudy } from 'next/font/google';
import { Tourney } from "next/font/google";
import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({
  weight: '400', 
  subsets: ['latin'],
});

const tourney = Tourney({
  weight: "400", 
  subsets: ["latin"],
});

const sortsMillGoudy = Sorts_Mill_Goudy({
  weight: '400',
  subsets: ['latin'],
});

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
