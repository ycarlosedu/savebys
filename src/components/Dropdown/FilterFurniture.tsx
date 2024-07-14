"use client";

import furnitureCategories from "@/app/fecomerciors/cadastro-movel/furnitureCategories";
import useProductStore from "@/stores/productStore";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { CaretDown, Desk } from "@phosphor-icons/react/dist/ssr";

const furnitureCategoriesWithAll = [
  {
    name: "Todos",
    value: "Todos"
  },
  ...furnitureCategories
];

export default function FilterFurnitureDropdown() {
  const { filters, updateFilter } = useProductStore();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label="Alterar pesquisa por área de atuação"
          className="rounded-[36px] flex items-center gap-2 p-2 border border-white/50 text-white"
        >
          <Desk size={24} />
          Área de Atuação
          <CaretDown size={18} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[100px] bg-white rounded-md p-1 shadow-2xl">
          <DropdownMenu.RadioGroup
            value={filters.category}
            onValueChange={(value) => updateFilter("category", value)}
          >
            {furnitureCategoriesWithAll.map((category) => (
              <DropdownMenu.RadioItem
                key={category.value}
                value={category.value}
                data-disabled={category.value === filters.category}
                disabled={category.value === filters.category}
                className="flex items-center gap-4 text-base border-b border-gray-primary/50 text-gray-dark rounded-sm h-12 py-1 px-2 relative outline-none cursor-pointer hover:bg-gray-minimum data-disabled:bg-gray-secondary data-disabled:text-white data-disabled:cursor-default"
              >
                <div className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center">
                  <DropdownMenu.ItemIndicator className="flex items-center justify-center w-full h-full relative [&::after]:block [&::after]:w-3 [&::after]:h-3 [&::after]:rounded-[50%] [&::after]:bg-black [&::after]:content-['']" />
                </div>
                {category.name}
              </DropdownMenu.RadioItem>
            ))}
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
