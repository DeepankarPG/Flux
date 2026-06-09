"use client";

import * as React from "react";
import { cn } from "./utils";

// ---------------------------------------------------------------------------
// Breakpoint type
// ---------------------------------------------------------------------------

export type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

// ---------------------------------------------------------------------------
// Internal helpers
// ---------------------------------------------------------------------------

/** Ordered list — index used for comparison */
const BREAKPOINT_ORDER: Breakpoint[] = ["sm", "md", "lg", "xl", "2xl"];

/** Tailwind min-width values aligned with default config */
const BREAKPOINT_MIN_WIDTH: Record<Breakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

function bpIndex(bp: Breakpoint): number {
  return BREAKPOINT_ORDER.indexOf(bp);
}

// ---------------------------------------------------------------------------
// Show
// ---------------------------------------------------------------------------

export interface ShowProps extends React.HTMLAttributes<HTMLElement> {
  /** Render children at this breakpoint and above. */
  above?: Breakpoint;
  /** Render children strictly below this breakpoint. */
  below?: Breakpoint;
  /** HTML element to render. Defaults to "div". */
  as?: React.ElementType;
  /** Display value to restore when visible. Defaults to "block". */
  display?: "block" | "flex" | "inline" | "inline-block" | "grid" | "inline-flex";
  children?: React.ReactNode;
}

const DISPLAY_ABOVE_CLASS: Record<
  Breakpoint,
  Record<ShowProps["display"] & string, string>
> = {
  sm: {
    block: "sm:block",
    flex: "sm:flex",
    inline: "sm:inline",
    "inline-block": "sm:inline-block",
    grid: "sm:grid",
    "inline-flex": "sm:inline-flex",
  },
  md: {
    block: "md:block",
    flex: "md:flex",
    inline: "md:inline",
    "inline-block": "md:inline-block",
    grid: "md:grid",
    "inline-flex": "md:inline-flex",
  },
  lg: {
    block: "lg:block",
    flex: "lg:flex",
    inline: "lg:inline",
    "inline-block": "lg:inline-block",
    grid: "lg:grid",
    "inline-flex": "lg:inline-flex",
  },
  xl: {
    block: "xl:block",
    flex: "xl:flex",
    inline: "xl:inline",
    "inline-block": "xl:inline-block",
    grid: "xl:grid",
    "inline-flex": "xl:inline-flex",
  },
  "2xl": {
    block: "2xl:block",
    flex: "2xl:flex",
    inline: "2xl:inline",
    "inline-block": "2xl:inline-block",
    grid: "2xl:grid",
    "inline-flex": "2xl:inline-flex",
  },
};

/** Tailwind class to hide at a breakpoint and above */
const HIDDEN_ABOVE_CLASS: Record<Breakpoint, string> = {
  sm: "sm:hidden",
  md: "md:hidden",
  lg: "lg:hidden",
  xl: "xl:hidden",
  "2xl": "2xl:hidden",
};

export const Show = React.forwardRef<HTMLElement, ShowProps>(
  (
    {
      above,
      below,
      as: Tag = "div",
      display = "block",
      className,
      children,
      ...props
    },
    ref
  ) => {
    let visibilityClass: string;

    if (above) {
      // hidden by default, become visible at `above` breakpoint
      visibilityClass = cn("hidden", DISPLAY_ABOVE_CLASS[above][display]);
    } else if (below) {
      // visible by default, hidden at `below` breakpoint and above
      visibilityClass = HIDDEN_ABOVE_CLASS[below];
    } else {
      visibilityClass = "";
    }

    return (
      <Tag
        ref={ref}
        className={cn(visibilityClass, className)}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);
Show.displayName = "Show";

// ---------------------------------------------------------------------------
// Hide
// ---------------------------------------------------------------------------

export interface HideProps extends React.HTMLAttributes<HTMLElement> {
  /** Hide children at this breakpoint and above. */
  above?: Breakpoint;
  /** Hide children strictly below this breakpoint (i.e. visible at/above). */
  below?: Breakpoint;
  /** HTML element to render. Defaults to "div". */
  as?: React.ElementType;
  /** Display value to restore when visible. Defaults to "block". */
  display?: "block" | "flex" | "inline" | "inline-block" | "grid" | "inline-flex";
  children?: React.ReactNode;
}

export const Hide = React.forwardRef<HTMLElement, HideProps>(
  (
    {
      above,
      below,
      as: Tag = "div",
      display = "block",
      className,
      children,
      ...props
    },
    ref
  ) => {
    let visibilityClass: string;

    if (above) {
      // visible by default, hidden at `above` breakpoint and above
      visibilityClass = HIDDEN_ABOVE_CLASS[above];
    } else if (below) {
      // hidden by default (below breakpoint), visible at/above breakpoint — inverse of Show above
      visibilityClass = cn("hidden", DISPLAY_ABOVE_CLASS[below][display]);
    } else {
      visibilityClass = "";
    }

    return (
      <Tag
        ref={ref}
        className={cn(visibilityClass, className)}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);
Hide.displayName = "Hide";

// ---------------------------------------------------------------------------
// useBreakpoint hook
// ---------------------------------------------------------------------------

function getActiveBreakpoint(): Breakpoint | null {
  if (typeof window === "undefined") return null;
  // Walk from largest to smallest — first match wins
  for (let i = BREAKPOINT_ORDER.length - 1; i >= 0; i--) {
    const bp = BREAKPOINT_ORDER[i];
    if (window.matchMedia(`(min-width: ${BREAKPOINT_MIN_WIDTH[bp]}px)`).matches) {
      return bp;
    }
  }
  return null;
}

export interface UseBreakpointReturn {
  /** The currently active (highest matching) breakpoint, or null on SSR / xs viewport. */
  breakpoint: Breakpoint | null;
  /** Returns true when the viewport is at or above `bp`. */
  isAbove: (bp: Breakpoint) => boolean;
  /** Returns true when the viewport is strictly below `bp`. */
  isBelow: (bp: Breakpoint) => boolean;
  /** True when no breakpoint is active (viewport < 640 px). */
  isMobile: boolean;
  /** True when active breakpoint is md (768–1023 px). */
  isTablet: boolean;
  /** True when active breakpoint is lg or above (≥ 1024 px). */
  isDesktop: boolean;
}

export function useBreakpoint(): UseBreakpointReturn {
  const [breakpoint, setBreakpoint] = React.useState<Breakpoint | null>(() =>
    getActiveBreakpoint()
  );

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // Build one MediaQueryList per breakpoint and attach listeners
    const queries = BREAKPOINT_ORDER.map((bp) =>
      window.matchMedia(`(min-width: ${BREAKPOINT_MIN_WIDTH[bp]}px)`)
    );

    function handleChange() {
      setBreakpoint(getActiveBreakpoint());
    }

    queries.forEach((mql) => mql.addEventListener("change", handleChange));
    // Sync once on mount (handles SSR hydration mismatch)
    handleChange();

    return () => {
      queries.forEach((mql) => mql.removeEventListener("change", handleChange));
    };
  }, []);

  const isAbove = React.useCallback(
    (bp: Breakpoint): boolean => {
      if (breakpoint === null) return false;
      return bpIndex(breakpoint) >= bpIndex(bp);
    },
    [breakpoint]
  );

  const isBelow = React.useCallback(
    (bp: Breakpoint): boolean => {
      if (breakpoint === null) return true;
      return bpIndex(breakpoint) < bpIndex(bp);
    },
    [breakpoint]
  );

  return {
    breakpoint,
    isAbove,
    isBelow,
    isMobile: breakpoint === null,
    isTablet: breakpoint === "md",
    isDesktop: breakpoint !== null && bpIndex(breakpoint) >= bpIndex("lg"),
  };
}
