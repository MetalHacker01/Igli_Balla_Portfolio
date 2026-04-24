import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

function Spec({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted mb-3">
        {label}
      </div>
      <ul className="divide-y divide-rule/70 border-y border-rule/70">
        {items.map((item) => (
          <li
            key={item}
            className="py-2.5 flex items-baseline justify-between text-sm"
          >
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="border-t border-rule bg-paper-2/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-7 md:pr-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted mb-4">
              02 / About
            </p>
            <h2 className="font-display text-[clamp(2.25rem,6vw,4.75rem)] leading-[0.95] tracking-tightest mb-8 md:mb-10">
              Young, based in Greece, <br />
              <span className="italic">trained in Albania.</span>
            </h2>

            <div className="space-y-5 text-base md:text-lg text-ink-2 leading-relaxed max-w-[62ch]">
              <p>
                I am Igli, a junior graphic designer from Nafpaktos on the
                Greek mainland. I finished a professional graphic design
                diploma at{" "}
                <strong className="text-ink font-semibold">Dominusoft</strong>{" "}
                in Tirana last summer, and I am wrapping up a technical
                high school diploma in informatics and electronics at the{" "}
                <strong className="text-ink font-semibold">
                  1st EPAL of Nafpaktos
                </strong>{" "}
                this year.
              </p>
              <p>
                My paid work so far has been brand identity work: a full
                rollout for a fast-food shop called Te Lako in Fier, and a
                product logo for the CloudPage Maestro extension. On my own
                time I draw, study Blender, and keep a small weekly practice
                of 2D animation loops.
              </p>
            </div>

            <a
              href="/cv/Igli_Balla_CV.pdf"
              download
              className="inline-flex items-center gap-2 mt-10 md:mt-12 text-[11px] uppercase tracking-[0.24em] border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors"
            >
              Download CV, PDF
              <ArrowUpRight size={13} weight="regular" />
            </a>
          </div>

          <aside className="md:col-span-5 space-y-8">
            <Spec
              label="Tools"
              items={[
                "Adobe Illustrator",
                "Adobe Photoshop",
                "Adobe InDesign",
                "GIMP",
                "Blender",
                "Adobe Dimension",
                "Figma",
              ]}
            />
            <Spec
              label="Focus"
              items={[
                "Brand identity",
                "Logo design",
                "Print and editorial",
                "Social content",
                "3D product mock-ups",
              ]}
            />
            <Spec
              label="Languages"
              items={[
                "Albanian, native",
                "Greek, native",
                "English, C1",
              ]}
            />
            <div className="pt-6 border-t border-rule/70">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted mb-3">
                Currently
              </div>
              <p className="text-sm text-ink-2 leading-relaxed">
                Open to junior design roles, freelance commissions, and
                collaborative 2D animation projects. Based in Greece,
                available remotely across the EU.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
