"use client";

import * as React from "react";
import { cn } from "./utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SideNavProps extends React.ComponentPropsWithoutRef<"aside"> {
  /** "collapsed" renders icon-only at 60px; "expanded" renders full at 240px (default) */
  width?: "collapsed" | "expanded";
  /** Controlled collapsed state */
  isCollapsed?: boolean;
  /** Called when the sidebar requests a collapse/expand */
  onCollapse?: (collapsed: boolean) => void;
}

export interface SideNavItemProps extends React.ComponentPropsWithoutRef<"a"> {
  /** Icon element — required, rendered at size-4 shrink-0 */
  icon: React.ReactNode;
  /** Visible label — hidden when sidebar is collapsed */
  label: string;
  /** Highlights the item as the current route */
  isActive?: boolean;
  /** Navigable href — renders an <a> when provided */
  href?: string;
  /** Click handler */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /** Optional badge slot rendered after the label */
  badge?: React.ReactNode;
  /** Injected by SideNavSection — consumers should not pass this */
  _collapsed?: boolean;
}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface SideNavContextValue {
  isCollapsed: boolean;
}

const SideNavContext = React.createContext<SideNavContextValue>({
  isCollapsed: false,
});

function useSideNavContext() {
  return React.useContext(SideNavContext);
}

// ---------------------------------------------------------------------------
// SideNav
// ---------------------------------------------------------------------------

const SideNav = React.forwardRef<HTMLElement, SideNavProps>(
  (
    {
      className,
      width = "expanded",
      isCollapsed: isCollapsedProp,
      onCollapse,
      children,
      ...props
    },
    ref
  ) => {
    const collapsed =
      isCollapsedProp !== undefined ? isCollapsedProp : width === "collapsed";

    return (
      <SideNavContext.Provider value={{ isCollapsed: collapsed }}>
        <aside
          ref={ref}
          data-slot="side-nav"
          data-collapsed={collapsed}
          className={cn(
            "flex flex-col bg-sidebar border-r border-sidebar-border",
            "transition-all duration-pg-normal ease-pg-standard",
            collapsed ? "w-[60px]" : "w-[240px]",
            className
          )}
          {...props}
        >
          {children}
        </aside>
      </SideNavContext.Provider>
    );
  }
);
SideNav.displayName = "SideNav";

// ---------------------------------------------------------------------------
// SideNavHeader
// ---------------------------------------------------------------------------

const SideNavHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="side-nav-header"
    className={cn(
      "px-4 py-4 border-b border-sidebar-border shrink-0",
      className
    )}
    {...props}
  />
));
SideNavHeader.displayName = "SideNavHeader";

// ---------------------------------------------------------------------------
// SideNavSection
// ---------------------------------------------------------------------------

interface SideNavSectionProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Optional section label — hidden when sidebar is collapsed */
  label?: string;
}

const SideNavSection = React.forwardRef<HTMLDivElement, SideNavSectionProps>(
  ({ className, label, children, ...props }, ref) => {
    const { isCollapsed } = useSideNavContext();

    return (
      <div
        ref={ref}
        data-slot="side-nav-section"
        className={cn("px-3 py-2", className)}
        {...props}
      >
        {label && !isCollapsed && (
          <p className="mb-1 px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider select-none">
            {label}
          </p>
        )}
        {children}
      </div>
    );
  }
);
SideNavSection.displayName = "SideNavSection";

// ---------------------------------------------------------------------------
// SideNavItem
// ---------------------------------------------------------------------------

const SideNavItem = React.forwardRef<HTMLAnchorElement, SideNavItemProps>(
  (
    {
      className,
      icon,
      label,
      isActive = false,
      href,
      onClick,
      badge,
      _collapsed,
      children,
      ...props
    },
    ref
  ) => {
    const { isCollapsed } = useSideNavContext();
    const collapsed = _collapsed !== undefined ? _collapsed : isCollapsed;

    const baseClassName = cn(
      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer",
      "transition-colors duration-pg-fast ease-pg-standard",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
      "disabled:cursor-not-allowed disabled:opacity-50",
      isActive
        ? "bg-primary/10 text-primary font-medium"
        : "text-sidebar-foreground hover:bg-muted/50",
      collapsed && "justify-center px-0",
      className
    );

    const content = (
      <>
        <span className="size-4 shrink-0 flex items-center justify-center">
          {icon}
        </span>
        {!collapsed && (
          <>
            <span className="flex-1 truncate">{label}</span>
            {badge && <span className="shrink-0">{badge}</span>}
          </>
        )}
      </>
    );

    if (href) {
      return (
        <a
          ref={ref}
          href={href}
          title={collapsed ? label : undefined}
          aria-current={isActive ? "page" : undefined}
          className={baseClassName}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <a
        ref={ref}
        role="button"
        tabIndex={0}
        title={collapsed ? label : undefined}
        aria-current={isActive ? "page" : undefined}
        className={baseClassName}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick?.(e as unknown as React.MouseEvent<HTMLElement>);
          }
        }}
        {...props}
      >
        {content}
      </a>
    );
  }
);
SideNavItem.displayName = "SideNavItem";

// ---------------------------------------------------------------------------
// SideNavFooter
// ---------------------------------------------------------------------------

const SideNavFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="side-nav-footer"
    className={cn(
      "mt-auto border-t border-sidebar-border px-3 py-3 shrink-0",
      className
    )}
    {...props}
  />
));
SideNavFooter.displayName = "SideNavFooter";

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  SideNav,
  SideNavHeader,
  SideNavSection,
  SideNavItem,
  SideNavFooter,
};
