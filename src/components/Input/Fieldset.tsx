"use client";
import { ComponentProps } from "react";

type FieldsetProps = ComponentProps<"fieldset"> & {
  children: React.ReactNode;
};

export default function Fieldset({ children, ...props }: FieldsetProps) {
  return (
    <fieldset className="flex w-full gap-1 flex-col justify-start" {...props}>
      {children}
    </fieldset>
  );
}
