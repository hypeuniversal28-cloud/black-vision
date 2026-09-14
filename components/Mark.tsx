import Image from "next/image";

export default function Mark({
  size = 28,
  showWordmark = true,
  className = "",
}: {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/brand/logo-mark.png"
        alt=""
        width={size * 1.3}
        height={size}
        className="h-auto w-auto opacity-95"
        priority
        aria-hidden="true"
      />
      {showWordmark && (
        <span className="text-[0.95rem] font-semibold tracking-[0.2em] text-ink">
          BLACK VISION
        </span>
      )}
    </span>
  );
}
