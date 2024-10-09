import ProductCardSkeleton from "@/components/fecomerciors/ProductCard/Skeleton";

const numberOfSkeletons = 9;
const skeletons = Array.from({ length: numberOfSkeletons });

export default function FurnitureListSkeleton() {
  return (
    <div className="flex flex-wrap gap-8 justify-between">
      {skeletons.map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}
