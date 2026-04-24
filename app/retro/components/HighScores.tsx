type Entry = {
  name: string;
  studio: string;
  style: string;
  score: number;
};

const games: Entry[] = [
  { name: "HOLLOW KNIGHT",       studio: "TEAM CHERRY",       style: "2D HAND-DRAWN",    score: 999999 },
  { name: "DEAD CELLS",          studio: "MOTION TWIN",       style: "PIXEL ROGUE-LITE", score: 874210 },
  { name: "CELESTE",             studio: "MADDY MAKES GAMES", style: "PIXEL PLATFORMER", score: 812040 },
  { name: "CUPHEAD",             studio: "STUDIO MDHR",       style: "RUBBER-HOSE ANIM", score: 776500 },
  { name: "HYPER LIGHT DRIFTER", studio: "HEART MACHINE",     style: "PIXEL ART",        score: 712805 },
  { name: "GRIS",                studio: "NOMADA STUDIO",     style: "HAND-PAINTED 2D",  score: 689040 },
  { name: "KATANA ZERO",         studio: "ASKIISOFT",         style: "NEON PIXEL",       score: 644921 },
  { name: "TUNIC",               studio: "FINJI",             style: "ISOMETRIC",        score: 601330 },
];

const influences = [
  { name: "WOLFWALKERS",            meta: "CARTOON SALOON" },
  { name: "INTO THE SPIDER-VERSE",  meta: "SONY ANIMATION" },
  { name: "ARCANE",                 meta: "FORTICHE STUDIO" },
  { name: "MANVSMACHINE REELS",     meta: "MOTION STUDIO" },
];

const designers = [
  { name: "PAULA SCHER",    meta: "PENTAGRAM" },
  { name: "KELLI ANDERSON", meta: "PAPER ENGINEER" },
  { name: "KOTO",           meta: "BRAND STUDIO" },
  { name: "DAN HOLLICK",    meta: "QUILL" },
];

function formatScore(n: number) {
  return n.toString().padStart(7, "0");
}

export default function HighScores() {
  return (
    <section className="border-t-2 border-neon-accent/30 py-20 md:py-28 bg-retro-panel/40">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
          {/* High scores table */}
          <div className="lg:col-span-8">
            <p className="font-silk text-[11px] uppercase tracking-[0.3em] text-retro-muted mb-3">
              / LEADERBOARD /
            </p>
            <h2 className="font-pixel neon-accent text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.3] mb-2">
              HIGH SCORES
            </h2>
            <p className="font-terminal text-[18px] text-retro-muted mb-8">
              Games I keep reloading for the art. Pixel over polygon, 2D over 3D.
            </p>

            <div className="border-2 border-neon-accent/60 bg-retro-void">
              {/* table header */}
              <div className="grid grid-cols-[44px_1fr_auto] md:grid-cols-[60px_1fr_1fr_auto] gap-3 md:gap-6 px-3 md:px-5 py-3 border-b-2 border-neon-accent/40 bg-retro-panel font-silk text-[10px] uppercase tracking-[0.15em] text-retro-muted">
                <span>RK</span>
                <span>TITLE</span>
                <span className="hidden md:inline">STYLE / STUDIO</span>
                <span className="text-right neon-accent">SCORE</span>
              </div>

              <ol>
                {games.map((g, i) => (
                  <li
                    key={g.name}
                    className="grid grid-cols-[44px_1fr_auto] md:grid-cols-[60px_1fr_1fr_auto] gap-3 md:gap-6 px-3 md:px-5 py-3 items-center border-b border-retro-border last:border-b-0 hover:bg-retro-hover/40 transition-colors"
                  >
                    <span className="font-pixel text-[11px] neon-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-pixel text-[12px] leading-[1.4] text-retro-text">
                        {g.name}
                      </div>
                      <div className="md:hidden mt-1 font-silk text-[9px] uppercase tracking-[0.15em] text-retro-muted">
                        {g.studio} / {g.style}
                      </div>
                    </div>
                    <div className="hidden md:block font-silk text-[10px] uppercase tracking-[0.15em] text-retro-muted">
                      <div className="neon-secondary">{g.style}</div>
                      <div>{g.studio}</div>
                    </div>
                    <span className="font-pixel text-[11px] md:text-[13px] neon-accent text-right">
                      {formatScore(g.score)}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Influence panels */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <p className="font-silk text-[11px] uppercase tracking-[0.3em] text-retro-muted mb-3">
                / INFLUENCE LOG
              </p>
              <h3 className="font-pixel neon-primary text-[16px] md:text-[18px] leading-[1.4] mb-4">
                ANIMATION
              </h3>
              <ul className="border-t border-neon-primary/30 divide-y divide-retro-border">
                {influences.map((it, i) => (
                  <li
                    key={it.name}
                    className="py-3 flex items-baseline justify-between gap-4"
                  >
                    <div>
                      <div className="font-pixel text-[11px] leading-[1.4] text-retro-text">
                        {it.name}
                      </div>
                      <div className="mt-1 font-silk text-[9px] uppercase tracking-[0.15em] text-retro-muted">
                        {it.meta}
                      </div>
                    </div>
                    <span className="font-pixel text-[10px] neon-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-pixel neon-secondary text-[16px] md:text-[18px] leading-[1.4] mb-4">
                DESIGN
              </h3>
              <ul className="border-t border-neon-secondary/30 divide-y divide-retro-border">
                {designers.map((it, i) => (
                  <li
                    key={it.name}
                    className="py-3 flex items-baseline justify-between gap-4"
                  >
                    <div>
                      <div className="font-pixel text-[11px] leading-[1.4] text-retro-text">
                        {it.name}
                      </div>
                      <div className="mt-1 font-silk text-[9px] uppercase tracking-[0.15em] text-retro-muted">
                        {it.meta}
                      </div>
                    </div>
                    <span className="font-pixel text-[10px] neon-secondary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
