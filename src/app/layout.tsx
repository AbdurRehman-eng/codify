import type { Metadata } from "next";
import "./globals.css";
import Footer from "./ui/Footer";
import Navbar from "./ui/navbar";
import { Sorts_Mill_Goudy } from 'next/font/google';
import { Tourney } from "next/font/google";
import { Source_Code_Pro } from 'next/font/google';
import { Sora } from 'next/font/google';
import { Inter } from 'next/font/google'; 
import { Tektur } from 'next/font/google';

const tektur = Tektur({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const inter = Inter({
  weight: "400",  // Customize the weight as needed
  subsets: ["latin"],
});

const sora = Sora({
  weight: "400",  // You can customize the weight as needed
  subsets: ["latin"],
});

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
