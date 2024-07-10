"use client";
import Button from "@/components/Button";
import Dialog from "@/components/Dialog";
import ProductBagCard from "@/components/fecomerciors/ProductBagCard/intex";
import useMenuStore, { MENU } from "@/stores/menuStore";
import useProductStore from "@/stores/productStore";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export default function ProductList() {
  const { toggleMenu } = useMenuStore();
  const { products } = useProductStore();

  return (
    <>
      <h1 className="text-gray-secondary text-4xl font-bold self-start">
        Móveis Selecionados: {products.length}
      </h1>
      {products.map((product) => (
        <ProductBagCard key={product.id} furniture={product} />
      ))}
      <Button
        disabled={!products.length}
        onClick={() => toggleMenu(MENU.RECIPIENT_FORM)}
        className="h-[54px] px-8"
      >
        Confirmar Solicitação
        <CaretRight size={16} />
      </Button>
      <Dialog.RecipientForm />
    </>
  );
}
