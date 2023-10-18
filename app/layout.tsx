import type { Metadata } from "next";
import "./globals.css";

import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const logger = localFont({
  src: "../fonts/logger.woff2",
  display: "swap",
  variable: "--font-logger",
});

const burnstown_dam = localFont({
  src: "../fonts/burnstown_dam.woff2",
  display: "swap",
  variable: "--font-burnstown-dam",
});

const driftwood = localFont({
  src: "../fonts/driftwood.woff2",
  display: "swap",
  variable: "--font-driftwood",
});

export const metadata: Metadata = {
  title: "Konoha",
  description: "Base description here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${logger.variable} ${burnstown_dam.variable} ${driftwood.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
