"use client";

import * as React from "react";
import { cn } from "./utils";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

export interface AvatarGroupItem {
  src?: string;
  fallback: string;
  alt?: string;
}

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  avatars: AvatarGroupItem[];
  max?: number;
  size?: "sm" | "md" | "lg";
}

const sizeClasses: Record<NonNullable<AvatarGroupProps["size"]>, string> = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-10 w-10",
};

const fontSizeClasses: Record<NonNullable<AvatarGroupProps["size"]>, string> = {
  sm: "text-[10px]",
  md: "text-xs",
  lg: "text-xs",
};

const overlapClasses: Record<NonNullable<AvatarGroupProps["size"]>, string> = {
  sm: "-ml-2",
  md: "-ml-2",
  lg: "-ml-2",
};

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ avatars, max = 4, size = "md", className, ...props }, ref) => {
    const visible = avatars.slice(0, max);
    const overflowCount = avatars.length - max;
    const totalSlots = visible.length + (overflowCount > 0 ? 1 : 0);

    return (
      <div
        ref={ref}
        className={cn("flex items-center", className)}
        {...props}
      >
        {visible.map((avatar, index) => {
          const zIndex = totalSlots - index;
          return (
            <Avatar
              key={index}
              className={cn(
                sizeClasses[size],
                overlapClasses[size],
                "ring-2 ring-background border border-border shrink-0 transition-[margin] duration-[var(--duration-pg-fast,150ms)] ease-[var(--ease-pg-standard,cubic-bezier(0.4,0,0.2,1))] first:ml-0",
              )}
              style={{ zIndex }}
            >
              {avatar.src && (
                <AvatarImage src={avatar.src} alt={avatar.alt ?? avatar.fallback} />
              )}
              <AvatarFallback
                className={cn(
                  fontSizeClasses[size],
                  "font-medium",
                )}
              >
                {avatar.fallback}
              </AvatarFallback>
            </Avatar>
          );
        })}

        {overflowCount > 0 && (
          <div
            className={cn(
              sizeClasses[size],
              overlapClasses[size],
              fontSizeClasses[size],
              "relative shrink-0 flex items-center justify-center rounded-full border border-border bg-muted text-muted-foreground font-medium ring-2 ring-background transition-[margin] duration-[var(--duration-pg-fast,150ms)] ease-[var(--ease-pg-standard,cubic-bezier(0.4,0,0.2,1))]",
            )}
            style={{ zIndex: 0 }}
          >
            +{overflowCount}
          </div>
        )}
      </div>
    );
  }
);

AvatarGroup.displayName = "AvatarGroup";

export { AvatarGroup };
