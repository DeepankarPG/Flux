"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { Clock, ChevronDown, X } from "lucide-react";
import { cn } from "./utils";

/* ─── Types ──────────────────────────────────────────────────────────────── */

export interface TimePickerProps {
  /** Controlled value in 24-hour "HH:MM" format. Pass "" for no selection. */
  value: string;
  /** Called with a new "HH:MM" string, or "" when cleared. */
  onValueChange: (value: string) => void;
  /** Show 12-hour (AM/PM) columns instead of 24-hour. Default: false. */
  use24Hour?: boolean;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  className?: string;
}

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function parseHHMM(v: string): { h: number; m: number } | null {
  if (!v) return null;
  const parts = v.split(":");
  if (parts.length < 2) return null;
  const h = Number(parts[0]);
  const m = Number(parts[1]);
  if (isNaN(h) || isNaN(m)) return null;
  return { h, m };
}

function toHHMM(h: number, m: number) {
  return `${pad(h)}:${pad(m)}`;
}

function displayTime(value: string, use24Hour: boolean) {
  const p = parseHHMM(value);
  if (!p) return "";
  if (use24Hour) return `${pad(p.h)}:${pad(p.m)}`;
  const period = p.h < 12 ? "AM" : "PM";
  const displayH = p.h % 12 === 0 ? 12 : p.h % 12;
  return `${pad(displayH)}:${pad(p.m)} ${period}`;
}

/* ─── ScrollColumn ───────────────────────────────────────────────────────── */

const ITEM_H = 36; // px
const VISIBLE = 5; // items visible at once
const PAD = 2; // invisible padding rows above/below

interface ScrollColumnProps<T> {
  items: T[];
  selected: T;
  onSelect: (item: T) => void;
  renderItem: (item: T) => React.ReactNode;
  getKey: (item: T) => string | number;
}

function ScrollColumn<T>({
  items,
  selected,
  onSelect,
  renderItem,
  getKey,
}: ScrollColumnProps<T>) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const debounceRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const programmaticRef = React.useRef(false);

  const selectedIndex = items.findIndex((item) => getKey(item) === getKey(selected));

  /* Scroll to selected item */
  const scrollToIndex = React.useCallback(
    (index: number, behavior: ScrollBehavior = "smooth") => {
      const el = containerRef.current;
      if (!el) return;
      programmaticRef.current = true;
      el.scrollTo({ top: index * ITEM_H, behavior });
      if (behavior === "smooth") {
        // Release flag after animation
        setTimeout(() => {
          programmaticRef.current = false;
        }, 350);
      } else {
        programmaticRef.current = false;
      }
    },
    []
  );

  /* Initial scroll (instant) */
  React.useEffect(() => {
    if (selectedIndex >= 0) scrollToIndex(selectedIndex, "instant");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Scroll when selected changes from outside */
  React.useEffect(() => {
    if (selectedIndex >= 0) scrollToIndex(selectedIndex, "smooth");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

  /* Snap on scroll end */
  function handleScroll() {
    if (programmaticRef.current) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const el = containerRef.current;
      if (!el) return;
      const index = Math.round(el.scrollTop / ITEM_H);
      const clamped = Math.max(0, Math.min(index, items.length - 1));
      onSelect(items[clamped]);
      scrollToIndex(clamped, "smooth");
    }, 80);
  }

  return (
    <div className="relative flex flex-col items-center" style={{ width: 64 }}>
      {/* Highlight band */}
      <div
        className="pointer-events-none absolute left-0 right-0 rounded-lg bg-primary/10"
        style={{
          top: PAD * ITEM_H,
          height: ITEM_H,
          zIndex: 1,
        }}
      />

      {/* Scroll container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="relative z-10 overflow-y-scroll"
        style={{
          height: VISIBLE * ITEM_H,
          scrollSnapType: "y mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Top padding rows */}
        {Array.from({ length: PAD }).map((_, i) => (
          <div key={`pad-top-${i}`} style={{ height: ITEM_H }} />
        ))}

        {items.map((item) => {
          const isSelected = getKey(item) === getKey(selected);
          return (
            <div
              key={getKey(item)}
              onClick={() => {
                onSelect(item);
                scrollToIndex(items.findIndex((it) => getKey(it) === getKey(item)), "smooth");
              }}
              className={cn(
                "flex cursor-pointer items-center justify-center text-[14px] font-medium transition-colors duration-150 select-none",
                isSelected
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              )}
              style={{
                height: ITEM_H,
                scrollSnapAlign: "start",
              }}
            >
              {renderItem(item)}
            </div>
          );
        })}

        {/* Bottom padding rows */}
        {Array.from({ length: PAD }).map((_, i) => (
          <div key={`pad-bot-${i}`} style={{ height: ITEM_H }} />
        ))}
      </div>
    </div>
  );
}

/* ─── TimePicker ─────────────────────────────────────────────────────────── */

const PANEL_W = 224;
const PANEL_H = 220;

export const TimePicker = React.forwardRef<HTMLButtonElement, TimePickerProps>(
  (
    {
      value,
      onValueChange,
      use24Hour = false,
      placeholder = "Select time",
      label,
      disabled = false,
      className,
    },
    ref
  ) => {
    const parsed = parseHHMM(value);

    /* ── Local column state (derived from value, kept in sync) ── */
    const [hour, setHour] = React.useState<number>(() => {
      if (!parsed) return use24Hour ? 0 : 12;
      if (use24Hour) return parsed.h;
      return parsed.h % 12 === 0 ? 12 : parsed.h % 12;
    });
    const [minute, setMinute] = React.useState<number>(() => parsed?.m ?? 0);
    const [period, setPeriod] = React.useState<"AM" | "PM">(() => {
      if (!parsed) return "AM";
      return parsed.h < 12 ? "AM" : "PM";
    });

    /* Sync columns when value prop changes */
    React.useEffect(() => {
      const p = parseHHMM(value);
      if (p) {
        setMinute(p.m);
        if (use24Hour) {
          setHour(p.h);
        } else {
          setHour(p.h % 12 === 0 ? 12 : p.h % 12);
          setPeriod(p.h < 12 ? "AM" : "PM");
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    /* ── Panel open/position ── */
    const [open, setOpen] = React.useState(false);
    const [panelPos, setPanelPos] = React.useState({ top: 0, left: 0 });
    const [mounted, setMounted] = React.useState(false);

    const triggerRef = React.useRef<HTMLButtonElement>(null);
    const panelRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => { setMounted(true); }, []);

    function openPanel() {
      if (disabled) return;
      const el = triggerRef.current;
      if (!el) return;
      el.scrollIntoView({ block: "nearest", behavior: "auto" });
      requestAnimationFrame(() => {
        if (!triggerRef.current) return;
        const rect = triggerRef.current.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        let left = rect.left;
        if (left + PANEL_W > vw - 8) left = vw - PANEL_W - 8;
        let top = rect.bottom + 6;
        if (top + PANEL_H > vh - 8) top = rect.top - PANEL_H - 6;
        setPanelPos({ top, left });
        setOpen(true);
      });
    }

    /* Close on outside click */
    React.useEffect(() => {
      if (!open) return;
      function handler(e: MouseEvent) {
        const inTrigger = triggerRef.current?.contains(e.target as Node);
        const inPanel = panelRef.current?.contains(e.target as Node);
        if (!inTrigger && !inPanel) setOpen(false);
      }
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, [open]);

    /* ── Emit value when columns change ── */
    function emitChange(h: number, m: number, p: "AM" | "PM") {
      let h24 = h;
      if (!use24Hour) {
        if (p === "AM") h24 = h === 12 ? 0 : h;
        else h24 = h === 12 ? 12 : h + 12;
      }
      onValueChange(toHHMM(h24, m));
    }

    function handleHourChange(h: number) {
      setHour(h);
      emitChange(h, minute, period);
    }
    function handleMinuteChange(m: number) {
      setMinute(m);
      emitChange(hour, m, period);
    }
    function handlePeriodChange(p: "AM" | "PM") {
      setPeriod(p);
      emitChange(hour, minute, p);
    }

    /* ── Column data ── */
    const hours = use24Hour
      ? Array.from({ length: 24 }, (_, i) => i)
      : Array.from({ length: 12 }, (_, i) => i + 1);

    const minutes = Array.from({ length: 60 }, (_, i) => i);

    /* ── Clear ── */
    function handleClear(e: React.MouseEvent) {
      e.stopPropagation();
      onValueChange("");
    }

    /* ── Panel ── */
    const panel = open ? (
      <div
        ref={panelRef}
        className={cn(
          "isolate rounded-xl border border-border bg-popover text-popover-foreground shadow-lg",
          "flex flex-col gap-0"
        )}
        style={{
          position: "fixed",
          top: panelPos.top,
          left: panelPos.left,
          width: PANEL_W,
          zIndex: 20000,
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
          <Clock className="size-3.5 text-muted-foreground" />
          <span className="text-[13px] font-medium text-muted-foreground">
            {value ? displayTime(value, use24Hour) : "—"}
          </span>
        </div>

        {/* Column labels */}
        <div
          className="flex items-center justify-around px-2 pt-2 pb-0.5"
          style={{ paddingLeft: 8, paddingRight: use24Hour ? 8 : 8 }}
        >
          <span className="w-16 text-center text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
            Hr
          </span>
          <span className="w-16 text-center text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
            Min
          </span>
          {!use24Hour && (
            <span className="w-16 text-center text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
              AM/PM
            </span>
          )}
        </div>

        {/* Columns */}
        <div className="flex items-center justify-around px-2 pb-3">
          <ScrollColumn
            items={hours}
            selected={hour}
            onSelect={handleHourChange}
            renderItem={(h) => pad(h)}
            getKey={(h) => h}
          />
          <div className="text-[18px] font-light text-muted-foreground/50 pb-0.5">:</div>
          <ScrollColumn
            items={minutes}
            selected={minute}
            onSelect={handleMinuteChange}
            renderItem={(m) => pad(m)}
            getKey={(m) => m}
          />
          {!use24Hour && (
            <>
              <div className="w-px self-stretch bg-border mx-1" />
              <ScrollColumn
                items={["AM", "PM"] as const}
                selected={period}
                onSelect={handlePeriodChange}
                renderItem={(p) => p}
                getKey={(p) => p}
              />
            </>
          )}
        </div>
      </div>
    ) : null;

    /* ── Merge refs ── */
    function mergeRef(el: HTMLButtonElement | null) {
      (triggerRef as React.MutableRefObject<HTMLButtonElement | null>).current = el;
      if (typeof ref === "function") ref(el);
      else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = el;
    }

    return (
      <div className={cn("relative", className)}>
        {label && (
          <p className="mb-1.5 text-sm font-medium text-foreground">{label}</p>
        )}

        <button
          ref={mergeRef}
          type="button"
          disabled={disabled}
          onClick={() => (open ? setOpen(false) : openPanel())}
          className={cn(
            "flex h-11 min-h-11 w-full items-center gap-3 rounded-lg border border-border bg-card px-4 text-left text-[15px] shadow-sm",
            "transition-colors duration-150",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
            open && "border-ring ring-2 ring-ring/35",
            !open && !disabled && "hover:border-muted-foreground/45",
            disabled && "cursor-not-allowed opacity-50"
          )}
        >
          <Clock className="size-[1.0625rem] shrink-0 text-muted-foreground" />
          <span
            className={cn(
              "flex-1 truncate",
              value ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {value ? displayTime(value, use24Hour) : placeholder}
          </span>
          {value && !disabled ? (
            <X
              className="size-3.5 shrink-0 text-muted-foreground hover:text-foreground transition-colors duration-150"
              onClick={handleClear}
            />
          ) : (
            <ChevronDown
              className={cn(
                "size-[1.0625rem] shrink-0 text-muted-foreground transition-transform duration-150",
                open && "rotate-180"
              )}
            />
          )}
        </button>

        {mounted && panel && createPortal(panel, document.body)}
      </div>
    );
  }
);

TimePicker.displayName = "TimePicker";
