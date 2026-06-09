"use client";

import * as React from "react";
import { Check, Pencil, X } from "lucide-react";
import { cn } from "./utils";

export interface InlineEditProps {
  value: string;
  onConfirm: (val: string) => void;
  placeholder?: string;
  multiline?: boolean;
  disabled?: boolean;
  showButtons?: boolean;
  readClassName?: string;
  inputClassName?: string;
}

const InlineEdit = React.forwardRef<HTMLDivElement, InlineEditProps>(
  (
    {
      value,
      onConfirm,
      placeholder = "Click to edit…",
      multiline = false,
      disabled = false,
      showButtons = false,
      readClassName,
      inputClassName,
    },
    ref
  ) => {
    const [editing, setEditing] = React.useState(false);
    const [draft, setDraft] = React.useState(value);
    const [hovered, setHovered] = React.useState(false);
    const inputRef = React.useRef<HTMLInputElement & HTMLTextAreaElement>(null);

    React.useEffect(() => {
      if (!editing) setDraft(value);
    }, [value, editing]);

    React.useEffect(() => {
      if (editing) {
        inputRef.current?.focus();
        if (inputRef.current) {
          const el = inputRef.current;
          const len = el.value.length;
          el.setSelectionRange(len, len);
        }
      }
    }, [editing]);

    const confirm = React.useCallback(() => {
      setEditing(false);
      if (draft !== value) onConfirm(draft);
    }, [draft, value, onConfirm]);

    const cancel = React.useCallback(() => {
      setEditing(false);
      setDraft(value);
    }, [value]);

    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !multiline) {
          e.preventDefault();
          confirm();
        } else if (e.key === "Escape") {
          e.preventDefault();
          cancel();
        }
      },
      [confirm, cancel, multiline]
    );

    const handleBlur = React.useCallback(
      (e: React.FocusEvent) => {
        // If showButtons, don't auto-confirm on blur unless focus leaves the whole group
        if (showButtons) {
          const related = e.relatedTarget as Node | null;
          const container = (e.currentTarget as HTMLElement).closest(
            "[data-inline-edit]"
          );
          if (container && related && container.contains(related)) return;
        }
        confirm();
      },
      [confirm, showButtons]
    );

    const startEditing = () => {
      if (disabled) return;
      setEditing(true);
    };

    const sharedInputClass = cn(
      "w-full rounded-md border border-border bg-card px-2 py-1 text-[15px] leading-tight text-foreground shadow-sm",
      "placeholder:text-muted-foreground",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
      "transition-colors duration-pg-fast ease-pg-standard",
      "disabled:cursor-not-allowed disabled:opacity-50",
      inputClassName
    );

    return (
      <div ref={ref} data-inline-edit="" className="relative inline-flex flex-col gap-1 max-w-full">
        {editing ? (
          <>
            {multiline ? (
              <textarea
                ref={inputRef as React.Ref<HTMLTextAreaElement>}
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                placeholder={placeholder}
                rows={3}
                className={cn(sharedInputClass, "resize-none leading-relaxed py-1.5")}
              />
            ) : (
              <input
                ref={inputRef as React.Ref<HTMLInputElement>}
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                placeholder={placeholder}
                className={sharedInputClass}
              />
            )}

            {showButtons && (
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    confirm();
                  }}
                  className={cn(
                    "inline-flex items-center justify-center rounded-md p-1",
                    "text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40",
                    "transition-colors duration-pg-fast ease-pg-standard",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35"
                  )}
                  aria-label="Confirm"
                >
                  <Check className="size-3.5" />
                </button>
                <button
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    cancel();
                  }}
                  className={cn(
                    "inline-flex items-center justify-center rounded-md p-1",
                    "text-destructive hover:bg-destructive/10",
                    "transition-colors duration-pg-fast ease-pg-standard",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35"
                  )}
                  aria-label="Cancel"
                >
                  <X className="size-3.5" />
                </button>
              </div>
            )}
          </>
        ) : (
          <span
            role="button"
            tabIndex={disabled ? -1 : 0}
            aria-label={value || placeholder}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={startEditing}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                startEditing();
              }
            }}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[15px] leading-tight",
              "transition-colors duration-pg-fast ease-pg-standard",
              !disabled && "hover:bg-muted cursor-text",
              disabled && "cursor-not-allowed opacity-50",
              readClassName
            )}
          >
            <span className={cn(!value && "text-muted-foreground")}>
              {value || placeholder}
            </span>
            {!disabled && (
              <Pencil
                className={cn(
                  "size-3.5 shrink-0 text-muted-foreground transition-opacity duration-pg-fast ease-pg-standard",
                  hovered ? "opacity-100" : "opacity-0"
                )}
                aria-hidden
              />
            )}
          </span>
        )}
      </div>
    );
  }
);

InlineEdit.displayName = "InlineEdit";

export { InlineEdit };
