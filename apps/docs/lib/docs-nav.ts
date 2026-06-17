export type NavItem = { title: string; href: string };

export type DocsNavSection = {
  label: string;
  items: NavItem[];
};

export type ComponentNavGroup = {
  label: string;
  items: NavItem[];
};

export function getDocsNavSections(): DocsNavSection[] {
  return [
    {
      label: "Get started",
      items: [
        { title: "Introduction", href: "/docs" },
        { title: "Installation", href: "/docs/installation" },
        { title: "Theming", href: "/docs/theming" },
        { title: "Guidelines", href: "/docs/guidelines" },
      ],
    },
    {
      label: "Foundations",
      items: [
        { title: "Overview", href: "/docs/foundations" },
        { title: "Design tokens", href: "/docs/foundations/design-tokens" },
        { title: "Color palette", href: "/docs/foundations/color" },
        { title: "Typography", href: "/docs/foundations/typography" },
        { title: "Spacing", href: "/docs/foundations/spacing" },
        { title: "Grid", href: "/docs/foundations/grid" },
        { title: "Motion", href: "/docs/foundations/motion" },
        { title: "Content", href: "/docs/content" },
      ],
    },
    {
      label: "Patterns",
      items: [
        { title: "Overview", href: "/docs/patterns" },
        { title: "Dashboard shell", href: "/docs/patterns/dashboard-shell" },
        { title: "Forms & fields", href: "/docs/patterns/forms" },
      ],
    },
  ];
}

export function getComponentNavGroups(): ComponentNavGroup[] {
  return [
    {
      label: "Forms and input",
      items: [
        { title: "Button", href: "/docs/components/button" },
        { title: "Icon button", href: "/docs/components/icon-button" },
        { title: "Button group", href: "/docs/components/button-group" },
        { title: "Checkbox", href: "/docs/components/checkbox" },
        { title: "Checkbox select", href: "/docs/components/checkbox-select" },
        { title: "Country select", href: "/docs/components/country-select" },
        { title: "Currency amount input", href: "/docs/components/currency-amount-input" },
        { title: "Date picker", href: "/docs/components/date-picker" },
        { title: "Calendar", href: "/docs/components/calendar" },
        { title: "Time picker", href: "/docs/components/time-picker" },
        { title: "Field", href: "/docs/components/field" },
        { title: "Form", href: "/docs/components/form" },
        { title: "Inline edit", href: "/docs/components/inline-edit" },
        { title: "Input", href: "/docs/components/input" },
        { title: "Input group", href: "/docs/components/input-group" },
        { title: "OTP input", href: "/docs/components/otp-input" },
        { title: "Password input", href: "/docs/components/password-input" },
        { title: "Radio", href: "/docs/components/radio" },
        { title: "Select", href: "/docs/components/select" },
        { title: "Slider", href: "/docs/components/slider" },
        { title: "Switch", href: "/docs/components/switch" },
      ],
    },
    {
      label: "Images and icons",
      items: [
        { title: "Avatar", href: "/docs/components/avatar" },
        { title: "Avatar group", href: "/docs/components/avatar-group" },
        { title: "Avatar tag", href: "/docs/components/avatar-tag" },
      ],
    },
    {
      label: "Labels",
      items: [
        { title: "Badge", href: "/docs/components/badge" },
        { title: "Lozenge", href: "/docs/components/lozenge" },
        { title: "Status badge", href: "/docs/components/status-badge" },
        { title: "Tag", href: "/docs/components/tag" },
      ],
    },
    {
      label: "Layout and structure",
      items: [
        { title: "Layout primitives", href: "/docs/components/layout-primitives" },
        { title: "Card", href: "/docs/components/card" },
        { title: "Page header", href: "/docs/components/page-header" },
        { title: "Scroll area", href: "/docs/components/scroll-area" },
        { title: "Separator", href: "/docs/components/separator" },
        { title: "Responsive", href: "/docs/components/responsive" },
      ],
    },
    {
      label: "Loading",
      items: [
        { title: "Progress", href: "/docs/components/progress" },
        { title: "Progress indicator", href: "/docs/components/progress-indicator" },
        { title: "Skeleton", href: "/docs/components/skeleton" },
        { title: "Spinner", href: "/docs/components/spinner" },
      ],
    },
    {
      label: "Messaging",
      items: [
        { title: "Alert", href: "/docs/components/alert" },
        { title: "Callout", href: "/docs/components/callout" },
        { title: "Empty state", href: "/docs/components/empty-state" },
        { title: "Flag", href: "/docs/components/flag" },
        { title: "Section message", href: "/docs/components/section-message" },
        { title: "Sonner", href: "/docs/components/sonner" },
      ],
    },
    {
      label: "Navigation",
      items: [
        { title: "Breadcrumbs", href: "/docs/components/breadcrumbs" },
        { title: "Menu", href: "/docs/components/menu" },
        { title: "Pagination", href: "/docs/components/pagination" },
        { title: "Side nav", href: "/docs/components/side-nav" },
        { title: "Tabs", href: "/docs/components/tabs" },
      ],
    },
    {
      label: "Overlays and layering",
      items: [
        { title: "Blanket", href: "/docs/components/blanket" },
        { title: "Dialog", href: "/docs/components/dialog" },
        { title: "Drawer", href: "/docs/components/drawer" },
        { title: "Inline dialog", href: "/docs/components/inline-dialog" },
        { title: "Popover", href: "/docs/components/popover" },
        { title: "Spotlight", href: "/docs/components/spotlight" },
        { title: "Tooltip", href: "/docs/components/tooltip" },
      ],
    },
    {
      label: "Primitives",
      items: [
        { title: "Accordion", href: "/docs/components/accordion" },
        { title: "Code", href: "/docs/components/code" },
        { title: "Command", href: "/docs/components/command" },
        { title: "Dropdown menu", href: "/docs/components/dropdown-menu" },
        { title: "Heading", href: "/docs/components/heading" },
        { title: "Link", href: "/docs/components/link" },
        { title: "Text", href: "/docs/components/text" },
        { title: "Visually hidden", href: "/docs/components/visually-hidden" },
      ],
    },
    {
      label: "Data display",
      items: [
        { title: "Chart", href: "/docs/components/chart" },
        { title: "Chart templates", href: "/docs/components/chart-templates" },
        { title: "Data table", href: "/docs/components/data-table" },
      ],
    },
  ];
}
