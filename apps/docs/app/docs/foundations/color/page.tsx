import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Color palette",
  description: "Flux color palette — full scale swatches for every hue used in the design system.",
};

const palette: { name: string; shades: { label: string; light: string; dark?: string }[] }[] = [
  {
    name: "Blue",
    shades: [
      { label: "Blue50",   light: "#eff4ff" },
      { label: "Blue100",  light: "#dbeafe" },
      { label: "Blue200",  light: "#bfdbfe" },
      { label: "Blue300",  light: "#93c5fd" },
      { label: "Blue400",  light: "#60a5fa" },
      { label: "Blue500",  light: "#3b82f6" },
      { label: "Blue600",  light: "#2563eb" },
      { label: "Blue700",  light: "#1d4ed8", dark: "#1e40af" },
      { label: "Blue800",  light: "#1e40af", dark: "#1d4ed8" },
      { label: "Blue900",  light: "#1e3a8a" },
      { label: "Blue1000", light: "#172554" },
    ],
  },
  {
    name: "Purple",
    shades: [
      { label: "Purple50",   light: "#faf5ff" },
      { label: "Purple100",  light: "#f3e8ff" },
      { label: "Purple200",  light: "#e9d5ff" },
      { label: "Purple300",  light: "#d8b4fe" },
      { label: "Purple400",  light: "#c084fc" },
      { label: "Purple500",  light: "#a855f7" },
      { label: "Purple600",  light: "#9333ea" },
      { label: "Purple700",  light: "#7c3aed" },
      { label: "Purple800",  light: "#6b21a8" },
      { label: "Purple900",  light: "#581c87" },
      { label: "Purple1000", light: "#3b0764" },
    ],
  },
  {
    name: "Green",
    shades: [
      { label: "Green50",   light: "#f0fdf4" },
      { label: "Green100",  light: "#dcfce7" },
      { label: "Green200",  light: "#bbf7d0" },
      { label: "Green300",  light: "#86efac" },
      { label: "Green400",  light: "#4ade80" },
      { label: "Green500",  light: "#22c55e" },
      { label: "Green600",  light: "#16a34a" },
      { label: "Green700",  light: "#15803d" },
      { label: "Green800",  light: "#166534" },
      { label: "Green900",  light: "#14532d" },
      { label: "Green1000", light: "#052e16" },
    ],
  },
  {
    name: "Red",
    shades: [
      { label: "Red50",   light: "#fef2f2" },
      { label: "Red100",  light: "#fee2e2" },
      { label: "Red200",  light: "#fecaca" },
      { label: "Red250",  light: "#fca5a5" },
      { label: "Red300",  light: "#f87171" },
      { label: "Red400",  light: "#ef4444" },
      { label: "Red500",  light: "#dc2626" },
      { label: "Red600",  light: "#b91c1c" },
      { label: "Red700",  light: "#991b1b" },
      { label: "Red800",  light: "#7f1d1d" },
      { label: "Red850",  light: "#6b1a1a" },
      { label: "Red900",  light: "#450a0a" },
    ],
  },
  {
    name: "Amber",
    shades: [
      { label: "Amber50",   light: "#fffbeb" },
      { label: "Amber100",  light: "#fef3c7" },
      { label: "Amber200",  light: "#fde68a" },
      { label: "Amber300",  light: "#fcd34d" },
      { label: "Amber400",  light: "#fbbf24" },
      { label: "Amber500",  light: "#f59e0b" },
      { label: "Amber600",  light: "#d97706" },
      { label: "Amber700",  light: "#b45309" },
      { label: "Amber800",  light: "#92400e" },
      { label: "Amber900",  light: "#78350f" },
    ],
  },
  {
    name: "Teal",
    shades: [
      { label: "Teal50",   light: "#f0fdfa" },
      { label: "Teal100",  light: "#ccfbf1" },
      { label: "Teal200",  light: "#99f6e4" },
      { label: "Teal300",  light: "#5eead4" },
      { label: "Teal400",  light: "#2dd4bf" },
      { label: "Teal500",  light: "#14b8a6" },
      { label: "Teal600",  light: "#0d9488" },
      { label: "Teal700",  light: "#0f766e" },
      { label: "Teal800",  light: "#115e59" },
      { label: "Teal900",  light: "#134e4a" },
    ],
  },
  {
    name: "Neutral",
    shades: [
      { label: "Neutral0",   light: "#ffffff" },
      { label: "Neutral50",  light: "#f9fafb" },
      { label: "Neutral100", light: "#f3f4f6" },
      { label: "Neutral200", light: "#e5e7eb" },
      { label: "Neutral300", light: "#d1d5db" },
      { label: "Neutral400", light: "#9ca3af" },
      { label: "Neutral500", light: "#6b7280" },
      { label: "Neutral600", light: "#4b5563" },
      { label: "Neutral700", light: "#374151" },
      { label: "Neutral800", light: "#1f2937" },
      { label: "Neutral900", light: "#111827" },
      { label: "Neutral950", light: "#030712" },
    ],
  },
];

function isDark(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 128;
}

export default function ColorPalettePage() {
  return (
    <article className="space-y-12 pb-16">
      <header id="overview" className="scroll-mt-24 space-y-3 border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          <Link href="/docs/foundations" className="hover:underline">Foundations</Link> / Color
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Color palette</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Flux uses a semantic token system built on top of a structured color scale.
          Primitives (e.g. <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">Blue600</code>) map to
          semantic tokens (e.g. <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">--primary</code>)
          which components consume. Change the token, everything updates.
        </p>
      </header>

      <section id="anatomy" className="scroll-mt-24 space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Color anatomy</h2>
        <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">
          Each color in the Flux palette has a numeric suffix indicating lightness — lower numbers are lighter,
          higher numbers are darker. The scale runs from 50 (near-white) to 1000 (near-black).
          In dark mode, semantic tokens remap to different primitives automatically.
        </p>
        <div className="grid gap-2 rounded-xl border border-border bg-card p-4 shadow-sm sm:grid-cols-3">
          <div className="space-y-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Semantic token</p>
            <code className="font-mono text-sm text-foreground">--primary</code>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">maps to</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="space-y-1">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Primitive</p>
            <code className="font-mono text-sm text-foreground">#0061e3 (Blue)</code>
          </div>
        </div>
      </section>

      <section id="palette" className="scroll-mt-24 space-y-8">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">The palette</h2>
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {palette.map((group) => (
            <div key={group.name}>
              <h3 className="mb-3 text-sm font-semibold text-foreground">{group.name}</h3>
              <div className="overflow-hidden rounded-xl border border-border shadow-sm">
                {group.shades.map((shade, i) => {
                  const dark = isDark(shade.light);
                  return (
                    <div
                      key={shade.label}
                      className="flex items-center justify-between px-3 py-2 text-xs"
                      style={{ backgroundColor: shade.light, borderTop: i > 0 ? "1px solid rgba(0,0,0,0.06)" : undefined }}
                    >
                      <span className="font-mono font-medium" style={{ color: dark ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.7)" }}>
                        {shade.label}
                      </span>
                      <span className="font-mono opacity-60" style={{ color: dark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.5)" }}>
                        {shade.light}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="semantic" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Semantic color roles</h2>
        <p className="text-sm text-muted-foreground max-w-2xl">Always use semantic tokens in components — never raw hex values. This ensures dark mode and theming work automatically.</p>
        <div className="overflow-hidden rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Token</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Light</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Dark</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Usage</th>
              </tr>
            </thead>
            <tbody>
              {[
                { token: "--primary", light: "#0061e3", dark: "#0061e3", usage: "Primary actions, links, focus rings" },
                { token: "--background", light: "#f6f8fa", dark: "#0b0f14", usage: "Page background" },
                { token: "--card", light: "#ffffff", dark: "#141a22", usage: "Card and surface backgrounds" },
                { token: "--foreground", light: "#111827", dark: "#f3f4f6", usage: "Primary text" },
                { token: "--muted-foreground", light: "#6b7280", dark: "#b4bcc8", usage: "Secondary / placeholder text" },
                { token: "--border", light: "#e5e7eb", dark: "#2a3441", usage: "Borders, dividers" },
                { token: "--muted", light: "#f3f4f6", dark: "#1e2630", usage: "Subtle backgrounds, hover states" },
                { token: "--destructive", light: "#dc2626", dark: "#f87171", usage: "Errors, destructive actions" },
                { token: "--ring", light: "#0061e3", dark: "#3b82f6", usage: "Focus rings" },
              ].map((row) => (
                <tr key={row.token} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3 font-mono text-xs text-foreground">{row.token}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-5 w-5 rounded-md border border-black/10 shadow-sm flex-shrink-0" style={{ backgroundColor: row.light }} />
                      <span className="font-mono text-xs text-muted-foreground">{row.light}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="h-5 w-5 rounded-md border border-white/10 shadow-sm flex-shrink-0" style={{ backgroundColor: row.dark }} />
                      <span className="font-mono text-xs text-muted-foreground">{row.dark}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{row.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
}
