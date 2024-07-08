"use client";
import { ComponentProps } from "react";

type LabelProps = ComponentProps<"label"> & {
  children: React.ReactNode;
  required?: boolean;
};

export default function Label({ children, required, ...props }: LabelProps) {
  return (
    <label
      className="text-sm leading-6 font-normal text-gray-dark text-left flex justify-start gap-1"
      {...props}
    >
      {children}
      {required && <span className="text-primary">*</span>}
    </label>
  );
}
