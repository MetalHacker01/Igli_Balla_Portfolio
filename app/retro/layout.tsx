import type { Metadata } from "next";
import { Press_Start_2P, VT323, Silkscreen } from "next/font/google";
import "./retro.css";

const pressStart = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-press-start",
  display: "swap",
});
const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vt323",
  display: "swap",
});
const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkscreen",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Igli Balla, Retro Mode",
  description:
    "Cyberpunk / pixel-art edition of the Igli Balla portfolio. Same work, different coat of paint.",
};

export default function RetroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`retro-scope min-h-screen ${pressStart.variable} ${vt323.variable} ${silkscreen.variable}`}
    >
      {children}
    </div>
  );
}
