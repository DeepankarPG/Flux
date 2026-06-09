"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Check, ChevronDown, Search } from "lucide-react";
import { cn } from "./utils";

export interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

export const COUNTRIES: Country[] = [
  { code: "US", name: "United States", flag: "🇺🇸", dialCode: "+1" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", dialCode: "+44" },
  { code: "IN", name: "India", flag: "🇮🇳", dialCode: "+91" },
  { code: "AU", name: "Australia", flag: "🇦🇺", dialCode: "+61" },
  { code: "CA", name: "Canada", flag: "🇨🇦", dialCode: "+1" },
  { code: "DE", name: "Germany", flag: "🇩🇪", dialCode: "+49" },
  { code: "FR", name: "France", flag: "🇫🇷", dialCode: "+33" },
  { code: "JP", name: "Japan", flag: "🇯🇵", dialCode: "+81" },
  { code: "SG", name: "Singapore", flag: "🇸🇬", dialCode: "+65" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", dialCode: "+971" },
  { code: "CN", name: "China", flag: "🇨🇳", dialCode: "+86" },
  { code: "BR", name: "Brazil", flag: "🇧🇷", dialCode: "+55" },
  { code: "MX", name: "Mexico", flag: "🇲🇽", dialCode: "+52" },
  { code: "KR", name: "South Korea", flag: "🇰🇷", dialCode: "+82" },
  { code: "IT", name: "Italy", flag: "🇮🇹", dialCode: "+39" },
  { code: "ES", name: "Spain", flag: "🇪🇸", dialCode: "+34" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", dialCode: "+31" },
  { code: "SE", name: "Sweden", flag: "🇸🇪", dialCode: "+46" },
  { code: "NO", name: "Norway", flag: "🇳🇴", dialCode: "+47" },
  { code: "DK", name: "Denmark", flag: "🇩🇰", dialCode: "+45" },
  { code: "FI", name: "Finland", flag: "🇫🇮", dialCode: "+358" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭", dialCode: "+41" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿", dialCode: "+64" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", dialCode: "+27" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬", dialCode: "+234" },
  { code: "EG", name: "Egypt", flag: "🇪🇬", dialCode: "+20" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰", dialCode: "+92" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩", dialCode: "+880" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩", dialCode: "+62" },
  { code: "TH", name: "Thailand", flag: "🇹🇭", dialCode: "+66" },
];

export interface CountrySelectProps {
  value?: string;
  onValueChange?: (code: string) => void;
  placeholder?: string;
  showDialCode?: boolean;
  disabled?: boolean;
  className?: string;
}

const CountrySelect = React.forwardRef<HTMLButtonElement, CountrySelectProps>(
  (
    {
      value,
      onValueChange,
      placeholder = "Select country",
      showDialCode = false,
      disabled = false,
      className,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const searchRef = React.useRef<HTMLInputElement>(null);

    const selected = React.useMemo(
      () => COUNTRIES.find((c) => c.code === value),
      [value]
    );

    const filtered = React.useMemo(() => {
      const q = search.trim().toLowerCase();
      if (!q) return COUNTRIES;
      return COUNTRIES.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.code.toLowerCase().includes(q) ||
          c.dialCode.includes(q)
      );
    }, [search]);

    React.useEffect(() => {
      if (open) {
        // Delay focus until popover has mounted
        const id = setTimeout(() => searchRef.current?.focus(), 0);
        return () => clearTimeout(id);
      } else {
        setSearch("");
      }
    }, [open]);

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
              "flex h-11 min-h-11 w-full items-center justify-between gap-2.5 rounded-lg border border-border bg-card px-4 text-[15px] text-foreground shadow-sm",
              "transition-colors duration-pg-fast ease-pg-standard",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
              "disabled:cursor-not-allowed disabled:opacity-50",
              !selected && "text-muted-foreground",
              className
            )}
          >
            <span className="flex min-w-0 items-center gap-2.5">
              {selected ? (
                <>
                  <span className="text-base leading-none" aria-hidden="true">
                    {selected.flag}
                  </span>
                  <span className="truncate">{selected.name}</span>
                  {showDialCode && (
                    <span className="shrink-0 text-muted-foreground">
                      {selected.dialCode}
                    </span>
                  )}
                </>
              ) : (
                <span>{placeholder}</span>
              )}
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 shrink-0 text-muted-foreground opacity-70 transition-transform duration-pg-fast ease-pg-standard",
                open && "rotate-180"
              )}
              aria-hidden="true"
            />
          </button>
        </PopoverPrimitive.Trigger>

        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            align="start"
            sideOffset={6}
            className={cn(
              "z-[120] w-[var(--radix-popover-trigger-width)] min-w-[260px] rounded-xl border border-border bg-popover text-popover-foreground shadow-lg outline-none",
              "data-[state=open]:opacity-100 data-[state=closed]:opacity-0 transition-opacity duration-150"
            )}
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            {/* Search */}
            <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
              <Search className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search countries…"
                className={cn(
                  "flex-1 bg-transparent text-[14px] text-foreground placeholder:text-muted-foreground",
                  "focus-visible:outline-none"
                )}
                aria-label="Search countries"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="shrink-0 text-muted-foreground hover:text-foreground transition-colors duration-pg-fast ease-pg-standard"
                  aria-label="Clear search"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              )}
            </div>

            {/* List */}
            <div
              role="listbox"
              aria-label="Countries"
              className="max-h-64 overflow-y-auto p-1"
            >
              {filtered.length === 0 ? (
                <div className="py-6 text-center text-sm text-muted-foreground">
                  No countries found
                </div>
              ) : (
                filtered.map((country) => {
                  const isSelected = country.code === value;
                  return (
                    <button
                      key={country.code}
                      role="option"
                      aria-selected={isSelected}
                      type="button"
                      onClick={() => {
                        onValueChange?.(country.code);
                        setOpen(false);
                      }}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm",
                        "transition-colors duration-pg-fast ease-pg-standard",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
                        "hover:bg-muted",
                        isSelected && "bg-muted/60"
                      )}
                    >
                      <span className="text-base leading-none" aria-hidden="true">
                        {country.flag}
                      </span>
                      <span className="flex-1 truncate text-foreground">
                        {country.name}
                      </span>
                      <span className="shrink-0 text-xs text-muted-foreground">
                        {country.dialCode}
                      </span>
                      {isSelected && (
                        <Check
                          className="h-3.5 w-3.5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                      )}
                    </button>
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
CountrySelect.displayName = "CountrySelect";

export { CountrySelect };
