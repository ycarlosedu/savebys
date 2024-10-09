import { ComponentProps } from "react";

import { Skeleton } from "@/components/ui/Skeleton";

import { cn } from "@/lib/utils";

type CardProps = ComponentProps<"div">;
function CardSkeleton({ className, ...props }: CardProps) {
  return (
    <div className={cn("flex gap-6 p-4 w-full", className)} {...props}>
      <Skeleton className="min-w-[100px] min-h-[100px] bg-gray-minimum rounded-lg"></Skeleton>
      <div className="flex flex-col gap-1 w-full">
        <Skeleton className="w-full max-w-[120px] md:max-w-[220px] h-[24px] bg-gray-minimum rounded-lg"></Skeleton>
        <Skeleton className="w-full max-w-[100px] h-[24px] bg-gray-minimum rounded-lg"></Skeleton>
      </div>
    </div>
  );
}

export default async function RecentDonatiosSkeleton() {
  return (
    <div className="bg-gray-primary text-white self-start flex flex-col items-start gap-3 p-4 md:p-8 rounded-[32px] w-full">
      <div className="flex items-center justify-between w-full">
        <h2 className="font-semibold text-2xl md:text-4xl">Doações Recentes</h2>
        {/* <Skeleton className="w-[174px] md:w-[300px] h-[56px] md:h-[32px] bg-gray-minimum rounded-lg"></Skeleton> */}
      </div>

      <div className="flex items-center w-full">
        <CardSkeleton />
        <CardSkeleton className="hidden md:flex" />
        <CardSkeleton className="hidden lg:flex" />
      </div>
    </div>
  );
}
