import * as React from "react";
import { cn } from "./utils";

// ---------------------------------------------------------------------------
// Heading
// ---------------------------------------------------------------------------

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: React.ElementType;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  color?: "default" | "subtle" | "primary";
}

const headingSizeClasses: Record<NonNullable<HeadingProps["size"]>, string> = {
  xs: "text-sm font-semibold",
  sm: "text-base font-semibold",
  md: "text-lg font-semibold",
  lg: "text-xl font-semibold",
  xl: "text-2xl font-semibold",
  "2xl": "text-3xl font-semibold tracking-tight",
  "3xl": "text-4xl font-semibold tracking-tight",
};

const headingColorClasses: Record<NonNullable<HeadingProps["color"]>, string> = {
  default: "text-foreground",
  subtle: "text-muted-foreground",
  primary: "text-primary",
};

const defaultSizeForLevel: Record<number, NonNullable<HeadingProps["size"]>> = {
  1: "2xl",
  2: "md",
  3: "md",
  4: "sm",
  5: "xs",
  6: "xs",
};

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      level = 2,
      as,
      size,
      color = "default",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Tag = (as ?? (`h${level}` as React.ElementType)) as React.ElementType;
    const resolvedSize = size ?? defaultSizeForLevel[level] ?? "md";

    return (
      <Tag
        ref={ref}
        className={cn(
          headingSizeClasses[resolvedSize],
          headingColorClasses[color],
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);
Heading.displayName = "Heading";

// ---------------------------------------------------------------------------
// Text
// ---------------------------------------------------------------------------

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: "p" | "span" | "div" | "label";
  size?: "xs" | "sm" | "md" | "lg";
  weight?: "normal" | "medium" | "semibold";
  color?: "default" | "subtle" | "primary" | "disabled";
  truncate?: boolean;
}

const textSizeClasses: Record<NonNullable<TextProps["size"]>, string> = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

const textWeightClasses: Record<NonNullable<TextProps["weight"]>, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
};

const textColorClasses: Record<NonNullable<TextProps["color"]>, string> = {
  default: "text-foreground",
  subtle: "text-muted-foreground",
  primary: "text-primary",
  disabled: "text-muted-foreground opacity-50",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Text = React.forwardRef<any, TextProps>(
  (
    {
      as: Tag = "p",
      size = "sm",
      weight = "normal",
      color = "default",
      truncate = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Tag
        ref={ref}
        className={cn(
          textSizeClasses[size],
          textWeightClasses[weight],
          textColorClasses[color],
          truncate && "truncate",
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);
Text.displayName = "Text";

// ---------------------------------------------------------------------------
// MetricText
// ---------------------------------------------------------------------------

export interface MetricTextProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, "prefix"> {
  size?: "sm" | "md" | "lg" | "xl";
  trend?: "up" | "down" | "neutral";
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

const metricSizeClasses: Record<NonNullable<MetricTextProps["size"]>, string> = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl",
};

const metricTrendClasses: Record<NonNullable<MetricTextProps["trend"]>, string> = {
  up: "text-green-600",
  down: "text-red-600",
  neutral: "text-foreground",
};

export const MetricText = React.forwardRef<HTMLSpanElement, MetricTextProps>(
  (
    {
      size = "md",
      trend = "neutral",
      prefix,
      suffix,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "font-semibold tabular-nums tracking-tight",
          metricSizeClasses[size],
          metricTrendClasses[trend],
          className
        )}
        {...props}
      >
        {prefix != null && (
          <span className="mr-0.5 text-[0.75em] font-medium opacity-70">
            {prefix}
          </span>
        )}
        {children}
        {suffix != null && (
          <span className="ml-0.5 text-[0.75em] font-medium opacity-70">
            {suffix}
          </span>
        )}
      </span>
    );
  }
);
MetricText.displayName = "MetricText";
