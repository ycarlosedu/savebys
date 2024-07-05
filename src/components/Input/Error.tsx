"use client";
import { ComponentProps } from "react";

type ErrorProps = ComponentProps<"span"> & {
  children: React.ReactNode;
};

export default function Error({ children, ...props }: ErrorProps) {
  if (!children) return null;

  return (
    <span className="text-error text-xs" {...props}>
      {children}
    </span>
  );
}
