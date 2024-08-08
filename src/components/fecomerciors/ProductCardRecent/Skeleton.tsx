import { Skeleton } from "@/components/Skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      <Skeleton className="w-[300px] h-[260px] bg-gray-primary rounded-lg"></Skeleton>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center justify-between">
          <Skeleton className="w-[200px] h-[24px] bg-gray-primary"></Skeleton>
          <Skeleton className="w-[48px] h-[48px] bg-gray-primary"></Skeleton>
        </div>
        <Skeleton className="w-[200px] h-[20px] bg-gray-primary"></Skeleton>
      </div>
    </div>
  );
}
