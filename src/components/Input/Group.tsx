"use client";
import { ComponentProps } from "react";

type GroupProps = ComponentProps<"div"> & {
  children: React.ReactNode;
};

export default function Group({ children, ...props }: GroupProps) {
  return (
    <div
      className="flex flex-col w-full gap-3 items-start md:flex-row"
      {...props}
    >
      {children}
    </div>
  );
}
