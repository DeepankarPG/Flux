"use client";

import { useState } from "react";
import { OtpInput } from "@payglocal_ui/flux-ui";
import { DocsVariantField, DocsVariantSelect, DocsVariantToolbar } from "@/components/docs/DocsVariantToolbar";

export function OtpInputPlayground() {
  const [value, setValue] = useState("");
  const [length, setLength] = useState<4 | 6>(6);
  const [invalid, setInvalid] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleChange = (v: string) => {
    setValue(v);
    setCompleted(false);
    setInvalid(false);
  };

  const handleComplete = (v: string) => {
    setCompleted(v !== "000000" && v !== "0000");
    setInvalid(v === "000000" || v === "0000");
  };

  const handleLengthChange = (v: string) => {
    setLength(Number(v) as 4 | 6);
    setValue("");
    setCompleted(false);
    setInvalid(false);
  };

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="w-full max-w-xl">
        <DocsVariantToolbar>
          <DocsVariantField label="Length">
            <DocsVariantSelect
              value={String(length)}
              onChange={handleLengthChange}
              options={[
                { value: "6", label: "6 digits" },
                { value: "4", label: "4 digits" },
              ]}
            />
          </DocsVariantField>
        </DocsVariantToolbar>
      </div>

      <div className="flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <p className="text-sm text-muted-foreground">
          Enter the {length}-digit code sent to your device.{" "}
          <span className="text-xs">(Try all zeros to trigger invalid state.)</span>
        </p>
        <OtpInput
          value={value}
          onChange={handleChange}
          onComplete={handleComplete}
          length={length}
          invalid={invalid}
          autoFocus
        />
        {completed && (
          <p className="text-sm font-medium text-green-600 dark:text-green-400">
            Code verified successfully.
          </p>
        )}
        {invalid && (
          <p className="text-sm text-destructive">
            Invalid code. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
