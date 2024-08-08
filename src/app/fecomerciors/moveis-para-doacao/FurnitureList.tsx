"use client";
import { useRouter } from "next/navigation";

import ProductCard from "@/components/fecomerciors/ProductCard";
import { FloatingButton } from "@/components/FloatingButton";
import fecomerciorsServices from "@/services/fecomerciors";
import useProductStore from "@/stores/productStore";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import { FURNITURE_CATEGORIES, PAGE } from "@/constants";

import { ShoppingBagOpen } from "@phosphor-icons/react/dist/ssr";

import FurnitureFilter from "./FurnitureFilter";
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

  const category =
    FURNITURE_CATEGORIES[filters.category as keyof typeof FURNITURE_CATEGORIES];

  if (isPending) return <FurnitureListSkeleton category={category} />;

  const goToBagPage = () => {
    router.push(PAGE.FECOMERCIO.FURNITURE_BAG);
  };

  return (
    <section className="flex flex-col gap-8 flex-start w-full">
      <div className="flex items-start justify-between w-full gap-6 flex-col lg:flex-row-reverse lg:items-center">
        <FurnitureFilter />
        <h2 className="text-4xl font-semibold text-gray-secondary">
          {category}
        </h2>
      </div>
      {!data?.products || data?.products.length === 0 ? (
        <p className="w-full text-xl text-center">
          Nenhum produto encontrado...
        </p>
      ) : (
        <>
          <FurniturePagination />
          <div className="flex flex-wrap gap-8 justify-center md:justify-between">
            {data?.products.map((furniture) => (
              <ProductCard furniture={furniture} key={furniture.id} />
            ))}
          </div>
          <FurniturePagination />
        </>
      )}
      <FloatingButton
        onClick={goToBagPage}
        className={`bottom-20`}
        animation={animateBagButton ? "animate-wiggle" : undefined}
        onAnimationEnd={() => setAnimateBagButton(false)}
        aria-label="Ir para minha sacola"
      >
        <span className="sr-only">Ir para minha sacola</span>
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
