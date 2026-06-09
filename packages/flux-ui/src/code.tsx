"use client";

import { cn } from "./utils";
import { forwardRef, type HTMLAttributes, useState, useCallback } from "react";
import { Check, Copy } from "lucide-react";

// ---------------------------------------------------------------------------
// Code – inline
// ---------------------------------------------------------------------------

export type CodeProps = HTMLAttributes<HTMLElement>;

export const Code = forwardRef<HTMLElement, CodeProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={cn(
          "rounded-md bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground ring-1 ring-border",
          className
        )}
        {...props}
      >
        {children}
      </code>
    );
  }
);
Code.displayName = "Code";

// ---------------------------------------------------------------------------
// CodeBlock – multi-line
// ---------------------------------------------------------------------------

export interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
  /** The raw code string to display and optionally copy. */
  code: string;
  /** Optional filename shown in the header. */
  filename?: string;
  /** Optional language label shown as a badge in the header. */
  language?: string;
  /** Hide the copy button. Defaults to false. */
  hideCopy?: boolean;
}

export const CodeBlock = forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      code,
      filename,
      language,
      hideCopy = false,
      className,
      ...props
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        const timer = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(timer);
      } catch {
        // Clipboard access denied — fail silently.
      }
    }, [code]);

    const hasHeader = Boolean(filename || language);

    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden bg-[#0f1117] text-[#e5e7eb]",
          hasHeader ? "rounded-xl" : "rounded-xl",
          className
        )}
        {...props}
      >
        {/* Header */}
        {hasHeader && (
          <div className="flex items-center justify-between bg-[#1a1f2e] px-4 py-2 border-b border-[#2a3441]">
            <div className="flex items-center gap-2.5">
              {filename && (
                <span className="text-[#9ca3af] text-xs font-mono">
                  {filename}
                </span>
              )}
              {language && (
                <span className="rounded-md bg-[#2a3441] px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#6b7280]">
                  {language}
                </span>
              )}
            </div>
            {!hideCopy && (
              <CopyButton copied={copied} onClick={handleCopy} inHeader />
            )}
          </div>
        )}

        {/* Code area */}
        <div className="relative">
          <pre className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed">
            <code>{code}</code>
          </pre>

          {/* Copy button (no header case) */}
          {!hasHeader && !hideCopy && (
            <div className="absolute top-3 right-3">
              <CopyButton copied={copied} onClick={handleCopy} />
            </div>
          )}
        </div>
      </div>
    );
  }
);
CodeBlock.displayName = "CodeBlock";

// ---------------------------------------------------------------------------
// Internal: CopyButton
// ---------------------------------------------------------------------------

interface CopyButtonProps {
  copied: boolean;
  onClick: () => void;
  inHeader?: boolean;
}

function CopyButton({ copied, onClick, inHeader = false }: CopyButtonProps) {
  return (
    <button
      type="button"
      aria-label={copied ? "Copied" : "Copy code"}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-md transition-colors duration-pg-fast ease-pg-standard",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
        inHeader
          ? "size-6 text-[#6b7280] hover:bg-[#2a3441] hover:text-[#9ca3af]"
          : "size-7 bg-[#1a1f2e]/80 text-[#6b7280] hover:bg-[#1a1f2e] hover:text-[#9ca3af]"
      )}
    >
      {copied ? (
        <Check className="size-3.5 text-green-400" />
      ) : (
        <Copy className="size-3.5" />
      )}
    </button>
  );
}
