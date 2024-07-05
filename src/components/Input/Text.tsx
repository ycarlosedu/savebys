"use client";
import { ComponentProps } from "react";
type TextProps = ComponentProps<"input">;

export default function Text({ type = "text", ...props }: TextProps) {
  return (
    <input
      type={type}
      className="rounded-lg py-3 px-4 w-full border border-gray-minimum data-invalid:border-error text-[0.825rem]"
      {...props}
    />
  );
}
