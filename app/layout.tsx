import type { Metadata } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://igliballa.vercel.app"),
  title: {
    default: "Igli Balla — Graphic & 3D Designer",
    template: "%s — Igli Balla",
  },
  description:
    "Portfolio of Igli Balla: logos, brand systems, print, and 3D product work. Based in Nafpaktos, Greece.",
  openGraph: {
    title: "Igli Balla — Graphic & 3D Designer",
    description:
      "Junior graphic designer working across brand identity, print, and 3D mock-ups. Nafpaktos, Greece.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-paper text-ink font-sans">
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  );
}
