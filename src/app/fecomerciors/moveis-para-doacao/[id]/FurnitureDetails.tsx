"use client";
import { useEffect, useState } from "react";

import Button from "@/components/Button";
import { Product } from "@/services/fecomerciors";
import useProductStore from "@/stores/productStore";
import { toast } from "sonner";

import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

type Props = {
  furniture: Product;
};
export default function FurnitureDetails({ furniture }: Props) {
  const { products, addProduct, removeProduct } = useProductStore();
  const [isProductInCart, setIsProductInCart] = useState(false);

  useEffect(() => {
    setIsProductInCart(products.some((product) => product.id === furniture.id));
  }, [products, furniture.id]);

  const addToCart = (furniture: Product) => {
    addProduct(furniture);
    toast.success("Item adicionado à sacola!");
  };

  const removeFromCart = (furniture: Product) => {
    removeProduct(furniture.id);
    toast.success("Item removido da sacola!");
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-[515px]">
      <Button color="secondary" className="px-8 w-fit h-[58px]">
        <CaretLeft size={16} />
        Voltar
      </Button>
      <h1 className="text-4xl font-bold">{furniture.description}</h1>
      <p className="text-2xl">Onde retirar: {furniture.city}</p>
      <p>Informações: {furniture.additionalInfo}</p>
      <p>Quantidade disponível: {furniture.quantity}</p>
      <Button
        className="h-[58px]"
        onClick={() => {
          isProductInCart ? removeFromCart(furniture) : addToCart(furniture);
        }}
      >
        {isProductInCart ? "Remover item da sacola" : "Adicionar item à sacola"}
        <CaretRight size={16} />
      </Button>
    </div>
  );
}
