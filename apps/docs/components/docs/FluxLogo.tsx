import { cn } from "@/lib/utils";

const sizeClass = {
  sm: "h-6 sm:h-7",
  md: "h-7 sm:h-8",
  lg: "h-9 sm:h-10",
} as const;

type FluxLogoProps = {
  className?: string;
  size?: keyof typeof sizeClass;
  priority?: boolean;
};

export function FluxLogo({ className, size = "md" }: FluxLogoProps) {
  return (
    <svg
      viewBox="0 0 274 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flux"
      className={cn("w-auto shrink-0", sizeClass[size], className)}
    >
      <rect width="48" height="48" rx="10" className="fill-primary" />
      <path d="M12 14h24M12 24h16M12 34h20" stroke="white" strokeWidth="3.5" strokeLinecap="round" />
      <text x="60" y="34" fontFamily="inherit" fontSize="26" fontWeight="600" className="fill-foreground">
        Flux UI
      </text>
    </svg>
  );
}
