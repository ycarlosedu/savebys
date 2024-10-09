"use client";
import { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type FieldsetProps = ComponentProps<"fieldset"> & {
  children: React.ReactNode;
};

export default function Fieldset({
  children,
  className,
  ...props
}: FieldsetProps) {
  return (
    <fieldset
      className={cn("flex w-full gap-1 flex-col justify-start", className)}
      {...props}
    >
      {children}
    </fieldset>
  );
}
