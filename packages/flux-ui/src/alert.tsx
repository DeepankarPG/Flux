"use client";

import * as React from "react";
import { X, Info, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { cn } from "./utils";

export type AlertVariant = "info" | "success" | "warning" | "error" | "neutral";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const variantStyles: Record<AlertVariant, string> = {
  info: "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-200",
  success: "bg-green-50 border-green-200 text-green-900 dark:bg-green-950/30 dark:border-green-800 dark:text-green-200",
  warning: "bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/30 dark:border-amber-800 dark:text-amber-200",
  error: "bg-red-50 border-red-200 text-red-900 dark:bg-red-950/30 dark:border-red-800 dark:text-red-200",
  neutral: "bg-muted border-border text-foreground",
};

const variantIcons: Record<AlertVariant, React.ElementType> = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
  neutral: Info,
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "info", dismissible, onDismiss, children, ...props }, ref) => {
    const Icon = variantIcons[variant];
    return (
      <div
        ref={ref}
        role="alert"
        className={cn("relative flex gap-3 rounded-xl border p-4 shadow-sm", variantStyles[variant], className)}
        {...props}
      >
        <Icon className="mt-0.5 size-4 shrink-0" aria-hidden />
        <div className="flex-1 min-w-0">{children}</div>
        {dismissible && (
          <button
            type="button"
            onClick={onDismiss}
            className="shrink-0 rounded-md p-0.5 opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35"
            aria-label="Dismiss"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5 ref={ref} className={cn("mb-1 text-sm font-semibold leading-none", className)} {...props} />
  )
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm opacity-90 leading-relaxed", className)} {...props} />
  )
);
AlertDescription.displayName = "AlertDescription";

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  ({ className, variant = "info", dismissible, onDismiss, children, ...props }, ref) => {
    const Icon = variantIcons[variant];
    return (
      <div
        ref={ref}
        role="banner"
        className={cn("flex items-center gap-3 border-b px-4 py-3", variantStyles[variant], className)}
        {...props}
      >
        <Icon className="size-4 shrink-0" aria-hidden />
        <div className="flex-1 min-w-0 text-sm">{children}</div>
        {dismissible && (
          <button
            type="button"
            onClick={onDismiss}
            className="shrink-0 rounded-md p-0.5 opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35"
            aria-label="Dismiss"
          >
            <X className="size-4" />
          </button>
        )}
      </div>
    );
  }
);
Banner.displayName = "Banner";

export { Alert, AlertTitle, AlertDescription, Banner };
