"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, ChevronDown, Search } from "lucide-react";
import { cn } from "./utils";

export interface CheckboxSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface CheckboxSelectProps {
  options: CheckboxSelectOption[];
  value: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  showSearch?: boolean;
  disabled?: boolean;
  maxDisplay?: number;
  className?: string;
}

function getTriggerLabel(
  value: string[],
  options: CheckboxSelectOption[],
  placeholder: string,
  maxDisplay: number
): string {
  if (value.length === 0) return placeholder;
  if (value.length === options.length) return "All";
  if (value.length <= maxDisplay) {
    const labels = value
      .map((v) => options.find((o) => o.value === v)?.label ?? v)
      .filter(Boolean);
    return labels.join(", ");
  }
  return `${value.length} selected`;
}

const CheckboxSelect = React.forwardRef<HTMLButtonElement, CheckboxSelectProps>(
  (
    {
      options,
      value,
      onChange,
      placeholder = "Select options",
      showSearch = false,
      disabled = false,
      maxDisplay = 2,
      className,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState("");

    const filtered = React.useMemo(() => {
      if (!search.trim()) return options;
      const lower = search.toLowerCase();
      return options.filter((o) => o.label.toLowerCase().includes(lower));
    }, [options, search]);

    const allFilteredValues = filtered.filter((o) => !o.disabled).map((o) => o.value);
    const allFilteredSelected =
      allFilteredValues.length > 0 && allFilteredValues.every((v) => value.includes(v));
    const someFilteredSelected = allFilteredValues.some((v) => value.includes(v));

    function handleSelectAll() {
      if (allFilteredSelected) {
        onChange(value.filter((v) => !allFilteredValues.includes(v)));
      } else {
        const merged = Array.from(new Set([...value, ...allFilteredValues]));
        onChange(merged);
      }
    }

    function handleClearAll() {
      onChange(value.filter((v) => !allFilteredValues.includes(v)));
    }

    function handleToggle(optValue: string) {
      if (value.includes(optValue)) {
        onChange(value.filter((v) => v !== optValue));
      } else {
        onChange([...value, optValue]);
      }
    }

    const triggerLabel = getTriggerLabel(value, options, placeholder, maxDisplay);
    const hasSelection = value.length > 0;

    return (
      <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
        <PopoverPrimitive.Trigger asChild>
          <button
            ref={ref}
            type="button"
            disabled={disabled}
            aria-expanded={open}
            aria-haspopup="listbox"
            className={cn(
              "flex h-11 w-full items-center justify-between gap-2.5 rounded-lg border border-border bg-card px-4 py-2 text-[15px] shadow-sm outline-none",
              "transition-colors duration-pg-fast ease-pg-standard",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
              "disabled:cursor-not-allowed disabled:opacity-50",
              hasSelection ? "text-foreground" : "text-muted-foreground",
              className
            )}
          >
            <span className="truncate">{triggerLabel}</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 text-muted-foreground opacity-70 transition-transform duration-pg-fast ease-pg-standard",
                open && "rotate-180"
              )}
            />
          </button>
        </PopoverPrimitive.Trigger>

        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            align="start"
            sideOffset={6}
            className={cn(
              "z-[120] min-w-[var(--radix-popover-trigger-width)] w-full rounded-xl border border-border bg-popover text-popover-foreground shadow-lg outline-none p-1",
              "data-[state=open]:opacity-100 data-[state=closed]:opacity-0 transition-opacity duration-150"
            )}
          >
            {showSearch && (
              <div className="relative mb-1 px-1 pt-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search..."
                  className={cn(
                    "flex h-9 w-full rounded-md border border-border bg-card pl-8 pr-3 text-sm shadow-sm placeholder:text-muted-foreground",
                    "transition-colors duration-pg-fast ease-pg-standard",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35"
                  )}
                />
              </div>
            )}

            <div className="flex items-center justify-between px-2 py-1.5">
              <button
                type="button"
                onClick={handleSelectAll}
                className={cn(
                  "text-xs font-medium transition-colors duration-pg-fast ease-pg-standard",
                  allFilteredSelected
                    ? "text-primary hover:text-primary/80"
                    : someFilteredSelected
                    ? "text-primary hover:text-primary/80"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {allFilteredSelected ? "Deselect all" : "Select all"}
              </button>
              {value.length > 0 && (
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="text-xs font-medium text-muted-foreground transition-colors duration-pg-fast ease-pg-standard hover:text-foreground"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="my-0.5 h-px bg-border mx-1" />

            <div className="max-h-60 overflow-y-auto py-0.5">
              {filtered.length === 0 ? (
                <div className="px-3 py-6 text-center text-sm text-muted-foreground">
                  No options found.
                </div>
              ) : (
                filtered.map((option) => {
                  const checked = value.includes(option.value);
                  return (
                    <div
                      key={option.value}
                      role="option"
                      aria-selected={checked}
                      aria-disabled={option.disabled}
                      onClick={() => !option.disabled && handleToggle(option.value)}
                      className={cn(
                        "flex items-center gap-2.5 px-3 py-2 rounded-md text-sm select-none",
                        "transition-colors duration-pg-fast ease-pg-standard",
                        option.disabled
                          ? "cursor-not-allowed opacity-50"
                          : "cursor-pointer hover:bg-muted"
                      )}
                    >
                      <CheckboxPrimitive.Root
                        checked={checked}
                        disabled={option.disabled}
                        onCheckedChange={() => !option.disabled && handleToggle(option.value)}
                        onClick={(e) => e.stopPropagation()}
                        className={cn(
                          "peer h-4 w-4 shrink-0 rounded-md border border-border bg-card shadow-sm",
                          "transition-colors duration-pg-fast ease-pg-standard",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
                          "disabled:cursor-not-allowed disabled:opacity-50",
                          "data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        )}
                      >
                        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-primary-foreground">
                          <Check className="size-3" strokeWidth={3} />
                        </CheckboxPrimitive.Indicator>
                      </CheckboxPrimitive.Root>
                      <span
                        className={cn(
                          "leading-none",
                          checked ? "text-foreground" : "text-foreground"
                        )}
                      >
                        {option.label}
                      </span>
                    </div>
                  );
                })
              )}
            </div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    );
  }
);

CheckboxSelect.displayName = "CheckboxSelect";

export { CheckboxSelect };
