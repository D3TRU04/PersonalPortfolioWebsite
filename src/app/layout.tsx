import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "my portfolio",
  description: "Personal portfolio website showcasing my projects, skills, and experiences as a Computer Science student at UT Austin.",
  keywords: ["Dan Truong", "Portfolio", "Software Developer", "UT Austin", "Computer Science"],
  authors: [{ name: "Dan Truong" }],
  openGraph: {
    title: "my portfolio",
    description: "Personal portfolio website showcasing my projects, skills, and experiences as a Computer Science student at UT Austin.",
    images: ["/WebsitePFP.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black text-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
