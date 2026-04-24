import Image from "next/image";
import { ArrowDown } from "@phosphor-icons/react/dist/ssr";
import Marquee from "./Marquee";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-14 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-end">
          <div className="md:col-span-8 md:col-start-1">
            <p
              className="rise flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted mb-8 md:mb-12"
              style={{ "--i": 0 } as React.CSSProperties}
            >
              <span className="inline-block w-6 h-px bg-accent" />
              Graphic &amp; 3D designer, Nafpaktos, Greece
              <span className="hidden sm:inline-flex items-center gap-1.5 ml-2">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage pulse-soft" />
                Open to work
              </span>
            </p>

            <h1
              className="rise font-display font-normal text-[clamp(3.25rem,11.5vw,10rem)] leading-[0.88] tracking-tightest text-ink"
              style={{ "--i": 1 } as React.CSSProperties}
            >
              Igli
              <br />
              <span className="italic text-accent">Balla.</span>
            </h1>

            <p
              className="rise mt-10 md:mt-12 max-w-[48ch] text-lg md:text-2xl leading-[1.35] text-ink-2"
              style={{ "--i": 2 } as React.CSSProperties}
            >
              I build brand identities, print systems, and 3D product work.
              Recently: a fast-food shop in Albania and a product logo used
              inside Salesforce Marketing Cloud.
            </p>
          </div>

          <div
            className="rise md:col-span-4 md:col-start-9 md:pl-4"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            <figure className="relative aspect-[4/5] overflow-hidden bg-paper-2">
              <Image
                src="/work/te-lako/10.png"
                alt="Te Lako menu layout: warm cream background with typographic menu sections."
                fill
                sizes="(min-width: 768px) 28vw, 100vw"
                priority
                className="object-cover"
              />
              <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-2">
                <span>From Te Lako, 2025</span>
                <span>01</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-16 md:mt-24 flex items-end justify-between gap-6 border-t border-rule pt-5">
          <div className="text-[11px] uppercase tracking-[0.28em] text-muted font-mono">
            Selected work, 2024 to 2025
          </div>
          <a
            href="#work"
            className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-ink"
          >
            Scroll to projects
            <ArrowDown
              size={16}
              weight="regular"
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
        </div>
      </div>

      <Marquee />
    </section>
  );
}
