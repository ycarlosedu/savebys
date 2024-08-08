"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ComponentProps } from "react";

import { Product } from "@/services/fecomerciors";

import { PAGE, sliceMaxLength } from "@/constants";

type Props = ComponentProps<"div"> & {
  furniture: Product;
};
export default function ProductCardRecent({ furniture, ...rest }: Props) {
  const router = useRouter();

  const goToProduct = (id: Product["id"]) => {
    router.push(PAGE.FECOMERCIO.FURNITURE_DETAILS(id));
  };

  return (
    <div
      className="w-full cursor-pointer flex gap-6 border p-4 border-transparent rounded-3xl transition-all ease-in-out hover:bg-gray-primary"
      onClick={() => goToProduct(furniture.id)}
      aria-label="Clique aqui para ver detalhes do móvel"
      {...rest}
    >
      <Image
        src={furniture.image}
        className="rounded-lg w-[100px] h-[100px] object-fit"
        alt={`Imagem do móvel: ${furniture.productDescription}`}
        width={100}
        height={100}
      />
      <div className="flex flex-col gap-1 w-full">
        <p className="font-medium text-xl text-white">
          {sliceMaxLength(furniture.productDescription, 43)}
        </p>
        <p className="font-medium text-lg text-gray-minimum">
          {furniture.city}
        </p>
      </div>
    </div>
  );
}
