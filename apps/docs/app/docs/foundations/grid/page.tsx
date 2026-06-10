import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grid",
  description: "Flux layout grid — anatomy, fluid vs fixed types, breakpoints, column span, and layout anatomy.",
};

const breakpoints = [
  { name: "xs",  viewport: "< 640px",      columns: 4,  gutters: "12px", margins: "16px", tailwind: "—" },
  { name: "sm",  viewport: "640 – 767px",   columns: 6,  gutters: "12px", margins: "16px", tailwind: "sm:" },
  { name: "md",  viewport: "768 – 1023px",  columns: 8,  gutters: "16px", margins: "24px", tailwind: "md:" },
  { name: "lg",  viewport: "1024 – 1279px", columns: 12, gutters: "16px", margins: "32px", tailwind: "lg:" },
  { name: "xl",  viewport: "1280 – 1535px", columns: 12, gutters: "16px", margins: "32px", tailwind: "xl:" },
  { name: "2xl", viewport: "≥ 1536px",      columns: 12, gutters: "24px", margins: "40px", tailwind: "2xl:" },
];

function GridVisualization({ cols = 12, highlighted }: { cols?: number; highlighted?: number[] }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: cols }).map((_, i) => (
        <div
          key={i}
          className={`flex-1 h-10 rounded-sm transition-colors ${
            highlighted?.includes(i) ? "bg-primary/50" : "bg-primary/15"
          }`}
        />
      ))}
    </div>
  );
}

export default function GridFoundationsPage() {
  return (
    <article className="space-y-14 pb-16">
      <header id="overview" className="scroll-mt-24 space-y-3 border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          <Link href="/docs/foundations" className="hover:underline">Foundations</Link> / Grid
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Grid</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          The Flux layout grid provides consistent positioning and spacing across all pages and viewports.
          It defines columns, gutters, and margins to create layouts that are predictable for both designers
          and developers — using Tailwind&apos;s responsive grid utilities.
        </p>
      </header>

      {/* Grid anatomy */}
      <section id="anatomy" className="scroll-mt-24 space-y-5">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Grid anatomy</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Every Flux layout grid is composed of three elements that work together to position content.
        </p>

        {/* Anatomy diagram */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
          <div className="relative rounded-lg bg-muted/40 border border-border p-4">
            {/* Margins */}
            <div className="absolute inset-y-4 left-0 w-6 bg-amber-500/10 border-r border-amber-500/30 rounded-l-lg" />
            <div className="absolute inset-y-4 right-0 w-6 bg-amber-500/10 border-l border-amber-500/30 rounded-r-lg" />
            {/* Columns with gutters */}
            <div className="mx-6 flex gap-2">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="flex-1 h-16 rounded-sm bg-primary/20 border border-primary/30" />
              ))}
            </div>
            {/* Labels */}
            <div className="mx-6 mt-2 flex gap-2 items-center text-[10px] text-muted-foreground">
              <div className="flex-[2] text-center">Columns</div>
              <div className="w-2 text-center text-amber-600 dark:text-amber-400">↕</div>
              <div className="flex-[1] text-center">Gutters</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm">
            {[
              { label: "Columns", desc: "Divide the page into equal vertical sections. Content spans across columns.", color: "bg-primary/20 border-primary/30" },
              { label: "Gutters", desc: "The gaps between columns that separate content in a consistent way.", color: "bg-border" },
              { label: "Margins", desc: "Outer edges of the grid that prevent content from touching the viewport edge.", color: "bg-amber-500/20 border-amber-500/30" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-border bg-muted/20 p-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className={`h-3 w-3 rounded-sm border ${item.color}`} />
                  <p className="text-xs font-semibold text-foreground">{item.label}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid types */}
      <section id="grid-types" className="scroll-mt-24 space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Grid types</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Flux supports two grid types. Choose based on the content density and purpose of the page.
        </p>

        {/* Fluid */}
        <div id="fluid" className="scroll-mt-24 space-y-4">
          <h3 className="text-base font-semibold text-foreground">Fluid</h3>
          <p className="max-w-2xl text-sm text-muted-foreground leading-relaxed">
            The fluid grid stretches to fill all available space. Columns and content resize with the viewport.
            Best for <strong className="font-medium text-foreground">information-dense pages</strong> like dashboards,
            data tables, and kanban boards where maximising screen real estate matters.
          </p>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-4">
              {["sm", "md", "lg"].map((size, i) => (
                <div key={size} className="flex-1 space-y-2">
                  <div
                    className="rounded-lg border border-border bg-muted/30 flex items-end justify-center pb-2"
                    style={{ height: 80 + i * 20 }}
                  >
                    <div className="flex gap-1 px-2 w-full">
                      {Array.from({ length: 4 + i * 2 }).map((_, j) => (
                        <div key={j} className="flex-1 rounded-sm bg-primary/25 h-6" />
                      ))}
                    </div>
                  </div>
                  <p className="text-center text-xs text-muted-foreground capitalize">{size}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              <code className="rounded bg-muted px-1 font-mono">w-full max-w-none</code> — grid fills the full container width at every breakpoint
            </p>
          </div>
        </div>

        {/* Fixed */}
        <div id="fixed" className="scroll-mt-24 space-y-4">
          <h3 className="text-base font-semibold text-foreground">Fixed</h3>
          <p className="max-w-2xl text-sm text-muted-foreground leading-relaxed">
            The fixed grid applies a maximum content width, centering it within the viewport.
            Best for <strong className="font-medium text-foreground">content-focused pages</strong> like articles,
            settings, and documentation — limiting line length improves readability.
          </p>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-4">
              {["sm", "md", "lg"].map((size, i) => (
                <div key={size} className="flex-1 space-y-2">
                  <div
                    className="rounded-lg border border-border bg-muted/30 flex items-end justify-center pb-2 relative"
                    style={{ height: 80 + i * 20 }}
                  >
                    <div
                      className="flex gap-1 absolute inset-x-0 bottom-2 mx-auto"
                      style={{ width: `${40 + i * 15}%`, left: "50%", transform: "translateX(-50%)" }}
                    >
                      {Array.from({ length: 4 }).map((_, j) => (
                        <div key={j} className="flex-1 rounded-sm bg-primary/25 h-6" />
                      ))}
                    </div>
                  </div>
                  <p className="text-center text-xs text-muted-foreground capitalize">{size}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              <code className="rounded bg-muted px-1 font-mono">max-w-3xl mx-auto</code> — content constrained and centered
            </p>
          </div>
        </div>
      </section>

      {/* Breakpoints */}
      <section id="breakpoints" className="scroll-mt-24 space-y-5">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Breakpoints</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Flux aligns with Tailwind CSS&apos;s default breakpoint system. Each breakpoint determines
          column count, gutter width, and margin size. Use responsive prefixes in Tailwind to
          adapt layouts at each breakpoint.
        </p>
        <div className="overflow-hidden rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                {["Breakpoint", "Viewport", "Columns", "Gutters", "Margins", "Tailwind prefix"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {breakpoints.map((bp) => (
                <tr key={bp.name} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3">
                    <code className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs text-foreground">{bp.name}</code>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground font-mono">{bp.viewport}</td>
                  <td className="px-4 py-3 text-xs font-medium text-foreground">{bp.columns}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{bp.gutters}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{bp.margins}</td>
                  <td className="px-4 py-3">
                    <code className="rounded-md bg-muted px-2 py-0.5 font-mono text-xs text-foreground">{bp.tailwind}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Column span and offset */}
      <section id="column-span" className="scroll-mt-24 space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Column span and offset</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Flux uses a 12-column grid. Content spans across columns using Tailwind&apos;s
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs mx-1">col-span-*</code>
          utilities. Mix column spans to create flexible, varied layouts.
        </p>

        {/* Column span */}
        <div id="span" className="scroll-mt-24 space-y-4">
          <h3 className="text-base font-semibold text-foreground">Column span</h3>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-3">
            {[
              { label: "col-span-12 (full width)", spans: [[0,11]] },
              { label: "col-span-6 (half width)", spans: [[0,5],[6,11]] },
              { label: "col-span-4 (one third)", spans: [[0,3],[4,7],[8,11]] },
              { label: "col-span-3 (one quarter)", spans: [[0,2],[3,5],[6,8],[9,11]] },
            ].map((row) => (
              <div key={row.label} className="space-y-1.5">
                <p className="text-[11px] font-mono text-muted-foreground">{row.label}</p>
                <div className="flex gap-1.5">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const inSpan = row.spans.some(([start, end]) => i >= start && i <= end);
                    return (
                      <div
                        key={i}
                        className={`flex-1 h-8 rounded-sm transition-colors ${inSpan ? "bg-primary/40" : "bg-primary/10"}`}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column offset */}
        <div id="offset" className="scroll-mt-24 space-y-4">
          <h3 className="text-base font-semibold text-foreground">Column offset</h3>
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Content doesn&apos;t need to span all 12 columns. Use
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs mx-1">col-start-*</code>
            to offset content, centering it within the grid or creating asymmetric layouts.
          </p>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-3">
            {[
              { label: "col-start-1, col-span-8", start: 0, span: 8 },
              { label: "col-start-3, col-span-8 (offset 2)", start: 2, span: 8 },
              { label: "col-start-4, col-span-6 (centered)", start: 3, span: 6 },
            ].map((row) => (
              <div key={row.label} className="space-y-1.5">
                <p className="text-[11px] font-mono text-muted-foreground">{row.label}</p>
                <div className="flex gap-1.5">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const inSpan = i >= row.start && i < row.start + row.span;
                    return (
                      <div
                        key={i}
                        className={`flex-1 h-8 rounded-sm transition-colors ${inSpan ? "bg-primary/40" : "bg-primary/10"}`}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Layout anatomy */}
      <section id="layout-anatomy" className="scroll-mt-24 space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Layout anatomy</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          A typical Flux app layout is composed of a fixed header, an optional sidebar, and a fluid main content area.
          The grid lives within the main content area and adapts based on which panels are visible.
        </p>

        {/* Full layout diagram */}
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="rounded-lg border border-border overflow-hidden text-xs">
            {/* Header */}
            <div className="bg-header border-b border-header-border px-4 py-2 flex items-center gap-3">
              <div className="h-4 w-16 rounded bg-primary/30" />
              <div className="flex-1" />
              <div className="h-4 w-4 rounded-full bg-muted-foreground/30" />
            </div>
            <div className="flex" style={{ minHeight: 180 }}>
              {/* Sidebar */}
              <div className="w-16 bg-sidebar border-r border-sidebar-border p-2 space-y-1.5 flex-shrink-0">
                {[1,2,3,4].map((i) => (
                  <div key={i} className={`h-6 rounded-md ${i === 1 ? "bg-primary/20" : "bg-sidebar-foreground/10"}`} />
                ))}
              </div>
              {/* Main content */}
              <div className="flex-1 bg-background p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-4 w-24 rounded bg-foreground/50" />
                  <div className="h-7 w-20 rounded-lg bg-primary/30" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[1,2,3].map((i) => (
                    <div key={i} className="rounded-lg border border-border bg-card p-2 space-y-1.5">
                      <div className="h-2 w-3/4 rounded bg-muted-foreground/20" />
                      <div className="h-4 w-1/2 rounded bg-foreground/30" />
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border border-border bg-card p-2 space-y-1">
                  {[80,65,90,55].map((w, i) => (
                    <div key={i} className="flex items-center gap-2 py-1 border-b border-border/50 last:border-0">
                      <div className="h-2 rounded flex-1 bg-muted-foreground/15" style={{ maxWidth: `${w}%` }} />
                      <div className="h-5 w-12 rounded bg-primary/15 flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
            {[
              { label: "Header", desc: "Fixed top bar — always visible, 56px tall", color: "bg-header border-header-border" },
              { label: "Sidebar / Side nav", desc: "Collapsible at 56px (icons only) or expanded at 240px", color: "bg-sidebar border-sidebar-border" },
              { label: "Main content", desc: "Fluid area where the layout grid lives", color: "bg-background border-border" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-border bg-muted/20 p-3">
                <div className={`h-2.5 w-full rounded-sm border mb-2 ${item.color}`} />
                <p className="font-semibold text-foreground mb-0.5">{item.label}</p>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Side nav sizes */}
        <div id="side-nav" className="scroll-mt-24 space-y-4">
          <h3 className="text-base font-semibold text-foreground">Side navigation sizes</h3>
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
            The sidebar can be collapsed to icon-only mode or expanded. The main content grid
            automatically fills the remaining space.
          </p>
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  {["State", "Width", "Available from", "Behaviour"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { state: "Collapsed", width: "60px", from: "768px+", behaviour: "Icon-only navigation, labels hidden. Grid fills remaining width." },
                  { state: "Expanded (default)", width: "240px", from: "1024px+", behaviour: "Full labels visible. Grid adapts to remaining width." },
                  { state: "Expanded (wide)", width: "280px", from: "1440px+", behaviour: "Extra width for longer nav labels or nested items." },
                  { state: "Hidden", width: "0px", from: "< 768px", behaviour: "Off-canvas drawer, toggled by hamburger in topbar." },
                ].map((row) => (
                  <tr key={row.state} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="px-4 py-3 font-medium text-foreground text-xs">{row.state}</td>
                    <td className="px-4 py-3 font-mono text-xs text-foreground">{row.width}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground">{row.from}</td>
                    <td className="px-4 py-3 text-xs text-muted-foreground leading-relaxed">{row.behaviour}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Usage in Tailwind */}
      <section id="tailwind-usage" className="scroll-mt-24 space-y-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Using the grid in Tailwind</h2>
        <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
          Flux doesn&apos;t add a custom grid component — Tailwind&apos;s grid utilities are expressive enough.
          Here are the patterns used across Flux products.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              label: "Basic 3-column stats row",
              code: `<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
  <StatCard />
  <StatCard />
  <StatCard />
</div>`,
            },
            {
              label: "Sidebar + content layout",
              code: `<div className="flex min-h-screen">
  <SideNav className="w-60 shrink-0" />
  <main className="flex-1 min-w-0 p-6">
    {children}
  </main>
</div>`,
            },
            {
              label: "Responsive card grid",
              code: `<div className="grid gap-4
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  xl:grid-cols-4">
  {cards.map(c => <Card key={c.id} {...c} />)}
</div>`,
            },
            {
              label: "Fixed-width content",
              code: `<main className="mx-auto w-full
  max-w-3xl
  px-4
  py-8
  sm:px-6
  lg:px-8">
  {children}
</main>`,
            },
          ].map((ex) => (
            <div key={ex.label} className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
              <div className="border-b border-border bg-muted/40 px-4 py-2">
                <p className="text-xs font-medium text-muted-foreground">{ex.label}</p>
              </div>
              <pre className="p-4 text-[12px] font-mono text-foreground leading-relaxed overflow-x-auto">
                <code>{ex.code}</code>
              </pre>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
