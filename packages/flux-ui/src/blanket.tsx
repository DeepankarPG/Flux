"use client";

import * as React from "react";
import { cn } from "./utils";

export interface BlanketProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Controls visibility of the blanket */
  open?: boolean;
  /** Adds semi-transparent black background (default: true) */
  isTinted?: boolean;
  /** Makes blanket completely transparent — only blocks pointer events */
  isTransparent?: boolean;
  /** Called when the blanket is clicked */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /** When true, pointer events pass through the blanket */
  shouldAllowClickThrough?: boolean;
}

const Blanket = React.forwardRef<HTMLDivElement, BlanketProps>(
  (
    {
      open = true,
      isTinted = true,
      isTransparent = false,
      onClick,
      shouldAllowClickThrough = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        data-open={open}
        aria-hidden="true"
        onClick={onClick}
        className={cn(
          "fixed inset-0 z-40",
          // Animate in/out
          "data-[open=true]:animate-in data-[open=false]:animate-out",
          "data-[open=true]:fade-in-0 data-[open=false]:fade-out-0",
          "transition-colors duration-pg-fast ease-pg-standard",
          // Visibility
          !open && "pointer-events-none",
          // Background
          !isTransparent && isTinted && "bg-black/50 backdrop-blur-sm",
          isTransparent && "bg-transparent",
          // Click-through
          shouldAllowClickThrough && "pointer-events-none",
          className
        )}
        {...props}
      />
    );
  }
);

Blanket.displayName = "Blanket";

export { Blanket };
