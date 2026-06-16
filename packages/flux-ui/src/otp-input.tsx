"use client";

import * as React from "react";
import { cn } from "./utils";

export interface OtpInputProps {
  /** Current OTP value (controlled). */
  value: string;
  /** Fires with the full joined string on every change. */
  onChange: (value: string) => void;
  /** Number of digit boxes. */
  length?: number;
  /** Fired when all boxes are filled. */
  onComplete?: (value: string) => void;
  disabled?: boolean;
  invalid?: boolean;
  autoFocus?: boolean;
  "aria-label"?: string;
}

export function OtpInput({
  value,
  onChange,
  length = 6,
  onComplete,
  disabled,
  invalid,
  autoFocus,
  "aria-label": ariaLabel = "One-time passcode",
}: OtpInputProps) {
  const refs = React.useRef<Array<HTMLInputElement | null>>([]);
  const digits = React.useMemo(() => {
    const arr = value.split("").slice(0, length);
    return Array.from({ length }, (_, i) => arr[i] ?? "");
  }, [value, length]);

  const emit = (next: string) => {
    onChange(next);
    if (next.length === length && !next.includes(" ")) onComplete?.(next);
  };

  const setAt = (index: number, char: string) => {
    const arr = digits.slice();
    arr[index] = char;
    emit(arr.join("").replace(/\s+$/g, ""));
  };

  const handleChange = (index: number, raw: string) => {
    const onlyDigits = raw.replace(/\D/g, "");
    if (!onlyDigits) {
      setAt(index, "");
      return;
    }
    const chars = onlyDigits.split("");
    const arr = digits.slice();
    let cursor = index;
    for (const c of chars) {
      if (cursor >= length) break;
      arr[cursor] = c;
      cursor += 1;
    }
    emit(arr.join(""));
    refs.current[Math.min(cursor, length - 1)]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      if (digits[index]) {
        setAt(index, "");
      } else if (index > 0) {
        refs.current[index - 1]?.focus();
        setAt(index - 1, "");
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      refs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      refs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    if (!pasted) return;
    emit(pasted);
    refs.current[Math.min(pasted.length, length - 1)]?.focus();
  };

  return (
    <div className="flex gap-2" role="group" aria-label={ariaLabel}>
      {digits.map((digit, i) => (
        <input
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          type="text"
          inputMode="numeric"
          autoComplete={i === 0 ? "one-time-code" : "off"}
          maxLength={length}
          value={digit}
          disabled={disabled}
          aria-invalid={invalid || undefined}
          autoFocus={autoFocus && i === 0}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
          className={cn(
            "h-12 w-11 rounded-lg border bg-card text-center text-lg font-semibold text-foreground shadow-sm transition-colors",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:border-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            invalid ? "border-destructive ring-destructive/20" : "border-input"
          )}
        />
      ))}
    </div>
  );
}
