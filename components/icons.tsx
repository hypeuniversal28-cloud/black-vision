type IconProps = { className?: string };
const base = "1.4";

export function CarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 20.5V17l2.6-6.2A2 2 0 0 1 9.4 9.6h13.2a2 2 0 0 1 1.8 1.2L27 17v3.5"
        stroke="currentColor"
        strokeWidth={base}
      />
      <path d="M5 20.5h22" stroke="currentColor" strokeWidth={base} />
      <path d="M5 20.5v2.7M27 20.5v2.7" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <circle cx="10.5" cy="20.5" r="2.1" stroke="currentColor" strokeWidth={base} />
      <circle cx="21.5" cy="20.5" r="2.1" stroke="currentColor" strokeWidth={base} />
      <path d="M7.6 14.5h16.8" stroke="currentColor" strokeWidth={base} />
    </svg>
  );
}

export function FashionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M16 8.5a2 2 0 1 1 3.6 1.2" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <path
        d="M16 9.5 6 14.8l2.4 3.6 3.4-1.7v8.8h8.4v-8.8l3.4 1.7 2.4-3.6L16 9.5Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WatchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M12 8h8l-1 4.2h-6L12 8ZM12 24h8l-1-4.2h-6L12 24Z" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <circle cx="16" cy="16" r="6.3" stroke="currentColor" strokeWidth={base} />
      <path d="M16 13v3.2l2.2 1.4" stroke="currentColor" strokeWidth={base} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M6 24V13.5L16 7l10 6.5V24" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <path d="M12 24v-6.5h8V24" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
    </svg>
  );
}

export function BusinessIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect x="6" y="13" width="20" height="11.5" rx="0.5" stroke="currentColor" strokeWidth={base} />
      <path d="M12.5 13v-2.3a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5V13" stroke="currentColor" strokeWidth={base} />
      <path d="M6 18h20" stroke="currentColor" strokeWidth={base} />
    </svg>
  );
}

export function ConstructionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M8 24V9.5" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <path d="M8 10.5 23 14l-6.5 2v4" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <path d="M5 24h9" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <circle cx="16.5" cy="22" r="2" stroke="currentColor" strokeWidth={base} />
    </svg>
  );
}

export function ElectronicsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect x="10.5" y="10.5" width="11" height="11" rx="1.2" stroke="currentColor" strokeWidth={base} />
      <rect x="13.5" y="13.5" width="5" height="5" rx="0.6" stroke="currentColor" strokeWidth={base} />
      <path
        d="M14 10.5V8M18 10.5V8M14 24v-2.5M18 24v-2.5M10.5 14H8M10.5 18H8M24 14h-2.5M24 18h-2.5"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CustomIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="8.5" stroke="currentColor" strokeWidth={base} />
      <path d="M16 7.5v2.2M16 22.3v2.2M7.5 16h2.2M22.3 16h2.2" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
      <path d="m19 13-4.2 6.2L15.6 19 13 16.9 18 13Z" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 6.5a9.5 9.5 0 0 0-8.2 14.3L6.5 25.5l4.9-1.3A9.5 9.5 0 1 0 16 6.5Z"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinejoin="round"
      />
      <path
        d="M12.3 12.6c-.3.6-.8 1.5.2 3.1 1 1.6 2.7 3.1 4.3 3.7 1.5.6 2.3.3 2.7 0 .4-.3.7-1 .8-1.4"
        stroke="currentColor"
        strokeWidth={base}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TelegramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="9.5" stroke="currentColor" strokeWidth={base} />
      <path d="M9.5 16.7 22 10.8 18.3 21.5l-3.5-3.9-1.8 1.7-.2-3.2Z" stroke="currentColor" strokeWidth={base} strokeLinejoin="round" />
      <path d="M14.8 17.6 22 10.8" stroke="currentColor" strokeWidth={base} strokeLinecap="round" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const categoryIcons: Record<string, (p: IconProps) => React.ReactElement> = {
  cars: CarIcon,
  fashion: FashionIcon,
  watches: WatchIcon,
  home: HomeIcon,
  business: BusinessIcon,
  construction: ConstructionIcon,
  electronics: ElectronicsIcon,
  "custom-request": CustomIcon,
};
