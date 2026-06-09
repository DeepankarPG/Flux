import * as React from "react";
import { X } from "lucide-react";
import { cn } from "./utils";

export type TagColorScheme = "neutral" | "blue" | "green" | "amber" | "red" | "purple";

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  colorScheme?: TagColorScheme;
  onRemove?: () => void;
  disabled?: boolean;
}

const colorClasses: Record<TagColorScheme, string> = {
  neutral: "bg-card border-border text-foreground",
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-700 dark:text-blue-300",
  green: "bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-300",
  amber: "bg-amber-500/10 border-amber-500/20 text-amber-700 dark:text-amber-300",
  red: "bg-red-500/10 border-red-500/20 text-red-700 dark:text-red-300",
  purple: "bg-purple-500/10 border-purple-500/20 text-purple-700 dark:text-purple-300",
};

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, colorScheme = "neutral", onRemove, disabled, children, ...props }, ref) => (
    <span
      ref={ref}
      className={cn("inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-medium transition-colors", colorClasses[colorScheme], disabled && "opacity-50 cursor-not-allowed", className)}
      {...props}
    >
      {children}
      {onRemove && !disabled && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          className="ml-0.5 rounded-sm opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          aria-label="Remove"
        >
          <X className="size-3" />
        </button>
      )}
    </span>
  )
);
Tag.displayName = "Tag";

export interface TagGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const TagGroup = React.forwardRef<HTMLDivElement, TagGroupProps>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex flex-wrap gap-1.5", className)} {...props} />
);
TagGroup.displayName = "TagGroup";

export { Tag, TagGroup };
