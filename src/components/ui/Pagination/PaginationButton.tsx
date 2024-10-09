import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const paginationButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none data-disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-gray-primary bg-white text-gray-dark hover:bg-gray-minimum",
        outline:
          "border border-primary bg-white text-primary hover:bg-slate-100 hover:text-slate-900"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface PaginationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof paginationButtonVariants> {
  asChild?: boolean;
}

const PaginationButton = React.forwardRef<
  HTMLButtonElement,
  PaginationButtonProps
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(paginationButtonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
PaginationButton.displayName = "PaginationButton";

export { PaginationButton, paginationButtonVariants };
