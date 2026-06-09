"use client";

import { cn } from "./utils";
import { Loader2 } from "lucide-react";
import { type ButtonHTMLAttributes, forwardRef } from "react";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string;
  variant?: "primary" | "secondary" | "ghost" | "outline" | "danger";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  rounded?: "sm" | "md" | "lg" | "full";
}

const variantClasses: Record<NonNullable<IconButtonProps["variant"]>, string> = {
  primary:
    "bg-primary text-primary-foreground border border-primary shadow-sm hover:bg-[var(--primary-hover)]",
  secondary:
    "bg-muted text-foreground border border-border shadow-sm hover:bg-muted/85 dark:bg-muted/35 dark:text-foreground dark:border-border dark:hover:bg-muted/55",
  ghost:
    "bg-transparent text-foreground border border-transparent hover:bg-muted focus-visible:bg-muted/80 active:bg-muted/90",
  outline:
    "bg-card text-foreground border border-border shadow-sm hover:bg-muted",
  danger:
    "bg-red-600 text-white border border-red-600 shadow-sm hover:bg-red-700",
};

const sizeClasses: Record<NonNullable<IconButtonProps["size"]>, string> = {
  xs: "size-7 min-w-7",
  sm: "size-8 min-w-8",
  md: "size-9 min-w-9",
  lg: "size-10 min-w-10",
  xl: "size-11 min-w-11",
};

const iconSizeClasses: Record<NonNullable<IconButtonProps["size"]>, string> = {
  xs: "size-3.5",
  sm: "size-3.5",
  md: "size-4",
  lg: "size-[1.125rem]",
  xl: "size-5",
};

const roundedClasses: Record<NonNullable<IconButtonProps["rounded"]>, string> = {
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-xl",
  full: "rounded-full",
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      rounded = "lg",
      className,
      disabled,
      children,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        aria-label={ariaLabel}
        title={ariaLabel}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex shrink-0 items-center justify-center font-medium",
          "transition-colors duration-pg-fast ease-pg-standard",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
          "disabled:cursor-not-allowed disabled:opacity-50",
          variantClasses[variant],
          sizeClasses[size],
          roundedClasses[rounded],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <Loader2 className={cn("animate-spin", iconSizeClasses[size])} />
        ) : (
          children
        )}
      </button>
    );
  }
);
IconButton.displayName = "IconButton";
