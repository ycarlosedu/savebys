"use client";
import Image from "next/image";
import { ComponentProps, useState } from "react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/Tooltip";
import { Product } from "@/services/fecomerciors";
import useProductStore from "@/stores/productStore";
import { toast } from "sonner";

import { Minus, Plus, Trash } from "@phosphor-icons/react/dist/ssr";

type Props = ComponentProps<"div"> & {
  furniture: Product;
};
export default function ProductBagCard({ furniture, ...rest }: Props) {
  const { removeProduct, increaseProductQuantity, decreaseProductQuantity } =
    useProductStore();
  const [animation, setAnimation] = useState(false);

  const removeFromCart = (furniture: Product) => {
    removeProduct(furniture.id);
  };

  const startAnimation = () => {
    toast.success(`Item ${furniture.id} removido da sacola!`);
    setAnimation(true);
    setTimeout(() => {
      removeFromCart(furniture);
    }, 500);
  };

  return (
    <div
      className={`flex gap-8 p-8 w-full border border-black rounded-[32px] ${animation ? "animate-hideAndScaleDown" : ""}`}
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
                onClick={startAnimation}
                className="link-btn-secondary min-w-12 w-12 h-12 p-0"
              >
                <Trash size={32} />
              </button>
            </TooltipTrigger>
            <TooltipContent>Remover item da sacola</TooltipContent>
          </Tooltip>

          <div className="flex items-center overflow-hidden border border-gray-secondary rounded-lg min-w-fit">
            <button
              disabled={furniture.quantitySelected === 1}
              onClick={() => decreaseProductQuantity(furniture.id)}
              className="px-3 w-12 h-12 p-1 flex items-center justify-center disabled:bg-gray-primary"
            >
              <Minus size={24} />
            </button>
            <p className="px-3 w-8 h-12 p-1 font-bold text-gray-dark flex items-center justify-center">
              {furniture.quantitySelected || 1}
            </p>
            <button
              onClick={() => increaseProductQuantity(furniture.id)}
              disabled={furniture.quantitySelected === furniture.quantity}
              className="px-3 w-12 h-12 p-1 flex items-center justify-center disabled:bg-gray-primary"
            >
              <Plus size={24} />
            </button>
          </div>
        </div>
        <p className="font-medium text-lg text-gray-secondary">
          Onde retirar: {furniture.city}
        </p>
        <p className="font-medium text-lg text-gray-secondary">
          Quantidade disponível: {furniture.quantity}
        </p>
      </div>
    </div>
  );
}
