import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowIcon, categoryIcons } from "./icons";

export default function CategoryCard({
  index,
  slug,
  label,
  blurb,
  href,
  delay = 0,
}: {
  index: number;
  slug: string;
  label: string;
  blurb: string;
  href: string;
  delay?: number;
}) {
  const Icon = categoryIcons[slug];
  return (
    <Reveal delay={delay} as="div">
      <Link
        href={href}
        className="group relative flex items-center gap-4 border-t border-line py-6 md:gap-6 md:py-7"
      >
        <span
          aria-hidden="true"
          className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-silver/60 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
        />

        <span className="w-7 shrink-0 text-xs font-semibold tracking-[0.15em] text-ink-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-ink-dim md:w-10 motion-reduce:transition-none">
          {String(index).padStart(2, "0")}
        </span>
        {Icon && (
          <Icon className="size-6 shrink-0 text-ink-dim transition-all duration-300 group-hover:scale-110 group-hover:text-ink md:size-7 motion-reduce:transition-none" />
        )}
        <span className="flex flex-1 flex-col gap-0.5 transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 motion-reduce:transition-none">
          <span className="text-xl font-semibold tracking-tight text-ink md:text-2xl">
            {label}
          </span>
          <span className="hidden text-sm text-ink-faint transition-colors duration-300 group-hover:text-ink-dim sm:block motion-reduce:transition-none">
            {blurb}
          </span>
        </span>
        <ArrowIcon className="size-5 shrink-0 -translate-x-1 text-ink-dim opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:size-6 motion-reduce:transition-none" />
      </Link>
    </Reveal>
  );
}
