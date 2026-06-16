"use client";

import { useState } from "react";
import {
  AlertCircle,
  ArrowUpRight,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronRight,
  DollarSign,
  ExternalLink,
  FileText,
  Home,
  Info,
  LayoutDashboard,
  Settings,
  Star,
  User,
  Users,
  Zap,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  AttentionListTemplate,
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  AvatarTag,
  Badge,
  Blanket,
  CheckboxSelect,
  Hide,
  InlineDialog,
  InlineDialogContent,
  InlineDialogTrigger,
  Show,
  SideNav,
  SideNavFooter,
  SideNavHeader,
  SideNavItem,
  SideNavSection,
  Box,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  ButtonGroup,
  Callout,
  CalloutIcon,
  CalloutText,
  CalloutTitle,
  Checkbox,
  Code,
  CodeBlock,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  CountrySelect,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Flag,
  FlagGroup,
  Heading,
  IconButton,
  InlineEdit,
  Label,
  Link,
  Lozenge,
  Menu,
  MenuDivider,
  MenuItem,
  MenuSection,
  MetricText,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Progress,
  ProgressIndicator,
  ProgressTracker,
  RadioGroup,
  RadioGroupItem,
  SectionMessage,
  SectionMessageActions,
  SectionMessageContent,
  SectionMessageTitle,
  Slider,
  Spinner,
  Switch,
  Tag,
  TagGroup,
  Text,
  TimePicker,
  VisuallyHidden,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CategoryBarChartTemplate,
  CurrencyAmountInput,
  DashboardAreaChartTemplate,
  DataTable,
  type Column,
  DatePicker,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  EmptyState,
  GroupedBarChartTemplate,
  Inline,
  MetricSparklineCard,
  MiniSparklineChartCard,
  PageHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RankedBarListTemplate,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  SplitButton,
  Stack,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  toast,
} from "@deepankarraj/flux-ui";
import { ButtonPlayground } from "@/components/docs/playgrounds/ButtonPlayground";
import { CalendarPlayground } from "@/components/docs/playgrounds/CalendarPlayground";
import { CardPlayground } from "@/components/docs/playgrounds/CardPlayground";
import { ChartPlayground } from "@/components/docs/playgrounds/ChartPlayground";
import { DataTablePlayground } from "@/components/docs/playgrounds/DataTablePlayground";
import { DropdownMenuPlayground } from "@/components/docs/playgrounds/DropdownMenuPlayground";
import { FieldPlayground } from "@/components/docs/playgrounds/FieldPlayground";
import { InputGroupPlayground } from "@/components/docs/playgrounds/InputGroupPlayground";
import { InputPlayground } from "@/components/docs/playgrounds/InputPlayground";
import { OtpInputPlayground } from "@/components/docs/playgrounds/OtpInputPlayground";
import { PasswordInputPlayground } from "@/components/docs/playgrounds/PasswordInputPlayground";
import { ScrollAreaPlayground } from "@/components/docs/playgrounds/ScrollAreaPlayground";
import { SelectPlayground } from "@/components/docs/playgrounds/SelectPlayground";
import { SkeletonPlayground } from "@/components/docs/playgrounds/SkeletonPlayground";
import { StatusBadgePlayground } from "@/components/docs/playgrounds/StatusBadgePlayground";

type Row = { id: string; name: string };

const tableData: Row[] = [
  { id: "1", name: "Acme Corp" },
  { id: "2", name: "Globex" },
];

const tableColumns: Column<Row>[] = [
  { key: "name", header: "Merchant", render: (r) => r.name },
];

function TimePickerDemo() {
  const [time, setTime] = useState("");
  return (
    <div className="mx-auto w-full max-w-xs">
      <TimePicker value={time} onValueChange={setTime} placeholder="Select time" />
    </div>
  );
}

function ChartTemplatesDemo() {
  const [dashTab, setDashTab] = useState("gross");

  const areaData = [
    { t: "04:00", v: 320000, cmp: 280000 },
    { t: "08:00", v: 540000, cmp: 410000 },
    { t: "12:00", v: 720000, cmp: 650000 },
    { t: "16:00", v: 890000, cmp: 720000 },
    { t: "20:00", v: 620000, cmp: 580000 },
    { t: "22:00", v: 480000, cmp: 450000 },
  ];

  const grouped = [
    { m: "Sep", volume: 520000, settled: 410000 },
    { m: "Oct", volume: 610000, settled: 480000 },
    { m: "Nov", volume: 540000, settled: 500000 },
    { m: "Dec", volume: 720000, settled: 620000 },
    { m: "Jan", volume: 680000, settled: 590000 },
    { m: "Feb", volume: 750000, settled: 640000 },
    { m: "Mar", volume: 820000, settled: 700000 },
  ];

  const miniSpark = Array.from({ length: 12 }, (_, i) => ({
    x: i,
    y: 93 + Math.sin(i / 2.2) * 2.2,
    compare: 91 + Math.cos(i / 2.5) * 1.8,
  }));

  const metricSpark = Array.from({ length: 14 }, (_, i) => ({ x: i, y: 40 + i * 2 + (i % 3) * 4 }));

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <MetricSparklineCard
          title="Total volume"
          icon={<BarChart3 />}
          value="₹8,47,250.00"
          trend={{ direction: "up", label: "+8.4% vs last month" }}
          data={metricSpark}
          accentColor="var(--chart-1)"
        />
        <MetricSparklineCard
          title="Success rate"
          icon={<CheckCircle2 />}
          value="94.20%"
          trend={{ direction: "up", label: "+1.2% vs last month" }}
          data={miniSpark.map((d) => ({ x: d.x, y: d.y }))}
          accentColor="var(--chart-4)"
        />
        <MetricSparklineCard
          title="Avg. ticket size"
          icon={<DollarSign />}
          value="₹2,475.00"
          trend={{ direction: "down", label: "−3.1% vs last month" }}
          data={metricSpark.map((d, i) => ({ x: d.x, y: 80 - i * 3 }))}
          accentColor="var(--chart-5)"
        />
        <MetricSparklineCard
          title="Failed"
          icon={<AlertCircle />}
          value="2"
          trend={{ direction: "down", label: "−50% vs last month" }}
          data={metricSpark.map((d, i) => ({ x: d.x, y: Math.max(2, 8 - i) }))}
          accentColor="var(--destructive)"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <DashboardAreaChartTemplate
          title="Gross volume"
          tabs={[
            { id: "gross", label: "Gross volume" },
            { id: "net", label: "Net volume" },
            { id: "pay", label: "No. of payments" },
          ]}
          activeTabId={dashTab}
          onTabChange={setDashTab}
          headline="₹9,42,800 INR"
          delta={
            <span className="inline-flex items-center gap-1 font-medium text-emerald-600 dark:text-emerald-400">
              <ArrowUpRight className="size-4 shrink-0" aria-hidden />
              +14.1% vs yesterday
            </span>
          }
          data={areaData}
          xKey="t"
          areaKey="v"
          compareLineKey="cmp"
          height={220}
          footer={
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Upcoming settlement:{" "}
                <span className="font-semibold tabular-nums text-foreground">₹1,24,890</span>
              </p>
              <Button type="button" variant="outline" size="md" className="gap-1.5 self-start sm:self-auto">
                View settlement history
                <ExternalLink className="size-3.5 opacity-70" aria-hidden />
              </Button>
            </div>
          }
        />
        <div className="flex min-w-0 flex-col gap-4">
          <MiniSparklineChartCard
            title="Payment success rate"
            value="94.2%"
            accentColor="var(--chart-4)"
            data={miniSpark}
            stats={[
              { label: "Successful", value: "1,240", dotClassName: "bg-emerald-500" },
              { label: "Failed", value: "78", dotClassName: "bg-red-500" },
              { label: "Avg. value", value: "₹2,120" },
            ]}
          />
          <AttentionListTemplate
            title="Needs attention"
            items={[
              {
                id: "hold",
                title: "Funds on hold",
                value: "₹48,200",
                valueTone: "warning",
                meta: "12 transactions",
                actionLabel: "Take action",
              },
              {
                id: "disputes",
                title: "Open disputes",
                value: "3",
                valueTone: "danger",
                meta: "Due this week",
                actionLabel: "Take action",
              },
            ]}
          />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <GroupedBarChartTemplate
          title="Monthly volume"
          subtitle="Payment volume vs settlements"
          data={grouped}
          xKey="m"
          series={[
            { key: "volume", label: "Volume", color: "var(--chart-1)" },
            { key: "settled", label: "Settled", color: "var(--chart-2)" },
          ]}
          height={220}
        />
        <CategoryBarChartTemplate
          title="Settlement speed (T+N)"
          subtitle="% of volume by working-day lag"
          data={[
            { category: "T+0", value: 42 },
            { category: "T+1", value: 28 },
            { category: "T+2", value: 14 },
            { category: "T+3+", value: 8 },
          ]}
          height={220}
        />
      </div>

      <RankedBarListTemplate
        title="Country insights"
        subtitle="Share of volume"
        headerRight={
          <Select defaultValue="30d">
            <SelectTrigger className="h-8 w-[8.5rem] text-xs">
              <SelectValue placeholder="Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
            </SelectContent>
          </Select>
        }
        items={[
          { id: "in", label: "India", value: "₹4.1L", percent: 100, leading: <span className="text-xs">IN</span> },
          { id: "us", label: "United States", value: "₹3.1L", percent: 76, leading: <span className="text-xs">US</span> },
          { id: "gb", label: "United Kingdom", value: "₹1.8L", percent: 44, leading: <span className="text-xs">GB</span> },
          { id: "sg", label: "Singapore", value: "₹1.2L", percent: 29, leading: <span className="text-xs">SG</span> },
        ]}
      />
    </div>
  );
}

export function ComponentPreview({ slug }: { slug: string }) {
  const [date, setDate] = useState("");
  const [dateWithMin, setDateWithMin] = useState("");
  const [cur, setCur] = useState("USD");
  const [amt, setAmt] = useState("");
  const [currencyDisabled, setCurrencyDisabled] = useState(false);
  const [popoverSide, setPopoverSide] = useState<"top" | "right" | "bottom" | "left">("bottom");

  switch (slug) {
    case "avatar":
      return (
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Avatar className="h-8 w-8 border border-border">
            <AvatarImage src="" alt="" />
            <AvatarFallback className="text-[10px] font-semibold">S</AvatarFallback>
          </Avatar>
          <Avatar className="h-10 w-10 border border-border">
            <AvatarImage src="" alt="" />
            <AvatarFallback className="text-xs font-semibold">MD</AvatarFallback>
          </Avatar>
          <Avatar className="h-16 w-16 border-2 border-border shadow-sm">
            <AvatarImage src="" alt="" />
            <AvatarFallback className="text-lg font-semibold">FX</AvatarFallback>
          </Avatar>
        </div>
      );
    case "button":
      return <ButtonPlayground />;
    case "calendar":
      return <CalendarPlayground />;
    case "card":
      return <CardPlayground />;
    case "chart":
      return <ChartPlayground />;
    case "chart-templates":
      return <ChartTemplatesDemo />;
    case "currency-amount-input":
      return (
        <div className="mx-auto flex w-full max-w-md flex-col gap-4 self-center">
          <CurrencyAmountInput
            currency={cur}
            amount={amt}
            onCurrencyChange={setCur}
            onAmountChange={setAmt}
            disabled={currencyDisabled}
          />
          <Button type="button" size="md" variant="outline" className="self-start" onClick={() => setCurrencyDisabled((d) => !d)}>
            {currencyDisabled ? "Enable" : "Disable"} field
          </Button>
        </div>
      );
    case "data-table":
      return <DataTablePlayground />;
    case "date-picker":
      return (
        <Stack gap="lg" className="mx-auto w-full max-w-xs self-center text-left">
          <div>
            <p className="mb-1.5 text-xs font-medium text-muted-foreground">Default</p>
            <DatePicker value={date} onChange={setDate} placeholder="Pick a date" />
          </div>
          <div>
            <p className="mb-1.5 text-xs font-medium text-muted-foreground">With min date</p>
            <DatePicker
              value={dateWithMin}
              onChange={setDateWithMin}
              placeholder="After today"
              min={new Date().toISOString().slice(0, 10)}
            />
          </div>
        </Stack>
      );
    case "dialog":
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="lg"
              className="w-fit max-w-full shrink-0 self-center border-border shadow-sm hover:bg-muted/60"
            >
              Open dialog
            </Button>
          </DialogTrigger>
          <DialogContent className="space-y-3">
            <DialogTitle>Example dialog</DialogTitle>
            <DialogDescription className="text-[15px] leading-relaxed">
              This modal uses the same Flux tokens as the merchant app. Close with the X or by clicking outside.
            </DialogDescription>
          </DialogContent>
        </Dialog>
      );
    case "dropdown-menu":
      return <DropdownMenuPlayground />;
    case "empty-state":
      return (
        <Stack gap="lg" className="w-full max-w-md">
          <EmptyState
            className="rounded-xl border border-dashed border-border bg-card py-12 shadow-sm"
            title="Nothing here yet"
            description="Create your first record to get started."
            action={
              <Button size="md" variant="primary">
                Create record
              </Button>
            }
          />
          <EmptyState
            className="rounded-xl border border-border bg-muted/20 py-10 shadow-sm"
            title="Title only"
            icon={FileText}
          />
        </Stack>
      );
    case "field":
      return <FieldPlayground />;
    case "input":
      return <InputPlayground />;
    case "input-group":
      return <InputGroupPlayground />;
    case "otp-input":
      return <OtpInputPlayground />;
    case "password-input":
      return <PasswordInputPlayground />;
    case "layout-primitives":
      return (
        <Stack gap="lg" className="w-full max-w-lg text-left">
          <p className="text-sm text-muted-foreground">
            Token-aligned spacing props map to the same Tailwind steps used on dashboard pages (typically <code className="rounded bg-muted px-1 font-mono text-xs">gap-3</code> /{" "}
            <code className="rounded bg-muted px-1 font-mono text-xs">gap-4</code>).
          </p>
          <Box p="md" className="rounded-xl border border-border bg-card shadow-sm">
            <Stack gap="sm">
              <span className="text-sm font-medium text-foreground">Stack (vertical)</span>
              <span className="text-xs text-muted-foreground">gap=&quot;sm&quot; inside padded Box</span>
            </Stack>
          </Box>
          <Box p="sm" className="rounded-xl border border-dashed border-border bg-muted/15">
            <Stack gap="xs">
              <span className="text-xs font-medium text-muted-foreground">Nested Stack gap=&quot;xs&quot;</span>
              <span className="text-xs text-muted-foreground">Tighter vertical rhythm for dense UI.</span>
            </Stack>
          </Box>
          <Inline gap="md" justify="between" className="w-full rounded-xl border border-border bg-card px-4 py-3">
            <span className="text-sm font-medium">Inline</span>
            <Button size="md" variant="outline">
              Action
            </Button>
          </Inline>
          <Inline gap="sm" justify="end" className="w-full rounded-xl border border-border bg-card px-4 py-2">
            <Button size="md" variant="ghost">
              Cancel
            </Button>
            <Button size="md" variant="primary">
              Save
            </Button>
          </Inline>
        </Stack>
      );
    case "page-header":
      return (
        <Stack gap="lg" className="w-full">
          <PageHeader
            className="mb-0 w-full"
            title="Page title"
            subtitle="Subtitle for this view."
            actions={
              <>
                <Button size="md" variant="outline">
                  Export
                </Button>
                <Button size="md" variant="primary">
                  Primary action
                </Button>
              </>
            }
          />
          <PageHeader className="mb-0 w-full border-t border-border pt-6" title="Title only" subtitle="No action row — copy-led header." />
        </Stack>
      );
    case "popover":
      return (
        <div className="flex w-full max-w-md flex-col items-center gap-4 self-center">
          <div className="flex flex-wrap justify-center gap-2">
            {(["top", "right", "bottom", "left"] as const).map((s) => (
              <Button
                key={s}
                type="button"
                size="sm"
                variant={popoverSide === s ? "primary" : "outline"}
                onClick={() => setPopoverSide(s)}
              >
                {s}
              </Button>
            ))}
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="lg" className="w-fit max-w-full shrink-0">
                Open popover
              </Button>
            </PopoverTrigger>
            <PopoverContent side={popoverSide} className="max-w-xs text-sm leading-relaxed">
              Popover content uses the same surface tokens as selects and menus. Current side:{" "}
              <span className="font-medium text-foreground">{popoverSide}</span>.
            </PopoverContent>
          </Popover>
        </div>
      );
    case "scroll-area":
      return <ScrollAreaPlayground />;
    case "select":
      return <SelectPlayground />;
    case "separator":
      return (
        <Stack gap="lg" className="mx-auto w-full max-w-sm text-left">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Section above</p>
            <Separator />
            <p className="text-sm text-muted-foreground">Section below</p>
          </div>
          <div className="flex h-16 items-center gap-4 rounded-lg border border-border px-4">
            <span className="text-sm text-muted-foreground">Left</span>
            <Separator orientation="vertical" className="h-8" />
            <span className="text-sm text-muted-foreground">Right</span>
          </div>
        </Stack>
      );
    case "skeleton":
      return <SkeletonPlayground />;
    case "sonner":
      return (
        <div className="flex flex-wrap justify-center gap-3">
          <Button size="lg" variant="secondary" onClick={() => toast.success("Saved successfully.")}>
            Success toast
          </Button>
          <Button size="lg" variant="outline" onClick={() => toast.error("Something went wrong. Try again.")}>
            Error toast
          </Button>
        </div>
      );
    case "status-badge":
      return <StatusBadgePlayground />;
    case "tabs":
      return (
        <Tabs defaultValue="a" className="mx-auto w-full max-w-lg">
          <TabsList className="w-full justify-start sm:w-auto">
            <TabsTrigger value="a">Overview</TabsTrigger>
            <TabsTrigger value="b">Details</TabsTrigger>
            <TabsTrigger value="c" disabled>
              Disabled
            </TabsTrigger>
          </TabsList>
          <TabsContent value="a" className="rounded-lg border border-border bg-card p-4 shadow-sm">
            <p className="text-sm leading-relaxed text-muted-foreground">First panel content.</p>
          </TabsContent>
          <TabsContent value="b" className="rounded-lg border border-border bg-card p-4 shadow-sm">
            <p className="text-sm leading-relaxed text-muted-foreground">Second panel content.</p>
          </TabsContent>
        </Tabs>
      );
    case "tooltip":
      return (
        <TooltipProvider delayDuration={200}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {(["top", "right", "bottom", "left"] as const).map((side) => (
              <Tooltip key={side}>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="md" className="capitalize">
                    {side}
                  </Button>
                </TooltipTrigger>
                <TooltipContent side={side} className="max-w-xs">
                  Tooltip on the <span className="font-medium">{side}</span> side.
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      );
    case "accordion":
      return (
        <div className="mx-auto w-full max-w-lg text-left">
          <Accordion type="single" collapsible defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Flux UI?</AccordionTrigger>
              <AccordionContent>Flux UI is an open design system built with React, Tailwind CSS v4, and Radix primitives — the same stack used in production.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I install it?</AccordionTrigger>
              <AccordionContent>Run <Code>npm install @deepankarraj/flux-ui</Code> and follow the Tailwind v4 setup in the Installation guide.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is dark mode supported?</AccordionTrigger>
              <AccordionContent>Yes — all components use CSS variables that switch automatically when you add the <Code>.dark</Code> class to your root element.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      );
    case "alert":
      return (
        <Stack gap="md" className="mx-auto w-full max-w-lg text-left">
          <Alert variant="info"><AlertTitle>Info</AlertTitle><AlertDescription>Your account has been updated successfully.</AlertDescription></Alert>
          <Alert variant="success"><AlertTitle>Success</AlertTitle><AlertDescription>Payment processed — transaction ID TXN-2934.</AlertDescription></Alert>
          <Alert variant="warning" dismissible><AlertTitle>Warning</AlertTitle><AlertDescription>Your API key expires in 3 days. Rotate it now.</AlertDescription></Alert>
          <Alert variant="error"><AlertTitle>Error</AlertTitle><AlertDescription>Unable to connect to the payment gateway. Please retry.</AlertDescription></Alert>
        </Stack>
      );
    case "badge":
      return (
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="default" size="sm">Small</Badge>
          <Badge variant="success" size="lg">Large</Badge>
        </div>
      );
    case "breadcrumbs":
      return (
        <Stack gap="lg" className="mx-auto w-full max-w-lg text-left">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Breadcrumbs</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbEllipsis /></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="#">Settings</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>Profile</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Stack>
      );
    case "callout":
      return (
        <Stack gap="md" className="mx-auto w-full max-w-lg text-left">
          <Callout variant="info">
            <CalloutIcon variant="info" />
            <div><CalloutTitle>Before you begin</CalloutTitle><CalloutText>Make sure your Tailwind config points @source at the flux-ui package src directory.</CalloutText></div>
          </Callout>
          <Callout variant="discovery">
            <CalloutIcon variant="discovery" />
            <div><CalloutTitle>New in v2</CalloutTitle><CalloutText>MetricText, CountrySelect, and Spotlight are now available in this release.</CalloutText></div>
          </Callout>
          <Callout variant="warning">
            <CalloutIcon variant="warning" />
            <div><CalloutTitle>Breaking change</CalloutTitle><CalloutText>The package scope changed from @flux/ui to @deepankarraj/flux-ui in v0.2.</CalloutText></div>
          </Callout>
        </Stack>
      );
    case "checkbox":
      return (
        <Stack gap="md" className="mx-auto w-full max-w-xs text-left">
          <div className="flex items-center gap-2"><Checkbox id="cb1" defaultChecked /><label htmlFor="cb1" className="text-sm font-medium text-foreground">Checked</label></div>
          <div className="flex items-center gap-2"><Checkbox id="cb2" /><label htmlFor="cb2" className="text-sm font-medium text-foreground">Unchecked</label></div>
          <div className="flex items-center gap-2"><Checkbox id="cb3" disabled defaultChecked /><label htmlFor="cb3" className="text-sm font-medium text-muted-foreground">Disabled checked</label></div>
          <div className="flex items-center gap-2"><Checkbox id="cb4" size="lg" /><label htmlFor="cb4" className="text-sm font-medium text-foreground">Large</label></div>
        </Stack>
      );
    case "code":
      return (
        <Stack gap="md" className="mx-auto w-full max-w-lg text-left">
          <p className="text-sm text-muted-foreground">Import the component using <Code>@deepankarraj/flux-ui</Code> and wrap with <Code>TooltipProvider</Code>.</p>
          <CodeBlock language="tsx" filename="example.tsx" code={`import { Button } from "@deepankarraj/flux-ui";

export function MyPage() {
  return <Button variant="primary">Get started</Button>;
}`} />
        </Stack>
      );
    case "command":
      return (
        <div className="mx-auto w-full max-w-sm">
          <Command>
            <CommandInput placeholder="Search components..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Components">
                <CommandItem onSelect={() => {}}><Zap className="size-4 text-muted-foreground" />Button<CommandShortcut>⌘B</CommandShortcut></CommandItem>
                <CommandItem onSelect={() => {}}><Star className="size-4 text-muted-foreground" />Card</CommandItem>
                <CommandItem onSelect={() => {}}><Users className="size-4 text-muted-foreground" />Avatar</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Navigation">
                <CommandItem onSelect={() => {}}><Home className="size-4 text-muted-foreground" />Breadcrumbs</CommandItem>
                <CommandItem onSelect={() => {}}><LayoutDashboard className="size-4 text-muted-foreground" />Tabs</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      );
    case "country-select":
      return (
        <div className="mx-auto w-full max-w-xs">
          <CountrySelect placeholder="Select country" showDialCode />
        </div>
      );
    case "drawer":
      return (
        <div className="flex flex-wrap justify-center gap-3">
          {(["right", "bottom", "left"] as const).map((side) => (
            <Drawer key={side} side={side}>
              <DrawerTrigger asChild>
                <Button variant="outline" size="md" className="capitalize">{side}</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Drawer — {side}</DrawerTitle>
                  <DrawerDescription>This drawer slides in from the {side}.</DrawerDescription>
                </DrawerHeader>
                <div className="flex-1 px-6 py-4">
                  <p className="text-sm text-muted-foreground">Add your content here — forms, details, or secondary actions.</p>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild><Button variant="ghost" size="md">Cancel</Button></DrawerClose>
                  <Button variant="primary" size="md">Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          ))}
        </div>
      );
    case "flag":
      return (
        <Stack gap="md" className="mx-auto w-full max-w-sm">
          {(["info", "success", "warning", "error"] as const).map((v) => (
            <Flag key={v} id={v} variant={v} title={`${v.charAt(0).toUpperCase() + v.slice(1)} notification`} description="This flag auto-dismisses after 8 seconds." />
          ))}
        </Stack>
      );
    case "heading":
      return (
        <Stack gap="md" className="mx-auto w-full max-w-lg text-left">
          <Heading level={1} size="3xl">Heading 1 — Display</Heading>
          <Heading level={2} size="2xl">Heading 2 — Page title</Heading>
          <Heading level={3} size="xl">Heading 3 — Section</Heading>
          <Heading level={4} size="lg">Heading 4 — Subsection</Heading>
          <Text size="md">Body text — regular paragraph copy used throughout the UI.</Text>
          <Text size="sm" color="subtle">Subtle body text — used for descriptions and secondary content.</Text>
          <MetricText size="xl" trend="up" prefix="$">1,24,320</MetricText>
        </Stack>
      );
    case "icon-button":
      return (
        <div className="flex flex-wrap items-center justify-center gap-3">
          <IconButton aria-label="Settings" variant="primary"><Settings className="size-4" /></IconButton>
          <IconButton aria-label="User" variant="secondary"><User className="size-4" /></IconButton>
          <IconButton aria-label="Bell" variant="outline"><Bell className="size-4" /></IconButton>
          <IconButton aria-label="Ghost" variant="ghost"><Star className="size-4" /></IconButton>
          <IconButton aria-label="Small" variant="outline" size="sm"><Settings className="size-3.5" /></IconButton>
          <IconButton aria-label="Large" variant="primary" size="lg"><Zap className="size-5" /></IconButton>
          <IconButton aria-label="Loading" variant="primary" isLoading><Settings className="size-4" /></IconButton>
        </div>
      );
    case "button-group":
      return (
        <Stack gap="lg" className="items-center">
          <ButtonGroup>
            <Button variant="outline" size="md">Day</Button>
            <Button variant="outline" size="md">Week</Button>
            <Button variant="primary" size="md">Month</Button>
            <Button variant="outline" size="md">Year</Button>
          </ButtonGroup>
          <SplitButton label="Publish" variant="primary" onClick={() => {}} size="md">
            <div className="py-1">
              <button className="w-full px-3 py-2 text-left text-sm hover:bg-muted transition-colors">Save as draft</button>
              <button className="w-full px-3 py-2 text-left text-sm hover:bg-muted transition-colors">Schedule</button>
            </div>
          </SplitButton>
        </Stack>
      );
    case "inline-edit":
      return (
        <Stack gap="lg" className="mx-auto w-full max-w-sm text-left">
          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground">Click to edit</p>
            <InlineEdit value="Acme Corporation" onConfirm={() => {}} />
          </div>
          <div>
            <p className="mb-2 text-xs font-medium text-muted-foreground">Multiline</p>
            <InlineEdit value="Click here to edit this longer description text inline." onConfirm={() => {}} multiline />
          </div>
        </Stack>
      );
    case "lozenge":
      return (
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Lozenge>Default</Lozenge>
          <Lozenge variant="inprogress">In Progress</Lozenge>
          <Lozenge variant="success">Done</Lozenge>
          <Lozenge variant="moved">Moved</Lozenge>
          <Lozenge variant="new">New</Lozenge>
          <Lozenge variant="removed">Removed</Lozenge>
        </div>
      );
    case "menu":
      return (
        <div className="mx-auto w-64 rounded-xl border border-border bg-card shadow-sm p-2">
          <Menu>
            <MenuSection label="Account">
              <MenuItem icon={<User className="size-4" />} isSelected>Profile</MenuItem>
              <MenuItem icon={<Settings className="size-4" />}>Settings</MenuItem>
            </MenuSection>
            <MenuDivider />
            <MenuSection label="Navigate">
              <MenuItem icon={<LayoutDashboard className="size-4" />} href="#">Dashboard</MenuItem>
              <MenuItem icon={<BarChart3 className="size-4" />} href="#">Analytics</MenuItem>
            </MenuSection>
            <MenuDivider />
            <MenuItem isDanger>Sign out</MenuItem>
          </Menu>
        </div>
      );
    case "pagination":
      return (
        <Stack gap="lg" className="items-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
              <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
              <PaginationItem><PaginationEllipsis /></PaginationItem>
              <PaginationItem><PaginationLink href="#">10</PaginationLink></PaginationItem>
              <PaginationItem><PaginationNext href="#" /></PaginationItem>
            </PaginationContent>
          </Pagination>
        </Stack>
      );
    case "progress":
      return (
        <Stack gap="lg" className="mx-auto w-full max-w-sm text-left">
          <div><p className="mb-2 text-xs font-medium text-muted-foreground">Default 65%</p><Progress value={65} label /></div>
          <div><p className="mb-2 text-xs font-medium text-muted-foreground">Success</p><Progress value={100} variant="success" label /></div>
          <div><p className="mb-2 text-xs font-medium text-muted-foreground">Warning</p><Progress value={40} variant="warning" /></div>
          <div>
            <p className="mb-3 text-xs font-medium text-muted-foreground">Step tracker</p>
            <ProgressTracker steps={[
              { label: "Account", status: "complete" },
              { label: "Details", status: "current" },
              { label: "Payment", status: "upcoming" },
              { label: "Confirm", status: "upcoming" },
            ]} />
          </div>
        </Stack>
      );
    case "progress-indicator":
      return (
        <Stack gap="lg" className="items-center">
          <ProgressIndicator selectedIndex={1} values={["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]} />
          <ProgressIndicator selectedIndex={2} values={["A", "B", "C"]} size="lg" />
        </Stack>
      );
    case "radio":
      return (
        <Stack gap="lg" className="mx-auto w-full max-w-xs text-left">
          <RadioGroup defaultValue="card">
            <div className="flex items-center gap-2"><RadioGroupItem value="card" id="r1" /><Label htmlFor="r1">Card payment</Label></div>
            <div className="flex items-center gap-2"><RadioGroupItem value="bank" id="r2" /><Label htmlFor="r2">Bank transfer</Label></div>
            <div className="flex items-center gap-2"><RadioGroupItem value="upi" id="r3" /><Label htmlFor="r3">UPI</Label></div>
            <div className="flex items-center gap-2"><RadioGroupItem value="wallet" id="r4" disabled /><Label htmlFor="r4" className="text-muted-foreground">Wallet (unavailable)</Label></div>
          </RadioGroup>
        </Stack>
      );
    case "section-message":
      return (
        <Stack gap="md" className="mx-auto w-full max-w-lg text-left">
          <SectionMessage variant="info">
            <SectionMessageTitle>Verification required</SectionMessageTitle>
            <SectionMessageContent>Complete KYC verification to enable higher transaction limits on your account.</SectionMessageContent>
            <SectionMessageActions><Button size="sm" variant="primary">Verify now</Button><Button size="sm" variant="ghost">Later</Button></SectionMessageActions>
          </SectionMessage>
          <SectionMessage variant="warning">
            <SectionMessageTitle>Scheduled maintenance</SectionMessageTitle>
            <SectionMessageContent>The payment gateway will be unavailable on Sunday 2 AM – 4 AM IST for routine maintenance.</SectionMessageContent>
          </SectionMessage>
        </Stack>
      );
    case "slider":
      return (
        <Stack gap="lg" className="mx-auto w-full max-w-sm text-left">
          <div><p className="mb-3 text-xs font-medium text-muted-foreground">Default</p><Slider defaultValue={[40]} max={100} step={1} /></div>
          <div><p className="mb-3 text-xs font-medium text-muted-foreground">Range</p><Slider defaultValue={[20, 80]} max={100} step={5} /></div>
          <div><p className="mb-3 text-xs font-medium text-muted-foreground">Disabled</p><Slider defaultValue={[60]} disabled /></div>
        </Stack>
      );
    case "spinner":
      return (
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Spinner size="xs" /><Spinner size="sm" /><Spinner size="md" /><Spinner size="lg" /><Spinner size="xl" />
          <Spinner size="md" color="muted" />
          <div className="rounded-lg bg-primary px-4 py-2"><Spinner size="md" color="white" /></div>
        </div>
      );
    case "switch":
      return (
        <Stack gap="md" className="mx-auto w-full max-w-xs text-left">
          <div className="flex items-center justify-between"><Label>Notifications</Label><Switch defaultChecked /></div>
          <div className="flex items-center justify-between"><Label>Dark mode</Label><Switch /></div>
          <div className="flex items-center justify-between"><Label className="text-muted-foreground">Disabled</Label><Switch disabled defaultChecked /></div>
          <div className="flex items-center gap-3"><Switch size="sm" /><Switch size="md" defaultChecked /><Switch size="lg" /></div>
        </Stack>
      );
    case "tag":
      return (
        <Stack gap="lg" className="mx-auto w-full max-w-sm items-center">
          <div className="flex flex-wrap gap-2 justify-center">
            <Tag>Default</Tag>
            <Tag colorScheme="blue">Blue</Tag>
            <Tag colorScheme="green">Green</Tag>
            <Tag colorScheme="amber">Amber</Tag>
            <Tag colorScheme="red">Red</Tag>
            <Tag colorScheme="purple">Purple</Tag>
          </div>
          <TagGroup>
            <Tag colorScheme="blue" onRemove={() => {}}>React</Tag>
            <Tag colorScheme="green" onRemove={() => {}}>TypeScript</Tag>
            <Tag colorScheme="purple" onRemove={() => {}}>Tailwind</Tag>
          </TagGroup>
        </Stack>
      );
    case "time-picker":
      return <TimePickerDemo />;
    case "link":
      return (
        <Stack gap="md" className="items-center">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#">Default link</Link>
            <Link href="#" variant="subtle">Subtle link</Link>
            <Link href="#" variant="nav">Nav link</Link>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#" size="sm">Small</Link>
            <Link href="#" size="md">Medium</Link>
            <Link href="#" size="lg">Large</Link>
          </div>
        </Stack>
      );
    case "avatar-group":
      return (
        <Stack gap="lg" className="items-center">
          <AvatarGroup avatars={[
            { fallback: "JD" }, { fallback: "AK" }, { fallback: "MR" },
            { fallback: "SP" }, { fallback: "LT" }, { fallback: "BG" },
          ]} max={4} />
          <AvatarGroup avatars={[{ fallback: "AB" }, { fallback: "CD" }, { fallback: "EF" }]} size="lg" />
        </Stack>
      );
    case "visually-hidden":
      return (
        <Stack gap="md" className="items-center text-sm text-muted-foreground">
          <p>The button below has a visually hidden label for screen readers:</p>
          <button className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-border bg-card hover:bg-muted transition-colors">
            <Settings className="size-4" aria-hidden />
            <VisuallyHidden>Open settings</VisuallyHidden>
          </button>
          <p className="text-xs">Screen readers announce: &ldquo;Open settings, button&rdquo;</p>
        </Stack>
      );
    case "blanket":
      return (
        <div className="flex justify-center">
          <Button variant="outline" size="lg" onClick={() => toast.success("Blanket shown — click outside to dismiss (simulated here)")}>
            Show blanket
          </Button>
        </div>
      );
    case "spotlight":
      return (
        <div className="mx-auto w-72">
          <div className="bg-card border border-border rounded-xl shadow-xl p-5">
            <h3 className="font-semibold text-base text-foreground">Welcome to Flux UI</h3>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">This is a Spotlight card — used for guided onboarding flows and feature announcements.</p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">1 of 3</span>
                <div className="flex gap-1">
                  {[0,1,2].map((i) => <span key={i} className={`rounded-full transition-all ${i===0?"w-4 h-1.5 bg-primary":"w-1.5 h-1.5 bg-muted-foreground/30"}`} />)}
                </div>
              </div>
              <Button size="sm" variant="primary">Next <ChevronRight className="size-3 ml-1" /></Button>
            </div>
          </div>
        </div>
      );
    case "form":
      return (
        <div className="mx-auto w-full max-w-sm text-left">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Email <span className="text-destructive">*</span></label>
              <input className="flex h-11 w-full rounded-lg border border-border bg-card px-4 py-2 text-[15px] shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-muted-foreground" placeholder="you@example.com" type="email" />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Company</label>
              <input className="flex h-11 w-full rounded-lg border border-border bg-card px-4 py-2 text-[15px] shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring placeholder:text-muted-foreground" placeholder="Acme Corp" />
              <p className="text-xs text-muted-foreground">Used for invoice and billing.</p>
            </div>
            <Button variant="primary" size="md" className="w-full">Submit</Button>
          </div>
        </div>
      );
    case "avatar-tag":
      return (
        <div className="flex flex-wrap items-center justify-center gap-3">
          <AvatarTag label="Jane Doe" />
          <AvatarTag label="Arjun Kumar" onRemove={() => {}} />
          <AvatarTag label="Maria R." size="lg" onRemove={() => {}} />
          <AvatarTag label="Sam P." size="sm" disabled />
        </div>
      );
    case "checkbox-select":
      return (
        <div className="mx-auto w-full max-w-xs">
          <CheckboxSelect
            options={[
              { value: "react", label: "React" },
              { value: "vue", label: "Vue" },
              { value: "angular", label: "Angular" },
              { value: "svelte", label: "Svelte" },
              { value: "solid", label: "Solid" },
            ]}
            value={["react", "svelte"]}
            onChange={() => {}}
            placeholder="Select frameworks"
            showSearch
          />
        </div>
      );
    case "inline-dialog":
      return (
        <div className="flex items-center justify-center">
          <InlineDialog>
            <InlineDialogTrigger asChild>
              <Button variant="outline" size="md">Open inline dialog</Button>
            </InlineDialogTrigger>
            <InlineDialogContent>
              <p className="text-sm font-semibold text-foreground mb-1">Need help?</p>
              <p className="text-sm text-muted-foreground leading-relaxed">This is an inline dialog — a compact floating panel anchored to its trigger. No backdrop, no blocking.</p>
            </InlineDialogContent>
          </InlineDialog>
        </div>
      );
    case "side-nav":
      return (
        <div className="mx-auto overflow-hidden rounded-xl border border-border shadow-sm" style={{ height: 360 }}>
          <SideNav className="h-full">
            <SideNavHeader>
              <span className="text-sm font-semibold text-foreground">Flux App</span>
            </SideNavHeader>
            <SideNavSection label="Main">
              <SideNavItem icon={<LayoutDashboard className="size-4" />} label="Dashboard" isActive />
              <SideNavItem icon={<BarChart3 className="size-4" />} label="Analytics" />
              <SideNavItem icon={<Users className="size-4" />} label="Users" />
            </SideNavSection>
            <SideNavSection label="Settings">
              <SideNavItem icon={<Settings className="size-4" />} label="Settings" />
            </SideNavSection>
            <SideNavFooter>
              <SideNavItem icon={<User className="size-4" />} label="Profile" />
            </SideNavFooter>
          </SideNav>
        </div>
      );
    case "text":
      return (
        <Stack gap="md" className="mx-auto w-full max-w-lg text-left">
          <Text size="lg" weight="semibold">Large semibold text</Text>
          <Text size="md">Medium body — used for main content and descriptions across dashboard pages.</Text>
          <Text size="sm" color="subtle">Small subtle — secondary copy, helper text, and metadata.</Text>
          <Text size="xs" color="subtle">Extra small — labels, timestamps, and fine print.</Text>
          <div className="flex flex-wrap gap-4 items-baseline pt-2 border-t border-border">
            <MetricText size="xl" prefix="$" trend="up">1,24,320</MetricText>
            <MetricText size="lg" trend="down">-4.2%</MetricText>
            <MetricText size="md" trend="neutral">892</MetricText>
          </div>
        </Stack>
      );
    case "responsive":
      return (
        <Stack gap="md" className="mx-auto w-full max-w-lg text-left">
          <div className="rounded-xl border border-border p-4 bg-card">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Resize the window to see changes</p>
            <Show above="md" className="rounded-lg bg-primary/10 text-primary px-3 py-2 text-sm font-medium">
              Visible on md and above (≥768px)
            </Show>
            <Hide above="md" className="rounded-lg bg-amber-500/10 text-amber-700 px-3 py-2 text-sm font-medium">
              Visible below md (&lt;768px)
            </Hide>
          </div>
          <div className="rounded-xl border border-border p-4 bg-card">
            <Show above="lg" className="rounded-lg bg-green-500/10 text-green-700 px-3 py-2 text-sm font-medium">
              Desktop only (≥1024px)
            </Show>
            <Hide above="lg" className="rounded-lg bg-purple-500/10 text-purple-700 px-3 py-2 text-sm font-medium">
              Mobile / tablet (&lt;1024px)
            </Hide>
          </div>
        </Stack>
      );
    default:
      return null;
  }
}
