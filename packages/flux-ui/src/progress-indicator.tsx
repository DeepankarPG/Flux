"use client";

import * as React from "react";
import { cn } from "./utils";

export type ProgressIndicatorSize = "sm" | "md" | "lg";

export interface ProgressIndicatorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  selectedIndex: number;
  values: string[];
  size?: ProgressIndicatorSize;
  onChange?: (index: number) => void;
}

const dotSizeMap: Record<ProgressIndicatorSize, { base: string; active: string }> = {
  sm: {
    base: "h-1.5 w-1.5",
    active: "h-1.5 w-4",
  },
  md: {
    base: "h-2 w-2",
    active: "h-2 w-6",
  },
  lg: {
    base: "h-2.5 w-2.5",
    active: "h-2.5 w-8",
  },
};

const ProgressIndicator = React.forwardRef<HTMLDivElement, ProgressIndicatorProps>(
  ({ className, selectedIndex, values, size = "md", onChange, ...props }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (!onChange) return;
        if (e.key === "ArrowRight") {
          e.preventDefault();
          const next = Math.min(selectedIndex + 1, values.length - 1);
          if (next !== selectedIndex) onChange(next);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          const prev = Math.max(selectedIndex - 1, 0);
          if (prev !== selectedIndex) onChange(prev);
        }
      },
      [onChange, selectedIndex, values.length]
    );

    const sizes = dotSizeMap[size];

    return (
      <div
        ref={ref}
        role="tablist"
        aria-label={props["aria-label"] ?? "Step indicator"}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className={cn("flex items-center gap-1.5 outline-none focus-visible:outline-none", className)}
        {...props}
      >
        {values.map((label, index) => {
          const isActive = index === selectedIndex;
          return (
            <button
              key={index}
              type="button"
              role="tab"
              aria-label={label}
              aria-current={isActive ? "step" : undefined}
              aria-selected={isActive}
              tabIndex={-1}
              onClick={() => onChange?.(index)}
              className={cn(
                "rounded-full transition-all duration-pg-normal ease-pg-standard",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
                "disabled:cursor-not-allowed disabled:opacity-50",
                isActive
                  ? cn("bg-primary", sizes.active)
                  : cn(
                      "bg-muted-foreground/30 hover:bg-muted-foreground/50",
                      sizes.base
                    )
              )}
            />
          );
        })}
      </div>
    );
  }
);
ProgressIndicator.displayName = "ProgressIndicator";

export { ProgressIndicator };
