// src/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/layout.tsx
import { jsx } from "react/jsx-runtime";
var gapClass = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4",
  xl: "gap-6"
};
var padClass = {
  none: "p-0",
  xs: "p-1",
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
  xl: "p-8"
};
var padXClass = {
  none: "px-0",
  xs: "px-1",
  sm: "px-2",
  md: "px-4",
  lg: "px-6",
  xl: "px-8"
};
var padYClass = {
  none: "py-0",
  xs: "py-1",
  sm: "py-2",
  md: "py-4",
  lg: "py-6",
  xl: "py-8"
};
function Box({ as: Comp = "div", className, p = "none", px, py, ...props }) {
  const axis = px !== void 0 || py !== void 0;
  return /* @__PURE__ */ jsx(
    Comp,
    {
      className: cn(
        !axis && padClass[p],
        px !== void 0 && padXClass[px],
        py !== void 0 && padYClass[py],
        className
      ),
      ...props
    }
  );
}
function Stack({
  as: Comp = "div",
  className,
  gap = "lg",
  align = "stretch",
  ...props
}) {
  const alignCls = align === "start" ? "items-start" : align === "center" ? "items-center" : align === "end" ? "items-end" : "items-stretch";
  return /* @__PURE__ */ jsx(Comp, { className: cn("flex flex-col", gapClass[gap], alignCls, className), ...props });
}
function Inline({
  className,
  gap = "md",
  wrap = false,
  justify = "start",
  ...props
}) {
  const justifyCls = justify === "center" ? "justify-center" : justify === "end" ? "justify-end" : justify === "between" ? "justify-between" : "justify-start";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("flex flex-row items-center", gapClass[gap], justifyCls, wrap && "flex-wrap", className),
      ...props
    }
  );
}

// src/grid-flex.tsx
import * as React from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var gapClass2 = {
  none: "gap-0",
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4",
  xl: "gap-6"
};
var colClass = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
  5: "grid-cols-5",
  6: "grid-cols-6",
  7: "grid-cols-7",
  8: "grid-cols-8",
  9: "grid-cols-9",
  10: "grid-cols-10",
  11: "grid-cols-11",
  12: "grid-cols-12",
  auto: "grid-cols-[repeat(auto-fit,minmax(0,1fr))]"
};
var smColClass = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
  4: "sm:grid-cols-4",
  5: "sm:grid-cols-5",
  6: "sm:grid-cols-6",
  7: "sm:grid-cols-7",
  8: "sm:grid-cols-8",
  9: "sm:grid-cols-9",
  10: "sm:grid-cols-10",
  11: "sm:grid-cols-11",
  12: "sm:grid-cols-12",
  auto: "sm:grid-cols-[repeat(auto-fit,minmax(0,1fr))]"
};
var mdColClass = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
  7: "md:grid-cols-7",
  8: "md:grid-cols-8",
  9: "md:grid-cols-9",
  10: "md:grid-cols-10",
  11: "md:grid-cols-11",
  12: "md:grid-cols-12",
  auto: "md:grid-cols-[repeat(auto-fit,minmax(0,1fr))]"
};
var lgColClass = {
  1: "lg:grid-cols-1",
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
  7: "lg:grid-cols-7",
  8: "lg:grid-cols-8",
  9: "lg:grid-cols-9",
  10: "lg:grid-cols-10",
  11: "lg:grid-cols-11",
  12: "lg:grid-cols-12",
  auto: "lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]"
};
var rowClass = {
  1: "grid-rows-1",
  2: "grid-rows-2",
  3: "grid-rows-3",
  4: "grid-rows-4",
  5: "grid-rows-5",
  6: "grid-rows-6",
  auto: "grid-rows-none"
};
var flowClass = {
  row: "grid-flow-row",
  col: "grid-flow-col",
  dense: "grid-flow-dense"
};
function resolveColClasses(cols) {
  if (cols === void 0) return "";
  if (typeof cols === "number" || cols === "auto") {
    return colClass[String(cols)] ?? "";
  }
  const { base, sm, md, lg } = cols;
  return cn(
    base !== void 0 && colClass[String(base)],
    sm !== void 0 && smColClass[String(sm)],
    md !== void 0 && mdColClass[String(md)],
    lg !== void 0 && lgColClass[String(lg)]
  );
}
var Grid = React.forwardRef(
  ({ className, cols, rows, gap = "md", flow, ...props }, ref) => {
    return /* @__PURE__ */ jsx2(
      "div",
      {
        ref,
        className: cn(
          "grid",
          resolveColClasses(cols),
          rows !== void 0 && rowClass[String(rows)],
          gapClass2[gap],
          flow !== void 0 && flowClass[flow],
          className
        ),
        ...props
      }
    );
  }
);
Grid.displayName = "Grid";
var directionClass = {
  row: "flex-row",
  col: "flex-col",
  "row-reverse": "flex-row-reverse",
  "col-reverse": "flex-col-reverse"
};
var alignClass = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
  baseline: "items-baseline"
};
var justifyClass = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly"
};
var Flex = React.forwardRef(
  ({
    className,
    direction = "row",
    wrap = false,
    align = "start",
    justify = "start",
    gap = "md",
    inline = false,
    ...props
  }, ref) => {
    const wrapCls = wrap === true ? "flex-wrap" : wrap === "reverse" ? "flex-wrap-reverse" : "flex-nowrap";
    return /* @__PURE__ */ jsx2(
      "div",
      {
        ref,
        className: cn(
          inline ? "inline-flex" : "flex",
          directionClass[direction],
          wrapCls,
          alignClass[align],
          justifyClass[justify],
          gapClass2[gap],
          className
        ),
        ...props
      }
    );
  }
);
Flex.displayName = "Flex";

// src/button.tsx
import { Loader2 } from "lucide-react";
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var variantClasses = {
  primary: "bg-primary text-primary-foreground border border-primary shadow-sm hover:bg-[var(--primary-hover)]",
  secondary: "bg-muted text-foreground border border-border shadow-sm hover:bg-muted/85 dark:bg-muted/35 dark:text-foreground dark:border-border dark:hover:bg-muted/55",
  ghost: "bg-transparent text-foreground border border-transparent hover:bg-muted focus-visible:bg-muted/80 active:bg-muted/90",
  danger: "bg-red-600 text-white border border-red-600 shadow-sm hover:bg-red-700",
  outline: "bg-card text-foreground border border-border shadow-sm hover:bg-muted",
  link: "h-auto min-h-0 rounded-md border border-transparent bg-transparent px-2 py-2 text-[15px] font-medium text-primary shadow-none underline-offset-4 hover:bg-primary/5 hover:underline focus-visible:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 disabled:pointer-events-none disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:no-underline"
};
var sizes = {
  sm: "h-9 min-h-9 px-3.5 text-xs gap-1.5 rounded-lg",
  md: "h-10 min-h-10 px-5 text-sm gap-2 rounded-lg",
  lg: "h-[3.25rem] min-h-[3.25rem] px-10 text-[15px] gap-2.5 rounded-xl"
};
var Button = forwardRef2(
  ({
    variant = "primary",
    size = "md",
    isLoading = false,
    leftIcon,
    rightIcon,
    children,
    className,
    disabled,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref,
        disabled: disabled || isLoading,
        className: cn(
          "inline-flex items-center justify-center font-medium transition-colors duration-pg-fast ease-pg-standard",
          variant !== "link" && "disabled:cursor-not-allowed disabled:opacity-50",
          variant === "link" && "justify-center",
          variant !== "link" && "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
          variantClasses[variant],
          variant !== "link" && sizes[size],
          className
        ),
        ...props,
        children: [
          isLoading ? /* @__PURE__ */ jsx3(
            Loader2,
            {
              className: cn(
                "animate-spin",
                size === "sm" ? "size-3.5" : size === "lg" ? "size-[1.125rem]" : "size-3.5"
              )
            }
          ) : leftIcon,
          /* @__PURE__ */ jsx3("span", { className: cn(isLoading && "opacity-70"), children }),
          !isLoading && rightIcon
        ]
      }
    );
  }
);
Button.displayName = "Button";

// src/button-group.tsx
import { ChevronDown } from "lucide-react";
import {
  forwardRef as forwardRef3,
  useState,
  useRef,
  useEffect
} from "react";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var ButtonGroup = forwardRef3(
  ({ orientation = "horizontal", variant, className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx4(
      "div",
      {
        ref,
        role: "group",
        "data-variant": variant,
        className: cn(
          "inline-flex",
          orientation === "vertical" ? "flex-col" : "flex-row",
          // Horizontal connected borders
          orientation === "horizontal" && [
            "[&>*:not(:first-child)]:rounded-l-none",
            "[&>*:not(:last-child)]:rounded-r-none",
            "[&>*:not(:first-child)]:-ml-px"
          ],
          // Vertical connected borders
          orientation === "vertical" && [
            "[&>*:not(:first-child)]:rounded-t-none",
            "[&>*:not(:last-child)]:rounded-b-none",
            "[&>*:not(:first-child)]:-mt-px"
          ],
          className
        ),
        ...props,
        children
      }
    );
  }
);
ButtonGroup.displayName = "ButtonGroup";
var SplitButton = forwardRef3(
  ({
    label,
    onClick,
    children,
    variant = "primary",
    size = "md",
    isLoading = false,
    className,
    disabled,
    ...props
  }, ref) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);
    function setRefs(el) {
      containerRef.current = el;
      if (typeof ref === "function") {
        ref(el);
      } else if (ref) {
        ref.current = el;
      }
    }
    useEffect(() => {
      if (!open) return;
      function handleOutside(e) {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          setOpen(false);
        }
      }
      document.addEventListener("mousedown", handleOutside);
      return () => document.removeEventListener("mousedown", handleOutside);
    }, [open]);
    return /* @__PURE__ */ jsxs2(
      "div",
      {
        ref: setRefs,
        className: cn("relative inline-flex", className),
        ...props,
        children: [
          /* @__PURE__ */ jsx4(
            Button,
            {
              variant,
              size,
              isLoading,
              disabled,
              onClick,
              className: "rounded-r-none",
              children: label
            }
          ),
          /* @__PURE__ */ jsx4(
            "button",
            {
              type: "button",
              disabled: disabled || isLoading,
              "aria-haspopup": "menu",
              "aria-expanded": open,
              onClick: () => setOpen((v) => !v),
              className: cn(
                "inline-flex items-center justify-center px-2 rounded-l-none -ml-px",
                "transition-colors duration-pg-fast ease-pg-standard",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
                "disabled:cursor-not-allowed disabled:opacity-50",
                // Match variant styling
                variant === "primary" && "bg-primary text-primary-foreground border border-primary shadow-sm hover:bg-[var(--primary-hover)] border-l border-l-primary-foreground/20",
                variant === "secondary" && "bg-muted text-foreground border border-border shadow-sm hover:bg-muted/85 dark:bg-muted/35 dark:hover:bg-muted/55 border-l-0",
                variant === "outline" && "bg-card text-foreground border border-border shadow-sm hover:bg-muted border-l-0",
                variant === "ghost" && "bg-transparent text-foreground border border-transparent hover:bg-muted border-l-0",
                variant === "danger" && "bg-red-600 text-white border border-red-600 shadow-sm hover:bg-red-700 border-l border-l-white/20",
                // Size heights to match Button
                size === "sm" && "h-9 min-h-9 rounded-lg",
                size === "md" && "h-10 min-h-10 rounded-lg",
                size === "lg" && "h-[3.25rem] min-h-[3.25rem] rounded-xl"
              ),
              children: /* @__PURE__ */ jsx4(
                ChevronDown,
                {
                  className: cn(
                    "transition-transform duration-pg-fast ease-pg-standard",
                    open && "rotate-180",
                    size === "sm" ? "size-3.5" : size === "lg" ? "size-[1.125rem]" : "size-4"
                  )
                }
              )
            }
          ),
          open && children && /* @__PURE__ */ jsx4(
            "div",
            {
              role: "menu",
              className: cn(
                "absolute right-0 top-full mt-1 z-50",
                "bg-card border border-border rounded-lg shadow-lg py-1 min-w-32"
              ),
              children
            }
          )
        ]
      }
    );
  }
);
SplitButton.displayName = "SplitButton";
var SplitButtonItem = forwardRef3(
  ({ children, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx4(
      "button",
      {
        ref,
        role: "menuitem",
        type: "button",
        className: cn(
          "block w-full text-left px-3 py-2 text-sm text-foreground",
          "hover:bg-muted transition-colors duration-pg-fast ease-pg-standard",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "focus-visible:outline-none focus-visible:bg-muted",
          className
        ),
        ...props,
        children
      }
    );
  }
);
SplitButtonItem.displayName = "SplitButtonItem";

// src/input.tsx
import * as React2 from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var Input = React2.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx5(
      "input",
      {
        type,
        className: cn(
          "flex h-11 min-h-11 w-full rounded-lg border border-border bg-card px-4 py-2 text-[15px] leading-tight shadow-sm transition-colors",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:bg-muted/40 disabled:opacity-60",
          "read-only:bg-muted/25 read-only:text-muted-foreground",
          "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/25 dark:aria-invalid:ring-destructive/40",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/password-input.tsx
import * as React3 from "react";
import { Eye, EyeOff } from "lucide-react";
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var PasswordInput = React3.forwardRef(
  ({ className, ...props }, ref) => {
    const [visible, setVisible] = React3.useState(false);
    return /* @__PURE__ */ jsxs3("div", { className: "relative", children: [
      /* @__PURE__ */ jsx6(
        Input,
        {
          ref,
          type: visible ? "text" : "password",
          className: cn("pr-10", className),
          ...props
        }
      ),
      /* @__PURE__ */ jsx6(
        "button",
        {
          type: "button",
          onClick: () => setVisible((v) => !v),
          "aria-label": visible ? "Hide password" : "Show password",
          tabIndex: -1,
          className: "absolute inset-y-0 right-0 flex w-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground",
          children: visible ? /* @__PURE__ */ jsx6(EyeOff, { size: 16 }) : /* @__PURE__ */ jsx6(Eye, { size: 16 })
        }
      )
    ] });
  }
);
PasswordInput.displayName = "PasswordInput";

// src/otp-input.tsx
import * as React4 from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
function OtpInput({
  value,
  onChange,
  length = 6,
  onComplete,
  disabled,
  invalid,
  autoFocus,
  "aria-label": ariaLabel = "One-time passcode"
}) {
  const refs = React4.useRef([]);
  const digits = React4.useMemo(() => {
    const arr = value.split("").slice(0, length);
    return Array.from({ length }, (_, i) => arr[i] ?? "");
  }, [value, length]);
  const emit = (next) => {
    onChange(next);
    if (next.length === length && !next.includes(" ")) onComplete?.(next);
  };
  const setAt = (index, char) => {
    const arr = digits.slice();
    arr[index] = char;
    emit(arr.join("").replace(/\s+$/g, ""));
  };
  const handleChange = (index, raw) => {
    const onlyDigits = raw.replace(/\D/g, "");
    if (!onlyDigits) {
      setAt(index, "");
      return;
    }
    const chars = onlyDigits.split("");
    const arr = digits.slice();
    let cursor = index;
    for (const c of chars) {
      if (cursor >= length) break;
      arr[cursor] = c;
      cursor += 1;
    }
    emit(arr.join(""));
    refs.current[Math.min(cursor, length - 1)]?.focus();
  };
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      if (digits[index]) {
        setAt(index, "");
      } else if (index > 0) {
        refs.current[index - 1]?.focus();
        setAt(index - 1, "");
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      refs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      refs.current[index + 1]?.focus();
    }
  };
  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    if (!pasted) return;
    emit(pasted);
    refs.current[Math.min(pasted.length, length - 1)]?.focus();
  };
  return /* @__PURE__ */ jsx7("div", { className: "flex gap-2", role: "group", "aria-label": ariaLabel, children: digits.map((digit, i) => /* @__PURE__ */ jsx7(
    "input",
    {
      ref: (el) => {
        refs.current[i] = el;
      },
      type: "text",
      inputMode: "numeric",
      autoComplete: i === 0 ? "one-time-code" : "off",
      maxLength: length,
      value: digit,
      disabled,
      "aria-invalid": invalid || void 0,
      autoFocus: autoFocus && i === 0,
      onChange: (e) => handleChange(i, e.target.value),
      onKeyDown: (e) => handleKeyDown(i, e),
      onPaste: handlePaste,
      className: cn(
        "h-12 w-11 rounded-lg border bg-card text-center text-lg font-semibold text-foreground shadow-sm transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 focus-visible:border-primary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        invalid ? "border-destructive ring-destructive/20" : "border-input"
      )
    },
    i
  )) });
}

// src/checkbox-select.tsx
import * as React5 from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, ChevronDown as ChevronDown2, Search } from "lucide-react";
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
function getTriggerLabel(value, options, placeholder, maxDisplay) {
  if (value.length === 0) return placeholder;
  if (value.length === options.length) return "All";
  if (value.length <= maxDisplay) {
    const labels = value.map((v) => options.find((o) => o.value === v)?.label ?? v).filter(Boolean);
    return labels.join(", ");
  }
  return `${value.length} selected`;
}
var CheckboxSelect = React5.forwardRef(
  ({
    options,
    value,
    onChange,
    placeholder = "Select options",
    showSearch = false,
    disabled = false,
    maxDisplay = 2,
    className
  }, ref) => {
    const [open, setOpen] = React5.useState(false);
    const [search, setSearch] = React5.useState("");
    const filtered = React5.useMemo(() => {
      if (!search.trim()) return options;
      const lower = search.toLowerCase();
      return options.filter((o) => o.label.toLowerCase().includes(lower));
    }, [options, search]);
    const allFilteredValues = filtered.filter((o) => !o.disabled).map((o) => o.value);
    const allFilteredSelected = allFilteredValues.length > 0 && allFilteredValues.every((v) => value.includes(v));
    const someFilteredSelected = allFilteredValues.some((v) => value.includes(v));
    function handleSelectAll() {
      if (allFilteredSelected) {
        onChange(value.filter((v) => !allFilteredValues.includes(v)));
      } else {
        const merged = Array.from(/* @__PURE__ */ new Set([...value, ...allFilteredValues]));
        onChange(merged);
      }
    }
    function handleClearAll() {
      onChange(value.filter((v) => !allFilteredValues.includes(v)));
    }
    function handleToggle(optValue) {
      if (value.includes(optValue)) {
        onChange(value.filter((v) => v !== optValue));
      } else {
        onChange([...value, optValue]);
      }
    }
    const triggerLabel = getTriggerLabel(value, options, placeholder, maxDisplay);
    const hasSelection = value.length > 0;
    return /* @__PURE__ */ jsxs4(PopoverPrimitive.Root, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx8(PopoverPrimitive.Trigger, { asChild: true, children: /* @__PURE__ */ jsxs4(
        "button",
        {
          ref,
          type: "button",
          disabled,
          "aria-expanded": open,
          "aria-haspopup": "listbox",
          className: cn(
            "flex h-11 w-full items-center justify-between gap-2.5 rounded-lg border border-border bg-card px-4 py-2 text-[15px] shadow-sm outline-none",
            "transition-colors duration-pg-fast ease-pg-standard",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
            "disabled:cursor-not-allowed disabled:opacity-50",
            hasSelection ? "text-foreground" : "text-muted-foreground",
            className
          ),
          children: [
            /* @__PURE__ */ jsx8("span", { className: "truncate", children: triggerLabel }),
            /* @__PURE__ */ jsx8(
              ChevronDown2,
              {
                className: cn(
                  "h-4 w-4 shrink-0 text-muted-foreground opacity-70 transition-transform duration-pg-fast ease-pg-standard",
                  open && "rotate-180"
                )
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsx8(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsxs4(
        PopoverPrimitive.Content,
        {
          align: "start",
          sideOffset: 6,
          className: cn(
            "z-[120] min-w-[var(--radix-popover-trigger-width)] w-full rounded-xl border border-border bg-popover text-popover-foreground shadow-lg outline-none p-1",
            "data-[state=open]:opacity-100 data-[state=closed]:opacity-0 transition-opacity duration-150"
          ),
          children: [
            showSearch && /* @__PURE__ */ jsxs4("div", { className: "relative mb-1 px-1 pt-1", children: [
              /* @__PURE__ */ jsx8(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" }),
              /* @__PURE__ */ jsx8(
                "input",
                {
                  type: "text",
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  placeholder: "Search...",
                  className: cn(
                    "flex h-9 w-full rounded-md border border-border bg-card pl-8 pr-3 text-sm shadow-sm placeholder:text-muted-foreground",
                    "transition-colors duration-pg-fast ease-pg-standard",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35"
                  )
                }
              )
            ] }),
            /* @__PURE__ */ jsxs4("div", { className: "flex items-center justify-between px-2 py-1.5", children: [
              /* @__PURE__ */ jsx8(
                "button",
                {
                  type: "button",
                  onClick: handleSelectAll,
                  className: cn(
                    "text-xs font-medium transition-colors duration-pg-fast ease-pg-standard",
                    allFilteredSelected ? "text-primary hover:text-primary/80" : someFilteredSelected ? "text-primary hover:text-primary/80" : "text-muted-foreground hover:text-foreground"
                  ),
                  children: allFilteredSelected ? "Deselect all" : "Select all"
                }
              ),
              value.length > 0 && /* @__PURE__ */ jsx8(
                "button",
                {
                  type: "button",
                  onClick: handleClearAll,
                  className: "text-xs font-medium text-muted-foreground transition-colors duration-pg-fast ease-pg-standard hover:text-foreground",
                  children: "Clear"
                }
              )
            ] }),
            /* @__PURE__ */ jsx8("div", { className: "my-0.5 h-px bg-border mx-1" }),
            /* @__PURE__ */ jsx8("div", { className: "max-h-60 overflow-y-auto py-0.5", children: filtered.length === 0 ? /* @__PURE__ */ jsx8("div", { className: "px-3 py-6 text-center text-sm text-muted-foreground", children: "No options found." }) : filtered.map((option) => {
              const checked = value.includes(option.value);
              return /* @__PURE__ */ jsxs4(
                "div",
                {
                  role: "option",
                  "aria-selected": checked,
                  "aria-disabled": option.disabled,
                  onClick: () => !option.disabled && handleToggle(option.value),
                  className: cn(
                    "flex items-center gap-2.5 px-3 py-2 rounded-md text-sm select-none",
                    "transition-colors duration-pg-fast ease-pg-standard",
                    option.disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:bg-muted"
                  ),
                  children: [
                    /* @__PURE__ */ jsx8(
                      CheckboxPrimitive.Root,
                      {
                        checked,
                        disabled: option.disabled,
                        onCheckedChange: () => !option.disabled && handleToggle(option.value),
                        onClick: (e) => e.stopPropagation(),
                        className: cn(
                          "peer h-4 w-4 shrink-0 rounded-md border border-border bg-card shadow-sm",
                          "transition-colors duration-pg-fast ease-pg-standard",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
                          "disabled:cursor-not-allowed disabled:opacity-50",
                          "data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        ),
                        children: /* @__PURE__ */ jsx8(CheckboxPrimitive.Indicator, { className: "flex items-center justify-center text-primary-foreground", children: /* @__PURE__ */ jsx8(Check, { className: "size-3", strokeWidth: 3 }) })
                      }
                    ),
                    /* @__PURE__ */ jsx8(
                      "span",
                      {
                        className: cn(
                          "leading-none",
                          checked ? "text-foreground" : "text-foreground"
                        ),
                        children: option.label
                      }
                    )
                  ]
                },
                option.value
              );
            }) })
          ]
        }
      ) })
    ] });
  }
);
CheckboxSelect.displayName = "CheckboxSelect";

// src/textarea.tsx
import * as React6 from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var Textarea = React6.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx9(
      "textarea",
      {
        className: cn(
          "flex min-h-[5.5rem] w-full rounded-lg border border-border bg-card px-4 py-3 text-[15px] leading-relaxed shadow-sm transition-colors",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

// src/label.tsx
import * as React7 from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva } from "class-variance-authority";
import { jsx as jsx10 } from "react/jsx-runtime";
var labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = React7.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx10(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;

// src/checkbox.tsx
import * as React8 from "react";
import * as CheckboxPrimitive2 from "@radix-ui/react-checkbox";
import { Check as Check2, Minus } from "lucide-react";
import { jsx as jsx11 } from "react/jsx-runtime";
var sizeClasses = {
  sm: "h-3.5 w-3.5 rounded",
  md: "h-4 w-4 rounded-md",
  lg: "h-[1.125rem] w-[1.125rem] rounded-md"
};
var iconSizes = {
  sm: "size-2.5",
  md: "size-3",
  lg: "size-3.5"
};
var Checkbox = React8.forwardRef(({ className, size = "md", ...props }, ref) => /* @__PURE__ */ jsx11(
  CheckboxPrimitive2.Root,
  {
    ref,
    className: cn(
      "peer shrink-0 border border-border bg-card shadow-sm transition-colors duration-pg-fast ease-pg-standard",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:bg-primary data-[state=checked]:border-primary",
      "data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary",
      sizeClasses[size],
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx11(CheckboxPrimitive2.Indicator, { className: "flex items-center justify-center text-primary-foreground", children: props.checked === "indeterminate" ? /* @__PURE__ */ jsx11(Minus, { className: iconSizes[size], strokeWidth: 3 }) : /* @__PURE__ */ jsx11(Check2, { className: iconSizes[size], strokeWidth: 3 }) })
  }
));
Checkbox.displayName = CheckboxPrimitive2.Root.displayName;

// src/radio-group.tsx
import * as React9 from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { jsx as jsx12 } from "react/jsx-runtime";
var RadioGroup = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx12(
  RadioGroupPrimitive.Root,
  {
    ref,
    className: cn("flex flex-col gap-2", className),
    ...props
  }
));
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
var RadioGroupItem = React9.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx12(
  RadioGroupPrimitive.Item,
  {
    ref,
    className: cn(
      "size-4 shrink-0 rounded-full border border-border bg-card shadow-sm",
      "transition-colors duration-pg-fast ease-pg-standard",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
      "data-[state=checked]:border-primary",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx12(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx12("span", { className: "block size-2 rounded-full bg-primary" }) })
  }
));
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// src/switch.tsx
import * as React10 from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cva as cva2 } from "class-variance-authority";
import { jsx as jsx13 } from "react/jsx-runtime";
var switchRootVariants = cva2(
  [
    "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border border-transparent",
    "transition-colors duration-pg-fast ease-pg-standard",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "data-[state=unchecked]:bg-muted data-[state=unchecked]:border-border",
    "data-[state=checked]:bg-primary data-[state=checked]:border-transparent"
  ],
  {
    variants: {
      size: {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-7 w-[3.25rem]"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var switchThumbVariants = cva2(
  [
    "pointer-events-none block rounded-full bg-white shadow-sm",
    "transition-transform duration-pg-fast ease-pg-standard",
    "ring-0"
  ],
  {
    variants: {
      size: {
        sm: "size-3.5 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5",
        md: "size-4.5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0.5",
        lg: "size-5.5 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0.5"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);
var Switch = React10.forwardRef(({ className, size, ...props }, ref) => /* @__PURE__ */ jsx13(
  SwitchPrimitive.Root,
  {
    ref,
    className: cn(switchRootVariants({ size }), className),
    ...props,
    children: /* @__PURE__ */ jsx13(SwitchPrimitive.Thumb, { className: cn(switchThumbVariants({ size })) })
  }
));
Switch.displayName = SwitchPrimitive.Root.displayName;

// src/slider.tsx
import * as React11 from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { jsx as jsx14, jsxs as jsxs5 } from "react/jsx-runtime";
var Slider = React11.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxs5(
    SliderPrimitive.Root,
    {
      ref,
      className: cn("relative flex w-full touch-none select-none items-center", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx14(SliderPrimitive.Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsx14(SliderPrimitive.Range, { className: "absolute h-full bg-primary" }) }),
        /* @__PURE__ */ jsx14(SliderPrimitive.Thumb, { className: "block h-[18px] w-[18px] rounded-full border-2 border-primary bg-card shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 disabled:pointer-events-none disabled:opacity-50" })
      ]
    }
  )
);
Slider.displayName = SliderPrimitive.Root.displayName;

// src/form.tsx
import * as React12 from "react";
import { AlertCircle } from "lucide-react";
import { jsx as jsx15, jsxs as jsxs6 } from "react/jsx-runtime";
function useForm(fields = {}) {
  const initial = Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, v.defaultValue ?? ""]));
  const [values, setValues] = React12.useState(initial);
  const [errors, setErrors] = React12.useState({});
  function validate(name, value) {
    const rules = fields[name]?.rules;
    if (!rules) return void 0;
    if (rules.required && !value.trim()) return typeof rules.required === "string" ? rules.required : "This field is required";
    if (rules.minLength && value.length < rules.minLength.value) return rules.minLength.message;
    if (rules.maxLength && value.length > rules.maxLength.value) return rules.maxLength.message;
    if (rules.pattern && !rules.pattern.value.test(value)) return rules.pattern.message;
    if (rules.validate) return rules.validate(value);
  }
  const register = (name) => ({
    name,
    id: name,
    value: values[name] ?? "",
    onChange: (e) => setValues((v) => ({ ...v, [name]: e.target.value })),
    onBlur: () => {
      const err = validate(name, values[name] ?? "");
      setErrors((e) => err ? { ...e, [name]: err } : (({ [name]: _, ...rest }) => rest)(e));
    }
  });
  const handleSubmit = (onValid, onInvalid) => (e) => {
    e.preventDefault();
    const newErrors = {};
    for (const [name] of Object.entries(fields)) {
      const err = validate(name, values[name] ?? "");
      if (err) newErrors[name] = err;
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      onInvalid?.(newErrors);
    } else {
      setErrors({});
      onValid(values);
    }
  };
  return {
    values,
    errors,
    register,
    handleSubmit,
    setError: (name, msg) => setErrors((e) => ({ ...e, [name]: msg })),
    clearError: (name) => setErrors((e) => (({ [name]: _, ...rest }) => rest)(e)),
    reset: () => {
      setValues(initial);
      setErrors({});
    },
    setValue: (name, value) => setValues((v) => ({ ...v, [name]: value }))
  };
}
var Form = React12.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx15("form", { ref, className: cn("space-y-4", className), ...props })
);
Form.displayName = "Form";
var FormItem = React12.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx15("div", { ref, className: cn("flex flex-col gap-1.5", className), ...props })
);
FormItem.displayName = "FormItem";
var FormLabel = React12.forwardRef(
  ({ className, required, children, ...props }, ref) => /* @__PURE__ */ jsxs6("label", { ref, className: cn("text-sm font-medium text-foreground", className), ...props, children: [
    children,
    required && /* @__PURE__ */ jsx15("span", { className: "ml-1 text-destructive", children: "*" })
  ] })
);
FormLabel.displayName = "FormLabel";
var FormControl = React12.forwardRef(
  ({ ...props }, ref) => /* @__PURE__ */ jsx15("div", { ref, ...props })
);
FormControl.displayName = "FormControl";
var FormDescription = React12.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx15("p", { ref, className: cn("text-xs text-muted-foreground", className), ...props })
);
FormDescription.displayName = "FormDescription";
var FormError = React12.forwardRef(
  ({ className, children, ...props }, ref) => children ? /* @__PURE__ */ jsxs6("p", { ref, className: cn("flex items-center gap-1 text-xs text-destructive", className), ...props, children: [
    /* @__PURE__ */ jsx15(AlertCircle, { className: "size-3 shrink-0" }),
    children
  ] }) : null
);
FormError.displayName = "FormError";
var FormField = React12.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx15("div", { ref, className: cn("flex flex-col gap-1.5", className), ...props })
);
FormField.displayName = "FormField";

// src/field.tsx
import { useMemo as useMemo3 } from "react";
import { cva as cva3 } from "class-variance-authority";

// src/separator.tsx
import * as React13 from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { jsx as jsx16 } from "react/jsx-runtime";
var Separator = React13.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx16(
  SeparatorPrimitive.Root,
  {
    ref,
    decorative,
    orientation,
    className: cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
      className
    ),
    ...props
  }
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

// src/field.tsx
import { jsx as jsx17, jsxs as jsxs7 } from "react/jsx-runtime";
function FieldSet({ className, ...props }) {
  return /* @__PURE__ */ jsx17(
    "fieldset",
    {
      "data-slot": "field-set",
      className: cn(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        className
      ),
      ...props
    }
  );
}
function FieldLegend({
  className,
  variant = "legend",
  ...props
}) {
  return /* @__PURE__ */ jsx17(
    "legend",
    {
      "data-slot": "field-legend",
      "data-variant": variant,
      className: cn(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        className
      ),
      ...props
    }
  );
}
function FieldGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx17(
    "div",
    {
      "data-slot": "field-group",
      className: cn(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        className
      ),
      ...props
    }
  );
}
var fieldVariants = cva3("group/field flex w-full gap-3 data-[invalid=true]:text-destructive", {
  variants: {
    orientation: {
      vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
      horizontal: [
        "flex-row items-center",
        "[&>[data-slot=field-label]]:flex-auto",
        "has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px has-[>[data-slot=field-content]]:items-start"
      ],
      responsive: [
        "@md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto flex-col [&>*]:w-full [&>.sr-only]:w-auto",
        "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
        "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
      ]
    }
  },
  defaultVariants: {
    orientation: "vertical"
  }
});
function Field({
  className,
  orientation = "vertical",
  invalid,
  disabled,
  ...props
}) {
  return /* @__PURE__ */ jsx17(
    "div",
    {
      role: "group",
      "data-slot": "field",
      "data-orientation": orientation,
      "data-invalid": invalid ? true : void 0,
      "data-disabled": disabled ? true : void 0,
      className: cn(fieldVariants({ orientation }), className),
      ...props
    }
  );
}
function FieldContent({ className, ...props }) {
  return /* @__PURE__ */ jsx17(
    "div",
    {
      "data-slot": "field-content",
      className: cn("group/field-content flex flex-1 flex-col gap-1.5 leading-snug", className),
      ...props
    }
  );
}
function FieldLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx17(
    Label,
    {
      "data-slot": "field-label",
      className: cn(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border has-[>[data-slot=field]]:border-border [&>[data-slot=field]]:p-4",
        "has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10",
        className
      ),
      ...props
    }
  );
}
function FieldTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx17(
    "div",
    {
      "data-slot": "field-label",
      className: cn(
        "flex w-fit items-center gap-2 text-sm font-medium leading-snug group-data-[disabled=true]/field:opacity-50",
        className
      ),
      ...props
    }
  );
}
function FieldDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx17(
    "p",
    {
      "data-slot": "field-description",
      className: cn(
        "text-sm font-normal leading-normal text-muted-foreground group-has-[[data-orientation=horizontal]]/field:text-balance",
        "nth-last-2:-mt-1 last:mt-0 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        className
      ),
      ...props
    }
  );
}
function FieldSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs7(
    "div",
    {
      "data-slot": "field-separator",
      "data-content": !!children,
      className: cn(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx17(Separator, { className: "absolute inset-0 top-1/2" }),
        children ? /* @__PURE__ */ jsx17(
          "span",
          {
            className: "relative mx-auto block w-fit bg-background px-2 text-muted-foreground",
            "data-slot": "field-separator-content",
            children
          }
        ) : null
      ]
    }
  );
}
function FieldError({
  className,
  children,
  errors,
  ...props
}) {
  const content = useMemo3(() => {
    if (children) {
      return children;
    }
    if (!errors) {
      return null;
    }
    if (errors?.length === 1 && errors[0]?.message) {
      return errors[0].message;
    }
    return /* @__PURE__ */ jsx17("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: errors.map(
      (error, index) => error?.message && /* @__PURE__ */ jsx17("li", { children: error.message }, index)
    ) });
  }, [children, errors]);
  if (!content) {
    return null;
  }
  return /* @__PURE__ */ jsx17(
    "div",
    {
      role: "alert",
      "data-slot": "field-error",
      className: cn("text-sm font-normal text-destructive", className),
      ...props,
      children: content
    }
  );
}

// src/input-group.tsx
import { cva as cva4 } from "class-variance-authority";
import { jsx as jsx18 } from "react/jsx-runtime";
function InputGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx18(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: cn(
        "group/input-group relative flex w-full items-stretch rounded-xl border border-border bg-card shadow-sm outline-none transition-[color,box-shadow] dark:bg-card/50",
        "min-h-11 h-11 has-[>textarea]:h-auto",
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        "has-[[data-slot=input-group-control]:focus-visible]:ring-1 has-[[data-slot=input-group-control]:focus-visible]:ring-ring",
        "has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-destructive/20 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
var inputGroupAddonVariants = cva4(
  "text-muted-foreground flex h-auto min-h-11 cursor-text select-none items-center justify-center gap-2 px-0 text-[15px] font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-3.5 has-[>button]:-ml-[0.45rem] has-[>kbd]:-ml-[0.35rem]",
        "inline-end": "order-last pr-3.5 has-[>button]:-mr-[0.4rem] has-[>kbd]:-mr-[0.35rem]",
        "block-start": "order-first w-full justify-start border-b px-3 pt-3 group-has-[>input]/input-group:pt-2.5 [.border-b]:pb-3",
        "block-end": "order-last w-full justify-start border-t px-3 pb-3 group-has-[>input]/input-group:pb-2.5 [.border-t]:pt-3"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}) {
  return /* @__PURE__ */ jsx18(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": align,
      className: cn(inputGroupAddonVariants({ align }), className),
      onClick: (e) => {
        if (e.target.closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...props
    }
  );
}
var inputGroupButtonVariants = cva4(
  "inline-flex items-center justify-center gap-2 border border-transparent bg-transparent text-sm font-medium text-foreground shadow-none transition-colors hover:bg-muted",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
        sm: "h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5",
        "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0"
      }
    },
    defaultVariants: {
      size: "xs"
    }
  }
);
function InputGroupButton({
  className,
  type = "button",
  size = "xs",
  ...props
}) {
  return /* @__PURE__ */ jsx18(
    "button",
    {
      type,
      className: cn(inputGroupButtonVariants({ size }), className),
      ...props
    }
  );
}
function InputGroupText({ className, ...props }) {
  return /* @__PURE__ */ jsx18(
    "span",
    {
      className: cn(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
        className
      ),
      ...props
    }
  );
}
function InputGroupInput({ className, ...props }) {
  return /* @__PURE__ */ jsx18(
    Input,
    {
      "data-slot": "input-group-control",
      className: cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      ),
      ...props
    }
  );
}
function InputGroupTextarea({ className, ...props }) {
  return /* @__PURE__ */ jsx18(
    Textarea,
    {
      "data-slot": "input-group-control",
      className: cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        className
      ),
      ...props
    }
  );
}

// src/currency-amount-input.tsx
import { ChevronDown as ChevronDown3 } from "lucide-react";
import { jsx as jsx19, jsxs as jsxs8 } from "react/jsx-runtime";
var CURRENCIES = ["USD", "INR", "EUR", "GBP", "SGD", "AED", "JPY"];
function CurrencyAmountInput({
  currency,
  amount,
  onCurrencyChange,
  onAmountChange,
  placeholder = "0.00",
  disabled = false,
  required = false,
  currencies = CURRENCIES,
  id
}) {
  return /* @__PURE__ */ jsxs8("div", { className: "flex h-12 min-h-12 items-stretch overflow-hidden rounded-xl border border-border bg-card text-[15px] transition-all focus-within:border-muted-foreground/50 focus-within:ring-2 focus-within:ring-ring/20", children: [
    /* @__PURE__ */ jsxs8("div", { className: "relative flex min-w-[5.25rem] shrink-0 items-center border-r border-border bg-muted/25 px-3", children: [
      /* @__PURE__ */ jsx19(
        "select",
        {
          value: currency,
          onChange: (e) => onCurrencyChange(e.target.value),
          disabled,
          "aria-label": "Currency",
          className: cn(
            "h-full min-h-0 w-full min-w-0 cursor-pointer bg-transparent py-2 pl-1 pr-9 text-[15px] font-semibold text-foreground",
            "focus:outline-none disabled:opacity-50",
            "appearance-none [-webkit-appearance:none] [-moz-appearance:none]",
            "[&::-ms-expand]:hidden"
          ),
          children: currencies.map((c) => /* @__PURE__ */ jsx19("option", { value: c, children: c }, c))
        }
      ),
      /* @__PURE__ */ jsx19(
        ChevronDown3,
        {
          className: "pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground opacity-80",
          "aria-hidden": true
        }
      )
    ] }),
    /* @__PURE__ */ jsx19(
      "input",
      {
        id,
        type: "number",
        value: amount,
        onChange: (e) => onAmountChange(e.target.value),
        placeholder,
        disabled,
        required,
        min: "0",
        step: "0.01",
        className: "min-h-0 min-w-0 flex-1 bg-transparent px-4 py-3 text-[15px] tabular-nums text-foreground placeholder:text-muted-foreground focus:outline-none disabled:opacity-50"
      }
    )
  ] });
}

// src/card.tsx
import { cva as cva5 } from "class-variance-authority";
import { jsx as jsx20 } from "react/jsx-runtime";
var cardVariants = cva5("flex flex-col rounded-xl border border-border bg-card text-card-foreground shadow-sm", {
  variants: {
    size: {
      default: "gap-10 px-10 py-10",
      sm: "gap-6 px-7 py-7"
    }
  },
  defaultVariants: {
    size: "default"
  }
});
function Card({
  className,
  size,
  ...props
}) {
  return /* @__PURE__ */ jsx20(
    "div",
    {
      "data-slot": "card",
      className: cn(cardVariants({ size }), className),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx20(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-4 px-0 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx20(
    "div",
    {
      "data-slot": "card-title",
      className: cn("text-lg font-semibold leading-snug tracking-tight", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx20(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-sm leading-relaxed text-muted-foreground", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ jsx20(
    "div",
    {
      "data-slot": "card-action",
      className: cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx20("div", { "data-slot": "card-content", className: cn("px-0", className), ...props });
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx20(
    "div",
    {
      "data-slot": "card-footer",
      className: cn(
        "flex flex-wrap items-center gap-3 border-t border-border px-0 pt-8 pb-0 sm:gap-4",
        className
      ),
      ...props
    }
  );
}

// src/scroll-area.tsx
import * as React14 from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { jsx as jsx21, jsxs as jsxs9 } from "react/jsx-runtime";
var ScrollArea = React14.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs9(ScrollAreaPrimitive.Root, { ref, className: cn("relative overflow-hidden", className), ...props, children: [
  /* @__PURE__ */ jsx21(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]", children }),
  /* @__PURE__ */ jsx21(ScrollBar, {}),
  /* @__PURE__ */ jsx21(ScrollAreaPrimitive.Corner, {})
] }));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React14.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ jsx21(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-px",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-px",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsx21(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border hover:bg-muted-foreground/30" })
  }
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// src/side-nav.tsx
import * as React15 from "react";
import { Fragment, jsx as jsx22, jsxs as jsxs10 } from "react/jsx-runtime";
var SideNavContext = React15.createContext({
  isCollapsed: false
});
function useSideNavContext() {
  return React15.useContext(SideNavContext);
}
var SideNav = React15.forwardRef(
  ({
    className,
    width = "expanded",
    isCollapsed: isCollapsedProp,
    onCollapse,
    children,
    ...props
  }, ref) => {
    const collapsed = isCollapsedProp !== void 0 ? isCollapsedProp : width === "collapsed";
    return /* @__PURE__ */ jsx22(SideNavContext.Provider, { value: { isCollapsed: collapsed }, children: /* @__PURE__ */ jsx22(
      "aside",
      {
        ref,
        "data-slot": "side-nav",
        "data-collapsed": collapsed,
        className: cn(
          "flex flex-col bg-sidebar border-r border-sidebar-border",
          "transition-all duration-pg-normal ease-pg-standard",
          collapsed ? "w-[60px]" : "w-[240px]",
          className
        ),
        ...props,
        children
      }
    ) });
  }
);
SideNav.displayName = "SideNav";
var SideNavHeader = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx22(
  "div",
  {
    ref,
    "data-slot": "side-nav-header",
    className: cn(
      "px-4 py-4 border-b border-sidebar-border shrink-0",
      className
    ),
    ...props
  }
));
SideNavHeader.displayName = "SideNavHeader";
var SideNavSection = React15.forwardRef(
  ({ className, label, children, ...props }, ref) => {
    const { isCollapsed } = useSideNavContext();
    return /* @__PURE__ */ jsxs10(
      "div",
      {
        ref,
        "data-slot": "side-nav-section",
        className: cn("px-3 py-2", className),
        ...props,
        children: [
          label && !isCollapsed && /* @__PURE__ */ jsx22("p", { className: "mb-1 px-3 text-xs font-medium text-muted-foreground uppercase tracking-wider select-none", children: label }),
          children
        ]
      }
    );
  }
);
SideNavSection.displayName = "SideNavSection";
var SideNavItem = React15.forwardRef(
  ({
    className,
    icon,
    label,
    isActive = false,
    href,
    onClick,
    badge,
    _collapsed,
    children,
    ...props
  }, ref) => {
    const { isCollapsed } = useSideNavContext();
    const collapsed = _collapsed !== void 0 ? _collapsed : isCollapsed;
    const baseClassName = cn(
      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer",
      "transition-colors duration-pg-fast ease-pg-standard",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
      "disabled:cursor-not-allowed disabled:opacity-50",
      isActive ? "bg-primary/10 text-primary font-medium" : "text-sidebar-foreground hover:bg-muted/50",
      collapsed && "justify-center px-0",
      className
    );
    const content = /* @__PURE__ */ jsxs10(Fragment, { children: [
      /* @__PURE__ */ jsx22("span", { className: "size-4 shrink-0 flex items-center justify-center", children: icon }),
      !collapsed && /* @__PURE__ */ jsxs10(Fragment, { children: [
        /* @__PURE__ */ jsx22("span", { className: "flex-1 truncate", children: label }),
        badge && /* @__PURE__ */ jsx22("span", { className: "shrink-0", children: badge })
      ] })
    ] });
    if (href) {
      return /* @__PURE__ */ jsx22(
        "a",
        {
          ref,
          href,
          title: collapsed ? label : void 0,
          "aria-current": isActive ? "page" : void 0,
          className: baseClassName,
          onClick,
          ...props,
          children: content
        }
      );
    }
    return /* @__PURE__ */ jsx22(
      "a",
      {
        ref,
        role: "button",
        tabIndex: 0,
        title: collapsed ? label : void 0,
        "aria-current": isActive ? "page" : void 0,
        className: baseClassName,
        onClick,
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick?.(e);
          }
        },
        ...props,
        children: content
      }
    );
  }
);
SideNavItem.displayName = "SideNavItem";
var SideNavFooter = React15.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx22(
  "div",
  {
    ref,
    "data-slot": "side-nav-footer",
    className: cn(
      "mt-auto border-t border-sidebar-border px-3 py-3 shrink-0",
      className
    ),
    ...props
  }
));
SideNavFooter.displayName = "SideNavFooter";

// src/breadcrumb.tsx
import * as React16 from "react";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { jsx as jsx23, jsxs as jsxs11 } from "react/jsx-runtime";
var Breadcrumb = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx23(
  "nav",
  {
    ref,
    "aria-label": "breadcrumb",
    className: cn("", className),
    ...props
  }
));
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx23(
  "ol",
  {
    ref,
    className: cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2",
      className
    ),
    ...props
  }
));
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx23(
  "li",
  {
    ref,
    className: cn("inline-flex items-center gap-1.5", className),
    ...props
  }
));
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx23(
  "a",
  {
    ref,
    className: cn(
      "text-sm text-muted-foreground transition-colors duration-pg-fast ease-pg-standard hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 rounded-sm",
      className
    ),
    ...props
  }
));
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = React16.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx23(
  "span",
  {
    ref,
    role: "link",
    "aria-current": "page",
    "aria-disabled": "true",
    className: cn("text-sm font-medium text-foreground", className),
    ...props
  }
));
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = ({
  children,
  className,
  ...props
}) => /* @__PURE__ */ jsx23(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("[&>svg]:size-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ jsx23(ChevronRight, { className: "text-muted-foreground" })
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxs11(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("flex size-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx23(MoreHorizontal, { className: "size-4 text-muted-foreground" }),
      /* @__PURE__ */ jsx23("span", { className: "sr-only", children: "More" })
    ]
  }
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

// src/pagination.tsx
import { forwardRef as forwardRef18 } from "react";
import { ChevronLeft, ChevronRight as ChevronRight2, MoreHorizontal as MoreHorizontal2 } from "lucide-react";
import { jsx as jsx24, jsxs as jsxs12 } from "react/jsx-runtime";
var Pagination = forwardRef18(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx24(
    "nav",
    {
      ref,
      role: "navigation",
      "aria-label": "pagination",
      className: cn("mx-auto flex w-full justify-center", className),
      ...props
    }
  )
);
Pagination.displayName = "Pagination";
var PaginationContent = forwardRef18(({ className, ...props }, ref) => /* @__PURE__ */ jsx24(
  "ul",
  {
    ref,
    className: cn("flex flex-row items-center gap-1", className),
    ...props
  }
));
PaginationContent.displayName = "PaginationContent";
var PaginationItem = forwardRef18(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx24("li", { ref, className: cn("list-none", className), ...props })
);
PaginationItem.displayName = "PaginationItem";
var PaginationLink = forwardRef18(
  ({ className, isActive = false, ...props }, ref) => /* @__PURE__ */ jsx24(
    "a",
    {
      ref,
      "aria-current": isActive ? "page" : void 0,
      className: cn(
        // base
        "h-9 w-9 inline-flex items-center justify-center rounded-lg text-sm font-medium border",
        "transition-colors duration-pg-fast ease-pg-standard",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
        "cursor-pointer select-none",
        // active
        isActive ? "bg-primary text-primary-foreground border-primary shadow-sm" : "text-muted-foreground border-border hover:bg-muted hover:text-foreground",
        className
      ),
      ...props
    }
  )
);
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = forwardRef18(({ className, disabled, ...props }, ref) => /* @__PURE__ */ jsxs12(
  "a",
  {
    ref,
    "aria-label": "Go to previous page",
    "aria-disabled": disabled,
    className: cn(
      "h-9 px-3 inline-flex items-center justify-center gap-1.5 rounded-lg text-sm font-medium border border-border",
      "transition-colors duration-pg-fast ease-pg-standard",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
      "cursor-pointer select-none",
      disabled ? "cursor-not-allowed opacity-50 pointer-events-none text-muted-foreground border-border" : "text-muted-foreground hover:bg-muted hover:text-foreground",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx24(ChevronLeft, { className: "size-4" }),
      /* @__PURE__ */ jsx24("span", { children: "Previous" })
    ]
  }
));
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = forwardRef18(({ className, disabled, ...props }, ref) => /* @__PURE__ */ jsxs12(
  "a",
  {
    ref,
    "aria-label": "Go to next page",
    "aria-disabled": disabled,
    className: cn(
      "h-9 px-3 inline-flex items-center justify-center gap-1.5 rounded-lg text-sm font-medium border border-border",
      "transition-colors duration-pg-fast ease-pg-standard",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
      "cursor-pointer select-none",
      disabled ? "cursor-not-allowed opacity-50 pointer-events-none text-muted-foreground border-border" : "text-muted-foreground hover:bg-muted hover:text-foreground",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx24("span", { children: "Next" }),
      /* @__PURE__ */ jsx24(ChevronRight2, { className: "size-4" })
    ]
  }
));
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = forwardRef18(({ className, ...props }, ref) => /* @__PURE__ */ jsxs12(
  "span",
  {
    ref,
    "aria-hidden": true,
    className: cn(
      "h-9 w-9 inline-flex items-center justify-center text-muted-foreground",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx24(MoreHorizontal2, { className: "size-4" }),
      /* @__PURE__ */ jsx24("span", { className: "sr-only", children: "More pages" })
    ]
  }
));
PaginationEllipsis.displayName = "PaginationEllipsis";

// src/link.tsx
import * as React19 from "react";

// ../../node_modules/@radix-ui/react-slot/dist/index.mjs
import * as React18 from "react";

// ../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs
import * as React17 from "react";
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return React17.useCallback(composeRefs(...refs), refs);
}

// ../../node_modules/@radix-ui/react-slot/dist/index.mjs
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
  const Slot2 = React18.forwardRef((props, forwardedRef) => {
    let { children, ...slotProps } = props;
    let slottableElement = null;
    let hasSlottable = false;
    const newChildren = [];
    if (isLazyComponent(children) && typeof use === "function") {
      children = use(children._payload);
    }
    React18.Children.forEach(children, (maybeSlottable) => {
      if (isSlottable(maybeSlottable)) {
        hasSlottable = true;
        const slottable = maybeSlottable;
        let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
        if (isLazyComponent(child) && typeof use === "function") {
          child = use(child._payload);
        }
        slottableElement = getSlottableElementFromSlottable(slottable, child);
        newChildren.push(slottableElement?.props?.children);
      } else {
        newChildren.push(maybeSlottable);
      }
    });
    if (slottableElement) {
      slottableElement = React18.cloneElement(slottableElement, void 0, newChildren);
    } else if (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !hasSlottable && React18.Children.count(children) === 1 && React18.isValidElement(children)
    ) {
      slottableElement = children;
    }
    const slottableElementRef = slottableElement ? getElementRef(slottableElement) : void 0;
    const composedRef = useComposedRefs(forwardedRef, slottableElementRef);
    if (!slottableElement) {
      if (children || children === 0) {
        throw new Error(
          hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName)
        );
      }
      return children;
    }
    const mergedProps = mergeProps(slotProps, slottableElement.props ?? {});
    if (slottableElement.type !== React18.Fragment) {
      mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
    }
    return React18.cloneElement(slottableElement, mergedProps);
  });
  Slot2.displayName = `${ownerName}.Slot`;
  return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
var SLOTTABLE_IDENTIFIER = /* @__PURE__ */ Symbol.for("radix.slottable");
var getSlottableElementFromSlottable = (slottable, child) => {
  if ("child" in slottable.props) {
    const child2 = slottable.props.child;
    if (!React18.isValidElement(child2)) return null;
    return React18.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
  }
  return React18.isValidElement(child) ? child : null;
};
function mergeProps(slotProps, childProps) {
  const overrideProps = { ...childProps };
  for (const propName in childProps) {
    const slotPropValue = slotProps[propName];
    const childPropValue = childProps[propName];
    const isHandler = /^on[A-Z]/.test(propName);
    if (isHandler) {
      if (slotPropValue && childPropValue) {
        overrideProps[propName] = (...args) => {
          const result = childPropValue(...args);
          slotPropValue(...args);
          return result;
        };
      } else if (slotPropValue) {
        overrideProps[propName] = slotPropValue;
      }
    } else if (propName === "style") {
      overrideProps[propName] = { ...slotPropValue, ...childPropValue };
    } else if (propName === "className") {
      overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
    }
  }
  return { ...slotProps, ...overrideProps };
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}
function isSlottable(child) {
  return React18.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
function isLazyComponent(element) {
  return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
function isPromiseLike(value) {
  return typeof value === "object" && value !== null && "then" in value;
}
var createSlotError = (ownerName) => {
  return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
};
var createSlottableError = (ownerName) => {
  return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
};
var use = React18[" use ".trim().toString()];

// src/link.tsx
import { cva as cva6 } from "class-variance-authority";
import { jsx as jsx25 } from "react/jsx-runtime";
var linkVariants = cva6(
  [
    "inline-flex items-center gap-1 transition-colors duration-pg-fast ease-pg-standard",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 rounded-sm",
    "aria-disabled:cursor-not-allowed aria-disabled:opacity-50 aria-disabled:pointer-events-none"
  ],
  {
    variants: {
      variant: {
        default: "text-primary underline-offset-4 hover:underline",
        subtle: "text-muted-foreground hover:text-foreground",
        nav: "text-foreground hover:text-primary"
      },
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var Link = React19.forwardRef(
  ({
    className,
    variant,
    size,
    asChild = false,
    href,
    target,
    rel,
    children,
    ...props
  }, ref) => {
    const Comp = asChild ? Slot : "a";
    const isExternal = typeof href === "string" && href.startsWith("http");
    const externalProps = isExternal ? {
      target: target ?? "_blank",
      rel: rel ?? "noreferrer"
    } : { target, rel };
    return /* @__PURE__ */ jsx25(
      Comp,
      {
        ref,
        href,
        className: cn(linkVariants({ variant, size }), className),
        ...externalProps,
        ...props,
        children
      }
    );
  }
);
Link.displayName = "Link";

// src/badge.tsx
import { forwardRef as forwardRef21 } from "react";
import { jsx as jsx26, jsxs as jsxs13 } from "react/jsx-runtime";
var variantClasses2 = {
  default: "bg-primary/10 text-primary border border-primary/20",
  secondary: "bg-muted text-muted-foreground border border-border",
  success: "bg-green-500/10 text-green-700 border border-green-500/20 dark:text-green-400",
  warning: "bg-amber-500/10 text-amber-700 border border-amber-500/20 dark:text-amber-400",
  error: "bg-red-500/10 text-red-700 border border-red-500/20 dark:text-red-400",
  outline: "bg-transparent text-foreground border border-border"
};
var sizeClasses2 = {
  sm: "text-[10px] px-1.5 py-0.5 gap-1",
  md: "text-xs px-2 py-0.5 gap-1",
  lg: "text-sm px-2.5 py-1 gap-1.5"
};
var dotColorClasses = {
  default: "bg-primary",
  secondary: "bg-muted-foreground",
  success: "bg-green-500",
  warning: "bg-amber-500",
  error: "bg-red-500",
  outline: "bg-foreground"
};
var dotSizeClasses = {
  sm: "size-1.5",
  md: "size-1.5",
  lg: "size-2"
};
var Badge = forwardRef21(
  ({
    variant = "default",
    size = "md",
    square = false,
    dot = false,
    leftIcon,
    rightIcon,
    children,
    className,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs13(
      "span",
      {
        ref,
        className: cn(
          "inline-flex items-center font-medium whitespace-nowrap transition-colors duration-pg-fast ease-pg-standard",
          square ? "rounded-md" : "rounded-full",
          variantClasses2[variant],
          sizeClasses2[size],
          className
        ),
        ...props,
        children: [
          dot && /* @__PURE__ */ jsx26(
            "span",
            {
              className: cn(
                "rounded-full flex-shrink-0",
                dotSizeClasses[size],
                dotColorClasses[variant]
              )
            }
          ),
          !dot && leftIcon && /* @__PURE__ */ jsx26("span", { className: "inline-flex items-center flex-shrink-0", children: leftIcon }),
          children,
          rightIcon && /* @__PURE__ */ jsx26("span", { className: "inline-flex items-center flex-shrink-0", children: rightIcon })
        ]
      }
    );
  }
);
Badge.displayName = "Badge";

// src/lozenge.tsx
import { forwardRef as forwardRef22 } from "react";
import { jsx as jsx27 } from "react/jsx-runtime";
var variantClasses3 = {
  default: "bg-muted text-muted-foreground",
  inprogress: "bg-blue-500/15 text-blue-700 dark:text-blue-300",
  success: "bg-green-500/15 text-green-700 dark:text-green-300",
  moved: "bg-purple-500/15 text-purple-700 dark:text-purple-300",
  new: "bg-teal-500/15 text-teal-700 dark:text-teal-300",
  removed: "bg-red-500/15 text-red-700 dark:text-red-300"
};
var Lozenge = forwardRef22(
  ({
    variant = "default",
    isBold = false,
    maxWidth,
    children,
    className,
    style,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx27(
      "span",
      {
        ref,
        className: cn(
          "inline-flex items-center rounded-sm px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide whitespace-nowrap transition-colors duration-pg-fast ease-pg-standard",
          variantClasses3[variant],
          isBold && "ring-1 ring-current/30",
          className
        ),
        style: maxWidth !== void 0 ? { maxWidth, overflow: "hidden", textOverflow: "ellipsis", ...style } : style,
        ...props,
        children: /* @__PURE__ */ jsx27(
          "span",
          {
            className: cn(
              maxWidth !== void 0 ? "truncate" : void 0
            ),
            children
          }
        )
      }
    );
  }
);
Lozenge.displayName = "Lozenge";

// src/tag.tsx
import * as React20 from "react";
import { X } from "lucide-react";
import { jsx as jsx28, jsxs as jsxs14 } from "react/jsx-runtime";
var colorClasses = {
  neutral: "bg-card border-border text-foreground",
  blue: "bg-blue-500/10 border-blue-500/20 text-blue-700 dark:text-blue-300",
  green: "bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-300",
  amber: "bg-amber-500/10 border-amber-500/20 text-amber-700 dark:text-amber-300",
  red: "bg-red-500/10 border-red-500/20 text-red-700 dark:text-red-300",
  purple: "bg-purple-500/10 border-purple-500/20 text-purple-700 dark:text-purple-300"
};
var Tag = React20.forwardRef(
  ({ className, colorScheme = "neutral", onRemove, disabled, children, ...props }, ref) => /* @__PURE__ */ jsxs14(
    "span",
    {
      ref,
      className: cn("inline-flex items-center gap-1 rounded-md border px-2 py-1 text-xs font-medium transition-colors", colorClasses[colorScheme], disabled && "opacity-50 cursor-not-allowed", className),
      ...props,
      children: [
        children,
        onRemove && !disabled && /* @__PURE__ */ jsx28(
          "button",
          {
            type: "button",
            onClick: (e) => {
              e.stopPropagation();
              onRemove();
            },
            className: "ml-0.5 rounded-sm opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            "aria-label": "Remove",
            children: /* @__PURE__ */ jsx28(X, { className: "size-3" })
          }
        )
      ]
    }
  )
);
Tag.displayName = "Tag";
var TagGroup = React20.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx28("div", { ref, className: cn("flex flex-wrap gap-1.5", className), ...props })
);
TagGroup.displayName = "TagGroup";

// src/status-badge.tsx
import * as React21 from "react";
import { Check as Check3, X as X2, RefreshCw, Clock, AlertCircle as AlertCircle2, ArrowRight, Info } from "lucide-react";
import { jsx as jsx29, jsxs as jsxs15 } from "react/jsx-runtime";
var VARIANT_CLASS = {
  success: "bg-emerald-500/10 text-emerald-800 border-emerald-600/10 dark:bg-emerald-500/35 dark:text-emerald-50 dark:border-emerald-400/70",
  info: "bg-blue-500/10 text-blue-800 border-blue-600/10 dark:bg-sky-500/30 dark:text-sky-50 dark:border-sky-400/65",
  warning: "bg-amber-500/10 text-amber-900 border-amber-600/10 dark:bg-amber-500/35 dark:text-amber-50 dark:border-amber-400/70",
  refund: "bg-yellow-500/10 text-yellow-900 border-yellow-600/10 dark:bg-violet-500/30 dark:text-violet-100 dark:border-violet-400/60",
  danger: "bg-red-500/10 text-red-800 border-red-600/10 dark:bg-red-500/35 dark:text-red-50 dark:border-red-400/70",
  orange: "bg-orange-500/10 text-orange-900 border-orange-600/10 dark:bg-orange-500/35 dark:text-orange-50 dark:border-orange-400/65",
  muted: "bg-muted text-muted-foreground border-border/40 dark:bg-zinc-800/90 dark:text-zinc-200 dark:border-zinc-500/45"
};
var StatusBadge = React21.forwardRef(
  ({ variant, label, trailIcon, size = "md", className }, ref) => {
    const iSize = size === "sm" ? 11 : 12;
    const iProps = {
      width: iSize,
      height: iSize,
      strokeWidth: 2.5,
      style: { flexShrink: 0 }
    };
    const icon = trailIcon === "check" ? /* @__PURE__ */ jsx29(Check3, { ...iProps }) : trailIcon === "x" ? /* @__PURE__ */ jsx29(X2, { ...iProps, strokeWidth: 3 }) : trailIcon === "refresh" ? /* @__PURE__ */ jsx29(RefreshCw, { ...{ ...iProps, strokeWidth: 2 } }) : trailIcon === "clock" ? /* @__PURE__ */ jsx29(Clock, { ...iProps, strokeWidth: 2 }) : trailIcon === "alert" ? /* @__PURE__ */ jsx29(AlertCircle2, { ...iProps, strokeWidth: 2 }) : trailIcon === "arrow-right" ? /* @__PURE__ */ jsx29(ArrowRight, { ...iProps, strokeWidth: 2.5 }) : trailIcon === "info" ? /* @__PURE__ */ jsx29(Info, { ...iProps, strokeWidth: 2.5 }) : null;
    return /* @__PURE__ */ jsxs15(
      "span",
      {
        ref,
        className: cn(
          "inline-flex items-center gap-1.5 font-medium border whitespace-nowrap rounded-md",
          VARIANT_CLASS[variant],
          size === "sm" ? "text-[11px] px-2 py-[2px]" : "text-[13px] px-3 py-[5px]",
          className
        ),
        children: [
          label,
          icon
        ]
      }
    );
  }
);
StatusBadge.displayName = "StatusBadge";

// src/blanket.tsx
import * as React22 from "react";
import { jsx as jsx30 } from "react/jsx-runtime";
var Blanket = React22.forwardRef(
  ({
    open = true,
    isTinted = true,
    isTransparent = false,
    onClick,
    shouldAllowClickThrough = false,
    className,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx30(
      "div",
      {
        ref,
        "data-open": open,
        "aria-hidden": "true",
        onClick,
        className: cn(
          "fixed inset-0 z-40",
          // Animate in/out
          "data-[open=true]:animate-in data-[open=false]:animate-out",
          "data-[open=true]:fade-in-0 data-[open=false]:fade-out-0",
          "transition-colors duration-pg-fast ease-pg-standard",
          // Visibility
          !open && "pointer-events-none",
          // Background
          !isTransparent && isTinted && "bg-black/50 backdrop-blur-sm",
          isTransparent && "bg-transparent",
          // Click-through
          shouldAllowClickThrough && "pointer-events-none",
          className
        ),
        ...props
      }
    );
  }
);
Blanket.displayName = "Blanket";

// src/spotlight.tsx
import * as React23 from "react";
import { X as X3, ChevronLeft as ChevronLeft2, ChevronRight as ChevronRight3, Check as Check4 } from "lucide-react";
import { Fragment as Fragment3, jsx as jsx31, jsxs as jsxs16 } from "react/jsx-runtime";
var SpotlightCard = React23.forwardRef(
  ({ title, body, image, currentStep, totalSteps, onNext, onBack, onDismiss, nextLabel, className }, ref) => {
    const isLast = currentStep !== void 0 && totalSteps !== void 0 && currentStep >= totalSteps - 1;
    return /* @__PURE__ */ jsxs16("div", { ref, className: cn("bg-card border border-border rounded-xl shadow-xl p-5 w-72", className), children: [
      onDismiss && /* @__PURE__ */ jsx31(
        "button",
        {
          onClick: onDismiss,
          className: "absolute top-3 right-3 rounded-md p-1 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
          "aria-label": "Dismiss",
          children: /* @__PURE__ */ jsx31(X3, { className: "size-4" })
        }
      ),
      image && /* @__PURE__ */ jsx31("div", { className: "mb-4", children: image }),
      /* @__PURE__ */ jsx31("h3", { className: "font-semibold text-base text-foreground pr-6", children: title }),
      /* @__PURE__ */ jsx31("p", { className: "mt-1 text-sm text-muted-foreground leading-relaxed", children: body }),
      /* @__PURE__ */ jsxs16("div", { className: "flex items-center justify-between mt-4", children: [
        /* @__PURE__ */ jsx31("div", { className: "flex items-center gap-2", children: totalSteps && totalSteps > 1 && /* @__PURE__ */ jsxs16(Fragment3, { children: [
          /* @__PURE__ */ jsxs16("span", { className: "text-xs text-muted-foreground", children: [
            (currentStep ?? 0) + 1,
            " of ",
            totalSteps
          ] }),
          /* @__PURE__ */ jsx31("div", { className: "flex gap-1", children: Array.from({ length: totalSteps }).map((_, i) => /* @__PURE__ */ jsx31(
            "span",
            {
              className: cn(
                "rounded-full transition-all duration-pg-fast",
                i === (currentStep ?? 0) ? "w-4 h-1.5 bg-primary" : "w-1.5 h-1.5 bg-muted-foreground/30"
              )
            },
            i
          )) })
        ] }) }),
        /* @__PURE__ */ jsxs16("div", { className: "flex gap-2", children: [
          onBack && (currentStep ?? 0) > 0 && /* @__PURE__ */ jsxs16(
            "button",
            {
              onClick: onBack,
              className: "inline-flex items-center gap-1 h-8 px-3 rounded-lg text-xs font-medium text-muted-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
              children: [
                /* @__PURE__ */ jsx31(ChevronLeft2, { className: "size-3" }),
                " Back"
              ]
            }
          ),
          onNext && /* @__PURE__ */ jsx31(
            "button",
            {
              onClick: onNext,
              className: "inline-flex items-center gap-1 h-8 px-3 rounded-lg text-xs font-medium bg-primary text-primary-foreground hover:bg-[var(--primary-hover)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
              children: isLast ? /* @__PURE__ */ jsxs16(Fragment3, { children: [
                /* @__PURE__ */ jsx31(Check4, { className: "size-3" }),
                " ",
                nextLabel ?? "Done"
              ] }) : /* @__PURE__ */ jsxs16(Fragment3, { children: [
                nextLabel ?? "Next",
                " ",
                /* @__PURE__ */ jsx31(ChevronRight3, { className: "size-3" })
              ] })
            }
          )
        ] })
      ] })
    ] });
  }
);
SpotlightCard.displayName = "SpotlightCard";
var Spotlight = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;
  return /* @__PURE__ */ jsxs16("div", { className: "fixed inset-0 z-50", children: [
    /* @__PURE__ */ jsx31("div", { className: "absolute inset-0 bg-black/50 backdrop-blur-sm", onClick: onClose }),
    /* @__PURE__ */ jsx31("div", { className: cn("relative z-10 flex items-center justify-center min-h-full p-4", className), children })
  ] });
};
Spotlight.displayName = "Spotlight";
function useSpotlight(steps, initialStep = 0) {
  const [isOpen, setIsOpen] = React23.useState(false);
  const [currentStep, setCurrentStep] = React23.useState(initialStep);
  return {
    isOpen,
    currentStep,
    open: () => {
      setCurrentStep(initialStep);
      setIsOpen(true);
    },
    close: () => setIsOpen(false),
    goNext: () => {
      if (currentStep >= steps.length - 1) setIsOpen(false);
      else setCurrentStep((s) => s + 1);
    },
    goBack: () => setCurrentStep((s) => Math.max(0, s - 1)),
    goTo: (step) => setCurrentStep(Math.max(0, Math.min(step, steps.length - 1)))
  };
}

// src/dialog.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X as X4 } from "lucide-react";
import { jsx as jsx32, jsxs as jsxs17 } from "react/jsx-runtime";
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
function DialogOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx32(
    DialogPrimitive.Overlay,
    {
      className: cn(
        "fixed inset-0 z-[100] min-h-[100dvh] w-full bg-black/50 backdrop-blur-[2px]",
        "data-[state=open]:opacity-100 data-[state=closed]:opacity-0 transition-opacity duration-200",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showClose = true,
  overlayClassName,
  ...props
}) {
  return /* @__PURE__ */ jsxs17(DialogPortal, { children: [
    /* @__PURE__ */ jsx32(DialogOverlay, { className: overlayClassName }),
    /* @__PURE__ */ jsxs17(
      DialogPrimitive.Content,
      {
        className: cn(
          "fixed left-1/2 top-1/2 z-[101] w-[calc(100%-1.5rem)] max-w-[min(100%,26rem)] -translate-x-1/2 -translate-y-1/2",
          // Default padding reserves space for the close button.
          // Pass p-0 in className to opt out (manage padding per section).
          "rounded-2xl border border-border bg-card p-6 pt-10 text-card-foreground shadow-2xl outline-none",
          "max-h-[min(90vh,720px)] overflow-y-auto",
          "data-[state=open]:opacity-100 data-[state=closed]:opacity-0 data-[state=open]:scale-100 data-[state=closed]:scale-[0.98]",
          "transition-[opacity,transform] duration-200 ease-out",
          className
        ),
        ...props,
        children: [
          children,
          showClose && /* @__PURE__ */ jsx32(
            DialogPrimitive.Close,
            {
              className: "absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors",
              "aria-label": "Close",
              children: /* @__PURE__ */ jsx32(X4, { className: "h-4 w-4" })
            }
          )
        ]
      }
    )
  ] });
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx32(
    DialogPrimitive.Title,
    {
      className: cn("text-lg font-semibold text-foreground tracking-tight pr-10", className),
      ...props
    }
  );
}
function DialogDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx32(DialogPrimitive.Description, { className: cn("text-[13px] text-muted-foreground mt-1", className), ...props });
}

// src/drawer.tsx
import * as React24 from "react";
import * as DialogPrimitive2 from "@radix-ui/react-dialog";
import { X as X5 } from "lucide-react";
import { jsx as jsx33, jsxs as jsxs18 } from "react/jsx-runtime";
var DrawerContext = React24.createContext({ side: "right" });
var Drawer = ({ side = "right", children, ...props }) => /* @__PURE__ */ jsx33(DrawerContext.Provider, { value: { side }, children: /* @__PURE__ */ jsx33(DialogPrimitive2.Root, { ...props, children }) });
Drawer.displayName = "Drawer";
var DrawerTrigger = DialogPrimitive2.Trigger;
var DrawerClose = DialogPrimitive2.Close;
var DrawerOverlay = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx33(
  DialogPrimitive2.Overlay,
  {
    ref,
    className: cn("fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
    ...props
  }
));
DrawerOverlay.displayName = "DrawerOverlay";
var sideClasses = {
  right: "inset-y-0 right-0 h-full w-80 sm:w-96 border-l data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
  left: "inset-y-0 left-0 h-full w-80 sm:w-96 border-r data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
  top: "inset-x-0 top-0 w-full border-b rounded-b-2xl data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
  bottom: "inset-x-0 bottom-0 w-full border-t rounded-t-2xl max-h-[85vh] data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom"
};
var DrawerContent = React24.forwardRef(({ className, children, ...props }, ref) => {
  const { side } = React24.useContext(DrawerContext);
  return /* @__PURE__ */ jsxs18(DialogPrimitive2.Portal, { children: [
    /* @__PURE__ */ jsx33(DrawerOverlay, {}),
    /* @__PURE__ */ jsxs18(
      DialogPrimitive2.Content,
      {
        ref,
        className: cn("fixed z-50 flex flex-col bg-card border-border shadow-xl transition-all duration-pg-normal ease-pg-standard data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200", sideClasses[side], className),
        ...props,
        children: [
          children,
          /* @__PURE__ */ jsxs18(DialogPrimitive2.Close, { className: "absolute right-4 top-4 rounded-md p-1 text-muted-foreground opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35", children: [
            /* @__PURE__ */ jsx33(X5, { className: "size-4" }),
            /* @__PURE__ */ jsx33("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
});
DrawerContent.displayName = "DrawerContent";
var DrawerHeader = React24.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx33("div", { ref, className: cn("px-6 pt-6 pb-4 border-b border-border", className), ...props })
);
DrawerHeader.displayName = "DrawerHeader";
var DrawerFooter = React24.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx33("div", { ref, className: cn("px-6 py-4 border-t border-border flex gap-2 justify-end mt-auto", className), ...props })
);
DrawerFooter.displayName = "DrawerFooter";
var DrawerTitle = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx33(DialogPrimitive2.Title, { ref, className: cn("text-base font-semibold text-foreground pr-6", className), ...props }));
DrawerTitle.displayName = "DrawerTitle";
var DrawerDescription = React24.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx33(DialogPrimitive2.Description, { ref, className: cn("mt-1 text-sm text-muted-foreground", className), ...props }));
DrawerDescription.displayName = "DrawerDescription";

// src/popover.tsx
import * as React25 from "react";
import * as PopoverPrimitive2 from "@radix-ui/react-popover";
import { jsx as jsx34 } from "react/jsx-runtime";
var Popover = PopoverPrimitive2.Root;
var PopoverTrigger = PopoverPrimitive2.Trigger;
var PopoverAnchor = PopoverPrimitive2.Anchor;
var PopoverContent = React25.forwardRef(({ className, align = "center", sideOffset = 6, ...props }, ref) => /* @__PURE__ */ jsx34(PopoverPrimitive2.Portal, { children: /* @__PURE__ */ jsx34(
  PopoverPrimitive2.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-[120] w-72 rounded-xl border border-border bg-popover p-4 text-popover-foreground shadow-lg outline-none",
      "data-[state=open]:opacity-100 data-[state=closed]:opacity-0 transition-opacity duration-150",
      className
    ),
    ...props
  }
) }));
PopoverContent.displayName = PopoverPrimitive2.Content.displayName;

// src/tooltip.tsx
import * as React26 from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsx as jsx35 } from "react/jsx-runtime";
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = React26.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ jsx35(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx35(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-[130] max-w-xs overflow-hidden rounded-lg border border-border bg-popover px-3 py-2 text-sm leading-snug text-popover-foreground shadow-md",
      className
    ),
    ...props
  }
) }));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

// src/menu.tsx
import { forwardRef as forwardRef30 } from "react";
import { Fragment as Fragment4, jsx as jsx36, jsxs as jsxs19 } from "react/jsx-runtime";
var MenuDivider = forwardRef30(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx36(
    "hr",
    {
      ref,
      className: cn("h-px bg-border border-none my-1", className),
      ...props
    }
  )
);
MenuDivider.displayName = "MenuDivider";
var MenuSection = forwardRef30(
  ({ label, children, className, ...props }, ref) => /* @__PURE__ */ jsxs19("div", { ref, className: cn("flex flex-col", className), ...props, children: [
    label && /* @__PURE__ */ jsx36("span", { className: "text-[11px] font-semibold uppercase tracking-wider text-muted-foreground px-2 py-1.5 mt-2 first:mt-0 select-none", children: label }),
    children
  ] })
);
MenuSection.displayName = "MenuSection";
var menuItemBaseClasses = "flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm transition-colors duration-pg-fast ease-pg-standard w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35";
var MenuItem = forwardRef30(
  (props, ref) => {
    const {
      icon,
      rightContent,
      isSelected,
      isDanger,
      children,
      className,
      ...rest
    } = props;
    const resolvedClasses = cn(
      menuItemBaseClasses,
      !isDanger && !isSelected && "text-muted-foreground hover:bg-muted hover:text-foreground",
      isSelected && !isDanger && "bg-muted text-foreground font-medium",
      isDanger && "text-destructive hover:bg-destructive/10",
      rest.disabled && "opacity-50 cursor-not-allowed pointer-events-none",
      className
    );
    const content = /* @__PURE__ */ jsxs19(Fragment4, { children: [
      icon && /* @__PURE__ */ jsx36("span", { className: "size-4 shrink-0 flex items-center justify-center [&>svg]:size-4", children: icon }),
      /* @__PURE__ */ jsx36("span", { className: "flex-1 text-left truncate", children }),
      rightContent && /* @__PURE__ */ jsx36("span", { className: "ml-auto shrink-0", children: rightContent })
    ] });
    if ("href" in props && props.href !== void 0) {
      const { href, ...anchorRest } = rest;
      return /* @__PURE__ */ jsx36(
        "a",
        {
          ref,
          href,
          className: resolvedClasses,
          ...anchorRest,
          children: content
        }
      );
    }
    const { disabled, ...buttonRest } = rest;
    return /* @__PURE__ */ jsx36(
      "button",
      {
        ref,
        type: "button",
        disabled,
        className: resolvedClasses,
        ...buttonRest,
        children: content
      }
    );
  }
);
MenuItem.displayName = "MenuItem";
var Menu = forwardRef30(
  ({ children, className, ...props }, ref) => /* @__PURE__ */ jsx36(
    "nav",
    {
      ref,
      className: cn("flex flex-col", className),
      ...props,
      children
    }
  )
);
Menu.displayName = "Menu";

// src/dropdown-menu.tsx
import * as React27 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check as Check5, ChevronRight as ChevronRight4, Circle } from "lucide-react";
import { jsx as jsx37, jsxs as jsxs20 } from "react/jsx-runtime";
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuGroup = DropdownMenuPrimitive.Group;
var DropdownMenuPortal = DropdownMenuPrimitive.Portal;
var DropdownMenuSub = DropdownMenuPrimitive.Sub;
var DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
var DropdownMenuSubTrigger = React27.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs20(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-2.5 text-[15px] outline-none",
      "focus:bg-muted data-[state=open]:bg-muted",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx37(ChevronRight4, { className: "ml-auto h-4 w-4 text-muted-foreground" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx37(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-[130] min-w-[8rem] overflow-hidden rounded-xl border border-border bg-popover p-1.5 text-popover-foreground shadow-lg",
      "data-[state=open]:opacity-100 data-[state=closed]:opacity-0 transition-opacity duration-150",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React27.forwardRef(({ className, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ jsx37(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx37(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-[130] min-w-[11rem] overflow-hidden rounded-xl border border-border bg-popover p-1.5 text-popover-foreground shadow-lg",
      "data-[state=open]:opacity-100 data-[state=closed]:opacity-0 transition-opacity duration-150",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React27.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx37(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-2.5 text-[15px] outline-none transition-colors",
      "focus:bg-muted focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React27.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs20(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-lg py-2 pl-8 pr-2 text-sm outline-none transition-colors",
      "focus:bg-muted focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx37("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx37(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx37(Check5, { className: "h-4 w-4 text-primary" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React27.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs20(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-lg py-2 pl-8 pr-2 text-sm outline-none transition-colors",
      "focus:bg-muted focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx37("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx37(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx37(Circle, { className: "h-2 w-2 fill-current text-primary" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React27.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx37(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-xs font-semibold text-muted-foreground", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx37(DropdownMenuPrimitive.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-border", className), ...props }));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
function DropdownMenuShortcut({ className, ...props }) {
  return /* @__PURE__ */ jsx37("span", { className: cn("ml-auto text-[10px] tracking-wide text-muted-foreground", className), ...props });
}

// src/select.tsx
import * as React28 from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check as Check6, ChevronDown as ChevronDown4, ChevronUp } from "lucide-react";
import { jsx as jsx38, jsxs as jsxs21 } from "react/jsx-runtime";
var Select = SelectPrimitive.Root;
var SelectGroup = SelectPrimitive.Group;
var SelectValue = SelectPrimitive.Value;
var SelectTrigger = React28.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs21(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-11 min-h-11 w-full items-center justify-between gap-2.5 rounded-lg border border-border bg-card px-4 py-2 text-[15px] text-foreground shadow-sm outline-none",
      "ring-ring/50 focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50",
      "[&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx38(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx38(ChevronDown4, { className: "h-4 w-4 shrink-0 text-muted-foreground opacity-70" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
var SelectScrollUpButton = React28.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx38(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1 text-muted-foreground", className),
    ...props,
    children: /* @__PURE__ */ jsx38(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
var SelectScrollDownButton = React28.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx38(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1 text-muted-foreground", className),
    ...props,
    children: /* @__PURE__ */ jsx38(ChevronDown4, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
var SelectContent = React28.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx38(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs21(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-[120] max-h-[min(24rem,var(--radix-select-content-available-height))] min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-xl border border-border bg-popover text-popover-foreground shadow-lg",
      "data-[state=open]:opacity-100 data-[state=closed]:opacity-0 transition-opacity duration-150",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx38(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx38(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1 max-h-72 overflow-y-auto",
            position === "popper" && "w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx38(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
var SelectLabel = React28.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx38(SelectPrimitive.Label, { ref, className: cn("px-2 py-1.5 text-xs font-medium text-muted-foreground", className), ...props }));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
var SelectItem = React28.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs21(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-lg py-2 pl-2 pr-8 text-sm outline-none",
      "focus:bg-muted focus:text-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx38("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx38(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx38(Check6, { className: "h-4 w-4 text-primary" }) }) }),
      /* @__PURE__ */ jsx38(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
var SelectSeparator = React28.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx38(SelectPrimitive.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-border", className), ...props }));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

// src/command.tsx
import * as React29 from "react";
import { Search as Search2 } from "lucide-react";
import { jsx as jsx39, jsxs as jsxs22 } from "react/jsx-runtime";
var Command = React29.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx39("div", { ref, className: cn("bg-card rounded-xl border border-border shadow-lg overflow-hidden", className), ...props }));
Command.displayName = "Command";
var CommandInput = React29.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs22("div", { className: "flex items-center gap-2 border-b border-border px-3 h-11", children: [
  /* @__PURE__ */ jsx39(Search2, { className: "size-4 shrink-0 text-muted-foreground", "aria-hidden": true }),
  /* @__PURE__ */ jsx39("input", { ref, className: cn("flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed", className), ...props })
] }));
CommandInput.displayName = "CommandInput";
var CommandList = React29.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx39("div", { ref, className: cn("max-h-72 overflow-y-auto py-1", className), role: "listbox", ...props }));
CommandList.displayName = "CommandList";
var CommandEmpty = React29.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx39("div", { ref, className: cn("text-sm text-muted-foreground text-center py-6", className), ...props }));
CommandEmpty.displayName = "CommandEmpty";
var CommandGroup = React29.forwardRef(({ className, heading, children, ...props }, ref) => /* @__PURE__ */ jsxs22("div", { ref, className: cn("px-1 py-1", className), role: "group", ...props, children: [
  heading && /* @__PURE__ */ jsx39("div", { className: "px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: heading }),
  children
] }));
CommandGroup.displayName = "CommandGroup";
var CommandItem = React29.forwardRef(({ className, selected, disabled, onSelect, children, ...props }, ref) => /* @__PURE__ */ jsx39(
  "div",
  {
    ref,
    role: "option",
    "aria-selected": selected,
    "aria-disabled": disabled,
    onClick: disabled ? void 0 : onSelect,
    className: cn(
      "flex items-center gap-2 px-2 py-1.5 rounded-md text-sm cursor-pointer transition-colors duration-pg-fast ease-pg-standard select-none",
      selected ? "bg-muted text-foreground" : "text-foreground hover:bg-muted",
      disabled && "pointer-events-none opacity-50",
      className
    ),
    ...props,
    children
  }
));
CommandItem.displayName = "CommandItem";
var CommandSeparator = React29.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx39("div", { ref, className: cn("h-px bg-border my-1 -mx-1", className), ...props }));
CommandSeparator.displayName = "CommandSeparator";
var CommandShortcut = React29.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx39("span", { ref, className: cn("ml-auto text-xs text-muted-foreground tracking-widest", className), ...props }));
CommandShortcut.displayName = "CommandShortcut";

// src/tabs.tsx
import * as React30 from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { jsx as jsx40 } from "react/jsx-runtime";
var Tabs = TabsPrimitive.Root;
var TabsList = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx40(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center gap-0.5 rounded-lg border border-border bg-muted/40 p-0.5 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
var TabsTrigger = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx40(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
      "ring-ring/50 focus-visible:outline-none focus-visible:ring-2",
      "data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      "disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React30.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx40(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-3 outline-none ring-ring/50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

// src/accordion.tsx
import * as React31 from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown as ChevronDown5 } from "lucide-react";
import { jsx as jsx41, jsxs as jsxs23 } from "react/jsx-runtime";
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React31.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx41(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b border-border last:border-b-0", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React31.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx41(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs23(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex w-full items-center justify-between py-4 text-sm font-medium text-foreground",
      "hover:text-primary transition-colors duration-pg-fast ease-pg-standard",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
      "[&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx41(ChevronDown5, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-pg-fast ease-pg-standard" })
    ]
  }
) }));
AccordionTrigger.displayName = "AccordionTrigger";
var AccordionContent = React31.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx41(
  AccordionPrimitive.Content,
  {
    ref,
    className: cn(
      "overflow-hidden text-sm text-muted-foreground",
      "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up",
      className
    ),
    style: {
      "--accordion-content-height": "var(--radix-accordion-content-height)"
    },
    ...props,
    children: /* @__PURE__ */ jsx41("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = "AccordionContent";

// src/alert.tsx
import * as React32 from "react";
import { X as X6, Info as Info2, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { jsx as jsx42, jsxs as jsxs24 } from "react/jsx-runtime";
var variantStyles = {
  info: "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-200",
  success: "bg-green-50 border-green-200 text-green-900 dark:bg-green-950/30 dark:border-green-800 dark:text-green-200",
  warning: "bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/30 dark:border-amber-800 dark:text-amber-200",
  error: "bg-red-50 border-red-200 text-red-900 dark:bg-red-950/30 dark:border-red-800 dark:text-red-200",
  neutral: "bg-muted border-border text-foreground"
};
var variantIcons = {
  info: Info2,
  success: CheckCircle2,
  warning: AlertTriangle,
  error: XCircle,
  neutral: Info2
};
var Alert = React32.forwardRef(
  ({ className, variant = "info", dismissible, onDismiss, children, ...props }, ref) => {
    const Icon2 = variantIcons[variant];
    return /* @__PURE__ */ jsxs24(
      "div",
      {
        ref,
        role: "alert",
        className: cn("relative flex gap-3 rounded-xl border p-4 shadow-sm", variantStyles[variant], className),
        ...props,
        children: [
          /* @__PURE__ */ jsx42(Icon2, { className: "mt-0.5 size-4 shrink-0", "aria-hidden": true }),
          /* @__PURE__ */ jsx42("div", { className: "flex-1 min-w-0", children }),
          dismissible && /* @__PURE__ */ jsx42(
            "button",
            {
              type: "button",
              onClick: onDismiss,
              className: "shrink-0 rounded-md p-0.5 opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
              "aria-label": "Dismiss",
              children: /* @__PURE__ */ jsx42(X6, { className: "size-4" })
            }
          )
        ]
      }
    );
  }
);
Alert.displayName = "Alert";
var AlertTitle = React32.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx42("h5", { ref, className: cn("mb-1 text-sm font-semibold leading-none", className), ...props })
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React32.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx42("p", { ref, className: cn("text-sm opacity-90 leading-relaxed", className), ...props })
);
AlertDescription.displayName = "AlertDescription";
var Banner = React32.forwardRef(
  ({ className, variant = "info", dismissible, onDismiss, children, ...props }, ref) => {
    const Icon2 = variantIcons[variant];
    return /* @__PURE__ */ jsxs24(
      "div",
      {
        ref,
        role: "banner",
        className: cn("flex items-center gap-3 border-b px-4 py-3", variantStyles[variant], className),
        ...props,
        children: [
          /* @__PURE__ */ jsx42(Icon2, { className: "size-4 shrink-0", "aria-hidden": true }),
          /* @__PURE__ */ jsx42("div", { className: "flex-1 min-w-0 text-sm", children }),
          dismissible && /* @__PURE__ */ jsx42(
            "button",
            {
              type: "button",
              onClick: onDismiss,
              className: "shrink-0 rounded-md p-0.5 opacity-60 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
              "aria-label": "Dismiss",
              children: /* @__PURE__ */ jsx42(X6, { className: "size-4" })
            }
          )
        ]
      }
    );
  }
);
Banner.displayName = "Banner";

// src/callout.tsx
import * as React33 from "react";
import { Info as Info3, CheckCircle2 as CheckCircle22, AlertTriangle as AlertTriangle2, XCircle as XCircle2, Sparkles } from "lucide-react";
import { jsx as jsx43 } from "react/jsx-runtime";
var variantStyles2 = {
  info: "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-200",
  success: "bg-green-50 border-green-200 text-green-900 dark:bg-green-950/30 dark:border-green-800 dark:text-green-200",
  warning: "bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/30 dark:border-amber-800 dark:text-amber-200",
  error: "bg-red-50 border-red-200 text-red-900 dark:bg-red-950/30 dark:border-red-800 dark:text-red-200",
  neutral: "bg-muted border-border text-foreground",
  discovery: "bg-purple-50 border-purple-200 text-purple-900 dark:bg-purple-950/30 dark:border-purple-800 dark:text-purple-200"
};
var variantIcons2 = {
  info: Info3,
  success: CheckCircle22,
  warning: AlertTriangle2,
  error: XCircle2,
  neutral: Info3,
  discovery: Sparkles
};
var Callout = React33.forwardRef(
  ({ className, variant = "info", children, ...props }, ref) => /* @__PURE__ */ jsx43("div", { ref, className: cn("flex gap-3 rounded-xl border p-4", variantStyles2[variant], className), ...props, children })
);
Callout.displayName = "Callout";
var CalloutIcon = React33.forwardRef(
  ({ className, variant = "info", ...props }, ref) => {
    const Icon2 = variantIcons2[variant];
    return /* @__PURE__ */ jsx43("div", { ref, className: cn("mt-0.5 shrink-0", className), ...props, children: /* @__PURE__ */ jsx43(Icon2, { className: "size-4", "aria-hidden": true }) });
  }
);
CalloutIcon.displayName = "CalloutIcon";
var CalloutTitle = React33.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx43("p", { ref, className: cn("text-sm font-semibold", className), ...props })
);
CalloutTitle.displayName = "CalloutTitle";
var CalloutText = React33.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx43("p", { ref, className: cn("mt-1 text-sm opacity-90 leading-relaxed", className), ...props })
);
CalloutText.displayName = "CalloutText";

// src/section-message.tsx
import * as React34 from "react";
import { Info as Info4, CheckCircle2 as CheckCircle23, AlertTriangle as AlertTriangle3, XCircle as XCircle3, Sparkles as Sparkles2 } from "lucide-react";
import { jsx as jsx44, jsxs as jsxs25 } from "react/jsx-runtime";
var variantConfig = {
  info: {
    border: "border-l-blue-500",
    bg: "bg-blue-50/60 dark:bg-blue-950/20",
    icon: Info4,
    iconColor: "text-blue-500 dark:text-blue-400"
  },
  success: {
    border: "border-l-green-500",
    bg: "bg-green-50/60 dark:bg-green-950/20",
    icon: CheckCircle23,
    iconColor: "text-green-500 dark:text-green-400"
  },
  warning: {
    border: "border-l-amber-500",
    bg: "bg-amber-50/60 dark:bg-amber-950/20",
    icon: AlertTriangle3,
    iconColor: "text-amber-500 dark:text-amber-400"
  },
  error: {
    border: "border-l-red-500",
    bg: "bg-red-50/60 dark:bg-red-950/20",
    icon: XCircle3,
    iconColor: "text-red-500 dark:text-red-400"
  },
  discovery: {
    border: "border-l-purple-500",
    bg: "bg-purple-50/60 dark:bg-purple-950/20",
    icon: Sparkles2,
    iconColor: "text-purple-500 dark:text-purple-400"
  }
};
var SectionMessageVariantContext = React34.createContext("info");
var SectionMessage = React34.forwardRef(
  ({ className, variant = "info", children, ...props }, ref) => {
    const config = variantConfig[variant];
    const Icon2 = config.icon;
    return /* @__PURE__ */ jsx44(SectionMessageVariantContext.Provider, { value: variant, children: /* @__PURE__ */ jsxs25(
      "div",
      {
        ref,
        role: "region",
        className: cn(
          "flex w-full gap-4 rounded-xl border border-l-4 border-border p-5 shadow-sm transition-colors duration-pg-fast ease-pg-standard",
          config.border,
          config.bg,
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx44(
            Icon2,
            {
              className: cn("mt-0.5 size-5 shrink-0", config.iconColor),
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsx44("div", { className: "flex-1 min-w-0", children })
        ]
      }
    ) });
  }
);
SectionMessage.displayName = "SectionMessage";
var SectionMessageTitle = React34.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx44(
  "h4",
  {
    ref,
    className: cn("text-sm font-semibold text-foreground mb-1", className),
    ...props
  }
));
SectionMessageTitle.displayName = "SectionMessageTitle";
var SectionMessageContent = React34.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx44(
  "div",
  {
    ref,
    className: cn("text-sm text-muted-foreground leading-relaxed", className),
    ...props
  }
));
SectionMessageContent.displayName = "SectionMessageContent";
var SectionMessageActions = React34.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx44(
  "div",
  {
    ref,
    className: cn("flex flex-wrap gap-2 mt-3", className),
    ...props
  }
));
SectionMessageActions.displayName = "SectionMessageActions";

// src/spinner.tsx
import * as React35 from "react";
import { Loader2 as Loader22 } from "lucide-react";
import { jsx as jsx45, jsxs as jsxs26 } from "react/jsx-runtime";
var sizeMap = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 28,
  xl: 36
};
var colorMap = {
  primary: "text-primary",
  muted: "text-muted-foreground",
  white: "text-white",
  inherit: ""
};
var Spinner = React35.forwardRef(
  ({ className, size = "md", color = "primary", ...props }, ref) => {
    const px = sizeMap[size];
    return /* @__PURE__ */ jsxs26(
      "span",
      {
        ref,
        "data-slot": "spinner",
        role: "status",
        "aria-label": "Loading",
        className: cn("inline-flex items-center justify-center", colorMap[color], className),
        ...props,
        children: [
          /* @__PURE__ */ jsx45(
            Loader22,
            {
              width: px,
              height: px,
              className: "animate-spin",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsx45("span", { className: "sr-only", children: "Loading..." })
        ]
      }
    );
  }
);
Spinner.displayName = "Spinner";

// src/progress.tsx
import * as React36 from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { Check as Check7 } from "lucide-react";
import { jsx as jsx46, jsxs as jsxs27 } from "react/jsx-runtime";
var variantTrack = {
  default: "bg-primary",
  success: "bg-green-500",
  warning: "bg-amber-500",
  error: "bg-red-500"
};
var sizeClasses3 = {
  xs: "h-1",
  sm: "h-1.5",
  md: "h-2",
  lg: "h-3"
};
var Progress = React36.forwardRef(({ className, value, variant = "default", size = "md", label, ...props }, ref) => /* @__PURE__ */ jsxs27("div", { className: "w-full", children: [
  /* @__PURE__ */ jsx46(
    ProgressPrimitive.Root,
    {
      ref,
      className: cn("relative w-full overflow-hidden rounded-full bg-muted", sizeClasses3[size], className),
      ...props,
      value,
      children: /* @__PURE__ */ jsx46(
        ProgressPrimitive.Indicator,
        {
          className: cn("h-full w-full flex-1 transition-all duration-pg-slow ease-pg-standard", variantTrack[variant]),
          style: { transform: `translateX(-${100 - (value ?? 0)}%)` }
        }
      )
    }
  ),
  label && /* @__PURE__ */ jsxs27("p", { className: "mt-1 text-xs text-muted-foreground text-right", children: [
    value ?? 0,
    "%"
  ] })
] }));
Progress.displayName = "Progress";
var ProgressTracker = React36.forwardRef(
  ({ className, steps, ...props }, ref) => /* @__PURE__ */ jsx46("div", { ref, className: cn("flex items-start", className), ...props, children: steps.map((step, i) => /* @__PURE__ */ jsxs27(React36.Fragment, { children: [
    /* @__PURE__ */ jsxs27("div", { className: "flex flex-col items-center gap-1.5 min-w-0", children: [
      /* @__PURE__ */ jsx46("div", { className: cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors",
        step.status === "complete" && "bg-primary border-primary text-primary-foreground",
        step.status === "current" && "bg-primary/10 border-primary text-primary",
        step.status === "upcoming" && "bg-card border-border text-muted-foreground"
      ), children: step.status === "complete" ? /* @__PURE__ */ jsx46(Check7, { className: "size-4", strokeWidth: 2.5 }) : i + 1 }),
      /* @__PURE__ */ jsxs27("div", { className: "text-center px-1", children: [
        /* @__PURE__ */ jsx46("p", { className: cn("text-xs font-medium", step.status === "upcoming" ? "text-muted-foreground" : "text-foreground"), children: step.label }),
        step.description && /* @__PURE__ */ jsx46("p", { className: "text-[11px] text-muted-foreground mt-0.5", children: step.description })
      ] })
    ] }),
    i < steps.length - 1 && /* @__PURE__ */ jsx46("div", { className: "flex-1 mt-4 mx-1", children: /* @__PURE__ */ jsx46("div", { className: cn("h-0.5 w-full rounded-full transition-colors", step.status === "complete" ? "bg-primary" : "bg-border") }) })
  ] }, i)) })
);
ProgressTracker.displayName = "ProgressTracker";

// src/skeleton.tsx
import { jsx as jsx47, jsxs as jsxs28 } from "react/jsx-runtime";
function Shimmer({ className, rounded = "md" }) {
  const r = { sm: "rounded", md: "rounded-lg", lg: "rounded-xl", full: "rounded-full" }[rounded];
  return /* @__PURE__ */ jsx47("div", { className: cn("shimmer", r, className) });
}
function StatCardSkeleton() {
  return /* @__PURE__ */ jsxs28("div", { className: "bg-card text-card-foreground rounded-xl p-5 flex flex-col gap-3 border border-border shadow-sm", children: [
    /* @__PURE__ */ jsxs28("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx47(Shimmer, { className: "h-3 w-28" }),
      /* @__PURE__ */ jsx47(Shimmer, { className: "h-10 w-10", rounded: "full" })
    ] }),
    /* @__PURE__ */ jsx47(Shimmer, { className: "h-9 w-44 mt-1" }),
    /* @__PURE__ */ jsx47(Shimmer, { className: "h-3 w-32" })
  ] });
}
function TableRowSkeleton({
  cols = 6,
  comfortable = false,
  density: densityProp,
  snug = false
}) {
  const density = densityProp ?? (comfortable ? "comfortable" : "default");
  const cellPad = density === "comfortable" ? "px-5 py-4" : density === "compact" ? snug ? "pl-1.5 pr-2.5 py-2.5" : "px-3 py-2.5" : "px-4 py-3.5";
  return /* @__PURE__ */ jsx47(
    "tr",
    {
      className: cn(
        "border-b border-border/60",
        density === "comfortable" && "min-h-[56px]",
        density === "compact" && "min-h-[44px]"
      ),
      children: Array.from({ length: cols }).map((_, i) => /* @__PURE__ */ jsx47("td", { className: cellPad, children: /* @__PURE__ */ jsx47(Shimmer, { className: cn("h-3.5", i === 0 ? "w-20" : i === cols - 1 ? "w-14" : "w-28") }) }, i))
    }
  );
}
function ChartSkeleton({ height = "h-48" }) {
  return /* @__PURE__ */ jsx47("div", { className: cn("flex items-end gap-2 px-2", height), children: [55, 72, 40, 88, 65, 82, 48, 95, 60, 70].map((h, i) => /* @__PURE__ */ jsx47("div", { className: "flex-1 shimmer rounded-t-md", style: { height: `${h}%` } }, i)) });
}

// src/empty-state.tsx
import { Inbox } from "lucide-react";
import { jsx as jsx48, jsxs as jsxs29 } from "react/jsx-runtime";
function EmptyState({
  icon: Icon2 = Inbox,
  title,
  description,
  action,
  className
}) {
  return /* @__PURE__ */ jsxs29("div", { className: cn("flex flex-col items-center justify-center py-16 px-4 text-center", className), children: [
    /* @__PURE__ */ jsx48("div", { className: "w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx48(Icon2, { className: "w-6 h-6 text-slate-400" }) }),
    /* @__PURE__ */ jsx48("h3", { className: "text-sm font-semibold text-slate-700 mb-1", children: title }),
    description && /* @__PURE__ */ jsx48("p", { className: "text-xs text-slate-500 max-w-xs leading-relaxed", children: description }),
    action && /* @__PURE__ */ jsx48("div", { className: "mt-4", children: action })
  ] });
}

// src/data-table.tsx
import { ChevronLeft as ChevronLeft3, ChevronRight as ChevronRight5 } from "lucide-react";
import { useState as useState6 } from "react";
import { jsx as jsx49, jsxs as jsxs30 } from "react/jsx-runtime";
function getPageRange(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = [1];
  if (current > 3) pages.push("\u2026");
  const lo = Math.max(2, current - 1);
  const hi = Math.min(total - 1, current + 1);
  for (let p = lo; p <= hi; p++) pages.push(p);
  if (current < total - 2) pages.push("\u2026");
  pages.push(total);
  return pages;
}
function DataTable({
  columns,
  data,
  isLoading = false,
  skeletonRows = 6,
  emptyTitle = "No data yet",
  emptyDescription,
  pageSize = 10,
  page: controlledPage,
  onPageChange,
  totalRows,
  className,
  rowKey,
  rowCta,
  density = "default",
  tableLayout = "fixed",
  theadClassName,
  headerStyle = "surface",
  footerSummary = "range",
  footerCountLabels = { singular: "item", plural: "items" },
  snug = false
}) {
  const isControlled = controlledPage !== void 0;
  const [internalPage, setInternalPage] = useState6(1);
  const page = isControlled ? controlledPage : internalPage;
  const setPage = isControlled ? (p) => onPageChange?.(p) : (p) => setInternalPage(p);
  const total = totalRows ?? data.length;
  const totalPages = Math.ceil(total / pageSize);
  const paginated = isControlled ? data : data.slice((page - 1) * pageSize, page * pageSize);
  const comfortable = density === "comfortable";
  const compact = density === "compact";
  const compactCellPad = compact ? snug ? "pl-1.5 pr-2.5 py-2.5" : "px-3 py-2.5" : "px-4 py-3.5";
  const cellPad = comfortable ? "px-5 py-4" : compactCellPad;
  const headPad = comfortable ? "px-5 py-4" : compactCellPad;
  const footerPad = comfortable ? "px-5 py-4" : compact ? "px-4 py-2.5" : "px-4 py-3.5";
  const headText = comfortable ? "text-[12px] font-medium text-muted-foreground tracking-normal" : compact ? "text-[11px] font-semibold text-muted-foreground" : "text-[11px] font-semibold text-foreground/75 dark:text-foreground/85";
  const rowCtaColWidth = compact ? 108 : 130;
  return /* @__PURE__ */ jsxs30(
    "div",
    {
      className: cn(
        "bg-card text-card-foreground rounded-xl overflow-hidden border border-border",
        className
      ),
      children: [
        /* @__PURE__ */ jsx49(
          "div",
          {
            className: cn(
              "overflow-x-auto",
              "[&::-webkit-scrollbar]:h-[4px] [&::-webkit-scrollbar-track]:bg-transparent",
              "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-transparent",
              "hover:[&::-webkit-scrollbar-thumb]:bg-border dark:hover:[&::-webkit-scrollbar-thumb]:bg-muted-foreground/35"
            ),
            style: { scrollbarWidth: "thin", scrollbarColor: "var(--border) transparent" },
            children: /* @__PURE__ */ jsxs30(
              "table",
              {
                className: cn(tableLayout === "auto" && "min-w-[920px]"),
                style: { tableLayout, width: "100%" },
                children: [
                  tableLayout === "fixed" && /* @__PURE__ */ jsxs30("colgroup", { children: [
                    columns.map((col) => /* @__PURE__ */ jsx49(
                      "col",
                      {
                        style: {
                          width: col.width ?? (col.minWidth != null ? `${col.minWidth}px` : void 0),
                          minWidth: col.minWidth,
                          maxWidth: col.maxWidth
                        }
                      },
                      col.key
                    )),
                    rowCta ? /* @__PURE__ */ jsx49("col", { style: { width: rowCtaColWidth } }) : null
                  ] }),
                  /* @__PURE__ */ jsx49(
                    "thead",
                    {
                      className: cn(
                        headerStyle === "surface" && "bg-muted/35",
                        headerStyle === "minimal" && "bg-transparent",
                        theadClassName
                      ),
                      children: /* @__PURE__ */ jsxs30(
                        "tr",
                        {
                          className: cn(
                            "border-b",
                            headerStyle === "surface" ? "border-border" : "border-border/70"
                          ),
                          children: [
                            columns.map((col) => /* @__PURE__ */ jsx49(
                              "th",
                              {
                                className: cn(
                                  headPad,
                                  headText,
                                  "whitespace-nowrap align-middle",
                                  col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left",
                                  col.cellClassName
                                ),
                                children: col.header
                              },
                              col.key
                            )),
                            rowCta ? /* @__PURE__ */ jsx49("th", { className: cn(headPad, "w-[1%]"), "aria-hidden": true }) : null
                          ]
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx49("tbody", { children: isLoading ? Array.from({ length: skeletonRows }).map((_, i) => /* @__PURE__ */ jsx49(
                    TableRowSkeleton,
                    {
                      cols: columns.length + (rowCta ? 1 : 0),
                      density,
                      snug
                    },
                    i
                  )) : paginated.length === 0 ? /* @__PURE__ */ jsx49("tr", { children: /* @__PURE__ */ jsx49("td", { colSpan: columns.length + (rowCta ? 1 : 0), children: /* @__PURE__ */ jsx49(EmptyState, { title: emptyTitle, description: emptyDescription }) }) }) : paginated.map((row, i) => /* @__PURE__ */ jsxs30(
                    "tr",
                    {
                      className: cn(
                        "group transition-colors duration-150 border-b border-border/60 last:border-b-0",
                        comfortable && "min-h-[56px]",
                        compact && "min-h-[44px]",
                        "hover:bg-muted/40 dark:hover:bg-muted/25",
                        rowCta && "hover:shadow-[0_1px_0_rgba(0,0,0,0.04)] dark:hover:shadow-none"
                      ),
                      children: [
                        columns.map((col) => /* @__PURE__ */ jsx49(
                          "td",
                          {
                            className: cn(
                              cellPad,
                              "align-middle",
                              comfortable ? cn(
                                "text-[13px] leading-snug",
                                !col.wrap && "whitespace-nowrap"
                              ) : compact ? cn(
                                "text-[13px] leading-tight",
                                !col.wrap && "whitespace-nowrap",
                                "overflow-hidden"
                              ) : "whitespace-nowrap overflow-hidden",
                              col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left",
                              col.cellClassName
                            ),
                            children: col.render(row, i)
                          },
                          col.key
                        )),
                        rowCta ? /* @__PURE__ */ jsx49(
                          "td",
                          {
                            className: cn(
                              cellPad,
                              "text-left align-middle whitespace-nowrap",
                              comfortable ? "pl-2 pr-5" : compact ? snug ? "pl-1.5 pr-2" : "pl-1.5 pr-3" : "pl-3 pr-4"
                            ),
                            children: /* @__PURE__ */ jsx49(
                              "button",
                              {
                                type: "button",
                                onClick: () => rowCta.onClick?.(row),
                                className: cn(
                                  "opacity-0 group-hover:opacity-100 transition-opacity duration-150 inline-flex items-center font-medium text-foreground bg-card rounded-lg border border-border hover:border-muted-foreground/50 whitespace-nowrap shadow-sm",
                                  compact ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-[12px]"
                                ),
                                children: rowCta.label
                              }
                            )
                          }
                        ) : null
                      ]
                    },
                    rowKey(row)
                  )) })
                ]
              }
            )
          }
        ),
        !isLoading && paginated.length > 0 && /* @__PURE__ */ jsxs30(
          "div",
          {
            className: cn(
              "flex items-center gap-4 flex-wrap border-t border-border",
              footerPad,
              footerSummary === "count" && totalPages <= 1 ? "justify-start" : "justify-between"
            ),
            children: [
              footerSummary === "count" ? /* @__PURE__ */ jsxs30("span", { className: "text-[12px] text-muted-foreground tabular-nums", children: [
                /* @__PURE__ */ jsx49("span", { className: "font-medium text-foreground", children: total }),
                " ",
                total === 1 ? footerCountLabels.singular : footerCountLabels.plural
              ] }) : /* @__PURE__ */ jsxs30("span", { className: "text-[12px] text-muted-foreground tabular-nums", children: [
                "Showing",
                " ",
                /* @__PURE__ */ jsxs30("span", { className: "text-foreground font-medium", children: [
                  Math.min((page - 1) * pageSize + 1, total),
                  "\u2013",
                  Math.min(page * pageSize, total)
                ] }),
                " ",
                "of",
                " ",
                /* @__PURE__ */ jsx49("span", { className: "text-foreground font-medium", children: total.toLocaleString() }),
                " ",
                total !== 1 ? "results" : "result"
              ] }),
              (footerSummary === "range" || footerSummary === "count") && totalPages > 1 && /* @__PURE__ */ jsxs30("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx49(
                  "button",
                  {
                    onClick: () => setPage(Math.max(1, page - 1)),
                    disabled: page === 1,
                    className: "w-7 h-7 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
                    children: /* @__PURE__ */ jsx49(ChevronLeft3, { className: "w-3.5 h-3.5" })
                  }
                ),
                getPageRange(page, totalPages).map(
                  (p, idx) => p === "\u2026" ? /* @__PURE__ */ jsx49(
                    "span",
                    {
                      className: "w-7 h-7 flex items-center justify-center text-[12px] text-muted-foreground select-none",
                      children: "\u2026"
                    },
                    `ellipsis-${idx}`
                  ) : /* @__PURE__ */ jsx49(
                    "button",
                    {
                      onClick: () => setPage(p),
                      className: cn(
                        "w-7 h-7 rounded-md text-[12px] font-medium transition-colors tabular-nums flex items-center justify-center",
                        page === p ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      ),
                      children: p
                    },
                    p
                  )
                ),
                /* @__PURE__ */ jsx49(
                  "button",
                  {
                    onClick: () => setPage(Math.min(totalPages, page + 1)),
                    disabled: page === totalPages,
                    className: "w-7 h-7 rounded-md flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
                    children: /* @__PURE__ */ jsx49(ChevronRight5, { className: "w-3.5 h-3.5" })
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}

// src/page-header.tsx
import { jsx as jsx50, jsxs as jsxs31 } from "react/jsx-runtime";
function PageHeader({ title, titleAriaLabel, subtitle, actions, className }) {
  return /* @__PURE__ */ jsxs31("div", { className: cn("flex items-start justify-between mb-6", className), children: [
    /* @__PURE__ */ jsxs31("div", { children: [
      /* @__PURE__ */ jsx50(
        "h1",
        {
          className: "text-xl font-semibold text-foreground tracking-tight flex items-center gap-2.5 flex-wrap",
          ...titleAriaLabel ? { "aria-label": titleAriaLabel } : {},
          children: title
        }
      ),
      subtitle && /* @__PURE__ */ jsx50("p", { className: "text-sm text-muted-foreground mt-0.5", children: subtitle })
    ] }),
    actions && /* @__PURE__ */ jsx50("div", { className: "flex items-center gap-2", children: actions })
  ] });
}

// src/code.tsx
import { forwardRef as forwardRef41, useState as useState7, useCallback as useCallback2 } from "react";
import { Check as Check8, Copy } from "lucide-react";
import { jsx as jsx51, jsxs as jsxs32 } from "react/jsx-runtime";
var Code = forwardRef41(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx51(
      "code",
      {
        ref,
        className: cn(
          "rounded-md bg-muted px-1.5 py-0.5 font-mono text-[13px] text-foreground ring-1 ring-border",
          className
        ),
        ...props,
        children
      }
    );
  }
);
Code.displayName = "Code";
var CodeBlock = forwardRef41(
  ({
    code,
    filename,
    language,
    hideCopy = false,
    className,
    ...props
  }, ref) => {
    const [copied, setCopied] = useState7(false);
    const handleCopy = useCallback2(async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        const timer = setTimeout(() => setCopied(false), 2e3);
        return () => clearTimeout(timer);
      } catch {
      }
    }, [code]);
    const hasHeader = Boolean(filename || language);
    return /* @__PURE__ */ jsxs32(
      "div",
      {
        ref,
        className: cn(
          "relative overflow-hidden bg-[#0f1117] text-[#e5e7eb]",
          hasHeader ? "rounded-xl" : "rounded-xl",
          className
        ),
        ...props,
        children: [
          hasHeader && /* @__PURE__ */ jsxs32("div", { className: "flex items-center justify-between bg-[#1a1f2e] px-4 py-2 border-b border-[#2a3441]", children: [
            /* @__PURE__ */ jsxs32("div", { className: "flex items-center gap-2.5", children: [
              filename && /* @__PURE__ */ jsx51("span", { className: "text-[#9ca3af] text-xs font-mono", children: filename }),
              language && /* @__PURE__ */ jsx51("span", { className: "rounded-md bg-[#2a3441] px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#6b7280]", children: language })
            ] }),
            !hideCopy && /* @__PURE__ */ jsx51(CopyButton, { copied, onClick: handleCopy, inHeader: true })
          ] }),
          /* @__PURE__ */ jsxs32("div", { className: "relative", children: [
            /* @__PURE__ */ jsx51("pre", { className: "overflow-x-auto p-4 font-mono text-[13px] leading-relaxed", children: /* @__PURE__ */ jsx51("code", { children: code }) }),
            !hasHeader && !hideCopy && /* @__PURE__ */ jsx51("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsx51(CopyButton, { copied, onClick: handleCopy }) })
          ] })
        ]
      }
    );
  }
);
CodeBlock.displayName = "CodeBlock";
function CopyButton({ copied, onClick, inHeader = false }) {
  return /* @__PURE__ */ jsx51(
    "button",
    {
      type: "button",
      "aria-label": copied ? "Copied" : "Copy code",
      onClick,
      className: cn(
        "inline-flex items-center justify-center rounded-md transition-colors duration-pg-fast ease-pg-standard",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
        inHeader ? "size-6 text-[#6b7280] hover:bg-[#2a3441] hover:text-[#9ca3af]" : "size-7 bg-[#1a1f2e]/80 text-[#6b7280] hover:bg-[#1a1f2e] hover:text-[#9ca3af]"
      ),
      children: copied ? /* @__PURE__ */ jsx51(Check8, { className: "size-3.5 text-green-400" }) : /* @__PURE__ */ jsx51(Copy, { className: "size-3.5" })
    }
  );
}

// src/avatar.tsx
import * as React37 from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { jsx as jsx52 } from "react/jsx-runtime";
var Avatar = React37.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx52(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn("relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full border border-border bg-muted", className),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React37.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx52(AvatarPrimitive.Image, { ref, className: cn("aspect-square h-full w-full object-cover", className), ...props }));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React37.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx52(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted text-xs font-medium text-muted-foreground", className),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// src/avatar-group.tsx
import * as React38 from "react";
import { jsx as jsx53, jsxs as jsxs33 } from "react/jsx-runtime";
var sizeClasses4 = {
  sm: "h-6 w-6",
  md: "h-8 w-8",
  lg: "h-10 w-10"
};
var fontSizeClasses = {
  sm: "text-[10px]",
  md: "text-xs",
  lg: "text-xs"
};
var overlapClasses = {
  sm: "-ml-2",
  md: "-ml-2",
  lg: "-ml-2"
};
var AvatarGroup = React38.forwardRef(
  ({ avatars, max = 4, size = "md", className, ...props }, ref) => {
    const visible = avatars.slice(0, max);
    const overflowCount = avatars.length - max;
    const totalSlots = visible.length + (overflowCount > 0 ? 1 : 0);
    return /* @__PURE__ */ jsxs33(
      "div",
      {
        ref,
        className: cn("flex items-center", className),
        ...props,
        children: [
          visible.map((avatar, index) => {
            const zIndex = totalSlots - index;
            return /* @__PURE__ */ jsxs33(
              Avatar,
              {
                className: cn(
                  sizeClasses4[size],
                  overlapClasses[size],
                  "ring-2 ring-background border border-border shrink-0 transition-[margin] duration-[var(--duration-pg-fast,150ms)] ease-[var(--ease-pg-standard,cubic-bezier(0.4,0,0.2,1))] first:ml-0"
                ),
                style: { zIndex },
                children: [
                  avatar.src && /* @__PURE__ */ jsx53(AvatarImage, { src: avatar.src, alt: avatar.alt ?? avatar.fallback }),
                  /* @__PURE__ */ jsx53(
                    AvatarFallback,
                    {
                      className: cn(
                        fontSizeClasses[size],
                        "font-medium"
                      ),
                      children: avatar.fallback
                    }
                  )
                ]
              },
              index
            );
          }),
          overflowCount > 0 && /* @__PURE__ */ jsxs33(
            "div",
            {
              className: cn(
                sizeClasses4[size],
                overlapClasses[size],
                fontSizeClasses[size],
                "relative shrink-0 flex items-center justify-center rounded-full border border-border bg-muted text-muted-foreground font-medium ring-2 ring-background transition-[margin] duration-[var(--duration-pg-fast,150ms)] ease-[var(--ease-pg-standard,cubic-bezier(0.4,0,0.2,1))]"
              ),
              style: { zIndex: 0 },
              children: [
                "+",
                overflowCount
              ]
            }
          )
        ]
      }
    );
  }
);
AvatarGroup.displayName = "AvatarGroup";

// src/avatar-tag.tsx
import * as React39 from "react";
import * as AvatarPrimitive2 from "@radix-ui/react-avatar";
import { X as X7 } from "lucide-react";
import { jsx as jsx54, jsxs as jsxs34 } from "react/jsx-runtime";
function getInitials(label) {
  const words = label.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}
var sizeConfig = {
  sm: {
    avatar: "h-[18px] w-[18px]",
    text: "text-[10px]",
    icon: "size-2.5",
    padding: "px-1.5 py-0.5 gap-1"
  },
  md: {
    avatar: "h-5 w-5",
    text: "text-xs",
    icon: "size-3",
    padding: "px-2 py-0.5 gap-1"
  },
  lg: {
    avatar: "h-6 w-6",
    text: "text-sm",
    icon: "size-3.5",
    padding: "px-2.5 py-1 gap-1.5"
  }
};
var AvatarTag = React39.forwardRef(
  ({
    label,
    src,
    alt,
    size = "md",
    onRemove,
    disabled = false,
    className,
    ...props
  }, ref) => {
    const cfg = sizeConfig[size];
    const initials = getInitials(label);
    return /* @__PURE__ */ jsxs34(
      "span",
      {
        ref,
        className: cn(
          "inline-flex items-center rounded-full border border-border bg-card font-medium transition-colors duration-[var(--duration-pg-fast,150ms)] ease-[var(--ease-pg-standard,cubic-bezier(0.4,0,0.2,1))]",
          cfg.padding,
          cfg.text,
          disabled && "opacity-50 cursor-not-allowed",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsxs34(
            AvatarPrimitive2.Root,
            {
              className: cn(
                "relative shrink-0 overflow-hidden rounded-full",
                cfg.avatar
              ),
              children: [
                /* @__PURE__ */ jsx54(
                  AvatarPrimitive2.Image,
                  {
                    src,
                    alt: alt ?? label,
                    className: "aspect-square h-full w-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsx54(
                  AvatarPrimitive2.Fallback,
                  {
                    className: cn(
                      "flex h-full w-full items-center justify-center rounded-full bg-primary/10 text-primary font-semibold leading-none",
                      cfg.text
                    ),
                    children: initials
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx54("span", { className: "leading-none select-none", children: label }),
          onRemove && /* @__PURE__ */ jsx54(
            "button",
            {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                if (!disabled) onRemove();
              },
              disabled,
              className: cn(
                "flex items-center justify-center rounded-full opacity-60 transition-opacity duration-[var(--duration-pg-fast,150ms)] hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
                disabled && "pointer-events-none"
              ),
              "aria-label": `Remove ${label}`,
              children: /* @__PURE__ */ jsx54(X7, { className: cfg.icon })
            }
          )
        ]
      }
    );
  }
);
AvatarTag.displayName = "AvatarTag";

// src/calendar.tsx
import * as React40 from "react";
import { ChevronDown as ChevronDown6, ChevronLeft as ChevronLeft4, ChevronRight as ChevronRight6 } from "lucide-react";
import {
  DayPicker,
  getDefaultClassNames
} from "react-day-picker";
import { jsx as jsx55 } from "react/jsx-runtime";
var cellSize = "[--cell-size:2rem]";
function navButtonClasses(variant) {
  const base = "inline-flex items-center justify-center rounded-lg border font-medium transition-colors duration-pg-fast ease-pg-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35 disabled:pointer-events-none disabled:opacity-50";
  switch (variant) {
    case "outline":
      return cn(
        base,
        "border-border bg-card text-foreground shadow-sm hover:bg-muted"
      );
    case "ghost":
    default:
      return cn(
        base,
        "border-transparent bg-transparent text-foreground hover:bg-muted focus-visible:bg-muted/80 active:bg-muted/90"
      );
  }
}
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  showWeekNumber,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ jsx55(
    DayPicker,
    {
      showOutsideDays,
      showWeekNumber,
      locale,
      className: cn(
        "group/calendar bg-background p-3",
        cellSize,
        "[[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString(locale?.code ?? "default", { month: "short" }),
        ...formatters
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-4 md:flex-row",
          defaultClassNames.months
        ),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          navButtonClasses(buttonVariant),
          "h-[var(--cell-size)] w-[var(--cell-size)] min-h-0 min-w-0 shrink-0 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          navButtonClasses(buttonVariant),
          "h-[var(--cell-size)] w-[var(--cell-size)] min-h-0 min-w-0 shrink-0 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-[var(--cell-size)] w-full items-center justify-center px-[var(--cell-size)]",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-[var(--cell-size)] w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative rounded-md border border-border bg-card shadow-sm focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/35",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn("absolute inset-0 cursor-pointer opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "font-medium select-none",
          captionLayout === "label" ? "text-sm" : "flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        month_grid: cn("w-full border-collapse", defaultClassNames.month_grid),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 rounded-md text-[0.8rem] font-normal text-muted-foreground select-none",
          defaultClassNames.weekday
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn(
          "w-[var(--cell-size)] select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] text-muted-foreground select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full p-0 text-center select-none",
          "[&:last-child[data-selected=true]_button]:rounded-r-md",
          showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-md" : "[&:first-child[data-selected=true]_button]:rounded-l-md",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none bg-accent/60", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "rounded-md bg-muted text-foreground data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: rootClass, rootRef, ...rootProps }) => /* @__PURE__ */ jsx55(
          "div",
          {
            "data-slot": "calendar",
            ref: rootRef,
            className: cn(rootClass),
            ...rootProps
          }
        ),
        Chevron: ({ className: chClass, orientation, ...chProps }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsx55(ChevronLeft4, { className: cn("size-4", chClass), ...chProps });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsx55(ChevronRight6, { className: cn("size-4", chClass), ...chProps });
          }
          return /* @__PURE__ */ jsx55(ChevronDown6, { className: cn("size-4", chClass), ...chProps });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...weekProps }) => /* @__PURE__ */ jsx55("th", { ...weekProps, children: /* @__PURE__ */ jsx55("div", { className: "flex h-[var(--cell-size)] w-[var(--cell-size)] min-h-[var(--cell-size)] min-w-[var(--cell-size)] items-center justify-center text-center text-xs tabular-nums", children }) }),
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  const ref = React40.useRef(null);
  React40.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsx55(
    Button,
    {
      ref,
      type: "button",
      variant: "ghost",
      ...props,
      disabled: Boolean(modifiers.disabled) || props.disabled,
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "flex aspect-square h-auto min-h-[var(--cell-size)] w-full min-w-[var(--cell-size)] flex-col gap-1 rounded-md p-0 font-normal leading-none data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground hover:bg-muted/80 dark:hover:bg-muted/50 [&>span]:text-xs [&>span]:opacity-70",
        "group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/35",
        defaultClassNames.day,
        className
      )
    }
  );
}

// src/date-picker.tsx
import { useState as useState8, useRef as useRef4, useEffect as useEffect3 } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft as ChevronLeft5, ChevronRight as ChevronRight7, ChevronDown as ChevronDown7, CalendarDays } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { jsx as jsx56, jsxs as jsxs35 } from "react/jsx-runtime";
var MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
var DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
var PRIMARY = "#0061E3";
var PANEL_W = 296;
function daysInMonth(y, m) {
  return new Date(y, m + 1, 0).getDate();
}
function firstDayOf(y, m) {
  return new Date(y, m, 1).getDay();
}
function parseYMD(s) {
  if (!s) return null;
  const [y, m, d] = s.split("-").map(Number);
  if (!y || !m || !d) return null;
  return { y, m: m - 1, d };
}
function toYMD(y, m, d) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}
function displayDate(ymd) {
  const p = parseYMD(ymd);
  if (!p) return "";
  return `${String(p.d).padStart(2, "0")} ${MONTHS[p.m].slice(0, 3)} ${p.y}`;
}
function DatePicker({ value, onChange, placeholder = "Select date", className, min, label }) {
  const today = /* @__PURE__ */ new Date();
  const parsed = parseYMD(value);
  const [open, setOpen] = useState8(false);
  const [panelPos, setPanelPos] = useState8({ top: 0, left: 0 });
  const [viewYear, setViewYear] = useState8(parsed?.y ?? today.getFullYear());
  const [viewMonth, setViewMonth] = useState8(parsed?.m ?? today.getMonth());
  const [yearMenu, setYearMenu] = useState8(false);
  const [monthMenu, setMonthMenu] = useState8(false);
  const [mounted, setMounted] = useState8(false);
  const triggerRef = useRef4(null);
  const panelRef = useRef4(null);
  useEffect3(() => {
    setMounted(true);
  }, []);
  useEffect3(() => {
    if (parsed) {
      setViewYear(parsed.y);
      setViewMonth(parsed.m);
    }
  }, [value]);
  function openPanel() {
    if (!triggerRef.current) return;
    const trigger = triggerRef.current;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const PANEL_H2 = 340;
    trigger.scrollIntoView({ block: "center", behavior: "auto" });
    requestAnimationFrame(() => {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();
      let left = rect.left;
      if (left + PANEL_W > vw - 8) left = vw - PANEL_W - 8;
      let top = rect.bottom + 6;
      if (top + PANEL_H2 > vh - 8) top = rect.top - PANEL_H2 - 6;
      setPanelPos({ top, left });
      setOpen(true);
    });
  }
  useEffect3(() => {
    if (!open) return;
    function handler(e) {
      const inTrigger = triggerRef.current?.contains(e.target);
      const inPanel = panelRef.current?.contains(e.target);
      if (!inTrigger && !inPanel) {
        setOpen(false);
        setYearMenu(false);
        setMonthMenu(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);
  function prevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else setViewMonth((m) => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else setViewMonth((m) => m + 1);
  }
  const totalDays = daysInMonth(viewYear, viewMonth);
  const firstDay = firstDayOf(viewYear, viewMonth);
  const prevTotal = daysInMonth(viewYear, viewMonth === 0 ? 11 : viewMonth - 1);
  const minParsed = parseYMD(min ?? "");
  function isDisabled(y, m, d) {
    if (!minParsed) return false;
    return new Date(y, m, d) < new Date(minParsed.y, minParsed.m, minParsed.d);
  }
  const cells = [];
  for (let i = 0; i < firstDay; i++) {
    const d = prevTotal - firstDay + 1 + i;
    const m = viewMonth === 0 ? 11 : viewMonth - 1;
    const y = viewMonth === 0 ? viewYear - 1 : viewYear;
    cells.push({ d, m, y, current: false });
  }
  for (let d = 1; d <= totalDays; d++) cells.push({ d, m: viewMonth, y: viewYear, current: true });
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    const m = viewMonth === 11 ? 0 : viewMonth + 1;
    const y = viewMonth === 11 ? viewYear + 1 : viewYear;
    cells.push({ d, m, y, current: false });
  }
  const years = Array.from({ length: 15 }, (_, i) => today.getFullYear() - 2 + i);
  function selectDay(cell) {
    if (!cell.current) {
      setViewYear(cell.y);
      setViewMonth(cell.m);
    }
    if (cell.current && isDisabled(cell.y, cell.m, cell.d)) return;
    onChange(toYMD(cell.y, cell.m, cell.d));
    setOpen(false);
  }
  const isToday = (c) => c.d === today.getDate() && c.m === today.getMonth() && c.y === today.getFullYear();
  const isSelected = (c) => !!parsed && c.d === parsed.d && c.m === parsed.m && c.y === parsed.y;
  const panel = /* @__PURE__ */ jsx56(AnimatePresence, { children: open && /* @__PURE__ */ jsxs35(
    motion.div,
    {
      ref: panelRef,
      initial: { opacity: 0, scale: 0.97, y: -6 },
      animate: { opacity: 1, scale: 1, y: 0 },
      exit: { opacity: 0, scale: 0.97, y: -6 },
      transition: { duration: 0.16, ease: [0.16, 1, 0.3, 1] },
      className: "isolate rounded-2xl border border-border bg-popover text-popover-foreground shadow-lg select-none dark:shadow-black/40",
      style: {
        position: "fixed",
        top: panelPos.top,
        left: panelPos.left,
        width: PANEL_W,
        zIndex: 2e4,
        backgroundColor: "var(--popover)",
        boxShadow: "0 16px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.07)"
      },
      children: [
        /* @__PURE__ */ jsxs35("div", { className: "flex items-center justify-between px-4 pt-4 pb-3", children: [
          /* @__PURE__ */ jsx56(
            "button",
            {
              onClick: prevMonth,
              className: "w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors",
              children: /* @__PURE__ */ jsx56(ChevronLeft5, { className: "w-4 h-4" })
            }
          ),
          /* @__PURE__ */ jsxs35("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxs35("div", { className: "relative", children: [
              /* @__PURE__ */ jsxs35(
                "button",
                {
                  onClick: () => {
                    setMonthMenu((o) => !o);
                    setYearMenu(false);
                  },
                  className: "flex items-center gap-1 px-2 py-1 rounded-lg text-[14px] font-semibold text-gray-900 hover:bg-gray-100 transition-colors",
                  children: [
                    MONTHS[viewMonth].slice(0, 3),
                    /* @__PURE__ */ jsx56(ChevronDown7, { className: "w-3 h-3 text-gray-400" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx56(AnimatePresence, { children: monthMenu && /* @__PURE__ */ jsx56(
                motion.div,
                {
                  initial: { opacity: 0, y: -4 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -4 },
                  transition: { duration: 0.12 },
                  className: "absolute top-full left-0 z-[10000] mt-1 max-h-[220px] min-w-[130px] overflow-y-auto rounded-xl border border-border bg-popover py-1 shadow-lg",
                  children: MONTHS.map((mn, mi) => /* @__PURE__ */ jsx56(
                    "button",
                    {
                      onClick: () => {
                        setViewMonth(mi);
                        setMonthMenu(false);
                      },
                      className: "w-full px-3 py-2 text-left text-[13px] text-foreground transition-colors hover:bg-muted",
                      style: { fontWeight: mi === viewMonth ? 600 : 400, color: mi === viewMonth ? PRIMARY : void 0 },
                      children: mn
                    },
                    mn
                  ))
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxs35("div", { className: "relative", children: [
              /* @__PURE__ */ jsxs35(
                "button",
                {
                  onClick: () => {
                    setYearMenu((o) => !o);
                    setMonthMenu(false);
                  },
                  className: "flex items-center gap-1 px-2 py-1 rounded-lg text-[14px] font-semibold text-gray-900 hover:bg-gray-100 transition-colors",
                  children: [
                    viewYear,
                    /* @__PURE__ */ jsx56(ChevronDown7, { className: "w-3 h-3 text-gray-400" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx56(AnimatePresence, { children: yearMenu && /* @__PURE__ */ jsx56(
                motion.div,
                {
                  initial: { opacity: 0, y: -4 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -4 },
                  transition: { duration: 0.12 },
                  className: "absolute top-full left-0 z-[10000] mt-1 max-h-[200px] min-w-[90px] overflow-y-auto rounded-xl border border-border bg-popover py-1 shadow-lg",
                  children: years.map((yr) => /* @__PURE__ */ jsx56(
                    "button",
                    {
                      onClick: () => {
                        setViewYear(yr);
                        setYearMenu(false);
                      },
                      className: "w-full px-3 py-2 text-left text-[13px] text-foreground transition-colors hover:bg-muted",
                      style: { fontWeight: yr === viewYear ? 600 : 400, color: yr === viewYear ? PRIMARY : void 0 },
                      children: yr
                    },
                    yr
                  ))
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsx56(
            "button",
            {
              onClick: nextMonth,
              className: "w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors",
              children: /* @__PURE__ */ jsx56(ChevronRight7, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx56(
          "div",
          {
            className: "px-3 pb-1",
            style: { display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))" },
            children: DAYS.map((d) => /* @__PURE__ */ jsx56("div", { className: "py-1 text-center text-[11.5px] font-semibold text-muted-foreground", children: d }, d))
          }
        ),
        /* @__PURE__ */ jsx56(
          "div",
          {
            className: "gap-y-0.5 px-3 pb-4",
            style: { display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))" },
            children: cells.map((cell, i) => {
              const selected = isSelected(cell);
              const tod = isToday(cell);
              const disabled = cell.current && isDisabled(cell.y, cell.m, cell.d);
              return /* @__PURE__ */ jsx56(
                "button",
                {
                  onClick: () => selectDay(cell),
                  disabled,
                  className: cn(
                    "h-9 w-9 mx-auto rounded-full text-[13px] font-medium flex items-center justify-center transition-all",
                    selected && "text-white font-semibold",
                    !selected && tod && "font-semibold",
                    !selected && !tod && cell.current && !disabled && "text-gray-800 hover:bg-gray-100",
                    !selected && !cell.current && "text-gray-300 hover:bg-gray-50",
                    disabled && "opacity-30 cursor-not-allowed"
                  ),
                  style: selected ? { background: PRIMARY } : tod ? { background: `${PRIMARY}18`, color: PRIMARY } : {},
                  children: cell.d
                },
                i
              );
            })
          }
        )
      ]
    }
  ) });
  return /* @__PURE__ */ jsxs35("div", { className: cn("relative", className), children: [
    label && /* @__PURE__ */ jsx56("p", { className: "mb-2 text-sm font-medium text-foreground", children: label }),
    /* @__PURE__ */ jsxs35(
      "button",
      {
        ref: triggerRef,
        type: "button",
        onClick: () => open ? setOpen(false) : openPanel(),
        className: cn(
          "flex h-12 min-h-12 w-full items-center gap-3 rounded-xl border border-border bg-card px-5 text-left text-[15px] shadow-sm transition-colors",
          open ? "border-ring ring-2 ring-ring/20" : "hover:border-muted-foreground/45"
        ),
        children: [
          /* @__PURE__ */ jsx56(CalendarDays, { className: "size-[1.125rem] shrink-0 text-muted-foreground" }),
          /* @__PURE__ */ jsx56("span", { className: cn("flex-1", value ? "text-foreground" : "text-muted-foreground"), children: value ? displayDate(value) : placeholder }),
          /* @__PURE__ */ jsx56(ChevronDown7, { className: cn("size-[1.125rem] shrink-0 text-muted-foreground transition-transform", open && "rotate-180") })
        ]
      }
    ),
    mounted && createPortal(panel, document.body)
  ] });
}

// src/chart.tsx
import * as React41 from "react";
import * as RechartsPrimitive from "recharts";
import { Fragment as Fragment6, jsx as jsx57, jsxs as jsxs36 } from "react/jsx-runtime";
var THEMES = { light: "", dark: ".dark" };
var INITIAL_DIMENSION = { width: 320, height: 200 };
var ChartContext = React41.createContext(null);
function useChart() {
  const context = React41.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
function ChartContainer({
  id,
  className,
  children,
  config,
  initialDimension = INITIAL_DIMENSION,
  ...props
}) {
  const uniqueId = React41.useId();
  const chartId = `chart-${id ?? uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ jsx57(ChartContext.Provider, { value: { config }, children: /* @__PURE__ */ jsxs36(
    "div",
    {
      "data-slot": "chart",
      "data-chart": chartId,
      className: cn(
        "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx57(ChartStyle, { id: chartId, config }),
        /* @__PURE__ */ jsx57(
          RechartsPrimitive.ResponsiveContainer,
          {
            initialDimension,
            children
          }
        )
      ]
    }
  ) });
}
var ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config2]) => config2.theme ?? config2.color
  );
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ jsx57(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
            const color = itemConfig.theme?.[theme] ?? itemConfig.color;
            return color ? `  --color-${key}: ${color};` : null;
          }).join("\n")}
}
`
        ).join("\n")
      }
    }
  );
};
var ChartTooltip = RechartsPrimitive.Tooltip;
function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey
}) {
  const { config } = useChart();
  const tooltipLabel = React41.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }
    const [item] = payload;
    const key = `${labelKey ?? item?.dataKey ?? item?.name ?? "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value = !labelKey && typeof label === "string" ? config[label]?.label ?? label : itemConfig?.label;
    if (labelFormatter) {
      return /* @__PURE__ */ jsx57("div", { className: cn("font-medium", labelClassName), children: labelFormatter(value, payload) });
    }
    if (!value) {
      return null;
    }
    return /* @__PURE__ */ jsx57("div", { className: cn("font-medium", labelClassName), children: value });
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey
  ]);
  if (!active || !payload?.length) {
    return null;
  }
  const nestLabel = payload.length === 1 && indicator !== "dot";
  return /* @__PURE__ */ jsxs36(
    "div",
    {
      className: cn(
        "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
        className
      ),
      children: [
        !nestLabel ? tooltipLabel : null,
        /* @__PURE__ */ jsx57("div", { className: "grid gap-1.5", children: payload.filter((item) => item.type !== "none").map((item, index) => {
          const key = `${nameKey ?? item.name ?? item.dataKey ?? "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = color ?? item.payload?.fill ?? item.color;
          return /* @__PURE__ */ jsx57(
            "div",
            {
              className: cn(
                "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                indicator === "dot" && "items-center"
              ),
              children: formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ jsxs36(Fragment6, { children: [
                itemConfig?.icon ? /* @__PURE__ */ jsx57(itemConfig.icon, {}) : !hideIndicator && /* @__PURE__ */ jsx57(
                  "div",
                  {
                    className: cn(
                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                      {
                        "h-2.5 w-2.5": indicator === "dot",
                        "w-1": indicator === "line",
                        "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                        "my-0.5": nestLabel && indicator === "dashed"
                      }
                    ),
                    style: {
                      "--color-bg": indicatorColor,
                      "--color-border": indicatorColor
                    }
                  }
                ),
                /* @__PURE__ */ jsxs36(
                  "div",
                  {
                    className: cn(
                      "flex flex-1 justify-between leading-none",
                      nestLabel ? "items-end" : "items-center"
                    ),
                    children: [
                      /* @__PURE__ */ jsxs36("div", { className: "grid gap-1.5", children: [
                        nestLabel ? tooltipLabel : null,
                        /* @__PURE__ */ jsx57("span", { className: "text-muted-foreground", children: itemConfig?.label ?? item.name })
                      ] }),
                      item.value != null && /* @__PURE__ */ jsx57("span", { className: "font-mono font-medium text-foreground tabular-nums", children: typeof item.value === "number" ? item.value.toLocaleString() : String(item.value) })
                    ]
                  }
                )
              ] })
            },
            index
          );
        }) })
      ]
    }
  );
}
var ChartLegend = RechartsPrimitive.Legend;
function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey
}) {
  const { config } = useChart();
  if (!payload?.length) {
    return null;
  }
  return /* @__PURE__ */ jsx57(
    "div",
    {
      className: cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      ),
      children: payload.filter((item) => item.type !== "none").map((item, index) => {
        const key = `${nameKey ?? item.dataKey ?? "value"}`;
        const itemConfig = getPayloadConfigFromPayload(config, item, key);
        return /* @__PURE__ */ jsxs36(
          "div",
          {
            className: cn(
              "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
            ),
            children: [
              itemConfig?.icon && !hideIcon ? /* @__PURE__ */ jsx57(itemConfig.icon, {}) : /* @__PURE__ */ jsx57(
                "div",
                {
                  className: "h-2 w-2 shrink-0 rounded-[2px]",
                  style: {
                    backgroundColor: item.color
                  }
                }
              ),
              itemConfig?.label
            ]
          },
          index
        );
      })
    }
  );
}
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}

// src/chart-templates.tsx
import * as React42 from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  ResponsiveContainer as ResponsiveContainer2,
  Tooltip as Tooltip3,
  XAxis,
  YAxis
} from "recharts";
import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  Info as Info5,
  Minus as Minus2
} from "lucide-react";
import { Fragment as Fragment7, jsx as jsx58, jsxs as jsxs37 } from "react/jsx-runtime";
var gridStroke = "color-mix(in srgb, var(--border) 65%, transparent)";
var tickFill = "var(--muted-foreground)";
function MetricSparklineCard({
  title,
  icon,
  value,
  trend,
  data,
  accentColor = "var(--chart-1)",
  className,
  onInfoClick
}) {
  const gid = React42.useId().replace(/:/g, "");
  const chartData = data.map((d) => ({ ...d, y: d.y }));
  const trendCls = trend?.direction === "up" ? "text-emerald-600 dark:text-emerald-400" : trend?.direction === "down" ? "text-red-600 dark:text-red-400" : "text-muted-foreground";
  const TrendIcon = trend?.direction === "up" ? ArrowUpRight : trend?.direction === "down" ? ArrowDownRight : Minus2;
  return /* @__PURE__ */ jsxs37(
    "div",
    {
      className: cn(
        "relative overflow-hidden rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs37("div", { className: "flex items-start justify-between gap-2", children: [
          /* @__PURE__ */ jsxs37("div", { className: "flex min-w-0 items-center gap-2", children: [
            icon ? /* @__PURE__ */ jsx58("span", { className: "flex shrink-0 text-muted-foreground [&_svg]:size-4", children: icon }) : null,
            /* @__PURE__ */ jsx58("span", { className: "truncate text-sm font-semibold text-foreground", children: title })
          ] }),
          onInfoClick ? /* @__PURE__ */ jsx58(
            "button",
            {
              type: "button",
              onClick: onInfoClick,
              className: "shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
              "aria-label": "More info",
              children: /* @__PURE__ */ jsx58(Info5, { className: "size-3.5" })
            }
          ) : null
        ] }),
        /* @__PURE__ */ jsx58("div", { className: "mt-3 text-2xl font-semibold tabular-nums tracking-tight text-foreground", children: value }),
        /* @__PURE__ */ jsx58("div", { className: "pointer-events-none absolute bottom-3 right-3 h-14 w-[46%] max-w-[9rem] opacity-95", children: /* @__PURE__ */ jsx58(ResponsiveContainer2, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs37(AreaChart, { data: chartData, margin: { top: 4, right: 0, left: 0, bottom: 0 }, children: [
          /* @__PURE__ */ jsx58("defs", { children: /* @__PURE__ */ jsxs37("linearGradient", { id: gid, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsx58("stop", { offset: "0%", stopColor: accentColor, stopOpacity: 0.35 }),
            /* @__PURE__ */ jsx58("stop", { offset: "100%", stopColor: accentColor, stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsx58(
            Area,
            {
              type: "monotone",
              dataKey: "y",
              stroke: accentColor,
              strokeWidth: 2,
              fill: `url(#${gid})`,
              isAnimationActive: false
            }
          )
        ] }) }) }),
        trend ? /* @__PURE__ */ jsxs37("div", { className: cn("mt-10 flex items-center gap-1 text-xs font-medium", trendCls), children: [
          /* @__PURE__ */ jsx58(TrendIcon, { className: "size-3.5 shrink-0", "aria-hidden": true }),
          /* @__PURE__ */ jsx58("span", { children: trend.label })
        ] }) : /* @__PURE__ */ jsx58("div", { className: "mt-10" })
      ]
    }
  );
}
function DashboardAreaChartTemplate({
  title,
  tabs,
  activeTabId,
  onTabChange,
  headline,
  delta,
  data,
  xKey,
  areaKey,
  compareLineKey,
  height = 220,
  formatYAxis = (v) => v >= 1e6 ? `${(v / 1e6).toFixed(1)}L` : v >= 1e3 ? `${(v / 1e3).toFixed(0)}K` : `${v}`,
  footer,
  className
}) {
  const areaGid = React42.useId().replace(/:/g, "");
  return /* @__PURE__ */ jsxs37("div", { className: cn("rounded-xl border border-border bg-card text-card-foreground shadow-sm", className), children: [
    /* @__PURE__ */ jsxs37("div", { className: "flex flex-col gap-4 border-b border-border px-5 pt-4 pb-3 sm:flex-row sm:items-start sm:justify-between", children: [
      /* @__PURE__ */ jsx58("h3", { className: "text-sm font-semibold text-foreground", children: title }),
      /* @__PURE__ */ jsx58("div", { className: "flex flex-wrap gap-1 rounded-lg border border-border bg-muted/30 p-0.5", children: tabs.map((t) => /* @__PURE__ */ jsx58(
        "button",
        {
          type: "button",
          onClick: () => onTabChange(t.id),
          className: cn(
            "rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors",
            activeTabId === t.id ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
          ),
          children: t.label
        },
        t.id
      )) })
    ] }),
    /* @__PURE__ */ jsxs37("div", { className: "px-5 pt-4", children: [
      /* @__PURE__ */ jsx58("div", { className: "text-2xl font-semibold tabular-nums tracking-tight text-foreground", children: headline }),
      delta ? /* @__PURE__ */ jsx58("div", { className: "mt-1 text-sm", children: delta }) : null
    ] }),
    /* @__PURE__ */ jsx58("div", { className: "px-3 pb-2 pt-2", style: { height }, children: /* @__PURE__ */ jsx58(ResponsiveContainer2, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs37(AreaChart, { data, margin: { top: 8, right: 12, left: 0, bottom: 0 }, children: [
      /* @__PURE__ */ jsx58("defs", { children: /* @__PURE__ */ jsxs37("linearGradient", { id: areaGid, x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ jsx58("stop", { offset: "0%", stopColor: "var(--chart-1)", stopOpacity: 0.35 }),
        /* @__PURE__ */ jsx58("stop", { offset: "100%", stopColor: "var(--chart-1)", stopOpacity: 0.02 })
      ] }) }),
      /* @__PURE__ */ jsx58(CartesianGrid, { strokeDasharray: "3 3", stroke: gridStroke, vertical: false }),
      /* @__PURE__ */ jsx58(
        XAxis,
        {
          dataKey: xKey,
          axisLine: false,
          tickLine: false,
          tick: { fontSize: 10, fill: tickFill },
          interval: "preserveStartEnd"
        }
      ),
      /* @__PURE__ */ jsx58(
        YAxis,
        {
          axisLine: false,
          tickLine: false,
          tick: { fontSize: 10, fill: tickFill },
          tickFormatter: formatYAxis,
          width: 44
        }
      ),
      /* @__PURE__ */ jsx58(
        Tooltip3,
        {
          contentStyle: {
            borderRadius: 10,
            border: "1px solid var(--border)",
            fontSize: 12,
            background: "var(--popover)",
            color: "var(--popover-foreground)"
          }
        }
      ),
      /* @__PURE__ */ jsx58(
        Area,
        {
          type: "monotone",
          dataKey: areaKey,
          stroke: "var(--chart-1)",
          strokeWidth: 2,
          fill: `url(#${areaGid})`
        }
      ),
      compareLineKey ? /* @__PURE__ */ jsx58(
        Line,
        {
          type: "monotone",
          dataKey: compareLineKey,
          stroke: "var(--muted-foreground)",
          strokeWidth: 1.5,
          strokeDasharray: "4 4",
          dot: false
        }
      ) : null
    ] }) }) }),
    footer ? /* @__PURE__ */ jsxs37(Fragment7, { children: [
      /* @__PURE__ */ jsx58(Separator, {}),
      /* @__PURE__ */ jsx58("div", { className: "px-5 py-3", children: footer })
    ] }) : null
  ] });
}
function GroupedBarChartTemplate({
  title,
  subtitle,
  data,
  xKey,
  series,
  height = 200,
  formatYAxis = (v) => v >= 1e6 ? `${(v / 1e6).toFixed(1)}M` : v >= 1e3 ? `${(v / 1e3).toFixed(0)}K` : `${v}`,
  className
}) {
  return /* @__PURE__ */ jsxs37("div", { className: cn("rounded-xl border border-border bg-card px-5 pt-4 pb-3 text-card-foreground shadow-sm", className), children: [
    /* @__PURE__ */ jsxs37("div", { className: "mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ jsxs37("div", { children: [
        /* @__PURE__ */ jsx58("h3", { className: "text-sm font-semibold text-foreground", children: title }),
        subtitle ? /* @__PURE__ */ jsx58("p", { className: "mt-0.5 text-xs text-muted-foreground", children: subtitle }) : null
      ] }),
      /* @__PURE__ */ jsx58("div", { className: "flex flex-wrap items-center gap-4", children: series.map((s) => /* @__PURE__ */ jsxs37("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsx58("div", { className: "size-2.5 rounded-sm", style: { background: s.color } }),
        /* @__PURE__ */ jsx58("span", { className: "text-[11px] font-medium text-muted-foreground", children: s.label })
      ] }, s.key)) })
    ] }),
    /* @__PURE__ */ jsx58("div", { style: { height }, children: /* @__PURE__ */ jsx58(ResponsiveContainer2, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs37(BarChart, { data, barCategoryGap: "22%", barGap: 4, children: [
      /* @__PURE__ */ jsx58(CartesianGrid, { strokeDasharray: "3 3", stroke: gridStroke, vertical: false }),
      /* @__PURE__ */ jsx58(XAxis, { dataKey: xKey, axisLine: false, tickLine: false, tick: { fontSize: 11, fill: tickFill } }),
      /* @__PURE__ */ jsx58(
        YAxis,
        {
          axisLine: false,
          tickLine: false,
          tick: { fontSize: 11, fill: tickFill },
          tickFormatter: formatYAxis,
          width: 40
        }
      ),
      /* @__PURE__ */ jsx58(
        Tooltip3,
        {
          contentStyle: {
            borderRadius: 10,
            border: "1px solid var(--border)",
            fontSize: 12,
            background: "var(--popover)"
          }
        }
      ),
      series.map((s) => /* @__PURE__ */ jsx58(Bar, { dataKey: s.key, name: s.label, fill: s.color, radius: [5, 5, 0, 0], maxBarSize: 36 }, s.key))
    ] }) }) })
  ] });
}
function RankedBarListTemplate({
  title,
  subtitle,
  headerRight,
  items,
  barFrom = "var(--chart-1)",
  barTo = "var(--chart-3)",
  className
}) {
  return /* @__PURE__ */ jsxs37("div", { className: cn("rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm", className), children: [
    /* @__PURE__ */ jsxs37("div", { className: "mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between", children: [
      /* @__PURE__ */ jsxs37("div", { children: [
        /* @__PURE__ */ jsx58("h3", { className: "text-sm font-semibold text-foreground", children: title }),
        subtitle ? /* @__PURE__ */ jsx58("p", { className: "mt-0.5 text-xs text-muted-foreground", children: subtitle }) : null
      ] }),
      headerRight ? /* @__PURE__ */ jsx58("div", { className: "shrink-0", children: headerRight }) : null
    ] }),
    /* @__PURE__ */ jsx58("ul", { className: "space-y-3", children: items.map((row) => /* @__PURE__ */ jsxs37("li", { className: "flex items-center gap-3 text-sm", children: [
      /* @__PURE__ */ jsxs37("div", { className: "flex min-w-0 flex-1 items-center gap-2", children: [
        row.leading ? /* @__PURE__ */ jsx58("span", { className: "shrink-0 text-muted-foreground", children: row.leading }) : null,
        /* @__PURE__ */ jsx58("span", { className: "truncate font-medium text-foreground", children: row.label })
      ] }),
      /* @__PURE__ */ jsx58("div", { className: "relative hidden h-2 w-[min(40%,9rem)] overflow-hidden rounded-full bg-muted sm:block", children: /* @__PURE__ */ jsx58(
        "div",
        {
          className: "absolute inset-y-0 left-0 rounded-full",
          style: {
            width: `${Math.min(100, Math.max(0, row.percent))}%`,
            background: `linear-gradient(90deg, ${barFrom}, ${barTo})`
          }
        }
      ) }),
      /* @__PURE__ */ jsx58("span", { className: "w-14 shrink-0 text-right text-xs font-semibold tabular-nums text-foreground", children: row.value })
    ] }, row.id)) })
  ] });
}
function CategoryBarChartTemplate({
  title,
  subtitle,
  data,
  valueLabel = "Share",
  barColor = "var(--chart-1)",
  height = 200,
  className
}) {
  const chartData = data.map((d) => ({ name: d.category, v: d.value }));
  return /* @__PURE__ */ jsxs37("div", { className: cn("rounded-xl border border-border bg-card px-5 pt-4 pb-3 text-card-foreground shadow-sm", className), children: [
    /* @__PURE__ */ jsxs37("div", { className: "mb-3", children: [
      /* @__PURE__ */ jsx58("h3", { className: "text-sm font-semibold text-foreground", children: title }),
      subtitle ? /* @__PURE__ */ jsx58("p", { className: "mt-0.5 text-xs text-muted-foreground", children: subtitle }) : null
    ] }),
    /* @__PURE__ */ jsx58("div", { style: { height }, children: /* @__PURE__ */ jsx58(ResponsiveContainer2, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs37(BarChart, { data: chartData, barCategoryGap: "28%", children: [
      /* @__PURE__ */ jsx58(CartesianGrid, { strokeDasharray: "3 3", stroke: gridStroke, vertical: false }),
      /* @__PURE__ */ jsx58(XAxis, { dataKey: "name", axisLine: false, tickLine: false, tick: { fontSize: 11, fill: tickFill } }),
      /* @__PURE__ */ jsx58(
        YAxis,
        {
          axisLine: false,
          tickLine: false,
          tick: { fontSize: 11, fill: tickFill },
          tickFormatter: (v) => `${v}%`,
          domain: [0, "dataMax + 5"],
          width: 36
        }
      ),
      /* @__PURE__ */ jsx58(
        Tooltip3,
        {
          formatter: (value) => [`${value ?? 0}%`, valueLabel],
          contentStyle: {
            borderRadius: 10,
            border: "1px solid var(--border)",
            fontSize: 12,
            background: "var(--popover)"
          }
        }
      ),
      /* @__PURE__ */ jsx58(Bar, { dataKey: "v", fill: barColor, radius: [6, 6, 0, 0], maxBarSize: 48 })
    ] }) }) })
  ] });
}
function MiniSparklineChartCard({
  title,
  value,
  data,
  accentColor = "var(--chart-4)",
  height = 100,
  stats,
  className
}) {
  const gid = React42.useId().replace(/:/g, "");
  const hasCompare = data.some((d) => d.compare != null);
  return /* @__PURE__ */ jsxs37("div", { className: cn("rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm", className), children: [
    /* @__PURE__ */ jsx58("h3", { className: "text-sm font-semibold text-foreground", children: title }),
    /* @__PURE__ */ jsx58("div", { className: "mt-2 text-2xl font-semibold tabular-nums", children: value }),
    /* @__PURE__ */ jsx58("div", { className: "mt-2", style: { height }, children: /* @__PURE__ */ jsx58(ResponsiveContainer2, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxs37(AreaChart, { data, margin: { top: 4, right: 8, left: 0, bottom: 0 }, children: [
      /* @__PURE__ */ jsx58("defs", { children: /* @__PURE__ */ jsxs37("linearGradient", { id: gid, x1: "0", y1: "0", x2: "0", y2: "1", children: [
        /* @__PURE__ */ jsx58("stop", { offset: "0%", stopColor: accentColor, stopOpacity: 0.3 }),
        /* @__PURE__ */ jsx58("stop", { offset: "100%", stopColor: accentColor, stopOpacity: 0 })
      ] }) }),
      /* @__PURE__ */ jsx58(XAxis, { dataKey: "x", hide: true }),
      /* @__PURE__ */ jsx58(YAxis, { hide: true, domain: ["dataMin - 1", "dataMax + 1"] }),
      /* @__PURE__ */ jsx58(Area, { type: "monotone", dataKey: "y", stroke: accentColor, strokeWidth: 2, fill: `url(#${gid})` }),
      hasCompare ? /* @__PURE__ */ jsx58(
        Line,
        {
          type: "monotone",
          dataKey: "compare",
          stroke: "var(--muted-foreground)",
          strokeWidth: 1.5,
          strokeDasharray: "4 4",
          dot: false,
          connectNulls: true
        }
      ) : null
    ] }) }) }),
    /* @__PURE__ */ jsx58("div", { className: "mt-3 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-3 text-[11px]", children: stats.map((s) => /* @__PURE__ */ jsxs37("div", { className: "flex items-center gap-1.5", children: [
      s.dotClassName ? /* @__PURE__ */ jsx58("span", { className: cn("size-1.5 rounded-full", s.dotClassName) }) : null,
      /* @__PURE__ */ jsx58("span", { className: "text-muted-foreground", children: s.label }),
      /* @__PURE__ */ jsx58("span", { className: "font-semibold tabular-nums text-foreground", children: s.value })
    ] }, s.label)) })
  ] });
}
var toneCls = {
  default: "text-foreground",
  warning: "text-amber-600 dark:text-amber-400",
  danger: "text-red-600 dark:text-red-400"
};
function AttentionListTemplate({ title, items, className }) {
  return /* @__PURE__ */ jsxs37("div", { className: cn("rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm", className), children: [
    /* @__PURE__ */ jsx58("h3", { className: "text-sm font-semibold text-foreground", children: title }),
    /* @__PURE__ */ jsx58("ul", { className: "mt-4 space-y-4", children: items.map((item) => /* @__PURE__ */ jsxs37(
      "li",
      {
        className: "flex flex-col gap-3 border-b border-border/60 pb-4 last:border-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between",
        children: [
          /* @__PURE__ */ jsxs37("div", { className: "min-w-0 space-y-0.5", children: [
            /* @__PURE__ */ jsx58("p", { className: "text-sm font-semibold text-foreground", children: item.title }),
            /* @__PURE__ */ jsx58("p", { className: cn("text-lg font-semibold tabular-nums", toneCls[item.valueTone ?? "default"]), children: item.value }),
            item.meta ? /* @__PURE__ */ jsx58("p", { className: "text-xs text-muted-foreground", children: item.meta }) : null
          ] }),
          /* @__PURE__ */ jsxs37(
            Button,
            {
              type: "button",
              variant: "outline",
              size: "md",
              className: "shrink-0 gap-1.5",
              onClick: item.onAction,
              children: [
                item.actionLabel,
                /* @__PURE__ */ jsx58(ExternalLink, { className: "size-3.5 opacity-70", "aria-hidden": true })
              ]
            }
          )
        ]
      },
      item.id
    )) })
  ] });
}

// src/sonner.tsx
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { useEffect as useEffect4, useState as useState9 } from "react";
import { toast } from "sonner";
import { jsx as jsx59 } from "react/jsx-runtime";
function Toaster({ theme, ...props }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState9(false);
  useEffect4(() => setMounted(true), []);
  const resolved = theme ?? (mounted && resolvedTheme === "dark" ? "dark" : "light");
  return /* @__PURE__ */ jsx59(
    Sonner,
    {
      theme: resolved,
      position: "bottom-right",
      toastOptions: {
        classNames: {
          toast: "bg-[var(--popover)] text-[var(--popover-foreground)] border-[var(--border)] shadow-lg rounded-[10px] text-[13px]",
          description: "text-[var(--muted-foreground)]"
        }
      },
      ...props
    }
  );
}

// src/inline-edit.tsx
import * as React43 from "react";
import { Check as Check9, Pencil, X as X8 } from "lucide-react";
import { Fragment as Fragment8, jsx as jsx60, jsxs as jsxs38 } from "react/jsx-runtime";
var InlineEdit = React43.forwardRef(
  ({
    value,
    onConfirm,
    placeholder = "Click to edit\u2026",
    multiline = false,
    disabled = false,
    showButtons = false,
    readClassName,
    inputClassName
  }, ref) => {
    const [editing, setEditing] = React43.useState(false);
    const [draft, setDraft] = React43.useState(value);
    const [hovered, setHovered] = React43.useState(false);
    const inputRef = React43.useRef(null);
    React43.useEffect(() => {
      if (!editing) setDraft(value);
    }, [value, editing]);
    React43.useEffect(() => {
      if (editing) {
        inputRef.current?.focus();
        if (inputRef.current) {
          const el = inputRef.current;
          const len = el.value.length;
          el.setSelectionRange(len, len);
        }
      }
    }, [editing]);
    const confirm = React43.useCallback(() => {
      setEditing(false);
      if (draft !== value) onConfirm(draft);
    }, [draft, value, onConfirm]);
    const cancel = React43.useCallback(() => {
      setEditing(false);
      setDraft(value);
    }, [value]);
    const handleKeyDown = React43.useCallback(
      (e) => {
        if (e.key === "Enter" && !multiline) {
          e.preventDefault();
          confirm();
        } else if (e.key === "Escape") {
          e.preventDefault();
          cancel();
        }
      },
      [confirm, cancel, multiline]
    );
    const handleBlur = React43.useCallback(
      (e) => {
        if (showButtons) {
          const related = e.relatedTarget;
          const container = e.currentTarget.closest(
            "[data-inline-edit]"
          );
          if (container && related && container.contains(related)) return;
        }
        confirm();
      },
      [confirm, showButtons]
    );
    const startEditing = () => {
      if (disabled) return;
      setEditing(true);
    };
    const sharedInputClass = cn(
      "w-full rounded-md border border-border bg-card px-2 py-1 text-[15px] leading-tight text-foreground shadow-sm",
      "placeholder:text-muted-foreground",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
      "transition-colors duration-pg-fast ease-pg-standard",
      "disabled:cursor-not-allowed disabled:opacity-50",
      inputClassName
    );
    return /* @__PURE__ */ jsx60("div", { ref, "data-inline-edit": "", className: "relative inline-flex flex-col gap-1 max-w-full", children: editing ? /* @__PURE__ */ jsxs38(Fragment8, { children: [
      multiline ? /* @__PURE__ */ jsx60(
        "textarea",
        {
          ref: inputRef,
          value: draft,
          onChange: (e) => setDraft(e.target.value),
          onKeyDown: handleKeyDown,
          onBlur: handleBlur,
          placeholder,
          rows: 3,
          className: cn(sharedInputClass, "resize-none leading-relaxed py-1.5")
        }
      ) : /* @__PURE__ */ jsx60(
        "input",
        {
          ref: inputRef,
          type: "text",
          value: draft,
          onChange: (e) => setDraft(e.target.value),
          onKeyDown: handleKeyDown,
          onBlur: handleBlur,
          placeholder,
          className: sharedInputClass
        }
      ),
      showButtons && /* @__PURE__ */ jsxs38("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsx60(
          "button",
          {
            type: "button",
            onMouseDown: (e) => {
              e.preventDefault();
              confirm();
            },
            className: cn(
              "inline-flex items-center justify-center rounded-md p-1",
              "text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40",
              "transition-colors duration-pg-fast ease-pg-standard",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35"
            ),
            "aria-label": "Confirm",
            children: /* @__PURE__ */ jsx60(Check9, { className: "size-3.5" })
          }
        ),
        /* @__PURE__ */ jsx60(
          "button",
          {
            type: "button",
            onMouseDown: (e) => {
              e.preventDefault();
              cancel();
            },
            className: cn(
              "inline-flex items-center justify-center rounded-md p-1",
              "text-destructive hover:bg-destructive/10",
              "transition-colors duration-pg-fast ease-pg-standard",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35"
            ),
            "aria-label": "Cancel",
            children: /* @__PURE__ */ jsx60(X8, { className: "size-3.5" })
          }
        )
      ] })
    ] }) : /* @__PURE__ */ jsxs38(
      "span",
      {
        role: "button",
        tabIndex: disabled ? -1 : 0,
        "aria-label": value || placeholder,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        onClick: startEditing,
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            startEditing();
          }
        },
        className: cn(
          "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[15px] leading-tight",
          "transition-colors duration-pg-fast ease-pg-standard",
          !disabled && "hover:bg-muted cursor-text",
          disabled && "cursor-not-allowed opacity-50",
          readClassName
        ),
        children: [
          /* @__PURE__ */ jsx60("span", { className: cn(!value && "text-muted-foreground"), children: value || placeholder }),
          !disabled && /* @__PURE__ */ jsx60(
            Pencil,
            {
              className: cn(
                "size-3.5 shrink-0 text-muted-foreground transition-opacity duration-pg-fast ease-pg-standard",
                hovered ? "opacity-100" : "opacity-0"
              ),
              "aria-hidden": true
            }
          )
        ]
      }
    ) });
  }
);
InlineEdit.displayName = "InlineEdit";

// src/inline-dialog.tsx
import * as React44 from "react";
import * as PopoverPrimitive3 from "@radix-ui/react-popover";
import { X as X9 } from "lucide-react";
import { jsx as jsx61, jsxs as jsxs39 } from "react/jsx-runtime";
var InlineDialog = PopoverPrimitive3.Root;
InlineDialog.displayName = "InlineDialog";
var InlineDialogTrigger = PopoverPrimitive3.Trigger;
InlineDialogTrigger.displayName = "InlineDialogTrigger";
function getArrowClasses(side) {
  const base = "absolute size-2 bg-card border border-border pointer-events-none";
  switch (side) {
    case "top":
      return cn(
        base,
        "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45",
        "border-t-0 border-l-0"
      );
    case "bottom":
      return cn(
        base,
        "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45",
        "border-b-0 border-r-0"
      );
    case "left":
      return cn(
        base,
        "right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45",
        "border-t-0 border-l-0"
      );
    case "right":
      return cn(
        base,
        "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rotate-45",
        "border-b-0 border-r-0"
      );
  }
}
var InlineDialogContent = React44.forwardRef(
  ({
    className,
    side = "bottom",
    sideOffset = 8,
    hideClose = false,
    children,
    ...props
  }, ref) => /* @__PURE__ */ jsx61(PopoverPrimitive3.Portal, { children: /* @__PURE__ */ jsxs39(
    PopoverPrimitive3.Content,
    {
      ref,
      side,
      sideOffset,
      className: cn(
        // Base card
        "relative z-[120] max-w-xs overflow-visible",
        "rounded-xl border border-border bg-card p-4 text-foreground shadow-lg",
        // Animation
        "data-[state=open]:opacity-100 data-[state=closed]:opacity-0",
        "transition-opacity duration-pg-fast ease-pg-standard",
        "outline-none",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx61("span", { className: getArrowClasses(side), "aria-hidden": "true" }),
        !hideClose && /* @__PURE__ */ jsx61(
          PopoverPrimitive3.Close,
          {
            className: cn(
              "absolute right-2 top-2 z-10",
              "inline-flex size-6 items-center justify-center rounded-md",
              "text-muted-foreground hover:text-foreground",
              "transition-colors duration-pg-fast ease-pg-standard",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
              "disabled:cursor-not-allowed disabled:opacity-50"
            ),
            "aria-label": "Close",
            children: /* @__PURE__ */ jsx61(X9, { className: "size-3.5" })
          }
        ),
        children
      ]
    }
  ) })
);
InlineDialogContent.displayName = "InlineDialogContent";

// src/flag.tsx
import * as React45 from "react";
import { Info as Info6, CheckCircle2 as CheckCircle24, AlertTriangle as AlertTriangle4, XCircle as XCircle4, X as X10 } from "lucide-react";
import { jsx as jsx62, jsxs as jsxs40 } from "react/jsx-runtime";
var DEFAULT_AUTO_DISMISS = 8e3;
var variantBorder = {
  info: "border-l-blue-500",
  success: "border-l-green-500",
  warning: "border-l-amber-500",
  error: "border-l-red-500"
};
var variantProgressBar = {
  info: "bg-blue-500",
  success: "bg-green-500",
  warning: "bg-amber-500",
  error: "bg-red-500"
};
var variantIconColor = {
  info: "text-blue-500",
  success: "text-green-500",
  warning: "text-amber-500",
  error: "text-red-500"
};
var defaultIcons = {
  info: Info6,
  success: CheckCircle24,
  warning: AlertTriangle4,
  error: XCircle4
};
var Flag = React45.forwardRef(
  ({
    className,
    title,
    description,
    variant = "info",
    icon,
    onDismiss,
    autoDismiss = DEFAULT_AUTO_DISMISS,
    actions,
    ...props
  }, ref) => {
    const [progress, setProgress] = React45.useState(100);
    const pausedRef = React45.useRef(false);
    const startTimeRef = React45.useRef(null);
    const elapsedRef = React45.useRef(0);
    const rafRef = React45.useRef(null);
    const duration = autoDismiss === false ? null : autoDismiss;
    React45.useEffect(() => {
      if (duration === null) return;
      const tick = (now) => {
        if (pausedRef.current) {
          startTimeRef.current = now;
          rafRef.current = requestAnimationFrame(tick);
          return;
        }
        if (startTimeRef.current === null) startTimeRef.current = now;
        elapsedRef.current += now - startTimeRef.current;
        startTimeRef.current = now;
        const remaining = Math.max(0, duration - elapsedRef.current);
        const pct = remaining / duration * 100;
        setProgress(pct);
        if (remaining <= 0) {
          onDismiss?.();
          return;
        }
        rafRef.current = requestAnimationFrame(tick);
      };
      rafRef.current = requestAnimationFrame(tick);
      return () => {
        if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      };
    }, [duration]);
    const handleMouseEnter = () => {
      pausedRef.current = true;
    };
    const handleMouseLeave = () => {
      pausedRef.current = false;
      startTimeRef.current = null;
    };
    const DefaultIcon = defaultIcons[variant];
    const renderedIcon = icon ?? /* @__PURE__ */ jsx62(DefaultIcon, { className: cn("size-4 shrink-0 mt-0.5", variantIconColor[variant]), "aria-hidden": true });
    return /* @__PURE__ */ jsxs40(
      "div",
      {
        ref,
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        className: cn(
          "relative w-80 overflow-hidden rounded-xl border border-border bg-card shadow-lg",
          "border-l-4",
          variantBorder[variant],
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsxs40("div", { className: "flex gap-3 p-4 pr-10", children: [
            renderedIcon,
            /* @__PURE__ */ jsxs40("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx62("p", { className: "text-sm font-semibold text-card-foreground leading-snug", children: title }),
              description && /* @__PURE__ */ jsx62("p", { className: "mt-1 text-sm text-muted-foreground leading-relaxed", children: description }),
              actions && actions.length > 0 && /* @__PURE__ */ jsx62("div", { className: "mt-3 flex flex-wrap gap-2", children: actions.map((action) => /* @__PURE__ */ jsx62(
                "button",
                {
                  type: "button",
                  onClick: action.onClick,
                  className: "text-xs font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded",
                  children: action.label
                },
                action.label
              )) })
            ] })
          ] }),
          onDismiss && /* @__PURE__ */ jsx62(
            "button",
            {
              type: "button",
              "aria-label": "Dismiss notification",
              onClick: onDismiss,
              className: "absolute top-3 right-3 rounded p-0.5 text-muted-foreground hover:text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              children: /* @__PURE__ */ jsx62(X10, { className: "size-3.5", "aria-hidden": true })
            }
          ),
          duration !== null && /* @__PURE__ */ jsx62("div", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-muted", children: /* @__PURE__ */ jsx62(
            "div",
            {
              className: cn("h-full transition-none", variantProgressBar[variant]),
              style: { width: `${progress}%` }
            }
          ) })
        ]
      }
    );
  }
);
Flag.displayName = "Flag";
var positionClasses = {
  "bottom-right": "bottom-4 right-4 flex-col-reverse",
  "bottom-left": "bottom-4 left-4 flex-col-reverse",
  "top-right": "top-4 right-4 flex-col",
  "top-left": "top-4 left-4 flex-col"
};
var FlagGroup = React45.forwardRef(
  ({ className, position = "bottom-right", children, ...props }, ref) => /* @__PURE__ */ jsx62(
    "div",
    {
      ref,
      className: cn(
        "fixed z-50 flex gap-2",
        positionClasses[position],
        className
      ),
      ...props,
      children
    }
  )
);
FlagGroup.displayName = "FlagGroup";
function useFlagGroup() {
  const [flags, setFlags] = React45.useState([]);
  const removeFlag = React45.useCallback((id) => {
    setFlags((prev) => prev.filter((f) => f.id !== id));
  }, []);
  const addFlag = React45.useCallback(
    (flag) => {
      const id = flag.id ?? `flag-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      setFlags((prev) => [...prev, { ...flag, id, onDismiss: () => removeFlag(id) }]);
      return id;
    },
    [removeFlag]
  );
  const clearAll = React45.useCallback(() => {
    setFlags([]);
  }, []);
  return { flags, addFlag, removeFlag, clearAll };
}

// src/responsive.tsx
import * as React46 from "react";
import { jsx as jsx63 } from "react/jsx-runtime";
var BREAKPOINT_ORDER = ["sm", "md", "lg", "xl", "2xl"];
var BREAKPOINT_MIN_WIDTH = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
};
function bpIndex(bp) {
  return BREAKPOINT_ORDER.indexOf(bp);
}
var DISPLAY_ABOVE_CLASS = {
  sm: {
    block: "sm:block",
    flex: "sm:flex",
    inline: "sm:inline",
    "inline-block": "sm:inline-block",
    grid: "sm:grid",
    "inline-flex": "sm:inline-flex"
  },
  md: {
    block: "md:block",
    flex: "md:flex",
    inline: "md:inline",
    "inline-block": "md:inline-block",
    grid: "md:grid",
    "inline-flex": "md:inline-flex"
  },
  lg: {
    block: "lg:block",
    flex: "lg:flex",
    inline: "lg:inline",
    "inline-block": "lg:inline-block",
    grid: "lg:grid",
    "inline-flex": "lg:inline-flex"
  },
  xl: {
    block: "xl:block",
    flex: "xl:flex",
    inline: "xl:inline",
    "inline-block": "xl:inline-block",
    grid: "xl:grid",
    "inline-flex": "xl:inline-flex"
  },
  "2xl": {
    block: "2xl:block",
    flex: "2xl:flex",
    inline: "2xl:inline",
    "inline-block": "2xl:inline-block",
    grid: "2xl:grid",
    "inline-flex": "2xl:inline-flex"
  }
};
var HIDDEN_ABOVE_CLASS = {
  sm: "sm:hidden",
  md: "md:hidden",
  lg: "lg:hidden",
  xl: "xl:hidden",
  "2xl": "2xl:hidden"
};
var Show = React46.forwardRef(
  ({
    above,
    below,
    as: Tag2 = "div",
    display = "block",
    className,
    children,
    ...props
  }, ref) => {
    let visibilityClass;
    if (above) {
      visibilityClass = cn("hidden", DISPLAY_ABOVE_CLASS[above][display]);
    } else if (below) {
      visibilityClass = HIDDEN_ABOVE_CLASS[below];
    } else {
      visibilityClass = "";
    }
    return /* @__PURE__ */ jsx63(
      Tag2,
      {
        ref,
        className: cn(visibilityClass, className),
        ...props,
        children
      }
    );
  }
);
Show.displayName = "Show";
var Hide = React46.forwardRef(
  ({
    above,
    below,
    as: Tag2 = "div",
    display = "block",
    className,
    children,
    ...props
  }, ref) => {
    let visibilityClass;
    if (above) {
      visibilityClass = HIDDEN_ABOVE_CLASS[above];
    } else if (below) {
      visibilityClass = cn("hidden", DISPLAY_ABOVE_CLASS[below][display]);
    } else {
      visibilityClass = "";
    }
    return /* @__PURE__ */ jsx63(
      Tag2,
      {
        ref,
        className: cn(visibilityClass, className),
        ...props,
        children
      }
    );
  }
);
Hide.displayName = "Hide";
function getActiveBreakpoint() {
  if (typeof window === "undefined") return null;
  for (let i = BREAKPOINT_ORDER.length - 1; i >= 0; i--) {
    const bp = BREAKPOINT_ORDER[i];
    if (window.matchMedia(`(min-width: ${BREAKPOINT_MIN_WIDTH[bp]}px)`).matches) {
      return bp;
    }
  }
  return null;
}
function useBreakpoint() {
  const [breakpoint, setBreakpoint] = React46.useState(
    () => getActiveBreakpoint()
  );
  React46.useEffect(() => {
    if (typeof window === "undefined") return;
    const queries = BREAKPOINT_ORDER.map(
      (bp) => window.matchMedia(`(min-width: ${BREAKPOINT_MIN_WIDTH[bp]}px)`)
    );
    function handleChange() {
      setBreakpoint(getActiveBreakpoint());
    }
    queries.forEach((mql) => mql.addEventListener("change", handleChange));
    handleChange();
    return () => {
      queries.forEach((mql) => mql.removeEventListener("change", handleChange));
    };
  }, []);
  const isAbove = React46.useCallback(
    (bp) => {
      if (breakpoint === null) return false;
      return bpIndex(breakpoint) >= bpIndex(bp);
    },
    [breakpoint]
  );
  const isBelow = React46.useCallback(
    (bp) => {
      if (breakpoint === null) return true;
      return bpIndex(breakpoint) < bpIndex(bp);
    },
    [breakpoint]
  );
  return {
    breakpoint,
    isAbove,
    isBelow,
    isMobile: breakpoint === null,
    isTablet: breakpoint === "md",
    isDesktop: breakpoint !== null && bpIndex(breakpoint) >= bpIndex("lg")
  };
}

// src/country-select.tsx
import * as React47 from "react";
import * as PopoverPrimitive4 from "@radix-ui/react-popover";
import { Check as Check10, ChevronDown as ChevronDown8, Search as Search3 } from "lucide-react";
import { Fragment as Fragment9, jsx as jsx64, jsxs as jsxs41 } from "react/jsx-runtime";
var COUNTRIES = [
  { code: "US", name: "United States", flag: "\u{1F1FA}\u{1F1F8}", dialCode: "+1" },
  { code: "GB", name: "United Kingdom", flag: "\u{1F1EC}\u{1F1E7}", dialCode: "+44" },
  { code: "IN", name: "India", flag: "\u{1F1EE}\u{1F1F3}", dialCode: "+91" },
  { code: "AU", name: "Australia", flag: "\u{1F1E6}\u{1F1FA}", dialCode: "+61" },
  { code: "CA", name: "Canada", flag: "\u{1F1E8}\u{1F1E6}", dialCode: "+1" },
  { code: "DE", name: "Germany", flag: "\u{1F1E9}\u{1F1EA}", dialCode: "+49" },
  { code: "FR", name: "France", flag: "\u{1F1EB}\u{1F1F7}", dialCode: "+33" },
  { code: "JP", name: "Japan", flag: "\u{1F1EF}\u{1F1F5}", dialCode: "+81" },
  { code: "SG", name: "Singapore", flag: "\u{1F1F8}\u{1F1EC}", dialCode: "+65" },
  { code: "AE", name: "United Arab Emirates", flag: "\u{1F1E6}\u{1F1EA}", dialCode: "+971" },
  { code: "CN", name: "China", flag: "\u{1F1E8}\u{1F1F3}", dialCode: "+86" },
  { code: "BR", name: "Brazil", flag: "\u{1F1E7}\u{1F1F7}", dialCode: "+55" },
  { code: "MX", name: "Mexico", flag: "\u{1F1F2}\u{1F1FD}", dialCode: "+52" },
  { code: "KR", name: "South Korea", flag: "\u{1F1F0}\u{1F1F7}", dialCode: "+82" },
  { code: "IT", name: "Italy", flag: "\u{1F1EE}\u{1F1F9}", dialCode: "+39" },
  { code: "ES", name: "Spain", flag: "\u{1F1EA}\u{1F1F8}", dialCode: "+34" },
  { code: "NL", name: "Netherlands", flag: "\u{1F1F3}\u{1F1F1}", dialCode: "+31" },
  { code: "SE", name: "Sweden", flag: "\u{1F1F8}\u{1F1EA}", dialCode: "+46" },
  { code: "NO", name: "Norway", flag: "\u{1F1F3}\u{1F1F4}", dialCode: "+47" },
  { code: "DK", name: "Denmark", flag: "\u{1F1E9}\u{1F1F0}", dialCode: "+45" },
  { code: "FI", name: "Finland", flag: "\u{1F1EB}\u{1F1EE}", dialCode: "+358" },
  { code: "CH", name: "Switzerland", flag: "\u{1F1E8}\u{1F1ED}", dialCode: "+41" },
  { code: "NZ", name: "New Zealand", flag: "\u{1F1F3}\u{1F1FF}", dialCode: "+64" },
  { code: "ZA", name: "South Africa", flag: "\u{1F1FF}\u{1F1E6}", dialCode: "+27" },
  { code: "NG", name: "Nigeria", flag: "\u{1F1F3}\u{1F1EC}", dialCode: "+234" },
  { code: "EG", name: "Egypt", flag: "\u{1F1EA}\u{1F1EC}", dialCode: "+20" },
  { code: "PK", name: "Pakistan", flag: "\u{1F1F5}\u{1F1F0}", dialCode: "+92" },
  { code: "BD", name: "Bangladesh", flag: "\u{1F1E7}\u{1F1E9}", dialCode: "+880" },
  { code: "ID", name: "Indonesia", flag: "\u{1F1EE}\u{1F1E9}", dialCode: "+62" },
  { code: "TH", name: "Thailand", flag: "\u{1F1F9}\u{1F1ED}", dialCode: "+66" }
];
var CountrySelect = React47.forwardRef(
  ({
    value,
    onValueChange,
    placeholder = "Select country",
    showDialCode = false,
    disabled = false,
    className
  }, ref) => {
    const [open, setOpen] = React47.useState(false);
    const [search, setSearch] = React47.useState("");
    const searchRef = React47.useRef(null);
    const selected = React47.useMemo(
      () => COUNTRIES.find((c) => c.code === value),
      [value]
    );
    const filtered = React47.useMemo(() => {
      const q = search.trim().toLowerCase();
      if (!q) return COUNTRIES;
      return COUNTRIES.filter(
        (c) => c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q) || c.dialCode.includes(q)
      );
    }, [search]);
    React47.useEffect(() => {
      if (open) {
        const id = setTimeout(() => searchRef.current?.focus(), 0);
        return () => clearTimeout(id);
      } else {
        setSearch("");
      }
    }, [open]);
    return /* @__PURE__ */ jsxs41(PopoverPrimitive4.Root, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx64(PopoverPrimitive4.Trigger, { asChild: true, children: /* @__PURE__ */ jsxs41(
        "button",
        {
          ref,
          type: "button",
          disabled,
          "aria-expanded": open,
          "aria-haspopup": "listbox",
          className: cn(
            "flex h-11 min-h-11 w-full items-center justify-between gap-2.5 rounded-lg border border-border bg-card px-4 text-[15px] text-foreground shadow-sm",
            "transition-colors duration-pg-fast ease-pg-standard",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
            "disabled:cursor-not-allowed disabled:opacity-50",
            !selected && "text-muted-foreground",
            className
          ),
          children: [
            /* @__PURE__ */ jsx64("span", { className: "flex min-w-0 items-center gap-2.5", children: selected ? /* @__PURE__ */ jsxs41(Fragment9, { children: [
              /* @__PURE__ */ jsx64("span", { className: "text-base leading-none", "aria-hidden": "true", children: selected.flag }),
              /* @__PURE__ */ jsx64("span", { className: "truncate", children: selected.name }),
              showDialCode && /* @__PURE__ */ jsx64("span", { className: "shrink-0 text-muted-foreground", children: selected.dialCode })
            ] }) : /* @__PURE__ */ jsx64("span", { children: placeholder }) }),
            /* @__PURE__ */ jsx64(
              ChevronDown8,
              {
                className: cn(
                  "h-4 w-4 shrink-0 text-muted-foreground opacity-70 transition-transform duration-pg-fast ease-pg-standard",
                  open && "rotate-180"
                ),
                "aria-hidden": "true"
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsx64(PopoverPrimitive4.Portal, { children: /* @__PURE__ */ jsxs41(
        PopoverPrimitive4.Content,
        {
          align: "start",
          sideOffset: 6,
          className: cn(
            "z-[120] w-[var(--radix-popover-trigger-width)] min-w-[260px] rounded-xl border border-border bg-popover text-popover-foreground shadow-lg outline-none",
            "data-[state=open]:opacity-100 data-[state=closed]:opacity-0 transition-opacity duration-150"
          ),
          onOpenAutoFocus: (e) => e.preventDefault(),
          children: [
            /* @__PURE__ */ jsxs41("div", { className: "flex items-center gap-2 border-b border-border px-3 py-2.5", children: [
              /* @__PURE__ */ jsx64(Search3, { className: "h-4 w-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }),
              /* @__PURE__ */ jsx64(
                "input",
                {
                  ref: searchRef,
                  type: "text",
                  value: search,
                  onChange: (e) => setSearch(e.target.value),
                  placeholder: "Search countries\u2026",
                  className: cn(
                    "flex-1 bg-transparent text-[14px] text-foreground placeholder:text-muted-foreground",
                    "focus-visible:outline-none"
                  ),
                  "aria-label": "Search countries"
                }
              ),
              search && /* @__PURE__ */ jsx64(
                "button",
                {
                  type: "button",
                  onClick: () => setSearch(""),
                  className: "shrink-0 text-muted-foreground hover:text-foreground transition-colors duration-pg-fast ease-pg-standard",
                  "aria-label": "Clear search",
                  children: /* @__PURE__ */ jsx64("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx64("path", { d: "M10.5 3.5L3.5 10.5M3.5 3.5L10.5 10.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) })
                }
              )
            ] }),
            /* @__PURE__ */ jsx64(
              "div",
              {
                role: "listbox",
                "aria-label": "Countries",
                className: "max-h-64 overflow-y-auto p-1",
                children: filtered.length === 0 ? /* @__PURE__ */ jsx64("div", { className: "py-6 text-center text-sm text-muted-foreground", children: "No countries found" }) : filtered.map((country) => {
                  const isSelected = country.code === value;
                  return /* @__PURE__ */ jsxs41(
                    "button",
                    {
                      role: "option",
                      "aria-selected": isSelected,
                      type: "button",
                      onClick: () => {
                        onValueChange?.(country.code);
                        setOpen(false);
                      },
                      className: cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm",
                        "transition-colors duration-pg-fast ease-pg-standard",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
                        "hover:bg-muted",
                        isSelected && "bg-muted/60"
                      ),
                      children: [
                        /* @__PURE__ */ jsx64("span", { className: "text-base leading-none", "aria-hidden": "true", children: country.flag }),
                        /* @__PURE__ */ jsx64("span", { className: "flex-1 truncate text-foreground", children: country.name }),
                        /* @__PURE__ */ jsx64("span", { className: "shrink-0 text-xs text-muted-foreground", children: country.dialCode }),
                        isSelected && /* @__PURE__ */ jsx64(
                          Check10,
                          {
                            className: "h-3.5 w-3.5 shrink-0 text-primary",
                            "aria-hidden": "true"
                          }
                        )
                      ]
                    },
                    country.code
                  );
                })
              }
            )
          ]
        }
      ) })
    ] });
  }
);
CountrySelect.displayName = "CountrySelect";

// src/icon-button.tsx
import { Loader2 as Loader23 } from "lucide-react";
import { forwardRef as forwardRef50 } from "react";
import { jsx as jsx65 } from "react/jsx-runtime";
var variantClasses4 = {
  primary: "bg-primary text-primary-foreground border border-primary shadow-sm hover:bg-[var(--primary-hover)]",
  secondary: "bg-muted text-foreground border border-border shadow-sm hover:bg-muted/85 dark:bg-muted/35 dark:text-foreground dark:border-border dark:hover:bg-muted/55",
  ghost: "bg-transparent text-foreground border border-transparent hover:bg-muted focus-visible:bg-muted/80 active:bg-muted/90",
  outline: "bg-card text-foreground border border-border shadow-sm hover:bg-muted",
  danger: "bg-red-600 text-white border border-red-600 shadow-sm hover:bg-red-700"
};
var sizeClasses5 = {
  xs: "size-7 min-w-7",
  sm: "size-8 min-w-8",
  md: "size-9 min-w-9",
  lg: "size-10 min-w-10",
  xl: "size-11 min-w-11"
};
var iconSizeClasses = {
  xs: "size-3.5",
  sm: "size-3.5",
  md: "size-4",
  lg: "size-[1.125rem]",
  xl: "size-5"
};
var roundedClasses = {
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-xl",
  full: "rounded-full"
};
var IconButton = forwardRef50(
  ({
    variant = "primary",
    size = "md",
    isLoading = false,
    rounded = "lg",
    className,
    disabled,
    children,
    "aria-label": ariaLabel,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx65(
      "button",
      {
        ref,
        "aria-label": ariaLabel,
        title: ariaLabel,
        disabled: disabled || isLoading,
        className: cn(
          "inline-flex shrink-0 items-center justify-center font-medium",
          "transition-colors duration-pg-fast ease-pg-standard",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
          "disabled:cursor-not-allowed disabled:opacity-50",
          variantClasses4[variant],
          sizeClasses5[size],
          roundedClasses[rounded],
          className
        ),
        ...props,
        children: isLoading ? /* @__PURE__ */ jsx65(Loader23, { className: cn("animate-spin", iconSizeClasses[size]) }) : children
      }
    );
  }
);
IconButton.displayName = "IconButton";

// src/time-picker.tsx
import * as React48 from "react";
import { createPortal as createPortal2 } from "react-dom";
import { Clock as Clock2, ChevronDown as ChevronDown9, X as X11 } from "lucide-react";
import { Fragment as Fragment10, jsx as jsx66, jsxs as jsxs42 } from "react/jsx-runtime";
function pad(n) {
  return String(n).padStart(2, "0");
}
function parseHHMM(v) {
  if (!v) return null;
  const parts = v.split(":");
  if (parts.length < 2) return null;
  const h = Number(parts[0]);
  const m = Number(parts[1]);
  if (isNaN(h) || isNaN(m)) return null;
  return { h, m };
}
function toHHMM(h, m) {
  return `${pad(h)}:${pad(m)}`;
}
function displayTime(value, use24Hour) {
  const p = parseHHMM(value);
  if (!p) return "";
  if (use24Hour) return `${pad(p.h)}:${pad(p.m)}`;
  const period = p.h < 12 ? "AM" : "PM";
  const displayH = p.h % 12 === 0 ? 12 : p.h % 12;
  return `${pad(displayH)}:${pad(p.m)} ${period}`;
}
var ITEM_H = 36;
var VISIBLE = 5;
var PAD = 2;
function ScrollColumn({
  items,
  selected,
  onSelect,
  renderItem,
  getKey
}) {
  const containerRef = React48.useRef(null);
  const debounceRef = React48.useRef(null);
  const programmaticRef = React48.useRef(false);
  const selectedIndex = items.findIndex((item) => getKey(item) === getKey(selected));
  const scrollToIndex = React48.useCallback(
    (index, behavior = "smooth") => {
      const el = containerRef.current;
      if (!el) return;
      programmaticRef.current = true;
      el.scrollTo({ top: index * ITEM_H, behavior });
      if (behavior === "smooth") {
        setTimeout(() => {
          programmaticRef.current = false;
        }, 350);
      } else {
        programmaticRef.current = false;
      }
    },
    []
  );
  React48.useEffect(() => {
    if (selectedIndex >= 0) scrollToIndex(selectedIndex, "instant");
  }, []);
  React48.useEffect(() => {
    if (selectedIndex >= 0) scrollToIndex(selectedIndex, "smooth");
  }, [selectedIndex]);
  function handleScroll() {
    if (programmaticRef.current) return;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const el = containerRef.current;
      if (!el) return;
      const index = Math.round(el.scrollTop / ITEM_H);
      const clamped = Math.max(0, Math.min(index, items.length - 1));
      onSelect(items[clamped]);
      scrollToIndex(clamped, "smooth");
    }, 80);
  }
  return /* @__PURE__ */ jsxs42("div", { className: "relative flex flex-col items-center", style: { width: 64 }, children: [
    /* @__PURE__ */ jsx66(
      "div",
      {
        className: "pointer-events-none absolute left-0 right-0 rounded-lg bg-primary/10",
        style: {
          top: PAD * ITEM_H,
          height: ITEM_H,
          zIndex: 1
        }
      }
    ),
    /* @__PURE__ */ jsxs42(
      "div",
      {
        ref: containerRef,
        onScroll: handleScroll,
        className: "relative z-10 overflow-y-scroll",
        style: {
          height: VISIBLE * ITEM_H,
          scrollSnapType: "y mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none"
        },
        children: [
          Array.from({ length: PAD }).map((_, i) => /* @__PURE__ */ jsx66("div", { style: { height: ITEM_H } }, `pad-top-${i}`)),
          items.map((item) => {
            const isSelected = getKey(item) === getKey(selected);
            return /* @__PURE__ */ jsx66(
              "div",
              {
                onClick: () => {
                  onSelect(item);
                  scrollToIndex(items.findIndex((it) => getKey(it) === getKey(item)), "smooth");
                },
                className: cn(
                  "flex cursor-pointer items-center justify-center text-[14px] font-medium transition-colors duration-150 select-none",
                  isSelected ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
                ),
                style: {
                  height: ITEM_H,
                  scrollSnapAlign: "start"
                },
                children: renderItem(item)
              },
              getKey(item)
            );
          }),
          Array.from({ length: PAD }).map((_, i) => /* @__PURE__ */ jsx66("div", { style: { height: ITEM_H } }, `pad-bot-${i}`))
        ]
      }
    )
  ] });
}
var PANEL_W2 = 224;
var PANEL_H = 220;
var TimePicker = React48.forwardRef(
  ({
    value,
    onValueChange,
    use24Hour = false,
    placeholder = "Select time",
    label,
    disabled = false,
    className
  }, ref) => {
    const parsed = parseHHMM(value);
    const [hour, setHour] = React48.useState(() => {
      if (!parsed) return use24Hour ? 0 : 12;
      if (use24Hour) return parsed.h;
      return parsed.h % 12 === 0 ? 12 : parsed.h % 12;
    });
    const [minute, setMinute] = React48.useState(() => parsed?.m ?? 0);
    const [period, setPeriod] = React48.useState(() => {
      if (!parsed) return "AM";
      return parsed.h < 12 ? "AM" : "PM";
    });
    React48.useEffect(() => {
      const p = parseHHMM(value);
      if (p) {
        setMinute(p.m);
        if (use24Hour) {
          setHour(p.h);
        } else {
          setHour(p.h % 12 === 0 ? 12 : p.h % 12);
          setPeriod(p.h < 12 ? "AM" : "PM");
        }
      }
    }, [value]);
    const [open, setOpen] = React48.useState(false);
    const [panelPos, setPanelPos] = React48.useState({ top: 0, left: 0 });
    const [mounted, setMounted] = React48.useState(false);
    const triggerRef = React48.useRef(null);
    const panelRef = React48.useRef(null);
    React48.useEffect(() => {
      setMounted(true);
    }, []);
    function openPanel() {
      if (disabled) return;
      const el = triggerRef.current;
      if (!el) return;
      el.scrollIntoView({ block: "nearest", behavior: "auto" });
      requestAnimationFrame(() => {
        if (!triggerRef.current) return;
        const rect = triggerRef.current.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        let left = rect.left;
        if (left + PANEL_W2 > vw - 8) left = vw - PANEL_W2 - 8;
        let top = rect.bottom + 6;
        if (top + PANEL_H > vh - 8) top = rect.top - PANEL_H - 6;
        setPanelPos({ top, left });
        setOpen(true);
      });
    }
    React48.useEffect(() => {
      if (!open) return;
      function handler(e) {
        const inTrigger = triggerRef.current?.contains(e.target);
        const inPanel = panelRef.current?.contains(e.target);
        if (!inTrigger && !inPanel) setOpen(false);
      }
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, [open]);
    function emitChange(h, m, p) {
      let h24 = h;
      if (!use24Hour) {
        if (p === "AM") h24 = h === 12 ? 0 : h;
        else h24 = h === 12 ? 12 : h + 12;
      }
      onValueChange(toHHMM(h24, m));
    }
    function handleHourChange(h) {
      setHour(h);
      emitChange(h, minute, period);
    }
    function handleMinuteChange(m) {
      setMinute(m);
      emitChange(hour, m, period);
    }
    function handlePeriodChange(p) {
      setPeriod(p);
      emitChange(hour, minute, p);
    }
    const hours = use24Hour ? Array.from({ length: 24 }, (_, i) => i) : Array.from({ length: 12 }, (_, i) => i + 1);
    const minutes = Array.from({ length: 60 }, (_, i) => i);
    function handleClear(e) {
      e.stopPropagation();
      onValueChange("");
    }
    const panel = open ? /* @__PURE__ */ jsxs42(
      "div",
      {
        ref: panelRef,
        className: cn(
          "isolate rounded-xl border border-border bg-popover text-popover-foreground shadow-lg",
          "flex flex-col gap-0"
        ),
        style: {
          position: "fixed",
          top: panelPos.top,
          left: panelPos.left,
          width: PANEL_W2,
          zIndex: 2e4
        },
        children: [
          /* @__PURE__ */ jsxs42("div", { className: "flex items-center gap-1.5 border-b border-border px-4 py-2.5", children: [
            /* @__PURE__ */ jsx66(Clock2, { className: "size-3.5 text-muted-foreground" }),
            /* @__PURE__ */ jsx66("span", { className: "text-[13px] font-medium text-muted-foreground", children: value ? displayTime(value, use24Hour) : "\u2014" })
          ] }),
          /* @__PURE__ */ jsxs42(
            "div",
            {
              className: "flex items-center justify-around px-2 pt-2 pb-0.5",
              style: { paddingLeft: 8, paddingRight: use24Hour ? 8 : 8 },
              children: [
                /* @__PURE__ */ jsx66("span", { className: "w-16 text-center text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70", children: "Hr" }),
                /* @__PURE__ */ jsx66("span", { className: "w-16 text-center text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70", children: "Min" }),
                !use24Hour && /* @__PURE__ */ jsx66("span", { className: "w-16 text-center text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70", children: "AM/PM" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs42("div", { className: "flex items-center justify-around px-2 pb-3", children: [
            /* @__PURE__ */ jsx66(
              ScrollColumn,
              {
                items: hours,
                selected: hour,
                onSelect: handleHourChange,
                renderItem: (h) => pad(h),
                getKey: (h) => h
              }
            ),
            /* @__PURE__ */ jsx66("div", { className: "text-[18px] font-light text-muted-foreground/50 pb-0.5", children: ":" }),
            /* @__PURE__ */ jsx66(
              ScrollColumn,
              {
                items: minutes,
                selected: minute,
                onSelect: handleMinuteChange,
                renderItem: (m) => pad(m),
                getKey: (m) => m
              }
            ),
            !use24Hour && /* @__PURE__ */ jsxs42(Fragment10, { children: [
              /* @__PURE__ */ jsx66("div", { className: "w-px self-stretch bg-border mx-1" }),
              /* @__PURE__ */ jsx66(
                ScrollColumn,
                {
                  items: ["AM", "PM"],
                  selected: period,
                  onSelect: handlePeriodChange,
                  renderItem: (p) => p,
                  getKey: (p) => p
                }
              )
            ] })
          ] })
        ]
      }
    ) : null;
    function mergeRef(el) {
      triggerRef.current = el;
      if (typeof ref === "function") ref(el);
      else if (ref) ref.current = el;
    }
    return /* @__PURE__ */ jsxs42("div", { className: cn("relative", className), children: [
      label && /* @__PURE__ */ jsx66("p", { className: "mb-1.5 text-sm font-medium text-foreground", children: label }),
      /* @__PURE__ */ jsxs42(
        "button",
        {
          ref: mergeRef,
          type: "button",
          disabled,
          onClick: () => open ? setOpen(false) : openPanel(),
          className: cn(
            "flex h-11 min-h-11 w-full items-center gap-3 rounded-lg border border-border bg-card px-4 text-left text-[15px] shadow-sm",
            "transition-colors duration-150",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
            open && "border-ring ring-2 ring-ring/35",
            !open && !disabled && "hover:border-muted-foreground/45",
            disabled && "cursor-not-allowed opacity-50"
          ),
          children: [
            /* @__PURE__ */ jsx66(Clock2, { className: "size-[1.0625rem] shrink-0 text-muted-foreground" }),
            /* @__PURE__ */ jsx66(
              "span",
              {
                className: cn(
                  "flex-1 truncate",
                  value ? "text-foreground" : "text-muted-foreground"
                ),
                children: value ? displayTime(value, use24Hour) : placeholder
              }
            ),
            value && !disabled ? /* @__PURE__ */ jsx66(
              X11,
              {
                className: "size-3.5 shrink-0 text-muted-foreground hover:text-foreground transition-colors duration-150",
                onClick: handleClear
              }
            ) : /* @__PURE__ */ jsx66(
              ChevronDown9,
              {
                className: cn(
                  "size-[1.0625rem] shrink-0 text-muted-foreground transition-transform duration-150",
                  open && "rotate-180"
                )
              }
            )
          ]
        }
      ),
      mounted && panel && createPortal2(panel, document.body)
    ] });
  }
);
TimePicker.displayName = "TimePicker";

// src/heading.tsx
import * as React49 from "react";
import { jsx as jsx67, jsxs as jsxs43 } from "react/jsx-runtime";
var headingSizeClasses = {
  xs: "text-sm font-semibold",
  sm: "text-base font-semibold",
  md: "text-lg font-semibold",
  lg: "text-xl font-semibold",
  xl: "text-2xl font-semibold",
  "2xl": "text-3xl font-semibold tracking-tight",
  "3xl": "text-4xl font-semibold tracking-tight"
};
var headingColorClasses = {
  default: "text-foreground",
  subtle: "text-muted-foreground",
  primary: "text-primary"
};
var defaultSizeForLevel = {
  1: "2xl",
  2: "md",
  3: "md",
  4: "sm",
  5: "xs",
  6: "xs"
};
var Heading = React49.forwardRef(
  ({
    level = 2,
    as,
    size,
    color = "default",
    className,
    children,
    ...props
  }, ref) => {
    const Tag2 = as ?? `h${level}`;
    const resolvedSize = size ?? defaultSizeForLevel[level] ?? "md";
    return /* @__PURE__ */ jsx67(
      Tag2,
      {
        ref,
        className: cn(
          headingSizeClasses[resolvedSize],
          headingColorClasses[color],
          className
        ),
        ...props,
        children
      }
    );
  }
);
Heading.displayName = "Heading";
var textSizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg"
};
var textWeightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold"
};
var textColorClasses = {
  default: "text-foreground",
  subtle: "text-muted-foreground",
  primary: "text-primary",
  disabled: "text-muted-foreground opacity-50"
};
var Text = React49.forwardRef(
  ({
    as: Tag2 = "p",
    size = "sm",
    weight = "normal",
    color = "default",
    truncate = false,
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx67(
      Tag2,
      {
        ref,
        className: cn(
          textSizeClasses[size],
          textWeightClasses[weight],
          textColorClasses[color],
          truncate && "truncate",
          className
        ),
        ...props,
        children
      }
    );
  }
);
Text.displayName = "Text";
var metricSizeClasses = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl"
};
var metricTrendClasses = {
  up: "text-green-600",
  down: "text-red-600",
  neutral: "text-foreground"
};
var MetricText = React49.forwardRef(
  ({
    size = "md",
    trend = "neutral",
    prefix,
    suffix,
    className,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsxs43(
      "span",
      {
        ref,
        className: cn(
          "font-semibold tabular-nums tracking-tight",
          metricSizeClasses[size],
          metricTrendClasses[trend],
          className
        ),
        ...props,
        children: [
          prefix != null && /* @__PURE__ */ jsx67("span", { className: "mr-0.5 text-[0.75em] font-medium opacity-70", children: prefix }),
          children,
          suffix != null && /* @__PURE__ */ jsx67("span", { className: "ml-0.5 text-[0.75em] font-medium opacity-70", children: suffix })
        ]
      }
    );
  }
);
MetricText.displayName = "MetricText";

// src/progress-indicator.tsx
import * as React50 from "react";
import { jsx as jsx68 } from "react/jsx-runtime";
var dotSizeMap = {
  sm: {
    base: "h-1.5 w-1.5",
    active: "h-1.5 w-4"
  },
  md: {
    base: "h-2 w-2",
    active: "h-2 w-6"
  },
  lg: {
    base: "h-2.5 w-2.5",
    active: "h-2.5 w-8"
  }
};
var ProgressIndicator = React50.forwardRef(
  ({ className, selectedIndex, values, size = "md", onChange, ...props }, ref) => {
    const containerRef = React50.useRef(null);
    const handleKeyDown = React50.useCallback(
      (e) => {
        if (!onChange) return;
        if (e.key === "ArrowRight") {
          e.preventDefault();
          const next = Math.min(selectedIndex + 1, values.length - 1);
          if (next !== selectedIndex) onChange(next);
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          const prev = Math.max(selectedIndex - 1, 0);
          if (prev !== selectedIndex) onChange(prev);
        }
      },
      [onChange, selectedIndex, values.length]
    );
    const sizes2 = dotSizeMap[size];
    return /* @__PURE__ */ jsx68(
      "div",
      {
        ref,
        role: "tablist",
        "aria-label": props["aria-label"] ?? "Step indicator",
        tabIndex: 0,
        onKeyDown: handleKeyDown,
        className: cn("flex items-center gap-1.5 outline-none focus-visible:outline-none", className),
        ...props,
        children: values.map((label, index) => {
          const isActive = index === selectedIndex;
          return /* @__PURE__ */ jsx68(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-label": label,
              "aria-current": isActive ? "step" : void 0,
              "aria-selected": isActive,
              tabIndex: -1,
              onClick: () => onChange?.(index),
              className: cn(
                "rounded-full transition-all duration-pg-normal ease-pg-standard",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35",
                "disabled:cursor-not-allowed disabled:opacity-50",
                isActive ? cn("bg-primary", sizes2.active) : cn(
                  "bg-muted-foreground/30 hover:bg-muted-foreground/50",
                  sizes2.base
                )
              )
            },
            index
          );
        })
      }
    );
  }
);
ProgressIndicator.displayName = "ProgressIndicator";

// src/visually-hidden.tsx
import * as React51 from "react";
import { jsx as jsx69 } from "react/jsx-runtime";
var VisuallyHidden = React51.forwardRef(
  ({ as: Component = "span", focusable = false, className, ...props }, ref) => /* @__PURE__ */ jsx69(
    Component,
    {
      ref,
      className: cn(
        focusable ? "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:px-4 focus:py-2 focus:bg-card focus:text-foreground focus:rounded-md focus:shadow-lg focus:ring-2 focus:ring-ring" : "sr-only",
        className
      ),
      ...props
    }
  )
);
VisuallyHidden.displayName = "VisuallyHidden";
export {
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
  Banner,
  Blanket,
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
  COUNTRIES,
  Calendar,
  CalendarDayButton,
  Callout,
  CalloutIcon,
  CalloutText,
  CalloutTitle,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CategoryBarChartTemplate,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartSkeleton,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
  Checkbox,
  CheckboxSelect,
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
  CurrencyAmountInput,
  DashboardAreaChartTemplate,
  DataTable,
  DatePicker,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  EmptyState,
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
  Flag,
  FlagGroup,
  Flex,
  Form,
  FormControl,
  FormDescription,
  FormError,
  FormField,
  FormItem,
  FormLabel,
  Grid,
  GroupedBarChartTemplate,
  Heading,
  Hide,
  IconButton,
  Inline,
  InlineDialog,
  InlineDialogContent,
  InlineDialogTrigger,
  InlineEdit,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
  Label,
  Link,
  Lozenge,
  Menu,
  MenuDivider,
  MenuItem,
  MenuSection,
  MetricSparklineCard,
  MetricText,
  MiniSparklineChartCard,
  OtpInput,
  PageHeader,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PasswordInput,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
  Progress,
  ProgressIndicator,
  ProgressTracker,
  RadioGroup,
  RadioGroupItem,
  RankedBarListTemplate,
  ScrollArea,
  ScrollBar,
  SectionMessage,
  SectionMessageActions,
  SectionMessageContent,
  SectionMessageTitle,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Shimmer,
  Show,
  SideNav,
  SideNavFooter,
  SideNavHeader,
  SideNavItem,
  SideNavSection,
  Slider,
  Spinner,
  SplitButton,
  SplitButtonItem,
  Spotlight,
  SpotlightCard,
  Stack,
  StatCardSkeleton,
  StatusBadge,
  Switch,
  TableRowSkeleton,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tag,
  TagGroup,
  Text,
  Textarea,
  TimePicker,
  Toaster,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  VisuallyHidden,
  cn,
  toast,
  useBreakpoint,
  useFlagGroup,
  useForm,
  useSpotlight
};
//# sourceMappingURL=index.js.map