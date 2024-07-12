"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ComponentProps, useEffect, useState } from "react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/Tooltip";
import { Product } from "@/services/fecomerciors";
import useProductStore from "@/stores/productStore";
import { toast } from "sonner";

import { PAGE } from "@/constants";

import { CheckFat, ShoppingBag } from "@phosphor-icons/react/dist/ssr";

type Props = ComponentProps<"div"> & {
  furniture: Product;
};
export default function ProductCard({ furniture, ...rest }: Props) {
  const router = useRouter();

  const { addProduct, removeProduct, products } = useProductStore();
  const [isProductInCart, setIsProductInCart] = useState(false);

  useEffect(() => {
    setIsProductInCart(products.some((product) => product.id === furniture.id));
  }, [products, furniture.id]);

  const addToCart = (furniture: Product) => {
    addProduct(furniture);
    toast.success(`Item ${furniture.id} adicionado à sacola!`);
  };

  const removeFromCart = (furniture: Product) => {
    removeProduct(furniture.id);
    toast.success(`Item ${furniture.id} removido da sacola!`);
  };

  const goToProduct = (id: Product["id"]) => {
    router.push(PAGE.FECOMERCIO.FURNITURE_DETAILS(id));
  };

  return (
    <div
      className="cursor-pointer flex flex-col gap-6 border p-4 border-transparent rounded-3xl transition-all ease-in-out hover:bg-gray-minimum hover:border-neutral/50"
      onClick={() => goToProduct(furniture.id)}
      {...rest}
    >
      <Image
        src={furniture.image}
        className="rounded-lg w-[300px] h-[260px] object-fit"
        alt={`Imagem do móvel: ${furniture.description}`}
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
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  isProductInCart
                    ? removeFromCart(furniture)
                    : addToCart(furniture);
                }}
                className="link-btn-secondary w-[48px] h-[48px] p-0"
              >
                {isProductInCart ? (
                  <CheckFat size={32} />
                ) : (
                  <ShoppingBag size={32} />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              {isProductInCart
                ? "Remover item da sacola"
                : "Adicionar item à sacola"}
            </TooltipContent>
          </Tooltip>
        </div>
        <p className="font-medium text-lg">{furniture.city}</p>
      </div>
    </div>
  );
}