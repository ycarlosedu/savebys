"use client";
import { Suspense } from "react";

import ProductCard from "@/components/fecomerciors/ProductCard/intex";
import { Skeleton } from "@/components/Skeleton";
import fecomerciorsServices from "@/services/fecomerciors";
import useProductStore from "@/stores/productStore";
import { useQuery } from "@tanstack/react-query";

import FurniturePagination from "./FurniturePagination";

export default function FurnitureList() {
  const { currentPage, totalPages, updateTotalPages, filters } =
    useProductStore();
  const { data } = useQuery({
    queryKey: ["posts", currentPage, filters.category],
    queryFn: () =>
      fecomerciorsServices.getProducts(currentPage, filters.category)
  });

  if (data?.numberOfPages && data?.numberOfPages != totalPages)
    updateTotalPages(data.numberOfPages);

  return (
    <section className="flex flex-col gap-8 py-8 flex-start w-full">
      <h2 className="text-4xl font-semibold text-gray-secondary">Todos</h2>
      <FurniturePagination />

      <div className="flex flex-wrap gap-8 justify-between">
        <Suspense
          fallback={<Skeleton className="bg-black w-[500px] h-[500px]" />}
        >
          {data?.products.map((furniture) => (
            <ProductCard furniture={furniture} key={furniture.id} />
          ))}
        </Suspense>
      </div>

      <FurniturePagination />
    </section>
  );
}