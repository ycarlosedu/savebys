"use client";
import ProductCard from "@/components/fecomerciors/ProductCard";
import fecomerciorsServices from "@/services/fecomerciors";
import useProductStore from "@/stores/productStore";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import FurnitureListSkeleton from "./FurnitureListSkeleton";
import FurniturePagination from "./FurniturePagination";

export default function FurnitureList() {
  const { currentPage, totalPages, updateTotalPages, filters } =
    useProductStore();
  const { data, isPending } = useQuery({
    queryKey: ["posts", currentPage, filters.category],
    queryFn: () =>
      fecomerciorsServices.getProducts(currentPage, filters.category),
    placeholderData: keepPreviousData
  });

  if (data?.numberOfPages && data?.numberOfPages != totalPages)
    updateTotalPages(data.numberOfPages);

  if (isPending) return <FurnitureListSkeleton category={filters.category} />;

  return (
    <section className="flex flex-col gap-8 py-8 flex-start w-full">
      <h2 className="text-4xl font-semibold text-gray-secondary">
        {filters.category}
      </h2>
      {data?.products.length === 0 ? (
        <p className="w-full text-xl text-center">
          Nenhum produto encontrado...
        </p>
      ) : (
        <>
          <FurniturePagination />
          <div className="flex flex-wrap gap-8 justify-between">
            {data?.products.map((furniture) => (
              <ProductCard furniture={furniture} key={furniture.id} />
            ))}
          </div>
          <FurniturePagination />
        </>
      )}
    </section>
  );
}
