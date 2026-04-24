import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

type Thumb = { src: string; alt: string };

type Project = {
  id: string;
  kicker: string;
  title: string;
  blurb: string;
  tags: string[];
  year: string;
  href: string | null;
  piecesLabel: string;
  hero: string;
  heroAlt: string;
  heroRatio: string;
  heroObjectFit: "cover" | "contain";
  heroBg?: string;
  thumbs: Thumb[];
  thumbObjectFit: "cover" | "contain";
  thumbBg?: string;
};

const projects: Project[] = [
  {
    id: "te-lako",
    kicker: "Family restaurant, Albania",
    title: "Te Lako",
    blurb:
      "Graphics for my grandmother's restaurant in Albania. Logo, menus, signage, and social posts. I wanted the brand to feel hand-made and warm, so the system leans on a burger badge, cream backgrounds, and a single ribbon of red.",
    tags: ["Brand", "Logo", "Print", "Social"],
    year: "2025",
    href: "https://www.behance.net/gallery/248142499/TE-LAKO",
    piecesLabel: "13 pieces in the full set",
    hero: "/work/te-lako/09.png",
    heroAlt:
      "Te Lako brand poster: burger badge on a cream field with a deep-red frame.",
    heroRatio: "aspect-[4/5]",
    heroObjectFit: "cover",
    thumbs: [
      { src: "/work/te-lako/10.png", alt: "Te Lako menu layout on cream." },
      { src: "/work/te-lako/03.png", alt: "Te Lako burger badge logo." },
      { src: "/work/te-lako/07.png", alt: "Te Lako warm-toned menu grid." },
      { src: "/work/te-lako/02.png", alt: "Te Lako grilled food banner." },
    ],
    thumbObjectFit: "cover",
  },
  {
    id: "cloudpage-maestro",
    kicker: "Chrome extension, Salesforce Marketing Cloud",
    title: "CloudPage Maestro",
    blurb:
      "Product mark for a Chrome extension that Salesforce Marketing Cloud teams use to manage their CloudPages. The mark is a circuit monogram sitting inside a circle, drawn to read well at favicon size and still hold up as a large hero.",
    tags: ["Logo", "Product", "Identity"],
    year: "2025",
    href: null,
    piecesLabel: "Final logo mark, delivered to client",
    hero: "/work/cloudpage-maestro/hero.png",
    heroAlt:
      "CloudPage Maestro final logo mark: white circuit illustration inside a circular frame.",
    heroRatio: "aspect-square",
    heroObjectFit: "contain",
    heroBg: "bg-ink",
    thumbs: [],
    thumbObjectFit: "cover",
  },
  {
    id: "threed",
    kicker: "Blender studies, product viz",
    title: "3D studies",
    blurb:
      "Blender work split between product mock-ups and character practice. The rose-gold card mock-up is the direction I'm leaning on for brand projects; the rest are rendering and material exercises.",
    tags: ["3D", "Blender", "Mock-up"],
    year: "2025",
    href: "https://www.behance.net/gallery/248179561/3D-projects",
    piecesLabel: "6 pieces in the full set",
    hero: "/work/threed/02.png",
    heroAlt: "Rose-gold business card mock-up rendered in Blender.",
    heroRatio: "aspect-[4/3]",
    heroObjectFit: "cover",
    thumbs: [
      { src: "/work/threed/03.png", alt: "Figures climbing a stone path." },
      { src: "/work/threed/01.png", alt: "Energy drink cans, product line-up." },
      { src: "/work/threed/04.png", alt: "Character render study." },
      { src: "/work/threed/06.png", alt: "Stylized character scene." },
    ],
    thumbObjectFit: "cover",
  },
  {
    id: "illustrator",
    kicker: "Brief-based vector practice",
    title: "Studies in Illustrator",
    blurb:
      "A rolling set of vector pieces, most started from prompts on the Get Unique Design Briefs platform. Used as a way to push pen-tool fluency, type pairing, and quick brief interpretation.",
    tags: ["Vector", "Logo", "Brief-based"],
    year: "2024 to 2025",
    href: "https://www.behance.net/gallery/248164411/Adobe-illustrator-projects",
    piecesLabel: "16 pieces in the full set",
    hero: "/work/illustrator/08.png",
    heroAlt:
      "Jumping Vintage logo: green record illustration on a cream field.",
    heroRatio: "aspect-square",
    heroObjectFit: "cover",
    thumbs: [
      {
        src: "/work/illustrator/02.png",
        alt: "Green Lionheart mascot emblem.",
      },
      { src: "/work/illustrator/03.png", alt: "Ho's Bunch bottle emblem." },
      { src: "/work/illustrator/04.png", alt: "Center Doze indie games seal." },
      { src: "/work/illustrator/05.png", alt: "Vanguard metallic wordmark." },
    ],
    thumbObjectFit: "cover",
  },
  {
    id: "photoshop",
    kicker: "Composites, posters, studies",
    title: "Composition in Photoshop",
    blurb:
      "Photoshop work spanning poster grids, photo compositing, and colour studies. A mix of tutorial reworks and my own compositions, covering film, food, and character posters.",
    tags: ["Poster", "Composite", "Photo"],
    year: "2024 to 2025",
    href: "https://www.behance.net/gallery/248168941/Photoshop-projects",
    piecesLabel: "39 pieces in the full set",
    hero: "/work/photoshop/03.png",
    heroAlt:
      "Ramen poster: warm noodle bowl on a cream background with a rising-sun pattern.",
    heroRatio: "aspect-[4/5]",
    heroObjectFit: "cover",
    thumbs: [
      {
        src: "/work/photoshop/07.png",
        alt: "Camera lens framing a golden railway.",
      },
      { src: "/work/photoshop/01.png", alt: "Surreal figure in painted sky." },
      { src: "/work/photoshop/08.png", alt: "Friday the 13th poster." },
      {
        src: "/work/photoshop/02.png",
        alt: "'I am not human' halftone portrait.",
      },
    ],
    thumbObjectFit: "cover",
  },
];

function ProjectBlock({ p, index }: { p: Project; index: number }) {
  const heroOrder = index % 2 === 0 ? "md:order-1" : "md:order-2";
  const metaOrder = index % 2 === 0 ? "md:order-2" : "md:order-1";
  const hasThumbs = p.thumbs.length > 0;

  const HeroInner = (
    <div
      className={`${p.heroRatio} ${p.heroBg ?? "bg-paper-2"} relative w-full overflow-hidden`}
    >
      <Image
        src={p.hero}
        alt={p.heroAlt}
        fill
        sizes="(min-width: 768px) 58vw, 100vw"
        priority={index === 0}
        className={`${
          p.heroObjectFit === "contain" ? "object-contain p-6 md:p-10" : "object-cover"
        } transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]`}
      />
      <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-[0.22em] text-paper bg-ink/70 backdrop-blur-sm px-2 py-1 rounded-full">
        {String(index + 1).padStart(2, "0")} / {p.href ? "Behance" : "Case"}
      </div>
    </div>
  );

  return (
    <article
      className="rise grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start"
      style={{ "--i": index } as React.CSSProperties}
    >
      {p.href ? (
        <a
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${heroOrder} md:col-span-7 group block`}
          aria-label={`Open ${p.title} on Behance`}
        >
          {HeroInner}
        </a>
      ) : (
        <div className={`${heroOrder} md:col-span-7 group`}>{HeroInner}</div>
      )}

      <div className={`${metaOrder} md:col-span-5 md:pt-2 flex flex-col gap-5`}>
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted">
            {p.kicker}
          </span>
          <span className="font-mono text-[10px] text-muted shrink-0">
            {p.year}
          </span>
        </div>

        <h3 className="font-display text-[clamp(2rem,4.4vw,3.25rem)] leading-[0.96] tracking-tight">
          {p.title}
        </h3>

        <p className="max-w-[52ch] text-base md:text-[17px] text-ink-2 leading-relaxed">
          {p.blurb}
        </p>

        <ul className="flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <li
              key={t}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted border border-rule rounded-full px-2.5 py-0.5"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="pt-2 mt-auto flex items-baseline justify-between gap-4 border-t border-rule/70">
          <span className="pt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            {p.piecesLabel}
          </span>
          {p.href ? (
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group pt-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.24em] text-ink hover:text-accent transition-colors whitespace-nowrap"
            >
              View on Behance
              <ArrowUpRight
                size={13}
                weight="regular"
                className="transition-transform group-hover:rotate-45"
              />
            </a>
          ) : (
            <span className="pt-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.24em] text-accent whitespace-nowrap">
              Client work
            </span>
          )}
        </div>
      </div>

      {hasThumbs && (
        <div
          className="md:col-span-12 grid gap-2.5 md:gap-3.5 pt-2"
          style={{
            gridTemplateColumns: `repeat(${p.thumbs.length}, minmax(0, 1fr))`,
          }}
        >
          {p.thumbs.map((t, i) => {
            const TileInner = (
              <div
                className={`${p.thumbBg ?? "bg-paper-2"} relative aspect-square overflow-hidden`}
              >
                <Image
                  src={t.src}
                  alt={t.alt}
                  fill
                  sizes="(min-width: 768px) 18vw, 25vw"
                  className={`${
                    p.thumbObjectFit === "contain"
                      ? "object-contain p-4"
                      : "object-cover"
                  } transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]`}
                />
              </div>
            );
            return p.href ? (
              <a
                key={t.src}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                aria-label={`See more from ${p.title}, image ${i + 1}`}
              >
                {TileInner}
              </a>
            ) : (
              <div key={t.src} className="group">
                {TileInner}
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-t border-rule">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-28">
        <header className="grid md:grid-cols-12 gap-6 mb-14 md:mb-20">
          <div className="md:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted mb-4">
              01 / Selected work
            </p>
            <h2 className="font-display text-[clamp(2.25rem,6vw,5rem)] leading-[0.94] tracking-tightest">
              Two client projects,
              <br />
              <span className="italic text-accent">
                three rolling practice sets.
              </span>
            </h2>
          </div>
          <p className="md:col-span-4 md:pt-3 max-w-[34ch] text-sm md:text-base text-ink-2 leading-relaxed">
            Te Lako and CloudPage Maestro are live client work. The 3D,
            Illustrator, and Photoshop sets are ongoing practice pulled
            straight from my Behance.
          </p>
        </header>

        <div className="space-y-24 md:space-y-32">
          {projects.map((p, i) => (
            <ProjectBlock key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
