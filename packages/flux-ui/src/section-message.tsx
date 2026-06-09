import * as React from "react";
import { Info, CheckCircle2, AlertTriangle, XCircle, Sparkles } from "lucide-react";
import { cn } from "./utils";

export type SectionMessageVariant = "info" | "success" | "warning" | "error" | "discovery";

export interface SectionMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: SectionMessageVariant;
}

const variantConfig: Record<
  SectionMessageVariant,
  { border: string; bg: string; icon: React.ElementType; iconColor: string }
> = {
  info: {
    border: "border-l-blue-500",
    bg: "bg-blue-50/60 dark:bg-blue-950/20",
    icon: Info,
    iconColor: "text-blue-500 dark:text-blue-400",
  },
  success: {
    border: "border-l-green-500",
    bg: "bg-green-50/60 dark:bg-green-950/20",
    icon: CheckCircle2,
    iconColor: "text-green-500 dark:text-green-400",
  },
  warning: {
    border: "border-l-amber-500",
    bg: "bg-amber-50/60 dark:bg-amber-950/20",
    icon: AlertTriangle,
    iconColor: "text-amber-500 dark:text-amber-400",
  },
  error: {
    border: "border-l-red-500",
    bg: "bg-red-50/60 dark:bg-red-950/20",
    icon: XCircle,
    iconColor: "text-red-500 dark:text-red-400",
  },
  discovery: {
    border: "border-l-purple-500",
    bg: "bg-purple-50/60 dark:bg-purple-950/20",
    icon: Sparkles,
    iconColor: "text-purple-500 dark:text-purple-400",
  },
};

const SectionMessageVariantContext = React.createContext<SectionMessageVariant>("info");

const SectionMessage = React.forwardRef<HTMLDivElement, SectionMessageProps>(
  ({ className, variant = "info", children, ...props }, ref) => {
    const config = variantConfig[variant];
    const Icon = config.icon;
    return (
      <SectionMessageVariantContext.Provider value={variant}>
        <div
          ref={ref}
          role="region"
          className={cn(
            "flex w-full gap-4 rounded-xl border border-l-4 border-border p-5 shadow-sm transition-colors duration-pg-fast ease-pg-standard",
            config.border,
            config.bg,
            className
          )}
          {...props}
        >
          <Icon
            className={cn("mt-0.5 size-5 shrink-0", config.iconColor)}
            aria-hidden
          />
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </SectionMessageVariantContext.Provider>
    );
  }
);
SectionMessage.displayName = "SectionMessage";

const SectionMessageTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h4
    ref={ref}
    className={cn("text-sm font-semibold text-foreground mb-1", className)}
    {...props}
  />
));
SectionMessageTitle.displayName = "SectionMessageTitle";

const SectionMessageContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground leading-relaxed", className)}
    {...props}
  />
));
SectionMessageContent.displayName = "SectionMessageContent";

const SectionMessageActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-wrap gap-2 mt-3", className)}
    {...props}
  />
));
SectionMessageActions.displayName = "SectionMessageActions";

export {
  SectionMessage,
  SectionMessageTitle,
  SectionMessageContent,
  SectionMessageActions,
};
