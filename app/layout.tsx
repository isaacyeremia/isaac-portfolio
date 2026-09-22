import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isaac Yeremia Nugroho | Web Developer",

  description:
    "Portfolio of Isaac Yeremia Nugroho, Computer Science graduate and Web Developer from Indonesia.",

  keywords: [
    "Isaac Yeremia Nugroho",
    "Web Developer",
    "Frontend Developer",
    "Next.js Developer",
    "Laravel Developer",
    "Computer Science",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}