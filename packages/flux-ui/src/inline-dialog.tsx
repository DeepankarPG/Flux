"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { X } from "lucide-react";
import { cn } from "./utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface InlineDialogProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {}

export interface InlineDialogContentProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>,
    "side" | "sideOffset"
  > {
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  /** Hide the built-in close button */
  hideClose?: boolean;
}

// ---------------------------------------------------------------------------
// InlineDialog (Popover root)
// ---------------------------------------------------------------------------

const InlineDialog = PopoverPrimitive.Root;
InlineDialog.displayName = "InlineDialog";

// ---------------------------------------------------------------------------
// InlineDialogTrigger
// ---------------------------------------------------------------------------

const InlineDialogTrigger = PopoverPrimitive.Trigger;
InlineDialogTrigger.displayName = "InlineDialogTrigger";

// ---------------------------------------------------------------------------
// Arrow positioning helpers
// ---------------------------------------------------------------------------

type ArrowSide = "top" | "right" | "bottom" | "left";

/**
 * Returns Tailwind classes that position the 8×8 arrow square on the correct
 * edge of the floating card and rotate it so the corner points at the trigger.
 */
function getArrowClasses(side: ArrowSide): string {
  const base =
    "absolute size-2 bg-card border border-border pointer-events-none";

  switch (side) {
    case "top":
      // Arrow appears on the bottom edge of the card (card is above trigger)
      return cn(
        base,
        "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45",
        "border-t-0 border-l-0"
      );
    case "bottom":
      // Arrow appears on the top edge of the card (card is below trigger)
      return cn(
        base,
        "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45",
        "border-b-0 border-r-0"
      );
    case "left":
      // Arrow appears on the right edge of the card (card is left of trigger)
      return cn(
        base,
        "right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45",
        "border-t-0 border-l-0"
      );
    case "right":
      // Arrow appears on the left edge of the card (card is right of trigger)
      return cn(
        base,
        "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45",
        "border-b-0 border-r-0"
      );
  }
}

// ---------------------------------------------------------------------------
// InlineDialogContent
// ---------------------------------------------------------------------------

const InlineDialogContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  InlineDialogContentProps
>(
  (
    {
      className,
      side = "bottom",
      sideOffset = 8,
      hideClose = false,
      children,
      ...props
    },
    ref
  ) => (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        side={side}
        sideOffset={sideOffset}
        className={cn(
          // Base card
          "relative z-[120] max-w-xs overflow-visible",
          "rounded-xl border border-border bg-card p-4 text-foreground shadow-lg",
          // Animation
          "data-[state=open]:opacity-100 data-[state=closed]:opacity-0",
          "transition-opacity duration-pg-fast ease-pg-standard",
          "outline-none",
          className
        )}
        {...props}
      >
        {/* Arrow pointer */}
        <span className={getArrowClasses(side)} aria-hidden="true" />

        {/* Close button */}
        {!hideClose && (
          <PopoverPrimitive.Close
            className={cn(
              "absolute right-2 top-2 z-10",
              "inline-flex size-6 items-center justify-center rounded-md",
              "text-muted-foreground hover:text-foreground",
              "transition-colors duration-pg-fast ease-pg-standard",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
              "disabled:cursor-not-allowed disabled:opacity-50"
            )}
            aria-label="Close"
          >
            <X className="size-3.5" />
          </PopoverPrimitive.Close>
        )}

        {children}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  )
);
InlineDialogContent.displayName = "InlineDialogContent";

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { InlineDialog, InlineDialogTrigger, InlineDialogContent };
