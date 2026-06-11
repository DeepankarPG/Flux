"use client";

import * as React from "react";
import { Check, X, RefreshCw, Clock, AlertCircle, ArrowRight, Info } from "lucide-react";
import { cn } from "./utils";

export type BadgeVariant =
  | "success"
  | "info"
  | "warning"
  | "refund"
  | "danger"
  | "orange"
  | "muted";

export type BadgeTrailIcon =
  | "check"
  | "x"
  | "refresh"
  | "clock"
  | "alert"
  | "arrow-right"
  | "info";

/* Light: low-opacity hue-matched borders. Dark: stronger borders for contrast on dark surfaces. */
const VARIANT_CLASS: Record<BadgeVariant, string> = {
  success:
    "bg-emerald-500/10 text-emerald-800 border-emerald-600/10 dark:bg-emerald-500/35 dark:text-emerald-50 dark:border-emerald-400/70",
  info: "bg-blue-500/10 text-blue-800 border-blue-600/10 dark:bg-sky-500/30 dark:text-sky-50 dark:border-sky-400/65",
  warning:
    "bg-amber-500/10 text-amber-900 border-amber-600/10 dark:bg-amber-500/35 dark:text-amber-50 dark:border-amber-400/70",
  refund:
    "bg-yellow-500/10 text-yellow-900 border-yellow-600/10 dark:bg-violet-500/30 dark:text-violet-100 dark:border-violet-400/60",
  danger:
    "bg-red-500/10 text-red-800 border-red-600/10 dark:bg-red-500/35 dark:text-red-50 dark:border-red-400/70",
  orange:
    "bg-orange-500/10 text-orange-900 border-orange-600/10 dark:bg-orange-500/35 dark:text-orange-50 dark:border-orange-400/65",
  muted:
    "bg-muted text-muted-foreground border-border/40 dark:bg-zinc-800/90 dark:text-zinc-200 dark:border-zinc-500/45",
};

export interface StatusBadgeProps {
  variant: BadgeVariant;
  label: string;
  trailIcon?: BadgeTrailIcon;
  size?: "sm" | "md";
  className?: string;
}

export const StatusBadge = React.forwardRef<HTMLSpanElement, StatusBadgeProps>(
  ({ variant, label, trailIcon, size = "md", className }, ref) => {
    const iSize = size === "sm" ? 11 : 12;
    const iProps = {
      width: iSize,
      height: iSize,
      strokeWidth: 2.5,
      style: { flexShrink: 0 },
    } as const;

    const icon =
      trailIcon === "check"       ? <Check {...iProps} /> :
      trailIcon === "x"           ? <X {...iProps} strokeWidth={3} /> :
      trailIcon === "refresh"     ? <RefreshCw {...{ ...iProps, strokeWidth: 2 }} /> :
      trailIcon === "clock"       ? <Clock {...iProps} strokeWidth={2} /> :
      trailIcon === "alert"       ? <AlertCircle {...iProps} strokeWidth={2} /> :
      trailIcon === "arrow-right" ? <ArrowRight {...iProps} strokeWidth={2.5} /> :
      trailIcon === "info"        ? <Info {...iProps} strokeWidth={2.5} /> :
      null;

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center gap-1.5 font-medium border whitespace-nowrap rounded-md",
          VARIANT_CLASS[variant],
          size === "sm" ? "text-[11px] px-2 py-[2px]" : "text-[13px] px-3 py-[5px]",
          className
        )}
      >
        {label}
        {icon}
      </span>
    );
  }
);
StatusBadge.displayName = "StatusBadge";
