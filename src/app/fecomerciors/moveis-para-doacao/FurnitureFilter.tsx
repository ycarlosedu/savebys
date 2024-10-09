"use client";
import Dropdown from "@/components/ui/Dropdown";
import useProductStore from "@/stores/productStore";

export default function FurnitureFilter() {
  const { resetFilters } = useProductStore();
  return (
    <div className="border-gray-primary border-2 text-white self-start items-start flex flex-col md:flex-row md:items-center min-w-fit gap-6 p-4 md:p-8 rounded-[32px]">
      <h2 className="font-semibold text-2xl md:text-4xl text-gray-secondary">
        Filtre os móveis
      </h2>
      <Dropdown.FilterFurniture />
      <button
        onClick={resetFilters}
        className="rounded-[30px] bg-white text-gray-dark border border-gray-dark font-bold text-sm flex gap-2 px-4 py-2"
      >
        Limpar Filtro
      </button>
    </div>
  );
}
