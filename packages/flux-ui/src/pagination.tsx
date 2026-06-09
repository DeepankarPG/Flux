"use client";

import { forwardRef } from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "./utils";

// ---------------------------------------------------------------------------
// Pagination (nav wrapper)
// ---------------------------------------------------------------------------

export interface PaginationProps extends React.ComponentPropsWithoutRef<"nav"> {}

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      role="navigation"
      aria-label="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  )
);
Pagination.displayName = "Pagination";

// ---------------------------------------------------------------------------
// PaginationContent (ul)
// ---------------------------------------------------------------------------

export interface PaginationContentProps
  extends React.ComponentPropsWithoutRef<"ul"> {}

export const PaginationContent = forwardRef<
  HTMLUListElement,
  PaginationContentProps
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

// ---------------------------------------------------------------------------
// PaginationItem (li)
// ---------------------------------------------------------------------------

export interface PaginationItemProps
  extends React.ComponentPropsWithoutRef<"li"> {}

export const PaginationItem = forwardRef<HTMLLIElement, PaginationItemProps>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("list-none", className)} {...props} />
  )
);
PaginationItem.displayName = "PaginationItem";

// ---------------------------------------------------------------------------
// PaginationLink (anchor / button-like)
// ---------------------------------------------------------------------------

export interface PaginationLinkProps
  extends React.ComponentPropsWithoutRef<"a"> {
  isActive?: boolean;
}

export const PaginationLink = forwardRef<HTMLAnchorElement, PaginationLinkProps>(
  ({ className, isActive = false, ...props }, ref) => (
    <a
      ref={ref}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        // base
        "h-9 w-9 inline-flex items-center justify-center rounded-lg text-sm font-medium border",
        "transition-colors duration-pg-fast ease-pg-standard",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
        "cursor-pointer select-none",
        // active
        isActive
          ? "bg-primary text-primary-foreground border-primary shadow-sm"
          : "text-muted-foreground border-border hover:bg-muted hover:text-foreground",
        className
      )}
      {...props}
    />
  )
);
PaginationLink.displayName = "PaginationLink";

// ---------------------------------------------------------------------------
// PaginationPrevious
// ---------------------------------------------------------------------------

export interface PaginationPreviousProps
  extends React.ComponentPropsWithoutRef<"a"> {
  disabled?: boolean;
}

export const PaginationPrevious = forwardRef<
  HTMLAnchorElement,
  PaginationPreviousProps
>(({ className, disabled, ...props }, ref) => (
  <a
    ref={ref}
    aria-label="Go to previous page"
    aria-disabled={disabled}
    className={cn(
      "h-9 px-3 inline-flex items-center justify-center gap-1.5 rounded-lg text-sm font-medium border border-border",
      "transition-colors duration-pg-fast ease-pg-standard",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
      "cursor-pointer select-none",
      disabled
        ? "cursor-not-allowed opacity-50 pointer-events-none text-muted-foreground border-border"
        : "text-muted-foreground hover:bg-muted hover:text-foreground",
      className
    )}
    {...props}
  >
    <ChevronLeft className="size-4" />
    <span>Previous</span>
  </a>
));
PaginationPrevious.displayName = "PaginationPrevious";

// ---------------------------------------------------------------------------
// PaginationNext
// ---------------------------------------------------------------------------

export interface PaginationNextProps
  extends React.ComponentPropsWithoutRef<"a"> {
  disabled?: boolean;
}

export const PaginationNext = forwardRef<
  HTMLAnchorElement,
  PaginationNextProps
>(({ className, disabled, ...props }, ref) => (
  <a
    ref={ref}
    aria-label="Go to next page"
    aria-disabled={disabled}
    className={cn(
      "h-9 px-3 inline-flex items-center justify-center gap-1.5 rounded-lg text-sm font-medium border border-border",
      "transition-colors duration-pg-fast ease-pg-standard",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
      "cursor-pointer select-none",
      disabled
        ? "cursor-not-allowed opacity-50 pointer-events-none text-muted-foreground border-border"
        : "text-muted-foreground hover:bg-muted hover:text-foreground",
      className
    )}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="size-4" />
  </a>
));
PaginationNext.displayName = "PaginationNext";

// ---------------------------------------------------------------------------
// PaginationEllipsis
// ---------------------------------------------------------------------------

export interface PaginationEllipsisProps
  extends React.ComponentPropsWithoutRef<"span"> {}

export const PaginationEllipsis = forwardRef<
  HTMLSpanElement,
  PaginationEllipsisProps
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    aria-hidden
    className={cn(
      "h-9 w-9 inline-flex items-center justify-center text-muted-foreground",
      className
    )}
    {...props}
  >
    <MoreHorizontal className="size-4" />
    <span className="sr-only">More pages</span>
  </span>
));
PaginationEllipsis.displayName = "PaginationEllipsis";
