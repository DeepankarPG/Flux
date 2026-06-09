"use client";

import * as React from "react";
import { Info, CheckCircle2, AlertTriangle, XCircle, X } from "lucide-react";
import { cn } from "./utils";

// ─── Types ────────────────────────────────────────────────────────────────────

export type FlagVariant = "info" | "success" | "warning" | "error";
export type FlagGroupPosition = "bottom-right" | "bottom-left" | "top-right" | "top-left";

export interface FlagAction {
  label: string;
  onClick: () => void;
}

export interface FlagProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Heading text shown in bold */
  title: string;
  /** Optional body copy shown below the title */
  description?: string;
  /** Visual severity / colour */
  variant?: FlagVariant;
  /** Override the default lucide icon */
  icon?: React.ReactNode;
  /** Called when the close button is pressed */
  onDismiss?: () => void;
  /** Action buttons rendered below the content. Pass `false` to disable. */
  autoDismiss?: number | false;
  /** Optional CTA buttons */
  actions?: FlagAction[];
}

export interface FlagGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Corner to anchor the stack */
  position?: FlagGroupPosition;
}

export interface UseFlagGroupReturn {
  flags: Array<FlagProps & { id: string }>;
  addFlag: (flag: Omit<FlagProps, "onDismiss"> & { id?: string }) => string;
  removeFlag: (id: string) => void;
  clearAll: () => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const DEFAULT_AUTO_DISMISS = 8000;

const variantBorder: Record<FlagVariant, string> = {
  info: "border-l-blue-500",
  success: "border-l-green-500",
  warning: "border-l-amber-500",
  error: "border-l-red-500",
};

const variantProgressBar: Record<FlagVariant, string> = {
  info: "bg-blue-500",
  success: "bg-green-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
};

const variantIconColor: Record<FlagVariant, string> = {
  info: "text-blue-500",
  success: "text-green-500",
  warning: "text-amber-500",
  error: "text-red-500",
};

const defaultIcons: Record<FlagVariant, React.ElementType> = {
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
};

// ─── Flag ─────────────────────────────────────────────────────────────────────

const Flag = React.forwardRef<HTMLDivElement, FlagProps>(
  (
    {
      className,
      title,
      description,
      variant = "info",
      icon,
      onDismiss,
      autoDismiss = DEFAULT_AUTO_DISMISS,
      actions,
      ...props
    },
    ref
  ) => {
    const [progress, setProgress] = React.useState(100);
    const pausedRef = React.useRef(false);
    const startTimeRef = React.useRef<number | null>(null);
    const elapsedRef = React.useRef(0);
    const rafRef = React.useRef<number | null>(null);
    const duration = autoDismiss === false ? null : autoDismiss;

    React.useEffect(() => {
      if (duration === null) return;

      const tick = (now: number) => {
        if (pausedRef.current) {
          startTimeRef.current = now;
          rafRef.current = requestAnimationFrame(tick);
          return;
        }
        if (startTimeRef.current === null) startTimeRef.current = now;
        elapsedRef.current += now - startTimeRef.current;
        startTimeRef.current = now;

        const remaining = Math.max(0, duration - elapsedRef.current);
        const pct = (remaining / duration) * 100;
        setProgress(pct);

        if (remaining <= 0) {
          onDismiss?.();
          return;
        }
        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
      return () => {
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [duration]);

    const handleMouseEnter = () => {
      pausedRef.current = true;
    };
    const handleMouseLeave = () => {
      pausedRef.current = false;
      startTimeRef.current = null;
    };

    const DefaultIcon = defaultIcons[variant];
    const renderedIcon = icon ?? <DefaultIcon className={cn("size-4 shrink-0 mt-0.5", variantIconColor[variant])} aria-hidden />;

    return (
      <div
        ref={ref}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative w-80 overflow-hidden rounded-xl border border-border bg-card shadow-lg",
          "border-l-4",
          variantBorder[variant],
          className
        )}
        {...props}
      >
        {/* Body */}
        <div className="flex gap-3 p-4 pr-10">
          {renderedIcon}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-card-foreground leading-snug">{title}</p>
            {description && (
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{description}</p>
            )}
            {actions && actions.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {actions.map((action) => (
                  <button
                    key={action.label}
                    type="button"
                    onClick={action.onClick}
                    className="text-xs font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Close button */}
        {onDismiss && (
          <button
            type="button"
            aria-label="Dismiss notification"
            onClick={onDismiss}
            className="absolute top-3 right-3 rounded p-0.5 text-muted-foreground hover:text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="size-3.5" aria-hidden />
          </button>
        )}

        {/* Auto-dismiss progress bar */}
        {duration !== null && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-muted">
            <div
              className={cn("h-full transition-none", variantProgressBar[variant])}
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    );
  }
);
Flag.displayName = "Flag";

// ─── FlagGroup ────────────────────────────────────────────────────────────────

const positionClasses: Record<FlagGroupPosition, string> = {
  "bottom-right": "bottom-4 right-4 flex-col-reverse",
  "bottom-left": "bottom-4 left-4 flex-col-reverse",
  "top-right": "top-4 right-4 flex-col",
  "top-left": "top-4 left-4 flex-col",
};

const FlagGroup = React.forwardRef<HTMLDivElement, FlagGroupProps>(
  ({ className, position = "bottom-right", children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "fixed z-50 flex gap-2",
        positionClasses[position],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
FlagGroup.displayName = "FlagGroup";

// ─── useFlagGroup ─────────────────────────────────────────────────────────────

function useFlagGroup(): UseFlagGroupReturn {
  const [flags, setFlags] = React.useState<Array<FlagProps & { id: string }>>([]);

  const removeFlag = React.useCallback((id: string) => {
    setFlags((prev) => prev.filter((f) => f.id !== id));
  }, []);

  const addFlag = React.useCallback(
    (flag: Omit<FlagProps, "onDismiss"> & { id?: string }): string => {
      const id = flag.id ?? `flag-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      setFlags((prev) => [...prev, { ...flag, id, onDismiss: () => removeFlag(id) }]);
      return id;
    },
    [removeFlag]
  );

  const clearAll = React.useCallback(() => {
    setFlags([]);
  }, []);

  return { flags, addFlag, removeFlag, clearAll };
}

// ─── Exports ──────────────────────────────────────────────────────────────────

export { Flag, FlagGroup, useFlagGroup };
