const items = [
  "Brand identity",
  "Logo design",
  "Editorial layout",
  "Print production",
  "3D product renders",
  "Social content",
  "Typography",
  "Vector illustration",
  "Packaging mock-ups",
];

export default function Marquee() {
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-rule bg-paper-2/60"
    >
      <div className="flex gap-14 whitespace-nowrap py-5 marquee-inner">
        {[...items, ...items].map((label, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 font-display italic text-2xl md:text-3xl text-ink"
          >
            {label}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
