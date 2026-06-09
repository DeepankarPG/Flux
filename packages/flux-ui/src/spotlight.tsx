"use client";

import * as React from "react";
import { X, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { cn } from "./utils";

export interface SpotlightStep {
  title: string;
  body: string;
  image?: React.ReactNode;
}

export interface SpotlightCardProps {
  title: string;
  body: string;
  image?: React.ReactNode;
  currentStep?: number;
  totalSteps?: number;
  onNext?: () => void;
  onBack?: () => void;
  onDismiss?: () => void;
  nextLabel?: string;
  className?: string;
}

const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  ({ title, body, image, currentStep, totalSteps, onNext, onBack, onDismiss, nextLabel, className }, ref) => {
    const isLast = currentStep !== undefined && totalSteps !== undefined && currentStep >= totalSteps - 1;
    return (
      <div ref={ref} className={cn("bg-card border border-border rounded-xl shadow-xl p-5 w-72", className)}>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="absolute top-3 right-3 rounded-md p-1 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35"
            aria-label="Dismiss"
          >
            <X className="size-4" />
          </button>
        )}
        {image && <div className="mb-4">{image}</div>}
        <h3 className="font-semibold text-base text-foreground pr-6">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{body}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            {totalSteps && totalSteps > 1 && (
              <>
                <span className="text-xs text-muted-foreground">{(currentStep ?? 0) + 1} of {totalSteps}</span>
                <div className="flex gap-1">
                  {Array.from({ length: totalSteps }).map((_, i) => (
                    <span
                      key={i}
                      className={cn(
                        "rounded-full transition-all duration-pg-fast",
                        i === (currentStep ?? 0)
                          ? "w-4 h-1.5 bg-primary"
                          : "w-1.5 h-1.5 bg-muted-foreground/30"
                      )}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="flex gap-2">
            {onBack && (currentStep ?? 0) > 0 && (
              <button
                onClick={onBack}
                className="inline-flex items-center gap-1 h-8 px-3 rounded-lg text-xs font-medium text-muted-foreground hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35"
              >
                <ChevronLeft className="size-3" /> Back
              </button>
            )}
            {onNext && (
              <button
                onClick={onNext}
                className="inline-flex items-center gap-1 h-8 px-3 rounded-lg text-xs font-medium bg-primary text-primary-foreground hover:bg-[var(--primary-hover)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35"
              >
                {isLast ? (
                  <><Check className="size-3" /> {nextLabel ?? "Done"}</>
                ) : (
                  <>{nextLabel ?? "Next"} <ChevronRight className="size-3" /></>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
);
SpotlightCard.displayName = "SpotlightCard";

export interface SpotlightProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Spotlight = ({ isOpen, onClose, children, className }: SpotlightProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={cn("relative z-10 flex items-center justify-center min-h-full p-4", className)}>
        {children}
      </div>
    </div>
  );
};
Spotlight.displayName = "Spotlight";

export interface UseSpotlightReturn {
  isOpen: boolean;
  currentStep: number;
  open: () => void;
  close: () => void;
  goNext: () => void;
  goBack: () => void;
  goTo: (step: number) => void;
}

export function useSpotlight(steps: SpotlightStep[], initialStep = 0): UseSpotlightReturn {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(initialStep);

  return {
    isOpen,
    currentStep,
    open: () => { setCurrentStep(initialStep); setIsOpen(true); },
    close: () => setIsOpen(false),
    goNext: () => {
      if (currentStep >= steps.length - 1) setIsOpen(false);
      else setCurrentStep(s => s + 1);
    },
    goBack: () => setCurrentStep(s => Math.max(0, s - 1)),
    goTo: (step) => setCurrentStep(Math.max(0, Math.min(step, steps.length - 1))),
  };
}

export { Spotlight, SpotlightCard };
