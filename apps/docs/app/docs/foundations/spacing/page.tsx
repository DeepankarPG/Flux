import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spacing",
  description: "Flux spacing system — 4px base unit, space token scale, layout guidelines, and usage ranges.",
};

const spaceTokens = [
  { token: "space.0",    px: 0,  rem: "0rem",      multiplier: "0×" },
  { token: "space.025",  px: 1,  rem: "0.0625rem",  multiplier: "0.25×" },
  { token: "space.050",  px: 2,  rem: "0.125rem",   multiplier: "0.5×" },
  { token: "space.075",  px: 3,  rem: "0.1875rem",  multiplier: "0.75×" },
  { token: "space.100",  px: 4,  rem: "0.25rem",    multiplier: "1×" },
  { token: "space.150",  px: 6,  rem: "0.375rem",   multiplier: "1.5×" },
  { token: "space.200",  px: 8,  rem: "0.5rem",     multiplier: "2×" },
  { token: "space.250",  px: 10, rem: "0.625rem",   multiplier: "2.5×" },
  { token: "space.300",  px: 12, rem: "0.75rem",    multiplier: "3×" },
  { token: "space.400",  px: 16, rem: "1rem",       multiplier: "4×" },
  { token: "space.500",  px: 20, rem: "1.25rem",    multiplier: "5×" },
  { token: "space.600",  px: 24, rem: "1.5rem",     multiplier: "6×" },
  { token: "space.800",  px: 32, rem: "2rem",       multiplier: "8×" },
  { token: "space.1000", px: 40, rem: "2.5rem",     multiplier: "10×" },
];

const tailwindMap = [
  { name: "xs",   tw: "gap-1 / p-1",   px: "4px",  usage: "Icon gaps, tight stacks" },
  { name: "sm",   tw: "gap-2 / p-2",   px: "8px",  usage: "Compact groups, badge padding" },
  { name: "md",   tw: "gap-4 / p-4",   px: "16px", usage: "Card padding, form field gaps" },
  { name: "lg",   tw: "gap-6 / p-6",   px: "24px", usage: "Section gaps, page gutters" },
  { name: "xl",   tw: "gap-8 / p-8",   px: "32px", usage: "Loose sections, hero areas" },
];

function SpaceBar({ px, max = 80 }: { px: number; max?: number }) {
  const widthPct = Math.max((px / max) * 100, px === 0 ? 0 : 1.5);
  return (
    <div className="flex items-center gap-3">
      <div className="h-4 rounded-sm bg-primary/70" style={{ width: `${widthPct}%`, minWidth: px > 0 ? 2 : 0 }} />
    </div>
  );
}

export default function SpacingFoundationsPage() {
  return (
    <article className="space-y-14 pb-16">
      <header id="overview" className="scroll-mt-24 space-y-3 border-b border-border pb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          <Link href="/docs/foundations" className="hover:underline">Foundations</Link> / Spacing
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Spacing</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          A consistent spacing system creates visual harmony and makes layouts easier to scan.
          Flux uses a <strong className="font-medium text-foreground">4px base unit</strong> — every spacing value
          is a multiple of 4. This maps cleanly to Tailwind&apos;s default scale and ensures
          predictable, pixel-perfect layouts across all components.
        </p>
      </header>

      {/* 4px base unit */}
      <section id="base-unit" className="scroll-mt-24 space-y-5">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">4px base unit</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Our spacing system is built around a base unit of 4px. Every space value is a multiple of this unit.
          The base unit (<code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">space.100</code>) represents
          4px — or 0.25rem at the default 16px root font size.
        </p>
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex items-end gap-1 mb-4">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="bg-primary/20 border border-primary/30 rounded-sm" style={{ width: 28, height: i * 4 }} />
                <span className="text-[9px] font-mono text-muted-foreground">{i * 4}px</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">Each step = 4px. The scale grows linearly.</p>
        </div>
      </section>

      {/* Space token scale */}
      <section id="scale" className="scroll-mt-24 space-y-5">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Scale</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          The full space token scale from <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">space.0</code> (0px)
          to <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">space.1000</code> (40px).
          Each token maps to a Tailwind spacing step for use in padding, margin, and gap utilities.
        </p>
        <div className="overflow-hidden rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Token</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Multiplier</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">REM</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pixels</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground w-[40%]">Visual</th>
              </tr>
            </thead>
            <tbody>
              {spaceTokens.map((t) => (
                <tr key={t.token} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3">
                    <code className="rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-foreground">{t.token}</code>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{t.multiplier}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{t.rem}</td>
                  <td className="px-4 py-3 font-mono text-xs font-medium text-foreground">{t.px}px</td>
                  <td className="px-4 py-3 pr-8">
                    <SpaceBar px={t.px} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tailwind mapping */}
      <section id="tailwind" className="scroll-mt-24 space-y-5">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Tailwind mapping</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          The <Link href="/docs/components/layout-primitives" className="text-primary underline-offset-4 hover:underline font-medium">Layout primitives</Link> (Box, Stack, Inline)
          accept a <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">gap</code> /
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">p</code> prop
          using these named steps. They map to the Tailwind scale directly.
        </p>
        <div className="overflow-hidden rounded-xl border border-border shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tailwind</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pixels</th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Common usage</th>
              </tr>
            </thead>
            <tbody>
              {tailwindMap.map((r) => (
                <tr key={r.name} className="border-b border-border last:border-0 hover:bg-muted/20 transition-colors">
                  <td className="px-4 py-3 font-mono text-sm font-medium text-foreground">{r.name}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{r.tw}</td>
                  <td className="px-4 py-3 font-mono text-xs font-medium text-foreground">{r.px}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{r.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Spacing usage ranges */}
      <section id="usage" className="scroll-mt-24 space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Spacing usage</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Different contexts call for different spacing ranges. Use the right scale for the density of your UI.
        </p>

        {/* Range visualizer */}
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
          <div className="relative h-8 rounded-full bg-muted overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-[20%] bg-primary/20 rounded-l-full" />
            <div className="absolute inset-y-0 left-[20%] w-[30%] bg-primary/40" />
            <div className="absolute inset-y-0 left-[50%] w-[50%] bg-primary/60 rounded-r-full" />
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-primary/20 flex-shrink-0" /><span className="text-muted-foreground">Small (0–8px)</span></div>
            <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-primary/40 flex-shrink-0" /><span className="text-muted-foreground">Medium (12–24px)</span></div>
            <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-primary/60 flex-shrink-0" /><span className="text-muted-foreground">Large (32–80px)</span></div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              id: "small",
              title: "Small — 0px to 8px",
              tokens: "space.0 → space.200",
              bg: "bg-primary/8",
              border: "border-primary/20",
              examples: [
                "Gap between icon and label",
                "Container padding for badges and chips",
                "Gap between repeating elements (button groups)",
                "Internal padding for input components",
                "Gap between trigger and elevated element",
              ],
            },
            {
              id: "medium",
              title: "Medium — 12px to 24px",
              tokens: "space.300 → space.600",
              bg: "bg-primary/8",
              border: "border-primary/20",
              examples: [
                "Container padding for larger components",
                "Space between avatar/icon and content",
                "Vertical spacing between elements in a card",
                "Spacing in less dense or larger components",
                "Gap between form fields",
              ],
            },
            {
              id: "large",
              title: "Large — 32px to 80px",
              tokens: "space.800 → space.1000+",
              bg: "bg-primary/8",
              border: "border-primary/20",
              examples: [
                "Page-level gutters and section gaps",
                "Spacing between major layout regions",
                "Hero section padding",
                "Empty state vertical padding",
                "Separation between distinct content blocks",
              ],
            },
          ].map((range) => (
            <div key={range.id} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <h3 className="font-semibold text-foreground text-sm mb-1">{range.title}</h3>
              <code className="text-[10px] font-mono text-muted-foreground">{range.tokens}</code>
              <ul className="mt-3 space-y-1.5">
                {range.examples.map((ex, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Layout guidelines */}
      <section id="layout-guidelines" className="scroll-mt-24 space-y-8">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">Layout guidelines</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Spacing is not just about distance — it communicates meaning. These principles guide
          how to apply the spacing scale to create layouts that are easy to understand.
        </p>

        {/* Group by similarity */}
        <div id="group-similarity" className="scroll-mt-24 space-y-4">
          <h3 className="text-base font-semibold text-foreground">Group by similarity</h3>
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Apply consistent spacing around elements that share the same function or importance.
            Equal spacing signals equal weight — users will naturally group them together visually.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl overflow-hidden border border-green-200 dark:border-green-800 shadow-sm">
              <div className="bg-card p-5">
                <div className="space-y-2">
                  {["Dashboard", "Transactions", "Settlements", "Reports"].map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-lg px-3 py-2 bg-muted/50">
                      <div className="h-3 w-3 rounded-sm bg-muted-foreground/30 flex-shrink-0" />
                      <div className="h-2.5 rounded-full bg-muted-foreground/30 flex-1" style={{ maxWidth: `${60 + Math.random() * 30}%` }} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-950/30 border-t border-green-200 dark:border-green-800">
                <svg className="size-3.5 text-green-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span className="text-xs font-medium text-green-700 dark:text-green-400">Do — consistent spacing for related items</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-red-200 dark:border-red-800 shadow-sm">
              <div className="bg-card p-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 rounded-lg px-3 py-1.5 bg-muted/50">
                    <div className="h-3 w-3 rounded-sm bg-muted-foreground/30 flex-shrink-0" />
                    <div className="h-2.5 rounded-full bg-muted-foreground/30 flex-1 max-w-[70%]" />
                  </div>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-3 bg-muted/50">
                    <div className="h-3 w-3 rounded-sm bg-muted-foreground/30 flex-shrink-0" />
                    <div className="h-2.5 rounded-full bg-muted-foreground/30 flex-1 max-w-[50%]" />
                  </div>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-1 bg-muted/50">
                    <div className="h-3 w-3 rounded-sm bg-muted-foreground/30 flex-shrink-0" />
                    <div className="h-2.5 rounded-full bg-muted-foreground/30 flex-1 max-w-[80%]" />
                  </div>
                  <div className="flex items-center gap-2 rounded-lg px-3 py-2.5 bg-muted/50">
                    <div className="h-3 w-3 rounded-sm bg-muted-foreground/30 flex-shrink-0" />
                    <div className="h-2.5 rounded-full bg-muted-foreground/30 flex-1 max-w-[60%]" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-950/30 border-t border-red-200 dark:border-red-800">
                <svg className="size-3.5 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                <span className="text-xs font-medium text-red-600 dark:text-red-400">Don&apos;t — inconsistent spacing breaks grouping</span>
              </div>
            </div>
          </div>
        </div>

        {/* Group by proximity */}
        <div id="group-proximity" className="scroll-mt-24 space-y-4">
          <h3 className="text-base font-semibold text-foreground">Group by proximity</h3>
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Elements placed close together are assumed to be related. Use tighter spacing within a group
            and larger spacing between groups to create clear visual separation.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl overflow-hidden border border-green-200 dark:border-green-800 shadow-sm">
              <div className="bg-card p-5 space-y-4">
                <div className="rounded-lg border border-border p-4 space-y-2">
                  <div className="text-xs font-semibold text-foreground">Payment details</div>
                  <div className="h-2 rounded bg-muted-foreground/20 w-3/4" />
                  <div className="h-2 rounded bg-muted-foreground/20 w-1/2" />
                  <div className="h-8 rounded-lg bg-primary/20 mt-3" />
                </div>
                <div className="rounded-lg border border-border p-4 space-y-2">
                  <div className="text-xs font-semibold text-foreground">Billing address</div>
                  <div className="h-2 rounded bg-muted-foreground/20 w-2/3" />
                  <div className="h-2 rounded bg-muted-foreground/20 w-1/2" />
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-950/30 border-t border-green-200 dark:border-green-800">
                <svg className="size-3.5 text-green-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                <span className="text-xs font-medium text-green-700 dark:text-green-400">Do — tight spacing within, loose between sections</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-red-200 dark:border-red-800 shadow-sm">
              <div className="bg-card p-5">
                <div className="space-y-8">
                  <div className="space-y-8">
                    <div className="text-xs font-semibold text-foreground">Payment details</div>
                    <div className="h-2 rounded bg-muted-foreground/20 w-3/4" />
                    <div className="h-2 rounded bg-muted-foreground/20 w-1/2" />
                  </div>
                  <div className="space-y-8">
                    <div className="text-xs font-semibold text-foreground">Billing address</div>
                    <div className="h-2 rounded bg-muted-foreground/20 w-2/3" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-950/30 border-t border-red-200 dark:border-red-800">
                <svg className="size-3.5 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                <span className="text-xs font-medium text-red-600 dark:text-red-400">Don&apos;t — equal spacing makes everything feel unrelated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Create order and hierarchy */}
        <div id="hierarchy" className="scroll-mt-24 space-y-4">
          <h3 className="text-base font-semibold text-foreground">Create order and hierarchy</h3>
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Larger elements deserve more whitespace — it signals importance. Varying space around elements
            creates visual hierarchy and guides the user&apos;s eye through the content.
          </p>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
            <div className="space-y-1">
              <div className="h-5 w-48 rounded bg-foreground/80" />
              <div className="h-3 w-72 rounded bg-muted-foreground/30 mt-2" />
              <div className="h-3 w-64 rounded bg-muted-foreground/30" />
            </div>
            <div className="border-t border-border pt-4 grid grid-cols-3 gap-3">
              {[1,2,3].map((i) => (
                <div key={i} className="rounded-lg border border-border bg-muted/30 p-3 space-y-2">
                  <div className="h-3 w-3/4 rounded bg-muted-foreground/30" />
                  <div className="h-2 w-1/2 rounded bg-muted-foreground/20" />
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Heading gets generous top space → body is tighter → cards share equal small gaps
            </p>
          </div>
        </div>

        {/* Visual rhythm */}
        <div id="visual-rhythm" className="scroll-mt-24 space-y-4">
          <h3 className="text-base font-semibold text-foreground">Introduce visual rhythm</h3>
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Repeating the same spacing between similar elements creates a predictable rhythm.
            This rhythm helps users scan content faster and builds confidence in the layout.
            Use <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">gap-4</code> consistently
            within a section — don&apos;t mix <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">gap-3</code> and
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">gap-5</code> for sibling elements.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Consistent rhythm</p>
              <div className="space-y-3">
                {[70, 55, 80, 60].map((w, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded-full bg-primary/20 flex-shrink-0" />
                    <div className="space-y-1 flex-1">
                      <div className="h-2 rounded bg-muted-foreground/30" style={{ width: `${w}%` }} />
                      <div className="h-1.5 rounded bg-muted-foreground/15" style={{ width: `${w - 20}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
              <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">Broken rhythm</p>
              <div className="space-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-7 w-7 rounded-full bg-muted-foreground/20 flex-shrink-0" />
                  <div className="h-2 rounded bg-muted-foreground/25 w-3/4" />
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <div className="h-7 w-7 rounded-full bg-muted-foreground/20 flex-shrink-0" />
                  <div className="h-2 rounded bg-muted-foreground/25 w-1/2" />
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-7 w-7 rounded-full bg-muted-foreground/20 flex-shrink-0" />
                  <div className="h-2 rounded bg-muted-foreground/25 w-2/3" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-full bg-muted-foreground/20 flex-shrink-0" />
                  <div className="h-2 rounded bg-muted-foreground/25 w-3/5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optical adjustment */}
        <div id="optical-adjustment" className="scroll-mt-24 space-y-4">
          <h3 className="text-base font-semibold text-foreground">Use optical adjustment</h3>
          <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
            Spacing tokens give you consistency — but human perception isn&apos;t mathematically perfect.
            Sometimes a <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">gap-3</code> between an
            icon and text feels better than the &ldquo;correct&rdquo; <code className="rounded bg-muted px-1 py-0.5 font-mono text-xs">gap-4</code>.
            Trust your eye. Deviate from the system sparingly and only when it genuinely improves balance.
          </p>
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="flex-1 space-y-2">
                <p className="text-xs font-medium text-muted-foreground">Mechanical (token)</p>
                <div className="flex items-center gap-4 rounded-lg border border-border px-4 py-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/20 flex-shrink-0 flex items-center justify-center">
                    <div className="h-4 w-4 rounded bg-primary/40" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-2.5 w-24 rounded bg-foreground/60" />
                    <div className="h-2 w-16 rounded bg-muted-foreground/30" />
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-xs font-medium text-primary">Optically adjusted</p>
                <div className="flex items-center gap-3 rounded-lg border border-primary/30 bg-primary/5 px-4 py-3 ring-1 ring-primary/20">
                  <div className="h-8 w-8 rounded-lg bg-primary/20 flex-shrink-0 flex items-center justify-center">
                    <div className="h-4 w-4 rounded bg-primary/40" />
                  </div>
                  <div className="space-y-1">
                    <div className="h-2.5 w-24 rounded bg-foreground/60" />
                    <div className="h-2 w-16 rounded bg-muted-foreground/30" />
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Slightly tighter gap between icon and text often feels more natural than the mathematical step.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
