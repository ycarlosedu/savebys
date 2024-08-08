import { Skeleton } from "@/components/Skeleton";

export default async function RecentDonatiosSkeleton() {
  return (
    <div className="bg-gray-secondary text-white self-start flex flex-col items-start gap-3 p-4 md:p-8 rounded-[32px] w-full md:w-1/2">
      <h2 className="font-semibold text-2xl md:text-4xl">Doações Recentes</h2>
      <div className="flex gap-6 p-4">
        <Skeleton className="w-[100px] h-[100px] bg-gray-primary rounded-lg"></Skeleton>
        <div className="flex flex-col gap-1">
          <Skeleton className="w-[220px] h-[24px] bg-gray-primary rounded-lg"></Skeleton>
          <Skeleton className="w-[100px] h-[24px] bg-gray-primary rounded-lg"></Skeleton>
        </div>
      </div>
      <Skeleton className="w-[220px] h-[24px] bg-gray-primary rounded-lg"></Skeleton>
    </div>
  );
}
