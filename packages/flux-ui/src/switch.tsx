"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const switchRootVariants = cva(
  [
    "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border border-transparent",
    "transition-colors duration-pg-fast ease-pg-standard",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "data-[state=unchecked]:bg-muted data-[state=unchecked]:border-border",
    "data-[state=checked]:bg-primary data-[state=checked]:border-transparent",
  ],
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-[3.25rem]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const switchThumbVariants = cva(
  [
    "pointer-events-none block rounded-full bg-white shadow-sm",
    "transition-transform duration-pg-fast ease-pg-standard",
    "ring-0",
  ],
  {
    variants: {
      size: {
        sm: "size-3.5 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5",
        md: "size-4.5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5",
        lg: "size-5.5 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchRootVariants> {}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, size, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(switchRootVariants({ size }), className)}
    {...props}
  >
    <SwitchPrimitive.Thumb className={cn(switchThumbVariants({ size }))} />
  </SwitchPrimitive.Root>
));
Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
