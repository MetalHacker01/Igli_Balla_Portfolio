import Link from "next/link";
import { ArrowUpRight, Envelope } from "@phosphor-icons/react/dist/ssr";

const elsewhere = [
  { label: "BEHANCE",   href: "https://www.behance.net/igliballa" },
  { label: "INSTAGRAM", href: "https://instagram.com/" },
  { label: "DRIBBBLE",  href: "https://dribbble.com/" },
  { label: "LINKEDIN",  href: "https://linkedin.com/" },
];

export default function InsertCoin() {
  return (
    <footer className="border-t-2 border-neon-primary/60 bg-retro-void relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 pt-20 md:pt-28 pb-10">
        <p className="font-silk text-[11px] uppercase tracking-[0.3em] text-retro-muted mb-6">
          / PRESS START TO CONTINUE /
        </p>

        <div className="flex flex-col items-start gap-6">
          <h2 className="font-pixel text-[clamp(1.5rem,5vw,3.5rem)] leading-[1.25]">
            <span className="neon-hot chromatic">INSERT</span>{" "}
            <span className="neon-secondary chromatic">COIN.</span>
          </h2>

          <p className="font-terminal text-[22px] max-w-[52ch] text-retro-text leading-snug">
            Got a project? A weird idea? A shop that needs a logo? The inbox is
            open twenty-four seven. Email beats DM. Screenshots welcome.
          </p>

          <a
            href="mailto:ballaigli9@gmail.com"
            className="group inline-flex flex-wrap items-baseline gap-3 font-pixel text-[clamp(1.1rem,3.2vw,2rem)] neon-accent leading-[1.2] mt-2 break-all"
          >
            <Envelope size={22} weight="fill" className="relative top-1" />
            ballaigli9
            <span className="neon-primary">@</span>
            gmail.com
          </a>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-12 gap-8 font-silk text-[10px] uppercase tracking-[0.15em]">
          <div className="md:col-span-4">
            <div className="neon-primary mb-3">/ ELSEWHERE</div>
            <ul className="space-y-1.5">
              {elsewhere.map((e) => (
                <li key={e.label}>
                  <a
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-retro-text hover:neon-secondary transition-colors"
                  >
                    {e.label}
                    <ArrowUpRight size={11} weight="bold" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="neon-primary mb-3">/ BASE</div>
            <p className="text-retro-text normal-case tracking-normal font-terminal text-[17px] leading-snug">
              Nafpaktos, Greece.
              <br />
              GMT+2, open remote across the EU.
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="neon-primary mb-3">/ COLOPHON</div>
            <p className="text-retro-muted normal-case tracking-normal font-terminal text-[17px] leading-snug">
              Next.js. Tailwind. Press Start 2P and VT323 over a CRT scanline
              overlay. Sprites are Igli&rsquo;s own work,{" "}
              <a
                href="https://www.behance.net/igliballa"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-secondary hover:neon-primary transition-colors"
              >
                also on Behance
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t-2 border-neon-primary/30 flex flex-wrap items-center justify-between gap-3 font-silk text-[10px] uppercase tracking-[0.15em]">
          <span className="text-retro-muted">
            &copy; IGLI BALLA / 2026 / GAME OVER? NO, NEW GAME+.
          </span>
          <div className="flex items-center gap-5">
            <Link
              href="/"
              className="neon-secondary hover:neon-primary transition-colors inline-flex items-center gap-1.5"
            >
              [EDITORIAL MODE]
              <ArrowUpRight size={11} weight="bold" />
            </Link>
            <a
              href="#top"
              className="text-retro-muted hover:text-neon-accent transition-colors"
            >
              BACK TO BOOT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
