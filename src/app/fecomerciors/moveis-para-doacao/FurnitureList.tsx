"use client";
import { useRouter } from "next/navigation";

import ProductCard from "@/components/fecomerciors/ProductCard";
import { FloatingButton } from "@/components/FloatingButton";
import fecomerciorsServices from "@/services/fecomerciors";
import useProductStore from "@/stores/productStore";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { PAGE } from "@/constants";

import { ShoppingBagOpen } from "@phosphor-icons/react/dist/ssr";

import FurnitureListSkeleton from "./FurnitureListSkeleton";
import FurniturePagination from "./FurniturePagination";

export default function FurnitureList() {
  const router = useRouter();

  const {
    currentPage,
    totalPages,
    updateTotalPages,
    filters,
    products,
    animateBagButton,
    setAnimateBagButton
  } = useProductStore();
  const { data, isPending } = useQuery({
    queryKey: ["posts", currentPage, filters.category],
    queryFn: () =>
      fecomerciorsServices.getProducts(currentPage, filters.category),
    placeholderData: keepPreviousData
  });

  if (data?.numberOfPages && data?.numberOfPages != totalPages)
    updateTotalPages(data.numberOfPages);

  if (isPending) return <FurnitureListSkeleton category={filters.category} />;

  const goToBagPage = () => {
    router.push(PAGE.FECOMERCIO.FURNITURE_BAG);
  };

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
      <FloatingButton
        aria-label="Ir para minha sacola"
        onClick={goToBagPage}
        className={`bottom-20`}
        animation={animateBagButton ? "animate-wiggle" : undefined}
        onAnimationEnd={() => setAnimateBagButton(false)}
      >
        <ShoppingBagOpen size={32} />
        {products.length > 0 && (
          <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center">
            {products.length}
          </span>
        )}
      </FloatingButton>
    </section>
  );
}
