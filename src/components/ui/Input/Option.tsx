"use client";
import { ComponentProps } from "react";
type OptionProps = ComponentProps<"option">;

export default function Option({ children, ...props }: OptionProps) {
  return (
    <option
      className="rounded-lg py-3 px-4 w-full border border-gray-minimum data-invalid:border-error text-[0.825rem]"
      {...props}
    >
      {children}
    </option>
  );
}
