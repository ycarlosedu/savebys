"use client";
import { ComponentProps } from "react";

type LabelProps = ComponentProps<"label"> & {
  children: React.ReactNode;
};

export default function Label({ children, ...props }: LabelProps) {
  return (
    <label
      className="text-sm leading-6 font-normal text-gray-dark text-left flex flex-col justify-start gap-2"
      {...props}
    >
      {children}
    </label>
  );
}
