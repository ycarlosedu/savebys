"use client";
import Dropdown from "@/components/Dropdown";
import useProductStore from "@/stores/productStore";

export default function FurnitureFilter() {
  const { resetFilters } = useProductStore();
  return (
    <div className="bg-gray-secondary text-white self-start flex flex-col items-start gap-3 p-8 rounded-[32px]">
      <h2 className="font-semibold text-4xl">
        Escolha a área de atuação do negócio
      </h2>
      <Dropdown.FilterFurniture />
      <button
        onClick={resetFilters}
        className="rounded-[30px] bg-white text-gray-dark font-bold text-sm flex gap-2 px-4 py-2"
      >
        Limpar Filtro
      </button>
    </div>
  );
}
