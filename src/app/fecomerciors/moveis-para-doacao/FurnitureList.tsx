"use client";
import ProductCard from "@/components/fecomerciors/ProductCard/intex";
import { getProductsResponse } from "@/services/fecomerciors";

import FurniturePagination from "./FurniturePagination";

type Props = {
  furnitures: getProductsResponse;
};

export default function FurnitureList({ furnitures }: Props) {
  return (
    <section className="flex flex-col gap-8 py-8 flex-start w-full">
      <h2 className="text-4xl font-semibold text-gray-secondary">Todos</h2>
      <FurniturePagination furnitures={furnitures} />

      <div className="flex flex-wrap gap-8 justify-between">
        {furnitures.products.map((furniture) => (
          <ProductCard furniture={furniture} key={furniture.id} />
        ))}
      </div>

      <FurniturePagination furnitures={furnitures} />
    </section>
  );
}
