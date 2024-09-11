"use client";

import * as React from "react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";

import { Check } from "@phosphor-icons/react";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-6 w-6 shrink-0 transition-all duration-300 ease-in-out rounded-md shadow-lg border overflow-hidden border-slate-300  ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-slate-900 data-[state=checked]:text-slate-50",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        "flex items-center justify-center text-current w-full h-full"
      )}
    >
      <Check weight="bold" size={20} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

type CheckboxFieldProps = React.ComponentProps<"fieldset">;
const CheckboxFieldset = ({ children, ...rest }: CheckboxFieldProps) => {
  return (
    <fieldset className="flex flex-col space-x-2 w-full" {...rest}>
      {children}
    </fieldset>
  );
};

type CheckboxGroupProps = React.ComponentProps<"div">;
const CheckboxGroup = ({ children, ...rest }: CheckboxGroupProps) => {
  return (
    <div className="flex items-center space-x-2 w-full" {...rest}>
      {children}
    </div>
  );
};

type CheckboxLabelProps = React.ComponentProps<"label">;
const CheckboxLabel = ({ children, ...rest }: CheckboxLabelProps) => {
  return (
    <label
      className="text-sm leading-6 font-normal text-gray-dark flex justify-start gap-1 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      {...rest}
    >
      {children}
    </label>
  );
};

export { Checkbox, CheckboxLabel, CheckboxFieldset, CheckboxGroup };
