"use client";

import { cn } from "./utils";
import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode } from "react";

// ─── MenuDivider ─────────────────────────────────────────────────────────────

export const MenuDivider = forwardRef<HTMLHRElement, HTMLAttributes<HTMLHRElement>>(
  ({ className, ...props }, ref) => (
    <hr
      ref={ref}
      className={cn("h-px bg-border border-none my-1", className)}
      {...props}
    />
  )
);
MenuDivider.displayName = "MenuDivider";

// ─── MenuSection ─────────────────────────────────────────────────────────────

export interface MenuSectionProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  children: ReactNode;
}

export const MenuSection = forwardRef<HTMLDivElement, MenuSectionProps>(
  ({ label, children, className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col", className)} {...props}>
      {label && (
        <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground px-2 py-1.5 mt-2 first:mt-0 select-none">
          {label}
        </span>
      )}
      {children}
    </div>
  )
);
MenuSection.displayName = "MenuSection";

// ─── MenuItem ────────────────────────────────────────────────────────────────

type MenuItemBaseProps = {
  icon?: ReactNode;
  rightContent?: ReactNode;
  isSelected?: boolean;
  isDanger?: boolean;
};

type MenuItemButtonProps = MenuItemBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type MenuItemAnchorProps = MenuItemBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type MenuItemProps = MenuItemButtonProps | MenuItemAnchorProps;

const menuItemBaseClasses =
  "flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm transition-colors duration-pg-fast ease-pg-standard w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35";

export const MenuItem = forwardRef<HTMLButtonElement | HTMLAnchorElement, MenuItemProps>(
  (props, ref) => {
    const {
      icon,
      rightContent,
      isSelected,
      isDanger,
      children,
      className,
      ...rest
    } = props;

    const resolvedClasses = cn(
      menuItemBaseClasses,
      !isDanger && !isSelected && "text-muted-foreground hover:bg-muted hover:text-foreground",
      isSelected && !isDanger && "bg-muted text-foreground font-medium",
      isDanger && "text-destructive hover:bg-destructive/10",
      (rest as { disabled?: boolean }).disabled && "opacity-50 cursor-not-allowed pointer-events-none",
      className
    );

    const content = (
      <>
        {icon && (
          <span className="size-4 shrink-0 flex items-center justify-center [&>svg]:size-4">
            {icon}
          </span>
        )}
        <span className="flex-1 text-left truncate">{children}</span>
        {rightContent && (
          <span className="ml-auto shrink-0">{rightContent}</span>
        )}
      </>
    );

    if ("href" in props && props.href !== undefined) {
      const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={resolvedClasses}
          {...anchorRest}
        >
          {content}
        </a>
      );
    }

    const { disabled, ...buttonRest } = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        disabled={disabled}
        className={resolvedClasses}
        {...buttonRest}
      >
        {content}
      </button>
    );
  }
);
MenuItem.displayName = "MenuItem";

// ─── Menu ────────────────────────────────────────────────────────────────────

export interface MenuProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export const Menu = forwardRef<HTMLElement, MenuProps>(
  ({ children, className, ...props }, ref) => (
    <nav
      ref={ref as React.Ref<HTMLElement>}
      className={cn("flex flex-col", className)}
      {...props}
    >
      {children}
    </nav>
  )
);
Menu.displayName = "Menu";
