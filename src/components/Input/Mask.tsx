"use client";
import MaskedInput, { MaskedInputProps } from "react-text-mask";
type MaskProps = MaskedInputProps;

export default function Mask({ type = "text", ...props }: MaskProps) {
  return (
    <MaskedInput
      type={type}
      className="rounded-lg py-3 px-4 w-full border border-gray-minimum data-invalid:border-error text-[0.825rem]"
      {...props}
    />
  );
}
