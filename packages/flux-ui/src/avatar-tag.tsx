"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { X } from "lucide-react";
import { cn } from "./utils";

export type AvatarTagSize = "sm" | "md" | "lg";

export interface AvatarTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Display label for the tag */
  label: string;
  /** Optional image src for the avatar */
  src?: string;
  /** Alt text for the avatar image */
  alt?: string;
  /** Size variant */
  size?: AvatarTagSize;
  /** Called when the remove button is clicked */
  onRemove?: () => void;
  /** Disables interaction */
  disabled?: boolean;
}

function getInitials(label: string): string {
  const words = label.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

const sizeConfig: Record<
  AvatarTagSize,
  { avatar: string; text: string; icon: string; padding: string }
> = {
  sm: {
    avatar: "h-[18px] w-[18px]",
    text: "text-[10px]",
    icon: "size-2.5",
    padding: "px-1.5 py-0.5 gap-1",
  },
  md: {
    avatar: "h-5 w-5",
    text: "text-xs",
    icon: "size-3",
    padding: "px-2 py-0.5 gap-1",
  },
  lg: {
    avatar: "h-6 w-6",
    text: "text-sm",
    icon: "size-3.5",
    padding: "px-2.5 py-1 gap-1.5",
  },
};

const AvatarTag = React.forwardRef<HTMLSpanElement, AvatarTagProps>(
  (
    {
      label,
      src,
      alt,
      size = "md",
      onRemove,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const cfg = sizeConfig[size];
    const initials = getInitials(label);

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border border-border bg-card font-medium transition-colors duration-[var(--duration-pg-fast,150ms)] ease-[var(--ease-pg-standard,cubic-bezier(0.4,0,0.2,1))]",
          cfg.padding,
          cfg.text,
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        {...props}
      >
        {/* Avatar */}
        <AvatarPrimitive.Root
          className={cn(
            "relative shrink-0 overflow-hidden rounded-full",
            cfg.avatar
          )}
        >
          <AvatarPrimitive.Image
            src={src}
            alt={alt ?? label}
            className="aspect-square h-full w-full object-cover"
          />
          <AvatarPrimitive.Fallback
            className={cn(
              "flex h-full w-full items-center justify-center rounded-full bg-primary/10 text-primary font-semibold leading-none",
              cfg.text
            )}
          >
            {initials}
          </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>

        {/* Label */}
        <span className="leading-none select-none">{label}</span>

        {/* Remove button */}
        {onRemove && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (!disabled) onRemove();
            }}
            disabled={disabled}
            className={cn(
              "flex items-center justify-center rounded-full opacity-60 transition-opacity duration-[var(--duration-pg-fast,150ms)] hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
              disabled && "pointer-events-none"
            )}
            aria-label={`Remove ${label}`}
          >
            <X className={cfg.icon} />
          </button>
        )}
      </span>
    );
  }
);

AvatarTag.displayName = "AvatarTag";

export { AvatarTag };
