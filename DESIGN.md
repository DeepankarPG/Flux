# Flux UI — Design System Specification

> **For Claude and all AI assistants:** This document is the single source of truth for every UI decision in this codebase. Read it before generating any component, page, layout, or style. Follow it exactly. Do not deviate unless the required component or pattern is explicitly not available in `@payglocal_ui/flux-ui` AND cannot be reasonably composed from existing primitives.

---

## 1. Package & Import

All components come from one package:

```tsx
import { Button, Card, Input, ... } from "@payglocal_ui/flux-ui";
```

**Never** install or import from shadcn/ui, Radix UI directly, MUI, Chakra, Ant Design, or any other component library. If a component exists in `@payglocal_ui/flux-ui`, use it — always.

---

## 2. Full Component Inventory

Before building anything custom, check this list. If it's here, use it.

### Forms & Inputs
| Export | Use for |
|---|---|
| `Button` | All actions — primary, secondary, ghost, outline, danger, link |
| `IconButton` | Square icon-only buttons |
| `ButtonGroup` | Connected segmented button rows |
| `SplitButton` | Primary action + dropdown trigger |
| `Input` | All text inputs |
| `PasswordInput` | Password fields with show/hide |
| `OtpInput` | OTP / PIN entry |
| `Textarea` | Multi-line text |
| `Label` | Form labels |
| `Checkbox` | Checkbox with indeterminate support |
| `RadioGroup` / `RadioGroupItem` | Single-select option lists |
| `Switch` | Binary toggle |
| `Slider` | Range input |
| `Select` + sub-parts | Styled native-style select |
| `CheckboxSelect` | Multi-select with checkboxes |
| `CountrySelect` | Country + dial code picker |
| `TimePicker` | 12/24h time picker |
| `DatePicker` | Single-date calendar popover |
| `Calendar` | Full calendar (range, presets, week numbers) |
| `CurrencyAmountInput` | Amount + currency selector for payment flows |
| `InlineEdit` | Click-to-edit inline text |
| `Form` + `FormField`, `FormLabel`, `FormControl`, `FormDescription`, `FormError`, `FormItem`, `useForm` | Form validation wrapper |
| `Field`, `FieldLabel`, `FieldError`, `FieldDescription`, `FieldGroup`, `FieldSet`, `FieldLegend`, `FieldSeparator`, `FieldContent`, `FieldTitle` | Form layout primitives |
| `InputGroup`, `InputGroupAddon`, `InputGroupButton`, `InputGroupInput`, `InputGroupText`, `InputGroupTextarea` | Input with prefix/suffix/actions |

### Navigation
| Export | Use for |
|---|---|
| `Breadcrumb` + sub-parts | Breadcrumb trail |
| `Pagination` + sub-parts | Page navigation |
| `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent` | Section switching |
| `SideNav`, `SideNavHeader`, `SideNavSection`, `SideNavItem`, `SideNavFooter` | Sidebar navigation |
| `Menu`, `MenuSection`, `MenuItem`, `MenuDivider` | Standalone vertical menu |
| `Link` | Typed anchor — default/subtle/nav variants |

### Data Display
| Export | Use for |
|---|---|
| `DataTable` | Column-driven table with pagination, density, skeletons |
| `ChartContainer`, `ChartTooltip`, `ChartTooltipContent`, `ChartLegend`, `ChartLegendContent`, `ChartStyle` | Recharts composition layer |
| `MetricSparklineCard`, `DashboardAreaChartTemplate`, `GroupedBarChartTemplate`, `RankedBarListTemplate`, `CategoryBarChartTemplate`, `MiniSparklineChartCard`, `AttentionListTemplate` | Dashboard-ready chart templates |
| `Code`, `CodeBlock` | Inline code and multi-line code blocks |
| `Heading` | h1–h6 with size/color variants |
| `Text` | Typed paragraph/span text |
| `MetricText` | Large numeric display (tabular-nums) |
| `Badge` | Generic label chip |
| `StatusBadge` | Payment workflow status (success/pending/failed…) |
| `Lozenge` | Compact uppercase status chip |
| `Tag`, `TagGroup` | Removable filter chips |
| `AvatarTag` | Avatar + label chip |
| `EmptyState` | Centered empty panel with action |
| `PageHeader` | Page title + subtitle + actions slot |

### Feedback & Messaging
| Export | Use for |
|---|---|
| `Alert`, `AlertTitle`, `AlertDescription` | Inline status messages |
| `Banner` | Full-width top-of-page alert |
| `Callout`, `CalloutIcon`, `CalloutTitle`, `CalloutText` | Prominent inline guidance |
| `SectionMessage`, `SectionMessageTitle`, `SectionMessageContent`, `SectionMessageActions` | Full-width contextual message |
| `Flag`, `FlagGroup`, `useFlagGroup` | Auto-dismissable floating notifications |
| `Toaster`, `toast` | Toast notifications (via Sonner) |
| `Spinner` | Loading indicator |
| `Progress`, `ProgressTracker` | Progress bar + step tracker |
| `ProgressIndicator` | Dot-based step/page indicator |
| `Shimmer`, `StatCardSkeleton`, `TableRowSkeleton`, `ChartSkeleton` | Loading placeholders |

### Overlays
| Export | Use for |
|---|---|
| `Dialog` + sub-parts | Modal dialog |
| `Drawer` + sub-parts | Slide-in panel (4 sides) |
| `Popover`, `PopoverTrigger`, `PopoverContent`, `PopoverAnchor` | Anchored floating panel |
| `Tooltip`, `TooltipTrigger`, `TooltipContent`, `TooltipProvider` | Hover/focus hints |
| `InlineDialog`, `InlineDialogTrigger`, `InlineDialogContent` | Small anchored dialog with arrow |
| `Blanket` | Full-screen overlay backdrop |
| `Spotlight`, `SpotlightCard`, `useSpotlight` | Guided onboarding overlay |

### Menus & Select
| Export | Use for |
|---|---|
| `DropdownMenu` + sub-parts | Anchored contextual menu |
| `Command`, `CommandInput`, `CommandList`, `CommandEmpty`, `CommandGroup`, `CommandItem`, `CommandSeparator`, `CommandShortcut` | Command palette |
| `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` | Collapsible content sections |

### Layout
| Export | Use for |
|---|---|
| `Box` | Padded container with token spacing |
| `Stack` | Vertical flex with token gap |
| `Inline` | Horizontal flex with token gap |
| `Grid`, `Flex` | CSS grid and flexbox wrappers |
| `Separator` | Horizontal/vertical divider |
| `ScrollArea`, `ScrollBar` | Custom scrollbar for dense panels |

### Avatar
| Export | Use for |
|---|---|
| `Avatar`, `AvatarImage`, `AvatarFallback` | Image with fallback initials |
| `AvatarGroup` | Overlapping avatar stack |
| `AvatarTag` | Avatar + label chip |

### Utility
| Export | Use for |
|---|---|
| `Show`, `Hide`, `useBreakpoint` | Responsive visibility |
| `VisuallyHidden` | Screen-reader-only wrapper |
| `cn` | Classname merge utility |

---

## 3. Design Tokens — Colors

All colors are CSS variables. **Never use hardcoded hex values** in components. Always use the Tailwind utility or the CSS variable.

### Semantic Tokens (always prefer these)

| Token | Tailwind class | Light value | Dark value |
|---|---|---|---|
| `--background` | `bg-background` | `#f6f8fa` | `#0b0f14` |
| `--foreground` | `text-foreground` | `#111827` | `#f3f4f6` |
| `--card` | `bg-card` | `#ffffff` | `#141a22` |
| `--card-foreground` | `text-card-foreground` | `#111827` | `#f3f4f6` |
| `--border` | `border-border` | `#e5e7eb` | `#2a3441` |
| `--muted` | `bg-muted` | `#f3f4f6` | `#1e2630` |
| `--muted-foreground` | `text-muted-foreground` | `#6b7280` | `#b4bcc8` |
| `--primary` | `bg-primary` | `#0061e3` | `#0061e3` |
| `--primary-foreground` | `text-primary-foreground` | `#ffffff` | `#ffffff` |
| `--primary-hover` | `hover:bg-[var(--primary-hover)]` | `#0055c8` | `#3b82f6` |
| `--primary-light` | `bg-primary-light` | `#eff4ff` | `rgba(0,97,227,0.18)` |
| `--ring` | `ring-ring` | `#0061e3` | `#3b82f6` |
| `--destructive` | `bg-destructive` | `#dc2626` | `#f87171` |
| `--destructive-foreground` | `text-destructive-foreground` | `#ffffff` | `#450a0a` |
| `--popover` | `bg-popover` | `#ffffff` | `#1a222d` |
| `--accent` | `bg-accent` | `#f3f4f6` | `#1e2630` |
| `--sidebar` | `bg-sidebar` | `#e8eaee` | `#10151c` |
| `--sidebar-border` | `border-sidebar-border` | `#d8dce3` | `#2a3441` |
| `--sidebar-foreground` | `text-sidebar-foreground` | `#374151` | `#d1d5db` |
| `--header` | `bg-header` | `#ffffff` | `#0f1419` |
| `--header-border` | `border-header-border` | `#e2e5ea` | `#2a3441` |
| `--input` | `border-input` | `#e5e7eb` | `#2a3441` |

### Chart Tokens

| Token | Tailwind | Light | Dark |
|---|---|---|---|
| `--chart-1` | `fill-chart-1` | `#0061e3` | `#60a5fa` |
| `--chart-2` | `fill-chart-2` | `#2563eb` | `#818cf8` |
| `--chart-3` | `fill-chart-3` | `#7c3aed` | `#c4b5fd` |
| `--chart-4` | `fill-chart-4` | `#059669` | `#34d399` |
| `--chart-5` | `fill-chart-5` | `#d97706` | `#fbbf24` |

---

## 4. Typography

### Fonts
| Variable | Font | Use |
|---|---|---|
| `--font-geist-sans` / `font-sans` | Geist Sans | All body copy, UI labels, descriptions |
| `--font-geist-mono` / `font-mono` | Geist Mono | Code, monospace labels, numeric data |

### Type Scale (Tailwind)
| Class | Size | Use |
|---|---|---|
| `text-xs` | 12px | Labels, badges, captions |
| `text-sm` | 14px | Secondary body, form help text |
| `text-[15px]` | 15px | Primary body copy |
| `text-base` | 16px | Large body |
| `text-lg` | 18px | Section subheadings |
| `text-xl` | 20px | Card titles |
| `text-2xl` | 24px | Page section headings |
| `text-3xl` | 30px | Page titles |
| `text-4xl` | 36px | Hero subheadings |

### Font Weight
- **Labels, captions:** `font-medium`
- **Body copy:** `font-normal`
- **Card titles, section headings:** `font-semibold`
- **Page headings:** `font-semibold` or `font-bold`
- **Buttons:** `font-medium` (built into Button component)

---

## 5. Spacing & Layout

### Layout Spacing Scale
The `Box`, `Stack`, and `Inline` components accept a `gap` / `p` prop using these named steps:

| Name | Tailwind equivalent | Pixels |
|---|---|---|
| `none` | `gap-0` / `p-0` | 0px |
| `xs` | `gap-1` / `p-1` | 4px |
| `sm` | `gap-2` / `p-2` | 8px |
| `md` | `gap-3` / `p-3` | 12px — **default for Stack** |
| `lg` | `gap-4` / `p-4` | 16px |
| `xl` | `gap-6` / `p-6` | 24px |

### Page Layout Patterns
- **Page gutter:** `px-4 md:px-6` or `px-6 lg:px-8`
- **Max content width:** `max-w-3xl` (content), `max-w-[52rem]` (docs), `max-w-[1400px]` (landing)
- **Section vertical padding:** `py-8 lg:py-12` (standard), `py-16 lg:py-20` (spacious)
- **Card grid gap:** `gap-4`
- **Form field gap:** `gap-4` between fields, `gap-1.5` between label and input

---

## 6. Border Radius

**Always use the Flux radius scale. Never use arbitrary values unless matching a specific design.**

| Token | Value | Tailwind | Use |
|---|---|---|---|
| `--radius` (base) | 6px | `rounded-md` | Small elements: badges, tags, pills |
| `rounded-lg` | 8px | `rounded-lg` | Inputs, buttons (sm/md), table cells |
| `--radius-xl` | 10px | `rounded-xl` | Cards, panels, code blocks |
| `--radius-2xl` | 14px | `rounded-2xl` | Modals, drawers, large cards |
| `--radius-3xl` | 20px | `rounded-3xl` | Oversized cards, hero elements |
| `rounded-full` | 9999px | `rounded-full` | Avatars, pills, dot indicators |

**Card default:** `rounded-xl` (from Card component)
**Button default:** `rounded-lg` (sm/md), `rounded-xl` (lg)
**Input default:** `rounded-lg`
**Dropdown/Popover:** `rounded-xl`

---

## 7. Shadows

| Class | Use |
|---|---|
| `shadow-sm` | Cards, inputs, buttons — default elevation |
| `shadow-md` | Hover state elevation for interactive cards |
| `shadow-lg` | Popovers, dropdowns |
| `shadow-xl` | Modals, drawers |
| `shadow-2xl` | Spotlight, highest elevation overlays |

---

## 8. Motion Tokens

**Always use these tokens for transitions. Never use arbitrary durations.**

### Duration
| Tailwind class | Value | Use |
|---|---|---|
| `duration-pg-instant` | 0ms | Immediate state changes (no animation) |
| `duration-pg-fast` | 120ms | Hover states, focus rings, micro-interactions |
| `duration-pg-normal` | 200ms | Modals opening, panels, standard transitions |
| `duration-pg-slow` | 320ms | Progress bars, page transitions, reveals |
| `duration-pg-slower` | 480ms | Complex multi-step animations |

### Easing
| Tailwind class | Curve | Use |
|---|---|---|
| `ease-pg-standard` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default for all UI transitions |
| `ease-pg-emphasized` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Overlay entrances, attention draws (bouncy) |
| `ease-pg-linear` | `linear` | Progress bars, looping animations |

### Standard transition pattern
```tsx
className="transition-colors duration-pg-fast ease-pg-standard"
```

---

## 9. Focus & Accessibility

**Every interactive element must have a visible focus ring.**

### Standard focus ring
```
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35
```

### Input focus ring (tighter)
```
focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
```

### Rules
- All buttons, links, inputs, selects must be keyboard accessible
- Use `VisuallyHidden` for icon-only buttons (always pair with `aria-label`)
- `IconButton` requires `aria-label` prop — it is enforced by the type
- Use `TooltipProvider` wrapping when using `Tooltip`
- Validation errors: use `aria-invalid` on inputs + `FieldError` for messages
- Use `role`, `aria-label`, `aria-expanded` correctly on custom interactive elements

---

## 10. Button Usage Rules

```tsx
// ✅ Primary action (one per view)
<Button variant="primary" size="md">Save changes</Button>

// ✅ Secondary / cancel
<Button variant="secondary" size="md">Cancel</Button>

// ✅ Destructive
<Button variant="danger" size="md">Delete account</Button>

// ✅ Icon only — always requires aria-label
<IconButton aria-label="Settings" variant="ghost" size="md">
  <Settings className="size-4" />
</IconButton>

// ✅ Loading state
<Button variant="primary" isLoading>Saving…</Button>

// ✅ With icon
<Button variant="primary" rightIcon={<ArrowRight className="size-4" />}>
  Continue
</Button>

// ❌ Never use raw <button> for primary actions
// ❌ Never hardcode bg-blue-600 or similar — use variant="primary"
// ❌ Never mix Button sizes within the same action group
```

### Size rules
| Size | Height | Use |
|---|---|---|
| `sm` | 36px | Compact tables, tight toolbars, secondary actions |
| `md` | 40px | **Default** — forms, cards, most UI |
| `lg` | 52px | Hero CTAs, landing pages, onboarding |

---

## 11. Form Patterns

### Standard form field
```tsx
<FormItem>
  <FormLabel required>Email address</FormLabel>
  <FormControl>
    <Input type="email" {...register("email")} placeholder="you@company.com" />
  </FormControl>
  <FormDescription>Used for login and notifications.</FormDescription>
  <FormError>{errors.email}</FormError>
</FormItem>
```

### Rules
- Always use `FormItem` > `FormLabel` > `FormControl` > `FormError` structure
- Always use `Field*` primitives for custom layouts
- `required` fields: use `required` prop on `FormLabel` (shows red asterisk)
- Validation errors: bind `aria-invalid` via `register()` return value
- Group related fields with `FieldGroup` or `FieldSet`
- Never put raw `<label>` + `<input>` without the Field/Form primitives

---

## 12. Card Patterns

```tsx
// ✅ Standard card
<Card>
  <CardHeader>
    <CardTitle>Transaction details</CardTitle>
    <CardDescription>Last updated 2 hours ago.</CardDescription>
  </CardHeader>
  <CardContent>…</CardContent>
  <CardFooter>
    <Button variant="outline">Export</Button>
    <Button variant="primary">Confirm</Button>
  </CardFooter>
</Card>

// ✅ Compact card
<Card size="sm">…</Card>

// ❌ Never use raw <div> with custom border/shadow instead of Card
// ❌ Never add rounded-* or shadow-* to Card — it already has rounded-xl shadow-sm
```

---

## 13. Messaging & Alerts

### Hierarchy — pick the right component

| Scenario | Component |
|---|---|
| Inline field error | `FormError` (inside form) |
| Short status message (dismissible) | `Alert` with `dismissible` |
| Contextual guidance, tips | `Callout` |
| Page-level important notice | `SectionMessage` |
| Full-width page banner | `Banner` |
| Auto-dismiss notification | `Flag` (via `useFlagGroup`) |
| Toast (ephemeral action feedback) | `toast()` from Sonner |

### Variants available on Alert / Callout / SectionMessage
`info` | `success` | `warning` | `error` | `neutral`

---

## 14. Color Usage Rules

1. **Page backgrounds:** always `bg-background`
2. **Card/surface backgrounds:** always `bg-card`
3. **Subtle backgrounds (hover, alternate rows):** `bg-muted` or `bg-muted/50`
4. **Primary text:** `text-foreground`
5. **Secondary/helper text:** `text-muted-foreground`
6. **Borders and dividers:** `border-border`
7. **Primary action color:** `bg-primary text-primary-foreground` — never `bg-blue-600`
8. **Hover on primary:** `hover:bg-[var(--primary-hover)]` — never `hover:bg-blue-700`
9. **Destructive:** `bg-destructive text-destructive-foreground` — never `bg-red-600`
10. **Success, warning:** use `emerald-*` / `amber-*` Tailwind classes directly (no token yet)

### What to never do
```tsx
// ❌ Hardcoded hex
<div className="bg-[#0061e3] text-white">

// ❌ Raw Tailwind color for primary
<div className="bg-blue-600 text-white">

// ❌ Custom shadow
<div className="shadow-[0_4px_20px_rgba(0,0,0,0.15)]">

// ✅ Always use tokens
<div className="bg-primary text-primary-foreground">
```

---

## 15. Dark Mode

Dark mode is toggled via `.dark` class on the root `<html>` element (managed by `next-themes`).

**All CSS variables automatically remap in dark mode** — if you use semantic tokens correctly, dark mode works with zero extra effort.

```tsx
// ✅ Works in both modes automatically
<div className="bg-card text-foreground border border-border">

// ❌ Breaks in dark mode
<div className="bg-white text-gray-900 border border-gray-200">
```

When you need mode-specific overrides use the `dark:` prefix:
```tsx
<div className="bg-muted dark:bg-muted/35">
```

---

## 16. Data Tables

```tsx
const columns: Column<Row>[] = [
  { key: "name", header: "Name", render: (r) => r.name },
  { key: "status", header: "Status", render: (r) => <StatusBadge status={r.status} /> },
  { key: "amount", header: "Amount", render: (r) => <MetricText>{r.amount}</MetricText> },
];

<DataTable
  data={rows}
  columns={columns}
  pageSize={20}
  density="comfortable"    // "compact" | "comfortable" | "spacious"
  headerStyle="bordered"   // "plain" | "bordered" | "filled"
  isLoading={loading}
  emptyState={<EmptyState title="No transactions" />}
/>
```

---

## 17. Layout Composition

### Page shell pattern
```tsx
<div className="flex min-h-screen flex-col bg-background">
  {/* Header */}
  <header className="sticky top-0 z-20 h-14 border-b border-header-border bg-header/95 backdrop-blur" />

  <div className="flex flex-1">
    {/* Sidebar */}
    <SideNav>…</SideNav>

    {/* Main */}
    <main className="flex-1 min-w-0 px-4 py-6 md:px-6">
      <PageHeader title="…" subtitle="…" actions={…} />
      {children}
    </main>
  </div>
</div>
```

### Stack/Inline over flex
```tsx
// ✅ Use Stack for vertical layouts
<Stack gap="lg">
  <Card>…</Card>
  <Card>…</Card>
</Stack>

// ✅ Use Inline for horizontal groups
<Inline gap="sm" justify="end">
  <Button variant="ghost">Cancel</Button>
  <Button variant="primary">Save</Button>
</Inline>

// ❌ Avoid raw flex/div when Stack/Inline works
<div className="flex flex-col gap-4">…</div>
```

---

## 18. When to Build Custom (and how)

**Only build a custom component if ALL of the following are true:**
1. The component is not in the inventory above
2. It cannot be composed from 2–3 existing components
3. It serves a unique domain need (e.g. a payment-specific interaction)

**If you must build custom, follow these rules exactly:**

```tsx
"use client"; // only if hooks/events needed

import { cn } from "@payglocal_ui/flux-ui";

// ✅ Use all Flux tokens
// ✅ Same focus ring: focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35
// ✅ Same transition: transition-colors duration-pg-fast ease-pg-standard
// ✅ Same border radius: rounded-lg (default), rounded-xl (cards)
// ✅ Same disabled pattern: disabled:cursor-not-allowed disabled:opacity-50
// ✅ forwardRef on all components
// ✅ Named exports only
// ❌ No hardcoded colors
// ❌ No custom shadows
// ❌ No arbitrary duration values
// ❌ No default exports

export const MyComponent = React.forwardRef<HTMLDivElement, MyProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-border bg-card p-4 shadow-sm",
        "transition-colors duration-pg-fast ease-pg-standard",
        className
      )}
      {...props}
    />
  )
);
MyComponent.displayName = "MyComponent";
```

---

## 19. Anti-Patterns — Never Do These

| ❌ Don't | ✅ Do instead |
|---|---|
| `<button className="bg-blue-600 ...">` | `<Button variant="primary">` |
| `<div className="rounded-lg border border-gray-200 shadow-sm p-6">` | `<Card>` |
| `<input className="border rounded px-3 py-2">` | `<Input>` |
| `<select>` | `<Select>` with sub-parts |
| `transition-all duration-300` | `transition-colors duration-pg-fast ease-pg-standard` |
| Hardcoded `#0061e3`, `#111827`, `#e5e7eb` | `bg-primary`, `text-foreground`, `border-border` |
| `shadow-[0_2px_8px_rgba(0,0,0,0.1)]` | `shadow-sm` |
| `rounded-[6px]` | `rounded-md` |
| Installing shadcn/ui, MUI, Chakra, Ant | Components already exist in `@payglocal_ui/flux-ui` |
| `outline: none` without focus-visible | Always include focus-visible ring |
| Multiple `<h1>` on a page | One `<h1>` per page, use `Heading` level prop |
| Raw `z-index: 9999` | Use Flux z-index layers: `z-10` content, `z-20` sticky, `z-30` nav, `z-50` overlays |

---

## 20. Z-Index Layers

| Layer | Value | Use |
|---|---|---|
| Content | `z-0` / `z-10` | Cards, content sections |
| Sticky elements | `z-20` | Sticky table headers, top bars |
| Navigation | `z-30` | Fixed navbars, sidebars |
| Dropdowns | `z-40` | Popovers, dropdowns, menus |
| Overlays | `z-50` | Modals, drawers, tooltips |

---

## 21. Tailwind v4 Specific Rules

This project uses **Tailwind CSS v4**. Key differences:

- Use `@source` in CSS to scan component classes (already configured in `globals.css`)
- `@theme inline` block maps all CSS variables to Tailwind utilities
- `@custom-variant dark` is configured for `.dark` class toggling
- All `--color-*` utilities are available (e.g. `bg-background`, `text-foreground`)
- Do **not** use `tailwind.config.js` — all config is in `globals.css`

---

## 22. File & Code Conventions

- `"use client"` at top only when component uses hooks or browser events
- `forwardRef` on all exported components
- Named exports only — no `export default`
- No comments unless the WHY is non-obvious
- Import `cn` from `@payglocal_ui/flux-ui`, not from a local utils file
- Component files: one component per file, named to match export
- No inline styles unless using CSS variables (e.g. `style={{ color: "var(--primary)" }}`)

---

## Quick Reference Card

```
COLORS:     bg-background  bg-card  bg-muted  bg-primary  bg-destructive
            text-foreground  text-muted-foreground  text-primary
            border-border  ring-ring

RADIUS:     rounded-md (pills)  rounded-lg (inputs/buttons)
            rounded-xl (cards)  rounded-2xl (modals)  rounded-full (avatars)

SHADOW:     shadow-sm (cards)  shadow-md (hover)  shadow-lg (popover)  shadow-xl (modal)

MOTION:     duration-pg-fast ease-pg-standard  (hover/focus)
            duration-pg-normal ease-pg-standard  (panels/modals)

FOCUS:      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35

DISABLED:   disabled:cursor-not-allowed disabled:opacity-50

PACKAGE:    @payglocal_ui/flux-ui
```
