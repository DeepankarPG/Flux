import type { TocItem } from "@/lib/docs-toc";

export type ComponentDocPage = {
  slug: string;
  title: string;
  description: string;
  importSnippet: string;
  usageSnippet: string;
  toc: TocItem[];
};

const baseToc: TocItem[] = [
  { id: "preview", label: "Preview" },
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
];

export const COMPONENT_DOC_PAGES: ComponentDocPage[] = [
  {
    slug: "avatar",
    title: "Avatar",
    description: "Image with fallback for users and entities (Radix Avatar).",
    importSnippet: `import { Avatar, AvatarFallback, AvatarImage } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Avatar>
  <AvatarImage src="/photo.png" alt="User" />
  <AvatarFallback>FX</AvatarFallback>
</Avatar>`,
    toc: baseToc,
  },
  {
    slug: "button",
    title: "Button",
    description: "Actions and form submission with variants, sizes, loading, and icons.",
    importSnippet: `import { Button } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Button variant="primary">Continue</Button>
<Button variant="outline" isLoading>Save</Button>`,
    toc: baseToc,
  },
  {
    slug: "calendar",
    title: "Calendar",
    description:
      "React DayPicker with Flux tokens: single, range, dropdown captions, week numbers, presets, RTL, and timezone support.",
    importSnippet: `import { Calendar, type DateRange } from "@deepankarraj/flux-ui";`,
    usageSnippet: `const [date, setDate] = useState<Date | undefined>();

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  captionLayout="dropdown"
  className="rounded-xl border border-border"
/>`,
    toc: baseToc,
  },
  {
    slug: "card",
    title: "Card",
    description: "Surface with header, title, description, content, and footer slots.",
    importSnippet: `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Supporting text.</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>`,
    toc: baseToc,
  },
  {
    slug: "chart",
    title: "Chart",
    description: "Recharts composition layer with ChartContainer, tooltips, and theme tokens.",
    importSnippet: `import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@deepankarraj/flux-ui";
import { Bar, BarChart, XAxis } from "recharts";`,
    usageSnippet: `const config = {
  sales: { label: "Sales", color: "var(--chart-1)" },
} satisfies ChartConfig;

<ChartContainer config={config} className="h-48">
  <BarChart data={[{ m: "Jan", sales: 12 }]}>
    <XAxis dataKey="m" />
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="sales" fill="var(--color-chart-1)" radius={4} />
  </BarChart>
</ChartContainer>`,
    toc: baseToc,
  },
  {
    slug: "chart-templates",
    title: "Chart templates",
    description:
      "Dashboard-ready chart and KPI layouts built on Recharts: hero area, grouped bars, ranked lists, category bars, metric sparklines, and attention lists. Pass your data and copy the pattern.",
    importSnippet: `import {
  MetricSparklineCard,
  DashboardAreaChartTemplate,
  GroupedBarChartTemplate,
  RankedBarListTemplate,
  CategoryBarChartTemplate,
  MiniSparklineChartCard,
  AttentionListTemplate,
} from "@deepankarraj/flux-ui";`,
    usageSnippet: `// Compose templates with your data; each component is a styled card + chart.
<DashboardAreaChartTemplate
  title="Gross volume"
  tabs={[{ id: "gross", label: "Gross volume" }]}
  activeTabId="gross"
  onTabChange={() => {}}
  headline="₹9,42,800"
  data={series}
  xKey="hour"
  areaKey="amount"
  compareLineKey="yesterday"
/>

<MetricSparklineCard
  title="Total volume"
  value="₹8,47,250"
  trend={{ direction: "up", label: "+8.4% vs last month" }}
  data={sparkPoints}
/>`,
    toc: baseToc,
  },
  {
    slug: "currency-amount-input",
    title: "Currency amount input",
    description: "Amount field with currency selector for payment-style flows.",
    importSnippet: `import { CurrencyAmountInput } from "@deepankarraj/flux-ui";`,
    usageSnippet: `const [currency, setCurrency] = useState("USD");
const [amount, setAmount] = useState("");

<CurrencyAmountInput
  currency={currency}
  amount={amount}
  onCurrencyChange={setCurrency}
  onAmountChange={setAmount}
/>`,
    toc: baseToc,
  },
  {
    slug: "data-table",
    title: "Data table",
    description: "Column-driven table with pagination, loading skeleton, and empty state.",
    importSnippet: `import { DataTable, type Column } from "@deepankarraj/flux-ui";`,
    usageSnippet: `const columns: Column<Row>[] = [
  { key: "name", header: "Name", render: (r) => r.name },
];

<DataTable rowKey={(r) => r.id} columns={columns} data={rows} />`,
    toc: baseToc,
  },
  {
    slug: "date-picker",
    title: "Date picker",
    description: "Single-date calendar popover with keyboard-friendly grid.",
    importSnippet: `import { DatePicker } from "@deepankarraj/flux-ui";`,
    usageSnippet: `const [value, setValue] = useState("");

<DatePicker value={value} onChange={setValue} placeholder="Pick a date" />`,
    toc: baseToc,
  },
  {
    slug: "dialog",
    title: "Dialog",
    description: "Modal layer with overlay, focus management, and close control.",
    importSnippet: `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Dialog>
  <DialogTrigger asChild>
    <button type="button">Open</button>
  </DialogTrigger>
  <DialogContent>
    <DialogTitle>Title</DialogTitle>
    <DialogDescription>Description</DialogDescription>
  </DialogContent>
</Dialog>`,
    toc: baseToc,
  },
  {
    slug: "dropdown-menu",
    title: "Dropdown menu",
    description: "Anchored menu for row actions, headers, and compact command lists.",
    importSnippet: `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@deepankarraj/flux-ui";`,
    usageSnippet: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <button type="button">Open</button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`,
    toc: baseToc,
  },
  {
    slug: "empty-state",
    title: "Empty state",
    description: "Centered empty panels with title, description, and optional action.",
    importSnippet: `import { EmptyState, Button } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<EmptyState
  title="No results"
  description="Try adjusting filters."
  action={<Button variant="outline" size="sm">Reset</Button>}
/>`,
    toc: baseToc,
  },
  {
    slug: "field",
    title: "Field",
    description: "Form layout primitives: Field, FieldLabel, FieldError, FieldGroup, FieldSet.",
    importSnippet: `import {
  Field,
  FieldLabel,
  FieldGroup,
  FieldDescription,
  FieldError,
  Input,
} from "@deepankarraj/flux-ui";`,
    usageSnippet: `<FieldGroup className="max-w-sm">
  <Field>
    <FieldLabel htmlFor="email">Email</FieldLabel>
    <FieldDescription>We will never share your email.</FieldDescription>
    <Input id="email" type="email" />
    <FieldError>Invalid email</FieldError>
  </Field>
</FieldGroup>`,
    toc: [...baseToc, { id: "related", label: "Related" }],
  },
  {
    slug: "input",
    title: "Input",
    description: "Text field, textarea, and label primitives for forms.",
    importSnippet: `import { Input, Textarea, Label } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Label htmlFor="x">Name</Label>
<Input id="x" placeholder="Jane" />
<Textarea placeholder="Notes" rows={3} />`,
    toc: [
      { id: "preview", label: "Preview" },
      { id: "installation", label: "Installation" },
      { id: "usage", label: "Usage" },
    ],
  },
  {
    slug: "otp-input",
    title: "OTP input",
    description: "Multi-box numeric code entry with auto-advance, backspace navigation, and paste support.",
    importSnippet: `import { OtpInput } from "@deepankarraj/flux-ui";`,
    usageSnippet: `const [otp, setOtp] = useState("");

<OtpInput
  value={otp}
  onChange={setOtp}
  length={6}
  onComplete={(code) => console.log("done", code)}
/>`,
    toc: baseToc,
  },
  {
    slug: "input-group",
    title: "Input group",
    description: "Addons, icons, and inline actions around inputs and textareas.",
    importSnippet: `import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@deepankarraj/flux-ui";`,
    usageSnippet: `<InputGroup>
  <InputGroupAddon>https://</InputGroupAddon>
  <InputGroupInput placeholder="example.com" />
</InputGroup>`,
    toc: baseToc,
  },
  {
    slug: "layout-primitives",
    title: "Layout primitives",
    description:
      "Box, Stack, and Inline helpers with token-aligned spacing props (same Tailwind steps as the dashboard). Prefer Tailwind `className` for radii and colors.",
    importSnippet: `import { Box, Stack, Inline } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Stack gap="lg">
  <Box p="md" className="rounded-xl border border-border">
    <Stack gap="sm">…</Stack>
  </Box>
  <Inline gap="md" justify="between">
    <span>Title</span>
    <Button size="sm" variant="outline">Action</Button>
  </Inline>
</Stack>`,
    toc: baseToc,
  },
  {
    slug: "password-input",
    title: "Password input",
    description: "Secure text field with a show/hide visibility toggle.",
    importSnippet: `import { PasswordInput } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Label htmlFor="pwd">Password</Label>
<PasswordInput id="pwd" placeholder="Enter your password" />`,
    toc: baseToc,
  },
  {
    slug: "page-header",
    title: "Page header",
    description: "List and detail page titles with optional actions slot.",
    importSnippet: `import { PageHeader, Button } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<PageHeader
  title="Transactions"
  subtitle="Recent transactions"
  actions={<Button size="sm">Export</Button>}
/>`,
    toc: baseToc,
  },
  {
    slug: "popover",
    title: "Popover",
    description: "Anchored floating panel for filters, pickers, and compact forms.",
    importSnippet: `import { Popover, PopoverContent, PopoverTrigger } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Popover>
  <PopoverTrigger asChild>
    <button type="button">Open</button>
  </PopoverTrigger>
  <PopoverContent>Content</PopoverContent>
</Popover>`,
    toc: baseToc,
  },
  {
    slug: "scroll-area",
    title: "Scroll area",
    description: "Custom scrollbars for dense panels and sidebars.",
    importSnippet: `import { ScrollArea } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<ScrollArea className="h-48 rounded-xl border border-border p-3">
  …long content…
</ScrollArea>`,
    toc: baseToc,
  },
  {
    slug: "select",
    title: "Select",
    description: "Styled native-style select built on Radix Select.",
    importSnippet: `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Select defaultValue="a">
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Choose" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="a">Option A</SelectItem>
    <SelectItem value="b">Option B</SelectItem>
  </SelectContent>
</Select>`,
    toc: baseToc,
  },
  {
    slug: "separator",
    title: "Separator",
    description: "Visual divider; also composed inside FieldSeparator.",
    importSnippet: `import { Separator } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Separator className="my-4" />
<Separator orientation="vertical" className="mx-2 h-6" />`,
    toc: baseToc,
  },
  {
    slug: "skeleton",
    title: "Skeleton",
    description: "Shimmer placeholders for tables, charts, and stat cards.",
    importSnippet: `import { Shimmer, StatCardSkeleton, TableRowSkeleton } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<StatCardSkeleton />
<TableRowSkeleton cols={4} />`,
    toc: baseToc,
  },
  {
    slug: "sonner",
    title: "Sonner",
    description: "Themed toast host and toast() API (wraps sonner + next-themes).",
    importSnippet: `import { Toaster, toast } from "@deepankarraj/flux-ui";`,
    usageSnippet: `// Root layout
<Toaster />

// Client
toast.success("Saved");`,
    toc: baseToc,
  },
  {
    slug: "status-badge",
    title: "Status badge",
    description: "Workflow states for payments, disputes, and settlements.",
    importSnippet: `import { StatusBadge } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<StatusBadge status="settled" />
<StatusBadge status="pending" />`,
    toc: baseToc,
  },
  {
    slug: "tabs",
    title: "Tabs",
    description: "Section switching without navigation (Radix Tabs).",
    importSnippet: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Tabs defaultValue="a">
  <TabsList>
    <TabsTrigger value="a">Tab A</TabsTrigger>
    <TabsTrigger value="b">Tab B</TabsTrigger>
  </TabsList>
  <TabsContent value="a">Panel A</TabsContent>
  <TabsContent value="b">Panel B</TabsContent>
</Tabs>`,
    toc: baseToc,
  },
  {
    slug: "tooltip",
    title: "Tooltip",
    description: "Hover and focus hints; wrap with TooltipProvider.",
    importSnippet: `import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@deepankarraj/flux-ui";`,
    usageSnippet: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <button type="button">Hover</button>
    </TooltipTrigger>
    <TooltipContent>Hint</TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    toc: baseToc,
  },
  {
    slug: "checkbox",
    title: "Checkbox",
    description: "Checkbox input with indeterminate state, sizes, and accessible label support.",
    importSnippet: `import { Checkbox } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Checkbox id="terms" />
<label htmlFor="terms">Accept terms and conditions</label>

{/* Indeterminate */}
<Checkbox checked="indeterminate" />`,
    toc: baseToc,
  },
  {
    slug: "radio",
    title: "Radio",
    description: "Radio group for single selection from a list of options.",
    importSnippet: `import { RadioGroup, RadioGroupItem } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<RadioGroup defaultValue="card">
  <RadioGroupItem value="card" id="card" />
  <label htmlFor="card">Card</label>
  <RadioGroupItem value="upi" id="upi" />
  <label htmlFor="upi">UPI</label>
</RadioGroup>`,
    toc: baseToc,
  },
  {
    slug: "switch",
    title: "Switch",
    description: "Toggle switch for binary on/off settings.",
    importSnippet: `import { Switch } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Switch id="notifications" />
<label htmlFor="notifications">Enable notifications</label>`,
    toc: baseToc,
  },
  {
    slug: "slider",
    title: "Slider",
    description: "Range slider for selecting numeric values within a min/max range.",
    importSnippet: `import { Slider } from "@deepankarraj/flux-ui";`,
    usageSnippet: `const [value, setValue] = useState([50]);

<Slider
  min={0}
  max={100}
  step={1}
  value={value}
  onValueChange={setValue}
  className="w-64"
/>`,
    toc: baseToc,
  },
  {
    slug: "breadcrumbs",
    title: "Breadcrumbs",
    description: "Navigation trail showing current page location within the hierarchy.",
    importSnippet: `import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/payments">Payments</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Details</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
    toc: baseToc,
  },
  {
    slug: "pagination",
    title: "Pagination",
    description: "Page navigation controls for multi-page lists and tables.",
    importSnippet: `import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
    toc: baseToc,
  },
  {
    slug: "alert",
    title: "Alert",
    description: "Inline status messages for info, success, warning, and error states.",
    importSnippet: `import { Alert, AlertTitle, AlertDescription } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Alert variant="info">
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>Your payout will be processed in 2 business days.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Payment failed. Please try again.</AlertDescription>
</Alert>`,
    toc: baseToc,
  },
  {
    slug: "badge",
    title: "Badge",
    description: "Generic label chip for categorization, counts, and status indicators.",
    importSnippet: `import { Badge } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>`,
    toc: baseToc,
  },
  {
    slug: "tag",
    title: "Tag",
    description: "Removable label chips for filters and multi-select values.",
    importSnippet: `import { Tag, TagGroup } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<TagGroup>
  <Tag onRemove={() => {}}>Visa</Tag>
  <Tag onRemove={() => {}}>Mastercard</Tag>
  <Tag onRemove={() => {}}>UPI</Tag>
</TagGroup>`,
    toc: baseToc,
  },
  {
    slug: "spinner",
    title: "Spinner",
    description: "Loading indicator for async operations and pending states.",
    importSnippet: `import { Spinner } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Spinner />
<Spinner size="sm" />
<Spinner size="lg" className="text-primary" />`,
    toc: baseToc,
  },
  {
    slug: "drawer",
    title: "Drawer",
    description: "Slide-in panel from any edge for secondary content and forms.",
    importSnippet: `import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Drawer>
  <DrawerTrigger asChild>
    <button type="button">Open drawer</button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Filter transactions</DrawerTitle>
    </DrawerHeader>
    <p className="px-4">Content goes here.</p>
  </DrawerContent>
</Drawer>`,
    toc: baseToc,
  },
  {
    slug: "progress",
    title: "Progress",
    description: "Progress bar and step tracker for multi-step flows and completion states.",
    importSnippet: `import { Progress, ProgressTracker } from "@deepankarraj/flux-ui";`,
    usageSnippet: `{/* Linear progress bar */}
<Progress value={60} className="w-full" />

{/* Step tracker */}
<ProgressTracker
  steps={["Details", "Review", "Confirm"]}
  currentStep={1}
/>`,
    toc: baseToc,
  },
  {
    slug: "accordion",
    title: "Accordion",
    description: "Collapsible content sections for FAQs and grouped settings.",
    importSnippet: `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Accordion type="single" collapsible>
  <AccordionItem value="q1">
    <AccordionTrigger>What is the settlement cycle?</AccordionTrigger>
    <AccordionContent>Settlements are processed on T+1 business days.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="q2">
    <AccordionTrigger>How do I raise a dispute?</AccordionTrigger>
    <AccordionContent>Navigate to Disputes and click New Dispute.</AccordionContent>
  </AccordionItem>
</Accordion>`,
    toc: baseToc,
  },
  {
    slug: "callout",
    title: "Callout",
    description: "Prominent inline message for guidance, tips, and contextual information.",
    importSnippet: `import { Callout, CalloutTitle, CalloutText } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Callout variant="info">
  <CalloutTitle>Note</CalloutTitle>
  <CalloutText>Webhook retries are attempted up to 3 times with exponential backoff.</CalloutText>
</Callout>

<Callout variant="warning">
  <CalloutTitle>Action required</CalloutTitle>
  <CalloutText>Complete your KYC to unlock higher transaction limits.</CalloutText>
</Callout>`,
    toc: baseToc,
  },
  {
    slug: "code",
    title: "Code",
    description: "Inline code and multi-line code blocks with copy-to-clipboard.",
    importSnippet: `import { Code, CodeBlock } from "@deepankarraj/flux-ui";`,
    usageSnippet: `{/* Inline */}
<p>Pass the <Code>amount</Code> as a number in paise.</p>

{/* Block */}
<CodeBlock language="json">
  {JSON.stringify({ status: "SUCCESS", txnId: "TXN123" }, null, 2)}
</CodeBlock>`,
    toc: baseToc,
  },
  {
    slug: "command",
    title: "Command",
    description: "Command palette with keyboard navigation for search and quick actions.",
    importSnippet: `import {
  Command,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
} from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Command className="rounded-xl border border-border shadow-md">
  <CommandInput placeholder="Search components..." />
  <CommandList>
    <CommandGroup heading="Components">
      <CommandItem>Button</CommandItem>
      <CommandItem>Card</CommandItem>
      <CommandItem>Dialog</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
    toc: baseToc,
  },
  {
    slug: "icon-button",
    title: "Icon button",
    description: "Square icon-only button with variants, sizes, and required aria-label.",
    importSnippet: `import { IconButton } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<IconButton aria-label="Close" icon={<XIcon />} />`,
    toc: baseToc,
  },
  {
    slug: "button-group",
    title: "Button group",
    description: "Connected row of buttons sharing borders. Also includes SplitButton.",
    importSnippet: `import { ButtonGroup, SplitButton } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<ButtonGroup>
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</ButtonGroup>`,
    toc: baseToc,
  },
  {
    slug: "time-picker",
    title: "Time picker",
    description: "Popover time selector with 12/24h format and scrollable hour/minute columns.",
    importSnippet: `import { TimePicker } from "@deepankarraj/flux-ui";`,
    usageSnippet: `const [time, setTime] = useState("");

<TimePicker value={time} onChange={setTime} />`,
    toc: baseToc,
  },
  {
    slug: "form",
    title: "Form",
    description: "Lightweight form validation wrapper with useForm hook, field errors, and accessible labels.",
    importSnippet: `import { Form, useForm } from "@deepankarraj/flux-ui";`,
    usageSnippet: `const form = useForm({ defaultValues: { email: "" } });

<Form form={form} onSubmit={(values) => console.log(values)}>
  <Input {...form.register("email")} />
</Form>`,
    toc: baseToc,
  },
  {
    slug: "inline-edit",
    title: "Inline edit",
    description: "Click-to-edit text component for in-place editing of values.",
    importSnippet: `import { InlineEdit } from "@deepankarraj/flux-ui";`,
    usageSnippet: `const [value, setValue] = useState("Click to edit");

<InlineEdit value={value} onChange={setValue} />`,
    toc: baseToc,
  },
  {
    slug: "lozenge",
    title: "Lozenge",
    description: "Compact bold uppercase status chip for workflow states.",
    importSnippet: `import { Lozenge } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Lozenge appearance="success">Approved</Lozenge>
<Lozenge appearance="removed">Rejected</Lozenge>`,
    toc: baseToc,
  },
  {
    slug: "section-message",
    title: "Section message",
    description: "Full-width prominent message block with colored border accent and action slots.",
    importSnippet: `import { SectionMessage } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<SectionMessage
  appearance="warning"
  title="KYC incomplete"
  actions={<Button size="sm">Complete KYC</Button>}
>
  Verify your details to unlock higher limits.
</SectionMessage>`,
    toc: baseToc,
  },
  {
    slug: "flag",
    title: "Flag",
    description: "Auto-dismissable floating notification with progress bar and useFlagGroup hook.",
    importSnippet: `import { Flag, useFlagGroup } from "@deepankarraj/flux-ui";`,
    usageSnippet: `const { addFlag } = useFlagGroup();

addFlag({ title: "Payment successful", appearance: "success" });`,
    toc: baseToc,
  },
  {
    slug: "heading",
    title: "Heading",
    description: "Typed h1–h6 heading component with size/color variants.",
    importSnippet: `import { Heading } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Heading as="h1" size="xl">Dashboard</Heading>
<Heading as="h2" size="lg" color="subtle">Overview</Heading>`,
    toc: baseToc,
  },
  {
    slug: "text",
    title: "Text",
    description: "Semantic text and MetricText primitives with size, weight, and color variants.",
    importSnippet: `import { Text, MetricText } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Text size="sm" color="subtle">Last updated 2 hours ago.</Text>
<MetricText size="xl">₹9,42,800</MetricText>`,
    toc: baseToc,
  },
  {
    slug: "visually-hidden",
    title: "Visually hidden",
    description: "Screen-reader-only wrapper; optionally visible on focus for skip links.",
    importSnippet: `import { VisuallyHidden } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<VisuallyHidden>Skip to main content</VisuallyHidden>`,
    toc: baseToc,
  },
  {
    slug: "blanket",
    title: "Blanket",
    description: "Full-screen overlay backdrop for modals and custom layered UI.",
    importSnippet: `import { Blanket } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Blanket isTinted onBlanketClicked={() => setOpen(false)} />`,
    toc: baseToc,
  },
  {
    slug: "inline-dialog",
    title: "Inline dialog",
    description: "Small anchored floating dialog with arrow pointer toward the trigger.",
    importSnippet: `import { InlineDialog } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<InlineDialog isOpen={open} onClose={() => setOpen(false)} placement="bottom-start">
  <p>Quick confirmation message.</p>
</InlineDialog>`,
    toc: baseToc,
  },
  {
    slug: "spotlight",
    title: "Spotlight",
    description: "Guided onboarding overlay with step cards, dot indicators, and useSpotlight hook.",
    importSnippet: `import { SpotlightManager, SpotlightTarget, useSpotlight } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<SpotlightManager>
  <SpotlightTarget name="export-button">
    <Button>Export</Button>
  </SpotlightTarget>
</SpotlightManager>`,
    toc: baseToc,
  },
  {
    slug: "menu",
    title: "Menu",
    description: "Standalone vertical navigation menu with sections, items, and danger states.",
    importSnippet: `import { Menu, MenuSection, MenuItem } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Menu>
  <MenuSection title="Account">
    <MenuItem>Profile</MenuItem>
    <MenuItem isDanger>Delete account</MenuItem>
  </MenuSection>
</Menu>`,
    toc: baseToc,
  },
  {
    slug: "side-nav",
    title: "Side nav",
    description: "Collapsible sidebar navigation with header, sections, and footer slots.",
    importSnippet: `import { SideNav, SideNavSection, SideNavItem } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<SideNav header={<Logo />} footer={<UserMenu />}>
  <SideNavSection title="Payments">
    <SideNavItem href="/transactions">Transactions</SideNavItem>
    <SideNavItem href="/disputes">Disputes</SideNavItem>
  </SideNavSection>
</SideNav>`,
    toc: baseToc,
  },
  {
    slug: "progress-indicator",
    title: "Progress indicator",
    description: "Dot-based step/page indicator with animated active pill.",
    importSnippet: `import { ProgressIndicator } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<ProgressIndicator steps={4} selectedIndex={1} />`,
    toc: baseToc,
  },
  {
    slug: "responsive",
    title: "Responsive",
    description: "Show/Hide components and useBreakpoint hook for responsive layouts.",
    importSnippet: `import { Show, Hide, useBreakpoint } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<Show above="md">
  <DesktopSidebar />
</Show>
<Hide above="md">
  <MobileDrawer />
</Hide>`,
    toc: baseToc,
  },
  {
    slug: "checkbox-select",
    title: "Checkbox select",
    description: "Multi-select dropdown with checkboxes, search, and select-all.",
    importSnippet: `import { CheckboxSelect } from "@deepankarraj/flux-ui";`,
    usageSnippet: `const [selected, setSelected] = useState<string[]>([]);

<CheckboxSelect
  options={[{ label: "Card", value: "card" }, { label: "UPI", value: "upi" }]}
  value={selected}
  onChange={setSelected}
  placeholder="Select methods"
/>`,
    toc: baseToc,
  },
  {
    slug: "country-select",
    title: "Country select",
    description: "Select with flag emoji, country name, and dial code.",
    importSnippet: `import { CountrySelect } from "@deepankarraj/flux-ui";`,
    usageSnippet: `const [country, setCountry] = useState("IN");

<CountrySelect value={country} onChange={setCountry} />`,
    toc: baseToc,
  },
  {
    slug: "avatar-tag",
    title: "Avatar tag",
    description: "Compact tag chip combining an avatar with a label and optional remove button.",
    importSnippet: `import { AvatarTag } from "@deepankarraj/flux-ui";`,
    usageSnippet: `<AvatarTag
  src="/avatar.png"
  label="Deepankar Raj"
  onRemove={() => {}}
/>`,
    toc: baseToc,
  },
];

export const COMPONENT_BY_SLUG = Object.fromEntries(COMPONENT_DOC_PAGES.map((p) => [p.slug, p]));

export function getSortedComponentPages(): ComponentDocPage[] {
  return [...COMPONENT_DOC_PAGES].sort((a, b) => a.title.localeCompare(b.title));
}
