"use client";
import furnitureCategories from "@/app/fecomerciors/cadastro-movel/furnitureCategories";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { CaretDown, Desk } from "@phosphor-icons/react/dist/ssr";

export default function FilterFurnitureDropdown() {
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
          {furnitureCategories.map((category) => (
            <DropdownMenu.Item
              key={category.value}
              // data-disabled={lang === locale.code}
              // disabled={lang === locale.code}
              className="text-sm border-b border-gray-primary/50 text-gray-dark rounded-sm h-12 py-1 px-2 relative outline-none cursor-pointer hover:bg-gray-primary data-disabled:bg-gray-secondary data-disabled:text-white data-disabled:cursor-default"
            >
              <button
                // data-disabled={lang === locale.code}
                className="flex gap-2 items-center h-full justify-between data-disabled:cursor-default"
              >
                {category.name}
              </button>
            </DropdownMenu.Item>
          ))}

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
