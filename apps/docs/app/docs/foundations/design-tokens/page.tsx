"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";

const tokens: {
  category: string;
  subcategory: string;
  name: string;
  description: string;
  light: string;
  dark: string;
  type: "color" | "size" | "duration" | "other";
}[] = [
  // Color — Background
  { category: "Color", subcategory: "Background", name: "--background", description: "Page and app background.", light: "#f6f8fa", dark: "#0b0f14", type: "color" },
  { category: "Color", subcategory: "Background", name: "--card", description: "Card and panel surface background.", light: "#ffffff", dark: "#141a22", type: "color" },
  { category: "Color", subcategory: "Background", name: "--muted", description: "Subtle background for hover states and grouped sections.", light: "#f3f4f6", dark: "#1e2630", type: "color" },
  { category: "Color", subcategory: "Background", name: "--popover", description: "Floating panel background (tooltips, menus, popovers).", light: "#ffffff", dark: "#1a222d", type: "color" },
  { category: "Color", subcategory: "Background", name: "--accent", description: "Accent background for highlighted items.", light: "#f3f4f6", dark: "#1e2630", type: "color" },
  { category: "Color", subcategory: "Background", name: "--primary-light", description: "Tinted primary background for badges and chips.", light: "#eff4ff", dark: "rgba(0,97,227,0.18)", type: "color" },
  // Color — Text
  { category: "Color", subcategory: "Text", name: "--foreground", description: "Primary text color.", light: "#111827", dark: "#f3f4f6", type: "color" },
  { category: "Color", subcategory: "Text", name: "--muted-foreground", description: "Secondary / placeholder text.", light: "#6b7280", dark: "#b4bcc8", type: "color" },
  { category: "Color", subcategory: "Text", name: "--primary-foreground", description: "Text on primary color backgrounds.", light: "#ffffff", dark: "#ffffff", type: "color" },
  { category: "Color", subcategory: "Text", name: "--card-foreground", description: "Text on card backgrounds.", light: "#111827", dark: "#f3f4f6", type: "color" },
  // Color — Border
  { category: "Color", subcategory: "Border", name: "--border", description: "Default border color for cards, inputs, and dividers.", light: "#e5e7eb", dark: "#2a3441", type: "color" },
  { category: "Color", subcategory: "Border", name: "--input", description: "Input border color.", light: "#e5e7eb", dark: "#2a3441", type: "color" },
  { category: "Color", subcategory: "Border", name: "--ring", description: "Focus ring color.", light: "#0061e3", dark: "#3b82f6", type: "color" },
  // Color — Interactive
  { category: "Color", subcategory: "Interactive", name: "--primary", description: "Primary brand color. Used for CTAs, links, and focus.", light: "#0061e3", dark: "#0061e3", type: "color" },
  { category: "Color", subcategory: "Interactive", name: "--primary-hover", description: "Hover state for primary interactive elements.", light: "#0055c8", dark: "#3b82f6", type: "color" },
  { category: "Color", subcategory: "Interactive", name: "--destructive", description: "Error and destructive action color.", light: "#dc2626", dark: "#f87171", type: "color" },
  { category: "Color", subcategory: "Interactive", name: "--destructive-foreground", description: "Text on destructive backgrounds.", light: "#ffffff", dark: "#450a0a", type: "color" },
  // Color — Chart
  { category: "Color", subcategory: "Chart", name: "--chart-1", description: "First chart series color.", light: "#0061e3", dark: "#60a5fa", type: "color" },
  { category: "Color", subcategory: "Chart", name: "--chart-2", description: "Second chart series color.", light: "#2563eb", dark: "#818cf8", type: "color" },
  { category: "Color", subcategory: "Chart", name: "--chart-3", description: "Third chart series color.", light: "#7c3aed", dark: "#c4b5fd", type: "color" },
  { category: "Color", subcategory: "Chart", name: "--chart-4", description: "Fourth chart series color.", light: "#059669", dark: "#34d399", type: "color" },
  { category: "Color", subcategory: "Chart", name: "--chart-5", description: "Fifth chart series color.", light: "#d97706", dark: "#fbbf24", type: "color" },
  // Color — Navigation
  { category: "Color", subcategory: "Navigation", name: "--sidebar", description: "Sidebar background.", light: "#e8eaee", dark: "#10151c", type: "color" },
  { category: "Color", subcategory: "Navigation", name: "--sidebar-border", description: "Sidebar border.", light: "#d8dce3", dark: "#2a3441", type: "color" },
  { category: "Color", subcategory: "Navigation", name: "--sidebar-foreground", description: "Sidebar text.", light: "#374151", dark: "#d1d5db", type: "color" },
  { category: "Color", subcategory: "Navigation", name: "--header", description: "Top navigation bar background.", light: "#ffffff", dark: "#0f1419", type: "color" },
  { category: "Color", subcategory: "Navigation", name: "--header-border", description: "Top navigation bar border.", light: "#e2e5ea", dark: "#2a3441", type: "color" },
  // Border
  { category: "Border", subcategory: "Radius", name: "--radius", description: "Base border radius.", light: "0.375rem (6px)", dark: "0.375rem (6px)", type: "size" },
  { category: "Border", subcategory: "Radius", name: "--radius-xl", description: "XL border radius for cards.", light: "0.625rem (10px)", dark: "0.625rem (10px)", type: "size" },
  { category: "Border", subcategory: "Radius", name: "--radius-2xl", description: "2XL border radius.", light: "0.875rem (14px)", dark: "0.875rem (14px)", type: "size" },
  { category: "Border", subcategory: "Radius", name: "--radius-3xl", description: "3XL border radius for panels.", light: "1.25rem (20px)", dark: "1.25rem (20px)", type: "size" },
  // Motion
  { category: "Motion", subcategory: "Duration", name: "--motion-duration-instant", description: "No visible delay — used for immediate state changes.", light: "0ms", dark: "0ms", type: "duration" },
  { category: "Motion", subcategory: "Duration", name: "--motion-duration-fast", description: "Quick micro-interactions (hover, focus).", light: "120ms", dark: "120ms", type: "duration" },
  { category: "Motion", subcategory: "Duration", name: "--motion-duration-normal", description: "Standard transitions (modals, panels).", light: "200ms", dark: "200ms", type: "duration" },
  { category: "Motion", subcategory: "Duration", name: "--motion-duration-slow", description: "Progress bars, page transitions.", light: "320ms", dark: "320ms", type: "duration" },
  { category: "Motion", subcategory: "Duration", name: "--motion-duration-slower", description: "Slow reveals, complex animations.", light: "480ms", dark: "480ms", type: "duration" },
  { category: "Motion", subcategory: "Easing", name: "--motion-ease-standard", description: "Default UI easing. Smooth, slightly bouncy deceleration.", light: "cubic-bezier(0.16, 1, 0.3, 1)", dark: "cubic-bezier(0.16, 1, 0.3, 1)", type: "other" },
  { category: "Motion", subcategory: "Easing", name: "--motion-ease-emphasized", description: "Springy — for overlay entrances and attention draws.", light: "cubic-bezier(0.34, 1.56, 0.64, 1)", dark: "cubic-bezier(0.34, 1.56, 0.64, 1)", type: "other" },
  { category: "Motion", subcategory: "Easing", name: "--motion-ease-linear", description: "Constant speed — for progress bars and looping animations.", light: "linear", dark: "linear", type: "other" },
];

const categories = [...new Set(tokens.map((t) => t.category))];

function ColorSwatch({ value, isDark: dark }: { value: string; isDark?: boolean }) {
  if (!value.startsWith("#") && !value.startsWith("rgb") && !value.startsWith("rgba")) return null;
  return (
    <span
      className="inline-block h-5 w-5 flex-shrink-0 rounded-md border shadow-sm"
      style={{
        backgroundColor: value,
        borderColor: dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)",
      }}
    />
  );
}

export default function DesignTokensPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = tokens.filter((t) => {
    const q = search.toLowerCase();
    const matchesSearch = !q || t.name.includes(q) || t.description.toLowerCase().includes(q) || t.subcategory.toLowerCase().includes(q);
    const matchesCategory = activeCategory === "All" || t.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const grouped = filtered.reduce<Record<string, Record<string, typeof tokens>>>((acc, t) => {
    if (!acc[t.category]) acc[t.category] = {};
    if (!acc[t.category][t.subcategory]) acc[t.category][t.subcategory] = [];
    acc[t.category][t.subcategory].push(t);
    return acc;
  }, {});

  return (
    <article className="space-y-10 pb-16">
      <header className="space-y-3 border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          <Link href="/docs/foundations" className="hover:underline">Foundations</Link> / Design tokens
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Design tokens</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Design tokens are the single source of truth for all visual decisions in Flux UI —
          color, spacing, motion, and border radius. Use CSS variables directly or via Tailwind utilities.
        </p>
      </header>

      {/* Search + filter */}
      <div className="space-y-3">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tokens…"
            className="h-11 w-full rounded-lg border border-border bg-card pl-10 pr-4 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Token table */}
      {Object.entries(grouped).map(([category, subcategories]) => (
        <section key={category} className="space-y-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">{category}</h2>
          {Object.entries(subcategories).map(([sub, rows]) => (
            <div key={sub} className="space-y-2">
              <h3 className="text-sm font-semibold text-muted-foreground">{sub}</h3>
              <div className="overflow-hidden rounded-xl border border-border shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/40">
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Token and description</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Light value</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Dark value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((token) => (
                      <tr key={token.name} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-4">
                          <code className="rounded-md bg-muted px-2 py-1 font-mono text-[12px] text-foreground">{token.name}</code>
                          <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{token.description}</p>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <ColorSwatch value={token.light} />
                            <code className="font-mono text-[11px] text-muted-foreground break-all">{token.light}</code>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <ColorSwatch value={token.dark} isDark />
                            <code className="font-mono text-[11px] text-muted-foreground break-all">{token.dark}</code>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </section>
      ))}

      {filtered.length === 0 && (
        <div className="rounded-xl border border-border bg-card p-12 text-center shadow-sm">
          <p className="text-sm text-muted-foreground">No tokens match <strong className="text-foreground">&ldquo;{search}&rdquo;</strong></p>
        </div>
      )}
    </article>
  );
}
