"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { getDocsNavSections, getComponentNavGroups } from "@/lib/docs-nav";
import { FluxLogo } from "@/components/docs/FluxLogo";
import { cn } from "@/lib/utils";

function isActive(href: string, pathname: string) {
  if (href === "/docs") return pathname === "/docs";
  if (href === "/docs/components") return pathname === "/docs/components";
  if (href === "/docs/foundations") return pathname === "/docs/foundations";
  if (href === "/docs/patterns") return pathname === "/docs/patterns";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function ComponentsSection({ pathname }: { pathname: string }) {
  const groups = getComponentNavGroups();
  const anyActive = groups.some((g) => g.items.some((i) => isActive(i.href, pathname)));

  // Track which groups are open — default open the one containing the active item
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    groups.forEach((g) => {
      if (g.items.some((i) => isActive(i.href, pathname))) {
        initial[g.label] = true;
      }
    });
    return initial;
  });

  const toggle = (label: string) =>
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));

  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Components</p>
        <Link
          href="/docs/components"
          className={cn(
            "rounded px-1.5 py-0.5 text-[11px] transition-colors hover:bg-muted/60",
            anyActive ? "text-primary" : "text-muted-foreground"
          )}
        >
          All
        </Link>
      </div>
      <div className="space-y-0.5">
        {groups.map((group) => {
          const isOpen = openGroups[group.label] ?? false;
          const hasActive = group.items.some((i) => isActive(i.href, pathname));

          return (
            <div key={group.label}>
              <button
                type="button"
                onClick={() => toggle(group.label)}
                className={cn(
                  "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-[13px] transition-colors",
                  hasActive
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                )}
              >
                <span>{group.label}</span>
                <ChevronDown
                  className={cn(
                    "size-3.5 shrink-0 transition-transform duration-150",
                    isOpen ? "rotate-0" : "-rotate-90"
                  )}
                />
              </button>
              {isOpen && (
                <ul className="ml-2 mt-0.5 space-y-0.5 border-l border-border pl-3">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-md px-2 py-1 text-[12px] transition-colors",
                          isActive(item.href, pathname)
                            ? "bg-primary/10 font-medium text-primary"
                            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function DocsSidebar() {
  const pathname = usePathname();
  const sections = getDocsNavSections();

  return (
    <aside className="hidden w-64 shrink-0 border-r border-border bg-card lg:block">
      <div className="sticky top-0 flex h-dvh flex-col gap-5 overflow-y-auto px-4 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 px-1">
          <FluxLogo size="sm" />
        </Link>

        {/* Main nav sections */}
        <nav className="flex flex-col gap-5" aria-label="Documentation">
          {sections.map((section) => (
            <div key={section.label}>
              <p className="mb-1.5 px-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {section.label}
              </p>
              <ul className="space-y-0.5">
                {section.items.map((item) => {
                  const active = isActive(item.href, pathname);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-md px-2 py-1.5 text-[13px] transition-colors",
                          active
                            ? "bg-primary/10 font-medium text-primary"
                            : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                        )}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Components — categorised + collapsible */}
          <ComponentsSection pathname={pathname} />
        </nav>
      </div>
    </aside>
  );
}
