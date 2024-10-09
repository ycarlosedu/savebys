"use client";
import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type ErrorProps = ComponentProps<"span"> & {
  length: number;
  maxLength: number;
};

export default function Length({
  length,
  maxLength,
  className,
  ...props
}: ErrorProps) {
  return (
    <span className={cn("text-xs", className)} {...props}>
      {length} / {maxLength}
    </span>
  );
}
