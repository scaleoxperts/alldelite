import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alldelite - Industrial Energy Solutions",
  description:
    "A Trusted Leader in Sustainable Heating & Renewable Energy Solutions for commercial buildings, hospitality and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} font-body bg-background-light dark:bg-background-dark text-gray-900 transition-colors duration-200 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
