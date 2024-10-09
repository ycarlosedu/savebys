"use client";
import ProductBagCard from "@/components/fecomerciors/ProductBagCard";
import Button from "@/components/ui/Button";
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
      {!products.length && (
        <p className="w-full text-xl text-center">
          Ops! Parece que você ainda não adicionou nenhum item à sua sacola...
        </p>
      )}
      {products.map((product) => (
        <ProductBagCard key={product.id} furniture={product} />
      ))}
      {!!products.length && (
        <>
          <Button
            disabled={!products.length}
            onClick={() => toggleMenu(MENU.RECIPIENT_FORM)}
            className="h-[54px] px-8"
          >
            Confirmar Solicitação
            <CaretRight size={16} />
          </Button>
        </>
      )}
    </>
  );
}
