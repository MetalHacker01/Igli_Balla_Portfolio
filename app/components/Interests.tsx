type Entry = { name: string; meta: string };

const games: Entry[] = [
  { name: "Hollow Knight",      meta: "Team Cherry, 2D hand-drawn" },
  { name: "Dead Cells",         meta: "Motion Twin, pixel rogue-lite" },
  { name: "Celeste",            meta: "Maddy Makes Games, pixel platformer" },
  { name: "Cuphead",            meta: "Studio MDHR, rubber-hose animation" },
  { name: "Hyper Light Drifter",meta: "Heart Machine, pixel art" },
  { name: "GRIS",               meta: "Nomada Studio, hand-painted 2D" },
  { name: "Katana Zero",        meta: "Askiisoft, neon pixel" },
  { name: "Tunic",              meta: "Finji, isometric adventure" },
];

const animation: Entry[] = [
  { name: "Wolfwalkers",           meta: "Cartoon Saloon" },
  { name: "Into the Spider-Verse", meta: "Sony Pictures Animation" },
  { name: "Arcane",                meta: "Fortiche Studio" },
  { name: "ManvsMachine reels",    meta: "Motion studio, London" },
];

const designers: Entry[] = [
  { name: "Paula Scher",    meta: "Pentagram" },
  { name: "Kelli Anderson", meta: "Paper engineer" },
  { name: "Koto",           meta: "Brand studio" },
  { name: "Dan Hollick",    meta: "Quill, typography" },
];

function LoveList({
  label,
  items,
}: {
  label: string;
  items: Entry[];
}) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted mb-4">
        {label}
      </div>
      <ul className="border-t border-rule/70 divide-y divide-rule/60">
        {items.map((it, i) => (
          <li
            key={it.name}
            className="py-3.5 flex items-baseline justify-between gap-5"
          >
            <div>
              <div className="font-display text-xl md:text-2xl leading-none tracking-tight">
                {it.name}
              </div>
              <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                {it.meta}
              </div>
            </div>
            <span className="font-mono text-[10px] text-muted shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Interests() {
  return (
    <section id="off" className="border-t border-rule">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-28">
        <header className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12 md:mb-16">
          <div className="md:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted mb-4">
              03 / Off the clock
            </p>
            <h2 className="font-display text-[clamp(2.25rem,6vw,4.75rem)] leading-[0.95] tracking-tightest">
              The stuff I keep <br />
              <span className="italic">coming back to.</span>
            </h2>
          </div>
          <p className="md:col-span-4 md:pt-3 max-w-[32ch] text-sm md:text-base text-ink-2 leading-relaxed">
            Most of what I make gets filtered through these. Games for
            world-building, animation for timing, graphic designers for
            restraint.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-7">
            <LoveList label="Games I replay" items={games} />
          </div>
          <div className="md:col-span-5 space-y-10">
            <LoveList label="Animation I study" items={animation} />
            <LoveList label="Designers I read" items={designers} />
          </div>
        </div>
      </div>
    </section>
  );
}
