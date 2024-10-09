import Button from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/Skeleton";

import { CaretLeft } from "@phosphor-icons/react/dist/ssr";

export default function FurnitureDetailsSkeleton() {
  return (
    <section className="flex flex-col md:flex-row px-default justify-between gap-6 items-start w-full max-w-[1285px] min-h-fecomercio">
      <Skeleton className="w-full max-w-[625px] h-full max-h-[625px] rounded-xl aspect-square" />
      <div className="flex flex-col gap-6 w-full max-w-[515px]">
        <Button disabled className="link-btn-secondary px-8 w-fit h-[58px]">
          <CaretLeft size={16} />
          Voltar
        </Button>
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-1/2 h-8" />
        <Skeleton className="w-1/3 h-6" />
        <Skeleton className="w-1/3 h-6" />
        <Button disabled aria-disabled className="h-[58px]">
          Carregando...
        </Button>
      </div>
    </section>
  );
}
