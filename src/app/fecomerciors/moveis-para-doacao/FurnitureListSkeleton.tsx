import ProductCardSkeleton from "@/components/fecomerciors/ProductCard/Skeleton";
import PaginationSkeleton from "@/components/Pagination/Skeleton";

import FurnitureFilter from "./FurnitureFilter";

const numberOfSkeletons = 9;
const skeletons = Array.from({ length: numberOfSkeletons });

type Props = {
  category?: string;
};

export default function FurnitureListSkeleton({ category = "Todos" }: Props) {
  return (
    <section className="flex flex-col gap-8 flex-start w-full">
      <div className="flex items-start justify-between w-full gap-6 flex-col lg:flex-row-reverse lg:items-center">
        <FurnitureFilter />
        <h2 className="text-4xl font-semibold text-gray-secondary">
          {category}
        </h2>
      </div>
      <PaginationSkeleton />
      <div className="flex flex-wrap gap-8 justify-between">
        {skeletons.map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
      <PaginationSkeleton />
    </section>
  );
}
