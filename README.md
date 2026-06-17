# Flux UI

**Open design system by PayGlocal** — React components, design tokens, and documentation built for merchant-grade product interfaces.

[![npm](https://img.shields.io/npm/v/@payglocal_ui/flux-ui)](https://www.npmjs.com/package/@payglocal_ui/flux-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-flux--docs--dusky.vercel.app-blue)](https://flux-docs-dusky.vercel.app)

---

## What is Flux UI?

Flux UI is an open component library and design system shipped by the PayGlocal frontend team. It is the same system used in production dashboards — exposed publicly so that partners, integrators, and the wider community can build consistent, high-quality interfaces on top of the same foundation.

**Stack:** React 18+, Tailwind CSS v4, Radix UI primitives, CSS variables for theming, Recharts for data visualization.

---

## Live docs

**[flux-docs-dusky.vercel.app](https://flux-docs-dusky.vercel.app)**

Every component has a live interactive preview, import snippet, and usage example. Foundations pages cover design tokens, color palette, spacing, grid, typography, motion, and content guidelines.

---

## Install

```bash
npm install @payglocal_ui/flux-ui
```

Peer dependencies:

```bash
npm install react react-dom
```

---

## Setup

### 1. Tailwind CSS v4

Add these two `@source` lines so Tailwind scans Flux class names:

```css
/* app/globals.css */
@import "tailwindcss";

@source "../**/*.{ts,tsx}";
@source "../../../node_modules/@payglocal_ui/flux-ui/src/**/*.{ts,tsx}";

@custom-variant dark (&:where(.dark, .dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-border: var(--border);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-ring: var(--ring);
  /* … copy the full @theme block from the docs */
}
```

### 2. CSS variables (design tokens)

Paste the `:root` and `.dark` token blocks from the [Theming page](https://flux-docs-dusky.vercel.app/docs/theming) into your `globals.css`. These define all semantic color, motion, and radius tokens.

### 3. Next.js (if applicable)

Add `transpilePackages` to your `next.config.ts`:

```ts
const nextConfig = {
  transpilePackages: ["@payglocal_ui/flux-ui"],
};
export default nextConfig;
```

---

## Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "@payglocal_ui/flux-ui";

export function MyPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment summary</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary" size="md">
          Confirm payment
        </Button>
      </CardContent>
    </Card>
  );
}
```

---

## Component library

68+ components across every category. See the [Components docs](https://flux-docs-dusky.vercel.app/docs/components) for live previews.

### Forms & Inputs
| Component | Description |
|---|---|
| `Button` | Primary, secondary, ghost, outline, danger, link variants |
| `IconButton` | Square icon-only button with required `aria-label` |
| `ButtonGroup` | Connected row of buttons sharing borders |
| `SplitButton` | Primary action + dropdown trigger joined |
| `Input` | Text input with validation states |
| `Textarea` | Multi-line input |
| `Checkbox` | With indeterminate state and sizes |
| `RadioGroup` | Single-select from a list |
| `Switch` | Toggle for binary settings |
| `Slider` | Range input with single and dual handles |
| `Select` | Radix-based styled select |
| `CheckboxSelect` | Multi-select dropdown with checkboxes |
| `CountrySelect` | Select with flag emoji and dial codes |
| `TimePicker` | 12/24h time picker with scrollable columns |
| `DatePicker` | Single-date calendar popover |
| `Calendar` | Full calendar with range, presets, and week numbers |
| `CurrencyAmountInput` | Amount + currency selector for payment flows |
| `OtpInput` | 4–8 digit OTP input with auto-advance |
| `PasswordInput` | Password field with show/hide toggle |
| `InlineEdit` | Click-to-edit text field |
| `Form` | Validation wrapper with `useForm` hook |
| `Field` | Form layout primitives (label, error, description) |
| `InputGroup` | Addons and icons around inputs |

### Navigation
| Component | Description |
|---|---|
| `Breadcrumb` | Semantic nav trail |
| `Pagination` | Page navigation controls |
| `Tabs` | Section switching without navigation |
| `SideNav` | Collapsible sidebar navigation |
| `Menu` | Standalone vertical menu |
| `Link` | Typed anchor with variants |

### Data Display
| Component | Description |
|---|---|
| `DataTable` | Column-driven table with pagination, density, skeletons |
| `Chart` | Recharts composition layer with tokens |
| `ChartTemplates` | Dashboard-ready charts: area, grouped bars, ranked lists, sparklines |
| `Code` / `CodeBlock` | Inline code and multi-line blocks with copy button |
| `Heading` | Typed h1–h6 with size/color variants |
| `Text` / `MetricText` | Semantic body text and large numeric display |
| `Badge` | Generic label chip |
| `StatusBadge` | Payment workflow states (success, pending, failed…) |
| `Lozenge` | Compact uppercase status chip |
| `Tag` / `TagGroup` | Removable filter chips |
| `AvatarTag` | Avatar + label chip |

### Feedback & Messaging
| Component | Description |
|---|---|
| `Alert` | Inline info/success/warning/error messages |
| `Banner` | Full-width top-of-page alert |
| `Callout` | Prominent inline guidance block |
| `SectionMessage` | Full-width contextual message with border accent |
| `Flag` | Auto-dismissable floating notification |
| `Toaster` / `toast` | Toast notifications via Sonner |
| `EmptyState` | Centered empty panel with action |
| `Spinner` | Loading indicator (5 sizes) |
| `Progress` | Progress bar with variants |
| `ProgressTracker` | Step-by-step flow indicator |
| `ProgressIndicator` | Dot-based page/step indicator |
| `Skeleton` | Shimmer placeholders |

### Overlays
| Component | Description |
|---|---|
| `Dialog` | Modal with overlay and focus management |
| `Drawer` | Slide-in panel (4 sides) |
| `Popover` | Anchored floating panel |
| `Tooltip` | Hover/focus hints |
| `InlineDialog` | Small anchored dialog with arrow |
| `Blanket` | Full-screen backdrop |
| `Spotlight` | Guided onboarding overlay |

### Layout
| Component | Description |
|---|---|
| `Box` | Padded container primitive |
| `Stack` | Vertical flex with token gap |
| `Inline` | Horizontal flex with token gap |
| `Grid` / `Flex` | CSS grid and flexbox wrappers |
| `Separator` | Horizontal/vertical divider |
| `ScrollArea` | Custom scrollbar for dense panels |
| `PageHeader` | Page title with subtitle and actions |
| `VisuallyHidden` | Screen-reader-only wrapper |
| `Show` / `Hide` | Responsive visibility helpers |

### Avatar
| Component | Description |
|---|---|
| `Avatar` | Image with fallback initials |
| `AvatarGroup` | Overlapping avatar stack with overflow count |

### Utilities
| Component | Description |
|---|---|
| `Accordion` | Collapsible content sections |
| `Command` | Command palette with keyboard navigation |
| `DropdownMenu` | Anchored contextual menu |

---

## Foundations

| Page | Description |
|---|---|
| [Design tokens](https://flux-docs-dusky.vercel.app/docs/foundations/design-tokens) | Searchable table of all CSS variables with light/dark values |
| [Color palette](https://flux-docs-dusky.vercel.app/docs/foundations/color) | Full color scale with swatches and semantic token mapping |
| [Typography](https://flux-docs-dusky.vercel.app/docs/foundations/typography) | Type scale, Geist Sans/Mono, dashboard copy patterns |
| [Spacing](https://flux-docs-dusky.vercel.app/docs/foundations/spacing) | 4px base unit, token scale, layout guidelines |
| [Grid](https://flux-docs-dusky.vercel.app/docs/foundations/grid) | 12-column grid, breakpoints, fluid vs fixed, layout anatomy |
| [Motion](https://flux-docs-dusky.vercel.app/docs/foundations/motion) | Duration and easing tokens, reduced-motion policy |
| [Content](https://flux-docs-dusky.vercel.app/docs/content) | Writing style, grammar, voice and tone, inclusive language |

---

## Monorepo structure

```
flux/
├── apps/
│   └── docs/                  # Next.js 15 documentation site
│       ├── app/
│       │   └── docs/          # All documentation pages
│       ├── components/docs/   # Docs-only components and playgrounds
│       └── lib/               # Component registry, nav, utils
└── packages/
    └── flux-ui/               # Published npm package
        └── src/               # All component source files (TypeScript)
```

The `flux-ui` package ships **TypeScript source directly** — no build step needed. Tailwind processes the source via `@source` in the consuming app.

---

## Development

```bash
# Install dependencies
npm install

# Start docs dev server (http://localhost:3000)
npm run dev:docs

# Type-check the package
npm run build:ui
```

---

## Deployment

- **Docs site:** Auto-deploys to [Vercel](https://vercel.com) on every push to `main`
- **npm package:** Publish manually with `npm publish` from `packages/flux-ui`

```bash
# Publish new version
cd packages/flux-ui
npm version patch   # or minor / major
npm publish
```

---

## License

MIT © [PayGlocal Technologies](https://payglocal.in)

---

## Contributing

This is currently an internal PayGlocal project made public. Issues and discussions are welcome. PRs may be reviewed selectively based on team bandwidth.
