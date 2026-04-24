import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-paper/75 backdrop-blur-md border-b border-rule/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-baseline gap-3 leading-none"
          aria-label="Igli Balla, home"
        >
          <span className="font-display text-2xl italic tracking-tightest">
            Igli&nbsp;Balla
          </span>
          <span className="hidden sm:inline font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            / graphic &amp; 3D
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.22em] text-muted">
          <a href="#work" className="hover:text-ink transition-colors">
            Work
          </a>
          <a href="#about" className="hover:text-ink transition-colors">
            About
          </a>
          <a href="#off" className="hover:text-ink transition-colors">
            Off the clock
          </a>
          <a
            href="mailto:ballaigli9@gmail.com"
            className="group inline-flex items-center gap-1.5 text-ink hover:text-accent transition-colors"
          >
            Contact
            <ArrowUpRight
              size={13}
              weight="regular"
              className="transition-transform group-hover:rotate-45"
            />
          </a>
        </nav>

        <a
          href="mailto:ballaigli9@gmail.com"
          className="md:hidden text-[11px] uppercase tracking-[0.22em] text-ink"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
