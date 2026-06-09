"use client";

import * as React from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "./utils";

export type FormValues = Record<string, string>;
export type FormErrors = Record<string, string>;

export interface ValidatorRule {
  required?: boolean | string;
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
  validate?: (value: string) => string | undefined;
}

export interface FieldConfig {
  defaultValue?: string;
  rules?: ValidatorRule;
}

export type FieldsConfig = Record<string, FieldConfig>;

export interface RegisterResult {
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onBlur: () => void;
}

export interface UseFormReturn {
  values: FormValues;
  errors: FormErrors;
  register: (name: string) => RegisterResult;
  handleSubmit: (onValid: (values: FormValues) => void, onInvalid?: (errors: FormErrors) => void) => (e: React.FormEvent) => void;
  setError: (name: string, message: string) => void;
  clearError: (name: string) => void;
  reset: () => void;
  setValue: (name: string, value: string) => void;
}

export function useForm(fields: FieldsConfig = {}): UseFormReturn {
  const initial = Object.fromEntries(Object.entries(fields).map(([k, v]) => [k, v.defaultValue ?? ""]));
  const [values, setValues] = React.useState<FormValues>(initial);
  const [errors, setErrors] = React.useState<FormErrors>({});

  function validate(name: string, value: string): string | undefined {
    const rules = fields[name]?.rules;
    if (!rules) return undefined;
    if (rules.required && !value.trim()) return typeof rules.required === "string" ? rules.required : "This field is required";
    if (rules.minLength && value.length < rules.minLength.value) return rules.minLength.message;
    if (rules.maxLength && value.length > rules.maxLength.value) return rules.maxLength.message;
    if (rules.pattern && !rules.pattern.value.test(value)) return rules.pattern.message;
    if (rules.validate) return rules.validate(value);
  }

  const register = (name: string): RegisterResult => ({
    name,
    id: name,
    value: values[name] ?? "",
    onChange: (e) => setValues(v => ({ ...v, [name]: e.target.value })),
    onBlur: () => {
      const err = validate(name, values[name] ?? "");
      setErrors(e => err ? { ...e, [name]: err } : (({ [name]: _, ...rest }) => rest)(e));
    },
  });

  const handleSubmit = (onValid: (v: FormValues) => void, onInvalid?: (e: FormErrors) => void) => (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};
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
    setError: (name, msg) => setErrors(e => ({ ...e, [name]: msg })),
    clearError: (name) => setErrors(e => (({ [name]: _, ...rest }) => rest)(e)),
    reset: () => { setValues(initial); setErrors({}); },
    setValue: (name, value) => setValues(v => ({ ...v, [name]: value })),
  };
}

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form = React.forwardRef<HTMLFormElement, FormProps>(
  ({ className, ...props }, ref) => (
    <form ref={ref} className={cn("space-y-4", className)} {...props} />
  )
);
Form.displayName = "Form";

export interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormItem = React.forwardRef<HTMLDivElement, FormItemProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-1.5", className)} {...props} />
  )
);
FormItem.displayName = "FormItem";

export interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

const FormLabel = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, required, children, ...props }, ref) => (
    <label ref={ref} className={cn("text-sm font-medium text-foreground", className)} {...props}>
      {children}
      {required && <span className="ml-1 text-destructive">*</span>}
    </label>
  )
);
FormLabel.displayName = "FormLabel";

export interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormControl = React.forwardRef<HTMLDivElement, FormControlProps>(
  ({ ...props }, ref) => <div ref={ref} {...props} />
);
FormControl.displayName = "FormControl";

export interface FormDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const FormDescription = React.forwardRef<HTMLParagraphElement, FormDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-xs text-muted-foreground", className)} {...props} />
  )
);
FormDescription.displayName = "FormDescription";

export interface FormErrorProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const FormError = React.forwardRef<HTMLParagraphElement, FormErrorProps>(
  ({ className, children, ...props }, ref) =>
    children ? (
      <p ref={ref} className={cn("flex items-center gap-1 text-xs text-destructive", className)} {...props}>
        <AlertCircle className="size-3 shrink-0" />
        {children}
      </p>
    ) : null
);
FormError.displayName = "FormError";

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {}

const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-1.5", className)} {...props} />
  )
);
FormField.displayName = "FormField";

export { Form, FormItem, FormLabel, FormControl, FormDescription, FormError, FormField };
