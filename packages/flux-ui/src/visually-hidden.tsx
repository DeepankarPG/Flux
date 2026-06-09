import * as React from "react";
import { cn } from "./utils";

export interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  focusable?: boolean;
}

const VisuallyHidden = React.forwardRef<HTMLElement, VisuallyHiddenProps>(
  ({ as: Component = "span", focusable = false, className, ...props }, ref) => (
    <Component
      ref={ref}
      className={cn(
        focusable
          ? "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:bg-card focus:text-foreground focus:rounded-md focus:shadow-lg focus:ring-2 focus:ring-ring"
          : "sr-only",
        className
      )}
      {...props}
    />
  )
);
VisuallyHidden.displayName = "VisuallyHidden";

export { VisuallyHidden };
