import { cn } from "@/lib/utils";

const sizeClass = {
  sm: "h-6 w-6 sm:h-7 sm:w-7",
  md: "h-7 w-7 sm:h-8 sm:w-8",
  lg: "h-9 w-9 sm:h-10 sm:w-10",
} as const;

type FluxLogoProps = {
  className?: string;
  size?: keyof typeof sizeClass;
  priority?: boolean;
};

export function FluxLogo({ className, size = "md" }: FluxLogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/flux-logo.svg"
      alt="Flux UI"
      className={cn("shrink-0", sizeClass[size], className)}
    />
  );
}
