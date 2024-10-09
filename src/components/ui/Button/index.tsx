"use client";

import { ComponentProps } from "react";

import Loader from "@/components/ui/Loader";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "border gap-2 flex items-center justify-center border-primary py-2 px-4 transition-all ease-in-out data-disabled:bg-gray-secondary data-disabled:border-gray-secondary data-disabled:text-white",
  variants: {
    color: {
      primary: "bg-primary text-white  hover:bg-white hover:text-primary",
      secondary: "bg-white text-primary hover:bg-primary hover:text-white"
    },
    rounded: {
      true: "rounded-full",
      false: "rounded-md"
    }
  }
});

type ButtonVariants = VariantProps<typeof button>;

export type ButtonProps = ComponentProps<"button"> &
  ButtonVariants & {
    isLoading?: boolean;
  };

export default function Button({
  isLoading = false,
  className,
  color = "primary",
  rounded = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      disabled={isLoading || props.disabled}
      data-disabled={isLoading || props.disabled}
      className={button({ color, rounded, className })}
      {...props}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
}
