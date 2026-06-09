"use client";

import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "./utils";

export interface LozengeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "inprogress" | "success" | "moved" | "new" | "removed";
  isBold?: boolean;
  maxWidth?: number | string;
}

const variantClasses: Record<NonNullable<LozengeProps["variant"]>, string> = {
  default: "bg-muted text-muted-foreground",
  inprogress: "bg-blue-500/15 text-blue-700 dark:text-blue-300",
  success: "bg-green-500/15 text-green-700 dark:text-green-300",
  moved: "bg-purple-500/15 text-purple-700 dark:text-purple-300",
  new: "bg-teal-500/15 text-teal-700 dark:text-teal-300",
  removed: "bg-red-500/15 text-red-700 dark:text-red-300",
};

export const Lozenge = forwardRef<HTMLSpanElement, LozengeProps>(
  (
    {
      variant = "default",
      isBold = false,
      maxWidth,
      children,
      className,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-sm px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide whitespace-nowrap transition-colors duration-pg-fast ease-pg-standard",
          variantClasses[variant],
          isBold && "ring-1 ring-current/30",
          className
        )}
        style={
          maxWidth !== undefined
            ? { maxWidth, overflow: "hidden", textOverflow: "ellipsis", ...style }
            : style
        }
        {...props}
      >
        <span
          className={cn(
            maxWidth !== undefined ? "truncate" : undefined
          )}
        >
          {children}
        </span>
      </span>
    );
  }
);
Lozenge.displayName = "Lozenge";
