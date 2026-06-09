import * as React from "react";
import { Info, CheckCircle2, AlertTriangle, XCircle, Sparkles } from "lucide-react";
import { cn } from "./utils";

export type CalloutVariant = "info" | "success" | "warning" | "error" | "neutral" | "discovery";

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CalloutVariant;
}

const variantStyles: Record<CalloutVariant, string> = {
  info: "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-200",
  success: "bg-green-50 border-green-200 text-green-900 dark:bg-green-950/30 dark:border-green-800 dark:text-green-200",
  warning: "bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/30 dark:border-amber-800 dark:text-amber-200",
  error: "bg-red-50 border-red-200 text-red-900 dark:bg-red-950/30 dark:border-red-800 dark:text-red-200",
  neutral: "bg-muted border-border text-foreground",
  discovery: "bg-purple-50 border-purple-200 text-purple-900 dark:bg-purple-950/30 dark:border-purple-800 dark:text-purple-200",
};

const variantIcons: Record<CalloutVariant, React.ElementType> = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
  neutral: Info,
  discovery: Sparkles,
};

const Callout = React.forwardRef<HTMLDivElement, CalloutProps>(
  ({ className, variant = "info", children, ...props }, ref) => (
    <div ref={ref} className={cn("flex gap-3 rounded-xl border p-4", variantStyles[variant], className)} {...props}>
      {children}
    </div>
  )
);
Callout.displayName = "Callout";

interface CalloutIconProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CalloutVariant;
}

const CalloutIcon = React.forwardRef<HTMLDivElement, CalloutIconProps>(
  ({ className, variant = "info", ...props }, ref) => {
    const Icon = variantIcons[variant];
    return (
      <div ref={ref} className={cn("mt-0.5 shrink-0", className)} {...props}>
        <Icon className="size-4" aria-hidden />
      </div>
    );
  }
);
CalloutIcon.displayName = "CalloutIcon";

const CalloutTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm font-semibold", className)} {...props} />
  )
);
CalloutTitle.displayName = "CalloutTitle";

const CalloutText = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("mt-1 text-sm opacity-90 leading-relaxed", className)} {...props} />
  )
);
CalloutText.displayName = "CalloutText";

export { Callout, CalloutIcon, CalloutTitle, CalloutText };
