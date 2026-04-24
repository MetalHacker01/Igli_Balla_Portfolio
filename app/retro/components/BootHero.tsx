import Link from "next/link";
import { CaretRight, GameController } from "@phosphor-icons/react/dist/ssr";

const bootLines = [
  "> POWER ON ............................ OK",
  "> LOADING PORTFOLIO.EXE ............... OK",
  "> FETCHING BEHANCE INDEX .............. OK",
  "> RENDERING SPRITES ................... OK",
  "> READY.",
];

export default function BootHero() {
  return (
    <section className="relative hud-grid border-b-2 border-neon-primary/30 overflow-hidden">
      {/* top HUD strip */}
      <div className="border-b border-neon-secondary/30 bg-retro-panel/60 backdrop-blur-[1px]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 h-10 flex items-center justify-between font-silk text-[10px] uppercase">
          <div className="flex items-center gap-3 text-retro-muted">
            <span className="neon-secondary">SYS</span>
            <span>v1.0.2</span>
            <span className="hidden sm:inline">/</span>
            <span className="hidden sm:inline">GREECE, 2026</span>
          </div>
          <div className="flex items-center gap-4 text-retro-muted">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 bg-neon-accent shadow-[0_0_6px_#39ff14]" />
              ONLINE
            </span>
            <Link
              href="/"
              className="hidden md:inline-flex neon-secondary hover:neon-primary transition-colors"
            >
              [EDITORIAL MODE]
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Boot log */}
          <pre
            className="md:col-span-5 font-terminal text-[18px] md:text-[20px] text-neon-accent leading-[1.4] whitespace-pre-wrap"
            aria-label="Boot sequence"
          >
            {bootLines.join("\n")}
            <span className="cursor-blink">&nbsp;</span>
          </pre>

          {/* Title card */}
          <div className="md:col-span-7 md:pl-6">
            <div className="font-silk text-[11px] uppercase tracking-[0.3em] text-retro-muted mb-6">
              <span className="neon-secondary">PLAYER 1</span>
              <span className="mx-3">//</span>
              GRAPHIC &amp; 3D DESIGNER
            </div>

            <h1 className="font-pixel leading-[1.15] text-[clamp(2rem,6.5vw,5.25rem)]">
              <span className="neon-primary chromatic">IGLI</span>
              <br />
              <span className="neon-secondary chromatic">BALLA</span>
            </h1>

            <p className="mt-8 max-w-[46ch] font-terminal text-[22px] leading-snug text-retro-text">
              Junior graphic designer from Nafpaktos, Greece. Brand identity,
              print, and 3D product mock-ups. I grew up on pixel platformers
              and I still draw like I&rsquo;m trying to fit the idea into a
              32&times;32 tile.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a href="#stage-select" className="btn-pixel">
                <GameController size={14} weight="fill" />
                PRESS START
              </a>
              <a
                href="mailto:ballaigli9@gmail.com"
                className="font-silk text-[11px] uppercase neon-secondary hover:neon-primary transition-colors inline-flex items-center gap-1"
              >
                <CaretRight size={12} weight="bold" />
                EMAIL PLAYER
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Kinetic ticker */}
      <div
        className="border-y-2 border-neon-primary/60 bg-retro-panel/50 overflow-hidden"
        aria-hidden
      >
        <div className="flex whitespace-nowrap py-3 marquee-retro">
          {[
            "BRAND IDENTITY",
            "LOGO DESIGN",
            "PRINT",
            "EDITORIAL",
            "3D MOCK-UPS",
            "SOCIAL",
            "VECTOR ILLUSTRATION",
            "TYPOGRAPHY",
          ]
            .concat([
              "BRAND IDENTITY",
              "LOGO DESIGN",
              "PRINT",
              "EDITORIAL",
              "3D MOCK-UPS",
              "SOCIAL",
              "VECTOR ILLUSTRATION",
              "TYPOGRAPHY",
            ])
            .map((label, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-5 font-pixel text-[13px] md:text-[15px] neon-primary px-7"
              >
                {label}
                <span className="inline-block w-2 h-2 bg-neon-secondary shadow-[0_0_6px_#00ffff]" />
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
