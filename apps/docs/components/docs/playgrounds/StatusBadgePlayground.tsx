"use client";

import { Stack, StatusBadge } from "@deepankarraj/flux-ui";
import type { BadgeVariant, BadgeTrailIcon } from "@deepankarraj/flux-ui";

type BadgeExample = { label: string; variant: BadgeVariant; trailIcon?: BadgeTrailIcon };

const EXAMPLES: BadgeExample[] = [
  { label: "Success",            variant: "success",  trailIcon: "check" },
  { label: "Settled",            variant: "success",  trailIcon: "check" },
  { label: "Sent for capture",   variant: "success",  trailIcon: "check" },
  { label: "In progress",        variant: "warning" },
  { label: "Pending",            variant: "warning" },
  { label: "Sent for review",    variant: "warning",  trailIcon: "clock" },
  { label: "Refunded",           variant: "refund",   trailIcon: "refresh" },
  { label: "Refund started",     variant: "refund" },
  { label: "Failed",             variant: "danger",   trailIcon: "x" },
  { label: "Issuer decline",     variant: "danger",   trailIcon: "x" },
  { label: "Action required",    variant: "orange",   trailIcon: "alert" },
  { label: "Under review",       variant: "info",     trailIcon: "arrow-right" },
  { label: "Draft",              variant: "muted" },
  { label: "Unknown",            variant: "muted",    trailIcon: "info" },
];

export function StatusBadgePlayground() {
  return (
    <Stack gap="lg" className="w-full text-left">
      <div>
        <p className="mb-3 text-sm font-medium text-foreground">Sizes</p>
        <div className="flex flex-wrap items-center gap-3">
          <StatusBadge variant="success" label="Settled" trailIcon="check" size="sm" />
          <StatusBadge variant="success" label="Settled" trailIcon="check" size="md" />
        </div>
      </div>
      <div>
        <p className="mb-3 text-sm font-medium text-foreground">All variants</p>
        <div className="flex max-h-[min(24rem,50vh)] flex-wrap gap-2 overflow-y-auto rounded-lg border border-border bg-muted/20 p-3">
          {EXAMPLES.map((ex) => (
            <StatusBadge key={ex.label} variant={ex.variant} label={ex.label} trailIcon={ex.trailIcon} size="sm" />
          ))}
        </div>
      </div>
    </Stack>
  );
}
