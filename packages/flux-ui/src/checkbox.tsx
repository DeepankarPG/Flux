"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import { cn } from "./utils";

export type CheckboxSize = "sm" | "md" | "lg";

export interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
  size?: CheckboxSize;
}

const sizeClasses: Record<CheckboxSize, string> = {
  sm: "h-3.5 w-3.5 rounded",
  md: "h-4 w-4 rounded-md",
  lg: "h-[1.125rem] w-[1.125rem] rounded-md",
};

const iconSizes: Record<CheckboxSize, string> = {
  sm: "size-2.5",
  md: "size-3",
  lg: "size-3.5",
};

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size = "md", ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer shrink-0 border border-border bg-card shadow-sm transition-colors duration-pg-fast ease-pg-standard",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-primary data-[state=checked]:border-primary",
      "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary",
      sizeClasses[size],
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="flex items-center justify-center text-primary-foreground">
      {props.checked === "indeterminate" ? (
        <Minus className={iconSizes[size]} strokeWidth={3} />
      ) : (
        <Check className={iconSizes[size]} strokeWidth={3} />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
