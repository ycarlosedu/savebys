"use client";
import Image from "next/image";
import { ComponentProps } from "react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/Tooltip";
import { Product } from "@/services/fecomerciors";
import useProductStore from "@/stores/productStore";
import { toast } from "sonner";

import { Trash } from "@phosphor-icons/react/dist/ssr";

type Props = ComponentProps<"div"> & {
  furniture: Product;
};
export default function ProductBagCard({ furniture, ...rest }: Props) {
  const { removeProduct } = useProductStore();

  const removeFromCart = (furniture: Product) => {
    removeProduct(furniture.id);
    toast.success("Item removido da sacola!");
  };

  return (
    <div
      className="flex gap-8 p-8 w-full border border-black rounded-[32px]"
      {...rest}
    >
      <Image
        src={furniture.image}
        className="rounded-lg w-[200px] h-[200px] object-fit"
        alt={`Imagem do móvel: ${furniture.description}`}
        width={200}
        height={200}
      />
      <div className="flex flex-col gap-3 w-full">
        <div className="flex items-center justify-between gap-6">
          <p className="text-2xl text-gray-secondary w-full">
            {furniture.description}
          </p>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => removeFromCart(furniture)}
                className="link-btn-secondary w-[48px] h-[48px] p-0"
              >
                <Trash size={32} />
              </button>
            </TooltipTrigger>
            <TooltipContent>Remover item da sacola</TooltipContent>
          </Tooltip>
        </div>
        <p className="font-medium text-lg text-gray-secondary">
          Onde retirar: {furniture.city}
        </p>
      </div>
    </div>
  );
}
