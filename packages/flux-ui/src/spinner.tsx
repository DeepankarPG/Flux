"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";

import { cn } from "./utils";

const sizeMap = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 28,
  xl: 36,
} as const;

const colorMap = {
  primary: "text-primary",
  muted: "text-muted-foreground",
  white: "text-white",
  inherit: "",
} as const;

export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: keyof typeof sizeMap;
  color?: keyof typeof colorMap;
}

const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ className, size = "md", color = "primary", ...props }, ref) => {
    const px = sizeMap[size];

    return (
      <span
        ref={ref}
        data-slot="spinner"
        role="status"
        aria-label="Loading"
        className={cn("inline-flex items-center justify-center", colorMap[color], className)}
        {...props}
      >
        <Loader2
          width={px}
          height={px}
          className="animate-spin"
          aria-hidden="true"
        />
        <span className="sr-only">Loading...</span>
      </span>
    );
  }
);
Spinner.displayName = "Spinner";

export { Spinner };
