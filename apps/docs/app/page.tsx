"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Plus } from "lucide-react";

/* ════════════════════════════════════════
   PLUS GRID — cursor repel
════════════════════════════════════════ */
function PlusGrid({
  cols = 26,
  rows = 14,
  opacity = 0.45,
  className = "",
}: {
  cols?: number;
  rows?: number;
  opacity?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const activeRef = useRef(false);
  const mouseRef = useRef({ x: 0, y: 0 });

  const dots = Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return {
      cx: ((col + 0.5) / cols) * 100,
      cy: ((row + 0.5) / rows) * 100,
    };
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function tick() {
      const spans = container!.querySelectorAll<HTMLSpanElement>("[data-plus]");
      const rect = container!.getBoundingClientRect();
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const RADIUS = 90;
      const STRENGTH = 32;

      spans.forEach((span) => {
        const pctX = parseFloat(span.dataset.cx!);
        const pctY = parseFloat(span.dataset.cy!);
        const dotX = (pctX / 100) * rect.width;
        const dotY = (pctY / 100) * rect.height;
        const dx = dotX - mx;
        const dy = dotY - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < RADIUS && dist > 0) {
          const force = (1 - dist / RADIUS) * STRENGTH;
          const tx = (dx / dist) * force;
          const ty = (dy / dist) * force;
          const fade = 0.08 + (dist / RADIUS) * (opacity - 0.08);
          span.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px))`;
          span.style.opacity = String(fade);
        } else {
          span.style.transform = "translate(-50%, -50%)";
          span.style.opacity = String(opacity);
        }
      });

      if (activeRef.current) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    function onMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (!activeRef.current) {
        activeRef.current = true;
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    function onMouseLeave() {
      activeRef.current = false;
      cancelAnimationFrame(rafRef.current);
      const spans = container!.querySelectorAll<HTMLSpanElement>("[data-plus]");
      spans.forEach((span) => {
        span.style.transform = "translate(-50%, -50%)";
        span.style.opacity = String(opacity);
      });
    }

    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);
    return () => {
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, [opacity]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{ pointerEvents: "auto" }}
    >
      {dots.map((d, i) => (
        <span
          key={i}
          data-plus
          data-cx={d.cx}
          data-cy={d.cy}
          style={{
            position: "absolute",
            left: `${d.cx}%`,
            top: `${d.cy}%`,
            fontFamily: "monospace",
            fontSize: 11,
            color: "white",
            opacity,
            pointerEvents: "none",
            userSelect: "none",
            willChange: "transform",
            transform: "translate(-50%, -50%)",
            transition: "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease",
          }}
        >
          +
        </span>
      ))}
    </div>
  );
}

/* ─── font stacks — Flux system fonts ─── */
const serif = { fontFamily: "var(--font-geist-sans), system-ui, sans-serif" } as const; // headings — Geist Sans
const mono  = { fontFamily: "var(--font-geist-mono), monospace" } as const;             // labels, nav, tags, code
const sans  = { fontFamily: "var(--font-geist-sans), system-ui, sans-serif" } as const; // body copy

const GH_URL  = "https://github.com/PayGlocal-Technologies/Flux";
const NPM_URL = "https://www.npmjs.com/package/@payglocal_ui/flux-ui";

/* ════════════════════════════════════════
   MARQUEE  (+ dividers, full-width dark)
════════════════════════════════════════ */
const MARQUEE = [
  "Design system",
  "68+ components",
  "Tailwind v4",
  "Open source",
  "Dark mode",
  "TypeScript",
  "Radix UI",
  "MIT License",
  "React 18+",
  "PayGlocal",
];

function Marquee() {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <div className="overflow-hidden border-t border-white/[0.07] bg-[#0a0a0a] py-4">
      <div className="flex gap-0 whitespace-nowrap"
        style={{ animation: "marquee 32s linear infinite", width: "max-content" }}>
        {items.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6 text-[10px] uppercase tracking-[0.22em] text-white/30" style={mono}>
            <Plus className="size-3 text-white/15 shrink-0" />
            {t}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

/* ════════════════════════════════════════
   HERO TERMINAL — realistic npm install
════════════════════════════════════════ */
const HERO_LINES: { text: string; color: string; delay?: number; prefix?: string }[] = [
  { text: "npm install @payglocal_ui/flux-ui", color: "#e2e8f0", prefix: "❯ " },
  { text: "", color: "" },
  { text: "npm warn deprecated inflight@1.0.6", color: "#6b7280" },
  { text: "added 68 packages in 3.2s", color: "#6b7280" },
  { text: "", color: "" },
  { text: "4 packages are looking for funding", color: "#6b7280" },
  { text: "  run `npm fund` for details", color: "#4b5563" },
  { text: "", color: "" },
  { text: "+ @payglocal_ui/flux-ui@0.2.1", color: "#34d399" },
  { text: "", color: "" },
  { text: "importing components...", color: "#6b7280", prefix: "❯ " },
  { text: "", color: "" },
  { text: 'import { Button, Card, DataTable } from "@payglocal_ui/flux-ui"', color: "#93c5fd" },
  { text: "", color: "" },
  { text: "✓ Button         — 6 variants, 3 sizes", color: "#34d399" },
  { text: "✓ Card           — with header, footer slots", color: "#34d399" },
  { text: "✓ DataTable      — pagination, density, skeletons", color: "#34d399" },
  { text: "✓ StatusBadge    — payment workflow states", color: "#34d399" },
  { text: "✓ CurrencyInput  — 7 currencies supported", color: "#34d399" },
  { text: "  ... 63 more components available", color: "#6b7280" },
  { text: "", color: "" },
  { text: "✓ ready in 0ms", color: "#34d399" },
];

function HeroTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const rafRef = useRef<number>(0);
  const stateRef = useRef({ line: 0, char: 0, pause: 0 });
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom as lines appear
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [visibleLines, charCount]);

  useEffect(() => {
    const CHAR_DELAY = 28;
    const LINE_PAUSE = 80;
    const FAST_PAUSE = 30;
    const END_PAUSE = 3000;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = now - last;
      const s = stateRef.current;

      if (s.pause > 0) {
        s.pause -= dt;
        last = now;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const line = HERO_LINES[s.line];
      const fullText = (line.prefix || "") + line.text;

      if (s.char < fullText.length) {
        const steps = Math.floor(dt / CHAR_DELAY);
        if (steps > 0) {
          s.char = Math.min(s.char + steps, fullText.length);
          setCharCount(s.char);
          last = now;
        }
      } else {
        s.line++;
        s.char = 0;
        setCharCount(0);
        if (s.line >= HERO_LINES.length) {
          s.pause = END_PAUSE;
          s.line = 0;
          setVisibleLines(0);
        } else {
          const isEmpty = HERO_LINES[s.line].text === "";
          s.pause = isEmpty ? FAST_PAUSE : LINE_PAUSE;
          setVisibleLines(s.line);
        }
        last = now;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl bg-[#0d1117] font-mono text-[13px]" style={{ ...mono, border: "1px solid rgba(255,255,255,0.08)" }}>
      {/* Title bar */}
      <div className="flex shrink-0 items-center gap-2 border-b border-white/[0.06] bg-[#161b22] px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="text-[11px] uppercase tracking-[0.2em] text-white/30" style={mono}>Terminal</span>
      </div>

      {/* Terminal body */}
      <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto p-5 leading-[1.7]" style={{ scrollbarWidth: "none" }}>
        {/* Prompt line at top */}
        <div className="mb-1 flex items-center gap-2 text-[11px] text-white/20">
          <span className="text-emerald-500/60">user</span>
          <span className="text-white/15">@</span>
          <span className="text-blue-400/60">payglocal</span>
          <span className="text-white/15">~</span>
          <span className="text-white/15">%</span>
        </div>

        {HERO_LINES.map((line, i) => {
          const fullText = (line.prefix || "") + line.text;
          const isPrefix = !!line.prefix;

          if (i < visibleLines) {
            return (
              <div key={i} style={{ color: line.color || "transparent", minHeight: "1.7em" }}>
                {isPrefix ? (
                  <>
                    <span className="text-emerald-400">{line.prefix}</span>
                    <span>{line.text}</span>
                  </>
                ) : fullText}
              </div>
            );
          }

          if (i === visibleLines) {
            const partial = fullText.slice(0, charCount);
            const prefixLen = (line.prefix || "").length;
            const prefixPart = partial.slice(0, prefixLen);
            const textPart = partial.slice(prefixLen);

            return (
              <div key={i} style={{ color: line.color || "transparent", minHeight: "1.7em" }}>
                {isPrefix ? (
                  <>
                    <span className="text-emerald-400">{prefixPart}</span>
                    <span>{textPart}</span>
                  </>
                ) : partial}
                <span
                  className="inline-block align-middle"
                  style={{
                    width: 2,
                    height: "0.9em",
                    background: "#e2e8f0",
                    marginLeft: 1,
                    animation: "blink 1s step-end infinite",
                  }}
                />
              </div>
            );
          }

          return null;
        })}
      </div>

      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </div>
  );
}

/* ════════════════════════════════════════
   TYPEWRITER CODE BLOCK
════════════════════════════════════════ */
const CODE_LINES: [string, string][] = [
  ["# install", "text-white/25"],
  ["npm i @payglocal_ui/flux-ui", "text-white/75"],
  ["", ""],
  ["# next.config.ts", "text-white/25"],
  ['transpilePackages: ["@payglocal_ui/flux-ui"]', "text-blue-400"],
  ["", ""],
  ["# globals.css", "text-white/25"],
  ['@source ".../flux-ui/src/**/*.{ts,tsx}"', "text-emerald-400"],
  ["", ""],
  ['import { Button } from "@payglocal_ui/flux-ui"', "text-white/75"],
  ['<Button variant="primary">Pay now</Button>', "text-white/50"],
];

function TypewriterCode() {
  // visibleLines: how many full lines shown; charCount: chars typed on current line
  const [visibleLines, setVisibleLines] = useState(0);
  const [charCount, setCharCount]     = useState(0);
  const rafRef = useRef<number>(0);
  const stateRef = useRef({ line: 0, char: 0, pause: 0 });

  useEffect(() => {
    const CHAR_DELAY = 38;   // ms per character
    const LINE_PAUSE = 120;  // ms pause between lines
    const END_PAUSE  = 1800; // ms pause before looping
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = now - lastTime;
      const s  = stateRef.current;

      if (s.pause > 0) {
        s.pause -= dt;
        lastTime = now;
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const [text] = CODE_LINES[s.line];

      if (s.char < text.length) {
        // accumulate time for char-by-char
        const steps = Math.floor(dt / CHAR_DELAY);
        if (steps > 0) {
          s.char = Math.min(s.char + steps, text.length);
          setCharCount(s.char);
          lastTime = now;
        }
      } else {
        // line complete — advance
        s.line++;
        s.char = 0;
        setCharCount(0);

        if (s.line >= CODE_LINES.length) {
          // loop: reset after end pause
          s.pause = END_PAUSE;
          s.line  = 0;
          setVisibleLines(0);
        } else {
          s.pause = LINE_PAUSE;
          setVisibleLines(s.line);
        }
        lastTime = now;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c0e] overflow-hidden shadow-2xl">
      <div className="border-b border-white/[0.06] bg-[#111] px-5 py-3 flex gap-2 items-center">
        {["","",""].map((_,i) => <div key={i} className="h-2.5 w-2.5 rounded-full bg-white/10" />)}
        <span className="ml-2 text-[10px] uppercase tracking-[0.16em] text-white/20" style={mono}>terminal</span>
      </div>
      <div className="p-6 space-y-2 text-[13px] h-[280px] overflow-hidden" style={mono}>
        {CODE_LINES.map(([text, cls], i) => {
          if (i < visibleLines) {
            // fully typed line
            return <div key={i} className={cls || "h-3"}>{text}</div>;
          }
          if (i === visibleLines) {
            // currently typing line
            const partial = text.slice(0, charCount);
            return (
              <div key={i} className={cls}>
                {partial}
                <span className="inline-block w-[2px] h-[1em] bg-current align-middle ml-[1px] animate-pulse" />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   DOT GRID (repel on hover)
════════════════════════════════════════ */
function DotGrid({ cols = 26, rows = 14 }: { cols?: number; rows?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<{ x: number; y: number; vx: number; vy: number }[]>(
    Array.from({ length: cols * rows }, () => ({ x: 0, y: 0, vx: 0, vy: 0 }))
  );
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef   = useRef<number>(0);

  useEffect(() => {
    const tick = () => {
      const els = containerRef.current?.querySelectorAll<HTMLSpanElement>("[data-dot]");
      if (!els) { rafRef.current = requestAnimationFrame(tick); return; }
      const rect = containerRef.current!.getBoundingClientRect();
      const m    = mouseRef.current;

      els.forEach((el, i) => {
        const d  = dotsRef.current[i];
        const er = el.getBoundingClientRect();
        const cx = er.left - rect.left + er.width / 2;
        const cy = er.top  - rect.top  + er.height / 2;
        if (m) {
          const dx = cx - m.x, dy = cy - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90 && dist > 0) {
            const f = (1 - dist / 90) * 32;
            d.vx += (dx / dist) * f * 0.45;
            d.vy += (dy / dist) * f * 0.45;
          }
        }
        d.vx *= 0.72; d.vy *= 0.72;
        d.x  += d.vx; d.y  += d.vy;
        d.x  *= 0.80; d.y  *= 0.80;
        el.style.transform = `translate(calc(-50% + ${d.x}px),calc(-50% + ${d.y}px))`;
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div ref={containerRef}
      className="grid select-none"
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: "20px" }}
      onMouseMove={e => {
        const r = containerRef.current!.getBoundingClientRect();
        mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
      }}
      onMouseLeave={() => { mouseRef.current = null; }}>
      {Array.from({ length: cols * rows }).map((_, i) => (
        <span key={i} data-dot
          className="relative block rounded-full bg-white/20"
          style={{ width: 3, height: 3, position: "relative", left: "50%", top: "50%" }} />
      ))}
    </div>
  );
}

/* ════════════════════════════════════════
   PAYGLOCAL PIXEL WORDMARK
════════════════════════════════════════ */

// Each letter: 5 cols × 7 rows bitmap
// Block sizes vary per row to match reference aesthetic
const PG_FONT: Record<string, number[]> = {
  P: [0b11110, 0b10001, 0b10001, 0b11110, 0b10000, 0b10000, 0b10000],
  A: [0b01110, 0b10001, 0b10001, 0b11111, 0b10001, 0b10001, 0b10001],
  Y: [0b10001, 0b10001, 0b01010, 0b00100, 0b00100, 0b00100, 0b00100],
  G: [0b01111, 0b10000, 0b10000, 0b10111, 0b10001, 0b10001, 0b01111],
  L: [0b10000, 0b10000, 0b10000, 0b10000, 0b10000, 0b10001, 0b11111],
  O: [0b01110, 0b10001, 0b10001, 0b10001, 0b10001, 0b10001, 0b01110],
  C: [0b01111, 0b10000, 0b10000, 0b10000, 0b10000, 0b10000, 0b01111],
};

// Row height varies to create visual interest like the reference
const ROW_HEIGHTS = [18, 22, 20, 16, 20, 22, 18];
const ROW_VGAP = 5;

function PixelWordmark() {
  const WORD = "PAYGLOCAL";
  const COLS = 5;
  const BW = 18;      // block width — wide rectangles
  const HGAP = 6;     // horizontal gap
  const HSTEP = BW + HGAP;
  const LETTER_SPACE = 24;
  const MARGIN_X = 0;
  const MARGIN_Y = 12;

  // Pre-compute total height
  const totalH = ROW_HEIGHTS.reduce((s, h) => s + h + ROW_VGAP, 0) + MARGIN_Y * 2;

  // Pre-compute letter widths and total width to scale viewBox
  const letterW = COLS * HSTEP - HGAP;
  const totalW = WORD.length * (letterW + LETTER_SPACE) - LETTER_SPACE + MARGIN_X * 2;

  // Build rects with staggered animation delays
  const rects: React.ReactNode[] = [];
  let xCursor = MARGIN_X;

  WORD.split("").forEach((ch, li) => {
    const rows = PG_FONT[ch] ?? [];
    let yCursor = MARGIN_Y;

    rows.forEach((row, ri) => {
      const bh = ROW_HEIGHTS[ri];
      for (let bit = COLS - 1; bit >= 0; bit--) {
        if ((row >> bit) & 1) {
          const x = xCursor + (COLS - 1 - bit) * HSTEP;
          const animDelay = `${((li * 7 + ri + (COLS - 1 - bit)) * 0.04).toFixed(2)}s`;
          rects.push(
            <rect
              key={`${li}-${ri}-${bit}`}
              x={x} y={yCursor}
              width={BW} height={bh}
              rx="3"
              fill="white"
              fillOpacity="0"
            >
              <animate
                attributeName="fill-opacity"
                values="0;0.35;0.22;0.35"
                dur="4s"
                begin={animDelay}
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
              />
            </rect>
          );
        }
      }
      yCursor += bh + ROW_VGAP;
    });

    xCursor += letterW + LETTER_SPACE;
  });

  return (
    <div className="overflow-hidden border-t border-white/[0.04] w-full py-16 lg:py-24">
      <svg
        viewBox={`0 0 ${totalW} ${totalH}`}
        xmlns="http://www.w3.org/2000/svg"
        className="w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-label="PayGlocal"
        style={{ display: "block" }}
      >
        {rects}
      </svg>
    </div>
  );
}

/* ════════════════════════════════════════
   FAQ ACCORDION
════════════════════════════════════════ */
const FAQS = [
  { q: "What is Flux UI?",
    a: "Flux UI is PayGlocal's open design system — the same component library, design tokens, and patterns used in the production merchant dashboard. It's published under the MIT license so any team can install, fork, and extend it without restrictions." },
  { q: "How is it different from shadcn/ui?",
    a: "Flux UI is purpose-built for payment and fintech interfaces. While shadcn/ui provides general-purpose primitives, Flux ships domain-specific components like CurrencyAmountInput, OtpInput, StatusBadge, and DataTable shaped by real PayGlocal merchant dashboard requirements — not hypotheticals." },
  { q: "Does it work with Turbopack?",
    a: "Yes. v0.2.0+ ships compiled JS to dist/ so there's no raw TypeScript in node_modules. Turbopack, Webpack, and Vite all work without any custom loaders or transpilePackages config changes." },
  { q: "Can I use it without Next.js?",
    a: "Yes. Flux UI is framework-agnostic React — it works with Vite, Remix, or any React 18+ setup. The only Next.js-specific piece is the docs site itself. Peer dependencies are just react and react-dom." },
  { q: "Is dark mode supported?",
    a: "Yes. Every component uses CSS variables that switch automatically when you add the .dark class to your root element. We recommend next-themes for React apps, which wires up system preference detection and manual toggling with zero config." },
  { q: "What does v0.2.0 include?",
    a: "v0.2.0 ships 40+ new components including Drawer, Spotlight, SideNav, Accordion, Flag, CountrySelect, CheckboxSelect, InlineEdit, Lozenge, and more. It also moves to compiled dist output for Turbopack compatibility and adds full TypeScript declaration files." },
  { q: "How do I contribute?",
    a: "The repo is open at github.com/PayGlocal-Technologies/Flux. File an issue to report bugs or request features, open a pull request with your changes, or start a GitHub Discussion for broader ideas. PRs are reviewed based on team bandwidth." },
];

function FaqItem({ q, a, light }: { q: string; a: string; light?: boolean }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  return (
    <div className={`border-b last:border-0 ${light ? "border-zinc-200" : "border-white/[0.07]"}`}>
      <button onClick={() => setOpen(v => !v)}
        className="flex w-full items-start justify-between gap-6 py-5 text-left">
        <span className={`text-[17px] font-normal ${light ? "text-zinc-800" : "text-white/85"}`} style={sans}>{q}</span>
        <span className={`mt-1 shrink-0 transition-transform ${light ? "text-zinc-400" : "text-white/30"}`} style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>
          <Plus className="size-5" />
        </span>
      </button>
      <div ref={bodyRef} className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? (bodyRef.current?.scrollHeight ?? 400) : 0 }}>
        <p className={`pb-6 text-[15px] leading-relaxed ${light ? "text-zinc-500" : "text-white/45"}`} style={sans}>{a}</p>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   NAV LINKS
════════════════════════════════════════ */
const NAV = [
  { href: "/docs/foundations", label: "Foundations" },
  { href: "/docs/components",  label: "Components"  },
  { href: "/docs/patterns",    label: "Patterns"    },
  { href: "/docs",             label: "Docs"        },
];

/* ════════════════════════════════════════
   PAGE
════════════════════════════════════════ */
function InstallCommand() {
  const [copied, setCopied] = useState(false);
  const cmd = "npm i @payglocal_ui/flux-ui";

  const copy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6 inline-flex w-fit items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
      <code className="text-[13px] text-white/60" style={mono}>
        npm i <span className="text-white">@payglocal_ui/flux-ui</span>
      </code>
      <div className="ml-3 flex items-center gap-2">
        <span className="rounded-md border border-white/[0.08] px-2 py-0.5 text-[9px] text-white/30" style={mono}>v0.2.0</span>
        <button
          onClick={copy}
          className="flex h-6 w-6 items-center justify-center rounded text-white/30 transition-colors hover:bg-white/[0.08] hover:text-white/70"
          aria-label="Copy install command"
        >
          {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
        </button>
      </div>
    </div>
  );
}

export default function LandingPage() {

  return (
    <div style={{ background: "#0a0a0a", color: "#fff", ...sans }}>

      {/* ── NAV ── */}
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-white/[0.07] bg-[#0a0a0a]/95 px-6 backdrop-blur lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/flux-logo.svg" alt="Flux UI" className="h-7 w-7 shrink-0" />
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/80" style={mono}>Flux UI</span>
          <span className="rounded border border-blue-500/40 bg-blue-600/20 px-1.5 py-0.5 text-[9px] uppercase tracking-[0.14em] text-blue-400" style={mono}>v0.2</span>
        </Link>

        {/* Nav links */}
        <nav className="hidden items-center gap-1 sm:flex">
          {NAV.map(l => (
            <Link key={l.href} href={l.href}
              className="px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white/40 transition-colors hover:text-white/80"
              style={mono}>
              / {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link href="/docs/installation"
          className="hidden h-8 items-center gap-1.5 rounded-lg border border-white/20 px-4 text-[10px] uppercase tracking-[0.16em] text-white/80 transition-colors hover:border-white/40 hover:text-white sm:flex"
          style={mono}>
          Get started <ArrowUpRight className="size-3" />
        </Link>
      </header>

      {/* ── POWERED BY strip ── */}
      <div className="flex items-center justify-center gap-3 border-b border-white/[0.06] bg-[#0a0a0a] py-2.5">
        <span className="text-[9px] uppercase tracking-[0.22em] text-white/25" style={mono}>
          Open design system · PayGlocal Technologies
        </span>
        <span className="text-white/10">///</span>
        <span className="text-[9px] uppercase tracking-[0.22em] text-white/25" style={mono}>
          React · Tailwind v4 · Radix UI · TypeScript
        </span>
      </div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: "#0a0a0a" }}>
        {/* Blue glow top-left only */}
        <div className="pointer-events-none absolute -left-40 -top-20 h-[400px] w-[500px] rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-0 border-x border-white/[0.06] lg:grid-cols-[1fr_1px_1fr]" style={{ height: "calc(100dvh - 56px - 36px - 80px - 48px)", minHeight: 420 }}>
          {/* Left — copy */}
          <div className="flex flex-col justify-center px-8 py-8 lg:px-14">
            {/* Eyebrow */}
            <div className="mb-5 inline-flex w-fit items-center gap-2 rounded border border-white/10 bg-white/[0.04] px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
              <span className="text-[9px] uppercase tracking-[0.22em] text-white/50" style={mono}>
                Now live · Open source design system
              </span>
            </div>

            <h1 className="text-[clamp(2.4rem,5vw,3.8rem)] font-semibold leading-[1.1] tracking-tight text-white" style={serif}>
              The design system<br />
              we ship in product.
            </h1>

            <p className="mt-4 max-w-[400px] text-[14px] leading-relaxed text-white/45" style={sans}>
              Flux UI delivers 68+ production-grade components, semantic design tokens,
              and patterns — same system PayGlocal uses in the merchant dashboard.
            </p>

            {/* Install command */}
            <InstallCommand />

            {/* CTAs */}
            <div className="mt-3 flex items-center gap-3">
              <Link href="/docs/installation"
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-[var(--primary-hover)]"
                style={sans}>
                Get started <ArrowUpRight className="size-4" />
              </Link>
              <a href={GH_URL} target="_blank" rel="noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/10 px-5 text-sm font-medium text-white/60 transition-colors hover:border-white/20 hover:text-white"
                style={sans}>
                <Github className="size-4" /> GitHub
              </a>
            </div>

            {/* Compatible with — logos */}
            <div className="mt-5 flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.18em] text-white/25 shrink-0" style={mono}>Works with:</span>
              {/* Next.js */}
              <svg className="h-5 w-auto opacity-100 transition-opacity" viewBox="0 0 180 180" fill="none" aria-label="Next.js">
                <mask id="nxt" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
                  <circle cx="90" cy="90" r="90" fill="black"/>
                </mask>
                <g mask="url(#nxt)">
                  <circle cx="90" cy="90" r="90" fill="white"/>
                  <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L140.999 164.845C143.926 162.425 146.778 159.843 149.508 157.52Z" fill="url(#nxt-g1)"/>
                  <rect x="115" y="54" width="12" height="72" fill="url(#nxt-g2)"/>
                </g>
                <defs>
                  <linearGradient id="nxt-g1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="black"/><stop offset="1" stopColor="black" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="nxt-g2" x1="115" y1="54" x2="115.5" y2="106.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="black"/><stop offset="1" stopColor="black" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
              {/* Vite */}
              <svg className="h-5 w-auto opacity-100 transition-opacity" viewBox="0 0 410 404" fill="none" aria-label="Vite">
                <path d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5246C6.38087 52.1904 12.6802 43.2652 21.0281 44.7341L205.965 77.2197C207.6 77.5028 209.27 77.5028 210.905 77.2197L391.092 44.7341C399.44 43.2652 405.739 52.1904 399.641 59.5246Z" fill="url(#vite-g1)"/>
                <path d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 172.928 194.671 176.54L182.368 263.009C181.853 266.677 185.173 269.686 188.741 268.752L210.513 263.041C214.087 262.105 217.411 265.127 216.878 268.799L198.819 390.893C198.124 395.457 204.354 397.842 207.166 394.02L209.198 391.237L323.071 149.166C324.922 145.308 321.816 140.93 317.578 141.74L278.281 149.445C274.59 150.166 271.499 146.981 272.351 143.313L308.915 30.2581C309.768 26.5842 306.664 23.3981 302.966 24.132L292.965 1.5744Z" fill="url(#vite-g2)"/>
                <defs>
                  <linearGradient id="vite-g1" x1="6" y1="32.9909" x2="235" y2="344.991" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#41D1FF"/><stop offset="1" stopColor="#BD34FE"/>
                  </linearGradient>
                  <linearGradient id="vite-g2" x1="194.651" y1="8.81818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF3E00"/><stop offset="1" stopColor="#FFD438"/>
                  </linearGradient>
                </defs>
              </svg>
              {/* Remix — wordmark R */}
              <svg className="h-5 w-auto opacity-100 transition-opacity" viewBox="0 0 78 65" fill="white" aria-label="Remix">
                <path fillRule="evenodd" clipRule="evenodd" d="M55.5 64.9998H77.7813C77.7813 64.9998 77.5226 57.6372 72.4306 52.5452C67.9636 48.0782 62.3979 47.7052 59.781 47.7052V47.6984C59.781 47.6984 71.3574 46.0836 71.3574 32.3562C71.3574 18.6288 60.0948 13 41.7258 13H0V64.9998H22.752V50.5978H40.038C40.038 50.5978 55.5 50.5978 55.5 64.9998ZM22.752 30.1098V37.0428H39.6218C45.6116 37.0428 49.2372 35.1682 49.2372 30.4468C49.2372 25.7254 45.6116 23.8508 39.6218 23.8508H22.752V30.1098Z"/>
              </svg>
              {/* Turbopack — simple T wordmark */}
              <svg className="h-5 w-auto opacity-100 transition-opacity" viewBox="0 0 64 64" fill="none" aria-label="Turbopack">
                <path d="M32 4L56 16V40L32 60L8 40V16L32 4Z" fill="url(#turbo-g)"/>
                <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fontSize="22" fontWeight="700" fill="white" fontFamily="sans-serif">T</text>
                <defs>
                  <linearGradient id="turbo-g" x1="8" y1="4" x2="56" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF1E56"/><stop offset="1" stopColor="#FF6B00"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden bg-white/[0.06] lg:block" />

          {/* Right — hero terminal centred with + grid bg */}
          <div className="relative hidden lg:flex lg:items-center lg:justify-center" style={{ background: "#0a0a0a", overflow: "hidden" }}>
            {/* + grid fills the full flex cell — inset-0 stretches to parent height */}
            <PlusGrid cols={38} rows={22} opacity={0.18} className="z-0" />
            {/* Terminal card — centred */}
            <div className="relative z-10 w-[92%] max-w-[624px] my-12" style={{ height: 408, boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)" }}>
              <HeroTerminal />
            </div>
          </div>

        </div>

        {/* Stats row */}
        <div className="relative mx-auto grid max-w-[1400px] grid-cols-3 border-t border-x border-white/[0.06]">
          {[
            { label: "Components shipped", val: "68+_" },
            { label: "Tailwind CSS version", val: "v4_"  },
            { label: "Open source license",  val: "MIT_" },
          ].map((s, i) => (
            <div key={s.label} className={`px-8 py-4 ${i < 2 ? "border-r border-white/[0.06]" : ""}`}>
              <p className="text-[9px] uppercase tracking-[0.2em] text-white/25 mb-2" style={mono}>{s.label}</p>
              <p className="text-[1.5rem] font-semibold text-white" style={serif}>{s.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── PILLARS — light ── */}
      <section className="border-t border-zinc-200 bg-white px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-14">
            <p className="mb-3 text-[9px] uppercase tracking-[0.22em] text-zinc-400" style={mono}>/ System</p>
            <h2 className="text-[clamp(2.8rem,5vw,4.2rem)] font-semibold leading-[1.1] tracking-tight text-zinc-900" style={serif}>
              Design and develop
              <br />with confidence
            </h2>
          </div>

          <div className="grid border border-zinc-200 sm:grid-cols-3">
            {[
              { num: "001", href: "/docs/foundations", title: "Foundations",
                desc: "Tokens, color, type, spacing, grid, motion.",
                tags: ["Tokens", "Color", "Spacing", "Grid", "Motion"],
                stat: "35+", statLabel: "tokens" },
              { num: "002", href: "/docs/components", title: "Components",
                desc: "Production primitives with live previews and a11y.",
                tags: ["Button", "DataTable", "OTP", "StatusBadge", "Drawer"],
                stat: "68+", statLabel: "components" },
              { num: "003", href: "/docs/patterns", title: "Patterns",
                desc: "Dashboard shell, forms, and multi-step flows.",
                tags: ["Dashboard", "Forms", "Auth"],
                stat: "3+", statLabel: "patterns" },
            ].map(p => (
              <Link key={p.num} href={p.href}
                className="group flex flex-col border-r border-zinc-200 bg-white p-8 transition-colors last:border-r-0 hover:bg-zinc-50">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-400" style={mono}>{p.num}</span>
                  <ArrowUpRight className="size-4 text-zinc-300 transition-colors group-hover:text-zinc-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-[22px] font-semibold text-zinc-900" style={serif}>{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500" style={sans}>{p.desc}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.tags.map(t => (
                    <span key={t} className="rounded-md border border-zinc-200 px-2 py-0.5 text-[9px] uppercase tracking-[0.14em] text-zinc-400" style={mono}>{t}</span>
                  ))}
                </div>
                <div className="mt-6 border-t border-zinc-100 pt-5 flex items-baseline gap-1.5">
                  <span className="text-3xl font-semibold text-zinc-900" style={serif}>{p.stat}</span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-400" style={mono}>{p.statLabel}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALTERNATING FEATURES ── */}
      {[
        { cat: "Developer experience",
          title: "Install in one command.\nStart building immediately.",
          body: "Configure Tailwind v4 with two @source lines, paste the CSS token block, add transpilePackages. Works with Turbopack, Webpack, and Vite.",
          href: "/docs/installation", cta: "Installation guide",
          visual: <TypewriterCode />,
        },
      ].map((feat, i) => (
        <section key={i} className="border-t border-white/[0.06] bg-[#0a0a0a] px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-[1400px]">
            <div className={`grid gap-16 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <p className="mb-3 text-[9px] uppercase tracking-[0.22em] text-blue-400" style={mono}>{feat.cat}</p>
                <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-normal leading-[1.06] tracking-tight text-white whitespace-pre-line" style={serif}>
                  {feat.title}
                </h2>
                <p className="mt-5 text-[14px] leading-relaxed text-white/40" style={sans}>{feat.body}</p>
                <Link href={feat.href}
                  className="mt-8 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-white/50 underline-offset-4 hover:text-white"
                  style={mono}>
                  {feat.cta} <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>{feat.visual}</div>
            </div>
          </div>
        </section>
      ))}

      {/* ── FAQ — light ── */}
      <section className="border-t border-zinc-200 bg-white px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-16 lg:grid-cols-[420px_1fr]">
            <div className="lg:sticky lg:top-20 lg:self-start">
              <div className="mb-5 inline-flex items-center rounded border border-zinc-200 px-3 py-1.5">
                <span className="text-[10px] uppercase tracking-[0.18em] text-zinc-400" style={mono}>FAQ</span>
              </div>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-[1.1] tracking-tight text-zinc-900" style={serif}>
                Frequently<br />asked questions
              </h2>
              <p className="mt-5 text-[14px] leading-relaxed text-zinc-500" style={sans}>
                Can&apos;t find what you need?{" "}
                <a href={GH_URL} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                  Open a GitHub issue.
                </a>
              </p>
            </div>
            <div>{FAQS.map(f => <FaqItem key={f.q} q={f.q} a={f.a} light />)}</div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.06] bg-[#0a0a0a] px-6 py-14 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-12 pb-8 lg:flex-row lg:justify-between">
            <div className="max-w-xs space-y-5">
              <div className="flex items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/flux-logo.svg" alt="Flux UI" className="h-8 w-8 shrink-0" />
                <span className="text-[13px] uppercase tracking-[0.2em] text-white/70" style={mono}>Flux UI</span>
              </div>
              <p className="text-[15px] leading-relaxed text-white/40" style={sans}>
                Open design system by PayGlocal Technologies. MIT licensed.
                Built with React, Tailwind CSS v4, and Radix UI.
              </p>
              <div className="flex gap-3">
                <a href={GH_URL} target="_blank" rel="noreferrer"
                  className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-[11px] uppercase tracking-[0.14em] text-white/50 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white/80"
                  style={mono}>
                  <Github className="size-3" /> GitHub
                </a>
                <a href={NPM_URL} target="_blank" rel="noreferrer"
                  className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-[11px] uppercase tracking-[0.14em] text-white/50 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white/80"
                  style={mono}>
                  ↗ npm
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              {[
                { label: "System", links: [
                  {href:"/docs",label:"Introduction"},
                  {href:"/docs/installation",label:"Installation"},
                  {href:"/docs/theming",label:"Theming"},
                  {href:"/docs/guidelines",label:"Guidelines"},
                ]},
                { label: "Foundations", links: [
                  {href:"/docs/foundations/design-tokens",label:"Design tokens"},
                  {href:"/docs/foundations/color",label:"Color palette"},
                  {href:"/docs/foundations/spacing",label:"Spacing"},
                  {href:"/docs/foundations/grid",label:"Grid"},
                ]},
                { label: "Resources", links: [
                  {href:"/docs/components",label:"Components"},
                  {href:"/docs/patterns",label:"Patterns"},
                  {href:"/docs/content",label:"Content"},
                  {href:GH_URL,label:"GitHub ↗",external:true},
                ]},
              ].map(col => (
                <div key={col.label}>
                  <p className="mb-5 text-[10px] uppercase tracking-[0.2em] text-white/40" style={mono}>{col.label}</p>
                  <ul className="space-y-3.5">
                    {col.links.map(link => (
                      <li key={link.href}>
                        {"external" in link && link.external ? (
                          <a href={link.href} target="_blank" rel="noreferrer"
                            className="text-[14px] text-white/35 transition-colors hover:text-white/70" style={sans}>{link.label}</a>
                        ) : (
                          <Link href={link.href}
                            className="text-[14px] text-white/35 transition-colors hover:text-white/70" style={sans}>{link.label}</Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PAYGLOCAL pixel wordmark */}
        <PixelWordmark />

        {/* Copyright bar — bottom of everything */}
        <div className="flex items-center justify-between border-t border-white/[0.06] px-6 py-3 lg:px-10">
          <span className="text-[13px] text-white/30" style={sans}>© 2026 PayGlocal Technologies</span>
          <span className="text-[11px] uppercase tracking-[0.18em] text-white/20" style={mono}>MIT License</span>
        </div>
      </footer>

    </div>
  );
}
