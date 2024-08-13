"use client";
import Image from "next/image";
import { ComponentProps } from "react";

import { DonatedProduct } from "@/services/fecomerciors";

import { sliceMaxLength } from "@/constants";

type Props = ComponentProps<"div"> & {
  furniture: DonatedProduct;
};
export default function ProductCardRecent({ furniture, ...rest }: Props) {
  return (
    <div
      className="w-full flex gap-6 border p-4 border-transparent rounded-3xl transition-all ease-in-out"
      {...rest}
    >
      <Image
        src={furniture.image}
        className="rounded-lg w-[100px] h-[100px] object-fit"
        alt={`Imagem do móvel: ${furniture.description}`}
        width={100}
        height={100}
      />
      <div className="flex flex-col gap-1 w-full">
        <p className="font-medium text-xl text-white">
          {sliceMaxLength(furniture.description, 20)}
        </p>
        <p className="font-medium text-lg text-gray-minimum">
          {furniture.city}
        </p>
      </div>
    </div>
  );
}
