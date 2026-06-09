"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "./utils";

type DrawerSide = "right" | "left" | "top" | "bottom";
const DrawerContext = React.createContext<{ side: DrawerSide }>({ side: "right" });

interface DrawerProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> { side?: DrawerSide; }

const Drawer = ({ side = "right", children, ...props }: DrawerProps) => (
  <DrawerContext.Provider value={{ side }}>
    <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
  </DrawerContext.Provider>
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DialogPrimitive.Trigger;
const DrawerClose = DialogPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className)}
    {...props}
  />
));
DrawerOverlay.displayName = "DrawerOverlay";

const sideClasses: Record<DrawerSide, string> = {
  right: "inset-y-0 right-0 h-full w-80 sm:w-96 border-l data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
  left: "inset-y-0 left-0 h-full w-80 sm:w-96 border-r data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
  top: "inset-x-0 top-0 w-full border-b rounded-b-2xl data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
  bottom: "inset-x-0 bottom-0 w-full border-t rounded-t-2xl max-h-[85vh] data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
};

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { side } = React.useContext(DrawerContext);
  return (
    <DialogPrimitive.Portal>
      <DrawerOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn("fixed z-50 flex flex-col bg-card border-border shadow-xl transition-all duration-pg-normal ease-pg-standard data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-200", sideClasses[side], className)}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground opacity-70 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/35">
          <X className="size-4" /><span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("px-6 pt-6 pb-4 border-b border-border", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("px-6 py-4 border-t border-border flex gap-2 justify-end mt-auto", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn("text-base font-semibold text-foreground pr-6", className)} {...props} />
));
DrawerTitle.displayName = "DrawerTitle";

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn("mt-1 text-sm text-muted-foreground", className)} {...props} />
));
DrawerDescription.displayName = "DrawerDescription";

export { Drawer, DrawerTrigger, DrawerClose, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription };
