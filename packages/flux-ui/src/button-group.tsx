"use client";

import { cn } from "./utils";
import { ChevronDown } from "lucide-react";
import {
  forwardRef,
  useState,
  useRef,
  useEffect,
  type HTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { Button } from "./button";
import type { ButtonProps } from "./button";

// ---------------------------------------------------------------------------
// ButtonGroup
// ---------------------------------------------------------------------------

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  variant?: ButtonProps["variant"];
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ orientation = "horizontal", variant, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        data-variant={variant}
        className={cn(
          "inline-flex",
          orientation === "vertical" ? "flex-col" : "flex-row",
          // Horizontal connected borders
          orientation === "horizontal" && [
            "[&>*:not(:first-child)]:rounded-l-none",
            "[&>*:not(:last-child)]:rounded-r-none",
            "[&>*:not(:first-child)]:-ml-px",
          ],
          // Vertical connected borders
          orientation === "vertical" && [
            "[&>*:not(:first-child)]:rounded-t-none",
            "[&>*:not(:last-child)]:rounded-b-none",
            "[&>*:not(:first-child)]:-mt-px",
          ],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
ButtonGroup.displayName = "ButtonGroup";

// ---------------------------------------------------------------------------
// SplitButton
// ---------------------------------------------------------------------------

export interface SplitButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  label: ReactNode;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  children?: ReactNode;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  isLoading?: boolean;
}

export const SplitButton = forwardRef<HTMLDivElement, SplitButtonProps>(
  (
    {
      label,
      onClick,
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Merge forwarded ref with internal ref
    function setRefs(el: HTMLDivElement | null) {
      (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      if (typeof ref === "function") {
        ref(el);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }
    }

    // Close dropdown when clicking outside
    useEffect(() => {
      if (!open) return;
      function handleOutside(e: MouseEvent) {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleOutside);
      return () => document.removeEventListener("mousedown", handleOutside);
    }, [open]);

    return (
      <div
        ref={setRefs}
        className={cn("relative inline-flex", className)}
        {...(props as HTMLAttributes<HTMLDivElement>)}
      >
        {/* Primary action button */}
        <Button
          variant={variant}
          size={size}
          isLoading={isLoading}
          disabled={disabled}
          onClick={onClick}
          className="rounded-r-none"
        >
          {label}
        </Button>

        {/* Dropdown trigger */}
        <button
          type="button"
          disabled={disabled || isLoading}
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex items-center justify-center px-2 rounded-l-none -ml-px",
            "transition-colors duration-pg-fast ease-pg-standard",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
            "disabled:cursor-not-allowed disabled:opacity-50",
            // Match variant styling
            variant === "primary" &&
              "bg-primary text-primary-foreground border border-primary shadow-sm hover:bg-[var(--primary-hover)] border-l border-l-primary-foreground/20",
            variant === "secondary" &&
              "bg-muted text-foreground border border-border shadow-sm hover:bg-muted/85 dark:bg-muted/35 dark:hover:bg-muted/55 border-l-0",
            variant === "outline" &&
              "bg-card text-foreground border border-border shadow-sm hover:bg-muted border-l-0",
            variant === "ghost" &&
              "bg-transparent text-foreground border border-transparent hover:bg-muted border-l-0",
            variant === "danger" &&
              "bg-red-600 text-white border border-red-600 shadow-sm hover:bg-red-700 border-l border-l-white/20",
            // Size heights to match Button
            size === "sm" && "h-9 min-h-9 rounded-lg",
            size === "md" && "h-10 min-h-10 rounded-lg",
            size === "lg" && "h-[3.25rem] min-h-[3.25rem] rounded-xl"
          )}
        >
          <ChevronDown
            className={cn(
              "transition-transform duration-pg-fast ease-pg-standard",
              open && "rotate-180",
              size === "sm" ? "size-3.5" : size === "lg" ? "size-[1.125rem]" : "size-4"
            )}
          />
        </button>

        {/* Dropdown menu */}
        {open && children && (
          <div
            role="menu"
            className={cn(
              "absolute right-0 top-full mt-1 z-50",
              "bg-card border border-border rounded-lg shadow-lg py-1 min-w-32"
            )}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
);
SplitButton.displayName = "SplitButton";

// ---------------------------------------------------------------------------
// SplitButtonItem — convenience wrapper for dropdown items
// ---------------------------------------------------------------------------

export interface SplitButtonItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const SplitButtonItem = forwardRef<HTMLButtonElement, SplitButtonItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        role="menuitem"
        type="button"
        className={cn(
          "block w-full text-left px-3 py-2 text-sm text-foreground",
          "hover:bg-muted transition-colors duration-pg-fast ease-pg-standard",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "focus-visible:outline-none focus-visible:bg-muted",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
SplitButtonItem.displayName = "SplitButtonItem";
