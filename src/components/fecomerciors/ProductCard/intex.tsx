"use client";
import Image from "next/image";
import { ComponentProps } from "react";

import Button from "@/components/Button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/Tooltip";
import { Product } from "@/services/fecomerciors";
import { toast } from "sonner";

import { ShoppingBag } from "@phosphor-icons/react/dist/ssr";

type Props = ComponentProps<"div"> & {
  furniture: Product;
};
export default function ProductCard({ furniture, ...rest }: Props) {
  const addToCart = (furniture: Product) => {
    console.log("🚀 ~ addToCart ~ furniture:", furniture);
    toast.success("Item adicionado à sacola!");
  };

  return (
    <div className="flex flex-col gap-6" {...rest}>
      <Image
        src={furniture.image}
        className="rounded-lg w-[300px] h-[260px] object-fit"
        alt="Imagem de um móvel"
        width={300}
        height={260}
      />
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between">
          <p className="font-medium text-xl text-black">
            {furniture.description}
          </p>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => addToCart(furniture)}
                color="secondary"
                className="w-[48px] h-[48px] p-0"
              >
                <ShoppingBag size={32} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Adicionar item à sacola</TooltipContent>
          </Tooltip>
        </div>
        <p className="font-medium text-lg">{furniture.city}</p>
      </div>
    </div>
  );
}
