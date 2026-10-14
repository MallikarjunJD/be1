import type { Metadata, Viewport } from "next";
import {
  Caveat,
  Figtree,
  Fraunces,
  JetBrains_Mono,
  Newsreader,
} from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";

const sans = Figtree({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-serif",
  display: "swap",
});
const letter = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-letter",
  display: "swap",
});
const hand = Caveat({ subsets: ["latin"], variable: "--font-hand", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F6F4FB",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${serif.variable} ${letter.variable} ${hand.variable} ${mono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
