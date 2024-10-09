"use client";
import { ComponentProps } from "react";

import { cn } from "@/lib/utils";
type TextProps = ComponentProps<"input">;

export default function Text({
  type = "text",
  className,
  ...props
}: TextProps) {
  return (
    <input
      type={type}
      className={cn(
        "rounded-lg py-3 px-4 w-full border border-gray-minimum data-invalid:border-error text-[0.825rem]",
        className
      )}
      {...props}
    />
  );
}
