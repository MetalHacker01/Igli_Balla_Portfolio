const stats = [
  { label: "LOGO DESIGN",    value: 8 },
  { label: "BRAND IDENTITY", value: 7 },
  { label: "TYPOGRAPHY",     value: 7 },
  { label: "PRINT",          value: 7 },
  { label: "3D / BLENDER",   value: 5 },
  { label: "PHOTOSHOP",      value: 7 },
  { label: "ILLUSTRATOR",    value: 8 },
  { label: "HTML / CSS",     value: 4 },
];

const tools = [
  "ILLUSTRATOR",
  "PHOTOSHOP",
  "INDESIGN",
  "GIMP",
  "BLENDER",
  "DIMENSION",
  "FIGMA",
];

const languages = [
  { code: "AL", label: "ALBANIAN", level: "NATIVE" },
  { code: "GR", label: "GREEK",    level: "NATIVE" },
  { code: "EN", label: "ENGLISH",  level: "C1" },
];

function StatBar({ label, value }: { label: string; value: number }) {
  const full = Math.max(0, Math.min(10, value));
  return (
    <div className="flex items-center gap-3">
      <span className="font-silk text-[10px] uppercase tracking-[0.15em] text-retro-muted w-[140px] shrink-0">
        {label}
      </span>
      <div className="flex gap-[3px] flex-1">
        {Array.from({ length: 10 }).map((_, i) => {
          const on = i < full;
          const color =
            i < 4
              ? on
                ? "bg-neon-accent shadow-[0_0_6px_#39ff14]"
                : "bg-retro-border"
              : i < 7
                ? on
                  ? "bg-neon-amber shadow-[0_0_6px_#ffaa00]"
                  : "bg-retro-border"
                : on
                  ? "bg-neon-hot shadow-[0_0_6px_#ff1493]"
                  : "bg-retro-border";
          return (
            <span
              key={i}
              className={`h-3 flex-1 ${color}`}
              aria-hidden
            />
          );
        })}
      </div>
      <span className="font-pixel text-[10px] neon-secondary w-[26px] text-right shrink-0">
        {String(full).padStart(2, "0")}
      </span>
    </div>
  );
}

export default function CharStats() {
  return (
    <section className="border-t-2 border-neon-primary/30 py-20 md:py-28 bg-retro-void">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="mb-10 md:mb-14">
          <p className="font-silk text-[11px] uppercase tracking-[0.3em] text-retro-muted mb-3">
            / CHARACTER SHEET /
          </p>
          <h2 className="font-pixel neon-secondary text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.3]">
            PLAYER PROFILE.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          {/* Avatar card */}
          <div className="lg:col-span-4 relative">
            <div className="pixel-frame pixel-frame-mag corner-ticks bg-retro-panel p-5 md:p-6">
              <div className="relative aspect-square bg-retro-void overflow-hidden flex items-center justify-center sprite-tile">
                <div className="font-pixel neon-primary text-[72px] md:text-[96px] leading-none tracking-tight chromatic">
                  IB
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-silk text-[9px] uppercase text-retro-muted">
                  <span>LV.19</span>
                  <span className="neon-accent">HP 100/100</span>
                </div>
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-y-2 font-silk text-[10px] uppercase tracking-[0.15em]">
                <dt className="text-retro-muted">CLASS</dt>
                <dd className="neon-secondary">GRAPHIC DESIGNER</dd>
                <dt className="text-retro-muted">GUILD</dt>
                <dd className="neon-secondary">FREELANCE</dd>
                <dt className="text-retro-muted">HOME</dt>
                <dd className="neon-secondary">NAFPAKTOS, GR</dd>
                <dt className="text-retro-muted">DOB</dt>
                <dd className="neon-secondary">16.04.2007</dd>
              </dl>
            </div>
          </div>

          {/* Bio + stats */}
          <div className="lg:col-span-8 space-y-10">
            <p className="font-terminal text-[20px] md:text-[22px] leading-snug text-retro-text max-w-[56ch]">
              Junior designer trained at{" "}
              <span className="neon-primary">DOMINUSOFT</span> in Tirana, summer
              2025, wrapping up a technical high school diploma at the{" "}
              <span className="neon-primary">1st EPAL OF NAFPAKTOS</span> this
              year. Raised on pixel platformers, currently grinding XP in
              Blender and 2D animation loops.
            </p>

            <div>
              <h3 className="font-silk text-[11px] uppercase tracking-[0.3em] text-retro-muted mb-4">
                / STAT DISTRIBUTION
              </h3>
              <div className="space-y-2.5">
                {stats.map((s) => (
                  <StatBar key={s.label} label={s.label} value={s.value} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Inventory */}
              <div>
                <h3 className="font-silk text-[11px] uppercase tracking-[0.3em] text-retro-muted mb-4">
                  / INVENTORY, TOOLS
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {tools.map((t) => (
                    <div
                      key={t}
                      className="aspect-square border-2 border-neon-secondary/60 bg-retro-panel flex items-center justify-center text-center p-1 hover:border-neon-primary hover:shadow-[0_0_12px_rgba(255,0,255,0.4)] transition-all"
                      title={t}
                    >
                      <span className="font-silk text-[8.5px] leading-[1.1] uppercase tracking-[0.08em] text-retro-text">
                        {t}
                      </span>
                    </div>
                  ))}
                  <div className="aspect-square border-2 border-dashed border-retro-border bg-retro-panel/40" />
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="font-silk text-[11px] uppercase tracking-[0.3em] text-retro-muted mb-4">
                  / LANGUAGES
                </h3>
                <ul className="space-y-2">
                  {languages.map((l) => (
                    <li
                      key={l.code}
                      className="flex items-center gap-3 font-silk text-[11px] uppercase tracking-[0.1em]"
                    >
                      <span className="font-pixel text-[11px] neon-primary w-8">
                        {l.code}
                      </span>
                      <span className="flex-1 text-retro-text">{l.label}</span>
                      <span className="neon-accent">{l.level}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-2 border-neon-accent/60 bg-retro-panel p-3">
                  <div className="font-silk text-[9px] uppercase tracking-[0.2em] text-retro-muted mb-1">
                    QUEST, ACTIVE
                  </div>
                  <p className="font-terminal text-[17px] text-retro-text leading-snug">
                    Open to junior design roles, freelance commissions, and 2D
                    animation collabs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
