"use client";
import { useState } from "react";

import furnitureCategories from "@/app/fecomerciors/cadastro-movel/furnitureCategories";
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
  const [value, setValue] = useState(furnitureCategoriesWithAll[0].value);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          aria-label="Alterar Categoria do Móvel"
          className="rounded-[36px] flex items-center gap-2 p-2 border border-white/50 text-white"
        >
          <Desk size={24} />
          Categoria do Móvel
          <CaretDown size={18} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[100px] bg-white rounded-md p-1 shadow-2xl">
          <DropdownMenu.RadioGroup value={value} onValueChange={setValue}>
            {furnitureCategoriesWithAll.map((category) => (
              <DropdownMenu.RadioItem
                key={category.value}
                value={category.value}
                data-disabled={category.value === value}
                disabled={category.value === value}
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
