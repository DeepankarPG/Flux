"use client";

import { cn } from "./utils";
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "success" | "warning" | "error" | "outline";
  size?: "sm" | "md" | "lg";
  square?: boolean;
  dot?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default:
    "bg-primary/10 text-primary border border-primary/20",
  secondary:
    "bg-muted text-muted-foreground border border-border",
  success:
    "bg-green-500/10 text-green-700 border border-green-500/20 dark:text-green-400",
  warning:
    "bg-amber-500/10 text-amber-700 border border-amber-500/20 dark:text-amber-400",
  error:
    "bg-red-500/10 text-red-700 border border-red-500/20 dark:text-red-400",
  outline:
    "bg-transparent text-foreground border border-border",
};

const sizeClasses: Record<NonNullable<BadgeProps["size"]>, string> = {
  sm: "text-[10px] px-1.5 py-0.5 gap-1",
  md: "text-xs px-2 py-0.5 gap-1",
  lg: "text-sm px-2.5 py-1 gap-1.5",
};

const dotColorClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-primary",
  secondary: "bg-muted-foreground",
  success: "bg-green-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
  outline: "bg-foreground",
};

const dotSizeClasses: Record<NonNullable<BadgeProps["size"]>, string> = {
  sm: "size-1.5",
  md: "size-1.5",
  lg: "size-2",
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      variant = "default",
      size = "md",
      square = false,
      dot = false,
      leftIcon,
      rightIcon,
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center font-medium whitespace-nowrap transition-colors duration-pg-fast ease-pg-standard",
          square ? "rounded-md" : "rounded-full",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {dot && (
          <span
            className={cn(
              "rounded-full flex-shrink-0",
              dotSizeClasses[size],
              dotColorClasses[variant]
            )}
          />
        )}
        {!dot && leftIcon && (
          <span className="inline-flex items-center flex-shrink-0">{leftIcon}</span>
        )}
        {children}
        {rightIcon && (
          <span className="inline-flex items-center flex-shrink-0">{rightIcon}</span>
        )}
      </span>
    );
  }
);
Badge.displayName = "Badge";
