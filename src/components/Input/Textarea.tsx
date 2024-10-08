"use client";
import { ComponentProps } from "react";

import { cn } from "@/lib/utils";
type TextProps = ComponentProps<"textarea">;

export default function Textarea({ className, ...props }: TextProps) {
  return (
    <textarea
      className={cn(
        "rounded-lg py-3 px-4 w-full border border-gray-minimum data-invalid:border-error text-[0.825rem] resize-none",
        className
      )}
      {...props}
    />
  );
}
