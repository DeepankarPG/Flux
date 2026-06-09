import * as React from "react";
import { cn } from "./utils";
import type { LayoutSpacing } from "./layout";

// ---------------------------------------------------------------------------
// Shared gap map (mirrors layout.tsx)
// ---------------------------------------------------------------------------

const gapClass: Record<LayoutSpacing, string> = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4",
  xl: "gap-6",
};

// ---------------------------------------------------------------------------
// Grid
// ---------------------------------------------------------------------------

export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";

export type ResponsiveCols = {
  base?: GridCols;
  sm?: GridCols;
  md?: GridCols;
  lg?: GridCols;
};

export type GridFlow = "row" | "col" | "dense";

export type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Number of columns (1–12 or "auto"), or a responsive object */
  cols?: GridCols | ResponsiveCols;
  /** Number of explicit rows */
  rows?: 1 | 2 | 3 | 4 | 5 | 6 | "auto";
  /** Gap between cells */
  gap?: LayoutSpacing;
  /** Grid auto-flow direction */
  flow?: GridFlow;
};

const colClass: Record<string, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
  auto: "grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
};

const smColClass: Record<string, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5",
  6: "sm:grid-cols-6",
  7: "sm:grid-cols-7",
  8: "sm:grid-cols-8",
  9: "sm:grid-cols-9",
  10: "sm:grid-cols-10",
  11: "sm:grid-cols-11",
  12: "sm:grid-cols-12",
  auto: "sm:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
};

const mdColClass: Record<string, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
  7: "md:grid-cols-7",
  8: "md:grid-cols-8",
  9: "md:grid-cols-9",
  10: "md:grid-cols-10",
  11: "md:grid-cols-11",
  12: "md:grid-cols-12",
  auto: "md:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
};

const lgColClass: Record<string, string> = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
  7: "lg:grid-cols-7",
  8: "lg:grid-cols-8",
  9: "lg:grid-cols-9",
  10: "lg:grid-cols-10",
  11: "lg:grid-cols-11",
  12: "lg:grid-cols-12",
  auto: "lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
};

const rowClass: Record<string, string> = {
  1: "grid-rows-1",
  2: "grid-rows-2",
  3: "grid-rows-3",
  4: "grid-rows-4",
  5: "grid-rows-5",
  6: "grid-rows-6",
  auto: "grid-rows-none",
};

const flowClass: Record<GridFlow, string> = {
  row: "grid-flow-row",
  col: "grid-flow-col",
  dense: "grid-flow-dense",
};

function resolveColClasses(cols: GridCols | ResponsiveCols | undefined): string {
  if (cols === undefined) return "";
  if (typeof cols === "number" || cols === "auto") {
    return colClass[String(cols)] ?? "";
  }
  // Responsive object
  const { base, sm, md, lg } = cols as ResponsiveCols;
  return cn(
    base !== undefined && colClass[String(base)],
    sm !== undefined && smColClass[String(sm)],
    md !== undefined && mdColClass[String(md)],
    lg !== undefined && lgColClass[String(lg)],
  );
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols, rows, gap = "md", flow, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "grid",
          resolveColClasses(cols),
          rows !== undefined && rowClass[String(rows)],
          gapClass[gap],
          flow !== undefined && flowClass[flow],
          className,
        )}
        {...props}
      />
    );
  },
);
Grid.displayName = "Grid";

// ---------------------------------------------------------------------------
// Flex
// ---------------------------------------------------------------------------

export type FlexDirection = "row" | "col" | "row-reverse" | "col-reverse";
export type FlexWrap = boolean | "reverse";
export type FlexAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type FlexJustify = "start" | "center" | "end" | "between" | "around" | "evenly";

export type FlexProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Flex direction */
  direction?: FlexDirection;
  /** Whether children wrap */
  wrap?: FlexWrap;
  /** Align items (cross axis) */
  align?: FlexAlign;
  /** Justify content (main axis) */
  justify?: FlexJustify;
  /** Gap between children */
  gap?: LayoutSpacing;
  /** Render as inline-flex */
  inline?: boolean;
};

const directionClass: Record<FlexDirection, string> = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse",
};

const alignClass: Record<FlexAlign, string> = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline",
};

const justifyClass: Record<FlexJustify, string> = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
};

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      direction = "row",
      wrap = false,
      align = "start",
      justify = "start",
      gap = "md",
      inline = false,
      ...props
    },
    ref,
  ) => {
    const wrapCls =
      wrap === true ? "flex-wrap" : wrap === "reverse" ? "flex-wrap-reverse" : "flex-nowrap";

    return (
      <div
        ref={ref}
        className={cn(
          inline ? "inline-flex" : "flex",
          directionClass[direction],
          wrapCls,
          alignClass[align],
          justifyClass[justify],
          gapClass[gap],
          className,
        )}
        {...props}
      />
    );
  },
);
Flex.displayName = "Flex";
