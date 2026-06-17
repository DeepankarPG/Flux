import { ClassValue } from 'clsx';
import * as React$1 from 'react';
import { ButtonHTMLAttributes, HTMLAttributes, ReactNode, ComponentProps, AnchorHTMLAttributes } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as LabelPrimitive from '@radix-ui/react-label';
import { VariantProps } from 'class-variance-authority';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { LucideIcon } from 'lucide-react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { DayPickerProps, DayButtonProps } from 'react-day-picker';
export { DateRange } from 'react-day-picker';
import * as RechartsPrimitive from 'recharts';
import { TooltipValueType } from 'recharts';
import { ToasterProps } from 'sonner';
export { toast } from 'sonner';

declare function cn(...inputs: ClassValue[]): string;

/** Maps to Tailwind spacing steps used across PayGlocal dashboard surfaces */
type LayoutSpacing = "none" | "xs" | "sm" | "md" | "lg" | "xl";
type BoxProps = React$1.HTMLAttributes<HTMLDivElement> & {
    as?: React$1.ElementType;
    p?: LayoutSpacing;
    px?: LayoutSpacing;
    py?: LayoutSpacing;
};
/** Neutral block with token-aligned padding; extend with `className` for radius, borders, flex, etc. */
declare function Box({ as: Comp, className, p, px, py, ...props }: BoxProps): React$1.JSX.Element;
type StackProps = React$1.HTMLAttributes<HTMLDivElement> & {
    as?: React$1.ElementType;
    gap?: LayoutSpacing;
    align?: "start" | "center" | "stretch" | "end";
};
/** Vertical flex stack; default gap matches common section rhythm (`gap-4`). */
declare function Stack({ as: Comp, className, gap, align, ...props }: StackProps): React$1.JSX.Element;
type InlineProps = React$1.HTMLAttributes<HTMLDivElement> & {
    gap?: LayoutSpacing;
    wrap?: boolean;
    justify?: "start" | "center" | "end" | "between";
};
/** Horizontal flex row for toolbars and inline field groups */
declare function Inline({ className, gap, wrap, justify, ...props }: InlineProps): React$1.JSX.Element;

type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
type ResponsiveCols = {
    base?: GridCols;
    sm?: GridCols;
    md?: GridCols;
    lg?: GridCols;
};
type GridFlow = "row" | "col" | "dense";
type GridProps = React$1.HTMLAttributes<HTMLDivElement> & {
    /** Number of columns (1–12 or "auto"), or a responsive object */
    cols?: GridCols | ResponsiveCols;
    /** Number of explicit rows */
    rows?: 1 | 2 | 3 | 4 | 5 | 6 | "auto";
    /** Gap between cells */
    gap?: LayoutSpacing;
    /** Grid auto-flow direction */
    flow?: GridFlow;
};
declare const Grid: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & {
    /** Number of columns (1–12 or "auto"), or a responsive object */
    cols?: GridCols | ResponsiveCols;
    /** Number of explicit rows */
    rows?: 1 | 2 | 3 | 4 | 5 | 6 | "auto";
    /** Gap between cells */
    gap?: LayoutSpacing;
    /** Grid auto-flow direction */
    flow?: GridFlow;
} & React$1.RefAttributes<HTMLDivElement>>;
type FlexDirection = "row" | "col" | "row-reverse" | "col-reverse";
type FlexWrap = boolean | "reverse";
type FlexAlign = "start" | "center" | "end" | "stretch" | "baseline";
type FlexJustify = "start" | "center" | "end" | "between" | "around" | "evenly";
type FlexProps = React$1.HTMLAttributes<HTMLDivElement> & {
    /** Flex direction */
    direction?: FlexDirection;
    /** Whether children wrap */
    wrap?: FlexWrap;
    /** Align items (cross axis) */
    align?: FlexAlign;
    /** Justify content (main axis) */
    justify?: FlexJustify;
    /** Gap between children */
    gap?: LayoutSpacing;
    /** Render as inline-flex */
    inline?: boolean;
};
declare const Flex: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & {
    /** Flex direction */
    direction?: FlexDirection;
    /** Whether children wrap */
    wrap?: FlexWrap;
    /** Align items (cross axis) */
    align?: FlexAlign;
    /** Justify content (main axis) */
    justify?: FlexJustify;
    /** Gap between children */
    gap?: LayoutSpacing;
    /** Render as inline-flex */
    inline?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "danger" | "outline" | "link";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
    orientation?: "horizontal" | "vertical";
    variant?: ButtonProps["variant"];
}
declare const ButtonGroup: React$1.ForwardRefExoticComponent<ButtonGroupProps & React$1.RefAttributes<HTMLDivElement>>;
interface SplitButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
    label: ReactNode;
    onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
    children?: ReactNode;
    variant?: ButtonProps["variant"];
    size?: ButtonProps["size"];
    isLoading?: boolean;
}
declare const SplitButton: React$1.ForwardRefExoticComponent<SplitButtonProps & React$1.RefAttributes<HTMLDivElement>>;
interface SplitButtonItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}
declare const SplitButtonItem: React$1.ForwardRefExoticComponent<SplitButtonItemProps & React$1.RefAttributes<HTMLButtonElement>>;

declare const Input: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React$1.RefAttributes<HTMLInputElement>>;

type PasswordInputProps = Omit<React$1.ComponentProps<typeof Input>, "type">;
declare const PasswordInput: React$1.ForwardRefExoticComponent<Omit<PasswordInputProps, "ref"> & React$1.RefAttributes<HTMLInputElement>>;

interface OtpInputProps {
    /** Current OTP value (controlled). */
    value: string;
    /** Fires with the full joined string on every change. */
    onChange: (value: string) => void;
    /** Number of digit boxes. */
    length?: number;
    /** Fired when all boxes are filled. */
    onComplete?: (value: string) => void;
    disabled?: boolean;
    invalid?: boolean;
    autoFocus?: boolean;
    "aria-label"?: string;
}
declare function OtpInput({ value, onChange, length, onComplete, disabled, invalid, autoFocus, "aria-label": ariaLabel, }: OtpInputProps): React$1.JSX.Element;

interface CheckboxSelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface CheckboxSelectProps {
    options: CheckboxSelectOption[];
    value: string[];
    onChange: (values: string[]) => void;
    placeholder?: string;
    showSearch?: boolean;
    disabled?: boolean;
    maxDisplay?: number;
    className?: string;
}
declare const CheckboxSelect: React$1.ForwardRefExoticComponent<CheckboxSelectProps & React$1.RefAttributes<HTMLButtonElement>>;

declare const Textarea: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "ref"> & React$1.RefAttributes<HTMLTextAreaElement>>;

declare const Label: React$1.ForwardRefExoticComponent<Omit<LabelPrimitive.LabelProps & React$1.RefAttributes<HTMLLabelElement>, "ref"> & VariantProps<(props?: class_variance_authority_types.ClassProp | undefined) => string> & React$1.RefAttributes<HTMLLabelElement>>;

type CheckboxSize = "sm" | "md" | "lg";
interface CheckboxProps extends React$1.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> {
    size?: CheckboxSize;
}
declare const Checkbox: React$1.ForwardRefExoticComponent<CheckboxProps & React$1.RefAttributes<HTMLButtonElement>>;

declare const RadioGroup: React$1.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
type RadioGroupItemProps = React$1.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>;
declare const RadioGroupItem: React$1.ForwardRefExoticComponent<Omit<RadioGroupPrimitive.RadioGroupItemProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;

declare const switchRootVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SwitchProps extends React$1.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>, VariantProps<typeof switchRootVariants> {
}
declare const Switch: React$1.ForwardRefExoticComponent<SwitchProps & React$1.RefAttributes<HTMLButtonElement>>;

interface SliderProps extends React$1.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
}
declare const Slider: React$1.ForwardRefExoticComponent<SliderProps & React$1.RefAttributes<HTMLSpanElement>>;

type FormValues = Record<string, string>;
type FormErrors = Record<string, string>;
interface ValidatorRule {
    required?: boolean | string;
    minLength?: {
        value: number;
        message: string;
    };
    maxLength?: {
        value: number;
        message: string;
    };
    pattern?: {
        value: RegExp;
        message: string;
    };
    validate?: (value: string) => string | undefined;
}
interface FieldConfig {
    defaultValue?: string;
    rules?: ValidatorRule;
}
type FieldsConfig = Record<string, FieldConfig>;
interface RegisterResult {
    name: string;
    id: string;
    value: string;
    onChange: (e: React$1.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    onBlur: () => void;
}
interface UseFormReturn {
    values: FormValues;
    errors: FormErrors;
    register: (name: string) => RegisterResult;
    handleSubmit: (onValid: (values: FormValues) => void, onInvalid?: (errors: FormErrors) => void) => (e: React$1.FormEvent) => void;
    setError: (name: string, message: string) => void;
    clearError: (name: string) => void;
    reset: () => void;
    setValue: (name: string, value: string) => void;
}
declare function useForm(fields?: FieldsConfig): UseFormReturn;
interface FormProps extends React$1.FormHTMLAttributes<HTMLFormElement> {
}
declare const Form: React$1.ForwardRefExoticComponent<FormProps & React$1.RefAttributes<HTMLFormElement>>;
interface FormItemProps extends React$1.HTMLAttributes<HTMLDivElement> {
}
declare const FormItem: React$1.ForwardRefExoticComponent<FormItemProps & React$1.RefAttributes<HTMLDivElement>>;
interface FormLabelProps extends React$1.LabelHTMLAttributes<HTMLLabelElement> {
    required?: boolean;
}
declare const FormLabel: React$1.ForwardRefExoticComponent<FormLabelProps & React$1.RefAttributes<HTMLLabelElement>>;
interface FormControlProps extends React$1.HTMLAttributes<HTMLDivElement> {
}
declare const FormControl: React$1.ForwardRefExoticComponent<FormControlProps & React$1.RefAttributes<HTMLDivElement>>;
interface FormDescriptionProps extends React$1.HTMLAttributes<HTMLParagraphElement> {
}
declare const FormDescription: React$1.ForwardRefExoticComponent<FormDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>>;
interface FormErrorProps extends React$1.HTMLAttributes<HTMLParagraphElement> {
}
declare const FormError: React$1.ForwardRefExoticComponent<FormErrorProps & React$1.RefAttributes<HTMLParagraphElement>>;
interface FormFieldProps extends React$1.HTMLAttributes<HTMLDivElement> {
}
declare const FormField: React$1.ForwardRefExoticComponent<FormFieldProps & React$1.RefAttributes<HTMLDivElement>>;

declare function FieldSet({ className, ...props }: React$1.ComponentProps<"fieldset">): React$1.JSX.Element;
declare function FieldLegend({ className, variant, ...props }: React$1.ComponentProps<"legend"> & {
    variant?: "legend" | "label";
}): React$1.JSX.Element;
declare function FieldGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare const fieldVariants: (props?: ({
    orientation?: "horizontal" | "vertical" | "responsive" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Field({ className, orientation, invalid, disabled, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof fieldVariants> & {
    invalid?: boolean;
    disabled?: boolean;
}): React$1.JSX.Element;
declare function FieldContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function FieldLabel({ className, ...props }: React$1.ComponentProps<typeof Label>): React$1.JSX.Element;
declare function FieldTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function FieldDescription({ className, ...props }: React$1.ComponentProps<"p">): React$1.JSX.Element;
declare function FieldSeparator({ children, className, ...props }: React$1.ComponentProps<"div"> & {
    children?: React$1.ReactNode;
}): React$1.JSX.Element;
declare function FieldError({ className, children, errors, ...props }: React$1.ComponentProps<"div"> & {
    errors?: Array<{
        message?: string;
    } | undefined>;
}): React$1.JSX.Element | null;

declare function InputGroup({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare const inputGroupAddonVariants: (props?: ({
    align?: "inline-start" | "inline-end" | "block-start" | "block-end" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function InputGroupAddon({ className, align, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>): React$1.JSX.Element;
declare const inputGroupButtonVariants: (props?: ({
    size?: "xs" | "sm" | "icon-xs" | "icon-sm" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function InputGroupButton({ className, type, size, ...props }: React$1.ComponentProps<"button"> & VariantProps<typeof inputGroupButtonVariants>): React$1.JSX.Element;
declare function InputGroupText({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function InputGroupInput({ className, ...props }: React$1.ComponentProps<"input">): React$1.JSX.Element;
declare function InputGroupTextarea({ className, ...props }: React$1.ComponentProps<"textarea">): React$1.JSX.Element;

interface CurrencyAmountInputProps {
    currency: string;
    amount: string;
    onCurrencyChange: (currency: string) => void;
    onAmountChange: (amount: string) => void;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    currencies?: string[];
    id?: string;
}
declare function CurrencyAmountInput({ currency, amount, onCurrencyChange, onAmountChange, placeholder, disabled, required, currencies, id, }: CurrencyAmountInputProps): React$1.JSX.Element;

declare const cardVariants: (props?: ({
    size?: "sm" | "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Card({ className, size, ...props }: React$1.ComponentProps<"div"> & VariantProps<typeof cardVariants>): React$1.JSX.Element;
declare function CardHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardDescription({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardAction({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare const Separator: React$1.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const ScrollArea: React$1.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ScrollBar: React$1.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface SideNavProps extends React$1.ComponentPropsWithoutRef<"aside"> {
    /** "collapsed" renders icon-only at 60px; "expanded" renders full at 240px (default) */
    width?: "collapsed" | "expanded";
    /** Controlled collapsed state */
    isCollapsed?: boolean;
    /** Called when the sidebar requests a collapse/expand */
    onCollapse?: (collapsed: boolean) => void;
}
interface SideNavItemProps extends React$1.ComponentPropsWithoutRef<"a"> {
    /** Icon element — required, rendered at size-4 shrink-0 */
    icon: React$1.ReactNode;
    /** Visible label — hidden when sidebar is collapsed */
    label: string;
    /** Highlights the item as the current route */
    isActive?: boolean;
    /** Navigable href — renders an <a> when provided */
    href?: string;
    /** Click handler */
    onClick?: React$1.MouseEventHandler<HTMLElement>;
    /** Optional badge slot rendered after the label */
    badge?: React$1.ReactNode;
    /** Injected by SideNavSection — consumers should not pass this */
    _collapsed?: boolean;
}
declare const SideNav: React$1.ForwardRefExoticComponent<SideNavProps & React$1.RefAttributes<HTMLElement>>;
declare const SideNavHeader: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
interface SideNavSectionProps extends React$1.ComponentPropsWithoutRef<"div"> {
    /** Optional section label — hidden when sidebar is collapsed */
    label?: string;
}
declare const SideNavSection: React$1.ForwardRefExoticComponent<SideNavSectionProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SideNavItem: React$1.ForwardRefExoticComponent<SideNavItemProps & React$1.RefAttributes<HTMLAnchorElement>>;
declare const SideNavFooter: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Breadcrumb: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLElement>, HTMLElement>, "ref"> & {
    separator?: React$1.ReactNode;
} & React$1.RefAttributes<HTMLElement>>;
declare const BreadcrumbList: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, "ref"> & React$1.RefAttributes<HTMLOListElement>>;
declare const BreadcrumbItem: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "ref"> & React$1.RefAttributes<HTMLLIElement>>;
declare const BreadcrumbLink: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "ref"> & React$1.RefAttributes<HTMLAnchorElement>>;
declare const BreadcrumbPage: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;
declare const BreadcrumbSeparator: {
    ({ children, className, ...props }: React$1.ComponentProps<"li">): React$1.JSX.Element;
    displayName: string;
};
declare const BreadcrumbEllipsis: {
    ({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
    displayName: string;
};

interface PaginationProps extends React.ComponentPropsWithoutRef<"nav"> {
}
declare const Pagination: React$1.ForwardRefExoticComponent<PaginationProps & React$1.RefAttributes<HTMLElement>>;
interface PaginationContentProps extends React.ComponentPropsWithoutRef<"ul"> {
}
declare const PaginationContent: React$1.ForwardRefExoticComponent<PaginationContentProps & React$1.RefAttributes<HTMLUListElement>>;
interface PaginationItemProps extends React.ComponentPropsWithoutRef<"li"> {
}
declare const PaginationItem: React$1.ForwardRefExoticComponent<PaginationItemProps & React$1.RefAttributes<HTMLLIElement>>;
interface PaginationLinkProps extends React.ComponentPropsWithoutRef<"a"> {
    isActive?: boolean;
}
declare const PaginationLink: React$1.ForwardRefExoticComponent<PaginationLinkProps & React$1.RefAttributes<HTMLAnchorElement>>;
interface PaginationPreviousProps extends React.ComponentPropsWithoutRef<"a"> {
    disabled?: boolean;
}
declare const PaginationPrevious: React$1.ForwardRefExoticComponent<PaginationPreviousProps & React$1.RefAttributes<HTMLAnchorElement>>;
interface PaginationNextProps extends React.ComponentPropsWithoutRef<"a"> {
    disabled?: boolean;
}
declare const PaginationNext: React$1.ForwardRefExoticComponent<PaginationNextProps & React$1.RefAttributes<HTMLAnchorElement>>;
interface PaginationEllipsisProps extends React.ComponentPropsWithoutRef<"span"> {
}
declare const PaginationEllipsis: React$1.ForwardRefExoticComponent<PaginationEllipsisProps & React$1.RefAttributes<HTMLSpanElement>>;

declare const linkVariants: (props?: ({
    variant?: "nav" | "default" | "subtle" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface LinkProps extends React$1.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof linkVariants> {
    asChild?: boolean;
}
declare const Link: React$1.ForwardRefExoticComponent<LinkProps & React$1.RefAttributes<HTMLAnchorElement>>;

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "secondary" | "success" | "warning" | "error" | "outline";
    size?: "sm" | "md" | "lg";
    square?: boolean;
    dot?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}
declare const Badge: React$1.ForwardRefExoticComponent<BadgeProps & React$1.RefAttributes<HTMLSpanElement>>;

interface LozengeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "inprogress" | "success" | "moved" | "new" | "removed";
    isBold?: boolean;
    maxWidth?: number | string;
}
declare const Lozenge: React$1.ForwardRefExoticComponent<LozengeProps & React$1.RefAttributes<HTMLSpanElement>>;

type TagColorScheme = "neutral" | "blue" | "green" | "amber" | "red" | "purple";
interface TagProps extends React$1.HTMLAttributes<HTMLSpanElement> {
    colorScheme?: TagColorScheme;
    onRemove?: () => void;
    disabled?: boolean;
}
declare const Tag: React$1.ForwardRefExoticComponent<TagProps & React$1.RefAttributes<HTMLSpanElement>>;
interface TagGroupProps extends React$1.HTMLAttributes<HTMLDivElement> {
}
declare const TagGroup: React$1.ForwardRefExoticComponent<TagGroupProps & React$1.RefAttributes<HTMLDivElement>>;

type BadgeVariant = "success" | "info" | "warning" | "refund" | "danger" | "orange" | "muted";
type BadgeTrailIcon = "check" | "x" | "refresh" | "clock" | "alert" | "arrow-right" | "info";
interface StatusBadgeProps {
    variant: BadgeVariant;
    label: string;
    trailIcon?: BadgeTrailIcon;
    size?: "sm" | "md";
    className?: string;
}
declare const StatusBadge: React$1.ForwardRefExoticComponent<StatusBadgeProps & React$1.RefAttributes<HTMLSpanElement>>;

interface BlanketProps extends React$1.HTMLAttributes<HTMLDivElement> {
    /** Controls visibility of the blanket */
    open?: boolean;
    /** Adds semi-transparent black background (default: true) */
    isTinted?: boolean;
    /** Makes blanket completely transparent — only blocks pointer events */
    isTransparent?: boolean;
    /** Called when the blanket is clicked */
    onClick?: React$1.MouseEventHandler<HTMLDivElement>;
    /** When true, pointer events pass through the blanket */
    shouldAllowClickThrough?: boolean;
}
declare const Blanket: React$1.ForwardRefExoticComponent<BlanketProps & React$1.RefAttributes<HTMLDivElement>>;

interface SpotlightStep {
    title: string;
    body: string;
    image?: React$1.ReactNode;
}
interface SpotlightCardProps {
    title: string;
    body: string;
    image?: React$1.ReactNode;
    currentStep?: number;
    totalSteps?: number;
    onNext?: () => void;
    onBack?: () => void;
    onDismiss?: () => void;
    nextLabel?: string;
    className?: string;
}
declare const SpotlightCard: React$1.ForwardRefExoticComponent<SpotlightCardProps & React$1.RefAttributes<HTMLDivElement>>;
interface SpotlightProps {
    isOpen: boolean;
    onClose: () => void;
    children: React$1.ReactNode;
    className?: string;
}
declare const Spotlight: {
    ({ isOpen, onClose, children, className }: SpotlightProps): React$1.JSX.Element | null;
    displayName: string;
};
interface UseSpotlightReturn {
    isOpen: boolean;
    currentStep: number;
    open: () => void;
    close: () => void;
    goNext: () => void;
    goBack: () => void;
    goTo: (step: number) => void;
}
declare function useSpotlight(steps: SpotlightStep[], initialStep?: number): UseSpotlightReturn;

declare const Dialog: React$1.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: React$1.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare function DialogContent({ className, children, showClose, overlayClassName, ...props }: ComponentProps<typeof DialogPrimitive.Content> & {
    showClose?: boolean;
    overlayClassName?: string;
}): React$1.JSX.Element;
declare function DialogTitle({ className, ...props }: ComponentProps<typeof DialogPrimitive.Title>): React$1.JSX.Element;
declare function DialogDescription({ className, ...props }: ComponentProps<typeof DialogPrimitive.Description>): React$1.JSX.Element;

type DrawerSide = "right" | "left" | "top" | "bottom";
interface DrawerProps extends React$1.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
    side?: DrawerSide;
}
declare const Drawer: {
    ({ side, children, ...props }: DrawerProps): React$1.JSX.Element;
    displayName: string;
};
declare const DrawerTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DrawerClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DrawerContent: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DrawerHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const DrawerFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const DrawerTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const DrawerDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<HTMLParagraphElement>>;

declare const Popover: React$1.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React$1.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const PopoverAnchor: React$1.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & React$1.RefAttributes<HTMLDivElement>>;
declare const PopoverContent: React$1.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const TooltipProvider: React$1.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React$1.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React$1.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React$1.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const MenuDivider: React$1.ForwardRefExoticComponent<HTMLAttributes<HTMLHRElement> & React$1.RefAttributes<HTMLHRElement>>;
interface MenuSectionProps extends HTMLAttributes<HTMLDivElement> {
    label?: string;
    children: ReactNode;
}
declare const MenuSection: React$1.ForwardRefExoticComponent<MenuSectionProps & React$1.RefAttributes<HTMLDivElement>>;
type MenuItemBaseProps = {
    icon?: ReactNode;
    rightContent?: ReactNode;
    isSelected?: boolean;
    isDanger?: boolean;
};
type MenuItemButtonProps = MenuItemBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
};
type MenuItemAnchorProps = MenuItemBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
};
type MenuItemProps = MenuItemButtonProps | MenuItemAnchorProps;
declare const MenuItem: React$1.ForwardRefExoticComponent<MenuItemProps & React$1.RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
interface MenuProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
}
declare const Menu: React$1.ForwardRefExoticComponent<MenuProps & React$1.RefAttributes<HTMLElement>>;

declare const DropdownMenu: React$1.FC<DropdownMenuPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React$1.FC<DropdownMenuPrimitive.DropdownMenuPortalProps>;
declare const DropdownMenuSub: React$1.FC<DropdownMenuPrimitive.DropdownMenuSubProps>;
declare const DropdownMenuRadioGroup: React$1.ForwardRefExoticComponent<DropdownMenuPrimitive.DropdownMenuRadioGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubTriggerProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSubContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuCheckboxItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuCheckboxItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuRadioItem: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuRadioItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    inset?: boolean;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React$1.ForwardRefExoticComponent<Omit<DropdownMenuPrimitive.DropdownMenuSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare function DropdownMenuShortcut({ className, ...props }: React$1.HTMLAttributes<HTMLSpanElement>): React$1.JSX.Element;

declare const Select: React$1.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React$1.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React$1.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const SelectScrollUpButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectContent: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React$1.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface CommandProps extends React$1.HTMLAttributes<HTMLDivElement> {
}
interface CommandInputProps extends React$1.InputHTMLAttributes<HTMLInputElement> {
}
interface CommandListProps extends React$1.HTMLAttributes<HTMLDivElement> {
}
interface CommandEmptyProps extends React$1.HTMLAttributes<HTMLDivElement> {
}
interface CommandGroupProps extends React$1.HTMLAttributes<HTMLDivElement> {
    heading?: string;
}
interface CommandItemProps extends React$1.HTMLAttributes<HTMLDivElement> {
    selected?: boolean;
    disabled?: boolean;
    onSelect?: () => void;
}
interface CommandSeparatorProps extends React$1.HTMLAttributes<HTMLDivElement> {
}
interface CommandShortcutProps extends React$1.HTMLAttributes<HTMLSpanElement> {
}
declare const Command: React$1.ForwardRefExoticComponent<CommandProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandInput: React$1.ForwardRefExoticComponent<CommandInputProps & React$1.RefAttributes<HTMLInputElement>>;
declare const CommandList: React$1.ForwardRefExoticComponent<CommandListProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandEmpty: React$1.ForwardRefExoticComponent<CommandEmptyProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandGroup: React$1.ForwardRefExoticComponent<CommandGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandItem: React$1.ForwardRefExoticComponent<CommandItemProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandSeparator: React$1.ForwardRefExoticComponent<CommandSeparatorProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CommandShortcut: React$1.ForwardRefExoticComponent<CommandShortcutProps & React$1.RefAttributes<HTMLSpanElement>>;

declare const Tabs: React$1.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React$1.RefAttributes<HTMLDivElement>>;
declare const TabsList: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React$1.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

declare const Accordion: React$1.ForwardRefExoticComponent<(AccordionPrimitive.AccordionSingleProps | AccordionPrimitive.AccordionMultipleProps) & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & React$1.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React$1.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

type AlertVariant = "info" | "success" | "warning" | "error" | "neutral";
interface AlertProps extends React$1.HTMLAttributes<HTMLDivElement> {
    variant?: AlertVariant;
    dismissible?: boolean;
    onDismiss?: () => void;
}
declare const Alert: React$1.ForwardRefExoticComponent<AlertProps & React$1.RefAttributes<HTMLDivElement>>;
declare const AlertTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const AlertDescription: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
interface BannerProps extends React$1.HTMLAttributes<HTMLDivElement> {
    variant?: AlertVariant;
    dismissible?: boolean;
    onDismiss?: () => void;
}
declare const Banner: React$1.ForwardRefExoticComponent<BannerProps & React$1.RefAttributes<HTMLDivElement>>;

type CalloutVariant = "info" | "success" | "warning" | "error" | "neutral" | "discovery";
interface CalloutProps extends React$1.HTMLAttributes<HTMLDivElement> {
    variant?: CalloutVariant;
}
declare const Callout: React$1.ForwardRefExoticComponent<CalloutProps & React$1.RefAttributes<HTMLDivElement>>;
interface CalloutIconProps extends React$1.HTMLAttributes<HTMLDivElement> {
    variant?: CalloutVariant;
}
declare const CalloutIcon: React$1.ForwardRefExoticComponent<CalloutIconProps & React$1.RefAttributes<HTMLDivElement>>;
declare const CalloutTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;
declare const CalloutText: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLParagraphElement> & React$1.RefAttributes<HTMLParagraphElement>>;

type SectionMessageVariant = "info" | "success" | "warning" | "error" | "discovery";
interface SectionMessageProps extends React$1.HTMLAttributes<HTMLDivElement> {
    variant?: SectionMessageVariant;
}
declare const SectionMessage: React$1.ForwardRefExoticComponent<SectionMessageProps & React$1.RefAttributes<HTMLDivElement>>;
declare const SectionMessageTitle: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLHeadingElement> & React$1.RefAttributes<HTMLHeadingElement>>;
declare const SectionMessageContent: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;
declare const SectionMessageActions: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLDivElement> & React$1.RefAttributes<HTMLDivElement>>;

declare const sizeMap: {
    readonly xs: 12;
    readonly sm: 16;
    readonly md: 20;
    readonly lg: 28;
    readonly xl: 36;
};
declare const colorMap: {
    readonly primary: "text-primary";
    readonly muted: "text-muted-foreground";
    readonly white: "text-white";
    readonly inherit: "";
};
interface SpinnerProps extends React$1.HTMLAttributes<HTMLSpanElement> {
    size?: keyof typeof sizeMap;
    color?: keyof typeof colorMap;
}
declare const Spinner: React$1.ForwardRefExoticComponent<SpinnerProps & React$1.RefAttributes<HTMLSpanElement>>;

type ProgressVariant = "default" | "success" | "warning" | "error";
type ProgressSize = "xs" | "sm" | "md" | "lg";
interface ProgressProps extends React$1.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
    variant?: ProgressVariant;
    size?: ProgressSize;
    label?: boolean;
}
declare const Progress: React$1.ForwardRefExoticComponent<ProgressProps & React$1.RefAttributes<HTMLDivElement>>;
type ProgressStepStatus = "complete" | "current" | "upcoming";
interface ProgressTrackerStep {
    label: string;
    description?: string;
    status: ProgressStepStatus;
}
interface ProgressTrackerProps extends React$1.HTMLAttributes<HTMLDivElement> {
    steps: ProgressTrackerStep[];
}
declare const ProgressTracker: React$1.ForwardRefExoticComponent<ProgressTrackerProps & React$1.RefAttributes<HTMLDivElement>>;

interface ShimmerProps {
    className?: string;
    rounded?: "sm" | "md" | "lg" | "full";
}
declare function Shimmer({ className, rounded }: ShimmerProps): React$1.JSX.Element;
declare function StatCardSkeleton(): React$1.JSX.Element;
declare function TableRowSkeleton({ cols, comfortable, density: densityProp, snug, }: {
    cols?: number;
    /** @deprecated prefer `density` */
    comfortable?: boolean;
    density?: "default" | "comfortable" | "compact";
    snug?: boolean;
}): React$1.JSX.Element;
declare function ChartSkeleton({ height }: {
    height?: string;
}): React$1.JSX.Element;

type DataTableDensity = "default" | "comfortable" | "compact";
type DataTableHeaderStyle = "surface" | "minimal";
type DataTableFooterSummary = "range" | "count";
type Column<T> = {
    key: string;
    header: ReactNode;
    /** Table column width, e.g. `48px`, `18%`, `minmax(12rem,1fr)` (fixed layout) */
    width?: string;
    minWidth?: number;
    maxWidth?: number;
    align?: "left" | "right" | "center";
    /** Allow cell text to wrap instead of truncating. */
    wrap?: boolean;
    /** Extra classes on `<th>` / `<td>` (e.g. wider horizontal padding per column) */
    cellClassName?: string;
    render: (row: T, index: number) => ReactNode;
};
interface DataTableProps<T> {
    columns: Column<T>[];
    data: T[];
    isLoading?: boolean;
    skeletonRows?: number;
    emptyTitle?: string;
    emptyDescription?: string;
    pageSize?: number;
    /** Controlled page number (1-indexed). Enables server-side pagination. */
    page?: number;
    /** Called when the user changes page in controlled mode. */
    onPageChange?: (page: number) => void;
    /** Total row count for server-side pagination (overrides data.length for page calculations). */
    totalRows?: number;
    className?: string;
    rowKey: (row: T) => string;
    /** Optional hover CTA shown on the right of every row */
    rowCta?: {
        label: string;
        onClick?: (row: T) => void;
    };
    /** Row / cell vertical rhythm and horizontal gutters */
    density?: DataTableDensity;
    /** `auto` lets columns breathe; `fixed` uses `colgroup` hints */
    tableLayout?: "auto" | "fixed";
    theadClassName?: string;
    headerStyle?: DataTableHeaderStyle;
    /** Footer: paginated range vs simple `n items` */
    footerSummary?: DataTableFooterSummary;
    /** Noun after the count when `footerSummary="count"` (default singular / plural `item` / `items`). */
    footerCountLabels?: {
        singular: string;
        plural: string;
    };
    /** With `density="compact"`, use tighter cell gutters (`pl-1.5 pr-2.5` vs `px-3`). Footer keeps normal horizontal padding. */
    snug?: boolean;
}
declare function DataTable<T>({ columns, data, isLoading, skeletonRows, emptyTitle, emptyDescription, pageSize, page: controlledPage, onPageChange, totalRows, className, rowKey, rowCta, density, tableLayout, theadClassName, headerStyle, footerSummary, footerCountLabels, snug, }: DataTableProps<T>): React$1.JSX.Element;

interface EmptyStateProps {
    icon?: LucideIcon;
    title: string;
    description?: string;
    action?: ReactNode;
    className?: string;
}
declare function EmptyState({ icon: Icon, title, description, action, className, }: EmptyStateProps): React$1.JSX.Element;

interface PageHeaderProps {
    title: ReactNode;
    /** When title is non-plain text (e.g. includes a flag), set for screen readers. */
    titleAriaLabel?: string;
    subtitle?: string;
    actions?: ReactNode;
    className?: string;
}
declare function PageHeader({ title, titleAriaLabel, subtitle, actions, className }: PageHeaderProps): React$1.JSX.Element;

type CodeProps = HTMLAttributes<HTMLElement>;
declare const Code: React$1.ForwardRefExoticComponent<CodeProps & React$1.RefAttributes<HTMLElement>>;
interface CodeBlockProps extends HTMLAttributes<HTMLDivElement> {
    /** The raw code string to display and optionally copy. */
    code: string;
    /** Optional filename shown in the header. */
    filename?: string;
    /** Optional language label shown as a badge in the header. */
    language?: string;
    /** Hide the copy button. Defaults to false. */
    hideCopy?: boolean;
}
declare const CodeBlock: React$1.ForwardRefExoticComponent<CodeBlockProps & React$1.RefAttributes<HTMLDivElement>>;

declare const Avatar: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React$1.RefAttributes<HTMLImageElement>, "ref"> & React$1.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<HTMLSpanElement>>;

interface AvatarGroupItem {
    src?: string;
    fallback: string;
    alt?: string;
}
interface AvatarGroupProps extends React$1.HTMLAttributes<HTMLDivElement> {
    avatars: AvatarGroupItem[];
    max?: number;
    size?: "sm" | "md" | "lg";
}
declare const AvatarGroup: React$1.ForwardRefExoticComponent<AvatarGroupProps & React$1.RefAttributes<HTMLDivElement>>;

type AvatarTagSize = "sm" | "md" | "lg";
interface AvatarTagProps extends React$1.HTMLAttributes<HTMLSpanElement> {
    /** Display label for the tag */
    label: string;
    /** Optional image src for the avatar */
    src?: string;
    /** Alt text for the avatar image */
    alt?: string;
    /** Size variant */
    size?: AvatarTagSize;
    /** Called when the remove button is clicked */
    onRemove?: () => void;
    /** Disables interaction */
    disabled?: boolean;
}
declare const AvatarTag: React$1.ForwardRefExoticComponent<AvatarTagProps & React$1.RefAttributes<HTMLSpanElement>>;

type CalendarProps = DayPickerProps & {
    buttonVariant?: ButtonProps["variant"];
};
declare function Calendar({ className, classNames, showOutsideDays, captionLayout, buttonVariant, locale, formatters, components, showWeekNumber, ...props }: CalendarProps): React$1.JSX.Element;
declare function CalendarDayButton({ className, day, modifiers, ...props }: DayButtonProps): React$1.JSX.Element;

interface DatePickerProps {
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
    className?: string;
    min?: string;
    label?: string;
}
declare function DatePicker({ value, onChange, placeholder, className, min, label }: DatePickerProps): React$1.JSX.Element;

/**
 * Chart primitives from shadcn/ui (Recharts composition layer).
 * @see https://ui.shadcn.com/docs/components/radix/chart
 */

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};
type TooltipNameType = number | string;
type ChartConfig = Record<string, {
    label?: React$1.ReactNode;
    icon?: React$1.ComponentType;
} & ({
    color?: string;
    theme?: never;
} | {
    color?: never;
    theme: Record<keyof typeof THEMES, string>;
})>;
declare function ChartContainer({ id, className, children, config, initialDimension, ...props }: React$1.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React$1.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
    initialDimension?: {
        width: number;
        height: number;
    };
}): React$1.JSX.Element;
declare const ChartStyle: ({ id, config }: {
    id: string;
    config: ChartConfig;
}) => React$1.JSX.Element | null;
declare const ChartTooltip: typeof RechartsPrimitive.Tooltip;
declare function ChartTooltipContent({ active, payload, className, indicator, hideLabel, hideIndicator, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey, }: React$1.ComponentProps<typeof RechartsPrimitive.Tooltip> & React$1.ComponentProps<"div"> & {
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
} & Omit<RechartsPrimitive.DefaultTooltipContentProps<TooltipValueType, TooltipNameType>, "accessibilityLayer">): React$1.JSX.Element | null;
declare const ChartLegend: React$1.MemoExoticComponent<(outsideProps: RechartsPrimitive.LegendProps) => React$1.ReactPortal | null>;
declare function ChartLegendContent({ className, hideIcon, payload, verticalAlign, nameKey, }: React$1.ComponentProps<"div"> & {
    hideIcon?: boolean;
    nameKey?: string;
} & RechartsPrimitive.DefaultLegendContentProps): React$1.JSX.Element | null;

/** ─── KPI + sparkline (dashboard stat tiles) ─────────────────────────── */
type MetricSparklinePoint = {
    x: string | number;
    y: number;
};
type MetricSparklineCardProps = {
    title: string;
    icon?: React$1.ReactNode;
    value: React$1.ReactNode;
    /** e.g. "+8.4% vs last month" */
    trend?: {
        direction: "up" | "down" | "flat";
        label: string;
    };
    data: MetricSparklinePoint[];
    /** Stroke / gradient accent (CSS color) */
    accentColor?: string;
    className?: string;
    onInfoClick?: () => void;
};
declare function MetricSparklineCard({ title, icon, value, trend, data, accentColor, className, onInfoClick, }: MetricSparklineCardProps): React$1.JSX.Element;
/** ─── Hero area + optional compare line + tabs + footer ──────────────── */
type DashboardAreaChartPoint = Record<string, string | number>;
type DashboardAreaChartTemplateProps = {
    title: string;
    tabs: {
        id: string;
        label: string;
    }[];
    activeTabId: string;
    onTabChange: (id: string) => void;
    headline: React$1.ReactNode;
    delta?: React$1.ReactNode;
    data: DashboardAreaChartPoint[];
    xKey: string;
    areaKey: string;
    compareLineKey?: string;
    height?: number;
    formatYAxis?: (v: number) => string;
    footer?: React$1.ReactNode;
    className?: string;
};
declare function DashboardAreaChartTemplate({ title, tabs, activeTabId, onTabChange, headline, delta, data, xKey, areaKey, compareLineKey, height, formatYAxis, footer, className, }: DashboardAreaChartTemplateProps): React$1.JSX.Element;
/** ─── Grouped vertical bars + legend (e.g. volume vs settled) ───────── */
type GroupedBarSeries = {
    key: string;
    label: string;
    color: string;
};
type GroupedBarChartTemplateProps = {
    title: string;
    subtitle?: string;
    data: DashboardAreaChartPoint[];
    xKey: string;
    series: GroupedBarSeries[];
    height?: number;
    formatYAxis?: (v: number) => string;
    className?: string;
};
declare function GroupedBarChartTemplate({ title, subtitle, data, xKey, series, height, formatYAxis, className, }: GroupedBarChartTemplateProps): React$1.JSX.Element;
/** ─── Ranked rows with horizontal bar (country / state insights) ────── */
type RankedBarItem = {
    id: string;
    leading?: React$1.ReactNode;
    label: string;
    value: string;
    /** 0–100 width of the filled bar */
    percent: number;
};
type RankedBarListTemplateProps = {
    title: string;
    subtitle?: string;
    headerRight?: React$1.ReactNode;
    items: RankedBarItem[];
    /** CSS colors for bar gradient */
    barFrom?: string;
    barTo?: string;
    className?: string;
};
declare function RankedBarListTemplate({ title, subtitle, headerRight, items, barFrom, barTo, className, }: RankedBarListTemplateProps): React$1.JSX.Element;
/** ─── Vertical category bars (e.g. T+N settlement mix) ──────────────── */
type CategoryBarPoint = {
    category: string;
    value: number;
};
type CategoryBarChartTemplateProps = {
    title: string;
    subtitle?: string;
    data: CategoryBarPoint[];
    valueLabel?: string;
    barColor?: string;
    height?: number;
    className?: string;
};
declare function CategoryBarChartTemplate({ title, subtitle, data, valueLabel, barColor, height, className, }: CategoryBarChartTemplateProps): React$1.JSX.Element;
/** ─── Mini sparkline + stat row (success / failed / avg) ────────────── */
type MiniSparklinePoint = {
    x: string | number;
    y: number;
    compare?: number;
};
type MiniSparklineStat = {
    label: string;
    value: string;
    dotClassName?: string;
};
type MiniSparklineChartCardProps = {
    title: string;
    value: React$1.ReactNode;
    data: MiniSparklinePoint[];
    accentColor?: string;
    stats: MiniSparklineStat[];
    height?: number;
    className?: string;
};
declare function MiniSparklineChartCard({ title, value, data, accentColor, height, stats, className, }: MiniSparklineChartCardProps): React$1.JSX.Element;
/** ─── “Needs attention” list with actions ───────────────────────────── */
type AttentionListItem = {
    id: string;
    title: string;
    value: string;
    valueTone?: "default" | "warning" | "danger";
    meta?: string;
    actionLabel: string;
    onAction?: () => void;
};
type AttentionListTemplateProps = {
    title: string;
    items: AttentionListItem[];
    className?: string;
};
declare function AttentionListTemplate({ title, items, className }: AttentionListTemplateProps): React$1.JSX.Element;

/** Drop-in toast host; pair with `toast` from `sonner`. Resolves theme via next-themes when mounted. */
declare function Toaster({ theme, ...props }: ToasterProps): React$1.JSX.Element;

interface InlineEditProps {
    value: string;
    onConfirm: (val: string) => void;
    placeholder?: string;
    multiline?: boolean;
    disabled?: boolean;
    showButtons?: boolean;
    readClassName?: string;
    inputClassName?: string;
}
declare const InlineEdit: React$1.ForwardRefExoticComponent<InlineEditProps & React$1.RefAttributes<HTMLDivElement>>;

interface InlineDialogProps extends React$1.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root> {
}
interface InlineDialogContentProps extends Omit<React$1.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>, "side" | "sideOffset"> {
    side?: "top" | "right" | "bottom" | "left";
    sideOffset?: number;
    /** Hide the built-in close button */
    hideClose?: boolean;
}
declare const InlineDialog: React$1.FC<PopoverPrimitive.PopoverProps>;
declare const InlineDialogTrigger: React$1.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const InlineDialogContent: React$1.ForwardRefExoticComponent<InlineDialogContentProps & React$1.RefAttributes<HTMLDivElement>>;

type FlagVariant = "info" | "success" | "warning" | "error";
type FlagGroupPosition = "bottom-right" | "bottom-left" | "top-right" | "top-left";
interface FlagAction {
    label: string;
    onClick: () => void;
}
interface FlagProps extends React$1.HTMLAttributes<HTMLDivElement> {
    /** Heading text shown in bold */
    title: string;
    /** Optional body copy shown below the title */
    description?: string;
    /** Visual severity / colour */
    variant?: FlagVariant;
    /** Override the default lucide icon */
    icon?: React$1.ReactNode;
    /** Called when the close button is pressed */
    onDismiss?: () => void;
    /** Action buttons rendered below the content. Pass `false` to disable. */
    autoDismiss?: number | false;
    /** Optional CTA buttons */
    actions?: FlagAction[];
}
interface FlagGroupProps extends React$1.HTMLAttributes<HTMLDivElement> {
    /** Corner to anchor the stack */
    position?: FlagGroupPosition;
}
interface UseFlagGroupReturn {
    flags: Array<FlagProps & {
        id: string;
    }>;
    addFlag: (flag: Omit<FlagProps, "onDismiss"> & {
        id?: string;
    }) => string;
    removeFlag: (id: string) => void;
    clearAll: () => void;
}
declare const Flag: React$1.ForwardRefExoticComponent<FlagProps & React$1.RefAttributes<HTMLDivElement>>;
declare const FlagGroup: React$1.ForwardRefExoticComponent<FlagGroupProps & React$1.RefAttributes<HTMLDivElement>>;
declare function useFlagGroup(): UseFlagGroupReturn;

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";
interface ShowProps extends React$1.HTMLAttributes<HTMLElement> {
    /** Render children at this breakpoint and above. */
    above?: Breakpoint;
    /** Render children strictly below this breakpoint. */
    below?: Breakpoint;
    /** HTML element to render. Defaults to "div". */
    as?: React$1.ElementType;
    /** Display value to restore when visible. Defaults to "block". */
    display?: "block" | "flex" | "inline" | "inline-block" | "grid" | "inline-flex";
    children?: React$1.ReactNode;
}
declare const Show: React$1.ForwardRefExoticComponent<ShowProps & React$1.RefAttributes<HTMLElement>>;
interface HideProps extends React$1.HTMLAttributes<HTMLElement> {
    /** Hide children at this breakpoint and above. */
    above?: Breakpoint;
    /** Hide children strictly below this breakpoint (i.e. visible at/above). */
    below?: Breakpoint;
    /** HTML element to render. Defaults to "div". */
    as?: React$1.ElementType;
    /** Display value to restore when visible. Defaults to "block". */
    display?: "block" | "flex" | "inline" | "inline-block" | "grid" | "inline-flex";
    children?: React$1.ReactNode;
}
declare const Hide: React$1.ForwardRefExoticComponent<HideProps & React$1.RefAttributes<HTMLElement>>;
interface UseBreakpointReturn {
    /** The currently active (highest matching) breakpoint, or null on SSR / xs viewport. */
    breakpoint: Breakpoint | null;
    /** Returns true when the viewport is at or above `bp`. */
    isAbove: (bp: Breakpoint) => boolean;
    /** Returns true when the viewport is strictly below `bp`. */
    isBelow: (bp: Breakpoint) => boolean;
    /** True when no breakpoint is active (viewport < 640 px). */
    isMobile: boolean;
    /** True when active breakpoint is md (768–1023 px). */
    isTablet: boolean;
    /** True when active breakpoint is lg or above (≥ 1024 px). */
    isDesktop: boolean;
}
declare function useBreakpoint(): UseBreakpointReturn;

interface Country {
    code: string;
    name: string;
    flag: string;
    dialCode: string;
}
declare const COUNTRIES: Country[];
interface CountrySelectProps {
    value?: string;
    onValueChange?: (code: string) => void;
    placeholder?: string;
    showDialCode?: boolean;
    disabled?: boolean;
    className?: string;
}
declare const CountrySelect: React$1.ForwardRefExoticComponent<CountrySelectProps & React$1.RefAttributes<HTMLButtonElement>>;

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    "aria-label": string;
    variant?: "primary" | "secondary" | "ghost" | "outline" | "danger";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    isLoading?: boolean;
    rounded?: "sm" | "md" | "lg" | "full";
}
declare const IconButton: React$1.ForwardRefExoticComponent<IconButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

interface TimePickerProps {
    /** Controlled value in 24-hour "HH:MM" format. Pass "" for no selection. */
    value: string;
    /** Called with a new "HH:MM" string, or "" when cleared. */
    onValueChange: (value: string) => void;
    /** Show 12-hour (AM/PM) columns instead of 24-hour. Default: false. */
    use24Hour?: boolean;
    placeholder?: string;
    label?: string;
    disabled?: boolean;
    className?: string;
}
declare const TimePicker: React$1.ForwardRefExoticComponent<TimePickerProps & React$1.RefAttributes<HTMLButtonElement>>;

interface HeadingProps extends React$1.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    as?: React$1.ElementType;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
    color?: "default" | "subtle" | "primary";
}
declare const Heading: React$1.ForwardRefExoticComponent<HeadingProps & React$1.RefAttributes<HTMLHeadingElement>>;
interface TextProps extends React$1.HTMLAttributes<HTMLElement> {
    as?: "p" | "span" | "div" | "label";
    size?: "xs" | "sm" | "md" | "lg";
    weight?: "normal" | "medium" | "semibold";
    color?: "default" | "subtle" | "primary" | "disabled";
    truncate?: boolean;
}
declare const Text: React$1.ForwardRefExoticComponent<TextProps & React$1.RefAttributes<any>>;
interface MetricTextProps extends Omit<React$1.HTMLAttributes<HTMLSpanElement>, "prefix"> {
    size?: "sm" | "md" | "lg" | "xl";
    trend?: "up" | "down" | "neutral";
    prefix?: React$1.ReactNode;
    suffix?: React$1.ReactNode;
}
declare const MetricText: React$1.ForwardRefExoticComponent<MetricTextProps & React$1.RefAttributes<HTMLSpanElement>>;

type ProgressIndicatorSize = "sm" | "md" | "lg";
interface ProgressIndicatorProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "onChange"> {
    selectedIndex: number;
    values: string[];
    size?: ProgressIndicatorSize;
    onChange?: (index: number) => void;
}
declare const ProgressIndicator: React$1.ForwardRefExoticComponent<ProgressIndicatorProps & React$1.RefAttributes<HTMLDivElement>>;

interface VisuallyHiddenProps extends React$1.HTMLAttributes<HTMLElement> {
    as?: React$1.ElementType;
    focusable?: boolean;
}
declare const VisuallyHidden: React$1.ForwardRefExoticComponent<VisuallyHiddenProps & React$1.RefAttributes<HTMLElement>>;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertDescription, type AlertProps, AlertTitle, type AttentionListItem, AttentionListTemplate, type AttentionListTemplateProps, Avatar, AvatarFallback, AvatarGroup, type AvatarGroupItem, type AvatarGroupProps, AvatarImage, AvatarTag, type AvatarTagProps, type AvatarTagSize, Badge, type BadgeProps, type BadgeTrailIcon, type BadgeVariant, Banner, type BannerProps, Blanket, type BlanketProps, Box, type BoxProps, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, type Breakpoint, Button, ButtonGroup, type ButtonGroupProps, type ButtonProps, COUNTRIES, Calendar, CalendarDayButton, type CalendarProps, Callout, CalloutIcon, type CalloutProps, CalloutText, CalloutTitle, type CalloutVariant, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CategoryBarChartTemplate, type CategoryBarChartTemplateProps, type CategoryBarPoint, type ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartSkeleton, ChartStyle, ChartTooltip, ChartTooltipContent, Checkbox, type CheckboxProps, CheckboxSelect, type CheckboxSelectOption, type CheckboxSelectProps, Code, CodeBlock, type CodeBlockProps, type CodeProps, type Column, Command, CommandEmpty, type CommandEmptyProps, CommandGroup, type CommandGroupProps, CommandInput, type CommandInputProps, CommandItem, type CommandItemProps, CommandList, type CommandListProps, type CommandProps, CommandSeparator, type CommandSeparatorProps, CommandShortcut, type CommandShortcutProps, type Country, CountrySelect, type CountrySelectProps, CurrencyAmountInput, type DashboardAreaChartPoint, DashboardAreaChartTemplate, type DashboardAreaChartTemplateProps, DataTable, type DataTableDensity, type DataTableFooterSummary, type DataTableHeaderStyle, DatePicker, Dialog, DialogClose, DialogContent, DialogDescription, DialogPortal, DialogTitle, DialogTrigger, Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, EmptyState, Field, type FieldConfig, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, FieldTitle, type FieldsConfig, Flag, type FlagAction, FlagGroup, type FlagGroupPosition, type FlagGroupProps, type FlagProps, type FlagVariant, Flex, type FlexAlign, type FlexDirection, type FlexJustify, type FlexProps, type FlexWrap, Form, FormControl, FormDescription, FormError, type FormErrors, FormField, type FormFieldProps, FormItem, FormLabel, type FormProps, type FormValues, Grid, type GridCols, type GridFlow, type GridProps, GroupedBarChartTemplate, type GroupedBarChartTemplateProps, type GroupedBarSeries, Heading, type HeadingProps, Hide, type HideProps, IconButton, type IconButtonProps, Inline, InlineDialog, InlineDialogContent, type InlineDialogContentProps, type InlineDialogProps, InlineDialogTrigger, InlineEdit, type InlineEditProps, type InlineProps, Input, InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea, Label, type LayoutSpacing, Link, type LinkProps, Lozenge, type LozengeProps, Menu, MenuDivider, MenuItem, type MenuItemProps, type MenuProps, MenuSection, type MenuSectionProps, MetricSparklineCard, type MetricSparklineCardProps, type MetricSparklinePoint, MetricText, type MetricTextProps, MiniSparklineChartCard, type MiniSparklineChartCardProps, type MiniSparklinePoint, type MiniSparklineStat, OtpInput, type OtpInputProps, PageHeader, Pagination, PaginationContent, type PaginationContentProps, PaginationEllipsis, type PaginationEllipsisProps, PaginationItem, type PaginationItemProps, PaginationLink, type PaginationLinkProps, PaginationNext, type PaginationNextProps, PaginationPrevious, type PaginationPreviousProps, type PaginationProps, PasswordInput, type PasswordInputProps, Popover, PopoverAnchor, PopoverContent, PopoverTrigger, Progress, ProgressIndicator, type ProgressIndicatorProps, type ProgressProps, ProgressTracker, type ProgressTrackerProps, type ProgressTrackerStep, RadioGroup, RadioGroupItem, type RadioGroupItemProps, type RankedBarItem, RankedBarListTemplate, type RankedBarListTemplateProps, type RegisterResult, type ResponsiveCols, ScrollArea, ScrollBar, SectionMessage, SectionMessageActions, SectionMessageContent, type SectionMessageProps, SectionMessageTitle, type SectionMessageVariant, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, Shimmer, Show, type ShowProps, SideNav, SideNavFooter, SideNavHeader, SideNavItem, type SideNavItemProps, type SideNavProps, SideNavSection, Slider, type SliderProps, Spinner, type SpinnerProps, SplitButton, SplitButtonItem, type SplitButtonItemProps, type SplitButtonProps, Spotlight, SpotlightCard, type SpotlightCardProps, type SpotlightProps, type SpotlightStep, Stack, type StackProps, StatCardSkeleton, StatusBadge, type StatusBadgeProps, Switch, type SwitchProps, TableRowSkeleton, Tabs, TabsContent, TabsList, TabsTrigger, Tag, TagGroup, type TagGroupProps, type TagProps, Text, type TextProps, Textarea, TimePicker, type TimePickerProps, Toaster, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, type UseBreakpointReturn, type UseFlagGroupReturn, type UseFormReturn, type UseSpotlightReturn, type ValidatorRule, VisuallyHidden, type VisuallyHiddenProps, cn, useBreakpoint, useFlagGroup, useForm, useSpotlight };
