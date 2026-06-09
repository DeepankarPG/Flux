"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./utils";

const linkVariants = cva(
  [
    "inline-flex items-center gap-1 transition-colors duration-pg-fast ease-pg-standard",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 rounded-sm",
    "aria-disabled:cursor-not-allowed aria-disabled:opacity-50 aria-disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        default: "text-primary underline-offset-4 hover:underline",
        subtle: "text-muted-foreground hover:text-foreground",
        nav: "text-foreground hover:text-primary",
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      href,
      target,
      rel,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "a";

    const isExternal =
      typeof href === "string" && href.startsWith("http");

    const externalProps = isExternal
      ? {
          target: target ?? "_blank",
          rel: rel ?? "noreferrer",
        }
      : { target, rel };

    return (
      <Comp
        ref={ref}
        href={href}
        className={cn(linkVariants({ variant, size }), className)}
        {...externalProps}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Link.displayName = "Link";
