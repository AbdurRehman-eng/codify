import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
