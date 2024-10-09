"use client";
import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type LabelProps = ComponentProps<"label"> & {
  children: React.ReactNode;
  required?: boolean;
};

export default function Label({
  children,
  required,
  className,
  ...props
}: LabelProps) {
  return (
    <label
      className={cn(
        "text-sm leading-6 font-normal text-gray-dark text-left flex justify-start gap-1",
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="text-primary">*</span>}
    </label>
  );
}
