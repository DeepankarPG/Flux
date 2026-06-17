"use client";

import { useState } from "react";
import { Field, FieldError, FieldLabel, PasswordInput } from "@payglocal_ui/flux-ui";
import { DocsVariantField, DocsVariantSelect, DocsVariantToolbar } from "@/components/docs/DocsVariantToolbar";

type FieldState = "default" | "disabled" | "invalid";

export function PasswordInputPlayground() {
  const [fieldState, setFieldState] = useState<FieldState>("default");

  const disabled = fieldState === "disabled";
  const invalid = fieldState === "invalid";

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="w-full max-w-xl">
        <DocsVariantToolbar>
          <DocsVariantField label="State">
            <DocsVariantSelect
              value={fieldState}
              onChange={(v) => setFieldState(v as FieldState)}
              options={[
                { value: "default", label: "Default" },
                { value: "disabled", label: "Disabled" },
                { value: "invalid", label: "Invalid" },
              ]}
            />
          </DocsVariantField>
        </DocsVariantToolbar>
      </div>

      <div className="w-full max-w-sm rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <Field>
          <FieldLabel htmlFor="demo-password">Password</FieldLabel>
          <PasswordInput
            id="demo-password"
            placeholder="Enter your password"
            disabled={disabled}
            aria-invalid={invalid || undefined}
            className="mt-1.5"
          />
          {invalid ? (
            <FieldError>Password must be at least 8 characters.</FieldError>
          ) : null}
        </Field>
      </div>
    </div>
  );
}
