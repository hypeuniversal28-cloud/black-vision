import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "left" | "center";
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left";
  return (
    <Reveal className={`flex flex-col gap-4 ${alignClass}`} as="div">
      {eyebrow && <span className="bv-eyebrow">{eyebrow}</span>}
      <h2 className="text-[clamp(1.9rem,5vw,2.75rem)] font-semibold leading-[1.08] tracking-tight text-ink whitespace-pre-line">
        {title}
      </h2>
      {sub && (
        <p
          className={`max-w-[46ch] text-[1.0625rem] leading-relaxed text-ink-dim ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}
