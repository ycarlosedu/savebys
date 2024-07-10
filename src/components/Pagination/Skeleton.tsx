import { Skeleton } from "@/components/Skeleton";

export default function PaginationSkeleton() {
  return (
    <div className="flex items-center justify-center gap-1">
      <Skeleton className="h-[40px] w-[40px] bg-gray-primary"></Skeleton>
      <Skeleton className="h-[40px] w-[40px] bg-gray-primary"></Skeleton>
      <Skeleton className="h-[40px] w-[40px] bg-gray-primary"></Skeleton>
      <Skeleton className="h-[40px] w-[40px] bg-gray-primary"></Skeleton>
      <Skeleton className="h-[40px] w-[40px] bg-gray-primary"></Skeleton>
      <Skeleton className="h-[40px] w-[100px] bg-gray-primary"></Skeleton>
    </div>
  );
}
