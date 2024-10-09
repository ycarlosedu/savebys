"use client";
import { ComponentProps } from "react";
type SelectProps = ComponentProps<"select">;

export default function Select({ children, ...props }: SelectProps) {
  return (
    <select
      className="rounded-lg py-3 px-4 w-full border border-gray-minimum data-invalid:border-error text-[0.825rem]"
      {...props}
    >
      {children}
    </select>
  );
}
