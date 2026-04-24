import { ArrowUpRight, ArrowUp } from "@phosphor-icons/react/dist/ssr";

const elsewhere = [
  { label: "Behance",   href: "https://www.behance.net/igliballa" },
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "Dribbble",  href: "https://dribbble.com/" },
  { label: "LinkedIn",  href: "https://linkedin.com/" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink text-paper border-t border-ink">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-paper/60 mb-8">
          04 / Say hello
        </p>

        <a
          href="mailto:ballaigli9@gmail.com"
          className="group inline-flex flex-wrap items-baseline gap-x-3 gap-y-0 font-display italic text-[clamp(2rem,8.5vw,6.5rem)] leading-[0.9] tracking-tightest text-paper"
        >
          <span>ballaigli9</span>
          <span className="not-italic text-accent">@</span>
          <span>gmail.com</span>
          <ArrowUpRight
            size={56}
            weight="light"
            className="relative -top-1 shrink-0 transition-transform duration-500 group-hover:rotate-45"
          />
        </a>

        <p className="mt-8 max-w-[46ch] text-base md:text-lg text-paper/75 leading-relaxed">
          Portfolio still filling in. Got a project? A weird idea? A shop
          that needs a logo? The inbox is open.
        </p>

        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-12 gap-8 text-sm">
          <div className="md:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-paper/45 mb-3">
              Elsewhere
            </div>
            <ul className="space-y-1.5">
              {elsewhere.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-paper/90 hover:text-accent transition-colors"
                  >
                    {item.label}
                    <ArrowUpRight size={12} weight="regular" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-paper/45 mb-3">
              Based in
            </div>
            <p className="text-paper/85">Nafpaktos, Greece</p>
            <p className="text-paper/60">GMT+2, open remote across the EU</p>
          </div>

          <div className="md:col-span-4 md:text-right">
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-paper/45 mb-3">
              Colophon
            </div>
            <p className="text-paper/75 leading-relaxed">
              Built with Next.js and Tailwind, hosted on Vercel. Type set in
              Fraunces and Geist. Project imagery is my own work, also on{" "}
              <a
                href="https://www.behance.net/igliballa"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-paper/30 underline-offset-2 hover:text-accent hover:decoration-accent transition-colors"
              >
                Behance
              </a>
              .
            </p>
          </div>
        </div>

        <div className="mt-16 pt-5 border-t border-paper/10 flex flex-wrap items-baseline justify-between gap-3 text-xs text-paper/55">
          <span>&copy; Igli Balla, 2026</span>
          <div className="flex items-center gap-5">
            <a
              href="/retro"
              className="group inline-flex items-center gap-1.5 uppercase tracking-[0.24em] text-paper/80 hover:text-accent transition-colors"
            >
              Prefer pixels?
              <ArrowUpRight size={12} weight="regular" />
            </a>
            <a
              href="#top"
              className="group inline-flex items-center gap-2 uppercase tracking-[0.24em] hover:text-paper transition-colors"
            >
              Back to top
              <ArrowUp
                size={12}
                weight="regular"
                className="transition-transform group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
