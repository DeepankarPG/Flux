"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "./utils";

export interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface CommandInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export interface CommandListProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface CommandEmptyProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface CommandGroupProps extends React.HTMLAttributes<HTMLDivElement> { heading?: string; }
export interface CommandItemProps extends React.HTMLAttributes<HTMLDivElement> { selected?: boolean; disabled?: boolean; onSelect?: () => void; }
export interface CommandSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}
export interface CommandShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Command = React.forwardRef<HTMLDivElement, CommandProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("bg-card rounded-xl border border-border shadow-lg overflow-hidden", className)} {...props} />
));
Command.displayName = "Command";

const CommandInput = React.forwardRef<HTMLInputElement, CommandInputProps>(({ className, ...props }, ref) => (
  <div className="flex items-center gap-2 border-b border-border px-3 h-11">
    <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden />
    <input ref={ref} className={cn("flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed", className)} {...props} />
  </div>
));
CommandInput.displayName = "CommandInput";

const CommandList = React.forwardRef<HTMLDivElement, CommandListProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("max-h-72 overflow-y-auto py-1", className)} role="listbox" {...props} />
));
CommandList.displayName = "CommandList";

const CommandEmpty = React.forwardRef<HTMLDivElement, CommandEmptyProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm text-muted-foreground text-center py-6", className)} {...props} />
));
CommandEmpty.displayName = "CommandEmpty";

const CommandGroup = React.forwardRef<HTMLDivElement, CommandGroupProps>(({ className, heading, children, ...props }, ref) => (
  <div ref={ref} className={cn("px-1 py-1", className)} role="group" {...props}>
    {heading && <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{heading}</div>}
    {children}
  </div>
));
CommandGroup.displayName = "CommandGroup";

const CommandItem = React.forwardRef<HTMLDivElement, CommandItemProps>(({ className, selected, disabled, onSelect, children, ...props }, ref) => (
  <div
    ref={ref}
    role="option"
    aria-selected={selected}
    aria-disabled={disabled}
    onClick={disabled ? undefined : onSelect}
    className={cn(
      "flex items-center gap-2 px-2 py-1.5 rounded-md text-sm cursor-pointer transition-colors duration-pg-fast ease-pg-standard select-none",
      selected ? "bg-muted text-foreground" : "text-foreground hover:bg-muted",
      disabled && "pointer-events-none opacity-50",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
CommandItem.displayName = "CommandItem";

const CommandSeparator = React.forwardRef<HTMLDivElement, CommandSeparatorProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("h-px bg-border my-1 -mx-1", className)} {...props} />
));
CommandSeparator.displayName = "CommandSeparator";

const CommandShortcut = React.forwardRef<HTMLSpanElement, CommandShortcutProps>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("ml-auto text-xs text-muted-foreground tracking-widest", className)} {...props} />
));
CommandShortcut.displayName = "CommandShortcut";

export { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut };
