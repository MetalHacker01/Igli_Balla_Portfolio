import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

type Stage = {
  id: string;
  label: string;
  title: string;
  year: string;
  world: string;
  status: "CLEARED" | "ONGOING";
  rank: string;
  brief: string;
  tags: string[];
  hero: string;
  heroAlt: string;
  heroFit: "cover" | "contain";
  heroBg?: string;
  href: string | null;
  frame: "cyan" | "mag" | "green";
};

const stages: Stage[] = [
  {
    id: "te-lako",
    label: "STAGE 01",
    title: "TE LAKO",
    year: "2025",
    world: "FIER, ALBANIA",
    status: "CLEARED",
    rank: "CLIENT",
    brief:
      "Full brand identity for a family fast-food shop. Logo, menus, signage, print and social.",
    tags: ["BRAND", "LOGO", "PRINT", "SOCIAL"],
    hero: "/work/te-lako/09.png",
    heroAlt: "Te Lako brand poster with burger badge on cream field.",
    heroFit: "cover",
    href: "https://www.behance.net/gallery/248142499/TE-LAKO",
    frame: "mag",
  },
  {
    id: "cloudpage-maestro",
    label: "STAGE 02",
    title: "CLOUDPAGE MAESTRO",
    year: "2025",
    world: "SALESFORCE MARKETING CLOUD",
    status: "CLEARED",
    rank: "CLIENT",
    brief:
      "Product logo for a Chrome extension used by Salesforce Marketing Cloud teams.",
    tags: ["LOGO", "PRODUCT", "IDENTITY"],
    hero: "/work/cloudpage-maestro/hero.png",
    heroAlt: "CloudPage Maestro circuit monogram mark.",
    heroFit: "contain",
    heroBg: "bg-retro-void",
    href: null,
    frame: "cyan",
  },
  {
    id: "threed",
    label: "STAGE 03",
    title: "3D STUDIES",
    year: "2025",
    world: "BLENDER / DIMENSION",
    status: "ONGOING",
    rank: "PRACTICE",
    brief:
      "Product mock-ups, character renders, and lighting studies. Rose-gold mock-up is the direction for brand work.",
    tags: ["3D", "BLENDER", "MOCK-UP"],
    hero: "/work/threed/02.png",
    heroAlt: "Rose-gold business card rendered in Blender.",
    heroFit: "cover",
    href: "https://www.behance.net/gallery/248179561/3D-projects",
    frame: "green",
  },
  {
    id: "illustrator",
    label: "STAGE 04",
    title: "VECTOR STUDIES",
    year: "2024 - 2025",
    world: "ILLUSTRATOR / BRIEFS",
    status: "ONGOING",
    rank: "PRACTICE",
    brief:
      "Rolling vector set, mostly from Get Unique Design Briefs prompts. Pen-tool fluency and type pairing drills.",
    tags: ["VECTOR", "LOGO", "BRIEFS"],
    hero: "/work/illustrator/08.png",
    heroAlt: "Jumping Vintage logo on cream field.",
    heroFit: "cover",
    href: "https://www.behance.net/gallery/248164411/Adobe-illustrator-projects",
    frame: "mag",
  },
  {
    id: "photoshop",
    label: "STAGE 05",
    title: "RASTER COMPOSITES",
    year: "2024 - 2025",
    world: "PHOTOSHOP",
    status: "ONGOING",
    rank: "PRACTICE",
    brief:
      "Posters, photo composites, colour studies. Film, food, and character covers.",
    tags: ["POSTER", "COMPOSITE", "PHOTO"],
    hero: "/work/photoshop/03.png",
    heroAlt: "Ramen poster on cream background.",
    heroFit: "cover",
    href: "https://www.behance.net/gallery/248168941/Photoshop-projects",
    frame: "cyan",
  },
];

const frameRing: Record<Stage["frame"], string> = {
  cyan: "shadow-[0_0_0_2px_#0a0a0a,0_0_0_4px_#00ffff,0_0_25px_rgba(0,255,255,0.35)]",
  mag: "shadow-[0_0_0_2px_#0a0a0a,0_0_0_4px_#ff00ff,0_0_25px_rgba(255,0,255,0.35)]",
  green:
    "shadow-[0_0_0_2px_#0a0a0a,0_0_0_4px_#39ff14,0_0_25px_rgba(57,255,20,0.3)]",
};

const frameText: Record<Stage["frame"], string> = {
  cyan: "neon-secondary",
  mag: "neon-primary",
  green: "neon-accent",
};

function StageCard({ stage }: { stage: Stage }) {
  const rail = (
    <>
      <div className="sprite-tile pixel-img relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={stage.hero}
          alt={stage.heroAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`${stage.heroFit === "contain" ? "object-contain p-6" : "object-cover"} ${stage.heroBg ?? ""}`}
        />
        {/* corner HUD */}
        <div className="absolute top-2 left-2 font-pixel text-[10px] neon-secondary bg-retro-void/80 px-2 py-1">
          {stage.label}
        </div>
        <div
          className={`absolute top-2 right-2 font-pixel text-[10px] bg-retro-void/80 px-2 py-1 ${
            stage.status === "CLEARED" ? "neon-accent" : "neon-hot"
          }`}
        >
          {stage.status}
        </div>
      </div>

      <div className="p-4 md:p-5 border-t-2 border-retro-border bg-retro-panel">
        <div className="flex items-baseline justify-between gap-3 font-silk text-[10px] uppercase mb-3">
          <span className="text-retro-muted">{stage.world}</span>
          <span className={frameText[stage.frame]}>{stage.year}</span>
        </div>

        <h3 className={`font-pixel text-[15px] leading-[1.4] ${frameText[stage.frame]}`}>
          {stage.title}
        </h3>

        <p className="mt-3 font-terminal text-[17px] leading-snug text-retro-text">
          {stage.brief}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {stage.tags.map((t) => (
            <li
              key={t}
              className="font-silk text-[9px] uppercase tracking-[0.15em] text-retro-muted border border-retro-border px-2 py-0.5"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-5 pt-3 border-t border-retro-border flex items-center justify-between font-silk text-[10px] uppercase">
          <span className={frameText[stage.frame]}>RANK, {stage.rank}</span>
          {stage.href ? (
            <span className="inline-flex items-center gap-1.5 neon-secondary">
              OPEN <ArrowUpRight size={11} weight="bold" />
            </span>
          ) : (
            <span className="neon-accent">DELIVERED</span>
          )}
        </div>
      </div>
    </>
  );

  const containerCls = `block relative ${frameRing[stage.frame]} transition-transform duration-100 hover:-translate-y-[2px] focus-visible:-translate-y-[2px]`;

  return stage.href ? (
    <a
      href={stage.href}
      target="_blank"
      rel="noopener noreferrer"
      className={containerCls}
      aria-label={`${stage.title} on Behance`}
    >
      {rail}
    </a>
  ) : (
    <div className={containerCls}>{rail}</div>
  );
}

export default function StageSelect() {
  return (
    <section id="stage-select" className="py-20 md:py-28 hud-grid">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="mb-10 md:mb-14 flex items-baseline justify-between gap-6 flex-wrap">
          <div>
            <p className="font-silk text-[11px] uppercase tracking-[0.3em] text-retro-muted mb-3">
              / SELECT A STAGE /
            </p>
            <h2 className="font-pixel neon-primary text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.3]">
              FIVE STAGES
              <br />
              <span className="neon-secondary">TWO CLIENT, THREE PRACTICE</span>
            </h2>
          </div>
          <p className="font-terminal text-[18px] max-w-[32ch] text-retro-muted">
            USE CURSOR TO HIGHLIGHT. OPEN ON BEHANCE FOR THE FULL SPRITE SHEET.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {stages.map((s) => (
            <StageCard key={s.id} stage={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
